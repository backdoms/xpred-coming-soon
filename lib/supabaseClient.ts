import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kpwfswikeuppxnotfanq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwd2Zzd2lrZXVwcHhub3RmYW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMDE5NzgsImV4cCI6MjA5NDY3Nzk3OH0.MuYXDcZR8Z64jwbMPTfHR6JIgvj12exaUgvUYznHWVM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
