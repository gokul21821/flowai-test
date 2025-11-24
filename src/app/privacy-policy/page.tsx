import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy - Flow AI",
  description: "Flow AI's HIPAA Compliance and Data Privacy Policy. Learn how we collect, use, share, and protect your data and Personal Information.",
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

const privacyPolicySections = [
  {
    title: "1. What Is Personal Information?",
    content: (
      <>
        <p>"Personal Information" is information that identifies or relates to a particular individual. Examples of Personal Information include:</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Mailing address</li>
          <li>Online identifiers</li>
        </ul>
      </>
    )
  },
  {
    title: "2. How We Use Personal Information",
    content: (
      <>
        <p>We use Personal Information for purposes including:</p>
        <ul className="list-disc list-inside mt-4 mb-4 space-y-2">
          <li>Providing our Site and Services to you</li>
          <li>Analyzing, administering, and improving the Site and Services</li>
          <li>Enabling secure use of the Site and Services</li>
          <li>Billing and payment (including processing payments) for Services</li>
          <li>Sending information and promotional materials</li>
          <li>Protecting our rights or our property</li>
          <li>Meeting legal obligations</li>
          <li>For other purposes related to the reasons for which you provide Personal Information</li>
        </ul>
        <p>We will retain your Personal Information for the period necessary to fulfill the purposes for which your Personal Information has been collected as outlined in this Privacy Policy unless a longer retention period is required by law.</p>
      </>
    )
  },
  {
    title: "3. Types Of Personal Information We Collect And Use",
    content: (
      <>
        <p><strong className="text-[#1c275e]">A. Information that You Provide Us</strong></p>
        <p className="mt-4">In various places on the Site and Services, we request information from you via forms. The exact information we need to collect (including Personal Information) will depend on the purpose of the form.</p>
        <p className="mt-4"><strong className="text-[#1c275e]">Examples of information we collect:</strong></p>
        <ul className="list-disc list-inside mt-2 mb-4 space-y-2">
          <li>When you open an account: name, email address, and phone number</li>
          <li>When you purchase services: payment information (health insurance details, credit/debit card numbers, expiration date, CVV), health information, and behavioral information (eating habits, mood and demeanor information, etc.)</li>
        </ul>
        <p>We will indicate on the form whether a particular field of information is mandatory or optional. If you choose not to provide certain information, we may not be able to provide requested services.</p>
        
        <p className="mt-6"><strong className="text-[#1c275e]">B. Information We Automatically Collect from You</strong></p>
        <p className="mt-4">We collect the following types of information automatically through your use of the Site and Services:</p>
        
        <ul className="list-disc list-inside mt-4 space-y-6">
          <li>
            <strong className="text-[#1c275e]">Cookies, Device Identifiers, and Similar Technologies</strong>
            <p className="mt-2">When you use or access the Site and Services, we and our service providers use cookies, device identifiers, and similar technologies such as pixels, web beacons, and local storage to collect information about how you use the Site and Services. We process the information collected through such technologies to:</p>
            <ul className="list-disc list-inside mt-2 ml-6 space-y-1">
              <li>Help operate certain features of the Site and Services</li>
              <li>Enhance your experience through personalization</li>
              <li>Better understand the features of the Site and Services that you and other users are most interested in</li>
              <li>Facilitate user log-in and navigation</li>
            </ul>
            <p className="mt-2">Most browsers provide you with the ability to block, delete, or disable cookies, and your mobile device may allow you to disable transmission of unique identifiers and location data. If you choose to reject cookies or block device identifiers, some features of the Site and Services may not be available or some functionality may be limited or unavailable.</p>
            <p className="mt-2">Some of our service providers may use cookies or other methods to gather information regarding your use of the Site and Services. We do not respond to Do Not Track ("DNT") signals sent to us by your browser at this time. To learn more about how DNT works, please visit <a href="http://allaboutdnt.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">http://allaboutdnt.com/</a>.</p>
          </li>
          
          <li>
            <strong className="text-[#1c275e]">Analytics</strong>
            <p className="mt-2">To assist us with analyzing our website traffic through cookies and similar technologies, we use analytics services, including Google Analytics. For more information on Google Analytics' processing of your information, please see "How Google uses data when you use our partners' sites or apps."</p>
          </li>
          
          <li>
            <strong className="text-[#1c275e]">Advertising</strong>
            <p className="mt-2">We may engage third parties, including social media platforms, who use cookies, pixel tags, and other storage technologies to collect or receive information from our website and elsewhere on the internet to provide marketing services to us, including targeted advertising. If you want to learn more, including how you may opt-out of targeted advertising, you should visit:</p>
            <ul className="list-disc list-inside mt-2 ml-6 space-y-1">
              <li><a href="https://www.aboutads.info/choices/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.aboutads.info/choices/</a></li>
              <li><a href="https://www.networkadvertising.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.networkadvertising.org</a></li>
              <li><a href="https://www.youradchoices.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.youradchoices.com</a></li>
            </ul>
            <p className="mt-2">Please note that by opting out, you will continue to see ads, but ads may not be as relevant to your interests.</p>
          </li>
          
          <li>
            <strong className="text-[#1c275e]">Log File Information</strong>
            <p className="mt-2">When you use our Site, our servers automatically record information, including:</p>
            <ul className="list-disc list-inside mt-2 ml-6 space-y-1">
              <li>Your Internet Protocol address ("IP Address")</li>
              <li>Browser type</li>
              <li>Referring URLs (e.g., the site you visited before coming to our Site)</li>
              <li>Domain names associated with your internet service provider</li>
              <li>Information on your interaction with the Site</li>
              <li>Other such information (collectively, "Log File Information")</li>
            </ul>
            <p className="mt-2">We may also collect similar information from emails sent to you which help us track which emails are opened and which links are clicked by recipients.</p>
            <p className="mt-2">We use Log File Information to help secure the Site by identifying potential threats and vulnerabilities and in analyzing the effectiveness of our Site to improve the Site's function and content.</p>
          </li>
        </ul>
      </>
    )
  },
  {
    title: "4. Disclosure of Personal Information",
    content: (
      <>
        <p>We will not disclose Personal Information except as set forth in this Privacy Policy or with your consent. Specifically, we do not sell Personal Information.</p>
        <p className="mt-4">This section describes to whom we disclose Personal Information and for what purposes:</p>
        
        <ul className="list-disc list-inside mt-4 space-y-6">
          <li>
            <strong className="text-[#1c275e]">Providers</strong>
            <p className="mt-2">The Site and Services support the treatment relationship between you and your Provider. For us to provide our Services, we must confidentially disclose Personal Information to your Provider and/or your Provider's third-party service providers. Our use and disclosure of any Personal Information collected on behalf of the Provider, including PHI, is limited in accordance with applicable privacy laws and our agreements with the Provider.</p>
          </li>
          
          <li>
            <strong className="text-[#1c275e]">Financial Institutions</strong>
            <p className="mt-2">When you make payments or request a statement through the Site or through our Services, we may provide your Personal Information to your bank, credit card company, or other financial institution ("Financial Institutions") in order to process such payments or statements. Our use and disclosure of any Personal Information to Financial Institutions is limited in accordance with applicable privacy laws and our agreements with the Financial Institutions.</p>
          </li>
          
          <li>
            <strong className="text-[#1c275e]">Our Service Providers</strong>
            <p className="mt-2">We engage service providers to perform tasks on our behalf and to assist us in operating the Site and Services or providing our products and services. For example:</p>
            <ul className="list-disc list-inside mt-2 ml-6 space-y-1">
              <li>Flow AI may use third-party vendors and hosting companies to provide the necessary hardware, software, networking, storage, and related technology required to operate the Site and Services</li>
              <li>We may store encrypted database backups off site with a third-party storage provider to ensure data security in the case of an emergency or catastrophe</li>
              <li>We take commercially reasonable steps to help ensure our service providers provide at least the same level of protection for Personal Information as we do</li>
            </ul>
          </li>
          
          <li>
            <strong className="text-[#1c275e]">Companies Involved in Mergers and Acquisitions Transactions</strong>
            <p className="mt-2">If we sell or otherwise transfer part or the whole of our business or assets to another organization (e.g., in the course of a transaction like a merger, acquisition, bankruptcy, dissolution, or liquidation), any information collected through the Site and Services, including Personal Information, may be among the items sold or transferred.</p>
          </li>
          
          <li>
            <strong className="text-[#1c275e]">Law Enforcement, Government Agencies, and Courts</strong>
            <p className="mt-2">We may disclose Personal Information:</p>
            <ul className="list-disc list-inside mt-2 ml-6 space-y-1">
              <li>At the request of law enforcement or government agencies</li>
              <li>In response to subpoenas, court orders, or other legal process</li>
              <li>To establish, protect, or exercise our rights</li>
              <li>To defend against a legal claim</li>
              <li>To protect the rights, property, or safety of any other person</li>
              <li>As otherwise required by law</li>
            </ul>
          </li>
        </ul>
      </>
    )
  },
  {
    title: "5. How We Protect the Confidentiality of Personal Information",
    content: (
      <>
        <p>We protect the confidentiality and security of Personal Information we obtain in the course of business. We use commercially reasonable safeguards, such as industry-standard encryption technology, to help keep the Personal Information collected through the Site and Services secure.</p>
        <p className="mt-4">Despite these efforts to store Personal Information in a secure operating environment, we cannot guarantee the security of Personal Information during its transmission or its storage on our systems. Further, while we attempt to ensure the integrity and security of Personal Information, we cannot guarantee that our security measures will prevent third parties such as hackers from illegally obtaining access to Personal Information. We do not represent or warrant that Personal Information about you will be protected against, loss, misuse, or alteration by third parties.</p>
      </>
    )
  },
  {
    title: "6. Retention and Deletion",
    content: (
      <>
        <p>We will only retain your Personal Information for as long as necessary to fulfill the purposes for which it was collected and processed, including for the purposes of satisfying any legal, regulatory, accounting or reporting requirements.</p>
        <p className="mt-4">In some circumstances, we may de-identify, aggregate, or otherwise anonymize your Personal Information consistent with applicable laws and industry standards so that it can no longer be associated with you, in which case it is no longer treated as Personal Information.</p>
        <p className="mt-4"><strong className="text-[#1c275e]">Retention Period:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>It is our policy to retain Personal Information for ten (10) years once such Personal Information is no longer necessary to deliver the Services and to delete such Personal Information thereafter</li>
          <li>If you close your account with us, we will delete Personal Information associated with your account after ten (10) years</li>
          <li>Regarding other types of information we collect as described in this policy, it is our policy to retain such information for ten (10) years and to delete such Personal Information thereafter</li>
        </ul>
      </>
    )
  },
  {
    title: "7. Accessing, Updating, or Deleting Personal Information",
    content: (
      <>
        <p>If you would like to otherwise access, update, or delete Personal Information about you, you may submit a request to <a href="mailto:solutions@myflowai.com" className="text-blue-600 underline">solutions@myflowai.com</a>. We will promptly review all such requests in accordance with applicable law.</p>
        <p className="mt-4">If you are a resident of California or the European Union, please see the information below in Section 10 (California Residents) and Section 11 (EU Residents) for more information regarding your rights.</p>
      </>
    )
  },
  {
    title: "8. Opting Out of Receiving Electronic Communications",
    content: (
      <>
        <p>With your permission, we may send notifications, promotions, or other information via email or text message ("Communications").</p>
        <p className="mt-4">You may choose to stop receiving Communications by indicating your preference in your account profile or settings.</p>
        <p className="mt-4">Please note that certain Site and Services-related Communications are necessary for the proper functioning and use of the Site and Services (e.g., to verify the phone number associated with your account) and you may not have the ability to opt out of those Communications.</p>
      </>
    )
  },
  {
    title: "9. International Use of the Site and Services",
    content: (
      <>
        <p>If you are using our websites from outside the United States, please be aware that Personal Information may be collected, stored, and processed in the United States.</p>
        <p className="mt-4"><strong className="text-[#1c275e]">Safeguards for International Transfers:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>If we transfer Personal Information internationally, we take steps to provide adequate safeguards, such as entering into standard contractual clauses (as approved by the European Commission) with our service providers</li>
          <li>For such international transfers of Personal Information, we have adopted reasonable physical, technical, and organizational safeguards against accidental, unauthorized, or unlawful destruction, loss, alteration, disclosure, access, use, or processing of the Personal Information in our possession that substantially mirror protections available to users located within the United States</li>
        </ul>
        <p className="mt-4">Please be aware that the data protection laws of the United States might not be as comprehensive as those in your country.</p>
      </>
    )
  },
  {
    title: "10. California Residents",
    content: (
      <>
        <p>This section applies to our collection and use of "Personal Information" as defined under California law, if you are a resident of California.</p>
        
        <p className="mt-6"><strong className="text-[#1c275e]">A. Categories of Personal Information Collected, Used, and Disclosed</strong></p>
        <p className="mt-4">In accordance with California law, we collected the following categories of Personal Information within the preceding twelve (12) months:</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Identifiers such as your name, email address, IP address, and online identifiers</li>
          <li>Certain categories of Personal Information described in subdivision (e) of California Civil Code Section 1798.80</li>
          <li>Internet or other electronic network activity information, including information on your usage of our Website ("Usage Information")</li>
          <li>Information used to create a profile about a consumer reflecting the consumer's preferences or behavior</li>
          <li>Location data such as the GPS coordinates of a mobile device</li>
          <li>Commercial information, including records of products or services purchased or other purchasing histories</li>
          <li>Professional or employment-related information</li>
        </ul>
        <p className="mt-4">We share each of these categories of Personal Information with our service providers to the extent necessary for them to facilitate our business purposes (including any purpose specified in Section 2, above).</p>
        <p className="mt-4">Additionally, within the past months, some of our online advertisers may have used and disclosed Usage Information collected automatically from the Service. This may be a "sale" as broadly defined under the CCPA. Therefore, we provide you the right to opt out of this "sale" of Personal Information as described below.</p>
        
        <p className="mt-6"><strong className="text-[#1c275e]">B. Your California Privacy Rights</strong></p>
        <p className="mt-4">If you are a resident of California, you have the following rights:</p>
        
        <ul className="list-disc list-inside mt-4 space-y-6">
          <li>
            <strong className="text-[#1c275e]">Right to Know</strong>
            <p className="mt-2">You may have the right to request information on:</p>
            <ul className="list-disc list-inside mt-2 ml-6 space-y-1">
              <li>The categories of personal information that we collected in the previous twelve (12) months</li>
              <li>The categories of sources from which the Personal Information was collected</li>
              <li>The specific pieces of Personal Information we have collected about you</li>
              <li>The business purposes for which such personal information is collected and shared</li>
              <li>The categories of Personal Information which were disclosed for business purposes</li>
              <li>The categories of third parties in the twelve (12) months preceding your request for your personal information</li>
            </ul>
          </li>
          
          <li>
            <strong className="text-[#1c275e]">Right to Delete</strong>
            <p className="mt-2">You may have a right to request us to delete Personal Information that we collected from you.</p>
          </li>
          
          <li>
            <strong className="text-[#1c275e]">Right to Opt-Out</strong>
            <p className="mt-2">You have a right to opt-out of certain disclosures of Personal Information to third parties, if such disclosures constitute a "sale" under California law. As noted above, in the past twelve (12) months we enabled advertisers to collect certain information from the Site and Services, which the advertisers may use to improve their interest-based advertising networks. Regardless of whether this is a "sale," you may opt-out of interest-based advertising as described in Section 3(B), above.</p>
          </li>
        </ul>
        
        <p className="mt-6">If you would like to exercise your rights listed above, please contact (or have your authorized agent contact) us at <a href="mailto:solutions@myflowai.com" className="text-blue-600 underline">solutions@myflowai.com</a>. When doing so, please tell us which right you are exercising and provide us with contact information to direct our response.</p>
        <p className="mt-4">We must verify your identity before fulfilling your requests. If we cannot initially verify your identity, we may request additional information to complete the verification process. Any Personal Information you disclose to us for purposes of verifying your identity will solely be used for the purpose of verification.</p>
        <p className="mt-4">You have a right not to receive discriminatory treatment by any business when you exercise your California privacy rights.</p>
      </>
    )
  },
  {
    title: "11. Individuals in the EU",
    content: (
      <>
        <p>In this section, we provide additional information relating to how we process Personal Information of individuals in the EU, in accordance with the General Data Protection Regulation (GDPR). If you need more information or would like to exercise your rights under the GDPR, you may contact us at <a href="mailto:solutions@myflowai.com" className="text-blue-600 underline">solutions@myflowai.com</a>.</p>
        
        <p className="mt-6"><strong className="text-[#1c275e]">A. Basis for Processing</strong></p>
        <p className="mt-4">Our legal basis for collecting and using the Personal Information described in this Privacy Policy will depend on the Personal Information concerned and the context in which we collect it. We collect Personal Information from you:</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Where we need Personal Information to perform a contract with you</li>
          <li>Where the processing is in our legitimate interests (including the purposes described, above, in Section 3)</li>
          <li>Where the processing is necessary for us to meet our applicable legal obligations</li>
          <li>If we otherwise have your consent</li>
        </ul>
        
        <p className="mt-6"><strong className="text-[#1c275e]">B. Your Privacy Rights</strong></p>
        <p className="mt-4">Depending on applicable law, you may have the right to:</p>
        
        <ul className="list-disc list-inside mt-4 space-y-4">
          <li>Request access to Personal Information about you</li>
          <li>Request correction of the Personal Information that we hold about you</li>
          <li>
            Request erasure of Personal Information about you
            <p className="mt-1 ml-6">Note: We may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.</p>
          </li>
          <li>Object to processing of Personal Information about you where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms</li>
          <li>
            Request restriction of processing of Personal Information about you
            <p className="mt-2 ml-6">You can ask us to suspend the processing of Personal Information in the following scenarios:</p>
            <ul className="list-disc list-inside mt-2 ml-12 space-y-1">
              <li>If you want us to establish the data's accuracy</li>
              <li>Where our use of the data is unlawful but you no longer want to erase it</li>
              <li>Where you need us to hold the data even if we no longer require it as you need it to establish, exercise, or defend legal claims</li>
              <li>You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it</li>
            </ul>
          </li>
          <li>Request the transfer of Personal Information to you or to a third party</li>
          <li>Withdraw consent at any time where we are relying on consent to process Personal Information about you</li>
        </ul>
        
        <p className="mt-6">If you wish to exercise any of these applicable rights, please contact us at <a href="mailto:solutions@myflowai.com" className="text-blue-600 underline">solutions@myflowai.com</a>.</p>
        <p className="mt-4">Depending on where you live, you may have a right to lodge a complaint with a supervisory authority or other regulatory agency if you believe that we have violated any of the rights concerning Personal Information. We encourage you to first reach out to us at <a href="mailto:solutions@myflowai.com" className="text-blue-600 underline">solutions@myflowai.com</a>, so we have an opportunity to address your concerns directly before you do so.</p>
        
        <p className="mt-6"><strong className="text-[#1c275e]">C. Our EU Representative</strong></p>
        <p className="mt-4">You may contact our EU representative at <a href="mailto:solutions@myflowai.com" className="text-blue-600 underline">solutions@myflowai.com</a> with the subject line "EU Representative Contact Request."</p>
      </>
    )
  },
  {
    title: "12. Children's Privacy",
    content: (
      <p>We do not knowingly collect or solicit any Personal Information from children. In the event that we learn that we have collected Personal Information from a child, we will promptly take steps to delete that information.</p>
    )
  },
  {
    title: "13. Other Websites and Sites, Including Social Media",
    content: (
      <p>We are not responsible for the practices employed by any websites or services linked to or from our Site and Services, including the information or content contained within them. A link to a third party's website should not be construed as an endorsement. We encourage you to investigate and ask questions before disclosing Personal Information to third parties.</p>
    )
  },
  {
    title: "14. Changes to Our Privacy Policy",
    content: (
      <p>We may modify or update this Privacy Policy from time to time, so please review it periodically. We may provide you with notice of material changes to the Privacy Policy as appropriate under the circumstances. Unless otherwise indicated, any changes to this Privacy Policy will apply immediately upon posting to the Site and Services.</p>
    )
  },
  {
    title: "15. How to Contact Us",
    content: (
      <p>If you have any questions about this Privacy Policy or the Site and Services, please email us at <a href="mailto:solutions@myflowai.com" className="text-blue-600 underline">solutions@myflowai.com</a>.</p>
    )
  }
];

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1c275e] mb-3 md:mb-4 text-left">
              Flow AI's HIPAA Compliance and Data Privacy Policy
            </h2>
            <p className="text-sm md:text-base text-[#717171] mb-6 md:mb-8 text-left">
              Last Updated: June 1, 2025
            </p>
            <div className="text-left">
              <p className="text-base md:text-lg leading-7 text-[#130f0c] mb-4">
                Flow AI, Inc. ("Flow AI", "we," "us," or "our") respects your privacy and recognizes the importance of HIPAA compliance, patient & Flow AI user data privacy. We developed this Privacy Policy to explain how we collect, use, share, and protect your data and Personal Information (defined below), and your choices about the collection and use of Personal Information.
              </p>
              <p className="text-base md:text-lg leading-7 text-[#130f0c]">
                This Privacy Policy applies to User Data or Personal Information collected or processed through our products and services (the "Services"), and www.myflowai.com and any other Flow AI-operated website, app, or social media page that links to this Privacy Policy (collectively, the "Site and Services"). If you are a patient, this Privacy Policy does not govern your healthcare provider's ("Provider") use of Personal Information or Protected Health Information ("PHI") (as that term is defined under HIPAA) that you share with the Provider, whether or not through the Site or Services, in the course of receiving health services. For more information on your Provider's use and disclosure of your PHI, please reach out to your provider for their Notice of Health Information Privacy Practices.
              </p>
            </div>
          </div>

          <HorizontalLine />

          {/* Policy Sections */}
          {privacyPolicySections.map((section, index) => (
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
              {index < privacyPolicySections.length - 1 && <HorizontalLine />}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
