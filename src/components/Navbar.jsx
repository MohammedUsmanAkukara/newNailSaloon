import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { studioInfo } from '../data/studioData';

export const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Featured Styles', href: '#featured' },
    { name: 'About Studio', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact & Map', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#1C1917] text-[#FAF8F5] text-xs font-medium py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-[#E4C3B2]">
              <MapPin className="w-3.5 h-3.5 text-[#D8BD8A]" />
              Ambuja Mall, Lower Ground, Shop 63, Raipur
            </span>
            <span className="hidden md:inline-block text-[#78716C]">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#E7E5E4]">
              <Clock className="w-3.5 h-3.5 text-[#D8BD8A]" />
              Mon - Sun: 10:00 AM - 9:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${studioInfo.phoneRaw}`}
              className="flex items-center gap-1.5 text-[#E4C3B2] hover:text-[#FAF8F5] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D8BD8A]" />
              <span>{studioInfo.phone}</span>
            </a>
            <span className="inline-block px-2 py-0.5 rounded-full bg-[#3B291A] text-[#D8BD8A] text-[11px] font-semibold tracking-wide uppercase">
              Walk-ins & Appointments
            </span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-[0_4px_25px_rgba(197,139,111,0.12)] py-3'
            : 'bg-[#FAF8F5]/90 backdrop-blur-md py-4.5 border-b border-[#E8DFD8]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C58B6F] to-[#D8BD8A] flex items-center justify-center text-white shadow-md shadow-[#C58B6F]/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1917] leading-none">
                  Nailashes <span className="gold-gradient-text italic font-medium">Raipur</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7A6B] font-semibold mt-1">
                  Luxury Nail & Lash Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[14px] font-medium text-[#44403C] hover:text-[#B27558] transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C58B6F] transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* CTA Book Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient-btn text-xs uppercase tracking-wider font-semibold cursor-pointer shadow-sm hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="lg:hidden p-2 rounded-lg text-[#1C1917] hover:bg-[#F3EFEA] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FAF8F5] border-b border-[#E8DFD8] px-4 pt-3 pb-6 shadow-xl"
            >
              <div className="flex flex-col space-y-3.5 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-base font-medium text-[#292524] hover:text-[#B27558] py-2 border-b border-[#F0EAE1] flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#B27558]">→</span>
                  </a>
                ))}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full gold-gradient-btn text-xs uppercase tracking-wider font-semibold"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

