"use client";
import { BookOpen, Shield, FileText, Briefcase, Layers, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function CoreServices() {
  const services = [
    { 
      title: "Book Keeping & Compliance", 
      desc: "Precise bookkeeping with seamless GST, IT, and statutory compliance.",
      icon: BookOpen
    },
    { 
      title: "Auditing & Assurance", 
      desc: "Independent & transparent audits ensuring clarity and reliability.",
      icon: Shield
    },
    { 
      title: "Tax Advisory", 
      desc: "Strategic tax planning and end-to-end filing support for businesses.",
      icon: FileText
    },
    { 
      title: "Legal & Corporate Matters", 
      desc: "ROC filings, legal documentation, and corporate governance support.",
      icon: Briefcase
    },
    { 
      title: "Startup Advisory", 
      desc: "Complete assistance from registration to financial planning.",
      icon: Layers
    },
    { 
      title: "Growth Strategy Consulting", 
      desc: "Business scaling solutions backed by financial insights.",
      icon: TrendingUp
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
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
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-6 rounded-full"
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
                  {/* ICON CONTAINER */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  
                  {/* CONTENT */}
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-700 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {s.desc}
                    </p>
                    
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="/services"
                      className="inline-flex items-center mt-4 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                    >
                      Know More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
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