"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock, Users, FileCheck, Headset } from "lucide-react";

// Counter Hook
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

export default function TrustExcellenceSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-indigo-600 rounded-full text-sm font-medium mb-6 border border-indigo-100"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
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
            <span className="font-semibold text-indigo-600">
              integrity, accuracy, and practical thinking
            </span>
            , we deliver comprehensive CA services to businesses across India.
          </motion.p>
        </div>

        {/* Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
                  {/* Audits Conducted */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">
                        Number of Audits Conducted
                      </span>
                      <span className="font-bold text-indigo-600">100+</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  </div>

                  {/* Engagement */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">
                        Partner-Led Engagements
                      </span>
                      <span className="font-bold text-cyan-600">100%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">
                        Multi-Industry Expertise
                      </span>
                      <span className="font-bold text-emerald-600">
                        Diverse Sectors
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Circle Visual */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-8 border-indigo-200" />
                  <div className="absolute inset-4 rounded-full border-8 border-cyan-200" />
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
            className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">
              Why Clients Trust Us
            </h3>
            <ul className="space-y-4 text-sm leading-relaxed">
              <li>• Rigorous audit methodologies aligned with ICAI standards</li>
              <li>• Dedicated partner-level involvement in every engagement</li>
              <li>• Transparent reporting with actionable insights</li>
              <li>• Strong focus on compliance, risk mitigation, and accuracy</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard number={28} suffix="+" label="Industry Sectors Served" delay={0} color="indigo" icon={<Clock className="w-6 h-6" />} />
          <StatCard number={12} suffix="+" label="States Across India" delay={0.1} color="cyan" icon={<Users className="w-6 h-6" />} />
          <StatCard number={99} suffix="%" label="Compliance Accuracy" delay={0.2} color="emerald" icon={<FileCheck className="w-6 h-6" />} />
          <StatCard number={24} suffix="/7" label="Support Available" delay={0.3} color="amber" icon={<Headset className="w-6 h-6" />} />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, suffix, label, delay, color, icon }) {
  const count = useCounter(number);

  const colorClasses = {
    indigo: "from-indigo-500 to-purple-500",
    cyan: "from-cyan-500 to-blue-500",
    emerald: "from-emerald-500 to-teal-500",
    amber: "from-amber-500 to-orange-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 text-center"
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${colorClasses[color]} mb-3 text-white`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-slate-800 mb-1">
        {count}{suffix}
      </div>
      <div className="text-slate-600 text-sm">{label}</div>
    </motion.div>
  );
}
