/**
 * ASSAM_PLACES DATASET (Extended - 16 Places)
 * ------------------------------------------------------------------
 * Sources: ATDC (Assam Tourism Dev Corp), IWT & Forest Dept.
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const ASSAM_PLACES = [
  // --- WILDLIFE ---
  {
    id: 401,
    name: "Kaziranga National Park",
    slug: "kaziranga-national-park",
    state: "Kohora (Golaghat), Assam",
    category: "Wildlife",
    badge: "Home of One-Horned Rhino",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/35/b6/17/photo7jpg.jpg?w=1400&h=800&s=1",
    description: "A UNESCO World Heritage Site hosting two-thirds of the world's great one-horned rhinoceroses. The vast expanse of tall elephant grass and marshland is also a Tiger Reserve and birding paradise.",
    coordinates: { lat: 26.5775, lng: 93.1711 },
    essentials: {
      bestTime: "November to April",
      weather: "Foggy Mornings/Pleasant",
      timings: "07:30 AM - 10:00 AM, 01:30 PM - 03:00 PM",
      entryFee: { Indian: "₹100", JeepSafari: "₹450", ElephantSafari: "₹900-1200" }
    },
    transport: { nearestAirport: "Jorhat (97 km)", nearestRailway: "Furkating (75 km)", busConnectivity: "Frequent ASTC buses from Guwahati" },
    externalLinks: { officialBooking: "https://kaziranga.assam.gov.in/", googleMaps: "https://goo.gl/maps/kaziranga" },
    accessibility: { wheelchairFriendly: false, notes: "Jeep safaris are high-clearance. Orchid Park is accessible." },
    routePlan: [ { time: "05:30 AM", activity: "Elephant Safari" }, { time: "02:00 PM", activity: "Jeep Safari" } ],
    foodGuide: [ { name: "Maihang Restaurant", type: "Local", specialty: "Duck Curry", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Bokakhat" }
  },
  {
    id: 402,
    name: "Manas National Park",
    slug: "manas-national-park",
    state: "Barpeta Road, Assam",
    category: "Wildlife",
    badge: "UNESCO Natural Heritage",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/manas-wildlife-sanctuary-chirang-and-baksa-assam-3-attr-hero?qlt=82&ts=1751459668437",
    description: "Located at the Himalayan foothills, Manas is famous for its Project Tiger reserve, elephant reserve, and biosphere reserve. It is known for its rare golden langurs and pygmy hogs.",
    coordinates: { lat: 26.6594, lng: 91.0011 },
    essentials: {
      bestTime: "October to April",
      weather: "Sub-tropical",
      timings: "06:00 AM - 03:00 PM (Entry)",
      entryFee: { Indian: "₹100", JeepHire: "₹3000-4000" }
    },
    transport: { nearestAirport: "Guwahati (145 km)", nearestRailway: "Barpeta Road (22 km)", busConnectivity: "Bus to Barpeta Road, then Taxi" },
    externalLinks: { officialBooking: "https://manasnationalpark.co.in/", googleMaps: "https://goo.gl/maps/manas" },
    accessibility: { wheelchairFriendly: false, notes: "Remote jungle terrain." },
    routePlan: [ { time: "06:30 AM", activity: "Safari to Mathanguri" } ],
    foodGuide: [ { name: "Smiling Tusker", type: "Camp", specialty: "Bodo Cuisine", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Barpeta Civil Hospital" }
  },
  {
    id: 403,
    name: "Kamakhya Temple",
    slug: "kamakhya-temple",
    state: "Guwahati, Assam",
    category: "Spiritual",
    badge: "Oldest Shakti Peeth",
    image: "https://assets.cntraveller.in/photos/60ba14e7a1a415b43b10ba4d/master/w_1600%2Cc_limit/Kamakhya-Temple-Assam.jpg",
    description: "Perched on Nilachal Hill, this is one of the most revered Shakti Peethas in India. It is the center of Tantric worship and famous for the annual Ambubachi Mela.",
    coordinates: { lat: 26.1664, lng: 91.7056 },
    essentials: {
      bestTime: "September to March",
      weather: "Humid",
      timings: "08:00 AM - 01:00 PM, 02:30 PM - 05:30 PM",
      entryFee: { General: "Free", VIP: "₹501" }
    },
    transport: { nearestAirport: "Guwahati (20 km)", nearestRailway: "Kamakhya Jn (3 km)", busConnectivity: "ASTC electric buses available" },
    externalLinks: { officialBooking: "https://www.maakamakhya.org/", googleMaps: "https://goo.gl/maps/kamakhya" },
    accessibility: { wheelchairFriendly: false, notes: "Significant steps to main sanctum." },
    routePlan: [ { time: "07:00 AM", activity: "Darshan" }, { time: "12:30 PM", activity: "Nilachal Hill View" } ],
    foodGuide: [ { name: "Temple Bhog", type: "Prasad", specialty: "Khichdi", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sanjeevani Hospital" }
  },
  {
    id: 404,
    name: "Rang Ghar",
    slug: "rang-ghar",
    state: "Sivasagar, Assam",
    category: "Heritage",
    badge: "Colosseum of the East",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/96/12/7d/caption.jpg?w=900&h=-1&s=1",
    description: "Built by Ahom King Pramatta Singha in 1746, this two-storied pavilion served as a royal sports arena for buffalo fights and other events.",
    coordinates: { lat: 26.9632, lng: 94.6288 },
    essentials: {
      bestTime: "Winter",
      weather: "Pleasant",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Indian: "₹25", Video: "₹25" }
    },
    transport: { nearestAirport: "Jorhat (60 km)", nearestRailway: "Sivasagar Town (3 km)", busConnectivity: "Auto from Sivasagar stand" },
    externalLinks: { officialBooking: "https://archaeology.assam.gov.in/", googleMaps: "https://goo.gl/maps/rangghar" },
    accessibility: { wheelchairFriendly: true, notes: "Lawn area is flat and accessible." },
    routePlan: [ { time: "10:00 AM", activity: "Rang Ghar Visit" }, { time: "11:30 AM", activity: "Talatal Ghar" } ],
    foodGuide: [ { name: "Kareng Restaurant", type: "City", specialty: "Pork Bamboo Shoot", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Sivasagar" }
  },
  {
    id: 405,
    name: "Majuli Island",
    slug: "majuli-island",
    state: "Majuli (Jorhat), Assam",
    category: "Heritage",
    badge: "Largest River Island",
    image: "https://www.meghalayatourcabs.com/wp-content/uploads/2019/05/Majuli-River-Island-Assam-Tourist-Spots.jpg",
    description: "The cultural capital of Assam, Majuli is the heart of Neo-Vaishnavite culture. It is famous for its Satras (monasteries) and traditional pottery and mask-making.",
    coordinates: { lat: 26.9503, lng: 94.1036 },
    essentials: {
      bestTime: "October to March",
      weather: "Cool/River Breeze",
      timings: "Ferry: 7 AM - 3:30 PM",
      entryFee: { Ferry: "₹15-30", Entry: "Free" }
    },
    transport: { nearestRailway: "Jorhat (20 km to Ghat)", busConnectivity: "Ferry from Neamati Ghat (Jorhat)" },
    externalLinks: { officialBooking: "https://iwtai.assam.gov.in/", googleMaps: "https://goo.gl/maps/majuli" },
    accessibility: { wheelchairFriendly: false, notes: "Sandy banks make ferry boarding tough." },
    routePlan: [ { time: "10:30 AM", activity: "Auniati Satra" }, { time: "02:00 PM", activity: "Mask Making at Samaguri" } ],
    foodGuide: [ { name: "Ural Restaurant", type: "Local", specialty: "Mishing Thali", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Garamur Civil Hospital" }
  },
  {
    id: 406,
    name: "Umananda Island",
    slug: "umananda-island",
    state: "Guwahati, Assam",
    category: "Nature",
    badge: "Peacock Island",
    image: "https://images.nativeplanet.com/img/2016/01/25-1453722923-umanandaisland.jpg",
    description: "The smallest inhabited river island in the world. It houses an ancient Shiva temple and is the last natural habitat of the endangered Golden Langur in this region.",
    coordinates: { lat: 26.1925, lng: 91.7455 },
    essentials: {
      bestTime: "Winter",
      weather: "Breezy",
      timings: "05:30 AM - 05:00 PM",
      entryFee: { Ferry: "₹20-100" }
    },
    transport: { nearestRailway: "Guwahati (1.5 km)", busConnectivity: "Walk to Ghat from Fancy Bazar" },
    externalLinks: { officialBooking: "https://tourism.assam.gov.in/", googleMaps: "https://goo.gl/maps/umananda" },
    accessibility: { wheelchairFriendly: false, notes: "100+ steep steps from ghat to temple." },
    routePlan: [ { time: "03:30 PM", activity: "Temple Darshan" }, { time: "04:30 PM", activity: "River Sunset" } ],
    foodGuide: [ { name: "Mangal Chandi", type: "City", specialty: "Fish Thali", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "MMCH Guwahati" }
  },
  {
    id: 407,
    name: "Haflong",
    slug: "haflong",
    state: "Dima Hasao, Assam",
    category: "Hill Stations",
    badge: "Scotland of Assam",
    image: "https://static2.tripoto.com/media/filter/tst/img/4335/TripDocument/1471437626_famous_hill_stations_in_india.jpg.webp",
    description: "Assam's only hill station, known for Haflong Lake and the mysterious bird suicide phenomenon at Jatinga. Offers stunning valley views and Vistadome train rides.",
    coordinates: { lat: 25.1726, lng: 93.0188 },
    essentials: {
      bestTime: "October to April",
      weather: "Cool/Misty",
      timings: "24 Hours",
      entryFee: { Boating: "₹50-100" }
    },
    transport: { nearestRailway: "New Haflong (4 km)", busConnectivity: "Buses from Silchar and Guwahati" },
    externalLinks: { officialBooking: "https://tourism.assam.gov.in/", googleMaps: "https://goo.gl/maps/haflong" },
    accessibility: { wheelchairFriendly: true, notes: "Lake area has paved pathways." },
    routePlan: [ { time: "09:00 AM", activity: "Lake Boating" }, { time: "03:00 PM", activity: "Jatinga Viewpoint" } ],
    foodGuide: [ { name: "Hangover Cafe", type: "Cafe", specialty: "Momos", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Haflong Civil Hospital" }
  },
  {
    id: 408,
    name: "Nameri National Park",
    slug: "nameri-national-park",
    state: "Sonitpur (Tezpur), Assam",
    category: "Nature",
    badge: "Adventure Hub",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi1rVTPEyJDpDP7kYZnNwgWzBCu8OYohiVWQ&s",
    description: "Located at the Himalayan foothills, Nameri is famous for river rafting on Jia Bhoroli and as the home of the rare White-Winged Wood Duck.",
    coordinates: { lat: 26.9318, lng: 92.8804 },
    essentials: {
      bestTime: "November to March",
      weather: "Cool/Forest",
      timings: "06:00 AM - 02:00 PM",
      entryFee: { Indian: "₹50", Rafting: "₹1800-2500" }
    },
    transport: { nearestAirport: "Tezpur (35 km)", busConnectivity: "Taxi from Tezpur city" },
    externalLinks: { officialBooking: "https://sonitpur.gov.in/", googleMaps: "https://goo.gl/maps/nameri" },
    accessibility: { wheelchairFriendly: false, notes: "Involves hiking and rafting." },
    routePlan: [ { time: "07:00 AM", activity: "Jungle Trek" }, { time: "10:00 AM", activity: "River Rafting" } ],
    foodGuide: [ { name: "Eco Camp Kitchen", type: "Camp", specialty: "River Fish", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Tezpur Medical College" }
  },
  {
    id: 409,
    name: "Pobitora Wildlife Sanctuary",
    slug: "pobitora-wildlife-sanctuary",
    state: "Morigaon (Guwahati), Assam",
    category: "Wildlife",
    badge: "Highest Rhino Density",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDvbM5uI8Rp5QgDfOPD6q10W2us2VzD2V3Q&s",
    description: "Often called 'Mini Kaziranga', this sanctuary has the highest density of one-horned rhinos in the world. It is a very popular day-trip destination from Guwahati.",
    coordinates: { lat: 26.2486, lng: 92.0427 },
    essentials: {
      bestTime: "November to April",
      weather: "Dry/Sunny",
      timings: "06:30 AM - 03:00 PM",
      entryFee: { Entry: "₹50", JeepSafari: "₹1500-2000" }
    },
    transport: { nearestAirport: "Guwahati (50 km)", busConnectivity: "Direct buses from Adabari (Guwahati)" },
    externalLinks: { officialBooking: "https://tourism.assam.gov.in/", googleMaps: "https://goo.gl/maps/pobitora" },
    accessibility: { wheelchairFriendly: false, notes: "Viewing platform near gate is accessible." },
    routePlan: [ { time: "09:00 AM", activity: "Jeep Safari" }, { time: "12:00 PM", activity: "Mayong Magic Museum" } ],
    foodGuide: [ { name: "Maibong Resort", type: "Resort", specialty: "Assamese Thali", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Morigaon Civil Hospital" }
  },
  {
    id: 410,
    name: "Srimanta Sankaradeva Kalakshetra",
    slug: "kalakshetra-guwahati",
    state: "Guwahati, Assam",
    category: "Heritage",
    badge: "Cultural Hub",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3k0UJGwYWtvM6-vFz7aZWN_GLXUlfOL98DQ&s",
    description: "A cultural institution showcasing the diverse art and life of Assam. It features museums, libraries, open-air theatres, and an artisan village.",
    coordinates: { lat: 26.1287, lng: 91.8217 },
    essentials: {
      bestTime: "All Year",
      weather: "Comfortable",
      timings: "10:00 AM - 07:00 PM",
      entryFee: { Adult: "₹30", Museum: "₹10" }
    },
    transport: { nearestRailway: "Guwahati (10 km)", busConnectivity: "Well connected by city bus and Uber" },
    externalLinks: { officialBooking: "https://kalakshetra.assam.gov.in/", googleMaps: "https://goo.gl/maps/kalakshetra" },
    accessibility: { wheelchairFriendly: true, notes: "Battery-operated vehicles available inside." },
    routePlan: [ { time: "03:00 PM", activity: "Museum Tour" }, { time: "06:00 PM", activity: "Light & Sound Show" } ],
    foodGuide: [ { name: "Paradise", type: "City", specialty: "Parampara Thali", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Down Town Hospital" }
  },
  {
    id: 411,
    name: "Digboi Oil City",
    slug: "digboi-oil-city",
    state: "Digboi (Tinsukia), Assam",
    category: "Heritage",
    badge: "Birthplace of Oil in India",
    image: "https://jungleideas.files.wordpress.com/2015/11/digboi-refinery-assam.jpg",
    description: "Home to Asia's first oil refinery. Visitors can explore the Digboi Centenary Museum, see vintage machinery, and visit the historic war cemetery.",
    coordinates: { lat: 27.3857, lng: 95.6262 },
    essentials: {
      bestTime: "Oct to March",
      weather: "Pleasant",
      timings: "10:00 AM - 04:00 PM (Museum)",
      entryFee: { Museum: "₹20" }
    },
    transport: { nearestAirport: "Dibrugarh (85 km)", busConnectivity: "Good connectivity from Tinsukia" },
    externalLinks: { officialBooking: "https://aodigboirefinery.co.in/", googleMaps: "https://goo.gl/maps/digboi" },
    accessibility: { wheelchairFriendly: true, notes: "Museum is largely accessible." },
    routePlan: [ { time: "10:30 AM", activity: "Refinery Museum" }, { time: "12:00 PM", activity: "War Cemetery" } ],
    foodGuide: [ { name: "Digboi Club", type: "Club", specialty: "Colonial Indian", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Digboi Civil Hospital" }
  },
  {
    id: 412,
    name: "Sualkuchi Silk Village",
    slug: "sualkuchi-silk-village",
    state: "Kamrup (Guwahati), Assam",
    category: "Culture",
    badge: "Manchester of the East",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1LkEsnFv4kdJdKoHAqqPVY-d5_ZZU70oRQ&s",
    description: "The weaving center of Assam, world-famous for Muga (Golden) silk. Every house here is a studio where visitors can watch the rhythmic sounds of the handloom.",
    coordinates: { lat: 26.1706, lng: 91.5542 },
    essentials: {
      bestTime: "All Year",
      weather: "Humid",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Guwahati (35 km)", busConnectivity: "Frequent shared taxis from Guwahati" },
    externalLinks: { officialBooking: "https://tourism.assam.gov.in/", googleMaps: "https://goo.gl/maps/sualkuchi" },
    accessibility: { wheelchairFriendly: false, notes: "Village lanes are unpaved." },
    routePlan: [ { time: "10:00 AM", activity: "Weaving Demo" }, { time: "02:00 PM", activity: "Silk Shopping" } ],
    foodGuide: [ { name: "Local Dhabas", type: "Street", specialty: "Veg Assamese", rating: 3.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sualkuchi PHC" }
  },
  {
    id: 413,
    name: "Hajo Pilgrimage Centre",
    slug: "hajo-pilgrimage",
    state: "Hajo (Kamrup), Assam",
    category: "Spiritual",
    badge: "Convergence of Faiths",
    image: "https://thetravelnortheast.com/wp-content/uploads/2022/03/Hajo-e1651041645856.jpg",
    description: "An ancient pilgrimage town for Hindus, Buddhists, and Muslims. Features the Hayagriva Madhava Temple and the Poa Mecca mosque.",
    coordinates: { lat: 26.2694, lng: 91.5645 },
    essentials: {
      bestTime: "Year Round",
      weather: "Humid",
      timings: "07:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Guwahati (30 km)", busConnectivity: "Regular buses from Guwahati" },
    externalLinks: { googleMaps: "https://goo.gl/maps/hajo" },
    accessibility: { wheelchairFriendly: false, notes: "Temple requires climbing stairs." },
    routePlan: [ { time: "09:00 AM", activity: "Hayagriva Temple" }, { time: "12:30 PM", activity: "Poa Mecca" } ],
    foodGuide: [ { name: "Local Stalls", type: "Pilgrim", specialty: "Ladoo & Pitha", rating: 3.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Hajo PHC" }
  },
  {
    id: 414,
    name: "Tezpur (Agnigarh Hill)",
    slug: "agnigarh-tezpur",
    state: "Tezpur, Assam",
    category: "Heritage",
    badge: "City of Eternal Romance",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Agnigarh_Hill%2C_Tezpur.JPG",
    description: "Known for the romantic legend of Usha and Aniruddha. Agnigarh Hill offers a breathtaking panoramic view of the Brahmaputra and Kolia Bhomora bridge.",
    coordinates: { lat: 26.6212, lng: 92.7935 },
    essentials: {
      bestTime: "Oct to March",
      weather: "Pleasant",
      timings: "09:00 AM - 07:00 PM",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestAirport: "Tezpur (10 km)", busConnectivity: "Well connected by ASTC buses" },
    externalLinks: { googleMaps: "https://goo.gl/maps/tezpur" },
    accessibility: { wheelchairFriendly: false, notes: "Requires climbing many steps." },
    routePlan: [ { time: "10:00 AM", activity: "Agnigarh Viewpoint" }, { time: "04:00 PM", activity: "Cole Park" } ],
    foodGuide: [ { name: "Royal Kitchen", type: "City", specialty: "Prawn Curry", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Tezpur Medical College" }
  },
  {
    id: 415,
    name: "Hoollongapar Gibbon Sanctuary",
    slug: "gibbon-sanctuary",
    state: "Mariani (Jorhat), Assam",
    category: "Wildlife",
    badge: "Home of India's Only Ape",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/hoollongapar-gibbon-sanctuary-jorhat-assam-1-attr-hero?qlt=82&ts=1751458963026",
    description: "An isolated rainforest island home to the Hoolock Gibbon (India's only ape species) and the Bengal Slow Loris. Perfect for nature trekking.",
    coordinates: { lat: 26.7118, lng: 94.2758 },
    essentials: {
      bestTime: "Nov to March",
      weather: "Moist Forest",
      timings: "07:30 AM - 04:00 PM",
      entryFee: { Indian: "₹50", Guide: "₹300" }
    },
    transport: { nearestRailway: "Jorhat (20 km)", busConnectivity: "Local taxi/auto to gate" },
    externalLinks: { googleMaps: "https://goo.gl/maps/gibbonsanctuary" },
    accessibility: { wheelchairFriendly: false, notes: "Requires jungle trekking." },
    routePlan: [ { time: "07:30 AM", activity: "Jungle Trek to spot Gibbons" } ],
    foodGuide: [ { name: "Tea Estate Canteen", type: "Local", specialty: "Fresh Tea", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Jorhat Civil Hospital" }
  },
  {
    id: 416,
    name: "Dibru-Saikhowa National Park",
    slug: "dibru-saikhowa",
    state: "Guijan (Tinsukia), Assam",
    category: "Wildlife",
    badge: "Wetland & Feral Horses",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/dibru-saikhowa-national-park-dibrugarh-assam-2-attr-hero?qlt=82&ts=1726816590324",
    description: "A Biosphere Reserve famous for feral horses, bright wood ducks, and Ganges river dolphins. Boat safaris from Guijan are the main way to see the park.",
    coordinates: { lat: 27.575, lng: 95.3411 },
    essentials: {
      bestTime: "November to April",
      weather: "Misty/Wetland",
      timings: "06:00 AM - 04:00 PM",
      entryFee: { Entry: "₹50", BoatSafari: "₹1500-2500" }
    },
    transport: { nearestRailway: "Tinsukia (20 km)", busConnectivity: "Taxi from Tinsukia to Saikhowa Ghat" },
    externalLinks: { officialBooking: "https://forest.assam.gov.in/", googleMaps: "https://goo.gl/maps/dibrusaikhowa" },
    accessibility: { wheelchairFriendly: false, notes: "Involves boat boarding at river ghats." },
    routePlan: [ { time: "06:00 AM", activity: "Boat Safari" }, { time: "11:00 AM", activity: "Maguri Beel" } ],
    foodGuide: [ { name: "Banashree Resort", type: "Resort", specialty: "Brahmaputra Fish", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Tinsukia Civil Hospital" }
  }
];


