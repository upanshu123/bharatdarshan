import React, { useEffect, useMemo, useRef, useState } from 'react';
import { auth, googleProvider } from '../config/firebaseConfig';
import { onAuthStateChanged, signInWithPopup, signInWithRedirect, getRedirectResult, signInAnonymously } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin, UserCheck } from 'lucide-react';

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
          setError('Domain unauthorized in Firebase Console. Please add bharatdarshan-seven.vercel.app under Authentication -> Settings -> Authorized Domains.');
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
      // Step 1: Try Popup Sign-in
      await signInWithPopup(auth, googleProvider);
    } catch (popupErr) {
      console.warn('Popup login failed/blocked, initiating Google OAuth Redirect:', popupErr);

      if (popupErr?.code === 'auth/unauthorized-domain') {
        setError('Domain unauthorized in Firebase Console. Add bharatdarshan-seven.vercel.app to Authorized Domains under Firebase Authentication Settings.');
        setLoading(false);
        return;
      }

      // Step 2: Fallback to Redirect Sign-in for mobile browsers / popup-blockers
      try {
        await signInWithRedirect(auth, googleProvider);
      } catch (redirectErr) {
        console.error('Redirect sign-in error:', redirectErr);
        if (redirectErr?.code === 'auth/unauthorized-domain') {
          setError('Domain unauthorized in Firebase Console. Add bharatdarshan-seven.vercel.app to Authorized Domains under Firebase Authentication Settings.');
        } else {
          setError(redirectErr?.message || 'Google Login failed. Please try again or use Guest mode.');
        }
        setLoading(false);
      }
    }
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await signInAnonymously(auth);
    } catch (anonErr) {
      console.error('Guest login failed:', anonErr);
      navigate(from, { replace: true });
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

      <div className="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[48px] shadow-2xl max-w-md w-full text-center">
        <div className="bg-orange-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-600/40 rotate-12">
          <MapPin className="text-white w-10 h-10" strokeWidth={3} />
        </div>
        <h2 className="text-4xl font-serif font-black text-white mb-4">Pranam Yatri</h2>
        <p className="text-slate-400 font-medium mb-8 text-sm tracking-wide">Enter the spiritual gateway to plan your divine journey across Bharat.</p>
        
        <div className="space-y-4">
          <button 
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white hover:bg-orange-50 disabled:opacity-50 text-slate-950 font-black py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-4 shadow-xl transform hover:-translate-y-0.5 active:scale-95 text-sm"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
            {loading ? "Connecting to Google..." : "Continue with Google"}
          </button>

          <button 
            onClick={handleGuestLogin}
            disabled={loading}
            className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 border border-white/10 active:scale-95 text-xs"
          >
            <UserCheck size={16} className="text-orange-400" />
            Continue as Guest Yatri
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-500/20 border border-red-500/40 rounded-xl text-xs text-red-200 text-center leading-relaxed">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}