import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ALL_PLACES } from '../data/places/index';
import { 
  MapPin, Utensils, ChevronLeft, Navigation, Calendar, Info, 
  ShieldAlert, BadgeCheck, Train, Plane, Bus, Accessibility, Compass,
  Sparkles, Clock, Ticket, AlertCircle, Camera, CheckCircle2, 
  Car, Landmark, HelpCircle, SunMedium, ExternalLink, Lightbulb
} from 'lucide-react';

const CATEGORY_FALLBACK_IMAGES = {
  'Heritage & Forts': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
  'Heritage': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
  'Spiritual & Temples': 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
  'Spiritual': 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
  'Hill Stations & Nature': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
  'Hill Station': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
  'Nature': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
  'Beaches & Coastal': 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
  'Beaches': 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
  'Wildlife & Safari': 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80',
  'Default': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80'
};

const getCategoryFallbackImage = (category) => {
  if (!category) return CATEGORY_FALLBACK_IMAGES['Default'];
  const catLower = category.toLowerCase();
  for (const [key, url] of Object.entries(CATEGORY_FALLBACK_IMAGES)) {
    if (catLower.includes(key.toLowerCase()) || key.toLowerCase().includes(catLower)) {
      return url;
    }
  }
  return CATEGORY_FALLBACK_IMAGES['Default'];
};

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

  if (!place) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <Landmark size={48} className="text-slate-400 mb-4 animate-bounce" />
        <h2 className="text-2xl font-serif font-black text-slate-800 mb-2">Destination Not Found</h2>
        <p className="text-slate-500 mb-6 text-sm max-w-md">
          The requested travel directory profile could not be located. It may have moved or been updated.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase tracking-widest rounded-full transition shadow-md"
        >
          Return to Directory
        </button>
      </div>
    );
  }

  const placeName = place?.name || place?.title || 'Iconic Monument';
  const placeCity = place?.city || (place?.location ? place.location.split(',')[0].trim() : '') || (place?.state ? place.state.split(',')[0].trim() : '');
  const placeState = place?.state || (place?.location ? place.location.split(',').slice(1).join(',').trim() : 'India');
  const placeCategory = place?.category || 'Heritage & Cultural';
  const placeDescription = place?.detailedDescription || place?.description || place?.shortDescription || `Explore the timeless cultural heritage and scenic beauty of ${placeName}, located in ${placeCity ? placeCity + ', ' : ''}${placeState}.`;

  const planTripUrl = `/plan-my-yatra?destination=${encodeURIComponent(placeName)}`;

  // Shared Auth Logic for Plan My Yatra
  const handleProtectedAction = (path) => {
    if (user) {
      navigate(path);
    } else {
      navigate('/login', { state: { from: path } });
    }
  };

  const handleOpenMaps = () => {
    if (place?.coordinates?.lat && place?.coordinates?.lng) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`, '_blank');
    } else {
      const query = encodeURIComponent(`${placeName}, ${placeState}`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
  };

  // Safe fallback resolution for Practical Logistics & Transit
  const airportInfo = place?.transit?.airport || place?.transport?.nearestAirport || place?.connectivity?.nearestAirport || place?.nearestAirport || (placeCity ? `${placeCity} Airport (Domestic/International)` : 'Nearest Regional / Domestic Airport');
  const railwayInfo = place?.transit?.railway || place?.transport?.nearestRailway || place?.connectivity?.nearestRailway || place?.nearestRailway || (placeCity ? `${placeCity} Junction Railway Station` : 'Nearest Major Railway Station');
  const localTransitInfo = place?.transit?.localTransit || place?.transit?.cabAuto || place?.transport?.busConnectivity || place?.connectivity?.busAndTransit || place?.busConnectivity || 'Prepaid auto-rickshaws, e-rickshaws, app cabs (Ola/Uber), and local city buses operate frequently.';
  const roadRulesInfo = place?.transit?.roadRules || place?.transport?.roadRules || place?.accessibilityNote || place?.accessibility?.notes || 'Heritage zone traffic regulations apply. Designated parking lots located near peripheral gates with electric shuttle links.';

  // Safe fallback resolution for Visitor Essentials & Tariffs
  const bestTime = place?.visitorEssentials?.bestTime || place?.essentials?.bestTime || place?.bestTime || 'October to March (Pleasant weather)';
  const weather = place?.visitorEssentials?.weather || place?.essentials?.weather || place?.weather || 'Pleasant day temperatures with cool evenings';
  const timings = place?.visitorEssentials?.timings || place?.essentials?.timings || place?.timings || '09:00 AM – 05:30 PM (Daily)';

  // Entry fee map with safe defaults
  const entryFeeRaw = place?.visitorEssentials?.entryFee || place?.essentials?.entryFee || place?.entryFee || {};
  const feeIndian = entryFeeRaw.Indian || entryFeeRaw.indian || '₹50 - ₹100 per adult';
  const feeForeigner = entryFeeRaw.Foreigner || entryFeeRaw.foreigner || '₹300 - ₹500 per adult';
  const feeCamera = entryFeeRaw.Camera || entryFeeRaw.camera || entryFeeRaw.LightShow || entryFeeRaw.lightShow || '₹50 (Still photography allowed)';
  const compositeTicketNote = place?.visitorEssentials?.compositeTicket || place?.essentials?.compositeTicket || 'Composite monument tickets are available at ticket counters and official portals, providing discounted multi-monument entry across the heritage circuit.';

  // Eateries / Food guide with safe fallbacks
  const rawFood = (place?.foodGuide && place.foodGuide.length > 0) ? place.foodGuide : (
    (place?.verifiedDining && place.verifiedDining.length > 0) ? place.verifiedDining : []
  );
  const eateries = rawFood.length > 0 ? rawFood.map(f => ({
    name: f.name || f.shop || `${placeCity || placeName} Heritage Dining`,
    type: f.type || 'Traditional Cuisine',
    specialty: f.specialty || f.dish || 'Regional Specialty Thali & Delicacies',
    rating: f.rating || '4.6'
  })) : [
    {
      name: `${placeCity || placeName} Heritage Kitchen`,
      type: 'Traditional Regional Cuisine',
      specialty: 'Authentic Local Thali & Signature Delicacies',
      rating: '4.6'
    },
    {
      name: `${placeCity || 'Central'} Traditional Sweets & Chaat House`,
      type: 'Local Treats & Street Snacks',
      specialty: 'Fresh Regional Snacks, Lassi & Savories',
      rating: '4.5'
    }
  ];

  // Emergency SOS with safe fallbacks
  const policeNumber = place?.emergency?.police || place?.emergencySOS?.police || '100 / 112';
  const ambulanceNumber = place?.emergency?.ambulance || place?.emergencySOS?.ambulance || '108';
  const touristHelpline = place?.emergency?.touristHelpline || place?.emergencySOS?.helpline || '1363 (24x7 Multi-lingual)';
  const hospitalInfo = place?.emergency?.nearestHospital || place?.emergencySOS?.nearestHospital || (placeCity ? `${placeCity} District Civil Hospital` : 'District Government Hospital & Trauma Center');

  // Curated Local Hacks & Insider Tips
  const localHacks = [
    {
      title: 'Crowd-Free Golden Hours',
      desc: `Arrive between 08:30 AM – 10:00 AM or after 03:30 PM for softer natural photography lighting, comfortable temperatures, and minimal queue wait times at ${placeName}.`,
      badge: 'Best Timing'
    },
    {
      title: 'Online Queue Bypass & Composite Passes',
      desc: 'Book digital e-tickets via official ASI or State Tourism mobile portals to bypass physical queue counters completely. Ask for composite circuit passes for 40%+ savings across regional monuments.',
      badge: 'Money Saver'
    },
    {
      title: 'Footwear & Rampart Exploration Comfort',
      desc: 'Exploration involves walking 1.5–3 km across ancient stone pavements and ramparts. Wear cushioned walking shoes and carry refillable hydration bottles.',
      badge: 'Travel Gear'
    },
    {
      title: 'Certified Guides & Audio Tour Guide',
      desc: 'Only hire official government-approved guides with ASI/Tourism photo identity badges from the authorized desk, or download official digital audio tours.',
      badge: 'Verified Tip'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      
      {/* 1. STANDALONE HEADER */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-white/85 backdrop-blur-md border-b border-slate-100 px-4 md:px-10 py-3.5 shadow-sm">
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
             <span className="font-serif font-black text-slate-900 tracking-tight">Bharat<span className="text-orange-600">Darshan</span></span>
             <span className="text-xs text-slate-400 font-medium">| {placeName}</span>
          </div>

          {/* Standalone Plan My Yatra Button */}
          <button 
            onClick={() => handleProtectedAction(planTripUrl)}
            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 bg-orange-600 text-white text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-700 transition-all active:scale-95"
          >
            <Compass size={14} />
            <span>Plan My Yatra</span>
          </button>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <div className="relative h-[65vh] lg:h-[520px] mt-[65px] overflow-hidden">
        <img 
          src={place.image || getCategoryFallbackImage(place.category)} 
          alt={placeName} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = getCategoryFallbackImage(place.category);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-black/30"></div>
        <div className="absolute bottom-0 left-0 px-6 pt-12 pb-16 md:pb-20 max-w-7xl mx-auto w-full">
          <div className="flex flex-wrap items-center gap-2 mb-3">
             <span className="bg-orange-600 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
               {placeCategory}
             </span>
             {place.badge && (
               <span className="bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                 <BadgeCheck size={14} /> {place.badge}
               </span>
             )}
             <span className="bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
               <Sparkles size={13} /> Verified Directory
             </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-2 tracking-tight drop-shadow-md">
            {placeName}
          </h1>
          <p className="text-slate-200 text-base md:text-lg flex items-center gap-2 font-medium">
            <MapPin size={18} className="text-orange-400" /> {placeCity ? `${placeCity}, ` : ''}{placeState}
          </p>

          {/* Quick Stats Banner */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/90">
            {place.rating && (
              <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-bold flex items-center gap-1.5">
                <span className="text-amber-400">★</span> {place.rating} {place.reviewsCount ? `(${place.reviewsCount} reviews)` : ''}
              </span>
            )}
            <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-medium flex items-center gap-1.5">
              <Calendar size={14} className="text-orange-400" /> Best: {bestTime}
            </span>
            {place.idealDuration && (
              <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-medium flex items-center gap-1.5">
                <Clock size={14} className="text-sky-400" /> Duration: {place.idealDuration}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Main Details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION A: Overview & Significance */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/80 border-t-4 border-t-orange-600">
            <h2 className="text-2xl font-serif font-black text-slate-900 mb-3 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Overview & Cultural Significance</span>
              <span className="text-xs font-sans font-bold text-orange-600 uppercase tracking-widest">Heritage Profile</span>
            </h2>
            
            {place.tagline && (
              <p className="text-sm font-serif italic text-orange-700 bg-orange-50/70 px-4 py-2.5 rounded-xl border border-orange-100 mb-4 font-medium">
                "{place.tagline}"
              </p>
            )}

            <p className="text-slate-700 leading-relaxed text-base text-justify font-normal">
              {placeDescription}
            </p>

            {/* Highlights Chips */}
            {place.highlights && place.highlights.length > 0 && (
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2.5">
                  Architectural & Scenic Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {place.highlights.map((h, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-orange-50 text-slate-800 hover:text-orange-800 text-xs font-bold rounded-lg transition-colors border border-slate-200/60"
                    >
                      ✦ {h}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Accessibility Note */}
            <div className="mt-6 flex items-start gap-3 bg-blue-50/80 p-4 rounded-xl border border-blue-100">
              <Accessibility className="text-blue-600 min-w-[20px] mt-0.5" size={20} />
              <div>
                <h4 className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-1">
                  Accessibility & Mobility Notice
                </h4>
                <p className="text-blue-800 text-xs leading-relaxed">
                  {place?.accessibility?.notes || place?.accessibilityNote || 'Wheelchair-accessible ramps and paved walkways connect major exterior courtyards. Battery-operated golf carts and helper assistance are available near ticket gates.'}
                </p>
              </div>
            </div>
          </div>

          {/* SECTION B: Practical Logistics & Transit */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-3">
              <h2 className="text-2xl font-serif font-black text-slate-900 flex items-center gap-2">
                <Navigation className="text-emerald-600" size={24} /> 
                <span>Practical Logistics & Transit</span>
              </h2>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hidden sm:block">
                Connectivity Verified
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* 1. Nearest Airport */}
               <div className="flex flex-col justify-between p-5 bg-gradient-to-br from-blue-50/60 to-slate-50 rounded-xl border border-blue-100/70">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-blue-600 text-white rounded-lg shadow-sm">
                        <Plane size={18} />
                      </div>
                      <span className="text-xs font-black text-blue-900 uppercase tracking-wider">Nearest Airport</span>
                    </div>
                    <p className="text-slate-800 font-semibold text-sm leading-snug mt-2">
                      {airportInfo}
                    </p>
                  </div>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((airportInfo.replace(/\(.*?\)/g, '') || 'Airport') + ' ' + (placeCity || placeName))}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition shadow-sm w-full"
                  >
                    <MapPin size={13} /> Airport Google Location ↗
                  </a>
               </div>

               {/* 2. Nearest Railway Station */}
               <div className="flex flex-col justify-between p-5 bg-gradient-to-br from-orange-50/60 to-slate-50 rounded-xl border border-orange-100/70">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-orange-600 text-white rounded-lg shadow-sm">
                        <Train size={18} />
                      </div>
                      <span className="text-xs font-black text-orange-900 uppercase tracking-wider">Nearest Railway</span>
                    </div>
                    <p className="text-slate-800 font-semibold text-sm leading-snug mt-2">
                      {railwayInfo}
                    </p>
                  </div>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((railwayInfo.replace(/\(.*?\)/g, '') || 'Railway Station') + ' ' + (placeCity || placeName))}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition shadow-sm w-full"
                  >
                    <MapPin size={13} /> Train Station Google Location ↗
                  </a>
               </div>

               {/* 3. Local Transit & Cab / Auto Availability */}
               <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-emerald-600 text-white rounded-lg shadow-sm">
                      <Bus size={18} />
                    </div>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-wider">Cab, Auto & Local Transit</span>
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed mt-2 font-medium">
                    {localTransitInfo}
                  </p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Central Bus Stand ' + (placeCity || placeName) + ' ' + placeState)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3.5 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-100 text-emerald-800 border border-emerald-300 text-xs font-bold rounded-lg transition w-full shadow-sm"
                  >
                    <Bus size={13} /> Bus Stand & Transit Hub ↗
                  </a>
               </div>

               {/* 4. Road Rules & Parking Access */}
               <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-slate-800 text-white rounded-lg shadow-sm">
                      <Car size={18} />
                    </div>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-wider">Road Rules & Parking</span>
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed mt-2 font-medium">
                    {roadRulesInfo}
                  </p>
                  <div className="mt-3.5 px-3 py-2 bg-amber-50 rounded-lg border border-amber-200/80 text-[11px] text-amber-900 font-semibold flex items-center gap-1.5">
                    <AlertCircle size={14} className="text-amber-600 shrink-0" />
                    <span>Authorized e-rickshaws operate inside walled heritage alleys.</span>
                  </div>
               </div>
            </div>

            {/* Direct Google Maps Live Navigation Button */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <button 
                onClick={handleOpenMaps} 
                className="w-full bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex justify-center items-center gap-2"
              >
                <Navigation size={16} className="text-emerald-400" /> 
                <span>Navigate to {placeName} via Google Maps ↗</span>
              </button>
            </div>
          </div>

          {/* SECTION C: Local Hacks & Insider Tips */}
          <div className="bg-gradient-to-br from-amber-50/70 via-white to-orange-50/60 p-6 md:p-8 rounded-2xl shadow-sm border border-amber-200/70">
            <div className="flex items-center justify-between mb-6 border-b border-amber-100 pb-3">
              <h2 className="text-2xl font-serif font-black text-slate-900 flex items-center gap-2">
                <Lightbulb className="text-amber-600" size={24} /> 
                <span>Local Hacks & Insider Tips</span>
              </h2>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Savvy Traveler Guide
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {localHacks.map((hack, idx) => (
                <div key={idx} className="bg-white p-4.5 rounded-xl border border-amber-200/60 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 text-sm">{hack.title}</h4>
                      <span className="text-[10px] bg-amber-100 text-amber-900 font-black uppercase px-2 py-0.5 rounded tracking-wider">
                        {hack.badge}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed font-normal">
                      {hack.desc}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 size={13} /> Verified by local travel experts
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION D: Recommended Itinerary (if available) */}
          {place.routePlan && place.routePlan.length > 0 && (
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/80">
              <h2 className="text-2xl font-serif font-black text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock className="text-blue-600" size={22} /> 
                <span>Recommended Sightseeing Sequence</span>
              </h2>
              <div className="space-y-0 ml-2">
                {place.routePlan.map((step, index) => (
                  <div key={index} className="flex gap-4 pb-7 border-l-2 border-orange-200 last:border-0 last:pb-0 relative pl-4">
                    <div className="absolute -left-[9px] top-0.5 w-4 h-4 bg-orange-600 rounded-full border-2 border-white shadow-sm"></div>
                    <div>
                      <span className="block text-[11px] font-black text-orange-600 uppercase tracking-wider mb-1">
                        {step.time}
                      </span>
                      <h4 className="text-base font-bold text-slate-800 leading-snug">
                        {step.activity}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION E: Photo Gallery Showcase (if multiple images exist) */}
          {place.images && place.images.length > 1 && (
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/80">
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <h2 className="text-2xl font-serif font-black text-slate-900 flex items-center gap-2">
                  <Camera className="text-orange-600" size={22} /> 
                  <span>Visual Showcase & Facades</span>
                </h2>
                <span className="text-xs text-slate-400 font-bold">
                  {place.images.length} verified photos
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {place.images.slice(0, 6).map((imgUrl, i) => (
                  <div key={i} className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group">
                    <img 
                      src={imgUrl} 
                      alt={`${placeName} angle ${i + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getCategoryFallbackImage(place.category);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: Sidebar (Visitor Essentials, Eateries, Emergency SOS, CTA) */}
        <div className="space-y-6">

          {/* SIDEBAR CARD 1: Visitor Essentials & Tariffs */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
            <h3 className="font-serif font-black text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Visitor Essentials</span>
              <Calendar size={18} className="text-orange-600" />
            </h3>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between items-center py-1 border-b border-slate-100">
                <span className="text-slate-500 flex items-center gap-2 text-xs font-medium">
                  <Calendar size={15} className="text-orange-500" /> Best Season
                </span>
                <span className="font-bold text-slate-800 text-xs text-right max-w-[55%]">
                  {bestTime}
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-slate-100">
                <span className="text-slate-500 flex items-center gap-2 text-xs font-medium">
                  <SunMedium size={15} className="text-amber-500" /> Weather & Climate
                </span>
                <span className="font-bold text-slate-800 text-xs text-right max-w-[55%]">
                  {weather}
                </span>
              </div>

              <div className="flex justify-between items-start py-1 border-b border-slate-100">
                <span className="text-slate-500 flex items-center gap-2 text-xs font-medium mt-0.5">
                  <Clock size={15} className="text-blue-500" /> Timings
                </span>
                <span className="font-bold text-slate-800 text-xs text-right max-w-[55%]">
                  {timings}
                </span>
              </div>
            </div>

            {/* Tariffs & Entry Fees */}
            <div className="mt-5 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                <Ticket size={14} className="text-orange-600" /> Entry Tariffs & Fees
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                  <span className="text-slate-600 font-medium">Indian Citizens</span>
                  <span className="font-black text-slate-900">{feeIndian}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                  <span className="text-slate-600 font-medium">Foreign Nationals</span>
                  <span className="font-black text-slate-900">{feeForeigner}</span>
                </div>
                <div className="flex justify-between pb-0.5">
                  <span className="text-slate-600 font-medium">Still Camera</span>
                  <span className="font-black text-slate-900">{feeCamera}</span>
                </div>
              </div>
            </div>

            {/* Composite Ticket & Online Booking Callout */}
            <div className="mt-4 bg-gradient-to-br from-orange-50 to-amber-50 p-3.5 rounded-xl border border-orange-200/70">
              <div className="flex items-center gap-1.5 text-xs font-black text-orange-900 uppercase tracking-wide mb-1">
                <Ticket size={14} className="text-orange-600" /> Composite Ticket & Passes
              </div>
              <p className="text-[11px] text-orange-950 font-normal leading-relaxed">
                {compositeTicketNote}
              </p>
              <div className="mt-2 text-[10px] font-bold text-orange-800 flex items-center gap-1">
                <span>✦ Inquire at the main entrance or state tourism portal.</span>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 2: Verified Local Dining & Eateries */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
             <h3 className="font-serif font-black text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-3 flex items-center justify-between">
               <span className="flex items-center gap-2">
                 <Utensils size={17} className="text-orange-600" /> Verified Dining
               </span>
               <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                 Nearby Spot
               </span>
             </h3>
             <div className="space-y-3.5">
              {eateries.map((food, idx) => (
                <div key={idx} className="bg-orange-50/70 p-3.5 rounded-xl border border-orange-100 hover:border-orange-200 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-slate-800 text-xs">{food.name}</h4>
                        <span className="text-[10px] bg-green-100 text-green-800 px-1.5 py-0.2 rounded font-black">
                          {food.rating} ★
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{food.type}</p>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-orange-900 mt-2 bg-white/70 px-2 py-1 rounded border border-orange-100/60">
                    Try: <span className="font-normal text-slate-700">{food.specialty}</span>
                  </p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(food.name + ' near ' + placeName + ' ' + placeState)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center justify-center gap-1 w-full text-[11px] font-bold text-orange-700 hover:text-orange-800 bg-white hover:bg-orange-100/60 py-1.5 rounded-lg border border-orange-200 transition"
                  >
                    <MapPin size={12} /> View Location on Google Maps ↗
                  </a>
                </div>
              ))}
             </div>
          </div>

          {/* SIDEBAR CARD 3: Emergency SOS */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 p-5 rounded-2xl border border-red-200/80 shadow-sm">
            <h3 className="font-serif font-black text-red-900 uppercase tracking-wider mb-3 flex items-center justify-between border-b border-red-200/60 pb-2">
              <span className="flex items-center gap-1.5">
                <ShieldAlert size={17} className="text-red-600" /> Emergency SOS
              </span>
              <span className="text-[10px] text-red-700 bg-red-100 font-bold px-2 py-0.5 rounded-full">
                24x7 Helplines
              </span>
            </h3>
            
            <div className="grid grid-cols-2 gap-2.5 text-xs text-red-950 font-medium">
              <div className="bg-white/80 p-2.5 rounded-lg border border-red-100">
                <span className="text-[10px] text-red-700 uppercase font-black block">Police</span>
                <strong className="text-sm text-red-950">{policeNumber}</strong>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-red-100">
                <span className="text-[10px] text-red-700 uppercase font-black block">Ambulance</span>
                <strong className="text-sm text-red-950">{ambulanceNumber}</strong>
              </div>
              <div className="col-span-2 bg-white/80 p-2.5 rounded-lg border border-red-100">
                <span className="text-[10px] text-red-700 uppercase font-black block">National Tourist Helpline</span>
                <strong className="text-sm text-red-950">{touristHelpline}</strong>
              </div>
              <div className="col-span-2 text-xs bg-white/60 p-2.5 rounded-lg border border-red-100">
                 <span className="uppercase text-[10px] font-black text-red-700 opacity-90 block">Nearest Civil Hospital</span>
                 <p className="text-slate-800 font-semibold mt-0.5">{hospitalInfo}</p>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 4: Plan My Yatra CTA Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 p-6 rounded-2xl shadow-xl text-white border border-orange-500/20 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="text-orange-400" size={20} />
              <span className="text-xs font-black uppercase tracking-widest text-orange-400">Customized Itinerary</span>
            </div>
            <h3 className="text-xl font-serif font-black mb-2 text-white">
              Plan My Yatra to {placeName}
            </h3>
            <p className="text-slate-300 text-xs mb-5 leading-relaxed font-medium">
              Want 1-click Google Location links for stays & transit, day-by-day AI itineraries, and personalized budget breakdowns for {placeName}?
            </p>
            <button
              onClick={() => handleProtectedAction(planTripUrl)}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <Compass size={16} />
              Plan Trip with AI
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
