import React from 'react';
import { Sparkles, Phone, MapPin, Mail, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { studioInfo } from '../data/studioData';

export const Footer = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-16 pb-12 relative overflow-hidden border-t border-[#3B291A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#292524]">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#C58B6F] to-[#D8BD8A] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Nailashes <span className="gold-gradient-text italic">Raipur</span>
              </span>
            </div>

            <p className="text-xs uppercase tracking-widest text-[#D8BD8A] font-semibold">
              {studioInfo.tagline}
            </p>

            <p className="text-xs text-[#A8A29E] leading-relaxed font-light">
              Raipur's premier destination for haute couture nail art, durable acrylic & gel extensions, Russian volume lash sets, and bespoke bridal beauty pampering at Ambuja Mall.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={studioInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#292524] hover:bg-[#C58B6F] text-[#FAF8F5] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={studioInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#292524] hover:bg-[#C58B6F] text-[#FAF8F5] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a
                href={studioInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#292524] hover:bg-[#22C55E] text-[#FAF8F5] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li><a href="#home" className="hover:text-[#D8BD8A] transition-colors">Home Studio</a></li>
              <li><a href="#services" className="hover:text-[#D8BD8A] transition-colors">Treatment Menu</a></li>
              <li><a href="#featured" className="hover:text-[#D8BD8A] transition-colors">Style Showcase</a></li>
              <li><a href="#about" className="hover:text-[#D8BD8A] transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-[#D8BD8A] transition-colors">Guest Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#D8BD8A] transition-colors">Studio Location</a></li>
            </ul>
          </div>

          {/* Signature Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Signature Treatments
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li><a href="#services" className="hover:text-[#D8BD8A] transition-colors">Gel Nail Extensions</a></li>
              <li><a href="#services" className="hover:text-[#D8BD8A] transition-colors">Sculpted Acrylic Nails</a></li>
              <li><a href="#services" className="hover:text-[#D8BD8A] transition-colors">Bespoke Custom Nail Art</a></li>
              <li><a href="#services" className="hover:text-[#D8BD8A] transition-colors">Classic & Volume Lashes</a></li>
              <li><a href="#services" className="hover:text-[#D8BD8A] transition-colors">Keratin Lash Lift & Tint</a></li>
              <li><a href="#services" className="hover:text-[#D8BD8A] transition-colors">Royal Bridal Packages</a></li>
            </ul>
          </div>

          {/* Studio Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Visit Studio
            </h4>
            <div className="space-y-2.5 text-xs text-[#A8A29E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8BD8A] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{studioInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D8BD8A] flex-shrink-0" />
                <a href={`tel:${studioInfo.phoneRaw}`} className="hover:text-white transition-colors">
                  {studioInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D8BD8A] flex-shrink-0" />
                <span>{studioInfo.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-full gold-gradient-btn text-[11px] font-bold uppercase tracking-wider cursor-pointer"
              >
                Instant Slot Reservation
              </button>
            </div>
          </div>

        </div>

        {/* SEO Local Raipur Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Nailashes Raipur. All rights reserved. Raipur’s premier nail & eyelash extension studio at Ambuja Mall, Vidhan Sabha Road.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              Crafted with <Heart className="w-3 h-3 text-[#B27558] fill-[#B27558]" /> for Raipur
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full bg-[#292524] hover:bg-[#C58B6F] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Local Raipur SEO Keywords Cloud */}
        <div className="mt-6 pt-6 border-t border-[#292524]/60 text-[10px] text-[#57534E] leading-relaxed text-center">
          <strong>Popular Searches in Raipur:</strong> Nail Salon Ambuja Mall Raipur • Best Nail Extensions in Vidhan Sabha Road Raipur • Acrylic Nails Raipur • Russian Volume Lashes Raipur • Lash Lift & Tint Ambuja Mall • Bridal Nails Raipur • Callus Removal Pedicure Chhattisgarh.
        </div>

      </div>
    </footer>
  );
};
