"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaHeart, FaShieldAlt, FaRegClock, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

// Imported founder image as a module (you already have this import)
import founderImg from "../../../public/founder.png";

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

      {/* Hero Section with Image */}
      <motion.div 
        className="relative py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Banner Image (served from public folder) */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/about2.png"         // public/about2.png
            alt="About Banner" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Highlighted card to make text readable */}
          <div className="inline-block bg-white/90 px-6 py-5 rounded-md shadow-md backdrop-blur-sm">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-3"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Our Firm
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Delivering exceptional financial services with integrity, expertise, and personalized attention since our founding.
            </motion.p>
          </div>
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

        {/* Founder's Message Section (text left, imported image on right) */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Column */}
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
                  Our team of dedicated professionals brings together diverse expertise in accounting, taxation, and financial advisory services. We believe that our success is measured by the success of our clients.
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
            
            {/* Imported Image Column */}
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-lg border border-blue-100">
                <Image
                  src={founderImg}        // imported module image
                  alt="Founder"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision Section (redesigned with your content) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
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
            {/* Mission Card */}
            <motion.div
              className="relative rounded-2xl p-8 shadow-xl border border-blue-50 bg-white overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute -left-10 -top-10 w-44 h-44 bg-gradient-to-br from-blue-100 to-white rounded-full opacity-40 pointer-events-none"></div>
              <div className="flex items-start gap-5 relative">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shadow">
                    <FaShieldAlt className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide comprehensive, reliable, and innovative financial services that enable our clients to make informed decisions, achieve compliance excellence, and drive sustainable business growth in an ever-evolving economic landscape.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="relative rounded-2xl p-8 shadow-xl border border-blue-50 bg-white overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-gradient-to-br from-indigo-100 to-white rounded-full opacity-40 pointer-events-none"></div>
              <div className="flex items-start gap-5 relative">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700 shadow">
                    <FaUsers className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-3">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By 2030, we aspire to be recognized as one of the top Chartered Accountancy firms in the state, building a scalable business model rooted in integrity, innovation, and client-centric solutions. Our vision is to be the most trusted and preferred CA firm in India, known for delivering exceptional value through expertise, transparency, and personalized service, while continuously setting new benchmarks in professional excellence and service delivery.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}
