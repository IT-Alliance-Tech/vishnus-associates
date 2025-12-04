"use client";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function FooterProfessional() {
  return (
    <footer className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Company Info - 5 columns */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-100 h-10 w-10 rounded-lg shadow-md"></div>
              <span className="text-xl font-bold text-gray-900">Vishnu S & Associates</span>
            </div>
            
            <p className="text-gray-700 mb-6 max-w-md">
              Delivering clarity and expert financial support through tax, audit, 
              and business advisory services for clients across India.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-blue-600 mt-1 shadow-sm" />
                <span className="hover:text-blue-600 transition">info@vishnusassociates.com</span>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-blue-600 mt-1 shadow-sm" />
                <span className="hover:text-blue-600 transition">+91 XXXXX XXXXX</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 mt-1 shadow-sm" />
                <span className="hover:text-blue-600 transition">Pan-India Services</span>
              </div>
            </div>
          </div>
          
          {/* Services - 3 columns */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Services</h3>
            
            <ul className="space-y-3">
              {["Book Keeping & Compliance","Auditing & Assurance","Tax Services","Legal Matters","Startup Advisory"].map((service, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-gray-800 hover:text-blue-600 transition hover:underline"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links - 2 columns */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
            
            <ul className="space-y-3">
              {["Home","About Us","Services","Contact"].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-gray-800 hover:text-blue-600 transition hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Legal - 2 columns */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Connect</h3>
            
            <div className="flex gap-4 mb-8">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a 
                  href="#" 
                  key={idx} 
                  className="text-gray-700 hover:text-blue-600 transition shadow-md p-2 rounded-full hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy","Terms of Service"].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-gray-800 hover:text-blue-600 transition hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Vishnu S & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
