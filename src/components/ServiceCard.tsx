import React from "react";
import { Link } from "../lib/router";
import Icon from "./Icon";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features?: string[];
  icon: string;
  category: "architecture" | "roofing";
  key?: string | number;
}

export default function ServiceCard({
  id,
  title,
  description,
  features = [],
  icon,
  category
}: ServiceCardProps) {
  const detailUrl = `/${category}/${id}`;

  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#c49b3b]/20 hover:-translate-y-1 transition-all duration-300 group">
      {/* Icon and Title */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fcf8f0] text-[#c49b3b] group-hover:bg-[#1a2a3a] group-hover:text-white transition-all duration-300">
          <Icon name={icon} className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-[#1a2a3a] leading-tight group-hover:text-[#c49b3b] transition-colors">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-grow">
        {description}
      </p>

      {/* Optional Features Checklist */}
      {features.length > 0 && (
        <ul className="mb-6 space-y-2 border-t border-gray-50 pt-4">
          {features.slice(0, 3).map((feat, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
              <span className="text-[#c49b3b] mt-0.5 shrink-0">✓</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Actions */}
      <Link
        href={detailUrl}
        className="inline-flex items-center justify-between rounded-xl bg-gray-50 group-hover:bg-[#1a2a3a]/5 px-4 py-3 text-xs font-bold text-[#1a2a3a] group-hover:text-[#c49b3b] transition-all"
      >
        <span>Explore Service Details</span>
        <Icon name="ArrowRight" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
