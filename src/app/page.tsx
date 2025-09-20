"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [images] = useState([
    "https://deinserver.de/bild1.jpg",
    "https://deinserver.de/bild2.jpg",
    "https://deinserver.de/bild3.jpg",
    "https://deinserver.de/bild4.jpg",
    "https://deinserver.de/bild5.jpg",
    "https://deinserver.de/bild6.jpg"
  ]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowSuccess(false), 3500);
      } else {
        alert("Fehler beim Senden. Bitte probiere es nochmal.");
      }
    } catch {
      alert("Fehler beim Senden. Bitte probiere es nochmal.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header, Hero, About, Gallery unverändert */}

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-6 text-green-700">Kontakt</h3>
        <p className="mb-6">Hast du Interesse, mehr über uns zu erfahren oder Teil der Bande zu werden? Melde dich gerne!</p>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Dein Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-4 border rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Deine E-Mail"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-4 border rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <textarea
            name="message"
            placeholder="Deine Nachricht"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="p-4 border rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          ></textarea>
          <button type="submit" className="bg-green-700 text-white py-3 rounded-2xl hover:bg-green-800 transform hover:-translate-y-1 transition-all duration-300">
            Absenden
          </button>
        </form>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-auto text-center">
            <h4 className="text-green-700 text-xl font-bold mb-2">Danke für deine Nachricht!</h4>
            <p className="mb-2">Wir melden uns so bald wie möglich bei dir.</p>
          </motion.div>
        </div>
      )}

      {/* Footer unverändert */}
    </div>
  );
}
