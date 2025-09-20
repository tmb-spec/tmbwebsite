"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";

export default function App() {
const [images] = useState([
  "/images/bild1.jpg",
  "/images/bild2.jpg",
  "/images/bild3.jpg",
  "/images/bild4.jpg",
  "/images/bild5.jpg",
  "/images/bild6.jpg",
  "/images/bild7.jpg",
  "/images/bild8.jpg",
  "/images/bild9.jpg"
]);

  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans pt-16">
      {/* Header */}
      <Header />

      {/* Hero mit Logo */}
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

      {/* Gallery */}
      <section id="gallery" className="max-w-6xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-6 text-green-700 text-center md:text-left">
    Galerie
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

{/* Team / Steckbriefe */}
<section id="team" className="max-w-6xl mx-auto py-16 px-4">
  <h3 className="text-3xl font-bold mb-8 text-green-700 text-center">Unser Team</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* Steckbrief 1 */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src="/member1.jpg"
        alt="Mitglied 1"
        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-green-700"
      />
      <h4 className="font-bold text-2xl mb-1">Cle</h4>
      <p className="text-gray-500 text-sm mb-2">Herr der Satzung / Schriftführer</p>
      <p className="text-gray-700 text-sm">Bändiger der Worte & Wortdompteur</p>
      <div className="flex justify-center gap-4 mt-3">
        <a href="#" className="text-green-700 hover:text-green-900">🐦</a>
        <a href="#" className="text-green-700 hover:text-green-900">💼</a>
      </div>
    </div>

    {/* Steckbrief 2 */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src="/member2.jpg"
        alt="Mitglied 2"
        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-green-700"
      />
      <h4 className="font-bold text-2xl mb-1">Name 2</h4>
      <p className="text-gray-500 text-sm mb-2">Rolle 2</p>
      <p className="text-gray-700 text-sm">Kurze Beschreibung über das Mitglied, seine Aufgaben oder Interessen.</p>
      <div className="flex justify-center gap-4 mt-3">
        <a href="#" className="text-green-700 hover:text-green-900">🐦</a>
        <a href="#" className="text-green-700 hover:text-green-900">💼</a>
      </div>
    </div>

    {/* Steckbrief 3 */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src="/member3.jpg"
        alt="Mitglied 3"
        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-green-700"
      />
      <h4 className="font-bold text-2xl mb-1">Ulf</h4>
      <p className="text-gray-500 text-sm mb-2">CTO (proudly)</p>
      <p className="text-gray-700 text-sm">Chat-gpt wars.</p>
      <div className="flex justify-center gap-4 mt-3">
        <a href="#" className="text-green-700 hover:text-green-900">🐦</a>
        <a href="#" className="text-green-700 hover:text-green-900">💼</a>
      </div>
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
