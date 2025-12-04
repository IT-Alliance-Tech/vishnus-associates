"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaHeart, FaShieldAlt, FaRegClock, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  const coreValues = [
    {
      icon: <FaHeart className="h-8 w-8 text-[var(--brand-mid)]" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our professional dealings."
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-[var(--brand-mid)]" />,
      title: "Excellence",
      description: "We strive for perfection in every service we provide to our clients."
    },
    {
      icon: <FaRegClock className="h-8 w-8 text-[var(--brand-mid)]" />,
      title: "Punctuality",
      description: "We value your time and ensure all commitments are met promptly."
    },
    {
      icon: <FaUsers className="h-8 w-8 text-[var(--brand-mid)]" />,
      title: "Client Focus",
      description: "Your success is our priority, and we tailor solutions to your needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Our Firm
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Delivering exceptional financial services with integrity, expertise, and personalized attention since our founding.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Core Values Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              These principles guide everything we do and define who we are as professionals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-blue-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="bg-[var(--soft-cream)] w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Founder's Message Section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6">
                A Message from Our Founder
              </h2>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  When I established this firm over two decades ago, my vision was to create a practice that would combine technical excellence with genuine care for our clients. Today, that vision has become our reality.
                </p>
                <p>
                  Our team of dedicated professionals brings together diverse expertise in accounting, taxation, and financial advisory services. We believe that our success is measured by the success of our clients, which is why we take the time to understand each client's unique goals and challenges.
                </p>
                <p>
                  As we continue to grow, we remain committed to the principles that have guided us from the beginning: integrity, excellence, and an unwavering commitment to our clients' success.
                </p>
              </div>
              <div>
                <p className="font-semibold text-blue-900">Robert Chen, CPA</p>
                <p className="text-gray-600">Founder & Senior Partner</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-80 h-80 md:w-96 md:h-96" />
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-blue-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Available for consultations</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Purpose
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Understanding what drives us forward in our mission to serve you better.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional financial services that empower our clients to achieve their business and personal goals. We accomplish this through expert knowledge, personalized attention, and unwavering integrity in all our professional relationships.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted financial advisory firm in our region, recognized for our innovative solutions, ethical practices, and commitment to client success. We aim to build lasting relationships that extend beyond traditional service boundaries.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}
