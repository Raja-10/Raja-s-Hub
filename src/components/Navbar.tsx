
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Professional Journey', href: '#journey' },
  { label: 'Teams & Communities', href: '#communities' },
  { label: 'Sports & Hobbies', href: '#sports' },
  { label: 'Learning Corner', href: '#learning' },
  // { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = '#hero';

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120) {
          current = link.href;
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/5 py-4'
            : 'py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}

          <button
            onClick={() => handleNav('#hero')}
            className="flex items-center gap-3 group"
          >
            <div
              className="
                w-10 h-10
                rounded-full
                bg-accent/15
                border border-accent/30
                flex items-center justify-center
                text-accent
                text-sm
                font-bold
                transition-all
                group-hover:bg-accent/25
              "
            >
              RY
            </div>

            <div className="hidden sm:block text-left">
              <p className="text-white text-sm font-medium">
                Rajayogeshwar G
              </p>

            </div>
          </button>

          {/* Desktop Navigation */}

          <nav className="hidden xl:flex items-center gap-2">

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  `
                  relative
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  transition-all
                  duration-300
                  `,
                  active === link.href
                    ? 'text-white'
                    : 'text-secondary hover:text-white'
                )}
              >
                {active === link.href && (
                  <motion.div
                    layoutId="navbar-active"
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                    "
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {link.label}
                </span>
              </button>
            ))}

          </nav>

          {/* Contact Button + Mobile Menu */}

          <div className="flex items-center gap-3">

          <button
            onClick={() => handleNav('#contact')}
            className="
              hidden sm:flex
              px-4 py-2
              rounded-xl
              bg-accent
              text-white
              text-sm
              font-medium
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Let's Connect
          </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                xl:hidden
                p-2
                rounded-lg
                hover:bg-white/5
                transition-colors
              "
            >
              {mobileOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>

          </div>

        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              top-20
              left-4
              right-4
              z-40
              rounded-2xl
              border
              border-white/10
              bg-black/90
              backdrop-blur-xl
              overflow-hidden
            "
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  `
                  w-full
                  text-left
                  px-5
                  py-4
                  text-sm
                  border-b
                  border-white/5
                  transition-colors
                  `,
                  active === link.href
                    ? 'bg-accent/10 text-accent'
                    : 'text-secondary hover:text-white'
                )}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}
