"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

type TabType = "reduce-leakage" | "shorten-time" | "staff-capacity" | "lower-cost";

interface TabContent {
  title: string;
  whatWeFix: string[];
  how: string[];
  ctaText: string;
  backgroundImage: string;
  graphImage: string;
  graphTitle: string;
  graphSubtitle: string;
  metrics: {
    label: string;
    arrow: "up" | "down";
  }[];
}

const tabContent: Record<TabType, TabContent> = {
  "reduce-leakage": {
    title: "Reduce Leakage, Lower Denials",
    whatWeFix: [
      "Stalled referrals",
      "Missing documentation and payer prerequisites",
      "Missed callbacks",
    ],
    how: [
      "Referral completeness checks",
      "Automated outreach",
      "First‑time‑right scheduling",
      "Payer rule-pack completion check",
      "Analytics on drop‑offs",
      "Audit-ready trails",
    ],
    ctaText: "Identify your top three leakage points",
    backgroundImage: "/outcomes/reduce-leakage.png",
    graphImage: "/outcomes/graphs/payer-denials.svg",
    graphTitle: "Payer Denials",
    graphSubtitle: "Jan 31 - Sep 30",
    metrics: [
      { label: "Leakage", arrow: "down" },
      { label: "Conversion to Scheduled", arrow: "up" },
      { label: "Denial Rate", arrow: "down" },
      { label: "First-Pass Approval", arrow: "up" },
    ],
  },
  "shorten-time": {
    title: "Shorten Time‑to‑Appointment",
    whatWeFix: ["Holds", "Back‑and‑forth", "Template mismatches"],
    how: [
      "Policy‑aware slot proposals",
      "Agent‑assist for exceptions",
      "24/7 self‑service",
    ],
    ctaText: "Model your time‑to‑appointment gains",
    backgroundImage: "/outcomes/shorten-time.png",
    graphImage: "/outcomes/graphs/referral-appointment.svg",
    graphTitle: "Time from Referral to Appointment",
    graphSubtitle: "Jan 31 - Sep 30",
    metrics: [
      { label: "Days‑to‑appointment", arrow: "down" },
      { label: "First‑call resolution", arrow: "up" },
    ],
  },
  "staff-capacity": {
    title: "Boost Your Staff Capacity Without Additional Resources",
    whatWeFix: ["Manual sorting", "Re‑keying", "Repetitive calls"],
    how: [
      "Inbox automation",
      "Extraction",
      "Governed scheduling",
      "Support deflection",
    ],
    ctaText: "Estimate FTE hours reclaimed",
    backgroundImage: "/outcomes/staff-capacity.png",
    graphImage: "/outcomes/graphs/emily-appointment.svg",
    graphTitle: "% Appointments Scheduled\nby Emily",
    graphSubtitle: "Jan 31 - Sep 30",
    metrics: [
      { label: "Touches per referral", arrow: "down" },
      { label: "FTE capacity", arrow: "up" },
    ],
  },
  "lower-cost": {
    title: "Lower Your Cost to Serve, Improve Your Profitability",
    whatWeFix: [
      "High labor costs of your order entry",
      "Scheduling & patient coordinator",
      "Clinic front desk team",
    ],
    how: [
      "Offloading work to Emily",
    ],
    ctaText: "Estimate your ROI",
    backgroundImage: "/outcomes/lower-cost.png",
    graphImage: "/outcomes/graphs/labor-cost.svg",
    graphTitle: "Labor Cost as a % of Revenues",
    graphSubtitle: "Jan 31 - Sep 30",
    metrics: [
      { label: "Cost to serve each patient", arrow: "down" },
      { label: "Labor Cost", arrow: "down" },
      { label: "EBITDA", arrow: "up" },
    ],
  },
};

const tabs: { id: TabType; label: string }[] = [
  { id: "reduce-leakage", label: "Reduce Leakage, Lower Denials" },
  { id: "shorten-time", label: "Shorten Time‑to‑Appointment" },
  { id: "staff-capacity", label: "Boost Your Staff Capacity Without Additional Resources" },
  { id: "lower-cost", label: "Lower Your Cost to Serve, Improve Your Profitability" },
];

