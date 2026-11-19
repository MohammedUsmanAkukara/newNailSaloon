import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Sparkles, Coffee, CheckCircle } from 'lucide-react';

export const WhyChooseUs = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Medical-Grade Sterilization',
      subtitle: 'Zero Compromise on Hygiene',
      description: 'Every metal tool undergoes ultrasonic cleaning, medical-grade pouch sealing, and autoclave sterilization. Nail files and buffers are 100% single-use.'
    },
    {
      icon: Award,
      title: 'Certified Lash & Nail Masters',
      subtitle: 'Artistry Guided by Precision',
      description: 'Our senior technicians are trained in international sculpting standards—ensuring perfect nail apex alignment, zero cuticle burn, and safe lash isolation.'
    },
    {
      icon: Sparkles,
      title: '500+ Curated Luxury Hues',
      subtitle: 'Trendsetting Global Finishes',
      description: 'From mirror chrome powders and blooming gels to Russian volume cashmere lashes, we stock only premium non-toxic, long-wear formulas.'
    },
    {
      icon: Coffee,
      title: 'Boutique Pamper Lounge',
      subtitle: 'Ambuja Mall Comfort',
      description: 'Unwind in plush ergonomic treatment chairs with calming aromatherapy, ambient music, and complimentary artisan coffee or herbal brew.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-[#E8DFD8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EE] border border-[#E4C3B2] text-xs font-semibold text-[#8C5D42] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C58B6F]" />
              The Nailashes Standard
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
              Where Haute Couture Artistry Meets Flawless Hygiene
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <p className="text-base text-[#57534E] font-light leading-relaxed">
              Situated in the heart of Raipur at Ambuja Mall, Nailashes is created for those who consider nail art and lash extensions essential self-care rituals rather than an afterthought.
            </p>
          </motion.div>
        </div>

        {/* 4 Pillars Grid with Staggered Scroll Rise */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD8] hover:border-[#C58B6F] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E4C3B2] flex items-center justify-center text-[#B27558] shadow-xs mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#C58B6F]" />
                  </div>
                  <span className="text-[11px] font-bold text-[#8C5D42] tracking-wider uppercase block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFD8]/60 flex items-center gap-1.5 text-xs font-semibold text-[#B27558]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C58B6F]" />
                  <span>Guaranteed Standards</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Highlights Counter Bar with Scroll Float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FAF5EE] via-white to-[#FAF5EE] border border-[#E4C3B2] grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xs"
        >
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">10,000+</div>
            <div className="text-xs text-[#78716C] uppercase tracking-wider font-semibold mt-1">Nails Sculpted</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">4.9 ★</div>
            <div className="text-xs text-[#78716C] uppercase tracking-wider font-semibold mt-1">Google & Walk-in Rating</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">500+</div>
            <div className="text-xs text-[#78716C] uppercase tracking-wider font-semibold mt-1">Gel Shades & Art Charms</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">100%</div>
            <div className="text-xs text-[#78716C] uppercase tracking-wider font-semibold mt-1">Hygiene Certified</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
