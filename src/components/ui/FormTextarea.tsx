import React from "react";

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  error?: string;
}

export default function FormTextarea({
  label,
  required,
  error,
  ...rest
}: FormTextareaProps) {
  const id = `textarea-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-[#130f0c] mb-1 font-medium text-sm">
        {label} {required && <span className="text-[#f48024]">*</span>}
      </label>
      <textarea
        id={id}
        {...rest}
        required={required}
        className={`bg-white border ${
          error ? "border-red-500" : "border-gray-300"
        } text-[#130f0c] rounded-lg px-4 py-3 h-[120px] placeholder-gray-400 focus:outline-none focus:border-[#f48024] transition resize-none`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
