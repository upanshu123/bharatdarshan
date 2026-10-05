import React, { useState, useMemo } from "react";
import { MapPin, Star, Search, Sparkles, Filter, Calendar, ArrowRight, Compass, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

import { topDestinations } from '../data/destinations';
import { STANDARD_EXPERIENCE_TAGS, matchesVibe, matchesLocation, formatLocationName } from '../data/categories';

const categories = [
  "All",
  ...STANDARD_EXPERIENCE_TAGS
];

export default function TopDestinations() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [likedDestinations, setLikedDestinations] = useState({});

  const toggleLike = (id) => {
    setLikedDestinations(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const { filteredDestinations, isFallback, fallbackCity } = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const hasCategory = selectedCategory && selectedCategory !== "All" && selectedCategory !== "Any Vibe";

    // 1. Direct match with both location and category/vibe
    const exact = topDestinations.filter(place => {
      const matchLoc = !q || matchesLocation(place, q);
      const matchCat = !hasCategory || matchesVibe(place, selectedCategory);
      return matchLoc && matchCat;
    });

    if (exact.length > 0) {
      return { filteredDestinations: exact, isFallback: false, fallbackCity: '' };
    }

    // 2. Clean empty state fallback:
    // If a specific combination (e.g., Jaipur + Beaches) yields 0 results,
    // show a clean message: 'No matching spots for this vibe in [City]. Showing top highlights instead'
    // and display all spots of that city rather than a broken blank screen.
    if (q && hasCategory) {
      const locationSpots = topDestinations.filter(place => matchesLocation(place, q));
      if (locationSpots.length > 0) {
        const cityDisplay = formatLocationName(q, locationSpots);
        return {
          filteredDestinations: locationSpots,
          isFallback: true,
          fallbackCity: cityDisplay
        };
      }
    }

    return { filteredDestinations: [], isFallback: false, fallbackCity: '' };
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-orange-500 selection:text-white relative overflow-hidden">
      
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HERO HEADER SECTION --- */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 mt-6 md:mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 mb-6 backdrop-blur-md shadow-xl">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em]">
              Discover India's Treasures
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-none mb-6">
            Explore Bharat's <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent italic">
              Top Destinations
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Immerse yourself in centuries of heritage, pristine beaches, sacred temples, and majestic Himalayan lakes.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xl mx-auto p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
            <div>
              <span className="block text-lg sm:text-2xl font-black text-orange-400 font-serif">50+</span>
              <span className="text-[9px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">Destinations</span>
            </div>
            <div className="border-x border-white/10">
              <span className="block text-lg sm:text-2xl font-black text-amber-300 font-serif">4.9 ★</span>
              <span className="text-[9px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">Avg Rating</span>
            </div>
            <div>
              <span className="block text-lg sm:text-2xl font-black text-orange-400 font-serif">28</span>
              <span className="text-[9px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">States & UTs</span>
            </div>
          </div>
        </div>

        {/* --- SEARCH & CATEGORY FILTER BAR --- */}
        <div className="mb-12 space-y-6">
          
          {/* Search Input Box */}
          <div className="max-w-xl mx-auto relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by destination name, state, or vibe (e.g. Taj Mahal, Goa)..."
              className="w-full bg-slate-900/90 border border-white/15 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-2xl transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills (Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center px-2">
            <Filter size={16} className="text-orange-400 shrink-0 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shrink-0 border ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white border-orange-400 shadow-lg shadow-orange-600/30 scale-105'
                    : 'bg-slate-900/80 text-slate-400 border-white/10 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Empty State Notification when City + Vibe yields 0 matches */}
        {isFallback && (
          <div className="mb-10 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-amber-200 backdrop-blur-md flex items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3 text-left">
              <Sparkles className="text-amber-400 shrink-0" size={22} />
              <p className="text-xs sm:text-sm font-semibold text-amber-100">
                No matching spots for this vibe in {fallbackCity}. Showing top highlights instead
              </p>
            </div>
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 underline shrink-0"
            >
              Clear Vibe
            </button>
          </div>
        )}

        {/* --- DESTINATIONS GRID --- */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-white/10 max-w-md mx-auto">
            <Compass size={48} className="mx-auto text-orange-400 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold font-serif text-white mb-2">No Destinations Found</h3>
            <p className="text-slate-400 text-xs px-6 mb-6">Aapke search query se koi destination match nahi hua. Kripya doosra query try karein.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-6 py-2.5 rounded-full bg-orange-600 text-white font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map((place) => (
              <div 
                key={place.id} 
                className="group bg-slate-900/90 border border-white/10 rounded-[28px] overflow-hidden shadow-2xl hover:border-orange-500/40 transition-all duration-500 flex flex-col hover:-translate-y-1.5"
              >
                
                {/* Responsive Image Container */}
                <div className="relative h-60 sm:h-64 md:h-72 overflow-hidden shrink-0">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category / Vibes Pill Tag */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-orange-300 shadow-md">
                    {Array.isArray(place.vibes) && place.vibes.length > 0 ? place.vibes.join(' • ') : place.category}
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-md text-slate-950 px-3 py-1 rounded-full flex items-center gap-1 text-xs font-black shadow-md">
                    <Star size={13} fill="currentColor" />
                    <span>{place.rating}</span>
                    <span className="text-[10px] opacity-75 font-normal">({place.reviewsCount})</span>
                  </div>

                  {/* Favorite Like Button */}
                  <button
                    onClick={() => toggleLike(place.id)}
                    className="absolute bottom-4 right-4 p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white hover:text-red-500 transition-colors"
                  >
                    <Heart size={16} fill={likedDestinations[place.id] ? "currentColor" : "none"} className={likedDestinations[place.id] ? "text-red-500" : ""} />
                  </button>

                  {/* Location Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-orange-400 text-xs font-bold">
                    <MapPin size={14} className="shrink-0" />
                    <span className="truncate max-w-[200px]">{place.location}</span>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {place.name}
                    </h2>
                    
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {place.description}
                    </p>

                    {/* Highlights Badges */}
                    {place.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {place.highlights.map((h, i) => (
                          <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Footer Meta & Action Button */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                      <Calendar size={14} className="text-amber-400 shrink-0" />
                      <span>{place.bestTime}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link 
                        to={`/plan-my-yatra?destination=${encodeURIComponent(place.name || place.title || '')}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-600/30"
                      >
                        <Compass size={13} />
                        <span>Plan Trip</span>
                      </Link>

                      <Link 
                        to={`/place/${place.id}`} 
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all border border-white/10"
                      >
                        <span>Explore</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}