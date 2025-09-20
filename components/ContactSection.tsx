"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm"; // Hier nur ContactForm importieren

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
      <ContactForm onSuccess={() => setShowSuccess(true)} />

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
    </section>
  );
}
