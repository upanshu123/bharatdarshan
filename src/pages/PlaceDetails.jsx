import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ALL_PLACES } from '../data/places/index'; // Ensure this matches your final dataset name
import { 
  MapPin, Utensils, ChevronLeft, Navigation, Calendar, Info, 
  ShieldAlert, BadgeCheck, Train, Plane, Bus, Accessibility, Compass 
} from 'lucide-react';

export default function PlaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  // Find the current place by ID
  const place = ALL_PLACES.find(p => p.id === parseInt(id));

  if (!place) return <div className="p-10 text-center text-slate-500">Place not found!</div>;

  // Shared Auth Logic for Plan My Yatra
  const handleProtectedAction = (path) => {
    if (user) {
      navigate(path);
    } else {
      navigate('/login', { state: { from: path } });
    }
  };

  const handleOpenMaps = () => {
    if (place.coordinates) {
        window.open(`https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`, '_blank');
    } else {
        const query = encodeURIComponent(`${place.name}, ${place.state}`);
        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      
      {/* 1. NEW STANDALONE HEADER (Replaces Global Navbar) */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 md:px-10 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors"
          >
            <div className="p-2 rounded-full group-hover:bg-orange-50 transition-colors">
              <ChevronLeft size={20} />
            </div>
            <span className="text-xs font-black uppercase tracking-widest hidden md:block">
              Return to Directory
            </span>
          </button>

          {/* Place Title in Center Context */}
          <div className="hidden md:flex items-center gap-2">
             <MapPin size={16} className="text-orange-600" />
             <span className="font-serif font-black text-slate-900">Bharat<span className="text-orange-600">Darshan</span></span>
          </div>

          {/* Standalone Plan My Yatra Button */}
          <button 
            onClick={() => handleProtectedAction('/plan')}
            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-orange-600 text-white text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-700 transition-all active:scale-95"
          >
            <Compass size={14} />
            <span>Plan My Yatra</span>
          </button>
        </div>
      </div>

      {/* 2. HERO SECTION (Adjusted margin to account for fixed header) */}
      <div className="relative h-[60vh] lg:h-[500px] mt-[72px]">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 px-6 pt-12 pb-24 md:pb-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-3">
             <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">{place.category}</span>
             {place.badge && (
               <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider flex items-center gap-1">
                 <BadgeCheck size={14} /> {place.badge}
               </span>
             )}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">{place.name}</h1>
          <p className="text-slate-300 text-lg flex items-center gap-2"><MapPin size={18} /> {place.state}, India</p>
        </div>
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded shadow-sm border-t-4 border-orange-600">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4 border-b pb-2">Overview & Significance</h2>
            <p className="text-slate-700 leading-relaxed text-lg text-justify">{place.description}</p>
            
            {place.accessibility && (
              <div className="mt-6 flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <Accessibility className="text-blue-600 min-w-[20px] mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-blue-900 text-sm uppercase mb-1">Accessibility Note</h4>
                  <p className="text-blue-800 text-sm">{place.accessibility.notes}</p>
                </div>
              </div>
            )}
          </div>

          {place.transport && (
             <div className="bg-white p-8 rounded shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Navigation className="text-green-600" /> How to Reach (Google Locations)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {/* Airport */}
                   <div className="flex flex-col justify-between items-center text-center p-4 bg-slate-50 rounded-lg">
                      <div className="flex flex-col items-center w-full">
                        <Plane className="text-blue-500 mb-2" size={24} />
                        <span className="text-xs font-bold text-slate-500 uppercase">Nearest Airport</span>
                        <p className="text-slate-800 font-medium mt-1 mb-3">{place.transport.nearestAirport}</p>
                      </div>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((place.transport.nearestAirport || 'Airport') + ' ' + place.name + ' ' + place.state)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition w-full justify-center shadow-sm"
                      >
                         📍 Airport Google Location ↗
                      </a>
                   </div>

                   {/* Railway Station */}
                   <div className="flex flex-col justify-between items-center text-center p-4 bg-slate-50 rounded-lg">
                      <div className="flex flex-col items-center w-full">
                        <Train className="text-orange-500 mb-2" size={24} />
                        <span className="text-xs font-bold text-slate-500 uppercase">Nearest Railway</span>
                        <p className="text-slate-800 font-medium mt-1 mb-3">{place.transport.nearestRailway}</p>
                      </div>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((place.transport.nearestRailway || 'Railway Station') + ' ' + place.name + ' ' + place.state)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition w-full justify-center shadow-sm"
                      >
                         📍 Train Station Google Location ↗
                      </a>
                   </div>

                   {/* Bus Stop / Stand */}
                   <div className="flex flex-col justify-between items-center text-center p-4 bg-slate-50 rounded-lg">
                      <div className="flex flex-col items-center w-full">
                        <Bus className="text-emerald-500 mb-2" size={24} />
                        <span className="text-xs font-bold text-slate-500 uppercase">Bus Stop & Connectivity</span>
                        <p className="text-slate-800 font-medium mt-1 mb-3 text-xs">{place.transport.busConnectivity}</p>
                      </div>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Central Bus Stand ' + place.name + ' ' + place.state)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition w-full justify-center shadow-sm"
                      >
                         📍 Bus Stand Google Location ↗
                      </a>
                   </div>
                </div>
             </div>
          )}

          {place.routePlan && place.routePlan.length > 0 && (
          <div className="bg-white p-8 rounded shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Navigation className="text-blue-600" /> Recommended Itinerary
            </h2>
            <div className="space-y-0">
              {place.routePlan.map((step, index) => (
                <div key={index} className="flex gap-4 pb-8 border-l-2 border-slate-200 last:border-0 last:pb-0 relative ml-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-600 rounded-full border-2 border-white"></div>
                  <div className="mt-[-5px]">
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">{step.time}</span>
                    <h4 className="text-lg font-bold text-slate-800">{step.activity}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t">
              {/* Only Navigation button left as requested */}
              <button onClick={handleOpenMaps} className="w-full bg-slate-900 text-white py-4 rounded font-bold hover:bg-slate-800 transition flex justify-center items-center gap-2">
                  <Navigation size={18} /> Navigate via Google Maps
              </button>
            </div>
          </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          {/* Quick Google Location Directory Card */}
          <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-2">
              <MapPin size={16} className="text-orange-600" /> Google Location Directory
            </h3>
            <p className="text-xs text-slate-500 mb-4">Direct 1-click Google Maps search locations for {place.name}:</p>
            <div className="grid grid-cols-1 gap-2.5">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Hotels near ' + place.name + ' ' + place.state)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 text-blue-900 rounded-lg text-xs font-bold border border-blue-200 transition"
              >
                <span className="flex items-center gap-2">🏨 Hotels & Stays</span>
                <span>Open Map ↗</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Restaurants near ' + place.name + ' ' + place.state)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-lg text-xs font-bold border border-amber-200 transition"
              >
                <span className="flex items-center gap-2">🍽️ Restaurants & Dining</span>
                <span>Open Map ↗</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((place.transport?.nearestRailway || 'Railway Station') + ' ' + place.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 text-orange-900 rounded-lg text-xs font-bold border border-orange-200 transition"
              >
                <span className="flex items-center gap-2">🚂 Train / Railway Station</span>
                <span>Open Map ↗</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Bus Stand near ' + place.name + ' ' + place.state)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 rounded-lg text-xs font-bold border border-emerald-200 transition"
              >
                <span className="flex items-center gap-2">🚌 Bus Stop / Terminal</span>
                <span>Open Map ↗</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((place.transport?.nearestAirport || 'Airport') + ' ' + place.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-sky-50 hover:bg-sky-100 text-sky-900 rounded-lg text-xs font-bold border border-sky-200 transition"
              >
                <span className="flex items-center gap-2">✈️ Nearest Airport</span>
                <span>Open Map ↗</span>
              </a>
            </div>
          </div>

          {place.essentials && (
          <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-4 border-b pb-2">Visitor Essentials</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 flex items-center gap-2"><Calendar size={16} /> Best Time</span>
                <span className="font-bold text-slate-800 text-right">{place.essentials.bestTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 flex items-center gap-2"><Info size={16} /> Weather</span>
                <span className="font-bold text-slate-800 text-right">{place.essentials.weather}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-slate-500 flex items-center gap-2 mt-0.5">Timings</span>
                <span className="font-bold text-slate-800 text-right w-1/2">{place.essentials.timings}</span>
              </div>
            </div>

            <div className="mt-6 bg-slate-50 p-4 rounded border border-slate-100">
              <h4 className="font-bold text-xs uppercase text-slate-500 mb-3">Tariffs / Entry Fees</h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {Object.entries(place.essentials.entryFee).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-slate-200 pb-1 last:border-0 last:pb-0">
                    <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="font-bold text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          )}

          {place.foodGuide && place.foodGuide.length > 0 && (
          <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
             <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-2">
               <Utensils size={16} /> Verified Eateries & Dining
             </h3>
             <div className="space-y-4">
              {place.foodGuide.map((food, idx) => (
                <div key={idx} className="bg-orange-50 p-3 rounded border border-orange-100 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-800">{food.name}</h4>
                      <span className="text-xs bg-green-100 text-green-800 px-1 rounded font-bold">{food.rating} ★</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{food.type}</p>
                    <p className="text-xs font-medium text-orange-800 mt-1">Try: {food.specialty}</p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(food.name + ' ' + place.name + ' ' + place.state)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded text-xs font-bold transition shrink-0 ml-2 shadow-sm"
                  >
                    📍 Location ↗
                  </a>
                </div>
              ))}
             </div>
          </div>
          )}

          {place.emergency && (
          <div className="bg-red-50 p-6 rounded border border-red-100">
            <h3 className="font-bold text-red-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldAlert size={16} /> Emergency SOS
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-red-700">
              <div>Police: <strong>{place.emergency.police}</strong></div>
              <div>Ambulance: <strong>{place.emergency.ambulance}</strong></div>
              <div className="col-span-2">Helpline: <strong>{place.emergency.touristHelpline}</strong></div>
              <div className="col-span-2 text-xs mt-1 border-t border-red-200 pt-2">
                 <span className="uppercase text-[10px] font-bold opacity-70">Nearest Hospital</span>
                 <br/>{place.emergency.nearestHospital}
              </div>
            </div>
          </div>
          )}

          {/* MakeMyTrip Affiliate Booking Button */}
          <div className="bg-gradient-to-br from-[#003580] to-[#0055a6] p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-yellow-400 text-lg">✈️</span>
              <span className="text-white text-xs font-bold uppercase tracking-widest opacity-80">Plan Your Trip</span>
            </div>
            <h3 className="text-white text-lg font-black mb-1">
              Hotels & Flights
            </h3>
            <p className="text-blue-200 text-xs mb-4 leading-relaxed">
              Book hotels, flights & holiday packages at the best prices via MakeMyTrip
            </p>
            <a
              href="https://bitli.in/vH7D6en"
              target="_blank"
              rel="noopener noreferrer"
              id="makemytrip-affiliate-btn"
              className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition-all duration-200 text-[#003580] font-black text-sm uppercase tracking-wider py-3 px-4 rounded-lg shadow-md"
            >
              <span>🏨</span>
              Book on MakeMyTrip
            </a>
            <p className="text-blue-300 text-[10px] text-center mt-3 opacity-70">
              Powered by MakeMyTrip affiliate
            </p>
          </div>

          {/* Cleartrip Affiliate Booking Button */}
          <div className="bg-gradient-to-br from-[#e63946] to-[#c1121f] p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white text-lg">🛫</span>
              <span className="text-white text-xs font-bold uppercase tracking-widest opacity-80">Compare & Save</span>
            </div>
            <h3 className="text-white text-lg font-black mb-1">
              Flights & Hotels
            </h3>
            <p className="text-red-100 text-xs mb-4 leading-relaxed">
              Find the cheapest flights & hotels with Cleartrip's best price guarantee
            </p>
            <a
              href="https://bitli.in/96hs1CY"
              target="_blank"
              rel="noopener noreferrer"
              id="cleartrip-affiliate-btn"
              className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 active:scale-95 transition-all duration-200 text-[#e63946] font-black text-sm uppercase tracking-wider py-3 px-4 rounded-lg shadow-md"
            >
              <span>✈️</span>
              Book on Cleartrip
            </a>
            <p className="text-red-200 text-[10px] text-center mt-3 opacity-70">
              Powered by Cleartrip affiliate
            </p>
          </div>

          {/* GetYourGuide Affiliate Button */}
          <div className="bg-gradient-to-br from-[#00b37e] to-[#007a54] p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white text-lg">🎯</span>
              <span className="text-white text-xs font-bold uppercase tracking-widest opacity-80">Explore Activities</span>
            </div>
            <h3 className="text-white text-lg font-black mb-1">
              Tours & Experiences
            </h3>
            <p className="text-green-100 text-xs mb-4 leading-relaxed">
              Book guided tours, local experiences & skip-the-line tickets
            </p>
            <a
              href="https://www.getyourguide.com/jaipur-l1149/jaipur-jaipur-amber-fort-full-or-half-day-guided-tour-t516630/?partner_id=L21UWLJ&utm_medium=online_publisher"
              target="_blank"
              rel="noopener noreferrer"
              id="getyourguide-affiliate-btn"
              className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 active:scale-95 transition-all duration-200 text-[#00b37e] font-black text-sm uppercase tracking-wider py-3 px-4 rounded-lg shadow-md"
            >
              <span>🗺️</span>
              Explore on GetYourGuide
            </a>
            <p className="text-green-200 text-[10px] text-center mt-3 opacity-70">
              Powered by GetYourGuide affiliate
            </p>
          </div>

          {/* Booking.com Affiliate Section */}
          <div className="bg-gradient-to-br from-[#003580] via-[#0065b3] to-[#0096d6] p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white text-xl">🏨</span>
              <span className="text-white text-xs font-bold uppercase tracking-widest opacity-80">Best Prices Guaranteed</span>
            </div>
            <h3 className="text-white text-lg font-black mb-1">
              Book on Booking.com
            </h3>
            <p className="text-blue-100 text-xs mb-5 leading-relaxed">
              Hotels, flights & car rentals — compare thousands of options with free cancellation on most bookings
            </p>

            {/* Hotels Button */}
            <a
              href="https://www.anrdoezrs.net/click-101883662-17322915"
              target="_blank"
              rel="noopener noreferrer"
              id="booking-hotels-affiliate-btn"
              className="flex items-center justify-center gap-2 w-full bg-white hover:bg-blue-50 active:scale-95 transition-all duration-200 text-[#003580] font-black text-sm uppercase tracking-wider py-3 px-4 rounded-lg shadow-md mb-3"
            >
              <span>🏨</span>
              Book Hotels
            </a>

            {/* Flights Button */}
            <a
              href="https://www.dpbolvw.net/click-101883662-17289010"
              target="_blank"
              rel="noopener noreferrer"
              id="booking-flights-affiliate-btn"
              className="flex items-center justify-center gap-2 w-full bg-white/20 hover:bg-white/30 active:scale-95 transition-all duration-200 text-white font-black text-sm uppercase tracking-wider py-3 px-4 rounded-lg border border-white/40 mb-3"
            >
              <span>✈️</span>
              Book Flights
            </a>

            {/* Car Rentals Button */}
            <a
              href="https://www.kqzyfj.com/click-101883662-17289007"
              target="_blank"
              rel="noopener noreferrer"
              id="booking-cars-affiliate-btn"
              className="flex items-center justify-center gap-2 w-full bg-white/20 hover:bg-white/30 active:scale-95 transition-all duration-200 text-white font-black text-sm uppercase tracking-wider py-3 px-4 rounded-lg border border-white/40"
            >
              <span>🚗</span>
              Book Car Rentals
            </a>

            <p className="text-blue-200 text-[10px] text-center mt-4 opacity-70">
              Powered by Booking.com affiliate
            </p>
          </div>

          {/* Goibibo Affiliate Button */}
          <div className="bg-gradient-to-br from-[#00bfa5] to-[#007c6e] p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white text-lg">🏨</span>
              <span className="text-white text-xs font-bold uppercase tracking-widest opacity-80">Hotels & Holidays</span>
            </div>
            <h3 className="text-white text-lg font-black mb-1">
              Book on Goibibo
            </h3>
            <p className="text-teal-100 text-xs mb-4 leading-relaxed">
              Best hotel deals, holiday packages & instant confirmation — exclusively on Goibibo
            </p>
            <a
              href="https://bitli.in/xKkdwRT"
              target="_blank"
              rel="noopener noreferrer"
              id="goibibo-affiliate-btn"
              className="flex items-center justify-center gap-2 w-full bg-white hover:bg-teal-50 active:scale-95 transition-all duration-200 text-[#00bfa5] font-black text-sm uppercase tracking-wider py-3 px-4 rounded-lg shadow-md"
            >
              <span>🏷️</span>
              Book on Goibibo
            </a>
            <p className="text-teal-200 text-[10px] text-center mt-3 opacity-70">
              Powered by Goibibo affiliate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}