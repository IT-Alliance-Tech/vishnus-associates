"use client";

import {
  Mail,
  Phone,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ModernWaveFooter() {
  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-1">
        <svg
          className="w-[150%] h-16 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28"
            className="fill-current text-gray-800"
          />
        </svg>
      </div>

      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Brand Section */}
          <div className="flex flex-col gap-4 items-start">

            {/* Logo */}
            <Image
              src="/caps.png"
              alt="VISHNU S & ASSOCIATES LOGO"
              width={300}
              height={80}
              priority
              className="object-contain brightness-0 invert"
            />

            <p className="text-gray-400 text-sm max-w-md text-left">
              Expert financial solutions with 6+ years of experience serving
              clients across India. Trusted by 950+ satisfied customers.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:support@cavsa.in"
                  className="hover:text-[#14598C] transition text-sm"
                >
                  support@cavsa.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <a
                  href="tel:+919731208006"
                  className="hover:text-[#14598C] transition text-sm"
                >
                  +91 9731208006
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {[Twitter, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-gray-800 hover:bg-[#14598C] p-2 rounded-lg transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services + Links */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  {[
                    "Bookkeeping and compliance",
                    "Auditing and assurance",
                    "Tax Services",
                    "Legal Matters",
                    "Startup Advisory",
                    "Virtual CFO",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="w-2 h-2 bg-[#14598C] rounded-full mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {[
                    "Home",
                    "About Us",
                    "Services",
                    "Contact",
                    "Privacy Policy",
                    "Terms of Service",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="w-2 h-2 bg-[#14598C] rounded-full mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (CENTER ALIGNED) */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex justify-center items-center text-sm">
          <p className="text-gray-500 text-center">
            © 2025 VISHNU S & ASSOCIATES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
