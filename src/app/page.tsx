"use client";

import { useState, useRef } from "react";
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
  const formRef = useRef<HTMLFormElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      fetch("/", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/x-www-form-urlencoded" },
      })
        .then(() => {
          setShowSuccess(true);
          (form as HTMLFormElement).reset();
          setTimeout(() => setShowSuccess(false), 3500);
        })
        .catch(() => alert("Fehler beim Senden. Bitte probiere es nochmal."));
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50 w-full">
        <nav className="w-full flex justify-between items-center p-4 bg-white">
          <div className="flex-1 text-left">
            <h1 className="text-2xl font-bold text-gray-800">Tassen-Messer-Bande (TMB)</h1>
          </div>
          <div className="flex-1 text-right space-x-6">
            <a href="#home" className="text-gray-800 hover:text-green-700 transition-colors">Home</a>
            <a href="#about" className="text-gray-800 hover:text-green-700 transition-colors">Über uns</a>
            <a href="#gallery" className="text-gray-800 hover:text-green-700 transition-colors">Galerie</a>
            <a href="#contact" className="text-gray-800 hover:text-green-700 transition-colors">Kontakt</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-24 text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Willkommen bei der Tassen-Messer-Bande!
        </motion.h2>
        <p className="text-lg max-w-2xl mx-auto drop-shadow-md">
          Abenteuer, Freundschaft und Outdoor-Leben – das ist unser Verein.
        </p>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-6 text-green-700">Über uns</h3>
        <p className="leading-relaxed">
          Wir sind eine Gruppe von Outdoor-Enthusiasten, die gemeinsam die Natur erleben,
          wandern, kochen und unvergessliche Momente teilen. Unser Name steht für das,
          was wir auf jeder Tour dabeihaben: eine Tasse, ein Messer und jede Menge
          Abenteuerlust.
        </p>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-gray-50 py-16 px-4">
        <h3 className="text-3xl font-bold mb-8 text-center text-green-700">Galerie</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, idx) => (
            <motion.img key={idx} src={src} alt={`Gallery ${idx}`} className="w-full h-60 object-cover rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300" whileHover={{ scale: 1.08, rotate: 1 }} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-6 text-green-700">Kontakt</h3>
        <p className="mb-6">Hast du Interesse, mehr über uns zu erfahren oder Teil der Bande zu werden? Melde dich gerne!</p>
        <form
          ref={formRef}
          name="Kontakt"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="grid gap-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="Kontakt" />
          <p hidden>
            <label>Nicht ausfüllen (Spam-Schutz): <input name="bot-field" /></label>
          </p>
          <input type="text" name="name" placeholder="Dein Name" required className="p-4 border rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition" />
          <input type="email" name="email" placeholder="Deine E-Mail" required className="p-4 border rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition" />
          <textarea name="message" placeholder="Deine Nachricht" rows={4} required className="p-4 border rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"></textarea>
          <button type="submit" className="bg-green-700 text-white py-3 rounded-2xl hover:bg-green-800 transform hover:-translate-y-1 transition-all duration-300">Absenden</button>
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

      {/* Footer */}
      <footer className="bg-green-800 border-t mt-10 py-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Tassen-Messer-Bande (TMB). Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}


