"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type TabType = "broken" | "operations" | "legacy" | "profitability";

interface ProblemCard {
  number: string;
  title: string;
  opacity: number;
}

interface TabContent {
  image: string;
  cards: ProblemCard[];
}

const tabContent: Record<TabType, TabContent> = {
  broken: {
    image: "/challenges/broken.png",
    cards: [
      { number: "01", title: "Long Holds on Calls Navigating Your IVR, Waiting to Speak to Your Busy Agents", opacity: 0.4 },
      { number: "02", title: "Your Scheduling / Patient Support Teams Can Only Be Reached During Office Hours", opacity: 0.8 },
      { number: "03", title: "Language Gaps and Fragmented Communications", opacity: 0.7 },
      { number: "04", title: "Extremely Long Wait Times at Clinics", opacity: 0.4 },
    ],
  },

  operations: {
    image: "/challenges/challenges.png",
    cards: [
      { number: "01", title: "Scheduling & clinic front desk teams faced with staff shortages & high turnover", opacity: 0.4 },
      { number: "02", title: "Low referral to appointment conversion", opacity: 0.8 },
      { number: "03", title: "Challenges in getting compliance with new processes or workflows you put in place", opacity: 0.7 },
      { number: "04", title: "Constant demands to grow healthcare access", opacity: 0.4 },
    ],
  },

  legacy: {
    image: "/challenges/legacy.png",
    cards: [
      { number: "01", title: "Your IT teams have to maintain legacy non-automated systems without failures", opacity: 0.4 },
      { number: "02", title: "High manual effort across fax/inbox, referral triage, scheduling & patient intake", opacity: 0.8 },
      { number: "03", title: "Siloed data & resultant analytics challenges", opacity: 0.7 },
      { number: "04", title: "Unclear rules engine makes onboarding of new staff and training challenging", opacity: 0.4 },
    ],
  },

  profitability: {
    image: "/challenges/profitability.png",
    cards: [
      { number: "01", title: "Rising cost to serve with growing labor costs as a % of revenues", opacity: 0.4 },
      { number: "02", title: "Payer price pressure", opacity: 0.8 },
      { number: "03", title: "High capex / opex costs to transform or update legacy systems", opacity: 0.7 },
      { number: "04", title: "Pressure to deliver margin improvements", opacity: 0.4 },
    ],
  },
};

// Custom scrollbar classes
const scrollbarStyles = `
::-webkit-scrollbar {
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #f48024;
  border-radius: 10px;
}
`;

export default function Challenges() {
  const [activeTab, setActiveTab] = useState<TabType>("broken");

  const tabs = [
    { id: "broken" as TabType, label: "Broken Patient Experience" },
    { id: "operations" as TabType, label: "Operations Challenges" },
    { id: "legacy" as TabType, label: "Legacy Systems" },
    { id: "profitability" as TabType, label: "Pressures on Profitability" },
  ];

  const currentContent = tabContent[activeTab];
  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab);

  // Animation variants helper
  const getAnimationVariants = (elementIndex: number) => {
    const isTabEven = activeTabIndex % 2 === 0; // 0 (1st) & 2 (3rd) are even indices
    
    // Determine direction based on tab index
    // Even tabs: Slide Up (enter from bottom)
    // Odd tabs: Slide Down (enter from top)
    let direction = isTabEven ? "up" : "down";

    // For cards 03 and 04 (indices 2 and 3), flip the direction
    if (elementIndex >= 2) {
      direction = direction === "up" ? "down" : "up";
    }

    const yOffset = 20;

    return {
      initial: { 
        opacity: 0, 
        y: direction === "up" ? yOffset : -yOffset 
      },
      animate: { 
        opacity: 1, 
        y: 0 
      },
      exit: { 
        opacity: 0, 
        y: direction === "up" ? -yOffset : yOffset 
      }
    };
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center px-5 md:px-14 py-12 md:py-16 bg-white">
      <style>{scrollbarStyles}</style>

      <div className="relative z-10 w-full max-w-[1280px] flex flex-col gap-10 md:gap-12 items-center">

        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center w-full px-2">
          <div className="bg-[#fbfaf9] border border-[#d8d2ca] rounded-full px-4 py-2">
            <p className="text-sm font-medium text-[#414651]">What Problem Are We Focused On Solving</p>
          </div>

          <div className="max-w-[824px] flex flex-col gap-3">
            <h2 className="text-3xl md:text-5xl font-medium text-[#130f0c] leading-tight">
              The Challenges You Face Drives Us
            </h2>
            <p className="text-base md:text-lg text-[#717171]">
              As a Healthcare Provider, you are asked to deliver exceptional patient experience, improve operating efficiency, grow revenues & margins - all with fewer resources & legacy systems.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full flex flex-col items-center">
          <div className="bg-neutral-100 rounded-t-xl pt-3 px-3 w-full max-w-[1090px] overflow-x-auto">
            <div className="flex gap-2 md:gap-3 w-max mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 md:px-5 md:py-4 rounded-xl transition-all whitespace-nowrap
                    ${activeTab === tab.id ? "bg-white" : "bg-transparent hover:bg-white/50"}`}
                >
                  <p className={`font-medium text-base md:text-lg 
                      ${activeTab === tab.id ? "text-[#130f0c]" : "text-[rgba(19,15,12,0.7)]"}`}>
                    {tab.label}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Gradient Container */}
          <div
            className="rounded-3xl p-4 w-full relative overflow-hidden"
            style={{
              backgroundColor: "#F5F5F5",
              backgroundImage:
                "linear-gradient(154.93deg, #F5F5F5 31.11%, #FEF5D6 46.73%, #FFCC92 60.92%, #FFAB82 73.08%, rgba(255, 196, 167, 0.508) 89.82%, rgba(255, 255, 255, 0) 107.11%)",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-6">

              {/* LEFT IMAGE */}
              <div className="w-full rounded-3xl bg-white/80 overflow-hidden aspect-[1/1] md:aspect-[1/1] lg:aspect-auto lg:flex-1 lg:min-h-[600px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    {...getAnimationVariants(0)} // Image follows same logic as card 01/02 (index 0)
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentContent.image}
                      alt={activeTab}
                      fill
                      className="object-cover object-center"
                      priority={activeTab === "broken"}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* RIGHT CARDS */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentContent.cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-6 flex flex-col justify-between border border-white h-auto lg:h-[321px]"
                    style={{ backgroundColor: `rgba(255,255,255,${card.opacity})` }}
                  >
                    <p className="text-base text-[#423f3d]">{card.number}</p>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        {...getAnimationVariants(index)}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <p className="text-xl font-semibold text-[#130f0c] whitespace-pre-wrap">{card.title}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
