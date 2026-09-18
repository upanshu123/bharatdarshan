/**
 * ODISHA_PLACES DATASET (EXTENDED - 15 PLACES)
 * ------------------------------------------------------------------
 * Sources: Odisha Tourism Development Corporation (OTDC) & ASI
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const ODISHA_PLACES = [
  {
    id: 2001,
    name: "Konark Sun Temple",
    slug: "konark-sun-temple",
    state: "Konark (Puri), Odisha",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: " https://tirupatitirumalainfo.com/wp-content/uploads/2020/06/Suntemple-Konark.jpg ",
    description: "A 13th-century architectural masterpiece designed as a giant stone chariot for the Sun God Surya. It features 24 wheels and 7 horses, with every inch of the temple covered in intricate carvings depicting life in ancient Odisha.",
    coordinates: { lat: 19.8876, lng: 86.0945 },
    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Coastal",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Indian: "₹40", Foreigner: "₹600", LightShow: "₹50" }
    },
    transport: { nearestAirport: "Bhubaneswar (65 km)", nearestRailway: "Puri (35 km)", busConnectivity: "Buses available from Puri and Bhubaneswar" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/konark" },
    accessibility: { wheelchairFriendly: true, notes: "Main complex has paved paths and ramps." },
    routePlan: [ { time: "07:00 AM", activity: "Architecture Tour" }, { time: "06:30 PM", activity: "Light & Sound Show" } ],
    foodGuide: [ { name: "Panthanivas", type: "OTDC", specialty: "Odia Thali", rating: 3.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Konark PHC" }
  },
  {
    id: 2002,
    name: "Jagannath Temple",
    slug: "jagannath-temple-puri",
    state: "Puri, Odisha",
    category: "Spiritual",
    badge: "Char Dham Pilgrimage",
    image: " https://www.tripsavvy.com/thmb/CqvMyrnnVy5fNLFYTr5zW13s-XE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_DSC0713_Snapseed_Darkroom-819d0b229974460e8141622c4494e2ed.jpg ",
    description: "One of the most sacred Hindu temples dedicated to Lord Jagannath. It is famous for its Ratha Yatra and the mystery of its flag that always flies against the wind. The world's largest kitchen (Mahaprasad) is located here.",
    coordinates: { lat: 19.8049, lng: 85.8179 },
    essentials: {
      bestTime: "July to March",
      weather: "Coastal",
      timings: "05:00 AM - 11:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Bhubaneswar (60 km)", nearestRailway: "Puri (2 km)", busConnectivity: "Rickshaws/Autos from Puri station" },
    externalLinks: { officialBooking: "https://shreejagannatha.in/", googleMaps: "https://goo.gl/maps/jagannathpuri" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps provided at North Gate." },
    routePlan: [ { time: "06:00 AM", activity: "Morning Darshan" }, { time: "08:00 AM", activity: "Ananda Bazar Visit" } ],
    foodGuide: [ { name: "Ananda Bazar", type: "Temple", specialty: "Abhada Mahaprasad", rating: 5.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Puri" }
  },
  {
    id: 2003,
    name: "Lingaraj Temple",
    slug: "lingaraj-temple",
    state: "Bhubaneswar, Odisha",
    category: "Spiritual",
    badge: "Kalinga Architecture",
    image: " https://portfolio.investmentguruindia.com/uploads/news/jaganathhh.30.07.01.jpg ",
    description: "The oldest and largest temple in Bhubaneswar, dedicated to Lord Shiva as Harihara. Built in the 11th century, it is a quintessential example of the Kalinga style of architecture with a 180-foot high tower.",
    coordinates: { lat: 20.2392, lng: 85.8333 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "06:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Bhubaneswar (4 km)", nearestRailway: "Bhubaneswar (5 km)", busConnectivity: "Mo Bus service to Old Town" },
    externalLinks: { officialBooking: "https://odishatourism.gov.in/", googleMaps: "https://goo.gl/maps/lingaraj" },
    accessibility: { wheelchairFriendly: false, notes: "Platform outside for non-Hindus." },
    routePlan: [ { time: "07:00 AM", activity: "Temple Visit" } ],
    foodGuide: [ { name: "Odisha Hotel", type: "Local", specialty: "Pakhala Bhata", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Capital Hospital" }
  },
  {
    id: 2004,
    name: "Chilika Lake (Mangalajodi)",
    slug: "chilika-lake-mangalajodi",
    state: "Khordha, Odisha",
    category: "Wildlife",
    badge: "Birdwatcher's Paradise",
    image: " https://thetravellertrails.in/wp-content/uploads/2022/08/The-Magic-Of-MangalaJodi-Chilika-Lake.jpg ",
    description: "Asia's largest brackish water lagoon. Mangalajodi is the northern edge of Chilika, famous for being a 'community-owned' bird sanctuary where former poachers now act as protectors and guides.",
    coordinates: { lat: 19.9234, lng: 85.4267 },
    essentials: {
      bestTime: "November to February",
      weather: "Pleasant",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Boat: "₹1200-1500" }
    },
    transport: { nearestAirport: "Bhubaneswar (70 km)", busConnectivity: "Taxi from Bhubaneswar recommended" },
    externalLinks: { officialBooking: "https://mangalajodiecotourism.com/", googleMaps: "https://goo.gl/maps/mangalajodi" },
    accessibility: { wheelchairFriendly: false, notes: "Requires boarding small country boats." },
    routePlan: [ { time: "06:30 AM", activity: "Birdwatching Boat Ride" } ],
    foodGuide: [ { name: "Godwit Eco Cottage", type: "Resort", specialty: "Fresh Fish", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Tangi" }
  },
  {
    id: 2005,
    name: "Simlipal National Park",
    slug: "simlipal-national-park",
    state: "Mayurbhanj, Odisha",
    category: "Wildlife",
    badge: "UNESCO Biosphere Reserve",
    image: " https://roverstrip.com/wp-content/uploads/2021/07/simlipal-national-park.jpg ",
    description: "A tiger reserve and national park known for its dense forests and the rare Melanistic (Black) Tigers. It also houses the Barehipani and Joranda waterfalls, two of India's tallest.",
    coordinates: { lat: 21.9304, lng: 86.3475 },
    essentials: {
      bestTime: "Nov to June",
      weather: "Forest/Cool",
      timings: "06:00 AM - 09:00 AM (Entry)",
      entryFee: { Entry: "₹100", Guide: "₹300" }
    },
    transport: { nearestAirport: "Bhubaneswar (270 km)", busConnectivity: "Private SUV required from Baripada" },
    externalLinks: { officialBooking: "https://www.similipal.org/", googleMaps: "https://goo.gl/maps/simlipal" },
    accessibility: { wheelchairFriendly: false, notes: "Rugged forest terrain." },
    routePlan: [ { time: "07:00 AM", activity: "Safari Start" } ],
    foodGuide: [ { name: "Aranya Nivas", type: "OTDC", specialty: "Forest Thali", rating: 3.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Baripada" }
  },
  {
    id: 2006,
    name: "Bhitarkanika National Park",
    slug: "bhitarkanika-national-park",
    state: "Kendrapara, Odisha",
    category: "Wildlife",
    badge: "Amazon of the East",
    image: " https://apps.odishatourism.gov.in/Application/uploadDocuments/TravelTrailDoc/Banner20190328_155950.jpg ",
    description: "The second-largest mangrove ecosystem in India. It is the home of giant saltwater crocodiles, kingfishers, and many migratory birds. The boat safari through the mangroves is the main highlight.",
    coordinates: { lat: 20.7302, lng: 86.8770 },
    essentials: {
      bestTime: "October to February",
      weather: "Humid",
      timings: "07:00 AM - 05:00 PM",
      entryFee: { Entry: "₹40", Boat: "₹3000+" }
    },
    transport: { nearestAirport: "Bhubaneswar (145 km)", busConnectivity: "Drive to Khola or Gupti gate" },
    externalLinks: { officialBooking: "https://www.bhitarkanika.org/", googleMaps: "https://goo.gl/maps/bhitarkanika" },
    accessibility: { wheelchairFriendly: false, notes: "Requires boat boarding." },
    routePlan: [ { time: "08:00 AM", activity: "Croc Safari" } ],
    foodGuide: [ { name: "Estuarine Village", type: "Resort", specialty: "Prawn Curry", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Rajnagar" }
  },
  {
    id: 2007,
    name: "Daringbadi",
    slug: "daringbadi-hill-station",
    state: "Kandhamal, Odisha",
    category: "Hill Stations",
    badge: "Kashmir of Odisha",
    image: "https://farm5.staticflickr.com/4301/35274085454_ffc9e1eb3f_z.jpg",
    description: "A serene hill station at 3000ft, famous for its pine forests, coffee plantations, and spice gardens. It is the only place in Odisha that experiences freezing temperatures and occasional frost in winter.",
    coordinates: { lat: 20.1333, lng: 84.1333 },
    essentials: {
      bestTime: "Nov to Feb",
      weather: "Cold",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Bhubaneswar (250 km)", busConnectivity: "Bus/Taxi from Berhampur (125 km)" },
    externalLinks: { officialBooking: "https://odishatourism.gov.in/", googleMaps: "https://goo.gl/maps/daringbadi" },
    accessibility: { wheelchairFriendly: true, notes: "Town and view points are driveable." },
    routePlan: [ { time: "09:00 AM", activity: "Coffee Plantation Walk" } ],
    foodGuide: [ { name: "Deers Eco Home", type: "Homestay", specialty: "Organic Food", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Daringbadi" }
  },
  {
    id: 2008,
    name: "Hirakud Dam & Debrigarh",
    slug: "hirakud-dam",
    state: "Sambalpur, Odisha",
    category: "Nature",
    badge: "Longest Earthen Dam in World",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/hirakud-eco-retreat-1-fes-hero?qlt=82&ts=1726639704028 ",
    description: "A massive engineering marvel built across the Mahanadi river. The nearby Debrigarh Wildlife Sanctuary is famous for its high density of Indian Bison and leopards, located right on the dam backwaters.",
    coordinates: { lat: 21.5333, lng: 83.8667 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "10:00 AM - 05:00 PM",
      entryFee: { Entry: "Free", Safari: "₹1000" }
    },
    transport: { nearestAirport: "Jharsuguda (60 km)", nearestRailway: "Sambalpur (15 km)", busConnectivity: "Auto/Taxi from Sambalpur" },
    externalLinks: { officialBooking: "https://ecotourodisha.com/", googleMaps: "https://goo.gl/maps/hirakud" },
    accessibility: { wheelchairFriendly: true, notes: "Gandhi Minar viewpoint is accessible." },
    routePlan: [ { time: "10:00 AM", activity: "Gandhi Minar View" }, { time: "03:00 PM", activity: "Debrigarh Safari" } ],
    foodGuide: [ { name: "Eco Retreat", type: "Luxury", specialty: "Continental", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "VIMSAR Burla" }
  },
  {
    id: 2009,
    name: "Udayagiri & Khandagiri Caves",
    slug: "udayagiri-khandagiri-caves",
    state: "Bhubaneswar, Odisha",
    category: "Heritage",
    badge: "Jain Rock-Cut Shelters",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/2-khandagiri-udaigiri-caves-attr-hero?qlt=82&ts=1742184745784 ",
    description: "Ancient rock-cut caves built for Jain monks in the 1st century BC. Udayagiri features the famous 'Rani Gumpha' (Queen's Cave) while Khandagiri offers a spectacular view of the city.",
    coordinates: { lat: 20.2632, lng: 85.7860 },
    essentials: {
      bestTime: "Year Round",
      weather: "Sunny",
      timings: "09:00 AM - 06:00 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestAirport: "Bhubaneswar (6 km)", busConnectivity: "Mo Bus stops at entrance" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/caves" },
    accessibility: { wheelchairFriendly: false, notes: "Requires climbing stone steps." },
    routePlan: [ { time: "09:00 AM", activity: "Rani Gumpha Visit" } ],
    foodGuide: [ { name: "Dalma", type: "Authentic", specialty: "Dalma & Rice", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "AIIMS Bhubaneswar" }
  },
  {
    id: 2010,
    name: "Puri Beach",
    slug: "puri-beach-blue-flag",
    state: "Puri, Odisha",
    category: "Beaches",
    badge: "Blue Flag Certified",
    image: " https://www.travelholidaysindia.com/wp-content/uploads/2022/09/book-a-beautiful-blue-flag-beach-puri-tour-and-enjoy-with-your-family.jpg ",
    description: "One of the few beaches in India with Blue Flag certification for cleanliness. Famous for sand art, annual beach festivals, and the spiritual experience of being near the Jagannath Temple.",
    coordinates: { lat: 19.7983, lng: 85.8249 },
    essentials: {
      bestTime: "October to March",
      weather: "Breezy",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Bhubaneswar (60 km)", busConnectivity: "Auto from Puri Railway Station" },
    externalLinks: { officialBooking: "https://odishatourism.gov.in/", googleMaps: "https://goo.gl/maps/puribeach" },
    accessibility: { wheelchairFriendly: true, notes: "Beach promenade is paved." },
    routePlan: [ { time: "06:00 AM", activity: "Sunrise Sand Art" } ],
    foodGuide: [ { name: "Wildgrass", type: "Garden", specialty: "Seafood", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Puri District Hospital" }
  },
  {
    id: 2011,
    name: "Chandipur Beach",
    slug: "chandipur-vanishing-beach",
    state: "Balasore, Odisha",
    category: "Beaches",
    badge: "The Vanishing Sea",
    image: " https://pragativadi.com/wp-content/uploads/2025/05/Chandipur-Beach-Set-for-Rs-11-Cr-Eco-Friendly-Makeover-to-Earn-Blue-Flag-Tag-647x363.jpg ",
    description: "Unique in the world, the sea at Chandipur recedes up to 5 km during low tide and returns during high tide twice a day. This allows visitors to literally walk on the sea floor.",
    coordinates: { lat: 21.4667, lng: 87.0167 },
    essentials: {
      bestTime: "All Year",
      weather: "Coastal",
      timings: "Daytime (Low tide check recommended)",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Bhubaneswar (210 km)", nearestRailway: "Balasore (15 km)", busConnectivity: "Auto from Balasore station" },
    externalLinks: { officialBooking: "https://balasore.nic.in/", googleMaps: "https://goo.gl/maps/chandipur" },
    accessibility: { wheelchairFriendly: true, notes: "Flat sea bed allows movement." },
    routePlan: [ { time: "11:00 AM", activity: "Walking on Sea Bed" } ],
    foodGuide: [ { name: "OTDC Panthanivas", type: "Govt", specialty: "Fish Curry", rating: 3.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Balasore" }
  },
  {
    id: 2012,
    name: "Raghurajpur Heritage Village",
    slug: "raghurajpur-art-village",
    state: "Puri, Odisha",
    category: "Heritage",
    badge: "Pattachitra Art Hub",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b9/d6/53/village-temple.jpg?w=1200&h=-1&s=1 ",
    description: "A heritage crafts village where every family is an artist. Famous for Pattachitra (scroll paintings) and Gotipua dance, the precursor to Odissi. It's a living museum of Odia art.",
    coordinates: { lat: 19.9972, lng: 85.7953 },
    essentials: {
      bestTime: "All Year",
      weather: "Rural",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Bhubaneswar (50 km)", busConnectivity: "Taxi/Auto from Puri (12 km)" },
    externalLinks: { officialBooking: "https://odishatourism.gov.in/", googleMaps: "https://goo.gl/maps/raghurajpur" },
    accessibility: { wheelchairFriendly: true, notes: "Village street is flat." },
    routePlan: [ { time: "10:00 AM", activity: "Art Workshop Visit" } ],
    foodGuide: [ { name: "Village Home Meals", type: "Home", specialty: "Traditional Thali", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Chandanpur PHC" }
  },
  {
    id: 2013,
    name: "Gopalpur-on-Sea",
    slug: "gopalpur-beach",
    state: "Ganjam, Odisha",
    category: "Beaches",
    badge: "Quiet Coastal Town",
    image: " https://pbs.twimg.com/media/FQYldyaUcAA-eFr.jpg ",
    description: "A former colonial port, Gopalpur is now a peaceful beach town with golden sands and a landmark lighthouse. It is famous for its quiet atmosphere and Olive Ridley turtle sightings nearby.",
    coordinates: { lat: 19.2667, lng: 84.9167 },
    essentials: {
      bestTime: "November to February",
      weather: "Breezy",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Bhubaneswar (170 km)", nearestRailway: "Berhampur (15 km)", busConnectivity: "Taxi/Auto from Berhampur" },
    externalLinks: { officialBooking: "https://ganjam.nic.in/", googleMaps: "https://goo.gl/maps/gopalpur" },
    accessibility: { wheelchairFriendly: true, notes: "Road runs parallel to the beach." },
    routePlan: [ { time: "05:00 PM", activity: "Sunset at Lighthouse" } ],
    foodGuide: [ { name: "Mayfair Palm Beach", type: "Luxury", specialty: "Seafood Buffet", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "MKCG Medical College" }
  },
  {
    id: 2014,
    name: "Satkosia Gorge",
    slug: "satkosia-tiger-reserve",
    state: "Angul, Odisha",
    category: "Nature",
    badge: "Magnificent River Canyon",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/satkosia-gorge-wildlife-sanctuary-bhubaneshwar-odisha-3-attr-hero?qlt=82&ts=1742176192789 ",
    description: "Where the Mahanadi River cuts through the Eastern Ghats, forming a 22 km long gorge. It is a tiger reserve known for crocodiles, river camping, and boat safaris.",
    coordinates: { lat: 20.5833, lng: 84.8333 },
    essentials: {
      bestTime: "November to February",
      weather: "Cool/Misty",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "₹100" }
    },
    transport: { nearestAirport: "Bhubaneswar (160 km)", busConnectivity: "Bus from Angul (60 km)" },
    externalLinks: { officialBooking: "https://ecotourodisha.com/", googleMaps: "https://goo.gl/maps/satkosia" },
    accessibility: { wheelchairFriendly: false, notes: "Forest roads and boat entry." },
    routePlan: [ { time: "09:00 AM", activity: "Boat Cruise" } ],
    foodGuide: [ { name: "Satkosia Sands", type: "Eco Camp", specialty: "Campfire Dinner", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Angul" }
  },
  {
    id: 2015,
    name: "Khandadhar Waterfall",
    slug: "khandadhar-waterfall-odisha",
    state: "Sundargarh, Odisha",
    category: "Nature",
    badge: "Sword-like Cascade",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/08/27/c0/khandadhar-falls.jpg?w=1200&h=-1&s=1 ",
    description: "One of the tallest and most beautiful waterfalls in Odisha, falling from 800ft. Its name comes from its shape, which looks like a sharp sword (Khanda) hanging from the mountain.",
    coordinates: { lat: 21.7500, lng: 85.1167 },
    essentials: {
      bestTime: "Monsoon and Winter",
      weather: "Cool/Mist",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestAirport: "Jharsuguda (120 km)", nearestRailway: "Rourkela (100 km)", busConnectivity: "Private vehicle from Rourkela" },
    externalLinks: { officialBooking: "https://sundergarh.nic.in/", googleMaps: "https://goo.gl/maps/khandadhar" },
    accessibility: { wheelchairFriendly: false, notes: "Requires climbing stairs to viewpoint." },
    routePlan: [ { time: "11:00 AM", activity: "Viewpoint Trek" } ],
    foodGuide: [ { name: "Nature Camp", type: "Eco", specialty: "Desi Chicken Thali", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "General Hospital Rourkela" }
  }
];
