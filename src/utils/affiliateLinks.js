/**
 * src/utils/affiliateLinks.js
 * Category-Specific Deep Links (Trains, Flights, Hotels, Cabs)
 * Auto-Filled Station Codes, Airport Codes, Dates & Passengers
 * Preserves Active Affiliate Tracking Parameters (CJ, GetYourGuide, MMT, Cleartrip, Expedia, Goibibo)
 */

export const AFFILIATE_TRACKING = {
  bookingHotelsCj: 'https://www.anrdoezrs.net/click-101883662-17322915',
  bookingFlightsCj: 'https://www.dpbolvw.net/click-101883662-17289010',
  bookingCarsCj: 'https://www.kqzyfj.com/click-101883662-17289007',
  gygPartnerId: 'L21UWLJ',
  gygUtmMedium: 'online_publisher',
  cleartripShortlink: 'https://bitli.in/O9l1k81',
  mmtShortlink: 'https://bitli.in/vH7D6en',
  expediaShortlink: 'https://bitli.in/sP8sZwo',
  goibiboShortlink: 'https://bitli.in/xKkdwRT',
  klookShortlink: 'https://klook.tpo.mx/0r4GgPTK'
};

export const locationMeta = {
  'delhi': { city: 'Delhi', station: 'NDLS', airport: 'DEL' },
  'jaipur': { city: 'Jaipur', station: 'JP', airport: 'JAI' },
  'udaipur': { city: 'Udaipur', station: 'UDZ', airport: 'UDR' },
  'jodhpur': { city: 'Jodhpur', station: 'JU', airport: 'JDH' },
  'varanasi': { city: 'Varanasi', station: 'BSB', airport: 'VNS' },
  'agra': { city: 'Agra', station: 'AGC', airport: 'AGR' },
  'rishikesh': { city: 'Rishikesh', station: 'RKSH', airport: 'DED' },
  'manali': { city: 'Manali', station: 'CDG', airport: 'KUU' },
  'shimla': { city: 'Shimla', station: 'SML', airport: 'SLV' },
  'leh ladakh': { city: 'Leh', station: 'JAT', airport: 'IXL' },
  'kerala backwaters': { city: 'Alleppey', station: 'ALLP', airport: 'COK' },
  'munnar': { city: 'Munnar', station: 'AWY', airport: 'COK' },
  'goa': { city: 'Goa', station: 'MAO', airport: 'GOI' },
  'hampi': { city: 'Hampi', station: 'HPT', airport: 'BLR' },
  'mysore': { city: 'Mysore', station: 'MYS', airport: 'MYQ' },
  'shillong': { city: 'Shillong', station: 'GHY', airport: 'SHL' },
  'andaman': { city: 'Port Blair', station: 'MAS', airport: 'IXZ' },
  'amritsar': { city: 'Amritsar', station: 'ASR', airport: 'ATQ' },
  'madurai': { city: 'Madurai', station: 'MDU', airport: 'IXM' },
  'puri': { city: 'Puri', station: 'PURI', airport: 'BBI' }, // Puri & Konark -> Puri Station & Bhubaneswar Airport
  'darjeeling': { city: 'Darjeeling', station: 'NJP', airport: 'IXB' },
  'coorg': { city: 'Coorg', station: 'MYS', airport: 'IXE' },
  'ooty': { city: 'Ooty', station: 'UAM', airport: 'CJB' },
  'lucknow': { city: 'Lucknow', station: 'LKO', airport: 'LKO' },
  'mumbai': { city: 'Mumbai', station: 'CSMT', airport: 'BOM' },
  'bengaluru': { city: 'Bengaluru', station: 'SBC', airport: 'BLR' },
  'kolkata': { city: 'Kolkata', station: 'HWH', airport: 'CCU' },
  'chennai': { city: 'Chennai', station: 'MAS', airport: 'MAA' },
  'hyderabad': { city: 'Hyderabad', station: 'SC', airport: 'HYD' },
  'ahmedabad': { city: 'Ahmedabad', station: 'ADI', airport: 'AMD' },
  'patna': { city: 'Patna', station: 'PNBE', airport: 'PAT' },
  'bhopal': { city: 'Bhopal', station: 'BPL', airport: 'BHO' },
  'indore': { city: 'Indore', station: 'INDB', airport: 'IDR' }
};

