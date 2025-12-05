"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 to-cyan-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-200 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-indigo-600 rounded-full text-sm font-medium mb-6 border border-indigo-100"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            number={6} 
            suffix="+" 
            label="Years Experience" 
            delay={0} 
            icon={
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-200 rounded-full blur-md opacity-70"></div>
                <div className="relative w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            }
            gradient="from-indigo-500 to-purple-500"
          />
          <StatCard 
            number={500} 
            suffix="+" 
            label="Clients Served" 
            delay={0.1} 
            icon={
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-200 rounded-full blur-md opacity-70"></div>
                <div className="relative w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            }
            gradient="from-cyan-500 to-blue-500"
          />
          <StatCard 
            number={100} 
            suffix="%" 
            label="Pan-India Reach" 
            delay={0.2} 
            icon={
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-200 rounded-full blur-md opacity-70"></div>
                <div className="relative w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            }
            gradient="from-emerald-500 to-teal-500"
          />
          <StatCard 
            number={24} 
            suffix="/7" 
            label="Support Available" 
            delay={0.3} 
            icon={
              <div className="relative">
                <div className="absolute inset-0 bg-amber-200 rounded-full blur-md opacity-70"></div>
                <div className="relative w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
              </div>
            }
            gradient="from-amber-500 to-orange-500"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, suffix, label, delay, icon, gradient }) {
  const count = useCounter(number);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}></div>
        
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              {icon}
            </div>
            
            <div className="text-4xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
                {count}
                <span className="text-amber-500">{suffix}</span>
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-4">{label}</h3>
            
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <motion.div 
                className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.min(100, (count / (number === 24 ? 24 : number)) * 100)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}