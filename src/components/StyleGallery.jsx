import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Eye, Check } from 'lucide-react';

export const StyleGallery = ({ onSelectStyle }) => {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 101,
      title: 'Glazed Donut Almond Shape',
      category: 'nails',
      tag: 'Celebrity Trend',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=700&auto=format&fit=crop'
    },
    {
      id: 102,
      title: 'Wispy Russian Volume 5D',
      category: 'lashes',
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=700&auto=format&fit=crop'
    },
    {
      id: 103,
      title: 'Royal Bridal Gold Foil Inlay',
      category: 'bridal',
      tag: 'Wedding Favorite',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=700&auto=format&fit=crop'
    },
    {
      id: 104,
      title: 'Cat-Eye Emerald Magnetic',
      category: 'nails',
      tag: '3D Dimension',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=700&auto=format&fit=crop'
    },
    {
      id: 105,
      title: 'Classic Mink 1:1 Lash Set',
      category: 'lashes',
      tag: 'Natural Chic',
      image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=700&auto=format&fit=crop'
    },
    {
      id: 106,
      title: 'French Ombre Sculpted Coffin',
      category: 'nails',
      tag: 'Signature Clean',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=700&auto=format&fit=crop'
    }
  ];

  const filtered = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-20 bg-white border-t border-[#E8DFD8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EE] border border-[#E4C3B2] text-xs font-semibold text-[#8C5D42] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C58B6F]" />
              Instagram Lookbook
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917]">
              Crafted at Our Ambuja Mall Studio
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { id: 'all', label: 'All Looks' },
              { id: 'nails', label: 'Nail Sets' },
              { id: 'lashes', label: 'Lash Extensions' },
              { id: 'bridal', label: 'Bridal Art' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  filter === f.id
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#57534E] hover:bg-[#F3EFEA] border border-[#E8DFD8]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-[#F3EFEA] border border-[#E8DFD8] shadow-xs hover:shadow-xl transition-all cursor-pointer"
                onClick={() => onSelectStyle && onSelectStyle(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/95 text-[#292524] shadow-sm backdrop-blur-md">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-lg font-bold leading-tight group-hover:text-[#F3DFD5] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#D8BD8A] font-semibold">
                      Ambuja Mall Studio
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#D8BD8A] flex items-center gap-1">
                      Request Look &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

