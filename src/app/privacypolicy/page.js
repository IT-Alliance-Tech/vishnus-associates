"use client";

import {
  Shield,
  Lock,
  Users,
  Eye,
  FileText,
  Cookie,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content:
        "Vishnu S & Associates, Chartered Accountants collects minimal personal data—including name, email, phone, and business details—strictly for legitimate purposes like service inquiries, client onboarding, and regulatory compliance.",
    },
    {
      icon: Eye,
      title: "How We Use Your Data",
      content:
        "Data is used solely to provide tailored financial services, respond to queries, process engagements, and fulfill legal obligations. We never use it for marketing without explicit consent.",
    },
    {
      icon: Lock,
      title: "Data Security",
      content:
        "We employ industry-standard encryption, access controls, and secure servers to protect your information from unauthorized access, breaches, or misuse.",
    },
    {
      icon: Users,
      title: "Sharing and Disclosure",
      content:
        "Your data is not sold, shared, or disclosed to third parties except as required by law or with your prior consent for service delivery.",
    },
    {
      icon: Shield,
      title: "Your Rights",
      content:
        "You can access, correct, delete, or restrict your data at any time. Contact us to exercise these rights or withdraw consent.",
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      content:
        "Our site uses essential cookies for functionality. No tracking for advertising purposes.",
    },
    {
      icon: Mail,
      title: "Updates and Contact",
      content:
        "This policy may update; we'll notify via site.",
    },
  ];

  return (
    <>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-[#14598C]/5 via-white to-[#14598C]/5">
        <div className="max-w-6xl mx-auto px-4 pt-32 pb-24">

          {/* Page Heading */}
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl font-bold text-[#14598C]">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: December 2024
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="grid gap-10">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <div className="relative bg-white/70 backdrop-blur-lg border border-blue-100 rounded-2xl p-8 shadow-sm">

                    {/* Icon */}
                    <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-[#14598C] flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="pt-6">
                      {/* ✅ Section heading size = 23px */}
                      <p
                        className="font-medium text-gray-900 mb-2"
                        style={{ fontSize: "23px", lineHeight: "1.4" }}
                      >
                        {index + 1}. {section.title}
                      </p>

                      <p className="text-base text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-24 border border-blue-200 rounded-3xl p-10 bg-white shadow-md"
          >
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#14598C] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Questions About Privacy?
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  If you have any questions regarding our privacy practices or this policy,
                  please contact Vishnu S & Associates. We are committed to protecting your data.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}
