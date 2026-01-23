import { Poppins } from "next/font/google";
import Script from "next/script";
import { FaWhatsapp } from "react-icons/fa";
import "./globals.css";

// ✅ Import logo
import vishnuLogo from "../../public/caps.png";

// Load Poppins font with all necessary weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Vishnu S & Associates",
  description:
    "Vishnu S & Associates is a professional firm offering trusted audit, compliance, taxation, and advisory services with a commitment to excellence and client-focused solutions.",
  icons: {
    icon: vishnuLogo.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}

        {/* ✅ Calendly Script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />

        {/* ✅ Floating WhatsApp Icon */}
        <a
          href="https://wa.me/919743991199"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-15 right-5 z-50"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <FaWhatsapp className="w-6 h-6 text-white" />
          </div>
        </a>
      </body>
    </html>
  );
}
