"use client";

import { useEffect } from "react";
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

export default function EventsSection() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Kompakte Übersicht ohne Karten */}
      <div className="max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Events & Termine</h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative py-4 border-t border-t-[#98FFB5] last:border-b last:border-b-[#98FFB5]"
            >
              {/* Titel mittig */}
              <span className="absolute left-1/2 transform -translate-x-1/2 bg-gray-50 px-3 font-semibold">
                {event.title}
              </span>

              {/* Datum und Ort */}
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
        {events.map(event => (
          <AnimatedEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

function AnimatedEventCard({ event }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

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
