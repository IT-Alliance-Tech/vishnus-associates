"use client";

export default function FinancialGrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-24">

      {/* CURVED TOP SHAPE */}
      <div className="absolute top-0 left-0 right-0 -z-10">
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path
            fill="#1A237E"
            d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,170.7C1120,181,1280,171,1360,165.3L1440,160V0H0Z"
          ></path>
        </svg>
      </div>

      {/* LIGHTER FLOATING BACKGROUND BLOBS */}
      <div className="absolute -top-24 left-10 w-72 h-72 bg-[#E3F2FD] opacity-60 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFF8E1] opacity-60 rounded-full blur-3xl animate-float-slow"></div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A237E] leading-snug">
              Your Financial Growth Partners
            </h2>

            <p className="mt-6 text-lg text-[#424242] max-w-xl">
              We understand that every business is unique, so our team combines deep expertise
              with practical insights to deliver tailored CA solutions that ensure compliance,
              efficiency, and long-term growth.
            </p>

            {/* LIST */}
            <ul className="mt-8 space-y-5">
              {[
                ["Client-First Mindset", "Your success is our priority."],
                ["Deep Domain Expertise", "Specialized knowledge across industries."],
                ["Quality Commitment", "Excellence in every engagement."]
              ].map(([title, desc], i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#F9A825] text-white rounded-full text-xl">
                    ✓
                  </div>
                  <p className="text-[#212121] font-medium">
                    <span className="font-bold">{title}:</span> {desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="animate-fade-up-delay bg-white rounded-3xl shadow-xl border border-white/40 backdrop-blur-xl p-10">

            {/* ICON */}
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A237E] to-[#3949AB] text-white text-3xl font-bold">
              CA
            </div>

            <h3 className="text-center mt-6 text-2xl font-bold text-[#1A237E]">
              Professional Excellence
            </h3>

            {/* SERVICES LIST */}
            <div className="mt-8 space-y-6">
              {[
                ["Chartered Accountancy", "Certified"],
                ["Tax Advisory", "Expert"],
                ["Business Consulting", "Specialized"],
                ["Startup Support", "Focused"]
              ].map(([label, tag], i) => (
                <div key={i} className="flex items-center justify-between border-b pb-3 border-gray-200">
                  <span className="text-[#212121] font-medium">{label}</span>
                  <span className="text-[#1A237E] font-semibold">{tag}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
