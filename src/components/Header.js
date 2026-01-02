"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PremiumHeader() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER ROW */}
        <div className="flex h-16 lg:h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/caps.png"
              alt="Vishnu S & Associates Logo"
              width={300}          // ⬅️ slightly increased
              height={90}
              priority
              quality={100}
              unoptimized
              className="
                w-[230px]
                sm:w-[250px]
                lg:w-[280px]
                h-auto
                object-contain
              "
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 font-medium leading-none hover:text-[#14598C] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/login"
              className="px-5 py-2.5 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition"
            >
              Client Login
            </a>

            <Link href="/free-consultation">
              <button className="px-6 py-2.5 bg-[#14598C] text-white rounded-lg shadow hover:bg-[#0F4066] transition">
                Book Consultation
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 bg-gray-100 rounded-lg"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/login"
              onClick={() => setOpen(false)}
              className="py-3 mt-2 border border-gray-300 text-center rounded-lg hover:bg-gray-100 transition"
            >
              Login
            </a>

            <Link href="/free-consultation" onClick={() => setOpen(false)}>
              <button className="w-full px-6 py-2.5 bg-[#14598C] text-white rounded-lg shadow hover:bg-[#0F4066] transition">
                Free Consultation
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
