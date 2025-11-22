"use client";

import React from "react";
import Image from "next/image";

interface BaseCardProps {
  isActive: boolean;
}

interface HeaderProps {
  isActive: boolean;
  title: string;
}

// Shared header component to ensure consistency
const CardHeader = ({ isActive, title }: HeaderProps) => (
  <div className="relative rounded-2xl overflow-hidden w-full">
    {/* Backdrop blur layer */}
    <div
      className={`absolute inset-0 transition-colors duration-500 ${
        isActive
          ? "bg-[#1c275e]"
          : "bg-white/60 backdrop-blur-[6px]"
      }`}
    />
    {/* Border layer (only for inactive state) */}
    {!isActive && (
      <div className="absolute inset-0 rounded-2xl border border-[#b0b0b0]" />
    )}
    {/* Content layer */}
    <div className="relative px-4 py-6 flex gap-2 items-center w-full">
      <div className="w-4 h-4 shrink-0">
        <Image
          src="/icons/green-checkbox.svg"
          alt=""
          width={16}
          height={16}
        />
      </div>
      <p
        className={`text-base md:text-lg leading-[26px] font-normal text-center flex-1 md:whitespace-nowrap ${
          isActive ? "text-white" : "text-[rgba(0,0,0,0.6)]"
        }`}
      >
        {title}
      </p>
    </div>
  </div>
);

