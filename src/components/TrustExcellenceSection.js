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
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6"
          >
            Built on Trust. Driven by Excellence.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-slate-700 max-w-4xl mx-auto"
          >
            Built on a foundation of{" "}
            <span className="font-semibold text-indigo-700">
              integrity, accuracy, and practical thinking
            </span>
            , Vishnu S & Associates provides end-to-end CA solutions to businesses,
            professionals, and startups across India.
          </motion.p>
        </div>

        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-70"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <StatItem 
              number={6} 
              suffix="+" 
              label="Years Experience" 
              delay={0} 
              icon={<Calendar className="text-blue-600" />} 
              color="text-blue-600" 
            />
            <StatItem 
              number={500} 
              suffix="+" 
              label="Clients Served" 
              delay={0.1} 
              icon={<Users className="text-amber-600" />} 
              color="text-amber-600" 
            />
            <StatItem 
              number={100} 
              suffix="%" 
              label="Pan-India Reach" 
              delay={0.2} 
              icon={<MapPin className="text-emerald-600" />} 
              color="text-emerald-600" 
            />
            <StatItem 
              number={24} 
              suffix="/7" 
              label="Support Available" 
              delay={0.3} 
              icon={<MessageCircle className="text-purple-600" />} 
              color="text-purple-600" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, suffix, label, delay, icon, color }) {
  const count = useCounter(number);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col items-center text-center"
    >
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="mb-6 p-5 rounded-full bg-white shadow-lg border border-slate-100"
      >
        <div className="text-4xl">
          {icon}
        </div>
      </motion.div>

      <motion.div 
        className="text-5xl font-bold text-slate-900 mb-2 flex items-center"
      >
        {count}
        <span className="text-amber-500 ml-1">{suffix}</span>
      </motion.div>

      <div className="text-lg font-medium text-slate-700">{label}</div>
    </motion.div>
  );
}