/**
 * UTTARAKHAND_PLACES DATASET (Extended 20+ Places)
 * ------------------------------------------------------------------
 * Sources: UTDB (Uttarakhand Tourism), GMVN, KMVN & Official 2026 Data
 * Coverage: Char Dham, Panch Kedar, Hill Stations, & Hidden Gems
 * ------------------------------------------------------------------
 */

export const UTTARAKHAND_PLACES = [
  // --- SPIRITUAL (CHAR DHAM & BEYOND) ---
  {
    id: 2801,
    name: "Kedarnath Temple",
    slug: "kedarnath-temple",
    cityState: "Kedarnath, Uttarakhand",
    category: "Spiritual",
    badge: "Highest of 12 Jyotirlingas",
    image: " https://makemypuja.in/wp-content/uploads/2025/06/Kedarnath-Temple.webp ",
    description: "One of the holiest Hindu shrines located at 3,583m. It requires a 16km trek from Gaurikund and is dedicated to Lord Shiva.",
    coordinates: { lat: 30.7352, lng: 79.0669 },
    essentials: {
      bestTime: "May to June, Sept to Oct",
      weather: "Freezing/Cold",
      timings: "04:00 AM - 09:00 PM (Seasonal)",
      entryFee: { Darshan: "Free", Helicopter: "₹5000-8000" }
    },
    transport: { nearestAirport: "Dehradun (240 km)", nearestRailway: "Rishikesh (216 km)", busConnectivity: "Bus to Sonprayag/Gaurikund" },
    externalLinks: { officialBooking: "https://badrinath-kedarnath.gov.in/", googleMaps: "https://goo.gl/maps/kedarnath" },
    accessibility: { wheelchairFriendly: false, notes: "Palki and Ponies available for the trek." },
    routePlan: [
      { time: "05:00 AM", activity: "Start Trek from Gaurikund" },
      { time: "06:00 PM", activity: "Evening Aarti at Temple" }
    ],
    foodGuide: [{ name: "GMVN Canteen", specialty: "Dal Chawal", rating: 3.5 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "Kedarnath Base Hospital" }
  },
  {
    id: 2802,
    name: "Badrinath Temple",
    slug: "badrinath-temple",
    cityState: "Badrinath, Uttarakhand",
    category: "Spiritual",
    badge: "Abode of Lord Vishnu",
    image: " https://majesticjourney.in/wp-content/uploads/2020/05/badrinath-temple.jpg ",
    description: "Located on the banks of Alaknanda river, this temple is part of the Char Dham and is framed by the Neelkanth peak.",
    coordinates: { lat: 30.7447, lng: 79.4912 },
    essentials: {
      bestTime: "May to October",
      weather: "Cold",
      timings: "04:30 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dehradun (310 km)", nearestRailway: "Rishikesh (295 km)", busConnectivity: "Motorable roads till temple" },
    externalLinks: { officialBooking: "https://badrinath-kedarnath.gov.in/", googleMaps: "https://goo.gl/maps/badrinath" },
    accessibility: { wheelchairFriendly: true, notes: "Road access till the temple entrance." },
    routePlan: [
      { time: "05:00 AM", activity: "Tapt Kund Bath" },
      { time: "07:00 AM", activity: "Temple Darshan" }
    ],
    foodGuide: [{ name: "Saket Restaurant", specialty: "North Indian Thali", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "CHC Joshimath" }
  },
  {
    id: 2803,
    name: "Gangotri Temple",
    slug: "gangotri-temple",
    cityState: "Gangotri, Uttarakhand",
    category: "Spiritual",
    badge: "Origin of River Ganga",
    image: " https://www.chardham-pilgrimage-tour.com/assets/images/gangotri-banner2.webp ",
    description: "Dedicated to Goddess Ganga, it marks the spot where the holy river descended to earth. The actual source, Gaumukh, is a 19km trek away.",
    coordinates: { lat: 30.9947, lng: 78.9398 },
    essentials: {
      bestTime: "May to October",
      weather: "Cold",
      timings: "06:15 AM - 09:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dehradun (250 km)", nearestRailway: "Rishikesh (240 km)", busConnectivity: "Direct buses available" },
    externalLinks: { officialBooking: "https://uttarkashi.nic.in/", googleMaps: "https://goo.gl/maps/gangotri" },
    accessibility: { wheelchairFriendly: true, notes: "Temple is near the parking area." },
    routePlan: [
      { time: "07:00 AM", activity: "Holy Dip in Bhagirathi" },
      { time: "09:00 AM", activity: "Temple Darshan" }
    ],
    foodGuide: [{ name: "Local Dhabas", specialty: "Aloo Paratha", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "District Hospital Uttarkashi" }
  },
  {
    id: 2804,
    name: "Yamunotri Temple",
    slug: "yamunotri-temple",
    cityState: "Yamunotri, Uttarakhand",
    category: "Spiritual",
    badge: "Origin of River Yamuna",
    image: " https://www.chardham-pilgrimage-tour.com/assets/images/yamunotri-banner3.webp ",
    description: "The first stop of the Char Dham Yatra. Famous for its thermal springs like Surya Kund where pilgrims cook rice as prasad.",
    coordinates: { lat: 31.0139, lng: 78.4497 },
    essentials: {
      bestTime: "May to October",
      weather: "Cold",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dehradun (210 km)", nearestRailway: "Dehradun (175 km)", busConnectivity: "Road to Janki Chatti, then 6km trek" },
    externalLinks: { officialBooking: "https://uttarakhandtourism.gov.in/", googleMaps: "https://goo.gl/maps/yamunotri" },
    accessibility: { wheelchairFriendly: false, notes: "6km trek required from Janki Chatti." },
    routePlan: [
      { time: "06:00 AM", activity: "Trek from Janki Chatti" },
      { time: "10:00 AM", activity: "Surya Kund & Darshan" }
    ],
    foodGuide: [{ name: "Janki Chatti Dhabas", specialty: "Local Garhwali Food", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "CHC Barkot" }
  },

  // --- RISHIKESH & HARIDWAR ---
  {
    id: 2805,
    name: "Har Ki Pauri",
    slug: "har-ki-pauri-haridwar",
    cityState: "Haridwar, Uttarakhand",
    category: "Spiritual",
    badge: "Gateway to Gods",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/har-ki-pauri-haridwar-uttarakhand-1-attr-hero?qlt=82&ts=1726645951242 ",
    description: "A famous ghat on the banks of Ganga. The evening Aarti is a mesmerizing ritual involving hundreds of floating lamps.",
    coordinates: { lat: 29.9567, lng: 78.1709 },
    essentials: {
      bestTime: "All Year",
      weather: "Warm/Cool",
      timings: "24 Hours (Aarti at Sunset)",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dehradun (35 km)", nearestRailway: "Haridwar Jn (2 km)", busConnectivity: "Excellent" },
    externalLinks: { officialBooking: "https://haridwar.nic.in/", googleMaps: "https://goo.gl/maps/harkipauri" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available at major ghat sections." },
    routePlan: [
      { time: "04:00 PM", activity: "Mansa Devi Ropeway" },
      { time: "06:30 PM", activity: "Ganga Aarti" }
    ],
    foodGuide: [{ name: "Hoshiyarpuri", specialty: "Chole Puri", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "City Hospital" }
  },
  {
    id: 2806,
    name: "Triveni Ghat (Rishikesh)",
    slug: "triveni-ghat-rishikesh",
    cityState: "Rishikesh, Uttarakhand",
    category: "Spiritual",
    badge: "Yoga Capital of the World",
    image: " https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1698824010_rishikesh_1.jpg.webp",
    description: "The biggest ghat in Rishikesh where people take a holy dip and attend the famous Maha Aarti in the evening.",
    coordinates: { lat: 30.1033, lng: 78.2947 },
    essentials: {
      bestTime: "All Year",
      timings: "24 Hours",
      entryFee: { Rafting: "₹600+" }
    },
    transport: { nearestAirport: "Dehradun (20 km)", nearestRailway: "Yog Nagari Rishikesh (2 km)", busConnectivity: "Excellent" },
    externalLinks: { officialBooking: "https://uttarakhandtourism.gov.in/", googleMaps: "https://goo.gl/maps/rishikesh" },
    accessibility: { wheelchairFriendly: true, notes: "Ghat area is paved." },
    routePlan: [
      { time: "09:00 AM", activity: "River Rafting" },
      { time: "06:00 PM", activity: "Ganga Aarti" }
    ],
    foodGuide: [{ name: "Little Buddha Cafe", specialty: "Smoothie Bowls", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "AIIMS Rishikesh" }
  },

  // --- HILL STATIONS & NATURE ---
  {
    id: 2807,
    name: "Nainital Lake",
    slug: "nainital-lake",
    cityState: "Nainital, Uttarakhand",
    category: "Hill Stations",
    badge: "Lake District of India",
    image: " https://stampedmoments.com/wp-content/uploads/2025/10/boating-naini-lake.jpg",
    description: "A natural freshwater lake in the shape of an eye, surrounded by seven hills. The heart of Nainital's tourism.",
    coordinates: { lat: 29.3919, lng: 79.4542 },
    essentials: {
      bestTime: "March to June, Dec-Jan",
      timings: "06:00 AM - 06:00 PM (Boating)",
      entryFee: { Boat: "₹210-350" }
    },
    transport: { nearestAirport: "Pantnagar (65 km)", nearestRailway: "Kathgodam (34 km)", busConnectivity: "High" },
    externalLinks: { officialBooking: "https://nainital.gov.in/", googleMaps: "https://goo.gl/maps/nainital" },
    accessibility: { wheelchairFriendly: true, notes: "Mall road is flat and paved." },
    routePlan: [
      { time: "10:00 AM", activity: "Boating" },
      { time: "04:00 PM", activity: "Snow View Point via Ropeway" }
    ],
    foodGuide: [{ name: "Sakley's Bakery", specialty: "Pastries", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "BD Pandey Hospital" }
  },
  {
    id: 2808,
    name: "Mussoorie (Mall Road)",
    slug: "mussoorie-hill-station",
    cityState: "Mussoorie, Uttarakhand",
    category: "Hill Stations",
    badge: "Queen of Hills",
    image: " https://www.triphippies.com/wp-content/uploads/2025/04/Mall-Road-Mussoorie-Locations.webp ",
    description: "A colonial-era hill station famous for Kempty Falls, Lal Tibba, and views of the Shivalik range and Doon valley.",
    coordinates: { lat: 30.4598, lng: 78.0644 },
    essentials: {
      bestTime: "Summer / Winter (Snow)",
      timings: "24 Hours",
      entryFee: { Kempty: "Free" }
    },
    transport: { nearestAirport: "Dehradun (60 km)", nearestRailway: "Dehradun (35 km)", busConnectivity: "Excellent" },
    externalLinks: { officialBooking: "https://mussoorie.nic.in/", googleMaps: "https://goo.gl/maps/mussoorie" },
    accessibility: { wheelchairFriendly: true, notes: "Mall road is vehicle-free and accessible." },
    routePlan: [
      { time: "10:00 AM", activity: "Kempty Falls" },
      { time: "05:00 PM", activity: "Walk on Mall Road" }
    ],
    foodGuide: [{ name: "Kalsang", specialty: "Tibetan Momos", rating: 4.6 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "St. Mary's Hospital" }
  },
  {
    id: 2809,
    name: "Auli Ski Resort",
    slug: "auli-skiing",
    cityState: "Auli, Uttarakhand",
    category: "Adventure",
    badge: "Skiing Capital of India",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d0/97/26/the-royal-village-auli.jpg?w=1200&h=-1&s=1 ",
    description: "Famous for its snowy slopes and a 4km cable car ride from Joshimath. Offers panoramic views of Nanda Devi.",
    coordinates: { lat: 30.5342, lng: 79.5673 },
    essentials: {
      bestTime: "January to March (Skiing)",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Ropeway: "₹1000" }
    },
    transport: { nearestAirport: "Dehradun (280 km)", nearestRailway: "Rishikesh (260 km)", busConnectivity: "Buses to Joshimath, then Ropeway" },
    externalLinks: { officialBooking: "https://gmvnonline.com/", googleMaps: "https://goo.gl/maps/auli" },
    accessibility: { wheelchairFriendly: false, notes: "Uneven snow terrain." },
    routePlan: [
      { time: "09:00 AM", activity: "Ropeway Ride" },
      { time: "11:00 AM", activity: "Skiing Lesson" }
    ],
    foodGuide: [{ name: "Auli Dhabas", specialty: "Maggi & Tea", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "Military Hospital Joshimath" }
  },
  {
    id: 2810,
    name: "Valley of Flowers",
    slug: "valley-of-flowers-trek",
    cityState: "Govindghat, Uttarakhand",
    category: "Nature",
    badge: "UNESCO World Heritage",
    image: " https://s3.india.com/wp-content/uploads/2025/06/Bloom-Alert-2025_-Uttarakhands-Valley-Of-Flowers-Swings-Open-Its-Gates-%E2%80%93-All-You-Need-To-Know.jpg ",
    description: "An alpine valley that blooms with hundreds of species of wildflowers during the monsoon months.",
    coordinates: { lat: 30.7280, lng: 79.6053 },
    essentials: {
      bestTime: "July to September",
      timings: "07:00 AM - 05:00 PM",
      entryFee: { Indian: "₹150", Foreigner: "₹600" }
    },
    transport: { nearestAirport: "Dehradun (290 km)", nearestRailway: "Rishikesh (270 km)", busConnectivity: "Bus to Govindghat, then Trek" },
    externalLinks: { officialBooking: "https://uttarakhandtourism.gov.in/", googleMaps: "https://goo.gl/maps/vof" },
    accessibility: { wheelchairFriendly: false, notes: "High altitude trek, no ponies inside park." },
    routePlan: [
      { time: "06:00 AM", activity: "Trek from Ghangaria" },
      { time: "10:00 AM", activity: "Explore the Valley" }
    ],
    foodGuide: [{ name: "Local Guesthouses", specialty: "Simple Veg Food", rating: 3.5 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "Govindghat Medical Center" }
  },

  // --- WILDLIFE ---
  {
    id: 2811,
    name: "Jim Corbett National Park",
    slug: "jim-corbett",
    cityState: "Ramnagar, Uttarakhand",
    category: "Wildlife",
    badge: "India's First National Park",
    image: "https://static.toiimg.com/thumb/115448713/jim-corbett.jpg?width=1200&height=900 ",
    description: "Known for Bengal tigers and diverse wildlife. Includes zones like Dhikala, Jhirna, and Bijrani.",
    coordinates: { lat: 29.5300, lng: 78.7747 },
    essentials: {
      bestTime: "Nov to June",
      timings: "06:00 AM - 10:00 AM, 02:00 PM - 06:00 PM",
      entryFee: { JeepSafari: "₹4500-6000" }
    },
    transport: { nearestAirport: "Pantnagar (80 km)", nearestRailway: "Ramnagar (1 km)", busConnectivity: "Excellent from Delhi" },
    externalLinks: { officialBooking: "https://corbettonline.uk.gov.in/", googleMaps: "https://goo.gl/maps/corbett" },
    accessibility: { wheelchairFriendly: false, notes: "Safari jeeps are high and bumpy." },
    routePlan: [
      { time: "06:00 AM", activity: "Morning Safari" },
      { time: "04:00 PM", activity: "Visit Corbett Museum" }
    ],
    foodGuide: [{ name: "Village Vatika", specialty: "Kumaoni Thali", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "Ramnagar Govt Hospital" }
  },

  // --- HIDDEN GEMS & OFFBEAT ---
  {
    id: 2812,
    name: "Chopta (Mini Switzerland)",
    slug: "chopta-valley",
    cityState: "Ukhimath, Uttarakhand",
    category: "Nature",
    badge: "Mini Switzerland of India",
    image: " https://www.tusktravel.com/blog/wp-content/uploads/2023/03/Chopta-Uttarakhands-Mini-Switzerland.jpg",
    description: "A small region of meadows and evergreen forest. Base for the trek to Tungnath (Highest Shiva Temple).",
    coordinates: { lat: 30.4883, lng: 79.2166 },
    essentials: {
      bestTime: "April to June, Sept to Nov",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dehradun (220 km)", nearestRailway: "Rishikesh (200 km)", busConnectivity: "Shared taxis from Ukhimath" },
    externalLinks: { officialBooking: "https://uttarakhandtourism.gov.in/", googleMaps: "https://goo.gl/maps/chopta" },
    accessibility: { wheelchairFriendly: false, notes: "Trek to temple is paved but steep." },
    routePlan: [
      { time: "07:00 AM", activity: "Trek to Tungnath" },
      { time: "11:00 AM", activity: "Chandrashila Peak View" }
    ],
    foodGuide: [{ name: "Local Eco-camps", specialty: "Pahari Daal Chawal", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "CHC Ukhimath" }
  },
  {
    id: 2813,
    name: "Munsiyari",
    slug: "munsiyari-hill-station",
    cityState: "Pithoragarh, Uttarakhand",
    category: "Hill Stations",
    badge: "Little Kashmir",
    image: " https://static.toiimg.com/photo/93903117.cms ",
    description: "Offers stunning views of the Panchachuli peaks. Known for trekking routes to Milam and Ralam glaciers.",
    coordinates: { lat: 29.9880, lng: 80.2333 },
    essentials: {
      bestTime: "March to June, Sept to Oct",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Pantnagar (310 km)", nearestRailway: "Kathgodam (275 km)", busConnectivity: "Long distance taxis/buses" },
    externalLinks: { officialBooking: "https://pithoragarh.nic.in/", googleMaps: "https://goo.gl/maps/munsiyari" },
    accessibility: { wheelchairFriendly: false, notes: "Remote and hilly terrain." },
    routePlan: [
      { time: "06:00 AM", activity: "Panchachuli Sunrise" },
      { time: "10:00 AM", activity: "Visit Nanda Devi Temple" }
    ],
    foodGuide: [{ name: "Pahari Homestays", specialty: "Kumaoni Meat", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "District Hospital Pithoragarh" }
  },
  {
    id: 2814,
    name: "Lansdowne",
    slug: "lansdowne-cantonment",
    cityState: "Lansdowne, Uttarakhand",
    category: "Hill Stations",
    badge: "Quiet Cantonment Town",
    image: " https://www.hindustantimes.com/ht-img/img/2023/07/04/1600x900/The-proposal-to-change-the-name-of-the-town-has-be_1688497427568.jpg ",
    description: "A serene hill station established by the British. Famous for Bhulla Lake, Tip-in-Top point, and oak forests.",
    coordinates: { lat: 29.8377, lng: 78.6872 },
    essentials: {
      bestTime: "March to October",
      timings: "24 Hours",
      entryFee: { BhullaLake: "₹20" }
    },
    transport: { nearestAirport: "Dehradun (145 km)", nearestRailway: "Kotdwar (40 km)", busConnectivity: "Good from Delhi/Kotdwar" },
    externalLinks: { officialBooking: "https://pauri.nic.in/", googleMaps: "https://goo.gl/maps/lansdowne" },
    accessibility: { wheelchairFriendly: true, notes: "Very clean and paved roads." },
    routePlan: [
      { time: "10:00 AM", activity: "Bhulla Lake Boating" },
      { time: "04:00 PM", activity: "Sunset at Tip-in-Top" }
    ],
    foodGuide: [{ name: "Tipsy Cafe", specialty: "Sandwiches", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "Cantonment General Hospital" }
  },
  {
    id: 2815,
    name: "Jageshwar Dham",
    slug: "jageshwar-temples",
    cityState: "Almora, Uttarakhand",
    category: "Spiritual",
    badge: "Cluster of 124 Temples",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/2-jageshwar-temple-almorah-uttarakhand-attr-hero?qlt=82&ts=1726646689920 ",
    description: "A group of stone temples from the 9th-13th century dedicated to Lord Shiva, surrounded by giant deodar trees.",
    coordinates: { lat: 29.6389, lng: 79.8542 },
    essentials: {
      bestTime: "April to June, Sept to Nov",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Pantnagar (150 km)", nearestRailway: "Kathgodam (120 km)", busConnectivity: "Taxi from Almora" },
    externalLinks: { officialBooking: "https://almora.nic.in/", googleMaps: "https://goo.gl/maps/jageshwar" },
    accessibility: { wheelchairFriendly: true, notes: "Main complex is mostly flat." },
    routePlan: [
      { time: "08:00 AM", activity: "Main Temple Puja" },
      { time: "10:00 AM", activity: "Archaeological Museum" }
    ],
    foodGuide: [{ name: "Local Eateries", specialty: "Kumaoni Raita", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "Base Hospital Almora" }
  },
  {
    id: 2816,
    name: "Patal Bhuvaneshwar",
    slug: "patal-bhuvaneshwar-cave",
    cityState: "Gangolihat, Uttarakhand",
    category: "Spiritual",
    badge: "Mystical Limestone Cave",
    image: " https://www.euttarakhand.com/wp-content/uploads/2016/03/Patal-Bhuvaneshwar-Cave-3.jpg",
    description: "A cave temple believed to hold the residence of 33 crore Hindu deities. Accessible via a narrow tunnel.",
    coordinates: { lat: 29.6822, lng: 80.0889 },
    essentials: {
      bestTime: "Oct to May",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "Free (Guide recommended)" }
    },
    transport: { nearestAirport: "Pantnagar (225 km)", nearestRailway: "Kathgodam (190 km)", busConnectivity: "Taxi from Pithoragarh" },
    externalLinks: { officialBooking: "https://pithoragarh.nic.in/", googleMaps: "https://goo.gl/maps/patal" },
    accessibility: { wheelchairFriendly: false, notes: "Requires crawling/slipping through narrow rock tunnels." },
    routePlan: [
      { time: "10:00 AM", activity: "Cave Exploration" },
      { time: "01:00 PM", activity: "Visit Gangolihat Temple" }
    ],
    foodGuide: [{ name: "KMVN Lodge", specialty: "Simple Thali", rating: 3.7 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "CHC Gangolihat" }
  },
  {
    id: 2817,
    name: "Hemkund Sahib",
    slug: "hemkund-sahib-gurudwara",
    cityState: "Ghangaria, Uttarakhand",
    category: "Spiritual",
    badge: "Highest Gurudwara in the World",
    image: " https://cdn1.tripoto.com/media/filter/tst/img/2150829/Image/1653145994_hs1.jpg.webp ",
    description: "A sacred Sikh pilgrimage site located at 4,329m next to a crystal clear glacial lake.",
    coordinates: { lat: 30.7000, lng: 79.6167 },
    essentials: {
      bestTime: "June to September",
      timings: "05:00 AM - 02:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dehradun (295 km)", nearestRailway: "Rishikesh (275 km)", busConnectivity: "6km steep trek from Ghangaria" },
    externalLinks: { officialBooking: "https://uttarakhandtourism.gov.in/", googleMaps: "https://goo.gl/maps/hemkund" },
    accessibility: { wheelchairFriendly: false, notes: "Very steep trek; ponies and palkis are available." },
    routePlan: [
      { time: "05:00 AM", activity: "Start Trek from Ghangaria" },
      { time: "10:00 AM", activity: "Darshan & Langar" }
    ],
    foodGuide: [{ name: "Langar", specialty: "Khichdi & Tea", rating: 5.0 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "Medical Camp Ghangaria" }
  },
  {
    id: 2818,
    name: "Kausani (Switzerland of India)",
    slug: "kausani-hill-station",
    cityState: "Kausani, Uttarakhand",
    category: "Hill Stations",
    badge: "Panoramic Himalayan Views",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kausani_View_Nanda_Devi.jpg/800px-Kausani_View_Nanda_Devi.jpg",
    description: "Famous for its 300km wide panoramic view of Himalayan peaks like Nanda Devi and Trishul.",
    coordinates: { lat: 29.8433, lng: 79.5961 },
    essentials: {
      bestTime: "April to June, Sept to Nov",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Pantnagar (170 km)", nearestRailway: "Kathgodam (135 km)", busConnectivity: "Buses from Almora/Haldwani" },
    externalLinks: { officialBooking: "https://bageshwar.nic.in/", googleMaps: "https://goo.gl/maps/kausani" },
    accessibility: { wheelchairFriendly: true, notes: "Easy access to viewpoints." },
    routePlan: [
      { time: "06:00 AM", activity: "Peak Sunrise View" },
      { time: "10:00 AM", activity: "Kausani Tea Estate" }
    ],
    foodGuide: [{ name: "Anasakti Ashram", specialty: "Organic Food", rating: 4.4 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "District Hospital Bageshwar" }
  },
  {
    id: 2819,
    name: "Tehri Dam",
    slug: "tehri-dam-reservoir",
    cityState: "New Tehri, Uttarakhand",
    category: "Adventure",
    badge: "Highest Dam in India",
    image: " https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1698749010_rachit_chaudhary_5twdwdb4nla_unsplash_scaled.jpg.webp ",
    description: "A massive dam and lake offering water sports like jet skiing, motor boating, and paragliding.",
    coordinates: { lat: 30.3783, lng: 78.4797 },
    essentials: {
      bestTime: "March to June",
      timings: "09:00 AM - 06:00 PM",
      entryFee: { WaterSports: "₹500-2000" }
    },
    transport: { nearestAirport: "Dehradun (85 km)", nearestRailway: "Rishikesh (75 km)", busConnectivity: "Direct buses from Rishikesh" },
    externalLinks: { officialBooking: "https://tehri.nic.in/", googleMaps: "https://goo.gl/maps/tehri" },
    accessibility: { wheelchairFriendly: true, notes: "Dam viewpoints and lakefront are accessible." },
    routePlan: [
      { time: "11:00 AM", activity: "Jet Skiing" },
      { time: "02:00 PM", activity: "Dobra Chanti Bridge View" }
    ],
    foodGuide: [{ name: "Lakefront Dhabas", specialty: "Fish Curry", rating: 3.9 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "District Hospital Tehri" }
  },
  {
    id: 2820,
    name: "Mana Village",
    slug: "mana-village-badrinath",
    cityState: "Mana, Uttarakhand",
    category: "Heritage",
    badge: "Last Indian Village",
    image: " https://static.toiimg.com/thumb/110601906/Mana-Village-Uttarakhand.jpg?width=1200&height=900 ",
    description: "Located 3km from Badrinath, this village is rich in mythology, featuring Vyas Gufa and Bheema Pul.",
    coordinates: { lat: 30.7747, lng: 79.4958 },
    essentials: {
      bestTime: "May to October",
      timings: "Daylight Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dehradun (315 km)", nearestRailway: "Rishikesh (300 km)", busConnectivity: "3km walk/auto from Badrinath" },
    externalLinks: { officialBooking: "https://uttarakhandtourism.gov.in/", googleMaps: "https://goo.gl/maps/mana" },
    accessibility: { wheelchairFriendly: false, notes: "Village paths are narrow and stony." },
    routePlan: [
      { time: "10:00 AM", activity: "Explore Vyas Gufa" },
      { time: "12:00 PM", activity: "Tea at 'Last Indian Tea Shop'" }
    ],
    foodGuide: [{ name: "Last Tea Shop", specialty: "Maggi & Tea", rating: 4.8 }],
    emergency: { police: "100", touristHelpline: "1364", hospital: "Medical Camp Mana" }
  }
];
