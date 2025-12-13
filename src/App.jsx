import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AboutUsModal from './components/AboutUsModal';
import AdoptionFormModal from './components/AdoptionFormModal';
import ContactPage from './components/ContactPage';
import CatDetailsModal from './components/CatDetailsModal';
import { catData } from './data/catData';

function App() {
  const [filters, setFilters] = useState({ colorPattern: '', age: '', gender: '' });
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adoptedCats, setAdoptedCats] = useState([]);
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);
  const [showCatDetails, setShowCatDetails] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '', age: '', contactNumber: '', email: '', address: '', reason: ''
  });
  const [ageError, setAgeError] = useState('');

  // Determine if any modal is currently open
  const isModalOpen = showAdoptionForm || showAboutUs || showContact || showCatDetails;

  // Scroll Lock Management (Fixes Body Shift)
  useEffect(() => {
    if (isModalOpen) {
      // Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Add padding to body to prevent content shift
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      // Reset styles
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isModalOpen]);

  // Derived State: Color Patterns
  const colorPatterns = useMemo(() => {
    const patternSet = new Set(catData.map(cat => cat.colorPattern));
    return Array.from(patternSet).sort();
  }, []);

  // Derived State: Filtered Cats
  const filteredCats = useMemo(() => {
    return catData.filter(cat => {
      if (filters.colorPattern && cat.colorPattern !== filters.colorPattern) return false;
      if (filters.age) {
        const age = cat.age;
        if (filters.age === '0-1' && (age < 0 || age > 1)) return false;
        if (filters.age === '2-4' && (age < 2 || age > 4)) return false;
        if (filters.age === '5+' && age < 5) return false;
      }
      if (filters.gender && cat.gender !== filters.gender) return false;
      return true;
    });
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'clear') {
      setFilters({ colorPattern: '', age: '', gender: '' });
    } else {
      setFilters(prev => ({ ...prev, [filterType]: value }));
    }
  };

  const handleViewDetails = (cat) => {
    setSelectedCat(cat);
    setShowCatDetails(true);
  };

  const handleAdoptClick = (catId, catName) => {
    if (adoptedCats.length >= 2) {
      alert('Maximum adoption requests (2) reached. Please wait for approval before requesting another adoption.');
      return;
    }
    if (adoptedCats.includes(catId)) {
      alert(`You already have a pending adoption request for ${catName}.`);
      return;
    }
    setShowCatDetails(false); 
    setShowAdoptionForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (customerInfo.age && parseInt(customerInfo.age) < 18) {
      setAgeError('Adopters must be at least 18 years old.');
      return;
    }

    if (!customerInfo.name || !customerInfo.age || !customerInfo.contactNumber || !customerInfo.address || !customerInfo.reason) {
      alert('Please fill in all required fields.');
      return;
    }

    setAdoptedCats(prev => [...prev, selectedCat.id]);

    const newNotification = {
      id: Date.now(),
      message: `Hi ${customerInfo.name}! Thank you for choosing ${selectedCat.name}. We'll process your request in 2-3 days. After approval, visit our rescue center to complete the adoption. Thank you for choosing to adopt!`,
      read: false,
      timestamp: new Date().toLocaleString()
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    setCustomerInfo({ name: '', age: '', contactNumber: '', email: '', address: '', reason: '' });
    setAgeError('');
    setShowAdoptionForm(false);
    setSelectedCat(null);
    
    alert(`Adoption request submitted for ${selectedCat.name}! Check notifications for details.`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
    if (name === 'age') setAgeError('');
  };

  const handleAgeBlur = (e) => {
    const ageValue = e.target.value;
    if (ageValue && parseInt(ageValue) < 18) {
      setAgeError('Adopters must be at least 18 years old.');
    } else {
      setAgeError('');
    }
  };

  const isCatAdopted = (catId) => adoptedCats.includes(catId);
  
  const markNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };
  
  const unreadNotifications = notifications.filter(n => !n.read);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      
      <Header 
        setShowAboutUs={setShowAboutUs}
        setShowContact={setShowContact}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        markNotificationsAsRead={markNotificationsAsRead}
        // 👇 PASS THIS PROP to fix Header shift
        isModalOpen={isModalOpen} 
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <MainContent 
        filteredCats={filteredCats}
        catData={catData}
        onViewDetails={handleViewDetails}
        isCatAdopted={isCatAdopted}
        adoptedCats={adoptedCats}
        filters={filters}
        handleFilterChange={handleFilterChange}
        colorPatterns={colorPatterns}
      />

      <Footer />

      {/* MODALS */}
      {showAboutUs && <AboutUsModal setShowAboutUs={setShowAboutUs} />}
      {showContact && <ContactPage setShowContact={setShowContact} />}
      
      {showCatDetails && selectedCat && (
        <CatDetailsModal 
          cat={selectedCat}
          onClose={() => {
            setShowCatDetails(false);
            setSelectedCat(null);
          }}
          onAdopt={handleAdoptClick}
          isAdopted={isCatAdopted(selectedCat.id)}
          maxAdoptionsReached={adoptedCats.length >= 2}
        />
      )}
      
      {showAdoptionForm && selectedCat && (
        <AdoptionFormModal 
          selectedCat={selectedCat}
          customerInfo={customerInfo}
          ageError={ageError}
          handleInputChange={handleInputChange}
          handleAgeBlur={handleAgeBlur}
          handleFormSubmit={handleFormSubmit}
          setShowAdoptionForm={setShowAdoptionForm}
          setSelectedCat={setSelectedCat}
          setCustomerInfo={setCustomerInfo}
          setAgeError={setAgeError}
        />
      )}
    </div>
  );
}

export default App;