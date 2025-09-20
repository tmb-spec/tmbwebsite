"use client";

import { useState } from "react";

interface ContactFormProps {
  onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onSuccess();
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Fehler beim Senden. Bitte probiere es nochmal.");
      }
    } catch {
      alert("Fehler beim Senden. Bitte probiere es nochmal.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
      <button
        type="submit"
        disabled={loading}
        className={`bg-green-700 text-white py-3 rounded-2xl transform transition-all duration-300 ${
          loading ? "opacity-60 cursor-not-allowed" : "hover:bg-green-800 hover:-translate-y-1"
        }`}
      >
        {loading ? "Senden..." : "Absenden"}
      </button>
    </form>
  );
}
