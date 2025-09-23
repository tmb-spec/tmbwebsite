"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    const { data, error } = await supabase.from("events").select("*").order("date");
    if (!error) setEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (id, field, value) => {
    setEvents(events.map(e => (e.id === id ? { ...e, [field]: value } : e)));
  };

  const handleSave = async (event) => {
    const { error } = await supabase
      .from("events")
      .update({
        title: event.title,
        date: event.date,
        location: event.location,
        description: event.description
      })
      .eq("id", event.id);
    if (error) alert("Fehler beim Speichern: " + error.message);
    else alert("Gespeichert!");
  };

  if (loading) return <p>Lädt...</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Events bearbeiten</h2>
      {events.map((event) => (
        <div key={event.id} className="mb-6 p-4 border rounded">
          <input
            type="text"
            value={event.title}
            onChange={(e) => handleChange(event.id, "title", e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="date"
            value={event.date}
            onChange={(e) => handleChange(event.id, "date", e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            value={event.location}
            onChange={(e) => handleChange(event.id, "location", e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            value={event.description}
            onChange={(e) => handleChange(event.id, "description", e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <button
            onClick={() => handleSave(event)}
            className="bg-[#98FFB5] px-4 py-2 rounded font-semibold hover:bg-green-400 transition"
          >
            Speichern
          </button>
        </div>
      ))}
    </div>
  );
}
