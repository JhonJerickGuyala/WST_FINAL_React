import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, X } from 'lucide-react';

const ContactPage = ({ setShowContact }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setShowContact(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setShowContact(false)}
      />
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl h-[85vh] max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        
        <button
          onClick={() => setShowContact(false)}
          className="absolute top-4 right-4 z-50 p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-md border border-stone-100 transition-all group"
        >
          <X className="w-5 h-5 text-stone-500 group-hover:text-stone-800" />
        </button>

        <div className="overflow-y-auto h-full">
          
          <div className="flex flex-col lg:flex-row min-h-full">
            
            <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-8 md:p-10 lg:p-12 lg:w-5/12 border-b lg:border-b-0 lg:border-r border-stone-100 text-stone-800 flex-shrink-0 relative">
              <div className="pt-8 lg:pt-0">
                <h2 className="text-3xl font-black mb-4">Get in Touch</h2>
                <p className="text-stone-600 mb-10 leading-relaxed font-medium">
                  Have questions about adoption? We'd love to hear from you. Reach out and we'll respond as soon as possible.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-500 flex-shrink-0 border border-amber-100">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Visit Us</h3>
                      <p className="text-stone-600 leading-relaxed">Union St, Brgy 5, Balayan, Batangas, Philippines</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-500 flex-shrink-0 border border-amber-100">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Call Us</h3>
                      <p className="text-stone-600 leading-relaxed">+63 912 345 6789<br/>+63 998 765 4321</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-500 flex-shrink-0 border border-amber-100">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-stone-600 leading-relaxed font-medium text-amber-600">adopt@purrfectrescue.ph</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-500 flex-shrink-0 border border-amber-100">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Hours</h3>
                      <p className="text-stone-600 leading-relaxed">Mon-Sat: 9am - 6pm<br/>Sun: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form Section */}
            <div className="p-8 md:p-10 lg:p-12 lg:w-7/12 bg-white">
              <div className="pt-4 lg:pt-0">
                <h3 className="text-2xl font-bold text-stone-800 mb-8">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-stone-700">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-100 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all font-medium focus:bg-white"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-stone-700">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-100 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all font-medium focus:bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-bold text-stone-700">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-100 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all font-medium focus:bg-white"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-bold text-stone-700">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-100 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all resize-none font-medium focus:bg-white"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;