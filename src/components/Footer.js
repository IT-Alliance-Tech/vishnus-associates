"use client";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

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
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-current text-gray-800"
          ></path>
        </svg>
      </div>

      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brand & Contact Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-10 w-10 rounded-lg flex items-center justify-center">
                <div className="bg-white h-5 w-5 rounded transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-white">
                Vishnu S & Associates
              </span>
            </div>

            <p className="text-gray-400 text-sm">
              Expert financial solutions with 6+ years of experience serving
              clients across India. Trusted by 1000+ satisfied customers.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 cursor-pointer">
                <Mail className="text-white" size={18} />
                <a
                  href="mailto:info@vishnusassociates.com"
                  className="text-white hover:text-blue-400 transition text-sm"
                >
                  support@cavsa.in
                </a>
              </div>

              <div className="flex items-center gap-3 cursor-pointer">
                <Phone className="text-white" size={18} />
                <a
                  href="tel:+919731208006"
                  className="text-white hover:text-blue-400 transition text-sm"
                >
                  +91 9731208006
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  href="#"
                  key={idx}
                  className="bg-gray-800 hover:bg-blue-500 text-white p-2 rounded-lg transition cursor-pointer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services + Quick Links Card */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/30 transition duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Our Services */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  <li className="cursor-pointer">
                    <Link
                      href="/service#bookkeeping-compliance"
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Bookkeeping and compliance
                    </Link>
                  </li>

                  <li className="cursor-pointer">
                    <Link
                      href="/service#auditing-assurance"
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Auditing and assurance
                    </Link>
                  </li>

                  <li className="cursor-pointer">
                    <Link
                      href="/service#tax-services"
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Tax Services
                    </Link>
                  </li>

                  <li className="cursor-pointer">
                    <Link
                      href="/service#legal-matters"
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Legal Matters
                    </Link>
                  </li>

                  <li className="cursor-pointer">
                    <Link
                      href="/service#startup-advisory"
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Startup Advisory
                    </Link>
                  </li>

                  <li className="cursor-pointer">
                    <Link
                      href="/service#virtual-cfo"
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Virtual CFO
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: "Home", link: "/" },
                    { name: "About Us", link: "/about" },
                    { name: "Services", link: "/service" },
                    { name: "Contact", link: "/contact" },
                    { name: "Privacy Policy", link: "/privacypolicy" },
                    { name: "Terms of Service", link: "/termsandconditions" },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm gap-3">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-6 w-6 rounded-lg flex items-center justify-center">
              <div className="bg-white h-3 w-3 rounded transform rotate-45"></div>
            </div>
            <span className="text-white font-medium">
              Vishnu S & Associates
            </span>
          </div>

          <p className="text-gray-500 text-center md:text-left">
            © 2025 Vishnu S & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
