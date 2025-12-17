"use client";

import { useState } from "react";
import {
  ChevronDown,
  FileText,
  Users,
  Info,
  ShieldCheck,
  Lock,
  Scale,
  Link2,
  Edit,
  Phone,
  RotateCcw,
  IndianRupee,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const termsData = [
  {
    title: "Acceptance of Terms",
    icon: FileText,
    content:
      "By accessing and using our website, you agree to abide by these terms and conditions. If you do not agree, please refrain from using our services.",
  },
  {
    title: "Use of Services",
    icon: Users,
    content:
      "Our website provides information about our Chartered Accountant services. Any use of the content or services is at your own risk.",
  },
  {
    title: "Accuracy of Information",
    icon: Info,
    content:
      "While we strive for accuracy, we do not guarantee the completeness, accuracy, or reliability of the information on our website. Users are encouraged to verify information independently.",
  },
  {
    title: "Client–Professional Relationship",
    icon: ShieldCheck,
    content:
      "The information provided does not constitute professional advice. No client–professional relationship is established by using this website.",
  },
  {
    title: "Data Protection & Privacy",
    icon: Lock,
    content:
      "We collect minimal personal information for legitimate business purposes and adhere to applicable data protection laws.",
  },
  {
    title: "Intellectual Property",
    icon: Scale,
    content:
      "All content on this website, including text, images, and logos, is the property of Vishnu S & Associates, Chartered Accountants.",
  },
  {
    title: "Limitation of Liability",
    icon: Scale,
    content:
      "Vishnu S & Associates shall not be liable for any direct, indirect, or consequential damages arising from the use or inability to use our website or services.",
  },
  {
    title: "Links to Third-Party Websites",
    icon: Link2,
    content:
      "Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.",
  },
  {
    title: "Modification of Terms",
    icon: Edit,
    content:
      "We reserve the right to modify or update these terms at any time without prior notice.",
  },
  {
    title: "Dispute Resolution",
    icon: Scale,
    content:
      "Any disputes arising from the use of this website shall be resolved through arbitration.",
  },
  {
    title: "Contact Information",
    icon: Phone,
    content:
      "For any inquiries regarding these terms, please contact us at support@cavsa.in",
  },
  {
    title: "Refund Policy",
    icon: RotateCcw,
    content:
      "We aim to ensure complete satisfaction with our services. However, please note that refunds will not be issued.",
  },
  {
    title: "Pricing",
    icon: IndianRupee,
    content:
      "Our pricing structure is designed to accommodate diverse client needs. Service fees vary based on the scope, complexity, and nature of services provided.",
  },
];

export default function TermsAndConditionsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <section className="bg-[#faf9f7] pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4">

          {/* Heading (unchanged from last version) */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
              Legal Information
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
              Terms & Conditions
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please read carefully the rules, guidelines, and policies before using our services.
            </p>
          </div>

          {/* NEW CARD-STYLE ACCORDION */}
          <div className="space-y-4">
            {termsData.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all ${
                    isOpen
                      ? "border-blue-300 shadow-md bg-blue-50/40"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900">
                        {index + 1}. {item.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 px-6 pb-6" : "max-h-0 px-6"
                    }`}
                  >
                    <p className="pl-16 text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
