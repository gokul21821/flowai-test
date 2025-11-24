"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

type TabType =
  | "fax-inbox"
  | "insurance"
  | "scheduling"
  | "patient-intake"
  | "patient-support"
  | "analytics";

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

interface TabContent {
  title: string;
  description: string;
  buttonText: string;
  whatEmilyDoes: string;
  guardrails: string[];
  integrations: string[];
  enables: string[];
  image: string;
}

const tabContent: Record<TabType, TabContent> = {
  "fax-inbox": {
    title: "Stop Losing Time with your Faxes & Inbox",
    description: "",
    buttonText: "Scan your fax using Fax AI Agent",
    whatEmilyDoes:
      "Reads & classifies your faxes, extracts data using a Visual LLM, enters referrals & documents in the EMR",
    guardrails: [
      "PHI minimization",
      "Confidence thresholds",
      "Automate failed eligibility checks",
    ],
    integrations: ["Fax gateways", "Email"],
    enables: [
      "Fewer human touches per fax",
      "Fewer mis-routes",
      "Fewer order entry staff",
    ],
    image: "/meetemily/fax-inbox.svg",
  },
  insurance: {
    title: "Real-time eligibility checks",
    description: "",
    buttonText: "Run a redacted referral through our agent",
    whatEmilyDoes:
      "Uses Flow AI APIs to get accurately validate patient's insurance and get up-to-date patient benefits data in seconds",
    guardrails: [
      "99%+ coverage of over 3,400 payers",
      "Replace web scraping and phone-call based workflows",
      "Automate failed eligibility checks",
    ],
    integrations: [
      "Real-time & batching using Flow AI APIs",
      "Exchange X12 HIPAA EDI with any payer",
      "Deliver EDI with one API call",
    ],
    enables: [
      "No more patient long holds/IVR on calls",
      "Referral cycle time down",
      "Completion rate up",
    ],
    image: "/meetemily/insurance.png",
  },
  scheduling: {
    title: "Fill the right slot the first time",
    description: "",
    buttonText: "Call Emily to Book Your Appointment",
    whatEmilyDoes:
      "24x7 Omnichannel (Voice, Text, Web based) scheduling that respects provider availability, visit types, durations, resources, and prep rules.",
    guardrails: [
      "Follow your operational constraints",
      "Schedule holds",
      "No‑show mitigation prompts",
    ],
    integrations: ["EHR scheduling templates", "Telephony IVR/CCaaS", "Messaging"],
    enables: [
      "Time-to-appointment down",
      "Schedule Utilization up",
      "Referral to Appointment Conversion Up",
    ],
    image: "/meetemily/scheduling.png",
  },
  "patient-intake": {
    title: "Cut Down Patient Wait Time at the Clinic",
    description: "",
    buttonText: "Preview your Intake flow",
    whatEmilyDoes:
      "Gathers all patient info & consent before arrival at the clinic: demographics, insurance, consents, and prep; pushes structured data into EMR.",
    guardrails: [
      "Validation",
      "Identity Checks",
      "Consent Capture",
    ],
    integrations: ["EMR Intake", "Clearinghouses", "E-sign & messaging"],
    enables: [
      "No more patient wait time at the clinic to fill out forms",
      "Fewer day‑of surprises",
      "Lower no-shows",
    ],
    image: "/meetemily/patient-intake.png",
  },
  "patient-support": {
    title: "Answers without the wait",
    description: "",
    buttonText: "Hear a real call flow",
    whatEmilyDoes:
      "Provides round-the-clock patient support, answers questions, and handles routine inquiries automatically",
    guardrails: [
      "Scope‑limited intents",
      "Policy responses",
      "Transfer‑on‑low‑confidence",
    ],
    integrations: ["IVR/CCaaS", "EHR messaging", "Knowledge bases"],
    enables: [
      "Call Volume & Handle Time Down",
      "Patient Satisfaction Up",
      "Your staff time freed up for Patient Care",
    ],
    image: "/meetemily/patient-support.png",
  },
  analytics: {
    title: "See and fix your referral to visit funnel",
    description: "",
    buttonText: "Explore your leakage map",
    whatEmilyDoes:
      "Visualizes leakage, cycle time by step, touches per referral, agent vs. human handling, template utilization, and revenue at risk.",
    guardrails: [
      "Role-based access",
      "PHI minimisation",
      "Export controls",
    ],
    integrations: ["EHR", "Telephony","Fax","Payer data","Data warehouse"],
    enables: [
      "Enables your weekly KPI reviews to drive targeted improvements in your operations.",
    ],
    image: "/meetemily/analytics.png",
  },
};

