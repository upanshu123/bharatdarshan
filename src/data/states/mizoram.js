/**
 * MIZORAM_PLACES DATASET (EXTENDED - 15 PLACES)
 * ------------------------------------------------------------------
 * Sources: Mizoram Tourism Department & Local Authorities
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const MIZORAM_PLACES = [
  {
    id: 1801,
    name: "Reiek Tlang",
    slug: "reiek-tlang",
    state: "Mamit, Mizoram",
    category: "Hill Stations",
    badge: "Mizo Heritage Village",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/reiek-tlang-mountain-aizawl-mizoram-blog-ntr-exp-cit-pop?qlt=82&ts=1726674782400 ",
    description: "A prominent peak offering a 360-degree view of the surrounding valleys and Bangladesh plains. The base features a model Heritage Village showcasing traditional Mizo huts of various tribes like Sailo and Ralte.",
    coordinates: { lat: 23.6967, lng: 92.6953 },
    essentials: {
      bestTime: "September to March",
      weather: "Windy/Pleasant",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹20", Permit: "ILP Mandatory" }
    },
    transport: { nearestAirport: "Lengpui (35 km)", nearestRailway: "Silchar (170 km)", busConnectivity: "Taxi from Aizawl (29 km)" },
    externalLinks: { officialBooking: "https://tourism.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/reiek" },
    accessibility: { wheelchairFriendly: false, notes: "Peak trek involves steep rocky steps." },
    routePlan: [ { time: "09:00 AM", activity: "Explore Heritage Village" }, { time: "11:00 AM", activity: "Trek to Peak" } ],
    foodGuide: [ { name: "Reiek Tourist Resort", type: "Govt Lodge", specialty: "Mizo Bai", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Aizawl" }
  },
  {
    id: 1802,
    name: "Solomon's Temple",
    slug: "solomons-temple",
    state: "Aizawl, Mizoram",
    category: "Spiritual",
    badge: "Architectural Marvel",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/33/06/6b/img-20170505-wa0005-largejpg.jpg?w=900&h=-1&s=1 ",
    description: "A grand non-denominational church built with white marble brought from Rajasthan. It is a masterpiece of modern Mizo architecture and can accommodate over 2,000 people in the main hall.",
    coordinates: { lat: 23.7432, lng: 92.7068 },
    essentials: {
      bestTime: "All Year",
      weather: "City/Pleasant",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Lengpui (30 km)", busConnectivity: "Located in Chawlhhmun, accessible by city taxi" },
    externalLinks: { officialBooking: "https://tourism.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/solomonstemple" },
    accessibility: { wheelchairFriendly: true, notes: "Compound is paved and ramps are available." },
    routePlan: [ { time: "10:00 AM", activity: "Architecture Tour" } ],
    foodGuide: [ { name: "Chopstyx", type: "City", specialty: "Chinese & Tibetan", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Aizawl" }
  },
  {
    id: 1803,
    name: "Vantawng Falls",
    slug: "vantawng-falls",
    state: "Thenzawl (Serchhip), Mizoram",
    category: "Nature",
    badge: "Highest Waterfall in Mizoram",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/vantawng-khawthla-aizawl-mizoram-2-attr-hero?qlt=82&ts=1726665729651 ",
    description: "The highest waterfall in Mizoram, cascading from 750 feet. It is named after Vantawng, a legendary swimmer. The falls are surrounded by lush bamboo groves and deep valleys.",
    coordinates: { lat: 23.2952, lng: 92.7628 },
    essentials: {
      bestTime: "September to January",
      weather: "Forest/Cool",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹10" }
    },
    transport: { nearestAirport: "Lengpui (140 km)", busConnectivity: "90 km drive from Aizawl" },
    externalLinks: { officialBooking: "https://tourism.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/vantawng" },
    accessibility: { wheelchairFriendly: true, notes: "Viewing tower is accessible by car." },
    routePlan: [ { time: "11:00 AM", activity: "Waterfall Photography" } ],
    foodGuide: [ { name: "Tourist Lodge Thenzawl", type: "Govt", specialty: "Mizo Thali", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Thenzawl" }
  },
  {
    id: 1804,
    name: "Phawngpui (Blue Mountain)",
    slug: "phawngpui-blue-mountain",
    state: "Lawngtlai, Mizoram",
    category: "Adventure",
    badge: "Highest Peak in Mizoram",
    image: " https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1700043146_reiek_mountain.jpg.webp ",
    description: "The highest point in Mizoram (2157m), known as the Blue Mountain. It is a National Park famous for its exotic flora, orchids, and rhododendrons, offering views of the Chhimtuipui River.",
    coordinates: { lat: 22.6316, lng: 93.0425 },
    essentials: {
      bestTime: "October to April",
      weather: "Cold/Windy",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "₹20", Guide: "₹500 (Mandatory)" }
    },
    transport: { nearestAirport: "Lengpui (300 km)", busConnectivity: "Private 4x4 from Sangau village" },
    externalLinks: { officialBooking: "https://forest.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/phawngpui" },
    accessibility: { wheelchairFriendly: false, notes: "Strictly trekking only." },
    routePlan: [ { time: "06:00 AM", activity: "Start Trek" }, { time: "11:00 AM", activity: "Reach Summit" } ],
    foodGuide: [ { name: "Sangau Homestay", type: "Village", specialty: "Smoked Meat", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Siaha" }
  },
  {
    id: 1805,
    name: "Tam Dil Lake",
    slug: "tam-dil-lake",
    state: "Saitual, Mizoram",
    category: "Nature",
    badge: "Lake of Mustard",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/tamdil-aizawl-mizoram-1-attr-hero?qlt=82&ts=1726665784318 ",
    description: "A natural lake and popular picnic spot near Saitual. 'Tam Dil' translates to 'Lake of Mustard'. It provides a serene environment for boating and forest walks.",
    coordinates: { lat: 23.7369, lng: 92.9476 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "₹10", Boating: "₹100" }
    },
    transport: { nearestAirport: "Lengpui (95 km)", busConnectivity: "85 km drive from Aizawl" },
    externalLinks: { officialBooking: "https://tourism.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/tamdil" },
    accessibility: { wheelchairFriendly: true, notes: "Lodge and jetty areas are flat." },
    routePlan: [ { time: "10:00 AM", activity: "Boating" } ],
    foodGuide: [ { name: "Tam Dil Lodge", type: "Govt", specialty: "Local Fish", rating: 3.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Saitual" }
  },
  {
    id: 1806,
    name: "Hmuifang Tlang",
    slug: "hmuifang-tlang",
    state: "Aizawl District, Mizoram",
    category: "Hill Stations",
    badge: "Misty Mountain Resort",
    image: " https://farm1.staticflickr.com/901/41570429605_d12f0cd66f_b.jpg ",
    description: "Located at an elevation of 1619m, this mountain is still covered with virgin forests. It is famous for hosting cultural festivals and offering a peaceful grassy plateau for camping.",
    coordinates: { lat: 23.4533, lng: 92.7533 },
    essentials: {
      bestTime: "November to February",
      weather: "Cold/Misty",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Lengpui (80 km)", busConnectivity: "50 km from Aizawl city" },
    externalLinks: { officialBooking: "https://tourism.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/hmuifang" },
    accessibility: { wheelchairFriendly: true, notes: "Plateau area is flat and grassy." },
    routePlan: [ { time: "12:00 PM", activity: "Nature Walk" } ],
    foodGuide: [ { name: "Hmuifang Resort", type: "Govt", specialty: "Tea & Snacks", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Aizawl" }
  },
  {
    id: 1807,
    name: "Rih Dil Lake",
    slug: "rih-dil-lake",
    state: "Champhai, Mizoram",
    category: "Nature",
    badge: "Spiritual Gateway",
    image: " https://upload.wikimedia.org/wikipedia/commons/d/d1/Rih_dil.jpg ",
    description: "A heart-shaped lake located a few kilometers inside Myanmar but deeply integrated into Mizo folklore. It is believed to be the passage to the abode of the dead.",
    coordinates: { lat: 23.4616, lng: 93.4355 },
    essentials: {
      bestTime: "October to March",
      weather: "Cool",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Entry: "₹20 (Border Permit)" }
    },
    transport: { nearestAirport: "Lengpui (210 km)", busConnectivity: "22 km from Champhai town" },
    externalLinks: { officialBooking: "https://champhai.nic.in/", googleMaps: "https://goo.gl/maps/rihdil" },
    accessibility: { wheelchairFriendly: false, notes: "Border crossing involved." },
    routePlan: [ { time: "11:00 AM", activity: "Lake Visit" } ],
    foodGuide: [ { name: "Zokhawthar Eatery", type: "Stall", specialty: "Burmese Food", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Champhai" }
  },
  {
    id: 1808,
    name: "KV Paradise",
    slug: "kv-paradise",
    state: "Durtlang (Aizawl), Mizoram",
    category: "Heritage",
    badge: "Mizo Taj Mahal",
    image: " https://content3.jdmagicbox.com/v2/comp/aizawl/l5/9999px389.x389.250306000438.b2l5/catalogue/kv-paradise-durtlang-aizawl-tourist-attraction-iiyhqtbm4k.jpg ",
    description: "A beautiful mausoleum built by Vate Khawlhring in memory of his late wife, Rosangi. It is an edifice of love located on a hill slope offering panoramic views of Aizawl.",
    coordinates: { lat: 23.7550, lng: 92.7150 },
    essentials: {
      bestTime: "All Year",
      weather: "Pleasant",
      timings: "10:00 AM - 04:00 PM",
      entryFee: { Entry: "₹10" }
    },
    transport: { nearestAirport: "Lengpui (30 km)", busConnectivity: "Located in Durtlang Leitan" },
    externalLinks: { officialBooking: "https://tourism.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/kvparadise" },
    accessibility: { wheelchairFriendly: false, notes: "Steps lead up to the monument." },
    routePlan: [ { time: "03:00 PM", activity: "Monument Visit" } ],
    foodGuide: [ { name: "Durtlang Cafe", type: "Local", specialty: "Coffee & Momos", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Aizawl" }
  },
  {
    id: 1809,
    name: "Murlen National Park",
    slug: "murlen-national-park",
    state: "Champhai District, Mizoram",
    category: "Wildlife",
    badge: "Amazon of Mizoram",
    image: " https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1700046000_5c3ea2816c970d79dcaeaa51_1547608705153.jpg.webp ",
    description: "Known for its thick forest cover so dense that sunlight barely reaches the floor. It is home to leopards, tigers, and the Hoolock Gibbon.",
    coordinates: { lat: 23.6394, lng: 93.3031 },
    essentials: {
      bestTime: "October to March",
      weather: "Humid/Dark",
      timings: "06:00 AM - 04:00 PM",
      entryFee: { Entry: "₹20", Guide: "₹500" }
    },
    transport: { nearestAirport: "Lengpui (245 km)", busConnectivity: "Taxi from Champhai town" },
    externalLinks: { officialBooking: "https://champhai.nic.in/", googleMaps: "https://goo.gl/maps/murlen" },
    accessibility: { wheelchairFriendly: false, notes: "Dense jungle terrain." },
    routePlan: [ { time: "07:00 AM", activity: "Jungle Trek" } ],
    foodGuide: [ { name: "Champhai Lodge", type: "Govt", specialty: "Mizo Thali", rating: 3.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Champhai" }
  },
  {
    id: 1810,
    name: "Palak Dil",
    slug: "palak-dil",
    state: "Siaha, Mizoram",
    category: "Nature",
    badge: "Largest Natural Lake",
    image: " https://mizoramtourism.com/post_images/626bdb1307952_Palak%20lake.jpg ",
    description: "An oval-shaped lake in southern Mizoram. It is a major stopover for migratory birds and is surrounded by a dense tropical evergreen forest.",
    coordinates: { lat: 22.2036, lng: 92.8947 },
    essentials: {
      bestTime: "November to March",
      weather: "Humid",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Lengpui (370 km)", busConnectivity: "Hire 4x4 from Siaha (Saiha)" },
    externalLinks: { officialBooking: "https://madc.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/palakdil" },
    accessibility: { wheelchairFriendly: false, notes: "Extremely remote location." },
    routePlan: [ { time: "09:00 AM", activity: "Bird Watching" } ],
    foodGuide: [ { name: "Phura Village Stalls", type: "Village", specialty: "Smoked Pork", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Siaha" }
  },
  {
    id: 1811,
    name: "Dampa Tiger Reserve",
    slug: "dampa-tiger-reserve",
    state: "Mamit District, Mizoram",
    category: "Wildlife",
    badge: "Largest Wildlife Sanctuary",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/dampa-tiger-reserve-aizawl-mizoram-dampa-1-attr-hero?qlt=82&ts=1726665789851 ",
    description: "Spread over 500 sq km along the Bangladesh border. It is a haven for tigers, elephants, and leopards, featuring deep valleys and rugged hills.",
    coordinates: { lat: 23.6800, lng: 92.4500 },
    essentials: {
      bestTime: "November to February",
      weather: "Humid/Warm",
      timings: "06:00 AM - 04:00 PM",
      entryFee: { Entry: "₹20", Guide: "₹500" }
    },
    transport: { nearestAirport: "Lengpui (70 km)", busConnectivity: "125 km from Aizawl city" },
    externalLinks: { officialBooking: "https://forest.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/dampa" },
    accessibility: { wheelchairFriendly: false, notes: "Strictly for trekking and safaris." },
    routePlan: [ { time: "06:30 AM", activity: "Safari Start" } ],
    foodGuide: [ { name: "Teirei Lodge", type: "Govt", specialty: "Basic Meals", rating: 3.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Mamit" }
  },
  {
    id: 1812,
    name: "Mizoram State Museum",
    slug: "mizoram-state-museum",
    state: "Aizawl, Mizoram",
    category: "Heritage",
    badge: "Cultural Repository",
    image: " https://mizoramtourism.com/post_images/626a7d87731ed_state%20museum2.jpg ",
    description: "Located at the center of Aizawl, it houses artifacts, traditional textiles, and ethnographic displays that narrate the history of the Mizo people.",
    coordinates: { lat: 23.7271, lng: 92.7176 },
    essentials: {
      bestTime: "All Year",
      weather: "Indoor",
      timings: "10:00 AM - 04:00 PM (Closed Sun/Mon)",
      entryFee: { Indian: "₹20", Camera: "₹20" }
    },
    transport: { nearestAirport: "Lengpui (30 km)", busConnectivity: "Walkable from city center" },
    externalLinks: { officialBooking: "https://artandculture.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/aizawlmuseum" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available." },
    routePlan: [ { time: "11:00 AM", activity: "History Tour" } ],
    foodGuide: [ { name: "Red Pepper", type: "City", specialty: "Mizo Noodles", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Aizawl" }
  },
  {
    id: 1813,
    name: "Thenzawl Golf Resort",
    slug: "thenzawl-golf-resort",
    state: "Serchhip, Mizoram",
    category: "Adventure",
    badge: "Eco-Tourism Hub",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/b9/4a/72/sunrise-at-thenzawl-golf.jpg?w=900&h=500&s=1 ",
    description: "One of the most scenic golf courses in the Northeast. It is part of the Swadesh Darshan scheme and offers luxury glamping and wellness facilities.",
    coordinates: { lat: 23.2750, lng: 92.7500 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "₹50 (Golf extra)" }
    },
    transport: { nearestAirport: "Lengpui (135 km)", busConnectivity: "Taxi from Thenzawl town" },
    externalLinks: { officialBooking: "https://tourism.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/thenzawlgolf" },
    accessibility: { wheelchairFriendly: true, notes: "Resort areas are very accessible." },
    routePlan: [ { time: "09:00 AM", activity: "Golfing Session" } ],
    foodGuide: [ { name: "Resort Restaurant", type: "Luxury", specialty: "Indian/Mizo", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Thenzawl" }
  },
  {
    id: 1814,
    name: "Tuirihiau Falls",
    slug: "tuirihiau-falls",
    state: "Serchhip, Mizoram",
    category: "Nature",
    badge: "Inside-Out Waterfall",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/6e/84/c2/tuirihiau-falls.jpg?w=1200&h=-1&s=1 ",
    description: "A unique waterfall where you can walk behind the curtain of water. It forms a natural cave-like structure under the rock shelf.",
    coordinates: { lat: 23.3000, lng: 92.7600 },
    essentials: {
      bestTime: "September to December",
      weather: "Damp/Cool",
      timings: "09:00 AM - 04:30 PM",
      entryFee: { Entry: "₹10" }
    },
    transport: { nearestAirport: "Lengpui (140 km)", busConnectivity: "Upstream from Vantawng Falls" },
    externalLinks: { officialBooking: "https://tourism.mizoram.gov.in/", googleMaps: "https://goo.gl/maps/tuirihiau" },
    accessibility: { wheelchairFriendly: false, notes: "Uneven forest path." },
    routePlan: [ { time: "12:00 PM", activity: "Walk behind the falls" } ],
    foodGuide: [ { name: "Local Picnic Stalls", type: "Basic", specialty: "Tea", rating: 3.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Thenzawl" }
  },
  {
    id: 1815,
    name: "Lianchhiari Lunglen Tlang",
    slug: "lianchhiari-lunglen-tlang",
    state: "Champhai, Mizoram",
    category: "Heritage",
    badge: "Lover's Peak",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/lianchhiari-lunglen-tlang-champhai-mizoram-2-new-attr-hero?qlt=82&ts=1726674811458 ",
    description: "A rocky ledge over a high cliff near the Myanmar border. It is associated with the tragic love story of Lianchhiari and her lover, Chawngfianga.",
    coordinates: { lat: 23.4000, lng: 93.3500 },
    essentials: {
      bestTime: "October to April",
      weather: "Windy/Cold",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Lengpui (200 km)", busConnectivity: "Taxi from Champhai town" },
    externalLinks: { officialBooking: "https://champhai.nic.in/", googleMaps: "https://goo.gl/maps/lianchhiari" },
    accessibility: { wheelchairFriendly: false, notes: "Cliff edge is steep." },
    routePlan: [ { time: "04:00 PM", activity: "Photography" } ],
    foodGuide: [ { name: "Champhai Town Cafes", type: "City", specialty: "Mizo Snacks", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Champhai" }
  }
];
