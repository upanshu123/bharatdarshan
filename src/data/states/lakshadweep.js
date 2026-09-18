/**
 * LAKSHADWEEP_PLACES DATASET (Extended Coverage)
 * ------------------------------------------------------------------
 * Sources: SPORTS Lakshadweep, Tourism Dept U.T. (2026 Updated)
 * Format: cityState included, Strictly Sequential IDs
 * ------------------------------------------------------------------
 */

export const LAKSHADWEEP_PLACES = [
  {
    id: 3601,
    name: "Agatti Island",
    slug: "agatti-island",
    cityState: "Agatti, Lakshadweep",
    category: "Beaches",
    badge: "Gateway to Lakshadweep",
    image: " https://www.panickerstravel.in/assets/images/1709376685_a7de4f58ad9f29c1d548.jpg ",
    description: "The main gateway housing the airport. Features a 5.6 km long coral reef and vibrant lagoons.",
    coordinates: { lat: 10.8531, lng: 72.1939 },
    essentials: {
      bestTime: "October to April",
      weather: "Tropical",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Permit Mandatory", Scuba: "₹3500+" }
    },
    transport: { nearestAirport: "Agatti (0 km)", busConnectivity: "Auto-rickshaws available locally" },
    externalLinks: { officialBooking: "https://lakshadweep.gov.in/", googleMaps: "https://goo.gl/maps/agatti" },
    accessibility: { wheelchairFriendly: false, notes: "Soft sand terrain." },
    routePlan: [{ time: "09:00 AM", activity: "Snorkeling" }, { time: "04:00 PM", activity: "Cycling" }],
    foodGuide: [{ name: "Agatti Beach Resort", specialty: "Tuna Curry", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "CHC Agatti" }
  },
  {
    id: 3602,
    name: "Bangaram Island",
    slug: "bangaram-island",
    cityState: "Bangaram, Lakshadweep",
    category: "Beaches",
    badge: "Jewel of Lakshadweep",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/bangaram-kavaratti-lakshwadeep-2-attr-hero?qlt=82&ts=1727011552300 ",
    description: "An uninhabited island famous for bioluminescence at night and a teardrop-shaped lagoon.",
    coordinates: { lat: 10.9392, lng: 72.2343 },
    essentials: {
      bestTime: "Nov to Feb",
      timings: "24 Hours (Stay only)",
      entryFee: { Entry: "Package Mandatory" }
    },
    transport: { nearestAirport: "Agatti (12 km)", busConnectivity: "Speed boat from Agatti (45 mins)" },
    externalLinks: { officialBooking: "http://www.lakshadweeptourism.com/", googleMaps: "https://goo.gl/maps/bangaram" },
    accessibility: { wheelchairFriendly: false, notes: "Direct boat disembarking." },
    routePlan: [{ time: "10:00 AM", activity: "Shipwreck Scuba" }, { time: "08:00 PM", activity: "Bioluminescence Walk" }],
    foodGuide: [{ name: "Bangaram Resort", specialty: "Seafood Buffet", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "First Aid Centre Bangaram" }
  },
  {
    id: 3603,
    name: "Kavaratti Island",
    slug: "kavaratti-island",
    cityState: "Kavaratti, Lakshadweep",
    category: "Heritage",
    badge: "Administrative Capital",
    image: " https://vajiramandravi.com/current-affairs/wp-content/uploads/2025/04/kavaratti_island.webp",
    description: "Known for the cement-less Ujra Mosque and the Marine Aquarium with exotic species.",
    coordinates: { lat: 10.5667, lng: 72.6417 },
    essentials: {
      bestTime: "October to April",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Aquarium: "₹20", Kayak: "₹300" }
    },
    transport: { nearestAirport: "Agatti (Ship/Heli)", busConnectivity: "Direct ships from Kochi" },
    externalLinks: { officialBooking: "https://lakshadweep.gov.in/", googleMaps: "https://goo.gl/maps/kavaratti" },
    accessibility: { wheelchairFriendly: true, notes: "Jetty and roads are paved." },
    routePlan: [{ time: "09:00 AM", activity: "Marine Museum" }, { time: "11:00 AM", activity: "Ujra Mosque" }],
    foodGuide: [{ name: "Coral Reef Restaurant", specialty: "Fish Fry", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "Indira Gandhi Hospital" }
  },
  {
    id: 3604,
    name: "Minicoy Island (Maliku)",
    slug: "minicoy-island",
    cityState: "Minicoy, Lakshadweep",
    category: "Heritage",
    badge: "Southernmost Outpost",
    image: " https://tripperhub.com/wp-content/uploads/2025/05/image-137-1024x576.png ",
    description: "Culturally distinct (Maldivian influence). Famous for its 300ft British-built lighthouse.",
    coordinates: { lat: 8.2838, lng: 73.0377 },
    essentials: {
      bestTime: "Oct to March",
      timings: "Lighthouse: 3 PM - 5 PM",
      entryFee: { Lighthouse: "₹20" }
    },
    transport: { nearestAirport: "Agatti (Ship only)", busConnectivity: "Overnight ship from Kochi/Agatti" },
    externalLinks: { officialBooking: "https://lakshadweep.gov.in/", googleMaps: "https://goo.gl/maps/minicoy" },
    accessibility: { wheelchairFriendly: false, notes: "Lighthouse has narrow spiral stairs." },
    routePlan: [{ time: "10:00 AM", activity: "Tuna Factory Tour" }, { time: "04:00 PM", activity: "Lighthouse View" }],
    foodGuide: [{ name: "Minicoy Resort", specialty: "Mas Huni (Maldivian)", rating: 4.4 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "Govt Hospital Minicoy" }
  },
  {
    id: 3605,
    name: "Kadmat Island",
    slug: "kadmat-island",
    cityState: "Kadmat, Lakshadweep",
    category: "Adventure",
    badge: "Diver's Paradise",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/0c/f4/2b/snap-from-aggati-jetty.jpg?w=1200&h=-1&s=1 ",
    description: "Famous for its long sandy beaches and the PADI-certified Scuba Diving center.",
    coordinates: { lat: 11.2227, lng: 72.7768 },
    essentials: {
      bestTime: "Oct to April",
      timings: "Dive Center: 8 AM - 4 PM",
      entryFee: { Scuba: "₹5000+" }
    },
    transport: { nearestAirport: "Agatti (77 km)", busConnectivity: "Speed vessel from Agatti (2.5 hrs)" },
    externalLinks: { officialBooking: "http://www.lakshadweeptourism.com/", googleMaps: "https://goo.gl/maps/kadmat" },
    accessibility: { wheelchairFriendly: false, notes: "Mainly water sports focus." },
    routePlan: [{ time: "08:30 AM", activity: "Deep Sea Scuba" }, { time: "04:00 PM", activity: "Sunset Kayaking" }],
    foodGuide: [{ name: "Kadmat Resort", specialty: "Grilled Lobster", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "CHC Kadmat" }
  },
  {
    id: 3606,
    name: "Thinnakara Island",
    slug: "thinnakara-island",
    cityState: "Thinnakara, Lakshadweep",
    category: "Nature",
    badge: "Turtle Nesting Site",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/thinnakara-kavaratti-lakshwadeep-2-musthead-hero?qlt=82&ts=1727011693655 ",
    description: "Small uninhabited island known for tent stays and viewing turtles in crystal clear water.",
    coordinates: { lat: 10.9456, lng: 72.2856 },
    essentials: {
      bestTime: "October to March",
      timings: "24 Hours (Stay)",
      entryFee: { Stay: "Pre-booked Package" }
    },
    transport: { nearestAirport: "Agatti (15 km)", busConnectivity: "45-min boat from Agatti" },
    externalLinks: { officialBooking: "https://lakshadweep.gov.in/", googleMaps: "https://goo.gl/maps/thinnakara" },
    accessibility: { wheelchairFriendly: false, notes: "Tent living on sand." },
    routePlan: [{ time: "02:00 PM", activity: "Turtle Spotting Snorkeling" }, { time: "08:00 PM", activity: "Beach Bonfire" }],
    foodGuide: [{ name: "Tent Mess", specialty: "Fresh Fish Fry", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "Agatti CHC" }
  },
  {
    id: 3607,
    name: "Kalpeni Island",
    slug: "kalpeni-island",
    cityState: "Kalpeni, Lakshadweep",
    category: "Nature",
    badge: "Coral Debris Bank",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/kavaratti-island-rural-hero?qlt=82&ts=1726642009760 ",
    description: "Famous for the Pitti and Tilakkam islets. The lagoon is very shallow, ideal for reef walking.",
    coordinates: { lat: 10.0867, lng: 73.6425 },
    essentials: {
      bestTime: "Oct to April",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Snorkeling: "₹500" }
    },
    transport: { nearestAirport: "Agatti (Heli)", busConnectivity: "Ship from Kochi is best" },
    externalLinks: { officialBooking: "https://lakshadweep.gov.in/", googleMaps: "https://goo.gl/maps/kalpeni" },
    accessibility: { wheelchairFriendly: false, notes: "Shore is rocky with coral rubble." },
    routePlan: [{ time: "09:00 AM", activity: "Reef Walk" }, { time: "03:00 PM", activity: "Sailing in Lagoon" }],
    foodGuide: [{ name: "Koomel Resort", specialty: "Local Malabar Meals", rating: 3.9 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "CHC Kalpeni" }
  },
  {
    id: 3608,
    name: "Amini Island",
    slug: "amini-island",
    cityState: "Amini, Lakshadweep",
    category: "Heritage",
    badge: "Coir & Artisans Hub",
    image: " https://hblimg.mmtcdn.com/content/hubble/img/lakshadweepttdimages/mmt/activities/m_Amini_Island_ttd_1_l_480_640.jpg ",
    description: "One of the earliest inhabited islands. Famous for artisans who carve stone and wood and coir production.",
    coordinates: { lat: 11.1231, lng: 72.7317 },
    essentials: {
      bestTime: "November to March",
      timings: "Daylight Hours",
      entryFee: { Entry: "Permit Cost" }
    },
    transport: { nearestAirport: "Agatti (Ship only)", busConnectivity: "Connected by ship/speed vessel" },
    externalLinks: { googleMaps: "https://goo.gl/maps/amini" },
    accessibility: { wheelchairFriendly: true, notes: "Flat village roads." },
    routePlan: [{ time: "10:00 AM", activity: "Artisans Workshop Visit" }, { time: "01:00 PM", activity: "Coir Unit Tour" }],
    foodGuide: [{ name: "Local Houses", specialty: "Coconut Jaggery", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "CHC Amini" }
  },
  {
    id: 3609,
    name: "Andrott Island",
    slug: "andrott-island",
    cityState: "Andrott, Lakshadweep",
    category: "Heritage",
    badge: "Largest Island",
    image: " https://www.shutterstock.com/image-photo/lakshadweep-most-beautiful-happening-places-600nw-2271067457.jpg ",
    description: "The largest and closest island to the Indian mainland. Home to the tomb of Saint Ubaidullah.",
    coordinates: { lat: 10.8167, lng: 73.6833 },
    essentials: {
      bestTime: "October to April",
      timings: "Juma Mosque: Daylight",
      entryFee: { Entry: "Permit Required" }
    },
    transport: { nearestRailway: "Kochi (Direct ship)", busConnectivity: "Mainly accessible via Kochi ships" },
    externalLinks: { googleMaps: "https://goo.gl/maps/andrott" },
    accessibility: { wheelchairFriendly: true, notes: "Paved roads across the island." },
    routePlan: [{ time: "09:00 AM", activity: "Juma Mosque Visit" }, { time: "11:00 AM", activity: "Buddhist Ruins Tour" }],
    foodGuide: [{ name: "Local Mess", specialty: "Fish Biryani", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "Govt Hospital Andrott" }
  },
  {
    id: 3610,
    name: "Bitra Island",
    slug: "bitra-island",
    cityState: "Bitra, Lakshadweep",
    category: "Nature",
    badge: "Smallest Inhabited Island",
    image: " https://hblimg.mmtcdn.com/content/hubble/img/lakshadweepttdimages/mmt/activities/m_Bitra_Island_ttd_1_l_480_640.jpg ",
    description: "The smallest inhabited island with a population of only around 300. Famous for bird nesting and a local shrine.",
    coordinates: { lat: 11.6000, lng: 72.1833 },
    essentials: {
      bestTime: "Winter",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Restricted" }
    },
    transport: { busConnectivity: "Limited ship service from Kavaratti/Agatti" },
    externalLinks: { googleMaps: "https://goo.gl/maps/bitra" },
    accessibility: { wheelchairFriendly: false, notes: "Extremely small and sandy." },
    routePlan: [{ time: "10:00 AM", activity: "Malik Mulla Shrine Visit" }, { time: "01:00 PM", activity: "Lagoon Exploration" }],
    foodGuide: [{ name: "Local Village", specialty: "Fresh Tuna", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "Health Centre Bitra" }
  },
  {
    id: 3611,
    name: "Suheli Par (Suheli Island)",
    slug: "suheli-par",
    cityState: "Suheli, Lakshadweep",
    category: "Nature",
    badge: "Best Fishing Spot",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd15QV1_z87LfxBOn4tPDDgH_sWCqV_HJXFg&s ",
    description: "An uninhabited lagoon being developed for eco-tourism. A prime spot for Skipjack Tuna fishing.",
    coordinates: { lat: 10.0333, lng: 72.2833 },
    essentials: {
      bestTime: "October to April",
      timings: "Day Trip Only",
      entryFee: { Entry: "Permit Mandatory" }
    },
    transport: { busConnectivity: "Private boat charters from Kavaratti" },
    externalLinks: { googleMaps: "https://goo.gl/maps/suheli" },
    accessibility: { wheelchairFriendly: false, notes: "No infrastructure available." },
    routePlan: [{ time: "09:00 AM", activity: "Game Fishing" }, { time: "12:00 PM", activity: "Snorkeling in Virgin Lagoon" }],
    foodGuide: [{ name: "Catered Meals", specialty: "Grilled Fish", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "Kavaratti Hospital" }
  },
  {
    id: 3612,
    name: "Pitti Bird Sanctuary",
    slug: "pitti-bird-sanctuary",
    cityState: "Pitti Bank, Lakshadweep",
    category: "Wildlife",
    badge: "Egg Island",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/dd/0e/42/photo4jpg.jpg?w=900&h=500&s=1 ",
    description: "An uninhabited sandbank that is an important nesting ground for pelagic birds like Sooty Tern and Brown Noddy.",
    coordinates: { lat: 10.7833, lng: 72.6333 },
    essentials: {
      bestTime: "Jan to March",
      timings: "Viewing from boat (Landing restricted)",
      entryFee: { Entry: "Wildlife Permit" }
    },
    transport: { busConnectivity: "Boat from Kavaratti or Agatti" },
    externalLinks: { googleMaps: "https://goo.gl/maps/pitti" },
    accessibility: { wheelchairFriendly: false, notes: "Viewing only via boat." },
    routePlan: [{ time: "07:00 AM", activity: "Bird Watching Safari" }],
    foodGuide: [{ name: "Pack Snacks", specialty: "Juice", rating: 3.5 }],
    emergency: { police: "100", touristHelpline: "04896-262256", nearestHospital: "Kavaratti Hospital" }
  }
];
