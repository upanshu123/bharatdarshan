/**
 * Official Wikimedia Commons & Wikipedia API Dynamic Image Resolver
 * Accurately fetches high-resolution architectural / monument facades
 * with curated category and state-level fallbacks.
 */

// In-memory cache to prevent redundant network calls during session
const imageCache = new Map();

export const CURATED_CATEGORY_FALLBACKS = {
  // Verified Unsplash Category Fallbacks
  'hill stations': 'https://images.unsplash.com/photo-1723214520491-7f90eeda2cdd?auto=format&fit=crop&w=1600&q=80',
  'hill station': 'https://images.unsplash.com/photo-1723214520491-7f90eeda2cdd?auto=format&fit=crop&w=1600&q=80',
  'hill stations & nature': 'https://images.unsplash.com/photo-1723214520491-7f90eeda2cdd?auto=format&fit=crop&w=1600&q=80',
  'nature': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
  'waterfalls': 'https://images.unsplash.com/photo-1534531409543-069f6204c5b4?auto=format&fit=crop&w=1600&q=80',
  'waterfall': 'https://images.unsplash.com/photo-1534531409543-069f6204c5b4?auto=format&fit=crop&w=1600&q=80',
  'heritage & forts': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
  'heritage': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
  'beaches & coastal': 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
  'beaches': 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
  'spiritual & temples': 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
  'spiritual': 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
  'wildlife & safari': 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=80',
  'wildlife': 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=80',
  'default': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80'
};

export const CURATED_STATE_FALLBACKS = {
  'rajasthan': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
  'uttarakhand': 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1600&q=80',
  'himachal pradesh': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
  'kerala': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
  'goa': 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
  'ladakh': 'https://images.unsplash.com/photo-1685555845405-1503f76a5462?auto=format&fit=crop&w=1600&q=80',
  'punjab': 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1600&q=80',
  'delhi': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80',
  'uttar pradesh': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80'
};

/**
 * Specific Place Image Map:
 * Direct verified lookup map for top prominent destinations so they never hit fallback.
 */
export const SPECIFIC_PLACE_IMAGE_MAP = {
  'Mainpat': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'Dudhsagar Waterfalls Trek': 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
  'Dudhsagar Waterfalls': 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
  'Dudhsagar Falls': 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
  'Nahargarh Fort & Sunset Point': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
  'Nahargarh Fort': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
};

/**
 * Clean the place name before requesting an image or querying Wikimedia/Unsplash:
 * Strips out parentheses, trekking suffixes, or extra qualifiers.
 * Example: "Dudhsagar Waterfalls Trek" -> "Dudhsagar Falls"
 * Example: "Manali (Hadimba Temple & Solang)" -> "Manali"
 */
export function cleanDestinationName(name = '') {
  if (!name) return '';
  let cleaned = name
    .replace(/\(.*?\)/g, '')
    .replace(/Trek|Safari|Camping|White Water Rafting|Trail/gi, '')
    .trim();

  if (/dudhsagar/i.test(cleaned)) {
    cleaned = cleaned.replace(/waterfalls?/i, 'Falls');
  }
  return cleaned.replace(/\s+/g, ' ').trim();
}

/**
 * Quick direct lookup helper for specific prominent destinations
 */
export function getSpecificPlaceImage(name = '') {
  if (!name) return null;
  const raw = name.trim();
  const clean = cleanDestinationName(name);

  if (SPECIFIC_PLACE_IMAGE_MAP[raw]) return SPECIFIC_PLACE_IMAGE_MAP[raw];
  if (SPECIFIC_PLACE_IMAGE_MAP[clean]) return SPECIFIC_PLACE_IMAGE_MAP[clean];

  const rawLower = raw.toLowerCase();
  const cleanLower = clean.toLowerCase();
  for (const [key, url] of Object.entries(SPECIFIC_PLACE_IMAGE_MAP)) {
    const kLower = key.toLowerCase();
    if (kLower === rawLower || kLower === cleanLower || rawLower.includes(kLower) || cleanLower.includes(kLower)) {
      return url;
    }
  }
  return null;
}

/**
 * Returns a high-quality curated Unsplash image matching category, name, or state,
 * avoiding generic single-monument hardcoding.
 */
