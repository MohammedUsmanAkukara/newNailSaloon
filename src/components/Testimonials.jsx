import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Quote, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../data/testimonialsData';

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4C3B2] shadow-xs text-xs font-semibold text-[#8C5D42] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C58B6F]" />
            Client Love & Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
            Praised by Raipur’s Discerning Clients
          </h2>
          <p className="mt-3 text-base text-[#57534E] font-light">
            Real stories from clients who trust us with their wedding glam, monthly refills, and lash rituals at Ambuja Mall.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-[#E8DFD8] shadow-xs hover:shadow-lg transition-all relative"
            >
              <div>
                {/* Top Stars & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D8BD8A] text-[#D8BD8A]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E4C3B2]/60" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#F3EFEA] flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#E4C3B2]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#1C1917] flex items-center gap-1">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  </h4>
                  <div className="text-[11px] text-[#8C5D42] font-medium leading-tight">
                    {review.service}
                  </div>
                  <div className="text-[10px] text-[#78716C]">
                    {review.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#E4C3B2] shadow-sm">
            <span className="font-serif text-lg font-bold text-[#1C1917]">4.9 out of 5</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D8BD8A] text-[#D8BD8A]" />
              ))}
            </div>
            <span className="text-xs text-[#78716C] border-l border-[#E8DFD8] pl-3 font-medium">
              Over 500+ Happy Guests at Ambuja Mall
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

