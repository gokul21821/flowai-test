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
import Head from "next/head";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
  <link rel="preload" as="image" href="/challenges/broken.png" />
  <link rel="preload" as="image" href="/challenges/challenges.png" />
  <link rel="preload" as="image" href="/challenges/legacy.png" />
  <link rel="preload" as="image" href="/challenges/profitability.png" />
</Head>

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
