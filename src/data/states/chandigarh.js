/**
 * CHANDIGARH_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Chandigarh Tourism & CITCO
 * - Heritage: Capitol Complex (UNESCO) Official Booking
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const CHANDIGARH_PLACES = [
  // --- ORIGINAL SEQUENCE (3101 - 3110) ---
  {
    id: 3101,
    name: "Rock Garden of Chandigarh",
    slug: "rock-garden",
    state: "Chandigarh, Chandigarh",
    category: "Heritage",
    badge: "Best from Waste",
    image: " https://cdn.britannica.com/35/186235-050-ECADB074/Animal-sculptures-Nek-Chand-Rock-Garden-of-2015.jpg ",
    description: "A world-famous sculpture garden created by Nek Chand using industrial and home waste (bangles, ceramic, tiles). It is a maze of interlinked courtyards, waterfalls, and sculptures.",
    coordinates: { lat: 30.7525, lng: 76.8101 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "09:00 AM - 06:00 PM",
      entryFee: { Adult: "₹30", Child: "₹10" }
    },
    transport: {
      nearestAirport: "Shaheed Bhagat Singh Intl Airport (20 km)",
      nearestRailway: "Chandigarh Junction (8 km)",
      busConnectivity: "CTU buses to Rock Garden stop (Sector 1)"
    },
    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/rockgarden"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "The garden has narrow passages, low doorways, and uneven steps. Not suitable for wheelchairs."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Phase 1 (Tile Mosaics)" },
      { time: "10:30 AM", activity: "Waterfall Area" },
      { time: "11:30 AM", activity: "Phase 3 (Open Theatre & Swings)" }
    ],
    foodGuide: [
      { name: "Inside Cafeteria", type: "Basic", specialty: "Ice Cream & Popcorn", rating: 3.5 },
      { name: "Sector 9 Market", type: "Nearby", specialty: "Bakery & Fast Food", rating: 4.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3102,
    name: "Capitol Complex",
    slug: "capitol-complex",
    state: "Chandigarh, Chandigarh",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: " https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/23/Pictures/chandigarh-hindustan-complex-chandigarh-saturday-sanjeev-haryana_17088f2c-4708-11e8-b98f-44ca1ff8ed36.jpg ",
    description: "Designed by Le Corbusier, this government compound houses the High Court, Secretariat, and Legislative Assembly. It is a masterpiece of modern architecture.",
    coordinates: { lat: 30.7588, lng: 76.8055 },
    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Open",
      timings: "10:00 AM, 12:00 PM, 03:00 PM (Guided Tours)",
      entryFee: { Entry: "Free", Pass: "Mandatory (Apply at Tourist Center/Online)" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (22 km)",
      nearestRailway: "Chandigarh Junction (10 km)",
      busConnectivity: "Accessible by cab/auto to the Tourist Information Center (Sector 1)"
    },
    externalLinks: {
      officialBooking: "http://capitolcomplex.chd.gov.in/",
      googleMaps: "https://goo.gl/maps/capitolcomplex"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Wide concrete plazas and ramps are available throughout the complex."
    },
    routePlan: [
      { time: "09:30 AM", activity: "Collect Tourist Pass" },
      { time: "10:00 AM", activity: "Guided Tour of Secretariat/Assembly" },
      { time: "11:30 AM", activity: "Open Hand Monument" }
    ],
    foodGuide: [
      { name: "Indian Coffee House (Sec 17)", type: "Heritage", specialty: "Filter Coffee", rating: 4.3 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "PGIMER Sector 12"
    }
  },
  {
    id: 3103,
    name: "Open Hand Monument",
    slug: "open-hand-monument",
    state: "Chandigarh, Chandigarh",
    category: "Heritage",
    badge: "Symbol of Chandigarh",
    image: " https://i.pinimg.com/originals/28/50/2d/28502de611e71a4c9339bafdd24e73da.jpg ",
    description: "Designed by Le Corbusier, this 26-meter high rotating metal sculpture symbolizes 'the hand to give and the hand to take; peace and prosperity, and the unity of mankind'.",
    coordinates: { lat: 30.7608, lng: 76.8021 },
    essentials: {
      bestTime: "Morning or Evening",
      weather: "Open/Windy",
      timings: "10:00 AM - 05:00 PM",
      entryFee: { Entry: "Free (ID Proof required)" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (22 km)",
      nearestRailway: "Chandigarh Junction (10 km)",
      busConnectivity: "Part of the Capitol Complex area"
    },
    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/openhand"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Located in a sunken ditch (Contemplation Pit) accessible via ramps."
    },
    routePlan: [
      { time: "04:00 PM", activity: "Security Check" },
      { time: "04:30 PM", activity: "Photography & Sunset" },
      { time: "05:30 PM", activity: "Walk to Geometric Hill" }
    ],
    foodGuide: [
      { name: "Stu C (Student Centre)", type: "University", specialty: "Rajma Chawal", rating: 4.6 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3104,
    name: "Sukhna Lake",
    slug: "sukhna-lake",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Rainfed Lake",
    image: " https://indiano.travel/wp-content/uploads/2023/02/Sukhna-Lake-picture.jpg ",
    description: "A beautiful man-made reservoir at the foothills of the Himalayas (Shivalik hills). It is the venue for the Asian Rowing Championships and a favorite spot for morning joggers.",
    coordinates: { lat: 30.7421, lng: 76.8188 },
    essentials: {
      bestTime: "All Year (Evenings are lively)",
      weather: "Breezy",
      timings: "05:00 AM - 09:00 PM (Boating till 6 PM)",
      entryFee: { Entry: "Free", Boating: "₹200-400" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (7 km)",
      busConnectivity: "CTU buses stop right at the lake entrance"
    },
    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/sukhna"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "The promenade is wide, flat, and paved. Ramps available at entry."
    },
    routePlan: [
      { time: "05:00 PM", activity: "Boating" },
      { time: "06:00 PM", activity: "Walk along the Bund" },
      { time: "07:00 PM", activity: "Snacks at CITCO Cafeteria" }
    ],
    foodGuide: [
      { name: "CITCO Mermaid", type: "Lake View", specialty: "South Indian & Fast Food", rating: 4.2 },
      { name: "Stu C", type: "Nearby", specialty: "Cold Coffee", rating: 4.7 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3105,
    name: "Zakir Hussain Rose Garden",
    slug: "rose-garden-chandigarh",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Asia's Largest Rose Garden",
    image: " https://chandigarhut.in/wp-content/uploads/2024/10/Rose-Garden-1024x574.webp ",
    description: "Spread over 30 acres in Sector 16, this garden features 1600 varieties of roses. The annual Rose Festival (Feb-Mar) is a major cultural event in the city.",
    coordinates: { lat: 30.7460, lng: 76.7839 },
    essentials: {
      bestTime: "February to March (Peak Bloom)",
      weather: "Sunny",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (8 km)",
      busConnectivity: "Located in Sector 16, well connected by bus/auto"
    },
    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/rosegarden"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved pathways crisscross the entire garden. Terrain is flat."
    },
    routePlan: [
      { time: "04:00 PM", activity: "Walk through Rose Beds" },
      { time: "05:30 PM", activity: "Musical Fountain (Evening)" },
      { time: "06:30 PM", activity: "Visit Sector 17 Plaza (Nearby)" }
    ],
    foodGuide: [
      { name: "Garg Chaat", type: "Sector 23", specialty: "Golgappe", rating: 4.5 },
      { name: "Hot Millions", type: "Sector 17", specialty: "Burgers & Shakes", rating: 4.3 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16 (Opposite)"
    }
  },
  {
    id: 3106,
    name: "Chandigarh Bird Park",
    slug: "chandigarh-bird-park",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Exotic Aviary",
    image: " https://www.reddit.com/media?url=https%3A%2F%2Fexternal-preview.redd.it%2F2ypZHErh7zIayDe2TizTF0hUMUaGFI0w2xrli6byZXk.jpg%3Fauto%3Dwebp%26s%3D83cf58dc815020610d0e5d4bc33222ff8e562f8d ",
    description: "A newly established walk-through aviary located behind Sukhna Lake. It houses exotic birds like Macaws, Cockatoos, and Swans in a naturalistic habitat.",
    coordinates: { lat: 30.7450, lng: 76.8150 },
    essentials: {
      bestTime: "All Year",
      weather: "Outdoor",
      timings: "10:00 AM - 06:00 PM (Closed Mondays & Tuesdays)",
      entryFee: { Adult: "₹50", Child: "₹30" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (7 km)",
      busConnectivity: "Located in Nagar Van (City Forest), near Sukhna Lake"
    },
    externalLinks: {
      officialBooking: "https://chandigarhforest.gov.in/",
      googleMaps: "https://goo.gl/maps/birdpark"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "The aviary has smooth paved paths suitable for wheelchairs."
    },
    routePlan: [
      { time: "10:00 AM", activity: "Walk through Small Aviary" },
      { time: "11:00 AM", activity: "Large Aviary (Aquatic Birds)" },
      { time: "12:00 PM", activity: "Exit to Sukhna Lake" }
    ],
    foodGuide: [
      { name: "Sukhna Lake Cafeteria", type: "Nearby", specialty: "Snacks", rating: 4.0 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3107,
    name: "Government Museum and Art Gallery",
    slug: "govt-museum-chandigarh",
    state: "Chandigarh, Chandigarh",
    category: "Heritage",
    badge: "Le Corbusier Architecture",
    image: " https://www.holidify.com/images/cmsuploads/compressed/attr_wiki_2491_20190220140103jpg ",
    description: "Designed by Le Corbusier, this museum houses a magnificent collection of Gandhara sculptures, Pahari miniature paintings, and contemporary Indian art.",
    coordinates: { lat: 30.7492, lng: 76.7906 },
    essentials: {
      bestTime: "All Year",
      weather: "Indoor/AC",
      timings: "10:00 AM - 04:30 PM (Closed Mondays)",
      entryFee: { Indian: "₹10", Foreigner: "₹100", Camera: "₹5" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (8 km)",
      busConnectivity: "Located in Sector 10 (Cultural Complex)"
    },
    externalLinks: {
      officialBooking: "http://chdmuseum.gov.in/",
      googleMaps: "https://goo.gl/maps/govtmuseum"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps and elevators are available. The building design emphasizes accessibility."
    },
    routePlan: [
      { time: "11:00 AM", activity: "Gandhara Sculpture Gallery" },
      { time: "12:30 PM", activity: "Miniature Painting Section" },
      { time: "02:00 PM", activity: "Natural History Museum (Next door)" }
    ],
    foodGuide: [
      { name: "Willow Cafe", type: "Sector 10", specialty: "Continental & Kebabs", rating: 4.6 },
      { name: "Backpackers Cafe", type: "Cafe", specialty: "All Day Breakfast", rating: 4.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3108,
    name: "Le Corbusier Centre",
    slug: "le-corbusier-centre",
    state: "Chandigarh, Chandigarh",
    category: "Heritage",
    badge: "Birthplace of the City",
    image: " https://indiano.travel/wp-content/uploads/2023/04/Le-Corbusier-Centre-2.jpg ",
    description: "The old office of the Swiss-French architect Le Corbusier, now converted into a museum. It displays his sketches, letters, and the original plans for the city of Chandigarh.",
    coordinates: { lat: 30.7336, lng: 76.7972 },
    essentials: {
      bestTime: "All Year",
      weather: "Indoor",
      timings: "10:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (18 km)",
      nearestRailway: "Chandigarh Junction (6 km)",
      busConnectivity: "Located in Sector 19, accessible by rickshaw"
    },
    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/lecorbusier"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Single-story building with flat access."
    },
    routePlan: [
      { time: "03:00 PM", activity: "View Original City Plans" },
      { time: "04:00 PM", activity: "Read Corbusier's Letters" },
      { time: "05:00 PM", activity: "Visit Pal Dhaba (Sector 28)" }
    ],
    foodGuide: [
      { name: "Pal Dhaba", type: "Legendary", specialty: "Butter Chicken & Naan", rating: 4.7 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3109,
    name: "Elante Mall",
    slug: "elante-mall",
    state: "Chandigarh, Chandigarh",
    category: "Leisure",
    badge: "Largest Mall in Region",
    image: " https://cdn1.tripoto.com/media/filter/tst/img/148920/TripDocument/1475744774_elante_mall_industrial_area_phase_i.png ",
    description: "The go-to destination for shopping, dining, and entertainment in the Tricity area. It features premium brands, a large food court, and a multiplex.",
    coordinates: { lat: 30.7055, lng: 76.8013 },
    essentials: {
      bestTime: "All Year (AC)",
      weather: "Indoor",
      timings: "11:00 AM - 11:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (15 km)",
      nearestRailway: "Chandigarh Junction (4 km)",
      busConnectivity: "Located in Industrial Area Phase 1"
    },
    externalLinks: {
      officialBooking: "https://www.nexusmalls.com/",
      googleMaps: "https://goo.gl/maps/elante"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Fully accessible with elevators, escalators, and disabled restrooms."
    },
    routePlan: [
      { time: "01:00 PM", activity: "Shopping" },
      { time: "04:00 PM", activity: "Movie or Gaming Zone" },
      { time: "08:00 PM", activity: "Dinner at Courtyard" }
    ],
    foodGuide: [
      { name: "Pirates of Grill", type: "Buffet", specialty: "Barbeque", rating: 4.5 },
      { name: "Brooklyn Central", type: "American", specialty: "Mac n Cheese", rating: 4.4 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "Government Medical College (GMCH 32)"
    }
  },
  {
    id: 3110,
    name: "Japanese Garden",
    slug: "japanese-garden-chandigarh",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Zen Architecture",
    image: " https://hips.hearstapps.com/hmg-prod/images/japanese-garden-ideas-1619540857.jpg?crop=0.711xw:1.00xh;0,0.00244xh&resize=2048:* ",
    description: "A beautifully landscaped garden in Sector 31 featuring Japanese architecture, pagodas, meditation huts, a Zen garden, and water bodies. It is connected by an underground tunnel.",
    coordinates: { lat: 30.7028, lng: 76.7865 },
    essentials: {
      bestTime: "October to March",
      weather: "Sunny",
      timings: "05:00 AM - 11:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (15 km)",
      nearestRailway: "Chandigarh Junction (6 km)",
      busConnectivity: "Located in Sector 31"
    },
    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/japanesegarden"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Paths are paved. The tunnel connecting Phase 1 and 2 has ramps."
    },
    routePlan: [
      { time: "04:00 PM", activity: "Pagoda Photography" },
      { time: "05:00 PM", activity: "Meditation in Zen Garden" },
      { time: "06:00 PM", activity: "Walk through Tunnel" }
    ],
    foodGuide: [
      { name: "Sector 31 Market", type: "Local", specialty: "Indian Sweets", rating: 4.0 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMCH Sector 32"
    }
  },

  // --- EXTENDED TOURIST SPOTS (3111 - 3123) ---
  {
    id: 3111,
    name: "Sector 17 Plaza",
    slug: "sector-17-plaza",
    state: "Chandigarh, Chandigarh",
    category: "Leisure",
    badge: "City Centre",
    image: " https://media.holidify.com/images/cmsuploads/compressed/31_08_2022-sector17_23029381_20241129145230.jpg ",
    description: "The heart of Chandigarh's city life. A pedestrian-only shopping paradise featuring international brands, government emporiums, and a musical fountain show in the evenings.",
    coordinates: { lat: 30.7398, lng: 76.7827 },
    essentials: {
      bestTime: "Evenings",
      weather: "Outdoor",
      timings: "10:00 AM - 10:00 PM (Fountain Show: 7 PM)",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (8 km)",
      busConnectivity: "ISBT Sector 17 is right next door"
    },
    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/sector17"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Large flat plazas, ramps available at most showroom entrances."
    },
    routePlan: [
      { time: "05:00 PM", activity: "Shopping" },
      { time: "07:00 PM", activity: "Musical Fountain Show" },
      { time: "08:00 PM", activity: "Dinner at Ghazal" }
    ],
    foodGuide: [
      { name: "Ghazal", type: "Heritage", specialty: "North Indian", rating: 4.5 },
      { name: "Sindhi Sweets", type: "Sweets", specialty: "Chole Bhature", rating: 4.4 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3112,
    name: "International Dolls Museum",
    slug: "dolls-museum-chandigarh",
    state: "Chandigarh, Chandigarh",
    category: "Heritage",
    badge: "Kids Favorite",
    image: " https://www.tourmyindia.com/states/delhi/images/shankar-international-dolls-museum1-1.jpg ",
    description: "Located within Bal Bhawan, this museum showcases a fascinating collection of dolls from over 25 countries, depicting diverse cultures and traditional attires.",
    coordinates: { lat: 30.7360, lng: 76.7725 },
    essentials: {
      bestTime: "All Year",
      weather: "Indoor/AC",
      timings: "10:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: { Adult: "₹20", Child: "Free (Below 12)", Camera: "₹20" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (9 km)",
      busConnectivity: "Sector 23 is well connected by local buses"
    },
    externalLinks: {
      officialBooking: "http://chandigarhtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/dollsmuseum"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Accessible building with ramps."
    },
    routePlan: [
      { time: "11:00 AM", activity: "View International Section" },
      { time: "11:30 AM", activity: "View Indian Brides Section" },
      { time: "12:00 PM", activity: "Toy Train Ride (Bal Bhawan)" }
    ],
    foodGuide: [
      { name: "Garg Chaat", type: "Street Food", specialty: "Golgappe", rating: 4.6 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3113,
    name: "Terraced Garden",
    slug: "terraced-garden",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Chrysanthemum Show",
    image: " https://i.pinimg.com/originals/93/6d/92/936d92b4fc68ffeaaf126c073ce359bf.jpg ",
    description: "Spread over 10 acres in Sector 33, this garden is famous for its annual Chrysanthemum Show in December. It features a lighted musical fountain and sloping flower beds.",
    coordinates: { lat: 30.7180, lng: 76.7760 },
    essentials: {
      bestTime: "December (Flower Show)",
      weather: "Sunny",
      timings: "05:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (16 km)",
      nearestRailway: "Chandigarh Junction (9 km)",
      busConnectivity: "Sector 33 is a major residential hub, easy taxi access"
    },
    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/terracedgarden"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved paths available, though some levels require ramps."
    },
    routePlan: [
      { time: "04:00 PM", activity: "Flower Photography" },
      { time: "06:00 PM", activity: "Evening Walk" }
    ],
    foodGuide: [
      { name: "Sector 34 Market", type: "Nearby", specialty: "Fast Food", rating: 4.0 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMCH Sector 32"
    }
  },
  {
    id: 3114,
    name: "Garden of Silence",
    slug: "garden-of-silence",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Meditation Spot",
    image: " https://chandigarhmetro.com/wp-content/uploads/2017/03/Garden-of-Silence-night-chandigarh.jpg ",
    description: "Located at the regulatory end of Sukhna Lake, this meditative space features a massive seated Buddha statue. It marks the end of the Sukhna Lake jogging track.",
    coordinates: { lat: 30.7490, lng: 76.8300 },
    essentials: {
      bestTime: "Early Morning",
      weather: "Peaceful",
      timings: "06:00 AM - 10:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (22 km)",
      nearestRailway: "Chandigarh Junction (6 km)",
      busConnectivity: "Best reached by cab/auto (Bhagwanpura area)"
    },
    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/gardenofsilence"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Flat paved area around the Buddha statue."
    },
    routePlan: [
      { time: "06:00 AM", activity: "Meditation" },
      { time: "07:00 AM", activity: "Lake View Walk" }
    ],
    foodGuide: [
      { name: "Buddha Cafe", type: "Small Stall", specialty: "Tea", rating: 3.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3115,
    name: "Gandhi Bhawan",
    slug: "gandhi-bhawan-pu",
    state: "Chandigarh, Chandigarh",
    category: "Heritage",
    badge: "Modernist Icon",
    image: " https://tse2.mm.bing.net/th/id/OIP.7pS8v4lSm-0YqAC-IxE7GwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3 ",
    description: "Located within Panjab University, this lotus-shaped building designed by Pierre Jeanneret sits in a reflecting pool. It is a stunning example of modernist architecture.",
    coordinates: { lat: 30.7620, lng: 76.7710 },
    essentials: {
      bestTime: "Morning",
      weather: "University Campus",
      timings: "09:00 AM - 05:00 PM (Closed Sat/Sun)",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (22 km)",
      nearestRailway: "Chandigarh Junction (11 km)",
      busConnectivity: "Located inside PU Sector 14, enter via Gate 1 or 2"
    },
    externalLinks: {
      officialBooking: "https://puchd.ac.in/",
      googleMaps: "https://goo.gl/maps/gandhibhawan"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps available to enter the main hall."
    },
    routePlan: [
      { time: "10:00 AM", activity: "Architecture Photography" },
      { time: "10:30 AM", activity: "Visit Student Centre (StuC)" }
    ],
    foodGuide: [
      { name: "Stu C", type: "Campus", specialty: "Shakes & Wraps", rating: 4.8 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "PGIMER (Next door)"
    }
  },
  {
    id: 3116,
    name: "Butterfly Park",
    slug: "butterfly-park",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Eco-Education",
    image: " https://images.squarespace-cdn.com/content/v1/60771a46910322023b7df432/1668533024132-R6DDXAK798RD10AX94WS/linkedin_windler_butterfly_park-04.png ",
    description: "Located in Sector 26, this park is dedicated to the conservation of butterflies. It has host plants that attract over 35 species of butterflies.",
    coordinates: { lat: 30.7380, lng: 76.8080 },
    essentials: {
      bestTime: "March to October (Sunny Days)",
      weather: "Sunny",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (18 km)",
      nearestRailway: "Chandigarh Junction (6 km)",
      busConnectivity: "Near Sector 26 Engineering College"
    },
    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/butterflypark"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Flat grassy paths."
    },
    routePlan: [
      { time: "10:00 AM", activity: "Butterfly Spotting" },
      { time: "11:00 AM", activity: "Nature Walk" }
    ],
    foodGuide: [
      { name: "Sector 26 Restaurants", type: "Fine Dining", specialty: "Multi-Cuisine", rating: 4.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3117,
    name: "Pierre Jeanneret Museum",
    slug: "jeanneret-museum",
    state: "Chandigarh, Chandigarh",
    category: "Heritage",
    badge: "Architect's Home",
    image: " https://th.bing.com/th/id/R.f625fabf17f44e211394b121f5caa4ba?rik=u9PuqV2ZzBO%2b4w&riu=http%3a%2f%2fwww.cristianchironi.it%2fwp-content%2fuploads%2f2018%2f10%2f8-DSC02877-copia-1.jpg&ehk=gOm4bHrj5rZk%2be3Tc51TaRM34YP%2btxXC%2bYynUMroUTM%3d&risl=&pid=ImgRaw&r=0 ",
    description: "The former residence (House No. 57) of Chandigarh's first Chief Architect, Pierre Jeanneret. It has been restored to showcase his furniture designs and living style.",
    coordinates: { lat: 30.7550, lng: 76.8120 },
    essentials: {
      bestTime: "All Year",
      weather: "Indoor",
      timings: "10:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: { Entry: "₹10", Camera: "₹30" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (8 km)",
      busConnectivity: "Located in Sector 5 (VVIP area)"
    },
    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/jeanneretmuseum"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Ground floor is accessible."
    },
    routePlan: [
      { time: "11:00 AM", activity: "Tour of the House" },
      { time: "11:45 AM", activity: "Furniture Gallery" }
    ],
    foodGuide: [
      { name: "Sukhna Lake Club", type: "Members Only", specialty: "Continental", rating: 4.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3118,
    name: "Chandigarh Botanical Garden",
    slug: "botanical-garden-sarangpur",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Massive Flora Park",
    image: " https://th.bing.com/th/id/R.ca9faeda5d1a0d4af37312199cf63285?rik=rI8bQE74lW62Lg&riu=http%3a%2f%2fchandigarhtourism.in%2fimages%2ftourist-places%2fbotanical-garden-chandigarh%2fbotanical-garden-chandigarh-tourism-entry-ticket-price.jpg&ehk=nPrWVYm0E5%2bPv55wZyNO0cVqFazpA44RRAR4%2fOxPoOU%3d&risl=&pid=ImgRaw&r=0 ",
    description: "Located in Sarangpur, this is the largest garden in the region (176 acres). It features sections like Medicinal Plants, Bamboo Grove, and a Lotus pond.",
    coordinates: { lat: 30.7700, lng: 76.7500 },
    essentials: {
      bestTime: "Winter/Spring",
      weather: "Outdoor",
      timings: "04:00 AM - 07:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (25 km)",
      nearestRailway: "Chandigarh Junction (12 km)",
      busConnectivity: "Accessible via auto from PGI/University"
    },
    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/botanical"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Wide paved roads for electric carts and wheelchairs."
    },
    routePlan: [
      { time: "08:00 AM", activity: "Morning Walk" },
      { time: "09:00 AM", activity: "Explore Medicinal Garden" }
    ],
    foodGuide: [
      { name: "Highway Dhabas", type: "Roadside", specialty: "Parathas", rating: 4.0 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "PGIMER Sector 12"
    }
  },
  {
    id: 3119,
    name: "Bougainvillea Garden",
    slug: "bougainvillea-garden",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "War Memorial",
    image: " https://gardenerspath.com/wp-content/uploads/2022/09/Bougainvillea-Growing-on-the-Outside-of-a-Residence-768x512.jpg ",
    description: "A 20-acre garden in Sector 3 exhibiting different varieties of bougainvillea. It also houses the majestic War Memorial dedicated to the Indian Armed Forces.",
    coordinates: { lat: 30.7550, lng: 76.7950 },
    essentials: {
      bestTime: "March to May (Flowering)",
      weather: "Sunny",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (8 km)",
      busConnectivity: "Sector 3 is quiet, best reached by taxi"
    },
    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/bougainvillea"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Flat terrain with paved paths."
    },
    routePlan: [
      { time: "05:00 PM", activity: "Pay Respects at War Memorial" },
      { time: "05:30 PM", activity: "Walk among Flowers" }
    ],
    foodGuide: [
      { name: "Sector 10 Market", type: "Nearby", specialty: "Cafes", rating: 4.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3120,
    name: "ISKCON Temple Chandigarh",
    slug: "iskcon-chandigarh",
    state: "Chandigarh, Chandigarh",
    category: "Heritage",
    badge: "Spiritual Hub",
    image: " https://th.bing.com/th/id/R.864c5ea4c9cee64b1707bc66f3b9dade?rik=tR3q1J%2fkk2Y07w&riu=http%3a%2f%2fchandigarhtourism.in%2fimages%2ftourist-places%2fiskcon-temple-chandigarh%2fiskcon-temple-chandigarh-india-tourism-history.jpg&ehk=W0jm9RpnZpkZUXP6d26LqVJqxK5xuZf6LE%2bPGjfXA7U%3d&risl=&pid=ImgRaw&r=0 ",
    description: "A magnificent temple in Sector 36 dedicated to Lord Krishna. Known for its peaceful atmosphere, beautiful architecture, and the Govinda's restaurant.",
    coordinates: { lat: 30.7280, lng: 76.7580 },
    essentials: {
      bestTime: "Evening Aarti",
      weather: "Indoor/Outdoor",
      timings: "04:30 AM - 12:45 PM, 04:15 PM - 08:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (12 km)",
      busConnectivity: "Sector 36 is well connected"
    },
    externalLinks: {
      officialBooking: "https://iskconchandigarh.com/",
      googleMaps: "https://goo.gl/maps/iskcon"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps and elevators available."
    },
    routePlan: [
      { time: "06:00 PM", activity: "Darshan" },
      { time: "07:00 PM", activity: "Evening Aarti" },
      { time: "08:00 PM", activity: "Dinner at Govinda's" }
    ],
    foodGuide: [
      { name: "Govinda's", type: "Vegetarian", specialty: "Satvik Thali", rating: 4.8 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3121,
    name: "Topiary Park",
    slug: "topiary-park",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Animal Shapes",
    image: " https://th.bing.com/th/id/R.9b686aac6cd40a16a8d542691f0f9ed4?rik=kbVTr8ugNZ62Rg&riu=http%3a%2f%2fwww.mellzah.com%2fwp-content%2fuploads%2f2017%2f12%2fTopiary-Park-3.jpg&ehk=1N%2bpO7Z%2bPCepZP2ctOipC3CJrsMP5CBi1pUX7UnxTYY%3d&risl=&pid=ImgRaw&r=0 ",
    description: "Located in Sector 35, this park is famous for its bushes and creepers artistically shaped into animals like bears, elephants, and birds. Great for kids.",
    coordinates: { lat: 30.7220, lng: 76.7680 },
    essentials: {
      bestTime: "Evening",
      weather: "Outdoor",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (18 km)",
      nearestRailway: "Chandigarh Junction (10 km)",
      busConnectivity: "Sector 35 is a major commercial hub"
    },
    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/topiarypark"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Flat grassy terrain."
    },
    routePlan: [
      { time: "05:00 PM", activity: "Kids Playing" },
      { time: "06:00 PM", activity: "Snacks at Sector 35 Market" }
    ],
    foodGuide: [
      { name: "Gopal's", type: "Sweets", specialty: "Rasmalai", rating: 4.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMCH Sector 32"
    }
  },
  {
    id: 3122,
    name: "Leisure Valley",
    slug: "leisure-valley",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Lungs of the City",
    image: " https://img.traveltriangle.com/blog/wp-content/uploads/2019/06/Chandigarh-cover2.jpg ",
    description: "A continuum of various theme gardens starting from Sector 1 (Rajendra Park) and stretching through Sector 10, 23 to Sector 53. It is perfect for long walks.",
    coordinates: { lat: 30.7480, lng: 76.7920 },
    essentials: {
      bestTime: "Morning/Evening",
      weather: "Outdoor",
      timings: "24 Hours (Safe till 9 PM)",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (8 km)",
      busConnectivity: "Access points in Sector 10, 16, 23"
    },
    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/leisurevalley"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved jogging tracks."
    },
    routePlan: [
      { time: "06:00 AM", activity: "Long Distance Running" },
      { time: "07:00 AM", activity: "Yoga" }
    ],
    foodGuide: [
      { name: "Stop n Stare", type: "Sector 10", specialty: "Coffee", rating: 4.2 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3123,
    name: "Garden of Fragrance",
    slug: "garden-of-fragrance",
    state: "Chandigarh, Chandigarh",
    category: "Nature",
    badge: "Scented Flowers",
    image: " https://www.holidify.com/images/cmsuploads/compressed/GardenOfFragrance-panoramio_20220117135824.jpeg ",
    description: "Located in Sector 36, this garden is planted with aromatic plants like Raat Ki Rani, Jasmine, and Damask Rose. It is very popular for evening walks.",
    coordinates: { lat: 30.7250, lng: 76.7600 },
    essentials: {
      bestTime: "Spring/Evening",
      weather: "Scented Air",
      timings: "05:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh Airport (18 km)",
      nearestRailway: "Chandigarh Junction (11 km)",
      busConnectivity: "Near ISKCON Temple"
    },
    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/fragrancegarden"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved tracks available."
    },
    routePlan: [
      { time: "06:00 PM", activity: "Aromatic Walk" },
      { time: "07:00 PM", activity: "Picnic" }
    ],
    foodGuide: [
      { name: "Sector 36 Market", type: "Local", specialty: "Chinese Food", rating: 4.1 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMCH Sector 32"
    }
  }
];




