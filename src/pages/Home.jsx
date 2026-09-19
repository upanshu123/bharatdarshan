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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-orange-400/40" style={{boxShadow: '0 0 18px 2px rgba(251,146,60,0.25)'}}>
            <Zap size={14} className="text-orange-400 fill-orange-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{background: 'linear-gradient(90deg,#fb923c,#fde68a,#fb923c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundSize:'200% auto', animation:'shimmer 2.5s linear infinite'}}>Official Guide</span>
          </div>
          <h1 className="text-5xl md:text-[100px] font-serif font-black leading-none tracking-tighter mb-10 italic" style={{background:'linear-gradient(135deg,#fff 0%,#fde68a 40%,#fb923c 70%,#fff 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundSize:'200% auto', animation:'shimmer 3s linear infinite', filter:'drop-shadow(0 0 32px rgba(251,146,60,0.45))'}}>Soul of India</h1>

          {!isSearchActive ? (
            <button onClick={() => setIsSearchActive(true)} className="mx-auto flex items-center gap-4 text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-2xl" style={{background:'linear-gradient(135deg,#ea580c,#f97316,#fb923c)', boxShadow:'0 0 32px 6px rgba(251,146,60,0.45), 0 4px 24px rgba(234,88,12,0.5)', transition:'all 0.3s'}} onMouseOver={e=>{e.currentTarget.style.background='linear-gradient(135deg,#fff5eb,#fff,#fff5eb)';e.currentTarget.style.color='#1e293b';e.currentTarget.style.boxShadow='0 0 24px 4px rgba(251,146,60,0.3)';}} onMouseOut={e=>{e.currentTarget.style.background='linear-gradient(135deg,#ea580c,#f97316,#fb923c)';e.currentTarget.style.color='white';e.currentTarget.style.boxShadow='0 0 32px 6px rgba(251,146,60,0.45), 0 4px 24px rgba(234,88,12,0.5)';}}><Search size={24} /> Start Discovery</button>
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
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(251,146,60,0); }
          50% { box-shadow: 0 0 20px 6px rgba(251,146,60,0.35); }
        }
        .vibe-card:hover .vibe-icon { transform: scale(1.18) rotate(-4deg); }
        .vibe-icon { transition: transform 0.3s cubic-bezier(.34,1.56,.64,1); }
      `}</style>
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-20">
        <h2 className="text-4xl lg:text-5xl font-serif font-black italic mb-16" style={{background:'linear-gradient(135deg,#1e293b 0%,#ea580c 60%,#f97316 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>Signature Vibes</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {categoriesList.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => executeSearch(cat.id)} 
              className="vibe-card group bg-white p-10 rounded-[64px] border-2 border-transparent shadow-sm hover:shadow-2xl transition-all cursor-pointer"
              style={{transition:'all 0.3s ease'}}
              onMouseOver={e=>{e.currentTarget.style.borderColor='#f97316';e.currentTarget.style.boxShadow='0 8px 40px rgba(249,115,22,0.22), 0 0 0 1px rgba(249,115,22,0.1)';e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.background='linear-gradient(135deg,#fff 80%,#fff7ed 100%)'}}
              onMouseOut={e=>{e.currentTarget.style.borderColor='transparent';e.currentTarget.style.boxShadow='0 1px 3px rgba(0,0,0,0.06)';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.background='#fff'}}
            >
              <div className={`${cat.bg} vibe-icon w-20 h-20 rounded-[32px] flex items-center justify-center mb-8`} style={{boxShadow:'0 4px 16px rgba(0,0,0,0.07)'}}><cat.icon className={`${cat.color} w-10 h-10`} /></div>
              <h3 className="text-2xl font-serif font-black text-slate-900 tracking-tight">{cat.id}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-20">
        <div className="rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden" style={{background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 40%,#1a0a00 100%)', boxShadow:'0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(251,146,60,0.12)'}}>
          {/* Glow orbs */}
          <div style={{position:'absolute',top:'-40px',left:'-40px',width:'220px',height:'220px',borderRadius:'50%',background:'radial-gradient(circle,rgba(234,88,12,0.22) 0%,transparent 70%)',pointerEvents:'none'}} />
          <div style={{position:'absolute',bottom:'-40px',right:'-40px',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,rgba(99,102,241,0.18) 0%,transparent 70%)',pointerEvents:'none'}} />
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4" style={{background:'linear-gradient(90deg,#fb923c,#fde68a,#fb923c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundSize:'200% auto', animation:'shimmer 2.5s linear infinite'}}>Curated Highlights</p>
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-4 text-white">Explore handpicked top destinations</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Jump straight into our most-loved destinations and open a richer discovery path with one click.
          </p>
          <Link
            to="/top-destinations"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-black text-xs uppercase tracking-widest transition-all"
            style={{background:'linear-gradient(135deg,#ea580c,#f97316,#fb923c)', boxShadow:'0 0 24px 4px rgba(251,146,60,0.45), 0 4px 20px rgba(234,88,12,0.5)'}}
            onMouseOver={e=>{e.currentTarget.style.boxShadow='0 0 40px 8px rgba(251,146,60,0.6), 0 6px 28px rgba(234,88,12,0.6)'; e.currentTarget.style.transform='scale(1.04)';}} onMouseOut={e=>{e.currentTarget.style.boxShadow='0 0 24px 4px rgba(251,146,60,0.45), 0 4px 20px rgba(234,88,12,0.5)'; e.currentTarget.style.transform='scale(1)';}}
          >
            View Top Destinations
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>


    </div>
  );
}