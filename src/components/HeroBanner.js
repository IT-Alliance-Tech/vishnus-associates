// components/HeroPremiumFinal.jsx
import { 
  FiPhone, 
  FiArrowRight, 
  FiTrendingUp, 
  FiShield, 
  FiBarChart2, 
  FiLayers 
} from "react-icons/fi";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-white to-[#F5F7FA]">

      {/* LIGHT BACKGROUND ORBS – MATCHED EXACTLY WITH FINANCIAL GROWTH SECTION */}
      <div className="absolute -top-28 -left-28 w-[420px] h-[420px] bg-[#AFC3FF] rounded-full blur-[200px] opacity-25" />
      <div className="absolute -bottom-28 -right-28 w-[480px] h-[480px] bg-[#FFE9A6] rounded-full blur-[220px] opacity-25" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

        {/* LEFT */}
        <div className="lg:col-span-7 space-y-8">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#1A237E] via-[#3949AB] to-[#1A237E] text-transparent bg-clip-text">
              Empowering Smarter Financial Decisions
            </span>
          </h1>

          <p className="text-lg md:text-xl" style={{ color: "#616161" }}>
            <span className="font-semibold" style={{ color: "#212121" }}>
              Vishnu S & Associates
            </span>{" "}
            — Your trusted partner in audit, compliance, taxation & financial strategy.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            {/* PRIMARY BUTTON */}
            <a
              href="#services"
              className="px-7 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition transform flex items-center gap-2"
              style={{ backgroundColor: "#1A237E" }}
            >
              Explore Services
              <FiArrowRight className="text-lg" />
            </a>

            {/* SECONDARY BUTTON */}
            <a
              href="tel:+910000000000"
              className="px-7 py-3 rounded-full font-semibold bg-white hover:-translate-y-1 transition flex items-center gap-2"
              style={{
                borderColor: "#F9A825",
                color: "#1A237E",
                borderWidth: "2px"
              }}
            >
              <FiPhone className="text-lg" />
              Book Free Consultation
            </a>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="lg:col-span-5 relative">
          <div
            className="relative rounded-3xl shadow-2xl backdrop-blur-2xl p-10 flex flex-col gap-8 animate-premiumFloat"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderColor: "rgba(255,255,255,0.4)",
              borderWidth: "1px"
            }}
          >

            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                borderColor: "rgba(255,255,255,0.5)",
                borderWidth: "1px",
                boxShadow: "0 0 60px rgba(0,0,0,0.04)"
              }}
            />

            <FeatureRow
              icon={<FiBarChart2 />}
              title="Financial Excellence"
              subtitle="Precision-driven insights for superior financial performance"
              color="text-[#1A237E]"
            />

            <FeatureRow
              icon={<FiShield />}
              title="Legal Compliances"
              subtitle="End-to-end regulatory compliance with accuracy"
              color="text-[#3949AB]"
            />

            <FeatureRow
              icon={<FiTrendingUp />}
              title="Strategic Insights"
              subtitle="Smarter decision-making backed by analytics"
              color="text-[#F9A825]"
            />

            <FeatureRow
              icon={<FiLayers />}
              title="Growth Support"
              subtitle="Comprehensive advisory to scale your business"
              color="text-[#616161]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* FEATURE ROW COMPONENT */
function FeatureRow({ icon, title, subtitle, color }) {
  return (
    <div className="flex items-start gap-4 group">
      <div
        className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-2xl ${color}
          transition transform group-hover:scale-110 group-hover:rotate-3`}
      >
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold" style={{ color: "#212121" }}>{title}</h4>
        <p className="text-sm" style={{ color: "#616161" }}>{subtitle}</p>
      </div>
    </div>
  );
}
