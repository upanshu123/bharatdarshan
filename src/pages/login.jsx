import React, { useEffect, useMemo, useRef, useState } from 'react';
import { auth, googleProvider } from '../config/firebaseConfig';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const errorTimeoutRef = useRef(null);

  // Get the intended path from Navbar state or query string
  const from = useMemo(() => {
    const query = new URLSearchParams(location.search);
    return location.state?.from || query.get('from') || '/';
  }, [location.search, location.state]);

  // If user is already authenticated, leave login screen immediately.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(from, { replace: true });
      }
    });

    return () => {
      unsub();
      if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
    };
  }, [from, navigate]);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login failed:', error);

      let friendlyError = 'Login failed. Please try again.';
      if (error?.code === 'auth/popup-blocked' || error?.code === 'auth/popup-closed-by-user') {
        friendlyError = 'Please allow popups for this site and try again.';
      } else if (error?.code === 'auth/cancelled-popup-request') {
        friendlyError = 'Sign-in cancelled. Please try again.';
      }

      setError(friendlyError);
      if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
      errorTimeoutRef.current = setTimeout(() => setError(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-slate-950 px-4">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40 grayscale" alt="BG" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
      </div>

      <div className="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[48px] shadow-2xl max-w-md w-full text-center">
        <div className="bg-orange-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-600/40 rotate-12">
          <MapPin className="text-white w-10 h-10" strokeWidth={3} />
        </div>
        <h2 className="text-4xl font-serif font-black text-white mb-4">Pranam Yatri</h2>
        <p className="text-slate-400 font-medium mb-10 text-sm tracking-wide">Enter the spiritual gateway to plan your divine journey across Bharat.</p>
        
        <button 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-white hover:bg-orange-50 disabled:opacity-50 text-slate-950 font-black py-5 px-8 rounded-2xl transition-all flex items-center justify-center gap-4 shadow-xl transform hover:-translate-y-1 active:scale-95"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
          {loading ? "Verifying..." : "Continue with Google"}
        </button>
        {error && (
          <p className="mt-4 text-sm text-red-300 text-center">{error}</p>
        )}
      </div>
    </div>
  );
}