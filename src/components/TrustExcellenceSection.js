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
    <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-30"></div>
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

        {/* New Dashboard Style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Journey So Far</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">Years of Excellence</span>
                      <span className="font-bold text-indigo-600">6+</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">Client Satisfaction</span>
                      <span className="font-bold text-cyan-600">98%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "98%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">Pan-India Reach</span>
                      <span className="font-bold text-emerald-600">100%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div 
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <motion.div 
                    className="absolute inset-0 rounded-full border-8 border-indigo-200"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute inset-4 rounded-full border-8 border-cyan-200"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  ></motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-slate-800">6+</div>
                      <div className="text-lg font-medium text-slate-600">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Key Metrics</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="opacity-90">Clients Served</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="opacity-90">Pan-India Reach</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="opacity-90">Support Available</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard 
            number={6} 
            suffix="+" 
            label="Years Experience" 
            delay={0} 
            color="indigo"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard 
            number={500} 
            suffix="+" 
            label="Clients Served" 
            delay={0.1} 
            color="cyan"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
          <StatCard 
            number={100} 
            suffix="%" 
            label="Pan-India Reach" 
            delay={0.2} 
            color="emerald"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard 
            number={24} 
            suffix="/7" 
            label="Support Available" 
            delay={0.3} 
            color="amber"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            }
          />
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
    amber: "from-amber-500 to-orange-500"
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
