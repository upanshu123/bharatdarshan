/**
 * UTTAR_PRADESH_PLACES DATASET (Extended 20+ Places)
 * ------------------------------------------------------------------
 * Sources: UP Tourism, ASI, Temple Trusts & Official 2026 Data
 * Coverage: Heritage, Spiritual, Nature, and Hidden Gems
 * ------------------------------------------------------------------
 */

export const UTTAR_PRADESH_PLACES = [
  // --- HERITAGE & ICONS ---
  {
    id: 2701,
    name: "Taj Mahal",
    slug: "taj-mahal-agra",
    cityState: "Agra, Uttar Pradesh",
    category: "Heritage",
    badge: "Seven Wonders of the World",
    image: " https://media.architecturaldigest.com/photos/67acb9b0339bcbaaadeb91b5/1:1/w_4000,h_4000,c_limit/GettyImages-873536102.jpg",
    description: "An immense white marble mausoleum built by Shah Jahan. It is the pinnacle of Mughal architecture and a global symbol of love.",
    coordinates: { lat: 27.1751, lng: 78.0421 },
    essentials: {
      bestTime: "October to March",
      weather: "Extreme Hot/Cold",
      timings: "30 mins before Sunrise to Sunset (Closed Fridays)",
      entryFee: { Indian: "₹50 + ₹200 (Main)", Foreigner: "₹1100 + ₹200" }
    },
    transport: { nearestAirport: "Agra (12 km)", nearestRailway: "Agra Cantt (6 km)", busConnectivity: "Electric buses to gate" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/tajmahal" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available to main platform." },
    routePlan: [
      { time: "06:00 AM", activity: "Sunrise Viewing" },
      { time: "09:00 AM", activity: "Garden Walk & Photography" }
    ],
    foodGuide: [{ name: "Pinch of Spice", specialty: "Mughlai Cuisine", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "S.N. Medical College" }
  },
  {
    id: 2702,
    name: "Agra Fort",
    slug: "agra-fort",
    cityState: "Agra, Uttar Pradesh",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/01/08/32/agra-fort.jpg?w=900&h=500&s=1 ",
    description: "A massive red sandstone fortress that served as the main residence of Mughal emperors until 1638.",
    coordinates: { lat: 27.1795, lng: 78.0211 },
    essentials: {
      bestTime: "October to March",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Indian: "₹50", Foreigner: "₹650" }
    },
    transport: { nearestAirport: "Agra (10 km)", nearestRailway: "Agra Fort Station (2 km)", busConnectivity: "High" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/agrafort" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps provided throughout the complex." },
    routePlan: [
      { time: "02:00 PM", activity: "Jahangiri Mahal Visit" },
      { time: "04:00 PM", activity: "View Taj Mahal from Musamman Burj" }
    ],
    foodGuide: [{ name: "Dasaprakash", specialty: "South Indian", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "District Hospital Agra" }
  },
  {
    id: 2703,
    name: "Bara Imambara",
    slug: "bara-imambara-lucknow",
    cityState: "Lucknow, Uttar Pradesh",
    category: "Heritage",
    badge: "Gravity-Defying Architecture",
    image: " https://static.toiimg.com/photo/103890972.cms ",
    description: "Built by Nawab Asaf-ud-Daula, it features the famous Bhool Bhulaiya (labyrinth) and one of the largest arched halls in the world.",
    coordinates: { lat: 26.8692, lng: 80.9129 },
    essentials: {
      bestTime: "October to March",
      timings: "06:00 AM - 05:00 PM (Closed Monday)",
      entryFee: { Indian: "₹50", Foreigner: "₹500" }
    },
    transport: { nearestAirport: "Lucknow (15 km)", nearestRailway: "Lucknow Charbagh (5 km)", busConnectivity: "Excellent (Metro/Bus)" },
    externalLinks: { officialBooking: "https://uptourism.gov.in/", googleMaps: "https://goo.gl/maps/imambara" },
    accessibility: { wheelchairFriendly: false, notes: "Labyrinth has very narrow, steep stairs." },
    routePlan: [
      { time: "10:00 AM", activity: "Hall Tour" },
      { time: "11:30 AM", activity: "Bhool Bhulaiya Exploration" }
    ],
    foodGuide: [{ name: "Tunday Kababi", specialty: "Galouti Kebab", rating: 4.8 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "KGMU Trauma Centre" }
  },

  // --- SPIRITUAL ---
  {
    id: 2704,
    name: "Kashi Vishwanath Temple",
    slug: "kashi-vishwanath-varanasi",
    cityState: "Varanasi, Uttar Pradesh",
    category: "Spiritual",
    badge: "One of 12 Jyotirlingas",
    image: " https://www.daiwikhotels.com/wp-content/uploads/2024/07/kashi-viswanath-temple-cvr-2.jpg ",
    description: "A major temple dedicated to Lord Shiva. The new corridor provides direct access from the Ganges river ghats.",
    coordinates: { lat: 25.3109, lng: 83.0107 },
    essentials: {
      bestTime: "All Year",
      timings: "03:00 AM - 11:00 PM",
      entryFee: { General: "Free", SugamDarshan: "₹300" }
    },
    transport: { nearestAirport: "Varanasi (25 km)", nearestRailway: "Varanasi Jn (5 km)", busConnectivity: "Restricted near ghats" },
    externalLinks: { officialBooking: "https://shrikashivishwanath.org/", googleMaps: "https://goo.gl/maps/kashi" },
    accessibility: { wheelchairFriendly: true, notes: "New corridor has ramps and escalators." },
    routePlan: [
      { time: "05:00 AM", activity: "Morning Darshan" },
      { time: "06:30 PM", activity: "Evening Ganga Aarti nearby" }
    ],
    foodGuide: [{ name: "Ram Bhandar", specialty: "Kachori Jalebi", rating: 4.8 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "Kabir Chaura" }
  },
  {
    id: 2705,
    name: "Ram Mandir (Ayodhya Dham)",
    slug: "ram-mandir-ayodhya",
    cityState: "Ayodhya, Uttar Pradesh",
    category: "Spiritual",
    badge: "Janmabhoomi of Lord Ram",
    image: " https://temple.yatradham.org/public/Product/temple/temple_bCWJtXm0_202402070910120.jpg ",
    description: "The newly built grand temple dedicated to Shri Ram Lalla. A masterpiece of Nagara style architecture in pink sandstone.",
    coordinates: { lat: 26.7956, lng: 82.1944 },
    essentials: {
      bestTime: "All Year",
      timings: "06:30 AM - 09:30 PM",
      entryFee: { Entry: "Free", AartiPass: "Online/Free (Limited)" }
    },
    transport: { nearestAirport: "Maharishi Valmiki Intl (10 km)", nearestRailway: "Ayodhya Dham Jn (3 km)", busConnectivity: "E-buses high" },
    externalLinks: { officialBooking: "https://srjbtkshetra.org/", googleMaps: "https://goo.gl/maps/rammandir" },
    accessibility: { wheelchairFriendly: true, notes: "Fully accessible with lifts and battery cars." },
    routePlan: [
      { time: "07:00 AM", activity: "Temple Darshan" },
      { time: "11:00 AM", activity: "Hanuman Garhi Visit" }
    ],
    foodGuide: [{ name: "Ram Prasadam", specialty: "Temple Food", rating: 4.8 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "District Hospital Ayodhya" }
  },
  {
    id: 2706,
    name: "Triveni Sangam",
    slug: "triveni-sangam-prayagraj",
    cityState: "Prayagraj, Uttar Pradesh",
    category: "Spiritual",
    badge: "Site of Kumbh Mela",
    image: " https://saishishirtours.in/wp-content/uploads/2022/07/Triveni-Sangam.webp",
    description: "The holy confluence of Ganga, Yamuna, and the mythical Saraswati rivers. Host to the world's largest religious gathering.",
    coordinates: { lat: 25.4326, lng: 81.8890 },
    essentials: {
      bestTime: "January-February (Magh Mela)",
      timings: "24 Hours (Boating Sunrise-Sunset)",
      entryFee: { Entry: "Free", SharedBoat: "₹50-100" }
    },
    transport: { nearestAirport: "Prayagraj (15 km)", nearestRailway: "Prayagraj Jn (6 km)", busConnectivity: "Moderate" },
    externalLinks: { officialBooking: "https://kumbh.gov.in/", googleMaps: "https://goo.gl/maps/sangam" },
    accessibility: { wheelchairFriendly: false, notes: "Sandy terrain makes wheelchair use difficult." },
    routePlan: [
      { time: "05:00 AM", activity: "Holy Dip at Sunrise" },
      { time: "08:00 AM", activity: "Visit Prayagraj Fort" }
    ],
    foodGuide: [{ name: "Netram Moolchand", specialty: "Kachori Sabzi", rating: 4.6 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "SRN Hospital" }
  },

  // --- BUDDHIST HERITAGE ---
  {
    id: 2707,
    name: "Dhamek Stupa (Sarnath)",
    slug: "sarnath-stupa",
    cityState: "Varanasi, Uttar Pradesh",
    category: "Heritage",
    badge: "First Sermon of Buddha",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/dhamek-stupa-attr-body?qlt=82&ts=1727353533236 ",
    description: "The site where Lord Buddha gave his first sermon. Features the 128ft high stupa and the Lion Capital of Ashoka.",
    coordinates: { lat: 25.3811, lng: 83.0214 },
    essentials: {
      bestTime: "October to March",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestAirport: "Varanasi (25 km)", nearestRailway: "Varanasi Jn (10 km)", busConnectivity: "Good" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/sarnath" },
    accessibility: { wheelchairFriendly: true, notes: "Archaeological park is flat and paved." },
    routePlan: [
      { time: "09:00 AM", activity: "Stupa & Ruins Tour" },
      { time: "11:00 AM", activity: "Sarnath Museum Visit" }
    ],
    foodGuide: [{ name: "Green Hut", specialty: "Veg Thali", rating: 3.9 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "Apex Hospital" }
  },
  {
    id: 2708,
    name: "Mahaparinirvana Temple",
    slug: "kushinagar-stupa",
    cityState: "Kushinagar, Uttar Pradesh",
    category: "Heritage",
    badge: "Buddha's Death Place",
    image: " https://www.buddhisttourism.online/assets/images/kushinagar-banner2.webp ",
    description: "Houses a 6-meter long reclining statue of Lord Buddha, signifying his final liberation (Nirvana).",
    coordinates: { lat: 26.7392, lng: 83.8893 },
    essentials: {
      bestTime: "Winter",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Kushinagar Intl (5 km)", nearestRailway: "Gorakhpur (50 km)", busConnectivity: "Good from Gorakhpur" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/kushinagar" },
    accessibility: { wheelchairFriendly: true, notes: "Temple floor is accessible." },
    routePlan: [
      { time: "10:00 AM", activity: "Temple Visit" },
      { time: "12:00 PM", activity: "Ramabhar Stupa (Cremation Site)" }
    ],
    foodGuide: [{ name: "Lotus Nikko", specialty: "International Cuisine", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "District Hospital" }
  },

  // --- KRISHNA CIRCUIT ---
  {
    id: 2709,
    name: "Shri Krishna Janmabhoomi",
    slug: "mathura-janmabhoomi",
    cityState: "Mathura, Uttar Pradesh",
    category: "Spiritual",
    badge: "Birthplace of Lord Krishna",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Mathura_Krishna_Temple.jpg/800px-Mathura_Krishna_Temple.jpg",
    description: "The prison cell (Garbha Griha) where Lord Krishna was born. A major pilgrimage center in the Braj region.",
    coordinates: { lat: 27.5050, lng: 77.6690 },
    essentials: {
      bestTime: "Holi & Janmashtami",
      timings: "05:00 AM - 12:00 PM, 04:00 PM - 09:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agra (60 km)", nearestRailway: "Mathura Jn (3 km)", busConnectivity: "Very Good" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/mathura" },
    accessibility: { wheelchairFriendly: true, notes: "Lifts and ramps available for elderly." },
    routePlan: [
      { time: "08:00 AM", activity: "Janmabhoomi Darshan" },
      { time: "10:30 AM", activity: "Vishram Ghat Yamuna Aarti" }
    ],
    foodGuide: [{ name: "Brijwasi Mithai", specialty: "Mathura Peda", rating: 4.7 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "District Hospital Mathura" }
  },
  {
    id: 2710,
    name: "Banke Bihari Temple",
    slug: "banke-bihari-vrindavan",
    cityState: "Vrindavan, Uttar Pradesh",
    category: "Spiritual",
    badge: "Divine Soul of Vrindavan",
    image: " https://www.poojn.in/wp-content/uploads/2025/03/Spiritual-Journey-to-Vrindavan-The-Banke-Bihari-Temple-Experience.jpeg.jpg ",
    description: "Famous for the 'unblinking' deity of Krishna. The temple follows a unique tradition of moving curtains during darshan.",
    coordinates: { lat: 27.5815, lng: 77.6980 },
    essentials: {
      bestTime: "Winter",
      timings: "07:30 AM - 12:00 PM, 05:30 PM - 09:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agra (75 km)", nearestRailway: "Mathura (12 km)", busConnectivity: "Autos from Mathura" },
    externalLinks: { officialBooking: "https://shribankeybihari.info/", googleMaps: "https://goo.gl/maps/bankebihari" },
    accessibility: { wheelchairFriendly: false, notes: "Extremely narrow and crowded lanes." },
    routePlan: [
      { time: "09:00 AM", activity: "Temple Darshan" },
      { time: "11:00 AM", activity: "Nidhivan Visit" }
    ],
    foodGuide: [{ name: "Mithas", specialty: "Rabri & Lassi", rating: 4.4 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "Ramakrishna Mission Hospital" }
  },

  // --- HIDDEN GEMS & NATURE ---
  {
    id: 2711,
    name: "Dudhwa Tiger Reserve",
    slug: "dudhwa-national-park",
    cityState: "Lakhimpur Kheri, Uttar Pradesh",
    category: "Wildlife",
    badge: "Terai Jungle Adventure",
    image: " https://www.naturesafariindia.com/wp-content/uploads/2019/06/Dudhwa-National-Park-Tigers-vs-Elephants-1-930x600.jpg",
    description: "Pristine forest on the Indo-Nepal border, home to Tigers, One-horned Rhinos, and Swamp Deer.",
    coordinates: { lat: 28.4877, lng: 80.6480 },
    essentials: {
      bestTime: "November to May",
      timings: "06:00 AM - 10:00 AM, 03:00 PM - 06:00 PM",
      entryFee: { Indian: "₹100", Jeep: "₹3000 (Approx)" }
    },
    transport: { nearestAirport: "Lucknow (230 km)", nearestRailway: "Dudhwa (4 km)", busConnectivity: "Moderate" },
    externalLinks: { officialBooking: "https://upecotourism.in/", googleMaps: "https://goo.gl/maps/dudhwa" },
    accessibility: { wheelchairFriendly: false, notes: "Safari jeeps are high and rugged." },
    routePlan: [
      { time: "06:00 AM", activity: "Morning Jeep Safari" },
      { time: "04:00 PM", activity: "Bird Watching at Lake" }
    ],
    foodGuide: [{ name: "Tiger Resort", specialty: "North Indian Buffet", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "CHC Palia" }
  },
  {
    id: 2712,
    name: "Chunar Fort",
    slug: "chunar-fort-mirzapur",
    cityState: "Mirzapur, Uttar Pradesh",
    category: "Heritage",
    badge: "The Ancient Sentinel",
    image: "https://indiacinehub.gov.in/sites/default/files/styles/flexslider_full/public/2024-03/chunar.jpg?itok=yqFaBDWg ",
    description: "A historic hilltop fort overlooking the Ganges, dating back to 56 BC. Famous for its secret tunnels and sunset views.",
    coordinates: { lat: 25.1278, lng: 82.8872 },
    essentials: {
      bestTime: "September to March",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Varanasi (45 km)", nearestRailway: "Chunar (3 km)", busConnectivity: "Buses from Varanasi" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/chunar" },
    accessibility: { wheelchairFriendly: false, notes: "Very steep climb and uneven paths." },
    routePlan: [
      { time: "04:00 PM", activity: "Fort Exploration" },
      { time: "05:30 PM", activity: "Sunset over Ganges" }
    ],
    foodGuide: [{ name: "Local Dhabas", specialty: "Baati Chokha", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "District Hospital Mirzapur" }
  },
  {
    id: 2713,
    name: "Jhansi Fort",
    slug: "jhansi-fort-bundelkhand",
    cityState: "Jhansi, Uttar Pradesh",
    category: "Heritage",
    badge: "Legend of Rani Laxmibai",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/jhansi-fort-jhansi-uttar-pradesh-1-attr-hero?qlt=82&ts=1726648846779 ",
    description: "Built on Bangira hill, it was the stronghold of the iconic Queen Laxmibai during the 1857 rebellion.",
    coordinates: { lat: 25.4578, lng: 78.5772 },
    essentials: {
      bestTime: "October to March",
      timings: "06:00 AM - 06:00 PM (Light show at 7:30 PM)",
      entryFee: { Indian: "₹25", LightShow: "₹100" }
    },
    transport: { nearestAirport: "Gwalior (100 km)", nearestRailway: "Jhansi Jn (3 km)", busConnectivity: "Excellent" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/jhansi" },
    accessibility: { wheelchairFriendly: true, notes: "Most fort areas are paved." },
    routePlan: [
      { time: "03:00 PM", activity: "Fort Walkthrough" },
      { time: "07:30 PM", activity: "Sound & Light Show" }
    ],
    foodGuide: [{ name: "Janak's", specialty: "Thali", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "District Hospital Jhansi" }
  },
  {
    id: 2714,
    name: "Hastinapur",
    slug: "hastinapur-meerut",
    cityState: "Meerut, Uttar Pradesh",
    category: "Spiritual",
    badge: "Capital of Mahabharata",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqM9dN_dGXRUe4IjV3LIdElfH1ocwULMqmlg&s",
    description: "An ancient town mentioned in the Mahabharata. Now a major pilgrimage for Jains with beautiful temples like Jambudweep.",
    coordinates: { lat: 29.1678, lng: 78.0211 },
    essentials: {
      bestTime: "All Year",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Delhi (120 km)", nearestRailway: "Meerut City (35 km)", busConnectivity: "Direct from Meerut" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/hastinapur" },
    accessibility: { wheelchairFriendly: true, notes: "Jambudweep complex is wheelchair friendly." },
    routePlan: [
      { time: "10:00 AM", activity: "Jambudweep Visit" },
      { time: "02:00 PM", activity: "Old Pandeshwar Temple" }
    ],
    foodGuide: [{ name: "Temple Canteen", specialty: "Pure Veg Meals", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "Meerut Medical College" }
  },
  {
    id: 2715,
    name: "Vindhyachal Temple",
    slug: "vindhyachal-mirzapur",
    cityState: "Mirzapur, Uttar Pradesh",
    category: "Spiritual",
    badge: "Shakti Peeth",
    image: " https://miro.medium.com/v2/resize:fit:1000/0*XA_RNtxYaZpqVWzS.jpg",
    description: "A major Shakti Peeth dedicated to Goddess Vindhyavasini, situated on the banks of the Ganges.",
    coordinates: { lat: 25.1678, lng: 82.5211 },
    essentials: {
      bestTime: "Navratri",
      timings: "05:00 AM - 10:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Varanasi (70 km)", nearestRailway: "Vindhyachal (1 km)", busConnectivity: "Frequent" },
    externalLinks: { officialBooking: "https://vindhyavasini.up.gov.in/", googleMaps: "https://goo.gl/maps/vindhya" },
    accessibility: { wheelchairFriendly: true, notes: "New corridor construction has improved access." },
    routePlan: [
      { time: "06:00 AM", activity: "Main Temple Darshan" },
      { time: "09:00 AM", activity: "Ashtabhuja Temple Visit" }
    ],
    foodGuide: [{ name: "Local Peda Stalls", specialty: "Mirzapuri Peda", rating: 4.8 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "Mirzapur Hospital" }
  },
  {
    id: 2716,
    name: "Shravasti",
    slug: "shravasti-buddhist-site",
    cityState: "Shravasti, Uttar Pradesh",
    category: "Heritage",
    badge: "Buddha's Favorite Monsoon Retreat",
    image: " https://sravastiabbey.org/wp-content/uploads/2023/08/aug23shravasti01.jpg",
    description: "One of the most important Buddhist sites where Buddha spent 24 monsoon seasons. Home to the Jetavana Monastery ruins.",
    coordinates: { lat: 27.5111, lng: 82.0444 },
    essentials: {
      bestTime: "October to March",
      timings: "06:00 AM - 05:30 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestAirport: "Lucknow (170 km)", nearestRailway: "Balrampur (15 km)", busConnectivity: "Good" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/shravasti" },
    accessibility: { wheelchairFriendly: true, notes: "Park paths are well maintained." },
    routePlan: [
      { time: "09:00 AM", activity: "Jetavana Monastery ruins" },
      { time: "11:00 AM", activity: "Ananda Bodhi Tree" }
    ],
    foodGuide: [{ name: "Pawan Hotel", specialty: "North Indian", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "CHC Shravasti" }
  },
  {
    id: 2717,
    name: "Naimisharanya",
    slug: "naimisharanya-sitapur",
    cityState: "Sitapur, Uttar Pradesh",
    category: "Spiritual",
    badge: "Chakra Tirtha",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fd/ef/2e/photo0jpg.jpg?w=1200&h=-1&s=1 ",
    description: "A highly sacred place where the 88,000 sages performed penance. Famous for the circular 'Chakra Tirtha' pond.",
    coordinates: { lat: 27.3522, lng: 80.4872 },
    essentials: {
      bestTime: "All Year",
      timings: "05:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Lucknow (95 km)", nearestRailway: "Sitapur (35 km)", busConnectivity: "Buses from Lucknow" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/naimish" },
    accessibility: { wheelchairFriendly: true, notes: "Pond area is flat and paved." },
    routePlan: [
      { time: "07:00 AM", activity: "Holy Dip in Chakra Tirtha" },
      { time: "09:30 AM", activity: "Visit Vyas Gaddi" }
    ],
    foodGuide: [{ name: "Local Ashrams", specialty: "Satvik Meals", rating: 4.6 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "Sitapur District Hospital" }
  },
  {
    id: 2718,
    name: "Bithoor",
    slug: "bithoor-kanpur",
    cityState: "Kanpur, Uttar Pradesh",
    category: "Heritage",
    badge: "Center of 1857 Mutiny",
    image: " https://tripxl.com/blog/wp-content/uploads/2024/11/Brahmavart-Ghat.jpg ",
    description: "A historic town on the Ganges bank. Site of the revolt led by Nana Sahib and birthplace of Luv-Kush.",
    coordinates: { lat: 26.6111, lng: 80.2667 },
    essentials: {
      bestTime: "Winter",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Kanpur (30 km)", nearestRailway: "Kanpur Central (22 km)", busConnectivity: "Moderate" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/bithoor" },
    accessibility: { wheelchairFriendly: false, notes: "Ghat steps are uneven." },
    routePlan: [
      { time: "04:00 PM", activity: "Brahmavart Ghat Boating" },
      { time: "05:30 PM", activity: "Visit Valmiki Ashram" }
    ],
    foodGuide: [{ name: "Kanpur Street Food", specialty: "Thaggu Ke Laddu", rating: 4.9 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "Hallett Hospital Kanpur" }
  },
  {
    id: 2719,
    name: "Chambal Wildlife Sanctuary",
    slug: "chambal-sanctuary-agra",
    cityState: "Etawah/Agra, Uttar Pradesh",
    category: "Wildlife",
    badge: "Riverine Ecosystem",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/national-chambal-sanctuary-gwalior-madhya-pradesh-attr-about?qlt=82&ts=1727335761449 ",
    description: "Famous for endangered Gharials, Red-crowned Roof Turtles, and the rare Gangetic River Dolphin.",
    coordinates: { lat: 26.8550, lng: 78.8872 },
    essentials: {
      bestTime: "November to March",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { BoatSafari: "₹2500 (per boat)" }
    },
    transport: { nearestAirport: "Agra (80 km)", nearestRailway: "Agra/Etawah", busConnectivity: "Private taxi recommended" },
    externalLinks: { officialBooking: "https://upecotourism.in/", googleMaps: "https://goo.gl/maps/chambal" },
    accessibility: { wheelchairFriendly: false, notes: "River bank access involves walking on sand." },
    routePlan: [
      { time: "09:00 AM", activity: "Boat Safari for Dolphins" },
      { time: "03:00 PM", activity: "Nature Walk on Banks" }
    ],
    foodGuide: [{ name: "Mela Kothi", specialty: "Organic Local Meals", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "Etawah Hospital" }
  },
  {
    id: 2720,
    name: "Barsana (Radha Rani Temple)",
    slug: "barsana-temple-mathura",
    cityState: "Barsana, Uttar Pradesh",
    category: "Spiritual",
    badge: "Birthplace of Shri Radha",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gHajBEsHU5GaXX6t_m-ix-hUWDt8ypc1ww&s",
    description: "The only temple in India dedicated solely to Goddess Radha. Famous worldwide for the Lathmar Holi festival.",
    coordinates: { lat: 27.6444, lng: 77.3778 },
    essentials: {
      bestTime: "Holi Festival",
      timings: "05:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agra (100 km)", nearestRailway: "Mathura (45 km)", busConnectivity: "Buses from Mathura" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/barsana" },
    accessibility: { wheelchairFriendly: false, notes: "Temple is on a hilltop with over 200 steps." },
    routePlan: [
      { time: "08:00 AM", activity: "Hilltop Temple Darshan" },
      { time: "11:00 AM", activity: "Visit Rangeeli Mahal" }
    ],
    foodGuide: [{ name: "Local Stalls", specialty: "Rabri & Malpua", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "1800-103-1060", hospital: "Mathura District Hospital" }
  }
];
