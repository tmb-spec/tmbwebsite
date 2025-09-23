// src/app/admin/dashboard/page.jsx
import AdminDashboardClient from "./AdminDashboardClient";
import { supabaseAdmin } from "@/lib/supabaseAdminClient";

export const revalidate = 0; // immer aktuell bei jedem Request

export default async function AdminDashboardPage() {
  // Server Side: Events holen
  const { data: events, error } = await supabaseAdmin
    .from("events")
    .select("*")
    .order("date", { ascending: true });

  if (error) {
    console.error("Supabase Admin Error:", error);
  }

  return <AdminDashboardClient initialEvents={events || []} />;
}
