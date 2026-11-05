import React from 'react';
import { AFFILIATE_PARTNERS } from '../data/plannerData';
import {
  getCleartripUrl,
  getAffiliateUrls,
  getAffiliateUrl,
  getBookingUrl,
  getMMTHotelUrl,
  getGoibiboCabUrl
} from '../utils/affiliateLinks';

export {
  getCleartripUrl,
  getAffiliateUrls,
  getAffiliateUrl,
  getBookingUrl,
  getMMTHotelUrl,
  getGoibiboCabUrl
};

export function getPartnerDealBadge(partnerId, partnerDeals) {
  if (!partnerDeals) return null;
  const map = {
    makemytrip: partnerDeals.makeMyTripHotels,
    booking: partnerDeals.bookingDotCom,
    klook: partnerDeals.klook,
    expedia: partnerDeals.expediaFlights,
    cleartrip: partnerDeals.cleartrip || partnerDeals.mmtFlights,
    'makemytrip-flights': partnerDeals.cleartrip || partnerDeals.mmtFlights,
    getyourguide: partnerDeals.getYourGuide,
    goibibo: partnerDeals.goibiboCabs
  };
  const val = map[partnerId];
  if (!val) return null;
  return typeof val === 'object' ? val.dealBadge : val;
}

export function getPartnerDealUrl(partnerId, partnerDeals, fallbackUrl) {
  if (partnerId === 'cleartrip' || partnerId === 'makemytrip-flights') {
    return 'https://bitli.in/O9l1k81';
  }
  if (!partnerDeals) return fallbackUrl;
  const map = {
    makemytrip: partnerDeals.makeMyTripHotels,
    booking: partnerDeals.bookingDotCom,
    klook: partnerDeals.klook,
    expedia: partnerDeals.expediaFlights,
    cleartrip: 'https://bitli.in/O9l1k81',
    'makemytrip-flights': 'https://bitli.in/O9l1k81',
    getyourguide: partnerDeals.getYourGuide,
    goibibo: partnerDeals.goibiboCabs
  };
  const val = map[partnerId];
  if (val && typeof val === 'object' && val.searchUrl) return val.searchUrl;
  return fallbackUrl;
}

/**
 * BookingHub Component
 * Renders the 'Book Your Trip' affiliate cards with direct category routing & search-engine bypass deep links
 */
