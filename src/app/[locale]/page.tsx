import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Problems from '@/components/Problems';
import HowItWorks from '@/components/HowItWorks';
import Comparison from '@/components/Comparison';
import Referral from '@/components/Referral';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problems />
        <HowItWorks />
        <Comparison />
        <Referral />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
