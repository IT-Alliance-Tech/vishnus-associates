"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Smartphone, MapPin, Clock, Send, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import bannerImg from "../../../public/contact1.png";

// Simple Toast Component
const Toast = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
          className="flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg mb-4"
      style={{
        background: type === "success" ? "#10b981" : "#ef4444",
        color: "white",
      }}
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 flex-shrink-0" />
      )}
      <span className="font-medium">{message}</span>
    </div>
  );
};

   export default function ContactPage() {
  const cssVars = {
    "--brand-blue": "#14598C",
    "--brand-mid": "#14598C",
    "--brand-gold": "#c8892b",
    "--soft-cream": "#fff9f2",
    "--page-bg": "#fbfdff",
    backgroundColor: "var(--page-bg)",
  };

  const primaryButtonShadow = "0 8px 30px rgba(20, 89, 140, 0.14)";

  // ✅ POINTING TO API ROUTE
  const GOOGLE_SCRIPT_URL = "/api/contact";

  // ---------- FORM STATE ----------
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  // ---------- FORM SUBMIT ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === "success") {
          showToast("Submission successful. Please try again.", "success");
        // Clear form immediately after successful submission
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        showToast("Submission failed. Please try again.", "error");
        showToast("Details Submitted Successfully!", "success");
      }
    } catch (err) {
      showToast("Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  // ---------- RENDER ----------
  return (
    <div style={cssVars} className="w-full min-h-screen font-sans text-gray-700">
      <Header />

      {/* Hero Section */}
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
              className="text-xl text-white max-w-3xl mx-auto mb-10"
            >
              We're here to help you navigate your financial journey with personalized solutions and expert guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="tel:+91 9731208006"
                className="flex items-center gap-2 bg-[var(--brand-gold)] text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-[#b37725] transition-all shadow-lg font-medium"
                style={{ boxShadow: primaryButtonShadow }}
              >
                <Phone className="w-5 h-5" />
                 <span>Call Now</span>
              </a>
   
              <a
                href="mailto:support@cavsa.in"
                className="flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition-all font-medium"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
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
                  { icon: <Mail className="w-5 h-5" />, title: "Email Us", content: "support@cavsa.in", description: "For general inquiries and support" },
                  { icon: <Phone className="w-5 h-5" />, title: "Call Us", content: "+91 9731208006", description: "Mon-Fri, 10:00AM-6:00PM" },
                  { icon: <Smartphone className="w-5 h-5" />, title: "WhatsApp", content: "+91 9743991199", description: "For quick responses" },
                  { icon: <Clock className="w-5 h-5" />, title: "Business Hours", content: "Mon-Fri: 10:00AM-6:00PM", description: "Saturday:10:00AM-6:00PM" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-[#14598C]/5 transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ background: "var(--brand-mid)" }}>
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-white to-[#14598C]/10 rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold" style={{ color: "var(--brand-blue)" }}>
                  Send Us a Message
                </h3>
                <p className="text-gray-600 mt-2">We'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                      <option value="">Select a service</option>
                      <option>Bookkeeping and Compliance</option>
                      <option>Auditing and Assurance</option>
                      <option>Tax Services</option>
                      <option>LegalMatters</option>
                      <option>startup Advisory</option>
                      <option>Virtual CFO</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                </div>

                {/* Toast Notification above button */}
                {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg font-semibold text-white shadow-lg"
                  style={{ background: "var(--brand-mid)", boxShadow: primaryButtonShadow }}
                >
                  <Send className="w-5 h-5" />
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>

              {/* WHY CHOOSE US */}
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
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ background: "var(--brand-mid)" }}>
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

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}