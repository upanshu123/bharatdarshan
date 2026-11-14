import React from 'react';
import BookingHub, {
  generateBookingLinks,
  locationMeta,
  resolvePlace,
  getCleartripUrl,
  getAffiliateUrls,
  getAffiliateUrl,
  getBookingUrl,
  getMMTHotelUrl,
  getGoibiboCabUrl,
  AFFILIATE_TRACKING
} from './BookingHub';
import { estimateBudget } from '../utils/aiEngine';

export {
  BookingHub,
  generateBookingLinks,
  locationMeta,
  resolvePlace,
  getCleartripUrl,
  getAffiliateUrls,
  getAffiliateUrl,
  getBookingUrl,
  getMMTHotelUrl,
  getGoibiboCabUrl,
  AFFILIATE_TRACKING,
  estimateBudget
};

/**
 * ItineraryView / Booking Hub Component
 * Exposes category-specific deep-link booking cards for Itinerary plans
 */
export default function ItineraryView({ plan = {}, itinerary = {} }) {
  return <BookingHub plan={plan} itinerary={itinerary} />;
}
