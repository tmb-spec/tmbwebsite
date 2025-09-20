"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
      <h3 className="text-3xl font-bold mb-8 text-green-700 text-center">Kontakt</h3>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={() => setShowSuccess(true)}
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-2 border rounded"
        />

        <textarea
          name="message"
          placeholder="Nachricht"
          required
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-green-700 text-white p-2 rounded hover:bg-green-800"
        >
          Absenden
        </button>
      </form>

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
              <button
                className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                onClick={() => setShowSuccess(false)}
              >
                Schließen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
