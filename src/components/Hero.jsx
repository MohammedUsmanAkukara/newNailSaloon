import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, MessageCircle, PhoneCall, Star, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { studioInfo } from '../data/studioData';

export const Hero = ({ onOpenBooking }) => {
  const containerRef = useRef(null);

  // Smooth scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  // Multi-layer parallax movement
  const yBgShape1 = useTransform(smoothProgress, [0, 1], ['0%', '70%']);
  const yBgShape2 = useTransform(smoothProgress, [0, 1], ['0%', '-50%']);
  const yBgShape3 = useTransform(smoothProgress, [0, 1], ['0%', '110%']);
  
  // Showcase image parallax rotation & scale
  const imageY = useTransform(smoothProgress, [0, 1], ['0px', '75px']);
  const imageRotate = useTransform(smoothProgress, [0, 1], [0, 3.5]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 0.94]);

  // Floating badges moving in opposite directions on scroll
  const badge1Y = useTransform(smoothProgress, [0, 1], ['0px', '-80px']);
  const badge2Y = useTransform(smoothProgress, [0, 1], ['0px', '90px']);

  // Text fade out on scroll
  const opacityFade = useTransform(smoothProgress, [0, 0.75], [1, 0.15]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-12 pb-20 lg:py-24 bg-[#FAF8F5]"
    >
      {/* Dynamic Parallax Floating Background Blobs */}
      <motion.div
        style={{ y: yBgShape1 }}
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#E4C3B2]/40 to-[#D8BD8A]/25 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yBgShape2 }}
        className="absolute top-1/2 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#F3DFD5]/50 to-[#E9D7B3]/30 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yBgShape3 }}
        className="absolute bottom-5 right-1/4 w-96 h-96 rounded-full bg-gradient-to-bl from-[#C58B6F]/20 to-transparent blur-2xl pointer-events-none"
      />

      {/* Subtle Luxury Geometric Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#C58B6F_0.8px,transparent_0.8px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & Dual CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity: opacityFade }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Top Pill Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E4C3B2]/70 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C58B6F] animate-ping" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8C5D42]">
                Raipur's #1 Luxury Studio • Ambuja Mall
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.12]"
            >
              Elevate Your Elegance at{' '}
              <span className="gold-gradient-text italic font-medium block sm:inline">
                Raipur’s Finest
              </span>{' '}
              Nail & Lash Studio
            </motion.h1>

            {/* Subheadline with Citations/Address Info */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl font-light"
            >
              Professional nail and eyelash studio specializing in high-quality nail extensions, custom nail art, and lash applications located at <strong className="font-semibold text-[#292524]">Ambuja Mall, Vidhan Sabha Road, Raipur</strong>. Experience bespoke couture finishes tailored to your unique beauty.
            </motion.p>

            {/* Dual CTAs & Booking Action */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="gold-gradient-btn px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Reserve Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2.5">
                <a
                  href={`https://wa.me/${studioInfo.whatsappRaw}?text=Hi%20Nailashes%20Raipur%2C%20I%20would%20like%20to%20book%20a%20nail/lash%20service%20at%20Ambuja%20Mall`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full bg-white/95 text-[#292524] hover:text-[#15803D] border border-[#E8DFD8] hover:border-[#86EFAC] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-sm hover:shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#22C55E]" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href={`tel:${studioInfo.phoneRaw}`}
                  className="p-3.5 rounded-full bg-white/95 text-[#292524] hover:text-[#B27558] border border-[#E8DFD8] shadow-sm hover:shadow transition-all flex items-center justify-center"
                  title="Call Nailashes Raipur"
                >
                  <PhoneCall className="w-4 h-4 text-[#C58B6F]" />
                </a>
              </div>
            </motion.div>

            {/* Trust Proof Badges */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#E8DFD8]/70 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF5EE] border border-[#E4C3B2] flex items-center justify-center text-[#B27558]">
                  <Star className="w-4 h-4 fill-[#D8BD8A] text-[#D8BD8A]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1C1917]">4.9 / 5.0</div>
                  <div className="text-[11px] text-[#78716C]">500+ Verified Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF5EE] border border-[#E4C3B2] flex items-center justify-center text-[#B27558]">
                  <ShieldCheck className="w-4 h-4 text-[#C58B6F]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1C1917]">100% Sterile</div>
                  <div className="text-[11px] text-[#78716C]">Medical-grade hygiene</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF5EE] border border-[#E4C3B2] flex items-center justify-center text-[#B27558]">
                  <Heart className="w-4 h-4 text-[#C58B6F]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1C1917]">Ambuja Mall</div>
                  <div className="text-[11px] text-[#78716C]">Free parking & valet</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Luxury Showcase with Dynamic Scroll Parallax */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: imageY, scale: imageScale, rotate: imageRotate }}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative halo border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D8BD8A]/40 to-[#E4C3B2]/40 rounded-3xl blur-2xl opacity-75 animate-pulse" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop"
                  alt="Nailashes Raipur luxury manicure and bespoke nail extensions"
                  className="w-full h-[470px] object-cover object-center transform hover:scale-108 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-card backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#8C5D42]">
                        Signature Treatment
                      </p>
                      <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                        Sculpted Gel Extensions & Chrome Art
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF5EE] text-[#B27558] border border-[#E4C3B2]">
                      ₹1,999+
                    </span>
                  </div>
                </div>
              </div>

              {/* Scroll Parallax Floating Badge 1 - Top Left (Drifts up on scroll) */}
              <motion.div
                style={{ y: badge1Y }}
                className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md border border-[#E8DFD8] p-3.5 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C58B6F] to-[#D8BD8A] flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C1917]">500+ Colors & Finishes</div>
                  <div className="text-[10px] text-[#78716C]">Chrome, Cat-Eye & 3D Charms</div>
                </div>
              </motion.div>

              {/* Scroll Parallax Floating Badge 2 - Bottom Right (Drifts down on scroll) */}
              <motion.div
                style={{ y: badge2Y }}
                className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-md border border-[#E8DFD8] p-3.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 z-20"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#22C55E] animate-ping" />
                <div>
                  <div className="text-xs font-bold text-[#1C1917]">Walk-ins Welcomed</div>
                  <div className="text-[10px] text-[#78716C]">Shop 63, Lower Ground</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
