"use client";

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

      {/* Headquarters Map Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-100" id="hq-map-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Map Frame */}
            <div className="lg:col-span-7 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm min-h-[350px] lg:min-h-[420px] flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-gray-50 mb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500">
                    Live Dispatch & Design Headquarters
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#c49b3b]">
                  Winter Park, FL
                </span>
              </div>
              <div className="flex-grow rounded-xl overflow-hidden border border-gray-100 relative shadow-inner bg-gray-100">
                <iframe
                  title="MWAI Architects Winter Park HQ Map"
                  src="https://maps.google.com/maps?q=U%20K%20Cir,%20Winter%20Park,%20FL%2032792&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Address & Service Area Quick Dispatch Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm space-y-5 flex-grow">
                <span className="text-[10px] font-mono tracking-widest text-[#c49b3b] uppercase font-bold block">
                  Primary Location
                </span>
                <h3 className="text-lg font-bold text-[#1a2a3a] tracking-tight">
                  Statewide Architecture & Roof Engineering Headquarters
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3 items-start text-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-[#c49b3b] shrink-0 border border-amber-100/50">
                      <Icon name="MapPin" className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Mailing & Physical Site Address</h4>
                      <p className="text-gray-500 text-xs font-medium mt-0.5 leading-relaxed">
                        U K Cir, Winter Park, FL 32792
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start text-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-[#c49b3b] shrink-0 border border-amber-100/50">
                      <Icon name="Phone" className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Direct Office & Intake Dispatch</h4>
                      <p className="text-[#c49b3b] text-xs font-bold mt-0.5">
                        +1 (702) 602-9336
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start text-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-[#c49b3b] shrink-0 border border-amber-100/50">
                      <Icon name="Mail" className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Architectural Design Desk</h4>
                      <p className="text-gray-500 text-xs font-medium mt-0.5 break-all">
                        info@mwaiarchitects.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-2">
                  <h4 className="font-bold text-gray-900 text-xs mb-2">Regional Operational Readiness</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    By coordinating from our central Winter Park studio, our architects design regional additions, file county building department requests, and mobilize roofing crews equipped for your local wind zone.
                  </p>
                </div>
              </div>

              {/* Status Indicator Card */}
              <div className="rounded-xl bg-[#1a2a3a] text-white p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="h-5 w-5 text-[#c49b3b]" />
                  <span className="text-xs font-mono tracking-widest text-[#c49b3b] uppercase font-bold">
                    Florida Licenses
                  </span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Registered Architecture Firm (AR92810) and Certified Roofing Contractor (CCC38291). Bonded and insured up to $5M general liability.
                </p>
              </div>
            </div>
          </div>
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
