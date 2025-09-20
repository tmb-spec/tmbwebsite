"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";

export default function App() {
  const [images] = useState([
    "https://deinserver.de/bild1.jpg",
    "https://deinserver.de/bild2.jpg",
    "https://deinserver.de/bild3.jpg",
    "https://deinserver.de/bild4.jpg",
    "https://deinserver.de/bild5.jpg",
    "https://deinserver.de/bild6.jpg",
  ]);

  const [showSuccess, setShowSuccess] = useState(false);

  return (
<div className="min-h-screen bg-gray-100 text-gray-800 font-sans pt-16">
  {/* Header */}
  <Header />

{/* Hero mit Logo */}
<section
  id="home"
  className="relative w-full flex bg-gradient-to-br from-green-600 to-green-800 text-white h-64"
>
  {/* Logo links */}
  <div className="flex-shrink-0 h-full ml-20">
    <img
      src="/logo.png"
      alt="Logo Tassenmesserbande"
      className="h-full w-auto object-contain"
    />
  </div>

  {/* Text rechts */}
  <div className="flex-1 flex flex-col justify-center px-6 ml-16">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-extrabold mb-4 drop-shadow-lg text-center md:text-left"
    >
      Willkommen bei TMB
    </motion.h2>

    <p className="text-2xl max-w-4xl mx-auto drop-shadow-md text-center md:text-left">
      Abenteuer, Freundschaft und einfach mal Mensch sein.
    </p>

    <p className="mt-4 text-lg max-w-5xl mx-auto text-center md:text-left">
      Wir sind eine Gruppe leidenschaftlicher Bergsteiger & Outdoor-Enthusiasten, 
      die gerne neue Wege entdecken und Abenteuer erleben. Die Mission: gemeinsam die Natur erleben, wandern, kochen und unvergessliche Momente teilen.
    </p>

    <p className="mt-4 text-lg max-w-5xl mx-auto text-center md:text-left">
      Unser Name steht für das, was wir auf jeder Tour dabeihaben: eine Tasse, ein Messer und jede Menge Abenteuerlust.
    </p>

    {/* Button "Über uns" */}
    <div className="mt-6 text-center md:text-left">
      <a
        href="#team"
        className="bg-white text-green-700 font-bold py-2 px-6 rounded-2xl hover:bg-green-100 transition"
      >
        Über uns
      </a>
    </div>
  </div>
</section>

{/* Gallery */}
<section id="gallery" className="max-w-6xl mx-auto py-16 px-4">
  <h3 className="text-3xl font-bold mb-6 text-green-700">Galerie</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`Bild ${i + 1}`}
        className="rounded-xl shadow-md w-full object-cover"
      />
    ))}
  </div>
</section>

{/* Team / Steckbriefe */}
<section id="team" className="max-w-6xl mx-auto py-16 px-4">
  <h3 className="text-3xl font-bold mb-8 text-green-700 text-center">Unser Team</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Steckbrief 1 */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
      <img src="/member1.jpg" alt="Mitglied 1" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"/>
      <h4 className="font-bold text-xl mb-2">Name 1</h4>
      <p className="text-gray-700 text-sm">Kurze Beschreibung / Rolle</p>
    </div>

    {/* Steckbrief 2 */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
      <img src="/member2.jpg" alt="Mitglied 2" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"/>
      <h4 className="font-bold text-xl mb-2">Name 2</h4>
      <p className="text-gray-700 text-sm">Kurze Beschreibung / Rolle</p>
    </div>

    {/* Steckbrief 3 */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
      <img src="/member3.jpg" alt="Mitglied 3" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"/>
      <h4 className="font-bold text-xl mb-2">Name 3</h4>
      <p className="text-gray-700 text-sm">Kurze Beschreibung / Rolle</p>
    </div>
  </div>
</section>

  {/* Contact */}
  <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
    <ContactForm onSuccess={() => setShowSuccess(true)} />
  </section>

  {/* Success Modal */}
  <AnimatePresence>
    {showSuccess && (
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-auto text-center"
        >
          <h4 className="text-green-700 text-xl font-bold mb-2">
            Danke für deine Nachricht!
          </h4>
          <p className="mb-2">Wir melden uns so bald wie möglich bei dir.</p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* Footer */}
</div>
  );
}


