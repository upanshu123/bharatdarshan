/**
 * CHHATTISGARH_PLACES DATASET (Extended - 15 Places)
 * ------------------------------------------------------------------
 * Sources: Chhattisgarh Tourism Board & Forest Department
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const CHHATTISGARH_PLACES = [
  {
    id: 601,
    name: "Chitrakote Waterfalls",
    slug: "chitrakote-waterfalls",
    state: "Bastar, Chhattisgarh",
    category: "Nature",
    badge: "The Niagara of India",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/chitrakote-water-falls-jagdalpur-chhattisgarh-1-attr-hero?qlt=82&ts=1727011277081",
    description: "The widest waterfall in India, spanning 300 meters during the monsoon. Located on the Indravati River, its horseshoe shape and roaring waters create a misty spectacle, especially at sunset.",
    coordinates: { lat: 19.2059, lng: 81.7063 },
    essentials: {
      bestTime: "July to October (Monsoon View)",
      weather: "Humid/Misty",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free", Boating: "₹50-100", Parking: "₹20" }
    },
    transport: { nearestAirport: "Jagdalpur (40 km)", nearestRailway: "Jagdalpur (38 km)", busConnectivity: "Buses available from Jagdalpur city" },
    externalLinks: { officialBooking: "https://www.chhattisgarhtourism.in/", googleMaps: "https://goo.gl/maps/chitrakote" },
    accessibility: { wheelchairFriendly: true, notes: "Upper bank viewpoints are paved. Steps to river are steep." },
    routePlan: [ { time: "08:00 AM", activity: "Viewpoint Photography" }, { time: "04:00 PM", activity: "Boat Ride to base" } ],
    foodGuide: [ { name: "Dandami Luxury Resort", type: "Resort", specialty: "Bastar Tribal Thali", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Medical College Jagdalpur" }
  },
  {
    id: 602,
    name: "Tirathgarh Waterfalls",
    slug: "tirathgarh-waterfalls",
    state: "Bastar, Chhattisgarh",
    category: "Nature",
    badge: "White Milk Fall",
    image: "https://unexploredbastar.com/wp-content/uploads/2016/08/Tirathgarh_waterfalls_optimized.jpeg",
    description: "Located inside Kanger Valley National Park, this stunning waterfall splits into multiple streams as it cascades down 300 feet over tiered limestone steps.",
    coordinates: { lat: 18.9137, lng: 81.8653 },
    essentials: {
      bestTime: "October to March",
      weather: "Forest/Cool",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "₹25 (Park)", Vehicle: "₹50", Camera: "₹50" }
    },
    transport: { nearestAirport: "Jagdalpur (35 km)", nearestRailway: "Jagdalpur (35 km)", busConnectivity: "Private taxis recommended" },
    externalLinks: { officialBooking: "https://www.chhattisgarhtourism.in/", googleMaps: "https://goo.gl/maps/tirathgarh" },
    accessibility: { wheelchairFriendly: false, notes: "Requires descending a long flight of stairs." },
    routePlan: [ { time: "09:00 AM", activity: "Descent to Lower Falls" }, { time: "11:00 AM", activity: "Shiva Temple Visit" } ],
    foodGuide: [ { name: "Park Canteen", type: "Basic", specialty: "Maggi & Tea", rating: 3.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Jagdalpur" }
  },
  {
    id: 603,
    name: "Bhoramdeo Temple",
    slug: "bhoramdeo-temple",
    state: "Kabirdham, Chhattisgarh",
    category: "Heritage",
    badge: "Khajuraho of Chhattisgarh",
    image: "https://chhattisgarhtourism.co.in/destinations/bhoramdeo_temple.jpg",
    description: "An 11th-century temple complex dedicated to Lord Shiva, famous for its exquisite erotic carvings and Nagara style architecture, resembling the temples of Khajuraho.",
    coordinates: { lat: 22.1123, lng: 81.1554 },
    essentials: {
      bestTime: "Winter (March for Mahotsav)",
      weather: "Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Raipur (135 km)", nearestRailway: "Raipur (130 km)", busConnectivity: "Buses to Kawardha (18 km away)" },
    externalLinks: { officialBooking: "https://kawardha.gov.in/", googleMaps: "https://goo.gl/maps/bhoramdeo" },
    accessibility: { wheelchairFriendly: true, notes: "Temple courtyard is accessible." },
    routePlan: [ { time: "08:00 AM", activity: "Architecture Tour" }, { time: "11:30 AM", activity: "Cherki Mahal Visit" } ],
    foodGuide: [ { name: "Kawardha Palace", type: "Heritage", specialty: "Royal Lunch", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Kawardha" }
  },
  {
    id: 604,
    name: "Sirpur Heritage Site",
    slug: "sirpur-heritage-site",
    state: "Mahasamund, Chhattisgarh",
    category: "Heritage",
    badge: "Ancient Buddhist Hub",
    image: "https://drishtiias.com/images/uploads/1763378311_Lakshmana%20Temple,%20Sirpur.png",
    description: "Located on the banks of Mahanadi, Sirpur is an archaeological wonder from the 5th-8th century AD. It features the Lakshman Temple (brick temple), Buddhist Viharas, and Jain monuments.",
    coordinates: { lat: 21.3435, lng: 82.1793 },
    essentials: {
      bestTime: "January to March",
      weather: "Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestAirport: "Raipur (80 km)", nearestRailway: "Mahasamund (40 km)", busConnectivity: "Direct buses from Raipur" },
    externalLinks: { officialBooking: "https://www.chhattisgarhtourism.in/", googleMaps: "https://goo.gl/maps/sirpur" },
    accessibility: { wheelchairFriendly: true, notes: "Main Lakshman Temple grounds are flat." },
    routePlan: [ { time: "09:00 AM", activity: "Lakshman Temple Visit" }, { time: "10:30 AM", activity: "Buddhist Vihara" } ],
    foodGuide: [ { name: "Hi-Way Retreat", type: "Motel", specialty: "Chana Samosa", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Mahasamund" }
  },
  {
    id: 605,
    name: "Kanger Valley National Park",
    slug: "kanger-valley",
    state: "Bastar, Chhattisgarh",
    category: "Wildlife",
    badge: "Home of Hill Myna",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/47/df/43/20161012-102034-largejpg.jpg?w=1200&h=1200&s=1",
    description: "A biodiversity hotspot known for its dense Sal forests, limestone caves (Kutumsar & Kailash), and the Bastar Hill Myna. The Kutumsar Cave features natural stalactite formations.",
    coordinates: { lat: 18.8778, lng: 81.9965 },
    essentials: {
      bestTime: "November to June",
      weather: "Forest",
      timings: "08:00 AM - 04:00 PM (Caves closed in Monsoon)",
      entryFee: { Entry: "₹50", Vehicle: "₹100", Guide: "₹200" }
    },
    transport: { nearestAirport: "Jagdalpur (27 km)", nearestRailway: "Jagdalpur (27 km)", busConnectivity: "Taxis required for entry" },
    externalLinks: { officialBooking: "https://kvnp.in/", googleMaps: "https://goo.gl/maps/kanger" },
    accessibility: { wheelchairFriendly: false, notes: "Caves involve narrow vertical descents." },
    routePlan: [ { time: "09:00 AM", activity: "Cave Exploration" }, { time: "02:00 PM", activity: "Bird Watching" } ],
    foodGuide: [ { name: "Forest Canteen", type: "Basic", specialty: "Tea", rating: 3.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Medical College Jagdalpur" }
  },
  {
    id: 606,
    name: "Barnawapara Wildlife Sanctuary",
    slug: "barnawapara",
    state: "Mahasamund, Chhattisgarh",
    category: "Wildlife",
    badge: "Bison & Leopard Spotting",
    image: "https://www.chhattisgarhtourism.co.in/photo_gallery/barnawapara_wildlife_sanctuary/02.jpg",
    description: "A relatively flat terrain sanctuary famous for frequent sightings of Indian Gaur (Bison), Leopards, and Sloth Bears. One of the most popular wildlife destinations in the state.",
    coordinates: { lat: 21.3995, lng: 82.4168 },
    essentials: {
      bestTime: "November to June",
      weather: "Dry/Hot",
      timings: "06:00 AM - 10:00 AM, 03:00 PM - 06:00 PM",
      entryFee: { Entry: "₹50", Gypsy: "₹2000-2500", Guide: "₹300" }
    },
    transport: { nearestAirport: "Raipur (100 km)", nearestRailway: "Mahasamund (60 km)", busConnectivity: "Connected via Pithora NH-53" },
    externalLinks: { officialBooking: "https://www.chhattisgarhtourism.in/", googleMaps: "https://goo.gl/maps/barnawapara" },
    accessibility: { wheelchairFriendly: false, notes: "Gypsy vehicles require climbing." },
    routePlan: [ { time: "06:00 AM", activity: "Morning Safari" }, { time: "04:00 PM", activity: "Nature Walk" } ],
    foodGuide: [ { name: "Hareli Eco Resort", type: "Resort", specialty: "Buffet Meals", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Kasdol" }
  },
  {
    id: 607,
    name: "Mainpat",
    slug: "mainpat",
    state: "Surguja, Chhattisgarh",
    category: "Hill Stations",
    badge: "Shimla of Chhattisgarh",
    image: "https://trippyhills.in/wp-content/uploads/2022/03/Jal-Pari-Point-Lucky-Musafir_copy_900x600.jpg",
    description: "A plateau in the Surguja district, known for its cool climate, Tibetan settlements, and the unique 'Ulta Pani' (gravity-defying stream) and bouncing earth (Jaljali).",
    coordinates: { lat: 22.8256, lng: 83.2925 },
    essentials: {
      bestTime: "September to March",
      weather: "Cool/Misty",
      timings: "24 Hours (Daylight for views)",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Ambikapur (50 km)", nearestRailway: "Ambikapur (55 km)", busConnectivity: "Buses available from Ambikapur" },
    externalLinks: { officialBooking: "https://surguja.gov.in/", googleMaps: "https://goo.gl/maps/mainpat" },
    accessibility: { wheelchairFriendly: true, notes: "Tibetan temple is accessible." },
    routePlan: [ { time: "09:00 AM", activity: "Tibetan Monastery" }, { time: "03:00 PM", activity: "Jaljali Experience" } ],
    foodGuide: [ { name: "Tibetan Camp Stalls", type: "Street", specialty: "Momos", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Medical College Ambikapur" }
  },
  {
    id: 608,
    name: "Dongargarh (Maa Bamleshwari)",
    slug: "dongargarh",
    state: "Rajnandgaon, Chhattisgarh",
    category: "Spiritual",
    badge: "Hilltop Shakti Peeth",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/40/36/7f/choti-bambleshwari-devi.jpg?w=1200&h=1200&s=1",
    description: "A major pilgrimage center featuring a hilltop temple dedicated to Maa Bamleshwari, accessible via 1000 steps or a ropeway with mesmerizing views.",
    coordinates: { lat: 21.1887, lng: 80.7601 },
    essentials: {
      bestTime: "Navratri or Winter",
      weather: "Windy",
      timings: "04:00 AM - 10:00 PM",
      entryFee: { Entry: "Free", Ropeway: "₹100", VIPDarshan: "₹200" }
    },
    transport: { nearestAirport: "Raipur (100 km)", nearestRailway: "Dongargarh (2 km)", busConnectivity: "Frequent trains on Mumbai-Howrah route" },
    externalLinks: { officialBooking: "https://dongargarh.gov.in/", googleMaps: "https://goo.gl/maps/dongargarh" },
    accessibility: { wheelchairFriendly: true, notes: "Ropeway cabins can accommodate folded wheelchairs." },
    routePlan: [ { time: "07:00 AM", activity: "Ropeway to Temple" }, { time: "09:00 AM", activity: "Darshan" } ],
    foodGuide: [ { name: "Prasadalaya", type: "Pilgrim", specialty: "Temple Bhog", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Dongargarh" }
  },
  {
    id: 609,
    name: "Gangrel Dam",
    slug: "gangrel-dam",
    state: "Dhamtari, Chhattisgarh",
    category: "Nature",
    badge: "Mini Goa",
    image: "https://portal-tourism.cgstate.gov.in/files/gangrel-bandh-image.webp",
    description: "Built across the Mahanadi River, Gangrel is a massive reservoir known for its water sports complex, islands, and eco-tourism cottages.",
    coordinates: { lat: 20.6139, lng: 81.5459 },
    essentials: {
      bestTime: "August to February",
      weather: "Coastal/Breezy",
      timings: "08:00 AM - 06:30 PM",
      entryFee: { Entry: "Free", SpeedBoat: "₹300", JetSki: "₹500" }
    },
    transport: { nearestAirport: "Raipur (80 km)", nearestRailway: "Dhamtari (15 km)", busConnectivity: "Auto/Taxi from Dhamtari" },
    externalLinks: { officialBooking: "https://www.chhattisgarhtourism.in/", googleMaps: "https://goo.gl/maps/gangrel" },
    accessibility: { wheelchairFriendly: true, notes: "Resort areas and viewing decks are paved." },
    routePlan: [ { time: "03:00 PM", activity: "Water Sports" }, { time: "05:00 PM", activity: "Sunset Boat Ride" } ],
    foodGuide: [ { name: "Barda Eco Resort", type: "Resort", specialty: "Fish Curry", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Christian Hospital Dhamtari" }
  },
  {
    id: 610,
    name: "Achanakmar Tiger Reserve",
    slug: "achanakmar",
    state: "Bilaspur, Chhattisgarh",
    category: "Wildlife",
    badge: "Biosphere Reserve",
    image: "https://www.chhattisgarhtourism.co.in/photo_gallery/achanakmar_tiger/01.jpg",
    description: "Part of the huge Biosphere Reserve, this dense forest connects to Kanha National Park and is home to Tigers, Bison, and Giant Squirrels.",
    coordinates: { lat: 22.5186, lng: 81.7607 },
    essentials: {
      bestTime: "November to June",
      weather: "Forest/Cool",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Entry: "₹50", Gypsy: "₹2500", Guide: "₹300" }
    },
    transport: { nearestAirport: "Bilaspur (55 km)", nearestRailway: "Belgahana (35 km)", busConnectivity: "Via Bilaspur-Amarkantak road" },
    externalLinks: { officialBooking: "https://forest.cg.gov.in/", googleMaps: "https://goo.gl/maps/achanakmar" },
    accessibility: { wheelchairFriendly: false, notes: "Uneven terrain and high vehicles." },
    routePlan: [ { time: "06:00 AM", activity: "Jungle Safari" }, { time: "11:00 AM", activity: "Forest Rest House" } ],
    foodGuide: [ { name: "Shiv Tarang Resort", type: "Resort", specialty: "Veg Thali", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Apollo Hospital Bilaspur" }
  },
  {
    id: 611,
    name: "Rajim (Triveni Sangam)",
    slug: "rajim",
    state: "Gariaband, Chhattisgarh",
    category: "Spiritual",
    badge: "Prayag of CG",
    image: "https://content3.jdmagicbox.com/comp/raipur-chhattisgarh/m4/9999px771.x771.220321225233.z8m4/catalogue/rajim-triveni-sangam-nawapara-rajim-raipur-chhattisgarh-museums-DfJYhHHAwq.jpg",
    description: "The holy confluence of Mahanadi, Pairi, and Sondur rivers. Hosts the ancient Rajiv Lochan Temple and Kuleshwar Mahadev on a river island.",
    coordinates: { lat: 20.9650, lng: 81.8817 },
    essentials: {
      bestTime: "Nov to Feb",
      weather: "Pleasant",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Raipur (45 km)", nearestRailway: "Mahasamund (25 km)", busConnectivity: "Frequent buses from Raipur" },
    externalLinks: { officialBooking: "https://gariaband.gov.in/", googleMaps: "https://goo.gl/maps/rajimsangam" },
    accessibility: { wheelchairFriendly: true, notes: "Main town access is good." },
    routePlan: [ { time: "08:00 AM", activity: "Temple Darshan" }, { time: "10:00 AM", activity: "River Island Visit" } ],
    foodGuide: [ { name: "Local Bhojanalaya", type: "Pilgrim", specialty: "Veg Thali", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Rajim" }
  },
  {
    id: 612,
    name: "Danteshwari Temple",
    slug: "danteshwari",
    state: "Dantewada, Chhattisgarh",
    category: "Spiritual",
    badge: "52 Shakti Peethas",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/danteshwari-temple-jagdalpur-chhattisgarh-attr-hero-3?qlt=82&ts=1727011274516",
    description: "A 14th-century temple dedicated to Goddess Danteshwari, the presiding deity of Bastar. Located at the confluence of Shankini and Dhankini rivers.",
    coordinates: { lat: 18.8966, lng: 81.3451 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "06 AM-1 PM, 4 PM-7:15 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Jagdalpur (80 km)", nearestRailway: "Dantewada (5 km)", busConnectivity: "Buses from Jagdalpur" },
    externalLinks: { officialBooking: "http://www.maadanteshwari.in/", googleMaps: "https://goo.gl/maps/danteshwaritemple" },
    accessibility: { wheelchairFriendly: true, notes: "Courtyard is accessible." },
    routePlan: [ { time: "07:00 AM", activity: "Aarti & Darshan" }, { time: "09:00 AM", activity: "River Confluence" } ],
    foodGuide: [ { name: "Prasadalaya", type: "Pilgrim", specialty: "Temple Bhog", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Dantewada" }
  },
  {
    id: 613,
    name: "Mahant Ghasidas Memorial Museum",
    slug: "ghasidas-museum",
    state: "Raipur, Chhattisgarh",
    category: "Heritage",
    badge: "Oldest Museum in CG",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/mahant-ghasi-memorial-museum-raipur-chhattisgarh-1-attr-hero?qlt=82&ts=1727011191956",
    description: "Established in 1875, houses artifacts of Chhattisgarh history, archaeology, tribal artifacts, and natural history.",
    coordinates: { lat: 21.2405, lng: 81.6375 },
    essentials: {
      bestTime: "Year-round",
      weather: "Indoor/AC",
      timings: "10:30 AM - 04:30 PM (Closed Tue)",
      entryFee: { Adult: "₹10", Child: "₹5" }
    },
    transport: { nearestAirport: "Raipur (15 km)", nearestRailway: "Raipur Jn (2 km)", busConnectivity: "Centrally located in Raipur" },
    externalLinks: { googleMaps: "https://goo.gl/maps/ghasidasmuseum" },
    accessibility: { wheelchairFriendly: true, notes: "Ground floor is accessible." },
    routePlan: [ { time: "10:30 AM", activity: "Gallery Tour" }, { time: "01:30 PM", activity: "Traditional Lunch" } ],
    foodGuide: [ { name: "Gadhkalewa", type: "Traditional", specialty: "Fara, Bafauri", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "D.K. Hospital Raipur" }
  },
  {
    id: 614,
    name: "Indravati National Park",
    slug: "indravati-park",
    state: "Bijapur, Chhattisgarh",
    category: "Wildlife",
    badge: "Wild Buffalo Habitat",
    image: "https://www.atithiontrip.com/images/banner15855358763.jpg",
    description: "One of the two Tiger Reserves in CG and only habitat of rare Wild Water Buffalo. Offers dense forest safaris.",
    coordinates: { lat: 19.3333, lng: 82.0000 },
    essentials: {
      bestTime: "October to May",
      weather: "Forest",
      timings: "06:00 AM - 10:00 AM",
      entryFee: { Indian: "₹50", Jeep: "₹1200" }
    },
    transport: { nearestRailway: "Jagdalpur (104 km)", busConnectivity: "Taxi required from Jagdalpur" },
    externalLinks: { officialBooking: "https://forest.cg.gov.in/", googleMaps: "https://goo.gl/maps/indravatipark" },
    accessibility: { wheelchairFriendly: false, notes: "Open-top jeep safaris." },
    routePlan: [ { time: "06:00 AM", activity: "Jungle Safari" } ],
    foodGuide: [ { name: "Forest Canteen", type: "Basic", specialty: "Indian Meals", rating: 3.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Bijapur" }
  },
  {
    id: 615,
    name: "Udanti Sitanadi Tiger Reserve",
    slug: "udanti-sitanadi",
    state: "Gariaband, Chhattisgarh",
    category: "Wildlife",
    badge: "Tiger & Wild Buffalo",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Deep_Forest_at_Sitanadi_Wildlife_Sanctuary_of_Chattisgharh.jpg",
    description: "A major Tiger Reserve formed by merging Udanti and Sitanadi. Conservation site for Bengal Tiger and Wild Water Buffalo.",
    coordinates: { lat: 20.1856, lng: 81.9361 },
    essentials: {
      bestTime: "November to June",
      weather: "Forest",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Entry: "₹50", Gypsy: "₹2500" }
    },
    transport: { nearestAirport: "Raipur (165 km)", busConnectivity: "Buses to Gariaband" },
    externalLinks: { officialBooking: "https://udantisitanaditigerreserve.in/", googleMaps: "https://goo.gl/maps/udantisitanadi" },
    accessibility: { wheelchairFriendly: false, notes: "Rough jungle terrain." },
    routePlan: [ { time: "06:00 AM", activity: "Morning Safari" } ],
    foodGuide: [ { name: "Forest Rest House", type: "Basic", specialty: "Local Food", rating: 3.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Gariaband" }
  }
];

