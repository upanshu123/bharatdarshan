/**
 * HIMACHAL_PRADESH_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: HPTDC & Dept of Tourism & Civil Aviation
 * - Permits: Rohtang Pass Permit (NGT) & Inner Line Permits (Spiti/Kinnaur)
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const HIMACHAL_PRADESH_PLACES = [
  // --- HILL STATIONS & HERITAGE ---
  {
    id: 1001,
    name: "The Ridge & Mall Road, Shimla",
    slug: "shimla-ridge-mall-road",
    state: "Shimla, Himachal Pradesh",
    category: "Heritage",
    badge: "Queen of Hills",
    image: " https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5mZpIJ4eaItGknxq0wbs_YGQpU55sU7YnaxEIvI7-LozaGfKrN6tmvjXzMBYRKshHm3e3xCNAUTzCJgJWRk5-HqhsSh_DpR8MlqbAW9EcrL89hTruM4wLNknTDKL-j3s46JifPWLVRU7g/w1200-h630-p-k-no-nu/Shimla+Mall+road-01.jpg",
    description: "The heart of Shimla, featuring the neo-Gothic Christ Church and the Tudor-library style architecture. It is a pedestrian-only zone offering panoramic views of the Himalayas.",
    coordinates: { lat: 31.1048, lng: 77.1734 },
    essentials: {
      bestTime: "March to June, Dec-Jan (Snow)",
      weather: "Cool/Cold",
      timings: "24 Hours (Shops close by 9 PM)",
      entryFee: {
        Entry: "Free",
        Lift: "₹20 (Connects Cart Rd to Mall)",
        Church: "Free"
      }
    },
    transport: {
      nearestAirport: "Jubbarhatti (22 km)",
      nearestRailway: "Shimla Station (Toy Train - UNESCO Site)",
      busConnectivity: "ISBT Shimla to Lift (local bus/taxi)"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/shimla"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "The Ridge and Mall Road are flat and paved. The Tourism Lift makes the ascent from the main road accessible."
    },
    routePlan: [
      { time: "04:00 PM", activity: "Heritage Walk (Gaiety Theatre)" },
      { time: "05:30 PM", activity: "Sunset at The Ridge" },
      { time: "07:00 PM", activity: "Dinner at a Heritage Cafe" }
    ],
    foodGuide: [
      { name: "Wake & Bake", type: "Cafe", specialty: "Waffles & Coffee", rating: 4.5 },
      { name: "Sitaram & Sons", type: "Street", specialty: "Luchipuri (Since 1948)", rating: 4.6 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "IGMC Shimla"
    }
  },
  {
    id: 1002,
    name: "Manali (Hadimba Temple & Solang)",
    slug: "manali-hadimba-solang",
    state: "Manali, Himachal Pradesh",
    category: "Hill Stations",
    badge: "Valley of Gods",
    image: " https://www.indiatourismpackage.com/assets/images/temples/hadimba-temple-4.webp",
    description: "A high-altitude resort town famous for the 16th-century wooden Hadimba Devi Temple nestled in a cedar forest, and the adventure hub of Solang Valley.",
    coordinates: { lat: 32.2483, lng: 77.1806 },
    essentials: {
      bestTime: "October to June",
      weather: "Cold/Alpine",
      timings: "08:00 AM - 06:00 PM (Temple)",
      entryFee: {
        Temple: "Free",
        SolangActivities: "₹500-3000 (Paragliding/ATV)"
      }
    },
    transport: {
      nearestAirport: "Bhuntar (50 km)",
      nearestRailway: "Joginder Nagar (160 km)",
      busConnectivity: "Overnight Volvo buses from Delhi/Chandigarh"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/manali"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Hadimba temple has steps and uneven forest ground. Solang Valley is rocky."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Hadimba Temple Visit" },
      { time: "11:00 AM", activity: "Drive to Solang Valley" },
      { time: "01:00 PM", activity: "Adventure Sports (Paragliding)" }
    ],
    foodGuide: [
      { name: "Johnson's Cafe", type: "Fine Dining", specialty: "Trout Fish", rating: 4.4 },
      { name: "Café 1947", type: "Riverside", specialty: "Italian", rating: 4.3 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Civil Hospital Manali"
    }
  },
  {
    id: 1003,
    name: "Rohtang Pass",
    slug: "rohtang-pass",
    state: "Manali, Himachal Pradesh",
    category: "Nature",
    badge: "Snow Point (13,050 ft)",
    image: " https://blogs.tripzygo.in/wp-content/uploads/2025/07/rohtang-la-pass.jpg ",
    description: "A high mountain pass connecting Kullu Valley with Lahaul and Spiti. Famous for year-round snow availability and breathtaking panoramic views.",
    coordinates: { lat: 32.3716, lng: 77.2466 },
    essentials: {
      bestTime: "June to October (Closed in Winter)",
      weather: "Freezing",
      timings: "06:00 AM - 04:00 PM (Entry Restricted)",
      entryFee: {
        Permit: "₹550 (Mandatory NGT Permit)",
        CongestionCharge: "₹50"
      }
    },
    transport: {
      nearestAirport: "Bhuntar (100 km)",
      nearestRailway: "Joginder Nagar (200 km)",
      busConnectivity: "Electric Buses by HPTDC or Private Taxis from Manali"
    },
    externalLinks: {
      officialBooking: "https://rohtangpermits.nic.in/",
      googleMaps: "https://goo.gl/maps/rohtang"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "High altitude, snowy, and slippery terrain. Not accessible."
    },
    routePlan: [
      { time: "06:00 AM", activity: "Start from Manali (Early to beat traffic)" },
      { time: "09:00 AM", activity: "Snow Activities at Pass" }
    ],
    foodGuide: [
      { name: "Roadside Maggi Points", type: "Stall", specialty: "Maggi & Chai", rating: 4.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Civil Hospital Manali"
    }
  },
  {
    id: 1004,
    name: "Bir Billing",
    slug: "bir-billing",
    state: "Bir, Himachal Pradesh",
    category: "Adventure",
    badge: "World's 2nd Highest Paragliding Site",
    image: " https://kavyatra.com/wp-content/uploads/2021/12/Bir-Billing.jpg ",
    description: "Bir is the landing site and Billing is the takeoff site. Known globally for paragliding, monasteries and cycling trails.",
    coordinates: { lat: 32.0436, lng: 76.7144 },
    essentials: {
      bestTime: "March-June & Oct-Nov",
      weather: "Pleasant",
      timings: "Daylight Hours for Flying",
      entryFee: {
        Entry: "Free",
        Paragliding: "₹2500-3000 (15-20 mins)"
      }
    },
    transport: {
      nearestAirport: "Gaggal (67 km)",
      nearestRailway: "Pathankot (140 km)",
      busConnectivity: "Buses to Baijnath, then taxi to Bir"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/birbilling"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Landing site in Bir is grassy and flat, viewable by wheelchair. Takeoff site is hard to access."
    },
    routePlan: [
      { time: "08:00 AM", activity: "Drive to Billing (Takeoff Point)" },
      { time: "01:00 PM", activity: "Visit Palpung Sherabling Monastery" }
    ],
    foodGuide: [
      { name: "Avva's Cafe", type: "Cafe", specialty: "South Indian", rating: 4.6 },
      { name: "Garden Cafe", type: "Casual", specialty: "Pizza & Pasta", rating: 4.3 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Vivekananda Hospital Palampur"
    }
  },
  {
    id: 1005,
    name: "McLeod Ganj (Tsuglagkhang)",
    slug: "mcleod-ganj",
    state: "Dharamshala, Himachal Pradesh",
    category: "Spiritual",
    badge: "Little Lhasa",
    image: " https://www.trawell.in/admin/images/upload/36805473McLeodGanj_Tsuglagkhang_Temple_Main.jpg",
    description: "The residence of His Holiness the 14th Dalai Lama. It is a hub of Tibetan culture, Buddhism, and crafts.",
    coordinates: { lat: 32.2426, lng: 76.3213 },
    essentials: {
      bestTime: "March to June",
      weather: "Cool/Rainy",
      timings: "05:00 AM - 08:00 PM (Temple)",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Gaggal (18 km)",
      nearestRailway: "Pathankot (90 km)",
      busConnectivity: "Frequent buses from Dharamshala and Delhi"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/mcleodganj"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "The main temple complex is accessible by wheelchair via ramps."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Tsuglagkhang Complex & Museum" },
      { time: "04:00 PM", activity: "Shopping at Tibetan Market" }
    ],
    foodGuide: [
      { name: "Tibet Kitchen", type: "Local", specialty: "Momos & Thukpa", rating: 4.5 },
      { name: "Illiterati Cafe", type: "Book Cafe", specialty: "Coffee & Views", rating: 4.6 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Zonal Hospital Dharamshala"
    }
  },
  {
    id: 1006,
    name: "Key Monastery, Spiti Valley",
    slug: "spiti-valley-key-monastery",
    state: "Kaza, Himachal Pradesh",
    category: "Nature",
    badge: "The Middle Land",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/5e/36/5e/key-monastery.jpg?w=1200&h=1200&s=1 ",
    description: "A cold desert mountain valley famous for the 1000-year-old Key Monastery perched on a hilltop.",
    coordinates: { lat: 32.2982, lng: 78.0108 },
    essentials: {
      bestTime: "June to September",
      weather: "Cold Desert",
      timings: "06:00 AM - 06:00 PM (Monastery)",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Bhuntar (250 km)",
      nearestRailway: "Shimla (440 km)",
      busConnectivity: "HRTC bus from Manali or Shimla"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/keymonastery"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Extremely difficult terrain. Monastery has steep steps."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Key Monastery Visit" },
      { time: "02:00 PM", activity: "Chicham Bridge" }
    ],
    foodGuide: [
      { name: "The Himalayan Cafe (Kaza)", type: "Cafe", specialty: "Seabuckthorn Tea", rating: 4.3 },
      { name: "Local Homestays", type: "Home", specialty: "Butter Tea", rating: 4.7 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "CHC Kaza"
    }
  },
  {
    id: 1007,
    name: "Khajjiar Lake & Meadow",
    slug: "khajjiar",
    state: "Chamba, Himachal Pradesh",
    category: "Nature",
    badge: "Mini Switzerland",
    image: " https://tripxl.com/blog/wp-content/uploads/2025/03/Location-105.jpg ",
    description: "A small plateau with a lake in the middle, surrounded by meadows and cedar forests.",
    coordinates: { lat: 32.5558, lng: 76.0656 },
    essentials: {
      bestTime: "March to June",
      weather: "Pleasant",
      timings: "24 Hours",
      entryFee: {
        Entry: "Free",
        Zorbing: "₹300"
      }
    },
    transport: {
      nearestAirport: "Gaggal (110 km)",
      nearestRailway: "Pathankot (95 km)",
      busConnectivity: "Taxi/Bus from Dalhousie (24 km)"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/khajjiar"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "The meadow periphery is accessible, center is uneven."
    },
    routePlan: [
      { time: "10:00 AM", activity: "Walk around Khajjiar Lake" },
      { time: "02:00 PM", activity: "Visit Khajji Nag Temple" }
    ],
    foodGuide: [
      { name: "HPTDC Devdar", type: "Restaurant", specialty: "Buffet Lunch", rating: 4.0 },
      { name: "Street Vendors", type: "Stall", specialty: "Maggi", rating: 3.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Civil Hospital Dalhousie"
    }
  },
  {
    id: 1008,
    name: "Great Himalayan National Park",
    slug: "great-himalayan-national-park",
    state: "Kullu, Himachal Pradesh",
    category: "Wildlife",
    badge: "UNESCO Site",
    image: " https://static.toiimg.com/photo/msid-92331192,width-96,height-65.cms ",
    description: "Protects pristine Western Himalayan flora and fauna, including Snow Leopards and Western Tragopan.",
    coordinates: { lat: 31.7431, lng: 77.3697 },
    essentials: {
      bestTime: "April to June, Oct-Nov",
      weather: "Alpine/Forest",
      timings: "Sunrise to Sunset",
      entryFee: {
        Indian: "₹100",
        Foreigner: "₹400"
      }
    },
    transport: {
      nearestAirport: "Bhuntar (50 km)",
      nearestRailway: "Joginder Nagar (100 km)",
      busConnectivity: "Taxi to Gushaini (Entry point)"
    },
    externalLinks: {
      officialBooking: "https://www.greathimalayannationalpark.org/",
      googleMaps: "https://goo.gl/maps/ghnp"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Strictly a trekking destination. No vehicle access inside."
    },
    routePlan: [
      { time: "08:00 AM", activity: "Trek to Rolla" },
      { time: "04:00 PM", activity: "Birdwatching" }
    ],
    foodGuide: [
      { name: "Raju's Cottage", type: "Homestay", specialty: "Trout Fish", rating: 4.8 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Regional Hospital Kullu"
    }
  },
  {
    id: 1009,
    name: "Kasol & Manikaran",
    slug: "kasol-manikaran",
    state: "Kasol, Himachal Pradesh",
    category: "Nature",
    badge: "Mini Israel",
    image: " https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/74/ac/88.jpg ",
    description: "Kasol is a scenic hamlet on the Parvati River. Manikaran is famous for its Gurudwara and natural hot springs.",
    coordinates: { lat: 32.0098, lng: 77.3149 },
    essentials: {
      bestTime: "March to June",
      weather: "Pleasant",
      timings: "24 Hours (Hot Springs: 6 AM - 10 PM)",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Bhuntar (30 km)",
      nearestRailway: "Pathankot (290 km)",
      busConnectivity: "Local buses from Bhuntar to Kasol"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/kasol"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Paths are rocky and bridges are narrow."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Chalal Nature Trek" },
      { time: "01:00 PM", activity: "Hot Spring Bath" }
    ],
    foodGuide: [
      { name: "Evergreen Cafe", type: "Cafe", specialty: "Israeli Platter", rating: 4.5 },
      { name: "Moon Dance Cafe", type: "Bakery", specialty: "German Goods", rating: 4.4 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Regional Hospital Kullu"
    }
  },
  {
    id: 1010,
    name: "Masroor Rock Cut Temple",
    slug: "masroor-rock-cut-temple",
    state: "Kangra, Himachal Pradesh",
    category: "Heritage",
    badge: "Himalayan Ellora",
    image: " https://www.savaari.com/blog/wp-content/uploads/2023/10/Rock_Cut_Temple_Himachal_Pradesh1.webp ",
    description: "An 8th-century monolithic rock-cut temple complex dedicated to Shiva, Vishnu and Devi.",
    coordinates: { lat: 32.0883, lng: 76.1378 },
    essentials: {
      bestTime: "All Year",
      weather: "Warm/Mild",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },
    transport: {
      nearestAirport: "Gaggal (40 km)",
      nearestRailway: "Pathankot (85 km)",
      busConnectivity: "Taxi from Dharamshala or Kangra"
    },
    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/masroor"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Steps and rocky surfaces."
    },
    routePlan: [
      { time: "10:00 AM", activity: "Temple Tour" },
      { time: "01:00 PM", activity: "Picnic Lunch" }
    ],
    foodGuide: [
      { name: "Local Dhabas", type: "Highway", specialty: "Kangri Dham", rating: 4.0 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Tanda Medical College"
    }
  },
  {
    id: 1011,
    name: "Chandratal Lake (Moon Lake)",
    slug: "chandratal-lake",
    state: "Spiti, Himachal Pradesh",
    category: "Nature",
    badge: "Hidden Gem",
    image: " https://jagattravels.com/wp-content/uploads/2018/10/Chandratal.jpg",
    description: "A high-altitude crescent-shaped lake that changes colors. A hidden glacial marvel.",
    coordinates: { lat: 32.4824, lng: 77.6156 },
    essentials: {
      bestTime: "July to September",
      weather: "Freezing",
      timings: "Daylight Hours",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Bhuntar (180 km)",
      nearestRailway: "Manali",
      busConnectivity: "Taxi from Batal or Kaza"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/chandratal"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Rugged high-altitude trek."
    },
    routePlan: [
      { time: "08:00 AM", activity: "Trek to the Lake" }
    ],
    foodGuide: [
      { name: "Camp Dhabas", type: "Stall", specialty: "Maggi & Dal Chawal", rating: 4.1 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "CHC Kaza"
    }
  },
  {
    id: 1012,
    name: "Prashar Lake",
    slug: "prashar-lake",
    state: "Mandi, Himachal Pradesh",
    category: "Spiritual",
    badge: "Mystery Lake",
    image: " https://media.moxtain.com/trekking/prashar-lake-trek/prashar-lake-camping.jpeg ",
    description: "Sacred lake with a floating island and a pagoda temple dedicated to Sage Prashar.",
    coordinates: { lat: 31.7551, lng: 77.1025 },
    essentials: {
      bestTime: "April-July, Sept-Nov",
      weather: "Cold",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Bhuntar (60 km)",
      nearestRailway: "Mandi",
      busConnectivity: "Taxi from Mandi (50 km)"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/prashar"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep trekking required."
    },
    routePlan: [
      { time: "10:00 AM", activity: "Temple Darshan" }
    ],
    foodGuide: [
      { name: "Local Stalls", type: "Stall", specialty: "Rajma Chawal", rating: 4.2 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Zonal Hospital Mandi"
    }
  },
  {
    id: 1013,
    name: "Jibhi",
    slug: "jibhi-valley",
    state: "Tirthan, Himachal Pradesh",
    category: "Nature",
    badge: "Hidden Valley",
    image: " https://hblimg.mmtcdn.com/content/hubble/img/ttds/mmt/activities/m_jibhi_3_l_600_900.jpg ",
    description: "Charming hamlet known for Victorian-style cottages and pine wood treehouses.",
    coordinates: { lat: 31.6375, lng: 77.3484 },
    essentials: {
      bestTime: "March-May, Oct-Nov",
      weather: "Cold/Cool",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Bhuntar (50 km)",
      nearestRailway: "Shimla",
      busConnectivity: "Aut tunnel to local taxi"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/jibhi"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Rocky village lanes."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Waterfall Trek" }
    ],
    foodGuide: [
      { name: "Jibhi Kitchen", type: "Cafe", specialty: "Siddu", rating: 4.6 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "CHC Banjar"
    }
  },
  {
    id: 1014,
    name: "Barot Valley",
    slug: "barot-valley",
    state: "Mandi, Himachal Pradesh",
    category: "Nature",
    badge: "Trout Paradise",
    image: " https://himachalstory.com/wp-content/uploads/2018/07/Barot.jpg ",
    description: "Famous for trout fish farms and the scenic Uhl River setting.",
    coordinates: { lat: 32.0315, lng: 76.8458 },
    essentials: {
      bestTime: "April-June",
      weather: "Mild",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Gaggal",
      nearestRailway: "Joginder Nagar (35 km)",
      busConnectivity: "Local bus from Mandi"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/barot"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Mountainous riverside terrain."
    },
    routePlan: [
      { time: "10:00 AM", activity: "Trout Farm Visit" }
    ],
    foodGuide: [
      { name: "Riverside Dhaba", type: "Stall", specialty: "Fried Trout", rating: 4.3 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Civil Joginder Nagar"
    }
  },
  {
    id: 1015,
    name: "Dalhousie",
    slug: "dalhousie-town",
    state: "Dalhousie, Himachal Pradesh",
    category: "Hill Stations",
    badge: "Little England",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/dalhousie-himachal-pradesh-2-city-hero?qlt=82&ts=1751539683720 ",
    description: "Colonial era town with high-altitude views and architecture.",
    coordinates: { lat: 32.5387, lng: 75.9710 },
    essentials: {
      bestTime: "March-June",
      weather: "Cool",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Gaggal",
      nearestRailway: "Pathankot (80 km)",
      busConnectivity: "Regular HRTC buses"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/dalhousie"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Mall road is wheelchair accessible."
    },
    routePlan: [
      { time: "05:00 PM", activity: "Heritage Church Visit" }
    ],
    foodGuide: [
      { name: "Kwality", type: "Heritage", specialty: "North Indian", rating: 4.2 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Civil Dalhousie"
    }
  },
  {
    id: 1016,
    name: "Chitkul",
    slug: "chitkul-kinnaur",
    state: "Kinnaur, Himachal Pradesh",
    category: "Nature",
    badge: "Last Village",
    image: " https://d2qa7a8q0vuocm.cloudfront.net/images/6241620211118122951.png ",
    description: "The last inhabited village near the Indo-Tibet border.",
    coordinates: { lat: 31.3516, lng: 78.4345 },
    essentials: {
      bestTime: "May-Oct",
      weather: "Cold",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Shimla",
      nearestRailway: "Shimla",
      busConnectivity: "Bus from Reckong Peo"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/chitkul"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Remote and high altitude."
    },
    routePlan: [
      { time: "10:00 AM", activity: "River Walk" }
    ],
    foodGuide: [
      { name: "Aakhri Dhaba", type: "Local", specialty: "Rajma", rating: 4.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Reckong Peo Hospital"
    }
  },
  {
    id: 1017,
    name: "Suraj Tal",
    slug: "suraj-tal-lake",
    state: "Lahaul, Himachal Pradesh",
    category: "Nature",
    badge: "Lake of Sun God",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/01/29/8f/suraj-tal.jpg?w=900&h=-1&s=1 ",
    description: "3rd highest lake in India, visible from Manali-Leh highway.",
    coordinates: { lat: 32.7384, lng: 77.4022 },
    essentials: {
      bestTime: "July-Oct",
      weather: "Freezing",
      timings: "Daylight Hours",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Bhuntar",
      nearestRailway: "Manali",
      busConnectivity: "Visible from Highway"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/surajtal"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Visible from the road."
    },
    routePlan: [
      { time: "12:00 PM", activity: "Photography Stop" }
    ],
    foodGuide: [
      { name: "Highway Dhabas", type: "Stall", specialty: "Chai", rating: 4.1 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Keylong Hospital"
    }
  },
  {
    id: 1018,
    name: "Kasauli",
    slug: "kasauli-hill",
    state: "Kasauli, Himachal Pradesh",
    category: "Heritage",
    badge: "Colonial Town",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/kasauli/mmt/destination/m_destination-kasauli-landscape_l_400_640.jpg",
    description: "Cozy cantonment town with British-era architecture and nature walks.",
    coordinates: { lat: 30.9013, lng: 76.9649 },
    essentials: {
      bestTime: "April-June, Sept-Nov",
      weather: "Mild",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Chandigarh",
      nearestRailway: "Kalka",
      busConnectivity: "Bus from Kalka"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/kasauli"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Lower Mall is accessible."
    },
    routePlan: [
      { time: "04:00 PM", activity: "Gilbert Trail Walk" }
    ],
    foodGuide: [
      { name: "Cafe Rudra", type: "Cafe", specialty: "Crepes", rating: 4.4 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Cantonment Hospital"
    }
  },
  {
    id: 1019,
    name: "Renuka Lake",
    slug: "renuka-lake",
    state: "Sirmaur, Himachal Pradesh",
    category: "Nature",
    badge: "Famous Lake",
    image: " https://mysterioushimachal.wordpress.com/wp-content/uploads/2024/09/07332e_4b33e540be51054f0e77ae29119d4a67.jpg",
    description: "Largest natural lake in HP, shaped like a reclining woman.",
    coordinates: { lat: 30.6125, lng: 77.4526 },
    essentials: {
      bestTime: "Sept-March",
      weather: "Mild",
      timings: "Sunrise-Sunset",
      entryFee: { Boating: "₹100" }
    },
    transport: {
      nearestAirport: "Chandigarh",
      nearestRailway: "Ambala",
      busConnectivity: "Bus from Nahan"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/renuka"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved path around lake."
    },
    routePlan: [
      { time: "03:00 PM", activity: "Boating" }
    ],
    foodGuide: [
      { name: "Renuka Hotel", type: "Restaurant", specialty: "Thali", rating: 3.9 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Zonal Nahan"
    }
  },
  {
    id: 1020,
    name: "Narkanda",
    slug: "narkanda-shimla",
    state: "Shimla, Himachal Pradesh",
    category: "Adventure",
    badge: "Skiing Point",
    image: " https://tripstorz.com/_astro/narkanda-himachal-pradesh.D9hnVsf6_2dp8QV.jpg ",
    description: "Famous hill station for skiing and panoramic views of the inner Himalayas.",
    coordinates: { lat: 31.2574, lng: 77.4561 },
    essentials: {
      bestTime: "Dec-Feb (Ski), May-June",
      weather: "Cold",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: {
      nearestAirport: "Shimla",
      nearestRailway: "Shimla",
      busConnectivity: "Bus on NH5"
    },
    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/narkanda"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep peaks and hilly paths."
    },
    routePlan: [
      { time: "11:00 AM", activity: "Hatu Peak Visit" }
    ],
    foodGuide: [
      { name: "HPTDC Hatu", type: "Restaurant", specialty: "North Indian", rating: 4.0 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Civil Hospital Narkanda"
    }
  }
];






