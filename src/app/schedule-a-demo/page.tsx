"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextarea";
import FormMultiSelect from "@/components/ui/FormMultiSelect";
import { useState, FormEvent, useEffect, useCallback } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ScheduleADemo() {
  const agentOptions = [
    "Scheduling Agent",
    "Patient Intake Agent",
    "Customer Support Agent",
  ];

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
    howCanWeHelp: "",
    agentsDropdown: [] as string[],
    howDidYouHear: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Blur any active element when form is submitted
  useEffect(() => {
    if (isSubmitted) {
      // Blur any active element
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
  }, [isSubmitted]);

  const toggleAgent = useCallback((agent: string) => {
    setFormData((prev) => ({
      ...prev,
      agentsDropdown: prev.agentsDropdown.includes(agent)
        ? prev.agentsDropdown.filter((a) => a !== agent)
        : [...prev.agentsDropdown, agent],
    }));
  }, []);

  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [fieldErrors]);

  const validateForm = useCallback(() => {
    const errors: Record<string, string> = {};

    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.workEmail.trim()) {
      errors.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errors.workEmail = "Invalid email format";
    }
    if (!formData.company.trim()) errors.company = "Company is required";
    if (!formData.jobTitle.trim()) errors.jobTitle = "Job title is required";
    if (!formData.howCanWeHelp.trim())
      errors.howCanWeHelp = "Please tell us how we can help";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.myflowai.com/api/v1/call-actions",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: formData.firstName,
            last_name: formData.lastName,
            work_email: formData.workEmail,
            phone_number: formData.phoneNumber || "",
            company: formData.company,
            title_designation: formData.jobTitle,
            how_can_we_help: formData.howCanWeHelp,
            agents_dropdown: formData.agentsDropdown,
            how_did_you_hear_about_us: formData.howDidYouHear || "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();

      if (result.status) {
        toast.success(result.message || "Form submitted successfully!");
        setIsSubmitted(true);
        // Scroll to top only on desktop (screen width > 1024px)
        if (typeof window !== 'undefined' && window.innerWidth > 1024) {
          // Delay scroll to allow state update and prevent focus issues
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        }
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navbar />
      <main className="pt-[94px]">
        {/* Top Section with Gradient Background */}
        <section className="relative w-full min-h-screen flex items-center">
          {/* Gradient Background */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: "linear-gradient(187deg, rgba(246, 214, 171, 0.13) 13%,rgba(255, 210, 154, 0.63) 30%, rgba(240, 198, 156, 0.53) 45%, rgba(245, 163, 80, 0.39) 56%, rgba(241, 196, 128, 0.33) 72%,rgb(253, 253, 253) 90%)"
            }}
            
          />

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-[1296px] mx-auto px-5 md:px-10 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Side: Content */}
              <div className="relative flex flex-col bg-white/50 backdrop-blur-[10px] border border-white rounded-3xl p-6 md:p-8 shadow-xl gap-8 text-[#130f0c]">
                {/* Heading */}
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-4">
                    Schedule a Demo
                  </h1>

                  <p className="text-sm md:text-base text-[#130f0c]/80 leading-relaxed max-w-[600px]">
                    Discover how Emily—your AI-powered super-employee—handles patient access
                    from start to finish.
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-col gap-6">

                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12.0001L5 12.0001M19 12.0001L13 6.00006M19 12.0001L13 18.0001" stroke="#F48024" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-base md:text-lg text-[#130f0c] font-medium">
                        See how Emily transforms the entire patient access workflow
                      </p>
                      <p className="text-sm md:text-base text-[#130f0c]/80 leading-relaxed mt-1">
                        From scheduling and intake to benefits checks and fax processing, she
                        automates every repetitive task.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12.0001L5 12.0001M19 12.0001L13 6.00006M19 12.0001L13 18.0001" stroke="#F48024" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-base md:text-lg text-[#130f0c] font-medium">
                        Explore how seamlessly she works within your existing systems
                      </p>
                      <p className="text-sm md:text-base text-[#130f0c]/80 leading-relaxed mt-1">
                        Emily operates directly inside your EMR, telephony tools, and workflows,
                        following your policies with human-level reasoning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12.0001L5 12.0001M19 12.0001L13 6.00006M19 12.0001L13 18.0001" stroke="#F48024" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-base md:text-lg text-[#130f0c] font-medium">
                        Understand why Flow AI powers true end-to-end automation
                      </p>
                      <p className="text-sm md:text-base text-[#130f0c]/80 leading-relaxed mt-1">
                        Not just point solutions—Flow AI orchestrates complete workflows,
                        connecting every step from inbox to visit.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Side: Form Card */}
              <div className="lg:sticky lg:top-24">
                <div style={{ minHeight: "600px" }}>
                  <motion.div
                    initial={false}
                    animate={{ rotateY: isSubmitted ? 180 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ 
                      transformStyle: "flat",
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {/* Front of Card - Form */}
                    <div
                      className="bg-white/50 backdrop-blur-[10px] border border-white rounded-3xl p-6 md:p-8 shadow-xl"
                      style={{
                        position: "relative",
                        width: "100%",
                        opacity: isSubmitted ? 0 : 1,
                        pointerEvents: isSubmitted ? "none" : "auto",
                        transition: "opacity 0.4s ease-in-out",
                      }}
                    >
                      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
                        {/* Row: First + Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <FormInput
                            label="First name"
                            required
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            error={fieldErrors.firstName}
                          />
                          <FormInput
                            label="Last name"
                            required
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            error={fieldErrors.lastName}
                          />
                        </div>

                        <FormInput
                          label="Work email"
                          required
                          type="email"
                          name="workEmail"
                          value={formData.workEmail}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          error={fieldErrors.workEmail}
                        />

                        {/* Phone Input with Country Code */}
                        <div className="flex flex-col">
                          <label className="text-[#130f0c] mb-1 font-medium text-sm">
                            Phone number (optional)
                          </label>
                          <PhoneInput
                            defaultCountry="us"
                            value={formData.phoneNumber}
                            onChange={(phone) =>
                              setFormData((prev) => ({ ...prev, phoneNumber: phone }))
                            }
                            className="react-international-phone-input"
                            style={
                              {
                                "--react-international-phone-height": "48px",
                                "--react-international-phone-border-radius": "0.5rem",
                                "--react-international-phone-border-color": "#d1d5db",
                                "--react-international-phone-background-color": "#ffffff",
                                "--react-international-phone-text-color": "#130f0c",
                                "--react-international-phone-selected-dropdown-item-background-color":
                                  "#f48024",
                              } as React.CSSProperties
                            }
                          />
                        </div>

                        <FormInput
                          label="Company"
                          required
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company Name"
                          error={fieldErrors.company}
                        />

                        <FormInput
                          label="Job Title"
                          required
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          placeholder="e.g., CTO, Operations Manager"
                          error={fieldErrors.jobTitle}
                        />

                        <FormTextarea
                          label="How can we help?"
                          required
                          name="howCanWeHelp"
                          value={formData.howCanWeHelp}
                          onChange={handleInputChange}
                          placeholder="What challenges are you looking to overcome?"
                          error={fieldErrors.howCanWeHelp}
                        />

                        {/* Agents dropdown with checkboxes (Optional) */}
                        <FormMultiSelect
                          label="Agents Needed (optional)"
                          required={false}
                          options={agentOptions}
                          selectedValues={formData.agentsDropdown}
                          onToggle={toggleAgent}
                        />

                        {/* How did you hear about us */}
                        <FormTextarea
                          label="How did you hear about us? (optional)"
                          required={false}
                          name="howDidYouHear"
                          value={formData.howDidYouHear}
                          onChange={handleInputChange}
                          placeholder="Search, referral, social media..."
                        />

                        {/* Privacy Statement */}
                        <p className="text-xs text-gray-600 mt-2">
                          By submitting, you confirm that you agree to the processing of
                          your personal data as described in the{" "}
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
                          disabled={isSubmitting}
                          aria-label={isSubmitting ? "Submitting your demo request..." : "Submit demo request"}
                          className="mt-4 w-full py-4 rounded-xl font-semibold text-white
                                     bg-[#f48024] hover:bg-[#d86f1e] transition shadow-lg
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              SUBMITTING...
                            </>
                          ) : (
                            "SUBMIT"
                          )}
                        </button>
                      </form>
                    </div>

                    {/* Back of Card - Thank You Message */}
                    <div
                      className="bg-white/50 backdrop-blur-[10px] border border-white rounded-3xl p-6 md:p-8 shadow-xl"
                      style={{
                        position: "absolute",
                        width: "100%",
                        top: 0,
                        left: 0,
                        opacity: isSubmitted ? 1 : 0,
                        pointerEvents: isSubmitted ? "auto" : "none",
                        transform: "rotateY(180deg)",
                        zIndex: isSubmitted ? 1 : 0,
                        transition: "opacity 0.4s ease-in-out",
                      }}
                    >
                      <div className="flex flex-col items-center justify-center text-center py-16 px-8 min-h-[500px]">
                        <div className="mb-6">
                          <svg
                            className="w-20 h-20 text-green-500 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#130f0c] mb-4">
                          Thank You!
                        </h2>
                        <p className="text-lg md:text-xl text-[#130f0c]/80 leading-relaxed">
                          Thanks! We&apos;ve received your details. We&apos;re excited to show
                          how we can help transform your workflows.
                        </p>
                      </div>
                    </div>
                  </motion.div>
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

