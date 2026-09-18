/**
 * TELANGANA_PLACES DATASET (Extended 20+ Places)
 * ------------------------------------------------------------------
 * Sources: Telangana Tourism (TSTDC), ASI, Official 2026 Pricing
 * Coverage: Heritage, Nature, Spiritual, and Leisure
 * ------------------------------------------------------------------
 */

export const TELANGANA_PLACES = [
  // --- HERITAGE & ICONS ---
  {
    id: 2501,
    name: "Charminar",
    slug: "charminar-hyderabad",
    cityState: "Hyderabad, Telangana",
    category: "Heritage",
    badge: "Global Icon of Hyderabad",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/charminar-hyderabad-1-attr-hero?qlt=82&ts=1742179190787 ",
    description: "Built in 1591, this Indo-Islamic masterpiece features four grand arches and minarets, serving as the heartbeat of the old city.",
    coordinates: { lat: 17.3616, lng: 78.4747 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm/City",
      timings: "09:00 AM - 05:30 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: {
      nearestAirport: "RGIA (20 km)",
      nearestRailway: "Nampally (4 km)",
      busConnectivity: "High (TSRTC Charminar Stand)"
    },
    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/charminar"
    },
    accessibility: { wheelchairFriendly: false, notes: "Spiral stairs are very narrow." },
    routePlan: [
      { time: "09:00 AM", activity: "Climb Charminar" },
      { time: "10:30 AM", activity: "Mecca Masjid Visit" }
    ],
    foodGuide: [
      { name: "Nimrah Cafe", specialty: "Irani Chai & Osmania Biscuit", rating: 4.8 }
    ],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Osmania General" }
  },
  {
    id: 2502,
    name: "Golconda Fort",
    slug: "golconda-fort-hyderabad",
    cityState: "Hyderabad, Telangana",
    category: "Heritage",
    badge: "Acoustic Wonder",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a3/62/98/golkonda-fort.jpg?w=900&h=500&s=1 ",
    description: "A medieval diamond hub and citadel known for its strategic acoustics and the world-famous Koh-i-Noor history.",
    coordinates: { lat: 17.3833, lng: 78.4011 },
    essentials: {
      bestTime: "Winter Evenings",
      weather: "Rocky/Hot",
      timings: "09:00 AM - 05:30 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300", LightShow: "₹140" }
    },
    transport: { nearestAirport: "RGIA (25 km)", nearestRailway: "Nampally (11 km)", busConnectivity: "Direct from Mehdipatnam" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/golconda" },
    accessibility: { wheelchairFriendly: false, notes: "Steep climb of 360+ steps." },
    routePlan: [
      { time: "03:00 PM", activity: "Fort Exploration" },
      { time: "07:00 PM", activity: "Sound & Light Show" }
    ],
    foodGuide: [{ name: "Pista House", specialty: "Haleem", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Olive Hospital" }
  },
  {
    id: 2503,
    name: "Ramappa Temple",
    slug: "ramappa-temple-warangal",
    cityState: "Mulugu, Telangana",
    category: "Heritage",
    badge: "UNESCO World Heritage Site",
    image: " https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/09/ramappa-temple-warangal.webp?fit=1000%2C600&ssl=1 ",
    description: "The only temple in India named after its architect. Famous for its 'floating bricks' and 13th-century Kakatiya craftsmanship.",
    coordinates: { lat: 18.2606, lng: 79.9427 },
    essentials: {
      bestTime: "September to March",
      weather: "Pleasant",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestAirport: "Hyderabad (210 km)", nearestRailway: "Warangal (70 km)", busConnectivity: "Buses to Mulugu" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/ramappa" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available at entrance." },
    routePlan: [
      { time: "10:00 AM", activity: "Sculpture Tour" },
      { time: "01:00 PM", activity: "Ramappa Lake Boating" }
    ],
    foodGuide: [{ name: "Haritha Hotel", specialty: "Telangana Thali", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Area Hospital Mulugu" }
  },
  {
    id: 2504,
    name: "Ramoji Film City",
    slug: "ramoji-film-city-hyderabad",
    cityState: "Hyderabad, Telangana",
    category: "Leisure",
    badge: "World's Largest Film Studio",
    image: " https://media.easemytrip.com/media/Deal/DL638381729889105615/SightSeeing/SightSeeing4ucRKL.jpg ",
    description: "Spread over 1666 acres, this studio complex houses Bahubali sets, theme parks, and movie-magic attractions.",
    coordinates: { lat: 17.2543, lng: 78.6808 },
    essentials: {
      bestTime: "All Year",
      weather: "Sunny",
      timings: "09:00 AM - 05:30 PM",
      entryFee: { Adult: "₹1350", Child: "₹1150" }
    },
    transport: { nearestAirport: "RGIA (40 km)", nearestRailway: "Secunderabad (35 km)", busConnectivity: "RFC Tourist Buses" },
    externalLinks: { officialBooking: "https://www.ramojifilmcity.com/", googleMaps: "https://goo.gl/maps/ramoji" },
    accessibility: { wheelchairFriendly: true, notes: "Wheelchairs available for rent." },
    routePlan: [
      { time: "09:30 AM", activity: "Studio Tour Bus" },
      { time: "01:00 PM", activity: "Bahubali Set Visit" }
    ],
    foodGuide: [{ name: "Super Star Restaurant", specialty: "Buffet", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Kamineni Hospital" }
  },
  {
    id: 2505,
    name: "Yadadri Temple",
    slug: "yadadri-temple-nalgonda",
    cityState: "Yadagirigutta, Telangana",
    category: "Spiritual",
    badge: "Telangana's Tirupati",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/sri-lakshmi-narasimha-swamy-temple-or-yadadri-temple-or-yadagirigutta-temple-bhongir-telangana-2-attr-hero?qlt=82&ts=1751458839353 ",
    description: "A newly renovated architectural marvel of Lord Narasimha Swamy, carved entirely from black granite.",
    coordinates: { lat: 17.5879, lng: 78.9392 },
    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "04:00 AM - 09:30 PM",
      entryFee: { General: "Free", VIP: "₹150" }
    },
    transport: { nearestAirport: "RGIA (90 km)", nearestRailway: "Raigir (5 km)", busConnectivity: "Direct buses from JBS/MGBS" },
    externalLinks: { officialBooking: "https://yadadritemple.telangana.gov.in/", googleMaps: "https://goo.gl/maps/yadadri" },
    accessibility: { wheelchairFriendly: true, notes: "Battery cars available for uphill." },
    routePlan: [
      { time: "07:00 AM", activity: "Morning Darshan" },
      { time: "09:00 AM", activity: "Temple Architecture Tour" }
    ],
    foodGuide: [{ name: "Haritha Hotel", specialty: "Veg Meals", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Area Hospital Bhongir" }
  },
  {
    id: 2506,
    name: "Bogatha Waterfalls",
    slug: "bogatha-waterfalls-khammam",
    cityState: "Mulugu, Telangana",
    category: "Nature",
    badge: "Niagara of Telangana",
    image: " https://bogatha.feriadoresorts.com/wp-content/uploads/2022/04/Bogatha_banner1.jpg ",
    description: "A stunning seasonal waterfall on the Chikupupally stream, surrounded by dense forests. Best visited post-monsoon.",
    coordinates: { lat: 18.2866, lng: 80.4072 },
    essentials: {
      bestTime: "July to November",
      weather: "Humid/Lush",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Adult: "₹50", Parking: "₹20" }
    },
    transport: { nearestAirport: "Hyderabad (330 km)", nearestRailway: "Bhadrachalam Road (120 km)", busConnectivity: "Limited" },
    externalLinks: { officialBooking: "https://tourism.telangana.gov.in/", googleMaps: "https://goo.gl/maps/bogatha" },
    accessibility: { wheelchairFriendly: false, notes: "Short trek required to reach the base." },
    routePlan: [
      { time: "10:00 AM", activity: "Waterfall Sightseeing" },
      { time: "02:00 PM", activity: "Nature Walk" }
    ],
    foodGuide: [{ name: "Local Stalls", specialty: "Bamboo Chicken", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "ETURNAGARAM CHC" }
  },
  {
    id: 2507,
    name: "Warangal Fort",
    slug: "warangal-fort-telangana",
    cityState: "Warangal, Telangana",
    category: "Heritage",
    badge: "Capital of Kakatiyas",
    image: " https://i0.wp.com/weekendyaari.in/wp-content/uploads/2025/09/Warangal-Fort-scaled.webp?fit=2560%2C1705&ssl=1 ",
    description: "Known for its iconic stone gateways (Kala Thoranam) and 13th-century ruins that symbolize Telugu pride.",
    coordinates: { lat: 17.9546, lng: 79.6015 },
    essentials: {
      bestTime: "October to March",
      weather: "Moderate",
      timings: "09:00 AM - 05:30 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestAirport: "Hyderabad (140 km)", nearestRailway: "Warangal (5 km)", busConnectivity: "Autos available easily" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/warangalfort" },
    accessibility: { wheelchairFriendly: true, notes: "Flat park area." },
    routePlan: [
      { time: "09:00 AM", activity: "Kala Thoranam Photography" },
      { time: "11:00 AM", activity: "Ruins Exploration" }
    ],
    foodGuide: [{ name: "City Grand", specialty: "Warangal Biryani", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "MGM Hospital" }
  },
  {
    id: 2508,
    name: "Bhadrachalam Temple",
    slug: "bhadrachalam-temple-khammam",
    cityState: "Bhadrachalam, Telangana",
    category: "Spiritual",
    badge: "Lord Rama's Abode",
    image: " https://temple.yatradham.org/public/Product/temple/temple_0ciG4xn9_202402271449110.jpg ",
    description: "Located on the banks of Godavari, this 17th-century temple is a major pilgrimage site dedicated to Lord Rama.",
    coordinates: { lat: 17.6698, lng: 80.8906 },
    essentials: {
      bestTime: "September to April",
      weather: "Humid",
      timings: "04:30 AM - 09:00 PM",
      entryFee: { General: "Free", Special: "₹100" }
    },
    transport: { nearestAirport: "Rajahmundry (190 km)", nearestRailway: "Bhadrachalam Road (40 km)", busConnectivity: "Good" },
    externalLinks: { officialBooking: "https://bhadrachalamtemple.telangana.gov.in/", googleMaps: "https://goo.gl/maps/bhadra" },
    accessibility: { wheelchairFriendly: true, notes: "Steps at entrance, but ramps exist." },
    routePlan: [
      { time: "06:00 AM", activity: "Godavari River Dip" },
      { time: "07:30 AM", activity: "Temple Darshan" }
    ],
    foodGuide: [{ name: "Sri Sudharsana", specialty: "South Indian Meals", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Area Hospital Bhadrachalam" }
  },
  {
    id: 2509,
    name: "Kuntala Waterfalls",
    slug: "kuntala-falls-adilabad",
    cityState: "Adilabad, Telangana",
    category: "Nature",
    badge: "Highest Waterfall in Telangana",
    image: " https://www.indiatourismguide.in/wp-content/uploads/2021/10/Kuntala-Waterfalls.jpg ",
    description: "Falling from a height of 150 feet, Kuntala is a hidden gem in the Sahyadri mountain range of Adilabad.",
    coordinates: { lat: 19.3306, lng: 78.4338 },
    essentials: {
      bestTime: "September to December",
      weather: "Cold/Forest",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "₹20", Parking: "₹50" }
    },
    transport: { nearestAirport: "Hyderabad (280 km)", nearestRailway: "Adilabad (45 km)", busConnectivity: "Private transport recommended" },
    externalLinks: { officialBooking: "https://tourism.telangana.gov.in/", googleMaps: "https://goo.gl/maps/kuntala" },
    accessibility: { wheelchairFriendly: false, notes: "Requires descending 400+ steps." },
    routePlan: [
      { time: "09:00 AM", activity: "Trek to Falls" },
      { time: "11:00 AM", activity: "Photography at Base" }
    ],
    foodGuide: [{ name: "Local Dhabas", specialty: "Forest Honey & Snacks", rating: 3.5 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "RIMS Adilabad" }
  },
  {
    id: 2510,
    name: "Bhongir Fort",
    slug: "bhongir-fort-yadadri",
    cityState: "Bhuvanagiri, Telangana",
    category: "Heritage",
    badge: "Monolithic Rock Fort",
    image: " https://lovelifeandbeyond.in/wp-content/uploads/2021/09/climbing-up-bhongir-fort.jpeg",
    description: "A unique egg-shaped fort built on a single massive rock that stands 500 feet high, built by the Chalukyas.",
    coordinates: { lat: 17.5111, lng: 78.8872 },
    essentials: {
      bestTime: "Winter Mornings",
      weather: "Dry/Hot",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Indian: "₹10", Foreigner: "₹100" }
    },
    transport: { nearestAirport: "RGIA (65 km)", nearestRailway: "Bhongir (1 km)", busConnectivity: "Direct from Hyderabad" },
    externalLinks: { officialBooking: "https://tourism.telangana.gov.in/", googleMaps: "https://goo.gl/maps/bhongir" },
    accessibility: { wheelchairFriendly: false, notes: "Tough rock climb." },
    routePlan: [
      { time: "07:00 AM", activity: "Fort Trekking" },
      { time: "10:00 AM", activity: "Visit Hilltop Structure" }
    ],
    foodGuide: [{ name: "Vivera Hotel", specialty: "South Indian Tiffins", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Area Hospital Bhongir" }
  },
  {
    id: 2511,
    name: "Hussain Sagar & Buddha Monolith",
    slug: "hussain-sagar-hyderabad",
    cityState: "Hyderabad, Telangana",
    category: "Nature",
    badge: "World's Largest Monolith Buddha",
    image: " https://www.emperortraveline.com/wp-content/uploads/2018/03/BUDDHA-STATUE-AT-HUSSAIN-SAGAR.jpg ",
    description: "A heart-shaped lake connecting twin cities, featuring a massive 18m Buddha statue on Gibraltar Rock.",
    coordinates: { lat: 17.4239, lng: 78.4738 },
    essentials: {
      bestTime: "Evening",
      weather: "Breezy",
      timings: "08:00 AM - 10:00 PM",
      entryFee: { Boat: "₹55", SpeedBoat: "₹400" }
    },
    transport: { nearestAirport: "RGIA (30 km)", nearestRailway: "Secunderabad (5 km)", busConnectivity: "Metro (Khairatabad)" },
    externalLinks: { officialBooking: "https://tourism.telangana.gov.in/", googleMaps: "https://goo.gl/maps/hussain" },
    accessibility: { wheelchairFriendly: true, notes: "Boats are wheelchair accessible." },
    routePlan: [
      { time: "05:30 PM", activity: "Boat to Buddha Statue" },
      { time: "07:00 PM", activity: "Lumbini Park Laser Show" }
    ],
    foodGuide: [{ name: "Eat Street", specialty: "Chaat & Biryani", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Yashoda Hospital" }
  },
  {
    id: 2512,
    name: "Medak Cathedral",
    slug: "medak-cathedral-telangana",
    cityState: "Medak, Telangana",
    category: "Spiritual",
    badge: "Largest Church in Asia",
    image: " https://th-i.thgim.com/public/incoming/xkd1j4/article67673610.ece/alternates/LANDSCAPE_1200/Image.jpeg ",
    description: "A stunning Gothic Revival church known for its massive stained glass windows depicting biblical scenes.",
    coordinates: { lat: 18.0436, lng: 78.2614 },
    essentials: {
      bestTime: "Winter / Christmas",
      weather: "Pleasant",
      timings: "07:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Hyderabad (100 km)", nearestRailway: "Kamareddy (60 km)", busConnectivity: "Direct from Hyderabad MGBS" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/medak" },
    accessibility: { wheelchairFriendly: true, notes: "Flat surface for main hall." },
    routePlan: [
      { time: "10:00 AM", activity: "Cathedral Tour" },
      { time: "01:00 PM", activity: "Medak Fort Visit (Nearby)" }
    ],
    foodGuide: [{ name: "Haritha Medak", specialty: "Thali", rating: 3.9 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Government Hospital Medak" }
  },
  {
    id: 2513,
    name: "Alampur Jogulamba Temple",
    slug: "alampur-jogulamba-gadwal",
    cityState: "Alampur, Telangana",
    category: "Spiritual",
    badge: "Shakti Peetham",
    image: " https://temple.yatradham.org/public/Product/temple/temple_6WKhEIf4_202402271414200.jpg ",
    description: "Known as the Western Gateway of Srisailam, this 7th-century temple is one of the 18 Maha Shakti Peethams.",
    coordinates: { lat: 15.8828, lng: 78.1278 },
    essentials: {
      bestTime: "Winter",
      weather: "Warm",
      timings: "07:00 AM - 08:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "RGIA (200 km)", nearestRailway: "Kurnool City (10 km)", busConnectivity: "Buses from Kurnool" },
    externalLinks: { officialBooking: "https://alampurjogulamba.telangana.gov.in/", googleMaps: "https://goo.gl/maps/alampur" },
    accessibility: { wheelchairFriendly: true, notes: "Temple complex is mostly flat." },
    routePlan: [
      { time: "08:00 AM", activity: "Jogulamba Darshan" },
      { time: "10:00 AM", activity: "Navabrahma Temples Tour" }
    ],
    foodGuide: [{ name: "Local Brahmin Mess", specialty: "Authentic Meals", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Kurnool Govt Hospital" }
  },
  {
    id: 2514,
    name: "Ananthagiri Hills",
    slug: "ananthagiri-hills-vikarabad",
    cityState: "Vikarabad, Telangana",
    category: "Nature",
    badge: "Birthplace of Musi River",
    image: " https://d1zvcmhypeawxj.cloudfront.net/blogs/cover_web/ananthagiri-hills--1--webp-d1f46b7d1f-1764230104714.webp ",
    description: "The primary forest area of Telangana, ideal for trekking, camping, and visiting the ancient Padmanabha Swamy Temple.",
    coordinates: { lat: 17.3089, lng: 77.8578 },
    essentials: {
      bestTime: "Monsoon / Winter",
      weather: "Cool/Green",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "RGIA (80 km)", nearestRailway: "Vikarabad (6 km)", busConnectivity: "Good from Hyderabad" },
    externalLinks: { officialBooking: "https://tourism.telangana.gov.in/", googleMaps: "https://goo.gl/maps/ananthagiri" },
    accessibility: { wheelchairFriendly: false, notes: "Temple area is accessible, forest paths are not." },
    routePlan: [
      { time: "06:00 AM", activity: "Trekking/Sunrise View" },
      { time: "09:00 AM", activity: "Temple Darshan" }
    ],
    foodGuide: [{ name: "Haritha Resort", specialty: "Buffet", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Vikarabad Govt Hospital" }
  },
  {
    id: 2515,
    name: "Chowmahalla Palace",
    slug: "chowmahalla-palace-hyderabad",
    cityState: "Hyderabad, Telangana",
    category: "Heritage",
    badge: "Seat of the Nizams",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/chowmahalla-palace-hyderabad-telangana-tri-hero?qlt=82&ts=1727166816694 ",
    description: "Once the official residence of the Nizams, this palace is known for its opulent Durbar Hall and vintage car collection.",
    coordinates: { lat: 17.3578, lng: 78.4717 },
    essentials: {
      bestTime: "All Year",
      timings: "10:00 AM - 05:00 PM (Closed Friday)",
      entryFee: { Indian: "₹100", Foreigner: "₹400" }
    },
    transport: { nearestAirport: "RGIA (20 km)", nearestRailway: "Nampally (5 km)", busConnectivity: "Near Charminar" },
    externalLinks: { officialBooking: "http://chowmahalla.co.in/", googleMaps: "https://goo.gl/maps/chowmahalla" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps and elevators available." },
    routePlan: [
      { time: "02:00 PM", activity: "Grand Hall Visit" },
      { time: "04:00 PM", activity: "Vintage Car Museum" }
    ],
    foodGuide: [{ name: "Pista House Charminar", specialty: "Biryani", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Princess Esra Hospital" }
  },
  {
    id: 2516,
    name: "Nagarjuna Sagar Dam",
    slug: "nagarjuna-sagar-dam",
    cityState: "Nalgonda, Telangana",
    category: "Nature",
    badge: "World's Largest Masonry Dam",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/nagarjuna-sagar-dam-hyderabad-telangana-3-musthead-hero?qlt=82&ts=1742173736647 ",
    description: "A massive dam on Krishna River. Take a boat to Nagarjunakonda island to see ancient Buddhist artifacts.",
    coordinates: { lat: 16.5776, lng: 79.3130 },
    essentials: {
      bestTime: "Monsoon (Gates opening)",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Boat: "₹150" }
    },
    transport: { nearestAirport: "RGIA (150 km)", nearestRailway: "Nadikudi (30 km)", busConnectivity: "Direct from Hyderabad" },
    externalLinks: { officialBooking: "https://tourism.telangana.gov.in/", googleMaps: "https://goo.gl/maps/nagarjuna" },
    accessibility: { wheelchairFriendly: false, notes: "Boat boarding is difficult for wheelchairs." },
    routePlan: [
      { time: "09:30 AM", activity: "Island Boat Ride" },
      { time: "11:00 AM", activity: "Buddhist Museum" }
    ],
    foodGuide: [{ name: "Haritha Vijay Vihar", specialty: "Fish Curry", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Area Hospital Vijayapuri" }
  },
  {
    id: 2517,
    name: "Kolanupaka Jain Temple",
    slug: "kolanupaka-jain-temple-nalgonda",
    cityState: "Aler, Telangana",
    category: "Spiritual",
    badge: "2000-Year-Old Heritage",
    image: " https://explorejainism.com/wp-content/uploads/2024/11/1-kolanupaka-shwetambar-jain-temple-bhongir-telangana-tri-iter-day1-1.jpg ",
    description: "An ancient Jain pilgrimage site featuring the massive 5-foot jade statue of Lord Mahavira.",
    coordinates: { lat: 17.7089, lng: 79.0747 },
    essentials: {
      bestTime: "Winter",
      timings: "05:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "RGIA (100 km)", nearestRailway: "Aler (6 km)", busConnectivity: "Direct from Hyderabad" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/kolanupaka" },
    accessibility: { wheelchairFriendly: true, notes: "Temple courtyard is accessible." },
    routePlan: [
      { time: "09:00 AM", activity: "Darshan" },
      { time: "10:30 AM", activity: "Ancient Inscriptions Study" }
    ],
    foodGuide: [{ name: "Temple Canteen", specialty: "Jain Food", rating: 4.4 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Aler Govt Hospital" }
  },
  {
    id: 2518,
    name: "Basara Saraswathi Temple",
    slug: "basara-temple-nizamabad",
    cityState: "Basara, Telangana",
    category: "Spiritual",
    badge: "Goddess of Knowledge",
    image: " https://temple.yatradham.org/public/Product/temple/temple_SnvlnB2e_202506050924080.jpg ",
    description: "One of the two famous Saraswati temples in India, where pilgrims perform Akshara Abhyasam (alphabet initiation).",
    coordinates: { lat: 18.8878, lng: 77.9547 },
    essentials: {
      bestTime: "Vasantha Panchami",
      timings: "04:00 AM - 08:30 PM",
      entryFee: { Ritual: "₹100+" }
    },
    transport: { nearestAirport: "Hyderabad (210 km)", nearestRailway: "Basar (2 km)", busConnectivity: "Direct from Nizamabad" },
    externalLinks: { officialBooking: "https://basaratemple.telangana.gov.in/", googleMaps: "https://goo.gl/maps/basara" },
    accessibility: { wheelchairFriendly: true, notes: "Temple floor is tiled and flat." },
    routePlan: [
      { time: "05:00 AM", activity: "Abhishekam" },
      { time: "08:00 AM", activity: "Akshara Abhyasam" }
    ],
    foodGuide: [{ name: "Haritha Basara", specialty: "South Indian", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Nizamabad Govt Hospital" }
  },
  {
    id: 2519,
    name: "Kawal Wildlife Sanctuary",
    slug: "kawal-wildlife-sanctuary-mancherial",
    cityState: "Jannaram, Telangana",
    category: "Nature",
    badge: "Tiger Reserve",
    image: " https://static2.tripoto.com/media/filter/tst/img/17778/TripDocument/10633270_990096701017325_2011680199461935766_o.jpg ",
    description: "A major wildlife hub in northern Telangana, home to tigers, leopards, and diverse flora/fauna.",
    coordinates: { lat: 19.2000, lng: 78.8833 },
    essentials: {
      bestTime: "November to May",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Safari: "₹500+" }
    },
    transport: { nearestAirport: "Hyderabad (270 km)", nearestRailway: "Mancherial (50 km)", busConnectivity: "Private vehicles best" },
    externalLinks: { officialBooking: "https://tourism.telangana.gov.in/", googleMaps: "https://goo.gl/maps/kawal" },
    accessibility: { wheelchairFriendly: false, notes: "Rugged terrain." },
    routePlan: [
      { time: "06:30 AM", activity: "Morning Safari" },
      { time: "04:00 PM", activity: "Bird Watching" }
    ],
    foodGuide: [{ name: "Jannaram Guesthouse", specialty: "Forest Style Meals", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Mancherial District Hospital" }
  },
  {
    id: 2520,
    name: "Qutb Shahi Tombs",
    slug: "qutb-shahi-tombs-hyderabad",
    cityState: "Hyderabad, Telangana",
    category: "Heritage",
    badge: "Royal Necropolis",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/04/06/05/qutab-shahi-tombs.jpg?w=900&h=500&s=1 ",
    description: "Located near Golconda, these tombs represent the architectural brilliance of the Qutb Shahi dynasty with Persian and Hindu influences.",
    coordinates: { lat: 17.3944, lng: 78.3972 },
    essentials: {
      bestTime: "October to March",
      timings: "09:30 AM - 04:30 PM",
      entryFee: { Indian: "₹10", Foreigner: "₹100" }
    },
    transport: { nearestAirport: "RGIA (25 km)", nearestRailway: "Nampally (10 km)", busConnectivity: "Well connected by Auto/Bus" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/qutb" },
    accessibility: { wheelchairFriendly: true, notes: "Gardens are paved and accessible." },
    routePlan: [
      { time: "09:30 AM", activity: "Tombs Photography" },
      { time: "11:30 AM", activity: "Visit Seven Tombs Garden" }
    ],
    foodGuide: [{ name: "Tolichowki Food Court", specialty: "Paya & Roti", rating: 4.6 }],
    emergency: { police: "100", touristHelpline: "1800-425-4646", hospital: "Olive Hospital" }
  }
];
