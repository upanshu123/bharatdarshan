/**
 * Official Wikimedia Commons & Wikipedia API Dynamic Image Resolver
 * Accurately fetches high-resolution architectural / monument facades
 * with curated category and state-level fallbacks.
 */

// In-memory cache to prevent redundant network calls during session
const imageCache = new Map();

export const CURATED_CATEGORY_FALLBACKS = {
  'heritage & forts': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
  'heritage': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
  'spiritual & temples': 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
  'spiritual': 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
  'hill stations & nature': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
  'hill station': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
  'nature': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
  'beaches & coastal': 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
  'beaches': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
  'wildlife & safari': 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=80',
  'default': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80'
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
 * Returns a high-quality curated Unsplash image matching category or state,
 * avoiding generic single-monument hardcoding.
 */
export function getCuratedFallbackImage(category = '', state = '') {
  const stateNorm = (state || '').toLowerCase().trim();
  for (const [sKey, url] of Object.entries(CURATED_STATE_FALLBACKS)) {
    if (stateNorm.includes(sKey)) return url;
  }

  const catNorm = (category || '').toLowerCase().trim();
  for (const [cKey, url] of Object.entries(CURATED_CATEGORY_FALLBACKS)) {
    if (catNorm.includes(cKey) || cKey.includes(catNorm)) return url;
  }

  return CURATED_CATEGORY_FALLBACKS['default'];
}

/**
 * Query the official Wikipedia/Wikimedia API for the place title.
 * Returns the 1600px thumbnail source or a clean curated fallback.
 */
export async function fetchWikimediaHeroImage(placeTitle, category = '', state = '') {
  if (!placeTitle) {
    return getCuratedFallbackImage(category, state);
  }

  const cacheKey = placeTitle.toLowerCase().trim();
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey);
  }

  // Generate candidate search titles
  const candidates = [];
  const raw = placeTitle.trim();
  candidates.push(raw);

  // Strip parentheticals e.g. "Galtaji Temple (Monkey Temple)" -> "Galtaji Temple"
  const noParen = raw.replace(/\(.*?\)/g, '').trim();
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
  const fallback = getCuratedFallbackImage(category, state);
  imageCache.set(cacheKey, fallback);
  return fallback;
}
