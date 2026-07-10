import React, { useState } from "react";
import Icon from "../components/Icon";
import { CITIES } from "../lib/cities";
import ServiceAreaCard from "../components/ServiceAreaCard";
import CallToAction from "../components/CallToAction";

type RegionFilter = "All" | "Central" | "South" | "North" | "Gulf Coast" | "Keys";

export default function ServiceAreas() {
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>("All");

  const regions: RegionFilter[] = ["All", "Central", "South", "North", "Gulf Coast", "Keys"];

  const filteredCities = selectedRegion === "All"
    ? CITIES
    : CITIES.filter(city => city.region === selectedRegion);

  return (
    <div className="font-sans" id="service-areas-page">
      {/* Page Header */}
      <section className="bg-[#1a2a3a] text-white py-16 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3 relative z-10">
          <span className="text-xs font-mono tracking-widest text-[#c49b3b] uppercase block">
            Statewide Engineering
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
            Florida Service Areas
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            MWAI Architects provides licensed architectural design and professional roofing services across 21 key Florida municipalities. We are experts in county-level wind mitigation codes and municipal historic district rules.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Cities Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-100 pb-6">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-4.5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? "bg-[#1a2a3a] text-[#c49b3b] shadow-md"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {reg === "All" ? "All Regions (21)" : `${reg} Florida`}
              </button>
            ))}
          </div>

          {/* Grid of Cities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCities.map((city) => (
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

          {/* Regional Wind mitigation guidelines callout */}
          <div className="rounded-2xl border border-gray-100 bg-[#fbfbfa] p-8 max-w-3xl mx-auto space-y-4">
            <h3 className="text-lg font-bold text-[#1a2a3a] text-center">
              A Note on Florida's Wind Zones & Regulations
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed text-center">
              Our architectural drafts and roofing installations change dynamically depending on your project's proximity to the coast. Cities in our <strong>South Florida</strong> region (such as Miami, Fort Lauderdale, and Hollywood) are classified within High-Velocity Hurricane Zones (HVHZ), demanding products that survive 170+ MPH winds. In contrast, <strong>Central Florida</strong> municipalities (like Winter Park and Orlando) utilize slightly different design thresholds but enforce rigorous water barriers due to intense rain volumes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CallToAction />
    </div>
  );
}
