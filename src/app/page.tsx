'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
// import About from '@/components/sections/About';
// import Academics from '@/components/sections/Academics';
import ProfessionalJourney from '@/components/sections/ProfessionalJourney';
import Communities from '@/components/sections/Communities';
import SportsAndHobbies from '@/components/sections/SportsAndHobbies';
import LearningCorner from '@/components/sections/LearningCorner';
import ThankYou from '@/components/sections/ThankYou';
import Memories from '@/components/sections/Memories';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/ui/CursorGlow';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        {/* <Academics /> */}
        <ProfessionalJourney />
        <Communities />
        <SportsAndHobbies />
        <LearningCorner />
        <ThankYou />
        <Memories />
        <Contact />
      </main>
      <Footer />
    </>
  );
}