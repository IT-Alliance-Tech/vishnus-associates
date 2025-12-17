"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaCircle } from "react-icons/fa";

/* ===== SERVICES GRID (UNCHANGED) ===== */
const services = [
  {
    id: 1,
    title: "Bookkeeping & Compliance",
    shortDesc:
      "Bookkeeping, payroll, MIS reporting and compliance management",
    icon: "📊",
    sectionId: "accounting",
  },
  {
    id: 2,
    title: "Auditing & Assurance",
    shortDesc: "Independent audits and regulatory examinations",
    icon: "✓",
    sectionId: "auditing",
  },
  {
    id: 3,
    title: "Tax Services",
    shortDesc: "Income tax, GST, and international taxation services",
    icon: "💰",
    sectionId: "tax",
  },
  {
    id: 4,
    title: "LegalMatters",
    shortDesc: "Legal drafting, representation, and advisory",
    icon: "⚖️",
    sectionId: "legal",
  },
  {
    id: 5,
    title: "Startup Advisory",
    shortDesc: "End-to-end guidance for startups and entrepreneurs",
    icon: "🚀",
    sectionId: "startup",
  },
  {
    id: 6,
    title: "Virtual CFO",
    shortDesc: "Virtual CFO, funding, and strategic advisory",
    icon: "🎯",
    sectionId: "corporate",
  },
];

/* ===== FULL CONTENT – UNCHANGED ===== */
const detailedServices = [
  {
    id: 1,
    title: "Bookkeeping & Compliance",
    description:
      "Your team needs tools to think strategically – We can help. Our collective experience gives us a wealth of knowledge to handle our clientele’s needs.",
    features: [
      "Accounts Outsourcing – Streamlined bookkeeping via Online (QuickBooks, Zoho, Xero) and Offline platforms (Tally, Marg etc.).",
      "Periodic MIS Reporting – Reporting of financial records/statements – Monthly, Quarterly, Bi-annually, to measure your company’s performance.",
      "Payroll Services – We assist in payroll processing – strategy and preparation.",
      "Compliance Management Services – Use of specialized software to reduce your burden and keep up with the changing regulatory requirements under various laws such as PF, PT, ESIC, FCRA etc.",
    ],
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
      "Statutory Audit – Independent opinions on financial statements’ accuracy, aligned with Company Law standards for full transparency.",
      "Audit of Special Entities – Tailored audits for trusts, schools, societies, and associations, safeguarding compliance and fiscal health.",
    ],
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
  },
];

export default function Service() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <span className="text-sm font-semibold text-indigo-600 uppercase">
              Our Expertise
            </span>
            <h1 className="text-4xl font-bold mt-4 mb-6">
              Professional Consulting Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Comprehensive accounting, auditing, tax, legal, and advisory
              services designed to support businesses at every stage.
            </p>
          </div>
        </section>

        {/* OUR SERVICES GRID */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-16 pl-2">
              <h2 className="text-3xl font-bold">OUR SERVICES</h2>
              <div className="flex-1 h-px bg-gray-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
              {services.map((s) => (
                <div
                  key={s.id}
                  onClick={() =>
                    document
                      .getElementById(s.sectionId)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="cursor-pointer"
                >
                  <div className="text-4xl mb-6">{s.icon}</div>
                  <h3 className="font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED SERVICE SECTIONS */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto space-y-28">
            {detailedServices.map((service) => (
              <div
                key={service.id}
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
              >
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h3 className="text-4xl font-bold mb-6">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {service.description}
                    </p>
                  </div>
                  <div className="h-56 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    Illustration
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                  {service.features.map((text, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <FaCircle className="text-indigo-600 text-[10px] mt-2 flex-shrink-0" />
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="mb-8">
              Connect with our team to discuss how we can support your
              business goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
