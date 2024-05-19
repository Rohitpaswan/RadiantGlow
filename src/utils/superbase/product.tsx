
import { createClient } from '@supabase/supabase-js';

// Ensure environment variables are correctly set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
console.log(process.env);

// Check if environment variables are defined
if (!supabaseUrl || !supabaseKey) {
    console.log("superbase not defined");
    
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl!, supabaseKey!);
