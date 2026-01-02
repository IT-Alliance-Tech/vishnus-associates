"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaHeart, FaShieldAlt, FaRegClock, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import founderImg from "../../../public/VishnuPhoto.png";
import generalManagerImg from "../../../public/founder.png";

export default function AboutPage() {
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleCard = (index) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const coreValues = [
    {
      icon: <FaHeart className="h-7 w-7 text-white" />,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our professional dealings.",
    },
    {
      icon: <FaShieldAlt className="h-7 w-7 text-white" />,
      title: "Excellence",
      description:
        "We strive for perfection in every service we provide to our clients.",
    },
    {
      icon: <FaRegClock className="h-7 w-7 text-white" />,
      title: "Punctuality",
      description:
        "We value your time and ensure all commitments are met promptly.",
    },
    {
      icon: <FaUsers className="h-7 w-7 text-white" />,
      title: "Client Focus",
      description:
        "Your success is our priority, and we tailor solutions to your needs.",
    },
  ];

  const footerBlue = "#0F1F3D";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#14598C]/5 to-white">
      <Header />

      {/* HERO SECTION WITH FIX – added overlay for readability */}
      <motion.div
        className="relative py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/about.png"
            alt="About Banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Dark Overlay (NEW ADDITION) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-3"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Our Firm
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-white/90 max-w-3xl mx-auto drop-shadow"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Delivering exceptional financial services with integrity, expertise,
            and personalized attention since our founding.
          </motion.p>
        </div>
      </motion.div>

      {/* PAGE CONTENT BELOW — UNTOUCHED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* CORE VALUES SECTION */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14598C] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our professional culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-80 [perspective:1000px] cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div
                  className={`relative h-full transition-all duration-500 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] ${
                    flippedCards.includes(index) ? "[transform:rotateY(180deg)]" : ""
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  {/* FRONT */}
                  <div
                    className="absolute inset-0 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden]"
                    style={{ background: footerBlue }}
                  >
                  <div className="w-20 h-20 rounded-full bg-[#14598C]/25 backdrop-blur-md border border-[#14598C]/40 shadow-lg flex items-center justify-center mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-white/80">Tap to learn more</p>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-gray-100">
                    <h3 className="text-2xl font-bold text-[#14598C] mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

              {/* FOUNDER SECTION — CONTENT UPDATED */}
        <motion.section className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#14598C] mb-6">
                A Message from Our Founder
              </h2>

              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  Vishnu S founded Vishnu S & Associates with a strong vision to
                  create a Chartered Accountancy firm that goes beyond routine
                  compliance and becomes a trusted partner for business growth.
                </p>
                <p>
                  A qualified Chartered Accountant with a keen interest in
                  automation and process improvement, he focuses on helping
                  businesses improve efficiency, accuracy, and long-term value.
                </p>
                <p>
                  Under his leadership, the firm has served startups, SMEs, and
                  established organizations with integrity and personalized care.
                </p>
              </div>

              <p className="font-semibold text-[#14598C]">Vishnu S</p>
              <p className="text-gray-600">Founder</p>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src={founderImg} alt="Founder" fill className="object-cover" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* GENERAL MANAGER SECTION — CONTENT UPDATED */}
        <motion.section className="mb-24">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#14598C] mb-6">
                A Message from Our General Manager
              </h2>

              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  Srinivasaiah Setty brings over 35 years of experience as a Bank
                  Manager, offering deep expertise in financial operations,
                  regulatory compliance, and risk management.
                </p>
                <p>
                  With a strong background in liaison and coordination services,
                  he plays a key role in managing regulatory interactions and
                  strengthening institutional relationships.
                </p>
                <p>
                  As General Manager, he ensures operational discipline and
                  supports the firm's commitment to client-centric excellence.
                </p>
              </div>

              <p className="font-semibold text-[#14598C]">Srinivasaiah Setty</p>
              <p className="text-gray-600">General Manager</p>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={generalManagerImg}
                  alt="General Manager"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>
        {/* PURPOSE / MISSION / VISION SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14598C] mb-4">
              Our Purpose
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What inspires our work and shapes our long-term direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition duration-300 group">
              <div className="w-16 h-16 rounded-xl bg-[#14598C]/15 flex items-center justify-center mb-6 group-hover:scale-105 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#14598C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M12 6v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#14598C] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, reliable, and innovative financial
                services that empower our clients to make informed decisions
                and sustain long-term growth.
              </p>
            </div>

            {/* Purpose */}
            <div
              className="rounded-2xl shadow-xl p-10 border border-blue-700 hover:shadow-2xl transition duration-300 group"
              style={{ background: footerBlue }}
            >
              <div className="w-16 h-16 rounded-xl bg-white/25 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 group-hover:scale-105 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Purpose</h3>
              <p className="text-white/90 leading-relaxed">
                To uplift businesses and individuals through trustworthy financial
                guidance rooted in values, long-term vision, and professional
                excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition duration-300 group">
              <div className="w-16 h-16 rounded-xl bg-[#14598C]/15 flex items-center justify-center mb-6 group-hover:scale-105 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#14598C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6l7 12H5L12 6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#14598C] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                By 2030, to be one of India's most trusted and preferred CA
                firms—setting new standards in excellence, transparency,
                and client-focused service.
              </p>
            </div>

          </div>
        </motion.section>
      </div>

            <Footer />
    </div>
  );
}