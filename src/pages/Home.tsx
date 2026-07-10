import React from "react";
import { Link, navigateTo } from "../lib/router";
import Icon from "../components/Icon";
import ServiceCard from "../components/ServiceCard";
import RoofingTypeCard from "../components/RoofingTypeCard";
import ServiceAreaCard from "../components/ServiceAreaCard";
import CallToAction from "../components/CallToAction";
import { ARCHITECTURE_SERVICES, ROOFING_SERVICES, ROOFING_TYPES } from "../lib/services";
import { CITIES } from "../lib/cities";

// Asset paths from generated images
const ARCH_HERO_IMG = "/src/assets/images/hero_architecture_banner_1783704942154.jpg";

export default function Home() {
  // We'll show the top 3 services for Home
  const homeServices = [
    {
      id: "design",
      title: "Architectural Design",
      description: "Custom luxury residential estates, modern commercial layouts, and detailed spatial planning. Registered and certified architectures.",
      features: ["Residential Planning", "Commercial Architecture", "Permit Documentation"],
      icon: "Ruler",
      category: "architecture" as const
    },
    {
      id: "roofing",
      title: "Roofing Services",
      description: "Structural installations, leak repairs, full tear-offs, and state-certified storm inspections engineered to withstand high wind load.",
      features: ["New Installations", "Precision Repair", "Complete Replacements"],
      icon: "Shield",
      category: "roofing" as const
    },
    {
      id: "consultation",
      title: "Architectural Consultations",
      description: "Comprehensive site analyses, municipal feasibility planning, and full structural reports before executing construction designs.",
      features: ["Site Appraisals", "Zoning Verification", "Material Consultation"],
      icon: "Clipboard",
      category: "architecture" as const
    }
  ];

  // Why choose us points
  const trustSignals = [
    {
      title: "Licensed & Insured",
      description: "Fully certified state architects and roofing contractors. Fully bonded with comprehensive general liability coverage across Florida.",
      icon: "Shield"
    },
    {
      title: "Expert Designers",
      description: "Professional drafting and planning to realize highly efficient building envelopes, stunning elevations, and robust spatial flows.",
      icon: "PenTool"
    },
    {
      title: "Quality Craftsmanship",
      description: "Rigorous attention to fasteners, flashing interlocks, high-grade cedar, standing seam gauges, and kiln-fired clay tiles.",
      icon: "Ruler"
    },
    {
      title: "Florida Specialists",
      description: "Engineered specifically to survive extreme coastal conditions, high-velocity hurricane winds, salt air, and heavy tropical rainstorms.",
      icon: "MapPin"
    }
  ];

  // Simple trust badges
  const trustBadges = [
    {
      title: "Licensed Architects",
      subtitle: "State Cert. AR92810",
      icon: "Building2"
    },
    {
      title: "Quality Materials",
      subtitle: "Kynar 500, Galvalume & Clay",
      icon: "Settings"
    },
    {
      title: "Professional Service",
      subtitle: "Strict Timelines & Clean Sites",
      icon: "HardHat"
    }
  ];

  return (
    <div className="font-sans" id="home-page">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white bg-[#1a2a3a] overflow-hidden py-24">
        {/* Background Image with Deep Blue / Slate Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ARCH_HERO_IMG}
            alt="Modern luxury Florida architecture"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2a3a] via-[#1a2a3a]/90 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c49b3b]/30 bg-white/5 px-4 py-1 text-xs font-mono tracking-widest text-[#c49b3b] uppercase">
            <span>Engineering & Design Excellence</span>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              MWAI Architects
            </h1>
            <p className="text-xl sm:text-2xl font-mono text-[#c49b3b] uppercase tracking-wider">
              Architecture & Premium Roofing
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
              Florida's premier architecture-led roofing and design firm. We create striking structural concepts and install high-performance roofing systems engineered specifically to withstand Florida's hurricane-force environments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:+17026029336"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#c49b3b] hover:bg-[#d4a843] text-[#1a2a3a] px-8 py-4 font-bold text-base shadow-xl active:scale-95 transition-all w-full sm:w-auto"
            >
              <Icon name="Phone" className="h-5 w-5" />
              <span>Call Us: (702) 602-9336</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 font-bold text-base transition-all w-full sm:w-auto"
            >
              <span>Schedule Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Our Services Section */}
      <section className="py-24 bg-white" id="our-services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase">
              Core Capabilities
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-[#1a2a3a]">
              Architectural & Roofing Solutions
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              We handle the entire structural journey. From schematic zoning drawings and material blueprints to heavy-duty, high-performance roof installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeServices.map((srv) => (
              <ServiceCard
                key={srv.id}
                id={srv.id}
                title={srv.title}
                description={srv.description}
                features={srv.features}
                icon={srv.icon}
                category={srv.category}
              />
            ))}
          </div>

          <div className="text-center pt-4">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-gray-50 p-6 max-w-3xl mx-auto border border-gray-100">
              <span className="text-sm font-semibold text-gray-700 text-left">
                Looking for specific architectural details or municipal building permits?
              </span>
              <Link
                href="/architecture"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c49b3b] hover:text-[#1a2a3a] transition-colors"
              >
                <span>View Architecture Page</span>
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Roofing Types Section */}
      <section className="py-24 bg-[#f8f7f4] border-y border-gray-100" id="roofing-types">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase">
              Premium Options
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-[#1a2a3a]">
              Engineered Roofing Systems
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              We spec, detail, and install premium roofing profiles to fit any commercial model or high-end residential style in Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOFING_TYPES.map((type) => (
              <RoofingTypeCard
                key={type.id}
                id={type.id}
                title={type.title}
                description={type.shortDescription}
                advantages={type.advantages}
                bestFor={type.bestFor}
                icon={type.iconName}
                imageUrl={type.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose MWAI Section */}
      <section className="py-24 bg-white" id="why-choose-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase">
              The MWAI Difference
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-[#1a2a3a]">
              Why Choose MWAI Architects
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              By pairing state-certified architects with master roofing installers, we guarantee seamless transitions from blueprint design to weather-tight structural protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((sig, i) => (
              <div key={i} className="rounded-xl border border-gray-50 p-6 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#fcf8f0] text-[#c49b3b] mb-4">
                  <Icon name={sig.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-[#1a2a3a] mb-2">{sig.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{sig.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service Areas Section */}
      <section className="py-24 bg-[#f8f7f4]" id="service-areas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase">
                Florida Coverage
              </h2>
              <p className="text-3xl font-extrabold tracking-tight text-[#1a2a3a]">
                Providing Architect-Led Services Statewide
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                With deep local knowledge of Florida building codes and municipality-specific wind load demands, we serve clients in 21 major cities from the panhandle down to Key West.
              </p>
            </div>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1a2a3a] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#2c3e50] transition-colors shrink-0"
            >
              <span>View All 21 Service Areas</span>
              <Icon name="ArrowRight" className="h-4 w-4 text-[#c49b3b]" />
            </Link>
          </div>

          {/* Top 4 featured cities for Home */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CITIES.slice(0, 4).map((city) => (
              <ServiceAreaCard
                key={city.name}
                name={city.name}
                region={city.region}
                county={city.county}
                highlights={city.highlights}
                description={city.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Trust Badges Section */}
      <section className="py-16 bg-white border-t border-gray-100" id="trust-badges">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-50 bg-[#fbfbfa]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2a3a]/5 text-[#c49b3b] shrink-0">
                  <Icon name={badge.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a2a3a]">{badge.title}</h4>
                  <p className="text-xs text-gray-500">{badge.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <CallToAction />
    </div>
  );
}
