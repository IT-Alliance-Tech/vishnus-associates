"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, User, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const FreeConsultation = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes slide-up {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .animate-rotate-slow {
        animation: rotate 20s linear infinite;
      }
      .animate-slide-up {
        animation: slide-up 0.6s ease-out forwards;
      }
      .calendly-inline-widget {
        min-width: 320px;
        height: 700px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  const features = [
    { icon: Clock, text: '30-Minute Session', delay: 0.1 },
    { icon: User, text: 'Expert Guidance', delay: 0.2 },
    { icon: Zap, text: 'Action Plan', delay: 0.3 },
    { icon: ShieldCheck, text: 'No-Obligation', delay: 0.4 }
  ];

  const benefits = [
    { icon: TrendingUp, text: 'Business clarity', delay: 0.1 },
    { icon: User, text: 'Top strategies', delay: 0.2 },
    { icon: ShieldCheck, text: 'Quick wins', delay: 0.3 },
    { icon: Zap, text: 'Personal roadmap', delay: 0.4 }
  ];

  return (
    <div 
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
      aria-label="Free consultation booking form"
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#14598C] animate-rotate-slow"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 border-4 border-[#14598C] animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 border-4 border-[#14598C] animate-rotate-slow" style={{ animationDuration: '30s' }}></div>
      </div>

      <div className="w-full max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-8"
        >
          {/* Left Side - Content */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#14598C]/15 text-[#14598C] px-4 py-2 rounded-full text-sm font-medium mb-8 w-fit"
            >
              <div className="w-2 h-2 bg-[#14598C] rounded-full"></div>
              COMPLIMENTARY SESSION
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-none mb-6">
              Strategy
              <br />
              <span className="text-[#14598C]">Session</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-900 mb-12 leading-relaxed">
              Transform your business trajectory with personalized insights from industry experts.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: feature.delay }}
                  className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-gray-200 hover:border-[#14598C]/30 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-[#14598C]/15 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#14598C]" />
                  </div>
                  <span className="text-gray-900 font-semibold text-base">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: benefit.delay }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-[#14598C] rounded-full"></div>
                  <span className="text-gray-900">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-[#14598C] rounded-full border-2 border-white"></div>
                ))}
              </div>
              <span className="text-sm text-gray-900">
                <span className="font-semibold">500+</span> businesses served
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side - Calendly */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#14598C] rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#14598C] rounded-2xl -z-10"></div>
              
              {/* Calendly Container */}
              <div className="bg-white rounded-3xl shadow-xl p-6 relative">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Book Your <span className="text-[#14598C]">Free Session</span>
                  </h2>
                  <p className="text-gray-900">Select a time that works for you</p>
                </div>
                
                <div className="rounded-2xl overflow-hidden border border-gray-100">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/gireeshma-italliancetech/30min"
                    style={{ minWidth: "320px", height: "650px" }}
                  ></div>
                </div>

                {/* Bottom Note */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-900">
                  <CheckCircle className="w-4 h-4 text-[#14598C]" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Geometric Accent */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8">
            <div className="w-16 h-px bg-[#14598C]"></div>
            <span className="text-sm text-gray-900 font-medium">START YOUR TRANSFORMATION JOURNEY</span>
            <div className="w-16 h-px bg-[#14598C]"></div>
          </div>
        </motion.div>
      </div>
            </div>
  );
};

export default FreeConsultation;
