import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Challenges from "@/components/sections/Challenges";
import MeetEmily from "@/components/sections/MeetEmily";
import ReasoningEngine from "@/components/sections/ReasoningEngine";
import Results from "@/components/sections/Results";
import TrustCenter from "@/components/sections/TrustCenter";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[94px]">
        <Hero />
        <Challenges />
        <MeetEmily />
        <ReasoningEngine />
        <Results />
        <TrustCenter />
        <FAQ />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
