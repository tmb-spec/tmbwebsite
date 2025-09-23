// lib/supabaseAdminClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Supabase URL oder Service Role Key fehlt!");
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
