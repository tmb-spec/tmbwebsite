"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full flex flex-col md:flex-row items-center bg-gradient-to-br from-emerald-300 to-emerald-500 text-white h-auto md:h-[500px] py-16 md:py-0 overflow-hidden"
    >
      {/* Overlay Bild - volle Höhe des Hero nutzen */}
      <div className="absolute inset-0">
        <Image
          src="/overlay.png"
          alt="Overlay"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Container mit Logo + Text */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-40 px-6 md:px-12 w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Tassenmesserbande Logo"
            width={360}
            height={360}
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

          <p className="mt-6 text-base md:text-lg max-w-5xl mx-auto md:mx-0">
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
