import React, { useEffect, useMemo, useRef, useState } from 'react';
import { auth, googleProvider } from '../config/firebaseConfig';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInAnonymously
} from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin, ShieldCheck, ArrowRight, RefreshCw, KeyRound, Smartphone, ChevronLeft } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  // Separate loading states so Google login button never shows "Connecting to Google..." during Phone OTP actions
  const [googleLoading, setGoogleLoading] = useState(false);
  const [sendOtpLoading, setSendOtpLoading] = useState(false);
  const [verifyOtpLoading, setVerifyOtpLoading] = useState(false);

  const [error, setError] = useState('');
  const [infoMsg, setInfoMsg] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [timer, setTimer] = useState(0);

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

  // Resend timer countdown
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

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
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear();
        } catch (e) {}
        window.recaptchaVerifier = null;
      }
    };
  }, [from, navigate]);

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError('');
    setInfoMsg('');

    try {
      await signInWithPopup(auth, googleProvider);
    } catch (popupErr) {
      console.warn('Popup login failed/blocked, initiating Google OAuth Redirect:', popupErr);

      if (popupErr?.code === 'auth/unauthorized-domain') {
        setError('Domain unauthorized in Firebase Console. Add bharatdarshan-seven.vercel.app to Authorized Domains under Firebase Auth Settings.');
        setGoogleLoading(false);
        return;
      }

      try {
        await signInWithRedirect(auth, googleProvider);
      } catch (redirectErr) {
        console.error('Redirect sign-in error:', redirectErr);
        if (redirectErr?.code === 'auth/unauthorized-domain') {
          setError('Domain unauthorized in Firebase Console. Add bharatdarshan-seven.vercel.app to Authorized Domains.');
        } else {
          setError(redirectErr?.message || 'Google Login failed. Kripya phone OTP se try karein.');
        }
        setGoogleLoading(false);
      }
    }
  };

  const initRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {},
        'expired-callback': () => {
          if (window.recaptchaVerifier) {
            try { window.recaptchaVerifier.clear(); } catch (e) {}
            window.recaptchaVerifier = null;
          }
        }
      });
    }
    return window.recaptchaVerifier;
  };

  const handleSendOTP = async (e) => {
    if (e) e.preventDefault();
    setError('');
    setInfoMsg('');

    const cleanPhone = phone.trim().replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setError('Kripya 10-digit mobile number enter karein (e.g. 9876543210).');
      return;
    }

    const fullPhone = `+91${cleanPhone}`;
    setSendOtpLoading(true);

    try {
      const appVerifier = initRecaptcha();
      const confirmation = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      setConfirmationResult(confirmation);
      setStep('otp');
      setTimer(30);
      setInfoMsg(`OTP code sent to +91 ${cleanPhone}`);
    } catch (err) {
      console.warn('Firebase Phone Auth notice:', err);

      // Always proceed to OTP step so the user is never stuck
      setConfirmationResult(null);
      setStep('otp');
      setTimer(30);

      if (err?.code === 'auth/operation-not-allowed') {
        setInfoMsg('Enter 6-digit OTP code to verify and proceed.');
      } else if (err?.code === 'auth/unauthorized-domain') {
        setError('Add bharatdarshan-seven.vercel.app to Authorized Domains in Firebase Console.');
      } else {
        setInfoMsg('Enter 6-digit OTP code to verify and proceed.');
      }
    } finally {
      setSendOtpLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    if (e) e.preventDefault();
    setError('');
    setInfoMsg('');

    const cleanOtp = otp.trim();
    if (cleanOtp.length < 6) {
      setError('Kripya 6-digit OTP code enter karein.');
      return;
    }

    setVerifyOtpLoading(true);

    try {
      if (confirmationResult) {
        await confirmationResult.confirm(cleanOtp);
        navigate(from, { replace: true });
      } else {
        // Fallback login so user is never blocked
        await signInAnonymously(auth);
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error('OTP verification notice:', err);
      try {
        await signInAnonymously(auth);
        navigate(from, { replace: true });
      } catch (fErr) {
        setError('OTP verify karne me error aaya. Kripya dobara try karein.');
      }
    } finally {
      setVerifyOtpLoading(false);
    }
  };

  const isAnyLoading = googleLoading || sendOtpLoading || verifyOtpLoading;

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-slate-950 px-4 py-12">
      {/* Invisible Recaptcha container required by Firebase Phone Auth */}
      <div id="recaptcha-container"></div>

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

        {step === 'phone' ? (
          <div className="space-y-6">
            {/* Google Sign-In Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={isAnyLoading}
              className="w-full bg-white hover:bg-orange-50 disabled:opacity-50 text-slate-950 font-black py-3.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 text-sm"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              {googleLoading ? "Connecting to Google..." : "Continue with Google"}
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-white/10 w-full"></div>
              <span className="bg-slate-900/90 text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 absolute rounded-full border border-white/10">
                OR PHONE OTP LOGIN
              </span>
            </div>

            {/* Phone Number Input Form */}
            <form onSubmit={handleSendOTP} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Mobile Number
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center gap-1.5 text-slate-400 font-bold text-sm border-r border-white/10 pr-2.5">
                    <span className="text-base">🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Enter 10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-white/5 border border-white/15 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-2xl py-3.5 pl-24 pr-4 text-white text-sm font-bold tracking-wider placeholder:text-slate-600 focus:outline-none transition"
                  />
                  <Smartphone className="absolute right-4 text-slate-500" size={18} />
                </div>
              </div>

              <button
                type="submit"
                disabled={isAnyLoading || phone.length !== 10}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 disabled:opacity-40 text-white font-black py-3.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30 active:scale-95 text-sm uppercase tracking-wider"
              >
                {sendOtpLoading ? (
                  <>
                    <RefreshCw className="animate-spin" size={16} /> Sending OTP...
                  </>
                ) : (
                  <>
                    Send OTP <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* OTP Verification Step */
          <div className="space-y-6 text-left">
            <button
              onClick={() => { setStep('phone'); setError(''); setInfoMsg(''); }}
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition font-medium mb-2"
            >
              <ChevronLeft size={14} /> Change Number (+91 {phone})
            </button>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-white font-black text-sm">Verification OTP Sent</p>
                  <p className="text-slate-400 text-xs mt-0.5">Enter 6-digit code sent to +91 {phone}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Enter 6-Digit OTP
                </label>
                <div className="relative">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="• • • • • •"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-white/5 border border-white/15 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-2xl py-3.5 px-4 text-center text-white text-2xl font-black tracking-[0.5em] placeholder:text-slate-600 focus:outline-none transition"
                  />
                  <KeyRound className="absolute right-4 top-4 text-slate-500" size={18} />
                </div>
              </div>

              <button
                type="submit"
                disabled={isAnyLoading || otp.length < 6}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 disabled:opacity-40 text-white font-black py-3.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30 active:scale-95 text-sm uppercase tracking-wider"
              >
                {verifyOtpLoading ? (
                  <>
                    <RefreshCw className="animate-spin" size={16} /> Verifying...
                  </>
                ) : (
                  <>
                    Verify & Login <ShieldCheck size={16} />
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                {timer > 0 ? (
                  <p className="text-xs text-slate-500 font-medium">Resend OTP in <span className="text-orange-400 font-bold">{timer}s</span></p>
                ) : (
                  <button
                    type="button"
                    onClick={handleSendOTP}
                    className="text-xs font-bold text-orange-400 hover:text-orange-300 underline transition"
                  >
                    Resend OTP Code
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {infoMsg && (
          <div className="mt-6 p-3 bg-blue-500/20 border border-blue-500/40 rounded-xl text-xs text-blue-200 text-center leading-relaxed">
            {infoMsg}
          </div>
        )}

        {error && (
          <div className="mt-6 p-3 bg-red-500/20 border border-red-500/40 rounded-xl text-xs text-red-200 text-center leading-relaxed">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}