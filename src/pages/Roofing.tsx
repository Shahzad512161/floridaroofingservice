import React from "react";
import { Link } from "../lib/router";
import Icon from "../components/Icon";
import ServiceCard from "../components/ServiceCard";
import { ROOFING_SERVICES } from "../lib/services";
import CallToAction from "../components/CallToAction";

const ROOF_HERO_IMG = "/src/assets/images/hero_roofing_banner_1783704958991.jpg";

export default function Roofing() {
  return (
    <div className="font-sans" id="roofing-main-page">
      {/* Page Header */}
      <section className="relative py-24 text-white bg-[#1a2a3a] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ROOF_HERO_IMG}
            alt="Premium roofing installation close up"
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2a3a] via-[#1a2a3a]/90 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#c49b3b] uppercase block">
            State-Licensed roofing contractor CCC38291
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Professional Roofing Services
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Architect-engineered roofing solutions built to defend your home or commercial asset. We specialize in high-velocity wind zones, double-water barriers, and flawless drainage layouts.
          </p>
        </div>
      </section>

      {/* Philosophy: Architecture-Led Roofing */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase block">
              The Professional Edge
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2a3a] tracking-tight">
              Why an Architecture-Led Roof is Superior
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Standard roofing contractors often focus purely on nailing shingles in place. However, a roof is a highly complex building envelope system. If ventilation is miscalculated, heat traps in your attic, warping timber sheathing and doubling your AC electricity bills.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              At MWAI Architects, our roofing specialists are led by licensed architects. We examine the structural load of your trusses, engineer precise soffit-to-ridge airflow ratios, verify all counter-flashing joints, and install self-adhered secondary water barriers (peel-and-stick) to safeguard your property from hurricane wind-driven rain.
            </p>

            {/* List of details */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                <Icon name="Shield" className="h-5 w-5 text-[#c49b3b]" />
                <span>Secondary Self-Adhered Waterproof Barriers (Peel-and-Stick)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                <Icon name="Settings" className="h-5 w-5 text-[#c49b3b]" />
                <span>Balanced Intake & Exhaust Ridge Ventilation Designs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                <Icon name="Wrench" className="h-5 w-5 text-[#c49b3b]" />
                <span>Engineered Hurricane Strap and Truss Connections Audits</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-[#fbfbfa] p-8 space-y-6">
            <h3 className="text-lg font-bold text-[#1a2a3a] border-b border-gray-100 pb-3">
              Standard Quality Checklist
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Unlike amateur contractors, every roof replacement and installation we manage incorporates the following elements at no additional premium:
            </p>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="block text-xs font-bold text-[#1a2a3a] uppercase tracking-wider">Debris Protection & Nails Sweep</span>
                <p className="text-xs text-gray-500">We utilize heavy protective tarps over windows and landscaping, followed by magnetic sweeping to recover 100% of fasteners.</p>
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-bold text-[#1a2a3a] uppercase tracking-wider">Marine-Grade Counter Flashing</span>
                <p className="text-xs text-gray-500">All chimneys, dormers, and valleys receive hand-soldered or interlocked high-gauge metal counter-flashing with polyurethane seals.</p>
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-bold text-[#1a2a3a] uppercase tracking-wider">Sheathing Deck Refastening</span>
                <p className="text-xs text-gray-500">During a replacement, we check and re-nail existing plywood sheathing to modern hurricane building code standards (6-inch fastener margins).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-[#f8f7f4] border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase">
              What We Do
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-[#1a2a3a]">
              Our Core Roofing Offerings
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              From localized leak detection and major storm repair to full tear-off replacements and engineering certification inspections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ROOFING_SERVICES.map((srv) => (
              <ServiceCard
                key={srv.id}
                id={srv.id}
                title={srv.title}
                description={srv.shortDescription}
                features={srv.features}
                icon={srv.iconName}
                category="roofing"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Educational Guide: Roof Anatomy */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase">
              Educational Resource
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a2a3a] tracking-tight">
              Anatomy of a High-Performance Roofing System
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              A premium roof is not just shingles. It is a multi-layered structure engineered to manage moisture, pressure, and thermal transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="text-[#c49b3b] font-bold text-lg font-mono">1. Decking</span>
              <h4 className="font-bold text-sm text-[#1a2a3a] mt-1">Structural Plywood</h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">The wood sheathing forming your roof foundation. We inspect for rot and re-nail to handle storm wind uplift pressure.</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="text-[#c49b3b] font-bold text-lg font-mono">2. Underlayment</span>
              <h4 className="font-bold text-sm text-[#1a2a3a] mt-1">Moisture Barrier</h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Self-adhering modified asphalt underlayment. If shingles blow off, this acts as a complete secondary water seal.</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="text-[#c49b3b] font-bold text-lg font-mono">3. Flashing</span>
              <h4 className="font-bold text-sm text-[#1a2a3a] mt-1">Critical Joint Metal</h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">High-gauge aluminum or copper surrounding valleys, walls, and vents. Prevents 99% of localized water intrusions.</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-100 bg-gray-50">
              <span className="text-[#c49b3b] font-bold text-lg font-mono">4. Outer Shield</span>
              <h4 className="font-bold text-sm text-[#1a2a3a] mt-1">Chosen Material</h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Shingles, clay tiles, standing seam, slate, or TPO. Absorbs physical impact, blocks UV rays, and guides rain water.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CallToAction />
    </div>
  );
}
