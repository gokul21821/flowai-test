"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useState } from "react";

// Icon components for bullet points
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
    <path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M14 2v6h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M16 13H8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M16 17H8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M10 9H8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const GridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

// Form Input Component
function Input({
  label,
  required,
  ...rest
}: {
  label: string;
  required?: boolean;
  [key: string]: any;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-[#130f0c] mb-1 font-medium text-sm">
        {label} {required && <span className="text-[#f48024]">*</span>}
      </label>
      <input
        {...rest}
        required={required}
        className="bg-white border border-gray-300 text-[#130f0c] rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#f48024] transition"
      />
    </div>
  );
}

// Form Textarea Component
function Textarea({
  label,
  required,
  ...rest
}: {
  label: string;
  required?: boolean;
  [key: string]: any;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-[#130f0c] mb-1 font-medium text-sm">
        {label} {required && <span className="text-[#f48024]">*</span>}
      </label>
      <textarea
        {...rest}
        required={required}
        className="bg-white border border-gray-300 text-[#130f0c] rounded-lg px-4 py-3 h-[120px] placeholder-gray-400 focus:outline-none focus:border-[#f48024] transition resize-none"
      />
    </div>
  );
}

// Form Select Component
function Select({
  label,
  required,
  options,
  ...rest
}: {
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
  [key: string]: any;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-[#130f0c] mb-1 font-medium text-sm">
        {label} {required && <span className="text-[#f48024]">*</span>}
      </label>
      <select
        {...rest}
        required={required}
        className="bg-white border border-gray-300 text-[#130f0c] rounded-lg px-4 py-3 focus:outline-none focus:border-[#f48024] transition"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Multi-Select Dropdown with Checkboxes
function MultiSelectDropdown({
  label,
  required,
  options,
  selectedValues,
  onToggle,
}: {
  label: string;
  required?: boolean;
  options: string[];
  selectedValues: string[];
  onToggle: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const getDisplayText = () => {
    if (selectedValues.length === 0) return "Select";
    if (selectedValues.length === 1) return selectedValues[0];
    return `${selectedValues.length} selected`;
  };

  return (
    <div className="flex flex-col relative">
      <label className="text-[#130f0c] mb-1 font-medium text-sm">
        {label} {required && <span className="text-[#f48024]">*</span>}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-gray-300 text-[#130f0c] rounded-lg px-4 py-3 text-left focus:outline-none focus:border-[#f48024] transition flex items-center justify-between"
      >
        <span className={selectedValues.length === 0 ? "text-gray-400" : ""}>
          {getDisplayText()}
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Overlay to close dropdown */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
            <div className="p-2">
              {options.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option)}
                    onChange={() => onToggle(option)}
                    className="w-4 h-4 accent-[#f48024] cursor-pointer"
                  />
                  <span className="text-sm text-[#130f0c]">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function ScheduleADemo() {
  const agentOptions = [
    "Scheduling Agent",
    "Patient Intake Agent",
    "Customer Support Agent",
  ];

  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);

  const toggleAgent = (agent: string) => {
    setSelectedAgents((prev) =>
      prev.includes(agent)
        ? prev.filter((a) => a !== agent)
        : [...prev, agent]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[94px]">
        {/* Top Section with Gradient Background */}
        <section className="relative w-full min-h-screen flex items-center">
          {/* Gradient Background */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(187.36deg, #FFFFFF 13.74%, #FEF5D6 29.44%,rgba(255, 204, 146, 0.7) 43.7%,rgba(255, 172, 130, 0.69) 55.92%, rgba(241, 200, 179, 0.51) 72.74%, rgb(255, 255, 255) 90.11%)",
                backgroundPosition: "0px 100px",
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-[1296px] mx-auto px-5 md:px-10 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Side: Content */}
              <div className="flex flex-col bg-white/50 backdrop-blur-[10px] border border-white rounded-3xl p-6 md:p-8 shadow-xl gap-8 text-[#130f0c]">
                {/* Heading */}
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-4">
                    Schedule a demo with our team
                  </h1>
                  <p className="text-lg md:text-xl text-[#130f0c]/80 leading-relaxed">
                    Discover how Flow AI partners with healthcare organizations to transform patient access and improve outcomes through intelligent automation.
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[#130f0c] mt-1">
                      <HeartIcon />
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-[#130f0c]/80 leading-relaxed">
                        Learn best practices for implementing value-based care programs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#130f0c] mt-1">
                      <DocumentIcon />
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-[#130f0c]/80 leading-relaxed">
                        Discover how health systems drive performance and outcomes with Flow AI
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#130f0c] mt-1">
                      <GridIcon />
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-[#130f0c]/80 leading-relaxed">
                        Explore solutions and use cases for healthcare teams
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Side: Form Card */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-white/50 backdrop-blur-[10px] border border-white rounded-3xl p-6 md:p-8 shadow-xl">
                  <form className="grid grid-cols-1 gap-5">
                    {/* Row: First + Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input label="First name" required placeholder="John" />
                      <Input label="Last name" required placeholder="Doe" />
                    </div>

                    <Input
                      label="Work email"
                      required
                      type="email"
                      placeholder="name@company.com"
                    />

                    <Input
                      label="Phone number (optional)"
                      required={false}
                      type="tel"
                      placeholder="555-123-4567"
                    />

                    <Input
                      label="Company"
                      required
                      placeholder="Company Name"
                    />

                    <Textarea
                      label="How can we help?"
                      required
                      placeholder="What challenges are you looking to overcome?"
                    />

                    {/* Agents dropdown with checkboxes (Optional) */}
                    <MultiSelectDropdown
                      label="Agents Needed (optional)"
                      required={false}
                      options={agentOptions}
                      selectedValues={selectedAgents}
                      onToggle={toggleAgent}
                    />

                    {/* How did you hear about us */}
                    <Textarea
                      label="How did you hear about us? (optional)"
                      required={false}
                      placeholder="Search, referral, social media..."
                    />

                    {/* Privacy Statement */}
                    <p className="text-xs text-gray-600 mt-2">
                      By submitting, you confirm that you agree to the processing of your personal data as described in the{" "}
                      <a
                        href="/privacy-policy"
                        className="text-[#f48024] hover:underline"
                      >
                        Privacy Statement
                      </a>
                      .
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="mt-4 w-full py-4 rounded-xl font-semibold text-white 
                                 bg-[#f48024] hover:bg-[#d86f1e] transition shadow-lg"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

