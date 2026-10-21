import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ALL_PLACES } from "../data/places/index";
import {
  Sparkles, MapPin, Calendar, Users, Wallet, ChevronLeft,
  AlertCircle, RefreshCw, CheckCircle, Clock, Utensils, Hotel,
  Navigation, Star, Package, Info, Plane, Car, LogOut, Lock, MessageSquarePlus, X,
  Download, Copy, Check, Play, ChevronRight, ChevronDown, Trophy, Zap, Sun, Moon, Sunset,
  SquareCheck, Square, Flag, ArrowRight, Target, Coffee
} from "lucide-react";
import { onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth, googleProvider } from "../config/firebaseConfig";
import FeedbackSection from "../components/ui/FeedbackSection";
import { generateAIItinerary } from "../utils/aiEngine";
import { generateItineraryPDF } from "../utils/pdfGenerator";
import {
  PLANNER_DESTINATIONS, TRIP_TYPES, BUDGET_TIERS, INTERESTS, AFFILIATE_PARTNERS
} from "../data/plannerData";
import {
  DEPARTURE_CITIES_BY_REGION, getDepartureCityById
} from "../data/departureData";

function LoadingOverlay({ destination, numberOfDays }) {
  const nDays = numberOfDays || 3;
  const phases = [
    { icon: "🧭", text: `Crafting your custom Day 1 to Day ${nDays} itinerary for ${destination || 'your destination'}...` },
    { icon: "🗺️", text: "Optimizing travel routes & mapping unique local attractions..." },
    { icon: "🏰", text: "Curating distinct monuments, hidden gems & viewpoints..." },
    { icon: "⏰", text: "Balancing timings across Morning, Afternoon, Evening & Night..." },
    { icon: "🍽️", text: "Selecting authentic local food spots & regional delicacies..." },
    { icon: "🏨", text: "Picking prime recommended areas to stay for comfort..." },
    { icon: "✨", text: "Assembling your complete, personalized day-by-day Yatra..." },
  ];
  const [phaseIdx, setPhaseIdx] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setPhaseIdx(i => (i + 1) % phases.length); setVisible(true); }, 350);
    }, 2400);
    return () => clearInterval(t);
  }, [phases.length]);

  return (
    <div className="fixed inset-0 z-[2000] flex flex-col items-center justify-center overflow-hidden bg-slate-50/95 backdrop-blur-md">
      {/* Subtle warm ambient depth orbs */}
      <div style={{position:'absolute',top:'10%',left:'50%',transform:'translateX(-50%)',width:'720px',height:'480px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(245,158,11,0.08) 0%,transparent 65%)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',bottom:'8%',right:'8%',width:'320px',height:'320px',borderRadius:'50%',background:'radial-gradient(circle,rgba(217,119,6,0.06) 0%,transparent 70%)',pointerEvents:'none'}}/>

      <div className="text-center px-8 max-w-sm relative z-10">
        {/* Radar Pulse Rings */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full" style={{border:'1.5px solid rgba(245,158,11,0.2)',animation:'yatra-radar 2.4s ease-out infinite'}}/>
          <div className="absolute inset-0 rounded-full" style={{border:'1.5px solid rgba(245,158,11,0.15)',animation:'yatra-radar 2.4s ease-out infinite 0.8s'}}/>
          <div className="absolute inset-0 rounded-full" style={{border:'1.5px solid rgba(245,158,11,0.1)',animation:'yatra-radar 2.4s ease-out infinite 1.6s'}}/>
          <div className="absolute inset-0 rounded-full animate-spin" style={{border:'2.5px solid transparent',borderTopColor:'rgba(217,119,6,0.9)',animationDuration:'1.1s'}}/>
          <div className="absolute inset-5 rounded-full" style={{border:'2px solid transparent',borderTopColor:'rgba(245,158,11,0.7)',animation:'yatra-spin-rev 1.8s linear infinite'}}/>
          <div className="absolute inset-0 flex items-center justify-center text-3xl" style={{animation:'yatra-float 3s ease-in-out infinite'}}>
            {phases[phaseIdx].icon}
          </div>
        </div>

        {/* AI badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 bg-amber-50 border border-amber-200 shadow-sm">
          <Sparkles size={11} className="text-amber-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">Gemini AI Engine Active</span>
        </div>

        <h2 className="text-2xl font-serif font-black text-slate-900 mb-5">
          Planning Your Yatra{destination ? " to " + destination : ""}
        </h2>

        {/* Status ticker — vertical slide-fade */}
        <div className="relative h-14 overflow-hidden mb-4">
          <p
            className="absolute inset-x-0 text-sm font-semibold text-slate-600 leading-relaxed transition-all duration-350"
            style={{
              transform: visible ? 'translateY(0)' : 'translateY(-12px)',
              opacity: visible ? 1 : 0,
              transitionDuration: '350ms'
            }}
          >
            {phases[phaseIdx].text}
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5">
          {phases.map((_, i) => (
            <div key={i} className="rounded-full transition-all duration-300" style={{
              width: i === phaseIdx ? '20px' : '6px',
              height: '6px',
              background: i === phaseIdx ? '#d97706' : '#cbd5e1'
            }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function resolvePlannerDestination(param) {
  if (!param || !param.trim()) return null;
  const raw = param.trim();
  const lower = raw.toLowerCase();

  // 1. Direct match on PLANNER_DESTINATIONS by id or name
  let matched = PLANNER_DESTINATIONS.find(
    (d) => d.id.toLowerCase() === lower || d.name.toLowerCase() === lower
  );
  if (matched) return { id: matched.id, name: matched.name };

  // 2. Partial match on PLANNER_DESTINATIONS (e.g. "Amer Fort, Jaipur" contains "Jaipur", or "Goa Beach" contains "Goa")
  matched = PLANNER_DESTINATIONS.find(
    (d) => lower.includes(d.name.toLowerCase()) || d.name.toLowerCase().includes(lower)
  );
  if (matched) return { id: matched.id, name: matched.name };

  // 3. Match via ALL_PLACES to find associated city/state
  if (Array.isArray(ALL_PLACES)) {
    const place = ALL_PLACES.find(
      (p) =>
        (p.name && p.name.toLowerCase() === lower) ||
        (p.title && p.title.toLowerCase() === lower) ||
        (p.name && lower.includes(p.name.toLowerCase())) ||
        (p.title && lower.includes(p.title.toLowerCase()))
    );

    if (place) {
      const city = (place.city || place.location || "").toLowerCase();
      const state = (place.state || "").toLowerCase();

      // Check if city matches any planner destination
      const cityMatch = PLANNER_DESTINATIONS.find(
        (d) =>
          (city && (city.includes(d.name.toLowerCase()) || d.name.toLowerCase().includes(city))) ||
          (city && d.id.toLowerCase() === city)
      );
      if (cityMatch) return { id: cityMatch.id, name: cityMatch.name };

      // Check if state matches any planner destination
      const stateMatch = PLANNER_DESTINATIONS.find(
        (d) => d.state && state && d.state.toLowerCase() === state
      );
      if (stateMatch) return { id: stateMatch.id, name: stateMatch.name };

      // Return the specific place's name as a destination
      const displayName = place.name || place.title || raw;
      return { id: displayName, name: displayName };
    }
  }

  // 4. Fallback for custom or unlisted destination
  return { id: raw, name: raw };
}

function PlannerForm({ onSubmit, loading }) {
  const [searchParams] = useSearchParams();
  const today = new Date().toISOString().split("T")[0];

  const getInitialDestination = () => {
    let destQuery = searchParams.get("destination");
    if (!destQuery && typeof window !== "undefined" && window.location?.search) {
      const urlParams = new URLSearchParams(window.location.search);
      destQuery = urlParams.get("destination");
    }
    const resolved = resolvePlannerDestination(destQuery);
    return resolved || { id: "", name: "" };
  };

  const initialDest = getInitialDestination();

  const [form, setForm] = useState({
    originId: "", origin: "",
    destination: initialDest.id,
    destinationName: initialDest.name,
    startDate: "", endDate: "", travellers: 2,
    budget: "Comfort", tripType: "Heritage", interests: [],
  });
  const [errors, setErrors] = useState({});
  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  // Auto-fill from query parameter on mount or when searchParams change
  useEffect(() => {
    let destQuery = searchParams.get("destination");
    if (!destQuery && typeof window !== "undefined" && window.location?.search) {
      const urlParams = new URLSearchParams(window.location.search);
      destQuery = urlParams.get("destination");
    }
    if (destQuery && destQuery.trim()) {
      const resolved = resolvePlannerDestination(destQuery);
      if (resolved && resolved.id) {
        setForm(f => {
          if (f.destination !== resolved.id) {
            return {
              ...f,
              destination: resolved.id,
              destinationName: resolved.name
            };
          }
          return f;
        });
      }
    }
  }, [searchParams]);

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
    if (!form.originId) e.origin = "Select your departure city";
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
    const depCity = getDepartureCityById(form.originId);
    onSubmit({
      ...form,
      days,
      destinationName: dest?.name || form.destinationName || form.destination,
      origin: depCity?.name || form.origin,
      departureCity: depCity || null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* ── Route Builder: Departure & Destination Luxury Ticket Badges ── */}
      <div className="relative">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0">

          {/* Departure Ticket Badge */}
          <div className="w-full md:flex-1">
            <div className={"group relative rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 " + (errors.origin ? "border-2 border-red-400 bg-red-50 shadow-md shadow-red-200/40" : "border border-slate-300 bg-white text-slate-800 shadow-sm hover:border-emerald-500/60 focus-within:ring-1 focus-within:ring-amber-500 focus-within:border-amber-500")}>
              {/* Badge Header Bar */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">Departing From</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">Boarding</span>
              </div>

              {/* Native Select with ticket typography & high contrast */}
              <div className="relative">
                <select
                  id="origin-city-select"
                  value={form.originId}
                  onChange={e => {
                    const city = getDepartureCityById(e.target.value);
                    set("originId", e.target.value);
                    if (city) set("origin", city.name);
                  }}
                  className="w-full bg-white text-sm md:text-base font-black text-slate-800 placeholder-slate-400 focus:outline-none cursor-pointer py-1 pr-7 appearance-none"
                >
                  <option value="" className="text-slate-400">Select departure city...</option>
                  {Object.entries(DEPARTURE_CITIES_BY_REGION).map(([region, cities]) => (
                    <optgroup key={region} label={`── ${region} ──`} className="text-amber-700 font-bold">
                      {cities.map(city => (
                        <option key={city.id} value={city.id} className="text-slate-800 font-medium">
                          {city.name}, {city.state}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-emerald-500 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
                </div>
              </div>

              {/* Station Info Sub-badge */}
              {form.originId && (() => {
                const c = getDepartureCityById(form.originId);
                return c ? (
                  <div className="mt-2.5 pt-2.5 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700">🚂 {c.trainStation.name}</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700">🚌 {c.busStand.name}</span>
                  </div>
                ) : null;
              })()}
            </div>
            {errors.origin && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-semibold"><span>⚠</span> {errors.origin}</p>}
          </div>

          {/* Animated Route Connector with Glowing Traveling SVG line */}
          <div className="hidden md:flex flex-col items-center justify-center w-28 shrink-0 px-2 pb-1" aria-hidden="true">
            <div className="relative w-full flex items-center justify-center">
              <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 24" fill="none">
                <defs>
                  <linearGradient id="route-beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <filter id="route-glow-filter" x="-20%" y="-40%" width="140%" height="180%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Background track line */}
                <line x1="4" y1="12" x2="96" y2="12" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
                {/* Glowing traveling dash line */}
                <line
                  x1="4" y1="12" x2="96" y2="12"
                  stroke="url(#route-beam-grad)"
                  strokeWidth="3"
                  strokeDasharray="20 75"
                  filter="url(#route-glow-filter)"
                  style={{ animation: 'yatra-svg-travel 1.8s linear infinite' }}
                />
              </svg>
              {/* Center floating waypoint capsule */}
              <div className="absolute z-10 w-7 h-7 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-md border-2 border-white">
                <Navigation size={12} className="rotate-45" />
              </div>
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest text-amber-600 mt-0.5">Route</span>
          </div>

          {/* Mobile connector */}
          <div className="flex md:hidden items-center justify-center w-full py-1" aria-hidden="true">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-black text-amber-600 shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <span>Express Route</span>
              <span className="animate-pulse">➔</span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-orange-400"></span>
            </div>
          </div>

          {/* Destination Ticket Badge */}
          <div className="w-full md:flex-1">
            <div className={"group relative rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 " + (errors.destination ? "border-2 border-red-400 bg-red-50 shadow-md shadow-red-200/40" : "border border-slate-300 bg-white text-slate-800 shadow-sm hover:border-orange-500/60 focus-within:ring-1 focus-within:ring-amber-500 focus-within:border-amber-500")}>
              {/* Badge Header Bar */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">Destination</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-orange-50 text-orange-700 border border-orange-200">Arrival</span>
              </div>

              {/* Native Select with ticket typography & high contrast */}
              <div className="relative">
                <select
                  id="destination-select"
                  value={form.destination}
                  onChange={e => {
                    const val = e.target.value;
                    const destObj = PLANNER_DESTINATIONS.find(d => d.id === val);
                    set("destination", val);
                    set("destinationName", destObj?.name || val);
                  }}
                  className="w-full bg-white text-sm md:text-base font-black text-slate-800 placeholder-slate-400 focus:outline-none cursor-pointer py-1 pr-7 appearance-none"
                >
                  <option value="" className="text-slate-400">Select a destination...</option>
                  {form.destination && !PLANNER_DESTINATIONS.some(d => d.id === form.destination) && (
                    <option value={form.destination} className="text-amber-700 font-bold">
                      {form.destinationName || form.destination} (Selected Destination)
                    </option>
                  )}
                  {PLANNER_DESTINATIONS.map(d => (
                    <option key={d.id} value={d.id} className="text-slate-800 font-medium">
                      {d.name}, {d.state}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-orange-500 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
                </div>
              </div>

              {/* Destination Highlight preview */}
              {form.destination && (
                <div className="mt-2.5 pt-2.5 border-t border-slate-200 text-[11px] font-medium text-amber-700 flex items-start gap-1.5">
                  <span className="shrink-0">📍</span>
                  <span className="leading-snug">
                    {PLANNER_DESTINATIONS.find(d => d.id === form.destination)?.description ||
                      `Curated yatra itinerary for ${form.destinationName || form.destination}`}
                  </span>
                </div>
              )}
            </div>
            {errors.destination && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-semibold"><span>⚠</span> {errors.destination}</p>}
          </div>
        </div>
      </div>

      {/* ── Dates: Luxury Ticket Badges ───────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className={"group rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 " + (errors.startDate ? "border-2 border-red-400 bg-red-50 shadow-md shadow-red-200/40" : "border border-slate-300 bg-white text-slate-800 shadow-sm hover:border-orange-500/60 focus-within:ring-1 focus-within:ring-amber-500 focus-within:border-amber-500")}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600 flex items-center gap-1.5">
                <Calendar size={13} className="text-amber-500" /> Start Date
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 border border-slate-200">Depart</span>
            </div>
            <input
              type="date"
              min={today}
              value={form.startDate}
              onChange={e => set("startDate", e.target.value)}
              className="w-full bg-white text-sm md:text-base font-black text-slate-800 focus:outline-none cursor-pointer py-1"
            />
          </div>
          {errors.startDate && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-semibold"><span>⚠</span> {errors.startDate}</p>}
        </div>

        <div>
          <div className={"group rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 " + (errors.endDate ? "border-2 border-red-400 bg-red-50 shadow-md shadow-red-200/40" : "border border-slate-300 bg-white text-slate-800 shadow-sm hover:border-orange-500/60 focus-within:ring-1 focus-within:ring-amber-500 focus-within:border-amber-500")}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600 flex items-center gap-1.5">
                <Calendar size={13} className="text-amber-500" /> End Date
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 border border-slate-200">Return</span>
            </div>
            <input
              type="date"
              min={form.startDate || today}
              value={form.endDate}
              onChange={e => set("endDate", e.target.value)}
              className="w-full bg-white text-sm md:text-base font-black text-slate-800 focus:outline-none cursor-pointer py-1"
            />
          </div>
          {errors.endDate && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-semibold"><span>⚠</span> {errors.endDate}</p>}
        </div>
      </div>

      {/* ── Travellers & Budget Tier ────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Travellers Counter */}
        <div className="rounded-2xl p-4 border border-slate-300 bg-white text-slate-800 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600 flex items-center gap-1.5">
              <Users size={13} className="text-indigo-500" /> Travellers
            </span>
            <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 border border-indigo-200">Party Size</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => set("travellers", Math.max(1, form.travellers - 1))}
                className="w-11 h-11 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 font-black hover:bg-orange-500 hover:border-orange-400 hover:text-white transition-all duration-200 flex items-center justify-center text-xl active:scale-90 touch-manipulation select-none"
              >
                −
              </button>
              <span className="text-3xl font-black text-slate-900 w-10 text-center select-none font-serif">
                {form.travellers}
              </span>
              <button
                type="button"
                onClick={() => set("travellers", Math.min(20, form.travellers + 1))}
                className="w-11 h-11 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 font-black hover:bg-orange-500 hover:border-orange-400 hover:text-white transition-all duration-200 flex items-center justify-center text-xl active:scale-90 touch-manipulation select-none"
              >
                +
              </button>
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {form.travellers === 1 ? "Solo Yatri" : `${form.travellers} Yatris`}
            </span>
          </div>
        </div>

        {/* Budget Tier */}
        <div>
          <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-600 mb-2">
            <Wallet size={13} className="text-emerald-500" /> Budget Tier
          </label>
          <div className="grid grid-cols-2 gap-2">
            {BUDGET_TIERS.map(b => (
              <button
                key={b.id}
                type="button"
                onClick={() => set("budget", b.id)}
                className={"relative px-3 py-2.5 rounded-xl text-left overflow-hidden transition-all duration-200 touch-manipulation select-none " + (
                  form.budget === b.id
                    ? "bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 ring-2 ring-orange-400 scale-[1.02]"
                    : "bg-white border border-slate-300 text-slate-700 hover:border-orange-500/50 hover:bg-slate-50 shadow-sm active:scale-95"
                )}
              >
                {form.budget === b.id && (
                  <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.25) 0%,transparent 60%)' }} />
                )}
                <span className="relative block font-black text-xs md:text-sm">{b.symbol} {b.label}</span>
                <span className={"relative text-[10px] block mt-0.5 " + (form.budget === b.id ? "text-orange-100" : "text-slate-400")}>
                  {b.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Trip Style ──────────────────────────────────────────────── */}
      <div>
        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-600 mb-3">
          <Sparkles size={13} className="text-orange-500" /> Trip Style
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {TRIP_TYPES.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => set("tripType", t.id)}
              className={"relative p-3.5 rounded-2xl text-left transition-all duration-200 overflow-hidden touch-manipulation select-none " + (
                form.tripType === t.id
                  ? "bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-400 shadow-md shadow-orange-200/40 ring-2 ring-orange-400/60 scale-[1.02]"
                  : "bg-white border border-slate-300 text-slate-700 hover:border-orange-500/50 hover:bg-slate-50 shadow-sm active:scale-95"
              )}
            >
              <span className="text-2xl block mb-1.5 transition-transform duration-200" style={{ filter: form.tripType === t.id ? 'drop-shadow(0 0 6px rgba(249,115,22,0.4))' : 'none' }}>
                {t.icon}
              </span>
              <span className={"text-xs font-black block transition-colors duration-200 " + (form.tripType === t.id ? "text-orange-700" : "text-slate-800")}>
                {t.label}
              </span>
              <span className={"text-[10px] block mt-0.5 transition-colors duration-200 " + (form.tripType === t.id ? "text-orange-600" : "text-slate-400")}>
                {t.desc}
              </span>
              {form.tripType === t.id && (
                <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full flex items-center justify-center bg-orange-500 shadow-sm">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Interests ──────────────────────────────────────────────── */}
      <div>
        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-600 mb-3">
          <Star size={13} className="text-amber-500" /> Your Interests
          <span className="font-normal normal-case text-slate-400 ml-0.5">(optional)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map(item => (
            <button
              key={item}
              type="button"
              onClick={() => toggleInterest(item)}
              className={"px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 touch-manipulation select-none " + (
                form.interests.includes(item)
                  ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/25 ring-2 ring-orange-400/80 scale-[1.03]"
                  : "bg-white border border-slate-300 text-slate-600 hover:border-orange-500/50 hover:text-slate-900 shadow-sm active:scale-95"
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* ── Generate CTA (Magnetic Style with Continuous Light Shimmer Sweep) ── */}
      <button
        type="submit"
        disabled={loading}
        id="generate-itinerary-btn"
        className="group relative w-full disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 md:py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 overflow-hidden touch-manipulation select-none cursor-pointer transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]"
        style={{
          background: 'linear-gradient(135deg, #b45309 0%, #ea580c 32%, #f97316 68%, #fb923c 100%)',
          boxShadow: '0 0 35px rgba(249,115,22,0.45), 0 12px 28px rgba(234,88,12,0.35), inset 0 1px 0 rgba(255,255,255,0.35)',
        }}
      >
        {/* High-visibility continuous light shimmer sweep */}
        <span
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.35) 48%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.35) 52%, transparent 80%)',
            backgroundSize: '250% 100%',
            animation: 'yatra-btn-sweep 2.8s ease-in-out infinite',
          }}
        />
        <Sparkles size={18} className="relative z-10 text-amber-200 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        <span className="relative z-10 drop-shadow-sm font-black tracking-widest text-white">Generate My AI Itinerary</span>
        <span className="relative z-10 text-white/80 group-hover:translate-x-1 transition-transform duration-200">➔</span>
      </button>
    </form>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LIVE TRIP MODE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function LiveTripMode({ itinerary, tripData, onExit }) {
  const { tripTitle, days } = itinerary;
  const [currentDayIdx, setCurrentDayIdx] = useState(0);
  const [completed, setCompleted] = useState(() => {
    // completed[dayIdx][slotKey] = true/false
    const init = {};
    (days || []).forEach((_, di) => { init[di] = {}; });
    return init;
  });
  const [showCelebration, setShowCelebration] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [expandedSlot, setExpandedSlot] = useState(null);

  const totalActivities = (days || []).reduce((acc, day, di) => {
    const slots = getSlotsForDay(day, di, tripData);
    return acc + slots.length;
  }, 0);

  const completedCount = Object.values(completed).reduce((acc, dayMap) => {
    return acc + Object.values(dayMap).filter(Boolean).length;
  }, 0);

  const progressPct = totalActivities > 0 ? Math.round((completedCount / totalActivities) * 100) : 0;

  function getSlotsForDay(day, dayIdx, tripData) {
    const dest = tripData?.destinationName || '';
    const morningItem = day.morning || (day.activities || []).find(a => (a.timeOfDay || '').toLowerCase().includes('morning')) || (day.activities || [])[0];
    const afternoonItem = day.afternoon || (day.activities || []).find(a => (a.timeOfDay || '').toLowerCase().includes('afternoon')) || (day.activities || [])[1];
    const eveningItem = day.evening || (day.activities || []).find(a => (a.timeOfDay || '').toLowerCase().includes('evening')) || (day.activities || [])[2];
    const nightItem = day.night || (day.activities || []).find(a => (a.timeOfDay || '').toLowerCase().includes('night')) || (day.activities || [])[3];

    return [
      morningItem && {
        key: 'morning', label: 'Morning', icon: '🌅', color: '#f97316', bg: 'rgba(251,146,60,0.10)',
        time: morningItem.time || '09:00 AM',
        title: morningItem.title || morningItem.locationName || morningItem.activity || 'Morning Exploration',
        desc: morningItem.description || morningItem.desc || 'Explore the morning sights.',
        tip: morningItem.insiderTip || morningItem.insider_tip || null,
        mapsLink: morningItem.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((morningItem.title || morningItem.locationName || 'Morning') + ' ' + dest)}`
      },
      afternoonItem && {
        key: 'afternoon', label: 'Afternoon', icon: '☀️', color: '#d97706', bg: 'rgba(234,179,8,0.10)',
        time: afternoonItem.time || '01:00 PM',
        title: afternoonItem.title || afternoonItem.locationName || afternoonItem.activity || 'Afternoon Landmark',
        desc: afternoonItem.description || afternoonItem.desc || 'Visit iconic landmarks.',
        tip: afternoonItem.insiderTip || afternoonItem.insider_tip || null,
        mapsLink: afternoonItem.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((afternoonItem.title || afternoonItem.locationName || 'Afternoon') + ' ' + dest)}`
      },
      eveningItem && {
        key: 'evening', label: 'Evening', icon: '🌆', color: '#7c3aed', bg: 'rgba(124,58,237,0.10)',
        time: eveningItem.time || '06:00 PM',
        title: eveningItem.title || eveningItem.locationName || eveningItem.activity || 'Evening Stroll',
        desc: eveningItem.description || eveningItem.desc || 'Stroll through the bazaars.',
        tip: eveningItem.insiderTip || eveningItem.insider_tip || null,
        mapsLink: eveningItem.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((eveningItem.title || eveningItem.locationName || 'Evening') + ' ' + dest)}`
      },
      nightItem && {
        key: 'night', label: 'Night', icon: '🌙', color: '#1d4ed8', bg: 'rgba(29,78,216,0.10)',
        time: nightItem.time || '09:00 PM',
        title: nightItem.title || nightItem.locationName || nightItem.activity || 'Night Experience',
        desc: nightItem.description || nightItem.desc || 'Enjoy the evening atmosphere.',
        tip: nightItem.insiderTip || nightItem.insider_tip || null,
        mapsLink: nightItem.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((nightItem.title || nightItem.locationName || 'Night') + ' ' + dest)}`
      }
    ].filter(Boolean);
  }

  const toggleActivity = useCallback((dayIdx, slotKey) => {
    setCompleted(prev => {
      const updated = {
        ...prev,
        [dayIdx]: { ...prev[dayIdx], [slotKey]: !prev[dayIdx]?.[slotKey] }
      };
      // Check if ALL activities completed
      const total = (days || []).reduce((acc, day, di) => acc + getSlotsForDay(day, di, tripData).length, 0);
      const done = Object.values(updated).reduce((acc, dayMap) => acc + Object.values(dayMap).filter(Boolean).length, 0);
      if (done === total && total > 0) {
        setTimeout(() => triggerCelebration(), 300);
      }
      return updated;
    });
  }, [days, tripData]);

  const triggerCelebration = () => {
    const pieces = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ['#f97316','#eab308','#10b981','#3b82f6','#a855f7','#ef4444','#06b6d4'][i % 7],
      size: Math.random() * 10 + 6,
      delay: Math.random() * 1.2,
      duration: Math.random() * 2 + 2,
      rotate: Math.random() * 360
    }));
    setConfetti(pieces);
    setShowCelebration(true);
    setTimeout(() => setConfetti([]), 4000);
  };

  const currentDay = days?.[currentDayIdx];
  const slots = currentDay ? getSlotsForDay(currentDay, currentDayIdx, tripData) : [];
  const dayCompletedCount = Object.values(completed[currentDayIdx] || {}).filter(Boolean).length;
  const dayTotal = slots.length;
  const dayPct = dayTotal > 0 ? Math.round((dayCompletedCount / dayTotal) * 100) : 0;
  const isDayComplete = dayCompletedCount === dayTotal && dayTotal > 0;

  // Escape to exit
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onExit(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onExit]);

  const accentColors = [
    { from: '#c2410c', to: '#ea580c' },
    { from: '#b45309', to: '#d97706' },
    { from: '#5b21b6', to: '#7c3aed' },
    { from: '#0e7490', to: '#0891b2' },
    { from: '#15803d', to: '#16a34a' },
    { from: '#b91c1c', to: '#dc2626' },
    { from: '#be185d', to: '#db2777' },
  ];
  const ac = accentColors[currentDayIdx % accentColors.length];

  return (
    <div className="fixed inset-0 z-[4000] flex flex-col bg-slate-950 text-white overflow-hidden">
      <style>{`
        @keyframes livetrip-confetti {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes livetrip-pop {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.06); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes livetrip-check {
          0% { transform: scale(0) rotate(-45deg); }
          70% { transform: scale(1.2) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes livetrip-progress {
          from { width: 0%; }
        }
        @keyframes livetrip-pulse-ring {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes livetrip-slide-up {
          from { transform: translateY(18px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes livetrip-celebrate {
          0% { transform: scale(0.6); opacity: 0; }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
        .livetrip-slot { animation: livetrip-slide-up 0.28s cubic-bezier(0.16,1,0.3,1) both; }
        .livetrip-slot:nth-child(1) { animation-delay: 0ms; }
        .livetrip-slot:nth-child(2) { animation-delay: 60ms; }
        .livetrip-slot:nth-child(3) { animation-delay: 120ms; }
        .livetrip-slot:nth-child(4) { animation-delay: 180ms; }
        .livetrip-check-anim { animation: livetrip-check 0.32s cubic-bezier(0.34,1.56,0.64,1) both; }
        .livetrip-pop { animation: livetrip-pop 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .livetrip-celebrate { animation: livetrip-celebrate 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
      `}</style>

      {/* Confetti particles */}
      {confetti.map(p => (
        <div
          key={p.id}
          style={{
            position: 'fixed',
            left: `${p.x}%`,
            top: '-30px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: p.id % 3 === 0 ? '50%' : '2px',
            background: p.color,
            animation: `livetrip-confetti ${p.duration}s ease-in ${p.delay}s both`,
            zIndex: 9999,
            transform: `rotate(${p.rotate}deg)`,
            pointerEvents: 'none'
          }}
        />
      ))}

      {/* ── TOP HEADER BAR ── */}
      <div
        className="shrink-0 px-4 pt-4 pb-3 flex items-center justify-between border-b border-white/10"
        style={{ background: `linear-gradient(135deg, ${ac.from}ee 0%, ${ac.to}dd 100%)` }}
      >
        {/* Left: Live badge + title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            <div className="w-3 h-3 rounded-full bg-white" />
            <div className="absolute inset-0 rounded-full bg-white" style={{ animation: 'livetrip-pulse-ring 1.4s ease-out infinite' }} />
          </div>
          <div className="min-w-0">
            <div className="text-[9px] font-black uppercase tracking-widest text-white/70">LIVE TRIP MODE</div>
            <div className="font-black text-sm text-white truncate">{tripData?.destinationName || 'My Yatra'}</div>
          </div>
        </div>

        {/* Center: Overall progress */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="text-center">
            <div className="text-xs font-black text-white">{completedCount}/{totalActivities}</div>
            <div className="text-[9px] text-white/60 uppercase tracking-wider">Done</div>
          </div>
          <div className="w-24 h-1.5 rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-white transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="text-xs font-black text-white">{progressPct}%</div>
        </div>

        {/* Right: Exit */}
        <button
          onClick={onExit}
          className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/25 hover:bg-black/40 text-white text-xs font-bold transition active:scale-95 cursor-pointer border border-white/15"
        >
          <X size={13} /> Exit
        </button>
      </div>

      {/* ── DAY SELECTOR TABS ── */}
      <div className="shrink-0 px-4 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-white/10 bg-slate-900">
        {(days || []).map((day, idx) => {
          const dSlots = getSlotsForDay(day, idx, tripData);
          const dDone = Object.values(completed[idx] || {}).filter(Boolean).length;
          const dComplete = dSlots.length > 0 && dDone === dSlots.length;
          const isActive = idx === currentDayIdx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => { setCurrentDayIdx(idx); setExpandedSlot(null); }}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black transition-all duration-200 border cursor-pointer ${
                isActive
                  ? 'bg-white text-slate-900 border-white shadow-lg shadow-white/10'
                  : dComplete
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : 'bg-white/8 text-white/60 border-white/10 hover:bg-white/15 hover:text-white'
              }`}
            >
              {dComplete && <CheckCircle size={10} className="text-emerald-400" />}
              <span>Day {day.dayNumber || day.day || idx + 1}</span>
              {dSlots.length > 0 && (
                <span className={`text-[9px] px-1 py-0.5 rounded-full font-black ${
                  isActive ? 'bg-slate-200 text-slate-700' : dComplete ? 'bg-emerald-500/30 text-emerald-300' : 'bg-white/10 text-white/50'
                }`}>{dDone}/{dSlots.length}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── MAIN SCROLL AREA ── */}
      <div className="flex-1 overflow-y-auto">
        {/* Day header */}
        {currentDay && (
          <div
            className="px-4 py-5"
            style={{
              background: `linear-gradient(160deg, ${ac.from}22 0%, transparent 60%)`,
              borderBottom: '1px solid rgba(255,255,255,0.06)'
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40">DAY {currentDayIdx + 1} OF {days.length}</span>
                <h2 className="text-xl font-serif font-black text-white leading-tight mt-0.5">
                  {currentDay.dayTheme || currentDay.theme || `Day ${currentDayIdx + 1}`}
                </h2>
                {currentDay.date && (
                  <p className="text-xs text-white/50 font-medium mt-0.5">{currentDay.date}</p>
                )}
              </div>
              {/* Day progress circle */}
              <div className="relative w-14 h-14 shrink-0">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                  <circle
                    cx="28" cy="28" r="22" fill="none"
                    stroke={isDayComplete ? '#10b981' : 'white'}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 22}`}
                    strokeDashoffset={`${2 * Math.PI * 22 * (1 - dayPct / 100)}`}
                    style={{ transition: 'stroke-dashoffset 0.6s ease, stroke 0.4s ease' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {isDayComplete
                    ? <CheckCircle size={18} className="text-emerald-400" />
                    : <span className="text-xs font-black text-white leading-none">{dayPct}%</span>
                  }
                </div>
              </div>
            </div>

            {/* Mobile overall progress */}
            <div className="sm:hidden flex items-center gap-2 mt-1">
              <div className="flex-1 h-1 rounded-full bg-white/15 overflow-hidden">
                <div className="h-full rounded-full bg-white/70 transition-all duration-700" style={{ width: `${progressPct}%` }} />
              </div>
              <span className="text-[10px] font-black text-white/50">{completedCount}/{totalActivities} total</span>
            </div>
          </div>
        )}

        {/* Activity Checklist */}
        <div className="px-4 py-4 space-y-3">
          {slots.map((slot, si) => {
            const isDone = !!completed[currentDayIdx]?.[slot.key];
            const isExpanded = expandedSlot === `${currentDayIdx}-${slot.key}`;
            return (
              <div
                key={slot.key}
                className={`livetrip-slot rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isDone
                    ? 'bg-emerald-950/60 border-emerald-500/30'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Main row */}
                <div className="flex items-center gap-3 p-4">
                  {/* Check button */}
                  <button
                    type="button"
                    onClick={() => toggleActivity(currentDayIdx, slot.key)}
                    className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center transition-all duration-200 cursor-pointer border-2 ${
                      isDone
                        ? 'bg-emerald-500 border-emerald-500'
                        : 'bg-transparent border-white/25 hover:border-white/60'
                    }`}
                    aria-label={isDone ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {isDone && <Check size={14} className="text-white livetrip-check-anim" strokeWidth={3} />}
                  </button>

                  {/* Icon badge */}
                  <div
                    className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center text-lg"
                    style={{ background: slot.bg }}
                  >
                    {slot.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                        style={{ color: slot.color, background: slot.bg }}
                      >
                        {slot.time}
                      </span>
                      <span className="text-[9px] font-bold text-white/35 uppercase tracking-wider">{slot.label}</span>
                    </div>
                    <h4 className={`font-black text-sm leading-tight ${ isDone ? 'line-through text-white/35' : 'text-white' }`}>
                      {slot.title}
                    </h4>
                  </div>

                  {/* Expand + Maps */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={slot.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="w-8 h-8 rounded-xl bg-white/8 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-sm transition-all cursor-pointer"
                      title="Open in Google Maps"
                    >
                      📍
                    </a>
                    <button
                      type="button"
                      onClick={() => setExpandedSlot(isExpanded ? null : `${currentDayIdx}-${slot.key}`)}
                      className="w-8 h-8 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                    >
                      <ChevronDown size={14} className={`text-white/50 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Expanded detail */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-0 livetrip-pop">
                    <div className="ml-[calc(2rem+2.25rem+0.75rem)] space-y-2.5">
                      <p className="text-xs text-white/60 leading-relaxed">{slot.desc}</p>
                      {slot.tip && (
                        <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                          <span className="text-base shrink-0 mt-0.5">💡</span>
                          <div>
                            <div className="text-[9px] font-black uppercase tracking-wider text-amber-400 mb-0.5">Local Insider Tip</div>
                            <p className="text-xs text-amber-200/80 leading-relaxed">{slot.tip}</p>
                          </div>
                        </div>
                      )}
                      <a
                        href={slot.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/25 text-emerald-300 text-xs font-bold transition cursor-pointer"
                      >
                        📍 Open in Google Maps ↗
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Day Complete Banner */}
        {isDayComplete && (
          <div className="mx-4 mb-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-900/70 to-teal-900/70 border border-emerald-500/30 livetrip-pop">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/25 flex items-center justify-center text-xl">🎉</div>
              <div>
                <div className="font-black text-emerald-300 text-sm">Day {currentDayIdx + 1} Complete!</div>
                <div className="text-xs text-emerald-400/70">All activities checked off. Incredible!</div>
              </div>
            </div>
            {currentDayIdx < days.length - 1 && (
              <button
                type="button"
                onClick={() => { setCurrentDayIdx(currentDayIdx + 1); setExpandedSlot(null); }}
                className="mt-3 w-full py-2.5 rounded-xl bg-emerald-500/25 hover:bg-emerald-500/40 text-emerald-200 text-xs font-black flex items-center justify-center gap-2 transition cursor-pointer border border-emerald-500/30"
              >
                Next Day: {days[currentDayIdx + 1]?.dayTheme || days[currentDayIdx + 1]?.theme || `Day ${currentDayIdx + 2}`} <ChevronRight size={13} />
              </button>
            )}
          </div>
        )}

        {/* Bottom spacing */}
        <div className="h-6" />
      </div>

      {/* ── DAY NAVIGATION FOOTER ── */}
      <div className="shrink-0 px-4 py-3 border-t border-white/10 bg-slate-900 flex items-center justify-between gap-3">
        <button
          type="button"
          disabled={currentDayIdx === 0}
          onClick={() => { setCurrentDayIdx(d => d - 1); setExpandedSlot(null); }}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 text-white text-xs font-bold transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronLeft size={14} /> Prev Day
        </button>

        {/* Center overall stats */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5">
            <Target size={12} className="text-white/40" />
            <span className="text-[10px] font-black text-white/50">{completedCount}/{totalActivities} Activities</span>
          </div>
          <div className="flex items-center justify-center gap-1 mt-1">
            {(days || []).map((_, di) => {
              const dSlots = getSlotsForDay(days[di], di, tripData);
              const dDone = Object.values(completed[di] || {}).filter(Boolean).length;
              const dComplete = dSlots.length > 0 && dDone === dSlots.length;
              return (
                <div
                  key={di}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: di === currentDayIdx ? '16px' : '6px',
                    height: '4px',
                    background: dComplete ? '#10b981' : di === currentDayIdx ? 'white' : 'rgba(255,255,255,0.2)'
                  }}
                />
              );
            })}
          </div>
        </div>

        <button
          type="button"
          disabled={currentDayIdx === days.length - 1}
          onClick={() => { setCurrentDayIdx(d => d + 1); setExpandedSlot(null); }}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 text-white text-xs font-bold transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          Next Day <ChevronRight size={14} />
        </button>
      </div>

      {/* ── FULL TRIP CELEBRATION OVERLAY ── */}
      {showCelebration && (
        <div className="fixed inset-0 z-[5000] flex flex-col items-center justify-center bg-slate-950/92 backdrop-blur-md">
          <div className="text-center px-8 livetrip-celebrate">
            <div className="text-8xl mb-4">🏆</div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-amber-500/20 border border-amber-500/30">
              <Trophy size={13} className="text-amber-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">Yatra Complete!</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-white mb-3">
              You did it, Yatri! 🇮🇳
            </h2>
            <p className="text-white/60 text-sm mb-2 font-medium max-w-xs mx-auto">
              All {totalActivities} activities completed across {days.length} days in{' '}
              <strong className="text-white">{tripData?.destinationName}</strong>.
            </p>
            <p className="text-white/40 text-xs mb-8">What a journey. BharatDarshan is proud of you!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setShowCelebration(false)}
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 transition cursor-pointer"
              >
                View Itinerary
              </button>
              <button
                onClick={onExit}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-sm font-black transition shadow-lg shadow-orange-500/30 cursor-pointer"
              >
                🎊 Back to Planner
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function ItineraryResult({ itinerary, tripData, onReset }) {
  if (!itinerary) return null;
  const { tripTitle, tagline, highlights, days, mustTry, packingEssentials, localInsights, bestTimeToVisit, budgetSummary, logistics } = itinerary;
  const departureCity = tripData?.departureCity || null;
  const [copied, setCopied] = useState(false);
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const [showHostTipsDrawer, setShowHostTipsDrawer] = useState(false);
  const [showLiveTripMode, setShowLiveTripMode] = useState(false);

  // Reset active tab if itinerary changes
  useEffect(() => {
    setActiveDayIdx(0);
  }, [itinerary]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (showHostTipsDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showHostTipsDrawer]);

  // Escape key listener to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showHostTipsDrawer) {
        setShowHostTipsDrawer(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showHostTipsDrawer]);

  const handleDownloadPDF = () => {
    setPdfGenerating(true);
    try {
      const ok = generateItineraryPDF(itinerary, tripData);
      if (!ok) {
        // Fallback to browser print if jsPDF encounters an issue
        window.print();
      }
    } catch (err) {
      console.error("PDF download error, falling back to print:", err);
      window.print();
    } finally {
      setTimeout(() => setPdfGenerating(false), 1200);
    }
  };

  const handleShareWhatsApp = () => {
    const siteUrl = "https://bharatdarshan-seven.vercel.app";
    let text = `🇮🇳 *BharatDarshan Yatra Itinerary: ${tripTitle}*\n\n`;
    if (tripData?.destinationName) text += `📍 *Destination:* ${tripData.destinationName}\n`;
    if (tripData?.origin) text += `🏁 *Departing From:* ${tripData.origin}\n`;
    if (tripData?.days) text += `🗓️ *Duration:* ${tripData.days} Days | ${tripData.travellers || 1} Person(s)\n`;
    if (tripData?.budget) text += `💰 *Budget:* ${tripData.budget}\n`;
    if (budgetSummary?.estimatedTotal) text += `💵 *Est. Budget:* ${budgetSummary.estimatedTotal}\n\n`;

    if (highlights && highlights.length > 0) {
      text += `✨ *Highlights:*\n` + highlights.slice(0, 4).map(h => `• ${h}`).join('\n') + `\n\n`;
    }

    if (days && days.length > 0) {
      text += `📅 *Day-by-Day Highlights:*\n`;
      days.slice(0, 5).forEach(d => {
        text += `*Day ${d.day}: ${d.theme}*\n`;
        const acts = d.activities && d.activities.length > 0
          ? d.activities
          : ["morning", "afternoon", "evening"].filter(p => d[p]).map(p => ({
              timeOfDay: p.charAt(0).toUpperCase() + p.slice(1),
              locationName: d[p].locationName || d[p].activity
            }));
        acts.slice(0, 2).forEach(a => {
          text += `  • ${a.timeOfDay || 'Activity'}: ${a.locationName || a.activity}\n`;
        });
      });
      if (days.length > 5) {
        text += `  ...and more!\n`;
      }
      text += `\n`;
    }

    text += `Plan & customize your Yatra on BharatDarshan:\n👉 ${siteUrl}/plan`;
    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/?text=${encoded}`;

    try {
      const win = window.open(waUrl, '_blank', 'noopener,noreferrer');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = waUrl;
      }
    } catch (e) {
      window.location.href = waUrl;
    }
  };

  const handleCopyItinerary = () => {
    let text = `BharatDarshan Yatra Itinerary: ${tripTitle}\n`;
    text += `${tagline || ''}\n\n`;
    text += `Destination: ${tripData?.destinationName || ''}\n`;
    if (tripData?.origin) text += `Origin: ${tripData.origin}\n`;
    text += `Duration: ${tripData?.days || 1} Days | Travelers: ${tripData?.travellers || 1}\n\n`;

    if (days && days.length > 0) {
      days.forEach(d => {
        text += `--- DAY ${d.day}: ${d.theme} ---\n`;
        const acts = d.activities && d.activities.length > 0
          ? d.activities
          : ["morning", "afternoon", "evening"].filter(p => d[p]).map(p => ({
              timeOfDay: p.charAt(0).toUpperCase() + p.slice(1),
              locationName: d[p].locationName || d[p].activity,
              description: d[p].description
            }));
        acts.forEach(a => {
          text += `• ${a.timeOfDay || 'Activity'}: ${a.locationName || a.activity}\n  ${a.description || ''}\n`;
        });
        text += `\n`;
      });
    }
    if (budgetSummary) {
      text += `Budget Estimate: ${budgetSummary.estimatedTotal || ''}\n\n`;
    }
    text += `Planned with ❤️ on BharatDarshan: https://bharatdarshan-seven.vercel.app/plan\n`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleNativeShare = async () => {
    const siteUrl = "https://bharatdarshan-seven.vercel.app/plan";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `BharatDarshan Itinerary - ${tripTitle}`,
          text: `Check out my customized travel itinerary for ${tripData?.destinationName || 'India'} on BharatDarshan!`,
          url: siteUrl,
        });
      } catch (e) {
        console.warn("Native share cancelled or failed, using WhatsApp", e);
        handleShareWhatsApp();
      }
    } else {
      handleShareWhatsApp();
    }
  };

  return (
    <>
      {/* Live Trip Mode fullscreen overlay */}
      {showLiveTripMode && (
        <LiveTripMode
          itinerary={itinerary}
          tripData={tripData}
          onExit={() => setShowLiveTripMode(false)}
        />
      )}

      <div className="space-y-8 pb-20 print-container">
      {/* ── Trip Hero Banner ─── */}
      <div className="rounded-3xl p-8 md:p-12 text-slate-900 shadow-sm border border-slate-200 bg-white relative overflow-hidden">
        {/* Subtle ambient light glow */}
        <div style={{position:'absolute',top:'-60px',left:'-40px',width:'360px',height:'360px',borderRadius:'50%',background:'radial-gradient(circle,rgba(245,158,11,0.06) 0%,transparent 70%)',pointerEvents:'none'}} />
        
        {/* AI badge + Start Trip button row */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 shadow-xs">
            <Sparkles size={12} className="text-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">Gemini 3.6 Flash AI Engine</span>
          </div>
          {/* 🚀 START LIVE TRIP MODE BUTTON */}
          <button
            type="button"
            id="start-live-trip-btn"
            onClick={() => setShowLiveTripMode(true)}
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider text-white overflow-hidden cursor-pointer shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 active:scale-95 hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f97316 100%)' }}
          >
            {/* shimmer sweep */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'yatra-btn-sweep 2.5s ease-in-out infinite'
              }}
            />
            {/* pulse ring */}
            <div className="relative shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <div
                className="absolute inset-0 rounded-full bg-white/60"
                style={{ animation: 'livetrip-pulse-ring 1.4s ease-out infinite' }}
              />
            </div>
            <Play size={13} className="relative z-10 fill-white" />
            <span className="relative z-10">Start Live Trip</span>
          </button>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-2">{tripTitle}</h2>
        <p className="text-slate-600 font-medium mb-5">{tagline}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {(highlights || []).map((h, i) => (
            <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
              ✓ {h}
            </span>
          ))}
        </div>
        {/* Cockpit summary strip */}
        <div className="flex flex-wrap gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-3.5 shadow-inner">
          {tripData.origin && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
              <Navigation size={13} className="text-amber-600" />{tripData.origin}
            </span>
          )}
          <span className="text-slate-300 hidden md:block">│</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <MapPin size={13} className="text-amber-600" />{tripData.destinationName}
          </span>
          <span className="text-slate-300 hidden md:block">│</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <Clock size={13} className="text-amber-600" />{tripData.days} Days
          </span>
          <span className="text-slate-300 hidden md:block">│</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <Users size={13} className="text-indigo-600" />{tripData.travellers} Person(s)
          </span>
          <span className="text-slate-300 hidden md:block">│</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <Wallet size={13} className="text-emerald-600" />{tripData.budget} Budget
          </span>
        </div>
      </div>

      {/* ── Departing From Logistics ──────────────────────────────────────── */}
      {departureCity && (
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
            <Car className="text-violet-600" size={16} /> Departing From — {departureCity.name}, {departureCity.state}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Train from origin */}
            <div className="flex flex-col justify-between p-4 bg-violet-50/70 rounded-xl border border-violet-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center text-xl shrink-0">🚂</div>
                <div>
                  <span className="text-[10px] font-black uppercase text-violet-600 tracking-wider">Board Train From</span>
                  <p className="font-black text-slate-900 text-sm leading-snug">{departureCity.trainStation.name}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Your nearest railway station</p>
                </div>
              </div>
              <a
                href={departureCity.trainStation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
              >
                📍 View on Google Maps ↗
              </a>
            </div>

            {/* Bus from origin */}
            <div className="flex flex-col justify-between p-4 bg-teal-50/70 rounded-xl border border-teal-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-xl shrink-0">🚌</div>
                <div>
                  <span className="text-[10px] font-black uppercase text-teal-600 tracking-wider">Board Bus From</span>
                  <p className="font-black text-slate-900 text-sm leading-snug">{departureCity.busStand.name}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Your nearest bus terminus</p>
                </div>
              </div>
              <a
                href={departureCity.busStand.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
              >
                📍 View on Google Maps ↗
              </a>
            </div>
          </div>
          <p className="text-xs text-slate-400 font-medium mt-3 text-center">⬇️ Book your train / bus ticket from the above station and head to your destination below</p>
        </div>
      )}

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

      {/* ── Day-by-Day Timeline Section ── */}
      <div>
        {/* Sticky Horizontal Day Tabs Bar */}
        <div className="sticky top-2 md:top-4 z-20 bg-slate-50/95 backdrop-blur-md py-3 -mx-2 px-2 md:mx-0 md:px-0">
          <div className="flex items-center justify-between gap-3 mb-2.5 px-1">
            <div className="flex items-center gap-2">
              <Calendar className="text-orange-600" size={18} />
              <h3 className="text-base md:text-lg font-serif font-black text-slate-900">
                Day-by-Day Timeline
              </h3>
            </div>
            {days && days.length > 0 && (
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200/90 shadow-2xs">
                Day {Math.min(Math.max(0, activeDayIdx), days.length - 1) + 1} of {days.length}
              </span>
            )}
          </div>

          {/* Horizontal Day Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-0.5">
            {(days || []).map((day, idx) => {
              const currentActive = Math.min(Math.max(0, activeDayIdx), (days?.length || 1) - 1);
              const isActive = idx === currentActive;
              return (
                <button
                  key={day.dayNumber ?? day.day ?? idx}
                  type="button"
                  onClick={() => setActiveDayIdx(idx)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-black transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/25 scale-[1.02] border border-orange-500"
                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/90 shadow-2xs"
                  }`}
                  aria-selected={isActive}
                >
                  <span>Day {day.dayNumber || day.day || idx + 1}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Single Active Day Card View */}
        {days && days.length > 0 && (() => {
          const currentDayIdx = Math.min(Math.max(0, activeDayIdx), days.length - 1);
          const day = days[currentDayIdx];
          if (!day) return null;

          const accentColors = [
            { from: '#c2410c', to: '#ea580c', glow: 'rgba(234,88,12,0.35)' },
            { from: '#b45309', to: '#d97706', glow: 'rgba(217,119,6,0.3)' },
            { from: '#5b21b6', to: '#7c3aed', glow: 'rgba(124,58,237,0.3)' },
            { from: '#0e7490', to: '#0891b2', glow: 'rgba(8,145,178,0.3)' },
            { from: '#15803d', to: '#16a34a', glow: 'rgba(22,163,74,0.3)' },
            { from: '#b91c1c', to: '#dc2626', glow: 'rgba(220,38,38,0.3)' },
            { from: '#be185d', to: '#db2777', glow: 'rgba(219,39,119,0.3)' },
          ];
          const ac = accentColors[currentDayIdx % accentColors.length];

          // 3 Sleek Slots: Morning, Afternoon, Evening
          const morningItem = day.morning || (day.activities || []).find(a => (a.timeOfDay || '').toLowerCase().includes('morning')) || (day.activities || [])[0];
          const afternoonItem = day.afternoon || (day.activities || []).find(a => (a.timeOfDay || '').toLowerCase().includes('afternoon')) || (day.activities || [])[1];
          const eveningItem = day.evening || (day.activities || []).find(a => (a.timeOfDay || '').toLowerCase().includes('evening')) || (day.activities || [])[2];

          const glanceRows = [
            {
              key: "morning",
              label: "Morning",
              icon: "🌅",
              badgeBg: "rgba(251,146,60,0.12)",
              badgeColor: "#c2410c",
              time: morningItem?.time || "09:00 AM",
              title: morningItem?.title || morningItem?.locationName || morningItem?.activity || "Morning Sightseeing",
              desc: morningItem?.description || morningItem?.desc || "Explore iconic sights and heritage courtyards with crisp morning light.",
              mapsLink: morningItem?.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((morningItem?.title || morningItem?.locationName || 'Morning') + ' ' + (tripData?.destinationName || ''))}`
            },
            {
              key: "afternoon",
              label: "Afternoon",
              icon: "☀️",
              badgeBg: "rgba(234,179,8,0.12)",
              badgeColor: "#92400e",
              time: afternoonItem?.time || "01:00 PM",
              title: afternoonItem?.title || afternoonItem?.locationName || afternoonItem?.activity || "Afternoon Landmark & Cultural Spot",
              desc: afternoonItem?.description || afternoonItem?.desc || "Tour prominent landmarks, royal museums, and authentic dining places.",
              mapsLink: afternoonItem?.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((afternoonItem?.title || afternoonItem?.locationName || 'Afternoon') + ' ' + (tripData?.destinationName || ''))}`
            },
            {
              key: "evening",
              label: "Evening",
              icon: "🌙",
              badgeBg: "rgba(99,102,241,0.12)",
              badgeColor: "#4338ca",
              time: eveningItem?.time || "05:00 PM",
              title: eveningItem?.title || eveningItem?.locationName || eveningItem?.activity || "Evening Promenade & Bazaars",
              desc: eveningItem?.description || eveningItem?.desc || "Stroll through vibrant evening bazaars, scenic sunset viewpoints, and night lights.",
              mapsLink: eveningItem?.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((eveningItem?.title || eveningItem?.locationName || 'Evening') + ' ' + (tripData?.destinationName || ''))}`
            }
          ];

          return (
            <div
              key={currentDayIdx}
              className="animate-yatra-tab-fade rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-white"
            >
              {/* Active Day Header */}
              <div
                className="px-5 py-4 flex items-center justify-between text-white"
                style={{
                  background: `linear-gradient(135deg, ${ac.from} 0%, ${ac.to} 100%)`,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.16)'
                }}
              >
                <div className="min-w-0 pr-3">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-base md:text-lg">
                      Day {day.dayNumber || day.day || currentDayIdx + 1}
                    </span>
                    {day.date && (
                      <span className="text-white/75 text-xs font-medium">· {day.date}</span>
                    )}
                  </div>
                  <p className="text-white/90 text-xs md:text-sm font-semibold truncate mt-0.5">
                    {day.dayTheme || day.theme}
                  </p>
                </div>

                {/* Day navigation arrow buttons */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveDayIdx(Math.max(0, currentDayIdx - 1))}
                    disabled={currentDayIdx === 0}
                    className="w-8 h-8 rounded-lg bg-black/20 hover:bg-black/35 disabled:opacity-30 disabled:pointer-events-none text-white flex items-center justify-center text-sm font-bold transition active:scale-95 cursor-pointer"
                    title="Previous day"
                    aria-label="Previous day"
                  >
                    ‹
                  </button>
                  <span className="text-xs font-black text-white px-1">
                    {currentDayIdx + 1}/{days.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveDayIdx(Math.min(days.length - 1, currentDayIdx + 1))}
                    disabled={currentDayIdx === days.length - 1}
                    className="w-8 h-8 rounded-lg bg-black/20 hover:bg-black/35 disabled:opacity-30 disabled:pointer-events-none text-white flex items-center justify-center text-sm font-bold transition active:scale-95 cursor-pointer"
                    title="Next day"
                    aria-label="Next day"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Compact 3-Row Day Glance */}
              <div className="p-4 md:p-5 space-y-2.5">
                {glanceRows.map((row) => (
                  <div
                    key={row.key}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200/70 transition-all duration-200"
                  >
                    {/* Period Icon badge */}
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-xl shrink-0">
                      {row.icon}
                    </div>

                    {/* Title + 1-line description + time badge */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shrink-0"
                          style={{ background: row.badgeBg, color: row.badgeColor }}
                        >
                          {row.time}
                        </span>
                        <h4 className="font-black text-slate-900 text-xs md:text-sm truncate">
                          {row.title}
                        </h4>
                      </div>
                      <p className="text-[11px] md:text-xs text-slate-500 font-medium truncate">
                        {row.desc}
                      </p>
                    </div>

                    {/* Maps link */}
                    <a
                      href={row.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold shrink-0 transition-all duration-200 hover:scale-105 active:scale-95 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 shadow-2xs"
                      title={`View ${row.title} on Google Maps`}
                    >
                      <span>📍 Maps</span>
                      <span className="text-[9px]">↗</span>
                    </a>
                  </div>
                ))}

                {/* Slide-Up Host Tips Drawer Trigger Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowHostTipsDrawer(true)}
                    className="w-full py-3.5 px-4 rounded-xl font-black text-xs md:text-sm text-amber-950 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 hover:from-amber-100 hover:to-orange-100 border border-amber-200/90 shadow-2xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.99] cursor-pointer group"
                  >
                    <span className="text-base group-hover:scale-110 transition-transform duration-200">💡</span>
                    <span>View Local Host Tips & Hacks</span>
                    <span className="text-amber-600 group-hover:translate-x-1 transition-transform duration-200">➔</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ── Slide-Up Host Tips Drawer / Mobile Bottom Sheet ── */}
        {showHostTipsDrawer && days && days.length > 0 && (() => {
          const currentDayIdx = Math.min(Math.max(0, activeDayIdx), days.length - 1);
          const day = days[currentDayIdx];
          if (!day) return null;

          return (
            <div className="fixed inset-0 z-[2500] flex items-end md:items-center justify-center p-0 md:p-6">
              {/* Backdrop dismiss */}
              <div
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
                onClick={() => setShowHostTipsDrawer(false)}
                aria-hidden="true"
              />

              {/* Drawer Sheet Container */}
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="host-tips-drawer-title"
                className="relative z-10 w-full max-w-xl bg-white rounded-t-[28px] md:rounded-[28px] shadow-2xl border-t md:border border-slate-200/90 max-h-[85vh] flex flex-col overflow-hidden animate-yatra-drawer-up"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile drag handle */}
                <div className="w-12 h-1.5 rounded-full bg-slate-300 mx-auto mt-3 mb-1 md:hidden shrink-0" />

                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4 shrink-0 bg-gradient-to-r from-amber-50/70 via-white to-orange-50/50">
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100/70 mb-1 border border-amber-200/70">
                      <span>💡 Local Host Playbook</span>
                    </div>
                    <h3 id="host-tips-drawer-title" className="font-serif font-black text-slate-900 text-base md:text-lg truncate">
                      Day {day.dayNumber || day.day || currentDayIdx + 1}: {day.dayTheme || day.theme}
                    </h3>
                  </div>

                  {/* Close button (✕) */}
                  <button
                    type="button"
                    onClick={() => setShowHostTipsDrawer(false)}
                    className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                    aria-label="Close tips drawer"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Scrollable Tips Content */}
                <div className="p-6 overflow-y-auto space-y-4 text-slate-800">
                  {/* 1. 💡 Local Hack */}
                  <div className="rounded-2xl p-4.5 bg-amber-50/90 border border-amber-200/90 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">💡</span>
                      <h4 className="font-black text-xs md:text-sm uppercase tracking-wider text-amber-900">
                        Local Hack
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-amber-950 leading-relaxed pl-7">
                      {day.insiderTip || day.tip || day.morning?.tip || day.afternoon?.tip || day.evening?.tip || "Book entry tickets online in advance to bypass peak ticketing queues. Connect with registered local guides at monument gates for authentic oral histories and hidden vantage angles."}
                    </p>
                  </div>

                  {/* 2. ⏰ Ideal Timing & Crowds */}
                  <div className="rounded-2xl p-4.5 bg-indigo-50/80 border border-indigo-100/90 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">⏰</span>
                      <h4 className="font-black text-xs md:text-sm uppercase tracking-wider text-indigo-900">
                        Ideal Timing & Crowds
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-indigo-950 leading-relaxed pl-7">
                      {day.bestTimeWindow || day.timing || "08:30 AM – 11:30 AM (Minimal crowds & pleasant light) & 04:30 PM – 07:00 PM (Breezy sunset & twilight ambience). Midday (12:00 PM – 03:00 PM) is best spent exploring indoor galleries or relaxing at authentic cafes."}
                    </p>
                  </div>

                  {/* 3. 👟 Comfort & Practical Note */}
                  <div className="rounded-2xl p-4.5 bg-emerald-50/80 border border-emerald-100/90 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">👟</span>
                      <h4 className="font-black text-xs md:text-sm uppercase tracking-wider text-emerald-900">
                        Comfort & Practical Note
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-emerald-950 leading-relaxed pl-7">
                      {day.practicalNote || day.note || "Wear comfortable, cushioned walking footwear suitable for cobbled ramps and stone steps. Keep a refillable hydration bottle, sun protection, and modest clothing for spiritual sites."}
                    </p>
                  </div>

                  {/* Where to Stay (Host Recommendation) */}
                  {day.stayRecommendation && (
                    <div className="rounded-2xl p-4 bg-blue-50/70 border border-blue-100 shadow-2xs">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🏨</span>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-blue-700">Recommended Area / Stay</span>
                            <p className="font-black text-slate-900 text-sm">{day.stayRecommendation.name}</p>
                          </div>
                        </div>
                        {day.stayRecommendation.googleMapsLink && (
                          <a
                            href={day.stayRecommendation.googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition"
                          >
                            📍 Map ↗
                          </a>
                        )}
                      </div>
                      {day.stayRecommendation.whyPick && (
                        <p className="text-xs text-blue-800 font-medium pl-7">{day.stayRecommendation.whyPick}</p>
                      )}
                      {day.stayRecommendation.approxRate && (
                        <p className="text-[11px] text-slate-500 font-bold pl-7 mt-1">Est. Rate: {day.stayRecommendation.approxRate}</p>
                      )}
                    </div>
                  )}

                  {/* Local Dining Spots */}
                  {day.diningSpots && day.diningSpots.length > 0 && (
                    <div className="rounded-2xl p-4 bg-orange-50/70 border border-orange-100 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="text-lg">🍽️</span>
                        <span className="text-xs font-black uppercase tracking-wider text-orange-800">Local Cuisine & Dining</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                        {day.diningSpots.map((spot, sIdx) => (
                          <div key={sIdx} className="p-2.5 rounded-xl bg-white border border-orange-200/70 flex items-center justify-between">
                            <div className="min-w-0 pr-2">
                              <p className="text-xs font-black text-slate-900 truncate">{spot.name}</p>
                              <p className="text-[10px] text-slate-500 truncate">{spot.specialty} · {spot.priceRange}</p>
                            </div>
                            {spot.googleMapsLink && (
                              <a
                                href={spot.googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold text-orange-600 hover:text-orange-700 shrink-0 p-1"
                              >
                                📍 ↗
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer close button */}
                <div className="p-4 border-t border-slate-100 bg-slate-50/80 flex items-center justify-end shrink-0">
                  <button
                    type="button"
                    onClick={() => setShowHostTipsDrawer(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-black text-xs hover:bg-slate-800 transition active:scale-95 cursor-pointer shadow-xs"
                  >
                    Close (✕)
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* ── Glass Cockpit Budget Summary ── */}
      {budgetSummary && (
        <div className="rounded-2xl p-6 bg-emerald-50/60 border border-emerald-200/90 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-black text-base flex items-center gap-2 text-emerald-950">
              <Wallet size={17} className="text-emerald-600" /> Budget Breakdown
            </h3>
            <div className="px-3.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
              Est. Total: {budgetSummary.estimatedTotal}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Stay", val: budgetSummary.accommodation, icon: "🏨", color: '#eff6ff', border: '#bfdbfe', tag: '#1d4ed8' },
              { label: "Food", val: budgetSummary.food, icon: "🍽️", color: '#fffbeb', border: '#fde68a', tag: '#b45309' },
              { label: "Transport", val: budgetSummary.transport, icon: "🚗", color: '#f5f3ff', border: '#ddd6fe', tag: '#6d28d9' },
              { label: "Activities", val: budgetSummary.activities, icon: "🎯", color: '#ecfdf5', border: '#a7f3d0', tag: '#047857' },
            ].map(item => (
              <div key={item.label} className="rounded-xl p-3 text-center bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xl mb-1.5">{item.icon}</div>
                <p className="text-[10px] font-black uppercase tracking-wider mb-1" style={{color:item.tag}}>{item.label}</p>
                <p className="text-xs font-black text-slate-900">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Must-Try Experiences ── */}
      {mustTry && mustTry.length > 0 && (
        <div className="rounded-2xl p-6" style={{background:'#fffbeb',border:'1px solid rgba(245,158,11,0.2)',boxShadow:'0 4px 20px rgba(245,158,11,0.07)'}}>
          <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2"><Star size={17} className="text-amber-500" /> Must-Try Experiences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {mustTry.map((m, i) => (
              <div key={m.item || i} className="flex gap-3 p-3.5 rounded-xl" style={{background:'rgba(255,255,255,0.8)',border:'1px solid rgba(245,158,11,0.18)'}}>
                <span className="text-amber-400 font-black text-lg shrink-0">★</span>
                <div>
                  <p className="font-black text-slate-900 text-sm">{m.item}</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{m.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Packing & Insights ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {packingEssentials && packingEssentials.length > 0 && (
          <div className="rounded-2xl p-5" style={{background:'#f8fafc',border:'1px solid rgba(226,232,240,0.8)',boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
            <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2"><Package size={15} className="text-slate-500" /> Packing Essentials</h3>
            <ul className="space-y-2">
              {packingEssentials.map((item, i) => (
                <li key={typeof item === 'string' ? item : i} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle size={13} className="text-emerald-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="space-y-3">
          {localInsights && (
            <div className="rounded-2xl p-5" style={{background:'rgba(59,130,246,0.04)',border:'1px solid rgba(59,130,246,0.14)'}}>
              <h3 className="font-black text-blue-900 mb-2 flex items-center gap-2"><Info size={14} className="text-blue-500" /> Local Insights</h3>
              <p className="text-blue-800 text-sm leading-relaxed">{localInsights}</p>
            </div>
          )}
          {bestTimeToVisit && (
            <div className="rounded-2xl p-5" style={{background:'rgba(16,185,129,0.04)',border:'1px solid rgba(16,185,129,0.14)'}}>
              <h3 className="font-black text-emerald-900 mb-2 flex items-center gap-2"><Calendar size={14} className="text-emerald-500" /> Best Time to Visit</h3>
              <p className="text-emerald-800 text-sm leading-relaxed">{bestTimeToVisit}</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Affiliate Booking CTAs ── */}
      <div>
        <h3 className="text-lg font-serif font-black text-slate-900 mb-4 flex items-center gap-2">
          <Hotel size={19} className="text-orange-600" /> Book Your Trip
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {(AFFILIATE_PARTNERS.hotels || []).map(p => (
            <a key={p.id} href={p.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3.5 p-4 rounded-2xl transition-all duration-200 active:scale-[0.97]"
              style={{background:'rgba(255,255,255,0.95)',border:'1.5px solid rgba(226,232,240,0.8)',boxShadow:'0 2px 12px rgba(0,0,0,0.05)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0" style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.15)'}}>🏨</div>
              <div className="flex-1 min-w-0">
                <p className="font-black text-slate-900 text-sm">{p.name}</p>
                <p className="text-[11px] text-slate-400 font-medium">Hotels · {p.commission} commission</p>
              </div>
              <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5" style={{background:'rgba(234,88,12,0.08)',border:'1px solid rgba(234,88,12,0.2)'}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </div>
            </a>
          ))}
          {(AFFILIATE_PARTNERS.flights || []).map(p => (
            <a key={p.id} href={p.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3.5 p-4 rounded-2xl transition-all duration-200 active:scale-[0.97]"
              style={{background:'rgba(255,255,255,0.95)',border:'1.5px solid rgba(226,232,240,0.8)',boxShadow:'0 2px 12px rgba(0,0,0,0.05)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{background:'rgba(59,130,246,0.08)',border:'1px solid rgba(59,130,246,0.15)'}}><Plane size={18} className="text-blue-600" /></div>
              <div className="flex-1 min-w-0">
                <p className="font-black text-slate-900 text-sm">{p.name}</p>
                <p className="text-[11px] text-slate-400 font-medium">Flights · {p.commission} commission</p>
              </div>
              <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5" style={{background:'rgba(59,130,246,0.08)',border:'1px solid rgba(59,130,246,0.2)'}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </div>
            </a>
          ))}
          {(AFFILIATE_PARTNERS.activities || []).map(p => (
            <a key={p.id} href={p.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3.5 p-4 rounded-2xl transition-all duration-200 active:scale-[0.97]"
              style={{background:'rgba(255,255,255,0.95)',border:'1.5px solid rgba(226,232,240,0.8)',boxShadow:'0 2px 12px rgba(0,0,0,0.05)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{background:'rgba(139,92,246,0.08)',border:'1px solid rgba(139,92,246,0.15)'}}><Navigation size={18} className="text-violet-600" /></div>
              <div className="flex-1 min-w-0">
                <p className="font-black text-slate-900 text-sm">{p.name}</p>
                <p className="text-[11px] text-slate-400 font-medium">Tours & Activities · {p.commission} commission</p>
              </div>
              <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5" style={{background:'rgba(139,92,246,0.08)',border:'1px solid rgba(139,92,246,0.2)'}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </div>
            </a>
          ))}
          {(AFFILIATE_PARTNERS.transport || []).map(p => (
            <a key={p.id} href={p.affiliateUrl} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3.5 p-4 rounded-2xl transition-all duration-200 active:scale-[0.97]"
              style={{background:'rgba(255,255,255,0.95)',border:'1.5px solid rgba(226,232,240,0.8)',boxShadow:'0 2px 12px rgba(0,0,0,0.05)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.15)'}}><Car size={18} className="text-emerald-600" /></div>
              <div className="flex-1 min-w-0">
                <p className="font-black text-slate-900 text-sm">{p.name}</p>
                <p className="text-[11px] text-slate-400 font-medium">Transport · {p.commission} commission</p>
              </div>
              <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5" style={{background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.2)'}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Action Pill Buttons ── */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2 no-print">
        <button
          type="button"
          onClick={handleDownloadPDF}
          disabled={pdfGenerating}
          className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 overflow-hidden cursor-pointer"
          style={{background:'linear-gradient(135deg,#c2410c,#ea580c,#f97316)',color:'#fff',boxShadow:'0 0 20px rgba(234,88,12,0.35), 0 4px 16px rgba(180,70,0,0.25)',opacity:pdfGenerating?0.75:1}}
        >
          <span className="absolute inset-0 pointer-events-none" style={{background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)',backgroundSize:'200% 100%',animation:'yatra-btn-shimmer 2.5s linear infinite'}}/>
          {pdfGenerating ? <RefreshCw size={14} className="animate-spin relative z-10" /> : <Download size={14} className="relative z-10" />}
          <span className="relative z-10">{pdfGenerating ? 'Generating PDF...' : 'Download PDF'}</span>
        </button>

        <button
          type="button"
          onClick={handleShareWhatsApp}
          className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-200 active:scale-95"
          style={{background:'linear-gradient(135deg,#065f46,#059669,#34d399)',color:'#fff',boxShadow:'0 0 20px rgba(5,150,105,0.35), 0 4px 16px rgba(4,120,87,0.25)'}}
        >
          <MessageSquarePlus size={14} /> Share on WhatsApp
        </button>

        <button
          type="button"
          onClick={handleCopyItinerary}
          className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-200 active:scale-95"
          style={copied ? {
            background:'linear-gradient(135deg,#065f46,#059669)',color:'#fff',boxShadow:'0 0 16px rgba(5,150,105,0.3)'
          } : {
            background:'#ffffff',color:'#334155',border:'1px solid #cbd5e1',boxShadow:'0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          {copied ? <Check size={14} className="text-emerald-300" /> : <Copy size={14} className="text-slate-600" />}
          {copied ? 'Copied!' : 'Copy Itinerary'}
        </button>

        <button
          onClick={onReset}
          className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/25 cursor-pointer"
        >
          <Sparkles size={13} className="text-white" />
          <span>Plan Another Yatra</span>
        </button>
      </div>
    </div>
    </>
  );
}


export default function PlanMyYatra() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

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
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-medium text-slate-600">Checking authentication state...</span>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen w-full overflow-y-auto bg-slate-50 text-slate-800">
        <style>{`
          @keyframes yatra-shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}</style>
        {/* Header section */}
        <div className="relative overflow-hidden border-b border-slate-200 pt-28 md:pt-32 pb-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <button onClick={() => navigate("/")}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-orange-600 mb-6 transition">
              <ChevronLeft size={14} /> Back to Home
            </button>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-amber-300 bg-amber-50">
              <Sparkles size={13} className="text-amber-500" />
              <span className="text-[9px] font-black uppercase tracking-widest text-amber-700">Plan My Yatra Access</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black mb-4 italic text-slate-900">
              Login Required to Plan Your Yatra
            </h1>
            <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm leading-relaxed">
              Personalized AI trip itinerary create karne ke liye Google se log in karein.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Login Gate Card - Cinematic Dark Glassmorphism */}
          <div className="rounded-[32px] p-8 md:p-12 text-center bg-white border border-slate-200 shadow-sm mb-10 relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto mb-6">
              <Lock size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-slate-900 mb-3">
              Unlock AI Itinerary Generator
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm mb-8 font-medium">
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
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 cursor-pointer"
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

          {/* Compact Support & Feedback Trigger Bar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">Helpline & Support</p>
              <p className="text-sm font-black text-slate-800">📞 1800-103-3500 <span className="text-xs text-slate-400 font-medium">(24x7 Tourist Helpline)</span></p>
            </div>
            <button
              onClick={() => setShowFeedbackModal(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-xs transition border border-amber-200 cursor-pointer"
            >
              <MessageSquarePlus size={16} /> View Yatri Feedbacks & Suggestions
            </button>
          </div>
        </div>

        {/* Feedback Modal */}
        {showFeedbackModal && (
          <div className="fixed inset-0 z-[3000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-orange-100 my-auto">
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              >
                <X size={20} />
              </button>
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-black text-slate-900">💬 Yatri Feedback & Suggestions</h3>
                <p className="text-xs text-slate-500 font-medium">Dekhein yatri community ke feedbacks aur apna suggestion share karein.</p>
              </div>
              <FeedbackSection />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-y-auto bg-slate-50 text-slate-800">
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
        @keyframes yatra-float-slow {
          0%,100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-12px) scale(1.04); opacity: 1; }
        }
        @keyframes yatra-orb-pulse {
          0%,100% { opacity: 0.18; transform: scale(1); }
          50% { opacity: 0.30; transform: scale(1.06); }
        }
        @keyframes yatra-particle {
          0%  { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.55; }
          33% { transform: translateY(-9px) translateX(5px) scale(1.15); opacity: 0.85; }
          66% { transform: translateY(-5px) translateX(-4px) scale(0.9); opacity: 0.45; }
          100%{ transform: translateY(0px) translateX(0px) scale(1); opacity: 0.55; }
        }
        @keyframes yatra-route-dash {
          0%   { background-position: -80px center; }
          100% { background-position: 110px center; }
        }
        @keyframes yatra-btn-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes yatra-spin-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes yatra-radar {
          0% { transform: scale(0.85); opacity: 0.85; }
          50% { opacity: 0.45; }
          100% { transform: scale(1.65); opacity: 0; }
        }
        @keyframes yatra-card-rise {
          0% { opacity: 0; transform: translateY(22px) scale(0.985); }
          100% { opacity: 1; transform: translateY(0px) scale(1); }
        }
        @keyframes yatra-svg-travel {
          0% { stroke-dashoffset: 95; }
          100% { stroke-dashoffset: -95; }
        }
        @keyframes yatra-btn-sweep {
          0% { background-position: -150% 0; }
          50%, 100% { background-position: 250% 0; }
        }
        @keyframes yatra-tab-fade {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes yatra-drawer-up {
          0% { transform: translateY(100%); opacity: 0.6; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes livetrip-pulse-ring {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .animate-yatra-tab-fade {
          animation: yatra-tab-fade 0.25s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-yatra-drawer-up {
          animation: yatra-drawer-up 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .yatra-glow-btn:hover { box-shadow: 0 0 44px 8px rgba(251,146,60,0.58), 0 6px 28px rgba(234,88,12,0.52) !important; transform: scale(1.02); }
        .yatra-glow-btn { transition: all 0.28s ease !important; }
      `}</style>
      
      {/* Header section with proper top padding for fixed navbar */}
      {(stage === "form" || stage === "error") && (
        <div className="relative overflow-hidden border-b border-slate-200 pt-28 md:pt-32 pb-14 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <button onClick={() => navigate("/")}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-orange-600 mb-6 transition-colors duration-200 group">
              <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" /> Back to Home
            </button>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-amber-300 bg-amber-50">
              <Sparkles size={13} className="text-amber-500" />
              <span className="text-[9px] font-black uppercase tracking-widest text-amber-700">AI-Powered by Gemini 3.6 Flash</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black mb-4 italic text-slate-900">
              Build Your Perfect Yatra
            </h1>
            <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm leading-relaxed mt-1">
              Fill in your travel details and our AI crafts a complete, personalised day-by-day itinerary with curated stays, dining, and experiences.
            </p>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className={"max-w-4xl mx-auto px-6 " + (stage === "result" ? "pt-28 md:pt-36 pb-12" : "py-12")}>
        {/* Logged in User Bar with Helpline & Support and Feedback Text Link - Dark Glassmorphism */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              {currentUser.photoURL ? (
                <img src={currentUser.photoURL} alt={currentUser.displayName || "User"} className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-400 shadow-sm" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white font-black flex items-center justify-center shadow-sm">
                  {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'Y'}
                </div>
              )}
              <div>
                <p className="text-sm font-black text-slate-900 flex items-center gap-2">
                  {currentUser.displayName || "Yatri Explorer"}
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">Verified</span>
                </p>
                <p className="text-[11px] text-slate-500 font-medium">{currentUser.email}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs transition-all duration-200 hover:text-slate-900 self-start md:self-auto shadow-sm active:scale-95 cursor-pointer"
            >
              <LogOut size={14} className="text-orange-500" /> Log Out
            </button>
          </div>

          {/* Helpline & Support Bar with Feedback Text link right below it */}
          <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-black uppercase tracking-wider text-slate-400 text-[10px] block">Helpline & Support:</span>
              <span className="font-bold text-slate-700">📞 1800-103-3500 <span className="text-slate-400 font-normal">(24x7 Official Tourist Helpline)</span></span>
            </div>
            
            <button
              onClick={() => setShowFeedbackModal(true)}
              className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-bold transition bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 self-start sm:self-auto shadow-sm cursor-pointer"
            >
              <MessageSquarePlus size={14} /> 💬 Feedback & Suggestions
            </button>
          </div>
        </div>

        {(stage === "form" || stage === "loading") && (
          <div className="relative">
            {stage === "loading" && (
              <LoadingOverlay
                destination={tripData?.destinationName}
                numberOfDays={tripData?.days}
              />
            )}
            {/* Clean light form container */}
            <div className="relative z-10 bg-white border border-slate-200 shadow-sm rounded-3xl p-6 md:p-12">
              <PlannerForm onSubmit={handleSubmit} loading={stage === "loading"} />
            </div>
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
      </div>

      {/* Feedback & Suggestions Modal Overlay */}
      {showFeedbackModal && (
        <div className="fixed inset-0 z-[3000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-orange-100 my-auto">
            <button
              onClick={() => setShowFeedbackModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              title="Close modal"
            >
              <X size={20} />
            </button>
            <div className="mb-6 pr-8">
              <h3 className="text-2xl font-serif font-black text-slate-900">💬 Yatri Feedback & Suggestions</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">Dekhein yatri community ke feedbacks aur apna suggestion share karein.</p>
            </div>
            <FeedbackSection />
          </div>
        </div>
      )}
    </div>
  );
}
