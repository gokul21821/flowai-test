"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
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
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { id: 0, component: FaxCard },
    { id: 1, component: InsuranceCard },
    { id: 2, component: SchedulingCard },
    { id: 3, component: IntakeCard },
  ];

  // 3D Variants: Uses 'z' (translateZ) for true depth sorting
  const variants: Variants = {
    active: {
      y: 110,
      z: 0, // Closest to camera
      scale: 1,
      opacity: 1,
      width: "100%", // Full width
      zIndex: 50,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    second: {
      y: 50,
      z: -100, // 100px back
      scale: 1,
      opacity: 0.8, // Slightly faded
      width: "90%", // Narrower
      zIndex: 40,
      filter: "blur(1px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    third: {
      y: -5,
      z: -200, // 200px back
      scale: 1,
      opacity: 0.6,
      width: "80%", // Even narrower
      zIndex: 30,
      filter: "blur(1px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    fourth: {
      y: -60,
      z: -300, // 300px back (Furthest away)
      scale: 1,
      opacity: 0.4,
      width: "70%", // Narrowest
      zIndex: 20,
      filter: "blur(1px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const getVariant = (index: number) => {
    const position = (index - activeIndex + totalCards) % totalCards;
    if (position === 0) return "active";
    if (position === 1) return "second";
    if (position === 2) return "third";
    return "fourth";
  };

  return (
    // 1. Perspective Container: Defines the 3D space
    // 'perspective' determines how "deep" the 3D effect looks.
    <div 
      className="relative w-full h-full min-h-[300px] flex justify-center items-end pb-10 overflow-hidden"
      style={{ perspective: "1200px" }} 
    >
      {/* 2. 3D Scene Wrapper */}
      <div 
        className="relative w-full max-w-[600px] h-[500px] flex justify-center items-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {cards.map((card, index) => {
          const CardComponent = card.component;
          const variantName = getVariant(index);
          // Pass isActive logic to the card so it handles its own colors/content
          const isActive = variantName === "active";

          return (
            <motion.div
              key={card.id}
              className="absolute flex justify-center top-0 origin-bottom"
              animate={variantName}
              variants={variants}
              style={{
                // Crucial: Preserves the 3D context for children
                transformStyle: "preserve-3d", 
                // Prevents flickering during rotation/movement
                backfaceVisibility: "hidden",
              }}
            >
              {/* Content Wrapper */}
              <div className="w-full relative">
                <CardComponent isActive={isActive} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
