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

// Merge enriched topDestinations properties into ALL_PLACES by ID
export const ALL_PLACES = RAW_ALL_PLACES.map(place => {
  const enriched = topDestinations.find(td => td.id === place.id);
  if (enriched) {
    return { ...place, ...enriched };
  }
  return place;
});

// Append any topDestinations not present in RAW_ALL_PLACES
topDestinations.forEach(td => {
  if (!ALL_PLACES.some(p => p.id === td.id)) {
    ALL_PLACES.push(td);
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