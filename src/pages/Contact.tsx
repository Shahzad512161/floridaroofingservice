import React from "react";
import Icon from "../components/Icon";

export default function Contact() {
  return (
    <div className="font-sans" id="contact-page">
      {/* Page Header */}
      <section className="bg-[#1a2a3a] text-white py-16 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3 relative z-10">
          <span className="text-xs font-mono tracking-widest text-[#c49b3b] uppercase block">
            Direct Coordination
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
            Contact MWAI Architects
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Connect directly with our Winter Park headquarters. Speak to an architect or roofing superintendent about your custom residential designs or emergency leak repairs.
          </p>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left direct contact details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase block">
                Direct Channels
              </span>
              <h2 className="text-2xl font-extrabold text-[#1a2a3a] tracking-tight leading-tight">
                Get in Touch for Scheduling & Consultations
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                To maintain our high engineering and design standards, all consultations must be scheduled in advance. You can reach our team directly via telephone or email to arrange a site visit or drafting review.
              </p>
            </div>

            {/* Large contact blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <a
                href="tel:+17026029336"
                className="flex flex-col p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#c49b3b]/20 transition-all group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fcf8f0] text-[#c49b3b] mb-4 group-hover:bg-[#1a2a3a] group-hover:text-white transition-colors">
                  <Icon name="Phone" className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-[#1a2a3a] mb-1">Call Our Office</h3>
                <span className="text-xs text-gray-400 mb-2 font-mono">Immediate assistance line</span>
                <span className="text-sm font-bold text-[#c49b3b] mt-auto group-hover:underline">
                  +1 (702) 602-9336
                </span>
              </a>

              <a
                href="mailto:info@mwaiarchitects.com"
                className="flex flex-col p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#c49b3b]/20 transition-all group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fcf8f0] text-[#c49b3b] mb-4 group-hover:bg-[#1a2a3a] group-hover:text-white transition-colors">
                  <Icon name="Mail" className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-[#1a2a3a] mb-1">Email Consultation</h3>
                <span className="text-xs text-gray-400 mb-2 font-mono">Replies within 24 business hours</span>
                <span className="text-sm font-bold text-[#c49b3b] mt-auto group-hover:underline break-all">
                  info@mwaiarchitects.com
                </span>
              </a>
            </div>

            {/* Notice about privacy and security */}
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-500 space-y-2 leading-relaxed">
              <p className="font-semibold text-gray-700">⚠️ Please Note Regarding Forms & Quotes:</p>
              <p>
                In compliance with professional architectural and engineering standards, we do not provide automatic quotes or collect private details in complex online web forms. All estimations are derived through physical architectural drawings analysis, engineering wind-load computations, or certified roof diagnostics.
              </p>
            </div>
          </div>

          {/* Right sidebar column: Office details & hours */}
          <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-gray-100 lg:pl-10">
            <div>
              <span className="text-xs font-bold font-mono tracking-widest text-[#c49b3b] uppercase block">
                Office
              </span>
              <h3 className="text-xl font-extrabold text-[#1a2a3a] tracking-tight mt-1">
                Winter Park Headquarters
              </h3>
            </div>

            <ul className="space-y-6 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1a2a3a]/5 text-[#c49b3b] shrink-0 mt-0.5">
                  <Icon name="MapPin" className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-bold text-[#1a2a3a]">Mailing & Physical Address</span>
                  <span className="block text-xs text-gray-500 mt-1">
                    U K Cir, <br />
                    Winter Park, FL 32792 <br />
                    United States
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1a2a3a]/5 text-[#c49b3b] shrink-0 mt-0.5">
                  <Icon name="Clipboard" className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-bold text-[#1a2a3a]">Hours of Operation</span>
                  <span className="block text-xs text-gray-500 mt-1.5 space-y-1">
                    <span className="block">Monday - Friday: 8:00 AM - 6:00 PM</span>
                    <span className="block">Saturday - Sunday: Closed</span>
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1a2a3a]/5 text-[#c49b3b] shrink-0 mt-0.5">
                  <Icon name="Shield" className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-bold text-[#1a2a3a]">State Certifications</span>
                  <span className="block text-xs text-gray-500 mt-1">
                    Certified Architect: AR92810 <br />
                    Certified Roofing Contractor: CCC38291
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
