"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Dein Name"
        required
        className="p-4 border rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Deine E-Mail"
        required
        className="p-4 border rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Deine Nachricht"
        rows={4}
        required
        className="p-4 border rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      />
      <button
        type="submit"
        className="bg-green-700 text-white py-3 rounded-2xl hover:bg-green-800 transform hover:-translate-y-1 transition-all duration-300"
      >
        Absenden
      </button>
      {showSuccess && (
        <p className="text-green-700 font-bold mt-2">Danke für deine Nachricht!</p>
      )}
    </form>
  );
}
