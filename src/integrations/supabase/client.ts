import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nwihftegillpqrhxlatl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53aWhmdGVnaWxscHFyaHhsYXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwMTk1NTMsImV4cCI6MjA1MjU5NTU1M30.fxukJq7eJ0US_oYxFuoYOappxUNs47WEC5GkZGuNRRQ";

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);