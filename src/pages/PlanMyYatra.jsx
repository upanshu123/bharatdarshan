import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles, MapPin, Calendar, Users, Wallet, ChevronLeft,
  AlertCircle, RefreshCw, CheckCircle, Clock, Utensils, Hotel,
  Navigation, Star, Package, Info, Plane, Car, LogOut, Lock, MessageSquarePlus, X,
  Download, Copy, Check
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

function LoadingOverlay({ destination }) {
  const phases = [
    { icon: "🛰️", text: "Connecting routes across India..." },
    { icon: "🏰", text: "Curating heritage spots & scenic stops..." },
    { icon: "💰", text: "Optimising daily budget & travel timings..." },
    { icon: "🍽️", text: "Discovering local flavours & hidden gems..." },
    { icon: "🏨", text: "Selecting the finest stays for your comfort..." },
    { icon: "🗺️", text: "Assembling your personalised day-by-day plan..." },
  ];
  const [phaseIdx, setPhaseIdx] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setPhaseIdx(i => (i + 1) % phases.length); setVisible(true); }, 350);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fixed inset-0 z-[2000] flex flex-col items-center justify-center overflow-hidden" style={{background:'linear-gradient(135deg,#050810 0%,#0a0f1e 42%,#100800 100%)'}}>
      {/* Ambient depth orbs */}
      <div style={{position:'absolute',top:'10%',left:'50%',transform:'translateX(-50%)',width:'720px',height:'480px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(234,88,12,0.12) 0%,transparent 65%)',pointerEvents:'none',animation:'yatra-orb-pulse 3.5s ease-in-out infinite'}}/>
      <div style={{position:'absolute',bottom:'8%',right:'8%',width:'320px',height:'320px',borderRadius:'50%',background:'radial-gradient(circle,rgba(99,102,241,0.09) 0%,transparent 70%)',pointerEvents:'none',animation:'yatra-orb-pulse 5s ease-in-out infinite 1.4s'}}/>
      <div style={{position:'absolute',top:'55%',left:'6%',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,rgba(251,146,60,0.07) 0%,transparent 70%)',pointerEvents:'none',animation:'yatra-float-slow 8s ease-in-out infinite'}}/>

      <div className="text-center px-8 max-w-sm relative z-10">
        {/* Radar Pulse Rings */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full" style={{border:'1px solid rgba(251,146,60,0.08)',animation:'yatra-radar 2.4s ease-out infinite'}}/>
          <div className="absolute inset-0 rounded-full" style={{border:'1px solid rgba(251,146,60,0.06)',animation:'yatra-radar 2.4s ease-out infinite 0.8s'}}/>
          <div className="absolute inset-0 rounded-full" style={{border:'1px solid rgba(251,146,60,0.04)',animation:'yatra-radar 2.4s ease-out infinite 1.6s'}}/>
          <div className="absolute inset-0 rounded-full animate-spin" style={{border:'2px solid transparent',borderTopColor:'rgba(251,146,60,0.9)',animationDuration:'1.1s'}}/>
          <div className="absolute inset-5 rounded-full" style={{border:'1.5px solid transparent',borderTopColor:'rgba(99,102,241,0.7)',animation:'yatra-spin-rev 1.8s linear infinite'}}/>
          <div className="absolute inset-0 flex items-center justify-center text-3xl" style={{animation:'yatra-float 3s ease-in-out infinite'}}>
            {phases[phaseIdx].icon}
          </div>
        </div>

        {/* AI badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{background:'rgba(251,146,60,0.10)',border:'1px solid rgba(251,146,60,0.30)',boxShadow:'0 0 20px rgba(251,146,60,0.12)'}}>
          <Sparkles size={11} className="text-orange-400" />
          <span className="text-[9px] font-black uppercase tracking-widest" style={{background:'linear-gradient(90deg,#fb923c,#fde68a,#fb923c)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundSize:'200% auto',animation:'yatra-shimmer 2s linear infinite'}}>Gemini AI Engine Active</span>
        </div>

        <h2 className="text-2xl font-serif font-black text-white mb-5" style={{textShadow:'0 0 36px rgba(251,146,60,0.22)'}}>
          Planning Your Yatra{destination ? " to " + destination : ""}
        </h2>

        {/* Status ticker — vertical slide-fade */}
        <div className="relative h-14 overflow-hidden mb-4" style={{maskImage:'linear-gradient(to bottom,transparent,black 25%,black 75%,transparent)'}}>
          <p
            className="absolute inset-x-0 text-sm font-semibold text-slate-300 leading-relaxed transition-all duration-350"
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
              width: i === phaseIdx ? '20px' : '5px',
              height: '5px',
              background: i === phaseIdx ? 'rgba(251,146,60,0.9)' : 'rgba(255,255,255,0.15)'
            }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlannerForm({ onSubmit, loading }) {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    originId: "", origin: "", destination: "", destinationName: "",
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
      destinationName: dest?.name || form.destination,
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
            <div className={"group relative rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 " + (errors.origin ? "border-2 border-red-400 bg-red-50/90 shadow-md shadow-red-500/10" : "border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 shadow-sm hover:shadow-md hover:border-emerald-300 focus-within:ring-2 focus-within:ring-emerald-400/50 focus-within:border-emerald-400")}>
              {/* Badge Header Bar */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Departing From</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60">Boarding</span>
              </div>

              {/* Native Select with ticket typography */}
              <div className="relative">
                <select
                  id="origin-city-select"
                  value={form.originId}
                  onChange={e => {
                    const city = getDepartureCityById(e.target.value);
                    set("originId", e.target.value);
                    if (city) set("origin", city.name);
                  }}
                  className="w-full bg-transparent text-sm md:text-base font-black text-slate-900 dark:text-white focus:outline-none cursor-pointer py-1 pr-7 appearance-none"
                >
                  <option value="" className="text-slate-500">Select departure city...</option>
                  {Object.entries(DEPARTURE_CITIES_BY_REGION).map(([region, cities]) => (
                    <optgroup key={region} label={`── ${region} ──`} className="text-slate-800 dark:text-slate-200 font-bold bg-white dark:bg-slate-900">
                      {cities.map(city => (
                        <option key={city.id} value={city.id} className="text-slate-800 dark:text-slate-200 font-medium">
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
                  <div className="mt-2.5 pt-2.5 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/40">🚂 {c.trainStation.name}</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/40">🚌 {c.busStand.name}</span>
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
                <line x1="4" y1="12" x2="96" y2="12" stroke="rgba(226,232,240,0.8)" strokeWidth="2" strokeDasharray="3 3" />
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
              <div className="absolute z-10 w-7 h-7 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-[0_0_14px_rgba(249,115,22,0.55)] border-2 border-white">
                <Navigation size={12} className="rotate-45" />
              </div>
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest text-orange-500/80 mt-0.5">Route</span>
          </div>

          {/* Mobile connector */}
          <div className="flex md:hidden items-center justify-center w-full py-1" aria-hidden="true">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-orange-200/80 text-[10px] font-black text-orange-600 shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span>Express Route</span>
              <span className="animate-pulse">➔</span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            </div>
          </div>

          {/* Destination Ticket Badge */}
          <div className="w-full md:flex-1">
            <div className={"group relative rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 " + (errors.destination ? "border-2 border-red-400 bg-red-50/90 shadow-md shadow-red-500/10" : "border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 shadow-sm hover:shadow-md hover:border-orange-300 focus-within:ring-2 focus-within:ring-orange-400/50 focus-within:border-orange-400")}>
              {/* Badge Header Bar */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)]"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Destination</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 border border-orange-200/60">Arrival</span>
              </div>

              {/* Native Select with ticket typography */}
              <div className="relative">
                <select
                  value={form.destination}
                  onChange={e => set("destination", e.target.value)}
                  className="w-full bg-transparent text-sm md:text-base font-black text-slate-900 dark:text-white focus:outline-none cursor-pointer py-1 pr-7 appearance-none"
                >
                  <option value="" className="text-slate-500">Select a destination...</option>
                  {PLANNER_DESTINATIONS.map(d => (
                    <option key={d.id} value={d.id} className="text-slate-800 dark:text-slate-200 font-medium">
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
                <div className="mt-2.5 pt-2.5 border-t border-slate-100 dark:border-white/5 text-[11px] font-medium text-orange-800 dark:text-orange-300 flex items-start gap-1.5">
                  <span className="shrink-0">📍</span>
                  <span className="leading-snug">{PLANNER_DESTINATIONS.find(d => d.id === form.destination)?.description || ''}</span>
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
          <div className={"group rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 " + (errors.startDate ? "border-2 border-red-400 bg-red-50/90 shadow-md shadow-red-500/10" : "border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 shadow-sm hover:shadow-md hover:border-orange-300 focus-within:ring-2 focus-within:ring-orange-400/50 focus-within:border-orange-400")}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Calendar size={13} className="text-orange-500" /> Start Date
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">Depart</span>
            </div>
            <input
              type="date"
              min={today}
              value={form.startDate}
              onChange={e => set("startDate", e.target.value)}
              className="w-full bg-transparent text-sm md:text-base font-black text-slate-900 dark:text-white focus:outline-none cursor-pointer py-1"
            />
          </div>
          {errors.startDate && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-semibold"><span>⚠</span> {errors.startDate}</p>}
        </div>

        <div>
          <div className={"group rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 " + (errors.endDate ? "border-2 border-red-400 bg-red-50/90 shadow-md shadow-red-500/10" : "border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 shadow-sm hover:shadow-md hover:border-orange-300 focus-within:ring-2 focus-within:ring-orange-400/50 focus-within:border-orange-400")}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Calendar size={13} className="text-orange-500" /> End Date
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">Return</span>
            </div>
            <input
              type="date"
              min={form.startDate || today}
              value={form.endDate}
              onChange={e => set("endDate", e.target.value)}
              className="w-full bg-transparent text-sm md:text-base font-black text-slate-900 dark:text-white focus:outline-none cursor-pointer py-1"
            />
          </div>
          {errors.endDate && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-semibold"><span>⚠</span> {errors.endDate}</p>}
        </div>
      </div>

      {/* ── Travellers & Budget Tier ────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Travellers Counter */}
        <div className="rounded-2xl p-4 border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Users size={13} className="text-indigo-500" /> Travellers
            </span>
            <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 border border-indigo-200/60">Party Size</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => set("travellers", Math.max(1, form.travellers - 1))}
                className="w-11 h-11 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white font-black hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-xl active:scale-90 touch-manipulation select-none"
              >
                −
              </button>
              <span className="text-3xl font-black text-slate-900 dark:text-white w-10 text-center select-none font-serif">
                {form.travellers}
              </span>
              <button
                type="button"
                onClick={() => set("travellers", Math.min(20, form.travellers + 1))}
                className="w-11 h-11 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white font-black hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-all duration-200 flex items-center justify-center text-xl active:scale-90 touch-manipulation select-none"
              >
                +
              </button>
            </div>
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              {form.travellers === 1 ? "Solo Yatri" : `${form.travellers} Yatris`}
            </span>
          </div>
        </div>

        {/* Budget Tier */}
        <div>
          <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-2">
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
                    ? "bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 ring-2 ring-orange-500/50 scale-[1.02]"
                    : "bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 hover:border-orange-300 hover:scale-[1.02] active:scale-95 shadow-sm text-slate-700 dark:text-slate-300"
                )}
              >
                {form.budget === b.id && (
                  <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.2) 0%,transparent 60%)' }} />
                )}
                <span className="relative block font-black text-xs md:text-sm">{b.symbol} {b.label}</span>
                <span className={"relative text-[10px] block mt-0.5 " + (form.budget === b.id ? "text-orange-100" : "text-slate-400 dark:text-slate-500")}>
                  {b.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Trip Style ──────────────────────────────────────────────── */}
      <div>
        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-3">
          <Sparkles size={13} className="text-orange-400" /> Trip Style
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {TRIP_TYPES.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => set("tripType", t.id)}
              className={"relative p-3.5 rounded-2xl text-left transition-all duration-200 overflow-hidden touch-manipulation select-none " + (
                form.tripType === t.id
                  ? "bg-gradient-to-br from-orange-50 to-amber-50/90 dark:from-orange-950/40 dark:to-amber-950/30 border border-orange-500/80 shadow-lg shadow-orange-500/25 ring-2 ring-orange-500/50 scale-[1.02]"
                  : "bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 hover:border-orange-300 hover:scale-[1.02] active:scale-95 shadow-sm"
              )}
            >
              <span className="text-2xl block mb-1.5 transition-transform duration-200" style={{ filter: form.tripType === t.id ? 'drop-shadow(0 0 6px rgba(234,88,12,0.5))' : 'none' }}>
                {t.icon}
              </span>
              <span className={"text-xs font-black block transition-colors duration-200 " + (form.tripType === t.id ? "text-orange-700 dark:text-orange-300" : "text-slate-800 dark:text-slate-200")}>
                {t.label}
              </span>
              <span className={"text-[10px] block mt-0.5 transition-colors duration-200 " + (form.tripType === t.id ? "text-orange-500 dark:text-orange-400" : "text-slate-400 dark:text-slate-500")}>
                {t.desc}
              </span>
              {form.tripType === t.id && (
                <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full flex items-center justify-center bg-orange-600 shadow-[0_0_8px_rgba(234,88,12,0.6)]">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Interests ──────────────────────────────────────────────── */}
      <div>
        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-3">
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
                  ? "bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-lg shadow-indigo-500/25 ring-2 ring-indigo-500/50 scale-[1.03]"
                  : "bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 hover:border-orange-300 hover:scale-[1.03] active:scale-95 shadow-sm text-slate-600 dark:text-slate-300"
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

function ItineraryResult({ itinerary, tripData, onReset }) {
  if (!itinerary) return null;
  const { tripTitle, tagline, highlights, days, mustTry, packingEssentials, localInsights, bestTimeToVisit, budgetSummary, logistics } = itinerary;
  const departureCity = tripData?.departureCity || null;
  const [copied, setCopied] = useState(false);
  const [pdfGenerating, setPdfGenerating] = useState(false);

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
    <div className="space-y-8 pb-20 print-container">
      {/* ── Trip Hero Banner ─── */}
      <div className="rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden" style={{background:'linear-gradient(135deg,#080c14 0%,#0f172a 25%,#1e1b4b 55%,#1a0800 100%)',boxShadow:'0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(251,146,60,0.1)'}}>
        {/* Animated orbs */}
        <div style={{position:'absolute',top:'-60px',left:'-40px',width:'360px',height:'360px',borderRadius:'50%',background:'radial-gradient(circle,rgba(234,88,12,0.18) 0%,transparent 70%)',pointerEvents:'none',animation:'yatra-orb-pulse 5s ease-in-out infinite'}} />
        <div style={{position:'absolute',bottom:'-40px',right:'-25px',width:'240px',height:'240px',borderRadius:'50%',background:'radial-gradient(circle,rgba(99,102,241,0.14) 0%,transparent 70%)',pointerEvents:'none',animation:'yatra-orb-pulse 7s ease-in-out infinite 2s'}} />
        <div style={{position:'absolute',top:'40%',right:'15%',width:'4px',height:'4px',borderRadius:'50%',background:'rgba(253,230,138,0.6)',boxShadow:'0 0 8px rgba(253,230,138,0.5)',pointerEvents:'none',animation:'yatra-particle 4s ease-in-out infinite'}} />
        {/* AI badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{background:'rgba(251,146,60,0.12)',border:'1px solid rgba(251,146,60,0.35)',boxShadow:'0 0 18px 2px rgba(251,146,60,0.15)'}}>
          <Sparkles size={12} style={{color:'#fb923c'}} />
          <span className="text-[9px] font-black uppercase tracking-widest" style={{background:'linear-gradient(90deg,#fb923c,#fde68a,#fb923c)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundSize:'200% auto',animation:'yatra-shimmer 2.5s linear infinite'}}>Gemini 3.6 Flash AI Engine</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-black mb-2" style={{background:'linear-gradient(135deg,#fff 0%,#fde68a 45%,#fb923c 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',filter:'drop-shadow(0 0 20px rgba(251,146,60,0.2))'}}>{tripTitle}</h2>
        <p className="text-slate-400 font-medium mb-5">{tagline}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {(highlights || []).map((h, i) => <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold" style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)'}}>✓ {h}</span>)}
        </div>
        {/* Glass cockpit summary strip */}
        <div className="flex flex-wrap gap-3" style={{background:'rgba(0,0,0,0.25)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'12px 16px',backdropFilter:'blur(8px)'}}>
          {tripData.origin && <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-300"><Navigation size={13} className="text-orange-400" />{tripData.origin}</span>}
          <span className="text-white/20 hidden md:block">│</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-300"><MapPin size={13} className="text-orange-400" />{tripData.destinationName}</span>
          <span className="text-white/20 hidden md:block">│</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-300"><Clock size={13} className="text-amber-400" />{tripData.days} Days</span>
          <span className="text-white/20 hidden md:block">│</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-300"><Users size={13} className="text-indigo-400" />{tripData.travellers} Person(s)</span>
          <span className="text-white/20 hidden md:block">│</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-300"><Wallet size={13} className="text-emerald-400" />{tripData.budget} Budget</span>
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

      {/* ── Day-by-Day Timeline ── */}
      <div>
        <h3 className="text-xl font-serif font-black text-slate-900 mb-6 flex items-center gap-2">
          <Calendar className="text-orange-600" size={20} /> Day-by-Day Itinerary
        </h3>
        <div className="relative">
          {/* Vertical neon guide rail */}
          <div className="hidden md:block absolute left-[19px] top-8 bottom-8 w-px" style={{background:'linear-gradient(to bottom,rgba(251,146,60,0.7),rgba(99,102,241,0.5),rgba(251,146,60,0.2))',boxShadow:'0 0 6px rgba(251,146,60,0.3)'}} />

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

              const accentColors = [
                {from:'#c2410c',to:'#ea580c',glow:'rgba(234,88,12,0.35)'},
                {from:'#b45309',to:'#d97706',glow:'rgba(217,119,6,0.3)'},
                {from:'#5b21b6',to:'#7c3aed',glow:'rgba(124,58,237,0.3)'},
                {from:'#0e7490',to:'#0891b2',glow:'rgba(8,145,178,0.3)'},
                {from:'#15803d',to:'#16a34a',glow:'rgba(22,163,74,0.3)'},
                {from:'#b91c1c',to:'#dc2626',glow:'rgba(220,38,38,0.3)'},
                {from:'#be185d',to:'#db2777',glow:'rgba(219,39,119,0.3)'},
              ];
              const ac = accentColors[idx % accentColors.length];
              const timeIcons = {morning:'🌅',afternoon:'☀️',evening:'🌙'};

              return (
                <div
                  key={day.day ?? idx}
                  className="relative md:pl-10"
                  style={{animation:`yatra-card-rise 0.5s ease-out both`,animationDelay:`${idx * 80}ms`}}
                >
                  {/* Timeline milestone node */}
                  <div className="hidden md:flex absolute left-0 top-5 w-10 h-10 rounded-full items-center justify-center shrink-0 z-10" style={{background:`linear-gradient(135deg,${ac.from},${ac.to})`,boxShadow:`0 0 16px ${ac.glow}, 0 2px 8px rgba(0,0,0,0.2)`,border:'2.5px solid rgba(255,255,255,0.15)'}}>
                    <span className="text-white font-black text-xs">{String(day.day).padStart(2,'0')}</span>
                  </div>

                  {/* Day card */}
                  <div className="rounded-2xl overflow-hidden" style={{border:`1.5px solid ${ac.glow.replace('0.35','0.18').replace('0.3','0.15')}`,boxShadow:`0 4px 28px ${ac.glow.replace('0.35','0.07').replace('0.3','0.06')}, 0 1px 4px rgba(0,0,0,0.05)`}}>
                    {/* Header */}
                    <div className="px-5 py-4 flex items-center justify-between" style={{background:`linear-gradient(135deg,${ac.from} 0%,${ac.to} 100%)`,boxShadow:'0 2px 12px rgba(0,0,0,0.18)'}}>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-black text-base" style={{textShadow:'0 1px 4px rgba(0,0,0,0.25)'}}>Day {day.day}</span>
                          {day.date && <span className="text-white/60 text-xs font-medium">{day.date}</span>}
                        </div>
                        <p className="text-white/85 text-sm font-semibold mt-0.5">{day.theme}</p>
                      </div>
                      <span className="text-2xl" style={{filter:'drop-shadow(0 0 6px rgba(255,255,255,0.3))'}}>
                        {activitiesList[0] ? (timeIcons[(activitiesList[0].timeOfDay||'').toLowerCase()] || '🗓️') : '🗓️'}
                      </span>
                    </div>

                    {/* Body — bento activity slots */}
                    <div className="p-5 space-y-3 bg-white">
                      {activitiesList.map((act, aIdx) => {
                        const timeLower = (act.timeOfDay || "").toLowerCase();
                        const icon = timeLower.includes("morning") ? "🌅" : timeLower.includes("afternoon") ? "☀️" : "🌙";
                        const mapUrl = act.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((act.locationName || act.activity) + ' ' + tripData.destinationName)}`;
                        const tagBg = timeLower.includes('morning') ? 'rgba(251,146,60,0.10)' : timeLower.includes('afternoon') ? 'rgba(234,179,8,0.10)' : 'rgba(99,102,241,0.10)';
                        const tagColor = timeLower.includes('morning') ? '#c2410c' : timeLower.includes('afternoon') ? '#92400e' : '#4338ca';

                        return (
                          <div key={`${act.timeOfDay || 'act'}-${act.locationName || act.activity || aIdx}`} className="flex gap-3 rounded-xl p-3.5 group transition-all duration-200" style={{background:'#f8fafc',border:'1px solid rgba(226,232,240,0.7)'}}>
                            <div className="text-xl shrink-0 mt-0.5">{icon}</div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                {/* Time-of-day micro-tag */}
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider" style={{background:tagBg,color:tagColor}}>{act.timeOfDay || 'Activity'}</span>
                                {act.estimatedCost && <span className="px-2 py-0.5 rounded-full text-[10px] font-black text-emerald-700" style={{background:'rgba(16,185,129,0.10)',color:'#047857'}}>₹ {act.estimatedCost}</span>}
                              </div>
                              <div className="flex flex-wrap items-start justify-between gap-2">
                                <h4 className="font-black text-slate-900 text-sm leading-snug flex-1">{act.locationName || act.activity}</h4>
                                <a
                                  href={mapUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold shrink-0 transition-all duration-200 hover:scale-105"
                                  style={{background:'rgba(16,185,129,0.10)',color:'#047857',border:'1px solid rgba(16,185,129,0.2)'}}
                                >
                                  📍 Maps ↗
                                </a>
                              </div>
                              {act.description && <p className="text-slate-500 text-xs leading-relaxed mt-1">{act.description}</p>}
                              {act.tip && <p className="text-[11px] font-semibold mt-2 px-2.5 py-1.5 rounded-lg" style={{background:'rgba(251,146,60,0.08)',color:'#c2410c',borderLeft:'2px solid rgba(234,88,12,0.4)'}}>💡 {act.tip}</p>}
                            </div>
                          </div>
                        );
                      })}

                      {/* Stay recommendation */}
                      {day.stayRecommendation && (
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 rounded-xl p-3.5" style={{background:'rgba(59,130,246,0.05)',border:'1px solid rgba(59,130,246,0.15)'}}>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-base" style={{background:'rgba(59,130,246,0.12)'}}>🏨</div>
                            <div>
                              <span className="text-[10px] font-black uppercase tracking-wider" style={{color:'#1d4ed8'}}>Stay</span>
                              <p className="font-black text-slate-900 text-sm">{day.stayRecommendation.name}</p>
                              <p className="text-xs text-slate-500">{day.stayRecommendation.type} · {day.stayRecommendation.approxRate}</p>
                              {day.stayRecommendation.whyPick && <p className="text-xs mt-0.5" style={{color:'#1d4ed8'}}>{day.stayRecommendation.whyPick}</p>}
                            </div>
                          </div>
                          <a
                            href={day.stayRecommendation.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.stayRecommendation.name + ' ' + tripData.destinationName)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 shrink-0 self-end md:self-auto hover:scale-105 active:scale-95"
                            style={{background:'linear-gradient(135deg,#1d4ed8,#2563eb)',color:'#fff',boxShadow:'0 2px 10px rgba(37,99,235,0.3)'}}
                          >
                            📍 Hotel Location ↗
                          </a>
                        </div>
                      )}

                      {/* Dining spots */}
                      {day.diningSpots && day.diningSpots.length > 0 && (
                        <div className="rounded-xl p-3.5" style={{background:'rgba(245,158,11,0.05)',border:'1px solid rgba(245,158,11,0.15)'}}>
                          <div className="flex items-center gap-2 mb-2.5">
                            <Utensils size={13} style={{color:'#b45309'}} />
                            <span className="text-[10px] font-black uppercase tracking-wider" style={{color:'#b45309'}}>Dining & Local Cuisine</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {day.diningSpots.map((d, i) => (
                              <div key={d.name || i} className="flex justify-between items-center p-2.5 rounded-lg" style={{background:'rgba(255,255,255,0.8)',border:'1px solid rgba(245,158,11,0.2)'}}>
                                <div className="min-w-0 pr-2">
                                  <p className="text-xs font-black text-slate-800 truncate">{d.name}</p>
                                  <p className="text-[10px] text-slate-500 truncate">{d.specialty} · {d.priceRange}</p>
                                </div>
                                <a
                                  href={d.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.name + ' ' + tripData.destinationName)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-bold transition-all duration-200 shrink-0 ml-1 hover:scale-105"
                                  style={{background:'linear-gradient(135deg,#b45309,#d97706)',color:'#fff',boxShadow:'0 1px 6px rgba(180,83,9,0.3)'}}
                                >
                                  📍 ↗
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Glass Cockpit Budget Summary ── */}
      {budgetSummary && (
        <div className="rounded-2xl p-6 text-white relative overflow-hidden" style={{background:'linear-gradient(135deg,#052e16 0%,#14532d 50%,#052e16 100%)',boxShadow:'0 8px 40px rgba(0,0,0,0.35), 0 0 40px rgba(16,185,129,0.08)',border:'1px solid rgba(52,211,153,0.15)'}}>
          <div style={{position:'absolute',top:'-30px',right:'-20px',width:'180px',height:'180px',borderRadius:'50%',background:'radial-gradient(circle,rgba(16,185,129,0.12) 0%,transparent 70%)',pointerEvents:'none',animation:'yatra-orb-pulse 4s ease-in-out infinite'}}/>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-black text-base flex items-center gap-2"><Wallet size={17} className="text-emerald-400" /> Budget Cockpit</h3>
            <div className="px-3 py-1 rounded-full text-xs font-black" style={{background:'rgba(16,185,129,0.18)',border:'1px solid rgba(52,211,153,0.3)',color:'#6ee7b7'}}>Est. Total: {budgetSummary.estimatedTotal}</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Stay", val: budgetSummary.accommodation, icon: "🏨", color: 'rgba(96,165,250,0.12)', border: 'rgba(96,165,250,0.2)', tag: '#93c5fd' },
              { label: "Food", val: budgetSummary.food, icon: "🍽️", color: 'rgba(251,146,60,0.12)', border: 'rgba(251,146,60,0.2)', tag: '#fdba74' },
              { label: "Transport", val: budgetSummary.transport, icon: "🚗", color: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.2)', tag: '#c4b5fd' },
              { label: "Activities", val: budgetSummary.activities, icon: "🎯", color: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.2)', tag: '#6ee7b7' },
            ].map(item => (
              <div key={item.label} className="rounded-xl p-3 text-center" style={{background:item.color,border:`1px solid ${item.border}`}}>
                <div className="text-xl mb-1.5">{item.icon}</div>
                <p className="text-[9px] font-black uppercase tracking-wider mb-1" style={{color:item.tag}}>{item.label}</p>
                <p className="text-xs font-black text-white">{item.val}</p>
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
            background:'rgba(15,23,42,0.92)',color:'#fff',boxShadow:'0 4px 16px rgba(0,0,0,0.25)'
          }}
        >
          {copied ? <Check size={14} className="text-emerald-300" /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy Itinerary'}
        </button>

        <button
          onClick={onReset}
          className="yatra-glow-btn relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest overflow-hidden"
          style={{background:'linear-gradient(135deg,#0f172a,#1e1b4b,#1a0800)',color:'#fff',boxShadow:'0 0 24px 4px rgba(99,102,241,0.3), 0 4px 20px rgba(0,0,0,0.4)'}}
        >
          <span className="absolute inset-0 pointer-events-none" style={{background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)',backgroundSize:'200% 100%',animation:'yatra-btn-shimmer 3s linear infinite'}}/>
          <Sparkles size={13} className="relative z-10 text-indigo-400" />
          <span className="relative z-10">Plan Another Yatra</span>
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
      <div className="min-h-screen overflow-x-hidden" style={{background:'linear-gradient(160deg,#f8fafc 0%,#fff7ed 50%,#f8fafc 100%)'}}>
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
              Personalized AI trip itinerary create karne ke liye Google se log in karein.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Login Gate Card */}
          <div className="rounded-[32px] p-8 md:p-12 text-center bg-white shadow-xl border border-orange-100 mb-10 relative overflow-hidden">
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

          {/* Compact Support & Feedback Trigger Bar */}
          <div className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">Helpline & Support</p>
              <p className="text-sm font-black text-slate-900">📞 1800-103-3500 <span className="text-xs text-slate-500 font-medium">(24x7 Tourist Helpline)</span></p>
            </div>
            <button
              onClick={() => setShowFeedbackModal(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold text-xs transition border border-orange-200"
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
    <div className="min-h-screen overflow-x-hidden" style={{background:'linear-gradient(160deg,#f8fafc 0%,#fff7ed 50%,#f8fafc 100%)'}}>
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
        .yatra-glow-btn:hover { box-shadow: 0 0 44px 8px rgba(251,146,60,0.58), 0 6px 28px rgba(234,88,12,0.52) !important; transform: scale(1.02); }
        .yatra-glow-btn { transition: all 0.28s ease !important; }
      `}</style>
      
      {/* Header section with proper top padding for fixed navbar */}
      {(stage === "form" || stage === "error") && (
        <div className="relative overflow-hidden border-b border-white/5 pt-28 md:pt-32 pb-14" style={{background:'linear-gradient(135deg,#080c14 0%,#0f172a 28%,#1c1148 62%,#1a0800 100%)'}}>
          {/* Primary glow orb */}
          <div style={{position:'absolute',top:'-80px',left:'50%',transform:'translateX(-50%)',width:'640px',height:'400px',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(234,88,12,0.16) 0%,transparent 68%)',pointerEvents:'none',animation:'yatra-orb-pulse 5s ease-in-out infinite'}} />
          {/* Secondary indigo orb */}
          <div style={{position:'absolute',bottom:'-55px',right:'4%',width:'280px',height:'280px',borderRadius:'50%',background:'radial-gradient(circle,rgba(99,102,241,0.13) 0%,transparent 70%)',pointerEvents:'none',animation:'yatra-orb-pulse 7s ease-in-out infinite 1.8s'}} />
          {/* Left drift orb */}
          <div style={{position:'absolute',top:'35%',left:'-70px',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,rgba(251,146,60,0.08) 0%,transparent 70%)',pointerEvents:'none',animation:'yatra-float-slow 9s ease-in-out infinite'}} />
          {/* Floating accent particles */}
          <div style={{position:'absolute',top:'22%',left:'14%',width:'4px',height:'4px',borderRadius:'50%',background:'rgba(251,146,60,0.65)',boxShadow:'0 0 8px rgba(251,146,60,0.55)',pointerEvents:'none',animation:'yatra-particle 4.2s ease-in-out infinite'}} />
          <div style={{position:'absolute',top:'55%',left:'82%',width:'3px',height:'3px',borderRadius:'50%',background:'rgba(99,102,241,0.75)',boxShadow:'0 0 7px rgba(99,102,241,0.55)',pointerEvents:'none',animation:'yatra-particle 5.8s ease-in-out infinite 0.9s'}} />
          <div style={{position:'absolute',top:'72%',left:'24%',width:'3px',height:'3px',borderRadius:'50%',background:'rgba(251,146,60,0.5)',boxShadow:'0 0 6px rgba(251,146,60,0.4)',pointerEvents:'none',animation:'yatra-particle 6.4s ease-in-out infinite 2.1s'}} />
          <div style={{position:'absolute',top:'18%',left:'72%',width:'5px',height:'5px',borderRadius:'50%',background:'rgba(253,230,138,0.4)',boxShadow:'0 0 10px rgba(253,230,138,0.3)',pointerEvents:'none',animation:'yatra-float 5.5s ease-in-out infinite 1.3s'}} />
          <div style={{position:'absolute',top:'45%',left:'60%',width:'3px',height:'3px',borderRadius:'50%',background:'rgba(251,146,60,0.4)',boxShadow:'0 0 6px rgba(251,146,60,0.3)',pointerEvents:'none',animation:'yatra-particle 7s ease-in-out infinite 3s'}} />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <button onClick={() => navigate("/")}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-orange-300 mb-6 transition-colors duration-200 group">
              <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" /> Back to Home
            </button>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border" style={{background:'rgba(251,146,60,0.10)',borderColor:'rgba(251,146,60,0.30)',boxShadow:'0 0 22px 2px rgba(251,146,60,0.14), inset 0 1px 0 rgba(255,255,255,0.05)'}}>
              <Sparkles size={13} style={{color:'#fb923c'}} />
              <span className="text-[9px] font-black uppercase tracking-widest" style={{background:'linear-gradient(90deg,#fb923c,#fde68a,#fb923c)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundSize:'200% auto',animation:'yatra-shimmer 2.5s linear infinite'}}>AI-Powered by Gemini 3.6 Flash</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black mb-4 italic" style={{background:'linear-gradient(135deg,#fff 0%,#fde68a 40%,#fb923c 70%,#fff 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundSize:'200% auto',animation:'yatra-shimmer 3.5s linear infinite',filter:'drop-shadow(0 0 28px rgba(251,146,60,0.4))'}}>
              Build Your Perfect Yatra
            </h1>
            <p className="text-slate-400 font-medium max-w-xl mx-auto text-sm leading-relaxed mt-1">
              Fill in your travel details and our AI crafts a complete, personalised day-by-day itinerary with curated stays, dining, and experiences.
            </p>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className={"max-w-4xl mx-auto px-6 " + (stage === "result" ? "pt-28 md:pt-36 pb-12" : "py-12")}>
        {/* Logged in User Bar with Helpline & Support and Feedback Text Link */}
        <div className="bg-white border border-orange-100 rounded-2xl p-5 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition self-start md:self-auto"
            >
              <LogOut size={14} /> Log Out
            </button>
          </div>

          {/* Helpline & Support Bar with Feedback Text link right below it */}
          <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-black uppercase tracking-wider text-slate-400 text-[10px] block">Helpline & Support:</span>
              <span className="font-bold text-slate-800">📞 1800-103-3500 (24x7 Official Tourist Helpline)</span>
            </div>
            
            <button
              onClick={() => setShowFeedbackModal(true)}
              className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-700 font-bold hover:underline transition bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-200/60 self-start sm:self-auto"
            >
              <MessageSquarePlus size={14} /> 💬 Feedback & Suggestions
            </button>
          </div>
        </div>

        {(stage === "form" || stage === "loading") && (
          <div className="relative">
            {/* Ambient warm saffron/amber and indigo mesh blur gradients */}
            <div className="absolute -top-14 -left-14 w-72 h-72 rounded-full bg-gradient-to-tr from-amber-500/20 to-orange-500/15 blur-3xl pointer-events-none animate-pulse" style={{animationDuration:'6s'}} />
            <div className="absolute -bottom-14 -right-14 w-80 h-80 rounded-full bg-gradient-to-bl from-indigo-500/18 to-violet-500/12 blur-3xl pointer-events-none animate-pulse" style={{animationDuration:'8s', animationDelay:'2s'}} />
            <div className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full bg-orange-400/10 blur-2xl pointer-events-none" />

            {/* Sleek frosted glass container */}
            <div className="relative z-10 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rounded-3xl p-6 md:p-12 overflow-hidden">
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
