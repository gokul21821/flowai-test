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
    <div
      className={`flex flex-col ${
        variant === "card" ? "gap-3 md:gap-4" : "divide-y divide-gray-200"
      } ${className}`}
    >
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div
            key={item.id}
            className={`
              ${
                variant === "card"
                  ? `transition-colors rounded-2xl md:rounded-3xl bg-white hover:border-gray-200 ${
                      isOpen ? "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]" : ""
                    }`
                  : "border-b border-gray-200 last:border-b-0"
              }
            `}
          >
            <button
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className={`
                relative w-full text-left
                rounded-2xl md:rounded-3xl overflow-hidden
                ${
                  variant === "card"
                    ? "p-5 md:p-9"
                    : "px-2 py-4 hover:bg-gray-50 md:px-4 md:py-6"
                }
              `}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              {/* Icon Container - positioned absolutely in top right */}
              <div
                className={`
                  absolute top-4 right-4 md:top-6 md:right-6 shrink-0 transition-transform duration-300 ease-in-out z-10
                  ${
                    icon === "plus"
                      ? isOpen
                        ? "rotate-45"
                        : "rotate-0"
                      : isOpen
                      ? "rotate-180"
                      : "rotate-0"
                  }
                `}
              >
                {icon === "plus" ? (
                  <div className="relative h-6 w-6 md:h-7 md:w-7">
                    <Image
                      src="/icons/plus.svg"
                      alt="Expand"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-body-text h-5 w-5 md:h-6 md:w-6"
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

              {/* Question Text Container */}
              <div className="pr-10 md:pr-12">
                {/* Placeholder to maintain height */}
                <div className="invisible pointer-events-none">
                  <h3 className="text-base font-medium text-[#130F0C] md:text-lg">
                    {item.question}
                  </h3>
                </div>
                {/* Animated overlay */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeCategory}-${item.id}-question`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-start pt-5 md:pt-9 pr-10 md:pr-12 px-2 md:px-4"
                  >
                    <h3 className="text-base font-medium text-[#130F0C] md:text-lg">
                      {item.question}
                    </h3>
                  </motion.div>
                </AnimatePresence>
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
                  <div
                    className={`
                      relative
                      ${
                        variant === "card"
                          ? "px-5 pb-5 pt-0 md:px-9 md:pb-9"
                          : "px-2 pb-4 md:px-4 md:pb-6"
                      }
                    `}
                  >
                    {/* Placeholder to maintain height */}
                    <div className="invisible pointer-events-none">
                      <p className="text-base leading-relaxed text-[#423F3D] md:text-lg">
                        {item.answer}
                      </p>
                    </div>
                    {/* Animated overlay */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeCategory}-${item.id}-answer`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <p className="text-base leading-relaxed text-[#423F3D] md:text-lg">
                          {item.answer}
                        </p>
                      </motion.div>
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
