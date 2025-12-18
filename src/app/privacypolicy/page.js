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

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-20">

          {/* Page Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14 mt-12 text-center"
          >
            <h1 className="text-2xl font-semibold text-blue-700">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Last updated: December 2024
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="grid md:grid-cols-[80px_1fr] gap-6 items-center"
                >
                  {/* Icon */}
                  <div className="flex justify-center items-center">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      {index + 1}. {section.title}
                    </h2>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg"
          >
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Questions About Privacy?
                </h3>
                <p className="text-base text-blue-100 leading-relaxed">
                  If you have any questions regarding our privacy practices or this policy,
                  please contact Vishnu S & Associates. We are committed to protecting your data.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </>
  );
}
