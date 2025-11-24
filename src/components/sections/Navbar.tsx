"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "Trust", href: "/#trust" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[94px] backdrop-blur-[20.5px] bg-[rgba(255,255,255,0.7)] flex items-center justify-between px-20 transition-all ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="h-[34px] w-40 relative shrink-0">
          <Image
            src="/navbar/logo-light.svg"
            alt="Flow AI Logo"
            width={160}
            height={34}
            priority
            className="h-full w-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-10 h-11 items-center justify-center px-6 py-2 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex gap-2 items-center justify-center text-[#130f0c] text-base font-medium leading-6 text-center hover:text-[#f48024] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex gap-3">
          <Button variant="Outline" size="sm" href="/schedule-a-demo">
            Get Started
          </Button>
          <Button variant="Primary" size="sm" href="https://dev.myflowai.com">
            Log In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-6 h-6 items-center justify-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#130f0c] transition-all ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#130f0c] transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#130f0c] transition-all ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-end p-6 border-b border-gray-200">
            <button
              onClick={closeMobileMenu}
              className="w-6 h-6 flex items-center justify-center"
              aria-label="Close mobile menu"
            >
              <span className="block w-6 h-0.5 bg-[#130f0c] rotate-45" />
              <span className="block w-6 h-0.5 bg-[#130f0c] -rotate-45 absolute" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-[#130f0c] text-base font-medium leading-6 py-3 hover:text-[#f48024] transition-colors border-b border-gray-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="p-6 border-t border-gray-200 space-y-3">
            <Button
              variant="Primary"
              size="sm"
              href="https://dev.myflowai.com"
              onClick={closeMobileMenu}
              className="w-full"
            >
              Log In
            </Button>
            <Button
              variant="Outline"
              size="sm"
              href="/schedule-a-demo"
              onClick={closeMobileMenu}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

