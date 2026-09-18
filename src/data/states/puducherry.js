/**
 * PUDUCHERRY_PLACES DATASET (Extended 15 Places)
 * ------------------------------------------------------------------
 * Sources: PTDC (Puducherry Tourism), Auroville.org, Official 2026 Data
 * Coverage: White Town, Beaches, Auroville, and Archaeological Sites
 * ------------------------------------------------------------------
 */

export const PUDUCHERRY_PLACES = [
  {
    id: 3701,
    name: "Matrimandir (Auroville)",
    slug: "matrimandir-auroville",
    cityState: "Auroville, Puducherry",
    category: "Spiritual",
    badge: "Soul of the City",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/42/75/10/the-matrimandir-seen.jpg?w=900&h=500&s=1 ",
    description: "A golden metallic sphere symbolizing a new consciousness. Surrounded by peaceful gardens and silent zones.",
    coordinates: { lat: 12.0069, lng: 79.8105 },
    essentials: {
      bestTime: "All Year",
      weather: "Humid",
      timings: "09:00 AM - 04:00 PM (Viewing Point)",
      entryFee: { ViewingPoint: "Free", InnerChamber: "Free (Advance Booking)" }
    },
    transport: { nearestAirport: "Chennai (145 km)", busConnectivity: "Auto/Taxi from Pondicherry (12 km)" },
    externalLinks: { officialBooking: "https://auroville.org/", googleMaps: "https://goo.gl/maps/matrimandir" },
    accessibility: { wheelchairFriendly: true, notes: "Shuttle bus available from Visitor Centre." },
    routePlan: [{ time: "09:00 AM", activity: "Video Intro" }, { time: "10:00 AM", activity: "Walk to Viewing Point" }],
    foodGuide: [{ name: "Solar Kitchen", specialty: "Organic Food", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "JIPMER" }
  },
  {
    id: 3702,
    name: "Sri Aurobindo Ashram",
    slug: "sri-aurobindo-ashram",
    cityState: "White Town, Puducherry",
    category: "Spiritual",
    badge: "Yoga & Peace",
    image: " https://lacedilleindia.com/wp-content/uploads/2025/02/Sri-Aurobindo-Ashram-La-Cedille-Pondicherry.jpg ",
    description: "Founded in 1926, it houses the Samadhi of Sri Aurobindo and The Mother. A place of absolute silence.",
    coordinates: { lat: 11.9368, lng: 79.8341 },
    essentials: {
      bestTime: "All Year",
      timings: "08:00 AM - 12:00 PM, 02:00 PM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Puducherry (2 km)", busConnectivity: "Located in the heart of White Town" },
    externalLinks: { officialBooking: "https://www.sriaurobindoashram.org/", googleMaps: "https://goo.gl/maps/ashram" },
    accessibility: { wheelchairFriendly: true, notes: "Flat access to Samadhi." },
    routePlan: [{ time: "08:30 AM", activity: "Meditation" }, { time: "10:00 AM", activity: "Visit Ashram Library" }],
    foodGuide: [{ name: "Ashram Dining Hall", specialty: "Vegetarian Meals", rating: 4.7 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Govt General Hospital" }
  },
  {
    id: 3703,
    name: "Promenade Beach (Rock Beach)",
    slug: "promenade-beach",
    cityState: "Puducherry Town, Puducherry",
    category: "Beaches",
    badge: "French Riviera of East",
    image: " https://www.trawell.in/admin/images/upload/09285665Pondicherry_Promenade_Beach_Main.jpg ",
    description: "A 1.2km rocky beachfront perfect for evening strolls. Traffic is banned here after 6 PM.",
    coordinates: { lat: 11.9339, lng: 79.8359 },
    essentials: {
      bestTime: "Evening/Sunrise",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Puducherry (1 km)", busConnectivity: "Walking distance from city center" },
    externalLinks: { googleMaps: "https://goo.gl/maps/promenade" },
    accessibility: { wheelchairFriendly: true, notes: "Fully paved wide promenade." },
    routePlan: [{ time: "05:30 PM", activity: "Walk by the Sea" }, { time: "07:00 PM", activity: "Coffee at Le Cafe" }],
    foodGuide: [{ name: "Le Cafe", specialty: "Coffee & Snacks", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Govt General Hospital" }
  },
  {
    id: 3704,
    name: "Paradise Beach",
    slug: "paradise-beach",
    cityState: "Chunnambar, Puducherry",
    category: "Beaches",
    badge: "Pristine Island Beach",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/27/2f/63/view-while-reaching-paradise.jpg?w=1200&h=1200&s=1",
    description: "Accessible only by boat from Chunnambar, offering golden sands and clean blue waters.",
    coordinates: { lat: 11.8824, lng: 79.8163 },
    essentials: {
      bestTime: "Oct to March",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Boat: "₹300 (Round Trip)" }
    },
    transport: { busConnectivity: "Bus to Chunnambar Boat House (8 km from town)" },
    externalLinks: { officialBooking: "https://tourism.py.gov.in/", googleMaps: "https://goo.gl/maps/paradisebeach" },
    accessibility: { wheelchairFriendly: false, notes: "Boat boarding requires assistance." },
    routePlan: [{ time: "09:00 AM", activity: "Ferry Ride" }, { time: "10:30 AM", activity: "Water Sports" }],
    foodGuide: [{ name: "Beach Shacks", specialty: "Fried Fish", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Ariyankuppam PHC" }
  },
  {
    id: 3705,
    name: "Serenity Beach",
    slug: "serenity-beach",
    cityState: "Kottakuppam, Puducherry",
    category: "Beaches",
    badge: "Surfer's Paradise",
    image: " https://lacedilleindia.com/wp-content/uploads/2025/05/Serenity-Beach-Pondicherry-3-1024x570.jpg ",
    description: "A calm refuge north of the city, popular for surfing schools and its rocky pier.",
    coordinates: { lat: 11.9678, lng: 79.8398 },
    essentials: {
      bestTime: "Sunrise",
      timings: "06:00 AM - 06:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { busConnectivity: "Auto/Scooter on ECR Road (5 km from town)" },
    externalLinks: { googleMaps: "https://goo.gl/maps/serenity" },
    accessibility: { wheelchairFriendly: false, notes: "Sandy and rocky pier." },
    routePlan: [{ time: "06:00 AM", activity: "Sunrise Photography" }, { time: "08:00 AM", activity: "Surfing Lesson" }],
    foodGuide: [{ name: "Theevu Plage", specialty: "Grilled Prawns", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "PIMS" }
  },
  {
    id: 3706,
    name: "White Town (French Quarter)",
    slug: "white-town",
    cityState: "White Town, Puducherry",
    category: "Heritage",
    badge: "Colonial Charm",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/the-french-quarter-puducherry-puducherry-2-musthead-hero?qlt=82&ts=1726656224921 ",
    description: "Famous for mustard-yellow villas and bougainvillea-draped walls. The heart of Indo-French heritage.",
    coordinates: { lat: 11.9325, lng: 79.8335 },
    essentials: {
      bestTime: "Early Morning/Evening",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { busConnectivity: "Best on Foot or Bicycle" },
    externalLinks: { googleMaps: "https://goo.gl/maps/whitetown" },
    accessibility: { wheelchairFriendly: true, notes: "Flat, well-maintained grid streets." },
    routePlan: [{ time: "04:00 PM", activity: "Heritage Walk" }, { time: "07:00 PM", activity: "Dinner in French Cafe" }],
    foodGuide: [{ name: "Coromandel Cafe", specialty: "Pink Pasta", rating: 4.7 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Govt General Hospital" }
  },
  {
    id: 3707,
    name: "Sacred Heart Basilica",
    slug: "sacred-heart-basilica",
    cityState: "Puducherry Town, Puducherry",
    category: "Heritage",
    badge: "Gothic Marvel",
    image: " https://pondicherrytourism.co.in/images/places-to-visit/header/basilica-of-the-sacred-heart-of-jesus-puducherry-tourism-entry-fee-timings-holidays-reviews-header.jpg ",
    description: "A rare example of Gothic architecture in India, famous for its red-and-white exterior and stained glass panels.",
    coordinates: { lat: 11.9264, lng: 79.8294 },
    essentials: {
      bestTime: "Christmas/Winter",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Puducherry (0.5 km)", busConnectivity: "Located on MG Road" },
    externalLinks: { googleMaps: "https://goo.gl/maps/sacredheart" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available at the entrance." },
    routePlan: [{ time: "10:00 AM", activity: "View Stained Glass" }, { time: "11:00 AM", activity: "Grotto Visit" }],
    foodGuide: [{ name: "Surguru", specialty: "Ghee Roast Dosa", rating: 4.4 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Govt General Hospital" }
  },
  {
    id: 3708,
    name: "Puducherry Museum",
    slug: "puducherry-museum",
    cityState: "White Town, Puducherry",
    category: "Heritage",
    badge: "Roman & Chola Artifacts",
    image: " https://theholidaysdestination.com/wp-content/uploads/2022/02/Puducherry-Museum-mounments.jpg ",
    description: "Exhibits artifacts from the Roman port of Arikamedu and rare French colonial furniture.",
    coordinates: { lat: 11.9345, lng: 79.8348 },
    essentials: {
      bestTime: "All Year",
      timings: "09:00 AM - 06:30 PM (Closed Mon)",
      entryFee: { Indian: "₹10", Foreigner: "₹50" }
    },
    transport: { busConnectivity: "Walking distance from Beach Road" },
    externalLinks: { googleMaps: "https://goo.gl/maps/museum" },
    accessibility: { wheelchairFriendly: true, notes: "Ground floor is accessible." },
    routePlan: [{ time: "02:00 PM", activity: "Artifact Tour" }, { time: "04:00 PM", activity: "Bharathi Park Walk" }],
    foodGuide: [{ name: "Cafe des Arts", specialty: "Baguettes", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Govt General Hospital" }
  },
  {
    id: 3709,
    name: "Ousteri Lake (Ossudu)",
    slug: "ousteri-lake",
    cityState: "Vazhudavur Road, Puducherry",
    category: "Nature",
    badge: "Birdwatcher's Paradise",
    image: " https://media-cdn.tripadvisor.com/media/photo-s/06/50/07/5e/ousteri-lake.jpg ",
    description: "A man-made lake designated as a bird sanctuary, home to numerous migratory species.",
    coordinates: { lat: 11.9475, lng: 79.7433 },
    essentials: {
      bestTime: "Nov to Feb",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Boating: "₹200+" }
    },
    transport: { busConnectivity: "10km from town (Taxi/Auto required)" },
    externalLinks: { googleMaps: "https://goo.gl/maps/ousteri" },
    accessibility: { wheelchairFriendly: false, notes: "Natural unpaved banks." },
    routePlan: [{ time: "04:00 PM", activity: "Bird Watching Boat Ride" }, { time: "05:30 PM", activity: "Sunset Viewing" }],
    foodGuide: [{ name: "Lake Canteen", specialty: "Tea & Snacks", rating: 3.0 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "IGMC & RI" }
  },
  {
    id: 3710,
    name: "Manakula Vinayagar Temple",
    slug: "manakula-vinayagar",
    cityState: "White Town, Puducherry",
    category: "Spiritual",
    badge: "Golden Chariot Temple",
    image: " https://lacedilleindia.com/wp-content/uploads/2025/07/Arulmigu-Manakula-Vinayagar-Temple-Pondicherry-A-Divine-Blend-of-History-Culture-Devotion.jpg ",
    description: "Ancient Ganesha temple predating French rule, famous for its gold-plated interiors and temple elephant.",
    coordinates: { lat: 11.9366, lng: 79.8346 },
    essentials: {
      bestTime: "All Year",
      timings: "05:45 AM - 12:30 PM, 04:00 PM - 09:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { busConnectivity: "Near Aurobindo Ashram" },
    externalLinks: { officialBooking: "https://manakulavinayagartemple.com/", googleMaps: "https://goo.gl/maps/manakula" },
    accessibility: { wheelchairFriendly: true, notes: "Flat street-level entrance." },
    routePlan: [{ time: "05:00 PM", activity: "Darshan" }, { time: "06:00 PM", activity: "Temple elephant blessing" }],
    foodGuide: [{ name: "A2B", specialty: "South Indian Sweets", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Govt General Hospital" }
  },
  {
id: 3711,
    name: "Eden Beach",
    slug: "eden-beach",
    cityState: "Chinna Veerampattinam, Puducherry",
    category: "Beaches",
    badge: "Blue Flag Certified",
    image: " https://img.traveltriangle.com/blog/wp-content/uploads/2024/07/Eden-Beach.jpg ", // Representational clean beach
    description: "One of India's cleanest beaches with Blue Flag status. Features white sand and organized sitting areas.",
    coordinates: { lat: 11.8794, lng: 79.8164 },
    essentials: {
      bestTime: "Oct to March",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { busConnectivity: "7km from town (ECR Road)" },
    externalLinks: { googleMaps: "https://goo.gl/maps/edenbeach" },
    accessibility: { wheelchairFriendly: true, notes: "Organized paths and clean toilets." },
    routePlan: [{ time: "04:30 PM", activity: "Sunset Walk" }, { time: "05:30 PM", activity: "Beach relaxation" }],
    foodGuide: [{ name: "Local Shacks", specialty: "Coconut Water", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Ariyankuppam PHC" }
  },
  {
    id: 3712,
    name: "Arikamedu Archaeological Site",
    slug: "arikamedu-ruins",
    cityState: "Ariyankuppam, Puducherry",
    category: "Heritage",
    badge: "Roman Trading Port",
    image: " https://miro.medium.com/1*4N61KYVGeBmC9o651w9Hfw.avif ",
    description: "Ruins of an ancient Roman trade settlement dating to the 2nd century BCE. A hidden gem for history buffs.",
    coordinates: { lat: 11.8978, lng: 79.8144 },
    essentials: {
      bestTime: "Winter Mornings",
      timings: "10:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { busConnectivity: "4km from town (Auto required)" },
    externalLinks: { googleMaps: "https://goo.gl/maps/arikamedu" },
    accessibility: { wheelchairFriendly: false, notes: "Unpaved and rocky ruin site." },
    routePlan: [{ time: "09:00 AM", activity: "Explore ruins" }, { time: "11:00 AM", activity: "River view photography" }],
    foodGuide: [{ name: "Local Mess", specialty: "Tamil Thali", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Ariyankuppam PHC" }
  },
  {
    id: 3713,
    name: "Pondicherry Botanical Garden",
    slug: "botanical-garden-pondicherry",
    cityState: "Puducherry Town, Puducherry",
    category: "Nature",
    badge: "Green Heritage",
    image: " https://avathioutdoors.gumlet.io/travelGuide/dev/pondicherry_P7716.jpg ",
    description: "Built in 1826, this garden showcases French style landscaping and rare exotic plants from around the world.",
    coordinates: { lat: 11.9275, lng: 79.8242 },
    essentials: {
      bestTime: "Mornings",
      timings: "09:00 AM - 06:00 PM",
      entryFee: { Adult: "₹10" }
    },
    transport: { busConnectivity: "Near Puducherry Railway Station" },
    externalLinks: { googleMaps: "https://goo.gl/maps/botanicalpondicherry" },
    accessibility: { wheelchairFriendly: true, notes: "Paved walking tracks." },
    routePlan: [{ time: "10:00 AM", activity: "Plant study" }, { time: "11:30 AM", activity: "Toy Train Ride (for kids)" }],
    foodGuide: [{ name: "Garden Canteen", specialty: "Ice Cream", rating: 3.5 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Govt General Hospital" }
  },
  {
    id: 3714,
    name: "Chunnambar Boat House",
    slug: "chunnambar-boat-house",
    cityState: "Ariyankuppam, Puducherry",
    category: "Nature",
    badge: "Backwater Retreat",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/chunnambhar-boathouse-puducherry-puducherry-attr-about?qlt=82&ts=1726656234241 ", 
    description: "Famous for backwater cruises and the starting point for ferries to Paradise Beach.",
    coordinates: { lat: 11.8847, lng: 79.8153 },
    essentials: {
      bestTime: "All Year",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹10", Boat: "₹300" }
    },
    transport: { busConnectivity: "Direct buses from town (8 km)" },
    externalLinks: { officialBooking: "https://tourism.py.gov.in/", googleMaps: "https://goo.gl/maps/chunnambar" },
    accessibility: { wheelchairFriendly: true, notes: "Paved paths till the boat boarding point." },
    routePlan: [{ time: "09:00 AM", activity: "Backwater Cruise" }, { time: "11:00 AM", activity: "Ferry to Paradise" }],
    foodGuide: [{ name: "Seagulls Restaurant", specialty: "Seafood Thali", rating: 3.9 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Ariyankuppam PHC" }
  },
  {
    id: 3715,
    name: "Aayi Mandapam (Bharathi Park)",
    slug: "aayi-mandapam",
    cityState: "White Town, Puducherry",
    category: "Heritage",
    badge: "Symbol of Pondicherry",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/22/eb/c7/aayi-mandap-pondichery.jpg?w=900&h=500&s=1", 
    description: "A white monument in the center of Bharathi Park, built during Napoleon III's reign to commemorate water supply to the town.",
    coordinates: { lat: 11.9344, lng: 79.8339 },
    essentials: {
      bestTime: "Evenings",
      timings: "08:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { busConnectivity: "Opposite Puducherry Museum in White Town" },
    externalLinks: { googleMaps: "https://goo.gl/maps/aayimandapam" },
    accessibility: { wheelchairFriendly: true, notes: "Bharathi Park is fully accessible." },
    routePlan: [{ time: "05:00 PM", activity: "Monument Photo" }, { time: "06:00 PM", activity: "Evening Walk in Park" }],
    foodGuide: [{ name: "Baker Street", specialty: "Quiche", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "0413-2339497", hospital: "Govt General Hospital" }
  }
];

