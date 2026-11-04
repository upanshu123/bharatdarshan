import { ANDHRA_PRADESH_PLACES } from '../states/andhra_pradesh';
import { ARUNACHAL_PRADESH_PLACES } from '../states/arunachal_pradesh';
import { ASSAM_PLACES } from '../states/assam';
import { BIHAR_PLACES } from '../states/bihar';
import { CHHATTISGARH_PLACES } from '../states/chhattisgarh';
import { GOA_PLACES } from '../states/goa';
import { GUJARAT_PLACES } from '../states/gujarat';
import { HARYANA_PLACES } from '../states/haryana';
import { HIMACHAL_PRADESH_PLACES } from '../states/himachal_pradesh';
import { JHARKHAND_PLACES } from '../states/jharkhand';
import { KARNATAKA_PLACES } from '../states/karnataka';
import { KERALA_PLACES } from '../states/kerala';
import { MADHYA_PRADESH_PLACES } from '../states/madhya_pradesh';
import { MAHARASHTRA_PLACES } from '../states/maharashtra';
import { MANIPUR_PLACES } from '../states/manipur';
import { MEGHALAYA_PLACES } from '../states/meghalaya';
import { MIZORAM_PLACES } from '../states/mizoram';
import { NAGALAND_PLACES } from '../states/nagaland';
import { ODISHA_PLACES } from '../states/odisha';
import { PUNJAB_PLACES } from '../states/punjab';
import { RAJASTHAN_PLACES } from '../states/rajasthan';
import { SIKKIM_PLACES } from '../states/sikkim';
import { TAMIL_NADU_PLACES } from '../states/tamil_nadu';
import { TELANGANA_PLACES } from '../states/telangana';
import { TRIPURA_PLACES } from '../states/tripura';
import { UTTAR_PRADESH_PLACES } from '../states/uttar_pradesh';
import { UTTARAKHAND_PLACES } from '../states/uttarakhand';
import { WEST_BENGAL_PLACES } from '../states/west_bengal';
import { ANDAMAN_AND_NICOBAR_ISLANDS_PLACES } from '../states/andaman_and_nicobar_islands';
import { CHANDIGARH_PLACES } from '../states/chandigarh';
import { DADRA_AND_NAGAR_HAVELI_AND_DAMAN_AND_DIU_PLACES } from '../states/dadra_and_nagar_haveli_and_daman_and_diu';
import { DELHI_PLACES } from '../states/delhi';
import { JAMMU_AND_KASHMIR_PLACES } from '../states/jammu_and_kashmir';
import { LADAKH_PLACES } from '../states/ladakh';
import { LAKSHADWEEP_PLACES } from '../states/lakshadweep';
import { PUDUCHERRY_PLACES } from '../states/puducherry';
import { topDestinations } from '../destinations';

// Combine all arrays into one massive list
const RAW_ALL_PLACES = [
  ...ANDHRA_PRADESH_PLACES,
  ...ARUNACHAL_PRADESH_PLACES,
  ...ASSAM_PLACES,
  ...BIHAR_PLACES,
  ...CHHATTISGARH_PLACES,
  ...GOA_PLACES,
  ...GUJARAT_PLACES,
  ...HARYANA_PLACES,
  ...HIMACHAL_PRADESH_PLACES,
  ...JHARKHAND_PLACES,
  ...KARNATAKA_PLACES,
  ...KERALA_PLACES,
  ...MADHYA_PRADESH_PLACES,
  ...MAHARASHTRA_PLACES,
  ...MANIPUR_PLACES,
  ...MEGHALAYA_PLACES,
  ...MIZORAM_PLACES,
  ...NAGALAND_PLACES,
  ...ODISHA_PLACES,
  ...PUNJAB_PLACES,
  ...RAJASTHAN_PLACES,
  ...SIKKIM_PLACES,
  ...TAMIL_NADU_PLACES,
  ...TELANGANA_PLACES,
  ...TRIPURA_PLACES,
  ...UTTAR_PRADESH_PLACES,
  ...UTTARAKHAND_PLACES,
  ...WEST_BENGAL_PLACES,
  ...ANDAMAN_AND_NICOBAR_ISLANDS_PLACES,
  ...CHANDIGARH_PLACES,
  ...DADRA_AND_NAGAR_HAVELI_AND_DAMAN_AND_DIU_PLACES,
  ...DELHI_PLACES,
  ...JAMMU_AND_KASHMIR_PLACES,
  ...LADAKH_PLACES,
  ...LAKSHADWEEP_PLACES,
  ...PUDUCHERRY_PLACES
];

