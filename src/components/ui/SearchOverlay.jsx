import React, { useEffect } from 'react';
import { MapPin, Map, Sparkles, ChevronRight, ArrowRight, X } from 'lucide-react';

export default function SearchOverlay({ 
  destinationInput, 
  setDestinationInput, 
  selectedCategory, 
  setSelectedCategory, 
  suggestions, 
  showSuggestions, 
  handleSelectSuggestion, 
  executeSearch, 
  onClose,
  vibeRef,
  allCategories
}) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCategory('');
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose, setSelectedCategory]);

  const handleClose = () => {
    setSelectedCategory('');
    onClose?.();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    executeSearch();
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white/10 backdrop-blur-3xl p-3 md:p-4 rounded-[40px] border border-white/20 shadow-2xl">
        <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit}>

          {/* ACCURATE SEARCH INPUT */}
          <div className="relative flex-[1.5] bg-white rounded-[32px] px-8 py-6 text-left shadow-inner">
            <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block tracking-widest">Location</label>
            <div className="flex items-center gap-3">
              <MapPin size={22} className="text-orange-600" />
              <input 
                autoFocus
                type="text" 
                className="bg-transparent text-slate-900 font-bold text-xl outline-none w-full"
                placeholder="Search State or City..."
                value={destinationInput}
                onChange={(e) => setDestinationInput(e.target.value)}
              />
            </div>

            {/* STATE vs PLACE SEARCH RESULTS */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-[110%] left-0 right-0 bg-white rounded-[32px] shadow-2xl overflow-hidden z-[50] p-2 border border-slate-100 max-h-[350px] overflow-y-auto">
                {suggestions.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleSelectSuggestion(item)} 
                    className={`px-5 py-4 cursor-pointer flex items-center gap-4 rounded-2xl transition-all group ${item.type === 'state' ? 'bg-orange-50 hover:bg-orange-100' : 'hover:bg-slate-50'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.type === 'state' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-orange-600 group-hover:text-white'}`}>
                      {item.type === 'state' ? <Map size={20} /> : <MapPin size={20} />}
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className={`text-base font-bold ${item.type === 'state' ? 'text-orange-900' : 'text-slate-800'}`}>{item.name}</h4>
                      <span className="text-[10px] text-slate-400 uppercase font-black">{item.type === 'state' ? 'Plan State' : item.sub}</span>
                    </div>
                    <ChevronRight size={18} className="text-slate-300" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* VIBE SELECTION */}
          <div className="flex-1 bg-white/20 rounded-[32px] px-8 py-6 text-left border border-white/20 focus-within:bg-white group transition-all">
            <label className="text-[10px] font-black text-white group-focus-within:text-slate-400 uppercase mb-1 block tracking-widest">Experience</label>
            <div className="flex items-center gap-3">
              <Sparkles size={22} className="text-blue-300 group-focus-within:text-blue-500" />
              <select 
                ref={vibeRef}
                className="bg-transparent text-white group-focus-within:text-slate-900 font-bold text-lg outline-none w-full appearance-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" className="text-slate-900">Any Vibe</option>
                {allCategories.map(cat => <option key={cat} value={cat} className="text-slate-900">{cat}</option>)}
              </select>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2">
            <button type="submit" className="bg-orange-600 text-white p-6 rounded-[32px] hover:bg-orange-700 shadow-xl transition-all" aria-label="Search destinations">
              <ArrowRight size={28} />
            </button>
            <button type="button" onClick={handleClose} className="bg-white/10 text-white p-6 rounded-[32px] hover:bg-red-500 border border-white/20 transition-all" aria-label="Close search overlay">
              <X size={28} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}