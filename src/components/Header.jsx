import { useState, useEffect } from 'react';
import { Menu, X, Bell, Heart, Clock } from 'lucide-react';

const Header = ({ 
  setShowAboutUs, 
  setShowContact,
  showNotifications, 
  setShowNotifications, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  notifications,
  unreadNotifications, 
  markNotificationsAsRead 
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll threshold to toggle white background
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close notifications when clicking outside on desktop
  useEffect(() => {
    if (!showNotifications) return;

    const handleClickOutside = (event) => {
      // Check if click is outside notification dropdown
      const notificationDropdown = document.querySelector('.notification-dropdown');
      const notificationButton = document.querySelector('.notification-button');
      
      if (notificationDropdown && 
          !notificationDropdown.contains(event.target) &&
          !notificationButton.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    // Only add event listener on desktop (md and up)
    if (window.innerWidth >= 768) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-md py-0' 
        : 'bg-transparent py-2' 
    }`}>
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              {/* Cat icon from SVG file */}
              <img 
                src="/images/cat-icon.svg" 
                alt="Purr-fect Rescue Logo" 
                className="w-6 h-6 md:w-7 md:h-7 lg:w-10 lg:h-10 text-white" 
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-stone-800">Purrfect Companion System</h1>
              <p className="text-[10px] md:text-xs text-stone-500 hidden sm:block">Cat Adoption and Rescue Center</p>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center">
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 mr-4">
              
              <button onClick={() => setShowAboutUs(true)} className="px-4 py-2 rounded-lg text-stone-700 hover:text-amber-600 hover:bg-stone-50 transition-colors font-medium">
                About
              </button>
              <button onClick={() => setShowContact(true)} className="px-4 py-2 rounded-lg text-stone-700 hover:text-amber-600 hover:bg-stone-50 transition-colors font-medium">
                Contact
              </button>
              <div className="w-px h-6 bg-stone-300 mx-2" />
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => {
                  if (!showNotifications) {
                    setShowNotifications(true);
                    markNotificationsAsRead();
                  } else {
                    setShowNotifications(false);
                  }
                  setMobileMenuOpen(false); 
                }}
                className="notification-button relative p-2.5 text-stone-700 hover:text-amber-600 transition-colors rounded-lg hover:bg-stone-50 focus:outline-none"
              >
                <Bell className="w-6 h-6 md:w-5 md:h-5" />
                {unreadNotifications.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                    {unreadNotifications.length}
                  </span>
                )}
              </button>

              {/* Notification Dropdown - FIXED POSITION */}
              {showNotifications && (
                <>
                  {/* Mobile overlay - closes on click */}
                  <div 
                    className="fixed inset-0 z-[100] md:hidden" 
                    onClick={() => setShowNotifications(false)}
                  />
                  
                  <div className={`
                    notification-dropdown
                    fixed md:absolute top-24 md:top-full
                    left-4 right-4 md:left-auto md:right-0 md:mt-2 md:w-80
                    bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden z-[110]
                  `}>
                    <div className="p-4 bg-stone-50 border-b border-stone-200 flex justify-between items-center">
                      <h3 className="font-bold text-stone-800 flex items-center gap-2">
                        <Bell className="w-4 h-4 text-amber-600" />
                        <span>Notifications</span>
                      </h3>
                      <button 
                        onClick={() => setShowNotifications(false)}
                        className="text-stone-400 hover:text-stone-600 p-1 hover:bg-stone-200 rounded-full transition-colors"
                        aria-label="Close notifications"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="max-h-[60vh] md:max-h-80 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="py-12 text-center px-4">
                          <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Bell className="w-6 h-6 text-stone-400" />
                          </div>
                          <p className="text-stone-500 text-sm">No notifications yet</p>
                        </div>
                      ) : (
                        <div className="divide-y divide-stone-100">
                          {notifications.map(notification => (
                            <div 
                              key={notification.id} 
                              className={`p-4 text-sm transition-colors hover:bg-stone-50 ${
                                !notification.read ? 'bg-amber-50/60' : ''
                              }`}
                            >
                              <p className="text-stone-800 leading-relaxed mb-2 font-medium">{notification.message}</p>
                              <div className="text-xs text-stone-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {notification.timestamp}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* DIVIDER */}
            <div className="h-8 w-px bg-stone-200 mx-3 md:hidden"></div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setShowNotifications(false); 
              }}
              className="md:hidden p-2.5 rounded-lg hover:bg-stone-50 transition-colors text-stone-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown Links */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-stone-100 shadow-xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-5 z-[80]">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-stone-700 hover:bg-stone-50/50 hover:text-amber-600 rounded-xl transition-colors font-bold"
            >
              Home
            </a>
            <button 
              onClick={() => { setShowAboutUs(true); setMobileMenuOpen(false); }} 
              className="px-4 py-3 text-stone-700 hover:bg-stone-50/50 hover:text-amber-600 rounded-xl transition-colors text-left font-bold"
            >
              About Us
            </button>
            <button 
              onClick={() => { setShowContact(true); setMobileMenuOpen(false); }} 
              className="px-4 py-3 text-stone-700 hover:bg-stone-50/50 hover:text-amber-600 rounded-xl transition-colors text-left font-bold"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;