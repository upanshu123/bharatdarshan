import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Compass, ChevronRight } from 'lucide-react';
import {
  cleanDestinationName,
  SPECIFIC_PLACE_IMAGE_MAP,
  getSpecificPlaceImage,
  fetchWikimediaHeroImage,
  getCuratedFallbackImage
} from '../utils/wikimediaImage';

export { cleanDestinationName, SPECIFIC_PLACE_IMAGE_MAP, getSpecificPlaceImage };

/**
 * Priority Order for Card Images:
 * 1. Check direct place image URL / direct map first.
 * 2. If missing, check cleanName Wikimedia/Unsplash query.
 * 3. If that fails, use Step 1 category fallback (tea garden/mountains for hill stations, waterfall for Dudhsagar).
 */
export function DestinationCardImage({ place, className = '', alt = '' }) {
  const cleanName = cleanDestinationName(place?.name);
  const locationStr = place?.cityState || place?.state || place?.location || '';
  const directSpecific = getSpecificPlaceImage(place?.name);
  const directUrl = directSpecific || (place?.image && place.image.trim() ? place.image.trim() : null);

  const [imgSrc, setImgSrc] = useState(
    directUrl || getCuratedFallbackImage(place?.category, locationStr, cleanName || place?.name)
  );

  useEffect(() => {
    let isMounted = true;
    const direct = getSpecificPlaceImage(place?.name);
    if (direct) {
      setImgSrc(direct);
      return;
    }

    // 1. Direct place image URL if provided
    if (place?.image && place.image.trim()) {
      setImgSrc(place.image.trim());
      return;
    }

    // 2. If missing, query cleanName Wikimedia/Unsplash
    const clean = cleanDestinationName(place?.name);
    fetchWikimediaHeroImage(clean, place?.category, locationStr)
      .then((url) => {
        if (isMounted && url) {
          setImgSrc(url);
        }
      })
      .catch(() => {
        // 3. Category fallback
        if (isMounted) {
          setImgSrc(getCuratedFallbackImage(place?.category, locationStr, clean || place?.name));
        }
      });

    return () => { isMounted = false; };
  }, [place?.name, place?.image, place?.category, locationStr]);

  return (
    <img
      src={imgSrc}
      alt={alt || place?.name}
      className={className}
      loading="lazy"
      onError={(e) => {
        e.target.onerror = null;
        const clean = cleanDestinationName(place?.name);
        fetchWikimediaHeroImage(clean, place?.category, locationStr)
          .then((url) => {
            if (url && url !== e.target.src) {
              e.target.src = url;
            } else {
              e.target.src = getCuratedFallbackImage(place?.category, locationStr, clean || place?.name);
            }
          })
          .catch(() => {
            e.target.src = getCuratedFallbackImage(place?.category, locationStr, clean || place?.name);
          });
      }}
    />
  );
}

export default function DestinationCard({ place }) {
  const navigate = useNavigate();
  if (!place) return null;

  return (
    <Link to={`/place/${place.id}`} className="group flex flex-col h-full">
      <div className="h-[500px] overflow-hidden rounded-[80px] relative shadow-2xl transition-all duration-700 group-hover:rounded-[40px]">
        <DestinationCardImage
          place={place}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
          alt={place.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

        {/* Location Badge */}
        <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
          <MapPin size={12} />
          <span className="truncate max-w-[150px]">{place.cityState || place.state || place.location}</span>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-10 left-8 right-8 text-left">
          <span className="text-orange-400 font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">
            {Array.isArray(place.vibes) && place.vibes.length > 0 ? place.vibes.join(' • ') : place.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-black text-white mb-4 group-hover:text-orange-300 transition-colors leading-tight">
            {place.name}
          </h3>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate(`/plan-my-yatra?destination=${encodeURIComponent(place.name || place.title || '')}`);
              }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-600/40 flex items-center gap-2 active:scale-95 z-20 cursor-pointer"
            >
              <Compass size={14} />
              <span>Plan Trip</span>
            </button>

            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all duration-300 ml-auto">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

