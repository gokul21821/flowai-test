"use client";

import React, { useState } from "react";
import Image from "next/image";

type CardType = "contextual" | "specialty" | "simulation";

interface NestedCard {
  title: string;
  items: string[];
}

interface CardContent {
  number: string;
  title: string;
  description: string;
  nestedCards?: NestedCard[];
  metrics?: {
    label: string;
    value: string;
  }[];
  hasGraph?: boolean;
}

const cardData: Record<CardType, CardContent> = {
  contextual: {
    number: "01",
    title: "Contextual Reasoning Engine",
    description:
      "FlowAI's proprietary Contextual Reasoning Engine transforms patient access management with intelligence that feels empathetic — not procedural.",
    nestedCards: [
      {
        title: "Knowledge Base",
        items: ["Policies", "Manuals", "FAQs", "Physician Directory"],
      },
      {
        title: "Enterprise Data",
        items: ["Payor Rates", "Self-Pay Rates", "Consent Forms"],
      },
      {
        title: "Context & Memory",
        items: ["Past Inter-actions", "Patient Preference"],
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
    description: "All agents, multi‑site rollout, custom policies and integrations.",
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
    setExpandedCard(expandedCard === cardType ? null : cardType);
  };

  const isExpanded = (cardType: CardType) => expandedCard === cardType;

  return (
    <div className="w-full flex flex-col gap-6 items-start mx-auto md:max-w-[1440px]">
      {/* Badge and Heading Section */}
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="bg-[#fbfaf9] border border-[#d8d2ca] border-solid rounded-[80px] px-4 py-2 inline-flex items-center">
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

      {/* Mobile/Tablet Layout (Zig-Zag Stack) - Visible up to lg */}
      <div className="flex lg:hidden flex-col gap-6 w-full">
        {/* Orange Gradient Container wrapping all cards */}
        <div
          className="flex flex-col gap-4 p-1 sm:p-2 rounded-[30px] w-full"
          style={{
            background:
              "linear-gradient(185.57deg, #FFFFFF -10.98%, #FEF5D6 16.67%, #FFCC92 41.79%, #FFAB82 63.31%, rgba(255, 196, 167, 0.508135) 92.94%, rgba(255, 255, 255, 0) 123.54%), #ECECEC",
          }}
        >
          {Object.entries(cardData).map(([key, data]) => (
            <div
              key={key}
              className="bg-white border border-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-8 sm:gap-10 min-h-[500px] sm:min-h-[600px] md:min-h-[650px] w-full"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <span className="font-semibold text-xl sm:text-2xl text-[#130F0C]">{data.number}</span>
                <h3 className="font-semibold text-2xl sm:text-3xl text-[#130F0C]">{data.title}</h3>
                <p className="text-[#717171] text-base sm:text-lg leading-relaxed">{data.description}</p>
              </div>

              {/* Nested Cards / Content */}
              <div className="flex flex-col w-full relative pb-20 sm:pb-8 md:pb-10 mt-4 sm:mt-6">
                {data.nestedCards && (
                  <div className="flex flex-col w-full items-center">
                    {data.nestedCards.map((card, index) => {
                      const zIndexClass = index === 0 ? "z-10" : index === 1 ? "z-20" : "z-30";
                      return (
                      <div
                        key={index}
                        className={`
                          bg-white border border-[#e3e3e3] rounded-2xl p-4 flex flex-col gap-3
                          shadow-sm w-[90%] max-w-[260px] sm:max-w-[280px]
                          ${index % 2 === 0 ? "self-start ml-2" : "self-end mr-2"}
                          ${index === 0 ? "mt-0" : index === 1 ? "-mt-6 sm:-mt-8" : "-mt-6 sm:-mt-8"}
                          relative ${zIndexClass}
                        `}
                      >
                        <div className="flex gap-2 items-center">
                          <div className="relative shrink-0 w-5 h-5">
                            <Image
                              src="/reasoning-engine/orange-circle.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-medium text-sm sm:text-base text-black">{card.title}</p>
                        </div>
                        <div className="bg-[#f4f4f4] p-3 rounded-lg">
                          {card.items.map((item, idx) => (
                            <p key={idx} className="text-xs sm:text-sm text-black/60 leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
                              • {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      );
                    })}
                  </div>
                )}

                {/* Simulation Metrics/Graph for Mobile */}
                {key === "simulation" && (
                  <div className="flex flex-col gap-4 w-full bg-white border border-[#e3e3e3] rounded-2xl p-4 sm:p-6">
                    <div className="w-full flex justify-center mb-4">
                      <Image
                        src="/reasoning-engine/customer-graph.svg"
                        alt="Customer Satisfaction Graph"
                        width={200}
                        height={60}
                        className="w-auto h-auto"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {data.metrics?.map((metric, idx) => (
                        <div key={idx} className="bg-white border border-[#e3e3e3] rounded-xl p-3 flex flex-col gap-1">
                          <p className="text-xs text-black/60">{metric.label}</p>
                          <p className="font-medium text-base text-black">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout (Accordion) - Hidden on mobile/tablet, visible on lg+ */}
      <div
        className="hidden lg:flex flex-wrap gap-[5px] items-center p-2 rounded-[30px] w-full max-w-[1440px]"
        style={{
          background:
            "linear-gradient(185.57deg, #FFFFFF -10.98%, #FEF5D6 16.67%, #FFCC92 41.79%, #FFAB82 63.31%, rgba(255, 196, 167, 0.508135) 92.94%, rgba(255, 255, 255, 0) 123.54%), #ECECEC",
        }}
      >
        {/* Card 1: Contextual Reasoning Engine */}
        <div
          className={`flex flex-col h-[520px] items-start justify-between p-6 rounded-3xl transition-all duration-300 ${
            isExpanded("contextual")
              ? "bg-white border border-white w-[600px] shrink-0"
              : "bg-white/70 border border-white flex-1 min-w-0 cursor-pointer hover:bg-white/80"
          }`}
          onClick={() => handleCardClick("contextual")}
        >
          <div className="flex flex-1 flex-col items-start justify-between w-full">
            {/* Number */}
            <div className="flex flex-col gap-3 items-start w-full">
              <p className="font-semibold text-xl leading-[1.4] text-[#130F0C] tracking-[-0.24px] w-full">
                {cardData.contextual.number}
              </p>
            </div>

            {/* Expanded Content */}
            {isExpanded("contextual") && (
              <div className="bg-white flex h-[279px] items-center overflow-hidden relative w-full">
                {/* Nested Card 1: Knowledge Base */}
                <div className="absolute left-[1px] top-[52px] bg-white border border-[#e3e3e3] border-solid flex flex-col gap-3 items-start px-3 py-3 rounded-2xl w-[180px]">
                  <div className="flex gap-2 items-start">
                    <div className="flex gap-2 items-center">
                      <div className="relative shrink-0 w-4 h-4">
                        <Image
                          src="/reasoning-engine/orange-circle.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </div>
                      <p className="font-medium text-sm leading-[1.4] text-black tracking-[-0.192px]">
                        {cardData.contextual.nestedCards![0].title}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f4f4f4] flex gap-2 items-start p-3 rounded-lg w-full">
                    <div className="flex flex-col gap-1 items-start">
                      {cardData.contextual.nestedCards![0].items.map((item, idx) => (
                        <p
                          key={idx}
                          className="font-normal text-xs leading-[18px] text-[rgba(0,0,0,0.6)] tracking-[-0.168px] whitespace-nowrap"
                        >
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Nested Card 2: Context & Memory */}
                <div className="absolute left-[185px] top-[52px] bg-white border border-[#e3e3e3] border-solid flex flex-col gap-3 items-start px-3 py-3 rounded-2xl w-[180px]">
                  <div className="flex gap-2 items-start">
                    <div className="flex gap-2 items-start">
                      <div className="flex gap-2 items-center">
                        <div className="relative shrink-0 w-4 h-4">
                          <Image
                            src="/reasoning-engine/orange-circle.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </div>
                        <p className="font-medium text-sm leading-[1.4] text-black tracking-[-0.192px]">
                          {cardData.contextual.nestedCards![2].title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f4f4f4] flex flex-col gap-1 items-start justify-center p-2 rounded-lg w-full">
                    <div className="flex flex-col gap-1 items-start">
                      {cardData.contextual.nestedCards![2].items.map((item, idx) => (
                        <p
                          key={idx}
                          className="font-normal text-xs leading-[18px] text-[rgba(0,0,0,0.6)] tracking-[-0.168px] whitespace-nowrap"
                        >
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Nested Card 3: Enterprise Data */}
                <div className="absolute left-[370px] top-[52px] bg-white border border-[#e3e3e3] border-solid flex flex-col gap-3 items-start px-3 py-3 rounded-2xl w-[180px]">
                  <div className="flex gap-2 items-start">
                    <div className="flex gap-2 items-start">
                      <div className="flex gap-2 items-center">
                        <div className="relative shrink-0 w-4 h-4">
                          <Image
                            src="/reasoning-engine/orange-circle.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </div>
                        <p className="font-medium text-sm leading-[1.4] text-black tracking-[-0.192px]">
                          {cardData.contextual.nestedCards![1].title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f4f4f4] flex flex-col gap-1 items-start justify-center p-2 rounded-lg w-full">
                    <div className="flex flex-col gap-1 items-start">
                      {cardData.contextual.nestedCards![1].items.map((item, idx) => (
                        <p
                          key={idx}
                          className="font-normal text-xs leading-[18px] text-[rgba(0,0,0,0.6)] tracking-[-0.168px] whitespace-nowrap"
                        >
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Title and Description */}
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-semibold text-base leading-[28px] text-[#130F0C] w-full">
                {cardData.contextual.title}
              </p>
              <p className="font-normal text-xs leading-6 text-[#717171] w-full">
                {cardData.contextual.description}
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Specialty-Specific Workflows */}
        <button
          className={`flex flex-col h-[520px] items-start justify-between p-6 rounded-3xl transition-all duration-300 ${
            isExpanded("specialty")
              ? "bg-white border border-white w-[600px] shrink-0"
              : "bg-white/70 border border-white flex-1 min-w-0 cursor-pointer hover:bg-white/80"
          }`}
          onClick={() => handleCardClick("specialty")}
        >
          <div className="flex flex-1 flex-col items-start justify-between w-full">
            {/* Number */}
            <div className="flex flex-col gap-3 items-start w-full">
              <p className="font-semibold text-xl leading-[1.4] text-[#130F0C] tracking-[-0.24px] w-full">
                {cardData.specialty.number}
              </p>
            </div>

            {/* Expanded Content */}
            {isExpanded("specialty") && (
              <div className="flex h-[279px] items-center justify-center overflow-hidden relative w-full">
                {/* Nested Cards */}
                <div className="absolute left-[1px] top-[42.5px] bg-white border border-[#e3e3e3] border-solid flex flex-col gap-3 items-start px-3 py-3 rounded-[20px] w-[180px]">
                  <div className="flex gap-2 items-start">
                    <div className="flex gap-2 items-center">
                      <div className="relative shrink-0 w-4 h-4">
                        <Image
                          src="/reasoning-engine/orange-circle.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </div>
                      <p className="font-medium text-sm leading-[1.4] text-black tracking-[-0.192px]">
                        {cardData.specialty.nestedCards![0].title}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f4f4f4] flex flex-col gap-1 items-start justify-center p-2 rounded-lg w-full">
                    <div className="flex flex-col gap-1 items-start">
                      {cardData.specialty.nestedCards![0].items.map((item, idx) => (
                        <p
                          key={idx}
                          className="font-normal text-xs leading-[18px] text-[rgba(0,0,0,0.6)] tracking-[-0.168px] whitespace-nowrap"
                        >
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-[185px] top-[42.5px] bg-white border border-[#e3e3e3] border-solid flex flex-col gap-3 items-start px-3 py-3 rounded-[20px] w-[180px]">
                  <div className="flex gap-2 items-start">
                    <div className="flex gap-2 items-center">
                      <div className="relative shrink-0 w-4 h-4">
                        <Image
                          src="/reasoning-engine/orange-circle.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </div>
                      <p className="font-medium text-sm leading-[1.4] text-black tracking-[-0.192px]">
                        {cardData.specialty.nestedCards![1].title}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f4f4f4] flex flex-col gap-1 items-start justify-center p-2 rounded-lg w-full">
                    <div className="flex flex-col gap-1 items-start">
                      {cardData.specialty.nestedCards![1].items.map((item, idx) => (
                        <p
                          key={idx}
                          className="font-normal text-xs leading-[18px] text-[rgba(0,0,0,0.6)] tracking-[-0.168px] whitespace-nowrap"
                        >
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-[370px] top-[42.5px] bg-white border border-[#e3e3e3] border-solid flex flex-col gap-3 items-start px-3 py-3 rounded-[20px] w-[180px]">
                  <div className="flex gap-2 items-start">
                    <div className="flex gap-2 items-center">
                      <div className="relative shrink-0 w-4 h-4">
                        <Image
                          src="/reasoning-engine/orange-circle.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </div>
                      <p className="font-medium text-sm leading-[1.4] text-black tracking-[-0.192px]">
                        {cardData.specialty.nestedCards![2].title}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f4f4f4] flex flex-col gap-1 items-start justify-center p-2 rounded-lg w-full">
                    <div className="flex flex-col gap-1 items-start">
                      {cardData.specialty.nestedCards![2].items.map((item, idx) => (
                        <p
                          key={idx}
                          className="font-normal text-xs leading-[18px] text-[rgba(0,0,0,0.6)] tracking-[-0.168px] whitespace-nowrap"
                        >
                          • {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Title and Description */}
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-semibold text-base leading-[28px] text-[#130F0C] w-full">
                {cardData.specialty.title}
              </p>
              <p className="font-normal text-xs leading-6 text-[#423F3D] w-full">
                {cardData.specialty.description}
              </p>
            </div>
          </div>
        </button>

        {/* Card 3: Patient Simulation Framework */}
        <div
          className={`flex flex-col h-[520px] items-start justify-between p-6 rounded-3xl transition-all duration-300 ${
            isExpanded("simulation")
              ? "bg-white border border-white w-[600px] shrink-0"
              : "bg-white/70 border border-white flex-1 min-w-0 cursor-pointer hover:bg-white/80"
          }`}
          onClick={() => handleCardClick("simulation")}
        >
          <div className="flex flex-1 flex-col items-start justify-between w-full">
            {/* Number */}
            <div className="flex flex-col gap-3 items-start w-full">
              <p className="font-semibold text-xl leading-[1.4] text-[#130F0C] tracking-[-0.24px] w-full">
                {cardData.simulation.number}
              </p>
            </div>

            {/* Expanded Content */}
            {isExpanded("simulation") && (
              <div className="bg-white flex h-[279px] items-center overflow-hidden relative w-full">
                {/* Graph Card */}
                <div className="absolute left-[180px] top-[70px] flex items-center justify-center">
                  <div className="h-[125px] relative shrink-0 w-[200px]">
                    <Image
                      src="/reasoning-engine/customer-graph.svg"
                      alt="Customer Satisfaction Graph"
                      width={200}
                      height={60}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="absolute left-[10px] top-[86px] bg-white border border-[#e3e3e3] border-solid flex flex-col gap-1 items-start leading-[1.4] px-4 py-5 rounded-xl">
                  <p className="font-normal text-sm text-[rgba(0,0,0,0.6)] tracking-[-0.168px]">
                    {cardData.simulation.metrics![0].label}
                  </p>
                  <p className="font-medium text-xl text-black tracking-[-0.24px]">
                    {cardData.simulation.metrics![0].value}
                  </p>
                </div>

                <div className="absolute left-[385px] top-[86px] bg-white border border-[#e3e3e3] border-solid flex flex-col gap-1 items-start leading-[1.4] px-4 py-5 rounded-xl">
                  <p className="font-normal text-sm text-[rgba(0,0,0,0.6)] tracking-[-0.168px]">
                    {cardData.simulation.metrics![1].label}
                  </p>
                  <p className="font-medium text-xl text-black tracking-[-0.24px]">
                    {cardData.simulation.metrics![1].value}
                  </p>
                </div>
              </div>
            )}

            {/* Title and Description */}
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-semibold text-base leading-[28px] text-[#130F0C] w-full">
                {cardData.simulation.title}
              </p>
              <p className="font-normal text-xs leading-6 text-[#423F3D] w-full">
                {cardData.simulation.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
