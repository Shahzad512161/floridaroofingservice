import React from "react";
import { Link } from "../lib/router";
import Icon from "../components/Icon";
import { ROOFING_TYPES } from "../lib/services";
import CallToAction from "../components/CallToAction";

interface RoofingTypeSubProps {
  id: "shingle" | "tile" | "metal" | "flat" | "slate" | "wood-shake";
}

export default function RoofingTypeSub({ id }: RoofingTypeSubProps) {
  const type = ROOFING_TYPES.find(t => t.id === id);

  if (!type) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-xl font-bold">Roofing Type Not Found</h2>
        <Link href="/" className="text-[#c49b3b] mt-4 inline-block">Return to Homepage</Link>
      </div>
    );
  }

  return (
    <div className="font-sans" id={`roofing-type-${id}`}>
      {/* Page Header */}
      <section className="bg-[#1a2a3a] text-white py-16 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3 relative z-10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c49b3b] uppercase hover:underline">
            <Icon name="ArrowRight" className="h-3 w-3 rotate-180" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3.5 mt-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-[#c49b3b] border border-white/20">
              <Icon name={type.iconName} className="h-6 w-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {type.title}
            </h1>
          </div>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed mt-2">
            {type.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Main column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Roofing Type Feature Image */}
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-gray-100 relative group bg-gray-50">
              <img
                src={type.imageUrl}
                alt={type.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a3a]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-white uppercase bg-[#c49b3b] px-2.5 py-1 rounded-md font-bold">
                  MWAI Material Standard
                </span>
                <span className="text-xs font-bold text-white drop-shadow-sm font-sans flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Sourced & Approved
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1a2a3a]">
                Material Profile & Architectural Use
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {type.fullDescription}
              </p>
            </div>

            {/* Application box */}
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a2a3a]/5 text-[#c49b3b] shrink-0 mt-0.5">
                <Icon name="Ruler" className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#1a2a3a]">Architectural Intent & Recommendation</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong>Best For:</strong> {type.bestFor} We evaluate the pitch of your structural roof trusses and check local neighborhood HOA regulations before specifying this material to ensure seamless permits.
                </p>
              </div>
            </div>

            {/* Advantages block */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="text-lg font-bold text-[#1a2a3a]">
                Structural & Protection Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {type.advantages.map((adv, idx) => (
                  <div key={idx} className="flex gap-2.5 p-4 rounded-xl border border-gray-50 bg-gray-50/50">
                    <span className="text-[#c49b3b] font-bold">✓</span>
                    <span className="text-xs text-gray-700 font-medium leading-relaxed">{adv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar column */}
          <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-gray-100 lg:pl-8">
            <div className="space-y-3">
              <span className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase block">
                Specifications
              </span>
              <h3 className="text-xl font-extrabold text-[#1a2a3a] tracking-tight">
                Typical Material Assembly
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                A professional roofing system relies on exact material components stacked in sequence.
              </p>
            </div>

            <div className="space-y-3.5 mt-6">
              {type.materialsUsed.map((mat, idx) => (
                <div key={idx} className="p-3.5 rounded-lg border border-gray-50 bg-white shadow-sm flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a2a3a]/5 text-[#c49b3b] font-mono text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1a2a3a]">{mat.split(" (")[0]}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{mat}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct line widget */}
            <div className="rounded-xl border border-gray-100 bg-[#fbfbfa] p-5 space-y-4 pt-6 mt-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Request Sample & Spec</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Connect with our drafting team to get raw specification drawings or schedule physical material samples.
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
