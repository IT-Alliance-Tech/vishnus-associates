"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Info,
  Users,
  Lock,
  Scale,
  Link2,
  Edit,
  Phone,
  IndianRupee,
  RotateCcw
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <Header />

      <section className="relative w-full bg-gradient-to-b from-slate-50 to-white pt-28 pb-20">
        {/* Floating Shapes Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-start gap-8">
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="hidden md:block flex-shrink-0"
              >
                {/* ✅ ONLY ICON SIZE REDUCED */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center">
                  <FileText className="text-white" size={32} />
                </div>
              </motion.div>

              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                  Terms & Conditions
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl">
                  Please read these terms carefully before using our website or services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Layout */}
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-80 flex-shrink-0"
            >
              <div className="lg:sticky lg:top-32 bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Scale size={20} className="text-blue-600" />
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  <NavLink>Acceptance of Terms</NavLink>
                  <NavLink>Use of Services</NavLink>
                  <NavLink>Accuracy of Information</NavLink>
                  <NavLink>Client–Professional Relationship</NavLink>
                  <NavLink>Data Protection & Privacy</NavLink>
                  <NavLink>Intellectual Property</NavLink>
                  <NavLink>Limitation of Liability</NavLink>
                  <NavLink>Links to Third-Party Websites</NavLink>
                  <NavLink>Modification of Terms</NavLink>
                  <NavLink>Dispute Resolution</NavLink>
                  <NavLink>Contact Information</NavLink>
                  <NavLink>Refund Policy</NavLink>
                  <NavLink>Pricing</NavLink>
                </nav>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 space-y-8">

              <Section icon={FileText} title="Acceptance of Terms" number="01">
                By accessing and using our website, you agree to abide by these terms
                and conditions. If you do not agree, please refrain from using our services.
              </Section>

              <Section icon={Users} title="Use of Services" number="02">
                Our website provides information about our Chartered Accountant services.
                Any use of the content or services is at your own risk.
              </Section>

              <Section icon={Info} title="Accuracy of Information" number="03">
                While we strive for accuracy, we do not guarantee the completeness,
                accuracy, or reliability of the information on our website.
                Users are encouraged to verify information independently.
              </Section>

              <Section icon={ShieldCheck} title="Client–Professional Relationship" number="04">
                The information provided does not constitute professional advice.
                No client–professional relationship is established by using this website.
              </Section>

              <Section icon={Lock} title="Data Protection & Privacy" number="05">
                We collect minimal personal information for legitimate business purposes
                and adhere to applicable data protection laws.
              </Section>

              <Section icon={Scale} title="Intellectual Property" number="06">
                All content on this website, including text, images, and logos,
                is the property of Vishnu S & Associates, Chartered Accountants.
              </Section>

              <Section icon={Scale} title="Limitation of Liability" number="07">
                Vishnu S & Associates shall not be liable for any direct, indirect,
                or consequential damages arising from the use or inability to use
                our website or services.
              </Section>

              <Section icon={Link2} title="Links to Third-Party Websites" number="08">
                Our website may contain links to third-party websites.
                We are not responsible for their content or privacy practices.
              </Section>

              <Section icon={Edit} title="Modification of Terms" number="09">
                We reserve the right to modify or update these terms at any time
                without prior notice.
              </Section>

              <Section icon={Scale} title="Dispute Resolution" number="10">
                Any disputes arising from the use of this website shall be resolved
                through arbitration.
              </Section>

              <Section icon={Phone} title="Contact Information" number="11">
                For any inquiries regarding these terms, please contact us at{" "}
                <a
                  href="mailto:support@cavsa.in"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  support@cavsa.in
                </a>
              </Section>

              <Section icon={RotateCcw} title="Refund Policy" number="12">
                We aim to ensure complete satisfaction with our services.
                However, please note that refunds will not be issued.
              </Section>

              {/* ✅ Pricing section WITHOUT pricing amount */}
              <Section icon={IndianRupee} title="Pricing" number="13">
                Our pricing structure is designed to accommodate diverse client needs.
                Service fees vary based on the scope, complexity, and nature of services provided.
              </Section>

              {/* Agreement Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border-2 border-blue-200"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <ShieldCheck className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Agreement Acknowledgment
                    </h3>
                    <p className="text-slate-700 text-lg">
                      By using our website, you acknowledge that you have read,
                      understood, and agreed to these Terms & Conditions.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* Navigation Link */
function NavLink({ children }) {
  return (
    <a className="block text-sm text-slate-600 hover:text-blue-600 hover:translate-x-2 transition-all py-2 border-l-2 border-transparent hover:border-blue-600 pl-3">
      {children}
    </a>
  );
}

/* Reusable Section */
function Section({ icon: Icon, title, children, number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div className="absolute -left-4 top-0 text-8xl font-bold text-blue-100 opacity-50 select-none">
        {number}
      </div>

      <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
            <Icon className="text-white" size={26} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {children}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
