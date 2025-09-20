"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full flex flex-col md:flex-row items-center bg-gradient-to-br from-green-600 to-green-800 text-white h-auto md:h-64 py-12 md:py-0"
    >
      {/* Logo links */}
      <div className="flex-shrink-0 h-40 md:h-full md:ml-20 mb-6 md:mb-0 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Logo Tassenmesserbande"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Text rechts */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
        >
          einfach mal Mensch sein.
        </motion.h2>

        <p className="text-xl md:text-2xl max-w-4xl mx-auto md:mx-0 drop-shadow-md">
          Die Berge seien hoch, die Messer scharf und die Tassen tief!
        </p>

        <p className="mt-4 text-base md:text-lg max-w-5xl mx-auto md:mx-0">
          Wir sind eine Gruppe leidenschaftlicher Bergsteiger & Outdoor-Enthusiasten, 
          die gerne neue Wege entdecken und Abenteuer erleben. Die Mission: gemeinsam die Natur erleben, wandern, kochen und unvergessliche Momente teilen.
        </p>

        <p className="mt-4 text-base md:text-lg max-w-5xl mx-auto md:mx-0">
          Unser Name steht für das, was wir auf jeder Tour dabeihaben: eine Tasse, ein Messer und jede Menge Abenteuerlust.
        </p>
      </div>
    </section>
  );
}
