// components/TeamSection.tsx
"use client";

import React from "react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Cle",
      role: "Herr der Satzung / Schriftführer",
      description: "Bändiger der Worte & Wortdompteur",
      image: "/member1.jpg",
      portrait: "/portrait1.jpg",
      links: ["🐦", "💼"]
    },
    {
      name: "Max",
      role: "Quästor & COC",
      description: "Finanzguru & Dämon der Nachtruhe",
      image: "/member2.jpg",
      portrait: "/portrait2.jpg",
      links: ["🐦", "💼"]
    },
    {
      name: "Ulf",
      role: "CTO (proudly)",
      description: "Chat-gpt wars.",
      image: "/member3.jpg",
      portrait: "/portrait3.jpg",
      links: ["🐦", "💼"]
    }
  ];

  return (
    <section id="team" className="max-w-6xl mx-auto py-16 px-4">
      <h3 className="text-3xl font-bold mb-8 text-green-700 text-center">Unser Team</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
          >
            {/* Kreisbild */}
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full mb-4 object-cover border-4 border-green-700"
            />
            <h4 className="font-bold text-2xl mb-1">{member.name}</h4>
            <p className="text-gray-500 text-sm mb-2">{member.role}</p>
            <p className="text-gray-700 text-sm">{member.description}</p>
            <div className="flex justify-center gap-4 mt-3">
              {member.links.map((link, idx) => (
                <a key={idx} href="#" className="text-green-700 hover:text-green-900">
                  {link}
                </a>
              ))}
            </div>

            {/* Spacer, damit Portraits auf gleicher Höhe starten */}
            <div className="flex-grow" />

            {/* Hochkant-Portrait */}
            <img
              src={member.portrait}
              alt={`${member.name} Portrait`}
              className="w-full mt-4 rounded-xl object-cover border-2 border-green-700"
              style={{ height: "300px" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
