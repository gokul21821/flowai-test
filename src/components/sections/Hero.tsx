"use client";

import React from "react";
import Image from "next/image";
import HeroAnimation from "./hero-components/HeroAnimation";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[900px] flex flex-col items-center overflow-hidden">
      {/* Orange Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(187.36deg, #FFFFFF 13.74%, #FEF5D6 29.44%, #FFCC92 43.7%, #FFAB82 55.92%, rgba(255, 196, 167, 0.508135) 72.74%, rgba(255, 255, 255, 0) 90.11%)",
        }}
      />

      {/* Lines Pattern Overlay */}
      <div className="absolute inset-0 w-full h-[900px] top-0 left-1/2 -translate-x-1/2 opacity-100">
        <Image
          src="/hero/background.svg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] flex flex-col items-center gap-12 px-5 md:px-20 pt-10 md:pt-10 pb-20">
        {/* Headline and Subheadline */}
        <div className="flex flex-col gap-2 items-center text-center max-w-[854px]">
          <h1 className="text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[60px] lg:leading-[72px] font-medium text-[#130F0C] tracking-[-0.5px] md:tracking-[-1.2px] lg:tracking-[-1.8px] px-4">
            Better Patient Experience. Powered by Flow AI.
          </h1>
          <p className="text-base md:text-lg leading-6 md:leading-[26px] font-normal text-[#717171] whitespace-pre-line ">
            {`Improve your pre-patient visit workflow from your referral to your patient visit with our Agentic AI Suite.`}
            <br />
            {`Grow Your Revenues & Achieve Operations Efficiency Using AI.`}
          </p>
        </div>

        {/* Demo Card Container */}
        <div className="relative w-full max-w-[1400px] h-auto min-h-[600px] mt-12">
          {/* Demo Card */}
          <div className="relative w-full min-h-[600px] bg-white/40 backdrop-blur-[6px] border border-white rounded-3xl p-4 md:p-6 overflow-hidden">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
