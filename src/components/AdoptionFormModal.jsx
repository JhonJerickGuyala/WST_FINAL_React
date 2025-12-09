import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, FileText, User, Mail, MapPin, Phone } from 'lucide-react';

const AdoptionFormModal = ({
  selectedCat,
  customerInfo,
  ageError,
  handleInputChange,
  handleAgeBlur,
  handleFormSubmit,
  setShowAdoptionForm,
  setSelectedCat,
  setCustomerInfo,
  setAgeError
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setShowAdoptionForm(false);
    setSelectedCat(null);
    setCustomerInfo({ name: '', age: '', contactNumber: '', email: '', address: '', reason: '' });
    setAgeError('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Updated Header - Simple & Clean */}
        <div className="bg-white px-6 py-3 border-b border-stone-100 flex justify-between items-center">
          <div>
            <h2 className="text-md md:text-2xl font-black text-stone-800">Adoption Application</h2>
            <p className="text-stone-500 text-xs">Please fill out the form below</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-all text-stone-500 hover:text-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
          <style>{`
            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #fbbf24; border-radius: 20px; }
          `}</style>
          
          {/* FIX: REDESIGNED CAT PROFILE SUMMARY */}
          {/* Naka-center na at mas malaki ang image para mukhang ID/Profile */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-amber-200 to-orange-200 opacity-20"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 p-1 bg-white rounded-full shadow-md mb-3">
                <img 
                  src={selectedCat.image} 
                  alt={selectedCat.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-black text-stone-800 mb-1">{selectedCat.name}</h3>
              <div className="flex items-center gap-2 text-sm font-bold text-stone-500 bg-white/60 px-3 py-1 rounded-full border border-stone-200">
                <span>{selectedCat.breed}</span>
                <span>•</span>
                <span>{selectedCat.age} {selectedCat.age === 1 ? 'Year' : 'Years'} Old</span>
              </div>
            </div>
          </div>

          {/* Requirements Box */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
              <AlertCircle className="w-4 h-4" /> Requirements Checklist
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-blue-100 text-xs font-bold text-blue-700">
                <CheckCircle className="w-4 h-4 text-green-500" /> 18+ Years Old
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-blue-100 text-xs font-bold text-blue-700">
                <CheckCircle className="w-4 h-4 text-green-500" /> Valid ID
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-blue-100 text-xs font-bold text-blue-700">
                <CheckCircle className="w-4 h-4 text-green-500" /> Stable Home
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-bold text-stone-800 border-b border-stone-100 pb-2">Personal Information</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-600 ml-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3.5 text-stone-400" />
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all font-medium text-sm"
                      placeholder="Juan Dela Cruz"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-600 ml-1">Age *</label>
                  <input
                    type="number"
                    name="age"
                    value={customerInfo.age}
                    onChange={handleInputChange}
                    onBlur={handleAgeBlur}
                    className={`w-full px-4 py-3 bg-stone-50 border rounded-xl focus:outline-none focus:ring-2 transition-all font-medium text-sm ${
                      ageError 
                      ? 'border-red-300 focus:ring-red-200' 
                      : 'border-stone-200 focus:ring-amber-500/50'
                    }`}
                    placeholder="25"
                    min="1"
                    max="120"
                    required
                  />
                  {ageError && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{ageError}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-600 ml-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3.5 text-stone-400" />
                    <input
                      type="tel"
                      name="contactNumber"
                      value={customerInfo.contactNumber}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all font-medium text-sm"
                      placeholder="0912 345 6789"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-600 ml-1">Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3.5 text-stone-400" />
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email || ''}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all font-medium text-sm"
                      placeholder="juan@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-600 ml-1">Address *</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-3.5 text-stone-400" />
                  <textarea
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none font-medium text-sm"
                    placeholder="Complete Address"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-600 ml-1">Reason for Adopting *</label>
                <textarea
                  name="reason"
                  value={customerInfo.reason}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none font-medium text-sm"
                  placeholder="Tell us why you're the perfect match..."
                  required
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-0.5 w-4 h-4 rounded border-stone-300 text-amber-500 focus:ring-amber-500 cursor-pointer accent-amber-500"
              />
              <label htmlFor="terms" className="text-xs text-stone-600 font-medium cursor-pointer leading-relaxed">
                I agree to the adoption terms and promise to provide a loving home for <span className="font-bold text-amber-600">{selectedCat.name}</span>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-lg"
            >
              <span>Submit Application</span>
              <FileText className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdoptionFormModal;