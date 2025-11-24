"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ReasoningCard, {
  CardType,
  CardContent,
} from "./ReasoningCard"; // Adjust path as needed

// --- Configuration Data ---

const cardData: Record<CardType, CardContent> = {
  contextual: {
    number: "01",
    title: "Contextual Reasoning Engine",
    description:
      "Flow AI's proprietary Contextual Reasoning Engine transforms patient access management with intelligence that feels empathetic — not procedural.",
    nestedCards: [
      {
        title: "Knowledge Base",
        items: ["Policies", "Manuals", "FAQs", "Physician Directory"],
      },
      {
        title: "Context & Memory",
        items: ["Past Inter-actions", "Patient Preference"],
      },
      {
        title: "Enterprise Data",
        items: ["Payor Rates", "Self-Pay Rates", "Consent Forms"],
      },
    ],
  },
  specialty: {
    number: "02",
    title: "Specialty-Specific Workflows",
    description: "Add Support AI and Intake AI, analytics included.",
    nestedCards: [
      {
        title: "Cardiology",
        items: ["Patient Screening Form", "Risk Assessment", "Treatment Plans"],
      },
      {
        title: "Orthopedics",
        items: ["Initial Assessment", "Pre-Operative Screening", "Patient Intake"],
      },
      {
        title: "Radiology",
        items: ["Patient Screening Form", "Patient Intake", "Scan Requirements"],
      },
    ],
  },
  simulation: {
    number: "03",
    title: "Patient Simulation Framework",
    description:
      "All agents, multi‑site rollout, custom policies and integrations.",
    metrics: [
      { label: "Average Handle Time", value: "6m 24s" },
      { label: "Customer CSAT", value: "4.6" },
    ],
    hasGraph: true,
  },
};

export default function FlowAIReasoningEngine() {
  const [expandedCard, setExpandedCard] = useState<CardType | null>("contextual");

  const handleCardClick = (cardType: CardType) => {
    // Toggle logic: if clicking active, close it (or keep open depending on UX pref)
    // Here we implement toggle-off capability
    setExpandedCard(expandedCard === cardType ? null : cardType);
  };

  return (
    <div className="w-full flex flex-col gap-6 items-start mx-auto md:max-w-[1440px]">
      
      {/* Badge and Heading Section */}
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="bg-[#fbfaf9] border border-[#d8d2ca] rounded-[80px] px-4 py-2 inline-flex items-center">
          <p className="font-medium text-sm leading-5 text-[#414651] text-center">
            How Emily Works
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center text-center max-w-[824px]">
          <h2 className="font-medium text-3xl md:text-5xl leading-tight md:leading-[60px] text-[#130F0C] tracking-[-0.96px]">
            Flow AI's Reasoning Engine
          </h2>
          <p className="font-normal text-base md:text-lg leading-[26px] text-[#717171] max-w-[806px]">
            Centralize your tools for improved productivity and efficiency
          </p>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Vertical Stack */}
      <div className="flex lg:hidden flex-col gap-6 w-full">
        <div
          className="flex flex-col gap-4 p-1 sm:p-2 rounded-[30px] w-full"
          style={{
            background:
              "linear-gradient(185.57deg, #FFFFFF -10.98%, #FEF5D6 16.67%, #FFCC92 41.79%, #FFAB82 63.31%, rgba(255, 196, 167, 0.508135) 92.94%, rgba(255, 255, 255, 0) 123.54%), #ECECEC",
          }}
        >
          {Object.entries(cardData).map(([key, data]) => (
            <ReasoningCard
              key={key}
              data={data}
              variant="mobile"
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout - Horizontal Accordion */}
      <div
        className="hidden lg:flex flex-wrap gap-[5px] items-center p-2 rounded-[30px] w-full max-w-[1440px]"
        style={{
          background:
            "linear-gradient(185.57deg, #FFFFFF -10.98%, #FEF5D6 16.67%, #FFCC92 41.79%, #FFAB82 63.31%, rgba(255, 196, 167, 0.508135) 92.94%, rgba(255, 255, 255, 0) 123.54%), #ECECEC",
        }}
      >
        {(Object.keys(cardData) as CardType[]).map((key) => {
          const isActive = expandedCard === key;
          return (
            <motion.div
              key={key}
              layout
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={
                isActive
                  ? "w-[58%] shrink-0"
                  : "flex-1 min-w-0"
              }
            >
              <ReasoningCard
                data={cardData[key]}
                variant="desktop"
                isActive={isActive}
                onClick={() => handleCardClick(key)}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
