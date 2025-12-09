import React from 'react';
import { X, Heart, Clock, Activity, Scale, AlertCircle } from 'lucide-react';

const CatDetailsModal = ({ cat, onClose, onAdopt, isAdopted, maxAdoptionsReached }) => {
  
  const genderColor = cat.gender === 'Male'
    ? 'bg-blue-50 text-blue-700 border-blue-200'
    : 'bg-pink-50 text-pink-700 border-pink-200';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      {/* REMOVED: shadow-2xl (Para wala nang itim na anino sa likod) */}
      <div className="relative bg-white rounded-3xl w-full max-w-4xl h-[85vh] md:h-auto md:max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2.5 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full text-stone-500 hover:text-stone-900 shadow-sm border border-stone-100 transition-all transform hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Container */}
        <div className="relative w-full md:w-5/12 h-64 md:h-auto bg-stone-100 flex-shrink-0">
          <img 
            src={cat.image} 
            alt={cat.name}
            className="w-full h-full object-cover"
          />
          {isAdopted && (
            <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2 border border-white/20 backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span>Pending</span>
            </div>
          )}
          {/* Gradient Overlay for Mobile */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
        </div>

        {/* Right: Details Container */}
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-white relative">
          
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
            <style>{`
              .custom-scrollbar::-webkit-scrollbar { width: 6px; }
              .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
              .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #e7e5e4; border-radius: 10px; }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #d6d3d1; }
            `}</style>

            {/* Header Info */}
            <div className="mb-8 pr-16">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="text-3xl md:text-4xl font-black text-stone-800 tracking-tight">{cat.name}</h2>
                <span className={`text-xs px-3 py-1 rounded-full font-bold border uppercase tracking-wider flex-shrink-0 ${genderColor}`}>
                  {cat.gender}
                </span>
              </div>
              <p className="text-lg text-stone-500 font-medium">{cat.breed}</p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <div className="flex items-center gap-2 text-stone-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wide">Age</span>
                </div>
                <p className="text-xl font-bold text-stone-800">{cat.age} <span className="text-sm font-medium text-stone-500">{cat.age === 1 ? 'Year' : 'Years'}</span></p>
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <div className="flex items-center gap-2 text-stone-400 mb-1">
                  <Scale className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wide">Weight</span>
                </div>
                <p className="text-xl font-bold text-stone-800">{cat.weight || 'N/A'}</p>
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <div className="flex items-center gap-2 text-stone-400 mb-1">
                  <Activity className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wide">Health</span>
                </div>
                <p className="text-sm font-bold text-stone-800 truncate">{cat.health}</p>
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <div className="flex items-center gap-2 text-stone-400 mb-1">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wide">Color</span>
                </div>
                <p className="text-sm font-bold text-stone-800 truncate">{cat.colorPattern}</p>
              </div>
            </div>

            {/* Story & Personality */}
            <div className="space-y-8 mb-24">
              <div>
                <h3 className="text-sm font-black text-stone-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                  Personality
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.personality.split(',').map((trait, index) => (
                    <span key={index} className="bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold border border-amber-100">
                      {trait.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-black text-stone-800 uppercase tracking-widest mb-3">
                  About {cat.name}
                </h3>
                <p className="text-stone-600 leading-7 text-base">{cat.description}</p>
              </div>

              {cat.specialNeeds && cat.specialNeeds !== 'None' && (
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-blue-900 text-sm">Special Care Needed</h4>
                    <p className="text-sm text-blue-700 mt-0.5">{cat.specialNeeds}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Footer Button - REMOVED border-t and shadow lines */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-sm">
            <button
              onClick={() => onAdopt(cat.id, cat.name)}
              disabled={isAdopted || maxAdoptionsReached}
              className={`w-full py-4 rounded-xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform active:scale-[0.98] ${
                isAdopted || maxAdoptionsReached
                  ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white'
              }`}
            >
              {isAdopted ? (
                <> <Clock className="w-6 h-6" /> <span>Adoption Pending</span> </>
              ) : maxAdoptionsReached ? (
                <> <AlertCircle className="w-6 h-6" /> <span>Request Limit Reached</span> </>
              ) : (
                <> <Heart className="w-6 h-6 fill-current animate-pulse" /> <span>Adopt {cat.name}</span> </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CatDetailsModal;