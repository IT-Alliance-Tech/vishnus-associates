import HeroBanner from '@/components/HeroBanner';
import TrustExcellenceSection from '@/components/TrustExcellenceSection';
import FinancialGrowthSection from '@/components/FinancialGrowthSection';
import CoreServices from '@/components/CoreServices';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <TrustExcellenceSection />
      <FinancialGrowthSection />
      <CoreServices />
      
    </main>
  );
}
