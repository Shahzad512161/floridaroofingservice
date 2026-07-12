import type { Metadata, Viewport } from "next";
import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

export const viewport: Viewport = {
  themeColor: "#1a2a3a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "MWAI Architects & Roof Engineering",
  description: "Professional architecture and premium roofing services in Winter Park, Orlando, and across Florida.",
verification: {
    google: 'KzYaUOuWN6upxuyNGzww_WF8Zv7JPnFkkDJ', // Paste the code Google gives you here
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-800 selection:bg-[#c49b3b]/30 selection:text-[#1a2a3a]">
        {/* Dynamic Schema JSON-LD can be added here or in page layouts */}
        
        {/* Primary Header */}
        <Header />

        {/* Dynamic Breadcrumbs */}
        <Breadcrumbs />

        {/* Main Page Canvas */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Comprehensive Footer */}
        <Footer />
      </body>
    </html>
  );
}
