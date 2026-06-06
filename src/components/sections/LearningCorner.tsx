"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import BentoCard from "@/components/ui/BentoCard";

const books = [
  {
    title: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    cover: "/images/books/magic-thinking-big.jpg",
    impact: "10/10",
    takeaway:
      "The size of your thinking determines the size of your opportunities and achievements.",
  },

  {
    title: "You²",
    author: "Price Pritchett",
    cover: "/images/books/you2.jpg",
    impact: "9/10",
    takeaway:
      "Breakthrough growth often comes from quantum leaps rather than incremental improvements.",
  },

  {
    title: "The Millionaire Fastlane",
    author: "MJ DeMarco",
    cover: "/images/books/fastlane.jpg",
    impact: "10/10",
    takeaway:
      "Ownership, leverage and systems create wealth far more effectively than trading time for money.",
  },

  {
    title: "The Courage to Be Disliked",
    author: "Ichiro Kishimi & Fumitake Koga",
    cover: "/images/books/courage.jpg",
    impact: "9/10",
    takeaway:
      "Freedom begins when you stop seeking validation and start living according to your values.",
  },

  {
    title: "The Art of Saying No",
    author: "Damon Zahariades",
    cover: "/images/books/saying-no.jpg",
    impact: "8/10",
    takeaway:
      "Protecting your time and energy is essential for meaningful work and long-term growth.",
  },
];

export default function LearningCorner() {
  const [selectedBook, setSelectedBook] = useState(books[0]);

  return (
    <Section id="learning">
      <div className="max-w-7xl mx-auto">

        <SectionLabel>
          The Learning Corner
        </SectionLabel>

        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Books that changed how I think.
          </h2>

          <p className="text-secondary max-w-2xl">
            A small collection of books that influenced my approach to
            learning, decision making, ambition and personal growth.
          </p>
        </div>

        {/* BOOKSHELF */}

        <BentoCard className="mb-8 overflow-visible">

          <div className="flex items-end justify-center gap-4 md:gap-6 overflow-x-auto pb-4">

            {books.map((book) => (
              <motion.button
                key={book.title}
                onClick={() => setSelectedBook(book)}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group flex-shrink-0"
              >
                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-t-lg
                    border
                    transition-all
                    duration-300

                    ${
                      selectedBook.title === book.title
                        ? "border-accent shadow-[0_0_30px_rgba(99,102,241,0.25)]"
                        : "border-white/10"
                    }
                  `}
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="
                      w-20
                      md:w-24
                      h-32
                      md:h-40
                      object-cover
                    "
                  />
                </div>

                <div
                  className={`
                    h-2
                    rounded-b-md

                    ${
                      selectedBook.title === book.title
                        ? "bg-accent"
                        : "bg-white/10"
                    }
                  `}
                />
              </motion.button>
            ))}
          </div>

          {/* Shelf */}

          <div className="h-3 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 mt-1" />
        </BentoCard>

        {/* SELECTED BOOK DETAILS */}

        <AnimatePresence mode="wait">

          <motion.div
            key={selectedBook.title}
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
              duration: 0.3,
            }}
          >
            <BentoCard>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* COVER */}

                <div className="lg:col-span-3">
                  <img
                    src={selectedBook.cover}
                    alt={selectedBook.title}
                    className="
                      w-full
                      max-w-[220px]
                      rounded-2xl
                      border
                      border-white/10
                    "
                  />
                </div>

                {/* DETAILS */}

                <div className="lg:col-span-9">

                  <div className="mb-6">

                    <div className="text-accent text-sm uppercase tracking-wider mb-2">
                      Currently Selected
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {selectedBook.title}
                    </h3>

                    <p className="text-secondary">
                      {selectedBook.author}
                    </p>

                  </div>

                  <div className="mb-8">

                    <span className="text-secondary text-sm">
                      Impact Score
                    </span>

                    <div className="text-5xl font-bold text-accent mt-1">
                      {selectedBook.impact}
                    </div>

                  </div>

                  <div>

                    <h4 className="text-white text-lg font-semibold mb-3">
                      Key Takeaway
                    </h4>

                    <p className="text-secondary leading-relaxed max-w-3xl">
                      {selectedBook.takeaway}
                    </p>

                  </div>

                </div>

              </div>

            </BentoCard>
          </motion.div>

        </AnimatePresence>

      </div>
    </Section>
  );
}