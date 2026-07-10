import React from "react";
import Icon from "./Icon";

interface ServiceAreaCardProps {
  name: string;
  region: string;
  county: string;
  highlights: string[];
  description: string;
  key?: string | number;
}

export default function ServiceAreaCard({
  name,
  region,
  county,
  highlights,
  description
}: ServiceAreaCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* City and County */}
      <div className="flex items-start justify-between mb-3.5">
        <div>
          <h3 className="font-sans text-lg font-bold text-[#1a2a3a]">
            {name}, FL
          </h3>
          <p className="text-xs text-gray-400 font-mono">
            {county} County | {region} Florida
          </p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
          <Icon name="MapPin" className="h-4 w-4 text-[#c49b3b]" />
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Highlights / Specializations */}
      <div className="border-t border-gray-50 pt-3 space-y-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
          Local Specializations:
        </span>
        {highlights.map((high, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="h-1 w-1 rounded-full bg-[#c49b3b]" />
            <span>{high}</span>
          </div>
        ))}
      </div>

      {/* Instant Action */}
      <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-400">Local Consulting:</span>
        <a
          href="tel:+17026029336"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a2a3a] hover:text-[#c49b3b] transition-colors"
        >
          <Icon name="Phone" className="h-3.5 w-3.5" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
