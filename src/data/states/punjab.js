/**
 * PUNJAB_PLACES DATASET (EXTENDED - 15 PLACES)
 * ------------------------------------------------------------------
 * Sources: Punjab Tourism, SGPC & ASI
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const PUNJAB_PLACES = [
  {
    id: 2101,
    name: "Golden Temple (Sri Harmandir Sahib)",
    slug: "golden-temp-amritsar",
    state: "Amritsar, Punjab",
    category: "Spiritual",
    badge: "Holiest Sikh Shrine",
    image: " https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg ",
    description: "The spiritual and cultural center of the Sikh religion. Plated with real gold and surrounded by a sacred pool, it symbolizes equality and peace. The temple serves free food (Langar) to over 100,000 visitors daily regardless of religion or caste.",
    coordinates: { lat: 31.6200, lng: 74.8765 },
    essentials: {
      bestTime: "October to March",
      weather: "Extreme Summers/Cold Winters",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Amritsar (12 km)", nearestRailway: "Amritsar Junction (2 km)", busConnectivity: "Free shuttle from Railway Station" },
    externalLinks: { officialBooking: "https://sgpc.net/", googleMaps: "https://goo.gl/maps/goldentemple" },
    accessibility: { wheelchairFriendly: true, notes: "Wheelchairs and lifts are available for pilgrims." },
    routePlan: [ { time: "04:00 AM", activity: "Palki Sahib Ceremony" }, { time: "12:00 PM", activity: "Langar Seva" } ],
    foodGuide: [ { name: "Kesar Da Dhaba", type: "Iconic", specialty: "Dal Makhani", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Guru Ram Das Hospital" }
  },
  {
    id: 2102,
    name: "Jallianwala Bagh",
    slug: "jallianwala-bagh",
    state: "Amritsar, Punjab",
    category: "Heritage",
    badge: "National Memorial",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/jallianwala-bagh-amritsar-punjab-1-attr-hero?qlt=82&ts=1726662275638 ",
    description: "A historic public garden that stands as a memorial to the hundreds of innocent people killed by British troops in 1919. The site preserves the bullet marks on the walls and the 'Martyr's Well' where people jumped to escape.",
    coordinates: { lat: 31.6206, lng: 74.8801 },
    essentials: {
      bestTime: "Year Round",
      weather: "Warm",
      timings: "06:30 AM - 07:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Amritsar (13 km)", busConnectivity: "5 mins walk from Golden Temple" },
    externalLinks: { officialBooking: "https://amritsar.nic.in/", googleMaps: "https://goo.gl/maps/jallianwala" },
    accessibility: { wheelchairFriendly: true, notes: "Flat paved pathways throughout the park." },
    routePlan: [ { time: "10:00 AM", activity: "Museum Visit" } ],
    foodGuide: [ { name: "Brother's Dhaba", type: "City", specialty: "Amritsari Kulcha", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital" }
  },
  {
    id: 2103,
    name: "Attari-Wagah Border",
    slug: "wagah-border",
    state: "Amritsar, Punjab",
    category: "Heritage",
    badge: "Beating Retreat Ceremony",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/wagah-border-amritsar-punjab-1-attr-hero?qlt=82&ts=1726662230035 ",
    description: "The only open border crossing between India and Pakistan. It is famous for the high-energy military ceremony held every evening before sunset, featuring aggressive marches and the lowering of national flags.",
    coordinates: { lat: 31.6047, lng: 74.5707 },
    essentials: {
      bestTime: "All Year",
      weather: "Extreme Sun",
      timings: "04:30 PM (Winter) / 05:30 PM (Summer)",
      entryFee: { Entry: "Free (ID Mandatory)" }
    },
    transport: { nearestAirport: "Amritsar (35 km)", busConnectivity: "Taxi or Hop-on-Hop-off bus from city" },
    externalLinks: { officialBooking: "https://punjabtourism.gov.in/", googleMaps: "https://goo.gl/maps/wagah" },
    accessibility: { wheelchairFriendly: true, notes: "Special seating for seniors and disabled." },
    routePlan: [ { time: "03:30 PM", activity: "Security Check" }, { time: "05:00 PM", activity: "Ceremony" } ],
    foodGuide: [ { name: "Sarhad", type: "Theme", specialty: "Fusion Cuisine", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "BSF Hospital Attari" }
  },
  {
    id: 2104,
    name: "Virasat-e-Khalsa",
    slug: "virasat-e-khalsa",
    state: "Anandpur Sahib, Punjab",
    category: "Heritage",
    badge: "World Class Museum",
    image: " https://safdie-staging.imgix.net/6eab47a3-a54c-4ddb-b54c-b7281410def2/02_3_KHC_NightBridge-ASahib-RamRahman2011_1287-2.jpg?auto=format%2Ccompress&q=50&ixlib=imgixjs-3.5.1 ",
    description: "An architectural marvel that chronicles 500 years of Sikh history and the birth of the Khalsa. It is the most visited museum in the country, featuring state-of-the-art storytelling and interactive galleries.",
    coordinates: { lat: 31.2334, lng: 76.5020 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "10:00 AM - 04:30 PM (Mon Closed)",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Chandigarh (85 km)", busConnectivity: "Regular buses from Chandigarh" },
    externalLinks: { officialBooking: "http://virasatekhalsa.in/", googleMaps: "https://goo.gl/maps/virasat" },
    accessibility: { wheelchairFriendly: true, notes: "Fully accessible with elevators and ramps." },
    routePlan: [ { time: "11:00 AM", activity: "Gallery Tour" } ],
    foodGuide: [ { name: "Museum Cafeteria", type: "Cafe", specialty: "Veg Snacks", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Anandpur" }
  },
  {
    id: 2105,
    name: "Rock Garden of Chandigarh",
    slug: "rock-garden-chandigarh",
    state: "Chandigarh, Punjab",
    category: "Nature",
    badge: "Eco-Art Masterpiece",
    image: " https://cdn.britannica.com/34/186234-050-B0CAC44F/Statues-Rock-Garden-of-Chandigarh-Nek-Chand-2015.jpg ",
    description: "A massive sculpture garden built entirely out of industrial and domestic waste by Nek Chand. It features waterfalls, plazas, and thousands of figures made from broken bangles, tiles, and ceramic pots.",
    coordinates: { lat: 30.7525, lng: 76.8056 },
    essentials: {
      bestTime: "October to March",
      weather: "Sunny",
      timings: "09:00 AM - 07:00 PM",
      entryFee: { Adult: "₹30", Child: "₹10" }
    },
    transport: { nearestAirport: "Chandigarh (12 km)", nearestRailway: "Chandigarh Jn (6 km)", busConnectivity: "Well connected by city bus" },
    externalLinks: { officialBooking: "https://chandigarhtourism.gov.in/", googleMaps: "https://goo.gl/maps/rockgarden" },
    accessibility: { wheelchairFriendly: false, notes: "Narrow maze-like paths and steps." },
    routePlan: [ { time: "10:00 AM", activity: "Exploring Sculptures" } ],
    foodGuide: [ { name: "Sector 17 Market", type: "City", specialty: "Street Food", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "PGI Chandigarh" }
  },
  {
    id: 2106,
    name: "Qila Mubarak (Bathinda)",
    slug: "qila-mubarak-bathinda",
    state: "Bathinda, Punjab",
    category: "Heritage",
    badge: "Oldest Surviving Fort",
    image: " https://indiano.travel/wp-content/uploads/2022/05/Qila-Mubarak-is-a-historical-monument-in-the-heart-of-the-city-of-Bathinda-in-Punjab-India.-It-has-been-in-existence-from-90-110-AD-in-its-current-place-1.jpg ",
    description: "Built in the 6th century, it is the oldest surviving fort in India. It is historically significant as the place where Razia Sultana, the first female ruler of Delhi, was imprisoned.",
    coordinates: { lat: 30.2110, lng: 74.9455 },
    essentials: {
      bestTime: "Winter",
      weather: "Dry",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Bathinda (25 km)", nearestRailway: "Bathinda Junction (2 km)", busConnectivity: "Auto from station" },
    externalLinks: { officialBooking: "https://bathinda.nic.in/", googleMaps: "https://goo.gl/maps/qila-bathinda" },
    accessibility: { wheelchairFriendly: false, notes: "Steep uneven brick steps." },
    routePlan: [ { time: "11:00 AM", activity: "Fort Walk" } ],
    foodGuide: [ { name: "Mano Dhaba", type: "Local", specialty: "Tandoori Chicken", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Bathinda" }
  },
  {
    id: 2107,
    name: "Sheesh Mahal",
    slug: "sheesh-mahal-patiala",
    state: "Patiala, Punjab",
    category: "Heritage",
    badge: "Palace of Mirrors",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/99/56/3c/img-20200114-155055-largejpg.jpg?w=900&h=500&s=1 ",
    description: "A part of the Old Moti Bagh Palace, built by Maharaja Narinder Singh. It features stunning mirror-work, frescoes, and a suspension bridge over a lake. It also houses a world-class medal gallery.",
    coordinates: { lat: 30.3235, lng: 76.3930 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "10:00 AM - 05:00 PM (Mon Closed)",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestAirport: "Chandigarh (60 km)", busConnectivity: "Auto from Patiala Bus Stand" },
    externalLinks: { officialBooking: "https://patiala.nic.in/", googleMaps: "https://goo.gl/maps/sheeshmahal" },
    accessibility: { wheelchairFriendly: true, notes: "Ground floor and gardens are accessible." },
    routePlan: [ { time: "10:00 AM", activity: "Medal Gallery Tour" } ],
    foodGuide: [ { name: "Gopal's", type: "Sweets", specialty: "Patisa", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Rajindra Hospital" }
  },
  {
    id: 2108,
    name: "Harike Wetland",
    slug: "harike-bird-sanctuary",
    state: "Tarn Taran, Punjab",
    category: "Nature",
    badge: "Ramsar Site",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3hkbEvgB_l0Ck8Tf4vIWY-3kWtqsoqbvpw&s ",
    description: "The largest man-made wetland in North India at the confluence of Beas and Sutlej rivers. It is a major habitat for migratory birds and the endangered Indus River Dolphin.",
    coordinates: { lat: 31.1506, lng: 74.9509 },
    essentials: {
      bestTime: "Nov to Feb",
      weather: "Foggy/Cold",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Amritsar (60 km)", busConnectivity: "On Amritsar-Bathinda Highway" },
    externalLinks: { officialBooking: "https://punjabtourism.gov.in/", googleMaps: "https://goo.gl/maps/harike" },
    accessibility: { wheelchairFriendly: true, notes: "Roadside viewing from the barrage." },
    routePlan: [ { time: "07:30 AM", activity: "Birdwatching" } ],
    foodGuide: [ { name: "Highway Dhabas", type: "Roadside", specialty: "Sarson Saag", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Tarn Taran" }
  },
  {
    id: 2109,
    name: "Jagatjit Palace",
    slug: "jagatjit-palace-kapurthala",
    state: "Kapurthala, Punjab",
    category: "Heritage",
    badge: "Versailles of the East",
    image: " https://indiacinehub.gov.in/sites/default/files/styles/flexslider_full/public/2024-01/jagatjit_palace_kapurthala2.jpg?itok=dDV163ZW ",
    description: "Commissioned by Maharaja Jagatjit Singh, this palace is inspired by the Palace of Versailles. Its French architecture and beautiful gardens make Kapurthala known as the 'Paris of Punjab'.",
    coordinates: { lat: 31.3736, lng: 75.3942 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "Free (Sunday Only)" }
    },
    transport: { nearestAirport: "Jalandhar (30 km)", busConnectivity: "20km drive from Jalandhar" },
    externalLinks: { officialBooking: "https://kapurthala.gov.in/", googleMaps: "https://goo.gl/maps/jagatjit" },
    accessibility: { wheelchairFriendly: true, notes: "Gardens are flat and accessible." },
    routePlan: [ { time: "11:00 AM", activity: "Exterior Photography" } ],
    foodGuide: [ { name: "Haveli", type: "Theme", specialty: "Traditional Punjabi Thali", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Kapurthala" }
  },
  {
    id: 2110,
    name: "Pushpa Gujral Science City",
    slug: "science-city-kapurthala",
    state: "Kapurthala, Punjab",
    category: "Adventure",
    badge: "Largest Science Center",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/fa/32/46/sciencecity.jpg?w=600&h=300&s=1",
    description: "A massive edutainment center covering various fields of science. Features include a dinosaur park, IMAX theater, and space galleries. Ideal for family trips.",
    coordinates: { lat: 31.3344, lng: 75.4050 },
    essentials: {
      bestTime: "All Year",
      weather: "Indoor/Outdoor",
      timings: "09:00 AM - 05:30 PM",
      entryFee: { Adult: "₹250", Child: "₹180" }
    },
    transport: { nearestAirport: "Jalandhar (25 km)", busConnectivity: "Located on Jalandhar-Kapurthala Road" },
    externalLinks: { officialBooking: "https://pgsciencecity.org/", googleMaps: "https://goo.gl/maps/sciencecity" },
    accessibility: { wheelchairFriendly: true, notes: "Equipped with ramps and lifts." },
    routePlan: [ { time: "10:30 AM", activity: "Dinosaur Park" }, { time: "02:00 PM", activity: "IMAX Show" } ],
    foodGuide: [ { name: "Food Court", type: "Museum", specialty: "North Indian", rating: 3.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Jalandhar Civil Hospital" }
  },
  {
    id: 2111,
    name: "Gobindgarh Fort",
    slug: "gobindgarh-fort-amritsar",
    state: "Amritsar, Punjab",
    category: "Heritage",
    badge: "Military Marvel",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/gobindgarh-fort-amritsar-punjab-3-musthead-hero?qlt=82&ts=1726661873870 ",
    description: "A 250-year-old fort made of bricks and lime, once the treasury and stable of Maharaja Ranjit Singh. It now functions as a cultural museum with 7D shows and local art displays.",
    coordinates: { lat: 31.6245, lng: 74.8655 },
    essentials: {
      bestTime: "Evening (Light show)",
      weather: "Warm",
      timings: "10:00 AM - 10:00 PM",
      entryFee: { Day: "₹180", NightShow: "₹250" }
    },
    transport: { nearestAirport: "Amritsar (12 km)", busConnectivity: "Located in the heart of Amritsar" },
    externalLinks: { officialBooking: "https://fortgobindgarh.com/", googleMaps: "https://goo.gl/maps/gobindgarh" },
    accessibility: { wheelchairFriendly: true, notes: "Paved and wheelchair accessible." },
    routePlan: [ { time: "06:00 PM", activity: "Whispering Walls Show" } ],
    foodGuide: [ { name: "Amritsari Gali", type: "Food Stall", specialty: "Stuffed Kulcha", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Guru Ram Das Hospital" }
  },
  {
    id: 2112,
    name: "Rauza Sharif",
    slug: "rauza-sharif-sirhind",
    state: "Sirhind, Punjab",
    category: "Spiritual",
    badge: "Second Mecca for Sunnis",
    image: " https://avathioutdoors.gumlet.io/travelGuide/dev/sirhind_P4592.jpg ",
    description: "The Dargah of Sheikh Ahmad Faruqi Sirhindi, a 16th-century Sufi saint. It is a magnificent complex of tombs and mosques, attracting pilgrims from all over the world.",
    coordinates: { lat: 30.6400, lng: 76.3900 },
    essentials: {
      bestTime: "September to March",
      weather: "Pleasant",
      timings: "05:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Chandigarh (50 km)", nearestRailway: "Sirhind Junction (2 km)", busConnectivity: "Direct buses from Ludhiana" },
    externalLinks: { officialBooking: "https://punjabtourism.gov.in/", googleMaps: "https://goo.gl/maps/rauza" },
    accessibility: { wheelchairFriendly: true, notes: "Main courtyard is accessible." },
    routePlan: [ { time: "11:00 AM", activity: "Spiritual Darshan" } ],
    foodGuide: [ { name: "Floating Restaurant", type: "Iconic", specialty: "Fish Fry", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Sirhind" }
  },
  {
    id: 2113,
    name: "Maharaja Ranjit Singh War Museum",
    slug: "war-museum-ludhiana",
    state: "Ludhiana, Punjab",
    category: "Heritage",
    badge: "Pride of Soldiers",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/mahraja-ranjit-singh-war-museum-ludhiana-punjab-2-attr-hero?qlt=82&ts=1726661866055 ",
    description: "Spread over 4 acres, it displays the bravery of Punjabi soldiers. Features include an aircraft and tank gallery, and memoirs from the Kargil War and WWII.",
    coordinates: { lat: 30.9500, lng: 75.8500 },
    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "10:00 AM - 05:00 PM (Mon Closed)",
      entryFee: { Adult: "₹40" }
    },
    transport: { nearestAirport: "Ludhiana (Sahnewal) - 15 km", busConnectivity: "Located on GT Road" },
    externalLinks: { officialBooking: "https://ludhiana.nic.in/", googleMaps: "https://goo.gl/maps/war-museum" },
    accessibility: { wheelchairFriendly: true, notes: "Galleries are ramped." },
    routePlan: [ { time: "02:00 PM", activity: "Defense Gallery" } ],
    foodGuide: [ { name: "Aman Chicken", type: "Famous", specialty: "Lemon Chicken", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Fortis Ludhiana" }
  },
  {
    id: 2114,
    name: "Mukteshwar Mahadev Temple",
    slug: "mukteshwar-temple-pathankot",
    state: "Pathankot, Punjab",
    category: "Spiritual",
    badge: "Pandava Caves",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/42/5c/52/temple-picture.jpg?w=1200&h=-1&s=1 ",
    description: "An ancient Hindu temple dedicated to Lord Shiva, located on the banks of the River Ravi. Legend says the Pandavas stayed in these man-made caves during their exile.",
    coordinates: { lat: 32.2700, lng: 75.6500 },
    essentials: {
      bestTime: "Shivratri",
      weather: "Pleasant",
      timings: "05:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Pathankot (10 km)", nearestRailway: "Pathankot Cantt (8 km)", busConnectivity: "Taxi from Pathankot" },
    externalLinks: { officialBooking: "https://pathankot.nic.in/", googleMaps: "https://goo.gl/maps/mukteshwar" },
    accessibility: { wheelchairFriendly: false, notes: "Steps lead down to the river and caves." },
    routePlan: [ { time: "08:00 AM", activity: "Cave Exploration" } ],
    foodGuide: [ { name: "Local Stalls", type: "Basic", specialty: "Kheer", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Pathankot" }
  },
  {
    id: 2115,
    name: "Sadda Pind",
    slug: "sadda-pind-amritsar",
    state: "Amritsar, Punjab",
    category: "Heritage",
    badge: "Cultural Living Village",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/sadda-pind-amritsar-punjab-3-attr-hero?qlt=82&ts=1726661907728 ",
    description: "A recreated Punjabi village spread across 12 acres. It offers an immersive experience of authentic Punjabi culture, including pottery, folk dances like Gidda, and traditional food.",
    coordinates: { lat: 31.6700, lng: 74.8500 },
    essentials: {
      bestTime: "Evening",
      weather: "Warm",
      timings: "10:30 AM - 09:30 PM",
      entryFee: { Entry: "₹850 (Includes Meal)" }
    },
    transport: { nearestAirport: "Amritsar (8 km)", busConnectivity: "Taxi from Amritsar city" },
    externalLinks: { officialBooking: "https://saddapind.co.in/", googleMaps: "https://goo.gl/maps/saddapind" },
    accessibility: { wheelchairFriendly: true, notes: "Village paths are paved and accessible." },
    routePlan: [ { time: "05:00 PM", activity: "Bhangra & Folk Music" }, { time: "08:00 PM", activity: "Traditional Dinner" } ],
    foodGuide: [ { name: "Sadda Pind Kitchen", type: "Village", specialty: "Makki di Roti & Saag", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Guru Ram Das Hospital" }
  }
];
