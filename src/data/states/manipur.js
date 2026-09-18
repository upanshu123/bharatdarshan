/**
 * MANIPUR_PLACES DATASET (Extended - 16 Places)
 * ------------------------------------------------------------------
 * Sources: Manipur Tourism, Forest Dept, CWGC
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const MANIPUR_PLACES = [
  {
    id: 1601,
    name: "Loktak Lake & Sendra Island",
    slug: "loktak-lake",
    state: "Moirang, Manipur",
    category: "Nature",
    badge: "Largest Freshwater Lake in NE India",
    image: "https://manipurtourism.gov.in/wp-content/uploads/2017/06/sendra.jpg",
    description: "Famous for its floating circular swamps called 'Phumdis'. It offers mesmerizing views from the Sendra Island tourist resort.",
    coordinates: { lat: 24.5557, lng: 93.8123 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "08:00 AM - 06:00 PM",
      entryFee: { Entry: "Free", Boating: "₹500-1000" }
    },
    transport: { nearestAirport: "Imphal (48 km)", nearestRailway: "Jiribam (220 km)", busConnectivity: "Local buses/taxis from Imphal via Moirang route." },
    externalLinks: { officialBooking: "https://manipurtourism.gov.in/", googleMaps: "https://goo.gl/maps/loktak" },
    accessibility: { wheelchairFriendly: false, notes: "Boat jetties are basic; Sendra is on a hillock." },
    routePlan: [{ time: "09:00 AM", activity: "Boat Ride to Phumdis" }],
    foodGuide: [{ name: "Sendra Cottages Cafe", type: "Resort", specialty: "Local Fish Curry", rating: 4.3 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Moirang" }
  },
  {
    id: 1602,
    name: "Keibul Lamjao National Park",
    slug: "keibul-lamjao-park",
    state: "Bishnupur, Manipur",
    category: "Wildlife",
    badge: "World's Only Floating Park",
    image: "https://lotusarise.com/wp-content/uploads/2023/06/Keibul-Lamjao-National-Park.jpeg",
    description: "The only floating national park in the world, and the last natural habitat of the 'Sangai' dancing deer.",
    coordinates: { lat: 24.4623, lng: 93.8329 },
    essentials: {
      bestTime: "October to April",
      weather: "Humid/Cool",
      timings: "06:00 AM - 10:00 AM",
      entryFee: { Entry: "₹30", Camera: "₹50", Boat: "₹500" }
    },
    transport: { nearestAirport: "Imphal (53 km)", nearestRailway: "Dimapur (220 km)", busConnectivity: "Taxi from Moirang town." },
    externalLinks: { officialBooking: "https://forest.manipur.gov.in/", googleMaps: "https://goo.gl/maps/keibul" },
    accessibility: { wheelchairFriendly: false, notes: "Watchtowers require climbing." },
    routePlan: [{ time: "06:00 AM", activity: "Morning Canoe Safari" }],
    foodGuide: [{ name: "Local Homestays", type: "Home", specialty: "Eromba", rating: 4.2 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Moirang" }
  },
  {
    id: 1603,
    name: "Kangla Fort",
    slug: "kangla-fort",
    state: "Imphal, Manipur",
    category: "Heritage",
    badge: "Ancient Seat of Power",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/kangla-fort-imphal-manipur-1-attr-hero?qlt=82&ts=1742165496756",
    description: "Ancient capital of the Manipuri Kingdom. Houses royal palaces, temples, and the sacred 'Kangla Sha'.",
    coordinates: { lat: 24.8080, lng: 93.9455 },
    essentials: {
      bestTime: "October to March",
      weather: "City",
      timings: "07:00 AM - 05:00 PM (Closed Wed)",
      entryFee: { Indian: "₹20", Foreigner: "₹50", ERickshaw: "₹20" }
    },
    transport: { nearestAirport: "Imphal (8 km)", nearestRailway: "Dimapur (210 km)", busConnectivity: "Located in heart of Imphal city." },
    externalLinks: { officialBooking: "https://manipurtourism.gov.in/", googleMaps: "https://goo.gl/maps/kangla" },
    accessibility: { wheelchairFriendly: true, notes: "E-rickshaws make the complex accessible." },
    routePlan: [ { time: "09:00 AM", activity: "Kangla Sha & Main Gate" } ],
    foodGuide: [ { name: "Luxmi Kitchen", type: "City", specialty: "Manipuri Thali", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "RIMS Imphal" }
  },
  {
    id: 1604,
    name: "Imphal War Cemetery",
    slug: "imphal-war-cemetery",
    state: "Imphal, Manipur",
    category: "Heritage",
    badge: "WWII Memorial",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/3f/b3/51/imphal-war-cemetery.jpg?w=1200&h=-1&s=1",
    description: "Maintained by the Commonwealth War Graves Commission, it commemorates soldiers who died in the Battle of Imphal.",
    coordinates: { lat: 24.8170, lng: 93.9490 },
    essentials: {
      bestTime: "All Year",
      weather: "Pleasant",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Imphal (10 km)", nearestRailway: "Dimapur (210 km)", busConnectivity: "Accessible by auto/taxi from Imphal center." },
    externalLinks: { officialBooking: "https://www.cwgc.org/", googleMaps: "https://goo.gl/maps/imphalcemetery" },
    accessibility: { wheelchairFriendly: true, notes: "Flat, grassy grounds with paved paths." },
    routePlan: [ { time: "03:00 PM", activity: "Walk through the Memorial" } ],
    foodGuide: [ { name: "Forage", type: "Cafe", specialty: "Organic Continental", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "JNIMS Hospital" }
  },
  {
    id: 1605,
    name: "Ima Keithel (Mother's Market)",
    slug: "ima-keithel",
    state: "Imphal, Manipur",
    category: "Heritage",
    badge: "World's Largest All-Women Market",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/ima-keithel-111458520-16x9_0.jpeg?VersionId=f5hP8cZHjaWM0dIs720BktsRNj3uVFm",
    description: "A 500-year-old market run exclusively by women. Over 5000 'Imas' sell traditional handicrafts and produce.",
    coordinates: { lat: 24.8045, lng: 93.9378 },
    essentials: {
      bestTime: "All Year",
      weather: "Crowded",
      timings: "06:00 AM - 07:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Imphal (8 km)", nearestRailway: "Dimapur (210 km)", busConnectivity: "Khwairamband Bazar, central Imphal." },
    externalLinks: { officialBooking: "https://manipurtourism.gov.in/", googleMaps: "https://goo.gl/maps/imakeithel" },
    accessibility: { wheelchairFriendly: true, notes: "Ramp access, but aisles are narrow." },
    routePlan: [ { time: "09:00 AM", activity: "Shopping for Phaneks" } ],
    foodGuide: [ { name: "Market Stalls", type: "Street", specialty: "Chak-hao Kheer", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "City Hospital Imphal" }
  },
  {
    id: 1606,
    name: "Dzukou Valley",
    slug: "dzukou-valley",
    state: "Senapati, Manipur",
    category: "Nature",
    badge: "Valley of Flowers of NE",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/dzukou-valley-kohima-nagaland-attr-hero-1?qlt=82&ts=1727012411648",
    description: "Rolling hills and bamboo forests on the Manipur-Nagaland border, home to the endemic Dzukou Lily.",
    coordinates: { lat: 25.5714, lng: 94.0628 },
    essentials: {
      bestTime: "June to September",
      weather: "Cold/Trekking",
      timings: "Daylight Hours",
      entryFee: { Entry: "₹100", Guide: "₹1500+" }
    },
    transport: { nearestAirport: "Dimapur (74 km)", busConnectivity: "Reach Mao Gate via taxi from Imphal." },
    accessibility: { wheelchairFriendly: false, notes: "Strenuous steep climb." },
    routePlan: [ { time: "06:00 AM", activity: "Start Trek from Mount Iso" } ],
    foodGuide: [ { name: "Bring Your Own", type: "Self", specialty: "Instant Food", rating: 5.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Mao" }
  },
  {
    id: 1607,
    name: "Andro Heritage Village",
    slug: "andro-heritage-village",
    state: "Andro, Manipur",
    category: "Heritage",
    badge: "Ancient Pottery Village",
    image: "https://i0.wp.com/histravelinstincts.com/wp-content/uploads/2020/12/The-complex-with-several-traditional-model-homes-Main-min-Copy.jpeg?fit=800%2C600&ssl=1",
    description: "Famous for traditional coil pottery and a sacred fire burning since ancient times in the Panam Ningthou Temple.",
    coordinates: { lat: 24.8333, lng: 94.0500 },
    essentials: {
      bestTime: "October to March",
      weather: "Rural",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestAirport: "Imphal (25 km)", busConnectivity: "Private taxi from Imphal." },
    externalLinks: { officialBooking: "https://manipurtourism.gov.in/", googleMaps: "https://goo.gl/maps/andro" },
    accessibility: { wheelchairFriendly: false, notes: "Paths are unpaved/muddy." },
    routePlan: [ { time: "10:00 AM", activity: "Mutua Museum & Pottery" } ],
    foodGuide: [ { name: "Local Stalls", type: "Local", specialty: "Yu (Rice Wine)", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "JNIMS Imphal" }
  },
  {
    id: 1608,
    name: "Shree Govindajee Temple",
    slug: "shree-govindajee-temple",
    state: "Imphal, Manipur",
    category: "Spiritual",
    badge: "Royal Vaishnavite Temple",
    image: "https://wp.viacation.com/wp-content/uploads/2025/01/649017.webp",
    description: "The most important temple in Imphal dedicated to Lord Krishna, featuring two gold-plated domes.",
    coordinates: { lat: 24.8025, lng: 93.9472 },
    essentials: {
      bestTime: "Janmashtami & Yaoshang",
      weather: "City",
      timings: "05:00 AM - 12:00 PM, 04:00 PM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Imphal (8 km)", busConnectivity: "Located near the Royal Palace." },
    externalLinks: { officialBooking: "https://manipurtourism.gov.in/", googleMaps: "https://goo.gl/maps/govindajee" },
    accessibility: { wheelchairFriendly: true, notes: "Paved courtyard; some steps to sanctum." },
    routePlan: [ { time: "05:00 PM", activity: "Evening Aarti" } ],
    foodGuide: [ { name: "Govindajee Prasadam", type: "Temple", specialty: "Sweet Rice", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "JNIMS Hospital" }
  },
  {
    id: 1609,
    name: "Singda Dam",
    slug: "singda-dam",
    state: "Kangpokpi, Manipur",
    category: "Nature",
    badge: "Highest Mud Dam in World",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/36/23/62/img-20181021-095952-largejpg.jpg?w=1200&h=-1&s=1",
    description: "Located at 921 meters altitude, it is a popular picnic spot with a massive earthen structure.",
    coordinates: { lat: 24.8762, lng: 93.8188 },
    essentials: {
      bestTime: "October to March",
      weather: "Breezy",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Imphal (25 km)", busConnectivity: "Taxi from Imphal." },
    externalLinks: { officialBooking: "https://manipurtourism.gov.in/", googleMaps: "https://goo.gl/maps/singda" },
    accessibility: { wheelchairFriendly: true, notes: "Paved road on top of the dam." },
    routePlan: [ { time: "03:00 PM", activity: "Sunset Walk" } ],
    foodGuide: [ { name: "Roadside Stalls", type: "Street", specialty: "Fresh Pineapple", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "RIMS Imphal" }
  },
  {
    id: 1610,
    name: "Khongjom War Memorial",
    slug: "khongjom-war-memorial",
    state: "Thoubal, Manipur",
    category: "Heritage",
    badge: "Anglo-Manipur War Site",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/khongjom-war-memorial-imphal-manipur-2-attr-hero?qlt=82&ts=1742176307645",
    description: "Commemorates the 1891 battle against the British. Features a massive sword memorial on Kheba Hill.",
    coordinates: { lat: 24.5097, lng: 94.0202 },
    essentials: {
      bestTime: "April (Khongjom Day)",
      weather: "Sunny",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Imphal (36 km)", busConnectivity: "Indo-Myanmar Highway." },
    externalLinks: { officialBooking: "https://thoubal.nic.in/", googleMaps: "https://goo.gl/maps/khongjom" },
    accessibility: { wheelchairFriendly: true, notes: "Wide paved pathways." },
    routePlan: [ { time: "10:00 AM", activity: "Memorial Visit" } ],
    foodGuide: [ { name: "Classic Thoubal", type: "Hotel", specialty: "Indian", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Thoubal" }
  },
  {
    id: 1611,
    name: "INA Martyr's Memorial",
    slug: "ina-memorial",
    state: "Moirang, Manipur",
    category: "Heritage",
    badge: "First Flag Hoisted Site",
    image: "https://shop.museumsofindia.org/sites/default/files/2018-12/INA%20War%20Museum1_Shruti%20Chakraborty_11.JPG",
    description: "The site where the Indian National Army flag was first hoisted on Indian soil in 1944. Features a Netaji Subhash Chandra Bose museum.",
    coordinates: { lat: 24.4985, lng: 93.7712 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestAirport: "Imphal (45 km)", busConnectivity: "Buses from Imphal to Moirang bazaar." },
    externalLinks: { officialBooking: "https://manipurtourism.gov.in/", googleMaps: "https://goo.gl/maps/ina-moirang" },
    accessibility: { wheelchairFriendly: true, notes: "Flat courtyard and museum entrance." },
    routePlan: [ { time: "11:00 AM", activity: "Museum & Martyr's Gallery" } ],
    foodGuide: [ { name: "Local Eateries", type: "Street", specialty: "Singju", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Moirang" }
  },
  {
    id: 1612,
    name: "Shirui Hills",
    slug: "shirui-hills",
    state: "Ukhrul, Manipur",
    category: "Nature",
    badge: "Home of Shirui Lily",
    image: "https://manipurtourism.gov.in/wp-content/uploads/2017/06/shirui-fest.jpg",
    description: "The peak where the rare Shirui Lily grows. Offers panoramic views of Ukhrul.",
    coordinates: { lat: 25.1167, lng: 94.4333 },
    essentials: {
      bestTime: "May to June (Blooming)",
      weather: "Chilly/Misty",
      timings: "Daylight Hours",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestAirport: "Imphal (90 km)", busConnectivity: "Buses/Taxis from Imphal to Ukhrul." },
    externalLinks: { officialBooking: "https://ukhrul.nic.in/", googleMaps: "https://goo.gl/maps/shirui" },
    accessibility: { wheelchairFriendly: false, notes: "Steep trek to the peak." },
    routePlan: [ { time: "08:00 AM", activity: "Trek to Shirui Peak" } ],
    foodGuide: [ { name: "Ukhrul Cafes", type: "Local", specialty: "Smoked Meat", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Ukhrul" }
  },
  {
    id: 1613,
    name: "Leimaram Waterfall",
    slug: "leimaram-waterfall",
    state: "Bishnupur, Manipur",
    category: "Nature",
    badge: "Three-tier Cascade",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyDn6j0WpA11EwGrJGhO4nvhu1QilYcRd6w&s",
    description: "Also known as Sadu Chiru Waterfall, this scenic spot features three cascades in a lush green valley.",
    coordinates: { lat: 24.7123, lng: 93.7542 },
    essentials: {
      bestTime: "October to March",
      weather: "Cool/Moist",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹30" }
    },
    transport: { nearestAirport: "Imphal (25 km)", busConnectivity: "Taxi from Imphal center." },
    externalLinks: { officialBooking: "https://manipurtourism.gov.in/", googleMaps: "https://goo.gl/maps/leimaram" },
    accessibility: { wheelchairFriendly: false, notes: "Requires climbing stone steps." },
    routePlan: [ { time: "10:00 AM", activity: "Waterfall Hike & Picnic" } ],
    foodGuide: [ { name: "Local Stalls", type: "Basic", specialty: "Pineapple", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "JNIMS Hospital" }
  },
  {
    id: 1614,
    name: "Barak Waterfalls",
    slug: "barak-waterfalls",
    state: "Tamenglong, Manipur",
    category: "Nature",
    badge: "Rafting & Biodiversity Hub",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-N7dkujanQOuMa1vDWkXaDwEUDwjplaTLg&s",
    description: "A series of stunning waterfalls on the Barak River, known for white-water rafting and aquatic life.",
    coordinates: { lat: 24.9812, lng: 93.4875 },
    essentials: {
      bestTime: "September to March",
      weather: "Humid/Forest",
      timings: "Daylight Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Imphal (150 km)", busConnectivity: "Private 4x4 recommended." },
    externalLinks: { officialBooking: "https://tamenglong.nic.in/", googleMaps: "https://goo.gl/maps/barak" },
    accessibility: { wheelchairFriendly: false, notes: "Remote and rugged terrain." },
    routePlan: [ { time: "09:00 AM", activity: "Waterfall Sightseeing" } ],
    foodGuide: [ { name: "Village Homestays", type: "Home", specialty: "Sticky Rice", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Tamenglong" }
  },
  {
    id: 1615,
    name: "Moreh Border Town",
    slug: "moreh-border",
    state: "Moreh, Manipur",
    category: "Heritage",
    badge: "Gateway to Myanmar",
    image: "https://e-paolive.net/galleries/images/Landscape/NH/2012/Moreh_12_5/Moreh_201212_5_10.jpg",
    description: "A strategic trade town on the Indo-Myanmar border. Famous for the Indo-Myanmar Friendship Bridge.",
    coordinates: { lat: 24.2500, lng: 94.3000 },
    essentials: {
      bestTime: "November to February",
      weather: "Hot/Humid",
      timings: "07:00 AM - 04:00 PM",
      entryFee: { Entry: "ILP Required" }
    },
    transport: { nearestAirport: "Imphal (110 km)", busConnectivity: "Shared taxis available from Imphal." },
    externalLinks: { officialBooking: "https://tengnoupal.nic.in/", googleMaps: "https://goo.gl/maps/moreh" },
    accessibility: { wheelchairFriendly: true, notes: "Main market areas are flat." },
    routePlan: [ { time: "10:00 AM", activity: "Border Market Shopping" } ],
    foodGuide: [ { name: "Moreh Eateries", type: "Street", specialty: "Khow Suey", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Moreh Hospital" }
  },
  {
    id: 1616,
    name: "Tharon Cave",
    slug: "tharon-cave",
    state: "Tamenglong, Manipur",
    category: "Nature",
    badge: "Ancient Limestone Caves",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfv6NiW5irf409kRhHP7hQlKCo0FOkTt90KA&s",
    description: "A 650m long cave system featuring carvings similar to the Hobinian culture of Vietnam.",
    coordinates: { lat: 24.9850, lng: 93.5200 },
    essentials: {
      bestTime: "October to March",
      weather: "Cool/Cave",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Entry: "₹50" }
    },
    transport: { nearestAirport: "Imphal (160 km)", busConnectivity: "Private vehicle from Tamenglong town." },
    externalLinks: { officialBooking: "https://tamenglong.nic.in/", googleMaps: "https://goo.gl/maps/tharon" },
    accessibility: { wheelchairFriendly: false, notes: "Requires crawling and dark navigation." },
    routePlan: [ { time: "10:00 AM", activity: "Cave Exploration" } ],
    foodGuide: [ { name: "Local Packed Lunch", type: "Self", specialty: "Bamboo Shoot Pickles", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Tamenglong" }
  }
];
