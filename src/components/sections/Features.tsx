"use client";

import React from "react";
import Image from "next/image";

const featuresData = [
  {
    title: "We are outcome‑first",
    description:
      "not channel‑first. For us it is not just about chat bots or voice agents. What matters most to us is the outcomes we deliver to you to achieve your objectives.",
    opacity: "bg-[rgba(255,255,255,0.4)]",
  },
  {
    title: "We drive end‑to‑end workflow efficiency",
    description:
      "Healthcare and Agentic AI are filled with point solutions. What matters most to us is to enable you to transform end-to-end of your patient access workflow to achieve true operating efficiency.",
    opacity: "bg-[rgba(255,255,255,0.8)]",
  },
  {
    title: "We ensure 100% trust and guard‑railed automation",
    description:
      "We follow your policy & rule packs; human‑in‑the‑loop; 100% observability & HIPAA compliance",
    opacity: "bg-[rgba(255,255,255,0.7)]",
  },
  {
    title: "We work with your existing systems",
    description:
      "no rip‑and‑replace needed to accommodate our Ai Agents.",
    opacity: "bg-[rgba(255,255,255,0.4)]",
  },
];

export default function Features() {
  return (
    <section id="about" className="w-full  px-5 md:px-20 flex justify-center items-center bg-white">
      {/* Container with gradient background and gaps */}
      <div
        className="w-full max-w-[1280px] rounded-[24px] p-5 md:p-8 lg:p-10"
        style={{
          background:
            "linear-gradient(185.9deg, #FFFFFF -5.46%, #FEF5D6 19.15%, #FFCC92 41.5%, #FFAB82 60.66%, rgba(255, 196, 167, 0.508135) 87.02%, rgba(255, 255, 255, 0) 114.25%)",
        }}
      >
        {/* Content Layout */}
        <div className="w-full flex flex-col xl:flex-row gap-[10px]">
          {/* Left Panel - About Card */}
          <div className="w-full xl:w-[537px] bg-white border border-white rounded-[24px] p-8 flex flex-col justify-between relative overflow-hidden shrink-0 h-auto xl:min-h-[652px]">
            <div className="flex flex-col gap-2 z-10 overflow-hidden">
              <h2 className="text-[36px] leading-[44px] font-medium tracking-[-0.72px] text-[#130f0c] break-words">
                About Flow AI
              </h2>
              <div className="text-[18px] leading-[26px] font-normal text-[#130f0c] opacity-60 break-words">
                <p className="mb-[18px]">
                  Flow AI is co‑founded by healthcare and technology leaders with
                  deep, hands‑on operations experience. We are outcome‑first and
                  design for reliability, guardrails, and compliance. We work
                  inside your systems to deliver booked, compliant visits—not just
                  conversations.
                </p>
              </div>
            </div>

            {/* Large Orange Logo at Bottom Left */}
            <div className="relative w-[400px] h-[214px] mt-8 xl:mt-0 -ml-8 -mb-8 xl:absolute xl:bottom-0 xl:left-0">
              <Image
                src="/about/orange-flowai-logo.svg"
                alt="Flow AI Logo"
                fill
                className="object-contain object-bottom left-0"
              />
            </div>
          </div>

          {/* Right Panel - 2x2 Grid of Features */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-[10px]">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className={`${feature.opacity} border border-white rounded-[24px] p-6 flex flex-col justify-between h-auto xl:h-[321px] backdrop-blur-sm overflow-hidden`}
              >
                <div className="flex flex-col gap-3 overflow-hidden">
                  <h3 className="text-[20px] leading-[28px] font-semibold text-[#130f0c] break-words">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] leading-[24px] font-normal text-[#423f3d] break-words">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

