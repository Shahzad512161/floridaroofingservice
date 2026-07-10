import React from "react";
import { Link } from "../lib/router";
import Icon from "./Icon";

interface RoofingTypeCardProps {
  id: string;
  title: string;
  description: string;
  advantages: string[];
  bestFor: string;
  icon: string;
  imageUrl?: string;
  key?: string | number;
}

export default function RoofingTypeCard({
  id,
  title,
  description,
  advantages,
  bestFor,
  icon,
  imageUrl
}: RoofingTypeCardProps) {
  const detailUrl = `/roofing/${id}`;

  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#c49b3b]/20 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
      {/* Image header */}
      {imageUrl && (
        <div className="h-44 w-full overflow-hidden relative bg-gray-50 border-b border-gray-50">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#1a2a3a] shadow-sm backdrop-blur-xs">
            <Icon name={icon} className="h-5 w-5" />
          </div>
        </div>
      )}

      <div className="flex flex-col p-6 flex-grow">
        {!imageUrl && (
          /* Icon header fallback if image is not supplied */
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a2a3a]/5 to-[#1a2a3a]/10 text-[#1a2a3a] group-hover:from-[#c49b3b]/10 group-hover:to-[#c49b3b]/20 group-hover:text-[#c49b3b] transition-all duration-300">
            <Icon name={icon} className="h-7 w-7" />
          </div>
        )}

        {/* Content */}
        <h3 className="text-lg font-bold text-[#1a2a3a] mb-2 leading-tight group-hover:text-[#c49b3b] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Target Application */}
        <div className="bg-gray-50 rounded-lg p-3.5 mb-5 text-xs text-gray-500">
          <span className="font-semibold text-gray-700 block mb-0.5">Best Application:</span>
          {bestFor}
        </div>

        {/* Advantages */}
        <div className="mb-6 space-y-2 border-t border-gray-100 pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">Key Advantages:</span>
          {advantages.slice(0, 3).map((adv, index) => (
            <div key={index} className="flex items-start gap-2 text-xs text-gray-600">
              <span className="text-[#c49b3b] font-bold">✓</span>
              <span>{adv}</span>
            </div>
          ))}
        </div>

        {/* Action */}
        <Link
          href={detailUrl}
          className="inline-flex items-center justify-between font-bold text-xs text-[#1a2a3a] group-hover:text-[#c49b3b] transition-colors mt-auto pt-2"
        >
          <span>Explore Specifications</span>
          <Icon name="ArrowRight" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
