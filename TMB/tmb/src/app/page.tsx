"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import GallerySection from "../../components/GallerySection";
import TeamSection from "../../components/TeamSection"; // neu importiert

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans pt-16">
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* Galerie */}
      <GallerySection />

      {/* Team */}
      <TeamSection />

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
    </div>
  );
}