function ensureRichPlaceData(place) {
  const pName = place.name || place.title || '';
  const cityName = place.city || (place.location ? place.location.split(',')[0].trim() : '') || (place.state ? place.state.split(',')[0].trim() : '');
  const stateName = place.state || (place.location ? place.location.split(',').slice(1).join(',').trim() : 'India');

  const transport = place.transport || {
    nearestAirport: place.nearestAirport || place.transit?.airport || (cityName ? `${cityName} Airport` : 'Nearest Domestic / International Airport'),
    nearestRailway: place.nearestRailway || place.transit?.railway || (cityName ? `${cityName} Junction Railway Station` : 'Nearest Major Railway Station'),
    busConnectivity: place.busConnectivity || place.transit?.localTransit || `Local buses, prepaid auto-rickshaws, and app cabs (Ola/Uber) connect regularly from ${cityName || 'city center'}.`,
    roadRules: place.transit?.roadRules || place.accessibilityNote || 'Heritage zone traffic rules apply; designated parking areas available with local shuttle/e-rickshaw links.'
  };

  const essentials = place.essentials || {
    bestTime: place.bestTime || place.visitorEssentials?.bestTime || 'October to March (Pleasant weather)',
    weather: place.weather || place.visitorEssentials?.weather || 'Pleasant day temperatures with cool evenings',
    timings: place.timings || place.visitorEssentials?.timings || '09:00 AM – 05:30 PM (Daily)',
    entryFee: (place.visitorEssentials?.entryFee) || {
      Indian: '₹50 - ₹100',
      Foreigner: '₹300 - ₹500',
      Camera: '₹50'
    },
    compositeTicket: 'Composite monument pass available at official ASI and state tourism counters/portals.'
  };

  const foodGuide = (place.foodGuide && place.foodGuide.length > 0) ? place.foodGuide : (
    (place.verifiedDining && place.verifiedDining.length > 0) ? place.verifiedDining.map(d => ({
      name: d.name || d.shop || `${cityName} Heritage Kitchen`,
      type: d.type || 'Traditional Indian Dining',
      specialty: d.specialty || d.dish || 'Regional Specialty Thali & Delicacies',
      rating: d.rating || '4.6'
    })) : [
      {
        name: `${cityName || pName} Heritage Dining`,
        type: 'Authentic Regional Kitchen',
        specialty: 'Traditional Local Thali & Heritage Delicacies',
        rating: 4.6
      },
      {
        name: `${cityName || 'Central'} Street Food & Sweets`,
        type: 'Local Treats & Chaat',
        specialty: 'Fresh Regional Snacks, Lassi & Savories',
        rating: 4.5
      }
    ]
  );

  const emergency = place.emergency || place.emergencySOS || {
    police: '100 / 112',
    ambulance: '108',
    touristHelpline: '1363 (24x7 Multi-lingual)',
    nearestHospital: cityName ? `${cityName} District Civil Hospital` : 'District Government Hospital & Trauma Center'
  };

  return {
    ...place,
    name: pName,
    city: cityName,
    state: stateName,
    transport,
    essentials,
    foodGuide,
    emergency
  };
}

// Merge enriched topDestinations properties into ALL_PLACES by ID & name matching
export const ALL_PLACES = RAW_ALL_PLACES.map(place => {
  const placeNameNorm = (place.name || place.title || '').toLowerCase().trim();
  const enriched = topDestinations.find(td => {
    const tdNameNorm = (td.name || td.title || '').toLowerCase().trim();
    if (td.id === place.id && (tdNameNorm === placeNameNorm || tdNameNorm.includes(placeNameNorm) || placeNameNorm.includes(tdNameNorm))) {
      return true;
    }
    return tdNameNorm === placeNameNorm;
  });
  const merged = enriched ? { ...place, ...enriched } : { ...place };
  const pName = merged.name || merged.title || '';
  if (!merged.exactVisualQuery) {
    merged.exactVisualQuery = `${pName} historic monument front facade`;
  }
  return ensureRichPlaceData(merged);
});

// Append any topDestinations not present in RAW_ALL_PLACES (guaranteeing unique non-colliding IDs)
topDestinations.forEach(td => {
  const tdNameNorm = (td.name || td.title || '').toLowerCase().trim();
  const exists = ALL_PLACES.some(p => {
    const pNameNorm = (p.name || p.title || '').toLowerCase().trim();
    if (p.id === td.id && (pNameNorm === tdNameNorm || pNameNorm.includes(tdNameNorm) || tdNameNorm.includes(pNameNorm))) return true;
    if (pNameNorm === tdNameNorm) return true;
    if (pNameNorm && tdNameNorm && (pNameNorm.includes(tdNameNorm) || tdNameNorm.includes(pNameNorm))) return true;
    return false;
  });

  if (!exists) {
    const item = { ...td };
    // Guarantee unique non-colliding ID across ALL_PLACES
    let safeId = item.id;
    while (ALL_PLACES.some(p => p.id === safeId)) {
      safeId += 10000;
    }
    item.id = safeId;

    const pName = item.name || item.title || '';
    if (!item.exactVisualQuery) {
      item.exactVisualQuery = `${pName} historic monument front facade`;
    }
    ALL_PLACES.push(ensureRichPlaceData(item));
  }
});

// --- CRITICAL EXPORTS FOR HOME.JSX & PLACEDETAILS.JSX ---

// 1. Export 'PLACES' (Used by PlaceDetails to find by ID)
export const PLACES = ALL_PLACES;

// 2. Export 'TOP_DESTINATIONS' (Used by Home for initial view)
export const TOP_DESTINATIONS = ALL_PLACES.filter(p => p.isPopular).length > 0 
    ? ALL_PLACES.filter(p => p.isPopular) 
    : ALL_PLACES.slice(0, 8); 

// 3. Helper function for state-based filtering
export const getPlacesByState = (stateName) => {
  return ALL_PLACES.filter(p => p.state === stateName);
};