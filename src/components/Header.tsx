"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Galerie", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "Kontakt", href: "#contact" },
  ];

  const donateLink = "https://www.paypal.com/donate";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
        {/* Logo / Schriftzug */}
        <div className="text-black font-bold text-xl md:text-2xl mb-2 md:mb-0 text-center md:text-left">
          TassenMesserBande
        </div>

        {/* Desktop Navigation + Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 font-semibold hover:text-emerald-400 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Dezenter Admin-Button */}
          <button
            onClick={() => router.push("/admin/login")}
            className="bg-gray-200 text-gray-800 text-sm font-semibold py-1 px-3 rounded hover:bg-gray-300 transition"
          >
            Tassen Login
          </button>

          {/* Animate Donate Button */}
          <motion.a
            href={donateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-400 font-bold py-2 px-6 rounded-full shadow-lg border-2 border-emerald-400 hover:shadow-xl hover:bg-gray-100 transition text-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            Donate
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-center w-full">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-gray-800"
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-800 font-semibold hover:text-emerald-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Mobile Admin Button */}
              <li>
                <button
                  onClick={() => {
                    router.push("/admin/login");
                    setMenuOpen(false);
                  }}
                  className="w-full bg-gray-200 text-gray-800 text-sm font-semibold py-1 px-3 rounded hover:bg-gray-300 transition"
                >
                  Tassen Login
                </button>
              </li>

              {/* Mobile Donate Button */}
              <motion.li
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <a
                  href={donateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-emerald-400 font-bold py-2 px-6 rounded-full shadow-lg border-2 border-emerald-400 hover:shadow-xl hover:bg-gray-100 transition text-lg text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Donate
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
