"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../../components/ContactForm";

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
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header, Hero, About unverändert */}

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

      {/* Footer unverändert */}
    </div>
  );
}
