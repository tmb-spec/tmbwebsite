"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white text-gray-800 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Titel */}
        <div className="text-2xl font-bold">Tassenmesserbande</div>

        {/* Navigation */}
        <nav className="space-x-6">
          <a
            href="#about"
            className="hover:text-green-700 transition-colors duration-300"
          >
            Über uns
          </a>
          <a
            href="#gallery"
            className="hover:text-green-700 transition-colors duration-300"
          >
            Galerie
          </a>
          <a
            href="#contact"
            className="hover:text-green-700 transition-colors duration-300"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}