import React, { useState, useEffect, useCallback } from 'react';
import { Star, MessageSquarePlus, Send, Eye, ShieldCheck, X, Trash2, CheckCircle2, Sparkles, Filter, User, Loader2 } from 'lucide-react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { saveFeedback, fetchAllFeedbacks, deleteFeedbackItem } from '../../utils/feedbackService';

export default function FeedbackSection() {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(null);

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState('UI & Design');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Feedbacks state
  const [feedbacks, setFeedbacks] = useState([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(true);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

  const categories = ['UI & Design', 'Plan My Yatra', 'Feature Request', 'General Feedback'];

  // Auth listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        if (user.displayName) setName(user.displayName);
        if (user.email) setEmail(user.email);
      }
    });
    return () => unsub();
  }, [auth]);

  // Load feedbacks from Firestore (single source of truth)
  const loadFeedbacks = useCallback(async () => {
    setLoadingFeedbacks(true);
    try {
      const list = await fetchAllFeedbacks();
      setFeedbacks(list);
    } catch (err) {
      console.error('Error loading feedbacks:', err);
    } finally {
      setLoadingFeedbacks(false);
    }
  }, []);

  useEffect(() => {
    loadFeedbacks();
  }, [loadFeedbacks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setErrorMsg('Kripya apna feedback ya suggestion likhein.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const newFeedback = await saveFeedback({
        userName: name.trim() || currentUser?.displayName || 'Yatri Explorer',
        userEmail: email.trim() || currentUser?.email || '',
        photoURL: currentUser?.photoURL || '',
        rating,
        category,
        message: message.trim(),
      });

      // Optimistically add the new feedback to the top of the list
      setFeedbacks((prev) => [newFeedback, ...prev]);

      setSubmitted(true);
      setMessage('');
      setRating(5);
      setCategory('UI & Design');

      // Refresh from Firestore in background to get server timestamp
      loadFeedbacks();

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Feedback save error:', err);
      setErrorMsg('Feedback save karne me error aaya. Kripya internet connection check karein aur punah prayas karein.');
    } finally {
      // Always reset submitting — this is the fix for the stuck button
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Kya aap is feedback ko delete karna chahte hain?')) {
      try {
        await deleteFeedbackItem(id);
        setFeedbacks((prev) => prev.filter((fb) => fb.id !== id));
      } catch (err) {
        console.error('Delete error:', err);
        alert('Delete karne me error aaya. Kripya punah prayas karein.');
      }
    }
  };

  const filteredFeedbacks = feedbacks.filter((fb) => {
    if (selectedCategoryFilter === 'All') return true;
    return fb.category === selectedCategoryFilter;
  });

  const avgRating =
    feedbacks.length > 0
      ? (feedbacks.reduce((acc, curr) => acc + (Number(curr.rating) || 5), 0) / feedbacks.length).toFixed(1)
      : null;

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
      
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 mb-4 backdrop-blur-md">
            <Sparkles size={16} className="animate-spin-slow" />
            <span className="text-xs font-black uppercase tracking-widest">Yatri Feedback & Suggestions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight mb-4">
            Aapko <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">BharatDarshan</span> Kaisa Laga?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Aapke suggestions aur feedback se hum is project ko aur behtar banate hain. Kripya apna anubhav aur sujhav yahan share karein!
          </p>

          {/* View All Feedbacks Button */}
          <div className="mt-6">
            <button
              onClick={() => { setShowAdminModal(true); loadFeedbacks(); }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-all font-bold text-xs uppercase tracking-wider shadow-lg group"
            >
              <Eye size={16} className="text-orange-400 group-hover:scale-110 transition-transform" />
              View All Submitted Feedbacks ({loadingFeedbacks ? '...' : feedbacks.length})
            </button>
          </div>
        </div>

        {/* Main Grid: Feedback Form + Live Suggestions Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form Box (7 Cols) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[32px] p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <MessageSquarePlus size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">Share Your Experience</h3>
                  <p className="text-xs text-slate-400">Project Rating & Suggestions</p>
                </div>
              </div>

              {currentUser && (
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                  <User size={12} className="text-orange-400" />
                  <span className="font-medium truncate max-w-[120px]">{currentUser.displayName || 'Yatri'}</span>
                </div>
              )}
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 border border-green-500/40 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/10">
                  <CheckCircle2 size={44} />
                </div>
                <h4 className="text-2xl font-serif font-black text-white">Dhanyawad! Feedback Received</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Aapka feedback safaltapurvak save ho gaya hai. Ab ye sabhi users ko dikhai dega.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Send Another Feedback
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Star Rating Picker */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-3">
                    Rate This Project (1 - 5 Stars)
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-2 transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star
                          size={32}
                          className={`${
                            (hoverRating || rating) >= star
                              ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                              : 'text-slate-600'
                          } transition-colors duration-200`}
                        />
                      </button>
                    ))}
                    <span className="ml-3 text-sm font-bold text-amber-400">
                      {hoverRating || rating} / 5
                    </span>
                  </div>
                </div>

                {/* 2. Feedback Category Selection */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-3">
                    Select Topic / Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                          category === cat
                            ? 'bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/20'
                            : 'bg-slate-900/60 text-slate-400 border-white/10 hover:border-slate-600 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. ramesh@gmail.com"
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                {/* 4. Feedback Message */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                    Aapka Feedback & Suggestions <span className="text-orange-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Project kaisa lga? Kya features add hone chaiye ya kya improve hona chaiye..."
                    className="w-full bg-slate-900/80 border border-white/10 rounded-2xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-400 font-medium bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{errorMsg}</p>
                )}

                {/* 5. Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-600/30 transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Saving Feedback...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Feedback & Suggestion
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Showcase Box (5 Cols): Community Suggestions & Overall Rating */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Rating Summary Card */}
            <div className="bg-gradient-to-br from-orange-950/40 to-slate-900 border border-orange-500/20 rounded-[32px] p-6 text-center shadow-xl">
              {loadingFeedbacks ? (
                <Loader2 size={32} className="animate-spin text-orange-400 mx-auto mb-2" />
              ) : (
                <>
                  <span className="text-5xl font-serif font-black text-amber-400 block mb-2">
                    {avgRating ?? '—'}
                  </span>
                  <div className="flex justify-center gap-1 text-amber-400 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={20} fill="currentColor" />
                    ))}
                  </div>
                </>
              )}
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Overall Yatri Approval ({feedbacks.length} Reviews)
              </p>
            </div>

            {/* Recent Community Feedbacks List */}
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-wider text-slate-300 px-1 flex items-center justify-between">
                <span>Recent Suggestions</span>
                <span className="text-xs text-orange-400 font-medium">Live Feed</span>
              </h4>

              {loadingFeedbacks ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-pulse">
                      <div className="h-4 bg-slate-700 rounded w-1/2 mb-2"></div>
                      <div className="h-3 bg-slate-800 rounded w-full mb-1"></div>
                      <div className="h-3 bg-slate-800 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              ) : feedbacks.length === 0 ? (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center text-slate-400">
                  <p className="text-sm">Abhi tak koi feedback nahi mila. Pehle feedback dene wale banein! 🙏</p>
                </div>
              ) : (
                feedbacks.slice(0, 3).map((fb) => (
                  <div key={fb.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white font-black text-xs flex items-center justify-center shadow-sm">
                          {fb.userName ? fb.userName.charAt(0).toUpperCase() : 'Y'}
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-white leading-tight">{fb.userName}</h5>
                          <span className="text-[10px] text-slate-400">{fb.category}</span>
                        </div>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(Number(fb.rating) || 5)].map((_, i) => (
                          <Star key={i} size={12} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed italic">"{fb.message}"</p>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>

      </div>

      {/* --- ALL FEEDBACKS MODAL --- */}
      {showAdminModal && (
        <div className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-[32px] max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl text-white overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-950">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1 border border-orange-500/20">
                  <ShieldCheck size={12} /> Feedback Dashboard
                </div>
                <h3 className="text-xl font-serif font-bold text-white">All Submitted Feedbacks & Suggestions</h3>
              </div>

              <button
                onClick={() => setShowAdminModal(false)}
                className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Filters */}
            <div className="px-6 py-3 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2 overflow-x-auto shrink-0">
              <Filter size={14} className="text-slate-500 shrink-0" />
              {['All', ...categories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                    selectedCategoryFilter === cat
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Modal Content / Feedbacks List */}
            <div className="p-6 overflow-y-auto space-y-4 flex-grow">
              {loadingFeedbacks ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-slate-400">
                  <Loader2 size={40} className="animate-spin text-orange-400" />
                  <p className="text-sm">Feedbacks load ho rahe hain...</p>
                </div>
              ) : filteredFeedbacks.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <p className="text-sm">Is category me abhi koi feedback nahi mila hai.</p>
                </div>
              ) : (
                filteredFeedbacks.map((fb) => (
                  <div
                    key={fb.id}
                    className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="space-y-2 flex-grow">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white font-black text-sm flex items-center justify-center shadow-md shrink-0">
                          {fb.userName ? fb.userName.charAt(0).toUpperCase() : 'Y'}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm text-white">{fb.userName}</h4>
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-orange-400 font-medium">
                              {fb.category}
                            </span>
                          </div>
                          {fb.userEmail && (
                            <p className="text-xs text-slate-400">{fb.userEmail}</p>
                          )}
                        </div>
                      </div>

                      {/* Message Content */}
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                        "{fb.message}"
                      </p>

                      <div className="text-[10px] text-slate-500 font-medium">
                        Submitted on: {fb.createdAt ? new Date(fb.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : 'Just now'}
                      </div>
                    </div>

                    {/* Rating & Delete Action */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
                      <div className="flex text-amber-400">
                        {[...Array(Number(fb.rating) || 5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>

                      <button
                        onClick={() => handleDelete(fb.id)}
                        className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Delete Feedback"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 text-center shrink-0">
              <p className="text-xs text-slate-400">
                Total Feedbacks: <span className="text-orange-400 font-bold">{feedbacks.length}</span>
                {' · '}
                <span className="text-slate-500">Sabhi feedbacks real-time Firestore se load hote hain</span>
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
