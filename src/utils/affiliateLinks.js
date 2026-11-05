/**
 * helpers/affiliateLinks.js & utils/affiliateLinks.js
 * Pre-filled Dynamic Route & Direct SEO Landing Affiliate Deep Links
 */

export const getAffiliateUrl = (provider, plan) => {
  const city = (plan?.destination || 'Amritsar').trim().split(',')[0].trim();
  const origin = (plan?.departingFrom || 'Delhi').trim().split(',')[0].trim();
  const cleanCitySlug = city.toLowerCase().replace(/\s+/g, '-');
  const encodedCity = encodeURIComponent(city);
  const encodedOrigin = encodeURIComponent(origin);

  switch (provider) {
    // 1. MAKEMYTRIP HOTELS (SEO direct landing bypasses filter bug)
    case 'makemytrip':
      return `https://www.makemytrip.com/hotels/${cleanCitySlug}-hotels.html`;

    // 2. CLEARTRIP FLIGHTS (Direct route parameter link)
    case 'cleartrip':
      return `https://www.cleartrip.com/flights/results?from=${encodedOrigin}&to=${encodedCity}&adults=2&class=Economy`;

    // 3. EXPEDIA FLIGHTS & HOTELS (Clean search routing)
    case 'expedia':
      return `https://www.expedia.co.in/Hotel-Search?destination=${encodedCity}`;

    // 4. GOIBIBO CABS (Direct route listing)
    case 'goibibo_cabs':
    case 'goibibo':
      return `https://www.goibibo.com/cabs/listing?fromCity=${encodedOrigin}&toCity=${encodedCity}`;

    // 5. BOOKING.COM HOTELS (Standard working parameter)
    case 'booking':
      return `https://www.booking.com/searchresults.html?ss=${encodedCity}&group_adults=2&no_rooms=1`;

    // 6. GETYOURGUIDE TOURS
    case 'getyourguide':
      return `https://www.getyourguide.com/s/?q=${encodedCity}`;

    // 7. KLOOK EXPERIENCES & STAYS
    case 'klook':
      return `https://www.klook.com/en-IN/search/?query=${encodedCity}`;

    default:
      return 'https://bharatdarshanyatra.live';
  }
};

// Booking.com Pre-filled Deep Link
export const getBookingUrl = (destination = '', checkIn = '', checkOut = '', adults = 2) => {
  const encodedDest = encodeURIComponent(destination || '');
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
  const from = encodeURIComponent(fromCity || 'Delhi');
  const to = encodeURIComponent(toCity || '');
  return `https://www.goibibo.com/cabs/listing?fromCity=${from}&toCity=${to}`;
};
