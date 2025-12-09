import React from 'react';
import { X, Heart, Shield, Users } from 'lucide-react';

const AboutUsModal = ({ setShowAboutUs }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">

      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setShowAboutUs(false)}
      />

      {/* Added 'custom-scrollbar' class here */}
      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col custom-scrollbar">

        {/* Added CSS for the scrollbar */}
        <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 8px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; margin: 10px 0; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #fbbf24; border-radius: 20px; border: 3px solid white; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #f59e0b; }
        `}</style>

        {/* Close Button */}
        <button
          onClick={() => setShowAboutUs(false)}
          className="absolute top-4 right-4 z-10 p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-all"
        >
          <X className="w-5 h-5 text-stone-600" />
        </button>

        {/* Clean Header */}
        <div className="p-8 pb-4 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-600">
            <Heart className="w-8 h-8" fill="currentColor" />
          </div>
          <h2 className="text-3xl font-black text-stone-800">About Our Mission</h2>
          <p className="text-stone-500 font-medium mt-2">Connecting hearts, one paw at a time.</p>
        </div>

        {/* Content */}
        <div className="p-8 pt-2 space-y-6">
          
          <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-5 flex gap-4">
            <Heart className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-stone-800 mb-1">Our Purpose</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We are dedicated to rescuing cats and finding them loving forever homes. We believe every cat deserves a second chance at happiness.
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 flex gap-4">
            <Shield className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-stone-800 mb-1">Legal Compliance</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Fully compliant with <span className="font-bold text-blue-700">RA 8485</span> & <span className="font-bold text-blue-700">RA 10631</span> (Animal Welfare Act). We ensure ethical treatment in all our processes.
              </p>
            </div>
          </div>

          <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-5 flex gap-4">
            <Users className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-stone-800 mb-1">Community First</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We carefully screen adopters to ensure the perfect match, creating safe and lasting bonds for both the family and the feline.
              </p>
            </div>
          </div>

          <button 
            onClick={() => setShowAboutUs(false)}
            className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 py-4 rounded-xl font-bold transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsModal;