import React from "react";
import Icon from "../components/Icon";
import CallToAction from "../components/CallToAction";

export default function Projects() {
  const projectList = [
    {
      title: "Winter Park Mediterranean Estate",
      location: "Winter Park, FL",
      scope: "Full Architectural Drafting & Clay Tile Roofing",
      details: "A custom 6,500 sq ft luxury residence featuring Spanish Revival aesthetics. Engineered with hurricane-rated clay tile roofing and integrated soffit ventilation to handle high humidity and severe wind loading.",
      specs: ["Concrete Tile Roof", "HVHZ Rated", "6,500 Sq Ft", "Completed Design"]
    },
    {
      title: "Orlando Mixed-Use Retail Center",
      location: "Orlando, FL",
      scope: "Commercial Architecture & Low-Slope TPO Roofing",
      details: "Comprehensive architectural masterplan and flat roof envelope design for a modern retail pavilion. Features double-welded white TPO membranes for heat-reflection, lowering corporate air conditioning loads.",
      specs: ["White TPO membrane", "Cool-Roof Certified", "12,000 Sq Ft", "Permit Secured"]
    },
    {
      title: "Miami Beach Contemporary Villa",
      location: "Miami, FL",
      scope: "Modern Coastal Villa & Standing Seam Metal",
      details: "Sleek, minimalist residential architecture with zero-overhang rooflines. Features a 24-gauge Galvalume standing seam metal roof system with concealed fasteners to resist extreme salt air and high wind uplift.",
      specs: ["Galvalume Metal", "Marine Grade Finish", "4,800 Sq Ft", "Under Construction"]
    },
    {
      title: "Waterfront Estate Roof Restoration",
      location: "Fort Lauderdale, FL",
      scope: "Architectural Inspection & Slate Roof Install",
      details: "Complete timber sheathing replacement and natural metamorphic slate roof installation for a prestigious waterfront estate. Hand-split slate tiles secured with heavy copper fasteners to last generations.",
      specs: ["Natural Slate", "Metamorphic Stone", "7,200 Sq Ft", "Completed Build"]
    }
  ];

  return (
    <div className="font-sans" id="projects-page">
      {/* Page Header */}
      <section className="bg-[#1a2a3a] text-white py-16 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3 relative z-10">
          <span className="text-xs font-mono tracking-widest text-[#c49b3b] uppercase block">
            Craftsmanship Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
            Selected Commissions & Projects
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Examine our high-performance roofing works and architectural commissions. Each project is engineered from blueprint layout to physical seal to satisfy the rigorous Florida Building Code.
          </p>
        </div>
      </section>

      {/* Grid Portfolio */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projectList.map((proj, idx) => (
              <div key={idx} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#c49b3b]/10 transition-all duration-300 group">
                <span className="text-xs font-bold font-mono tracking-wider text-[#c49b3b] uppercase">
                  {proj.scope}
                </span>
                <h3 className="text-xl font-extrabold text-[#1a2a3a] mt-2 mb-1 group-hover:text-[#c49b3b] transition-colors leading-tight">
                  {proj.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 mb-4">
                  <Icon name="MapPin" className="h-3.5 w-3.5 text-[#c49b3b]" />
                  <span>{proj.location}</span>
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                  {proj.details}
                </p>

                {/* Specs Chips */}
                <div className="flex flex-wrap gap-2 border-t border-gray-50 pt-4">
                  {proj.specs.map((spec, sidx) => (
                    <span key={sidx} className="inline-flex items-center rounded-lg bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-[#1a2a3a] border border-gray-100">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core capability note */}
          <div className="rounded-xl border border-gray-100 bg-[#fbfbfa] p-8 max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-lg font-bold text-[#1a2a3a]">
              Architectural Drafting & Roofing Integration
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We maintain full licensing for both architectural design and roofing. This means our team can draft structural additions, request municipality permits, inspect rafters, and lay down watertight slate, tile, shingles, or metal panels in a single, coordinated workspace.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CallToAction />
    </div>
  );
}
