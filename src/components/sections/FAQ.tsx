"use client";

import React, { useState } from "react";
import Accordion from "@/components/ui/Accordion";
import { motion, AnimatePresence } from "framer-motion";

// Scrollbar & responsive tweaks
const scrollbarStyles = `
  /* Default: allow system scrollbar on small screens, hide on large screens */
  .custom-scrollbar {
    -webkit-overflow-scrolling: touch;
    scrollbar-gutter: stable;
  }

  /* Show custom scrollbar on all screens */
  .custom-scrollbar::-webkit-scrollbar {
    height: 8px;
    display: block;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #e8e8e8;
    border-radius: 10px;
    margin: 0 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #f48024;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #e0701a;
  }
  /* Firefox */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #f48024 #e8e8e8;
  }
`;

const categories = [
  "Product Overview & Capabilities",
  "Integration & Implementation",
  "Security & Compliance",
  "Operational & Financial Impact",
  "Use Cases by Customer Type",
];
const faqData = {
  "Product Overview & Capabilities": [
    {
      id: "prod-1",
      question: "What is Flow AI, and how does it help healthcare organizations?",
      answer: "Flow AI is an intelligent patient access (pre-visit) automation platform designed specifically for healthcare providers. It is designed to help you streamline your fax/inbox management, insurance verification / eligibility, appointment scheduling, patient intake, and provide 24x7 patient support—reducing manual work and improving operational efficiency.",
    },
    {
      id: "prod-2",
      question: "How does Flow AI integrate with existing EHR or practice management systems?",
      answer: "Flow AI integrates seamlessly with leading EHRs and PM systems using secure APIs, HL7, and FHIR interfaces. Our team works with your IT department to ensure bi-directional data flow without disrupting your existing workflow.",
    },
    {
      id: "prod-3",
      question: "What differentiates Flow AI from traditional scheduling or call-center automation tools?",
      answer: "Unlike generic tools or point solutions, Flow AI is healthcare-native and designed to automate your pre- patient visit workflow end-to-end from fax/referral to the patient visit. Flow AI’s platform is built with a contextual reasoning engine and specialty workflows for each of your Healthcare specialties to deliver the outcomes that matter to you with compliance and accuracy.",
    },
    {
      id: "prod-4",
      question: "Can Flow AI support both centralized and decentralized scheduling models?",
      answer: "Yes. Flow AI supports both centralized scheduling hubs and decentralized site-based workflows. It can adapt to the organizational structure of large health systems, multi- specialty groups, and ASCs.",
    },
    {
      id: "prod-5",
      question: "Is Flow AI scalable for enterprise-wide deployment?",
      answer: "Absolutely. Flow AI is cloud-native and scalable, supporting hundreds of sites and thousands of users with robust data governance, role-based access, and centralized reporting.",
    },
  ],
  "Integration & Implementation": [
    {
      id: "int-1",
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on the time it takes for integration with your EMR or system(s) of record. Most customers go live within 4–10 weeks, with enterprise rollouts managed in phased deployments.",
    },
    {
      id: "int-2",
      question: "Who manages the integration process?",
      answer: "Our dedicated implementation team manage the integration process. We require a minimum ‘lift’ from your IT teams. We usually set up weekly update call with your leadership, IT and Operations teams to ensure alignment through the Integration & Deployment cycle. We complete rigorous testing of our Agents and get your approval / sign off – before ‘Go Live’.",
    },
    {
      id: "int-3",
      question: "What support do you provide during and after go-live?",
      answer: "We provide end-to-end implementation support, staff training, and post-go-live optimization. Customers get access to our customer success team and a 24/7 support portal including real-time analytics on performance of our AI Agents.",
    },
    {
      id: "int-4",
      question: "Can Flow AI work with custom workflows unique to our organization?",
      answer: "Yes. Flow AI’s contextual reasoning engine is designed to configure the rules engine for our AI Agents to incorporate your custom / specialty-specific workflows, provider preferences, and operational nuances.",
    },
    {
      id: "int-5",
      question: "Does Flow AI require replacing our current scheduling or EMR systems?",
      answer: "No. Flow AI complements & works with your existing systems—it automates and optimizes scheduling while syncing data with your EMR / system of record. No ‘rip & replace’ of systems required.",
    },
  ],
  "Security & Compliance": [
    {
      id: "sec-1",
      question: "Is Flow AI HIPAA compliant?",
      answer: "Yes. Flow AI is fully HIPAA-compliant and undergoes regular third-party security audits to ensure data protection and regulatory compliance. See our Trust Center for more details.",
    },
    {
      id: "sec-2",
      question: "How does Flow AI ensure patient data security?",
      answer: "We use end-to-end encryption, role-based access control, and detailed audit logs. Data is encrypted both in transit and at rest using industry-standard protocols.",
    },
    {
      id: "sec-3",
      question: "Where is the data stored?",
      answer: "We store NO patient data on our platform. Your EMR remains the single source of truth for all patient data. All (other) data on our platform is securely hosted in U.S.-based, HITRUST-certified cloud environments that meet healthcare-grade compliance standards.",
    },
    {
      id: "sec-4",
      question: "Does Flow AI support multi-factor authentication (MFA)?",
      answer: "Yes. MFA and SSO (Single Sign-On) are supported to align with your organization’s security policies.",
    },
    {
      id: "sec-5",
      question: "How do you handle business associate agreements (BAAs)?",
      answer: "We execute BAAs with all customers and partners to ensure full compliance with HIPAA regulations.",
    },
  ],
  "Operational & Financial Impact": [
    {
      id: "ops-1",
      question: "How does Flow AI improve patient access performance?",
      answer: "Flow AI automates referral triage, eligibility verification, and scheduling outreach, reducing no-shows and accelerating patient throughput.",
    },
    {
      id: "ops-2",
      question: "Can Flow AI help reduce staffing costs?",
      answer: "Yes. Many customers see a 70–80% reduction in manual scheduling tasks, allowing staff to focus on high-value interactions.",
    },
    {
      id: "ops-3",
      question: "What ROI can we expect from Flow AI?",
      answer: "Most organizations achieve ROI within 6–9 months through increased scheduling efficiency, reduced leakage, and improved patient satisfaction. On our meeting with you, we will be happy to concretely walk you through outcome improvements we have delivered to the customers we serve.",
    },
    {
      id: "ops-4",
      question: "Does Flow AI provide analytics or reporting tools?",
      answer: "Yes. Flow AI offers real-time dashboards and analytics for referral trends, scheduling performance, and operational efficiency metrics.",
    },
    {
      id: "ops-5",
      question: "Can Flow AI help increase revenue capture?",
      answer: "Absolutely. By reducing referral leakage and ensuring patients are scheduled efficiently, Flow AI directly supports top-line growth.",
    },
  ],
  "Use Cases by Customer Type": [
    {
      id: "use-1",
      question: "How do Health Systems benefit from Flow AI?",
      answer: "Flow AI enables fax/inbox management, centralized scheduling, better coordination across specialties, and consistent patient access across large, mid-sized and small Health Systems. Health Systems are seeing a better patient experience, operational efficiency and EBITDA improvement through the deployment of Flow AI Agents.",
    },
    {
      id: "use-2",
      question: "How does Flow AI support Physician Groups?",
      answer: "Physician groups use Flow AI to automate inbound referrals, manage appointment preferences, and optimize resource allocation across sites.",
    },
    {
      id: "use-3",
      question: "What value does Flow AI bring to Ambulatory Surgery Centers (ASCs)?",
      answer: "ASCs use Flow AI to improve case scheduling accuracy, coordinate pre-op clearances, and minimize unused block time.",
    },
    {
      id: "use-4",
      question: "How is Flow AI used by Radiology Groups or IDTFs?",
      answer: "Radiology groups use Flow AI for automated order intake, modality-based scheduling, and proactive patient communication to reduce no-shows.",
    },
    {
      id: "use-5",
      question: "Can Flow AI support Home Healthcare providers?",
      answer: "Yes. Flow AI manages visit scheduling, patient follow-ups, and routing logistics for home health agencies, improving efficiency and patient engagement.",
    },
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const activeCategoryIndex = categories.findIndex((cat) => cat === activeCategory);
  return (
    <div className="w-full bg-white py-[50px] px-5 md:px-20 flex flex-col items-center gap-10">
      <style>{scrollbarStyles}</style>
  
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 max-w-[800px]">
        <h2 className="text-4xl md:text-5xl font-medium text-[#130F0C] tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-[#423F3D]">
          Have another question? Please contact our team!
        </p>
      </div>
  
      {/* Content Container */}
      <div className="w-full max-w-[1280px] flex flex-col gap-4 items-center">

        {/* Tabs wrapper: horizontally scrollable with custom scrollbar */}
        <div className="w-full bg-neutral-100 rounded-[48px] p-2">
          <div className="overflow-x-auto custom-scrollbar w-full">
            <div className="flex items-stretch gap-[10px] lg:min-w-full w-max lg:w-full">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    animate={{ opacity: isActive ? 1 : 0.85 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`lg:flex-1 flex flex-col items-center justify-center p-4 rounded-[48px] text-sm text-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f48024] hover:bg-white/60 min-w-fit lg:min-w-0 whitespace-nowrap lg:whitespace-normal ${
                      isActive
                        ? "bg-white border border-white  text-black"
                        : "border border-transparent font-normal text-[rgba(19,15,12,0.8)]"
                    }`}
                  >
                    <span className="lg:whitespace-pre-wrap lg:break-words">
                      {category}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
  
        {/* Accordion Container */}
        <div className="w-full bg-[rgba(245,245,245,0.4)] rounded-[30px] p-2">
          <div className="w-full">
            <Accordion
              items={faqData[activeCategory as keyof typeof faqData]}
              variant="card"
              icon="plus"
              allowMultiple={false}
              className="gap-4"
              activeCategory={activeCategory}
              activeCategoryIndex={activeCategoryIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}