import React, { useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { ALL_PLACES } from '../data/places/index';
import { ChevronRight, MapPin, Search, Sparkles, Compass } from 'lucide-react';
import { matchesVibe, matchesLocation, formatLocationName } from '../data/categories';

export default function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || "";
  const rawCategory = searchParams.get('category') || "";
  const category = rawCategory === 'Any Vibe' ? '' : rawCategory;
  const hasFilters = Boolean(query || category || rawCategory === 'Any Vibe');

  const { displayResults, isFallback, fallbackCity } = useMemo(() => {
    if (!hasFilters) {
      return { displayResults: [], isFallback: false, fallbackCity: '' };
    }

    const all = ALL_PLACES || [];
    const q = query.toLowerCase().trim();

    // 1. Filter by location query (City, State, Name/Title) - case-insensitive & trimmed
    let locationFiltered = all;
    if (q) {
      locationFiltered = all.filter((p) => matchesLocation(p, q));
    }

    // 2. Vibe Match: If selectedVibe === 'Any Vibe', return all matching locations.
    // Otherwise, check if item.vibes array includes selectedVibe (with fallback to item.category === selectedVibe)
    let filtered = locationFiltered;
    if (category && category !== 'Any Vibe') {
      filtered = locationFiltered.filter((p) => matchesVibe(p, category));
    }

    // Scoring for ranking closest matches first
    const getScore = (place) => {
      if (!q) return 0;
      const name = (place.name || place.title || '').toLowerCase();
      const state = (place.state || '').toLowerCase();
      const city = (place.city || '').toLowerCase();
      const location = (place.location || '').toLowerCase();
      const cityState = (place.cityState || '').toLowerCase();

      if (name === q) return 4;
      if (name.startsWith(q)) return 3;
      if (name.includes(q)) return 2;
      if (state.includes(q) || city.includes(q) || location.includes(q) || cityState.includes(q)) return 1;
      return 0;
    };

    const sortedExact = [...filtered].sort((a, b) => getScore(b) - getScore(a));

    if (sortedExact.length > 0) {
      return { displayResults: sortedExact, isFallback: false, fallbackCity: '' };
    }

    // 3. Clean Empty State:
    // If a specific combination (e.g., Jaipur + Beaches) yields 0 results,
    // show clean message: 'No matching spots for this vibe in [City]. Showing top highlights instead'
    // and display all spots of that city rather than a broken blank screen.
    if (q && category && category !== 'Any Vibe' && locationFiltered.length > 0) {
      const sortedLocationSpots = [...locationFiltered].sort((a, b) => getScore(b) - getScore(a));
      const cityDisplay = formatLocationName(q, sortedLocationSpots);
      return {
        displayResults: sortedLocationSpots,
        isFallback: true,
        fallbackCity: cityDisplay
      };
    }

    return { displayResults: [], isFallback: false, fallbackCity: '' };
  }, [query, category, hasFilters]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query, category]);

  if (!hasFilters) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-24 px-6 lg:px-20 relative">
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-slate-600 to-transparent pointer-events-none z-0"></div>
        <div className="max-w-3xl mx-auto relative z-10 text-center mt-6 md:mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest mb-6">
            <Search size={14} className="text-orange-600" />
            Start your search
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-black text-slate-900 mb-4">Find your next destination</h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Search a state, city, or landmark from the home page to see tailored destination matches.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {['Taj Mahal', 'Goa', 'Heritage & Forts'].map((hint) => (
              <div key={hint} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Try searching</p>
                <p className="text-slate-900 font-bold">{hint}</p>
              </div>
            ))}
          </div>
          <Link to="/" className="inline-flex mt-10 px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-slate-900 transition-colors">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-24 px-6 lg:px-20 relative">
      {/* Grey gradient banner */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-slate-600 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Dynamic Header */}
        <div className="mb-10 text-center mt-6 md:mt-8">
          <h1 className="text-4xl lg:text-5xl font-serif font-black text-white mb-4 drop-shadow-md">
            {query ? `Discovering ${query}` : "Explore India"}
          </h1>
          {category && (
            <span className="inline-block px-4 py-1.5 bg-orange-500 text-white font-bold text-sm uppercase tracking-widest rounded-full shadow-lg">
              {category} Vibe
            </span>
          )}
          <p className="text-slate-200 mt-4 font-medium drop-shadow-sm">
            {isFallback 
              ? `Found top highlights for ${fallbackCity}`
              : `Found ${displayResults.length} destination${displayResults.length === 1 ? '' : 's'} matching your search.`
            }
          </p>
        </div>

        {/* Clean Empty State Fallback Notification */}
        {isFallback && (
          <div className="mb-12 max-w-3xl mx-auto bg-white/95 backdrop-blur-md border border-orange-200 rounded-3xl p-6 md:p-8 shadow-xl text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-3 shadow-sm">
              <Sparkles size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-serif font-bold text-slate-800">
              No matching spots for this vibe in {fallbackCity}. Showing top highlights instead
            </h3>
            <p className="text-slate-500 text-xs md:text-sm mt-2">
              Here are the most popular highlights and attractions to visit in {fallbackCity}.
            </p>
          </div>
        )}

        {/* Results Grid */}
        {displayResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {displayResults.map((place) => (
              <Link to={`/place/${place.id}`} key={place.id} className="group flex flex-col h-full">
                <div className="h-[500px] overflow-hidden rounded-[80px] relative shadow-2xl transition-all duration-700 group-hover:rounded-[40px]">
                  <img 
                    src={place.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" 
                    alt={place.name} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
                    <MapPin size={12} />
                    <span className="truncate max-w-[150px]">{place.cityState || place.state || place.location}</span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-10 left-8 right-8 text-left">
                    <span className="text-orange-400 font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">
                      {Array.isArray(place.vibes) && place.vibes.length > 0 ? place.vibes.join(' • ') : place.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-black text-white mb-4 group-hover:text-orange-300 transition-colors leading-tight">
                      {place.name}
                    </h3>
                    
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          navigate(`/plan-my-yatra?destination=${encodeURIComponent(place.name || place.title || '')}`);
                        }}
                        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-600/40 flex items-center gap-2 active:scale-95 z-20 cursor-pointer"
                      >
                        <Compass size={14} />
                        <span>Plan Trip</span>
                      </button>

                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all duration-300 ml-auto">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State if no results match */
          <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">No destinations found.</h2>
            <p className="text-slate-600 mb-8">Try adjusting your search or selecting a different vibe.</p>
            <Link to="/" className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-slate-900 transition-colors">
              Go Back Home
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}