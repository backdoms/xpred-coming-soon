import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kpwfswikeuppxnotfanq.supabase.co';
const supabaseAnonKey = 'sb_publishable_Ms2ryj2t-JHjIyAozb3uSg_n3dg6lfGB';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
