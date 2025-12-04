"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center">
                <span className="text-indigo-900 font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-white">
                      Vishnu S & Associates</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-indigo-100 hover:text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-700/50"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop auth buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="text-white font-medium px-5 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-700/50 border border-indigo-600"
            >
              Login
            </Link>
            <Link
              href="/consultation"
              className="bg-amber-500 hover:bg-amber-400 text-indigo-900 font-bold px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-indigo-200 hover:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 border-t border-indigo-700">
          <div className="pt-3 pb-5 space-y-2 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2.5 text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-700/50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-indigo-700 space-y-2">
              <Link
                href="/login"
                className="block px-4 py-2.5 text-base font-medium text-white hover:bg-indigo-700/50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                href="/consultation"
                className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-indigo-900 font-bold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