export function getCuratedFallbackImage(category = '', state = '', placeName = '') {
  const nameNorm = (placeName || '').toLowerCase().trim();
  const catNorm = (category || '').toLowerCase().trim();

  // 1. Strict waterfall check: If place.name or category includes "Waterfall", fallback MUST be the waterfall photo.
  if (nameNorm.includes('waterfall') || catNorm.includes('waterfall') || nameNorm.includes('falls') || nameNorm.includes('water fall')) {
    return CURATED_CATEGORY_FALLBACKS['waterfalls'];
  }

  // 2. Strict hill station check: If place.category includes "Hill Stations" (or name has hill/tea garden), fallback MUST be the hills photo.
  if (catNorm.includes('hill station') || catNorm.includes('hill stations') || (catNorm.includes('hill') && !catNorm.includes('spiritual')) || nameNorm.includes('hill station') || nameNorm.includes('tea garden')) {
    return CURATED_CATEGORY_FALLBACKS['hill stations'];
  }

  // 3. Category-specific match
  if (catNorm) {
    if (catNorm.includes('wildlife') || catNorm.includes('safari')) {
      return CURATED_CATEGORY_FALLBACKS['wildlife & safari'];
    }
    if (catNorm.includes('spiritual') || catNorm.includes('temple')) {
      return CURATED_CATEGORY_FALLBACKS['spiritual & temples'];
    }
    if (catNorm.includes('beach') || catNorm.includes('coastal')) {
      return CURATED_CATEGORY_FALLBACKS['beaches & coastal'];
    }
    if (catNorm.includes('heritage') || catNorm.includes('fort') || catNorm.includes('palace')) {
      return CURATED_CATEGORY_FALLBACKS['heritage & forts'];
    }
    if (catNorm.includes('nature') || catNorm.includes('valley') || catNorm.includes('lake') || catNorm.includes('river')) {
      return CURATED_CATEGORY_FALLBACKS['nature'];
    }

    for (const [cKey, url] of Object.entries(CURATED_CATEGORY_FALLBACKS)) {
      if (cKey !== 'default' && (catNorm.includes(cKey) || cKey.includes(catNorm))) {
        return url;
      }
    }
  }

  // 4. State fallback if category was ambiguous
  const stateNorm = (state || '').toLowerCase().trim();
  if (stateNorm) {
    for (const [sKey, url] of Object.entries(CURATED_STATE_FALLBACKS)) {
      if (stateNorm.includes(sKey)) return url;
    }
  }

  return CURATED_CATEGORY_FALLBACKS['default'];
}

/**
 * Query the official Wikipedia/Wikimedia API for the place title.
 * Returns the 1600px thumbnail source or a clean curated fallback.
 */
export async function fetchWikimediaHeroImage(placeTitle, category = '', state = '') {
  if (!placeTitle) {
    return getCuratedFallbackImage(category, state, placeTitle);
  }

  const cacheKey = placeTitle.toLowerCase().trim();
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey);
  }

  // 0. Check specific place image map first
  const specific = getSpecificPlaceImage(placeTitle);
  if (specific) {
    imageCache.set(cacheKey, specific);
    return specific;
  }

  // Generate candidate search titles
  const candidates = [];
  const raw = placeTitle.trim();
  const clean = cleanDestinationName(placeTitle);
  if (clean && !candidates.includes(clean)) candidates.push(clean);
  if (!candidates.includes(raw)) candidates.push(raw);

  // Strip parentheticals e.g. "Galtaji Temple (Monkey Temple)" -> "Galtaji Temple"
  const noParen = (clean || raw).replace(/\(.*?\)/g, '').trim();
  if (noParen && !candidates.includes(noParen)) candidates.push(noParen);

  // Strip subtitle after "&" e.g. "Nahargarh Fort & Sunset Point" -> "Nahargarh Fort"
  const beforeAmp = noParen.split('&')[0].trim();
  if (beforeAmp && !candidates.includes(beforeAmp)) candidates.push(beforeAmp);

  // Strip after comma or hyphen
  const beforeComma = beforeAmp.split(',')[0].split('-')[0].trim();
  if (beforeComma && !candidates.includes(beforeComma)) candidates.push(beforeComma);

  // 1. Direct query with redirects enabled
  for (const title of candidates) {
    try {
      const endpoint = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1600&redirects=1&origin=*`;
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        const pages = data?.query?.pages;
        if (pages) {
          const pageId = Object.keys(pages)[0];
          if (pageId && pageId !== '-1') {
            const thumbSource = pages[pageId]?.thumbnail?.source;
            if (thumbSource) {
              imageCache.set(cacheKey, thumbSource);
              return thumbSource;
            }
          }
        }
      }
    } catch (err) {
      // Continue to next candidate
    }
  }

  // 2. Generator search query as secondary resolution
  try {
    const searchTarget = candidates[candidates.length - 1] || raw;
    const searchEndpoint = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(searchTarget)}&gsrlimit=1&prop=pageimages&format=json&pithumbsize=1600&origin=*`;
    const searchRes = await fetch(searchEndpoint);
    if (searchRes.ok) {
      const searchData = await searchRes.json();
      const pages = searchData?.query?.pages;
      if (pages) {
        const pageId = Object.keys(pages)[0];
        if (pageId && pageId !== '-1') {
          const thumbSource = pages[pageId]?.thumbnail?.source;
          if (thumbSource) {
            imageCache.set(cacheKey, thumbSource);
            return thumbSource;
          }
        }
      }
    }
  } catch (err) {
    // Continue to fallback
  }

  // 3. Graceful curated fallback matching category/state
  const fallback = getCuratedFallbackImage(category, state, placeTitle);
  imageCache.set(cacheKey, fallback);
  return fallback;
}

