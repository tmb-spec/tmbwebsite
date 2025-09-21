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
        className="bg-white text-green-700 font-bold text-2xl md:text-3xl py-4 px-10 md:px-16 rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        Donate
      </a>
    </section>
  );
}
