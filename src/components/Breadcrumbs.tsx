"use client";

import React from "react";
import { Link } from "../lib/router";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = (pathname || "").split("/").filter(Boolean);

  if (segments.length === 0 || pathname === "/") {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-100 py-3 font-sans" id="breadcrumbs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-[#1a2a3a] transition-colors flex items-center gap-1">
          <Icon name="Home" className="h-3.5 w-3.5 text-gray-400" />
          <span>Home</span>
        </Link>

        {segments.map((seg, idx) => {
          const href = `/${segments.slice(0, idx + 1).join("/")}`;
          const isLast = idx === segments.length - 1;
          const formattedName = seg
            .replace("-", " ")
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          return (
            <React.Fragment key={idx}>
              <Icon name="ArrowRight" className="h-3 w-3 text-gray-300 shrink-0" />
              {isLast ? (
                <span className="font-semibold text-gray-800 tracking-tight">
                  {formattedName}
                </span>
              ) : (
                <Link href={href} className="hover:text-[#1a2a3a] transition-colors">
                  {formattedName}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
