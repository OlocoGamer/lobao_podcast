const SUPABASE_URL = "https://rzgisiuxfccjkpbfqpge.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Qw4ctAqAtEQteCytcsuT1g_H8AQDovu";

const { createClient } = window.supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
