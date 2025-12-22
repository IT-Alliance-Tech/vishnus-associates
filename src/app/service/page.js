"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen, FileCheck, DollarSign, Scale, Rocket, Target,
  Receipt, BarChart3, Wallet, CheckCircle, Search, FileText,
  CreditCard, Globe, FileSignature, Building, Gavel, Copyright,
  File, Users, TrendingUp
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    id: 1,
    title: "Bookkeeping & COMPLIANCE",
    shortDesc: "Use of Comprehensive accounting solutions to ensure you are compliant.",
    icon: <BookOpen className="w-12 h-12" />,
    sectionId: "bookkeeping-compliance",
  },
  {
    id: 2,
    title: "Auditing",
    shortDesc: "Uncover the hidden anomalies buried in your financial transactions.",
    icon: <FileCheck className="w-12 h-12" />,
    sectionId: "auditing-assurance",
  },
  {
    id: 3,
    title: "Tax services",
    shortDesc: "We work with you to address all your tax needs to your best advantage.",
    icon: <DollarSign className="w-12 h-12" />,
    sectionId: "tax-services",
  },
  {
    id: 4,
    title: "LEGAL Matters",
    shortDesc: "Resolve your legal issues.",
    icon: <Scale className="w-12 h-12" />,
    sectionId: "legal-matters",
  },
  {
    id: 5,
    title: "Startup Advisory",
    shortDesc: "One stop – to setup and get your business venture going.",
    icon: <Rocket className="w-12 h-12" />,
    sectionId: "startup-advisory",
  },
  {
    id: 6,
    title: "Virtual CFO",
    shortDesc: "We advise you at every stage of your business development.",
    icon: <Target className="w-12 h-12" />,
    sectionId: "virtual-cfo",
  },
];
const detailedServices = [
  {
    id: 1,
    sectionId: "bookkeeping-compliance",
    title: "Bookkeeping & Compliance",
    subtitle: "Your team needs tools to think strategically – We can help.",
    description: "Our collective experience gives us a wealth of knowledge to handle our clientele's needs.",
    imageSrc: "/book.png",
    features: [
      {
        icon: <Receipt className="w-8 h-8" />,
        title: "Accounts Outsourcing",
        desc: "Streamlined bookkeeping via Online (QuickBooks, Zoho, Xero) and Offline platforms (Tally, Marg etc.)."
      },
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Periodic MIS Reporting",
        desc: "Reporting of financial records/statements – Monthly, Quarterly, Bi-annually, to measure your company's performance."
      },
      {
        icon: <Wallet className="w-8 h-8" />,
        title: "Payroll Services",
        desc: "We assist in payroll processing – strategy and preparation."
      },
      {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Compliance Management Services",
        desc: "Use of specialized software to reduce your burden and keep up with the changing regulatory requirements under various laws such as PF, PT, ESIC, FCRA etc."
      }
    ],
  },
  {
    id: 2,
    sectionId: "auditing-assurance",
    title: "Auditing",
    subtitle: "We assure a systematic and independent examination of your financial records.",
    description: "Our team is well qualified to efficiently audit your books and identify the anomalies and red flags that might be deeply buried in thousands of electronic transactions.",
    imageSrc: "/audit.png",
    features: [
      {
        icon: <Search className="w-8 h-8" />,
        title: "Internal Audit",
        desc: "We design robust business processes and controls, then conduct periodic evaluations to strengthen internal safeguards and financial integrity."
      },
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Audits Under Specific Laws",
        desc: "Specialized audits compliant with statutes like Income Tax Law and GST Law, ensuring regulatory adherence without compromise."
      },
      {
        icon: <DollarSign className="w-8 h-8" />,
        title: "Performance Audits",
        desc: "Targeted reviews including Stock Audit, Forensic Audit, and Management Audit to optimize operations and detect inefficiencies."
      },
      {
        icon: <FileCheck className="w-8 h-8" />,
        title: "Statutory Audit",
        desc: "Independent opinions on financial statements' accuracy, aligned with Company Law standards for full transparency."
      },
      {
        icon: <Building className="w-8 h-8" />,
        title: "Audit of Special Entities",
        desc: "Tailored audits for trusts, schools, societies, and associations, safeguarding compliance and fiscal health."
      }
    ],
  },
  {
    id: 3,
    sectionId: "tax-services",
    title: "Tax Services",
    subtitle: "We'll do all the complex tax navigation for you from personal to corporate, local to international.",
    description: "Our experienced tax team identifies key tax planning opportunities that minimize both your current and future tax liabilities.",
    imageSrc: "/tax1.png",
    features: [
      {
        icon: <FileSignature className="w-8 h-8" />,
        title: "Registrations",
        desc: "Seamless Income Tax, GST, and 12A/80G registrations for all entities, including trusts, ensuring quick compliance setup."
      },
      {
        icon: <CreditCard className="w-8 h-8" />,
        title: "Tax Planning",
        desc: "Proactive strategic advisory for Income Tax and GST, identifying opportunities to optimize your tax position ahead of deadlines."
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: "International Taxation & Transfer Pricing",
        desc: "Expert handling of cross-border issues under Income Tax, GST, DTAA, and Transfer Pricing audits for global operations."
      },
      {
        icon: <File className="w-8 h-8" />,
        title: "Returns Filing",
        desc: "Timely, accurate filing of Income Tax, GST, and TDS returns for individuals, HUFs, companies, LLPs, firms, and trusts."
      },
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Certification & Tax Audits",
        desc: "Thorough Income Tax and GST audits, plus certifications of documents per regulatory norms, for full assurance."
      }
    ],
  },
  {
    id: 4,
    sectionId: "legal-matters",
    title: "Legal Matters",
    subtitle: "We address the risks, issues, and legal effect of a transaction.",
    description: "With the right knowledge base and a careful analysis of law and facts, our qualified professionals offer the following services:",
    imageSrc: "/legal1.png",
    features: [
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Drafting and Review",
        desc: "Precise drafting and thorough review of legal agreements, documents, and deeds for robust protection."
      },
      {
        icon: <Building className="w-8 h-8" />,
        title: "Representation Before Tax Authorities",
        desc: "Skilled advocacy in assessments, search, and seizure cases under GST and Income Tax laws."
      },
      {
        icon: <Gavel className="w-8 h-8" />,
        title: "Legal Opinions",
        desc: "Authoritative opinions on complex matters under GST and Income Tax laws, empowering informed decisions."
      },
      {
        icon: <Scale className="w-8 h-8" />,
        title: "Representation Before Appellate Authorities",
        desc: "Expert drafting, filing of appeals, and representation before appellate authorities for favorable outcomes."
      }
    ],
  },
  {
    id: 5,
    sectionId: "startup-advisory",
    title: "Startup Advisory",
    subtitle: "We help you start, run and grow your business with ease.",
    description: "We are committed to Startups, here are some of the many ways we help assist them fulfil their dreams and aspirations:",
    imageSrc: "/startup.png",
    features: [
      {
        icon: <Building className="w-8 h-8" />,
        title: "Business Structuring",
        desc: "Expert guidance on optimal structuring options to align with your vision, funding needs, and long-term goals."
      },
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Setting up SOP's, Internal Controls etc",
        desc: "Laying down standard operating procedures, and adequate internal controls."
      },
      {
        icon: <Copyright className="w-8 h-8" />,
        title: "Intellectual Property Registration",
        desc: "Securing your innovations through Trademark, Patent, or Copyright registrations."
      },
      {
        icon: <File className="w-8 h-8" />,
        title: "Incorporation & Registrations",
        desc: "Streamlined completion of incorporation and all required registrations under relevant laws."
      },
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Accounting Systems Setup",
        desc: "Implementing comprehensive, tailored accounting systems to ensure accurate tracking and compliance from the outset."
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Virtual CFO Services",
        desc: "To become a part of your finance team and provide end to end services."
      }
    ],
  },
  {
    id: 6,
    sectionId: "virtual-cfo",
    title: "Virtual CFO",
    subtitle: "We'll work with you to maximise your Organisational Value.",
    description: "We assert that success of a business largely hinges on the effectiveness of top-level governance. Here are the different ways we can help you revitalize your company:",
    imageSrc: "/virtual.png",
    features: [
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Right Documentation",
        desc: "Set the tone-at-the-top with a well-written Code of Ethics, Standard Operating Procedures, agreements, MOU's etc."
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Advisory and Secretarial Services",
        desc: "We provide a range of Corporate law and Secretarial law related services from structuring to reorganization and from regulatory to compliances."
      },
      {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Project Reports and Valuation Reports",
        desc: "Detailed project and valuation reports to ease the end user in decision making."
      },
      {
        icon: <Search className="w-8 h-8" />,
        title: "Due Diligence",
        desc: "We undertake financial due diligence for prospective investors/venture capitalists."
      }
    ],
  }
];

export default function Service() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">

      {/* ✅ HEADER — FIXED */}
      <Header />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Text */}
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 animate-fade-in">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-blue-700 text-sm font-medium">Chartered Accountants</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
                Your Trusted
                <span className="block text-blue-600 mt-2">Financial Partner</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
                Professional accounting, taxation, and business advisory services designed to help your business thrive.
              </p>

              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up animation-delay-300">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all hover:scale-105">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">6+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all hover:scale-105">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">1000+ Clients</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all hover:scale-105">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">15+ Industries</span>
                </div>
              </div>

              
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative animate-fade-in-right">
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-12 shadow-2xl animate-float">
                {/* Floating Cards */}
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all animate-slide-in-right animation-delay-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileCheck className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Compliance</div>
                        <div className="text-2xl font-bold text-gray-900">100%</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all animate-slide-in-right animation-delay-400">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Tax Savings</div>
                        <div className="text-2xl font-bold text-gray-900">Optimized</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all animate-slide-in-right animation-delay-600">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Growth</div>
                        <div className="text-2xl font-bold text-gray-900">Assured</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-2xl animate-pulse animation-delay-300"></div>
              </div>
            </div>
          </div>

          {/* Bottom Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg animate-fade-in-up animation-delay-500">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comprehensive Services</h3>
              <p className="text-gray-600 leading-relaxed">From bookkeeping to auditing, tax planning to legal compliance - we cover all your financial needs.</p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg animate-fade-in-up animation-delay-600">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">Qualified Chartered Accountants with deep expertise across multiple industries and regulatory frameworks.</p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg animate-fade-in-up animation-delay-700">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Growth Focused</h3>
              <p className="text-gray-600 leading-relaxed">Strategic advisory and Virtual CFO services to accelerate your business growth and maximize value.</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-fade-in-left {
            animation: fadeInLeft 0.8s ease-out;
          }

          .animate-fade-in-right {
            animation: fadeInRight 0.8s ease-out;
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out;
            opacity: 0;
            animation-fill-mode: forwards;
          }

          .animate-fade-in {
            animation: fadeIn 0.6s ease-out;
          }

          .animate-slide-in-right {
            animation: slideInRight 0.8s ease-out;
            opacity: 0;
            animation-fill-mode: forwards;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-300 {
            animation-delay: 0.3s;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
          }

          .animation-delay-500 {
            animation-delay: 0.5s;
          }

          .animation-delay-600 {
            animation-delay: 0.6s;
          }

          .animation-delay-700 {
            animation-delay: 0.7s;
          }
        `}</style>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-light mb-4">
            OUR <span className="font-bold">SERVICES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {services.map((s) => (
              <div
                key={s.id}
                onClick={() =>
                  document.getElementById(s.sectionId)?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white p-8 text-center cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 rounded-lg border border-gray-100 hover:border-blue-200"
              >
                <div className="flex justify-center mb-6 text-blue-600">{s.icon}</div>
                <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {detailedServices.map((service, idx) => (
            <div key={service.id} id={service.sectionId}>
              {/* Title Section */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <h3 className="text-2xl font-bold mb-4">{service.subtitle}</h3>
                <p className="text-lg text-gray-700">{service.description}</p>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center text-blue-600 border border-blue-200 overflow-hidden relative">
                    <Image 
                      src={service.imageSrc} 
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Features */}
                <div className={`space-y-8 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  {service.features.map((feature, i) => (
                    <div key={i}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 text-blue-600">{feature.icon}</div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                          <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}