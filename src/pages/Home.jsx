import React, { useMemo, useRef, useState } from 'react';
import { PLACES, ALL_PLACES } from '../data/places/index';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Mountain, Palmtree, Castle, Sparkles, Zap, ChevronRight } from 'lucide-react';
import useDebounce from '../hooks/useDebounce';
import SearchOverlay from '../components/ui/SearchOverlay';
import localHeroBg from '../assets/bharatdarshannimage.jpeg';

export default function Home() {
  const [destinationInput, setDestinationInput] = useState("");
  const debouncedSearch = useDebounce(destinationInput, 300);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  const navigate = useNavigate();
  const vibeRef = useRef(null);

  const allCategories = Array.from(new Set(PLACES.map(p => p.category || "")));
  const categoriesList = [
    { id: 'Hill Stations', icon: Mountain, color: 'text-sky-500', bg: 'bg-sky-500/10' },
    { id: 'Heritage', icon: Castle, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { id: 'Spiritual', icon: Sparkles, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { id: 'Beaches', icon: Palmtree, color: 'text-teal-500', bg: 'bg-teal-500/10' },
  ];

  const suggestions = useMemo(() => {
    const query = debouncedSearch.toLowerCase().trim();
    if (query.length <= 1) return [];

    const dataset = ALL_PLACES || PLACES || [];

    // Extract clean state names (e.g., gets "Uttar Pradesh" out of "Agra, Uttar Pradesh")
    const rawStates = dataset.map(p => p.state || p.cityState || p.location || "");
    const cleanStates = rawStates.map(s => {
      const parts = s.split(',');
      return parts[parts.length - 1].trim();
    });

    const matchingStates = [...new Set(cleanStates)].filter(s => s.toLowerCase().includes(query));

    const matchingPlaces = dataset.filter(p => {
      const nMatch = (p.name || "").toLowerCase().includes(query);
      const lMatch = (p.location || p.cityState || "").toLowerCase().includes(query);
      const sMatch = (p.state || "").toLowerCase().includes(query);
      return nMatch || lMatch || sMatch;
    });

    return [
      ...matchingStates.slice(0, 3).map(s => ({ type: 'state', name: s })),
      ...matchingPlaces.slice(0, 5).map(p => ({
        type: 'place',
        name: p.name,
        id: p.id,
        sub: p.cityState || p.location || p.state
      }))
    ];
  }, [debouncedSearch]);

  // --- 2. FIXED SEARCH EXECUTION & CLEARING ---
  const executeSearch = (overrideCategory = null) => {
    const q = (destinationInput || "").trim();
    const catToSearch = overrideCategory || selectedCategory;
    
    if (!q && !catToSearch) return;

    // A. Hide the overlay immediately
    setIsSearchActive(false);
    setSuggestionsVisible(false);

    // B. Route to a dedicated Search page with the query
    const searchParams = new URLSearchParams();
    if (q) searchParams.set('q', q);
    if (catToSearch) searchParams.set('category', catToSearch);
    
    navigate(`/search?${searchParams.toString()}`);

    // C. Clear the input so it's empty next time you open it
    setDestinationInput("");
    setSelectedCategory("");
    setSuggestionsVisible(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <section className="relative h-screen flex flex-col items-center justify-end pb-24 md:pb-32">
        <div className="absolute inset-0 z-0">
          <img src={localHeroBg} className="w-full h-full object-cover" alt="Hero Background" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* --- FIXED Z-INDEX --- Changed from z-10 to z-30 so search dropdown floats over content below */}
        <div className="relative z-30 text-center px-6 w-full max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
            <Zap size={14} className="text-orange-500 fill-orange-500" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Official Guide</span>
          </div>
          <h1 className="text-5xl md:text-[100px] font-serif font-black text-white leading-none tracking-tighter mb-10 italic">Soul of India</h1>

          {!isSearchActive ? (
            <button onClick={() => setIsSearchActive(true)} className="mx-auto flex items-center gap-4 bg-orange-600 text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-2xl"><Search size={24} /> Start Discovery</button>
          ) : (
              <SearchOverlay
              destinationInput={destinationInput}
              setDestinationInput={(value) => {
                setDestinationInput(value);
                setSuggestionsVisible(value.trim().length > 1);
              }}
              selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
              suggestions={suggestions} showSuggestions={suggestionsVisible && suggestions.length > 0}
              executeSearch={() => executeSearch()}
              onClose={() => { 
                setIsSearchActive(false); 
                setDestinationInput(""); 
                setSuggestionsVisible(false);
                setSelectedCategory("");
              }}
              vibeRef={vibeRef} allCategories={allCategories}
              
              // --- FIXED DROPDOWN SELECTION ---
              handleSelectSuggestion={(item) => {
                if (item.type === 'place') { 
                  // If it's a specific place (like Taj Mahal), go straight there
                  navigate(`/place/${item.id}`); 
                  setIsSearchActive(false); 
                  setDestinationInput("");
                  setSuggestionsVisible(false);
                } else {
                  // If it's a State, just fill the input box and let them pick a vibe!
                  setDestinationInput(item.name); 
                  setSuggestionsVisible(false);

                  // This automatically focuses the Vibe dropdown for them
                  setTimeout(() => vibeRef.current?.focus(), 150); 
                }
              }}
            />
          )}
        </div>
      </section>

      {/* Signature Vibes */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-20">
        <h2 className="text-4xl lg:text-5xl font-serif font-black text-slate-900 italic mb-16">Signature Vibes</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {categoriesList.map((cat) => (
            <div 
              key={cat.id} 
              // --- FIXED: Pass the category directly to executeSearch to ensure it fires correctly ---
              onClick={() => executeSearch(cat.id)} 
              className="group bg-white p-10 rounded-[64px] border-2 border-transparent shadow-sm hover:shadow-2xl hover:border-orange-500 transition-all cursor-pointer"
            >
              <div className={`${cat.bg} w-20 h-20 rounded-[32px] flex items-center justify-center mb-8`}><cat.icon className={`${cat.color} w-10 h-10`} /></div>
              <h3 className="text-2xl font-serif font-black text-slate-900 tracking-tight">{cat.id}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-20">
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-center text-white shadow-2xl">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-orange-400 mb-4">Curated Highlights</p>
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-4">Explore handpicked top destinations</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Jump straight into our most-loved destinations and open a richer discovery path with one click.
          </p>
          <Link
            to="/top-destinations"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange-600 text-white font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition-colors shadow-lg"
          >
            View Top Destinations
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>


    </div>
  );
}