import React from "react";

type BadgeVariant = "primary" | "secondary" | "neutral" | "dark";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: BadgeProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full";

  const variantClasses = {
    primary: "bg-primary-light text-primary-orange",
    secondary: "bg-white text-dark-neutral border border-gray-200",
    neutral: "bg-gray-100 text-neutral-400",
    dark: "bg-dark-neutral text-white",
  };

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
  };

  const finalClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim().replace(/\s+/g, " ");

  return <span className={finalClasses}>{children}</span>;
}
