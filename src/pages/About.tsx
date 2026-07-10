import React from "react";
import Icon from "../components/Icon";
import CallToAction from "../components/CallToAction";

export default function About() {
  return (
    <div className="font-sans" id="about-page">
      {/* Page Header */}
      <section className="bg-[#1a2a3a] text-white py-16 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3 relative z-10">
          <span className="text-xs font-mono tracking-widest text-[#c49b3b] uppercase block">
            About MWAI Architects
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
            The Architecture-Led Roofing Standard
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Headquartered in Winter Park, Florida, we are a premium design and construction firm uniting structural architecture with high-velocity wind-resistant roofing.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase block">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2a3a] tracking-tight">
                Two Disciplines, One Unified Quality Benchmark
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                MWAI Architects was established to solve a critical disconnect in the construction industry. Traditional architecture firms produce designs but rarely understand the field mechanics of flashing, underlayments, and wind-load fasteners. Conversely, standard roofing contractors often lack the structural training to diagnose attic thermal traps, compute deck-weight tolerances, or handle municipality zoning revisions.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                By maintaining dual active state certifications, we provide a seamless, robust architectural and field execution workflow. Our clients receive custom-tailored aesthetics backed by structurally certified, storm-resilient engineering.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#fbfbfa] p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#1a2a3a] border-b border-gray-100 pb-2">
                Professional Credentials
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm text-[#c49b3b] shrink-0 border border-gray-100">
                    <Icon name="Building2" className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1a2a3a]">State Certified Architect</h4>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">License No: AR92810</p>
                    <p className="text-xs text-gray-400 mt-1">Authorizes structural drafting, 3D modeling, site planning, and municipal permit filings throughout Florida.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm text-[#c49b3b] shrink-0 border border-gray-100">
                    <Icon name="Shield" className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1a2a3a]">State Certified Roofing Contractor</h4>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">License No: CCC38291</p>
                    <p className="text-xs text-gray-400 mt-1">Authorizes physical tear-off replacements, leak sealing, counter-flashing, and wind mitigation reports.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm text-[#c49b3b] shrink-0 border border-gray-100">
                    <Icon name="HardHat" className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1a2a3a]">Fully Insured & Bonded</h4>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">Comprehensive Umbrella Policy</p>
                    <p className="text-xs text-gray-400 mt-1">Full general liability, workers' compensation, and comprehensive property damage protection for commercial and residential sites.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Core values */}
          <div className="border-t border-gray-100 pt-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-extrabold text-[#1a2a3a] tracking-tight">Our Core Design Pillars</h3>
              <p className="text-sm text-gray-500">How we approach every custom blueprint design and roofing installation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-gray-100 bg-white">
                <span className="text-[#c49b3b] font-bold text-sm uppercase font-mono">Pillar 1</span>
                <h4 className="font-bold text-base text-[#1a2a3a] mt-2 mb-1.5">Structural Transparency</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We lay out every specification, nail margin, metal gauge, and underlayment thickness beforehand. Our blueprints clearly outline how your property is prepared for severe wind load stresses.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-100 bg-white">
                <span className="text-[#c49b3b] font-bold text-sm uppercase font-mono">Pillar 2</span>
                <h4 className="font-bold text-base text-[#1a2a3a] mt-2 mb-1.5">Local Building Compliance</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Florida building department rules differ heavily across county lines. We specialize in regional codes, satisfying precise HOA requirements in Winter Park, Orlando, Tampa, and coastal counties.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-100 bg-white">
                <span className="text-[#c49b3b] font-bold text-sm uppercase font-mono">Pillar 3</span>
                <h4 className="font-bold text-base text-[#1a2a3a] mt-2 mb-1.5">No Shortcuts Materials</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We use only certified materials: high-gauge Galvalume steel sheets, authentic clay, natural slate, and heavy self-adhering modified asphalt membranes.
                </p>
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
