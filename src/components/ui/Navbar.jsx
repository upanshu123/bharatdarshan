import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, UserCircle, Menu, X, LogOut, Compass, ChevronRight, Mail, ChevronDown, ShieldCheck } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showHelpline, setShowHelpline] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  // Light page check for high-contrast navbar
  const isLightPage =
    location.pathname.includes('top-destinations') ||
    location.pathname.includes('/place/') ||
    location.pathname.includes('/search') ||
    location.pathname.includes('/plan') ||
    location.pathname.includes('/contact');

  // Force Dark Mode (Black Text on White Bar) if scrolled OR on a light page
  const isDarkMode = scrolled || isLightPage;

  // 1. Auth State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  // Click outside to close user profile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock scroll when overlay/modal is open
  useEffect(() => {
    const isOverlayOpen = isOpen || showHelpline;
    document.body.style.overflow = isOverlayOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, showHelpline]);

  // Escape key handler
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      setShowHelpline(false);
      setShowUserDropdown(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // 2. Scroll Hide/Show Logic
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        if (window.scrollY > lastScrollY) {
          setVisible(false); // Hide on scroll down
        } else {
          setVisible(true); // Show on scroll up
        }
      } else {
        setScrolled(false);
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowUserDropdown(false);
      setIsOpen(false);
      navigate('/login');
    } catch (error) {
      console.error("Sign out error", error);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out px-4 md:px-10
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${scrolled ? 'pt-2' : 'pt-6'}`}
      >
        <nav 
          className={`max-w-7xl mx-auto transition-all duration-500 rounded-[24px] md:rounded-full border 
          ${isDarkMode 
            ? 'bg-white/90 backdrop-blur-2xl border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-3 px-6' 
            : 'bg-white/10 backdrop-blur-md border-white/20 py-5 px-8'}`}
        >
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`bg-orange-600 rounded-xl shadow-lg group-hover:rotate-[15deg] transition-all duration-500 flex items-center justify-center
                ${isDarkMode ? 'w-8 h-8' : 'w-10 h-10 md:w-12 md:h-12'}`}>
                <MapPin className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col">
                <h1 className={`font-serif font-black leading-none transition-all duration-500
                  ${isDarkMode ? 'text-lg text-slate-900' : 'text-xl md:text-3xl text-white'}`}>
                  Bharat<span className="text-orange-500">Darshan</span>
                </h1>
                <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-1 transition-opacity
                  ${isDarkMode ? 'text-slate-500' : 'text-orange-200'}`}>
                  Incredible India
                </span>
              </div>
            </Link>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-8">
              
              {/* Support Button */}
              <button 
                onClick={() => setShowHelpline(true)}
                className={`text-xs font-black uppercase tracking-widest transition-colors
                  ${isDarkMode ? 'text-slate-600 hover:text-orange-600' : 'text-white/80 hover:text-white'}`}
              >
                Support
              </button>

              <Link 
                to="/plan"
                className="group relative flex items-center gap-2 px-6 py-3 overflow-hidden rounded-full bg-orange-600 text-white text-xs font-black uppercase tracking-widest shadow-xl hover:shadow-orange-500/40 transition-all"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Compass size={14} className="relative z-10" />
                <span className="relative z-10">Plan My Yatra</span>
              </Link>

              <div className={`h-8 w-px transition-colors ${isDarkMode ? 'bg-slate-200' : 'bg-white/20'}`}></div>

              {/* User Profile / Login Section */}
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className={`flex items-center gap-3 px-3 py-1.5 rounded-full transition-all border ${
                      isDarkMode 
                        ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-900' 
                        : 'bg-white/15 hover:bg-white/25 border-white/20 text-white'
                    }`}
                  >
                    {user.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt={user.displayName || 'User Avatar'} 
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-orange-500/50 shadow-sm"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center font-black text-xs shadow-sm">
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'Y'}
                      </div>
                    )}

                    <span className="text-xs font-black uppercase tracking-wider max-w-[110px] truncate">
                      {user.displayName?.split(' ')[0] || (user.isAnonymous ? 'Guest' : 'Yatri')}
                    </span>

                    <ChevronDown size={14} className={`transition-transform duration-300 ${showUserDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Desktop User Profile Card Dropdown */}
                  {showUserDropdown && (
                    <div className="absolute right-0 top-full mt-3 w-80 bg-white rounded-3xl p-5 shadow-2xl border border-slate-100 z-[1100] animate-in fade-in slide-in-from-top-2 duration-200 text-slate-900">
                      
                      {/* User Info Header */}
                      <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                        {user.photoURL ? (
                          <img 
                            src={user.photoURL} 
                            alt="Profile" 
                            className="w-12 h-12 rounded-2xl object-cover ring-2 ring-orange-500/30 shrink-0 shadow-md"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-md">
                            {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'Y'}
                          </div>
                        )}

                        <div className="overflow-hidden">
                          <h4 className="font-black text-sm text-slate-900 truncate">
                            {user.displayName || (user.isAnonymous ? 'Guest Yatri' : 'Yatri Explorer')}
                          </h4>
                          <p className="text-xs text-slate-500 truncate font-medium mt-0.5">
                            {user.email || 'Guest Explorer Session'}
                          </p>
                          <div className="inline-flex items-center gap-1 mt-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 text-[9px] font-black uppercase tracking-widest text-orange-600 border border-orange-100">
                            <ShieldCheck size={10} /> {user.isAnonymous ? 'Guest Session' : 'Verified Yatri'}
                          </div>
                        </div>
                      </div>

                      {/* Dropdown Options */}
                      <div className="py-3 space-y-1">
                        <Link
                          to="/plan"
                          onClick={() => setShowUserDropdown(false)}
                          className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-bold text-xs transition-colors"
                        >
                          <Compass size={16} className="text-orange-500" />
                          Plan My Yatra
                        </Link>
                        <button
                          onClick={() => { setShowHelpline(true); setShowUserDropdown(false); }}
                          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-bold text-xs transition-colors"
                        >
                          <Phone size={16} className="text-orange-500" />
                          Yatri Support & Helpline
                        </button>
                      </div>

                      {/* Log Out */}
                      <div className="pt-3 border-t border-slate-100">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-red-50 hover:bg-red-100 text-red-600 font-black text-xs uppercase tracking-widest transition-all"
                        >
                          <LogOut size={16} /> Log Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all
                    ${isDarkMode 
                      ? 'bg-slate-900 text-white hover:bg-orange-600' 
                      : 'bg-white text-slate-900 hover:bg-orange-500 hover:text-white'}`}
                >
                  <UserCircle size={16} /> Login
                </Link>
              )}
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-3 rounded-xl transition-all active:scale-90
                ${isDarkMode ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'}`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          {isOpen && (
            <div className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white rounded-[32px] p-6 shadow-2xl border border-slate-100 md:hidden animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 gap-3">

                {/* Mobile Logged-in User Profile Header */}
                {user ? (
                  <>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100/50 mb-1">
                      {user.photoURL ? (
                        <img 
                          src={user.photoURL} 
                          alt={user.displayName || 'Profile'} 
                          className="w-12 h-12 rounded-2xl object-cover ring-2 ring-orange-500/30 shrink-0 shadow-sm"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-sm">
                          {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'Y'}
                        </div>
                      )}
                      <div className="overflow-hidden">
                        <h4 className="font-black text-sm text-slate-900 truncate">
                          {user.displayName || (user.isAnonymous ? 'Guest Yatri' : 'Yatri Explorer')}
                        </h4>
                        <p className="text-xs text-slate-500 truncate font-medium">
                          {user.email || 'Guest Explorer Session'}
                        </p>
                        <span className="inline-block text-[9px] font-black uppercase tracking-wider text-orange-600 mt-0.5">
                          {user.isAnonymous ? 'Guest Session' : '✓ Verified Yatri'}
                        </span>
                      </div>
                    </div>

                    <Link 
                      to="/plan" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-4 bg-orange-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-orange-500/30"
                    >
                      <div className="flex items-center gap-3"><Compass size={18} /> Plan My Yatra</div>
                      <ChevronRight size={18} />
                    </Link>

                    <button 
                      onClick={() => { setShowHelpline(true); setIsOpen(false); }}
                      className="w-full flex items-center gap-3 p-4 bg-slate-50 text-slate-700 rounded-2xl font-black text-xs uppercase tracking-widest"
                    >
                      <Phone size={18} className="text-orange-500" /> Helpline & Support
                    </button>

                    <div className="h-px bg-slate-100 my-1"></div>

                    <button 
                      onClick={handleLogout}
                      className="flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-2xl font-black text-xs uppercase tracking-widest"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/plan" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-5 bg-orange-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-orange-500/30"
                    >
                      <div className="flex items-center gap-3"><Compass size={20} /> Plan My Yatra</div>
                      <ChevronRight size={18} />
                    </Link>
                    
                    <button 
                      onClick={() => { setShowHelpline(true); setIsOpen(false); }}
                      className="flex items-center gap-3 p-5 bg-slate-50 text-slate-700 rounded-2xl font-black text-xs uppercase tracking-widest"
                    >
                      <Phone size={20} className="text-orange-500" /> Helpline
                    </button>

                    <div className="h-px bg-slate-100 my-2"></div>

                    <Link 
                      to="/login" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 p-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest"
                    >
                      <UserCircle size={20} /> Access Portal / Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Helpline Modal Popup */}
      {showHelpline && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setShowHelpline(false)}
        >
          <div className="bg-white rounded-[32px] p-8 max-w-sm w-full relative animate-in fade-in zoom-in-95 duration-300 shadow-2xl">
            
            <button 
              onClick={() => setShowHelpline(false)}
              className="absolute top-6 right-6 p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <Phone size={32} />
            </div>
            
            <h3 className="text-2xl font-serif font-black text-slate-900 mb-2">Yatri Helpline</h3>
            <p className="text-slate-500 text-sm mb-8 font-medium">We're here to help you plan your incredible journey across India.</p>
            
            <div className="space-y-4">
              <a href="mailto:joinbharatdarshanyatra@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-all group">
                <div className="w-10 h-10 bg-slate-50 text-slate-600 group-hover:bg-orange-100 group-hover:text-orange-600 rounded-full flex items-center justify-center shrink-0 transition-colors">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Support</p>
                  <p className="text-sm font-bold text-slate-700 truncate">joinbharatdarshanyatra@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+917357424552" className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-all group">
                <div className="w-10 h-10 bg-slate-50 text-slate-600 group-hover:bg-orange-100 group-hover:text-orange-600 rounded-full flex items-center justify-center shrink-0 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call Us</p>
                  <p className="text-sm font-bold text-slate-700">+91 7357424552</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

    </>
  );
}