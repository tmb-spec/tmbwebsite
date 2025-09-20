"use client";

export default function Header() {
  return (
    <header className="bg-green-700 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Titel */}
        <div className="text-2xl font-bold">Tassenmesserbande</div>

        {/* Navigation */}
        <nav className="space-x-6">
          <a
            href="#gallery"
            className="hover:text-green-200 transition-colors duration-300"
          >
            Galerie
          </a>
          <a
            href="#contact"
            className="hover:text-green-200 transition-colors duration-300"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}