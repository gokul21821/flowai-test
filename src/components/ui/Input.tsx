import React, { forwardRef } from "react";

type InputVariant = "default" | "dark";
type InputSize = "sm" | "md" | "lg";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  label?: string;
  error?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = "default",
  size = "md",
  label,
  error,
  className = "",
  type = "text",
  ...props
}, ref) => {
  const baseClasses = "w-full border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-orange/20";

  const variantClasses = {
    default: "bg-white border-gray-300 text-dark-neutral placeholder-body-text",
    dark: "bg-dark-neutral/10 border-dark-neutral/20 text-dark-neutral placeholder-neutral-400",
  };

  const sizeClasses = {
    sm: "h-10 px-3 text-sm rounded-lg",
    md: "h-12 px-4 text-base rounded-xl",
    lg: "h-14 px-5 text-lg rounded-2xl",
  };

  const inputClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${error ? "border-red-500 focus:ring-red-500/20" : ""}
    ${className}
  `.trim().replace(/\s+/g, " ");

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-dark-neutral">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
