"use client";
import { motion } from "framer-motion";
import { CheckCircle, Award, TrendingUp, Users, Lightbulb, Target } from "lucide-react";

export default function FinancialGrowthSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 15% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 30%), 
                            radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.2) 0%, transparent 30%)`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-4 border border-indigo-500/30">
            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            <span>FINANCIAL GROWTH PARTNERS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Financial Growth <span className="text-indigo-400">Partners</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We combine deep expertise with practical insights to deliver tailored CA solutions 
            that ensure compliance, efficiency, and long-term growth for your business.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {[
              { 
                icon: <Users className="w-6 h-6 text-slate-800" />, 
                title: "Client-First Approach", 
                desc: "Your success is our top priority with personalized solutions" 
              },
              { 
                icon: <Lightbulb className="w-6 h-6 text-slate-800" />, 
                title: "Deep Domain Expertise", 
                desc: "Specialized knowledge across diverse industries and sectors" 
              },
              { 
                icon: <Target className="w-6 h-6 text-slate-800" />, 
                title: "Quality Commitment", 
                desc: "Excellence guaranteed in every engagement and deliverable" 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Box - Highlighted */}
                  <div className="w-12 h-12 rounded-xl bg-white text-slate-800 flex items-center justify-center flex-shrink-0 border border-gray-200 shadow-sm">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Column - Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl p-8 border border-indigo-500/20 h-full">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/5">

                  {/* Icon Box - Highlighted */}
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 border border-gray-200 shadow-sm">
                    <TrendingUp className="w-8 h-8 text-slate-800" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">Professional Services</h3>
                  <p className="text-slate-300 mb-6">
                    Comprehensive financial solutions tailored to your business needs.
                  </p>
                  
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      {/* Icon Box - Highlighted */}
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-200 shadow-sm">
                        <Lightbulb className="w-4 h-4 text-slate-800" />
                      </div>

                      <h4 className="text-lg font-bold text-amber-300">Why Choose Us?</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Proven track record of delivering exceptional financial solutions tailored to your unique business needs.
                    </p>
                  </div>
                </div>
                
                <div className="md:w-3/5">
                  <div className="space-y-4">
                    {[
                      { label: "Chartered Accountancy", tag: "Certified" },
                      { label: "Tax Advisory", tag: "Expert" },
                      { label: "Business Consulting", tag: "Specialized" },
                      { label: "Startup Support", tag: "Focused" }
                    ].map((service, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        whileHover={{ x: 10 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700"
                      >
                        <div className="flex items-center gap-3">
                          {/* Icon Box - Highlighted */}
                          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm">
                            <CheckCircle className="w-4 h-4 text-slate-800" />
                          </div>

                          <span className="font-medium text-white">{service.label}</span>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {service.tag}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}