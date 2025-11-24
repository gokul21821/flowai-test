import React, { useState } from "react";

interface FormMultiSelectProps {
  label: string;
  required?: boolean;
  options: string[];
  selectedValues: string[];
  onToggle: (value: string) => void;
}

export default function FormMultiSelect({
  label,
  required,
  options,
  selectedValues,
  onToggle,
}: FormMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = `multiselect-${label.replace(/\s+/g, '-').toLowerCase()}`;

  const getDisplayText = () => {
    if (selectedValues.length === 0) return "Select";
    if (selectedValues.length === 1) return selectedValues[0];
    return `${selectedValues.length} selected`;
  };

  return (
    <div className="flex flex-col relative">
      <label htmlFor={id} className="text-[#130f0c] mb-1 font-medium text-sm">
        {label} {required && <span className="text-[#f48024]">*</span>}
      </label>
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-gray-300 text-[#130f0c] rounded-lg px-4 py-3 text-left focus:outline-none focus:border-[#f48024] transition flex items-center justify-between"
      >
        <span className={selectedValues.length === 0 ? "text-gray-400" : ""}>
          {getDisplayText()}
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Overlay to close dropdown */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
            <div className="p-2">
              {options.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option)}
                    onChange={() => onToggle(option)}
                    className="w-4 h-4 accent-[#f48024] cursor-pointer"
                  />
                  <span className="text-sm text-[#130f0c]">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
