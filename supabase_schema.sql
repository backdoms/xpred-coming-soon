-- Create the waitlist table
create table if not exists public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.waitlist enable row level security;

-- Policy to allow inserting emails (public)
create policy "Allow public insert"
  on public.waitlist
  for insert
  with check (true);

-- Policy to allow reading count (anon/public needs to know total count)
create policy "Allow public select"
  on public.waitlist
  for select
  using (true);

-- Create the RPC function to get rank and status
create or replace function public.get_waitlist_status(email_input text)
returns json
language plpgsql
security definer
as $$
declare
  user_rank bigint;
  total_count bigint;
  is_waitlisted boolean;
  result json;
begin
  -- Check if email exists
  select exists(select 1 from public.waitlist where email = email_input) into is_waitlisted;

  -- Get total count
  select count(*) into total_count from public.waitlist;

  if is_waitlisted then
    -- Calculate rank (how many people joined before or at the same time)
    select count(*) into user_rank 
    from public.waitlist 
    where created_at <= (select created_at from public.waitlist where email = email_input);
  else
    user_rank := 0;
  end if;

  result := json_build_object(
    'is_waitlisted', is_waitlisted,
    'rank', user_rank,
    'total', total_count
  );

  return result;
end;
$$;
