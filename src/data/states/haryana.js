/**
 * HARYANA_PLACES DATASET (Comprehensive 2025)
 * ------------------------------------------------------------------
 * Sources: Haryana Tourism, ASI, Wildlife Institute of India
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const HARYANA_PLACES = [
  {
    id: 901,
    name: "Sultanpur National Park",
    slug: "sultanpur-national-park",
    state: "Gurugram, Haryana",
    category: "Wildlife",
    badge: "Birdwatcher's Paradise",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Sultanpur_Bird_Sanctuary%2C_Gurgaon.jpg",
    description: "A world-renowned bird sanctuary and Ramsar site hosting over 250 species of resident and migratory birds.",
    coordinates: { lat: 28.4614, lng: 76.8916 },
    essentials: {
      bestTime: "October to March",
      weather: "Cool/Foggy",
      timings: "07:00 AM - 04:30 PM (Closed Tuesdays)",
      entryFee: { Indian: "₹5", Foreigner: "₹40", Camera: "₹25" }
    },
    transport: {
      nearestAirport: "IGI Airport, Delhi (15 km)",
      nearestRailway: "Gurugram (15 km)",
      busConnectivity: "Cabs/Auto from Gurugram Metro"
    },
    externalLinks: {
      officialBooking: "https://haryanatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/sultanpur"
    },
    accessibility: { wheelchairFriendly: true, notes: "Flat paved walking trails." },
    routePlan: [
      { time: "07:30 AM", activity: "Morning Birdwatching Walk" },
      { time: "11:30 AM", activity: "Photography from Watch Towers" }
    ],
    foodGuide: [{ name: "Rosy Pelican", type: "Govt Resort", specialty: "North Indian Thali", rating: 3.8 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "SGT Hospital, Budhera" 
    }
  },
  {
    id: 902,
    name: "Morni Hills",
    slug: "morni-hills",
    state: "Panchkula, Haryana",
    category: "Hill Stations",
    badge: "Only Hill Station of Haryana",
    image: "https://www.royalorchidhotels.com/Images/ThingsToDO/18_25_2024_11_25_49Tikkar%20Taal.jpg",
    description: "Located in the Shivalik range, it features Tikkar Taal lakes and lush pine forests.",
    coordinates: { lat: 30.7078, lng: 77.0867 },
    essentials: {
      bestTime: "September to March",
      weather: "Pleasant/Cool",
      timings: "24 Hours (Boating: 9 AM - 6 PM)",
      entryFee: { Entry: "Free", Boating: "₹200-400" }
    },
    transport: {
      nearestAirport: "Chandigarh (45 km)",
      nearestRailway: "Chandigarh (40 km)",
      busConnectivity: "Haryana Roadways from Panchkula"
    },
    externalLinks: {
      officialBooking: "https://haryanatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/morni"
    },
    accessibility: { wheelchairFriendly: false, notes: "Hilly and uneven terrain." },
    routePlan: [
      { time: "10:00 AM", activity: "Tikkar Taal Boating" },
      { time: "03:00 PM", activity: "Morni Fort Visit" }
    ],
    foodGuide: [{ name: "Mountain Quail", type: "Govt Resort", specialty: "Butter Chicken", rating: 4.0 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "Civil Hospital Panchkula" 
    }
  },
  {
    id: 903,
    name: "Kalesar National Park",
    slug: "kalesar-national-park",
    state: "Yamunanagar, Haryana",
    category: "Wildlife",
    badge: "Biodiversity Hotspot",
    image: "https://cdn.s3waas.gov.in/s3428fca9bc1921c25c5121f9da7815cde/uploads/bfi_thumb/2018060629-olw8qbsm2ywlc60iaacyrl0yir5whx0sskbn877jpm.jpg",
    description: "Dense forest reserve at the foothills of Himalayas, home to leopards, elephants, and unique Khair trees.",
    coordinates: { lat: 30.3347, lng: 77.5856 },
    essentials: {
      bestTime: "November to June",
      weather: "Humid/Cool",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Entry: "₹30", Safari: "₹500+" }
    },
    transport: {
      nearestAirport: "Chandigarh (110 km)",
      nearestRailway: "Yamunanagar (40 km)",
      busConnectivity: "Buses on the Paonta Sahib route"
    },
    externalLinks: {
      officialBooking: "https://haryanaforest.gov.in/",
      googleMaps: "https://goo.gl/maps/kalesar"
    },
    accessibility: { wheelchairFriendly: false, notes: "Forest safari tracks require 4x4." },
    routePlan: [
      { time: "06:30 AM", activity: "Jungle Safari" },
      { time: "11:00 AM", activity: "Visit Kalesar Mahadev Temple" }
    ],
    foodGuide: [{ name: "Local Dhabas", type: "Rustic", specialty: "Organic Forest Honey", rating: 3.5 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "Civil Hospital Yamunanagar" 
    }
  },
  {
    id: 904,
    name: "Brahma Sarovar",
    slug: "brahma-sarovar",
    state: "Kurukshetra, Haryana",
    category: "Spiritual",
    badge: "Asia's Largest Man-made Pond",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/c6/54/4c/brahma-sarovar.jpg?w=1200&h=-1&s=1",
    description: "A colossal water tank believed to be the place where Lord Brahma created the universe.",
    coordinates: { lat: 29.9620, lng: 76.8335 },
    essentials: {
      bestTime: "December (Gita Mahotsav)",
      weather: "Cool",
      timings: "24 Hours (Aarti at Sunset)",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh (90 km)",
      nearestRailway: "Kurukshetra Jn (3 km)",
      busConnectivity: "Auto-rickshaws available from Pipli"
    },
    externalLinks: {
      officialBooking: "https://kurukshetra.gov.in/",
      googleMaps: "https://goo.gl/maps/brahmasarovar"
    },
    accessibility: { wheelchairFriendly: true, notes: "Paved ghats with ramps." },
    routePlan: [
      { time: "05:00 PM", activity: "Evening Aarti" },
      { time: "06:00 PM", activity: "Parikrama Walk" }
    ],
    foodGuide: [{ name: "Neelkanth Yatri Niwas", type: "Pilgrim", specialty: "Pure Veg Thali", rating: 4.2 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "LNJP Hospital" 
    }
  },
  {
    id: 905,
    name: "Agroha Dham",
    slug: "agroha-dham",
    state: "Hisar, Haryana",
    category: "Spiritual",
    badge: "Sacred Site of Agrawal Community",
    image: "https://www.jagranimages.com/images/newimg/28062024/28_06_2024-agroha_23748435.webp",
    description: "A grand temple complex dedicated to Goddess Mahalakshmi and Maharaja Agrasen.",
    coordinates: { lat: 29.3364, lng: 75.6171 },
    essentials: {
      bestTime: "Winter Months",
      weather: "Dry/Warm",
      timings: "05:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Hisar (20 km)",
      nearestRailway: "Hisar Junction (22 km)",
      busConnectivity: "Located on NH-9"
    },
    externalLinks: {
      officialBooking: "http://agrohadham.org/",
      googleMaps: "https://goo.gl/maps/agroha"
    },
    accessibility: { wheelchairFriendly: true, notes: "Level surfaces in the complex." },
    routePlan: [
      { time: "09:00 AM", activity: "Main Temple Darshan" },
      { time: "11:00 AM", activity: "Archeological Mound Visit" }
    ],
    foodGuide: [{ name: "Dham Bhojnalaya", type: "Satvik", specialty: "Langar/Bhojan", rating: 4.5 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "Agroha Medical College" 
    }
  },
  {
    id: 906,
    name: "Rakhigarhi",
    slug: "rakhigarhi",
    state: "Hisar, Haryana",
    category: "Heritage",
    badge: "Largest Indus Valley Site",
    image: "https://currentaffairs.chinmayaias.com/wp-content/uploads/2024/04/rakhighari.jpg",
    description: "The largest Indus-Saraswati Civilization site, uncovering artifacts dating back 5,000 years.",
    coordinates: { lat: 29.2811, lng: 76.1158 },
    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Cool",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Delhi (150 km)",
      nearestRailway: "Hansi (25 km)",
      busConnectivity: "Private taxi from Hisar recommended"
    },
    externalLinks: {
      officialBooking: "https://asi.nic.in/",
      googleMaps: "https://goo.gl/maps/rakhigarhi"
    },
    accessibility: { wheelchairFriendly: false, notes: "Open excavation mounds." },
    routePlan: [
      { time: "10:00 AM", activity: "Guided Tour of Mounds" },
      { time: "01:00 PM", activity: "Visit the Local Museum" }
    ],
    foodGuide: [{ name: "Village Dhabas", type: "Authentic", specialty: "Kachri ki Sabzi", rating: 4.0 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "Civil Hospital Hansi" 
    }
  },
  {
    id: 907,
    name: "Surajkund",
    slug: "surajkund",
    state: "Faridabad, Haryana",
    category: "Heritage",
    badge: "International Crafts Mela",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Suraj_Kund.jpg",
    description: "A 10th-century Sun reservoir, host to the world's largest crafts fair every February.",
    coordinates: { lat: 28.4862, lng: 77.2804 },
    essentials: {
      bestTime: "February (Mela Season)",
      weather: "Sunny/Cool",
      timings: "10:30 AM - 08:30 PM (Mela)",
      entryFee: { MelaTicket: "₹120-180", Normal: "Free" }
    },
    transport: {
      nearestAirport: "Delhi (25 km)",
      nearestRailway: "Faridabad (12 km)",
      busConnectivity: "Metro (Violet Line) + Auto"
    },
    externalLinks: {
      officialBooking: "https://haryanatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/surajkund"
    },
    accessibility: { wheelchairFriendly: true, notes: "Mela grounds are mostly paved." },
    routePlan: [
      { time: "11:00 AM", activity: "Craft Stall Hopping" },
      { time: "06:00 PM", activity: "Evening Folk Dance" }
    ],
    foodGuide: [{ name: "Mela Food Court", type: "Multi-Cuisine", specialty: "Regional Snacks", rating: 4.5 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "Asian Hospital" 
    }
  },
  {
    id: 908,
    name: "Star Monument",
    slug: "star-monument",
    state: "Bhiwani, Haryana",
    category: "Heritage",
    badge: "Unique Architectural Marvel",
    image: "https://www.radhaswamidinod.org/common/image/star-monument-ban.jpg",
    description: "A stunning star-shaped samadhi of Shri Param Sant Tarachandji Maharaj, built without pillars.",
    coordinates: { lat: 28.7915, lng: 76.1322 },
    essentials: {
      bestTime: "All Year",
      weather: "Warm/Dry",
      timings: "08:00 AM - 07:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Delhi (124 km)",
      nearestRailway: "Bhiwani Jn (12 km)",
      busConnectivity: "Local bus/auto from Bhiwani city"
    },
    externalLinks: {
      officialBooking: "https://bhiwani.gov.in/",
      googleMaps: "https://goo.gl/maps/starmonument"
    },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available at the entrance." },
    routePlan: [
      { time: "10:00 AM", activity: "Explore Architecture" },
      { time: "11:00 AM", activity: "Meditation in Celestial Garden" }
    ],
    foodGuide: [{ name: "Local Sweet Shops", type: "City", specialty: "Bhiwani Pedas", rating: 4.3 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "Civil Hospital Bhiwani" 
    }
  },
  {
    id: 909,
    name: "Raja Nahar Singh Palace",
    slug: "raja-nahar-singh-palace",
    state: "Ballabhgarh, Haryana",
    category: "Heritage",
    badge: "Kartik Cultural Festival Hub",
    image: "https://haryanatourism.gov.in/wp-content/uploads/2024/07/nahar_pic3.jpg",
    description: "An 18th-century heritage palace known for its intricate carvings and hosting cultural festivals.",
    coordinates: { lat: 28.3414, lng: 77.3328 },
    essentials: {
      bestTime: "November (Kartik Festival)",
      weather: "Cool",
      timings: "09:00 AM - 09:00 PM",
      entryFee: { Entry: "₹50 (Approx)" }
    },
    transport: {
      nearestAirport: "Delhi (40 km)",
      nearestRailway: "Ballabhgarh (2 km)",
      busConnectivity: "Direct Metro access (Violet Line)"
    },
    externalLinks: {
      officialBooking: "https://haryanatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/naharsinghpalace"
    },
    accessibility: { wheelchairFriendly: true, notes: "Courtyards are accessible." },
    routePlan: [
      { time: "05:00 PM", activity: "Palace Tour" },
      { time: "07:30 PM", activity: "Dinner at Palace Restaurant" }
    ],
    foodGuide: [{ name: "Nahar Singh Restaurant", type: "Royal", specialty: "Mughlai Thali", rating: 4.1 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "Civil Hospital Ballabhgarh" 
    }
  },
  {
    id: 910,
    name: "Pehowa Saraswati Tirth",
    slug: "pehowa-saraswati-tirth",
    state: "Kurukshetra, Haryana",
    category: "Spiritual",
    badge: "Pitrudhak Tirth",
    image: "https://48koskurukshetra.com/wp-content/uploads/2019/05/24-scaled.jpg",
    description: "An ancient site on the banks of the Saraswati river, highly significant for Pind Daan and ancestral rites.",
    coordinates: { lat: 29.9861, lng: 76.5861 },
    essentials: {
      bestTime: "Chaitra Chaudas (March/April)",
      weather: "Warm",
      timings: "04:00 AM - 10:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh (100 km)",
      nearestRailway: "Kurukshetra Jn (27 km)",
      busConnectivity: "Buses frequent from Kurukshetra/Kaithal"
    },
    externalLinks: {
      officialBooking: "https://kurukshetra.gov.in/",
      googleMaps: "https://goo.gl/maps/pehowasaraswati"
    },
    accessibility: { wheelchairFriendly: true, notes: "Ghats have accessible sections." },
    routePlan: [
      { time: "06:00 AM", activity: "Holy Dip & Prayers" },
      { time: "09:00 AM", activity: "Visit Saraswati Temple" }
    ],
    foodGuide: [{ name: "Local Pilgrim Eateries", type: "Basic", specialty: "Kadha Prasad", rating: 4.0 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "Civil Hospital Pehowa" 
    }
  },
  {
    id: 911,
    name: "Farrukhnagar Fort & Sheesh Mahal",
    slug: "farrukhnagar-heritage",
    state: "Gurugram, Haryana",
    category: "Heritage",
    badge: "Mughal Architecture",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/shish-mahal-gurugram-haryana-2-attr-hero-1?qlt=82&ts=1726732577621",
    description: "Built in 1732, the Sheesh Mahal and the octagonal Baoli showcase Mughal artistic brilliance.",
    coordinates: { lat: 28.4500, lng: 76.8200 },
    essentials: {
      bestTime: "Winter",
      weather: "Pleasant",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Delhi (45 km)",
      nearestRailway: "Gurugram (25 km)",
      busConnectivity: "Connected to Gurugram via Haily Mandi road"
    },
    externalLinks: {
      officialBooking: "https://gurugram.gov.in/",
      googleMaps: "https://goo.gl/maps/farrukhnagar"
    },
    accessibility: { wheelchairFriendly: false, notes: "Historic stairs and narrow lanes." },
    routePlan: [
      { time: "10:00 AM", activity: "Explore Dilli Darwaza" },
      { time: "11:30 AM", activity: "Visit Sheesh Mahal & Baoli" }
    ],
    foodGuide: [{ name: "Local Sweets", type: "City", specialty: "Sohan Halwa", rating: 4.7 }],
    emergency: { 
      police: "100", 
      ambulance: "108", 
      touristHelpline: "1800-103-3500", 
      nearestHospital: "Civil Hospital Gurugram" 
    }
  }
];













