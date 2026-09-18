/**
 * SIKKIM_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources: Sikkim Tourism & Ecclesiastical Affairs Dept
 * Permits: PAP (Protected Area Permit) is MANDATORY for Nathu La, Gurudongmar & North Sikkim.
 * Helpline: 1800-212-9999 / 1800-103-3500
 * ------------------------------------------------------------------
 */

export const SIKKIM_PLACES = [
  // --- EAST SIKKIM (Gangtok & Around) ---
  {
    id: 2301,
    name: "Tsomgo Lake (Changu)",
    slug: "tsomgo-lake",
    state: "Gangtok, Sikkim",
    category: "Nature",
    badge: "Glacial Lake at 12,313 ft",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tsomgo_Lake_Sikkim.jpg/800px-Tsomgo_Lake_Sikkim.jpg",
    description: "A sacred glacial lake that remains frozen during winter. Known for its turquoise water in spring and iconic Yak rides along the banks.",
    coordinates: { lat: 27.3742, lng: 88.7633 },
    essentials: {
      bestTime: "March to May, Oct to Dec",
      weather: "Freezing/Windy",
      timings: "08:00 AM - 03:00 PM",
      entryFee: { YakRide: "₹300-500", Permit: "PAP Mandatory" }
    },
    transport: { nearestAirport: "Pakyong (35 km)", nearestRailway: "NJP (145 km)", busConnectivity: "Reserved/Shared SUV from Gangtok" },
    externalLinks: { officialBooking: "https://sikkimtourism.gov.in/", googleMaps: "https://goo.gl/maps/tsomgo" },
    accessibility: { wheelchairFriendly: false, notes: "Rocky terrain, thin oxygen levels." },
    routePlan: [ { time: "07:30 AM", activity: "Depart Gangtok" }, { time: "10:00 AM", activity: "Yak Ride" } ],
    foodGuide: [ { name: "Lake Stalls", type: "Basic", specialty: "Hot Thukpa & Momos", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "STNM Hospital Gangtok" }
  },
  {
    id: 2302,
    name: "Nathu La Pass",
    slug: "nathu-la-pass",
    state: "Gangtok, Sikkim",
    category: "Heritage",
    badge: "Indo-China Border",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/nathu-la-pass-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742169626076 ",
    description: "Strategic mountain pass on the Old Silk Route at 14,140 ft. Visitors can see the Indo-China border gates and exchange greetings with soldiers.",
    coordinates: { lat: 27.3866, lng: 88.8309 },
    essentials: {
      bestTime: "May to October",
      weather: "Sub-Zero",
      timings: "08:00 AM - 01:30 PM (Closed Mon/Tue)",
      entryFee: { Permit: "₹200 (Indian Citizens Only)" }
    },
    transport: { nearestAirport: "Pakyong (60 km)", busConnectivity: "Only registered tourist SUVs from Gangtok" },
    externalLinks: { officialBooking: "https://sikkimtourism.gov.in/", googleMaps: "https://goo.gl/maps/nathula" },
    accessibility: { wheelchairFriendly: false, notes: "Steep stairs to border gate. Oxygen is low." },
    routePlan: [ { time: "09:30 AM", activity: "Border Gate Visit" }, { time: "11:00 AM", activity: "Baba Mandir Visit" } ],
    foodGuide: [ { name: "Army Canteen", type: "Military", specialty: "Hot Coffee & Maggi", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "STNM Hospital" }
  },
  {
    id: 2303,
    name: "Rumtek Monastery",
    slug: "rumtek-monastery",
    state: "Gangtok, Sikkim",
    category: "Spiritual",
    badge: "Dharma Chakra Centre",
    image: " https://www.karmapa.org/wp-content/uploads/Rumtek_Monastery_-_Inside_Close_View-1400px-cropped.jpg ",
    description: "The largest monastery in Sikkim, a replica of Tsurphu Monastery in Tibet. Houses the famous Golden Stupa and rare Buddhist manuscripts.",
    coordinates: { lat: 27.3069, lng: 88.5574 },
    essentials: {
      bestTime: "All Year",
      weather: "Pleasant",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "₹10" }
    },
    transport: { nearestAirport: "Pakyong (30 km)", busConnectivity: "24 km from Gangtok city center" },
    externalLinks: { officialBooking: "https://sikkimeccl.gov.in/", googleMaps: "https://goo.gl/maps/rumtek" },
    accessibility: { wheelchairFriendly: false, notes: "Steep uphill walk from the entry gate." },
    routePlan: [ { time: "02:00 PM", activity: "Main Prayer Hall" }, { time: "03:30 PM", activity: "Golden Stupa" } ],
    foodGuide: [ { name: "Monastery Cafe", type: "Basic", specialty: "Shaphaley", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "Manipal Referral Hospital" }
  },
  {
    id: 2304,
    name: "MG Marg",
    slug: "mg-marg-gangtok",
    state: "Gangtok, Sikkim",
    category: "Leisure",
    badge: "India's First Litter-Free Zone",
    image: " https://res.cloudinary.com/kmadmin/image/upload/v1618471424/kiomoi/Gangtok_MG_Road%2C_Gangtok_1618471423040.jpg ",
    description: "The bustling central promenade of Gangtok. It is a pedestrian-only zone with a European feel, lined with cafes, pubs, and handicraft shops.",
    coordinates: { lat: 27.3314, lng: 88.6138 },
    essentials: {
      bestTime: "Evenings (All Year)",
      weather: "City/Breezy",
      timings: "08:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Pakyong (27 km)", busConnectivity: "Heart of Gangtok; walkable from main city areas" },
    externalLinks: { officialBooking: "https://sikkimtourism.gov.in/", googleMaps: "https://goo.gl/maps/mgmarg" },
    accessibility: { wheelchairFriendly: true, notes: "Paved, flat, and very accessible." },
    routePlan: [ { time: "05:00 PM", activity: "Heritage Walk & Shopping" }, { time: "07:30 PM", activity: "Dinner" } ],
    foodGuide: [ { name: "Nimtho", type: "Fine Dining", specialty: "Sikkimese Thali", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "STNM Hospital" }
  },

  // --- NORTH SIKKIM (Adventure) ---
  {
    id: 2305,
    name: "Gurudongmar Lake",
    slug: "gurudongmar-lake",
    state: "Lachen, Sikkim",
    category: "Nature",
    badge: "One of Highest Lakes (17,800 ft)",
    image: " https://static2.tripoto.com/media/filter/tst/img/1241614/SpotDocument/1671365569_1671365511991.jpg.webp ",
    description: "A holy high-altitude lake. Legend says Guru Padmasambhava blessed a portion of it to remain unfrozen even in peak winter to provide water to locals.",
    coordinates: { lat: 28.0258, lng: 88.7097 },
    essentials: {
      bestTime: "April to June, Oct to Nov",
      weather: "Extreme Cold",
      timings: "06:00 AM - 10:00 AM",
      entryFee: { Permit: "Mandatory (Apply 1 day prior)" }
    },
    transport: { nearestAirport: "Bagdogra (230 km)", busConnectivity: "Requires 2-day trip; stay at Lachen, drive early morning." },
    externalLinks: { officialBooking: "https://sikkimtourism.gov.in/", googleMaps: "https://goo.gl/maps/gurudongmar" },
    accessibility: { wheelchairFriendly: false, notes: "Extreme altitude; low oxygen. Children/Elderly not advised." },
    routePlan: [ { time: "04:00 AM", activity: "Depart Lachen" }, { time: "08:30 AM", activity: "Lake Visit" } ],
    foodGuide: [ { name: "Lachen Homestays", type: "Home", specialty: "Butter Tea", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "Army Medical Centre (Thangu)" }
  },
  {
    id: 2306,
    name: "Yumthang Valley",
    slug: "yumthang-valley",
    state: "Lachung, Sikkim",
    category: "Nature",
    badge: "Valley of Flowers",
    image: " https://hblimg.mmtcdn.com/content/hubble/img/yumthanvalley/mmt/activities/m_Yumthang%20Valley_Sikkim_1_l_408_640.jpg ",
    description: "A breathtaking valley with over 24 species of rhododendrons. It is also famous for its natural hot springs and proximity to Zero Point.",
    coordinates: { lat: 27.8256, lng: 88.6961 },
    essentials: {
      bestTime: "Late Feb to June (Flower Bloom)",
      weather: "Chilly",
      timings: "06:00 AM - 04:00 PM",
      entryFee: { Permit: "Required (Lachung)", ZeroPoint: "₹3000 (per vehicle extra)" }
    },
    transport: { nearestRailway: "NJP (190 km)", busConnectivity: "Shared Sumos from Lachung (25 km)" },
    externalLinks: { officialBooking: "https://sikkimtourism.gov.in/", googleMaps: "https://goo.gl/maps/yumthang" },
    accessibility: { wheelchairFriendly: false, notes: "Grassy valley floor. Access to hot springs via bridge." },
    routePlan: [ { time: "08:00 AM", activity: "Rhododendron Sanctuary Walk" }, { time: "11:00 AM", activity: "Zero Point" } ],
    foodGuide: [ { name: "Local Huts", type: "Basic", specialty: "Momos & Local Wine", rating: 3.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "Army Medical Unit" }
  },

  // --- WEST SIKKIM (Heritage) ---
  {
    id: 2307,
    name: "Pelling Skywalk & Chenrezig",
    slug: "pelling-skywalk",
    state: "Pelling, Sikkim",
    category: "Heritage",
    badge: "India's First Glass Skywalk",
    image: " https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Chenrezig_alias_Avalokite%C5%9Bvara_statue_at_Sky_Walk_at_Pelling%2C_West_Sikkim_03.jpg/1280px-Chenrezig_alias_Avalokite%C5%9Bvara_statue_at_Sky_Walk_at_Pelling%2C_West_Sikkim_03.jpg ",
    description: "Features a 137 ft statue of Avalokiteshvara. The glass skywalk offers a panoramic view of Mount Kanchenjunga and the surrounding valleys.",
    coordinates: { lat: 27.2942, lng: 88.2237 },
    essentials: {
      bestTime: "October to May",
      weather: "Misty/Cool",
      timings: "08:00 AM - 05:30 PM",
      entryFee: { Entry: "₹50" }
    },
    transport: { nearestAirport: "Pakyong (110 km)", busConnectivity: "Shared/Private Taxis from Siliguri or Gangtok" },
    externalLinks: { officialBooking: "https://sikkimtourism.gov.in/", googleMaps: "https://goo.gl/maps/skywalk" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps and elevators available for skywalk access." },
    routePlan: [ { time: "10:00 AM", activity: "Skywalk Photography" }, { time: "11:30 AM", activity: "Statue Darshan" } ],
    foodGuide: [ { name: "Lotus Bakery", type: "Bakery", specialty: "Apple Pie", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "District Hospital Geyzing" }
  },
  {
    id: 2308,
    name: "Yuksom Heritage Village",
    slug: "yuksom",
    state: "Gyalshing, Sikkim",
    category: "Heritage",
    badge: "First Capital of Sikkim",
    image: " https://stampedmoments.com/wp-content/uploads/2024/06/landscape-yuksom-sikkim.jpg ",
    description: "The historic town where the first Chogyal was crowned in 1642. It is the base for the Kanchenjunga treks and houses the oldest monastery, Dubdi Gompa.",
    coordinates: { lat: 27.3750, lng: 88.2250 },
    essentials: {
      bestTime: "September to April",
      weather: "Pleasant",
      timings: "Daylight Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "NJP (150 km)", busConnectivity: "Buses/Shared taxis from Geyzing and Pelling" },
    externalLinks: { googleMaps: "https://goo.gl/maps/yuksom" },
    accessibility: { wheelchairFriendly: false, notes: "Village roads are hilly and unpaved." },
    routePlan: [ { time: "09:00 AM", activity: "Norbugang Coronation Throne" }, { time: "11:00 AM", activity: "Dubdi Monastery Hike" } ],
    foodGuide: [ { name: "Gupta's Restaurant", type: "Local", specialty: "Noodle Soup", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "PHC Yuksom" }
  },

  // --- SOUTH SIKKIM ---
  {
    id: 2309,
    name: "Buddha Park (Ravangla)",
    slug: "buddha-park-ravangla",
    state: "Ravangla, Sikkim",
    category: "Spiritual",
    badge: "130 ft Buddha Statue",
    image: " https://www.esikkimtourism.in/wp-content/uploads/2018/10/ravangla-bnnnr.jpg ",
    description: "Tathagata Tsal is a beautifully landscaped park featuring a massive copper Buddha statue. The complex includes a museum and gallery on the life of Buddha.",
    coordinates: { lat: 27.3056, lng: 88.3621 },
    essentials: {
      bestTime: "October to April",
      weather: "Chilly",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹50" }
    },
    transport: { nearestAirport: "Pakyong (70 km)", busConnectivity: "Well connected to Namchi and Gangtok" },
    externalLinks: { officialBooking: "https://sikkimtourism.gov.in/", googleMaps: "https://goo.gl/maps/buddhapark" },
    accessibility: { wheelchairFriendly: true, notes: "Battery cars and paved ramps for full access." },
    routePlan: [ { time: "03:00 PM", activity: "Park Walk & Photography" }, { time: "04:30 PM", activity: "Aarti inside the Statue" } ],
    foodGuide: [ { name: "Park Cafeteria", type: "Cafe", specialty: "Organic Tea", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "CHC Ravangla" }
  },
  {
    id: 2310,
    name: "Namchi Char Dham",
    slug: "char-dham-namchi",
    state: "Namchi, Sikkim",
    category: "Spiritual",
    badge: "Siddheshwar Dham",
    image: " https://www.honeymoonbug.com/blog/wp-content/uploads/2023/02/Char-Dham-Sikkim01.jpg ",
    description: "A cultural complex featuring replicas of India's four sacred Dhams and a 108 ft statue of Lord Shiva. Ideal for spiritual seekers.",
    coordinates: { lat: 27.1668, lng: 88.3694 },
    essentials: {
      bestTime: "All Year",
      weather: "Pleasant",
      timings: "08:00 AM - 07:00 PM",
      entryFee: { Entry: "₹50" }
    },
    transport: { nearestAirport: "Pakyong (75 km)", busConnectivity: "Shared Sumos from Gangtok (78 km) or Darjeeling" },
    externalLinks: { googleMaps: "https://goo.gl/maps/chardham" },
    accessibility: { wheelchairFriendly: true, notes: "Wide paved roads and ramps for accessibility." },
    routePlan: [ { time: "10:00 AM", activity: "Temple Tour" }, { time: "12:00 PM", activity: "Samdruptse Hill (Giant Guru Statue)" } ],
    foodGuide: [ { name: "Yatri Niwas", type: "Veg", specialty: "Pure Veg Thali", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "District Hospital Namchi" }
  },

  // --- OFFBEAT & HIDDEN GEMS ---
  {
    id: 2311,
    name: "Zuluk (Silk Route)",
    slug: "zuluk-silk-route",
    state: "Pakyong, Sikkim",
    category: "Adventure",
    badge: "32 Hairpin Bends",
    image: " https://drivetonortheast.com/uploads/tours/gallery/TP-4012-3483/tour-5405-6824.jpg ",
    description: "A remote village on the Silk Route. Known for Thambi Viewpoint which offers the iconic view of the zig-zag roads and sunrise over Kanchenjunga.",
    coordinates: { lat: 27.2519, lng: 88.7847 },
    essentials: {
      bestTime: "April to June (Flowers), Dec-Feb (Snow)",
      weather: "Foggy/Cold",
      timings: "Daylight Hours",
      entryFee: { Permit: "East Sikkim PAP Required" }
    },
    transport: { nearestAirport: "Pakyong (50 km)", busConnectivity: "Private vehicle from Rongli Checkpost" },
    externalLinks: { officialBooking: "https://sikkimtourism.gov.in/", googleMaps: "https://goo.gl/maps/zuluk" },
    accessibility: { wheelchairFriendly: false, notes: "Extremely winding roads. Viewpoints are rough." },
    routePlan: [ { time: "05:00 AM", activity: "Sunrise at Thambi" }, { time: "08:00 AM", activity: "Lungthung & Gnathang Valley" } ],
    foodGuide: [ { name: "Zuluk Homestays", type: "Home", specialty: "Sikkimese Red Rice", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "Military Outpost (Emergency)" }
  },
  {
    id: 2312,
    name: "Dzongu Valley",
    slug: "dzongu-valley",
    state: "Mangan, Sikkim",
    category: "Nature",
    badge: "Reserved Lepcha Territory",
    image: " https://helpthetourists.in/destination/img/north-sikkim/dzongu-valley/dzongu-valley-5.webp",
    description: "A hidden valley in North Sikkim reserved for the Lepcha people. Known for its pristine forests, traditional lifestyle, and hot springs.",
    coordinates: { lat: 27.5333, lng: 88.5000 },
    essentials: {
      bestTime: "October to April",
      weather: "Mild/Rainy",
      timings: "Daylight Hours",
      entryFee: { Permit: "Special PAP Required for Dzongu" }
    },
    transport: { nearestAirport: "Bagdogra (160 km)", busConnectivity: "Sumo from Mangan to Phodong/Dzongu" },
    accessibility: { wheelchairFriendly: false, notes: "Undeveloped area, requires hiking." },
    routePlan: [ { time: "10:00 AM", activity: "Bamboo Bridge Walk" }, { time: "02:00 PM", activity: "Lepcha Cultural Interaction" } ],
    foodGuide: [ { name: "Local Homestays", type: "Traditional", specialty: "Cardamom Tea & Yu (Wine)", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "Mangan Civil Hospital" }
  },
  {
    id: 2313,
    name: "Baba Harbhajan Singh Temple",
    slug: "baba-mandir",
    state: "East Sikkim, Sikkim",
    category: "Heritage",
    badge: "Temple of the Living Hero",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/baba-harbhajan-singh-temple-gangtok-2-attr-hero?qlt=82&ts=1742162884907 ",
    description: "A shrine built by the Indian Army in honor of Sepoy Harbhajan Singh, who is believed to protect the borders after his death.",
    coordinates: { lat: 27.4042, lng: 88.8219 },
    essentials: {
      bestTime: "April to November",
      weather: "Freezing",
      timings: "08:00 AM - 02:00 PM",
      entryFee: { Permit: "Combined with Tsomgo/Nathula" }
    },
    transport: { nearestRailway: "NJP (140 km)", busConnectivity: "54 km from Gangtok city" },
    externalLinks: { googleMaps: "https://goo.gl/maps/babamandir" },
    accessibility: { wheelchairFriendly: true, notes: "The temple grounds are accessible." },
    routePlan: [ { time: "01:00 PM", activity: "Darshan and Bunker Visit" } ],
    foodGuide: [ { name: "Army Canteen", type: "Military", specialty: "Poori Sabzi", rating: 4.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "Army Medical Unit" }
  },
  {
    id: 2314,
    name: "Khecheopalri Lake",
    slug: "khecheopalri-lake",
    state: "Pelling, Sikkim",
    category: "Nature",
    badge: "The Wishing Lake",
    image: " https://gtcholidays.com/wp-content/uploads/2020/03/z-pelling-khecheolpalri.jpg ",
    description: "A sacred lake for Hindus and Buddhists. Legend says birds pluck any leaf that falls on the lake surface to keep it clean.",
    coordinates: { lat: 27.3342, lng: 88.1990 },
    essentials: {
      bestTime: "October to May",
      weather: "Pleasant",
      timings: "08:00 AM - 06:00 PM",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestAirport: "Pakyong (120 km)", busConnectivity: "34 km from Pelling town" },
    externalLinks: { googleMaps: "https://goo.gl/maps/khecheopalri" },
    accessibility: { wheelchairFriendly: true, notes: "Flat wooden walkway to the lake edge." },
    routePlan: [ { time: "11:00 AM", activity: "Prayer & Feeding Fish" } ],
    foodGuide: [ { name: "Lake Stalls", type: "Basic", specialty: "Sel Roti", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "Sadar Hospital Geyzing" }
  },
  {
    id: 2315,
    name: "Temi Tea Garden",
    slug: "temi-tea-garden",
    state: "Namchi, Sikkim",
    category: "Nature",
    badge: "Only Tea Garden of Sikkim",
    image: " https://drivetonortheast.com/uploads/blog/images/blog-4025-6597.jpg ",
    description: "Award-winning organic tea garden spread on a gentle hill slope with spectacular Himalayan views.",
    coordinates: { lat: 27.2345, lng: 88.3982 },
    essentials: {
      bestTime: "Nov to March",
      weather: "Misty/Pleasant",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "NJP (110 km)", busConnectivity: "Taxi from Namchi (18 km)" },
    externalLinks: { googleMaps: "https://goo.gl/maps/temitea" },
    accessibility: { wheelchairFriendly: true, notes: "Paved roads through the garden." },
    routePlan: [ { time: "09:00 AM", activity: "Tea Tasting & Factory Tour" } ],
    foodGuide: [ { name: "Temi Cafe", type: "Resort", specialty: "Organic Black Tea", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "CHC Ravangla" }
  },
  {
    id: 2316,
    name: "Zero Point (Yumesamdong)",
    slug: "zero-point",
    state: "Lachung, Sikkim",
    category: "Adventure",
    badge: "End of the Road",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/02/bb/32/awesome-place.jpg?w=1200&h=-1&s=1 ",
    description: "The last point of civilian road at 15,300 ft before the China border. Offers year-round snow activities.",
    coordinates: { lat: 27.9150, lng: 88.7550 },
    essentials: {
      bestTime: "April to June",
      weather: "Freezing/Snowy",
      timings: "08:00 AM - 12:00 PM",
      entryFee: { Permit: "Required (Lachung)" }
    },
    transport: { busConnectivity: "Private 4x4 SUV from Lachung" },
    externalLinks: { googleMaps: "https://goo.gl/maps/zeropoint" },
    accessibility: { wheelchairFriendly: false, notes: "Rocky and snowy; very high altitude." },
    routePlan: [ { time: "09:00 AM", activity: "Snow Sledding" } ],
    foodGuide: [ { name: "Roadside Stalls", type: "Basic", specialty: "Brandy & Maggi", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "Army Medical Outpost" }
  },
  {
    id: 2317,
    name: "Aritar (Lampokhari Lake)",
    slug: "aritar-lake",
    state: "Pakyong, Sikkim",
    category: "Nature",
    badge: "Oldest Natural Lake",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm6MOrCX03TZ9HxHDVhZUWlyFBjzHf_-qTQ&s ",
    description: "A boot-shaped lake that offers boating and peaceful forest walks. Famous for its boot shape and ancient British-era dak bungalows.",
    coordinates: { lat: 27.1850, lng: 88.6750 },
    essentials: {
      bestTime: "March to June",
      weather: "Pleasant",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹10" }
    },
    transport: { nearestAirport: "Pakyong (45 km)", busConnectivity: "3 hours from Gangtok" },
    externalLinks: { googleMaps: "https://goo.gl/maps/aritar" },
    accessibility: { wheelchairFriendly: true, notes: "Lake promenade is paved." },
    routePlan: [ { time: "10:00 AM", activity: "Paddle Boating" }, { time: "12:00 PM", activity: "British Bungalow Visit" } ],
    foodGuide: [ { name: "Aritar Lodge", type: "Govt", specialty: "Fried Momos", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "CHC Rongli" }
  },
  {
    id: 2318,
    name: "Singhik Viewpoint",
    slug: "singhik-viewpoint",
    state: "Mangan, Sikkim",
    category: "Nature",
    badge: "Best Kanchenjunga View",
    image: " https://northbengaltourism.com/images/offbeat/singhik_1.webp ",
    description: "Located near Mangan, it offers the closest view of Mount Kanchenjunga and Mount Siniolchu from a motorable road.",
    coordinates: { lat: 27.5167, lng: 88.5167 },
    essentials: {
      bestTime: "Oct to Dec (Clear Skies)",
      weather: "Misty",
      timings: "Sunrise is best",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "NJP (165 km)", busConnectivity: "Stopover on the way to Lachen/Lachung" },
    externalLinks: { googleMaps: "https://goo.gl/maps/singhik" },
    accessibility: { wheelchairFriendly: true, notes: "Viewable from the roadside park." },
    routePlan: [ { time: "05:30 AM", activity: "Sunrise Photography" } ],
    foodGuide: [ { name: "Singhik Retreat", type: "Basic", specialty: "Tea & Snacks", rating: 3.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "District Hospital Mangan" }
  },
  {
    id: 2319,
    name: "Rabdentse Ruins",
    slug: "rabdentse-ruins",
    state: "Pelling, Sikkim",
    category: "Heritage",
    badge: "Ancient Palace Ruins",
    image: " https://www.esikkimtourism.in/wp-content/uploads/2019/03/rabdentse-ruinnss-bnnr.jpg ",
    description: "Ruins of the second capital of Sikkim Kingdom. The walk through the forest trail and the mountain views from the palace top are stunning.",
    coordinates: { lat: 27.2910, lng: 88.2380 },
    essentials: {
      bestTime: "Oct to May",
      weather: "Pleasant",
      timings: "08:30 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Pakyong (110 km)", busConnectivity: "2 km walk from Pelling town" },
    externalLinks: { googleMaps: "https://goo.gl/maps/rabdentse" },
    accessibility: { wheelchairFriendly: false, notes: "Requires a 15-min walk on forest dirt trails." },
    routePlan: [ { time: "03:00 PM", activity: "History Walk" }, { time: "05:00 PM", activity: "Sunset view from Ruins" } ],
    foodGuide: [ { name: "Pelling Bazaar", type: "City", specialty: "Local Noodles", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "District Hospital Geyzing" }
  },
  {
    id: 2320,
    name: "Hanuman Tok",
    slug: "hanuman-tok-gangtok",
    state: "Gangtok, Sikkim",
    category: "Spiritual",
    badge: "Wish Fulfilling Temple",
    image: " https://5.imimg.com/data5/CV/SU/GLADMIN-11675314/hanuman-tok-tour-service.png s",
    description: "A peaceful temple complex located at 7,200 ft. Maintained by the Indian Army, it offers one of the best 360-degree views of Gangtok city and Mt. Kanchenjunga.",
    coordinates: { lat: 27.3500, lng: 88.6300 },
    essentials: {
      bestTime: "Morning (Sunrise)",
      weather: "Windy/Cool",
      timings: "06:00 AM - 07:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Pakyong (35 km)", busConnectivity: "Taxi from Gangtok (11 km)" },
    externalLinks: { googleMaps: "https://goo.gl/maps/hanumantok" },
    accessibility: { wheelchairFriendly: false, notes: "Requires walking uphill and some steps." },
    routePlan: [ { time: "06:30 AM", activity: "Darshan & City View" } ],
    foodGuide: [ { name: "Temple Canteen", type: "Military", specialty: "Hot Tea", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-212-9999", nearestHospital: "STNM Hospital" }
  }
];
