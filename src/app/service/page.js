"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, FileCheck, DollarSign, Scale, Rocket, Target, Receipt, BarChart3, Wallet, CheckCircle, Search, FileText, CreditCard, Globe, FileSignature, Building, Gavel, Copyright, File, Users, TrendingUp, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    id: 1,
    title: "Bookkeeping & COMPLIANCE",
    shortDesc: "Use of Comprehensive accounting solutions to ensure you are compliant.",
    icon: <BookOpen className="w-12 h-12" />,
    sectionId: "accounting",
  },
  {
    id: 2,
    title: "AUDITING",
    shortDesc: "Uncover the hidden anomalies buried in your financial transactions.",
    icon: <FileCheck className="w-12 h-12" />,
    sectionId: "auditing",
  },
  {
    id: 3,
    title: "tax services",
    shortDesc: "We work with you to address all your tax needs to your best advantage.",
    icon: <DollarSign className="w-12 h-12" />,
    sectionId: "tax",
  },
  {
    id: 4,
    title: "LEGAL MATTERS",
    shortDesc: "Resolve your legal issues.",
    icon: <Scale className="w-12 h-12" />,
    sectionId: "legal",
  },
  {
    id: 5,
    title: "START-UP Advisory",
    shortDesc: "One stop – to setup and get your business venture going.",
    icon: <Rocket className="w-12 h-12" />,
    sectionId: "startup",
  },
  {
    id: 6,
    title: "VIRTUAL CFO",
    shortDesc: "We advise you at every stage of your business development.",
    icon: <Target className="w-12 h-12" />,
    sectionId: "corporate",
  },
];

const detailedServices = [
  {
    id: 1,
    title: "Accounting & Compliance",
    subtitle: "Your team needs tools to think strategically – We can help.",
    description: "Our collective experience gives us a wealth of knowledge to handle our clientele's needs.",
    imageSrc: "/bookmark.png",
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
    title: "Auditing",
    subtitle: "We assure a systematic and independent examination of your financial records.",
    description: "Our team is well qualified to efficiently audit your books and identify the anomalies and red flags that might be deeply buried in thousands of electronic transactions.",
    imageSrc: "/bookmark.png",
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
    title: "Tax Services",
    subtitle: "We'll do all the complex tax navigation for you from personal to corporate, local to international.",
    description: "Our experienced tax team identifies key tax planning opportunities that minimize both your current and future tax liabilities.",
    imageSrc: "/tax.png",
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
    title: "Legal Matters",
    subtitle: "We address the risks, issues, and legal effect of a transaction.",
    description: "With the right knowledge base and a careful analysis of law and facts, our qualified professionals offer the following services:",
    imageSrc: "/legal.png",
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
    title: "Startup Advisory",
    subtitle: "We help you start, run and grow your business with ease.",
    description: "We are committed to Startups, here are some of the many ways we help assist them fulfil their dreams and aspirations:",
    imageSrc: "/bookmark.png",
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
    title: "Virtual CFO",
    subtitle: "We'll work with you to maximise your Organisational Value.",
    description: "We assert that success of a business largely hinges on the effectiveness of top-level governance. Here are the different ways we can help you revitalize your company:",
    imageSrc: "/bookmark.png",
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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
              With our <span className="font-bold text-blue-900">proactive approach</span> we think & plan ahead
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              for the benefit of our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
              <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">Data-Driven Insights</h3>
              <p className="text-gray-600 text-sm">We look beyond spreadsheets to uncover hidden aspects that impact your bottom line.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">Strategic Planning</h3>
              <p className="text-gray-600 text-sm">We analyze the present and future to understand every client's growth trajectory.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">Always Available</h3>
              <p className="text-gray-600 text-sm">Ready to answer questions, strategize, and represent our clients at every turn.</p>
            </div>
          </div>
          
          <div className="mt-16 space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              We look beyond data and spreadsheets to uncover the hidden aspects that impact the bottom line profits of our clients. We analyze what's happening in the present and what may unfold in the future to understand every client's growth.
            </p>
            <p>
              We are always available not only to answer questions and ease concerns but also to consult, strategize, and represent our clients at every turn. That commitment is in our firm's DNA.
            </p>
            <p>
              We work across an array of sectors, from Real Estate to Jewellery and Manufacturing to Software. Our clients include Corporates, LLP's, Partnerships, Privately-held businesses, as well as Individuals, HUF's, Estates, and Trusts.
            </p>
            <p className="font-semibold">We look forward to working with you.</p>
          </div>
        </div>
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
            <div key={service.id} id={service.id === 1 ? "accounting" : service.id === 2 ? "auditing" : service.id === 3 ? "tax" : service.id === 4 ? "legal" : service.id === 5 ? "startup" : "corporate"}>
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