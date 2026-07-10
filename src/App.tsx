import React from "react";
import { useCurrentPath } from "./lib/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import JsonLd from "./components/JsonLd";

// Import Pages
import Home from "./pages/Home";
import Architecture from "./pages/Architecture";
import ArchitectureSub from "./pages/ArchitectureSub";
import Roofing from "./pages/Roofing";
import RoofingSub from "./pages/RoofingSub";
import RoofingTypeSub from "./pages/RoofingTypeSub";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";

export default function App() {
  const currentPath = useCurrentPath();

  // Route matching logic
  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <Home />;
      case "/architecture":
        return <Architecture />;
      case "/architecture/residential":
        return <ArchitectureSub id="residential" />;
      case "/architecture/commercial":
        return <ArchitectureSub id="commercial" />;
      case "/architecture/interior-design":
        return <ArchitectureSub id="interior-design" />;
      case "/roofing":
        return <Roofing />;
      case "/roofing/installation":
        return <RoofingSub id="installation" />;
      case "/roofing/repair":
        return <RoofingSub id="repair" />;
      case "/roofing/replacement":
        return <RoofingSub id="replacement" />;
      case "/roofing/inspection":
        return <RoofingSub id="inspection" />;
      case "/roofing/shingle":
        return <RoofingTypeSub id="shingle" />;
      case "/roofing/tile":
        return <RoofingTypeSub id="tile" />;
      case "/roofing/metal":
        return <RoofingTypeSub id="metal" />;
      case "/roofing/flat":
        return <RoofingTypeSub id="flat" />;
      case "/roofing/slate":
        return <RoofingTypeSub id="slate" />;
      case "/roofing/wood-shake":
        return <RoofingTypeSub id="wood-shake" />;
      case "/projects":
        return <Projects />;
      case "/about":
        return <About />;
      case "/contact":
        return <Contact />;
      case "/service-areas":
        return <ServiceAreas />;
      default:
        // Elegant Fallback for Not Found
        return (
          <div className="mx-auto max-w-7xl px-4 py-24 text-center space-y-6" id="not-found-page">
            <h2 className="text-3xl font-extrabold text-[#1a2a3a]">Page Not Found</h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              The architectural path or roofing specification route you are seeking could not be found. Let us guide you back to our main portfolio.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[#1a2a3a] px-6 py-3.5 text-sm font-bold text-[#c49b3b] shadow-md hover:bg-[#2c3e50] transition-colors"
            >
              Return Home
            </a>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 selection:bg-[#c49b3b]/30 selection:text-[#1a2a3a]" id="app-shell">
      {/* Dynamic SEO JSON-LD Injections */}
      <JsonLd path={currentPath} />

      {/* Primary Header */}
      <Header />

      {/* Proper Breadcrumb Navigation (except on homepage) */}
      {currentPath !== "/" && <Breadcrumbs path={currentPath} />}

      {/* Main Page Canvas */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
