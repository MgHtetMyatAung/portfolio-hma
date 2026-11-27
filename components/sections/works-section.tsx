"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface CarouselItem {
  id: number;
  title: string;
  category: string;
  headline: string;
  summary: string;
  year: string;
}

const ITEMS: CarouselItem[] = [
  {
    id: 1,
    title: "Next.js",
    category: "Platform",
    headline: "A Faster Way to Build the Web",
    summary:
      "A production-ready portfolio experience with crisp content and fast navigation.",
    year: "2026",
  },
  {
    id: 2,
    title: "Motion",
    category: "Interaction",
    headline: "Small Movements, Stronger Stories",
    summary:
      "Purposeful animation adds rhythm while keeping every interaction comfortable.",
    year: "2026",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    category: "Interface",
    headline: "Design That Keeps Every Detail in Line",
    summary:
      "A consistent visual system brings structure from the smallest component upward.",
    year: "2025",
  },
  {
    id: 4,
    title: "TypeScript",
    category: "Engineering",
    headline: "Reliable Code Makes Confident Products",
    summary:
      "Strong types help complex features remain clear, maintainable and predictable.",
    year: "2025",
  },
  {
    id: 5,
    title: "React",
    category: "Frontend",
    headline: "Interfaces Built for a Changing World",
    summary:
      "Reusable components turn ambitious ideas into accessible digital experiences.",
    year: "2024",
  },
];

export default function AutoScrollCarousel() {
  const duplicatedItems = [...ITEMS, ...ITEMS];

  return (
    <section className="relative min-h-fit w-full overflow-hidden bg-old-news py-10 text-midnight">
      <div className="container mb-10">
        <h2 className=" uppercase text-xl sm:text-2xl md:text-3xl font-bold text-midnight">
          Selected Works
        </h2>
      </div>

      <div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-[#eeeadd] to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-[#eeeadd] to-transparent sm:w-16" />

        <motion.div
          className="flex w-max gap-4 px-4 sm:gap-6 sm:px-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 80,
            repeat: Infinity,
          }}
        >
          {duplicatedItems.map((item, idx) => (
            <article
              key={`${item.id}-${idx}`}
              className="group w-70 shrink-0 border-y-2 border-r border-midnight bg-gray-200 sm:w-90"
            >
              <div className="p-3">
                <div className="relative h-55 overflow-hidden border-y border-midnight sm:h-65">
                  <Image
                    src="/imgs/sample-project.jpg"
                    width={720}
                    height={520}
                    alt={`${item.title} project preview`}
                    className="h-full w-full object-cover grayscale contrast-125 transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <span className="absolute bottom-2 left-2 border border-[#f8f5e9] bg-midnight px-2 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#f8f5e9]">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 text-[10px] font-bold uppercase tracking-[0.16em]">
                  <span>View case study</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
