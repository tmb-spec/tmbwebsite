"use client";

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import GallerySection from '../components/GallerySection';
import TeamSection from '../components/TeamSection';
import EhrenmitgliederSection from '../components/EhrenmitgliederSection';
import BecherSection from '../components/BecherSection';
import DonateSection from '../components/DonateSection';
import ToTopButton from '../components/ToTopButton';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans pt-16">
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* Galerie */}
      <GallerySection />

      {/* Team */}
      <TeamSection />

      {/* Ehrenmitglieder */}
      <EhrenmitgliederSection />  {/* NEU */}

      {/* Die Becher */}
      <BecherSection />

      {/* Donate Button */}
      <DonateSection />

      {/* To Top Button */}
      <ToTopButton />  {/* <- hier einbauen */}
    </div>
  );
}
