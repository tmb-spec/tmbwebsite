// components/DonateSection.tsx
"use client";

import React from "react";

export default function DonateSection() {
  const donateLink = "https://www.paypal.com/donate"; // hier später eigenen Link einfügen

  return (
    <section className="w-full py-16 bg-gray-100 flex justify-center items-center">
      <a
        href={donateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-emerald-400 font-bold text-2xl md:text-3xl py-4 px-10 md:px-16 rounded-full shadow-xl border-2 border-emerald-400 hover:bg-gray-100 transition transform hover:scale-105"
      >
        Donate
      </a>
    </section>
  );
}
