"use client";

import FlowAIReasoningEngine from "./reasoning-engine/FlowAIReasoningEngine";
import FlowAIIntegrationEngine from "./reasoning-engine/FlowAIIntegrationEngine";

export default function ReasoningEngine() {
  return (
    <div className="w-full flex flex-col gap-16 items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-6 sm:px-4 md:px-8 lg:px-20">
      {/* Flow AI Reasoning Engine Section */}
      <FlowAIReasoningEngine />
      
      {/* Flow AI Integration Engine Section */}
      <FlowAIIntegrationEngine />
    </div>
  );
}