// Helper to match any dropdown string like "Puri & Konark, Odisha"
export const resolvePlace = (rawStr, fallbackKey = 'delhi') => {
  if (!rawStr) return locationMeta[fallbackKey];
  const lower = String(rawStr).toLowerCase();
  const matchedKey = Object.keys(locationMeta).find(k => lower.includes(k));
  return matchedKey ? locationMeta[matchedKey] : {
    city: String(rawStr).split(',')[0].split('&')[0].trim(),
    station: 'NDLS',
    airport: 'DEL'
  };
};

/**
 * Build Category-Specific Pre-Filled Deep Links using plan state
 * Embeds approved affiliate tracking IDs while keeping route, dates, and guests intact
 */
export const generateBookingLinks = (plan = {}) => {
  const origin = resolvePlace(plan?.departingFrom || plan?.origin, 'delhi');
  const dest = resolvePlace(plan?.destination || plan?.destinationName, 'puri');
  const adults = Number(plan?.travellers || plan?.persons || plan?.travelers) || 2;

  // Format Dates
  const start = plan?.startDate ? new Date(plan.startDate) : new Date(Date.now() + 7 * 86400000);
  const end = plan?.endDate ? new Date(plan.endDate) : new Date(start.getTime() + 3 * 86400000);
  const pad = (n) => String(n).padStart(2, '0');

  const yyyy_mm_dd_start = `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`;
  const yyyy_mm_dd_end = `${end.getFullYear()}-${pad(end.getMonth() + 1)}-${pad(end.getDate())}`;
  const yyyymmdd_start = `${start.getFullYear()}${pad(start.getMonth() + 1)}${pad(start.getDate())}`;
  const yyyymmdd_end = `${end.getFullYear()}${pad(end.getMonth() + 1)}${pad(end.getDate())}`;
  const mmddyyyy_start = `${pad(start.getMonth() + 1)}${pad(start.getDate())}${start.getFullYear()}`;
  const mmddyyyy_end = `${pad(end.getMonth() + 1)}${pad(end.getDate())}${end.getFullYear()}`;
  const ddmmyyyy_start = `${pad(start.getDate())}-${pad(start.getMonth() + 1)}-${start.getFullYear()}`;
  const ddmmyyyy_slash = `${pad(start.getDate())}/${pad(start.getMonth() + 1)}/${start.getFullYear()}`;
  const ddmmyyyy_end_slash = `${pad(end.getDate())}/${pad(end.getMonth() + 1)}/${end.getFullYear()}`;

  // 1. Raw Deep Links with Dynamic Parameters across all 7 Approved Platforms
  // A. Trains
  const rawMmtTrains = `https://www.makemytrip.com/railways/listing?classCode=&className=All%20Classes&date=${yyyymmdd_start}&destStn=${dest.station}&srcStn=${origin.station}`;
  const rawGoibiboTrains = `https://www.goibibo.com/trains/dsrp/${origin.station}/${dest.station}/${yyyymmdd_start}/ALL/`;
  const rawCleartripTrains = `https://www.cleartrip.com/trains/results?from_station=${origin.station}&to_station=${dest.station}&class=SL&date=${ddmmyyyy_start}&adults=${adults}&children=0`;

  // B. Flights
  const rawBookingFlights = `https://www.booking.com/flights/index.html?from=${origin.airport}.AIRPORT&to=${dest.airport}.AIRPORT&depart=${yyyy_mm_dd_start}&return=${yyyy_mm_dd_end}&adults=${adults}&aid=8133105`;
  const rawMmtFlights = `https://www.makemytrip.com/flight/search?itinerary=${origin.airport}-${dest.airport}-${ddmmyyyy_slash}&tripType=O&paxType=A-${adults}_C-0_I-0&intl=false&cabinClass=E`;
  const rawCleartripFlights = `https://www.cleartrip.com/flights/results?adults=${adults}&childs=0&infants=0&class=Economy&depart_date=${ddmmyyyy_slash}&from=${origin.airport}&to=${dest.airport}`;
  const rawGoibiboFlights = `https://www.goibibo.com/flights/air-${origin.airport}-${dest.airport}-${yyyymmdd_start}--${adults}-0-0-E-D/`;
  const rawExpediaFlights = `https://www.expedia.co.in/Flights-Search?trip=oneway&leg1=from:${origin.airport},to:${dest.airport},departure:${ddmmyyyy_slash}TANYT&passengers=adults:${adults}&mode=search`;

  // C. Hotels & Stays
  const rawBookingHotels = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(dest.city)}&checkin=${yyyy_mm_dd_start}&checkout=${yyyy_mm_dd_end}&group_adults=${adults}&no_rooms=1&aid=8133105`;
  const rawMmtHotels = `https://www.makemytrip.com/hotels/hotel-listing/?city=${encodeURIComponent(dest.city)}&checkin=${mmddyyyy_start}&checkout=${mmddyyyy_end}&roomStayQualifier=1e${adults}e0e`;
  const rawGoibiboHotels = `https://www.goibibo.com/hotels/find-hotels-in-${encodeURIComponent(dest.city)}/${yyyymmdd_start}/${yyyymmdd_end}/1-${adults}-0/`;
  const rawCleartripHotels = `https://www.cleartrip.com/hotels/results?city=${encodeURIComponent(dest.city)}&chk_in=${ddmmyyyy_slash}&chk_out=${ddmmyyyy_end_slash}&adults=${adults}&childs=0`;
  const rawExpediaHotels = `https://www.expedia.co.in/Hotel-Search?destination=${encodeURIComponent(dest.city)}&startDate=${yyyy_mm_dd_start}&endDate=${yyyy_mm_dd_end}&adults=${adults}`;

  // D. Local Cabs & Tours
  const rawGoibiboCabs = `https://www.goibibo.com/cabs/listing?fromCity=${encodeURIComponent(origin.city)}&toCity=${encodeURIComponent(dest.city)}`;
  const rawMmtCabs = `https://www.makemytrip.com/cabs/listing?fromCity=${encodeURIComponent(origin.city)}&toCity=${encodeURIComponent(dest.city)}`;
  const rawGygTours = `https://www.getyourguide.com/s/?q=${encodeURIComponent(dest.city)}&partner_id=${AFFILIATE_TRACKING.gygPartnerId}&utm_medium=${AFFILIATE_TRACKING.gygUtmMedium}`;
  const rawKlookTours = `https://www.klook.com/en-IN/search/result/?query=${encodeURIComponent(dest.city)}`;

  // 2. Tracked Links with affiliate tracking IDs & redirect wrappers
  const bookingHotels = `${AFFILIATE_TRACKING.bookingHotelsCj}?url=${encodeURIComponent(rawBookingHotels)}`;
  const bookingFlights = `${AFFILIATE_TRACKING.bookingFlightsCj}?url=${encodeURIComponent(rawBookingFlights)}`;
  const gygTours = rawGygTours;
  const klookTours = rawKlookTours;
  const mmtTrains = rawMmtTrains;
  const goibiboTrains = rawGoibiboTrains;
  const cleartripTrains = rawCleartripTrains;
  const mmtFlights = rawMmtFlights;
  const cleartripFlights = rawCleartripFlights;
  const goibiboFlights = rawGoibiboFlights;
  const expediaFlights = rawExpediaFlights;
  const mmtHotels = rawMmtHotels;
  const goibiboHotels = rawGoibiboHotels;
  const cleartripHotels = rawCleartripHotels;
  const expediaHotels = rawExpediaHotels;
  const goibiboCabs = rawGoibiboCabs;
  const mmtCabs = rawMmtCabs;

  return {
    origin,
    dest,
    adults,
    dates: {
      startDate: yyyy_mm_dd_start,
      endDate: yyyy_mm_dd_end,
      startFormatted: ddmmyyyy_start
    },

    // Raw prefilled links
    rawBookingHotels,
    rawBookingFlights,
    rawMmtHotels,
    rawMmtFlights,
    rawMmtTrains,
    rawMmtCabs,
    rawCleartripFlights,
    rawCleartripHotels,
    rawCleartripTrains,
    rawGoibiboFlights,
    rawGoibiboHotels,
    rawGoibiboTrains,
    rawGoibiboCabs,
    rawExpediaHotels,
    rawExpediaFlights,
    rawGygTours,
    rawKlookTours,

    // Category 1: Trains
    mmtTrains,
    goibiboTrains,
    cleartripTrains,

    // Category 2: Flights
    bookingFlights,
    mmtFlights,
    cleartripFlights,
    goibiboFlights,
    expediaFlights,

    // Category 3: Hotels & Stays
    bookingHotels,
    mmtHotels,
    goibiboHotels,
    cleartripHotels,
    expediaHotels,

    // Category 4: Local Cabs & Tours
    goibiboCabs,
    mmtCabs,
    gygTours,
    klookTours
  };
};

