/**
 * Dynamic URL Helper Functions for Pre-filled Affiliate Deep Links
 * Booking.com, MakeMyTrip, Goibibo Cabs
 */

// Booking.com Pre-filled Deep Link (replace AID with your actual affiliate ID)
export const getBookingUrl = (destination = '', checkIn = '', checkOut = '', adults = 2) => {
  const encodedDest = encodeURIComponent(destination || '');
  let url = `https://www.booking.com/searchresults.html?ss=${encodedDest}&group_adults=${adults || 2}&no_rooms=1`;
  if (checkIn && checkOut) {
    url += `&checkin=${checkIn}&checkout=${checkOut}`;
  }
  // Add affiliate tag if present:
  // url += `&aid=YOUR_BOOKING_AID`;
  return url;
};

// MakeMyTrip Hotels Pre-filled URL
export const getMMTHotelUrl = (destination = '') => {
  const cleanCity = encodeURIComponent((destination || '').split(' ')[0]);
  return `https://www.makemytrip.com/hotels/hotel-listing/?city=${cleanCity}`;
};

// Goibibo Cabs Pre-filled Route URL
export const getGoibiboCabUrl = (fromCity = '', toCity = '') => {
  const from = encodeURIComponent(fromCity || 'Delhi');
  const to = encodeURIComponent(toCity || '');
  return `https://www.goibibo.com/cabs/listing?fromCity=${from}&toCity=${to}`;
};

