"use client";
import { motion } from "framer-motion";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Cle",
      role: "Herr der Satzung / Schriftführer",
      description: "Bändiger der Worte & Wortdompteur",
      img: "/member1.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Name 2",
      role: "Rolle 2",
      description: "Kurze Beschreibung über das Mitglied, seine Aufgaben oder Interessen.",
      img: "/member2.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Ulf",
      role: "CTO (proudly)",
      description: "Chat-gpt wars.",
      img: "/member3.jpg",
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <section id="team" className="max-w-6xl mx-auto py-16 px-4">
      <h3 className="text-3xl font-bold mb-8 text-green-700 text-center">Das Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-green-700"
            />
            <h4 className="font-bold text-2xl mb-1">{member.name}</h4>
            <p className="text-gray-500 text-sm mb-2">{member.role}</p>
            <p className="text-gray-700 text-sm">{member.description}</p>
            <div className="flex justify-center gap-4 mt-3">
              <a href={member.twitter} className="text-green-700 hover:text-green-900">🐦</a>
              <a href={member.linkedin} className="text-green-700 hover:text-green-900">💼</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
