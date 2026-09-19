// import React from 'react';
// import { Mail, Phone, Heart, MapPin, Instagram, Facebook, Twitter, Globe } from 'lucide-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// export default function Footer() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Functional logic to handle "Top Destinations" scroll
//   const handleScrollToDestinations = (e) => {
//     e.preventDefault();
//     if (location.pathname !== '/') {
//       // If not on home page, navigate home first, then scroll
//       navigate('/', { state: { scrollTo: 'results-section' } });
//     } else {
//       // If already on home page, just scroll
//       document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <footer className="bg-slate-950 text-white pt-20 pb-10 mt-auto border-t border-white/5">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        
//         {/* Column 1: Brand & Mission */}
//         <div className="space-y-6">
//           <div className="flex items-center gap-3">
//             <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-600/20">
//               <MapPin className="text-white w-6 h-6" />
//             </div>
//             <h2 className="text-2xl font-serif font-bold tracking-tight">
//               Bharat<span className="text-orange-500">Darshan</span>
//             </h2>
//           </div>
//           <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
//             "Connecting the diverse threads of India into one beautiful journey. Explore the soul of our heritage through curated experiences."
//           </p>
//           <div className="flex gap-4">
//             {[Instagram, Facebook, Twitter].map((Icon, i) => (
//               <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 border border-white/10">
//                 <Icon size={18} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Column 2: Exploration - UPDATED TO BE FUNCTIONAL */}
//         <div>
//           <h3 className="font-black text-xs text-orange-500 uppercase tracking-[0.2em] mb-8">Exploration</h3>
//           <ul className="space-y-4 text-slate-400 text-sm font-bold">
//             <li>
//               <Link to="/" className="hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 underline-offset-4 hover:underline">
//                 Home
//               </Link>
//             </li>
//             <li>
//               {/* This now triggers the scroll logic */}
//               <button 
//                 onClick={handleScrollToDestinations}
//                 className="hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 underline-offset-4 hover:underline bg-transparent border-none p-0"
//               >
//                 Top Destinations
//               </button>
//             </li>
//             <li>
//               <Link to="/login" className="hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 underline-offset-4 hover:underline">
//                 Sign In / Register
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Column 3: Reach Out */}
//         <div>
//           <h3 className="font-black text-xs text-orange-500 uppercase tracking-[0.2em] mb-8">Reach Out</h3>
//           <div className="flex flex-col gap-6 text-slate-400 text-sm font-bold">
//             <a href="mailto:joinbharatdarshan@gmail.com" className="flex items-center gap-4 hover:text-white transition group">
//               <div className="bg-white/5 p-3 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 border border-white/10">
//                 <Mail size={18} />
//               </div>
//               <span className="truncate">joinbharatdarshan@gmail.com</span>
//             </a>
//             <a href="tel:+917357424552" className="flex items-center gap-4 hover:text-white transition group">
//               <div className="bg-white/5 p-3 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 border border-white/10">
//                 <Phone size={18} />
//               </div>
//               <span>+91 7357424552</span>
//             </a>
//           </div>
//         </div>

//         {/* Column 4: Official Info */}
//         <div>
//           <h3 className="font-black text-xs text-orange-500 uppercase tracking-[0.2em] mb-8">Official</h3>
//           <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
//             <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
//               Recognized as an official partner for Indian Tourism guidance and digital experiences.
//             </p>
//             <div className="flex items-center gap-2 text-white font-black text-xs">
//               <Globe size={14} className="text-orange-500" />
//               <span>INDIAN TOURISM BD-25</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-white/5 text-center">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="flex items-center gap-2 text-[11px] font-black text-slate-500 uppercase tracking-widest">
//             Crafted with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> for <span className="text-white">Incredible India</span>
//           </p>
//           <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
//             © 2026 BharatDarshan. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }




import React from 'react';
import { Mail, Phone, Heart, MapPin, Instagram, Facebook, Twitter, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();

  const hideFooter = pathname.startsWith('/login') || pathname.startsWith('/place/');

  if (hideFooter) return null;

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 mt-auto border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        
        {/* Column 1: Brand & Mission */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-600/20">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold tracking-tight">
              Bharat<span className="text-orange-500">Darshan</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
            "Connecting the diverse threads of India into one beautiful journey. Explore the soul of our heritage through curated experiences."
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Exploration */}
        <div>
          <h3 className="font-black text-xs text-orange-500 uppercase tracking-[0.2em] mb-8">Exploration</h3>
          <ul className="space-y-4 text-slate-400 text-sm font-bold">
            <li>
              <Link to="/" className="hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 underline-offset-4 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/top-destinations" className="hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 underline-offset-4 hover:underline">
                Top Destinations
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 underline-offset-4 hover:underline">
                Sign In / Register
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Reach Out */}
        <div>
          <h3 className="font-black text-xs text-orange-500 uppercase tracking-[0.2em] mb-8">Reach Out</h3>
          <div className="flex flex-col gap-6 text-slate-400 text-sm font-bold">
            <a href="mailto:joinbharatdarshan@gmail.com" className="flex items-center gap-4 hover:text-white transition group">
              <div className="bg-white/5 p-3 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 border border-white/10">
                <Mail size={18} />
              </div>
              <span className="truncate">joinbharatdarshan@gmail.com</span>
            </a>
            <a href="tel:+917357424552" className="flex items-center gap-4 hover:text-white transition group">
              <div className="bg-white/5 p-3 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 border border-white/10">
                <Phone size={18} />
              </div>
              <span>+91 7357424552</span>
            </a>
          </div>
        </div>

        {/* Column 4: Official Info */}
        <div>
          <h3 className="font-black text-xs text-orange-500 uppercase tracking-[0.2em] mb-8">Official</h3>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
              Recognized as an official partner for Indian Tourism guidance and digital experiences.
            </p>
            <div className="flex items-center gap-2 text-white font-black text-xs">
              <Globe size={14} className="text-orange-500" />
              <span>INDIAN TOURISM BD-25</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-white/5 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="flex items-center gap-2 text-[11px] font-black text-slate-500 uppercase tracking-widest">
            Crafted with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> for <span className="text-white">Incredible India</span>
          </p>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            © 2026 BharatDarshan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}