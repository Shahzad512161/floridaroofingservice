import React from "react";
import { Link } from "../lib/router";
import Icon from "./Icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2a3a] text-gray-300 border-t border-[#c49b3b]/10 font-sans" id="main-footer">
      {/* Top Banner with subtle branding */}
      <div className="border-b border-gray-800 py-10 bg-[#15222f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-[#c49b3b] border border-white/10">
              <Icon name="Building2" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-sans text-lg font-bold text-white tracking-tight leading-tight">MWAI Architects</h3>
              <p className="text-xs text-[#c49b3b] tracking-wider uppercase font-mono font-medium">Florida License AR92810 & CCC38291</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-400">Need Immediate Assistance?</span>
            <a
              href="tel:+17026029336"
              className="flex items-center gap-2 rounded-lg bg-[#c49b3b] px-5 py-2.5 text-sm font-bold text-[#1a2a3a] shadow-lg hover:bg-[#d4a843] active:scale-95 transition-all"
            >
              <Icon name="Phone" className="h-4 w-4" />
              <span>(702) 602-9336</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-sans text-2xl font-bold tracking-tight text-white">MWAI <span className="text-[#c49b3b]">Architects</span></span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              A premium, architecture-led design and roofing contractor. We deliver custom residential designs, commercial building planning, and high-performance, hurricane-rated roofing systems engineered for Florida's coastal and inland environments.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#c49b3b] hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#c49b3b] hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#c49b3b] hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@mwaiarchitects.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#c49b3b] hover:bg-white/10 transition-colors"
                aria-label="Email Us"
              >
                <Icon name="Mail" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-3 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Icon name="ArrowRight" className="h-3 w-3 text-[#c49b3b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Icon name="ArrowRight" className="h-3 w-3 text-[#c49b3b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Icon name="ArrowRight" className="h-3 w-3 text-[#c49b3b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Projects Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Icon name="ArrowRight" className="h-3 w-3 text-[#c49b3b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Service Areas</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Icon name="ArrowRight" className="h-3 w-3 text-[#c49b3b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact Page</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-3 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/architecture" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Icon name="ArrowRight" className="h-3 w-3 text-[#c49b3b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Architecture Core</span>
                </Link>
              </li>
              <li>
                <Link href="/architecture/residential" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Icon name="ArrowRight" className="h-3 w-3 text-[#c49b3b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Residential Architecture</span>
                </Link>
              </li>
              <li>
                <Link href="/architecture/commercial" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Icon name="ArrowRight" className="h-3 w-3 text-[#c49b3b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Commercial Architecture</span>
                </Link>
              </li>
              <li>
                <Link href="/roofing" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Icon name="ArrowRight" className="h-3 w-3 text-[#c49b3b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Roofing Services</span>
                </Link>
              </li>
              <li>
                <Link href="/roofing/replacement" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Icon name="ArrowRight" className="h-3 w-3 text-[#c49b3b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Roof Replacement</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-3 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <Icon name="MapPin" className="h-5 w-5 text-[#c49b3b] shrink-0 mt-0.5" />
                <span>
                  U K Cir, <br />
                  Winter Park, FL 32792
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="Phone" className="h-4 w-4 text-[#c49b3b]" />
                <a href="tel:+17026029336" className="hover:text-white transition-colors">
                  +1 (702) 602-9336
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="Mail" className="h-4 w-4 text-[#c49b3b]" />
                <a href="mailto:info@mwaiarchitects.com" className="hover:text-white transition-colors break-all">
                  info@mwaiarchitects.com
                </a>
              </li>
              <li className="border-t border-gray-800 pt-3 mt-3">
                <span className="block text-xs font-semibold text-gray-300 uppercase tracking-widest mb-1.5">Hours:</span>
                <span className="block text-xs">Monday - Friday: 8am - 6pm</span>
                <span className="block text-xs">Saturday - Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} MWAI Architects. All Rights Reserved. Licensed and Insured.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Licensing Information</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-[#c49b3b]/60">State Certifications: AR92810 | CCC38291</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
