import React, { useEffect, useMemo, useRef, useState } from 'react';
import { auth, googleProvider } from '../config/firebaseConfig';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
} from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const errorTimeoutRef = useRef(null);

  // Configure Google Provider options for real-world reliability
  useEffect(() => {
    try {
      googleProvider.setCustomParameters({ prompt: 'select_account' });
    } catch (e) {
      console.warn('Google provider custom parameters setup:', e);
    }
  }, []);

  // Get the intended path from Navbar state or query string
  const from = useMemo(() => {
    const query = new URLSearchParams(location.search);
    return location.state?.from || query.get('from') || '/';
  }, [location.search, location.state]);

  // Handle redirect result if user came back from Google OAuth redirect page
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        console.error('Redirect result error:', err);
        if (err?.code === 'auth/unauthorized-domain') {
          setError('Domain unauthorized in Firebase Console. Add bharatdarshan-seven.vercel.app to Authorized Domains.');
        } else if (err?.message) {
          setError(`Google Sign-in error: ${err.message}`);
        }
      });
  }, [from, navigate]);

  // Check existing auth state
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
    } catch (popupErr) {
      console.warn('Popup login failed/blocked, initiating Google OAuth Redirect:', popupErr);

      if (popupErr?.code === 'auth/unauthorized-domain') {
        setError('Domain unauthorized in Firebase Console. Add bharatdarshan-seven.vercel.app to Authorized Domains.');
        setLoading(false);
        return;
      }

      try {
        await signInWithRedirect(auth, googleProvider);
      } catch (redirectErr) {
        console.error('Redirect sign-in error:', redirectErr);
        if (redirectErr?.code === 'auth/unauthorized-domain') {
          setError('Domain unauthorized in Firebase Console. Add bharatdarshan-seven.vercel.app to Authorized Domains.');
        } else {
          setError(redirectErr?.message || 'Google Login failed. Please try again.');
        }
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-slate-950 px-4 py-12">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-30 grayscale scale-105 animate-pulse duration-10000"
          alt="Bharat Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950"></div>
      </div>

      <div className="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl max-w-md w-full text-center">
        <div className="bg-gradient-to-tr from-orange-600 to-amber-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-600/40 rotate-12">
          <MapPin className="text-white w-10 h-10" strokeWidth={3} />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-black text-white mb-2">Pranam Yatri</h2>
        <p className="text-slate-400 font-medium mb-8 text-xs md:text-sm tracking-wide">
          Enter the spiritual gateway to plan your divine journey across Bharat.
        </p>

        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white hover:bg-orange-50 disabled:opacity-50 text-slate-950 font-black py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl transform hover:-translate-y-0.5 active:scale-95 text-sm"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            {loading ? "Connecting to Google..." : "Continue with Google"}
          </button>
        </div>

        {error && (
          <div className="mt-6 p-3 bg-red-500/20 border border-red-500/40 rounded-xl text-xs text-red-200 text-center leading-relaxed">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}