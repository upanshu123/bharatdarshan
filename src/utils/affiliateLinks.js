/**
 * helpers/affiliateLinks.js & utils/affiliateLinks.js
 * Direct Category Routing & Search-Engine Bypass URLs for Booking Hub
 */

export const getAffiliateUrls = (plan = {}) => {
  // A. Extract clean parameters from current itinerary state
  const destinationCity = (plan?.destination || plan?.destinationName || 'Amritsar').split(',')[0].trim();
  const originCity = (plan?.departingFrom || plan?.origin || 'Jaipur').split(',')[0].trim();
  const citySlug = destinationCity.toLowerCase().replace(/\s+/g, '-');
  const encodedDest = encodeURIComponent(destinationCity);
  const encodedOrigin = encodeURIComponent(originCity);

  // B. Category-Specific Working Deep Links:

  // 1. MakeMyTrip (Direct Hotel City Hub - bypasses 'All Properties Filtered Out' query bug)
  const mmtHotelUrl = `https://www.makemytrip.com/hotels/${citySlug}-hotels.html`;

  // 2. Booking.com (Direct Hotel Search with auto-populated city and guests)
  const bookingHotelUrl = `https://www.booking.com/searchresults.html?ss=${encodedDest}&group_adults=2&no_rooms=1`;

  // 3. Expedia (Direct Hotel Inventory Search for the exact destination)
  const expediaHotelUrl = `https://www.expedia.co.in/Hotel-Search?destination=${encodedDest}`;

  // 4. Cleartrip (Explicit Flights section with Origin -> Destination route populated)
  const cleartripFlightUrl = `https://www.cleartrip.com/flights/results?from=${encodedOrigin}&to=${encodedDest}&adults=2&class=Economy`;

  // 5. Goibibo Cabs (Direct Outstation / Local Route Cab listing)
  const goibiboCabUrl = `https://www.goibibo.com/cabs/listing?fromCity=${encodedOrigin}&toCity=${encodedDest}`;

  // 6. GetYourGuide (Direct Tours & Activities search for the destination)
  const gygToursUrl = `https://www.getyourguide.com/s/?q=${encodedDest}`;

  // 7. Klook (Direct City Experiences hub)
  const klookUrl = `https://www.klook.com/en-IN/search/?query=${encodedDest}`;

  return {
    destinationCity,
    originCity,
    citySlug,
    encodedDest,
    encodedOrigin,
    mmtHotelUrl,
    bookingHotelUrl,
    expediaHotelUrl,
    cleartripFlightUrl,
    goibiboCabUrl,
    gygToursUrl,
    klookUrl
  };
};

export const getAffiliateUrl = (provider, plan = {}) => {
  const urls = getAffiliateUrls(plan);

  switch (provider) {
    // 1. MAKEMYTRIP HOTELS (SEO direct landing bypasses filter bug)
    case 'makemytrip':
      return urls.mmtHotelUrl;

    // 2. CLEARTRIP FLIGHTS (Direct route parameter link)
    case 'cleartrip':
      return urls.cleartripFlightUrl;

    // 3. EXPEDIA FLIGHTS & HOTELS (Clean search routing)
    case 'expedia':
      return urls.expediaHotelUrl;

    // 4. GOIBIBO CABS (Direct route listing)
    case 'goibibo_cabs':
    case 'goibibo':
      return urls.goibiboCabUrl;

    // 5. BOOKING.COM HOTELS (Standard working parameter)
    case 'booking':
      return urls.bookingHotelUrl;

    // 6. GETYOURGUIDE TOURS
    case 'getyourguide':
      return urls.gygToursUrl;

    // 7. KLOOK EXPERIENCES & STAYS
    case 'klook':
      return urls.klookUrl;

    default:
      return 'https://bharatdarshanyatra.live';
  }
};

// Booking.com Pre-filled Deep Link
export const getBookingUrl = (destination = '', checkIn = '', checkOut = '', adults = 2) => {
  const encodedDest = encodeURIComponent(destination || 'Amritsar');
  let url = `https://www.booking.com/searchresults.html?ss=${encodedDest}&group_adults=${adults || 2}&no_rooms=1`;
  if (checkIn && checkOut) {
    url += `&checkin=${checkIn}&checkout=${checkOut}`;
  }
  return url;
};

// MakeMyTrip Hotels Pre-filled URL
export const getMMTHotelUrl = (destination = '') => {
  const city = (destination || 'Amritsar').trim().split(',')[0].trim();
  const cleanCitySlug = city.toLowerCase().replace(/\s+/g, '-');
  return `https://www.makemytrip.com/hotels/${cleanCitySlug}-hotels.html`;
};

// Goibibo Cabs Pre-filled Route URL
export const getGoibiboCabUrl = (fromCity = '', toCity = '') => {
  const from = encodeURIComponent(fromCity || 'Jaipur');
  const to = encodeURIComponent(toCity || 'Amritsar');
  return `https://www.goibibo.com/cabs/listing?fromCity=${from}&toCity=${to}`;
};
