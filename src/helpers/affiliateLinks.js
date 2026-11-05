// helpers/affiliateLinks.js

export {
  getAffiliateUrls,
  getAffiliateUrl,
  getBookingUrl,
  getMMTHotelUrl,
  getGoibiboCabUrl
} from '../utils/affiliateLinks';

export const getAffiliateUrlDirect = (provider, plan) => {
  const destinationCity = (plan?.destination || 'Amritsar').split(',')[0].trim();
  const originCity = (plan?.departingFrom || 'Jaipur').split(',')[0].trim();
  const citySlug = destinationCity.toLowerCase().replace(/\s+/g, '-');
  const encodedDest = encodeURIComponent(destinationCity);
  const encodedOrigin = encodeURIComponent(originCity);

  switch (provider) {
    // 1. MAKEMYTRIP HOTELS (SEO direct landing bypasses filter bug)
    case 'makemytrip':
      return `https://www.makemytrip.com/hotels/${citySlug}-hotels.html`;

    // 2. CLEARTRIP FLIGHTS (Direct route parameter link)
    case 'cleartrip':
      return `https://www.cleartrip.com/flights/results?from=${encodedOrigin}&to=${encodedDest}&adults=2&class=Economy`;

    // 3. EXPEDIA FLIGHTS & HOTELS (Clean search routing)
    case 'expedia':
      return `https://www.expedia.co.in/Hotel-Search?destination=${encodedDest}`;

    // 4. GOIBIBO CABS (Direct route listing)
    case 'goibibo_cabs':
    case 'goibibo':
      return `https://www.goibibo.com/cabs/listing?fromCity=${encodedOrigin}&toCity=${encodedDest}`;

    // 5. BOOKING.COM HOTELS (Standard working parameter)
    case 'booking':
      return `https://www.booking.com/searchresults.html?ss=${encodedDest}&group_adults=2&no_rooms=1`;

    // 6. GETYOURGUIDE TOURS
    case 'getyourguide':
      return `https://www.getyourguide.com/s/?q=${encodedDest}`;

    // 7. KLOOK EXPERIENCES & STAYS
    case 'klook':
      return `https://www.klook.com/en-IN/search/?query=${encodedDest}`;

    default:
      return 'https://bharatdarshanyatra.live';
  }
};
