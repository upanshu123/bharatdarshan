/**
 * src/utils/affiliateLinks.js
 * 100% Working Category-Specific Deep Links (Trains, Flights, Hotels, Cabs)
 * Auto-Filled Station Codes, Airport Codes, Dates & Passengers
 */

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
  const mmddyyyy_start = `${pad(start.getMonth() + 1)}${pad(start.getDate())}${start.getFullYear()}`;
  const mmddyyyy_end = `${pad(end.getMonth() + 1)}${pad(end.getDate())}${end.getFullYear()}`;
  const ddmmyyyy_start = `${pad(start.getDate())}-${pad(start.getMonth() + 1)}-${start.getFullYear()}`;
  const ddmmyyyy_slash = `${pad(start.getDate())}/${pad(start.getMonth() + 1)}/${start.getFullYear()}`;

  return {
    origin,
    dest,
    adults,
    dates: {
      startDate: yyyy_mm_dd_start,
      endDate: yyyy_mm_dd_end,
      startFormatted: ddmmyyyy_start
    },

    // 1. TRAINS SECTION (Opens directly in Train Search with Origin -> Destination & Date)
    ixigoTrains: `https://www.ixigo.com/search/result/train/${origin.station}/${dest.station}/${ddmmyyyy_start}//1/0/0/0/ALL`,
    confirmtktTrains: `https://www.confirmtkt.com/rbooking-d/trains/from/${origin.station}/to/${dest.station}/${ddmmyyyy_start}`,
    mmtTrains: `https://www.makemytrip.com/railways/listing?classCode=&className=All%20Classes&date=${start.getFullYear()}${pad(start.getMonth() + 1)}${pad(start.getDate())}&destStn=${dest.station}&srcStn=${origin.station}`,

    // 2. FLIGHTS SECTION (Opens directly in Flight Results with Airport Codes, Dates & Passengers)
    bookingFlights: `https://www.booking.com/flights/index.html?from=${origin.airport}.AIRPORT&to=${dest.airport}.AIRPORT&depart=${yyyy_mm_dd_start}&return=${yyyy_mm_dd_end}&adults=${adults}&cabinClass=ECONOMY`,
    cleartripFlights: `https://www.cleartrip.com/flights/results?adults=${adults}&childs=0&infants=0&class=Economy&depart_date=${ddmmyyyy_slash}&from=${origin.airport}&to=${dest.airport}`,
    ixigoFlights: `https://www.ixigo.com/search/result/flight?from=${origin.airport}&to=${dest.airport}&date=${pad(start.getDate())}${pad(start.getMonth() + 1)}${start.getFullYear()}&adults=${adults}&children=0&infants=0&class=e`,

    // 3. HOTELS SECTION (Opens directly in Hotel Listings with City, Check-in/Check-out & Guests)
    bookingHotels: `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(dest.city)}&checkin=${yyyy_mm_dd_start}&checkout=${yyyy_mm_dd_end}&group_adults=${adults}&no_rooms=1`,
    mmtHotels: `https://www.makemytrip.com/hotels/hotel-listing/?city=${encodeURIComponent(dest.city)}&checkin=${mmddyyyy_start}&checkout=${mmddyyyy_end}&roomStayQualifier=1e${adults}e0e`,
    expediaHotels: `https://www.expedia.co.in/Hotel-Search?destination=${encodeURIComponent(dest.city)}&startDate=${yyyy_mm_dd_start}&endDate=${yyyy_mm_dd_end}&adults=${adults}`,

    // 4. LOCAL CABS & TOURS
    goibiboCabs: `https://www.goibibo.com/cabs/listing?fromCity=${encodeURIComponent(origin.city)}&toCity=${encodeURIComponent(dest.city)}`,
    gygTours: `https://www.getyourguide.com/s/?q=${encodeURIComponent(dest.city)}`
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
    case 'cleartrip':
    case 'cleartripFlights':
      return links.cleartripFlights;
    case 'expedia':
    case 'expediaHotels':
      return links.expediaHotels;
    case 'goibibo_cabs':
    case 'goibibo':
    case 'goibiboCabs':
      return links.goibiboCabs;
    case 'booking':
    case 'bookingHotels':
      return links.bookingHotels;
    case 'bookingFlights':
      return links.bookingFlights;
    case 'ixigoTrains':
      return links.ixigoTrains;
    case 'confirmtkt':
    case 'confirmtktTrains':
      return links.confirmtktTrains;
    case 'getyourguide':
    case 'gygTours':
      return links.gygTours;
    case 'klook':
      return `https://www.klook.com/en-IN/search/?query=${encodeURIComponent(links.dest.city)}`;
    default:
      return 'https://bharatdarshanyatra.live';
  }
};

export const getBookingUrl = (destination = '', checkIn = '', checkOut = '', adults = 2) => {
  const encodedDest = encodeURIComponent(destination || 'Puri');
  let url = `https://www.booking.com/searchresults.html?ss=${encodedDest}&group_adults=${adults || 2}&no_rooms=1`;
  if (checkIn && checkOut) {
    url += `&checkin=${checkIn}&checkout=${checkOut}`;
  }
  return url;
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
