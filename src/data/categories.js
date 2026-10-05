/**
 * @file categories.js
 * Standardized Experience & Vibe Schemas and Matching Logic
 * 
 * Standard Categories:
 * - Heritage & Forts
 * - Spiritual & Temples
 * - Adventure & Treks
 * - Hill Stations & Nature
 * - Beaches & Coastal
 * - Wildlife & Safari
 * - Culture & Art
 */

/**
 * Standardized 7 Experience / Vibe categories
 * @type {readonly string[]}
 */
export const STANDARD_EXPERIENCE_TAGS = Object.freeze([
  "Heritage & Forts",
  "Spiritual & Temples",
  "Adventure & Treks",
  "Hill Stations & Nature",
  "Beaches & Coastal",
  "Wildlife & Safari",
  "Culture & Art"
]);

export const STANDARD_VIBES = STANDARD_EXPERIENCE_TAGS;

/**
 * Strictly the 8 clean options for the EXPERIENCE dropdown:
 * Any Vibe, Heritage & Forts, Spiritual & Temples, Adventure & Treks,
 * Hill Stations & Nature, Beaches & Coastal, Wildlife & Safari, Culture & Art
 */
export const EXPERIENCE_DROPDOWN_OPTIONS = Object.freeze([
  "Any Vibe",
  ...STANDARD_EXPERIENCE_TAGS
]);

/**
 * Mapping of legacy or overlapping vibes/categories to standard categories
 * @type {Record<string, string>}
 */
export const VIBE_MAPPINGS = Object.freeze({
  // Heritage & Forts
  "heritage": "Heritage & Forts",
  "forts": "Heritage & Forts",
  "palace": "Heritage & Forts",
  "palaces": "Heritage & Forts",
  "monument": "Heritage & Forts",
  "monuments": "Heritage & Forts",
  "heritage & forts": "Heritage & Forts",

  // Spiritual & Temples
  "spiritual": "Spiritual & Temples",
  "temple": "Spiritual & Temples",
  "temples": "Spiritual & Temples",
  "pilgrimage": "Spiritual & Temples",
  "sacred": "Spiritual & Temples",
  "spiritual & temples": "Spiritual & Temples",

  // Adventure & Treks
  "adventure": "Adventure & Treks",
  "trek": "Adventure & Treks",
  "treks": "Adventure & Treks",
  "trekking": "Adventure & Treks",
  "adventure & treks": "Adventure & Treks",

  // Hill Stations & Nature
  "hill stations": "Hill Stations & Nature",
  "hill station": "Hill Stations & Nature",
  "hills": "Hill Stations & Nature",
  "hills & valleys": "Hill Stations & Nature",
  "valleys": "Hill Stations & Nature",
  "nature": "Hill Stations & Nature",
  "lakes": "Hill Stations & Nature",
  "lakes & mountains": "Hill Stations & Nature",
  "mountains": "Hill Stations & Nature",
  "backwaters": "Hill Stations & Nature",
  "backwaters & nature": "Hill Stations & Nature",
  "hill stations & nature": "Hill Stations & Nature",

  // Beaches & Coastal
  "beach": "Beaches & Coastal",
  "beaches": "Beaches & Coastal",
  "coastal": "Beaches & Coastal",
  "island": "Beaches & Coastal",
  "islands": "Beaches & Coastal",
  "beaches & coastal": "Beaches & Coastal",

  // Wildlife & Safari
  "wildlife": "Wildlife & Safari",
  "safari": "Wildlife & Safari",
  "forest": "Wildlife & Safari",
  "forests": "Wildlife & Safari",
  "wildlife & forests": "Wildlife & Safari",
  "national park": "Wildlife & Safari",
  "wildlife & safari": "Wildlife & Safari",

  // Culture & Art
  "culture": "Culture & Art",
  "art": "Culture & Art",
  "arts": "Culture & Art",
  "museum": "Culture & Art",
  "handicraft": "Culture & Art",
  "culture & art": "Culture & Art"
});

