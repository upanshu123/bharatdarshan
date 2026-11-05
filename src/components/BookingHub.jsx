import React from 'react';
import { AFFILIATE_PARTNERS } from '../data/plannerData';
import { getBookingUrl, getMMTHotelUrl, getGoibiboCabUrl } from '../utils/affiliateLinks';

export { getBookingUrl, getMMTHotelUrl, getGoibiboCabUrl };

export function getPartnerDealBadge(partnerId, partnerDeals) {
  if (!partnerDeals) return null;
  const map = {
    makemytrip: partnerDeals.makeMyTripHotels,
    booking: partnerDeals.bookingDotCom,
    klook: partnerDeals.klook,
    expedia: partnerDeals.expediaFlights,
    'makemytrip-flights': partnerDeals.mmtFlights,
    getyourguide: partnerDeals.getYourGuide,
    goibibo: partnerDeals.goibiboCabs
  };
  const val = map[partnerId];
  if (!val) return null;
  return typeof val === 'object' ? val.dealBadge : val;
}

export function getPartnerDealUrl(partnerId, partnerDeals, fallbackUrl) {
  if (!partnerDeals) return fallbackUrl;
  const map = {
    makemytrip: partnerDeals.makeMyTripHotels,
    booking: partnerDeals.bookingDotCom,
    klook: partnerDeals.klook,
    expedia: partnerDeals.expediaFlights,
    'makemytrip-flights': partnerDeals.mmtFlights,
    getyourguide: partnerDeals.getYourGuide,
    goibibo: partnerDeals.goibiboCabs
  };
  const val = map[partnerId];
  if (val && typeof val === 'object' && val.searchUrl) return val.searchUrl;
  return fallbackUrl;
}

/**
 * BookingHub Component
 * Renders the 'Book Your Trip' affiliate cards with dynamic pre-filled search parameters
 */
export default function BookingHub({ plan = {}, itinerary = {} }) {
  const destination = plan.destination || plan.destinationName || itinerary?.destination || 'India';
  const departingFrom = plan.departingFrom || plan.origin || 'Delhi';
  const checkIn = plan.startDate || '';
  const checkOut = plan.endDate || '';
  const persons = plan.persons || plan.travelers || plan.travellers || 2;
  const partnerDeals = itinerary?.partnerDeals;

  const mmtHotelHref = getMMTHotelUrl(destination);
  const bookingDotComHref = getBookingUrl(destination, checkIn, checkOut, persons);
  const goibiboCabHref = getGoibiboCabUrl(departingFrom, destination);

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🏨</span>
        <h3 className="text-lg font-bold text-gray-900">Book Your Trip</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* 1. MakeMyTrip Hotels */}
        <a
          href={mmtHotelHref}
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
          href={bookingDotComHref}
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
          href={getPartnerDealUrl('klook', partnerDeals, AFFILIATE_PARTNERS?.hotels?.find(p => p.id === 'klook')?.affiliateUrl || "https://klook.tpo.mx/0r4GgPTK")}
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
          href={getPartnerDealUrl('expedia', partnerDeals, AFFILIATE_PARTNERS?.flights?.find(p => p.id === 'expedia')?.affiliateUrl || "https://bitli.in/sP8sZwo")}
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

        {/* 5. MMT Flights */}
        <a
          href={getPartnerDealUrl('makemytrip-flights', partnerDeals, AFFILIATE_PARTNERS?.flights?.find(p => p.id === 'makemytrip-flights')?.affiliateUrl || "https://bitli.in/O9l1k81")}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-lg">✈️</div>
            <div>
              {getPartnerDealBadge('makemytrip-flights', partnerDeals) && (
                <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  {getPartnerDealBadge('makemytrip-flights', partnerDeals)}
                </span>
              )}
              <h4 className="font-bold text-gray-800 text-sm group-hover:text-indigo-600 transition-colors">MMT Flights</h4>
              <p className="text-xs text-gray-500">Flights & Airfare</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-all">→</div>
        </a>

        {/* 6. GetYourGuide */}
        <a
          href={getPartnerDealUrl('getyourguide', partnerDeals, AFFILIATE_PARTNERS?.activities?.find(p => p.id === 'getyourguide')?.affiliateUrl || "https://gyg.me/izQrSbTv")}
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
          href={goibiboCabHref}
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
