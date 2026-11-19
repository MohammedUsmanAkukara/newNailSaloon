import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Clock, 
  Check, 
  Calendar, 
  Flame, 
  Gem, 
  ArrowRight
} from 'lucide-react';
import { services, categories } from '../data/servicesData';

export const ServicesGrid = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Motion */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E4C3B2]/60 shadow-xs mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#C58B6F]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8C5D42]">
              Menu of Treatments
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight"
          >
            Artisan Nail & Lash Menu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#57534E] font-light leading-relaxed"
          >
            Discover our curated catalog of bespoke nail extensions, restorative manicures, Russian volume lashes, and regal bridal packages crafted in Ambuja Mall, Raipur.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'gold-gradient-btn text-white shadow-md scale-105'
                    : 'bg-white hover:bg-[#F3EFEA] text-[#57534E] border border-[#E8DFD8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Services Cards Grid with Staggered Scroll Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-[#E8DFD8] hover:border-[#C58B6F]/80 shadow-sm hover:shadow-2xl transition-all duration-400 group"
              >
                {/* Card Top Image & Badges */}
                <div>
                  <div className="relative h-60 overflow-hidden bg-[#F3EFEA]">
                    <img
                      src={service.image}
                      alt={`${service.title} at Nailashes Raipur`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C1917]/90 text-[#D8BD8A] text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md border border-[#D8BD8A]/40 shadow-sm">
                        <Flame className="w-3.5 h-3.5 text-[#D8BD8A]" />
                        <span>Most Popular</span>
                      </div>
                    )}

                    {/* Price Tag in Bottom Left of image */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[11px] font-medium tracking-wider uppercase text-[#F3DFD5]">
                          Starting from
                        </span>
                        <div className="text-2xl font-serif font-bold text-white leading-none">
                          {service.price}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#FAF8F5]">
                        <Clock className="w-3 h-3 text-[#D8BD8A]" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Info Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-[#1C1917] group-hover:text-[#B27558] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-[#8C5D42] mt-0.5 mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-[#57534E] leading-relaxed line-clamp-3 mb-5">
                      {service.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 pt-2 border-t border-[#F3EFEA]">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#44403C]">
                          <span className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded-full bg-[#FAF5EE] text-[#B27558] border border-[#E4C3B2] flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectServiceForBooking(service)}
                    className="w-full py-3.5 rounded-xl bg-white hover:bg-[#FAF5EE] text-[#1C1917] hover:text-[#B27558] border border-[#E8DFD8] hover:border-[#C58B6F] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all group-hover:shadow-md cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C58B6F]" />
                    <span>Book This Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Nail Art Notice Banner with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#E4C3B2] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FAF5EE] border border-[#E4C3B2] flex items-center justify-center text-[#B27558] flex-shrink-0">
              <Gem className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                Have a Custom Pinterest or Instagram Design in Mind?
              </h4>
              <p className="text-xs sm:text-sm text-[#78716C] mt-0.5">
                Our artists can recreate any reference photo. Bring your inspiration or message it to us!
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919178692254?text=Hi%20Nailashes%20Raipur%2C%20I%20have%20a%20reference%20photo%20for%20nail%20art.%20Can%20you%20help%20me%20with%20pricing%20and%20availability%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-btn px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 transition-all"
          >
            <span>Send Inspiration Photo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
