"use client";
import { BookOpen, Shield, FileText, Briefcase, Layers, TrendingUp } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Our Core Services</h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Premium end-to-end solutions designed for modern businesses.</p>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
              >
                {/* ICON */}
                <div className="w-16 h-16 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                  <a
                    href="/services"
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-300"
                  >
                    Know More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}