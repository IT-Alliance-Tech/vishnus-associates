import HeroBanner from '@/components/HeroBanner';
import TrustExcellenceSection from '@/components/TrustExcellenceSection';
import FinancialGrowthSection from '@/components/FinancialGrowthSection';
import CoreServices from '@/components/CoreServices';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <TrustExcellenceSection />
      <FinancialGrowthSection />
      <CoreServices />
      <Banner />
      <Footer />

      
    </main>
  );
}
