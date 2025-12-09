import React from 'react';
import { Filter, X } from 'lucide-react';

const FilterBar = ({ filters, onFilterChange, colorPatterns }) => {
  const hasActiveFilters = filters.colorPattern || filters.age || filters.gender;

  return (
    <div className="space-y-4 md:space-y-6">
      
      {/* Title - Compact on Mobile */}
      <div className="text-center space-y-1">
        <div className="flex items-center justify-center gap-2 text-stone-700">
          <Filter className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
          <h2 className="text-xl md:text-3xl font-black text-stone-800">
            Filter Cats
          </h2>
        </div>
        <p className="text-stone-500 text-xs md:text-sm">
          Narrow down your search
        </p>
      </div>

      {/* Filter Controls - 2 Columns on Mobile, 4 on Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        
        {/* Color Pattern */}
        <div className="space-y-1">
          <label className="block text-xs font-bold text-stone-700 ml-1">
            Color
          </label>
          <select
            value={filters.colorPattern}
            onChange={(e) => onFilterChange('colorPattern', e.target.value)}
            className="w-full px-3 py-2 md:px-4 md:py-3 text-sm border-2 border-stone-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-stone-700 bg-white cursor-pointer font-medium"
          >
            <option value="">All</option>
            {colorPatterns && colorPatterns.map(pattern => (
              <option key={pattern} value={pattern}>{pattern}</option>
            ))}
          </select>
        </div>

        {/* Age */}
        <div className="space-y-1">
          <label className="block text-xs font-bold text-stone-700 ml-1">
            Age
          </label>
          <select
            value={filters.age}
            onChange={(e) => onFilterChange('age', e.target.value)}
            className="w-full px-3 py-2 md:px-4 md:py-3 text-sm border-2 border-stone-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-stone-700 bg-white cursor-pointer font-medium"
          >
            <option value="">Any</option>
            <option value="0-1">Kitten</option>
            <option value="2-4">Young</option>
            <option value="5+">Adult</option>
          </select>
        </div>

        {/* Gender */}
        <div className="space-y-1">
          <label className="block text-xs font-bold text-stone-700 ml-1">
            Gender
          </label>
          <select
            value={filters.gender}
            onChange={(e) => onFilterChange('gender', e.target.value)}
            className="w-full px-3 py-2 md:px-4 md:py-3 text-sm border-2 border-stone-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-stone-700 bg-white cursor-pointer font-medium"
          >
            <option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Clear Button - Spans full width on mobile if needed, or fits in grid */}
        <div className="flex items-end col-span-1 md:col-span-1">
          <button
            onClick={() => onFilterChange('clear')}
            disabled={!hasActiveFilters}
            className={`w-full px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-2 h-[38px] md:h-[50px] ${
              hasActiveFilters
                ? 'bg-stone-800 hover:bg-stone-900 text-white shadow-md hover:shadow-lg active:scale-95'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
          >
            <X className="w-4 h-4" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Active Filters Display (Tiny Tags) */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 items-center pt-2 border-t border-stone-200">
          <span className="text-xs text-stone-500 font-semibold">Filters:</span>
          
          {filters.colorPattern && (
            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-2 py-1 rounded-md text-xs font-bold border border-amber-200">
              {filters.colorPattern}
              <button onClick={() => onFilterChange('colorPattern', '')}><X className="w-3 h-3" /></button>
            </span>
          )}
          
          {filters.age && (
            <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-bold border border-blue-200">
              {filters.age === '0-1' ? 'Kitten' : filters.age === '2-4' ? 'Young' : 'Adult'}
              <button onClick={() => onFilterChange('age', '')}><X className="w-3 h-3" /></button>
            </span>
          )}
          
          {filters.gender && (
            <span className="inline-flex items-center gap-1 bg-pink-100 text-pink-700 px-2 py-1 rounded-md text-xs font-bold border border-pink-200">
              {filters.gender}
              <button onClick={() => onFilterChange('gender', '')}><X className="w-3 h-3" /></button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterBar;