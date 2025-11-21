import React from "react";

type CardVariant = "solid" | "translucent" | "glassmorphism";
type CardSize = "sm" | "md" | "lg";

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = "solid",
  size = "md",
  className = "",
  onClick,
}: CardProps) {
  const baseClasses = "box-border overflow-hidden transition-all duration-200";

  const variantClasses = {
    solid: "bg-white border border-gray-200",
    translucent: "bg-white/80 backdrop-blur-sm border border-white/20",
    glassmorphism: "bg-white/60 backdrop-blur-[6px] border border-white/30",
  };

  const sizeClasses = {
    sm: "rounded-xl p-4",
    md: "rounded-2xl p-6",
    lg: "rounded-3xl p-8",
  };

  const finalClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${onClick ? "cursor-pointer hover:shadow-lg hover:scale-[1.02]" : ""}
    ${className}
  `.trim().replace(/\s+/g, " ");

  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={finalClasses}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      {children}
    </Component>
  );
}
