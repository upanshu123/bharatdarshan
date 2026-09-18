/**
 * MADHYA_PRADESH_PLACES DATASET (Expanded)
 * ------------------------------------------------------------------
 * Sources: MP Tourism, ASI, Forest Department
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const MADHYA_PRADESH_PLACES = [
  // --- WILDLIFE ---
  {
    id: 1401,
    name: "Kanha National Park",
    slug: "kanha-national-park",
    state: "Mandla, Madhya Pradesh",
    category: "Wildlife",
    badge: "Inspiration for Jungle Book",
    image: "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2017/06/Kanha-National-Park.jpg",
    description: "The largest national park in MP, famous for Royal Bengal Tigers and the hardground Barasingha.",
    coordinates: { lat: 22.3345, lng: 80.6115 },
    essentials: {
      bestTime: "October to June",
      weather: "Forest/Cool",
      timings: "06:00 AM - 11:00 AM, 03:00 PM - 06:00 PM",
      entryFee: { Permit: "₹2400", PerPerson: "₹600-800", Guide: "₹500" }
    },
    transport: { nearestAirport: "Jabalpur (160 km)", nearestRailway: "Gondia (145 km)", busConnectivity: "Buses from Mandla/Jabalpur" },
    externalLinks: { officialBooking: "https://forest.mponline.gov.in/", googleMaps: "https://goo.gl/maps/kanha" },
    accessibility: { wheelchairFriendly: false, notes: "High-clearance gypsies required." },
    routePlan: [ { time: "05:30 AM", activity: "Morning Safari" }, { time: "11:30 AM", activity: "Kanha Museum" } ],
    foodGuide: [{ name: "MPT Baghira Jungle Resort", type: "MPT", specialty: "Indian Buffet", rating: 4.2 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Mandla" }
  },
  {
    id: 1402,
    name: "Bandhavgarh National Park",
    slug: "bandhavgarh-national-park",
    state: "Umaria, Madhya Pradesh",
    category: "Wildlife",
    badge: "Highest Tiger Density",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/2c/31/61/pugdundee-safaris-tree.jpg?w=900&h=500&s=1",
    description: "Known for the highest density of Royal Bengal Tigers and the ancient Bandhavgarh Fort.",
    coordinates: { lat: 23.7225, lng: 81.0249 },
    essentials: {
      bestTime: "October to June",
      weather: "Dry/Hot",
      timings: "06:00 AM - 11:00 AM, 03:00 PM - 06:00 PM",
      entryFee: { Permit: "₹2400", Guide: "₹500" }
    },
    transport: { nearestAirport: "Jabalpur (190 km)", nearestRailway: "Umaria (35 km)", busConnectivity: "Taxis from Umaria" },
    externalLinks: { officialBooking: "https://forest.mponline.gov.in/", googleMaps: "https://goo.gl/maps/bandhavgarh" },
    accessibility: { wheelchairFriendly: false, notes: "Rugged terrain." },
    routePlan: [ { time: "05:45 AM", activity: "Tala Zone Safari" }, { time: "11:00 AM", activity: "Shesh Shaiya Visit" } ],
    foodGuide: [{ name: "MPT White Tiger Lodge", type: "MPT", specialty: "North Indian", rating: 4.1 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Umaria" }
  },
  {
    id: 1403,
    name: "Khajuraho Group of Monuments",
    slug: "khajuraho-temples",
    state: "Chhatarpur, Madhya Pradesh",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://www.culturalindia.net/iliimages/Khajuraho-Group-of-Monuments-ili-133-ogimg.jpg",
    description: "Famous for Nagara-style architecture and erotic sculptures built by the Chandela dynasty.",
    coordinates: { lat: 24.8515, lng: 79.9215 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Indian: "₹40", Foreigner: "₹600", LightShow: "₹250" }
    },
    transport: { nearestAirport: "Khajuraho (5 km)", nearestRailway: "Khajuraho (8 km)", busConnectivity: "Buses from Jhansi" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/khajuraho" },
    accessibility: { wheelchairFriendly: true, notes: "Paved pathways in Western Group." },
    routePlan: [ { time: "08:00 AM", activity: "Western Group Temples" }, { time: "07:00 PM", activity: "Sound & Light Show" } ],
    foodGuide: [{ name: "Raja Cafe", type: "Heritage View", specialty: "Wood Fired Pizza", rating: 4.5 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Khajuraho" }
  },
  {
    id: 1404,
    name: "Sanchi Stupa",
    slug: "sanchi-stupa",
    state: "Raisen, Madhya Pradesh",
    category: "Heritage",
    badge: "Oldest Stone Structure in India",
    image: "https://www.thecitizen.in/h-upload/old_images/1500x900_157906-dc84725a2128de43d304dff0c91ba77b.webp",
    description: "UNESCO site commissioned by Emperor Ashoka; a pivotal monument in Buddhist history.",
    coordinates: { lat: 23.4873, lng: 77.7418 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "06:30 AM - 06:00 PM",
      entryFee: { Indian: "₹40", Foreigner: "₹600" }
    },
    transport: { nearestAirport: "Bhopal (55 km)", nearestRailway: "Sanchi (1 km)", busConnectivity: "Buses from Bhopal ISBT" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/sanchi" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available to main stupa." },
    routePlan: [{ time: "09:00 AM", activity: "Great Stupa & Museum" }],
    foodGuide: [{ name: "MPT Gateway Retreat", type: "MPT", specialty: "Lunch Buffet", rating: 4.0 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Vidisha" }
  },
  {
    id: 1405,
    name: "Gwalior Fort",
    slug: "gwalior-fort",
    state: "Gwalior, Madhya Pradesh",
    category: "Heritage",
    badge: "Gibraltar of India",
    image: "https://s3.india.com/wp-content/uploads/2024/02/Gwalior-Fort-1.jpg",
    description: "A hill fort housing the Man Singh Palace with turquoise blue tiles.",
    coordinates: { lat: 26.2313, lng: 78.1695 },
    essentials: {
      bestTime: "October to March",
      weather: "Hot summers",
      timings: "06:00 AM - 05:30 PM",
      entryFee: { Indian: "₹75", Foreigner: "₹250" }
    },
    transport: { nearestAirport: "Gwalior (10 km)", nearestRailway: "Gwalior Junction (4 km)", busConnectivity: "Auto/Cabs available" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/gwaliorfort" },
    accessibility: { wheelchairFriendly: true, notes: "Car access to top via Urvai Gate." },
    routePlan: [{ time: "09:00 AM", activity: "Man Singh Palace" }],
    foodGuide: [{ name: "Indian Coffee House", type: "Near Fort", specialty: "Dosa", rating: 4.2 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "J A Hospital Gwalior" }
  },
  {
    id: 1406,
    name: "Mahakaleshwar Temple",
    slug: "mahakaleshwar-ujjain",
    state: "Ujjain, Madhya Pradesh",
    category: "Spiritual",
    badge: "Jyotirlinga & Mahakal Corridor",
    image: "https://temple.yatradham.org/public/Product/temple/temple_kBgQqykX_202409021654340.jpg",
    description: "One of the 12 Jyotirlingas, famous for the Bhasma Aarti and Mahakal Lok corridor.",
    coordinates: { lat: 23.1827, lng: 75.7682 },
    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "04:00 AM - 11:00 PM",
      entryFee: { General: "Free", SheeghraDarshan: "₹250" }
    },
    transport: { nearestAirport: "Indore (55 km)", nearestRailway: "Ujjain Junction (2 km)", busConnectivity: "Buses from Indore" },
    externalLinks: { officialBooking: "https://shrimahakaleshwar.com/", googleMaps: "https://goo.gl/maps/mahakal" },
    accessibility: { wheelchairFriendly: true, notes: "E-carts in Mahakal Lok." },
    routePlan: [{ time: "08:00 AM", activity: "Darshan & Corridor Walk" }],
    foodGuide: [{ name: "Tower Chowk", type: "Street Food", specialty: "Poha Jalebi", rating: 4.7 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Ujjain" }
  },
  {
    id: 1407,
    name: "Omkareshwar Temple",
    slug: "omkareshwar",
    state: "Khandwa, Madhya Pradesh",
    category: "Spiritual",
    badge: "Jyotirlinga on Om Island",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Omkareswar_Jyotirlinga.jpg",
    description: "Located on Mandhata island in the Narmada River, shaped like the 'Om' symbol.",
    coordinates: { lat: 22.2462, lng: 76.1488 },
    essentials: {
      bestTime: "October to March",
      weather: "Humid",
      timings: "05:00 AM - 09:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Indore (80 km)", nearestRailway: "Omkareshwar Road (12 km)", busConnectivity: "Buses from Indore" },
    externalLinks: { officialBooking: "https://shriomkareshwar.org/", googleMaps: "https://goo.gl/maps/omkareshwar" },
    accessibility: { wheelchairFriendly: false, notes: "Narrow lanes and stairs." },
    routePlan: [{ time: "08:00 AM", activity: "Darshan & Boat Ride" }],
    foodGuide: [{ name: "Narmada Resort", type: "MPT", specialty: "Veg Lunch", rating: 3.9 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Govt Hospital Omkareshwar" }
  },
  {
    id: 1408,
    name: "Bhedaghat",
    slug: "bhedaghat-marble-rocks",
    state: "Jabalpur, Madhya Pradesh",
    category: "Nature",
    badge: "Grand Canyon of India",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZL8WdF39tieBeQXsATm7hifM_9b8lB2FvbA&s",
    description: "Stunning marble gorge on the Narmada River and Dhuandhar Falls.",
    coordinates: { lat: 23.1312, lng: 79.8005 },
    essentials: {
      bestTime: "November to May",
      weather: "Pleasant",
      timings: "07:00 AM - 08:00 PM",
      entryFee: { Entry: "Free", Boating: "₹50-800", Ropeway: "₹100" }
    },
    transport: { nearestAirport: "Jabalpur (30 km)", nearestRailway: "Jabalpur (20 km)", busConnectivity: "City buses from Jabalpur" },
    externalLinks: { officialBooking: "https://www.mptourism.com/", googleMaps: "https://goo.gl/maps/bhedaghat" },
    accessibility: { wheelchairFriendly: true, notes: "Ropeway accessible." },
    routePlan: [{ time: "09:00 AM", activity: "Boating & Falls" }],
    foodGuide: [{ name: "MPT Motel Marble Rocks", type: "View", specialty: "Lunch", rating: 4.1 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Medical College Jabalpur" }
  },
  {
    id: 1409,
    name: "Pachmarhi",
    slug: "pachmarhi",
    state: "Narmadapuram, Madhya Pradesh",
    category: "Nature",
    badge: "Queen of Satpura",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2022/09/12115330/PACHMARHI-FEATURE-compressed.jpg",
    description: "Biosphere reserve and only hill station in MP, known for waterfalls and caves.",
    coordinates: { lat: 22.4674, lng: 78.4346 },
    essentials: {
      bestTime: "All Year",
      weather: "Cool/Misty",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Gypsy: "₹1500-2000" }
    },
    transport: { nearestAirport: "Bhopal (200 km)", nearestRailway: "Pipariya (50 km)", busConnectivity: "Taxis from Pipariya" },
    externalLinks: { officialBooking: "https://www.mptourism.com/", googleMaps: "https://goo.gl/maps/pachmarhi" },
    accessibility: { wheelchairFriendly: false, notes: "Forest trails." },
    routePlan: [{ time: "09:00 AM", activity: "Bee Falls & Caves" }],
    foodGuide: [{ name: "MPT Satpura", type: "Heritage", specialty: "Dinner", rating: 4.3 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Pachmarhi" }
  },
  {
    id: 1410,
    name: "Orchha Fort Complex",
    slug: "orchha",
    state: "Niwari, Madhya Pradesh",
    category: "Heritage",
    badge: "City of Palaces",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1d/24/96/the-marvellous-orchha.jpg?w=1200&h=-1&s=1",
    description: "Medieval town famous for Jahangir Mahal, Ram Raja Temple, and Royal Chhatris.",
    coordinates: { lat: 25.3503, lng: 78.6413 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Indian: "₹10", Foreigner: "₹250" }
    },
    transport: { nearestAirport: "Gwalior (120 km)", nearestRailway: "Jhansi (15 km)", busConnectivity: "Auto/Taxi from Jhansi" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/orchha" },
    accessibility: { wheelchairFriendly: false, notes: "Narrow stairs in palaces." },
    routePlan: [{ time: "09:00 AM", activity: "Jahangir Mahal" }],
    foodGuide: [{ name: "Amar Mahal", type: "Heritage", specialty: "Royal Thali", rating: 4.5 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Medical College Jhansi" }
  },
  {
    id: 1411,
    name: "Pench National Park",
    slug: "pench-national-park",
    state: "Seoni, Madhya Pradesh",
    category: "Wildlife",
    badge: "Mowgli's Home",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRrIxFerpB6mJq-GVEAVl3COLmLuXhM35vg&s",
    description: "The setting for Rudyard Kipling's 'The Jungle Book', spanning across the borders of MP and Maharashtra.",
    coordinates: { lat: 21.6062, lng: 79.2015 },
    essentials: {
      bestTime: "October to June",
      weather: "Tropical",
      timings: "06:00 AM - 11:00 AM, 03:00 PM - 06:00 PM",
      entryFee: { Permit: "₹2400", Guide: "₹500" }
    },
    transport: { nearestAirport: "Nagpur (92 km)", nearestRailway: "Nagpur (92 km)", busConnectivity: "Buses from Seoni or Nagpur" },
    externalLinks: { officialBooking: "https://forest.mponline.gov.in/", googleMaps: "https://goo.gl/maps/pench" },
    accessibility: { wheelchairFriendly: false, notes: "Safari vehicles not modified." },
    routePlan: [ { time: "06:00 AM", activity: "Turia Gate Safari" }, { time: "04:00 PM", activity: "Pottery Village Visit" } ],
    foodGuide: [{ name: "MPT Kiplings Court", type: "MPT", specialty: "Regional MP Food", rating: 4.4 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Seoni" }
  },
  {
    id: 1412,
    name: "Bhimbetka Rock Shelters",
    slug: "bhimbetka-caves",
    state: "Raisen, Madhya Pradesh",
    category: "Heritage",
    badge: "Paleolithic Rock Art",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qvW5c1npjVIee3c4TpkWXXdMS72N7q82gg&s",
    description: "UNESCO site featuring prehistoric cave paintings dating back over 30,000 years.",
    coordinates: { lat: 22.9376, lng: 77.6126 },
    essentials: {
      bestTime: "September to March",
      weather: "Warm/Dry",
      timings: "07:00 AM - 06:00 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹500" }
    },
    transport: { nearestAirport: "Bhopal (45 km)", nearestRailway: "Bhopal (45 km)", busConnectivity: "Hired taxi from Bhopal" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/bhimbetka" },
    accessibility: { wheelchairFriendly: false, notes: "Uneven rock terrain." },
    routePlan: [{ time: "10:00 AM", activity: "Cave Painting Tour" }],
    foodGuide: [{ name: "MPT Highway Retreat", type: "MPT", specialty: "Indian", rating: 4.1 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Bhopal AIIMS" }
  }
];
