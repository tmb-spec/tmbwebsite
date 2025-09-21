"use client";

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DonateSection from '../components/DonateSection';
import GallerySection from '../components/GallerySection';
import TeamSection from '../components/TeamSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans pt-16">
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* Donate Button */}
      <DonateSection />

      {/* Galerie */}
      <GallerySection />

      {/* Team */}
      <TeamSection />

    </div>
  );
}
