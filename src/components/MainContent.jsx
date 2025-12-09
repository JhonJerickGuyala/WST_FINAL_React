import React from 'react';
import CatCard from './CatCard';
import FilterBar from './FilterBar';
import { Search, Sparkles, Heart, CheckCircle, AlertCircle } from 'lucide-react';

const MainContent = ({ 
  filteredCats, 
  catData, 
  onViewDetails, 
  isCatAdopted, 
  adoptedCats, 
  filters, 
  handleFilterChange, 
  colorPatterns 
}) => {

  const adoptionProgress = (adoptedCats.length / 2) * 100;
  const isMaxReached = adoptedCats.length >= 2;

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-12 bg-stone-50/30">
      
      <div className="max-w-7xl mx-auto">

        {/* --- CONTROL SECTION --- */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-8 lg:mb-10 items-start">
          
          {/* 1. FILTER SECTION (ORDER-1: Top on Mobile, Left on Desktop) */}
          {/* FIX: Changed order-2 to order-1 */}
          <div className="w-full lg:w-3/4 order-1">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 border border-stone-100 h-full flex flex-col justify-center">
              <FilterBar 
                filters={filters}
                onFilterChange={handleFilterChange}
                colorPatterns={colorPatterns} 
              />
            </div>
          </div>

          {/* 2. RIGHT COLUMN (ORDER-2: Bottom on Mobile, Right on Desktop) */}
          {/* FIX: Changed order-1 to order-2 */}
          <div className="w-full lg:w-1/4 flex flex-col gap-4 order-2">
            
            {/* A. ADOPTION PROGRESS CARD */}
            <div className="bg-white rounded-3xl shadow-lg p-4 md:p-5 border border-stone-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                    isMaxReached ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-green-400 to-emerald-500'
                  }`}>
                    <Heart className="w-5 h-5 text-white" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider mb-0.5">Requests</p>
                    <p className="text-xl font-black text-stone-800 leading-none">
                      <span className={isMaxReached ? 'text-amber-600' : 'text-emerald-600'}>
                        {adoptedCats.length}
                      </span>
                      <span className="text-stone-300 text-sm">/2</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full bg-stone-100 rounded-full h-2 overflow-hidden border border-stone-200 mb-2">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ease-out ${
                    isMaxReached 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                      : 'bg-gradient-to-r from-green-500 to-emerald-500'
                  }`}
                  style={{ width: `${adoptionProgress}%` }}
                ></div>
              </div>
              
              <div className="text-right">
                 {isMaxReached ? (
                    <span className="text-[10px] font-bold text-amber-600 flex items-center justify-end gap-1">
                      <AlertCircle className="w-3 h-3" /> Limit Reached
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-green-600 flex items-center justify-end gap-1">
                      <CheckCircle className="w-3 h-3" /> Available
                    </span>
                  )}
              </div>
            </div>

            {/* B. SHOWING COUNT (Nasa ilalim ng Progress) */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-3 flex items-center justify-center gap-2">
              <Search className="w-4 h-4 text-amber-500" />
              <p className="text-stone-600 text-xs font-bold">
                Showing <span className="text-amber-600">{filteredCats.length}</span> of {catData.length}
              </p>
            </div>

          </div>
        </div>

        {/* --- CAT GRID --- */}
        {filteredCats.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {filteredCats.map(cat => (
              <CatCard 
                key={cat.id}
                cat={cat}
                onViewDetails={onViewDetails}
                isAdopted={isCatAdopted(cat.id)}
              />
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                  <div className="text-5xl">🐱</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-stone-800 mb-2">
                No cats found
              </h3>
              <p className="text-stone-500 text-sm md:text-base mb-6">
                Try adjusting your filters to find more furry friends.
              </p>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <h4 className="font-bold text-stone-800 text-sm">Suggestions:</h4>
                </div>
                <ul className="space-y-2 text-xs text-stone-600 font-medium">
                  <li>• Clear filters to see all cats</li>
                  <li>• Try a different age range</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;