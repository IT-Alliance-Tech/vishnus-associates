"use client";
import { motion } from "framer-motion";
import { CheckCircle, Award, TrendingUp, Users, Lightbulb, Target } from "lucide-react";

export default function FinancialGrowthSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
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
          
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your Financial Growth <span className="text-indigo-600">Partners</span>
          </h2>
          
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            We combine deep expertise with practical insights to deliver tailored CA solutions 
            that ensure compliance, efficiency, and long-term growth for your business.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {[
              { 
                icon: <Users className="w-6 h-6" />, 
                title: "Client-First Approach", 
                desc: "Your success is our top priority with personalized solutions" 
              },
              { 
                icon: <Lightbulb className="w-6 h-6" />, 
                title: "Deep Domain Expertise", 
                desc: "Specialized knowledge across diverse industries and sectors" 
              },
              { 
                icon: <Target className="w-6 h-6" />, 
                title: "Quality Commitment", 
                desc: "Excellence guaranteed in every engagement and deliverable" 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
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
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Professional Services</h3>
                  <p className="text-indigo-200 mt-2">Comprehensive financial solutions</p>
                </div>
                
                <div className="space-y-5">
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
                      className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-200" />
                        <span className="font-medium text-white">{service.label}</span>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/20 text-indigo-100">
                        {service.tag}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Impact</h3>
              
              <div className="space-y-8">
                {[
                  { value: "15+", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
                  { value: "500+", label: "Clients Served", icon: <Users className="w-6 h-6" /> },
                  { value: "98%", label: "Client Satisfaction", icon: <Target className="w-6 h-6" /> }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-5 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200"
                  >
                    <div className="w-14 h-14 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-slate-600">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 p-5 rounded-xl bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-200 text-amber-700 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-amber-900">Why Choose Us?</h4>
                </div>
                <p className="text-amber-800 text-sm">
                  Proven track record of delivering exceptional financial solutions tailored to your unique business needs.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}