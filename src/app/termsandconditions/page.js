"use client";

import PremiumHeader from "../../components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <PremiumHeader />
      
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-32 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>
        <p className="text-xl text-gray-600">Coming Soon</p>
      </main>

      <Footer />
    </div>
  );
}
