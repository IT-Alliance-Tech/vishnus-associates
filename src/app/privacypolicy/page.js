"use client";

import { Shield, Lock, Users, Eye, FileText, Cookie, Mail, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: "Vishnu S & Associates, Chartered Accountants collects minimal personal data—including name, email, phone, and business details—strictly for legitimate purposes like service inquiries, client onboarding, and regulatory compliance.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Eye,
      title: "How We Use Your Data",
      content: "Data is used solely to provide tailored financial services, respond to queries, process engagements, and fulfill legal obligations. We never use it for marketing without explicit consent.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We employ industry-standard encryption, access controls, and secure servers to protect your information from unauthorized access, breaches, or misuse.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Sharing and Disclosure",
      content: "Your data is not sold, shared, or disclosed to third parties except as required by law or with your prior consent for service delivery.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: "You can access, correct, delete, or restrict your data at any time. Contact us to exercise these rights or withdraw consent.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      content: "Our site uses essential cookies for functionality. No tracking for advertising purposes.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Mail,
      title: "Updates and Contact",
      content: "This policy may update; we'll notify via site.",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900">
      
      {/* Sidebar Navigation */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Sidebar */}
        <aside className="lg:w-80 bg-white/80 backdrop-blur-sm p-8 lg:min-h-screen border-r border-gray-200">
          <div className="sticky top-8">
            <div className="mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-bold mb-2 text-gray-900">Privacy Policy</h1>
                     <p className="text-gray-600 text-sm">Last updated: December 2024</p>
            </div>

            <nav className="space-y-2">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                      activeSection === index
                        ? 'bg-blue-100 text-blue-900 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{section.title}</span>
                    {activeSection === index && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-gray-700">
                <span className="font-semibold">Your privacy is our priority.</span> We are committed to protecting your information.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 lg:p-16">
          <div className="max-w-3xl">
            
            {/* Active Section Display */}
            <div className="mb-12">
              {sections.map((section, index) => {
                const Icon = section.icon;
                if (index !== activeSection) return null;
                
                return (
                  <div key={index} className="animate-fadeIn">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      {section.title}
                    </h2>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                disabled={activeSection === 0}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-900 hover:bg-gray-50 shadow-sm border border-gray-200'
                }`}
              >
                Previous
              </button>
              
              <button
                onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
                disabled={activeSection === sections.length - 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === sections.length - 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-md'
                }`}
              >
                Next
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium text-gray-900">{activeSection + 1} / {sections.length}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
                />
              </div>
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}