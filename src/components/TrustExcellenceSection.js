"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

/* ================= Counter Hook (UNCHANGED) ================= */
function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const increment = end > 100 ? Math.ceil(end / 50) : 1;
    const stepTime = Math.max(20, Math.floor(duration / (end / increment)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

/* ================= MAIN COMPONENT ================= */
export default function TrustExcellenceSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 to-[#14598C]/10 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#14598C] via-[#14598C] to-[#14598C]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14598C]/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#14598C]/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-[#14598C] rounded-full text-sm font-medium mb-6 border border-[#14598C]/20"
          >
            <div className="w-2 h-2 rounded-full bg-[#14598C]" />
            TRUST & EXCELLENCE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Excellence Through Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            With a foundation of{" "}
            <span className="font-semibold text-[#14598C]">
              integrity, accuracy, and practical thinking
            </span>
            , we deliver comprehensive CA services to businesses across India.
          </motion.p>
        </div>

        {/* ================= DASHBOARD ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Our Journey So Far
                </h3>

                <div className="space-y-6">
                  <Progress label="Number of Audits Conducted" value="100+" />
                  <Progress label="Partner-Led Engagements" value="100%" />
                  <Progress label="Multi-Industry Expertise" value="Diverse Sectors" />
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-8 border-[#14598C]/30" />
                  <div className="absolute inset-4 rounded-full border-8 border-[#14598C]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-800">
                        Trusted
                      </div>
                      <div className="text-lg font-medium text-slate-600">
                        Since 2018
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#14598C] to-[#14598C] rounded-2xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">
              Why Clients Trust Us
            </h3>
            <ul className="space-y-4 text-sm leading-relaxed">
              <li>• Rigorous audit methodologies aligned with ICAI standards</li>
              <li>• Dedicated partner-level involvement in every engagement</li>
              <li>• Transparent reporting with actionable insights</li>
              <li>• Strong focus on compliance and accuracy</li>
            </ul>
          </motion.div>
        </div>

        {/* ================= TIMELINE (CENTER ALIGNED FIX) ================= */}
        <div className="-mt-4 pt-10">
          <h3 className="text-xl font-semibold text-center text-slate-800 mb-10">
            Our Growth Timeline
          </h3>

          <div className="relative flex flex-col items-center md:flex-row md:justify-between gap-12">
            {/* Desktop line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="hidden md:block absolute top-6 left-0 w-full h-1 origin-left bg-gradient-to-r from-[#14598C] to-[#14598C]"
            />

            {[
              { year: "2020", desc: "Started with a team of 1" },
              { year: "2021", desc: "Team of 5 (4× growth)" },
              { year: "2023", desc: "Team of 13 (16× growth)" },
              { year: "2024", desc: "New branch at Indiranagar" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:flex-row md:items-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center text-center min-w-[160px] z-10"
                >
                  <div className="w-14 h-14 rounded-full bg-[#14598C] flex items-center justify-center text-white font-bold shadow-md">
                    {item.year}
                  </div>

                  <div className="mt-4 text-sm text-slate-600 min-h-[48px] flex items-center justify-center">
                    {item.desc}
                  </div>
                </motion.div>

                {index !== 3 && (
                  <>
                    <div className="hidden md:block mx-6 text-[#14598C]">
                      <ArrowRight size={22} />
                    </div>
                    <div className="md:hidden my-6 text-[#14598C]">
                      <ArrowDown size={22} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= HELPER COMPONENT ================= */
function Progress({ label, value }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-bold text-[#14598C]">{value}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <motion.div
          className="h-3 rounded-full bg-[#14598C]"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </div>
  );
}
