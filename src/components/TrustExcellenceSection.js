export default function TrustExcellenceSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A237E] leading-tight">
          Built on Trust. Driven by Excellence.
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-lg md:text-xl text-[#616161] max-w-3xl mx-auto">
          Built on a foundation of{" "}
          <span className="font-semibold text-[#212121]">
            integrity, accuracy, and practical thinking
          </span>
          , Vishnu S & Associates provides end-to-end CA solutions to businesses,
          professionals, and startups across India.
        </p>

        {/* STAT CARDS GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <StatCard number="6+" label="Years Experience" delay="0" />

          {/* CARD 2 */}
          <StatCard number="500+" label="Clients Served" delay="100" />

          {/* CARD 3 */}
          <StatCard number="100%" label="Pan-India Reach" delay="200" />

          {/* CARD 4 */}
          <StatCard number="24/7" label="Support Available" delay="300" />

        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label, delay }) {
  return (
    <div
      className={`backdrop-blur-xl bg-white border border-gray-100 shadow-lg 
      rounded-3xl p-8 transform hover:-translate-y-2 transition-all duration-500 
      animate-fadeUp`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-4xl font-bold text-[#F9A825]">{number}</h3>
      <p className="mt-2 text-[#212121] font-medium">{label}</p>
    </div>
  );
}
