import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-10 -left-10 text-[10rem] text-amber-200 opacity-30 rotate-12 animate-pulse-slow">🐱</div>
        <div className="absolute top-20 -right-10 text-[8rem] text-orange-200 opacity-30 -rotate-12 animate-float">🐾</div>
        <div className="absolute bottom-0 left-10 text-[9rem] text-rose-200 opacity-30 rotate-6 animate-bounce-slow">🧡</div>
        
        <div className="absolute top-1/4 right-1/4 text-6xl text-amber-300 opacity-20 rotate-45">✨</div>
        <div className="absolute top-1/3 left-10 text-7xl text-orange-300 opacity-20 -rotate-12">🐾</div>
        <div className="absolute bottom-1/3 right-10 text-6xl text-rose-300 opacity-20 rotate-12">🐱</div>
        <div className="absolute top-32 left-1/3 text-5xl text-amber-300 opacity-20 rotate-90">🐾</div>
        
        <div className="absolute top-10 right-1/3 text-4xl text-stone-300 opacity-40">✨</div>
        <div className="absolute bottom-20 right-1/3 text-5xl text-orange-200 opacity-30 rotate-180">🐾</div>
        <div className="absolute top-1/2 left-1/4 text-4xl text-rose-200 opacity-30">🧡</div>
        <div className="absolute bottom-10 left-1/3 text-4xl text-amber-200 opacity-40 -rotate-45">✨</div>
        <div className="absolute top-40 right-1/2 text-3xl text-stone-300 opacity-30">🐾</div>
        <div className="absolute bottom-1/4 left-1/2 text-5xl text-orange-200 opacity-20 rotate-12">🐱</div>
        <div className="absolute top-5 right-20 text-4xl text-rose-300 opacity-20">🧡</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header - Centered vertically due to min-h-screen flex */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border-2 border-amber-100 shadow-sm mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-stone-700 font-bold tracking-wide">Ready for Adoption</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-stone-800 leading-tight drop-shadow-sm">
            Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 pb-4">
              Purrfect Cat Companion
            </span>
          </h1>
          
          <p className="text-stone-600 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            Give a rescue cat a loving home. Scroll down to browse our available cats and start your adoption journey today.
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;