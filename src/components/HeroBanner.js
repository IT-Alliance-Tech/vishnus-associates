"use client";
import { Phone, ArrowRight, TrendingUp, Shield, BarChart2, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200 rounded-full filter blur-3xl opacity-30"></div>

      {/* Geometric pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Added responsive pt-28 for mobile to move content down */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <motion.div 
            className="space-y-10 self-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-slate-900">Empowering Smarter </span>
                <span className="text-blue-600">
                  Financial Decisions
                </span>
              </h1>
            </div>

            <motion.p 
              className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="font-bold text-slate-900">Vishnu S & Associates</span> — Your trusted partner in audit, compliance, taxation & financial strategy.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="/service"
                className="px-8 py-4 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>

              {/* ✅ Updated Link Here */}
              <motion.a
                href="/free-consultation"
                className="px-8 py-4 rounded-xl font-semibold bg-white text-blue-700 hover:bg-blue-50 transition-all flex items-center gap-3 shadow-sm border border-blue-200 group"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Book Consultation</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Feature showcase */}
          <motion.div 
            className="relative self-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-2xl border border-blue-100 shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-amber-400"></div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <FeatureItem
                    icon={<BarChart2 className="w-6 h-6" />}
                    title="Financial Excellence"
                    subtitle="Precision insights"
                    bgColor="bg-blue-50"
                    iconColor="text-blue-600"
                  />

                  <FeatureItem
                    icon={<Shield className="w-6 h-6" />}
                    title="Legal Compliances"
                    subtitle="Full compliance"
                    bgColor="bg-amber-50"
                    iconColor="text-amber-600"
                  />

                  <FeatureItem
                    icon={<TrendingUp className="w-6 h-6" />}
                    title="Strategic Insights"
                    subtitle="Data-driven"
                    bgColor="bg-emerald-50"
                    iconColor="text-emerald-600"
                  />

                  <FeatureItem
                    icon={<Layers className="w-6 h-6" />}
                    title="Growth Support"
                    subtitle="Scalable advice"
                    bgColor="bg-violet-50"
                    iconColor="text-violet-600"
                  />
                </div>

                <div className="mt-6 pt-6 border-t border-blue-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <StatItem value="6+" label="Years Experience" />
                    <StatItem value="950+" label="Clients Served" />
                    <StatItem value="98%" label="Satisfaction" />
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

function FeatureItem({ icon, title, subtitle, bgColor, iconColor }) {
  return (
    <motion.div 
      className={`rounded-xl p-4 ${bgColor} transition-all duration-300`}
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)" }}
    >
      <div className={`w-12 h-12 rounded-lg ${iconColor} ${bgColor.replace('50', '100')} flex items-center justify-center mb-3`}>
        {icon}
      </div>

      <h3 className="font-semibold text-xs text-slate-900 mb-1">{title}</h3>
      <p className="text-base font-medium text-slate-600">{subtitle}</p>
    </motion.div>
  );
}

function StatItem({ value, label }) {
  return (
    <div>
      <div className="text-2xl font-bold text-blue-700">{value}</div>
      <div className="text-sm text-slate-600 mt-1">{label}</div>
    </div>
  );
}
