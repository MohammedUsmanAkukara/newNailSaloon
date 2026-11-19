import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Diamond, Heart, Gem } from 'lucide-react';

export const ScrollMarquee = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Dynamic parallax offset based on scroll speed
  const xLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const xRight = useTransform(scrollYProgress, [0, 1], ['-18%', '0%']);

  const words = [
    'Sculpted Gel Extensions',
    'Cat-Eye Velvet Art',
    'Russian Volume Lashes',
    'Ambuja Mall Raipur',
    'Glazed Chrome Tips',
    'Hospital-Grade Sterilization',
    'Keratin Lash Lift',
    'Bridal Luxury Suite',
    'Zero Natural Damage',
    '500+ Curated Hues'
  ];

  return (
    <section ref={containerRef} className="py-12 bg-[#1C1917] text-[#FAF8F5] overflow-hidden relative border-y border-[#3B291A]">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#D8BD8A_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Track 1: Moving Left with Scroll Reactive Boost */}
      <motion.div style={{ x: xLeft }} className="flex items-center gap-6 whitespace-nowrap mb-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 text-sm sm:text-base font-serif uppercase tracking-[0.22em] text-[#E4C3B2]">
            {words.map((word, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-white transition-colors cursor-default">
                  {word}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#D8BD8A] flex-shrink-0" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Track 2: Moving Right with Counter Scroll Parallax */}
      <motion.div style={{ x: xRight }} className="flex items-center gap-6 whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 text-xs sm:text-sm font-sans uppercase tracking-[0.28em] text-[#A8A29E]">
            {words.slice().reverse().map((word, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-[#D8BD8A] transition-colors cursor-default">
                  {word}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C58B6F] flex-shrink-0" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

