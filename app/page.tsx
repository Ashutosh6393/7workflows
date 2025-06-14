import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import ServicesSection from '@/components/ui/services-section';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}