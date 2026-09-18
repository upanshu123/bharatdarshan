/**
 * JHARKHAND_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Jharkhand Tourism & Forest Department
 * - Pilgrimage: Panda Dharma Rakshini Sabha (Deoghar) & Shikharji Trust
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const JHARKHAND_PLACES = [
  // --- SPIRITUAL ---
  {
    id: 1101,
    name: "Baidyanath Dham (Deoghar)",
    slug: "baidyanath-dham",
    state: "Jharkhand",
    category: "Spiritual",
    badge: "12 Jyotirlingas",
    image: " https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/11/Best-Time-to-Visit-Baba-Baidyanath-Temple.jpg ",
    description: "One of the twelve Jyotirlingas, this ancient temple complex is dedicated to Lord Shiva. It is the center of the massive Shravani Mela, where millions of pilgrims bring holy water from Sultanganj.",
    coordinates: { lat: 24.4922, lng: 86.6999 },

    essentials: {
      bestTime: "October to March (Shravani Mela in July-Aug is crowded)",
      weather: "Warm/Humid",
      timings: "04:00 AM - 09:00 PM (Darshan timings vary)",
      entryFee: {
        General: "Free",
        SheeghraDarshan: "₹500 (VIP Pass)"
      }
    },

    transport: {
      nearestAirport: "Deoghar Airport (DGH) - 8 km",
      nearestRailway: "Jasidih Junction (8 km)",
      busConnectivity: "Regular buses from Ranchi, Patna, and Kolkata"
    },

    externalLinks: {
      officialBooking: "https://babadham.org/",
      googleMaps: "https://goo.gl/maps/deoghar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The outer complex is paved and accessible. However, the inner sanctum is crowded and has a high threshold."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Morning Jalabhishek" },
      { time: "09:00 AM", activity: "Visit Naulakha Mandir" },
      { time: "11:00 AM", activity: "Tapovan Caves Exploration" }
    ],

    foodGuide: [
      { name: "Belan Bazar Sweets", type: "City", specialty: "Deoghar Peda (Prasad)", rating: 4.8 },
      { name: "Hotel Mahadev", type: "Family", specialty: "Veg Thali", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-657",
      nearestHospital: "Sadar Hospital Deoghar"
    }
  },
  {
    id: 1102,
    name: "Parasnath Hills (Sammed Shikharji)",
    slug: "parasnath-hills",
    state: "Jharkhand",
    category: "Spiritual",
    badge: "Highest Peak in Jharkhand",
    image: " https://www.observerdawn.com/assets/Parashnath%203.jpg ",
    description: "The holiest pilgrimage site for Jains, where 20 of the 24 Tirthankaras attained salvation. The trek to the summit (4,470 ft) offers breathtaking views of the surrounding forests.",
    coordinates: { lat: 23.9554, lng: 86.1245 },

    essentials: {
      bestTime: "October to March",
      weather: "Cool/Windy",
      timings: "24 Hours (Trek usually starts at 3 AM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Deoghar (80 km) or Ranchi (190 km)",
      nearestRailway: "Parasnath Station (20 km)",
      busConnectivity: "Buses available to Madhuban (Base camp)"
    },

    externalLinks: {
      officialBooking: "https://jharkhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/parasnath"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep 9km uphill trek. Doli (palanquin) service available for elderly/disabled (₹2500-4000)."
    },

    routePlan: [
      { time: "03:00 AM", activity: "Start Trek from Madhuban" },
      { time: "07:00 AM", activity: "Reach Summit (Jal Mandir)" },
      { time: "01:00 PM", activity: "Return to Base" }
    ],

    foodGuide: [
      { name: "Madhuban Bhojanalaya", type: "Pilgrim", specialty: "Jain Satvik Meal", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-657",
      nearestHospital: "Primary Health Center Madhuban"
    }
  },

  // --- WILDLIFE & NATURE ---
  {
    id: 1103,
    name: "Betla National Park",
    slug: "betla-national-park",
    state: "Jharkhand",
    category: "Wildlife",
    badge: "One of India's First Tiger Reserves",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/Cycling-Routes-around-Ranchi9-popular?qlt=82&ts=1726723858689 ",
    description: "Located in the Palamau district, Betla is famous for its rich biodiversity including tigers, elephants, and bison. Inside the park stand the historic 16th-century Palamau Forts.",
    coordinates: { lat: 23.8827, lng: 84.1852 },

    essentials: {
      bestTime: "November to March",
      weather: "Forest",
      timings: "06:00 AM - 05:00 PM (Closed in Monsoon)",
      entryFee: {
        Entry: "₹100 (Indian)",
        JeepSafari: "₹1200-1500",
        Guide: "₹200"
      }
    },

    transport: {
      nearestAirport: "Ranchi (170 km)",
      nearestRailway: "Daltonganj (25 km)",
      busConnectivity: "Buses available from Ranchi and Daltonganj"
    },

    externalLinks: {
      officialBooking: "https://palamautigerreserve.in/",
      googleMaps: "https://goo.gl/maps/betla"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Jeep safaris are not wheelchair accessible. The area around the Palamau Fort ruins is uneven."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Morning Jungle Safari" },
      { time: "10:00 AM", activity: "Visit Palamau Forts (Inside Park)" },
      { time: "02:00 PM", activity: "Nature Walk near Kamaldah Lake" }
    ],

    foodGuide: [
      { name: "Van Vihar (Tourist Lodge)", type: "Govt Lodge", specialty: "Simple Meals", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-657",
      nearestHospital: "Sadar Hospital Daltonganj"
    }
  },
  {
    id: 1104,
    name: "Hundru Falls",
    slug: "hundru-falls",
    state: "Jharkhand",
    category: "Nature",
    badge: "320 ft Drop",
    image: " https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/08/IMG_7203.jpeg?resize=1024%2C768&ssl=1 ",
    description: "One of the highest waterfalls in the state, created by the Subarnarekha River cascading down 98 meters. The base forms a pool often used for bathing, surrounded by spectacular rock formations.",
    coordinates: { lat: 23.4447, lng: 85.6540 },

    essentials: {
      bestTime: "July to February (Best flow in Monsoon)",
      weather: "Humid",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "₹10" }
    },

    transport: {
      nearestAirport: "Ranchi (45 km)",
      nearestRailway: "Ranchi Junction (45 km)",
      busConnectivity: "Hire a taxi/auto from Ranchi city"
    },

    externalLinks: {
      officialBooking: "https://jharkhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/hundru"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires descending approx 750 steps to reach the base of the falls. Very difficult for elderly."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Drive via Sikidiri scenic route" },
      { time: "10:30 AM", activity: "Descent to Waterfall Base" },
      { time: "01:00 PM", activity: "Picnic at Viewpoints" }
    ],

    foodGuide: [
      { name: "Local Parking Stalls", type: "Street", specialty: "Dhuska & Tea", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-657",
      nearestHospital: "RIMS Ranchi (40 km)"
    }
  },

  // --- SCENIC & LEISURE ---
  {
    id: 1105,
    name: "Patratu Valley",
    slug: "patratu-valley",
    state: "Jharkhand",
    category: "Nature",
    badge: "Scenic S-Curve Roads",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/ranchi/mmt/activities/m_activities_ranchi_patratu_valley_l_382_442.jpg ",
    description: "Famous for its mesmerizing winding roads that offer panoramic views of the Patratu Dam. It is a popular driving destination and offers boating facilities at the dam reservoir.",
    coordinates: { lat: 23.6332, lng: 85.2934 },

    essentials: {
      bestTime: "All Year",
      weather: "Breezy",
      timings: "Sunrise to Sunset (Dam Boating: 9 AM - 5 PM)",
      entryFee: {
        Valley: "Free",
        Boating: "₹200-500"
      }
    },

    transport: {
      nearestAirport: "Ranchi (35 km)",
      nearestRailway: "Ranchi Junction (35 km)",
      busConnectivity: "Buses available, but private car/bike recommended for the drive"
    },

    externalLinks: {
      officialBooking: "https://jharkhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/patratu"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Viewpoints along the road are paved. The dam complex is flat and accessible."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Drive through S-Curves" },
      { time: "05:00 PM", activity: "Boating at Patratu Dam" },
      { time: "06:30 PM", activity: "Sunset from Hill Top Viewpoint" }
    ],

    foodGuide: [
      { name: "Patratu Lake Resort", type: "Resort", specialty: "Buffet Lunch", rating: 4.2 },
      { name: "Highway Dhabas", type: "Dhaba", specialty: "Chicken Curry", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-657",
      nearestHospital: "Local Clinics Patratu"
    }
  },
  {
    id: 1106,
    name: "Dassam Falls",
    slug: "dassam-falls",
    state: "Jharkhand",
    category: "Nature",
    badge: "10 Streams Waterfall",
    image: " https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Dassam_falls.jpg/1200px-Dassam_falls.jpg ",
    description: "A stunning waterfall where the Kanchi River falls from a height of 144 feet. The name 'Dassam' comes from 'Da:Song' meaning water pouring like 10 streams.",
    coordinates: { lat: 23.1425, lng: 85.4568 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "₹10" }
    },

    transport: {
      nearestAirport: "Ranchi (40 km)",
      nearestRailway: "Ranchi Junction (40 km)",
      busConnectivity: "Located on Ranchi-Jamshedpur Highway (NH-33), accessible by taxi"
    },

    externalLinks: {
      officialBooking: "https://jharkhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/dassam"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires climbing down approx 300 steps. Swimming is strictly prohibited due to currents."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Arrival & View from Top" },
      { time: "11:00 AM", activity: "Steps down to River Bed" },
      { time: "01:00 PM", activity: "Photography" }
    ],

    foodGuide: [
      { name: "Parking Area Stalls", type: "Basic", specialty: "Maggie & Chips", rating: 3.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-657",
      nearestHospital: "Bundu Sub-Divisional Hospital"
    }
  },

  // --- HERITAGE ---
  {
    id: 1107,
    name: "Maluti Temples",
    slug: "maluti-temples",
    state: "Jharkhand",
    category: "Heritage",
    badge: "Village of Terracotta Temples",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfcj0_bikAT1V-riopnSyEiEfat6byA6mrA&s ",
    description: "A hidden gem in Dumka district featuring a cluster of 72 extant terracotta temples (originally 108) built between the 17th and 19th centuries, depicting scenes from Ramayana.",
    coordinates: { lat: 24.1622, lng: 87.6766 },

    essentials: {
      bestTime: "October to March",
      weather: "Rural/Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Kazi Nazrul Islam Airport, Durgapur (100 km)",
      nearestRailway: "Rampurhat (15 km)",
      busConnectivity: "Auto/Taxi from Rampurhat (West Bengal border)"
    },

    externalLinks: {
      officialBooking: "https://jharkhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/maluti"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Village roads are narrow and unpaved. Exploring the scattered temples requires walking."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Explore Temple Architecture" },
      { time: "12:00 PM", activity: "Visit Maulixia Mata Temple" },
      { time: "02:00 PM", activity: "Village Walk" }
    ],

    foodGuide: [
      { name: "Local Sweet Shops", type: "Village", specialty: "Sweets", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-657",
      nearestHospital: "Rampurhat Govt Hospital (WB)"
    }
  },

  // --- CITY & PARKS ---
  {
    id: 1108,
    name: "Jubilee Park",
    slug: "jubilee-park-jamshedpur",
    state: "Jharkhand",
    category: "Nature",
    badge: "Mughal Gardens of Jamshedpur",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e2/a5/9a/jubilee-park.jpg?w=1200&h=-1&s=1 ",
    description: "Modeled after the Brindavan Gardens of Mysore, this 200-acre park lies in the heart of the Steel City. It features fountains, a zoo, and a laser show.",
    coordinates: { lat: 22.8122, lng: 86.1855 },

    essentials: {
      bestTime: "Winter (Founder's Day - March 3 is spectacular)",
      weather: "Pleasant",
      timings: "05:00 AM - 09:00 PM (Zoo closes at 5 PM)",
      entryFee: {
        Park: "Free",
        Zoo: "₹30",
        Vehicle: "₹10"
      }
    },

    transport: {
      nearestAirport: "Ranchi (130 km) or Sonari (City)",
      nearestRailway: "Tatanagar Junction (6 km)",
      busConnectivity: "Located in Bistupur, well connected by city auto"
    },

    externalLinks: {
      officialBooking: "https://jharkhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/jubileepark"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved pathways throughout the park. The zoo is also accessible."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Tata Steel Zoological Park" },
      { time: "05:00 PM", activity: "Jayanti Sarovar Lake" },
      { time: "06:30 PM", activity: "Musical Fountain & Laser Show" }
    ],

    foodGuide: [
      { name: "Brubeck Bakery", type: "Bakery", specialty: "Pastries", rating: 4.6 },
      { name: "Novelty Restaurant", type: "City", specialty: "South Indian", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-657",
      nearestHospital: "Tata Main Hospital (TMH)"
    }
  },
  {
    id: 1109,
    name: "Dalma Wildlife Sanctuary",
    slug: "dalma-wildlife-sanctuary",
    state: "Jharkhand",
    category: "Wildlife",
    badge: "Elephant Paradise",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb05ABWD3n8lUwhVHzAfsk3AkESIHtAU-8yg&s ",
    description: "Overlooking the city of Jamshedpur, the Dalma hills are famous for herds of migrating elephants. The sanctuary also houses a Shiva temple at the peak offering city views.",
    coordinates: { lat: 22.8959, lng: 86.2234 },

    essentials: {
      bestTime: "October to March",
      weather: "Cool/Forest",
      timings: "06:00 AM - 04:00 PM (Entry)",
      entryFee: {
        Entry: "₹50",
        Car: "₹200",
        Cottage: "₹1500+"
      }
    },

    transport: {
      nearestAirport: "Ranchi (120 km)",
      nearestRailway: "Tatanagar (15 km)",
      busConnectivity: "Hire a sturdy SUV from Jamshedpur for the hill climb"
    },

    externalLinks: {
      officialBooking: "https://forest.jharkhand.gov.in/",
      googleMaps: "https://goo.gl/maps/dalma"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep winding roads. Temple at top has steps."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Drive up the Ghats" },
      { time: "09:00 AM", activity: "Dalma Mai Temple" },
      { time: "11:00 AM", activity: "Museum & Deer Park" }
    ],

    foodGuide: [
      { name: "Dalma Cafeteria", type: "Basic", specialty: "Snacks", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-657",
      nearestHospital: "TMH Jamshedpur"
    }
  },
  {
    id: 1110,
    name: "Jonha Falls",
    slug: "jonha-falls",
    state: "Jharkhand",
    category: "Nature",
    badge: "Gautam Dhara",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiumTNIRv9rR7Z2Dk8IU-mhdFg0BG0E2FJkg&s ",
    description: "Also known as Gautam Dhara, it is believed Lord Buddha bathed here. The falls descend in steps, and a Buddhist temple is located nearby.",
    coordinates: { lat: 23.4243, lng: 85.6133 },

    essentials: {
      bestTime: "August to February",
      weather: "Pleasant",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "₹10" }
    },

    transport: {
      nearestAirport: "Ranchi (40 km)",
      nearestRailway: "Jonha Station (2 km)",
      busConnectivity: "Accessible by train from Ranchi or taxi"
    },

    externalLinks: {
      officialBooking: "https://jharkhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/jonha"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires walking down approx 500 steps. There is a train station very close to the falls."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Visit Buddha Temple" },
      { time: "11:00 AM", activity: "Walk down to Waterfall" },
      { time: "01:00 PM", activity: "Lunch at Resort" }
    ],

    foodGuide: [
      { name: "Jonha Tourism Complex", type: "Govt Resort", specialty: "Thali", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-657",
      nearestHospital: "Local PHC Jonha"
    }
  }
];
