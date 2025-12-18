"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaBookOpen, FaClipboardCheck, FaFileInvoiceDollar, FaBalanceScale, FaRocket, FaBullseye, FaCheckCircle, FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

// Import images
import bookkeepingImg from "../../../public/bookmark.png";
import auditingImg from "../../../public/bookmark.png";
import taxImg from "../../../public/bookmark.png";
import legalImg from "../../../public/bookmark.png";
import startupImg from "../../../public/bookmark.png";
import cfoImg from "../../../public/bookmark.png";

/* ===== SERVICES GRID ===== */
const services = [
  {
    id: 1,
    title: "Bookkeeping & Compliance",
    shortDesc:
      "Bookkeeping, payroll, MIS reporting and compliance management",
    icon: <FaBookOpen className="text-5xl text-indigo-600" />,
    sectionId: "accounting",
  },
  {
    id: 2,
    title: "Auditing & Assurance",
    shortDesc: "Independent audits and regulatory examinations",
    icon: <FaClipboardCheck className="text-5xl text-indigo-600" />,
    sectionId: "auditing",
  },
  {
    id: 3,
    title: "Tax Services",
    shortDesc: "Income tax, GST, and international taxation services",
    icon: <FaFileInvoiceDollar className="text-5xl text-indigo-600" />,
    sectionId: "tax",
  },
  {
    id: 4,
    title: "LegalMatters",
    shortDesc: "Legal drafting, representation, and advisory",
    icon: <FaBalanceScale className="text-5xl text-indigo-600" />,
    sectionId: "legal",
  },
  {
    id: 5,
    title: "Startup Advisory",
    shortDesc: "End-to-end guidance for startups and entrepreneurs",
    icon: <FaRocket className="text-5xl text-indigo-600" />,
    sectionId: "startup",
  },
  {
    id: 6,
    title: "Virtual CFO",
    shortDesc: "Virtual CFO, funding, and strategic advisory",
    icon: <FaBullseye className="text-5xl text-indigo-600" />,
    sectionId: "corporate",
  },
];

/* ===== FULL CONTENT ===== */
const detailedServices = [
  {
    id: 1,
    title: "Bookkeeping & Compliance",
    description:
      "Your team needs tools to think strategically – We can help. Our collective experience gives us a wealth of knowledge to handle our clientele's needs.",
    features: [
      "Accounts Outsourcing – Streamlined bookkeeping via Online (QuickBooks, Zoho, Xero) and Offline platforms (Tally, Marg etc.).",
      "Periodic MIS Reporting – Reporting of financial records/statements – Monthly, Quarterly, Bi-annually, to measure your company's performance.",
      "Payroll Services – We assist in payroll processing – strategy and preparation.",
      "Compliance Management Services – Use of specialized software to reduce your burden and keep up with the changing regulatory requirements under various laws such as PF, PT, ESIC, FCRA etc.",
    ],
    image: bookkeepingImg,
  },
  {
    id: 2,
    title: "Auditing & Assurance",
    description:
      "We deliver systematic, independent examinations of your financial records, uncovering hidden anomalies amid vast electronic transactions with precision and efficiency.",
    features: [
      "Internal Audit – We design robust business processes and controls, then conduct periodic evaluations to strengthen internal safeguards and financial integrity.",
      "Audits Under Specific Laws – Specialized audits compliant with statutes like Income Tax Law and GST Law, ensuring regulatory adherence without compromise.",
      "Performance Audits – Targeted reviews including Stock Audit, Forensic Audit, and Management Audit to optimize operations and detect inefficiencies.",
      "Statutory Audit – Independent opinions on financial statements' accuracy, aligned with Company Law standards for full transparency.",
      "Audit of Special Entities – Tailored audits for trusts, schools, societies, and associations, safeguarding compliance and fiscal health.",
    ],
    image: auditingImg,
  },
  {
    id: 3,
    title: "Tax Services",
    description:
      "Navigate complex tax landscapes effortlessly—from personal to corporate, local to international—with our expert guidance that minimizes current and future liabilities.",
    features: [
      "Registrations – Seamless Income Tax, GST, and 12A/80G registrations for all entities, including trusts, ensuring quick compliance setup.",
      "Tax Planning – Proactive strategic advisory for Income Tax and GST, identifying opportunities to optimize your tax position ahead of deadlines.",
      "International Taxation & Transfer Pricing – Expert handling of cross-border issues under Income Tax, GST, DTAA, and Transfer Pricing audits for global operations.",
      "Returns Filing – Timely, accurate filing of Income Tax, GST, and TDS returns for individuals, HUFs, companies, LLPs, firms, and trusts.",
      "Certification & Tax Audits – Thorough Income Tax and GST audits, plus certifications of documents per regulatory norms, for full assurance.",
    ],
    image: taxImg,
  },
  {
    id: 4,
    title: "Legal Matters",
    description:
      "We mitigate risks, resolve issues, and clarify legal impacts of transactions under GST and Income Tax laws through expert analysis by our qualified professionals.",
    features: [
      "Transaction Advisory & Legal Services – Expert analysis to clarify legal implications of transactions under GST and Income Tax laws.",
      "Drafting and Review – Precise drafting and thorough review of legal agreements, documents, and deeds for robust protection.",
      "Representation Before Tax Authorities – Skilled advocacy in assessments, search, and seizure cases under GST and Income Tax laws.",
      "Legal Opinions – Authoritative opinions on complex matters under GST and Income Tax laws, empowering informed decisions.",
      "Representation Before Appellate Authorities – Expert drafting, filing of appeals, and representation before appellate authorities for favorable outcomes.",
    ],
    image: legalImg,
  },
  {
    id: 5,
    title: "Startup Advisory",
    description:
      "Launch, operate, and scale your startup effortlessly with our dedicated support, turning entrepreneurial dreams into sustainable realities.",
    features: [
      "Business Structuring – Expert guidance on optimal structuring options to align with your vision, funding needs, and long-term goals.",
      "Intellectual Property Registration – Securing your innovations through Trademark, Patent, or Copyright registrations.",
      "Incorporation & Registrations – Streamlined completion of incorporation and all required registrations under relevant laws.",
      "Accounting Systems Setup – Implementing comprehensive, tailored accounting systems to ensure accurate tracking and compliance from the outset.",
    ],
    image: startupImg,
  },
  {
    id: 6,
    title: "Virtual CFO",
    description:
      "Elevate your business with strategic financial leadership—our Virtual CFOs provide high-impact guidance without the full-time commitment.",
    features: [
      "Financial Strategy & Planning – Crafting tailored financial strategies, budgeting, and forecasting to align with your business objectives.",
      "Cash Flow Management – Optimizing cash flows through proactive monitoring, working capital analysis, and liquidity enhancement techniques.",
      "Funding & Investor Readiness – Preparing pitch decks, financial models, and compliance for funding rounds, investor meetings, and growth capital.",
      "KPI Dashboard & Reporting – Custom dashboards tracking key performance indicators with actionable insights for real-time decision-making.",
      "Risk Management & Advisory – Identifying financial risks, implementing mitigation strategies, and providing board-level advisory for sustainable scaling.",
    ],
    image: cfoImg,
  },
];

