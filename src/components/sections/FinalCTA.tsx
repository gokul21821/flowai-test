"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="w-full py-20 px-5 md:px-20 flex items-center justify-center bg-white">
      {/* Container with gradient background and rounded corners */}
      <div 
        className="w-full max-w-[1400px] h-[600px] relative flex items-center justify-center overflow-hidden rounded-[32px]"
        style={{
          background: "linear-gradient(203.93deg, rgba(255, 106, 3, 0.4) -0.44%, rgba(254, 245, 214, 0.4) 31.61%, rgba(255, 204, 146, 0.4) 52.4%, rgba(255, 171, 130, 0.4) 68.36%, rgba(255, 196, 167, 0.203254) 89.77%, rgba(255, 255, 255, 0.4) 112.8%), #FF6A03"
        }}
      >
        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center gap-4 px-8 py-10">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight md:leading-[52px] font-medium text-white max-w-[600px]">
            Ready to Transform the Way You Work?
          </h2>
          
          {/* Subheadline */}
          <p className="text-base md:text-lg leading-6 font-normal text-white opacity-90 max-w-[800px]">
            Join the leading Healthcare Providers who are powering their way forward with Flow AI.
          </p>
          
          {/* CTA Button - White with hover */}
          <Button variant="Secondary" size="md" className="w-auto px-8" href="/schedule-a-demo">
             Try Flow AI Now
            </Button>
        </div>
      </div>
    </section>
  );
}
