import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { featuredStyles } from '../data/stylesData';

export const FeaturedScroll = ({ onSelectStyle }) => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  
  // Parallax subtle horizontal drift on scroll
  const scrollTrackX = useTransform(smoothProgress, [0, 1], ['25px', '-25px']);
  const titleY = useTransform(smoothProgress, [0, 1], ['30px', '-15px']);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="py-24 bg-[#FAF8F5] relative overflow-hidden border-y border-[#E8DFD8]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div style={{ y: titleY }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFEA] border border-[#E4C3B2]/50 text-xs font-semibold text-[#8C5D42] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C58B6F]" />
              Artistic Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
              Featured Nail Art & Lash Styles
            </h2>
            <p className="text-base text-[#57534E] mt-2 max-w-xl font-light">
              Explore our most requested couture sets in Raipur—hand-painted with precision, glazed with premium chrome powders, and sculpted to perfection.
            </p>
          </motion.div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous styles"
              className="w-12 h-12 rounded-full border border-[#D8BD8A]/60 bg-white hover:bg-[#FAF5EE] text-[#292524] hover:text-[#B27558] flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next styles"
              className="w-12 h-12 rounded-full border border-[#D8BD8A]/60 bg-white hover:bg-[#FAF5EE] text-[#292524] hover:text-[#B27558] flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track with Scroll Parallax */}
      <motion.div
        style={{ x: scrollTrackX }}
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-8 scroll-smooth snap-x snap-mandatory"
      >
        {featuredStyles.map((style, index) => (
          <motion.div
            key={style.id}
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="flex-shrink-0 w-[290px] sm:w-[320px] snap-start group relative rounded-2xl overflow-hidden bg-white border border-[#E8DFD8] shadow-sm hover:shadow-[0_22px_45px_-10px_rgba(197,139,111,0.25)] transition-all duration-300 cursor-pointer"
            onClick={() => onSelectStyle && onSelectStyle(style)}
          >
            {/* Image Container with Zoom effect */}
            <div className="relative h-[350px] overflow-hidden bg-[#FAF8F5]">
              <img
                src={style.image}
                alt={`${style.title} - Nailashes Raipur`}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/95 text-[#292524] shadow-md backdrop-blur-sm border border-[#E8DFD8]">
                  {style.tag}
                </span>
              </div>

              {/* Finish Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase bg-black/60 text-white backdrop-blur-md">
                  {style.finish}
                </span>
              </div>

              {/* Bottom text info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#D8BD8A]">
                  {style.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-0.5 group-hover:text-[#F3DFD5] transition-colors flex items-center justify-between">
                  <span>{style.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#D8BD8A]" />
                </h3>
              </div>
            </div>

            {/* Description & Action Footer */}
            <div className="p-4 bg-white flex flex-col justify-between">
              <p className="text-xs text-[#57534E] leading-relaxed line-clamp-2">
                {style.description}
              </p>
              <div className="mt-3 pt-3 border-t border-[#F3EFEA] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#8C5D42]">
                  Available at Ambuja Mall
                </span>
                <span className="text-xs font-semibold text-[#B27558] group-hover:underline flex items-center gap-1">
                  Book Style &rarr;
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
