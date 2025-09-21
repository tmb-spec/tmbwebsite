// components/GallerySection.tsx
"use client";

import React from "react";

export default function GallerySection() {
  // Bilder direkt hier definieren
  const images = [
    "/images/bild1.jpg",
    "/images/bild2.jpg",
    "/images/bild3.jpg",
    "/images/bild4.jpg",
    "/images/bild5.jpg",
    "/images/bild6.jpg",
    "/images/bild7.jpg",
    "/images/bild8.jpg",
    "/images/bild9.jpg"
  ];

  return (
    <section id="gallery" className="max-w-6xl mx-auto py-16 px-4">
      <h3 className="text-3xl font-bold mb-6 text-emerald-400 text-center md:text-left">
        Epos in den Bergen
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Bild ${i + 1}`}
            className="rounded-xl w-full h-96 object-cover transform transition-transform duration-500 hover:scale-150"
          />
        ))}
      </div>
    </section>
  );
}
