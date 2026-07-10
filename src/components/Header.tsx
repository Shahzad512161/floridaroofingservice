"use client";

import React, { useState, useEffect } from "react";
import { Link, useCurrentPath } from "../lib/router";
import Icon from "./Icon";

export default function Header() {
  const currentPath = useCurrentPath();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close mobile menu on path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [currentPath]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Architecture", href: "/architecture" },
    { label: "Roofing", href: "/roofing" },
    { label: "Projects", href: "/projects" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm" id="main-header">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a2a3a] text-[#c49b3b] transition-transform group-hover:scale-105 shadow-md">
            <Icon name="Building2" className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xl font-bold tracking-tight text-[#1a2a3a]">
              MWAI
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#c49b3b] font-medium leading-none">
              Architects
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href);

            return (
              <div key={link.label} className="relative py-2">
                <Link
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-md ${
                    isActive 
                      ? "text-[#c49b3b] bg-gray-50/50" 
                      : "text-gray-600 hover:text-[#1a2a3a] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+17026029336"
            className="flex items-center gap-2 rounded-lg bg-[#1a2a3a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#2c3e50] active:scale-95 transition-all text-center border border-[#c49b3b]/30"
          >
            <Icon name="Phone" className="h-3.5 w-3.5 text-[#c49b3b]" />
            <span>(702) 602-9336</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 lg:hidden hover:bg-gray-50 active:scale-95 transition-all"
          aria-label="Toggle navigation menu"
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-inner max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="space-y-1 p-4">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href);

              return (
                <div key={link.label} className="border-b border-gray-50 last:border-0 py-1">
                  <Link
                    href={link.href}
                    className={`block py-2.5 text-sm font-bold uppercase tracking-wider transition-colors ${
                      isActive ? "text-[#c49b3b]" : "text-gray-800 hover:text-[#1a2a3a]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}

            <div className="pt-4 pb-2">
              <a
                href="tel:+17026029336"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a2a3a] py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md border border-[#c49b3b]/30"
              >
                <Icon name="Phone" className="h-4 w-4 text-[#c49b3b]" />
                <span>Call: (702) 602-9336</span>
              </a>
              <div className="mt-3 text-center text-xs text-gray-400">
                U K Cir, Winter Park, FL 32792
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
