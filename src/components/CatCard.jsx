import { Clock, Calendar, Palette, ArrowUpRight } from 'lucide-react';

const CatCard = ({ cat, onViewDetails, isAdopted }) => {
  const genderColor = cat.gender === 'Male' 
    ? 'bg-blue-50 text-blue-600 border-blue-100' 
    : 'bg-pink-50 text-pink-600 border-pink-100';

  return (
    <div 
      onClick={() => onViewDetails(cat)}
      className="group relative bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img 
          src={cat.image} 
          alt={cat.name}
          className="w-full h-full object-cover"
        />
        
        {/* Status Badge (Pending) */}
        {isAdopted && (
          <div className="absolute top-3 right-3 z-20 bg-amber-500/90 backdrop-blur-sm text-white text-[10px] md:text-xs px-2.5 py-1 rounded-full font-bold shadow-sm flex items-center gap-1 border border-white/20">
            <Clock className="w-3 h-3" />
            <span>Pending</span>
          </div>
        )}
        
        {/* Hover Overlay with Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-white text-stone-800 px-5 py-2 rounded-full font-bold text-xs md:text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-lg">
            <span>View Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg md:text-xl font-black text-stone-800 group-hover:text-amber-600 transition-colors leading-tight">
              {cat.name}
            </h3>
            <p className="text-xs md:text-sm text-stone-500 font-medium mt-0.5">{cat.breed || 'Domestic Cat'}</p>
          </div>
          
          <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold border ${genderColor}`}>
            {cat.gender}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-100 px-2.5 py-1 rounded-lg text-[10px] md:text-xs font-semibold text-stone-600">
            <Calendar className="w-3 h-3 text-amber-500" />
            <span>{cat.age} {cat.age === 1 ? 'Year' : 'Years'}</span>
          </div>
          
          <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-100 px-2.5 py-1 rounded-lg text-[10px] md:text-xs font-semibold text-stone-600">
            <Palette className="w-3 h-3 text-amber-500" />
            <span>{cat.colorPattern}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;