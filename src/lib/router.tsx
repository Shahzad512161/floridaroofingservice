"use client";

import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

// Navigation helper that updates history/location
export function navigateTo(path: string) {
  if (typeof window !== "undefined") {
    // If the user navigates programmatically, we can use location change or history
    window.location.href = path;
  }
}

// Hook to track current URL path and trigger re-renders in client components
export function useCurrentPath() {
  try {
    const pathname = usePathname();
    return pathname || "/";
  } catch (e) {
    return "/";
  }
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  key?: string | number;
}

// SEO-friendly Link component mapping to Next.js Link
export function Link({ href, children, className = "", ...props }: LinkProps) {
  return (
    <NextLink href={href} className={className} {...props}>
      {children}
    </NextLink>
  );
}

