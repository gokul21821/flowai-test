"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  variant?: "simple" | "card";
  icon?: "chevron" | "plus";
  activeCategory?: string;
  activeCategoryIndex?: number;
}

export default function Accordion({
  items,
  allowMultiple = false,
  className = "",
  variant = "simple",
  icon = "chevron",
  activeCategory,
  activeCategoryIndex = 0,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent, itemId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(itemId);
    }
  };

  return (
    <div className={`flex flex-col ${variant === "card" ? "gap-4" : "divide-y divide-gray-200"} ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div
            key={item.id}
            className={`
              ${variant === "card" 
                ? `bg-white rounded-3xl hover:border-gray-200 transition-colors ${isOpen ? "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]" : ""}` 
                : "border-b border-gray-200 last:border-b-0"}
            `}
          >
            <button
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className={`
                w-full text-left flex items-center justify-between gap-4 rounded-3xl relative
                ${variant === "card" ? "p-9" : "py-6 px-4 hover:bg-gray-50"}
              `}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`${activeCategory}-${item.id}-question`}
                  initial={{ x: activeCategoryIndex % 2 === 0 ? -30 : 30 }}
                  animate={{ x: 0 }}
                  exit={{ x: activeCategoryIndex % 2 === 0 ? 30 : -30 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="text-lg md:text-lg font-medium text-[#130F0C]"
                >
                  {item.question}
                </motion.h3>
              </AnimatePresence>
              <div
                className={`
                  relative shrink-0 transition-transform duration-300 ease-in-out
                  ${icon === "plus" 
                    ? (isOpen ? "rotate-45" : "rotate-0") 
                    : (isOpen ? "rotate-180" : "rotate-0")}
                `}
              >
                {icon === "plus" ? (
                  <div className="w-7 h-7 relative">
                    <Image 
                      src="/icons/plus.svg" 
                      alt="Expand" 
                      width={28} 
                      height={28}
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-body-text"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <div className={`
                    ${variant === "card" ? "px-9 pb-9 pt-0" : "px-4 pb-6"}
                  `}>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${activeCategory}-${item.id}-answer`}
                        initial={{ x: activeCategoryIndex % 2 === 0 ? -30 : 30 }}
                        animate={{ x: 0 }}
                        exit={{ x: activeCategoryIndex % 2 === 0 ? 30 : -30 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="text-base md:text-lg leading-relaxed text-[#423F3D]"
                      >
                        {item.answer}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
