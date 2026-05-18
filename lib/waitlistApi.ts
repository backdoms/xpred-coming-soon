import { supabase } from './supabaseClient';

export interface WaitlistResponse {
  priority: number;
}

export async function submitToWaitlist(email: string): Promise<WaitlistResponse> {
  // Try to insert
  const { error: insertError } = await supabase.from('waitlist').insert([{ email }]);

  if (insertError) {
    // If duplicate email, still count as success
    if (insertError.code === '23505') {
      // Get their position
      const { count } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });
      
      return { priority: count || 0 };
    }
    console.error('Waitlist insert error:', insertError);
    throw new Error('Failed to join waitlist');
  }

  // Get total count as position
  const { count } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true });

  return {
    priority: count || 0,
  };
}
