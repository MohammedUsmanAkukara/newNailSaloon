import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollMarquee } from './components/ScrollMarquee';
import { FeaturedScroll } from './components/FeaturedScroll';
import { ServicesGrid } from './components/ServicesGrid';
import { ParallaxExperience } from './components/ParallaxExperience';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StyleGallery } from './components/StyleGallery';
import { BookingSection } from './components/BookingSection';
import { BookingModal } from './components/BookingModal';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';

import { MessageCircle, Calendar } from 'lucide-react';
import { studioInfo } from './data/studioData';
import { services } from './data/servicesData';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Initialize Lenis smooth inertial scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Top Page Scroll Progress Indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenBookingModal = (service = null) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (service) => {
    setSelectedService(service);
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  const handleSelectStyle = (style) => {
    const matchingService = style.category?.toLowerCase().includes('lash')
      ? services.find(s => s.id === 'volume-lash-extensions')
      : services.find(s => s.id === 'nail-art-design') || services[0];

    setSelectedService(matchingService);
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col font-sans selection:bg-[#EBD8C3] selection:text-[#3B291A] relative">
      
      {/* Top Rose-Gold Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C58B6F] via-[#D8BD8A] to-[#B27558] origin-left z-50 shadow-[0_2px_10px_rgba(197,139,111,0.5)]"
      />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBookingModal()} />

      {/* Main Content Sections with Dynamic Scroll Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section with Multi-Layer Parallax */}
        <Hero onOpenBooking={() => handleOpenBookingModal()} />

        {/* 2. Interactive Infinite Moving Ribbon that accelerates with scroll */}
        <ScrollMarquee />

        {/* 3. Featured Horizontal Scroll Showcase */}
        <FeaturedScroll onSelectStyle={handleSelectStyle} />

        {/* 4. Categorized Services Grid with Staggered Scroll Entrances */}
        <ServicesGrid onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 5. Luxury Editorial Parallax Banner Section */}
        <ParallaxExperience onOpenBooking={() => handleOpenBookingModal()} />

        {/* 6. Brand Excellence & Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Style Gallery Lookbook */}
        <StyleGallery onSelectStyle={handleSelectStyle} />

        {/* 8. Interactive Booking & Appointment Section */}
        <BookingSection
          preSelectedService={selectedService}
          onClearPreselected={() => setSelectedService(null)}
        />

        {/* 9. Verified Reviews with Subtle Scroll Elevation */}
        <Testimonials />

        {/* 10. Location, Directions & Working Hours */}
        <LocationAndHours />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBookingModal()} />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Floating Action Buttons for High Mobile Conversion */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Floating WhatsApp Action */}
        <a
          href={`https://wa.me/${studioInfo.whatsappRaw}?text=Hi%20Nailashes%20Raipur%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Chat"
          className="w-13 h-13 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#22C55E]" />
          <span className="sr-only">WhatsApp</span>
        </a>

        {/* Floating Quick Book Button (Visible on Small / Medium Screens) */}
        <button
          onClick={() => handleOpenBookingModal()}
          aria-label="Quick Book Appointment"
          className="lg:hidden px-4 py-2.5 rounded-full gold-gradient-btn text-xs uppercase tracking-wider font-bold shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Slot</span>
        </button>
      </div>
    </div>
  );
}

export default App;
