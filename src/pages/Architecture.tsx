import React from "react";
import { Link } from "../lib/router";
import Icon from "../components/Icon";
import ServiceCard from "../components/ServiceCard";
import { ARCHITECTURE_SERVICES } from "../lib/services";
import CallToAction from "../components/CallToAction";

export default function Architecture() {
  return (
    <div className="font-sans" id="architecture-main-page">
      {/* Page Header */}
      <section className="bg-[#1a2a3a] text-white py-20 relative overflow-hidden">
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#c49b3b] uppercase block">
            State-Certified Architectural Drafting & Planning
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Architectural Design Services
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            From luxury custom homes and coastal estates to high-capacity commercial centers, we draft, permit, and oversee structural developments with architectural precision across Florida.
          </p>
        </div>
      </section>

      {/* Intro & Philosophy */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase block">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2a3a] tracking-tight">
              Aesthetic Brilliance Rooted in Structural Resilience
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              At MWAI Architects, we believe true architectural design must elevate your lifestyle while providing unwavering safety. In Florida, buildings face unique challenges—from high-velocity hurricane winds (HVHZ) and intense UV degradation to extreme humidity. 
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our registered architects design properties with integrated building science. We calculate structural wind loading, map natural ventilation flow, specify energy-saving materials, and oversee compliance with strict Florida Building Codes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcf8f0] text-[#c49b3b] shrink-0">
                  <Icon name="Ruler" className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a2a3a]">Precision Drafting</h4>
                  <p className="text-xs text-gray-400">Complete architectural layouts, details and assembly schedules.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcf8f0] text-[#c49b3b] shrink-0">
                  <Icon name="PenTool" className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a2a3a]">3D Modeling</h4>
                  <p className="text-xs text-gray-400">Fully developed spatial renders before cutting any wood or steel.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-[#fbfbfa] p-8 space-y-6 shadow-inner">
            <h3 className="text-lg font-bold text-[#1a2a3a] border-b border-gray-100 pb-3">
              Florida Resilient Design Principles
            </h3>
            <ul className="space-y-4">
              <li className="space-y-1">
                <span className="block text-sm font-semibold text-[#1a2a3a]">1. Wind-Uplift Optimization</span>
                <p className="text-xs text-gray-500 leading-relaxed">We compute roof pitch, overhang lengths, and fastening patterns to reduce structural wind-uplift during hurricane-level events.</p>
              </li>
              <li className="space-y-1">
                <span className="block text-sm font-semibold text-[#1a2a3a]">2. Thermal Envelope Integrity</span>
                <p className="text-xs text-gray-500 leading-relaxed">Our specs incorporate thermal barriers, radiant shield options, and balanced attic ventilation to decrease cooling loads substantially.</p>
              </li>
              <li className="space-y-1">
                <span className="block text-sm font-semibold text-[#1a2a3a]">3. Strict Code Compliance</span>
                <p className="text-xs text-gray-500 leading-relaxed">All drafts are engineered to comply fully with local county regulations, including specific high-velocity zone guidelines.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f8f7f4] border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase">
              Core Specialties
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-[#1a2a3a]">
              Architectural Service Portfolio
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Explore our core architectural practices. Click on any category to learn more about our process, layouts, and specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARCHITECTURE_SERVICES.map((srv) => (
              <ServiceCard
                key={srv.id}
                id={srv.id}
                title={srv.title}
                description={srv.shortDescription}
                features={srv.features}
                icon={srv.iconName}
                category="architecture"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Educational Guide Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:sticky lg:top-28 space-y-4">
              <span className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase block">
                Guide to Practice
              </span>
              <h3 className="text-2xl font-extrabold text-[#1a2a3a] tracking-tight">
                Understanding the Architectural Lifecycle
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We believe in full transparency and education. Building in Florida requires navigating multiple layers of local compliance.
              </p>
              <a
                href="tel:+17026029336"
                className="inline-flex items-center gap-2 rounded-lg bg-[#1a2a3a] text-white font-bold text-xs px-4 py-3"
              >
                <Icon name="Phone" className="h-3.5 w-3.5" />
                <span>Call (702) 602-9336</span>
              </a>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {/* Point 1 */}
              <div className="flex gap-4 p-6 rounded-xl border border-gray-50 bg-gray-50/50">
                <span className="text-xl font-bold font-mono text-[#c49b3b]">01</span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#1a2a3a]">Zoning & Feasibility Checks</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Before we draw any lines, our architectural team reviews local property setbacks, building heights, lot coverages, and homeowner association restrictions. This protects our clients from future compliance or permitting delays.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4 p-6 rounded-xl border border-gray-50 bg-gray-50/50">
                <span className="text-xl font-bold font-mono text-[#c49b3b]">02</span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#1a2a3a]">Wind-Load Calculations & Materials Specifications</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Florida's wind rules are some of the strictest in the nation. We perform structural calculations that dictate concrete block reinforcements, truss strapping, window impact ratings, and roof fastening techniques to keep structures stable during hurricanes.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4 p-6 rounded-xl border border-gray-50 bg-gray-50/50">
                <span className="text-xl font-bold font-mono text-[#c49b3b]">03</span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#1a2a3a]">Municipality Permitting Coordination</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Navigating local building departments in Orlando, Winter Park, and beyond requires meticulously structured documentation. We compile, submit, and clarify full construction drawings to secure all necessary zoning and building permits efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CallToAction />
    </div>
  );
}
