import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ALL_PLACES } from '../data/places/index';
import { ChevronRight, MapPin, Search } from 'lucide-react';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || "";
  const category = searchParams.get('category') || "";
  const hasFilters = Boolean(query || category);
  const results = useMemo(() => {
    if (!hasFilters) return [];

    let filtered = ALL_PLACES || [];

    // 1. Filter by Search Query (State, City, or Place Name)
    if (query) {
      const q = query.toLowerCase().trim();
      filtered = filtered.filter(p => {
        const nameMatch = (p.name || "").toLowerCase().includes(q);
        const stateMatch = (p.state || "").toLowerCase().includes(q);
        const locMatch = (p.location || "").toLowerCase().includes(q);
        const cityStateMatch = (p.cityState || "").toLowerCase().includes(q);
        return nameMatch || stateMatch || locMatch || cityStateMatch;
      });
    }

    // 2. Filter by Category Vibe (e.g., "Heritage", "Spiritual")
    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    const q = query.toLowerCase().trim();
    const getScore = (place) => {
      if (!q) return 0;

      const name = (place.name || '').toLowerCase();
      const state = (place.state || '').toLowerCase();
      const location = (place.location || '').toLowerCase();
      const cityState = (place.cityState || '').toLowerCase();

      if (name === q) return 4;
      if (name.startsWith(q)) return 3;
      if (name.includes(q)) return 2;
      if (state.includes(q) || location.includes(q) || cityState.includes(q)) return 1;
      return 0;
    };

    return [...filtered].sort((a, b) => getScore(b) - getScore(a));
  }, [query, category, hasFilters]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [query, category]);

  if (!hasFilters) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-6 lg:px-20 relative">
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-slate-600 to-transparent pointer-events-none z-0"></div>
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest mb-6">
            <Search size={14} className="text-orange-600" />
            Start your search
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-black text-slate-900 mb-4">Find your next destination</h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Search a state, city, or landmark from the home page to see tailored destination matches.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {['Taj Mahal', 'Goa', 'Heritage'].map((hint) => (
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
    // Added 'relative' to the main container
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-6 lg:px-20 relative">
      
      {/* --- ADDED: Mid-grey gradient that fades into the background --- */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-slate-600 to-transparent pointer-events-none z-0"></div>

      {/* Added 'relative z-10' so the text and cards sit on top of the gradient */}
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Dynamic Header based on search parameters */}
        <div className="mb-12 text-center">
          {/* Changed text color to white to contrast with the new grey gradient */}
          <h1 className="text-4xl lg:text-5xl font-serif font-black text-white mb-4 drop-shadow-md">
            {query ? `Discovering ${query}` : "Explore India"}
          </h1>
          {category && (
            <span className="inline-block px-4 py-1.5 bg-orange-500 text-white font-bold text-sm uppercase tracking-widest rounded-full shadow-lg">
              {category} Vibe
            </span>
          )}
          {/* Lightened the paragraph text so it is readable on the grey */}
          <p className="text-slate-200 mt-4 font-medium drop-shadow-sm">
            Found {results.length} destination{results.length === 1 ? '' : 's'} matching your search.
          </p>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {results.map(place => (
              <Link to={`/place/${place.id}`} key={place.id} className="group flex flex-col h-full">
                <div className="h-[500px] overflow-hidden rounded-[80px] relative shadow-2xl transition-all duration-700 group-hover:rounded-[40px]">
                  <img src={place.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" alt={place.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
                    <MapPin size={12} />
                    <span className="truncate max-w-[150px]">{place.cityState || place.state || place.location}</span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-12 left-10 right-10 text-left">
                    <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">{place.category}</span>
                    <h3 className="text-4xl font-serif font-black text-white mb-6 group-hover:text-orange-400 transition-colors leading-tight">{place.name}</h3>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:w-full group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                      <ChevronRight size={24} />
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