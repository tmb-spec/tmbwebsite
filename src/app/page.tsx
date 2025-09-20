import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import TeamSection from "../components/TeamSection";
import HonorarySection from "../components/HonorarySection";
import SpecialAwardsSection from "../components/SpecialAwardsSection";
import ContactSection from "../components/ContactSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans pt-16">
      <Header />
      <Hero />
      <Gallery />
      <TeamSection />
      <HonorarySection />
      <SpecialAwardsSection />
      <ContactSection />
    </div>
  );
}