export default function Service() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* HERO BANNER - NEW DESIGN */}
        <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  TRUSTED BY 500+ BUSINESSES
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                  Expert Financial
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Solutions</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Comprehensive accounting, auditing, tax, legal, and advisory services designed to propel your business forward with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="group inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
                    Book Consultation
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-12 flex items-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Available 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Fast Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Expert Team</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl text-indigo-200">📊</div>
                  </div>
                </div>
                {/* Floating cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                  <div className="text-2xl font-bold text-indigo-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-gray-600">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES GRID */}
        <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">What We Offer</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Tailored solutions to meet your unique business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((s) => (
                <div
                  key={s.id}
                  onClick={() =>
                    document
                      .getElementById(s.sectionId)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group cursor-pointer bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-2"
                >
                  <div className="mb-6 transform group-hover:scale-110 transition-transform">{s.icon}</div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.shortDesc}</p>
                  <div className="mt-4 flex items-center text-indigo-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <FaArrowRight className="ml-2 text-xs" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED SERVICE SECTIONS */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-32">
            {detailedServices.map((service, idx) => (
              <div key={service.id}>
                <div
                  id={
                    service.id === 1
                      ? "accounting"
                      : service.id === 2
                      ? "auditing"
                      : service.id === 3
                      ? "tax"
                      : service.id === 4
                      ? "legal"
                      : service.id === 5
                      ? "startup"
                      : "corporate"
                  }
                  className={`grid md:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                    <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Service #{service.id}</span>
                    <h3 className="text-4xl font-bold mb-6 mt-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-6">
                      {service.features.map((text, i) => (
                        <div key={i} className="flex gap-4 items-start group">
                          <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                            <FaCheckCircle className="text-indigo-600 text-sm group-hover:text-white transition-colors" />
                          </div>
                          <p className="text-gray-700 leading-relaxed text-base">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                </div>
                
                {/* Divider after each service except the last one */}
                {idx < detailedServices.length - 1 && (
                  <div className="mt-24">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-2 border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-white px-4 text-sm text-gray-500">•••</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION - NEW DESIGN */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>
              </div>
              
              <div className="relative z-10 py-16 px-8 md:px-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                      Join hundreds of satisfied clients who trust us with their financial success. Let's discuss how we can help you achieve your goals.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
                      >
                        Book Consultation
                        <FaArrowRight className="ml-2" />
                      </a>
                      <a
                        href="tel:+1234567890"
                        className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
                      >
                        <FaPhone className="mr-2" />
                        Call Office
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-indigo-100">
                      <div className="flex items-center gap-2">
                        <FaEnvelope />
                        <span>info@yourcompany.com</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
                      <div className="text-3xl mb-2">🎯</div>
                      <div className="text-lg font-semibold text-white mb-1">Precision</div>
                      <div className="text-sm text-indigo-100">Expert Solutions</div>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
                      <div className="text-3xl mb-2">⚡</div>
                      <div className="text-lg font-semibold text-white mb-1">Speed</div>
                      <div className="text-sm text-indigo-100">Fast Turnaround</div>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
                      <div className="text-3xl mb-2">🤝</div>
                      <div className="text-lg font-semibold text-white mb-1">Trust</div>
                      <div className="text-sm text-indigo-100">Reliable Partner</div>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
                      <div className="text-3xl mb-2">💼</div>
                      <div className="text-lg font-semibold text-white mb-1">Professional</div>
                      <div className="text-sm text-indigo-100">Certified Experts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}