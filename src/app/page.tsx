'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Academics from '@/components/sections/Academics';
import Research from '@/components/sections/Research';
import Projects from '@/components/sections/Projects';
import Swimming from '@/components/sections/Swimming';
import Travel from '@/components/sections/Travel';
import Achievements from '@/components/sections/Achievements';
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
        <About />
        <Academics />
        <Research />
        <Projects />
        <Swimming />
        <Travel />
        <Achievements />
        <Memories />
        <Contact />
      </main>
      <Footer />
    </>
  );
}