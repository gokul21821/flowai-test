"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaxCard,
  InsuranceCard,
  SchedulingCard,
  IntakeCard,
} from "./HeroCards";

export default function HeroAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { id: 0, component: FaxCard },
    { id: 1, component: InsuranceCard },
    { id: 2, component: SchedulingCard },
    { id: 3, component: IntakeCard },
  ];

  // NEW WIDTHS + NEW Y OFFSETS + CLEANER STACK
  const getCardStyle = (index: number) => {
    const position = (index - activeIndex + totalCards) % totalCards;

    switch (position) {
      case 0:
        return {
          zIndex: 6,
          scale: 1,
          y: -18,
          opacity: 1,
          width: "100%",
        };
      case 1:
        return {
          zIndex: 5,
          scale: 1,
          y: -190, // moderate lift
          opacity: 0.65,
          width: "90%",
        };
      case 2:
        return {
          zIndex: 4,
          scale: 1,
          y: -218,
          opacity: 0.45,
          width: "80%",
        };
      case 3:
        return {
          zIndex: 3,
          scale: 1,
          y: -245,
          opacity: 0.25,
          width: "70%",
        };
      default:
        return {
          zIndex: 6,
          scale: 1,
          y: -2,
          opacity: 1,
          width: "100%",
        };
    }
  };

  return (
    <div className="relative w-full h-full min-h-[300px] flex justify-center items-end pb-10">
      <div className="relative w-full max-w-[600px] h-[500px] flex justify-center items-center">
        {cards.map((card, index) => {
          const style = getCardStyle(index);
          const isActive = index === activeIndex;
          const CardComponent = card.component;

          return (
            <motion.div
              key={card.id}
              className="absolute flex justify-center"
              initial={false}
              animate={{
                zIndex: style.zIndex,
                scale: style.scale,
                y: style.y,
                opacity: style.opacity,
                width: style.width, // NEW WIDTH CASCADE
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <div className="w-full">
                <CardComponent isActive={isActive} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
