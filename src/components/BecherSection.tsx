"use client";

import React from "react";
import Image from "next/image";

export default function BecherSection() {
  const becher = [
    {
      name: "Lena",
      title: "Wasserträgerin Junior",
      description: "Hat ihre ersten 10 Liter in den Bergen sicher transportiert.",
      image: "/becher1.JPG"
    },
    {
      name: "Tom",
      title: "Trailblazer",
      description: "Hat die schwierigsten Pfade der Tour ohne Hilfe gemeistert.",
      image: "/becher2.JPG"
    },
    {
      name: "Nina",
      title: "Bergflüsterin",
      description: "Kenne jeden Wanderweg wie ihre Westentasche.",
      image: "/becher3.JPG"
    }
  ];

  return (
    <section id="becher" className="max-w-6xl mx-auto py-16 px-4">
      <h3 className="text-3xl font-bold mb-2 text-green-700 text-center">Die Becher</h3>
      <p className="text-gray-600 mb-8 text-center">unsere Jüngsten</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {becher.map((member, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
          >
            {/* Kreisbild */}
            <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-green-700 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <h4 className="font-bold text-2xl mb-1">{member.name}</h4>
            <p className="text-gray-500 text-sm mb-2">{member.title}</p>
            <p className="text-gray-700 text-sm">{member.description}</p>

            {/* Spacer */}
            <div className="flex-grow" />
          </div>
        ))}
      </div>
    </section>
  );
}
