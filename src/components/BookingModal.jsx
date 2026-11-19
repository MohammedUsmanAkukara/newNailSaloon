import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Calendar, Clock, User, Phone, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { services } from '../data/servicesData';
import { studioInfo } from '../data/studioData';

export const BookingModal = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState({
    serviceId: defaultService?.id || services[0]?.id || '',
    date: '',
    timeSlot: '12:00 PM',
    fullName: '',
    phone: '',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const todayStr = new Date().toISOString().split('T')[0];
  const timeSlots = [
    '10:30 AM', '11:30 AM', '01:00 PM', '02:30 PM', 
    '04:00 PM', '05:30 PM', '07:00 PM', '08:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.date) {
      alert('Please fill in your name, phone number, and appointment date.');
      return;
    }

    const code = 'NL-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(code);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#C58B6F', '#D8BD8A', '#E4C3B2']
      });
    } catch {}

    const selectedServiceObj = services.find(s => s.id === formData.serviceId);
    const serviceName = selectedServiceObj ? selectedServiceObj.title : formData.serviceId;
    const msg = `Hi Nailashes Raipur! I'd like to book an appointment:\nRef: ${code}\nService: ${serviceName}\nDate: ${formData.date} at ${formData.timeSlot}\nName: ${formData.fullName}\nPhone: ${formData.phone}${formData.notes ? `\nNotes: ${formData.notes}` : ''}`;

    window.open(`https://wa.me/${studioInfo.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8DFD8] my-8"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#E8DFD8] text-[#57534E] hover:text-[#1C1917] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C5D42] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C58B6F]" />
                Direct Studio Reservation
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Quick Appointment Booking
              </h3>
              <p className="text-xs text-[#57534E] mt-1 mb-6">
                Ambuja Mall, Lower Ground, Shop 63 • Instant WhatsApp Confirmation
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-1.5">
                    Select Treatment
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#D8BD8A]/60 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-[#C58B6F]/20"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C58B6F]" /> Date
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8BD8A]/60 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#C58B6F]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-1.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C58B6F]" /> Time
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8BD8A]/60 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-[#C58B6F]/20"
                    >
                      {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-1.5 flex items-center gap-1">
                    <User className="w-3 h-3 text-[#C58B6F]" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8BD8A]/60 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#C58B6F]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-1.5 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#C58B6F]" /> WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8BD8A]/60 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#C58B6F]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#44403C] mb-1.5">
                    Special Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Reference design or request..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D8BD8A]/60 text-xs outline-none focus:ring-2 focus:ring-[#C58B6F]/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl gold-gradient-btn text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reserve & Confirm on WhatsApp</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#1C1917]">
                Appointment Requested!
              </h4>
              <p className="text-xs text-[#57534E]">
                Reference ID: <span className="font-mono font-bold text-[#B27558]">{refId}</span>
              </p>
              <p className="text-xs text-[#57534E] max-w-xs mx-auto">
                We have opened WhatsApp to confirm your slot directly. We look forward to seeing you at Ambuja Mall!
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full bg-[#1C1917] text-white text-xs uppercase font-semibold tracking-wider cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