export default function Results() {
  const [activeTab, setActiveTab] = useState<TabType>("reduce-leakage");
  const [previousTab, setPreviousTab] = useState<TabType>("reduce-leakage");
  const content = tabContent[activeTab];

  // Preload all tab background images on mount
  useEffect(() => {
    const imagesToPreload = Object.values(tabContent).map(content => content.backgroundImage);
    imagesToPreload.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Handle tab change with direction tracking
  const handleTabChange = (newTab: TabType) => {
    setPreviousTab(activeTab);
    setActiveTab(newTab);
  };

  // Get current and previous indices to determine direction
  const getTabIndex = (tabId: TabType) => tabs.findIndex(t => t.id === tabId);
  const activeIndex = getTabIndex(activeTab);
  const previousIndex = getTabIndex(previousTab);
  const isMovingDown = activeIndex > previousIndex;

  return (
    <section
      id="outcomes"
      className="relative w-full flex flex-col items-center justify-center px-5 md:px-20 py-12 md:py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(185.57deg, #FFFFFF -10.98%, #FEF5D6 16.67%, #FFCC92 41.79%, #FFAB82 63.31%, rgba(255, 196, 167, 0.508135) 92.94%, rgba(255, 255, 255, 0) 123.54%), #ECECEC",
      }}
    >
      {/* Dark Background Image Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(194.7981613083407deg, rgba(25, 25, 25, 0.4) 10.315%, rgba(254, 245, 214, 0.4) 33.372%, rgba(255, 204, 146, 0.4) 54.311%, rgba(255, 171, 130, 0.4) 72.26%, rgba(255, 196, 167, 0.20325) 96.96%, rgba(25, 25, 25, 0.4) 122.48%), linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] flex flex-col gap-6 items-center">
        {/* Badge + Headline */}
        <div className="flex flex-col gap-4 items-center text-center w-full">
          <div className="bg-[rgba(251,250,249,0.24)] border border-[#d8d2ca] rounded-full px-4 py-2">
            <p className="text-sm font-medium leading-5 text-white text-center">
              Outcomes
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center text-center max-w-[824px]">
            <h2 className="text-4xl md:text-5xl lg:text-[48px] leading-tight md:leading-[60px] font-medium text-white tracking-[-0.5px] md:tracking-[-0.96px]">
              The Results Speak for Themselves
            </h2>
            <p className="text-base md:text-lg leading-6 md:leading-[26px] font-normal text-neutral-100 max-w-[900px]">
              Flow AI is trusted by leading Health Systems, Physician Groups, Radiology Groups, Home Healthcare Providers and Ambulatory Surgery Centers to improve their patient experience, operating efficiency and margins.
            </p>
          </div>
        </div>

        {/* Tab Component */}
        <div className="bg-[rgba(102,102,102,0.3)] rounded-2xl p-4 w-full">
          <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-stretch w-full">
            {/* Left Panel - Tabs */}
            <div className="flex flex-col gap-2 w-full xl:w-[602px] xl:h-full">
              {tabs.map((tab, index) => {
                const isActive = activeTab === tab.id;
                const tabData = tabContent[tab.id];

                // Determine if this tab is effectively "expanding"
                // If it's active, it's expanding
                
                return (
                  <motion.div
                    key={tab.id}
                    className="rounded-2xl overflow-hidden mb-2"
                    initial={false}
                    animate={{
                      backgroundColor: isActive 
                        ? "rgba(255, 255, 255, 0.24)" 
                        : "rgba(255, 255, 255, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Tab Header / Button */}
                    <button
                      onClick={() => handleTabChange(tab.id)}
                      className={`w-full flex gap-4 items-center justify-between p-6 transition-all text-left hover:bg-[rgba(255,255,255,0.05)] ${
                        isActive ? "" : "cursor-pointer"
                      }`}
                    >
                      <p className={`flex-1 font-medium text-lg leading-[26px] whitespace-pre-wrap transition-opacity duration-300 ${
                        isActive ? "text-white opacity-100" : "text-white opacity-50"
                      }`}>
                        {tab.label}
                      </p>
                      <div className="relative shrink-0 w-6 h-6">
                        <Image
                          src="/icons/right-arrow.svg"
                          alt=""
                          width={24}
                          height={24}
                          className={`w-6 h-6 transition-transform duration-300 ${
                            isActive ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Tab Content - Accordion Expansion */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { height: "auto", opacity: 1 },
                            collapsed: { height: 0, opacity: 0 }
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 flex flex-col gap-4 xl:h-[504px]">
                            {/* Mobile/Tablet Image */}
                            <div className="xl:hidden w-full h-[600px] md:h-[700px] relative rounded-2xl overflow-hidden bg-[#1f1f1f]">
                              <AnimatePresence>
                                <motion.div
                                  key={`image-${activeTab}`}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.4, ease: "easeInOut" }}
                                  className="absolute inset-0 w-full h-full md:origin-top"
                                >
                                  <Image
                                    src={tabData.backgroundImage}
                                    alt={tabData.title}
                                    fill
                                    className="object-cover object-top"
                                  />
                                </motion.div>
                              </AnimatePresence>

                              {/* Graph Card Overlay */}
                              <div className="absolute left-1/2 top-[400px] md:top-[475px] -translate-x-1/2 rounded-[20px] overflow-hidden w-[320px] md:w-[400px] h-[90px] md:h-[150px] z-10">
                                <Image
                                  src={tabData.graphImage}
                                  alt={tabData.graphTitle}
                                  fill
                                  className="object-contain"
                                />
                              </div>

                              {/* Navy Blue Metrics Section */}
                              <div className="absolute left-1/2 top-[480px] md:top-[600px] -translate-x-1/2 bg-[#1c275e] rounded-2xl w-[calc(100%-40px)] max-w-[320px] md:max-w-[350px] flex flex-col z-20">
                                {tab.id === "lower-cost" ? (
                                  <>
                                    <div className="flex items-center justify-center px-2 py-2 md:py-3">
                                      <div className="flex gap-1 md:gap-2 items-center px-2 md:px-4 rounded-full">
                                        <p className="font-normal text-[10px] md:text-[11px] leading-[1.6] text-[#e0e0e0] tracking-[-0.192px] whitespace-nowrap">
                                          {tabData.metrics[0].label}
                                        </p>
                                        <div className="relative shrink-0 w-4 h-4 md:w-6 md:h-6">
                                          <Image
                                            src={
                                              tabData.metrics[0].arrow === "up"
                                                ? "/icons/orange-up-arrow.svg"
                                                : "/icons/orange-down-arrow.svg"
                                            }
                                            alt={tabData.metrics[0].arrow === "up" ? "Up" : "Down"}
                                            width={24}
                                            height={24}
                                            className="w-4 h-4 md:w-6 md:h-6"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-[rgba(255,255,255,0.12)] h-px w-full" />
                                    <div className="flex gap-2 md:gap-4 items-stretch justify-center px-1">
                                      {tabData.metrics.slice(1, 3).map((metric, index) => (
                                        <React.Fragment key={index}>
                                          <div className="flex gap-1 md:gap-2 items-center px-2 md:px-4 py-2 md:py-3 rounded-full">
                                            <p className="font-normal text-[10px] md:text-[11px] leading-[1.6] text-[#e0e0e0] tracking-[-0.192px] whitespace-nowrap">
                                              {metric.label}
                                            </p>
                                            <div className="relative shrink-0 w-4 h-4 md:w-6 md:h-6">
                                              <Image
                                                src={
                                                  metric.arrow === "up"
                                                    ? "/icons/orange-up-arrow.svg"
                                                    : "/icons/orange-down-arrow.svg"
                                                }
                                                alt={metric.arrow === "up" ? "Up" : "Down"}
                                                width={24}
                                                height={24}
                                                className="w-4 h-4 md:w-6 md:h-6"
                                              />
                                            </div>
                                          </div>
                                          {index === 0 && (
                                            <div className="bg-[rgba(255,255,255,0.12)] w-px" />
                                          )}
                                        </React.Fragment>
                                      ))}
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="flex gap-2 md:gap-4 items-stretch justify-center px-2">
                                      {tabData.metrics.slice(0, 2).map((metric, index) => (
                                        <React.Fragment key={index}>
                                          <div className="flex gap-1 md:gap-2 items-center px-2 md:px-4 py-2 md:py-3 rounded-full">
                                            <p className="font-normal text-[10px] md:text-[11px] leading-[1.6] text-[#e0e0e0] tracking-[-0.192px] whitespace-nowrap">
                                              {metric.label}
                                            </p>
                                            <div className="relative shrink-0 w-4 h-4 md:w-6 md:h-6">
                                              <Image
                                                src={
                                                  metric.arrow === "up"
                                                    ? "/icons/orange-up-arrow.svg"
                                                    : "/icons/orange-down-arrow.svg"
                                                }
                                                alt={metric.arrow === "up" ? "Up" : "Down"}
                                                width={24}
                                                height={24}
                                                className="w-4 h-4 md:w-6 md:h-6"
                                              />
                                            </div>
                                          </div>
                                          {index === 0 && (
                                            <div className="bg-[rgba(255,255,255,0.12)] w-px" />
                                          )}
                                        </React.Fragment>
                                      ))}
                                    </div>
                                    {tabData.metrics.length > 2 && (
                                      <>
                                        <div className="bg-[rgba(255,255,255,0.12)] h-px w-full" />
                                        <div className="flex gap-2 md:gap-4 items-stretch justify-center px-1">
                                          {tabData.metrics.slice(2, 4).map((metric, index) => (
                                            <React.Fragment key={index}>
                                              <div className="flex gap-1 md:gap-2 items-center px-2 md:px-4 py-2 md:py-3 rounded-full">
                                                <p className="font-normal text-[10px] md:text-[11px] leading-[1.6] text-[#e0e0e0] tracking-[-0.192px] whitespace-nowrap">
                                                  {metric.label}
                                                </p>
                                                <div className="relative shrink-0 w-4 h-4 md:w-6 md:h-6">
                                                  <Image
                                                    src={
                                                      metric.arrow === "up"
                                                        ? "/icons/orange-up-arrow.svg"
                                                        : "/icons/orange-down-arrow.svg"
                                                    }
                                                    alt={metric.arrow === "up" ? "Up" : "Down"}
                                                    width={24}
                                                    height={24}
                                                    className="w-4 h-4 md:w-6 md:h-6"
                                                  />
                                                </div>
                                              </div>
                                              {index === 0 && tabData.metrics.length === 4 && (
                                                <div className="bg-[rgba(255,255,255,0.12)] w-px" />
                                              )}
                                            </React.Fragment>
                                          ))}
                                        </div>
                                      </>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>

                            {/* Content Sections */}
                            <motion.div 
                              initial={{ y: isMovingDown ? -20 : 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: isMovingDown ? -20 : 20, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                              className="flex-1 flex flex-col gap-6"
                            >
                              <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1 flex flex-col gap-2">
                                  <p className="font-semibold text-base leading-6 text-white">
                                    What We Fix
                                  </p>
                                  <div className="flex flex-col gap-2">
                                    {tabData.whatWeFix.map((item, idx) => (
                                      <div key={idx} className="flex gap-2 items-center">
                                        <div className="relative shrink-0 w-5 h-5">
                                          <Image
                                            src="/icons/orange-checkbox.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                          />
                                        </div>
                                        <p className="flex-1 font-normal text-base leading-6 text-[#e0e0e0]">
                                          {item}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                  <p className="font-semibold text-base leading-6 text-white">
                                    How
                                  </p>
                                  <div className="flex flex-col gap-2">
                                    {tabData.how.map((item, idx) => (
                                      <div key={idx} className="flex gap-2 items-center">
                                        <div className="relative shrink-0 w-5 h-5">
                                          <Image
                                            src="/icons/orange-checkbox.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                          />
                                        </div>
                                        <p className="flex-1 font-normal text-base leading-6 text-[#e0e0e0]">
                                          {item}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <Button
                                variant="Primary"
                                size="sm"
                                className="w-full h-14 px-8"
                                href="/schedule-a-demo"
                              >
                                {tabData.ctaText}
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Panel - Image with Graph and Metrics (Desktop Only) */}
            <div className="hidden xl:flex bg-[#1f1f1f] rounded-3xl overflow-hidden relative w-full xl:w-[630px] h-full min-h-[756px]">
              {/* Background Image */}
              <AnimatePresence>
                <motion.div
                  key={`image-${activeTab}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={content.backgroundImage}
                    alt={content.title}
                    fill
                    className="object-cover object-center"
                    priority={activeTab === "reduce-leakage"}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Graph Card Overlay - Positioned slightly left for Desktop */}
              <div className="absolute left-[calc(50%-100px)] top-[420px] -translate-x-1/2 rounded-[20px] overflow-hidden w-[380px] h-[220px] z-10">
                <Image
                  src={content.graphImage}
                  alt={content.graphTitle}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Navy Blue Metrics Section - Positioned slightly left for Desktop, offset from graph */}
              <div className="absolute left-1/2 top-[600px] -translate-x-1/2 bg-[#1c275e] rounded-2xl w-[449px] flex flex-col z-20">
                {activeTab === "lower-cost" ? (
                  <>
                    {/* First Row - Single metric for lower-cost */}
                    <div className="flex items-center justify-center px-2 py-3">
                      <div className="flex gap-2 items-center px-4 rounded-full">
                        <p className="font-normal text-base leading-[1.6] text-[#e0e0e0] tracking-[-0.192px] whitespace-nowrap">
                          {content.metrics[0].label}
                        </p>
                        <div className="relative shrink-0 w-6 h-6">
                          <Image
                            src={
                              content.metrics[0].arrow === "up"
                                ? "/icons/orange-up-arrow.svg"
                                : "/icons/orange-down-arrow.svg"
                            }
                            alt={content.metrics[0].arrow === "up" ? "Up" : "Down"}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Divider */}
                    <div className="bg-[rgba(255,255,255,0.12)] h-px w-full" />
                    {/* Second Row - Two metrics for lower-cost */}
                    <div className="flex gap-4 items-stretch justify-center px-1">
                      {content.metrics.slice(1, 3).map((metric, index) => (
                        <React.Fragment key={index}>
                          <div className="flex gap-2 items-center px-4 py-3 rounded-full">
                            <p className="font-normal text-base leading-[1.6] text-[#e0e0e0] tracking-[-0.192px] whitespace-nowrap">
                              {metric.label}
                            </p>
                            <div className="relative shrink-0 w-6 h-6">
                              <Image
                                src={
                                  metric.arrow === "up"
                                    ? "/icons/orange-up-arrow.svg"
                                    : "/icons/orange-down-arrow.svg"
                                }
                                alt={metric.arrow === "up" ? "Up" : "Down"}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                              />
                            </div>
                          </div>
                          {index === 0 && (
                            <div className="bg-[rgba(255,255,255,0.12)] w-px" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* First Row */}
                    <div className="flex gap-4 items-stretch justify-center px-2">
                      {content.metrics.slice(0, 2).map((metric, index) => (
                        <React.Fragment key={index}>
                          <div className="flex gap-2 items-center px-4 py-3 rounded-full">
                            <p className="font-normal text-base leading-[1.6] text-[#e0e0e0] tracking-[-0.192px] whitespace-nowrap">
                              {metric.label}
                            </p>
                            <div className="relative shrink-0 w-6 h-6">
                              <Image
                                src={
                                  metric.arrow === "up"
                                    ? "/icons/orange-up-arrow.svg"
                                    : "/icons/orange-down-arrow.svg"
                                }
                                alt={metric.arrow === "up" ? "Up" : "Down"}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                              />
                            </div>
                          </div>
                          {index === 0 && (
                            <div className="bg-[rgba(255,255,255,0.12)] w-px" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Divider */}
                    {content.metrics.length > 2 && (
                      <>
                        <div className="bg-[rgba(255,255,255,0.12)] h-px w-full" />
                        {/* Second Row */}
                        <div className="flex gap-4 items-stretch justify-center px-1">
                          {content.metrics.slice(2, 4).map((metric, index) => (
                            <React.Fragment key={index}>
                              <div className="flex gap-2 items-center px-4 py-3 rounded-full">
                                <p className="font-normal text-base leading-[1.6] text-[#e0e0e0] tracking-[-0.192px] whitespace-nowrap">
                                  {metric.label}
                                </p>
                                <div className="relative shrink-0 w-6 h-6">
                                  <Image
                                    src={
                                      metric.arrow === "up"
                                        ? "/icons/orange-up-arrow.svg"
                                        : "/icons/orange-down-arrow.svg"
                                    }
                                    alt={metric.arrow === "up" ? "Up" : "Down"}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                  />
                                </div>
                              </div>
                              {index === 0 && content.metrics.length === 4 && (
                                <div className="bg-[rgba(255,255,255,0.12)] w-px" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

