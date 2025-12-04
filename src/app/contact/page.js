"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Smartphone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const cssVars = {
    "--brand-blue": "#0f1724",
    "--brand-mid": "#1d4ed8",
    "--brand-gold": "#c8892b",
    "--soft-cream": "#fff9f2",
    "--page-bg": "#fbfdff",
    backgroundColor: "var(--page-bg)",
  };

  // kept for shadow reuse
  const primaryGradientShadow = "0 8px 30px rgba(29,78,216,0.14)";

  return (
    <div style={cssVars} className="w-full min-h-screen font-sans text-gray-700">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjAuNSIgZmlsbD0iIzI1NjNmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Connect With Our Experts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-10"
          >
            We're here to help you navigate your financial journey with
            personalized solutions and expert guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* CALL & EMAIL buttons: changed to white background with brand text */}
            <a
              href="tel:+91XXXXXXXXXX"
              className={`flex items-center gap-2 bg-white text-[var(--brand-mid)] px-6 py-3 rounded-full border border-white/20 hover:opacity-90 transition-all shadow-lg`}
              style={{ boxShadow: primaryGradientShadow }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>

            <a
              href="mailto:info@vishnusassociates.com"
              className={`flex items-center gap-2 bg-white text-[var(--brand-mid)] px-6 py-3 rounded-full border border-white/20 hover:opacity-90 transition-all shadow-lg`}
              style={{ boxShadow: primaryGradientShadow }}
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </motion.div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl font-bold mb-8" style={{ color: "var(--brand-blue)" }}>
              Get In Touch
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Us",
                  content: "info@vishnusassociates.com",
                  description: "For general inquiries and support",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call Us",
                  content: "+91 XXXXX XXXXX",
                  description: "Mon-Fri, 9:00 AM - 6:00 PM",
                },
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "WhatsApp",
                  content: "+91 XXXXX XXXXX",
                  description: "For quick responses",
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Visit Us",
                  content: "Pan-India Services",
                  description: "Serving clients across the nation",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Business Hours",
                  content: "Mon-Fri: 9AM-6PM",
                  description: "Saturday: 9AM-2PM",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--brand-mid), var(--brand-gold))",
                      color: "white",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                    <p className="font-medium" style={{ color: "var(--brand-gold)" }}>
                      {item.content}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-10 p-6 rounded-xl border border-red-100 bg-red-50"
            >
              <h3 className="font-bold text-red-800 text-lg mb-2">Emergency Support</h3>
              <p className="text-red-700 mb-4">Need urgent assistance? Our emergency line is available 24/7.</p>

              {/* emergency CTA -> white background per request */}
              <a
                href="tel:+91XXXXXXXXXX"
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white text-[var(--brand-mid)] rounded-lg hover:opacity-90 transition-all shadow-md`}
                style={{ boxShadow: primaryGradientShadow }}
              >
                <Phone className="w-4 h-4" />
                Call Emergency Line
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--brand-blue)" }}>
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">We'll get back to you within 24 hours.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                      <option>Select a service</option>
                      <option>Accounting & Compliance</option>
                      <option>Tax Filings</option>
                      <option>Audit & Assurance</option>
                      <option>Advisory Services</option>
                      <option>Business Registration</option>
                      <option>Financial Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {/* SEND button: changed to white background with brand-mid text */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg font-semibold bg-white text-[var(--brand-mid)] shadow-lg`}
                  style={{ boxShadow: primaryGradientShadow }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--brand-blue)" }}>
                Why Choose Our Services
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Expert Team", desc: "Qualified CAs with 10+ years experience" },
                  { title: "Quick Response", desc: "We respond to all inquiries within 24 hours" },
                  { title: "Transparent Pricing", desc: "No hidden costs or surprise fees" },
                  { title: "Pan-India Service", desc: "We serve clients across the country" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: "linear-gradient(135deg, var(--brand-mid), var(--brand-gold))", color: "white" }}
                    >
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
