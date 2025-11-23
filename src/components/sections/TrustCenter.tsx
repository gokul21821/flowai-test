"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function TrustCenter() {
  return (
    <section id="trust" className="w-full flex justify-center px-5 md:px-10 lg:px-20 py-[50px] bg-white overflow-hidden">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-stretch">
        {/* Left Column - Content */}
        <div className="flex flex-col gap-12 w-full lg:w-[586px] shrink-0">
          {/* Header */}
          <div className="flex flex-col gap-4 items-start">
            {/* Badge */}
            <div className="bg-[#fbfaf9] border border-[#d8d2ca] border-[0.8px] rounded-[80px] px-4 py-2">
              <p className="font-medium text-sm leading-5 text-[#414651] text-center">
                Safety
              </p>
            </div>
            {/* Headline */}
            <h2 className="font-medium text-4xl leading-[44px] tracking-[-0.72px] text-[#130F0C]">
              Trust Center
            </h2>
          </div>

          {/* Content Groups */}
          <div className="flex flex-col gap-2 w-full lg:w-[521px]">
            {/* Active Item */}
            <div className="bg-neutral-100 rounded-xl p-6 w-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-xl leading-7 text-[#130F0C]">
                    Security & Compliance
                  </p>
                  {/* Rotated Arrow for Active State */}
                  <div className="relative w-6 h-6 shrink-0 rotate-90">
                    <Image
                      src="/icons/right-arrow-dark.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                
                {/* Mobile/Tablet Image - Shows only on small screens */}
                <div className="lg:hidden w-full h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden bg-black">
                  <Image
                    src="/trust-center/violation.png"
                    alt="Trust Center Security"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bullet Points */}
                <ul className="list-disc pl-6 space-y-0 text-[rgba(19,15,12,0.6)] font-normal text-base marker:text-[rgba(19,15,12,0.6)]">
                  <li>
                    <span className="leading-6">
                      HIPAA compliant; SOC 2 Type II controls and practices
                    </span>
                  </li>
                  <li>
                    <span className="leading-6">
                      No patient data stored on our platform your EHR remains
                      the source of truth
                    </span>
                  </li>
                  <li>
                    <span className="leading-6">
                      PHI minimization; encryption in transit and at rest
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Inactive Items */}
            {[
              "Identity & Access",
              "Auditability & Safety",
              "Integrations & Deployment",
            ].map((item) => (
              <div
                key={item}
                className="bg-[rgba(245,245,245,0.5)] rounded-xl p-6 w-full flex items-center justify-between"
              >
                <p className="font-medium text-xl leading-7 text-[#130F0C] opacity-60">
                  {item}
                </p>
                <div className="relative w-6 h-6 shrink-0">
                  <Image
                    src="/icons/right-arrow-dark.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex gap-6 items-center">
            <Button variant="Primary" size="md" className="w-auto px-8" href="/schedule-a-demo">
              Request the security brief
            </Button>
          </div>
        </div>

        {/* Right Column - Image (Desktop Only) */}
        <div className="hidden lg:block w-full lg:flex-1 lg:max-w-[630px] relative rounded-3xl overflow-hidden bg-black">
          <Image
            src="/trust-center/violation.png"
            alt="Trust Center Security"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

