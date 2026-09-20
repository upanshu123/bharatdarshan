import React, { useState, useMemo } from "react";
import { MapPin, Star, Search, Sparkles, Filter, Calendar, ArrowRight, Compass, Heart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const topDestinations = [
  {
    id: 2701,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    category: "Heritage & Forts",
    rating: 4.9,
    reviewsCount: "12.4k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop", 
    description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan. A UNESCO World Heritage Site.",
    highlights: ["Wonder of the World", "Mughal Architecture", "Yamuna River Views"]
  },
  {
    id: 701, 
    name: "Calangute & Baga Beach",
    location: "Bardez, North Goa",
    category: "Beaches & Coastal",
    rating: 4.8,
    reviewsCount: "9.8k",
    bestTime: "Nov - Feb",
    image: "https://oneboard.app/_next/static/media/baghabeach.e23ac324.webp",
    description: "The queen of beaches in North Goa, famous for its golden sands, vibrant beach shacks, sunset nightlife, and adrenaline-pumping water sports.",
    highlights: ["Water Sports", "Beach Shacks", "Sunset Views"]
  },
  {
    id: 2207, 
    name: "Hawa Mahal",
    location: "Jaipur, Rajasthan",
    category: "Heritage & Forts",
    rating: 4.8,
    reviewsCount: "8.5k",
    bestTime: "Oct - Mar",
    image: "https://www.travel-rajasthan.com/images/experiance-in-rajsthan/forts-and-palaces/hawa-mahal-travel-rajasthan.jpg",
    description: "A five-story pink sandstone palace with 953 small carved windows (Jharokhas), designed for royal ladies to witness street celebrations in private.",
    highlights: ["Pink City Icon", "953 Jharokhas", "Royal Heritage"]
  },
  {
    id: 1301,
    name: "Alleppey Backwaters",
    location: "Alleppey, Kerala",
    category: "Backwaters & Nature",
    rating: 4.9,
    reviewsCount: "7.2k",
    bestTime: "Sep - Mar",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop",
    description: "Serene network of brackish lagoons, lakes, and palm-fringed canals. World-renowned for tranquil luxury houseboat cruises and authentic South Indian cuisine.",
    highlights: ["Houseboat Stays", "Palm Canals", "Ayurvedic Wellness"]
  },
  {
    id: 2704, 
    name: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh",
    category: "Spiritual & Temples",
    rating: 5.0,
    reviewsCount: "15.1k",
    bestTime: "Oct - Mar",
    image: "https://www.daiwikhotels.com/wp-content/uploads/2024/07/kashi-viswanath-temple-cvr-2.jpg",
    description: "One of the most sacred Jyotirlinga shrines of Lord Shiva located in Varanasi on the western bank of holy river Ganga.",
    highlights: ["Ganga Aarti", "Holy Jyotirlinga", "Ancient Ghats"]
  },
  {
    id: 3501, 
    name: "Pangong Tso Lake",
    location: "Leh, Ladakh",
    category: "Lakes & Mountains",
    rating: 4.9,
    reviewsCount: "6.9k",
    bestTime: "May - Sep",
    image: "https://www.lehladakhindia.com/wp-content/uploads/2024/07/pangong-tso-lake.jpeg",
    description: "A breathtaking high-altitude lake at 4,225m that dynamically changes colors from azure blue to deep emerald. Immortalized in Indian cinema.",
    highlights: ["Color Changing Water", "Himalayan Peak Views", "Camping"]
  },
  {
    id: 201,
    name: "Golden Temple (Harmandir Sahib)",
    location: "Amritsar, Punjab",
    category: "Spiritual & Temples",
    rating: 5.0,
    reviewsCount: "18.3k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1588096344356-9b168670b1ec?q=80&w=1000&auto=format&fit=crop",
    description: "The holiest Gurdwara of Sikhism surrounded by the Amrit Sarovar lake. Known for its gold foil architecture and 24/7 world famous mega Langar hall.",
    highlights: ["Golden Shrine", "Amrit Sarovar", "Community Langar"]
  },
  {
    id: 1302,
    name: "Munnar Tea Gardens",
    location: "Munnar, Kerala",
    category: "Backwaters & Nature",
    rating: 4.8,
    reviewsCount: "5.4k",
    bestTime: "Sep - May",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000&auto=format&fit=crop",
    description: "Rolling green hill station at 1,600m above sea level, covered with lush tea plantations, misty valleys, and rare Neelakurinji blooms.",
    highlights: ["Tea Plantations", "Misty Hills", "Trekking Trails"]
  }
];

const categories = [
  "All",
  "Heritage & Forts",
  "Beaches & Coastal",
  "Spiritual & Temples",
  "Backwaters & Nature",
  "Lakes & Mountains"
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

  const filteredDestinations = useMemo(() => {
    return topDestinations.filter(place => {
      const matchesCategory = selectedCategory === "All" || place.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        place.name.toLowerCase().includes(q) || 
        place.location.toLowerCase().includes(q) ||
        place.description.toLowerCase().includes(q);
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-orange-500 selection:text-white relative overflow-hidden">
      
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HERO HEADER SECTION --- */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-orange-300 shadow-md">
                    {place.category}
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

                    <Link 
                      to={`/place/${place.id}`} 
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-600/30 group-hover:shadow-orange-500/50"
                    >
                      <span>Explore Yatra</span>
                      <ArrowRight size={14} />
                    </Link>
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