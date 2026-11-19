import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  RefreshCw, 
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { services } from '../data/servicesData';
import { studioInfo } from '../data/studioData';

export const BookingSection = ({ preSelectedService, onClearPreselected }) => {
  const [formData, setFormData] = useState({
    serviceId: '',
    date: '',
    timeSlot: '11:30 AM',
    fullName: '',
    phone: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({
        ...prev,
        serviceId: preSelectedService.id
      }));
    }
  }, [preSelectedService]);

  // Set default minimum date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '10:30 AM', '11:30 AM', '01:00 PM', '02:30 PM', 
    '04:00 PM', '05:30 PM', '07:00 PM', '08:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.serviceId) errs.serviceId = 'Please select a treatment';
    if (!formData.date) errs.date = 'Please choose a date';
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const triggerConfettiCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C58B6F', '#D8BD8A', '#E4C3B2', '#FAF8F5']
      });
    } catch {
      // fallback safe
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const refCode = 'NL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);
    setIsSubmitted(true);
    triggerConfettiCelebration();

    // Construct WhatsApp message URL
    const selectedServiceObj = services.find(s => s.id === formData.serviceId);
    const serviceName = selectedServiceObj ? selectedServiceObj.title : formData.serviceId;
    const textMsg = `Hi Nailashes Raipur! I would like to confirm my appointment:\n\n*Reference:* ${refCode}\n*Service:* ${serviceName}\n*Date:* ${formData.date}\n*Time:* ${formData.timeSlot}\n*Client:* ${formData.fullName}\n*Phone:* ${formData.phone}${formData.notes ? `\n*Notes:* ${formData.notes}` : ''}\n\n*Studio Location:* Shop No.63, Lower Ground, Ambuja Mall, Raipur.`;

    const waUrl = `https://wa.me/${studioInfo.whatsappRaw}?text=${encodeURIComponent(textMsg)}`;
    
    // Automatically open WhatsApp in new tab for instant real-time confirmation
    window.open(waUrl, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    if (onClearPreselected) onClearPreselected();
    setFormData({
      serviceId: services[0]?.id || '',
      date: '',
      timeSlot: '11:30 AM',
      fullName: '',
      phone: '',
      notes: ''
    });
  };

  const currentSelectedService = services.find(s => s.id === formData.serviceId);

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F6F2EC] to-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#E4C3B2]/20 to-[#D8BD8A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4C3B2] shadow-xs text-xs font-semibold text-[#8C5D42] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C58B6F]" />
            Fast VIP Reservations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
            Book Your Pamper Session
          </h2>
          <p className="mt-3 text-base text-[#57534E] font-light">
            Select your preferred treatment, date, and time slot. We will immediately reserve your artist and confirm with you on WhatsApp.
          </p>
        </div>

        {/* Booking Card Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-[#E8DFD8] relative">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleFormSubmit}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Form Inputs (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-2">
                      1. Choose Treatment <span className="text-[#B27558]">*</span>
                    </label>
                    <select
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#D8BD8A]/60 focus:border-[#B27558] focus:ring-2 focus:ring-[#C58B6F]/20 text-[#1C1917] text-sm font-medium outline-none transition-all shadow-xs"
                    >
                      <option value="">-- Select a Treatment --</option>
                      <optgroup label="Nail Extensions & Art">
                        {services.filter(s => s.category === 'nails').map(s => (
                          <option key={s.id} value={s.id}>
                            {s.title} ({s.price} • {s.duration})
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Eyelash Services">
                        {services.filter(s => s.category === 'lashes').map(s => (
                          <option key={s.id} value={s.id}>
                            {s.title} ({s.price} • {s.duration})
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Bridal & Packages">
                        {services.filter(s => s.category === 'packages').map(s => (
                          <option key={s.id} value={s.id}>
                            {s.title} ({s.price} • {s.duration})
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    {errors.serviceId && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.serviceId}</p>
                    )}
                  </div>

                  {/* Date & Time Slot Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Date Picker */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-2 flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-[#C58B6F]" />
                        <span>2. Appointment Date <span className="text-[#B27558]">*</span></span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        min={todayStr}
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#D8BD8A]/60 focus:border-[#B27558] focus:ring-2 focus:ring-[#C58B6F]/20 text-[#1C1917] text-sm outline-none transition-all shadow-xs"
                      />
                      {errors.date && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.date}</p>
                      )}
                    </div>

                    {/* Time Slot */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-2 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C58B6F]" />
                        <span>3. Preferred Time Slot</span>
                      </label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#D8BD8A]/60 focus:border-[#B27558] focus:ring-2 focus:ring-[#C58B6F]/20 text-[#1C1917] text-sm font-medium outline-none transition-all shadow-xs"
                      >
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Client Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-2 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#C58B6F]" />
                        <span>4. Full Name <span className="text-[#B27558]">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="e.g. Priya Sharma"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#D8BD8A]/60 focus:border-[#B27558] focus:ring-2 focus:ring-[#C58B6F]/20 text-[#1C1917] text-sm outline-none transition-all shadow-xs"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-2 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#C58B6F]" />
                        <span>5. WhatsApp / Mobile Number <span className="text-[#B27558]">*</span></span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. 9178692254"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#D8BD8A]/60 focus:border-[#B27558] focus:ring-2 focus:ring-[#C58B6F]/20 text-[#1C1917] text-sm outline-none transition-all shadow-xs"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Custom Notes / Pinterest link */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-2">
                      6. Notes or Style References (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      placeholder="e.g. Looking for Almond shape french ombre, bringing wedding lehenga for color match..."
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8BD8A]/60 focus:border-[#B27558] focus:ring-2 focus:ring-[#C58B6F]/20 text-[#1C1917] text-sm outline-none transition-all shadow-xs resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl gold-gradient-btn text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                      <span>Confirm & Reserve via WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-[#78716C] text-center mt-2 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                      Zero prepayment required online. Pay securely at the studio.
                    </p>
                  </div>
                </div>

                {/* Right Summary Column (4 cols) */}
                <div className="lg:col-span-4 bg-white/90 p-6 rounded-2xl border border-[#E4C3B2]/80 shadow-sm space-y-5">
                  <h4 className="font-serif text-xl font-bold text-[#1C1917] border-b border-[#F3EFEA] pb-3">
                    Appointment Summary
                  </h4>

                  {currentSelectedService ? (
                    <div className="space-y-3">
                      <div className="relative rounded-xl overflow-hidden h-36 bg-[#F3EFEA]">
                        <img
                          src={currentSelectedService.image}
                          alt={currentSelectedService.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-2 left-3 right-3 text-white">
                          <p className="text-[10px] text-[#D8BD8A] uppercase tracking-wider font-semibold">
                            Selected
                          </p>
                          <p className="font-serif text-base font-bold leading-tight">
                            {currentSelectedService.title}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-xs text-[#57534E] pt-1">
                        <span>Price:</span>
                        <span className="font-bold text-[#1C1917] text-sm">{currentSelectedService.price}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-[#57534E]">
                        <span>Estimated Duration:</span>
                        <span className="font-semibold text-[#1C1917]">{currentSelectedService.duration}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-dashed border-[#D8BD8A] text-center text-xs text-[#78716C]">
                      Select a service to view estimated time and details.
                    </div>
                  )}

                  <div className="border-t border-[#F3EFEA] pt-4 space-y-2 text-xs text-[#57534E]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C58B6F] flex-shrink-0 mt-0.5" />
                      <span>Shop No.63, Lower Ground, Ambuja Mall, Raipur</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C58B6F] flex-shrink-0" />
                      <span>Studio Hours: 10:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#C58B6F] flex-shrink-0" />
                      <span>Direct Help: +91 91786 92254</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF5EE] border border-[#E4C3B2]/50 text-[11px] text-[#8C5D42] leading-relaxed">
                    ✨ <strong>Tip:</strong> Need a customized nail art quote? You can send your Pinterest inspiration photo directly to our WhatsApp after booking!
                  </div>
                </div>

              </motion.form>
            ) : (
              /* Success / Confirmed State */
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center max-w-xl mx-auto space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#22C55E] to-[#86EFAC] text-white flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FAF5EE] text-[#B27558] text-xs font-bold tracking-widest uppercase border border-[#E4C3B2]">
                    Reservation Requested
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-[#1C1917] mt-3">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-[#57534E] mt-2">
                    Your appointment reference code is <span className="font-mono font-bold text-[#B27558]">{bookingRef}</span>.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#E8DFD8] text-left space-y-3 shadow-xs">
                  <div className="flex justify-between items-center text-sm border-b border-[#F3EFEA] pb-2">
                    <span className="text-[#78716C]">Treatment:</span>
                    <span className="font-bold text-[#1C1917]">{currentSelectedService?.title || 'Custom Service'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-[#F3EFEA] pb-2">
                    <span className="text-[#78716C]">Date & Time:</span>
                    <span className="font-semibold text-[#1C1917]">{formData.date} at {formData.timeSlot}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-[#F3EFEA] pb-2">
                    <span className="text-[#78716C]">Studio Location:</span>
                    <span className="font-semibold text-[#1C1917]">Ambuja Mall, Lower Ground, Shop 63</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#78716C]">Client Contact:</span>
                    <span className="font-semibold text-[#1C1917]">{formData.phone}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${studioInfo.whatsappRaw}?text=${encodeURIComponent(`Hi Nailashes Raipur, I just reserved with reference code ${bookingRef} for ${formData.date} at ${formData.timeSlot}. Please confirm!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full gold-gradient-btn text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Re-open WhatsApp Chat</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-[#F3EFEA] border border-[#E8DFD8] text-xs uppercase tracking-wider font-semibold text-[#44403C] flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Book Another Service</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

