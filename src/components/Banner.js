"use client";
import { Phone, Mail, Smartphone } from "lucide-react";

export default function CTASectionModern() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#14598c]/10 to-[#14598c]/20 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <div className="p-10 md:p-14">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Let's Simplify Your Finances and
                <span className="block text-[#14598c] mt-2">
                  Grow Your Business
                </span>
              </h2>

              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Take the first step towards financial clarity and business growth with our expert team.
              </p>

              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-block px-10 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#14598c] to-[#14598c] hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                </a>
              </div>
            </div>

            {/* Contact Options */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="text-center group">
                <div className="mx-auto h-16 w-16 rounded-full bg-[#14598c]/10 flex items-center justify-center group-hover:bg-[#14598c]/20 transition-colors duration-300">
                  <Mail className="text-[#14598c]" size={28} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Email Us
                </h3>
                <p className="mt-2 text-gray-600">support@cavsa.in</p>
              </div>

              {/* Call */}
              <div className="text-center group">
                <div className="mx-auto h-16 w-16 rounded-full bg-[#14598c]/10 flex items-center justify-center group-hover:bg-[#14598c]/20 transition-colors duration-300">
                  <Smartphone className="text-[#14598c]" size={28} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Call Us
                </h3>
                <p className="mt-2 text-gray-600">+91 9731208006</p>
              </div>

              {/* Direct Line */}
              <div className="text-center group">
                <div className="mx-auto h-16 w-16 rounded-full bg-[#14598c]/10 flex items-center justify-center group-hover:bg-[#14598c]/20 transition-colors duration-300">
                  <Phone className="text-[#14598c]" size={28} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Direct Line
                </h3>
                <p className="mt-2 text-gray-600">+91 9743991199</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500">
                Our team is ready to help you achieve financial success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
