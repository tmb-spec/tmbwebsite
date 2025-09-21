"use client";

import React from "react";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Cle",
      role: "Herr der Satzung / Schriftführer",
      description: "Bändiger der Worte & Wortdompteur",
      lighterColor: "xzy",
      image: "/member1.JPG",
      portrait: "/portrait1.JPG",
      links: ["🐦", "💼"]
    },
    {
      name: "Max",
      role: "Quästor & COC",
      description: "Finanzguru & Dämon der Nachtruhe",
      lighterColor: "zyx",
      image: "/member2.JPG",
      portrait: "/portrait2.JPG",
      links: ["🐦", "💼"]
    },
    {
      name: "Ulf",
      role: "CTO & IT-Support",
      description: "Chat-gpt wars.",
      lighterColor: "yxz",
      image: "/member3.JPG",
      portrait: "/portrait3.JPG",
      links: ["🐦", "💼"]
    }
  ];

  return (
    <section id="team" className="max-w-6xl mx-auto py-16 px-4">
      <h3 className="text-3xl font-bold mb-8 text-emerald-400 text-center">Die Bois</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
          >
            {/* Kreisbild */}
            <div className="w-40 h-40 mb-4 relative rounded-full overflow-hidden border-4 border-emerald-500">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <h4 className="font-bold text-2xl mb-1">{member.name}</h4>
            <p className="text-gray-500 text-sm mb-2">{member.role}</p>
            <p className="text-gray-700 text-sm mb-2">{member.description}</p>

            {/* Feuerzeugfarbe */}
            <p className="text-gray-500 text-xs mb-2">Feuerzeugfarbe: {member.lighterColor}</p>

            <div className="flex justify-center gap-4 mt-3">
              {member.links.map((link, idx) => (
                <a key={idx} href="#" className="text-emerald-400 hover:text-emerald-600">
                  {link}
                </a>
              ))}
            </div>

            {/* Spacer, damit Portraits auf gleicher Höhe starten */}
            <div className="flex-grow" />

            {/* Hochkant-Portrait */}
            <div className="w-full mt-4 relative rounded-xl overflow-hidden border-2 border-emerald-500" style={{ height: "300px" }}>
              <Image
                src={member.portrait}
                alt={`${member.name} Portrait`}
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
