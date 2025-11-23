"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full flex items-center justify-center"
      style={{
        background:
          "linear-gradient(214.08deg, rgba(25, 25, 25, 0.4) -6.15%, rgba(254, 245, 214, 0.4) 25.93%, rgba(255, 204, 146, 0.4) 46.74%, rgba(255, 171, 130, 0.4) 62.73%, rgba(255, 196, 167, 0.203254) 84.16%, rgba(25, 25, 25, 0.4) 107.22%), #0C0E12",
      }}
    >
      <div className="w-full max-w-[1296px] flex flex-col gap-10 px-5 md:px-10 pt-16 pb-8 min-h-[402px]">
        {/* Top Section: Logo + Links */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0 w-full">
          {/* Left: Logo and Tagline */}
          <div className="flex flex-col gap-4 w-full md:w-[228px] shrink-0">
            <div className="relative w-[114px] h-[24px]">
              <Image
                src="/icons/flowai-logo.svg"
                alt="Flow AI Logo"
                width={114}
                height={24}
                priority
              />
            </div>
            <p className="text-base leading-6 font-normal text-white opacity-70 whitespace-pre-wrap">
              Powering the future of Patient Access with Agentic AI
            </p>
          </div>

          {/* Right: Link Columns */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 md:gap-[56px]">
            {/* Column 1: Product Links */}
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/#product"
                className="text-base leading-6 font-normal text-white opacity-70 hover:opacity-100 hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
              >
                Product
              </Link>
              <Link
                href="/#outcomes"
                className="text-base leading-6 font-normal text-white opacity-70 hover:opacity-100 hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
              >
                Outcomes
              </Link>
              <Link
                href="/#trust"
                className="text-base leading-6 font-normal text-white opacity-70 hover:opacity-100 hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
              >
                Trust
              </Link>
              <Link
                href="/#about"
                className="text-base leading-6 font-normal text-white opacity-70 hover:opacity-100 hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
              >
                About
              </Link>
              <Link
                href="/schedule-a-demo"
                className="text-base leading-6 font-normal text-white opacity-70 hover:opacity-100 hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Column 2: Resources Links */}
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="#"
                className="text-base leading-6 font-normal text-white opacity-70 hover:opacity-100 hover:underline hover:underline-offset-4 hover:decoration-white transition-all whitespace-pre-wrap"
              >
                Resources
              </Link>
              <Link
                href="/schedule-a-demo"
                className="text-base leading-6 font-normal text-white opacity-70 hover:opacity-100 hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
              >
                ROI Calculator
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright + Legal Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="text-base leading-6 font-normal text-white opacity-70">
            © Flow AI. All rights reserved. Designed by Reyload
          </p>
          <div className="flex gap-4 items-center">
            <Link
              href="/privacy-policy"
              className="text-base leading-6 font-normal text-white opacity-70 hover:opacity-100 hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-base leading-6 font-normal text-white opacity-70 hover:opacity-100 hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

