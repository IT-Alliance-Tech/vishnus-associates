"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, Users, MapPin, MessageCircle } from "lucide-react";

// Counter Hook
function useCounter(target, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const step = Math.max(20, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export default function TrustExcellenceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 py-24">

      {/* Floating animated background blobs */}
      <motion.div 
        className="absolute inset-0"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20"
        ></motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-20"
        ></motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight"
        >
          Built on Trust. Driven by Excellence.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
        >
          Built on a foundation of{" "}
          <span className="font-semibold text-slate-800">
            integrity, accuracy, and practical thinking
          </span>
          , Vishnu S & Associates provides end-to-end CA solutions to businesses,
          professionals, and startups across India.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard number={6} suffix="+" label="Years Experience" delay={0} icon={<Calendar />} />
          <StatCard number={500} suffix="+" label="Clients Served" delay={0.1} icon={<Users />} />
          <StatCard number={100} suffix="%" label="Pan-India Reach" delay={0.2} icon={<MapPin />} />
          <StatCard number={24} suffix="/7" label="Support Available" delay={0.3} icon={<MessageCircle />} />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, suffix, label, delay, icon }) {

  const count = useCounter(number);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -10, scale: 1.04 }}
      className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-slate-200 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500"
    >
      <div className="flex flex-col items-center text-center">

        {/* Icon Glow */}
        <motion.div 
          animate={{ boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 20px rgba(79,70,229,0.4)", "0 0 0px rgba(0,0,0,0)"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center mb-5"
        >
          <span className="text-white text-3xl">{icon}</span>
        </motion.div>

        {/* Counter */}
        <motion.div 
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-3xl font-bold text-slate-800 mb-2 flex items-center"
        >
          {count}
          <span className="text-indigo-600 ml-1">{suffix}</span>
        </motion.div>

        <div className="text-lg font-medium text-slate-600">{label}</div>
      </div>
    </motion.div>
  );
}
