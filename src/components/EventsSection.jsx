"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const events = [
  {
    id: 1,
    date: "25.09.2025",
    title: "Bergwanderung",
    location: "Alpen",
    description: "Gemeinsame Wanderung mit Gipfelerlebnis und Picknick."
  },
  {
    id: 2,
    date: "10.10.2025",
    title: "Workshop Holzbau",
    location: "Hütte am Berg",
    description: "Lerne Basics zum nachhaltigen Hüttenbau."
  },
  {
    id: 3,
    date: "05.11.2025",
    title: "Herbstfest",
    location: "Vereinsheim",
    description: "Gemütliches Beisammensein mit Musik und Essen."
  },
];

// Hilfsfunktion: String -> Date (ohne Uhrzeit)
function parseDate(dateStr) {
  const [day, month, year] = dateStr.split(".");
  const d = new Date(`${year}-${month}-${day}`);
  d.setHours(0, 0, 0, 0); // auf Tagesanfang setzen
  return d;
}

// Hilfsfunktion: Heute ohne Uhrzeit
function getToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [today, setToday] = useState(getToday());

  // Aktualisiere "heute" einmal täglich nach Mitternacht
  useEffect(() => {
    const updateToday = () => setToday(getToday());

    // ms bis Mitternacht
    const midnight = new Date();
    midnight.setHours(24, 0, 5, 0); // 5 Sekunden nach Mitternacht
    const msUntilMidnight = midnight.getTime() - Date.now();

    const timeout = setTimeout(() => {
      updateToday();
      // danach alle 24h
      setInterval(updateToday, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);

    return () => clearTimeout(timeout);
  }, []);

  // Events aufteilen
  const upcomingEvents = events
    .filter(e => parseDate(e.date) >= today) // heute noch inklusive
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));

  const pastEvents = events
    .filter(e => parseDate(e.date) < today) // strikt kleiner
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const displayedEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Events & Termine</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === "upcoming"
                ? "bg-[#98FFB5] text-black"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Kommende Events
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === "past"
                ? "bg-[#98FFB5] text-black"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Vergangene Events
          </button>
        </div>

        {/* Kompakte Übersicht */}
        <div className="space-y-4">
          {displayedEvents.map((event) => (
            <div
              key={event.id}
              className="relative py-4 border-t border-t-[#98FFB5] last:border-b last:border-b-[#98FFB5]"
            >
              <span className="absolute left-1/2 transform -translate-x-1/2 bg-gray-50 px-3 font-semibold">
                {event.title}
              </span>
              <div className="flex justify-between">
                <span className="text-gray-500">{event.date}</span>
                <span className="text-gray-600">{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll-animierte Karten */}
      <div className="max-w-3xl mx-auto px-4 space-y-16">
        {displayedEvents.map(event => (
          <AnimatedEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

function AnimatedEventCard({ event }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1, transition: { duration: 0.5 } });
    } else {
      controls.start({ scale: 0.8, opacity: 0.5, transition: { duration: 0.5 } });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <p className="text-sm text-gray-500">{event.date}</p>
      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
      <p className="text-gray-700 mb-4">{event.location}</p>
      <p className="text-gray-600">{event.description}</p>
    </motion.div>
  );
}
