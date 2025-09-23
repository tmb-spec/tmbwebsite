"use client"; // wichtig für Client Components

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_URL oder NEXT_PUBLIC_SUPABASE_ANON_KEY fehlt! " +
    "Bitte überprüfe deine .env.local oder die Environment Variables auf Vercel."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
