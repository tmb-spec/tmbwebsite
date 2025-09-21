"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full flex flex-col md:flex-row items-center bg-gradient-to-br from-green-600 to-green-800 text-white h-auto md:h-64 py-12 md:py-0"
    >
      {/* Container mit Logo + Text */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png" // liegt im public-Ordner
            alt="Tassenmesserbande Logo"
            width={250}
            height={250}
            priority
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
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
      </div>
    </section>
  );
}
