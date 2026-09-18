import React, { useState, useEffect } from 'react';
import { MapPin, Phone, UserCircle, Menu, X, LogOut, Compass, ChevronRight, Mail } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  
  const [showHelpline, setShowHelpline] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const [user, setUser] = useState(null);

  // --- FIX 2.0: ROBUST CHECK ---
  const isLightPage =
    location.pathname.includes('top-destinations') ||
    location.pathname.includes('/place/') ||
    location.pathname.includes('/search') ||
    location.pathname.includes('/plan') ||
    location.pathname.includes('/contact');

  // Force "Dark Mode" (Black Text) if scrolled OR if on a light page
  const isDarkMode = scrolled || isLightPage;

  // 1. Auth State Logic
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const isOverlayOpen = isOpen || showHelpline;
    document.body.style.overflow = isOverlayOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, showHelpline]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      setShowHelpline(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // 2. Scroll Logic
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
      navigate('/');
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
                  Bhart<span className="text-orange-500">darshan</span>
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

              {user ? (
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-900' : 'text-white'}`}>
                    {user.displayName?.split(' ')[0] || 'Yatri'}
                  </span>
                  <button 
                    onClick={handleLogout}
                    className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    <LogOut size={16} />
                  </button>
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

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white rounded-[32px] p-6 shadow-2xl border border-slate-100 md:hidden animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 gap-3">
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

                {user ? (
                  <button 
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 p-5 bg-red-50 text-red-600 rounded-2xl font-black text-xs uppercase tracking-widest"
                  >
                    <LogOut size={20} /> Logout
                  </button>
                ) : (
                  <Link 
                    to="/login" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 p-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest"
                  >
                    <UserCircle size={20} /> Access Portal
                  </Link>
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
              <a href="mailto:joinbharatdarshan@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-all group">
                <div className="w-10 h-10 bg-slate-50 text-slate-600 group-hover:bg-orange-100 group-hover:text-orange-600 rounded-full flex items-center justify-center shrink-0 transition-colors">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Support</p>
                  <p className="text-sm font-bold text-slate-700 truncate">joinbharatdarshan@gmail.com</p>
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