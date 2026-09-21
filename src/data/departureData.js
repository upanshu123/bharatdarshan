/**
 * Departure Cities Database — Plan My Yatra
 * All major Indian cities with train station + bus stand + Google Maps links
 */

function makeGMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const DEPARTURE_CITIES = [
  // ─── North India ───────────────────────────────────────────────────────────
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi",
    region: "North India",
    trainStation: {
      name: "New Delhi Railway Station (NDLS)",
      mapUrl: makeGMapsUrl("New Delhi Railway Station NDLS"),
    },
    busStand: {
      name: "ISBT Kashmere Gate Delhi",
      mapUrl: makeGMapsUrl("ISBT Kashmere Gate Delhi"),
    },
  },
  {
    id: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    region: "North India",
    trainStation: {
      name: "Ghaziabad Railway Station (GZB)",
      mapUrl: makeGMapsUrl("Ghaziabad Railway Station GZB"),
    },
    busStand: {
      name: "Noida Sector 37 Bus Terminal",
      mapUrl: makeGMapsUrl("Noida Sector 37 Bus Terminal"),
    },
  },
  {
    id: "gurgaon",
    name: "Gurgaon (Gurugram)",
    state: "Haryana",
    region: "North India",
    trainStation: {
      name: "Gurgaon Railway Station (GGN)",
      mapUrl: makeGMapsUrl("Gurgaon Railway Station Haryana"),
    },
    busStand: {
      name: "HRTC Bus Stand Gurgaon",
      mapUrl: makeGMapsUrl("HRTC Bus Stand Gurgaon"),
    },
  },
  {
    id: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    region: "North India",
    trainStation: {
      name: "Agra Cantt Railway Station (AGC)",
      mapUrl: makeGMapsUrl("Agra Cantt Railway Station"),
    },
    busStand: {
      name: "ISBT Agra Bus Terminal",
      mapUrl: makeGMapsUrl("ISBT Agra Bus Terminal"),
    },
  },
  {
    id: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    region: "North India",
    trainStation: {
      name: "Lucknow Charbagh Railway Station (LKO)",
      mapUrl: makeGMapsUrl("Lucknow Charbagh Railway Station LKO"),
    },
    busStand: {
      name: "UPSRTC Alambagh Bus Terminal Lucknow",
      mapUrl: makeGMapsUrl("Alambagh Bus Terminal Lucknow UPSRTC"),
    },
  },
  {
    id: "kanpur",
    name: "Kanpur",
    state: "Uttar Pradesh",
    region: "North India",
    trainStation: {
      name: "Kanpur Central Railway Station (CNB)",
      mapUrl: makeGMapsUrl("Kanpur Central Railway Station CNB"),
    },
    busStand: {
      name: "UPSRTC Central Bus Stand Kanpur",
      mapUrl: makeGMapsUrl("Central Bus Stand Kanpur UPSRTC"),
    },
  },
  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    region: "North India",
    trainStation: {
      name: "Varanasi Junction Railway Station (BSB)",
      mapUrl: makeGMapsUrl("Varanasi Junction Railway Station BSB"),
    },
    busStand: {
      name: "Varanasi Cantt Bus Stand",
      mapUrl: makeGMapsUrl("Varanasi Cantt Bus Stand UPSRTC"),
    },
  },
  {
    id: "prayagraj",
    name: "Prayagraj (Allahabad)",
    state: "Uttar Pradesh",
    region: "North India",
    trainStation: {
      name: "Prayagraj Junction Railway Station (PRYJ)",
      mapUrl: makeGMapsUrl("Prayagraj Junction Railway Station"),
    },
    busStand: {
      name: "Civil Lines Bus Stand Prayagraj",
      mapUrl: makeGMapsUrl("Civil Lines Bus Stand Prayagraj"),
    },
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North India",
    trainStation: {
      name: "Jaipur Junction Railway Station (JP)",
      mapUrl: makeGMapsUrl("Jaipur Junction Railway Station JP"),
    },
    busStand: {
      name: "Sindhi Camp Central Bus Stand Jaipur",
      mapUrl: makeGMapsUrl("Sindhi Camp Central Bus Stand Jaipur"),
    },
  },
  {
    id: "jodhpur",
    name: "Jodhpur",
    state: "Rajasthan",
    region: "North India",
    trainStation: {
      name: "Jodhpur Junction Railway Station (JU)",
      mapUrl: makeGMapsUrl("Jodhpur Junction Railway Station JU"),
    },
    busStand: {
      name: "Paota Bus Stand Jodhpur",
      mapUrl: makeGMapsUrl("Paota Bus Stand Jodhpur"),
    },
  },
  {
    id: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    region: "North India",
    trainStation: {
      name: "Udaipur City Railway Station (UDZ)",
      mapUrl: makeGMapsUrl("Udaipur City Railway Station UDZ"),
    },
    busStand: {
      name: "Udaipur Central Bus Stand (Udiapol)",
      mapUrl: makeGMapsUrl("Udaipur Central Bus Stand Udiapol"),
    },
  },
  {
    id: "amritsar",
    name: "Amritsar",
    state: "Punjab",
    region: "North India",
    trainStation: {
      name: "Amritsar Junction Railway Station (ASR)",
      mapUrl: makeGMapsUrl("Amritsar Junction Railway Station ASR"),
    },
    busStand: {
      name: "Amritsar Inter State Bus Terminal (ISBT)",
      mapUrl: makeGMapsUrl("Amritsar ISBT Bus Stand"),
    },
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    state: "Punjab/Haryana",
    region: "North India",
    trainStation: {
      name: "Chandigarh Railway Station (CDG)",
      mapUrl: makeGMapsUrl("Chandigarh Railway Station CDG"),
    },
    busStand: {
      name: "ISBT Sector 43 Chandigarh",
      mapUrl: makeGMapsUrl("ISBT Sector 43 Chandigarh"),
    },
  },
  {
    id: "shimla",
    name: "Shimla",
    state: "Himachal Pradesh",
    region: "North India",
    trainStation: {
      name: "Shimla Railway Station (SML)",
      mapUrl: makeGMapsUrl("Shimla Railway Station SML"),
    },
    busStand: {
      name: "ISBT Tutikandi Bus Stand Shimla",
      mapUrl: makeGMapsUrl("Tutikandi ISBT Bus Stand Shimla"),
    },
  },
  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    region: "North India",
    trainStation: {
      name: "Nearest: Chandigarh Railway Station (CDG) ~310 km",
      mapUrl: makeGMapsUrl("Chandigarh Railway Station CDG"),
    },
    busStand: {
      name: "Manali HRTC Bus Stand (Mall Road)",
      mapUrl: makeGMapsUrl("Manali Bus Stand Mall Road"),
    },
  },
  {
    id: "dehradun",
    name: "Dehradun",
    state: "Uttarakhand",
    region: "North India",
    trainStation: {
      name: "Dehradun Railway Station (DDN)",
      mapUrl: makeGMapsUrl("Dehradun Railway Station DDN"),
    },
    busStand: {
      name: "Dehradun ISBT Bus Stand",
      mapUrl: makeGMapsUrl("Dehradun ISBT Bus Stand"),
    },
  },
  {
    id: "haridwar",
    name: "Haridwar",
    state: "Uttarakhand",
    region: "North India",
    trainStation: {
      name: "Haridwar Junction Railway Station (HW)",
      mapUrl: makeGMapsUrl("Haridwar Junction Railway Station"),
    },
    busStand: {
      name: "Haridwar Central Bus Stand (Ravi Shankar Bus Stand)",
      mapUrl: makeGMapsUrl("Haridwar Central Bus Stand Ravi Shankar"),
    },
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    region: "North India",
    trainStation: {
      name: "Yog Nagari Rishikesh Railway Station (YNRK)",
      mapUrl: makeGMapsUrl("Yog Nagari Rishikesh Railway Station"),
    },
    busStand: {
      name: "Rishikesh ISBT Bus Terminal",
      mapUrl: makeGMapsUrl("Rishikesh ISBT Bus Terminal"),
    },
  },

  // ─── West India ────────────────────────────────────────────────────────────
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "West India",
    trainStation: {
      name: "Mumbai CSMT Railway Station (CSTM)",
      mapUrl: makeGMapsUrl("Mumbai CSMT Chhatrapati Shivaji Maharaj Terminus"),
    },
    busStand: {
      name: "Mumbai Central Bus Depot (MSRTC)",
      mapUrl: makeGMapsUrl("Mumbai Central Bus Depot MSRTC"),
    },
  },
  {
    id: "pune",
    name: "Pune",
    state: "Maharashtra",
    region: "West India",
    trainStation: {
      name: "Pune Junction Railway Station (PUNE)",
      mapUrl: makeGMapsUrl("Pune Junction Railway Station"),
    },
    busStand: {
      name: "Swargate Bus Stand Pune (MSRTC)",
      mapUrl: makeGMapsUrl("Swargate Bus Stand Pune MSRTC"),
    },
  },
  {
    id: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    region: "West India",
    trainStation: {
      name: "Nagpur Junction Railway Station (NGP)",
      mapUrl: makeGMapsUrl("Nagpur Junction Railway Station NGP"),
    },
    busStand: {
      name: "Nagpur Central Bus Stand (Gandhi Bagh)",
      mapUrl: makeGMapsUrl("Nagpur Central Bus Stand Gandhi Bagh"),
    },
  },
  {
    id: "nashik",
    name: "Nashik",
    state: "Maharashtra",
    region: "West India",
    trainStation: {
      name: "Nashik Road Railway Station (NK)",
      mapUrl: makeGMapsUrl("Nashik Road Railway Station"),
    },
    busStand: {
      name: "Nashik Central Bus Stand (MSRTC)",
      mapUrl: makeGMapsUrl("Nashik Central Bus Stand MSRTC"),
    },
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    region: "West India",
    trainStation: {
      name: "Ahmedabad Junction Railway Station (ADI)",
      mapUrl: makeGMapsUrl("Ahmedabad Junction Railway Station ADI"),
    },
    busStand: {
      name: "Geeta Mandir Bus Stand Ahmedabad (GSRTC)",
      mapUrl: makeGMapsUrl("Geeta Mandir Bus Stand Ahmedabad GSRTC"),
    },
  },
  {
    id: "surat",
    name: "Surat",
    state: "Gujarat",
    region: "West India",
    trainStation: {
      name: "Surat Railway Station (ST)",
      mapUrl: makeGMapsUrl("Surat Railway Station Gujarat"),
    },
    busStand: {
      name: "Surat Central Bus Stand (Kapodara)",
      mapUrl: makeGMapsUrl("Surat Central Bus Stand Kapodara"),
    },
  },
  {
    id: "vadodara",
    name: "Vadodara (Baroda)",
    state: "Gujarat",
    region: "West India",
    trainStation: {
      name: "Vadodara Junction Railway Station (BRC)",
      mapUrl: makeGMapsUrl("Vadodara Junction Railway Station BRC"),
    },
    busStand: {
      name: "Vadodara GSRTC Central Bus Stand",
      mapUrl: makeGMapsUrl("Vadodara GSRTC Bus Stand"),
    },
  },
  {
    id: "goa",
    name: "Goa (Panaji)",
    state: "Goa",
    region: "West India",
    trainStation: {
      name: "Madgaon Junction Railway Station (MAO)",
      mapUrl: makeGMapsUrl("Madgaon Junction Railway Station Goa"),
    },
    busStand: {
      name: "Kadamba Bus Terminal Panaji",
      mapUrl: makeGMapsUrl("Kadamba Bus Terminal Panaji Goa"),
    },
  },

  // ─── South India ───────────────────────────────────────────────────────────
  {
    id: "bengaluru",
    name: "Bengaluru (Bangalore)",
    state: "Karnataka",
    region: "South India",
    trainStation: {
      name: "KSR Bengaluru City Railway Station (SBC)",
      mapUrl: makeGMapsUrl("KSR Bengaluru City Railway Station SBC"),
    },
    busStand: {
      name: "Majestic KSRTC Central Bus Stand Bengaluru",
      mapUrl: makeGMapsUrl("Majestic KSRTC Central Bus Stand Bengaluru"),
    },
  },
  {
    id: "mysore",
    name: "Mysore (Mysuru)",
    state: "Karnataka",
    region: "South India",
    trainStation: {
      name: "Mysuru Junction Railway Station (MYS)",
      mapUrl: makeGMapsUrl("Mysuru Junction Railway Station MYS"),
    },
    busStand: {
      name: "KSRTC Central Bus Stand Mysore",
      mapUrl: makeGMapsUrl("KSRTC Central Bus Stand Mysore"),
    },
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    region: "South India",
    trainStation: {
      name: "Chennai Central Railway Station (MAS)",
      mapUrl: makeGMapsUrl("Chennai Central Railway Station MAS"),
    },
    busStand: {
      name: "CMBT Koyambedu Bus Terminus Chennai",
      mapUrl: makeGMapsUrl("CMBT Koyambedu Bus Terminus Chennai"),
    },
  },
  {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    region: "South India",
    trainStation: {
      name: "Madurai Junction Railway Station (MDU)",
      mapUrl: makeGMapsUrl("Madurai Junction Railway Station MDU"),
    },
    busStand: {
      name: "Mattuthavani Integrated Bus Terminus Madurai",
      mapUrl: makeGMapsUrl("Mattuthavani Integrated Bus Terminus Madurai"),
    },
  },
  {
    id: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    region: "South India",
    trainStation: {
      name: "Coimbatore Junction Railway Station (CBE)",
      mapUrl: makeGMapsUrl("Coimbatore Junction Railway Station CBE"),
    },
    busStand: {
      name: "Ukkadam Bus Stand Coimbatore (TNSTC)",
      mapUrl: makeGMapsUrl("Ukkadam Bus Stand Coimbatore"),
    },
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    region: "South India",
    trainStation: {
      name: "Hyderabad Deccan / Nampally Railway Station (HYB)",
      mapUrl: makeGMapsUrl("Hyderabad Deccan Nampally Railway Station"),
    },
    busStand: {
      name: "Mahatma Gandhi Bus Station (MGBS) Hyderabad",
      mapUrl: makeGMapsUrl("Mahatma Gandhi Bus Station MGBS Hyderabad"),
    },
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam (Vizag)",
    state: "Andhra Pradesh",
    region: "South India",
    trainStation: {
      name: "Visakhapatnam Railway Station (VSKP)",
      mapUrl: makeGMapsUrl("Visakhapatnam Railway Station VSKP"),
    },
    busStand: {
      name: "RTC Complex Bus Stand Visakhapatnam",
      mapUrl: makeGMapsUrl("RTC Complex Bus Stand Visakhapatnam"),
    },
  },
  {
    id: "kochi",
    name: "Kochi (Cochin)",
    state: "Kerala",
    region: "South India",
    trainStation: {
      name: "Ernakulam Junction Railway Station (ERS)",
      mapUrl: makeGMapsUrl("Ernakulam Junction Railway Station ERS"),
    },
    busStand: {
      name: "KSRTC Bus Stand Ernakulam Kochi",
      mapUrl: makeGMapsUrl("KSRTC Bus Stand Ernakulam Kochi"),
    },
  },
  {
    id: "thiruvananthapuram",
    name: "Thiruvananthapuram (Trivandrum)",
    state: "Kerala",
    region: "South India",
    trainStation: {
      name: "Thiruvananthapuram Central Railway Station (TVC)",
      mapUrl: makeGMapsUrl("Thiruvananthapuram Central Railway Station TVC"),
    },
    busStand: {
      name: "KSRTC Central Bus Station Thiruvananthapuram",
      mapUrl: makeGMapsUrl("KSRTC Central Bus Station Thiruvananthapuram"),
    },
  },
  {
    id: "kozhikode",
    name: "Kozhikode (Calicut)",
    state: "Kerala",
    region: "South India",
    trainStation: {
      name: "Kozhikode Railway Station (CLT)",
      mapUrl: makeGMapsUrl("Kozhikode Railway Station CLT Calicut"),
    },
    busStand: {
      name: "KSRTC Bus Stand Kozhikode",
      mapUrl: makeGMapsUrl("KSRTC Bus Stand Kozhikode Calicut"),
    },
  },

  // ─── East India ────────────────────────────────────────────────────────────
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    region: "East India",
    trainStation: {
      name: "Howrah Junction Railway Station (HWH)",
      mapUrl: makeGMapsUrl("Howrah Junction Railway Station HWH"),
    },
    busStand: {
      name: "Esplanade Bus Terminus Kolkata",
      mapUrl: makeGMapsUrl("Esplanade Bus Terminus Kolkata"),
    },
  },
  {
    id: "bhubaneswar",
    name: "Bhubaneswar",
    state: "Odisha",
    region: "East India",
    trainStation: {
      name: "Bhubaneswar Railway Station (BBS)",
      mapUrl: makeGMapsUrl("Bhubaneswar Railway Station BBS"),
    },
    busStand: {
      name: "Baramunda ISBT Bus Terminal Bhubaneswar",
      mapUrl: makeGMapsUrl("Baramunda ISBT Bus Terminal Bhubaneswar"),
    },
  },
  {
    id: "patna",
    name: "Patna",
    state: "Bihar",
    region: "East India",
    trainStation: {
      name: "Patna Junction Railway Station (PNBE)",
      mapUrl: makeGMapsUrl("Patna Junction Railway Station PNBE"),
    },
    busStand: {
      name: "Gandhi Maidan Bus Stand Patna (BSRTC)",
      mapUrl: makeGMapsUrl("Gandhi Maidan Bus Stand Patna BSRTC"),
    },
  },
  {
    id: "ranchi",
    name: "Ranchi",
    state: "Jharkhand",
    region: "East India",
    trainStation: {
      name: "Ranchi Railway Station (RNC)",
      mapUrl: makeGMapsUrl("Ranchi Railway Station RNC"),
    },
    busStand: {
      name: "Ranchi Main Bus Stand",
      mapUrl: makeGMapsUrl("Ranchi Main Bus Stand"),
    },
  },
  {
    id: "siliguri",
    name: "Siliguri / NJP",
    state: "West Bengal",
    region: "East India",
    trainStation: {
      name: "New Jalpaiguri Junction Railway Station (NJP)",
      mapUrl: makeGMapsUrl("New Jalpaiguri Junction Railway Station NJP"),
    },
    busStand: {
      name: "Tenzing Norgay Bus Terminus Siliguri",
      mapUrl: makeGMapsUrl("Tenzing Norgay Bus Terminus Siliguri"),
    },
  },

  // ─── Northeast India ───────────────────────────────────────────────────────
  {
    id: "guwahati",
    name: "Guwahati",
    state: "Assam",
    region: "Northeast India",
    trainStation: {
      name: "Guwahati Railway Station (GHY)",
      mapUrl: makeGMapsUrl("Guwahati Railway Station GHY"),
    },
    busStand: {
      name: "ISBT Betkuchi Bus Terminal Guwahati",
      mapUrl: makeGMapsUrl("ISBT Betkuchi Bus Terminal Guwahati"),
    },
  },
  {
    id: "shillong",
    name: "Shillong",
    state: "Meghalaya",
    region: "Northeast India",
    trainStation: {
      name: "Nearest: Guwahati Railway Station (GHY) ~100 km",
      mapUrl: makeGMapsUrl("Guwahati Railway Station GHY"),
    },
    busStand: {
      name: "MTC Bus Stand Police Bazar Shillong",
      mapUrl: makeGMapsUrl("MTC Bus Stand Police Bazar Shillong"),
    },
  },

  // ─── Central India ─────────────────────────────────────────────────────────
  {
    id: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    region: "Central India",
    trainStation: {
      name: "Bhopal Junction Railway Station (BPL)",
      mapUrl: makeGMapsUrl("Bhopal Junction Railway Station BPL"),
    },
    busStand: {
      name: "ISBT Nadra Bus Stand Bhopal",
      mapUrl: makeGMapsUrl("ISBT Nadra Bus Stand Bhopal"),
    },
  },
  {
    id: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    region: "Central India",
    trainStation: {
      name: "Indore Junction Railway Station (INDB)",
      mapUrl: makeGMapsUrl("Indore Junction Railway Station INDB"),
    },
    busStand: {
      name: "Sarwate Bus Stand Indore (MPSRTC)",
      mapUrl: makeGMapsUrl("Sarwate Bus Stand Indore MPSRTC"),
    },
  },
  {
    id: "jabalpur",
    name: "Jabalpur",
    state: "Madhya Pradesh",
    region: "Central India",
    trainStation: {
      name: "Jabalpur Junction Railway Station (JBP)",
      mapUrl: makeGMapsUrl("Jabalpur Junction Railway Station JBP"),
    },
    busStand: {
      name: "ISBT Bus Stand Jabalpur",
      mapUrl: makeGMapsUrl("ISBT Bus Stand Jabalpur"),
    },
  },
  {
    id: "raipur",
    name: "Raipur",
    state: "Chhattisgarh",
    region: "Central India",
    trainStation: {
      name: "Raipur Junction Railway Station (R)",
      mapUrl: makeGMapsUrl("Raipur Junction Railway Station Chhattisgarh"),
    },
    busStand: {
      name: "Panorama Bus Stand Raipur (CSRTC)",
      mapUrl: makeGMapsUrl("Panorama Bus Stand Raipur"),
    },
  },
];

// Group departure cities by region for the dropdown
export const DEPARTURE_CITIES_BY_REGION = DEPARTURE_CITIES.reduce((acc, city) => {
  if (!acc[city.region]) acc[city.region] = [];
  acc[city.region].push(city);
  return acc;
}, {});

// Lookup by city id
export function getDepartureCityById(id) {
  return DEPARTURE_CITIES.find(c => c.id === id) || null;
}
