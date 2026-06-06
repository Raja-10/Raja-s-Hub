"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import BentoCard from "@/components/ui/BentoCard";

const tabs = [
  {
    id: "basketball",
    title: "Basketball",
    subtitle:
      "Campion School Team • NIT Calicut Institute Team",

    images: [
      "/images/basketball/1.jpg",
      "/images/basketball/2.jpg",
      "/images/basketball/3.jpg",
      "/images/basketball/4.jpg",
      "/images/basketball/5.jpg",
      "/images/basketball/6.jpg",
    ],
  },

  {
    id: "swimming",
    title: "Swimming & Water Polo",
    subtitle:
      "IIT Kanpur Aquatics Team • Competitive Swimming",

    images: [
      "/images/swimming/1.jpg",
      "/images/swimming/2.jpg",
      "/images/swimming/3.jpg",
      "/images/swimming/4.jpg",
      "/images/swimming/5.jpg",
      "/images/swimming/6.jpg",
    ],
  },

  {
    id: "art",
    title: "Art & Craft",
    subtitle:
      "Sketches, drawings, handmade projects and creative work",

    images: [
      "/images/art/1.jpg",
      "/images/art/2.jpg",
      "/images/art/3.jpg",
      "/images/art/4.jpg",
      "/images/art/5.jpg",
      "/images/art/6.jpg",
    ],
  },

  {
    id: "anime",
    title: "Anime Corner",
    subtitle:
      "Stories, characters and worlds that inspired me",

    images: [
      "/images/anime/aot.jpg",
      "/images/anime/jjk.jpg",
      "/images/anime/deathnote.jpg",
      "/images/anime/haikyuu.jpg",
      "/images/anime/vinland.jpg",
      "/images/anime/monster.jpg",
    ],
  },
];

export default function SportsAndHobbies() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Section id="sports">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>
          Sports & Hobbies
        </SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Sidebar */}

          <BentoCard className="lg:col-span-3 h-fit">
            <div className="space-y-2">

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    w-full
                    text-left
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-300

                    ${
                      activeTab.id === tab.id
                        ? "bg-accent text-white"
                        : "bg-white/[0.02] text-secondary hover:text-white hover:bg-white/[0.05]"
                    }
                  `}
                >
                  {tab.title}
                </button>
              ))}

            </div>
          </BentoCard>

          {/* Content */}

          <div className="lg:col-span-9">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeTab.id}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.35,
                }}
              >
                <BentoCard>

                  <div className="mb-8">

                    <h3 className="text-3xl font-semibold text-white mb-2">
                      {activeTab.title}
                    </h3>

                    <p className="text-secondary">
                      {activeTab.subtitle}
                    </p>

                  </div>

                  {/* Gallery */}

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    {activeTab.images.map(
                      (image, index) => (
                        <motion.div
                          key={image}
                          initial={{
                            opacity: 0,
                            scale: 0.95,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            delay: index * 0.05,
                          }}
                          className="
                            group
                            overflow-hidden
                            rounded-2xl
                            border
                            border-white/5
                            cursor-pointer
                          "
                        >
                          <img
                            src={image}
                            alt=""
                            className="
                              h-56
                              w-full
                              object-cover
                              transition-transform
                              duration-500
                              group-hover:scale-105
                            "
                          />
                        </motion.div>
                      )
                    )}

                  </div>

                </BentoCard>
              </motion.div>

            </AnimatePresence>

          </div>

        </div>
      </div>
    </Section>
  );
}