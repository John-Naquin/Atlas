'use client'
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import AlertModal from './components/AlertModal';
import BotFeature from './components/BotFeature';
import Faq from './components/Faq';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('modalShown')) {
      setModalOpen(true);
      sessionStorage.setItem('modalShown', 'true');
    }
  }, []);

  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <Hero />
      <FeatureCard />
      <BotFeature />
      <Faq />
      <Footer />
      <AlertModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <p>Just a heads-up, Im on the free tier of Render, so when you use the bot, expect it to say loading for a minute or so before you get a reply for the first message.</p>
      </AlertModal>
    </main>
  );
}
