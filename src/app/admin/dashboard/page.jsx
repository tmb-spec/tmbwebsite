"use server"; // Server Component

import { supabaseAdmin } from "../../../lib/supabaseAdminClient";

export default async function AdminDashboard() {
  // Events vom Server laden
  const { data: events, error } = await supabaseAdmin
    .from("events")
    .select("*")
    .order("date", { ascending: true });

  if (error) return <p className="text-red-500">Fehler: {error.message}</p>;

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded space-y-2 bg-white">
            <p className="font-semibold">{event.title}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
