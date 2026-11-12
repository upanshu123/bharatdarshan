import React from 'react';
import {
  generateBookingLinks,
  locationMeta,
  resolvePlace,
  getCleartripUrl,
  getAffiliateUrls,
  getAffiliateUrl,
  getBookingUrl,
  getMMTHotelUrl,
  getGoibiboCabUrl
} from '../utils/affiliateLinks';

export {
  generateBookingLinks,
  locationMeta,
  resolvePlace,
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
 * 100% Working Category-Specific Deep Links organized by vertical:
 * - Trains (MakeMyTrip Trains, ixigo Trains, ConfirmTkt)
 * - Flights (Booking.com Flights, Cleartrip Flights, ixigo Flights)
 * - Hotels & Stays (Booking.com, MakeMyTrip Hotels, Expedia)
 * - Local Cabs & Tours (Goibibo Cabs, GetYourGuide Tours)
 */
export default function BookingHub({ plan = {}, itinerary = {} }) {
  const partnerDeals = itinerary?.partnerDeals;
  const links = generateBookingLinks(plan);
  const { origin, dest, adults, dates } = links;

  return (
    <div className="mt-10 space-y-8" id="book-your-trip">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎫</span>
            <h3 className="text-xl font-black text-gray-900 tracking-tight">Book Your Trip</h3>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Direct deep links pre-filled for <span className="font-bold text-gray-700">{dest.city}</span> from <span className="font-bold text-gray-700">{origin.city}</span> ({adults} {adults === 1 ? 'Traveller' : 'Travellers'})
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 self-start sm:self-auto">
          <span>✓ Route:</span>
          <span className="font-mono bg-white px-1.5 py-0.5 rounded text-emerald-800 shadow-xs">🚉 {origin.station} ➔ {dest.station}</span>
          <span className="font-mono bg-white px-1.5 py-0.5 rounded text-emerald-800 shadow-xs">✈️ {origin.airport} ➔ {dest.airport}</span>
        </div>
      </div>

      {/* 1. TRAINS SECTION */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🚂</span>
            <h4 className="text-sm font-black uppercase tracking-wider text-gray-900">Trains</h4>
            <span className="text-[11px] text-gray-400 font-medium">({origin.station} ➔ {dest.station} · {dates.startFormatted})</span>
          </div>
          <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">IRCTC Direct Route</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* MakeMyTrip Trains */}
          <a
            href={links.mmtTrains}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-lg">🚆</div>
              <div>
                <span className="text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  Zero Gateway Fee
                </span>
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-red-600 transition-colors">MakeMyTrip Trains</h5>
                <p className="text-xs text-gray-500">{origin.station} → {dest.station}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-500 transition-all">→</div>
          </a>

          {/* ixigo Trains */}
          <a
            href={links.ixigoTrains}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg">⚡</div>
              <div>
                <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  Instant Confirmation
                </span>
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">ixigo Trains</h5>
                <p className="text-xs text-gray-500">Live PNR &amp; Seat Availability</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all">→</div>
          </a>

          {/* ConfirmTkt Trains */}
          <a
            href={links.confirmtktTrains}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg">🎟️</div>
              <div>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  Alternate Routes
                </span>
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-emerald-600 transition-colors">ConfirmTkt</h5>
                <p className="text-xs text-gray-500">Waitlist Predictor &amp; Tatkal</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-all">→</div>
          </a>
        </div>
      </div>

      {/* 2. FLIGHTS SECTION */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">✈️</span>
            <h4 className="text-sm font-black uppercase tracking-wider text-gray-900">Flights</h4>
            <span className="text-[11px] text-gray-400 font-medium">({origin.airport} ➔ {dest.airport} · {adults} {adults === 1 ? 'Adult' : 'Adults'})</span>
          </div>
          <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">Auto-Routed</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Booking.com Flights */}
          <a
            href={links.bookingFlights}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg">🛫</div>
              <div>
                <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  Global Flight Search
                </span>
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">Booking.com Flights</h5>
                <p className="text-xs text-gray-500">{origin.airport} → {dest.airport}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all">→</div>
          </a>

          {/* Cleartrip Flights */}
          <a
            href={links.cleartripFlights}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-lg">✈️</div>
              <div>
                <span className="text-[10px] font-semibold text-orange-600 bg-orange-50 border border-orange-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  Instant Cashback Deals
                </span>
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">Cleartrip Flights</h5>
                <p className="text-xs text-gray-500">{origin.airport} → {dest.airport}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-all">→</div>
          </a>

          {/* ixigo Flights */}
          <a
            href={links.ixigoFlights}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-lg">🎫</div>
              <div>
                <span className="text-[10px] font-semibold text-sky-600 bg-sky-50 border border-sky-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                  Price Drop Alerts
                </span>
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-sky-600 transition-colors">ixigo Flights</h5>
                <p className="text-xs text-gray-500">Compare Domestic Airfares</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-sky-50 group-hover:text-sky-500 transition-all">→</div>
          </a>
        </div>
      </div>

      {/* 3. HOTELS & STAYS SECTION */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🏨</span>
            <h4 className="text-sm font-black uppercase tracking-wider text-gray-900">Hotels &amp; Stays</h4>
            <span className="text-[11px] text-gray-400 font-medium">({dest.city} · {adults} Guests)</span>
          </div>
          <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">Dates Pre-Selected</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Booking.com Hotels */}
          <a
            href={links.bookingHotels}
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
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">Booking.com</h5>
                <p className="text-xs text-gray-500">Hotels, Resorts &amp; Homestays</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all">→</div>
          </a>

          {/* MakeMyTrip Hotels */}
          <a
            href={links.mmtHotels}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-lg">🛎️</div>
              <div>
                {getPartnerDealBadge('makemytrip', partnerDeals) && (
                  <span className="text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                    {getPartnerDealBadge('makemytrip', partnerDeals)}
                  </span>
                )}
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-red-600 transition-colors">MakeMyTrip Hotels</h5>
                <p className="text-xs text-gray-500">{dest.city} City Listings</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-500 transition-all">→</div>
          </a>

          {/* Expedia Hotels */}
          <a
            href={links.expediaHotels}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-yellow-200 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-lg">🌟</div>
              <div>
                {getPartnerDealBadge('expedia', partnerDeals) && (
                  <span className="text-[10px] font-semibold text-yellow-800 bg-yellow-50 border border-yellow-200/60 px-2 py-0.5 rounded-full inline-block mb-1">
                    {getPartnerDealBadge('expedia', partnerDeals)}
                  </span>
                )}
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-yellow-600 transition-colors">Expedia</h5>
                <p className="text-xs text-gray-500">Stays &amp; Package Discounts</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-yellow-50 group-hover:text-yellow-500 transition-all">→</div>
          </a>
        </div>
      </div>

      {/* 4. LOCAL CABS & TOURS SECTION */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🚖</span>
            <h4 className="text-sm font-black uppercase tracking-wider text-gray-900">Local Cabs &amp; Tours</h4>
            <span className="text-[11px] text-gray-400 font-medium">({dest.city})</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Outstation &amp; Activities</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Goibibo Cabs */}
          <a
            href={links.goibiboCabs}
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
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-emerald-600 transition-colors">Goibibo Cabs</h5>
                <p className="text-xs text-gray-500">Outstation &amp; Airport Transfers ({origin.city} → {dest.city})</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-all">→</div>
          </a>

          {/* GetYourGuide Tours */}
          <a
            href={links.gygTours}
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
                <h5 className="font-bold text-gray-800 text-sm group-hover:text-purple-600 transition-colors">GetYourGuide</h5>
                <p className="text-xs text-gray-500">Top Attractions &amp; Guided Day Tours</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-500 transition-all">→</div>
          </a>
        </div>
      </div>
    </div>
  );
}
