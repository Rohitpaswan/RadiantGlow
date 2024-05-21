import { createClient } from "@supabase/supabase-js";



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// Check if environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  console.log("superbase not defined");
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
