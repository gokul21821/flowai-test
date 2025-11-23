import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---

export type CardType = "contextual" | "specialty" | "simulation";

export interface NestedCard {
  title: string;
  items: string[];
}

export interface CardContent {
  number: string;
  title: string;
  description: string;
  nestedCards?: NestedCard[];
  metrics?: {
    label: string;
    value: string;
  }[];
  hasGraph?: boolean;
}

// --- Component Props ---

interface ReasoningCardProps {
  /** The content to display */
  data: CardContent;
  /** Controls specific layout styles for mobile vs desktop accordion */
  variant?: "mobile" | "desktop";
  /** Is this card currently expanded? (Desktop only) */
  isActive?: boolean;
  /** Click handler for the accordion interaction */
  onClick?: () => void;
  /** Optional class overrides (useful for width transitions) */
  className?: string;
}

export default function ReasoningCard({
  data,
  variant = "desktop",
  isActive = false,
  onClick,
  className = "",
}: ReasoningCardProps) {
  // Base styles shared by both layouts
  const baseStyles =
    "flex flex-col items-start justify-between p-3 rounded-3xl border border-white";
  
  // Background styles based on active state
  const backgroundStyle = isActive
    ? "bg-white"
    : "bg-white/70 hover:bg-white/80 cursor-pointer";

  // Mobile specific wrapper styles (overrides some base styles)
  const mobileWrapperStyles =
    "bg-white border border-white rounded-3xl p-6 sm:p-8 md:p-10 gap-8 sm:gap-10 min-h-[500px] sm:min-h-[600px] md:min-h-[650px] w-full";

  const containerClass =
    variant === "mobile"
      ? mobileWrapperStyles
      : `${baseStyles} ${backgroundStyle} ${className} ${isActive ? "h-[520px]" : "h-[520px]"} overflow-hidden`;

  return (
    <div className={containerClass} onClick={onClick}>
      <div className="flex flex-1 flex-col items-start justify-between w-full h-full">
        
        {/* 1. Header Section (Number) */}
        <div className="flex flex-col gap-3 items-start w-full">
          <span
            className={`font-semibold text-[#130F0C] ${
              variant === "mobile"
                ? "text-xl sm:text-2xl"
                : "text-xl leading-[1.4] tracking-[-0.24px]"
            }`}
          >
            {data.number}
          </span>
          {/* On Mobile, Title/Desc appear at top. On Desktop, they appear at bottom. */}
          {variant === "mobile" && (
            <>
              <h3 className="font-semibold text-2xl sm:text-3xl text-[#130F0C]">
                {data.title}
              </h3>
              <p className="text-[#717171] text-base sm:text-lg leading-relaxed">
                {data.description}
              </p>
            </>
          )}
        </div>

        {/* 2. Visual Content Area (Nested Cards or Graph) */}
        {/* Only show on Desktop if Active, always show on Mobile */}
        {variant === "mobile" ? (
          <div className="w-full flex flex-col items-center justify-center mt-4 pb-20 sm:pb-8">
            {/* Case A: Nested Cards Stack */}
            {data.nestedCards && (
              <div className="flex w-full flex-col items-center">
                {data.nestedCards.map((card, index) => (
                  <NestedCardItem
                    key={index}
                    card={card}
                    index={index}
                    variant={variant}
                  />
                ))}
              </div>
            )}

            {/* Case B: Graph & Metrics (Simulation) */}
            {data.hasGraph && (
              <GraphContent data={data} variant={variant} />
            )}
          </div>
        ) : (
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="w-full flex flex-col items-center justify-center mt-4 min-h-[279px] flex-row gap-4"
              >
                {/* Case A: Nested Cards Stack */}
                {data.nestedCards && (
                  <div className="flex w-full flex-row justify-center items-center gap-4">
                    {data.nestedCards.map((card, index) => (
                      <NestedCardItem
                        key={index}
                        card={card}
                        index={index}
                        variant={variant}
                      />
                    ))}
                  </div>
                )}

                {/* Case B: Graph & Metrics (Simulation) */}
                {data.hasGraph && (
                  <GraphContent data={data} variant={variant} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* 3. Footer Section (Title/Desc for Desktop) */}
        {variant === "desktop" && (
          <div className="flex flex-col gap-2 items-start w-full text-left mt-auto">
            <p className={`font-semibold text-[#130F0C] w-full ${
              isActive
                ? "text-lg leading-[28px] whitespace-nowrap overflow-hidden text-ellipsis"
                : "text-sm md:text-base leading-5 md:leading-6 whitespace-normal"
            }`}>
              {data.title}
            </p>
            <p className={`font-normal text-[#717171] w-full ${
              isActive
                ? "text-sm leading-6"
                : "text-xs md:text-sm leading-4 md:leading-5"
            }`}>
              {data.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Sub-Components for internal visual logic ---

function NestedCardItem({
  card,
  index,
  variant,
}: {
  card: NestedCard;
  index: number;
  variant: "mobile" | "desktop";
}) {
  // Logic for the zig-zag stack effect on mobile
  const zIndexClass =
    index === 0 ? "z-10" : index === 1 ? "z-20" : "z-30";
  
  const mobilePositionClasses = `
    ${index % 2 === 0 ? "self-start ml-2" : "self-end mr-2"}
    ${index === 0 ? "mt-0" : "-mt-6 sm:-mt-8"}
  `;

  const wrapperClasses =
    variant === "mobile"
      ? `bg-white border border-[#e3e3e3] rounded-2xl p-4 flex flex-col gap-3 shadow-sm w-[90%] max-w-[260px] sm:max-w-[280px] relative ${mobilePositionClasses} ${zIndexClass}`
      : `bg-white border border-[#e3e3e3] flex flex-col gap-3 items-start px-3 py-3 rounded-[20px] w-auto min-w-[80px] lg:min-w-[100px] xl:min-w-[120px] flex-1`;

  return (
    <div className={wrapperClasses}>
      <div className="flex gap-2 items-center">
        <div className="relative shrink-0 w-4 h-4 sm:w-5 sm:h-5">
          <Image
            src="/reasoning-engine/orange-circle.svg"
            alt=""
            width={20}
            height={20}
            className="w-full h-full"
          />
        </div>
        <p className="font-medium text-sm sm:text-base text-black leading-[1.4] break-words">
          {card.title}
        </p>
      </div>
      <div className="bg-[#f4f4f4] flex flex-col gap-1 items-start p-2 sm:p-3 rounded-lg w-full">
        {card.items.map((item, idx) => (
          <p
            key={idx}
            className="font-normal text-xs sm:text-sm text-black/60 leading-relaxed break-words"
          >
            • {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function GraphContent({
  data,
  variant,
}: {
  data: CardContent;
  variant: "mobile" | "desktop";
}) {
  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-4 w-full bg-white border border-[#e3e3e3] rounded-2xl p-4 sm:p-6">
        <div className="w-full flex justify-center mb-4">
          <Image
            src="/reasoning-engine/customer-graph.svg"
            alt="Customer Satisfaction Graph"
            width={200}
            height={60}
            className="w-auto h-auto"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.metrics?.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e3e3e3] rounded-xl p-3 flex flex-col gap-1"
            >
              <p className="text-xs text-black/60">{metric.label}</p>
              <p className="font-medium text-base text-black">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="bg-white flex flex-row justify-center items-center gap-2 lg:gap-4 w-full h-full">
      <div className="bg-white border border-[#e3e3e3] flex flex-col gap-1 items-start px-3 py-4 lg:px-4 lg:py-5 rounded-xl flex-1 min-w-0">
        <p className="font-normal text-xs lg:text-sm text-black/60 break-words">
          {data.metrics?.[0].label}
        </p>
        <p className="font-medium text-lg lg:text-xl text-black break-words">
          {data.metrics?.[0].value}
        </p>
      </div>

      <div className="h-[100px] lg:h-[125px] relative shrink-0 w-[140px] lg:w-[200px]">
        <Image
          src="/reasoning-engine/customer-graph.svg"
          alt="Customer Graph"
          fill
          className="object-contain"
        />
      </div>

      <div className="bg-white border border-[#e3e3e3] flex flex-col gap-1 items-start px-3 py-4 lg:px-4 lg:py-5 rounded-xl flex-1 min-w-0">
        <p className="font-normal text-xs lg:text-sm text-black/60 break-words">
          {data.metrics?.[1].label}
        </p>
        <p className="font-medium text-lg lg:text-xl text-black break-words">
          {data.metrics?.[1].value}
        </p>
      </div>
    </div>
  );
}
