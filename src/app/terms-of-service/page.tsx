import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service - Flow AI",
  description: "Flow AI's Terms of Use. Learn about the terms and conditions governing your use of our website, platform, and related services.",
};

const HorizontalLine = () => (
  <div className="w-full my-8 md:my-12">
    <Image
      src="/icons/horizontalline.svg"
      alt=""
      width={1200}
      height={3}
      className="w-full h-auto"
      priority
    />
  </div>
);

const termsSections = [
  {
    title: "1. Eligibility & User Representations",
    content: (
      <>
        <p>By using our Services, you represent and warrant that:</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>You have the legal capacity to enter into these Terms</li>
          <li>You are not a minor in your jurisdiction</li>
          <li>You will comply with all applicable laws and regulations</li>
          <li>You will not access our Services through automated or non-human means (e.g., bots or scripts)</li>
          <li>You will not use our Services for any unlawful or unauthorized purpose</li>
        </ul>
      </>
    )
  },
  {
    title: "2. Accounts & Security",
    content: (
      <p>If you register an account, you agree to provide accurate, current, and complete information. You are responsible for safeguarding your login credentials and for all activities under your account. Flow AI is not liable for losses caused by unauthorized use of your account.</p>
    )
  },
  {
    title: "3. Intellectual Property Rights",
    content: (
      <p>All content, software, designs, functionality, trademarks, logos, and intellectual property made available through our Services are the exclusive property of Flow AI or its licensors. You may not reproduce, distribute, modify, or exploit any portion of our Services without express written permission.</p>
    )
  },
  {
    title: "4. Prohibited Activities",
    content: (
      <>
        <p>You agree not to:</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Copy, scrape, or aggregate content without authorization</li>
          <li>Circumvent security or access restrictions</li>
          <li>Upload viruses, malware, or harmful code</li>
          <li>Use our Services to harass, defraud, or harm others</li>
          <li>Misrepresent your identity or impersonate others</li>
          <li>Use our Services for commercial activities without prior approval</li>
        </ul>
      </>
    )
  },
  {
    title: "5. Privacy Policy",
    content: (
      <p>Your use of our Services is also governed by our Privacy Policy, which explains how we collect, use, and protect your data. By using our Services, you consent to the practices described in our Privacy Policy.</p>
    )
  },
  {
    title: "6. Third-Party Services",
    content: (
      <p>Our Services may link to third-party websites or integrate with third-party tools. Flow AI does not endorse or assume responsibility for third-party content, services, or practices. Your interactions with third parties are solely between you and such third parties.</p>
    )
  },
  {
    title: "7. Disclaimers",
    content: (
      <p>Our Services are provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind, express or implied. We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted or error-free service.</p>
    )
  },
  {
    title: "8. Limitation of Liability",
    content: (
      <p>To the fullest extent permitted by law, Flow AI and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or related to your use of our Services. Our total liability shall not exceed the amount you paid to us (if any) for using the Services within the last 12 months.</p>
    )
  },
  {
    title: "9. Indemnification",
    content: (
      <p>You agree to defend, indemnify, and hold harmless Flow AI, its affiliates, and their officers, directors, and employees from and against any claims, damages, liabilities, losses, and expenses arising out of your use of our Services, your violation of these Terms, or your infringement of third-party rights.</p>
    )
  },
  {
    title: "10. Termination",
    content: (
      <p>We may suspend or terminate your access to our Services at any time, with or without notice, if we believe you have violated these Terms or applicable law. Upon termination, your right to use our Services ceases immediately.</p>
    )
  },
  {
    title: "11. Governing Law & Dispute Resolution",
    content: (
      <p>These Terms are governed by the laws of the jurisdiction in which Flow AI operates. Any disputes shall be resolved through binding arbitration or competent courts located in that jurisdiction, unless otherwise required by applicable law.</p>
    )
  },
  {
    title: "12. Modifications",
    content: (
      <p>We reserve the right to update these Terms at our discretion. Updates will be effective upon posting, and it is your responsibility to review the Terms periodically. Continued use of our Services constitutes acceptance of revised Terms.</p>
    )
  },
  {
    title: "13. Contact Information",
    content: (
      <p>For questions about these Terms, please contact us at: <a href="mailto:solutions@myflowai.com" className="text-blue-600 underline">solutions@myflowai.com</a></p>
    )
  }
];

export default function TermsOfService() {
  return (
    <div
      className="min-h-screen pt-15 relative overflow-hidden"
      style={{
        background: "linear-gradient(187.36deg,rgba(245, 174, 74, 0.18) 13.74%,rgba(247, 178, 82, 0.53) 29.44%,rgba(253, 166, 90, 0.65) 43.7%,rgba(240, 118, 12, 0.56) 55.92%, rgba(250, 174, 67, 0.36) 72.74%, rgba(255, 255, 255, 0) 90.11%)",
      }}
    >
      <Navbar />

      <main className="flex justify-center px-5 md:px-10 py-16 md:py-20 relative z-10">
        <div className="w-full max-w-[1296px] rounded-3xl bg-white p-8 md:p-12 lg:p-16 backdrop-blur-sm shadow-sm border border-white/20">
          {/* Header Section */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c275e] mb-4 md:mb-6 text-left">
              Terms of Service
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1c275e] mb-3 md:mb-4 text-left">
              Website Terms of Use
            </h2>
            <p className="text-sm md:text-base text-[#717171] mb-6 md:mb-8 text-left">
              Last Updated: June 1, 2025
            </p>
            <div className="text-left">
              <p className="text-base md:text-lg leading-7 text-[#130f0c] mb-4">
                Welcome to Flow AI. These Terms of Use govern your access to and use of our website (www.myflowai.com), platform, and related services (collectively, the 'Services'). By using our Services, you agree to these Terms. If you do not agree, you must discontinue use immediately.
              </p>
            </div>
          </div>

          <HorizontalLine />

          {/* Terms Sections */}
          {termsSections.map((section, index) => (
            <div key={index}>
              <section className="mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1c275e] mb-6 md:mb-8 text-left">
                  {section.title}
                </h3>
                <div className="text-left">
                  <div className="text-base md:text-base leading-7 text-[#130f0c]">
                    {section.content}
                  </div>
                </div>
              </section>
              {index < termsSections.length - 1 && <HorizontalLine />}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

