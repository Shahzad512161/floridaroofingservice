import React from "react";
import Icon from "./Icon";

export default function CallToAction() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#1a2a3a] via-[#223547] to-[#1a2a3a] text-white overflow-hidden" id="cta-section">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#c49b3b_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#c49b3b]/30 bg-white/5 px-4.5 py-1.5 text-xs font-mono tracking-widest text-[#c49b3b] uppercase">
          <Icon name="Ruler" className="h-3.5 w-3.5" />
          <span>Professional Consultation</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Elevate Your Property with <span className="text-[#c49b3b]">Architectural Precision</span> & High-Performance Roofing
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Whether you are commissioning a new luxury residential build, planning commercial developments, or require structurally certified hurricane-rated roofing, MWAI Architects delivers engineered excellence.
          </p>
        </div>

        {/* Action button container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="tel:+17026029336"
            className="flex items-center justify-center gap-3 rounded-xl bg-[#c49b3b] hover:bg-[#d4a843] text-[#1a2a3a] px-8 py-4 font-extrabold text-base shadow-xl active:scale-95 transition-all w-full sm:w-auto"
          >
            <Icon name="Phone" className="h-5 w-5" />
            <span>Call (702) 602-9336</span>
          </a>
          <a
            href="mailto:info@mwaiarchitects.com"
            className="flex items-center justify-center gap-2.5 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 font-bold text-base transition-all w-full sm:w-auto"
          >
            <Icon name="Mail" className="h-5 w-5 text-gray-400" />
            <span>Email Consultation Request</span>
          </a>
        </div>

        {/* Trust tags */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-center">
          <div>
            <span className="block text-xl font-bold text-[#c49b3b]">Licensed</span>
            <span className="text-xs text-gray-400">Architects & Contractors</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-[#c49b3b]">Insured</span>
            <span className="text-xs text-gray-400">Full Liability Coverage</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-[#c49b3b]">Winter Park</span>
            <span className="text-xs text-gray-400">Florida Headquarters</span>
          </div>
          <div>
            <span className="block text-xl font-bold text-[#c49b3b]">Florida Code</span>
            <span className="text-xs text-gray-400">100% Wind-Load Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
