"use client";

import React from "react";
import Image from "next/image";

export default function EhrenmitgliederSection() {
  const ehrenmitglieder = [
    {
      name: "Armin",
      badge: "Lord der Lasten",
      description: "Egal ob 40l Wasser oder ganze Menschen",
      image: "/ehrenmember1.JPG",
      badgeImage: "/ehrenbadge1.png",
    },
    {
      name: "Anna Beispiel",
      badge: "🎖️",
      description: "Hat die längste Wanderung geschafft",
      image: "/ehrenmember2.JPG",
      badgeImage: "/ehrenbadge2.png",
    },
    {
      name: "Ulf Muster",
      badge: "🥇",
      description: "Hat die härteste Challenge gemeistert",
      image: "/ehrenmember3.JPG",
      badgeImage: "/ehrenbadge3.png",
    },
  ];

  return (
    <section id="ehrenmitglieder" className="max-w-6xl mx-auto py-16 px-4">
      <h3 className="text-3xl font-bold mb-2 text-green-700 text-center">
        Die Ehrenmitglieder
      </h3>
      <p className="text-gray-600 mb-8 text-center">
        Ehrung für heftige Krassheit
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ehrenmitglieder.map((member, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
          >
            {/* Rundes Profilbild */}
            <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-green-700 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Name */}
            <h4 className="font-bold text-2xl mb-1">{member.name}</h4>

            {/* Abzeichen als Emoji */}
            <p className="text-gray-700 text-xl mb-1">{member.badge}</p>

            {/* Beschreibung */}
            <p className="text-gray-700 text-sm mb-4">{member.description}</p>

            {/* Platz für Abzeichen-Grafik */}
            <div className="w-full mt-4 relative rounded-xl overflow-hidden border-2 border-green-700" style={{ height: "300px" }}>
              <Image
                src={member.badgeImage}
                alt={`${member.name} Abzeichen`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