export const FaxCard = ({ isActive }: BaseCardProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Pill */}
      <CardHeader isActive={isActive} title="Automate your Fax/Inbox Management" />

      {/* Card Content */}
      <div
        className={`mt-4 bg-white/40 border border-white rounded-2xl p-3 w-full max-w-[524px] transition-all duration-500 ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 hidden"
        }`}
      >
        {/* Message Item */}
        <div className="bg-white/80 rounded-xl p-3 border border-white/50 mb-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium text-sm">
                <Image
                  src="/icons/printer.svg"
                  alt="Printer"
                  width={20}
                  height={20}
                  className="opacity-60"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500">From</p>
                <p className="text-sm font-medium text-black">012-254-365</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-white/60 rounded-full px-2 py-1 flex items-center gap-1 border border-gray-100">
                <span className="text-[10px] text-gray-500">Data Received</span>
                <Image
                  src="/icons/orange-down-arrow.svg"
                  alt=""
                  width={10}
                  height={10}
                />
              </div>
            </div>
          </div>

          {/* PDF File */}
          <div className="bg-gray-50/50 rounded-lg p-3 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Image src="/icons/pdf.svg" alt="PDF" width={24} height={24} />
                <div>
                  <p className="text-sm font-medium text-black">
                    Medical Report.pdf
                  </p>
                  <p className="text-xs text-gray-500">Andre Scott</p>
                </div>
              </div>
              <Image
                src="/icons/download.svg"
                alt="Download"
                width={20}
                height={20}
                className="opacity-40"
              />
            </div>
            <div className="h-px w-full bg-gray-200 my-2" />
            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex gap-1">
                <span>Date:</span>
                <span className="font-medium">25 Jan, Mon</span>
              </div>
              <div className="flex gap-1">
                <span>Time:</span>
                <span className="font-medium">11:42 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InsuranceCard = ({ isActive }: BaseCardProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <CardHeader isActive={isActive} title="Verify Patient Insurance & Co-Pay" />

      {/* Card Content */}
      <div
        className={`mt-4 bg-white/80 border border-[#e3e3e3] rounded-2xl p-3 w-full max-w-[524px] transition-all duration-500 ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 hidden"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2.5 items-center">
            <div className="relative w-[48px] h-[48px] rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
              <Image
                src="/hero/andre-scott.png"
                alt="Andre Scott"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium leading-[1.4] text-black">
                Andre Scott
              </p>
              <p className="text-xs text-gray-500">Complete Care Management</p>
            </div>
          </div>
          <div className="w-[100px]">
            <Image
              src="/icons/aetna.svg"
              alt="Aetna Active Coverage"
              width={100}
              height={30}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-white/60 rounded-lg p-2.5 mb-3">
          <p className="text-xs font-medium text-black mb-1.5">Services</p>
          <div className="flex gap-2 flex-wrap">
            {["Hospital", "Eye", "Orthopedic"].map((service) => (
              <div
                key={service}
                className="bg-white rounded-full px-2 py-1 flex gap-1 items-center border border-gray-100"
              >
                <Image
                  src="/icons/checkbox.svg"
                  alt=""
                  width={12}
                  height={12}
                />
                <span className="text-[10px] text-gray-500">{service}</span>
              </div>
            ))}
            <div className="bg-gray-100 rounded-full px-2 py-1">
              <span className="text-[10px] text-gray-500">+ 54 more</span>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-200 mb-3" />

        <div className="flex items-end justify-between">
          <p className="text-sm font-medium text-black">Patient Co-Pay</p>
          <p className="text-lg font-medium text-black">$124</p>
        </div>
      </div>
    </div>
  );
};

export const SchedulingCard = ({ isActive }: BaseCardProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <CardHeader isActive={isActive} title="Schedule Your Patient Appointments" />

      {/* Card Content */}
      <div
        className={`mt-4 bg-white/80 border border-[#e3e3e3] rounded-2xl p-4 w-full max-w-[520px] transition-all duration-500 ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 hidden"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-3 items-center">
            <div className="relative w-[48px] h-[48px] rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
              <Image
                src="/hero/andre-scott.png"
                alt="Andre Scott"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-black">Andre Scott</p>
              <p className="text-xs text-gray-500">Complete Care Management</p>
            </div>
          </div>
          <p className="text-xs text-[#f48024] font-medium cursor-pointer hover:underline">
            View full profile
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
            Consultant Details
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/hero/nathan-harfield.png"
                  alt="Dr. Nathan Harfield"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-black">
                  Dr. Nathan Harfield
                </p>
                <p className="text-xs text-gray-500">Cardiologist</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-[#f48024]/10 flex items-center justify-center hover:bg-[#f48024]/20 transition-colors">
                <Image
                  src="/icons/phone.svg"
                  alt="Call"
                  width={16}
                  height={16}
                />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#f48024]/10 flex items-center justify-center hover:bg-[#f48024]/20 transition-colors">
                <Image
                  src="/icons/message.svg"
                  alt="Message"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/calendar.svg"
                alt=""
                width={16}
                height={16}
                className="opacity-60"
              />
              <span className="text-sm font-medium text-black">
                21 Mon, Dec 2025
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/clock.svg"
                alt=""
                width={16}
                height={16}
                className="opacity-60"
              />
              <span className="text-sm font-medium text-black">03:15 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IntakeCard = ({ isActive }: BaseCardProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <CardHeader isActive={isActive} title="Complete Your Patient Intake & Check In" />

      {/* Card Content */}
      <div
        className={`mt-4 bg-white/80 border border-[#e3e3e3] rounded-2xl p-4 w-full max-w-[460px] transition-all duration-500 ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 hidden"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-3 items-center">
            <div className="relative w-[48px] h-[48px] rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
              <Image
                src="/hero/andre-scott.png"
                alt="Andre Scott"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-black">Andre Scott</p>
              <p className="text-xs text-gray-500">First-Time Consulting</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-black">21, Mon</p>
            <p className="text-xs text-gray-500">December, 2025</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-black">#16</p>
            <p className="text-xs text-gray-500">Token Number</p>
          </div>
        </div>

        <div className="w-full bg-[#10B981] rounded-lg py-3 px-4 flex items-center justify-center gap-2 shadow-sm">
          <Image
            src="/icons/white-checkbox.svg"
            alt=""
            width={20}
            height={20}
          />
          <span className="text-white font-medium">Check-in Complete</span>
        </div>
      </div>
    </div>
  );
};

