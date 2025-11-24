"use client";

import React from "react";
import Image from "next/image";

// Logo data
const emrLogos = [
  { name: "Epic", src: "/reasoning-engine/emr/epic.svg", alt: "Epic" },
  { name: "Oracle", src: "/reasoning-engine/emr/oracle.svg", alt: "Oracle" },
  { name: "Athenahealth", src: "/reasoning-engine/emr/athena.svg", alt: "Athenahealth" },
  { name: "eClinicalWorks", src: "/reasoning-engine/emr/eclinicalworks.svg", alt: "eClinicalWorks" },
  { name: "Meditech", src: "/reasoning-engine/emr/meditech.svg", alt: "Meditech" },
  { name: "Veradigm", src: "/reasoning-engine/emr/veradigm.svg", alt: "Veradigm" },
];

const risLogos = [
  { name: "Abbadox", src: "/reasoning-engine/RIS/abbadox.svg", alt: "Abbadox" },
  { name: "ERAD", src: "/reasoning-engine/RIS/erad.svg", alt: "ERAD" },
  { name: "ExaRIS", src: "/reasoning-engine/RIS/exaris.svg", alt: "ExaRIS" },
  { name: "Fujifilm", src: "/reasoning-engine/RIS/Fujifilm.svg", alt: "Fujifilm" },
  { name: "MedInformatix", src: "/reasoning-engine/RIS/mediinformatix.svg", alt: "MedInformatix" },
  { name: "Royal Health", src: "/reasoning-engine/RIS/royalhealth.svg", alt: "Royal Health" },
];

const platformLogos = [
  { name: "AT&T", src: "/reasoning-engine/platforms/att.svg", alt: "AT&T" },
  { name: "Cisco", src: "/reasoning-engine/platforms/cisco.svg", alt: "Cisco" },
  { name: "Genesys", src: "/reasoning-engine/platforms/genesys.svg", alt: "Genesys" },
  { name: "Avaya", src: "/reasoning-engine/platforms/avaya.svg", alt: "Avaya" },
  { name: "Twilio", src: "/reasoning-engine/platforms/twilio.svg", alt: "Twilio" },
];

export default function FlowAIIntegrationEngine() {
  return (
    <div className="w-full flex flex-col gap-8 items-start max-w-[1296px] mx-auto">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 items-center text-center w-full">
        <h2 className="font-medium text-[28px] leading-[1.1] text-[#130F0C] tracking-[-0.56px] max-w-[824px]">
          Flow AI Integration Engine
        </h2>
        <p className="font-normal text-lg leading-[26px] text-[#717171] max-w-[600px]">
          Flow AI is integrated to work seamlessly with your existing EMR/RIS/Other System of Record and Telephony Systems
        </p>
      </div>

      {/* Logos Container */}
      <div className="bg-neutral-100 flex flex-col gap-3 items-start justify-center overflow-hidden p-4 rounded-3xl w-full">
        {/* EMRs Section - Left to Right Scrolling */}
        <div className="bg-white border border-white rounded-3xl w-full overflow-hidden">
          <div className="flex flex-col gap-6 items-center overflow-hidden px-8 py-9 w-full">
            <p className="font-medium text-xl leading-[1.6] text-[#423F3D] text-center tracking-[-0.24px] w-full">
              EMRs
            </p>
            <div className="relative w-full overflow-hidden">
              <div className="flex gap-20 items-center animate-scroll-left">
                {/* First set of logos */}
                {emrLogos.map((logo, idx) => (
                  <div
                    key={`emr-1-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-[40px] min-w-[120px]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={40}
                      className="object-contain max-h-[40px] w-auto"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {emrLogos.map((logo, idx) => (
                  <div
                    key={`emr-2-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-[40px] min-w-[120px]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={40}
                      className="object-contain max-h-[40px] w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIS Section - Right to Left Scrolling */}
        <div className="bg-white border border-white rounded-3xl w-full overflow-hidden">
          <div className="flex flex-col gap-6 items-center overflow-hidden px-8 py-9 w-full">
            <p className="font-medium text-xl leading-[1.6] text-[#423F3D] text-center tracking-[-0.24px] w-full">
              Radiology Information Systems (RIS)
            </p>
            <div className="relative w-full overflow-hidden">
              <div className="flex gap-20 items-center animate-scroll-right">
                {/* First set of logos */}
                {risLogos.map((logo, idx) => (
                  <div
                    key={`ris-1-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-[50px] min-w-[120px]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={50}
                      className="object-contain max-h-[50px] w-auto"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {risLogos.map((logo, idx) => (
                  <div
                    key={`ris-2-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-[50px] min-w-[120px]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={50}
                      className="object-contain max-h-[50px] w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Telephony/CCaaS Platforms Section - Left to Right Scrolling */}
        <div className="bg-white border border-white rounded-3xl w-full overflow-hidden">
          <div className="flex flex-col gap-6 items-center overflow-hidden px-8 py-9 w-full">
            <p className="font-medium text-xl leading-[1.6] text-[#423F3D] text-center tracking-[-0.24px] w-full">
              Telephony/CCaaS Platforms
            </p>
            <div className="relative w-full overflow-hidden">
              <div className="flex gap-20 items-center animate-scroll-left">
                {/* First set of logos */}
                {platformLogos.map((logo, idx) => (
                  <div
                    key={`platform-1-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-[45px] min-w-[100px]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={45}
                      className="object-contain max-h-[45px] w-auto"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {platformLogos.map((logo, idx) => (
                  <div
                    key={`platform-2-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-[45px] min-w-[100px]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={45}
                      className="object-contain max-h-[45px] w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