const tabLabels: Record<TabType, string> = {
  "fax-inbox": "Fax/Inbox AI",
  insurance: "Insurance Verification & Eligibility AI",
  scheduling: "Scheduling AI",
  "patient-intake": "Patient Intake AI",
  "patient-support": "24*7 Patient Support AI",
  analytics: "Analytics AI",
};

const tabKeys = Object.keys(tabLabels) as TabType[];

// Helper to determine slide direction based on tab index
const getSlideDirection = (tabIndex: number): "left" | "right" => {
  return tabIndex % 2 === 0 ? "right" : "left";
};

// Helper to get tab index
const getTabIndex = (tabKey: TabType): number => {
  return tabKeys.indexOf(tabKey);
};

// Icon components for better performance (inline SVGs)
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
    <g opacity="0.2">
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#331E10"/>
      <path d="M6 11.9998L10 15.9998L18 7.9998" stroke="#331E10" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6">
    <path d="M19 12.0001L5 12.0001M19 12.0001L13 6.00006M19 12.0001L13 18.0001" stroke="#F48024" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function MeetEmily() {
  const [activeTab, setActiveTab] = useState<TabType>("fax-inbox");
  const content = tabContent[activeTab];
  const activeTabIndex = getTabIndex(activeTab);
  const slideDirection = getSlideDirection(activeTabIndex);

  // Preload all tab images on mount
  useEffect(() => {
    const imagesToPreload = Object.values(tabContent).map(content => content.image);
    imagesToPreload.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const renderTabButton = useCallback((tabKey: TabType, layout: "horizontal" | "vertical") => {
    const isActive = activeTab === tabKey;

    const baseWidthClasses =
      layout === "horizontal"
        ? "shrink-0 min-w-[200px] md:min-w-[220px]"
        : "w-full lg:w-[260px] xl:w-[320px]";

    const paddingClasses =
      layout === "horizontal"
        ? "px-4 py-3 md:px-5 md:py-4"
        : "p-4 md:p-6 lg:p-7 xl:p-8";

    const textSizeClasses =
      layout === "horizontal"
        ? "text-sm md:text-base lg:text-lg"
        : "text-sm md:text-base lg:text-lg xl:text-xl";

    return (
      <motion.button
        key={`${layout}-${tabKey}`}
        onClick={() => setActiveTab(tabKey)}
        className={`${baseWidthClasses} ${paddingClasses} rounded-xl border-2 ${
          isActive ? "bg-white" : "bg-white/90"
        }`}
        animate={{
          borderColor: isActive ? "#f48024" : "rgba(244, 128, 36, 0)",
          backgroundColor: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.9)",
          opacity: isActive ? 1 : 0.6,
        }}
        whileHover={!isActive ? { opacity: 0.8 } : {}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className={`text-left font-medium text-black whitespace-pre-wrap leading-6 md:leading-[26px] lg:leading-7 ${textSizeClasses}`}>
          {tabLabels[tabKey]}
        </p>
      </motion.button>
    );
  }, [activeTab]);

  const tabList = useMemo(() => tabKeys, []);

  return (
    <section
      id="product"
      className="relative w-full min-h-screen md:min-h-[1100px] lg:min-h-[1200px] xl:min-h-[1273px] flex flex-col items-center overflow-hidden px-4 md:px-12 lg:px-16 xl:px-20 "
      style={{
        background:
          "linear-gradient(154.93deg,rgb(255, 255, 255) 31.11%,rgb(255, 255, 255) 46.73%,rgb(249, 249, 248) 60.92%,rgb(255, 255, 255) 73.08%, rgba(246, 155, 35, 0.45) 89.82%, rgba(223, 198, 75, 0.77) 107.11%)",
      }}
    >
      <style>{scrollbarStyles}</style>
  {/* Background Gradient Ellipses */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute left-[calc(50%+4px)] w-[2048px] h-[2048px] top-[231px] -translate-x-1/2">
      <div className="absolute inset-[-24.41%]">
        <div className="w-full h-full opacity-30" />
      </div>
    </div>
    <div className="absolute inset-[-69.55%_14.12%_-59.61%_14.12%]">
      <div className="w-full h-full" />
    </div>
  </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] flex flex-col">
        {/* Badge and Header Section with Images */}
        <div className="relative w-full flex flex-col lg:flex-row items-start justify-between pr-4 md:pr-8 lg:pr-12 xl:pr-16 pt-12 md:pt-20 lg:pt-24 xl:pt-32 pb-16 md:pb-24 lg:pb-28 xl:pb-32 max-w-[1312px] mx-auto gap-8 md:gap-6 lg:gap-8">

          {/* LEFT COLUMN — TEXT */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 max-w-full md:max-w-[480px] lg:max-w-[520px] xl:max-w-[680px] z-20 pl-3 md:pl-4">
            {/* Badge */}
            <div className="bg-[#fbfaf9] border border-[#d8d2ca] rounded-full px-4 py-2 w-fit mt-0 md:mt-6 lg:mt-10 xl:mt-12">
              <p className="text-sm font-medium text-[#414651]">Our Solution</p>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-[34px] xl:text-4xl leading-[30px] md:leading-[40px] lg:leading-[48px] xl:leading-[56px] font-semibold text-[#130F0C] tracking-[-0.96px]">
              Meet Emily, Your AI-Powered
              <br />
              Super-Employee
            </h2>
   {/* Description */}
   <p className="text-sm md:text-[15px] lg:text-base leading-[22px] md:leading-[24px] lg:leading-[26px] text-[#717171] max-w-full lg:max-w-[700px] xl:max-w-[700px]">
              Emily has an orchestrated suite of AI agent skills that handles everything
              end-to-end from your faxes/inbox to successful patient visits. She works
              within your existing EMR & telephony systems, follows your policies, and
              escalates exceptions to your human staff with full context.
            </p>
            {/* Mobile / Tablet Visual Layout */}
            <div className="lg:hidden pt-2 flex justify-center">
              <div className="relative w-full max-w-sm md:max-w-md aspect-[4/5] overflow-visible">
                {/* Graph Card - top left, behind */}
                <div className="absolute top-[4%] left-[-4%] md:left-[20%] w-[58%] max-w-[190px] z-[1]">
                  <div className="backdrop-blur-[2px] bg-white/80 border border-[rgba(227,227,227,0.3)] rounded-[14px] p-3 w-full aspect-[260/190]">
                    <div className="relative w-full h-full">
                      <img
                        src="/meetemily/graph.svg"
                        alt="Customer Satisfaction Chart"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Emily Image - centered, fully visible */}
                <div className="absolute left-0 right-0 md:left-[30%] top-[1%] bottom-[16%] z-[5]">
                  <div className="relative w-full h-full">
                    <Image
                      src="/meetemily/emily.png"
                      alt="Emily"
                      fill
                      className="object-contain object-center"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Percentage Circle - bottom right, overlapping */}
                <div className="absolute bottom-[10%] right-[-4%] md:left-[70%] w-[55%] max-w-[400px] z-[10]">
                  <div className="relative w-full aspect-[340/200]">
                    <img
                      src="/meetemily/percentage.svg"
                      alt="Resolution Rate"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

         
          </div>

          {/* RIGHT COLUMN — VISUALS (Desktop and up) */}
          <div className="relative hidden lg:block w-full lg:w-[480px] xl:w-[560px] 2xl:w-[600px] min-h-[520px] xl:min-h-[540px] self-stretch flex-shrink-0">
            {/* Graph Card (Back Layer) */}
            <div className="absolute top-[12%] left-[4%] z-[7] w-[52%] xl:w-[50%]">
              <div className="backdrop-blur-[2px] bg-white/80 border border-[rgba(227,227,227,0.3)] rounded-[16px] p-5 w-full aspect-[260/190] relative">
                <img
                  src="/meetemily/graph.svg"
                  alt="Customer Satisfaction Chart"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Woman Image (Middle Layer) */}
            <div className="absolute top-[10%] right-[5%] w-[66%] xl:w-[65%] aspect-[330/470] z-[8]">
              <Image
                src="/meetemily/emily.png"
                alt="Emily"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 0vw, 40vw"
              />
            </div>

            {/* Percentage Circle (Front Layer) */}
            <div className="absolute top-[48%] right-[-12%] xl:right-[-14%] w-[68%] xl:w-[66%] aspect-[340/200] z-[12]">
              <img
                src="/meetemily/percentage.svg"
                alt="Resolution Rate"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Content: Tabs and Detail Panel - Overlapping Content Container */}
        <div className="relative z-20 -mt-32 md:-mt-48 lg:-mt-40 xl:-mt-52 2xl:-mt-58 bg-[rgba(245,245,245,0.4)] rounded-2xl md:rounded-3xl p-3 md:p-4 w-full max-w-[720px] md:max-w-[1100px] lg:max-w-[1440px] xl:max-w-[1380px] flex flex-col gap-3 md:gap-4 items-stretch mx-auto">
          {/* Mobile / Tablet Tabs (Horizontal, Scrollable) */}
          <div className="w-full lg:hidden overflow-x-auto pb-3">
            <div className="flex gap-2 md:gap-3 w-max mx-auto">
              {tabList.map((tabKey) =>
                renderTabButton(tabKey, "horizontal")
              )}
            </div>
          </div>

          {/* Layout for Tabs + Detail Content */}
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4 items-stretch">
            {/* Left Panel: Tabs (Desktop) */}
            <div className="hidden lg:flex flex-col gap-3 md:gap-4 shrink-0 lg:max-w-[260px] xl:max-w-[320px]">
              <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
                {tabList.map((tabKey) =>
                  renderTabButton(tabKey, "vertical")
                )}
              </div>
            </div>

            {/* Right Panel: Detail Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-[16px] md:rounded-[18px] lg:rounded-[20px] p-5 md:p-7 lg:p-8 xl:p-9 flex flex-col gap-4 md:gap-5 lg:gap-6 w-full lg:flex-1 min-w-0">
              <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full">
                  {/* Title and Image Section */}
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[50px] items-start w-full">
                    <div className="flex flex-1 flex-col gap-5 md:gap-6 lg:gap-[31px] items-start min-w-0">
                      <div className="relative flex flex-col gap-1 items-start w-full">
                        {/* Placeholder to maintain height in flow */}
                        <div className="invisible pointer-events-none">
                          <h3 className="text-xl md:text-xl lg:text-xl xl:text-2xl leading-[28px] md:leading-[32px] lg:leading-[34px] xl:leading-[36px] font-semibold text-[#331e10] whitespace-pre-wrap">
                            {content.title}
                          </h3>
                        </div>
                        {/* Animated content overlay */}
                        <AnimatePresence>
                          <motion.div
                            key={`title-${activeTab}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0"
                          >
                            <h3 className="text-xl md:text-xl lg:text-xl xl:text-2xl leading-[28px] md:leading-[32px] lg:leading-[34px] xl:leading-[36px] font-semibold text-[#331e10] whitespace-pre-wrap">
                              {content.title}
                            </h3>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className="relative flex flex-col gap-2 items-start w-full">
                        {/* Placeholder to maintain height in flow */}
                        <div className="invisible pointer-events-none">
                          <p className="text-sm font-medium leading-[1.6] text-[#331e10] tracking-[-0.168px]">
                            What Emily Does
                          </p>
                          <div className="flex gap-2 items-center w-full">
                            <p className="flex-1 text-sm md:text-[15px] lg:text-base leading-5 md:leading-[22px] lg:leading-6 font-normal text-[rgba(51,30,16,0.6)] whitespace-pre-wrap">
                              {content.whatEmilyDoes}
                            </p>
                          </div>
                        </div>
                        {/* Animated content overlay */}
                        <AnimatePresence>
                          <motion.div
                            key={`whatEmilyDoes-${activeTab}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0"
                          >
                            <p className="text-sm font-medium leading-[1.6] text-[#331e10] tracking-[-0.168px]">
                              What Emily Does
                            </p>
                            <div className="flex gap-2 items-center w-full">
                              <p className="flex-1 text-sm md:text-[15px] lg:text-base leading-5 md:leading-[22px] lg:leading-6 font-normal text-[rgba(51,30,16,0.6)] whitespace-pre-wrap">
                                {content.whatEmilyDoes}
                              </p>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className="relative w-full">
                        {/* Placeholder to maintain height in flow */}
                        <div className="invisible pointer-events-none">
                          <Button
                            className="w-full h-[46px] md:h-[48px] lg:h-[50px] px-5 md:px-6 py-2 text-sm md:text-base"
                            variant="Primary"
                            size="sm"
                            href="/schedule-a-demo"
                          >
                            {content.buttonText}
                          </Button>
                        </div>
                        {/* Animated content overlay */}
                        <AnimatePresence>
                          <motion.div
                            key={`button-${activeTab}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0"
                          >
                            <Button
                              className="w-full h-[46px] md:h-[48px] lg:h-[50px] px-5 md:px-6 py-2 text-sm md:text-base"
                              variant="Primary"
                              size="sm"
                              href="/schedule-a-demo"
                            >
                              {content.buttonText}
                            </Button>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    {/* Image Container */}
                    <div className="relative bg-[#f0f0f0] w-full lg:flex-1 h-[260px] md:h-[300px] lg:h-[320px] xl:h-[324px] min-h-[260px] md:min-h-[300px] lg:min-h-[320px] xl:min-h-[324px] overflow-hidden rounded-xl md:rounded-2xl">
                      <div className="absolute bg-gradient-to-b from-transparent via-transparent to-[#fbf7f3] h-[168px] left-1/2 -translate-x-1/2 top-[calc(100%-68px)] w-full" />
                      <AnimatePresence>
                        <motion.div
                          key={`image-${activeTab}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={content.image}
                            alt={content.title}
                            fill
                            className="object-contain p-3 md:p-4"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Guardrails and Integrations */}
                  <div className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6 flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-start w-full">
                    {/* Placeholder to maintain height in flow */}
                    <div className="invisible pointer-events-none flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-start w-full">
                      <div className="flex flex-col gap-2 items-start">
                        <p className="text-sm font-medium leading-5 text-[#331e10] whitespace-pre-wrap min-w-full">
                          Guardrails
                        </p>
                        <div className="flex flex-col gap-2.5 md:gap-3 items-start">
                          {content.guardrails.map((item, index) => (
                            <div key={index} className="flex gap-2 items-center">
                              <div className="shrink-0">
                                <CheckIcon />
                              </div>
                              <p className="text-sm md:text-base leading-5 md:leading-6 font-normal text-[rgba(51,30,16,0.6)]">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 items-start flex-1">
                        <p className="text-sm font-medium leading-5 text-[#331e10] whitespace-pre-wrap min-w-full">
                          Integrations
                        </p>
                        <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-6 items-start">
                          {(() => {
                            const columns: string[][] = [];
                            for (let i = 0; i < content.integrations.length; i += 3) {
                              columns.push(content.integrations.slice(i, i + 3));
                            }

                            return columns.map((column, columnIndex) => (
                              <div key={`column-${columnIndex}`} className="flex flex-col gap-2.5 md:gap-3">
                                {column.map((item, index) => (
                                  <div key={`${columnIndex}-${index}`} className="flex gap-2 items-center">
                                    <div className="shrink-0">
                                      <CheckIcon />
                                    </div>
                                    <p className="text-sm md:text-base leading-5 md:leading-6 font-normal text-[rgba(51,30,16,0.6)]">
                                      {item}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ));
                          })()}
                        </div>
                      </div>
                    </div>
                    {/* Animated content overlay */}
                    <AnimatePresence>
                      <motion.div
                        key={`guardrails-${activeTab}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-start w-full p-4 md:p-5 lg:p-6"
                      >
                        <div className="flex flex-col gap-2 items-start">
                          <p className="text-sm font-medium leading-5 text-[#331e10] whitespace-pre-wrap min-w-full">
                            Guardrails
                          </p>
                          <div className="flex flex-col gap-2.5 md:gap-3 items-start">
                            {content.guardrails.map((item, index) => (
                              <div key={index} className="flex gap-2 items-center">
                                <div className="shrink-0">
                                  <CheckIcon />
                                </div>
                                <p className="text-sm md:text-base leading-5 md:leading-6 font-normal text-[rgba(51,30,16,0.6)]">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 items-start flex-1">
                          <p className="text-sm font-medium leading-5 text-[#331e10] whitespace-pre-wrap min-w-full">
                            Integrations
                          </p>
                          <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-6 items-start">
                            {(() => {
                              const columns: string[][] = [];
                              for (let i = 0; i < content.integrations.length; i += 3) {
                                columns.push(content.integrations.slice(i, i + 3));
                              }

                              return columns.map((column, columnIndex) => (
                                <div key={`column-${columnIndex}`} className="flex flex-col gap-2.5 md:gap-3">
                                  {column.map((item, index) => (
                                    <div key={`${columnIndex}-${index}`} className="flex gap-2 items-center">
                                      <div className="shrink-0">
                                        <CheckIcon />
                                      </div>
                                      <p className="text-sm md:text-base leading-5 md:leading-6 font-normal text-[rgba(51,30,16,0.6)]">
                                        {item}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              ));
                            })()}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* What Emily Enables For You */}
                  <div className="relative flex flex-col gap-1 items-start w-full">
                    {/* Placeholder to maintain height in flow */}
                    <div className="invisible pointer-events-none flex flex-col gap-1 items-start w-full">
                      <div className="flex gap-[10px] items-center justify-center">
                        <p className="text-sm font-medium leading-5 text-[#331e10] whitespace-pre-wrap">
                          What Emily Enables For You
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start w-full">
                        {content.enables.map((item, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-xl px-4 md:px-5 lg:px-6 py-3 md:py-4 flex flex-col gap-2 items-start flex-1 min-w-0"
                          >
                            <div className="flex gap-2 items-center">
                              <div className="shrink-0">
                                <ArrowIcon />
                              </div>
                              <p className="text-sm md:text-base leading-5 md:leading-6 font-normal text-[rgba(51,30,16,0.6)]">
                                {item}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Animated content overlay */}
                    <AnimatePresence>
                      <motion.div
                        key={`enables-${activeTab}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 flex flex-col gap-1 items-start w-full"
                      >
                        <div className="flex gap-[10px] items-center justify-center">
                          <p className="text-sm font-medium leading-5 text-[#331e10] whitespace-pre-wrap">
                            What Emily Enables For You
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start w-full">
                          {content.enables.map((item, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-xl px-4 md:px-5 lg:px-6 py-3 md:py-4 flex flex-col gap-2 items-start flex-1 min-w-0"
                            >
                              <div className="flex gap-2 items-center">
                                <div className="shrink-0">
                                  <ArrowIcon />
                                </div>
                                <p className="text-sm md:text-base leading-5 md:leading-6 font-normal text-[rgba(51,30,16,0.6)]">
                                  {item}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}