"use client";

import {
  FiBookOpen,
  FiShield,
  FiFileText,
  FiBriefcase,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

export default function CoreServices() {
  const services = [
    { title: "Book Keeping & Compliance", desc: "Precise bookkeeping with seamless GST, IT, and statutory compliance.", icon: <FiBookOpen /> },
    { title: "Auditing & Assurance", desc: "Independent & transparent audits ensuring clarity and reliability.", icon: <FiShield /> },
    { title: "Tax Advisory", desc: "Strategic tax planning and end-to-end filing support for businesses.", icon: <FiFileText /> },
    { title: "Legal & Corporate Matters", desc: "ROC filings, legal documentation, and corporate governance support.", icon: <FiBriefcase /> },
    { title: "Startup Advisory", desc: "Complete assistance from registration to financial planning.", icon: <FiLayers /> },
    { title: "Growth Strategy Consulting", desc: "Business scaling solutions backed by financial insights.", icon: <FiTrendingUp /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A237E]">Our Core Services</h2>
          <p className="mt-3 text-lg text-gray-600">Premium end-to-end solutions designed for modern businesses.</p>
          <div className="mt-4 w-28 h-1 bg-[#F9A825] mx-auto rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">

          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-10 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(255,200,0,0.25)] hover:-translate-y-1 transition-all duration-300 relative flex flex-col"
            >
              {/* ICON (border removed) */}
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#FFF8E1] text-[#1A237E] text-4xl shadow-[0_0_18px_rgba(255,220,90,0.35)] absolute -top-8 left-1/2 -translate-x-1/2">
                {s.icon}
              </div>

              {/* CONTENT */}
              <div className="pt-14 text-center flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[#1A237E]">{s.title}</h3>
                <div className="mt-3 w-16 h-[3px] bg-[#F9A825] mx-auto rounded-full"></div>

                <p className="mt-4 text-gray-700 leading-relaxed flex-1">{s.desc}</p>

                <a
                  href="/services"
                  className="inline-block mt-6 px-6 py-2 rounded-full font-semibold border-2 text-[#1A237E] border-[#F9A825] hover:bg-[#F9A825] hover:text-white transition-all duration-300"
                >
                  Know More
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
