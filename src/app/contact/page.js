"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Smartphone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import bannerImg from "../../../public/contact1.png";

export default function ContactPage() {
  const cssVars = {
    "--brand-blue": "#0f1724",
    "--brand-mid": "#0F1F3D",  // main brand blue
    "--brand-gold": "#c8892b", // banner buttons will use this for visibility
    "--soft-cream": "#fff9f2",
    "--page-bg": "#fbfdff",
    backgroundColor: "var(--page-bg)",
  };

  const primaryButtonShadow = "0 8px 30px rgba(15,31,61,0.14)";

  return (
    <div style={cssVars} className="w-full min-h-screen font-sans text-gray-700">
      <Header />

      {/* Hero Section with Banner Image */}
      <div className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${bannerImg.src})` }}
        ></div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="text-white font-medium">CONTACT US</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
              We're here to help you navigate your financial journey with personalized
              solutions and expert guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {/* Banner Buttons with Gold color for Call Now */}
              <a
                href="tel:+91XXXXXXXXXX"
                className={`flex items-center gap-2 bg-[var(--brand-gold)] text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-[#b37725] transition-all shadow-lg font-medium`}
                style={{ boxShadow: primaryButtonShadow }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>

              {/* Email Us button text changed to white */}
              <a
                href="mailto:info@vishnusassociates.com"
                className={`flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition-all font-medium`}
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--brand-blue)" }}>
            We're Here to Help
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reach out to us through any of our channels and our team will get back to you promptly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 sticky top-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--brand-blue)" }}>
                Contact Information
              </h3>

              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-5 h-5" />, title: "Email Us", content: "info@vishnusassociates.com", description: "For general inquiries and support" },
                  { icon: <Phone className="w-5 h-5" />, title: "Call Us", content: "+91 XXXXX XXXXX", description: "Mon-Fri, 9:00 AM - 6:00 PM" },
                  { icon: <Smartphone className="w-5 h-5" />, title: "WhatsApp", content: "+91 XXXXX XXXXX", description: "For quick responses" },
                  { icon: <MapPin className="w-5 h-5" />, title: "Visit Us", content: "Pan-India Services", description: "Serving clients across the nation" },
                  { icon: <Clock className="w-5 h-5" />, title: "Business Hours", content: "Mon-Fri: 9AM-6PM", description: "Saturday: 9AM-2PM" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-all"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
                      style={{ background: "var(--brand-mid)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="font-medium" style={{ color: "var(--brand-gold)" }}>{item.content}</p>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-8 p-5 rounded-xl border border-red-100 bg-red-50"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-red-100 rounded-lg">
                    <Phone className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800 mb-1">Emergency Support</h4>
                    <p className="text-red-700 text-sm mb-3">
                      Need urgent assistance? Our emergency line is available 24/7.
                    </p>
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-white text-[var(--brand-mid)] rounded-lg hover:opacity-90 transition-all text-sm font-medium`}
                    >
                      Call Emergency Line
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold" style={{ color: "var(--brand-blue)" }}>
                  Send Us a Message
                </h3>
                <p className="text-gray-600 mt-2">We'll get back to you within 24 hours.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white">
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
                  <textarea required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white" placeholder="Tell us about your requirements..."></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg font-semibold text-white shadow-lg`}
                  style={{
                    background: "var(--brand-mid)",
                    boxShadow: primaryButtonShadow,
                  }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Why Choose Us */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold mb-6" style={{ color: "var(--brand-blue)" }}>
                Why Choose Our Services
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex gap-4"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
                      style={{ background: "var(--brand-mid)" }}
                    >
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
