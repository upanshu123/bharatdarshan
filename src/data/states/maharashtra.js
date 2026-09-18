/**
 * MAHARASHTRA_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources: Maharashtra Tourism (MTDC), ASI, Forest Dept.
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const MAHARASHTRA_PLACES = [
  // --- HERITAGE & UNESCO ---
  {
    id: 1501,
    name: "Ajanta Caves",
    slug: "ajanta-caves",
    state: "Sambhaji Nagar, Maharashtra",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ajanta_Caves_View_from_Viewpoint.jpg/800px-Ajanta_Caves_View_from_Viewpoint.jpg",
    description: "30 rock-cut Buddhist cave monuments dating from the 2nd century BC. Famous for masterpiece paintings and sculptures.",
    coordinates: { lat: 20.5522, lng: 75.7482 },
    essentials: { 
      bestTime: "June to March", 
      timings: "09:00 AM - 05:00 PM (Closed Mondays)", 
      entryFee: { Indian: "₹40", Foreigner: "₹600" } 
    },
    transport: { nearestAirport: "Aurangabad (100 km)", nearestRailway: "Jalgaon (60 km)" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/ajanta" },
    accessibility: { wheelchairFriendly: false, notes: "Doli services available for stairs." },
    routePlan: [{ time: "09:00 AM", activity: "Cave 1 & 2 (Paintings)" }],
    foodGuide: [{ name: "MTDC Resort", type: "Govt", specialty: "Maharashtrian Thali", rating: 3.9 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital" }
  },
  {
    id: 1502,
    name: "Ellora Caves",
    slug: "ellora-caves",
    state: "Sambhaji Nagar, Maharashtra",
    category: "Heritage",
    badge: "Kailasa Temple Marvel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Kailasa_temple_at_Ellora.jpg/800px-Kailasa_temple_at_Ellora.jpg",
    description: "One of the largest rock-cut monastery-temple cave complexes in the world, featuring Hindu, Buddhist, and Jain monuments.",
    coordinates: { lat: 20.0268, lng: 75.1771 },
    essentials: { 
      bestTime: "October to March", 
      timings: "06:00 AM - 06:00 PM (Closed Tuesdays)", 
      entryFee: { Indian: "₹40", Foreigner: "₹600" } 
    },
    transport: { nearestAirport: "Aurangabad (35 km)", nearestRailway: "Aurangabad (30 km)" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/ellora" },
    accessibility: { wheelchairFriendly: true, notes: "Kailasa temple courtyard is accessible." },
    routePlan: [{ time: "10:00 AM", activity: "Kailasa Temple (Cave 16)" }],
    foodGuide: [{ name: "Hotel Kailas", type: "View", specialty: "North Indian", rating: 4.1 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sadar Hospital" }
  },
  {
    id: 1503,
    name: "Gateway of India",
    slug: "gateway-of-india",
    state: "Mumbai, Maharashtra",
    category: "Heritage",
    badge: "Icon of Mumbai",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Gateway_of_India_Mumbai.jpg/800px-Gateway_of_India_Mumbai.jpg",
    description: "Arch-monument built during the 20th century in Mumbai to commemorate the landing of King George V.",
    coordinates: { lat: 18.9220, lng: 72.8347 },
    essentials: { 
      bestTime: "November to February", 
      timings: "24 Hours", 
      entryFee: { Entry: "Free" } 
    },
    transport: { nearestAirport: "Mumbai (25 km)", nearestRailway: "CSMT (2 km)" },
    externalLinks: { officialBooking: "https://www.maharashtratourism.gov.in/", googleMaps: "https://goo.gl/maps/gateway" },
    accessibility: { wheelchairFriendly: true, notes: "Fully paved and flat." },
    routePlan: [{ time: "05:00 PM", activity: "Sunset view and ferry ride" }],
    foodGuide: [{ name: "Leopold Cafe", type: "Iconic", specialty: "Chilli Chicken", rating: 4.3 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "St. George Hospital" }
  },
  {
    id: 1504,
    name: "Mahabaleshwar",
    slug: "mahabaleshwar",
    state: "Satara, Maharashtra",
    category: "Hill Stations",
    badge: "Strawberry Capital",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8e/bc/c7/mahabaleshwar-points.jpg?w=1200&h=-1&s=1",
    description: "Famous for its strawberries, evergreen forests, and numerous points offering scenic views of the Sahyadri range.",
    coordinates: { lat: 17.9235, lng: 73.6586 },
    essentials: { 
      bestTime: "October to June", 
      timings: "24 Hours", 
      entryFee: { Entry: "₹20 (Tax)" } 
    },
    transport: { nearestAirport: "Pune (120 km)", nearestRailway: "Satara (50 km)" },
    externalLinks: { officialBooking: "https://www.mtdc.co.in/", googleMaps: "https://goo.gl/maps/mahabaleshwar" },
    accessibility: { wheelchairFriendly: true, notes: "Main markets and some points are accessible." },
    routePlan: [{ time: "09:00 AM", activity: "Mapro Garden Visit" }],
    foodGuide: [{ name: "Mapro Garden", type: "Famous", specialty: "Strawberry Cream", rating: 4.6 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Satara" }
  },
  {
    id: 1505,
    name: "Lonavala & Khandala",
    slug: "lonavala",
    state: "Pune, Maharashtra",
    category: "Hill Stations",
    badge: "Chikki & Monsoons",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/af/45/69/bhushi-dam.jpg?w=1200&h=-1&s=1",
    description: "Popular weekend getaway near Mumbai/Pune, famous for Bhushi Dam, Tiger Point, and Chikki.",
    coordinates: { lat: 18.7500, lng: 73.4000 },
    essentials: { 
      bestTime: "June to September", 
      timings: "24 Hours", 
      entryFee: { Entry: "Free" } 
    },
    transport: { nearestAirport: "Pune (65 km)", nearestRailway: "Lonavala (1 km)" },
    externalLinks: { officialBooking: "https://www.maharashtratourism.gov.in/", googleMaps: "https://goo.gl/maps/lonavala" },
    accessibility: { wheelchairFriendly: true, notes: "City roads are accessible; viewpoints vary." },
    routePlan: [{ time: "04:00 PM", activity: "Tiger Point Sunset" }],
    foodGuide: [{ name: "Maganlal Chikki", type: "Famous", specialty: "Peanut Chikki", rating: 4.7 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Lonavala Hospital" }
  },
  {
    id: 1506,
    name: "Tadoba National Park",
    slug: "tadoba",
    state: "Chandrapur, Maharashtra",
    category: "Wildlife",
    badge: "Tiger Land",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tadoba_Tiger.jpg/800px-Tadoba_Tiger.jpg",
    description: "Maharashtra's oldest and largest national park, famous for frequent Tiger sightings.",
    coordinates: { lat: 20.2100, lng: 79.3000 },
    essentials: { 
      bestTime: "March to May", 
      timings: "Safari slots: Morning & Afternoon", 
      entryFee: { Permit: "₹1000+" } 
    },
    transport: { nearestAirport: "Nagpur (140 km)", nearestRailway: "Chandrapur (45 km)" },
    externalLinks: { officialBooking: "https://mytadoba.org/", googleMaps: "https://goo.gl/maps/tadoba" },
    accessibility: { wheelchairFriendly: false, notes: "Open Gypsies used for safari." },
    routePlan: [{ time: "06:00 AM", activity: "Morning Safari" }],
    foodGuide: [{ name: "MPT Tiger Valley", type: "Resort", specialty: "Indian", rating: 4.0 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital" }
  },
  {
    id: 1507,
    name: "Shirdi Sai Baba Temple",
    slug: "shirdi",
    state: "Ahmednagar, Maharashtra",
    category: "Spiritual",
    badge: "Land of Sai",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shirdi_Sai_Baba_Temple.jpg/800px-Shirdi_Sai_Baba_Temple.jpg",
    description: "Dedicated to Sai Baba, this is one of the most visited pilgrimage centers in India.",
    coordinates: { lat: 19.7667, lng: 74.4772 },
    essentials: { 
      bestTime: "All Year", 
      timings: "04:00 AM - 11:00 PM", 
      entryFee: { Darshan: "Free", VIP: "₹200" } 
    },
    transport: { nearestAirport: "Shirdi (15 km)", nearestRailway: "Sainagar Shirdi (2 km)" },
    externalLinks: { officialBooking: "https://online.sai.org.in/", googleMaps: "https://goo.gl/maps/shirdi" },
    accessibility: { wheelchairFriendly: true, notes: "Lifts and ramps for darshan." },
    routePlan: [{ time: "04:30 AM", activity: "Kakad Aarti" }],
    foodGuide: [{ name: "Sai Prasadalaya", type: "Pilgrim", specialty: "Mahaprasad", rating: 4.9 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sai Baba Hospital" }
  },
  {
    id: 1508,
    name: "Raigad Fort",
    slug: "raigad-fort",
    state: "Raigad, Maharashtra",
    category: "Heritage",
    badge: "Capital of Shivaji Maharaj",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Raigad_Fort_View.jpg/800px-Raigad_Fort_View.jpg",
    description: "The capital of the Maratha Empire under Chhatrapati Shivaji Maharaj. Situated at 2700ft.",
    coordinates: { lat: 18.2347, lng: 73.4464 },
    essentials: { 
      bestTime: "October to March", 
      timings: "08:00 AM - 06:00 PM", 
      entryFee: { Indian: "₹25", Ropeway: "₹300" } 
    },
    transport: { nearestAirport: "Mumbai (160 km)", nearestRailway: "Mangaon (30 km)" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/raigad" },
    accessibility: { wheelchairFriendly: true, notes: "Ropeway available to reach the top." },
    routePlan: [{ time: "09:00 AM", activity: "Ropeway to Fort" }],
    foodGuide: [{ name: "Local Dhabas", type: "Rustic", specialty: "Pithla Bhakri", rating: 4.2 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Mahad" }
  },
  {
    id: 1509,
    name: "Ganpatipule Beach",
    slug: "ganpatipule",
    state: "Ratnagiri, Maharashtra",
    category: "Beaches",
    badge: "Spiritual Beach",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/3e/2d/10/ganpatipule-temple-beach.jpg?w=1200&h=-1&s=1",
    description: "A 400-year-old Ganesha temple situated right on the beach sand.",
    coordinates: { lat: 17.1500, lng: 73.2667 },
    essentials: { 
      bestTime: "Nov to Feb", 
      timings: "Temple: 5 AM - 9 PM", 
      entryFee: { Entry: "Free" } 
    },
    transport: { nearestAirport: "Ratnagiri (30 km)", nearestRailway: "Ratnagiri (30 km)" },
    externalLinks: { officialBooking: "https://www.mtdc.co.in/", googleMaps: "https://goo.gl/maps/ganpatipule" },
    accessibility: { wheelchairFriendly: true, notes: "Temple area is accessible." },
    routePlan: [{ time: "07:00 AM", activity: "Temple Darshan" }],
    foodGuide: [{ name: "MTDC Restaurant", type: "Govt", specialty: "Ukadiche Modak", rating: 4.1 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Ratnagiri Hospital" }
  },
  {
    id: 1510,
    name: "Panchgani",
    slug: "panchgani",
    state: "Satara, Maharashtra",
    category: "Hill Stations",
    badge: "Table Land",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/66/c6/3f/panchgani.jpg?w=1200&h=-1&s=1",
    description: "Famous for its volcanic plateau 'Table Land' and residential boarding schools.",
    coordinates: { lat: 17.9167, lng: 73.8000 },
    essentials: { 
      bestTime: "September to May", 
      timings: "24 Hours", 
      entryFee: { TableLand: "Free" } 
    },
    transport: { nearestAirport: "Pune (100 km)", nearestRailway: "Wathar (45 km)" },
    externalLinks: { googleMaps: "https://goo.gl/maps/panchgani" },
    accessibility: { wheelchairFriendly: true, notes: "Table land is flat and driveable." },
    routePlan: [{ time: "04:30 PM", activity: "Horse riding on Table Land" }],
    foodGuide: [{ name: "Lucky Restaurant", type: "Old", specialty: "Bun Maska", rating: 4.4 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Bel Air Hospital" }
  },
  {
    id: 1511,
    name: "Alibaug Beach",
    slug: "alibaug",
    state: "Raigad, Maharashtra",
    category: "Beaches",
    badge: "Weekend Escape",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8e/be/47/alibaug-beach.jpg?w=1200&h=-1&s=1",
    description: "Popular coastal town known for its black sand beaches and Kolaba Fort in the sea.",
    coordinates: { lat: 18.6411, lng: 72.8722 },
    essentials: { 
      bestTime: "Nov to Feb", 
      timings: "24 Hours", 
      entryFee: { Ferry: "₹150-500" } 
    },
    transport: { nearestAirport: "Mumbai (100 km)", busConnectivity: "Ferry from Gateway of India" },
    externalLinks: { googleMaps: "https://goo.gl/maps/alibaug" },
    accessibility: { wheelchairFriendly: true, notes: "Beach road is flat." },
    routePlan: [{ time: "11:00 AM", activity: "Kolaba Fort (Low tide walk)" }],
    foodGuide: [{ name: "Sanman", type: "Famous", specialty: "Fish Thali", rating: 4.5 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Alibaug" }
  },
  {
    id: 1512,
    name: "Bibi Ka Maqbara",
    slug: "bibi-ka-maqbara",
    state: "Sambhaji Nagar, Maharashtra",
    category: "Heritage",
    badge: "Mini Taj Mahal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bibi_Ka_Maqbara_Full_View.jpg/800px-Bibi_Ka_Maqbara_Full_View.jpg",
    description: "Tomb built by Prince Azam Shah in memory of his mother Dilras Banu Begum; bears striking resemblance to the Taj Mahal.",
    coordinates: { lat: 19.8922, lng: 75.3204 },
    essentials: { 
      bestTime: "October to March", 
      timings: "08:00 AM - 08:00 PM", 
      entryFee: { Indian: "₹25" } 
    },
    transport: { nearestAirport: "Aurangabad (12 km)", nearestRailway: "Aurangabad (6 km)" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/maqbara" },
    accessibility: { wheelchairFriendly: true, notes: "Garden pathways are paved." },
    routePlan: [{ time: "04:30 PM", activity: "Photography at Sunset" }],
    foodGuide: [{ name: "Naivedya", type: "Veg", specialty: "Indian", rating: 4.0 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Ghati Hospital" }
  }
];
