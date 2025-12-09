"use client";
import { Phone, Mail, Smartphone } from "lucide-react";

export default function CTASectionModern() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <div className="p-10 md:p-14">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Let's Simplify Your Finances and
                <span className="block text-indigo-600 mt-2">Grow Your Business</span>
              </h2>
              
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Take the first step towards financial clarity and business growth with our expert team.
              </p>
              
              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-block px-10 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                </a>
              </div>
            </div>
            
            {/* Contact Options */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="text-center group">
                <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <Mail className="text-indigo-600" size={28} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Email Us</h3>
                <p className="mt-2 text-gray-600">info@vishnusassociates.com</p>
              </div>
              
              {/* Call */}
              <div className="text-center group">
                <div className="mx-auto h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                  <Smartphone className="text-amber-600" size={28} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Call Us</h3>
                <p className="mt-2 text-gray-600">+91 XXXXX XXXXX</p>
              </div>
              
              {/* Direct Line */}
              <div className="text-center group">
                <div className="mx-auto h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <Phone className="text-purple-600" size={28} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Direct Line</h3>
                <p className="mt-2 text-gray-600">+91 XXXXX XXXXX</p>
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