/**
 * Destination schema definition for reference and IDE intellisense.
 * 
 * @typedef {Object} Destination
 * @property {string} id - Unique identifier (e.g. 'amber-fort')
 * @property {string} name - Title / Name of the destination
 * @property {string} [city] - City name
 * @property {string} [state] - State name
 * @property {string} [location] - Location label
 * @property {string} [cityState] - Combined City, State label
 * @property {string} [category] - Primary category string
 * @property {string[]} [vibes] - Supported array of multiple vibes (e.g. ['Heritage & Forts', 'Spiritual & Temples'])
 * @property {string} [image] - Primary photo URL
 * @property {string} [description] - Short summary
 * @property {string} [detailedDescription] - Full description
 * @property {number} [rating] - Destination rating
 * @property {boolean} [isPopular] - Top destination flag
 */

/**
 * Normalizes a category or vibe string to its standardized tag if mapped.
 * @param {string} tag 
 * @returns {string}
 */
export const normalizeVibe = (tag) => {
  if (!tag || typeof tag !== 'string') return '';
  const clean = tag.trim().toLowerCase();
  return VIBE_MAPPINGS[clean] || tag.trim();
};

/**
 * Checks if a destination item matches the selected vibe.
 * 
 * Supports:
 * 1. Array of vibes: item.vibes.includes(selectedVibe)
 * 2. Primary category: item.category === selectedVibe
 * 3. Consolidates overlapping legacy tags to standard categories
 * 
 * @param {Destination|Object} item - Destination item
 * @param {string} selectedVibe - Selected vibe/category from filter
 * @returns {boolean}
 */
export const matchesVibe = (item, selectedVibe) => {
  if (
    !selectedVibe ||
    selectedVibe === 'Any Vibe' ||
    selectedVibe === 'All' ||
    selectedVibe.trim() === ''
  ) {
    return true;
  }
  if (!item) return false;

  const target = selectedVibe.trim();
  const targetNormalized = normalizeVibe(target).toLowerCase();
  const targetLower = target.toLowerCase();

  // Multi-Vibe Array support: check if item.vibes array includes selectedVibe
  if (Array.isArray(item.vibes)) {
    // Exact match in array
    if (item.vibes.includes(target)) return true;
    
    // Normalized or case-insensitive match in array
    const hasVibeMatch = item.vibes.some((v) => {
      if (!v || typeof v !== 'string') return false;
      const vTrim = v.trim();
      if (vTrim === target || vTrim.toLowerCase() === targetLower) return true;
      if (normalizeVibe(vTrim).toLowerCase() === targetNormalized) return true;
      return false;
    });
    if (hasVibeMatch) return true;
  }

  // Fallback if legacy item has item.category === selectedVibe
  if (item.category && typeof item.category === 'string') {
    const cat = item.category.trim();
    if (cat === target || cat.toLowerCase() === targetLower) return true;
    if (normalizeVibe(cat).toLowerCase() === targetNormalized) return true;
  }

  return false;
};

/**
 * Case-insensitive and trimmed location matching.
 * Matches against item.city, item.state, item.name, item.title, item.location, item.cityState.
 * 
 * @param {Destination|Object} item - Destination item
 * @param {string} query - Location query (City or State)
 * @returns {boolean}
 */
export const matchesLocation = (item, query) => {
  if (!query || !query.trim()) return true;
  if (!item) return false;

  const q = query.toLowerCase().trim();
  const name = (item.name || item.title || '').toLowerCase();
  const city = (item.city || '').toLowerCase();
  const state = (item.state || '').toLowerCase();
  const location = (item.location || '').toLowerCase();
  const cityState = (item.cityState || '').toLowerCase();

  return (
    name.includes(q) ||
    city.includes(q) ||
    state.includes(q) ||
    location.includes(q) ||
    cityState.includes(q)
  );
};

/**
 * Helper to extract or format a clean city/location name from query or items.
 * 
 * @param {string} query - Search term
 * @param {Array<Object>} [items=[]] - Matching items if any
 * @returns {string}
 */
export const formatLocationName = (query, items = []) => {
  if (items && items.length > 0) {
    const first = items[0];
    const rawLoc = first.city || first.location || first.cityState || '';
    if (rawLoc) {
      const cityPart = rawLoc.split(',')[0].trim();
      if (cityPart && (!query || cityPart.toLowerCase().includes(query.toLowerCase()) || query.toLowerCase().includes(cityPart.toLowerCase()))) {
        return cityPart;
      }
    }
  }

  if (!query || !query.trim()) return 'this location';

  // Capitalize query properly
  return query
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
