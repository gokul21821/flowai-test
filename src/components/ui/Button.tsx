import React from "react";
import Link from "next/link";

type ButtonVariant = "Primary" | "Secondary" | "Outline";
type ButtonSize = "sm" | "md";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "Primary",
  size = "sm",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "box-border flex gap-2 items-center justify-center overflow-clip rounded-full font-medium text-base leading-6 text-center transition-colors";
  
  const hasWidthOverride = className.includes("w-");
  
  const sizeClasses = {
    sm: `h-11 px-6 py-2 ${hasWidthOverride ? "" : "w-[166px]"}`,
    md: `h-14 px-6 py-2 ${hasWidthOverride ? "" : "w-[166px]"}`,
  };

  const variantClasses = {
    Primary: {
      default: "bg-[#f48024] text-white",
      hover: "hover:bg-[#ff8024]",
    },
    Secondary: {
      default: "bg-white text-[#0c1311]",
      hover: "hover:bg-neutral-50 hover:border hover:border-[rgba(143,146,146,0.15)]",
    },
    Outline: {
      default: "bg-neutral-50 border border-[rgba(143,146,146,0.15)] text-[#0c1311]",
      hover: "hover:bg-neutral-100",
    },
  };

  const finalClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant].default}
    ${variantClasses[variant].hover}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `.trim().replace(/\s+/g, " ");

  const content = (
    <span className="font-medium leading-6 text-base text-center">
      {children}
    </span>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={finalClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
    >
      {content}
    </button>
  );
}

