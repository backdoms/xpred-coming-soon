import { supabase } from './supabaseClient';

export interface WaitlistResponse {
  priority: number;
}

export async function submitToWaitlist(email: string): Promise<WaitlistResponse> {
  // Try to insert
  const { error: insertError } = await supabase.from('waitlist').insert([{ email }]);

  if (insertError && insertError.code !== '23505') {
    // Real error (not duplicate)
    throw new Error('Failed to join waitlist');
  }

  // Get position (works for both new and existing signups)
  const { data, error } = await supabase.rpc('get_waitlist_status', { email_input: email });

  if (error) {
    throw new Error('Failed to get waitlist status');
  }

  return {
    priority: data?.rank || 0,
  };
}
