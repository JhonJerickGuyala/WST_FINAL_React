import { MapPin, HelpCircle, Shield, AlertTriangle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-stone-50 to-amber-50/50 border-t border-stone-200 mt-20 pt-8 md:pt-16 pb-8 md:pb-10 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 text-[10rem] opacity-[0.02] rotate-12 select-none">🐾</div>
        <div className="absolute bottom-0 left-10 text-[8rem] opacity-[0.02] -rotate-12 select-none">🐾</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-16">
          
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shadow-sm border border-amber-200">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-stone-800">Our Location</h3>
            </div>
            
            <div className="pl-1 md:pl-2 space-y-3 md:space-y-4">
              <div className="text-stone-600 leading-relaxed text-sm md:text-base">
                <p className="font-bold text-stone-800">Purrfect Rescue Center</p>
                <p>Union Street, Barangay 5</p>
                <p>Balayan, Batangas</p>
                <p>4213, Philippines</p>
              </div>
              
              <div className="pt-3 md:pt-4 border-t border-stone-200">
                <p className="text-[10px] md:text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Operating Hours</p>
                <div className="space-y-1 text-xs md:text-sm font-medium text-stone-600">
                  <p className="flex justify-between max-w-[200px]"><span>Mon - Sat:</span> <span>9:00 AM - 6:00 PM</span></p>
                  <p className="flex justify-between max-w-[200px]"><span>Sunday:</span> <span>10:00 AM - 4:00 PM</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-stone-800">Frequently Asked</h3>
            </div>
            
            <div className="space-y-4 md:space-y-6 pl-1 md:pl-2">
              <div className="space-y-1">
                <p className="font-bold text-stone-800 text-xs md:text-sm">What are the adoption requirements?</p>
                <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
                  Must be at least 18 years old with valid government ID and proof of stable residence.
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="font-bold text-stone-800 text-xs md:text-sm">Is there an adoption fee?</p>
                <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
                  Yes, a minimal fee to cover veterinary costs, vaccinations, and initial supplies.
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="font-bold text-stone-800 text-xs md:text-sm">Why limit to two requests?</p>
                <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
                  To ensure each application receives proper attention and to select the most suitable adopter.
                </p>
              </div>
            </div>
          </div>

          {/* Animal Rights Section */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 shadow-sm border border-rose-100">
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-stone-800">Animal Rights in PH</h3>
            </div>
            
            <div className="space-y-3 md:space-y-4 pl-1 md:pl-2">
              <p className="text-xs md:text-sm font-medium text-stone-600">
                Animal welfare in the Philippines is protected by law:
              </p>
              
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <li className="flex items-center gap-2 text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span><span className="font-bold text-stone-800">RA 8485</span> - Animal Welfare Act of 1998</span>
                </li>
                <li className="flex items-center gap-2 text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span><span className="font-bold text-stone-800">RA 10631</span> - Amended Welfare Act</span>
                </li>
                <li className="flex items-center gap-2 text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span><span className="font-bold text-stone-800">RA 9482</span> - Anti-Rabies Act of 2007</span>
                </li>
              </ul>
              
              <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 md:p-4 flex gap-3 items-start mt-2">
                <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-rose-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-rose-800 text-[10px] md:text-xs uppercase mb-1">Important Notice</p>
                  <p className="text-[10px] md:text-xs text-rose-700 leading-relaxed">
                    Animal cruelty is punishable by law with fines up to ₱250,000 and imprisonment of up to 2 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-200 mb-6 md:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="text-center md:text-left">
            <p className="text-stone-700 text-sm md:text-base font-bold flex items-center gap-2 justify-center md:justify-start">
              <span>&copy; 2025</span>
              <span className="text-amber-600">Purrfect Rescue Center</span>
            </p>
            <p className="text-[10px] md:text-xs text-stone-500 mt-0.5 md:mt-1">Making a difference, one paw at a time</p>
          </div>
          
          <div className="text-center md:text-right flex items-center gap-2 text-xs md:text-sm text-stone-500">
            <span>Created with by</span>
            <span className="font-bold text-amber-600">Guyala, Jhon Jerick E - BSIT 3A</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;