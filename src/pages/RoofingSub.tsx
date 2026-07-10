import React from "react";
import { Link } from "../lib/router";
import Icon from "../components/Icon";
import { ROOFING_SERVICES } from "../lib/services";
import CallToAction from "../components/CallToAction";

interface RoofingSubProps {
  id: "installation" | "repair" | "replacement" | "inspection";
}

export default function RoofingSub({ id }: RoofingSubProps) {
  const service = ROOFING_SERVICES.find(srv => srv.id === id);

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-xl font-bold">Service Not Found</h2>
        <Link href="/roofing" className="text-[#c49b3b] mt-4 inline-block">Return to Roofing Core</Link>
      </div>
    );
  }

  return (
    <div className="font-sans" id={`roofing-sub-${id}`}>
      {/* Page Header */}
      <section className="bg-[#1a2a3a] text-white py-16 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3 relative z-10">
          <Link href="/roofing" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c49b3b] uppercase hover:underline">
            <Icon name="ArrowRight" className="h-3 w-3 rotate-180" />
            <span>Back to Roofing Core</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
            {service.title}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main text column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Roofing Service Feature Image */}
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-gray-100 relative group bg-gray-50">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a3a]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-white uppercase bg-[#c49b3b] px-2.5 py-1 rounded-md font-bold">
                  MWAI Service Standard
                </span>
                <span className="text-xs font-bold text-white drop-shadow-sm font-sans flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Operations
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1a2a3a]">
                Scope of Roofing Operations
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Features block */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="text-lg font-bold text-[#1a2a3a]">
                Technical Deliverables & Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg border border-gray-50 bg-gray-50/50">
                    <span className="text-[#c49b3b] font-bold mt-0.5">✓</span>
                    <span className="text-xs text-gray-700 font-medium leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special wind load details */}
            <div className="rounded-xl border border-[#c49b3b]/20 bg-[#fcf8f0] p-6 space-y-3">
              <h4 className="font-bold text-[#1a2a3a] text-sm flex items-center gap-2">
                <Icon name="Shield" className="h-4.5 w-4.5 text-[#c49b3b]" />
                <span>Structural Wind Mitigation Certification (Form OIR-B1-1802)</span>
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                In Florida, a wind mitigation inspection can significantly reduce your property insurance premiums. Every roof installation and complete replacement we perform is executed and documented to maximize your wind mitigation credits. We verify roof deck attachment types, nail spacing margins, secondary water barriers, and truss-to-wall roof deck connections.
              </p>
            </div>
          </div>

          {/* Process sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-gray-100 lg:pl-8">
            <div className="space-y-4">
              <span className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase block">
                The Operations Flow
              </span>
              <h3 className="text-xl font-extrabold text-[#1a2a3a] tracking-tight">
                Installation & Field Process
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                How we coordinate your project from physical site protection to completed inspections and cleaning.
              </p>
            </div>

            <div className="relative border-l-2 border-gray-100 pl-4 space-y-8 mt-6">
              {service.process.map((proc, idx) => (
                <div key={idx} className="relative">
                  {/* Step bubble */}
                  <div className="absolute -left-[25px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-[#c49b3b]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1a2a3a]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold font-mono text-[#c49b3b] uppercase">Phase {idx + 1}</span>
                    <h4 className="text-xs font-bold text-[#1a2a3a] leading-none">{proc.split(" & ")[0]}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{proc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Instant contact sidebar widget */}
            <div className="rounded-xl border border-gray-100 bg-[#fbfbfa] p-5 space-y-4 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Emergency & Repair Line</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Talk directly to our roofing superintendent regarding leaks or structural inspections.
              </p>
              <a
                href="tel:+17026029336"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#1a2a3a] hover:bg-[#2c3e50] py-2.5 text-xs font-bold text-white shadow-md transition-colors"
              >
                <Icon name="Phone" className="h-3.5 w-3.5 text-[#c49b3b]" />
                <span>Call (702) 602-9336</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <CallToAction />
    </div>
  );
}
