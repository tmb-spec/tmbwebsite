// src/app/admin/dashboard/AdminDashboardClient.jsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminDashboardClient({ initialEvents }) {
  const [events, setEvents] = useState(initialEvents);
  const [loading, setLoading] = useState(!initialEvents.length);
  const [error, setError] = useState("");
  const router = useRouter();

  // Session prüfen
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push("/admin/login");
      }
    };
    checkAuth();
  }, [router]);

  // Event live updaten
  const updateEvent = async (id, field, value) => {
    const { error } = await supabase
      .from("events")
      .update({ [field]: value })
      .eq("id", id);
    if (error) setError(error.message);
    else loadEvents(); // nach Update neu laden
  };

  // Neues Event hinzufügen
  const addEvent = async () => {
    const { error } = await supabase
      .from("events")
      .insert({
        title: "Neues Event",
        date: new Date().toISOString().split("T")[0],
        location: "",
        description: "",
      });
    if (error) setError(error.message);
    else loadEvents();
  };

  // Event löschen
  const deleteEvent = async (id) => {
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) setError(error.message);
    else loadEvents();
  };

  // Events neu laden
  const loadEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: true });
    if (error) setError(error.message);
    else setEvents(data);
  };

  if (loading) return <p>Lade...</p>;

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={addEvent}
        className="bg-[#98FFB5] px-4 py-2 rounded font-semibold"
      >
        Neues Event
      </button>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded space-y-2 bg-white">
            <input
              type="text"
              value={event.title}
              onChange={(e) => updateEvent(event.id, "title", e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="date"
              value={event.date}
              onChange={(e) => updateEvent(event.id, "date", e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              value={event.location}
              onChange={(e) => updateEvent(event.id, "location", e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              value={event.description}
              onChange={(e) =>
                updateEvent(event.id, "description", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
            <button
              onClick={() => deleteEvent(event.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Löschen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
