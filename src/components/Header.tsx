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
    {
      label: "Architecture",
      href: "/architecture",
      dropdown: [
        { label: "Overview", href: "/architecture" },
        { label: "Residential", href: "/architecture/residential" },
        { label: "Commercial", href: "/architecture/commercial" },
        { label: "Interior Design", href: "/architecture/interior-design" }
      ]
    },
    {
      label: "Roofing",
      href: "/roofing",
      dropdown: [
        { label: "Overview", href: "/roofing" },
        { label: "Installation", href: "/roofing/installation" },
        { label: "Leak Detection & Repair", href: "/roofing/repair" },
        { label: "Replacement", href: "/roofing/replacement" },
        { label: "Inspection", href: "/roofing/inspection" }
      ]
    },
    {
      label: "Roofing Types",
      href: "#",
      dropdown: [
        { label: "Asphalt Shingle", href: "/roofing/shingle" },
        { label: "Clay & Concrete Tile", href: "/roofing/tile" },
        { label: "Standing Seam Metal", href: "/roofing/metal" },
        { label: "Engineered Flat", href: "/roofing/flat" },
        { label: "Premium Natural Slate", href: "/roofing/slate" },
        { label: "Traditional Wood Shake", href: "/roofing/wood-shake" }
      ]
    },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
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
            const hasDropdown = !!link.dropdown;
            const isActive = link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href) && link.href !== "#";

            return (
              <div
                key={link.label}
                className="relative group py-2"
                onMouseEnter={() => hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                {hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                      isActive ? "text-[#c49b3b]" : "text-gray-700 hover:text-[#1a2a3a] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                    <Icon name="ChevronDown" className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive ? "text-[#c49b3b] font-semibold" : "text-gray-700 hover:text-[#1a2a3a] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {hasDropdown && link.dropdown && (
                  <div
                    className={`absolute left-0 mt-1 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-xl transition-all duration-200 origin-top ${
                      activeDropdown === link.label
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="grid gap-1">
                      {link.dropdown.map((sub) => {
                        const isSubActive = currentPath === sub.href;
                        return (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm transition-colors ${
                              isSubActive
                                ? "bg-[#fcf8f0] text-[#c49b3b] font-medium"
                                : "text-gray-600 hover:bg-gray-50 hover:text-[#1a2a3a]"
                            }`}
                          >
                            <span>{sub.label}</span>
                            {isSubActive && <div className="h-1.5 w-1.5 rounded-full bg-[#c49b3b]" />}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+17026029336"
            className="flex items-center gap-2 rounded-lg bg-[#1a2a3a] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#2c3e50] active:scale-95 transition-all text-center border border-[#c49b3b]/30"
          >
            <Icon name="Phone" className="h-4 w-4 text-[#c49b3b]" />
            <span>Call: (702) 602-9336</span>
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
              const hasDropdown = !!link.dropdown;
              const isDropdownActive = activeDropdown === link.label;
              const isActive = link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href) && link.href !== "#";

              return (
                <div key={link.label} className="border-b border-gray-50 last:border-0 py-1">
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex w-full items-center justify-between py-2 text-base font-semibold text-gray-800"
                      >
                        <span className={isActive ? "text-[#c49b3b]" : ""}>{link.label}</span>
                        <Icon
                          name="ChevronDown"
                          className={`h-4 w-4 transition-transform duration-200 ${isDropdownActive ? "rotate-180 text-[#c49b3b]" : "text-gray-400"}`}
                        />
                      </button>
                      {isDropdownActive && link.dropdown && (
                        <div className="mt-1 ml-4 border-l border-gray-100 pl-4 space-y-1 py-1">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className={`block py-2 text-sm rounded-md transition-colors ${
                                currentPath === sub.href
                                  ? "text-[#c49b3b] font-semibold"
                                  : "text-gray-600 hover:text-[#1a2a3a]"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block py-2 text-base font-semibold transition-colors ${
                        isActive ? "text-[#c49b3b]" : "text-gray-800 hover:text-[#1a2a3a]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-4 pb-2">
              <a
                href="tel:+17026029336"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a2a3a] py-3.5 text-base font-bold text-white shadow-md border border-[#c49b3b]/30"
              >
                <Icon name="Phone" className="h-5 w-5 text-[#c49b3b]" />
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
