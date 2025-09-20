"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-green-700 text-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">Tassenmesserbande</div>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-green-300">Home</a></li>
          <li><a href="#gallery" className="hover:text-green-300">Galerie</a></li>
          <li><a href="#team" className="hover:text-green-300">Team</a></li>
          <li><a href="#contact" className="hover:text-green-300">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}
