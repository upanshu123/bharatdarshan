import React, { useMemo, useRef, useState } from 'react';
import { PLACES, ALL_PLACES } from '../data/places/index';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Mountain, Palmtree, Castle, Sparkles, Zap, ChevronRight } from 'lucide-react';
import useDebounce from '../hooks/useDebounce';
import SearchOverlay from '../components/ui/SearchOverlay';
import localHeroBg from '../assets/bharatdarshannimage.jpeg';

import { STANDARD_EXPERIENCE_TAGS } from '../data/categories';

export default function Home() {
  const [destinationInput, setDestinationInput] = useState("");
  const debouncedSearch = useDebounce(destinationInput, 300);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  const navigate = useNavigate();
  const vibeRef = useRef(null);

  const allCategories = STANDARD_EXPERIENCE_TAGS;
  const categoriesList = [
    { id: 'Heritage & Forts', icon: Castle, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { id: 'Spiritual & Temples', icon: Sparkles, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { id: 'Hill Stations & Nature', icon: Mountain, color: 'text-sky-500', bg: 'bg-sky-500/10' },
    { id: 'Beaches & Coastal', icon: Palmtree, color: 'text-teal-500', bg: 'bg-teal-500/10' },
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
      const nMatch = (p.name || p.title || "").toLowerCase().includes(query);
      const lMatch = (p.location || p.cityState || p.city || "").toLowerCase().includes(query);
      const sMatch = (p.state || "").toLowerCase().includes(query);
      return nMatch || lMatch || sMatch;
    });

    return [
      ...matchingStates.slice(0, 3).map(s => ({ type: 'state', name: s })),
      ...matchingPlaces.slice(0, 8).map(p => ({
        type: 'place',
        name: p.name || p.title,
        id: p.id,
        sub: p.cityState || p.location || (p.city && p.state ? `${p.city}, ${p.state}` : p.state || p.city)
      }))
    ];
  }, [debouncedSearch]);

  // --- 2. FIXED SEARCH EXECUTION & CLEARING ---
  const executeSearch = (overrideCategory = null) => {
    const q = (destinationInput || "").trim();
    const rawCat = overrideCategory || selectedCategory;
    const catToSearch = rawCat === 'Any Vibe' ? '' : rawCat;
    
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
    <div className="min-h-screen bg-[#07090e] text-white overflow-x-hidden relative">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(251,146,60,0); }
          50% { box-shadow: 0 0 20px 6px rgba(251,146,60,0.35); }
        }
        @keyframes flyPathAcross {
          0% { transform: translate(-10vw, 18vh) scale(0.5); opacity: 0; }
          15% { opacity: 0.7; }
          85% { opacity: 0.7; }
          100% { transform: translate(110vw, 8vh) scale(0.35); opacity: 0; }
        }
        @keyframes birdWingFlap {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.4) translateY(1px); }
        }
        .vibe-card:hover .vibe-icon { transform: scale(1.15) rotate(-3deg); }
        .vibe-icon { transition: transform 0.3s cubic-bezier(.34,1.56,.64,1); }
      `}</style>

      <section className="relative h-screen flex flex-col items-center justify-end pb-20 md:pb-28">
        {/* Background Image & Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={localHeroBg} className="w-full h-full object-cover scale-105" alt="Hero Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-slate-950/30 to-slate-950/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.75)_100%)]"></div>
        </div>

        {/* ANIMATED FLYING BIRDS SILHOUETTE LAYER */}
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          <svg 
            className="absolute w-8 h-5 text-slate-950/70 drop-shadow-md"
            style={{
              top: '12vh',
              animation: 'flyPathAcross 18s linear infinite',
              animationDelay: '0s'
            }}
            viewBox="0 0 50 30"
            fill="currentColor"
          >
            <path 
              d="M 0,15 Q 12,2 25,15 Q 38,2 50,15 Q 36,10 25,18 Q 14,10 0,15 Z" 
              style={{ animation: 'birdWingFlap 0.8s ease-in-out infinite' }}
            />
          </svg>
          <svg 
            className="absolute w-6 h-4 text-slate-900/60 drop-shadow-md"
            style={{
              top: '16vh',
              animation: 'flyPathAcross 22s linear infinite',
              animationDelay: '4.5s'
            }}
            viewBox="0 0 50 30"
            fill="currentColor"
          >
            <path 
              d="M 0,15 Q 12,2 25,15 Q 38,2 50,15 Q 36,10 25,18 Q 14,10 0,15 Z" 
              style={{ animation: 'birdWingFlap 0.7s ease-in-out infinite' }}
            />
          </svg>
          <svg 
            className="absolute w-7 h-4.5 text-slate-950/65 drop-shadow-md"
            style={{
              top: '20vh',
              animation: 'flyPathAcross 19s linear infinite',
              animationDelay: '9s'
            }}
            viewBox="0 0 50 30"
            fill="currentColor"
          >
            <path 
              d="M 0,15 Q 12,2 25,15 Q 38,2 50,15 Q 36,10 25,18 Q 14,10 0,15 Z" 
              style={{ animation: 'birdWingFlap 0.9s ease-in-out infinite' }}
            />
          </svg>
          <svg 
            className="absolute w-5 h-3.5 text-slate-900/50 drop-shadow-md"
            style={{
              top: '10vh',
              animation: 'flyPathAcross 24s linear infinite',
              animationDelay: '14s'
            }}
            viewBox="0 0 50 30"
            fill="currentColor"
          >
            <path 
              d="M 0,15 Q 12,2 25,15 Q 38,2 50,15 Q 36,10 25,18 Q 14,10 0,15 Z" 
              style={{ animation: 'birdWingFlap 0.65s ease-in-out infinite' }}
            />
          </svg>
        </div>

        {/* --- FOREGROUND HERO CONTENT --- */}
        <div className="relative z-30 text-center px-6 w-full max-w-4xl">
          {/* Scaled down Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-4 border border-orange-400/40" style={{boxShadow: '0 0 14px 2px rgba(251,146,60,0.2)'}}>
            <Zap size={12} className="text-orange-400 fill-orange-400" />
            <span className="text-[9px] font-black uppercase tracking-[0.25em]" style={{background: 'linear-gradient(90deg,#fb923c,#fde68a,#fb923c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundSize:'200% auto', animation:'shimmer 2.5s linear infinite'}}>Official Guide</span>
          </div>

          {/* Scaled down 'Soul of India' title */}
          <h1 className="text-3xl md:text-5xl font-serif font-black leading-none tracking-tighter mb-6 italic" style={{background:'linear-gradient(135deg,#fff 0%,#fde68a 40%,#fb923c 70%,#fff 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundSize:'200% auto', animation:'shimmer 3s linear infinite', filter:'drop-shadow(0 0 24px rgba(251,146,60,0.4))'}}>Soul of India</h1>

          {!isSearchActive ? (
            <button onClick={() => setIsSearchActive(true)} className="mx-auto flex items-center gap-3 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-2xl" style={{background:'linear-gradient(135deg,#ea580c,#f97316,#fb923c)', boxShadow:'0 0 24px 4px rgba(251,146,60,0.45), 0 4px 20px rgba(234,88,12,0.5)', transition:'all 0.3s'}} onMouseOver={e=>{e.currentTarget.style.background='linear-gradient(135deg,#fff5eb,#fff,#fff5eb)';e.currentTarget.style.color='#1e293b';e.currentTarget.style.boxShadow='0 0 24px 4px rgba(251,146,60,0.3)';}} onMouseOut={e=>{e.currentTarget.style.background='linear-gradient(135deg,#ea580c,#f97316,#fb923c)';e.currentTarget.style.color='white';e.currentTarget.style.boxShadow='0 0 24px 4px rgba(251,146,60,0.45), 0 4px 20px rgba(234,88,12,0.5)';}}><Search size={20} /> Start Discovery</button>
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

      {/* Signature Vibes Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-20">
        {/* Subtle Amber/Saffron Radial Ambient Glow */}
        <div className="pointer-events-none absolute w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2 z-0"></div>

        {/* Section Header */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="text-amber-400 font-semibold tracking-[0.25em] text-xs uppercase mb-3 block">
            Signature Vibes
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white italic mb-4">
            Curated Experiences
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Discover India through handpicked vibes tailored to your travel passion.
          </p>
        </div>

        {/* Vibe Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categoriesList.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => executeSearch(cat.id)} 
              className="vibe-card group relative bg-white/[0.04] backdrop-blur-md p-8 rounded-[36px] border border-white/10 hover:border-amber-500/40 transition-all duration-300 cursor-pointer flex flex-col items-start hover:-translate-y-1.5 shadow-xl hover:shadow-[0_12px_36px_rgba(245,158,11,0.15)] overflow-hidden"
            >
              {/* Inner ambient card glow on hover */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none"></div>

              <div className={`${cat.bg} vibe-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-inner`}>
                <cat.icon className={`${cat.color} w-8 h-8`} />
              </div>
              <h3 className="text-xl font-serif font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                {cat.id}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 font-medium flex items-center gap-1.5 opacity-80 group-hover:opacity-100 group-hover:text-zinc-200 transition-all">
                Explore destinations <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-amber-400" />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Highlights Banner Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-20">
        <div className="rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden border border-white/10" style={{background:'linear-gradient(135deg,#0c1017 0%,#131a26 50%,#180e05 100%)', boxShadow:'0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(251,146,60,0.1)'}}>
          {/* Glow orbs */}
          <div style={{position:'absolute',top:'-40px',left:'-40px',width:'220px',height:'220px',borderRadius:'50%',background:'radial-gradient(circle,rgba(234,88,12,0.2) 0%,transparent 70%)',pointerEvents:'none'}} />
          <div style={{position:'absolute',bottom:'-40px',right:'-40px',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 70%)',pointerEvents:'none'}} />
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4" style={{background:'linear-gradient(90deg,#fb923c,#fde68a,#fb923c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundSize:'200% auto', animation:'shimmer 2.5s linear infinite'}}>Curated Highlights</p>
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-4 text-white">Explore handpicked top destinations</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed">
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