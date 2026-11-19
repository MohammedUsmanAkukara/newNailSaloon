import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Navigation, 
  Car, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { studioInfo } from '../data/studioData';

export const LocationAndHours = () => {
  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4C3B2] shadow-xs text-xs font-semibold text-[#8C5D42] uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C58B6F]" />
            Find Us in Raipur
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
            Visit Our Boutique Studio
          </h2>
          <p className="mt-3 text-base text-[#57534E] font-light">
            Conveniently situated in Raipur’s favorite shopping and lifestyle destination—Ambuja Mall, Vidhan Sabha Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address & Mall Guidance Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#E8DFD8] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF5EE] border border-[#E4C3B2] flex items-center justify-center text-[#B27558] flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#C58B6F]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    Nailashes Raipur
                  </h3>
                  <p className="text-xs font-semibold text-[#8C5D42] uppercase tracking-wider mt-0.5">
                    Ambuja Mall • Lower Ground
                  </p>
                  <p className="text-sm text-[#57534E] mt-3 leading-relaxed">
                    <strong>Shop No.63, Lower Ground Floor</strong><br />
                    Ambuja Mall, Vidhan Sabha Road,<br />
                    Raipur, Chhattisgarh 492014
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#F3EFEA] flex items-center gap-3 text-xs text-[#78716C]">
                <Car className="w-4 h-4 text-[#C58B6F] flex-shrink-0" />
                <span>Ample basement parking & mall valet service available.</span>
              </div>
            </div>

            {/* Hours & Contact Info Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#E8DFD8] shadow-sm space-y-5">
              
              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF5EE] border border-[#E4C3B2] flex items-center justify-center text-[#B27558] flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#C58B6F]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                    Operating Hours
                  </h4>
                  <div className="text-sm text-[#44403C] mt-1 space-y-0.5">
                    <p className="font-semibold text-[#1C1917]">
                      Monday – Sunday (All 7 Days)
                    </p>
                    <p className="text-xs text-[#78716C]">
                      10:00 AM – 9:00 PM (Last slot at 8:00 PM)
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${studioInfo.phoneRaw}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-white border border-[#D8BD8A] hover:bg-[#FAF5EE] text-[#1C1917] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C58B6F]" />
                  <span>Call {studioInfo.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${studioInfo.whatsappRaw}?text=Hi%20Nailashes%20Raipur%2C%20I%20am%20looking%20for%20directions%20or%20booking%20help`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 hover:bg-[#22C55E]/20 text-[#15803D] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#22C55E]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <a
                href={studioInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl gold-gradient-btn text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

            </div>

          </div>

          {/* Right Embedded Interactive Map (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white min-h-[420px] relative">
            <iframe
              title="Nailashes Raipur at Ambuja Mall Location Map"
              src={studioInfo.googleMapsEmbed}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay Map Badge */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DFD8] shadow-md max-w-xs pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping" />
                <span className="text-xs font-bold text-[#1C1917]">Nailashes Studio Open Now</span>
              </div>
              <p className="text-[11px] text-[#78716C] mt-1 leading-tight">
                Lower Ground Floor, Shop 63, Ambuja Mall, Raipur
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

