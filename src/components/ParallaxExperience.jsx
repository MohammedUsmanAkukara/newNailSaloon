import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export const ParallaxExperience = ({ onOpenBooking }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Background moves at different parallax speed
  const bgY = useTransform(scrollYProgress, [0, 1], ['-18%', '18%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['40px', '-40px']);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden my-12"
    >
      {/* Parallax Background Image with Dark Vignette */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-24 -bottom-24 w-full h-[140%] z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1600&auto=format&fit=crop"
          alt="Nailashes luxury salon experience background"
          className="w-full h-full object-cover object-center filter brightness-[0.4] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-black/40 to-[#FAF8F5]/80" />
      </motion.div>

      {/* Floating Parallax Content Card */}
      <motion.div
        style={{ scale: cardScale, y: textY }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass-card backdrop-blur-xl bg-black/40 border border-[#D8BD8A]/40 rounded-3xl p-8 sm:p-14 shadow-2xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D8BD8A]/50 text-xs font-semibold text-[#D8BD8A] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Ambuja Mall Raipur • Studio Experience
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            "Your nails and lashes are the subtle signature of your confidence."
          </h2>

          <p className="text-sm sm:text-base text-[#E7E5E4] max-w-2xl mx-auto font-light leading-relaxed">
            Step away from the everyday rush into Raipur's serene sanctuary for bespoke nail sculpting, custom chrome finishes, and featherlight Russian lash extensions.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-btn text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+919178692254"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs uppercase tracking-widest font-semibold text-white flex items-center justify-center transition-all"
            >
              Call +91 91786 92254
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

