
const SUPABASE_URL = "https://pmwvgnzbzyupdblbtzxr.supabase.co";
const SUPABASE_KEY = "sb_publishable_zXryB63eLKg4q3m-hB3gyg_cjAOzNls";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
console.log("Supabase client:", supabaseClient);