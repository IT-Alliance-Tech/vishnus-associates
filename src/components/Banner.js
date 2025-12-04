"use client";
import { Phone, Mail, Smartphone } from "lucide-react";

export default function CTASectionModern() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900 py-20">

      {/* Light Glow Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
          Let’s Simplify Your Finances and
          <span className="block text-amber-300 mt-1">Grow Your Business</span>
        </h2>

        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          Take the first step towards financial clarity and business growth with our expert team.
        </p>

        {/* Contact Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Email Card */}
          <div className="bg-white p-7 rounded-2xl shadow-xl border border-white/10">
            <div className="flex justify-center">
              <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                <Mail className="text-blue-600" size={26} />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Email Us</h3>
            <p className="mt-1 text-gray-600">info@vishnusassociates.com</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-7 rounded-2xl shadow-xl border border-white/10">
            <div className="flex justify-center">
              <div className="h-14 w-14 rounded-full bg-amber-100 flex items-center justify-center shadow-md">
                <Smartphone className="text-amber-600" size={26} />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Call Us</h3>
            <p className="mt-1 text-gray-600">+91 XXXXX XXXXX</p>
          </div>

          {/* Direct Line Card */}
          <div className="bg-white p-7 rounded-2xl shadow-xl border border-white/10">
            <div className="flex justify-center">
              <div className="h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center shadow-md">
                <Phone className="text-indigo-600" size={26} />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Direct Line</h3>
            <p className="mt-1 text-gray-600">+91 XXXXX XXXXX</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-xl transition-all"
          >
            Get Started Today
          </a>

          <p className="mt-4 text-blue-100">
            Our team is ready to help you achieve financial success.
          </p>
        </div>

      </div>
    </section>
  );
}
