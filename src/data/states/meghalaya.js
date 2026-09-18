/**
 * MEGHALAYA_PLACES DATASET (EXTENDED - 15 PLACES)
 * ------------------------------------------------------------------
 * Sources: Meghalaya Tourism & Local Village Councils
 * Updated: 2025-12-22
 * ------------------------------------------------------------------
 */

export const MEGHALAYA_PLACES = [
  {
    id: 1701,
    name: "Double Decker Living Root Bridge",
    slug: "double-decker-root-bridge",
    state: "Nongriat (Sohra), Meghalaya",
    category: "Nature",
    badge: "Bio-Engineering Marvel",
    image: " https://static2.tripoto.com/media/filter/tst/img/317329/TripDocument/1480409244_img_20161103_162411.jpg ",
    description: "A 150-year-old marvel where Khasi tribes have trained Ficus Elastica roots to form a sturdy bridge. It is a unique double-layered structure deep in the jungle, requiring a 3,500-step trek.",
    coordinates: { lat: 25.2505, lng: 91.6669 },
    essentials: {
      bestTime: "October to April",
      weather: "Humid/Rainy",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Entry: "₹20", Camera: "₹50", Guide: "₹700" }
    },
    transport: { nearestAirport: "Shillong (85 km)", nearestRailway: "Guwahati (175 km)", busConnectivity: "Taxi from Sohra to Tyrna" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/rootbridge" },
    accessibility: { wheelchairFriendly: false, notes: "3500+ steep steps. Extremely difficult." },
    routePlan: [ { time: "07:00 AM", activity: "Start Trek" }, { time: "10:00 AM", activity: "Reach Bridge" } ],
    foodGuide: [ { name: "Serene Homestay", type: "Local", specialty: "Red Tea", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Sohra" }
  },
  {
    id: 1702,
    name: "Nohkalikai Falls",
    slug: "nohkalikai-falls",
    state: "Cherrapunji (Sohra), Meghalaya",
    category: "Nature",
    badge: "Tallest Plunge Waterfall",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/noh-ka-likai-falls-cherrapunjee-meghalaya-2-attr-hero?qlt=82&ts=1751460275793 ",
    description: "The tallest plunge waterfall in India, dropping 340 meters. It features a stunning turquoise pool at the bottom that changes color with the seasons. Legend of Likai adds a mystical touch.",
    coordinates: { lat: 25.2762, lng: 91.6865 },
    essentials: {
      bestTime: "September to March",
      weather: "Misty",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹20", Camera: "₹20" }
    },
    transport: { nearestAirport: "Shillong (80 km)", nearestRailway: "Guwahati (165 km)", busConnectivity: "Taxi from Sohra (7 km)" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/nohkalikai" },
    accessibility: { wheelchairFriendly: true, notes: "Main viewpoint is paved." },
    routePlan: [ { time: "10:00 AM", activity: "Viewpoint Photography" } ],
    foodGuide: [ { name: "Orange Roots", type: "Veg", specialty: "Khasi Thali", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Sohra" }
  },
  {
    id: 1703,
    name: "Umngot River",
    slug: "umngot-river-dawki",
    state: "Dawki, Meghalaya",
    category: "Nature",
    badge: "Crystal Clear Waters",
    image: " https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/01/Natural-Border-with-Bangladesh.jpg?size=*:900 ",
    description: "Famous for water so clear that boats appear to float in mid-air. Located at the Indo-Bangladesh border, it’s a hub for boating, cliff jumping, and riverside camping at Shnongpdeng.",
    coordinates: { lat: 25.1952, lng: 92.0195 },
    essentials: {
      bestTime: "November to March",
      weather: "Warm",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "Free", Boating: "₹800" }
    },
    transport: { nearestAirport: "Shillong (90 km)", nearestRailway: "Guwahati (180 km)", busConnectivity: "Sumo from Shillong" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/dawki" },
    accessibility: { wheelchairFriendly: false, notes: "Rocky terrain." },
    routePlan: [ { time: "09:00 AM", activity: "Boating" }, { time: "01:00 PM", activity: "Friendship Gate" } ],
    foodGuide: [ { name: "Riverside Dhaba", type: "Local", specialty: "Fried Fish", rating: 3.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Dawki" }
  },
  {
    id: 1704,
    name: "Mawsmai Cave",
    slug: "mawsmai-cave",
    state: "Cherrapunji, Meghalaya",
    category: "Adventure",
    badge: "Limestone Exploration",
    image: " https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1696515054_euvwegpucai04aw.jpg.webp ",
    description: "A popular limestone cave that is fully lit. It features intricate stalactites and stalagmites formed over millions of years. Some passages require squeezing through narrow gaps.",
    coordinates: { lat: 25.2632, lng: 91.7208 },
    essentials: {
      bestTime: "Year Round",
      weather: "Cool/Damp",
      timings: "09:00 AM - 05:30 PM",
      entryFee: { Adult: "₹20", Camera: "₹20" }
    },
    transport: { nearestAirport: "Shillong (85 km)", busConnectivity: "Taxi from Sohra center" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/mawsmai" },
    accessibility: { wheelchairFriendly: false, notes: "Wet and slippery floors." },
    routePlan: [ { time: "02:00 PM", activity: "Cave Walk" } ],
    foodGuide: [ { name: "Cave Cafe", type: "Stall", specialty: "Pineapple", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Sohra" }
  },
  {
    id: 1705,
    name: "Laitlum Canyons",
    slug: "laitlum-canyons",
    state: "Smit, Meghalaya",
    category: "Nature",
    badge: "Grand Canyon of East",
    image: " https://travenjo.com/wp-content/uploads/2019/06/Laitlum-Canyons-Scenic-View.jpg?x58748 ",
    description: "Translating to 'End of Hills', Laitlum offers massive gorge views. It is famous for its steep winding stairways and mist-covered meadows. A favorite for photographers and trekkers.",
    coordinates: { lat: 25.5416, lng: 91.9056 },
    essentials: {
      bestTime: "September to May",
      weather: "Very Windy",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "Free", Parking: "₹50" }
    },
    transport: { nearestAirport: "Shillong (35 km)", busConnectivity: "Private Taxi from Shillong" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/laitlum" },
    accessibility: { wheelchairFriendly: true, notes: "Top plateau is accessible." },
    routePlan: [ { time: "04:00 PM", activity: "Sunset View" } ],
    foodGuide: [ { name: "Local Tea Stall", type: "Stall", specialty: "Maggi", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Shillong" }
  },
  {
    id: 1706,
    name: "Krang Suri Falls",
    slug: "krang-suri-falls",
    state: "Jowai, Meghalaya",
    category: "Nature",
    badge: "Blue Lagoon",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/1f/75/9d/view-of-the-falls-from.jpg?w=900&h=-1&s=1 ",
    description: "Known for its natural blue pool, this waterfall is a hidden gem in Jaintia Hills. The area is maintained well with stone-paved paths and mandatory life jackets for swimming.",
    coordinates: { lat: 25.3522, lng: 92.5312 },
    essentials: {
      bestTime: "Sept to April",
      weather: "Pleasant",
      timings: "08:30 AM - 05:00 PM",
      entryFee: { Entry: "₹50", LifeJacket: "₹100" }
    },
    transport: { nearestAirport: "Shillong (100 km)", busConnectivity: "Taxi from Jowai" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/krangsuri" },
    accessibility: { wheelchairFriendly: false, notes: "Downhill stone walk." },
    routePlan: [ { time: "11:00 AM", activity: "Swimming" } ],
    foodGuide: [ { name: "Waterfall Canteen", type: "Basic", specialty: "Rice Plate", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Jowai" }
  },
  {
    id: 1707,
    name: "Elephant Falls",
    slug: "elephant-falls",
    state: "Shillong, Meghalaya",
    category: "Nature",
    badge: "3-Tiered Cascade",
    image: " https://hblimg.mmtcdn.com/content/hubble/img/shillong/mmt/activities/m_activities_Shillong_Elephant%20Falls_l_400_640.jpg ",
    description: "A three-step waterfall originally named 'Ka Kshaid Lai Pateng Khohsiew' by the Khasis. It’s easily reachable and one of the most visited spots near the capital.",
    coordinates: { lat: 25.5350, lng: 91.8239 },
    essentials: {
      bestTime: "Monsoon/Post-Monsoon",
      weather: "Cold",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestAirport: "Shillong (35 km)", busConnectivity: "City Bus/Taxi" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/elephantfalls" },
    accessibility: { wheelchairFriendly: false, notes: "Steps lead to the bottom tier." },
    routePlan: [ { time: "11:00 AM", activity: "Tier Exploration" } ],
    foodGuide: [ { name: "City Hut", type: "Dhaba", specialty: "Momos", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Shillong" }
  },
  {
    id: 1708,
    name: "Mawlynnong Village",
    slug: "mawlynnong-village",
    state: "Pynursla, Meghalaya",
    category: "Heritage",
    badge: "Cleanest Village in Asia",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/mawlynnong-village-cherrapunjee-meghalaya-1-attr-hero?qlt=82&ts=1751460276883 ",
    description: "Famous for its community-led cleanliness and eco-tourism. The village features bamboo dustbins, beautiful gardens, and a SkyWalk with views of Bangladesh.",
    coordinates: { lat: 25.2023, lng: 92.0159 },
    essentials: {
      bestTime: "Year Round",
      weather: "Tropical",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Parking: "₹50", SkyWalk: "₹20" }
    },
    transport: { nearestAirport: "Shillong (90 km)", busConnectivity: "Taxi from Shillong" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/mawlynnong" },
    accessibility: { wheelchairFriendly: true, notes: "Paved village paths." },
    routePlan: [ { time: "01:00 PM", activity: "Village Walk" } ],
    foodGuide: [ { name: "Local Kitchen", type: "Home", specialty: "Chicken Curry", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Pynursla" }
  },
  {
    id: 1709,
    name: "Umiam Lake",
    slug: "umiam-lake",
    state: "Shillong, Meghalaya",
    category: "Nature",
    badge: "Barapani Reservoir",
    image: " https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1696416792_0_ils1xvejfpq2k_jg.jpg.webp ",
    description: "A vast man-made lake at the entrance of Shillong. Surrounded by coniferous forests, it offers water sports, speed boating, and island camping at Lumber MSL.",
    coordinates: { lat: 25.6667, lng: 91.8927 },
    essentials: {
      bestTime: "All Year",
      weather: "Breezy",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹20", SpeedBoat: "₹500" }
    },
    transport: { nearestAirport: "Shillong (15 km)", busConnectivity: "On Highway NH-6" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/umiam" },
    accessibility: { wheelchairFriendly: true, notes: "Main park is accessible." },
    routePlan: [ { time: "04:30 PM", activity: "Sunset Boating" } ],
    foodGuide: [ { name: "Ri Kynjai", type: "Luxury", specialty: "Khasi Thali", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "NEIGRIHMS" }
  },
  {
    id: 1710,
    name: "Mawphlang Sacred Grove",
    slug: "mawphlang-sacred-grove",
    state: "Mawphlang, Meghalaya",
    category: "Heritage",
    badge: "Nature’s Sanctuary",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ibidtc4rJdq9BxksL22wKDMNZOuKjfhD7A&s ",
    description: "An ancient forest protected by Khasi religious beliefs. Not even a leaf can be taken out. It houses rare plants, medicinal herbs, and 1000-year-old trees.",
    coordinates: { lat: 25.4502, lng: 91.7589 },
    essentials: {
      bestTime: "September to May",
      weather: "Cool",
      timings: "09:00 AM - 04:30 PM",
      entryFee: { Entry: "₹20", Guide: "₹300" }
    },
    transport: { nearestAirport: "Shillong (50 km)", busConnectivity: "Taxi from Shillong (25 km)" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/sacredgrove" },
    accessibility: { wheelchairFriendly: false, notes: "Dense forest trails." },
    routePlan: [ { time: "10:00 AM", activity: "Guided Nature Walk" } ],
    foodGuide: [ { name: "Maple Homestay", type: "Local", specialty: "Red Tea", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Shillong" }
  },
  {
    id: 1711,
    name: "Wari Chora",
    slug: "wari-chora",
    state: "South Garo Hills, Meghalaya",
    category: "Adventure",
    badge: "Hidden River Canyon",
    image: " https://saiyyaraa.com/wp-content/uploads/2023/10/warichora.jpg ",
    description: "A breathtaking canyon in the Garo Hills where a narrow river flows between towering cliffs. It's the newest sensation for canoeing and off-beat exploration.",
    coordinates: { lat: 25.1983, lng: 90.6234 },
    essentials: {
      bestTime: "Nov to Feb",
      weather: "Humid",
      timings: "Daylight Only",
      entryFee: { Package: "₹2000 (Incl. Boat)" }
    },
    transport: { nearestAirport: "Guwahati (220 km)", busConnectivity: "4x4 Private Vehicle Mandatory" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/warichora" },
    accessibility: { wheelchairFriendly: false, notes: "Tough terrain/Canoeing." },
    routePlan: [ { time: "09:00 AM", activity: "Canyon Exploration" } ],
    foodGuide: [ { name: "Garo Homestays", type: "Rural", specialty: "Bamboo Shoot Pork", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Baghmara" }
  },
  {
    id: 1712,
    name: "Seven Sisters Falls",
    slug: "seven-sisters-falls",
    state: "Cherrapunji, Meghalaya",
    category: "Nature",
    badge: "Mawsmai Falls",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/06/9f/3f/seven-sisters.jpg?w=1200&h=-1&s=1 ",
    description: "A seven-segmented waterfall representing the seven sister states of Northeast India. It’s best viewed during the monsoon when the cliffs are fully draped in water.",
    coordinates: { lat: 25.2444, lng: 91.7225 },
    essentials: {
      bestTime: "June to September",
      weather: "Rainy/Misty",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Shillong (85 km)", busConnectivity: "On Sohra-Mawsmai road" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/sevensisters" },
    accessibility: { wheelchairFriendly: true, notes: "Viewable from the roadside." },
    routePlan: [ { time: "05:00 PM", activity: "Photography" } ],
    foodGuide: [ { name: "Polo Orchid", type: "Luxury", specialty: "Continental", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Sohra" }
  },
  {
    id: 1713,
    name: "Don Bosco Museum",
    slug: "don-bosco-museum",
    state: "Shillong, Meghalaya",
    category: "Heritage",
    badge: "Cultural Hub",
    image: " https://res.cloudinary.com/chasset/c_fill,e_improve,f_webp,h_480,w_720/hbimages/desktop/1500264549629-don-bosco-centre.jpg ",
    description: "One of Asia's largest indigenous culture museums. It has 7 floors representing the 7 sisters of Northeast India, featuring a SkyWalk with city views.",
    coordinates: { lat: 25.5802, lng: 91.8845 },
    essentials: {
      bestTime: "Year Round",
      weather: "Indoor",
      timings: "09:00 AM - 05:30 PM (Sun Closed)",
      entryFee: { Indian: "₹100", Foreigner: "₹200" }
    },
    transport: { nearestAirport: "Shillong (25 km)", busConnectivity: "City Bus/Taxi" },
    externalLinks: { officialBooking: "https://dbcic.org/", googleMaps: "https://goo.gl/maps/donbosco" },
    accessibility: { wheelchairFriendly: true, notes: "Elevators available." },
    routePlan: [ { time: "10:00 AM", activity: "Gallery Tour" } ],
    foodGuide: [ { name: "Museum Cafe", type: "Snacks", specialty: "Momos", rating: 3.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Roberts Hospital" }
  },
  {
    id: 1714,
    name: "Balpakram National Park",
    slug: "balpakram-national-park",
    state: "South Garo Hills, Meghalaya",
    category: "Nature",
    badge: "Land of Spirits",
    image: " https://imgmediagumlet.lbb.in/media/2019/07/5d288bbf40032f055376b9b0_1562938303506.jpg ",
    description: "A canyon-land often compared to the Grand Canyon. It is sacred to the Garos as the 'land of the spirits' and is home to the Red Panda and Asian Elephant.",
    coordinates: { lat: 25.2500, lng: 90.8500 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "₹100", Guide: "₹500" }
    },
    transport: { nearestAirport: "Guwahati (250 km)", busConnectivity: "Private 4x4 from Baghmara" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/balpakram" },
    accessibility: { wheelchairFriendly: false, notes: "Wilderness/Trekking." },
    routePlan: [ { time: "08:00 AM", activity: "Wildlife Safari" } ],
    foodGuide: [ { name: "Forest Lodge", type: "Basic", specialty: "Local Meat Curry", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Baghmara" }
  },
  {
    id: 1715,
    name: "Phe Phe Falls",
    slug: "phe-phe-falls",
    state: "Jowai, Meghalaya",
    category: "Nature",
    badge: "Paradise Found",
    image: " https://hillstarholidays.com/wp-content/uploads/2025/07/Red-and-White-Creative-Travel-Twitter-Post-4.jpg ",
    description: "A two-tier waterfall located in the West Jaintia Hills. Its name means 'Paradise' in Pnar. It requires a short boat ride across a river followed by a scenic trek.",
    coordinates: { lat: 25.4120, lng: 92.4850 },
    essentials: {
      bestTime: "Sept to March",
      weather: "Cool",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "₹50", Boat: "₹100" }
    },
    transport: { nearestAirport: "Shillong (95 km)", busConnectivity: "Taxi from Jowai" },
    externalLinks: { officialBooking: "https://meghalayatourism.in/", googleMaps: "https://goo.gl/maps/phephe" },
    accessibility: { wheelchairFriendly: false, notes: "River crossing and trekking involved." },
    routePlan: [ { time: "09:00 AM", activity: "Trek and Swim" } ],
    foodGuide: [ { name: "Paradise Camp", type: "Camp", specialty: "Fried Maggi", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Jowai" }
  }
];
