"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [images] = useState([
    "/images/bild1.jpg",
    "/images/bild2.jpg",
    "/images/bild3.jpg",
    "/images/bild4.jpg",
    "/images/bild5.jpg",
    "/images/bild6.jpg",
    "/images/bild7.jpg",
    "/images/bild8.jpg",
    "/images/bild9.jpg",
  ]);

  return (
    <section id="gallery" className="max-w-6xl mx-auto py-16 px-4">
      <h3 className="text-3xl font-bold mb-6 text-green-700 text-center md:text-left">
        Galerie
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Bild ${i + 1}`}
            className="rounded-xl w-full h-96 object-cover transform transition-transform duration-500 hover:scale-150"
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
}
