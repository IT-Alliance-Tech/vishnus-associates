"use client";
import {
  BookOpen,
  Shield,
  FileText,
  Briefcase,
  Layers,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CoreServices() {
  const services = [
    {
      title: "Bookkeeping & Compliance",
      link: "/service#bookkeeping-compliance",
      desc: (
        <>
          Strategic bookkeeping solutions tailored to client needs.<br />
          Ensuring accuracy, compliance, and long-term financial clarity.
        </>
      ),
      icon: BookOpen,
    },
    {
      title: "Auditing & Assurance",
      link: "/service#auditing-assurance",
      desc: (
        <>
          Independent and systematic examination of financial records.
          Identifying anomalies with precision across large transactions.
        </>
      ),
      icon: Shield,
    },
    {
      title: "Tax Services",
      link: "/service#tax-services",
      desc: (
        <>
          Expert guidance across personal and corporate taxation.
          Making compliance seamless and efficient. Minimizing present
          and future tax liabilities effectively.
        </>
      ),
      icon: FileText,
    },
    {
      title: "Legal Matters",
      link: "/service#legal-matters",
      desc: (
        <>
          Legal and transition advisory under GST and income tax laws.
          Mitigating risks and delivering clarity through expert analysis.
        </>
      ),
      icon: Briefcase,
    },
    {
      title: "Startup Advisory",
      link: "/service#startup-advisory",
      desc: (
        <>
          End-to-end support to launch and scale startups smoothly.
          Turning entrepreneurial ideas into sustainable businesses.
        </>
      ),
      icon: Layers,
    },
    {
      title: "Virtual CFO",
      link: "/service#virtual-cfo",
      desc: (
        <>
          Strategic financial leadership without full-time commitment.
          Driving growth, stability, and long-term profitability.
        </>
      ),
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#14598C]/5 via-[#14598C]/3 to-[#14598C]/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14598C]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#14598C]/25 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* TITLE */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Premium end-to-end solutions designed for modern businesses.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-[#14598C] to-[#14598C] mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-start">
                  {/* ICON */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#14598C]/40 to-[#14598C]/60 blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#14598C] to-[#1A6BA8] flex items-center justify-center text-white shadow-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#14598C] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {s.desc}
                    </p>

                    <motion.a
                      whileHover={{ x: 5 }}
                      href={s.link}
                      className="inline-flex items-center mt-4 text-[#14598C] font-semibold hover:text-[#0F4066] transition-colors"
                    >
                      Know More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
