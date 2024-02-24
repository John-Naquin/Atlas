import Hero from './components/Hero';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10">
      <Hero />
      <FeatureCard />
      <Footer />
    </main>
  );
}
