"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Service() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-32 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Service Page
        </h1>
        <p className="text-xl text-gray-600">Coming Soon</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