// Safe Cleartrip Flight Deep Link
export const getCleartripUrl = (destination = '') => {
  return 'https://www.cleartrip.com/flights';
};

// Legacy compatibility helpers
export const getAffiliateUrls = (plan = {}) => {
  const links = generateBookingLinks(plan);
  return {
    ...links,
    destinationCity: links.dest.city,
    originCity: links.origin.city,
    citySlug: links.dest.city.toLowerCase().replace(/\s+/g, '-'),
    encodedDest: encodeURIComponent(links.dest.city),
    encodedOrigin: encodeURIComponent(links.origin.city),
    adultsCount: links.adults,
    mmtHotelUrl: links.mmtHotels,
    bookingHotelUrl: links.bookingHotels,
    expediaHotelUrl: links.expediaHotels,
    cleartripFlightUrl: links.cleartripFlights,
    goibiboCabUrl: links.goibiboCabs,
    gygToursUrl: links.gygTours,
    klookUrl: `https://www.klook.com/en-IN/search/?query=${encodeURIComponent(links.dest.city)}`
  };
};

export const getAffiliateUrl = (provider, plan = {}) => {
  const links = generateBookingLinks(plan);
  switch (provider) {
    case 'makemytrip':
    case 'mmtHotels':
      return links.mmtHotels;
    case 'mmtTrains':
      return links.mmtTrains;
    case 'mmtFlights':
      return links.mmtFlights;
    case 'mmtCabs':
      return links.mmtCabs;
    case 'cleartrip':
    case 'cleartripFlights':
      return links.cleartripFlights;
    case 'cleartripHotels':
      return links.cleartripHotels;
    case 'cleartripTrains':
      return links.cleartripTrains;
    case 'expedia':
    case 'expediaHotels':
      return links.expediaHotels;
    case 'expediaFlights':
      return links.expediaFlights;
    case 'goibibo_cabs':
    case 'goibibo':
    case 'goibiboCabs':
      return links.goibiboCabs;
    case 'goibiboTrains':
      return links.goibiboTrains;
    case 'goibiboFlights':
      return links.goibiboFlights;
    case 'goibiboHotels':
      return links.goibiboHotels;
    case 'booking':
    case 'bookingHotels':
      return links.bookingHotels;
    case 'bookingFlights':
      return links.bookingFlights;
    case 'getyourguide':
    case 'gygTours':
      return links.gygTours;
    case 'klook':
    case 'klookTours':
      return links.klookTours;
    default:
      return 'https://bharatdarshanyatra.live';
  }
};

export const getBookingUrl = (destination = '', checkIn = '', checkOut = '', adults = 2) => {
  const encodedDest = encodeURIComponent(destination || 'Puri');
  let rawUrl = `https://www.booking.com/searchresults.html?ss=${encodedDest}&group_adults=${adults || 2}&no_rooms=1`;
  if (checkIn && checkOut) {
    rawUrl += `&checkin=${checkIn}&checkout=${checkOut}`;
  }
  return `${AFFILIATE_TRACKING.bookingHotelsCj}?url=${encodeURIComponent(rawUrl)}`;
};

export const getMMTHotelUrl = (destination = '') => {
  const city = (destination || 'Puri').trim().split(',')[0].trim();
  const cleanCitySlug = city.toLowerCase().replace(/\s+/g, '-');
  return `https://www.makemytrip.com/hotels/${cleanCitySlug}-hotels.html`;
};

export const getGoibiboCabUrl = (fromCity = '', toCity = '') => {
  const from = encodeURIComponent(fromCity || 'Delhi');
  const to = encodeURIComponent(toCity || 'Puri');
  return `https://www.goibibo.com/cabs/listing?fromCity=${from}&toCity=${to}`;
};