export default function BookingHub({ plan = {}, itinerary = {} }) {
  const partnerDeals = itinerary?.partnerDeals;

  // A. Extract clean parameters from current itinerary state
  const destinationCity = (plan?.destination || plan?.destinationName || itinerary?.destination || 'Amritsar').split(',')[0].trim();
  const originCity = (plan?.departingFrom || plan?.origin || 'Jaipur').split(',')[0].trim();
  const citySlug = destinationCity.toLowerCase().replace(/\s+/g, '-');
  const encodedDest = encodeURIComponent(destinationCity);
  const encodedOrigin = encodeURIComponent(originCity);
  const adultsCount = Number(plan?.travelers || plan?.persons) || 1;

  // Safe Cleartrip Flight Deep Link
  const getCleartripUrlLocal = (destination) => {
    // Direct to Cleartrip Flight booking hub with clean context
    return 'https://www.cleartrip.com/flights';
  };

  // B. Category-Specific Working Deep Links:

  // 1. MakeMyTrip (Direct Hotel City Hub - bypasses 'All Properties Filtered Out' query bug)
  const mmtHotelUrl = `https://www.makemytrip.com/hotels/${citySlug}-hotels.html`;

  // 2. Booking.com (Direct Hotel Search with auto-populated city and guests)
  const bookingHotelUrl = `https://www.booking.com/searchresults.html?ss=${encodedDest}&group_adults=2&no_rooms=1`;

  // 3. Expedia (Direct Hotel Inventory Search for the exact destination)
  const expediaHotelUrl = `https://www.expedia.co.in/Hotel-Search?destination=${encodedDest}`;

  // 4. Cleartrip (Safe Flights landing to prevent NaN query and invalid city crash)
  const cleartripFlightUrl = getCleartripUrl(destinationCity);

  // 5. Goibibo Cabs (Direct Outstation / Local Route Cab listing)
  const goibiboCabUrl = `https://www.goibibo.com/cabs/listing?fromCity=${encodedOrigin}&toCity=${encodedDest}`;

  // 6. GetYourGuide (Direct Tours & Activities search for the destination)
  const gygToursUrl = `https://www.getyourguide.com/s/?q=${encodedDest}`;

  // 7. Klook (Direct City Experiences hub)
  const klookUrl = `https://www.klook.com/en-IN/search/?query=${encodedDest}`;

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🏨</span>
        <h3 className="text-lg font-bold text-gray-900">Book Your Trip</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* 1. MakeMyTrip Hotels */}
        <a
          href={mmtHotelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-lg">🏨</div>
            <div>
              {getPartnerDealBadge('makemytrip', partnerDeals) && (
                <span className="text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  {getPartnerDealBadge('makemytrip', partnerDeals)}
                </span>
              )}
              <h4 className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">MakeMyTrip</h4>
              <p className="text-xs text-gray-500">Hotels & Stays</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-all">→</div>
        </a>

        {/* 2. Booking.com */}
        <a
          href={bookingHotelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg">🏨</div>
            <div>
              {getPartnerDealBadge('booking', partnerDeals) && (
                <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  {getPartnerDealBadge('booking', partnerDeals)}
                </span>
              )}
              <h4 className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">Booking.com</h4>
              <p className="text-xs text-gray-500">Hotels & Stays</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all">→</div>
        </a>

        {/* 3. Klook */}
        <a
          href={klookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-lg">🏨</div>
            <div>
              {getPartnerDealBadge('klook', partnerDeals) && (
                <span className="text-[10px] font-semibold text-orange-600 bg-orange-50 border border-orange-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  {getPartnerDealBadge('klook', partnerDeals)}
                </span>
              )}
              <h4 className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">Klook</h4>
              <p className="text-xs text-gray-500">Hotels & Stays</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-all">→</div>
        </a>

        {/* 4. Expedia */}
        <a
          href={expediaHotelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-yellow-200 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-lg">✈️</div>
            <div>
              {getPartnerDealBadge('expedia', partnerDeals) && (
                <span className="text-[10px] font-semibold text-yellow-800 bg-yellow-50 border border-yellow-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  {getPartnerDealBadge('expedia', partnerDeals)}
                </span>
              )}
              <h4 className="font-bold text-gray-800 text-sm group-hover:text-yellow-600 transition-colors">Expedia</h4>
              <p className="text-xs text-gray-500">Flights & Airfare</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-yellow-50 group-hover:text-yellow-500 transition-all">→</div>
        </a>

        {/* 5. Cleartrip Flights */}
        <a
          href={cleartripFlightUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-lg">✈️</div>
            <div>
              {getPartnerDealBadge('cleartrip', partnerDeals) && (
                <span className="text-[10px] font-semibold text-orange-600 bg-orange-50 border border-orange-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  {getPartnerDealBadge('cleartrip', partnerDeals)}
                </span>
              )}
              <h4 className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">Cleartrip</h4>
              <p className="text-xs text-gray-500">Flights & Airfare</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-all">→</div>
        </a>

        {/* 6. GetYourGuide */}
        <a
          href={gygToursUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-lg">🎟️</div>
            <div>
              {getPartnerDealBadge('getyourguide', partnerDeals) && (
                <span className="text-[10px] font-semibold text-purple-600 bg-purple-50 border border-purple-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  {getPartnerDealBadge('getyourguide', partnerDeals)}
                </span>
              )}
              <h4 className="font-bold text-gray-800 text-sm group-hover:text-purple-600 transition-colors">GetYourGuide</h4>
              <p className="text-xs text-gray-500">Tours & Experiences</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-500 transition-all">→</div>
        </a>

        {/* 7. Goibibo Cabs */}
        <a
          href={goibiboCabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg">🚖</div>
            <div>
              {getPartnerDealBadge('goibibo', partnerDeals) && (
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  {getPartnerDealBadge('goibibo', partnerDeals)}
                </span>
              )}
              <h4 className="font-bold text-gray-800 text-sm group-hover:text-emerald-600 transition-colors">Goibibo Cabs</h4>
              <p className="text-xs text-gray-500">Cabs & Rentals</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-all">→</div>
        </a>
      </div>
    </div>
  );
}
