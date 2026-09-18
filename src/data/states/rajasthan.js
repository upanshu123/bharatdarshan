/**
 * RAJASTHAN_PLACES DATASET (EXTENDED - 15 PLACES)
 * ------------------------------------------------------------------
 * Sources: Dept of Archaeology & Museums, Rajasthan & ASI
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const RAJASTHAN_PLACES = [
  {
    id: 2201,
    name: "Amber Fort (Amer)",
    slug: "amber-fort-jaipur",
    state: "Jaipur, Rajasthan",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=700&h=400&s=1 ",
    description: "A majestic hilltop fort built in 1592 by Raja Man Singh. Famous for its artistic Hindu style elements, the Sheesh Mahal (Mirror Palace), and the elephant ride up the ramparts.",
    coordinates: { lat: 26.9855, lng: 75.8513 },
    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Hot",
      timings: "08:00 AM - 05:30 PM",
      entryFee: { Indian: "₹100", Foreigner: "₹500", LightShow: "₹295" }
    },
    transport: { nearestAirport: "Jaipur (25 km)", nearestRailway: "Jaipur Junction (12 km)", busConnectivity: "AC buses from Hawa Mahal" },
    externalLinks: { officialBooking: "https://www.rajasthantourism.gov.in/", googleMaps: "https://goo.gl/maps/amberfort" },
    accessibility: { wheelchairFriendly: true, notes: "Golf carts available at the rear entrance." },
    routePlan: [ { time: "08:00 AM", activity: "Jeep Ride to Top" }, { time: "09:30 AM", activity: "Sheesh Mahal Visit" } ],
    foodGuide: [ { name: "1135 AD", type: "Fine Dining", specialty: "Royal Thali", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "SMS Hospital Jaipur" }
  },
  {
    id: 2202,
    name: "Mehrangarh Fort",
    slug: "mehrangarh-fort-jodhpur",
    state: "Jodhpur, Rajasthan",
    category: "Heritage",
    badge: "The Citadel of the Sun",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/99/ae/7f/images-14-largejpg.jpg?w=700&h=400&s=1 ",
    description: "One of the largest forts in India, rising 410 feet above Jodhpur. It houses a world-class museum displaying royal palanquins, armory, and costumes. The view of the 'Blue City' from the top is iconic.",
    coordinates: { lat: 26.2975, lng: 73.0185 },
    essentials: {
      bestTime: "October to March",
      weather: "Dry/Desert",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Indian: "₹200", Foreigner: "₹600" }
    },
    transport: { nearestAirport: "Jodhpur (10 km)", nearestRailway: "Jodhpur Junction (5 km)", busConnectivity: "Auto from Old City" },
    externalLinks: { officialBooking: "https://www.mehrangarh.org/", googleMaps: "https://goo.gl/maps/mehrangarh" },
    accessibility: { wheelchairFriendly: true, notes: "Elevator available to reach top palaces." },
    routePlan: [ { time: "09:00 AM", activity: "Museum & Palaces" }, { time: "04:00 PM", activity: "Zip Lining" } ],
    foodGuide: [ { name: "Janta Sweets", type: "Local", specialty: "Mirchi Bada", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "MG Hospital Jodhpur" }
  },
  {
    id: 2203,
    name: "City Palace, Udaipur",
    slug: "city-palace-udaipur",
    state: "Udaipur, Rajasthan",
    category: "Heritage",
    badge: "Largest Palace in Rajasthan",
    image: " https://cdn.britannica.com/57/252557-050-5A6E4416/Udaipur-City-Palace-Rajasthan-India.jpg ",
    description: "A monumental complex of palaces on the banks of Lake Pichola. It is a fusion of Rajasthani and Mughal architecture, known for its intricate mirror work and lake views.",
    coordinates: { lat: 24.5764, lng: 73.6835 },
    essentials: {
      bestTime: "September to March",
      weather: "Pleasant",
      timings: "09:30 AM - 05:30 PM",
      entryFee: { Adult: "₹400", Student: "₹100" }
    },
    transport: { nearestAirport: "Udaipur (24 km)", busConnectivity: "Walkable from Jagdish Temple" },
    externalLinks: { officialBooking: "https://citypalacemuseum.org/", googleMaps: "https://goo.gl/maps/citypalaceudaipur" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps and elevators available." },
    routePlan: [ { time: "09:30 AM", activity: "Palace Museum" }, { time: "04:00 PM", activity: "Boat Ride on Pichola" } ],
    foodGuide: [ { name: "Ambrai", type: "Lakeside", specialty: "Mewari Cuisine", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "MB Govt Hospital" }
  },
  {
    id: 2204,
    name: "Jaisalmer Fort",
    slug: "jaisalmer-fort",
    state: "Jaisalmer, Rajasthan",
    category: "Heritage",
    badge: "The Living Fort",
    image: " https://india-box.in/wp-content/uploads/2025/10/Jaisalmer-Fort.jpg ",
    description: "A yellow sandstone fort that glows gold at sunset. It is one of the few living forts in the world where 1/4th of the city's population still resides inside.",
    coordinates: { lat: 26.9124, lng: 70.9127 },
    essentials: {
      bestTime: "Nov to Feb",
      weather: "Desert",
      timings: "24 Hours (Museum 9-6)",
      entryFee: { Fort: "Free", Museum: "₹250" }
    },
    transport: { nearestRailway: "Jaisalmer (2 km)", busConnectivity: "Auto-rickshaws from station" },
    externalLinks: { officialBooking: "https://tourism.rajasthan.gov.in/", googleMaps: "https://goo.gl/maps/jaisalmerfort" },
    accessibility: { wheelchairFriendly: false, notes: "Steep cobblestone paths." },
    routePlan: [ { time: "09:00 AM", activity: "Jain Temples" }, { time: "05:00 PM", activity: "Sunset View" } ],
    foodGuide: [ { name: "Jaisal Italy", type: "View", specialty: "Pasta", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Jawahar Hospital" }
  },
  {
    id: 2205,
    name: "Ranthambore National Park",
    slug: "ranthambore-safari",
    state: "Sawai Madhopur, Rajasthan",
    category: "Wildlife",
    badge: "Tiger Reserve",
    image: " https://www.tourmyindia.com/wildlife_sancturies/assets/img/flora-ranthambore.webp ",
    description: "One of India's most famous national parks, known for its diurnal tigers. The park also contains the massive Ranthambore Fort within its premises.",
    coordinates: { lat: 26.0173, lng: 76.5026 },
    essentials: {
      bestTime: "Oct to June",
      weather: "Forest",
      timings: "Morning & Afternoon Slots",
      entryFee: { Canter: "₹800", Gypsy: "₹1500" }
    },
    transport: { nearestRailway: "Sawai Madhopur (14 km)", busConnectivity: "Taxi from town" },
    externalLinks: { officialBooking: "https://fmdss.forest.rajasthan.gov.in/", googleMaps: "https://goo.gl/maps/ranthambore" },
    accessibility: { wheelchairFriendly: false, notes: "Safari vehicles require climbing." },
    routePlan: [ { time: "06:30 AM", activity: "Jungle Safari" } ],
    foodGuide: [ { name: "Manisha Restaurant", type: "Local", specialty: "Dal Baati", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "General Hospital" }
  },
  {
    id: 2206,
    name: "Pushkar Lake",
    slug: "pushkar-lake",
    state: "Ajmer, Rajasthan",
    category: "Spiritual",
    badge: "Sacred Town",
    image: " https://jagatsinghhotels.com/media/jsHotel/weddingVenu/Artboard_1_copy_14.webp ",
    description: "A holy lake surrounded by 52 bathing ghats and over 500 temples, including the world's only temple dedicated to Lord Brahma.",
    coordinates: { lat: 26.4886, lng: 74.5509 },
    essentials: {
      bestTime: "Nov (Fair) to March",
      weather: "Desert",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Ajmer Junction (15 km)", busConnectivity: "Buses from Ajmer every 20 mins" },
    externalLinks: { officialBooking: "https://tourism.rajasthan.gov.in/", googleMaps: "https://goo.gl/maps/pushkar" },
    accessibility: { wheelchairFriendly: false, notes: "Ghats have steep steps." },
    routePlan: [ { time: "07:00 AM", activity: "Brahma Temple" }, { time: "06:00 PM", activity: "Evening Aarti" } ],
    foodGuide: [ { name: "Laughing Buddha", type: "Cafe", specialty: "Falafel", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Govt Hospital Pushkar" }
  },
  {
    id: 2207,
    name: "Hawa Mahal",
    slug: "hawa-mahal-jaipur",
    state: "Jaipur, Rajasthan",
    category: "Heritage",
    badge: "Palace of Winds",
    image: " https://www.travel-rajasthan.com/images/experiance-in-rajsthan/forts-and-palaces/hawa-mahal-travel-rajasthan.jpg ",
    description: "A five-story pink sandstone structure with 953 small windows (Jharokhas), designed to allow royal ladies to watch street festivals without being seen.",
    coordinates: { lat: 26.9239, lng: 75.8267 },
    essentials: {
      bestTime: "October to March",
      weather: "Sunny",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Indian: "₹50", Foreigner: "₹200" }
    },
    transport: { nearestAirport: "Jaipur (13 km)", busConnectivity: "In the heart of Pink City" },
    externalLinks: { officialBooking: "https://tourism.rajasthan.gov.in/", googleMaps: "https://goo.gl/maps/hawamahal" },
    accessibility: { wheelchairFriendly: false, notes: "Upper floors require climbing narrow stairs." },
    routePlan: [ { time: "09:00 AM", activity: "Photography from Outside" } ],
    foodGuide: [ { name: "Wind View Cafe", type: "Cafe", specialty: "Tea & View", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "SMS Hospital" }
  },
  {
    id: 2208,
    name: "Chittorgarh Fort",
    slug: "chittorgarh-fort",
    state: "Chittorgarh, Rajasthan",
    category: "Heritage",
    badge: "Largest Fort in India",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/chittorgarh%20fort-chittorgarh-rajasthan-1-hero?qlt=82&ts=1726660527762 ",
    description: "Spreading over 700 acres, this fort symbolizes Rajput courage. It is home to the Vijay Stambh (Victory Tower) and the Rani Padmini Palace.",
    coordinates: { lat: 24.8879, lng: 74.6454 },
    essentials: {
      bestTime: "October to March",
      weather: "Hot",
      timings: "09:30 AM - 05:00 PM",
      entryFee: { Indian: "₹40", Foreigner: "₹600" }
    },
    transport: { nearestRailway: "Chittorgarh Jn (6 km)", busConnectivity: "Auto/Taxi mandatory inside fort" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/chittorgarh" },
    accessibility: { wheelchairFriendly: true, notes: "Vehicles can drive to most monuments." },
    routePlan: [ { time: "10:00 AM", activity: "Vijay Stambh Tour" } ],
    foodGuide: [ { name: "Chokhi Dhani", type: "Theme", specialty: "Thali", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital" }
  },
  {
    id: 2209,
    name: "Junagarh Fort",
    slug: "junagarh-fort-bikaner",
    state: "Bikaner, Rajasthan",
    category: "Heritage",
    badge: "Unconquered Fort",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/junagarh-fort-bikaner-rajasthan-1-attr-hero?qlt=82&ts=1726659583687 ",
    description: "Unlike most forts built on hills, this is built on a plain. It is known for its exquisite interior carvings, palaces, and a real WWII aircraft kept in the museum.",
    coordinates: { lat: 28.0225, lng: 73.3119 },
    essentials: {
      bestTime: "October to March",
      weather: "Dry",
      timings: "10:00 AM - 04:30 PM",
      entryFee: { Indian: "₹50", Foreigner: "₹300" }
    },
    transport: { nearestRailway: "Bikaner Junction (2 km)", busConnectivity: "Auto from city center" },
    externalLinks: { officialBooking: "https://realbikaner.com/junagarh/", googleMaps: "https://goo.gl/maps/junagarh" },
    accessibility: { wheelchairFriendly: true, notes: "Lifts available for museum." },
    routePlan: [ { time: "11:00 AM", activity: "Anup Mahal Tour" } ],
    foodGuide: [ { name: "Chhotu Motu Joshi", type: "Sweets", specialty: "Ghevar", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "PBM Hospital" }
  },
  {
    id: 2210,
    name: "Kumbhalgarh Fort",
    slug: "kumbhalgarh-fort",
    state: "Rajsamand, Rajasthan",
    category: "Heritage",
    badge: "Great Wall of India",
    image: " https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201711241843395473-bca9f370668f11edb2ad0a58a9feac02.jpg ",
    description: "Famous for the second-longest wall in the world (36km). It is the birthplace of Maharana Pratap and offers spectacular views of the Aravalli range.",
    coordinates: { lat: 25.1479, lng: 73.5882 },
    essentials: {
      bestTime: "October to March",
      weather: "Cool/Windy",
      timings: "09:00 AM - 06:00 PM",
      entryFee: { Indian: "₹40", LightShow: "₹100" }
    },
    transport: { nearestAirport: "Udaipur (85 km)", busConnectivity: "Taxi from Udaipur recommended" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/kumbhalgarh" },
    accessibility: { wheelchairFriendly: false, notes: "Very steep ramps." },
    routePlan: [ { time: "03:00 PM", activity: "Climb to Badal Mahal" } ],
    foodGuide: [ { name: "Kumbhal Palace", type: "Resort", specialty: "Mewari Lunch", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Kelwara" }
  },
  {
    id: 2211,
    name: "Mount Abu",
    slug: "mount-abu-hill-station",
    state: "Sirohi, Rajasthan",
    category: "Hill Stations",
    badge: "Oasis in Desert",
    image: " https://www.rajasthanindiatourdriver.com/img/mount-abublog.jpg ",
    description: "The only hill station in Rajasthan. Famous for Nakki Lake and the Dilwara Jain Temples, known for marble carvings finer than the Taj Mahal.",
    coordinates: { lat: 24.5926, lng: 72.7156 },
    essentials: {
      bestTime: "All Year",
      weather: "Cool",
      timings: "Temple: 12 PM - 5 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Abu Road (28 km)", busConnectivity: "Taxis/Buses from Abu Road" },
    externalLinks: { googleMaps: "https://goo.gl/maps/mountabu" },
    accessibility: { wheelchairFriendly: true, notes: "Nakki Lake area is flat." },
    routePlan: [ { time: "10:00 AM", activity: "Nakki Lake" }, { time: "12:30 PM", activity: "Dilwara Temples" } ],
    foodGuide: [ { name: "Mulberry Tree", type: "City", specialty: "North Indian", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Global Hospital" }
  },
  {
    id: 2212,
    name: "Sam Sand Dunes",
    slug: "sam-sand-dunes-jaisalmer",
    state: "Jaisalmer, Rajasthan",
    category: "Nature",
    badge: "Desert Safari Hub",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/sam-sand-dunes-jaisalmer-rajsthan-1-attr-hero?qlt=82&ts=1727352566377 ",
    description: "The quintessential desert experience. Famous for camel safaris, jeep dune bashing, and overnight luxury camps with folk performances.",
    coordinates: { lat: 26.8300, lng: 70.5100 },
    essentials: {
      bestTime: "Nov to Feb",
      weather: "Very Cold Nights",
      timings: "Evening 4 PM - Night",
      entryFee: { Safari: "₹500-1500" }
    },
    transport: { nearestRailway: "Jaisalmer (45 km)", busConnectivity: "Private Taxi from Jaisalmer" },
    externalLinks: { googleMaps: "https://goo.gl/maps/samdunes" },
    accessibility: { wheelchairFriendly: false, notes: "Deep sand makes it inaccessible." },
    routePlan: [ { time: "04:30 PM", activity: "Camel Safari" }, { time: "07:00 PM", activity: "Folk Dance" } ],
    foodGuide: [ { name: "Desert Camps", type: "Camp", specialty: "Ker Sangri", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Jawahar Hospital" }
  },
  {
    id: 2213,
    name: "Keoladeo Bird Sanctuary",
    slug: "bharatpur-bird-sanctuary",
    state: "Bharatpur, Rajasthan",
    category: "Nature",
    badge: "Bird Paradise",
    image: " https://www.kadambkunj.com/blog/wp-content/uploads/2021/12/Keoladeo-National-Park-Timing-Entry-Fee-Best-Time-To-Visit-Famous-Bird.jpg ",
    description: "A man-made wetland hosting thousands of birds including the rare Siberian Crane in winter. Best explored on a cycle rickshaw with a guide.",
    coordinates: { lat: 27.1593, lng: 77.5232 },
    essentials: {
      bestTime: "Aug to Feb",
      weather: "Cool",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Indian: "₹75", Rickshaw: "₹150/hr" }
    },
    transport: { nearestRailway: "Bharatpur Jn (5 km)", busConnectivity: "Rickshaws from station" },
    externalLinks: { googleMaps: "https://goo.gl/maps/keoladeo" },
    accessibility: { wheelchairFriendly: true, notes: "Main path is paved." },
    routePlan: [ { time: "07:00 AM", activity: "Bird Spotting" } ],
    foodGuide: [ { name: "Laxmi Vilas", type: "Heritage", specialty: "Thali", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "RBM Hospital" }
  },
  {
    id: 2214,
    name: "Bundi (City of Stepwells)",
    slug: "bundi-stepwells",
    state: "Bundi, Rajasthan",
    category: "Heritage",
    badge: "Blue City of East",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/58/5d/fd/photo2jpg.jpg?w=1200&h=-1&s=1",
    description: "Known for its palaces and over 50 stepwells (Baoris). The Bundi Palace features famous wall paintings (Chitra Shala) that are world-renowned.",
    coordinates: { lat: 25.4411, lng: 75.6411 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Combo: "₹100" }
    },
    transport: { nearestRailway: "Kota Junction (40 km)", busConnectivity: "Regular buses from Kota" },
    externalLinks: { googleMaps: "https://goo.gl/maps/bundi" },
    accessibility: { wheelchairFriendly: false, notes: "Stepwells have many stairs." },
    routePlan: [ { time: "10:00 AM", activity: "Raniji ki Baori" }, { time: "12:00 PM", activity: "Bundi Palace" } ],
    foodGuide: [ { name: "Bundi Haveli", type: "Heritage", specialty: "Omelettes", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Bundi" }
  },
  {
    id: 2215,
    name: "Fateh Sagar Lake",
    slug: "fateh-sagar-udaipur",
    state: "Udaipur, Rajasthan",
    category: "Nature",
    badge: "Pride of Udaipur",
    image: " https://imgcdn.flamingotravels.co.in/Images/PlacesOfInterest/fateh-sagar.jpg ",
    description: "An artificial lake housing three small islands, including Nehru Park and the Udaipur Solar Observatory. A popular spot for boating and evening walks.",
    coordinates: { lat: 24.6000, lng: 73.6800 },
    essentials: {
      bestTime: "Evening",
      weather: "Breezy",
      timings: "08:00 AM - 08:00 PM",
      entryFee: { Boat: "₹200-500" }
    },
    transport: { nearestRailway: "Udaipur City (5 km)", busConnectivity: "Auto-rickshaws available" },
    externalLinks: { googleMaps: "https://goo.gl/maps/fatehsagar" },
    accessibility: { wheelchairFriendly: true, notes: "Lakeside promenade is flat." },
    routePlan: [ { time: "05:00 PM", activity: "Speed Boating" }, { time: "07:00 PM", activity: "Cold Coffee at Chowpatty" } ],
    foodGuide: [ { name: "Fateh Sagar Chowpatty", type: "Street", specialty: "Kulhad Coffee", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "MB Hospital" }
  }
];

