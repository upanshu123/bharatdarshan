import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles, MapPin, Calendar, Users, Wallet, Compass, ChevronLeft,
  AlertCircle, RefreshCw, CheckCircle, Clock, Utensils, Hotel,
  Navigation, Star, Package, Info, Plane, Car, UserCircle, LogOut, Lock
} from "lucide-react";
import { getAuth, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth, googleProvider } from "../config/firebaseConfig";
import FeedbackSection from "../components/ui/FeedbackSection";
import { generateAIItinerary } from "../utils/aiEngine";
import {
  PLANNER_DESTINATIONS, TRIP_TYPES, BUDGET_TIERS, INTERESTS, AFFILIATE_PARTNERS
} from "../data/plannerData";

function LoadingOverlay({ destination }) {
  const tips = [
    "Crafting your perfect itinerary...",
    "Finding hidden gems & local experiences...",
    "Curating the finest stays for you...",
    "Mapping out your day-by-day adventure...",
    "Adding insider tips from local experts...",
  ];
  const [tipIdx, setTipIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setTipIdx(i => (i + 1) % tips.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fixed inset-0 z-[2000] bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center">
      <div className="text-center px-8 max-w-md">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-orange-600/30 animate-ping" />
          <div className="absolute inset-2 rounded-full border-4 border-t-orange-600 border-orange-600/20 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-3xl">🗺️</div>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/20 border border-orange-600/40 mb-4">
          <Sparkles size={12} className="text-orange-400" />
          <span className="text-[9px] font-black uppercase tracking-widest text-orange-400">Gemini AI Engine Active</span>
        </div>
        <h2 className="text-2xl font-serif font-black text-white mb-2">
          Planning Your Yatra{destination ? " to " + destination : ""}
        </h2>
        <p className="text-slate-400 text-sm font-medium">{tips[tipIdx]}</p>
        <p className="text-slate-600 text-xs mt-6">Generating custom day-by-day itinerary...</p>
      </div>
    </div>
  );
}

function PlannerForm({ onSubmit, loading }) {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    origin: "", destination: "", destinationName: "",
    startDate: "", endDate: "", travellers: 2,
    budget: "Comfort", tripType: "Heritage", interests: [],
  });
  const [errors, setErrors] = useState({});
  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const toggleInterest = (item) => {
    setForm(f => ({
      ...f,
      interests: f.interests.includes(item)
        ? f.interests.filter(i => i !== item)
        : [...f.interests, item]
    }));
  };

  const validate = () => {
    const e = {};
    if (!form.origin.trim()) e.origin = "Enter your departure city";
    if (!form.destination) e.destination = "Select a destination";
    if (!form.startDate) e.startDate = "Select start date";
    if (!form.endDate) e.endDate = "Select end date";
    if (form.startDate && form.endDate && form.endDate <= form.startDate) e.endDate = "End date must be after start date";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const start = new Date(form.startDate);
    const end = new Date(form.endDate);
    const days = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
    const dest = PLANNER_DESTINATIONS.find(d => d.id === form.destination);
    onSubmit({ ...form, days, destinationName: dest?.name || form.destination });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Departing From</label>
          <input type="text" placeholder="e.g. Delhi, Mumbai, Bengaluru" value={form.origin}
            onChange={e => set("origin", e.target.value)}
            className={"w-full border rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 transition " + (errors.origin ? "border-red-400 bg-red-50" : "border-slate-200")} />
          {errors.origin && <p className="text-red-500 text-xs mt-1">{errors.origin}</p>}
        </div>
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Destination</label>
          <select value={form.destination} onChange={e => set("destination", e.target.value)}
            className={"w-full border rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 transition bg-white " + (errors.destination ? "border-red-400 bg-red-50" : "border-slate-200")}>
            <option value="">Select a destination...</option>
            {PLANNER_DESTINATIONS.map(d => <option key={d.id} value={d.id}>{d.name}, {d.state}</option>)}
          </select>
          {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Start Date</label>
          <input type="date" min={today} value={form.startDate} onChange={e => set("startDate", e.target.value)}
            className={"w-full border rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 transition " + (errors.startDate ? "border-red-400 bg-red-50" : "border-slate-200")} />
          {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
        </div>
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">End Date</label>
          <input type="date" min={form.startDate || today} value={form.endDate} onChange={e => set("endDate", e.target.value)}
            className={"w-full border rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 transition " + (errors.endDate ? "border-red-400 bg-red-50" : "border-slate-200")} />
          {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Travellers</label>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => set("travellers", Math.max(1, form.travellers - 1))}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-700 font-black hover:bg-slate-100 transition flex items-center justify-center text-lg">-</button>
            <span className="text-2xl font-black text-slate-900 w-8 text-center">{form.travellers}</span>
            <button type="button" onClick={() => set("travellers", Math.min(20, form.travellers + 1))}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-700 font-black hover:bg-slate-100 transition flex items-center justify-center text-lg">+</button>
            <span className="text-xs text-slate-400 font-medium">{form.travellers === 1 ? "person" : "people"}</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Budget Tier</label>
          <div className="grid grid-cols-2 gap-2">
            {BUDGET_TIERS.map(b => (
              <button key={b.id} type="button" onClick={() => set("budget", b.id)}
                className={"px-3 py-2 rounded-lg border text-xs font-bold transition text-left " + (form.budget === b.id ? "bg-orange-600 border-orange-600 text-white" : "border-slate-200 text-slate-700 hover:border-orange-300")}>
                <span className="block font-black">{b.symbol} {b.label}</span>
                <span className="opacity-70 text-[10px]">{b.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3">Trip Type</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {TRIP_TYPES.map(t => (
            <button key={t.id} type="button" onClick={() => set("tripType", t.id)}
              className={"p-3 rounded-xl border text-left transition " + (form.tripType === t.id ? "bg-orange-50 border-orange-400 text-orange-700" : "border-slate-200 hover:border-slate-300 text-slate-700")}>
              <span className="text-xl block mb-1">{t.icon}</span>
              <span className="text-xs font-black block">{t.label}</span>
              <span className="text-[10px] opacity-60">{t.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3">
          Your Interests <span className="font-normal normal-case text-slate-400">(optional)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map(item => (
            <button key={item} type="button" onClick={() => toggleInterest(item)}
              className={"px-3 py-1.5 rounded-full text-xs font-bold border transition " + (form.interests.includes(item) ? "bg-slate-900 text-white border-slate-900" : "border-slate-200 text-slate-600 hover:border-slate-400")}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" disabled={loading} id="generate-itinerary-btn"
        className="yatra-glow-btn w-full disabled:bg-slate-300 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest active:scale-[0.98] flex items-center justify-center gap-3"
        style={{background:'linear-gradient(135deg,#ea580c,#f97316,#fb923c)',boxShadow:'0 0 28px 4px rgba(251,146,60,0.4), 0 4px 20px rgba(234,88,12,0.45)'}}>
        <Sparkles size={16} /> Generate My AI Itinerary
      </button>
    </form>
  );
}

function ItineraryResult({ itinerary, tripData, onReset }) {
  if (!itinerary) return null;
  const { tripTitle, tagline, highlights, days, mustTry, packingEssentials, localInsights, bestTimeToVisit, budgetSummary, logistics } = itinerary;

  return (
    <div className="space-y-8 pb-20">
      <div className="rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden" style={{background:'linear-gradient(135deg,#0f172a 0%,#1e1b4b 45%,#1a0800 100%)',boxShadow:'0 20px 60px rgba(0,0,0,0.4), 0 0 50px rgba(251,146,60,0.12)'}}>
        <div style={{position:'absolute',top:'-50px',left:'-30px',width:'300px',height:'300px',borderRadius:'50%',background:'radial-gradient(circle,rgba(234,88,12,0.2) 0%,transparent 70%)',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'-30px',right:'-20px',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 70%)',pointerEvents:'none'}} />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{background:'rgba(251,146,60,0.15)',border:'1px solid rgba(251,146,60,0.4)',boxShadow:'0 0 14px 2px rgba(251,146,60,0.18)'}}>
          <Sparkles size={12} style={{color:'#fb923c'}} />
          <span className="text-[9px] font-black uppercase tracking-widest" style={{background:'linear-gradient(90deg,#fb923c,#fde68a,#fb923c)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundSize:'200% auto',animation:'yatra-shimmer 2.5s linear infinite'}}>Gemini 3.6 Flash AI Engine</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-black mb-2" style={{background:'linear-gradient(135deg,#fff 0%,#fde68a 50%,#fb923c 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{tripTitle}</h2>
        <p className="text-slate-400 font-medium mb-6">{tagline}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {(highlights || []).map((h, i) => <span key={i} className="px-3 py-1.5 bg-white/10 rounded-full text-xs font-bold border border-white/10">✓ {h}</span>)}
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1"><MapPin size={14} />{tripData.destinationName}</span>
          <span className="flex items-center gap-1"><Clock size={14} />{tripData.days} Days</span>
          <span className="flex items-center gap-1"><Users size={14} />{tripData.travellers} Person(s)</span>
          <span className="flex items-center gap-1"><Wallet size={14} />{tripData.budget} Budget</span>
        </div>
      </div>

      {logistics && (
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
            <Navigation className="text-orange-600" size={16} /> Arrival & Transit Logistics (Google Locations)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Train / Railway Station */}
            <div className="flex flex-col justify-between p-4 bg-orange-50/60 rounded-xl border border-orange-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-xl shrink-0">🚂</div>
                <div>
                  <span className="text-[10px] font-black uppercase text-orange-600 tracking-wider">Nearest Railway Station</span>
                  <p className="font-black text-slate-900 text-sm leading-snug">{logistics.nearest_railway_station}</p>
                  <p className="text-xs text-slate-500 font-medium">Distance: {logistics.distance_to_railway_km || 'Nearby'}</p>
                </div>
              </div>
              <a
                href={logistics.railway_map_url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((logistics.nearest_railway_station || 'Railway Station') + ' ' + tripData.destinationName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
              >
                📍 Train Station Google Location ↗
              </a>
            </div>

            {/* 2. Bus Stop / Terminal */}
            <div className="flex flex-col justify-between p-4 bg-emerald-50/60 rounded-xl border border-emerald-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-xl shrink-0">🚌</div>
                <div>
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-wider">Nearest Bus Stand / Stop</span>
                  <p className="font-black text-slate-900 text-sm leading-snug">{logistics.nearest_bus_stand || (tripData.destinationName + ' Central Bus Stand')}</p>
                  <p className="text-xs text-slate-500 font-medium">Distance: {logistics.distance_to_bus_stand_km || '2-4 km'}</p>
                </div>
              </div>
              <a
                href={logistics.bus_stand_map_url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((logistics.nearest_bus_stand || 'Bus Stand') + ' ' + tripData.destinationName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
              >
                📍 Bus Stand Google Location ↗
              </a>
            </div>

            {/* 3. Airport */}
            <div className="flex flex-col justify-between p-4 bg-blue-50/60 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-xl shrink-0">✈️</div>
                <div>
                  <span className="text-[10px] font-black uppercase text-blue-600 tracking-wider">Nearest Airport</span>
                  <p className="font-black text-slate-900 text-sm leading-snug">{logistics.nearest_airport}</p>
                  <p className="text-xs text-slate-500 font-medium">Distance: {logistics.distance_to_airport_km || 'Nearby'}</p>
                </div>
              </div>
              <a
                href={logistics.airport_map_url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((logistics.nearest_airport || 'Airport') + ' ' + tripData.destinationName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
              >
                📍 Airport Google Location ↗
              </a>
            </div>
          </div>
        </div>
      )}

      <div>
        <h3 className="text-xl font-serif font-black text-slate-900 mb-4 flex items-center gap-2">
          <Calendar className="text-orange-600" size={20} /> Day-by-Day Itinerary
        </h3>
        <div className="space-y-6">
          {(days || []).map((day, idx) => {
            const activitiesList = (day.activities && day.activities.length > 0)
              ? day.activities
              : ["morning", "afternoon", "evening"]
                  .filter(p => day[p])
                  .map(p => ({
                    timeOfDay: p.charAt(0).toUpperCase() + p.slice(1),
                    locationName: day[p].locationName || day[p].activity,
                    googleMapsLink: day[p].googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((day[p].locationName || day[p].activity) + ' ' + tripData.destinationName)}`,
                    description: day[p].description,
                    tip: day[p].tip,
                    estimatedCost: day[p].estimatedCost
                  }));

            return (
              <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{border:'1.5px solid rgba(249,115,22,0.12)',boxShadow:'0 4px 24px rgba(249,115,22,0.08), 0 1px 4px rgba(0,0,0,0.04)'}}>
                <div className="px-6 py-4" style={{background:`linear-gradient(135deg, ${['#ea580c','#d97706','#7c3aed','#0891b2','#16a34a','#dc2626','#db2777'][idx%7]} 0%, ${['#f97316','#f59e0b','#9333ea','#0ea5e9','#22c55e','#ef4444','#ec4899'][idx%7]} 100%)`, boxShadow:`0 2px 12px rgba(0,0,0,0.15)`}}>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-black text-lg" style={{textShadow:'0 1px 4px rgba(0,0,0,0.2)'}}>Day {day.day}</span>
                    <span className="text-white/80 text-sm font-medium">{day.theme}</span>
                  </div>
                  {day.date && <p className="text-white/70 text-xs mt-0.5">{day.date}</p>}
                </div>

                <div className="p-6 space-y-4">
                  {activitiesList.map((act, aIdx) => {
                    const timeLower = (act.timeOfDay || "").toLowerCase();
                    const icon = timeLower.includes("morning") ? "🌅" : timeLower.includes("afternoon") ? "☀️" : "🌙";
                    const mapUrl = act.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((act.locationName || act.activity) + ' ' + tripData.destinationName)}`;

                    return (
                      <div key={aIdx} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                        <div className="text-2xl">{icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                            <span className="text-xs font-black text-slate-500 uppercase">{act.timeOfDay || "Activity"}</span>
                            {act.estimatedCost && <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">{act.estimatedCost}</span>}
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <h4 className="font-black text-slate-900 text-base">{act.locationName || act.activity}</h4>
                            <a
                              href={mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-xs font-bold transition shrink-0"
                            >
                              📍 Google Maps ↗
                            </a>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{act.description}</p>
                          {act.tip && <p className="text-orange-700 text-xs mt-2 font-medium bg-orange-50 px-3 py-1.5 rounded-lg">Tip: {act.tip}</p>}
                        </div>
                      </div>
                    );
                  })}

                  {day.stayRecommendation && (
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="flex items-start gap-3">
                        <Hotel size={20} className="text-blue-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-black text-blue-500 uppercase">Hotel / Stay Recommendation</span>
                          <p className="font-black text-slate-900">{day.stayRecommendation.name}</p>
                          <p className="text-xs text-slate-500">{day.stayRecommendation.type} - {day.stayRecommendation.approxRate}</p>
                          <p className="text-xs text-blue-700 mt-1">{day.stayRecommendation.whyPick}</p>
                        </div>
                      </div>
                      <a
                        href={day.stayRecommendation.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.stayRecommendation.name + ' ' + tripData.destinationName)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition shrink-0 self-end md:self-auto shadow-sm"
                      >
                        📍 Hotel Google Location ↗
                      </a>
                    </div>
                  )}

                  {day.diningSpots && day.diningSpots.length > 0 && (
                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Utensils size={14} className="text-amber-600" />
                        <span className="text-xs font-black text-amber-700 uppercase">Dining Spots & Local Cuisine</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {day.diningSpots.map((d, i) => (
                          <div key={i} className="flex justify-between items-center p-2.5 bg-white border border-amber-200 rounded-lg">
                            <div className="min-w-0 pr-2">
                              <p className="text-xs font-black text-slate-800 truncate">{d.name}</p>
                              <p className="text-[10px] text-slate-500 truncate">{d.specialty} • {d.priceRange}</p>
                            </div>
                            <a
                              href={d.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.name + ' ' + tripData.destinationName)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-[10px] font-bold transition shrink-0 ml-1 shadow-sm"
                            >
                              📍 Dining Location ↗
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {budgetSummary && (
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-6 text-white shadow-lg">
          <h3 className="font-black text-lg mb-4 flex items-center gap-2"><Wallet size={18} /> Budget Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[
              { label: "Accommodation", val: budgetSummary.accommodation, icon: "🏨" },
              { label: "Food", val: budgetSummary.food, icon: "🍽️" },
              { label: "Transport", val: budgetSummary.transport, icon: "🚗" },
              { label: "Activities", val: budgetSummary.activities, icon: "🎯" },
            ].map(item => (
              <div key={item.label} className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-lg mb-1">{item.icon}</div>
                <p className="text-[10px] font-bold uppercase text-green-300">{item.label}</p>
                <p className="text-xs font-black text-white mt-1">{item.val}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <p className="text-green-300 text-xs font-bold uppercase mb-1">Estimated Total</p>
            <p className="text-2xl font-black">{budgetSummary.estimatedTotal}</p>
          </div>
        </div>
      )}

      {mustTry && mustTry.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2"><Star size={18} className="text-yellow-500" /> Must-Try Experiences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {mustTry.map((m, i) => (
              <div key={i} className="flex gap-3 p-3 bg-yellow-50 rounded-xl border border-yellow-100">
                <span className="text-yellow-500 font-black text-lg">★</span>
                <div>
                  <p className="font-black text-slate-900 text-sm">{m.item}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{m.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packingEssentials && packingEssentials.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2"><Package size={16} className="text-slate-600" /> Packing Essentials</h3>
            <ul className="space-y-2">
              {packingEssentials.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle size={14} className="text-green-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-4">
          {localInsights && (
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
              <h3 className="font-black text-blue-900 mb-2 flex items-center gap-2"><Info size={16} /> Local Insights</h3>
              <p className="text-blue-800 text-sm leading-relaxed">{localInsights}</p>
            </div>
          )}
          {bestTimeToVisit && (
            <div className="bg-green-50 rounded-2xl border border-green-100 p-5">
              <h3 className="font-black text-green-900 mb-2 flex items-center gap-2"><Calendar size={16} /> Best Time to Visit</h3>
              <p className="text-green-800 text-sm leading-relaxed">{bestTimeToVisit}</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-serif font-black text-slate-900 mb-4 flex items-center gap-2">
          <Hotel size={20} className="text-orange-600" /> Book Your Trip
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(AFFILIATE_PARTNERS.hotels || []).map(p => (
            <a key={p.id} href={p.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className={"flex items-center gap-3 p-4 rounded-xl border-2 " + p.color + " transition hover:shadow-md active:scale-[0.98]"}>
              <div className="text-2xl">🏨</div>
              <div className="flex-1 min-w-0">
                <p className="font-black text-sm">{p.name}</p>
                <p className="text-xs opacity-70">Hotels - {p.commission} commission</p>
              </div>
              <span className="text-xs font-black uppercase opacity-60">Book</span>
            </a>
          ))}
          {(AFFILIATE_PARTNERS.flights || []).map(p => (
            <a key={p.id} href={p.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className={"flex items-center gap-3 p-4 rounded-xl border-2 " + p.color + " transition hover:shadow-md active:scale-[0.98]"}>
              <Plane size={22} />
              <div className="flex-1 min-w-0">
                <p className="font-black text-sm">{p.name}</p>
                <p className="text-xs opacity-70">Flights - {p.commission} commission</p>
              </div>
              <span className="text-xs font-black uppercase opacity-60">Book</span>
            </a>
          ))}
          {(AFFILIATE_PARTNERS.activities || []).map(p => (
            <a key={p.id} href={p.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className={"flex items-center gap-3 p-4 rounded-xl border-2 " + p.color + " transition hover:shadow-md active:scale-[0.98]"}>
              <Navigation size={22} />
              <div className="flex-1 min-w-0">
                <p className="font-black text-sm">{p.name}</p>
                <p className="text-xs opacity-70">Tours - {p.commission} commission</p>
              </div>
              <span className="text-xs font-black uppercase opacity-60">Book</span>
            </a>
          ))}
          {(AFFILIATE_PARTNERS.transport || []).map(p => (
            <a key={p.id} href={p.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className={"flex items-center gap-3 p-4 rounded-xl border-2 " + p.color + " transition hover:shadow-md active:scale-[0.98]"}>
              <Car size={22} />
              <div className="flex-1 min-w-0">
                <p className="font-black text-sm">{p.name}</p>
                <p className="text-xs opacity-70">Transport - {p.commission} commission</p>
              </div>
              <span className="text-xs font-black uppercase opacity-60">Book</span>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        <button onClick={onReset}
          className="yatra-glow-btn px-10 py-4 text-white rounded-full font-black text-xs uppercase tracking-widest"
          style={{background:'linear-gradient(135deg,#0f172a,#1e1b4b,#1a0800)',boxShadow:'0 0 24px 4px rgba(99,102,241,0.3), 0 4px 20px rgba(0,0,0,0.4)'}}>
          Plan Another Yatra
        </button>
      </div>
    </div>
  );
}

export default function PlanMyYatra() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [stage, setStage] = useState("form");
  const [itinerary, setItinerary] = useState(null);
  const [tripData, setTripData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    try {
      googleProvider.setCustomParameters({ prompt: 'select_account' });
    } catch (e) {
      console.warn('Google provider custom parameters setup:', e);
    }
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  const handleGoogleLogin = async () => {
    setLoginLoading(true);
    setLoginError("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (popupErr) {
      console.warn("Popup login failed/blocked, initiating Google OAuth Redirect:", popupErr);
      if (popupErr?.code === 'auth/unauthorized-domain') {
        setLoginError('Domain unauthorized in Firebase Console. Add bharatdarshan-seven.vercel.app to Authorized Domains.');
        setLoginLoading(false);
        return;
      }
      try {
        await signInWithRedirect(auth, googleProvider);
      } catch (redirectErr) {
        console.error("Redirect sign-in error:", redirectErr);
        setLoginError(redirectErr?.message || "Google Login failed. Please try again.");
        setLoginLoading(false);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error("Logout error:", e);
    }
  };

  const handleSubmit = async (formData) => {
    setTripData(formData);
    setStage("loading");
    const result = await generateAIItinerary(formData);
    if (result.success) {
      setItinerary(result.data);
      setIsDemoMode(result.isDemoMode || false);
      setStage("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setErrorMsg(result.error || "AI generation failed.");
      setStage("error");
    }
  };

  const handleRetry = async () => {
    if (!tripData) { setStage("form"); return; }
    setStage("loading");
    const result = await generateAIItinerary(tripData);
    if (result.success) {
      setItinerary(result.data);
      setIsDemoMode(result.isDemoMode || false);
      setStage("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setErrorMsg(result.error || "AI generation failed.");
      setStage("error");
    }
  };

  const handleReset = () => {
    setStage("form"); setItinerary(null); setTripData(null); setErrorMsg("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-medium">Checking authentication state...</span>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen" style={{background:'linear-gradient(160deg,#f8fafc 0%,#fff7ed 50%,#f8fafc 100%)'}}>
        <style>{`
          @keyframes yatra-shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}</style>
        {/* Header section */}
        <div className="relative overflow-hidden border-b border-orange-100 pt-28 md:pt-32 pb-12" style={{background:'linear-gradient(135deg,#0f172a 0%,#1c1148 45%,#1a0800 100%)'}}>
          <div style={{position:'absolute',top:'-60px',left:'50%',transform:'translateX(-50%)',width:'500px',height:'300px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(234,88,12,0.18) 0%,transparent 70%)',pointerEvents:'none'}} />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <button onClick={() => navigate("/")}
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-orange-300 mb-6 transition">
              <ChevronLeft size={14} /> Back to Home
            </button>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border" style={{background:'rgba(251,146,60,0.12)',borderColor:'rgba(251,146,60,0.35)',boxShadow:'0 0 16px 2px rgba(251,146,60,0.18)'}}>
              <Sparkles size={13} style={{color:'#fb923c'}} />
              <span className="text-[9px] font-black uppercase tracking-widest" style={{background:'linear-gradient(90deg,#fb923c,#fde68a,#fb923c)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundSize:'200% auto',animation:'yatra-shimmer 2.5s linear infinite'}}>Plan My Yatra Access</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black mb-4 italic" style={{background:'linear-gradient(135deg,#fff 0%,#fde68a 40%,#fb923c 70%,#fff 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundSize:'200% auto',animation:'yatra-shimmer 3.5s linear infinite',filter:'drop-shadow(0 0 24px rgba(251,146,60,0.35))'}}>
              Login Required to Plan Your Yatra
            </h1>
            <p className="text-slate-400 font-medium max-w-xl mx-auto text-sm leading-relaxed">
              Personalized AI trip itinerary create karne ke liye Google se log in karein aur niche hamari community ke feedback & suggestions dekhein.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Login Gate Card */}
          <div className="rounded-[32px] p-8 md:p-12 text-center bg-white shadow-xl border border-orange-100 mb-16 relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Lock size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-slate-900 mb-3">
              Unlock AI Itinerary Generator
            </h2>
            <p className="text-slate-600 max-w-lg mx-auto text-sm mb-8 font-medium">
              Apni yatra plan karne aur customized Gemini AI itinerary generate karne ke liye 1-click Google Login karein.
            </p>

            {loginError && (
              <div className="max-w-md mx-auto mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                {loginError}
              </div>
            )}

            <button
              onClick={handleGoogleLogin}
              disabled={loginLoading}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl active:scale-95 disabled:opacity-50"
            >
              {loginLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              )}
              <span>{loginLoading ? "Signing in with Google..." : "Continue with Google to Plan Yatra"}</span>
            </button>
          </div>

          {/* Feedback & Suggestions Banner & Section */}
          <div className="mt-8">
            <div className="bg-slate-900 rounded-3xl p-8 text-white mb-8 border border-slate-800 shadow-xl text-center relative overflow-hidden">
              <div style={{position:'absolute',top:'-40px',right:'-40px',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,rgba(251,146,60,0.2) 0%,transparent 70%)',pointerEvents:'none'}} />
              <h3 className="text-xl md:text-2xl font-serif font-black mb-2 text-orange-400">
                💬 Yatri Feedback & Suggestions
              </h3>
              <p className="text-slate-300 text-sm max-w-xl mx-auto">
                Abhi tak ke saare feedback & suggestions dekhein aur apna feedback share karein!
              </p>
            </div>
            <FeedbackSection />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{background:'linear-gradient(160deg,#f8fafc 0%,#fff7ed 50%,#f8fafc 100%)'}}>
      {stage === "loading" && <LoadingOverlay destination={tripData?.destinationName} />}

      <style>{`
        @keyframes yatra-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes yatra-float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .yatra-glow-btn:hover { box-shadow: 0 0 40px 8px rgba(251,146,60,0.55), 0 6px 28px rgba(234,88,12,0.5) !important; transform: scale(1.02); }
        .yatra-glow-btn { transition: all 0.3s ease !important; }
      `}</style>
      
      {/* Header section with proper top padding for fixed navbar */}
      {(stage === "form" || stage === "error") && (
        <div className="relative overflow-hidden border-b border-orange-100 pt-28 md:pt-32 pb-12" style={{background:'linear-gradient(135deg,#0f172a 0%,#1c1148 45%,#1a0800 100%)'}}>
          {/* Ambient glow orbs */}
          <div style={{position:'absolute',top:'-60px',left:'50%',transform:'translateX(-50%)',width:'500px',height:'300px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(234,88,12,0.18) 0%,transparent 70%)',pointerEvents:'none'}} />
          <div style={{position:'absolute',bottom:'-40px',right:'5%',width:'220px',height:'220px',borderRadius:'50%',background:'radial-gradient(circle,rgba(99,102,241,0.14) 0%,transparent 70%)',pointerEvents:'none'}} />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <button onClick={() => navigate("/")}
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-orange-300 mb-6 transition">
              <ChevronLeft size={14} /> Back to Home
            </button>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border" style={{background:'rgba(251,146,60,0.12)',borderColor:'rgba(251,146,60,0.35)',boxShadow:'0 0 16px 2px rgba(251,146,60,0.18)'}}>
              <Sparkles size={13} style={{color:'#fb923c'}} />
              <span className="text-[9px] font-black uppercase tracking-widest" style={{background:'linear-gradient(90deg,#fb923c,#fde68a,#fb923c)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundSize:'200% auto',animation:'yatra-shimmer 2.5s linear infinite'}}>AI-Powered by Gemini 3.6 Flash</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black mb-4 italic" style={{background:'linear-gradient(135deg,#fff 0%,#fde68a 40%,#fb923c 70%,#fff 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundSize:'200% auto',animation:'yatra-shimmer 3.5s linear infinite',filter:'drop-shadow(0 0 24px rgba(251,146,60,0.35))'}}>
              Build Your Perfect Yatra
            </h1>
            <p className="text-slate-400 font-medium max-w-xl mx-auto text-sm leading-relaxed">
              Fill in your travel details and our AI crafts a complete, personalised day-by-day itinerary with curated stays, dining, and experiences.
            </p>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className={"max-w-4xl mx-auto px-6 " + (stage === "result" ? "pt-28 md:pt-36 pb-12" : "py-12")}>
        {/* Logged in User Bar */}
        <div className="flex items-center justify-between bg-white border border-orange-100 rounded-2xl p-4 mb-8 shadow-sm">
          <div className="flex items-center gap-3">
            {currentUser.photoURL ? (
              <img src={currentUser.photoURL} alt={currentUser.displayName || "User"} className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-400" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white font-black flex items-center justify-center">
                {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'Y'}
              </div>
            )}
            <div>
              <p className="text-xs font-black text-slate-900">{currentUser.displayName || "Yatri Explorer"}</p>
              <p className="text-[11px] text-slate-500 font-medium">{currentUser.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
          >
            <LogOut size={14} /> Log Out
          </button>
        </div>

        {(stage === "form" || stage === "loading") && (
          <div className="rounded-[32px] p-8 md:p-12" style={{background:'#fff',boxShadow:'0 4px 40px rgba(234,88,12,0.10), 0 1px 4px rgba(0,0,0,0.06)',border:'1.5px solid rgba(251,146,60,0.13)'}}>
            <PlannerForm onSubmit={handleSubmit} loading={stage === "loading"} />
          </div>
        )}

        {stage === "error" && (
          <div className="text-center py-16 bg-white rounded-[32px] border border-slate-100 px-8 shadow-sm">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={32} className="text-red-500" />
            </div>
            <h2 className="text-2xl font-serif font-black text-slate-900 mb-3">Unable to generate itinerary</h2>
            <p className="text-slate-500 mb-4 font-medium text-sm">Please check your inputs and try again.</p>
            <button onClick={handleReset}
              className="px-10 py-4 bg-orange-600 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition shadow-lg shadow-orange-500/30">
              Try Again
            </button>
          </div>
        )}

        {stage === "result" && itinerary && (
          <div>
            {/* Top Navigation & Back Button */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-orange-600 transition bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                <ChevronLeft size={14} /> Back to Planner
              </button>
            </div>

            {/* Smart Curated Banner */}
            {isDemoMode && (
              <div className="relative z-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-5 md:p-6 mb-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 text-2xl shadow-inner">
                    ⚡
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-black uppercase tracking-widest text-amber-100 mb-1">
                      Smart Curated Yatra Plan
                    </div>
                    <p className="font-black text-base md:text-lg text-white">
                      Handcrafted Smart Yatra Plan
                    </p>
                    <p className="text-amber-100 text-xs md:text-sm mt-0.5 max-w-xl">
                      We've generated a complete, hand-crafted itinerary for <strong>{tripData?.destinationName || 'your trip'}</strong>.
                    </p>
                  </div>
                </div>
                <button onClick={handleRetry}
                  className="shrink-0 w-full md:w-auto px-6 py-3 bg-white text-orange-600 hover:bg-amber-50 rounded-xl text-xs font-black uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2 active:scale-95">
                  <RefreshCw size={14} /> Regenerate Plan
                </button>
              </div>
            )}

            <ItineraryResult itinerary={itinerary} tripData={tripData} onReset={handleReset} />
          </div>
        )}

        {/* Embedded Feedback Section for logged-in users */}
        <div className="mt-16 border-t border-orange-100 pt-12">
          <FeedbackSection />
        </div>
      </div>
    </div>
  );
}
