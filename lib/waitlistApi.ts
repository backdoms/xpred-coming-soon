const WAITLIST_ID = 22531; // Replace with your GetWaitlist.com waitlist ID

interface WaitlistSignupResponse {
  email: string;
  priority: number;
  referral_link: string;
  referral_token: string;
  uuid: string;
  created_at: string;
  amount_referred: number;
}

export async function submitToWaitlist(email: string): Promise<WaitlistSignupResponse> {
  const response = await fetch('https://api.getwaitlist.com/api/v1/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      waitlist_id: WAITLIST_ID,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to join waitlist');
  }

  return response.json();
}

export async function getWaitlistStatus(email: string): Promise<WaitlistSignupResponse | null> {
  const response = await fetch(
    `https://api.getwaitlist.com/api/v1/signup?waitlist_id=${WAITLIST_ID}&email=${encodeURIComponent(email)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}
