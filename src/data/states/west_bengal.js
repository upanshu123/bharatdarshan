/**
 * WEST_BENGAL_PLACES DATASET (Extended 20+ Places)
 * ------------------------------------------------------------------
 * Sources: WBTDCL, ASI, Forest Department & UNESCO (2026 Data)
 * Coverage: Heritage, Nature, Spiritual, and Coastal Gems
 * ------------------------------------------------------------------
 */

export const WEST_BENGAL_PLACES = [
  // --- HERITAGE & ICONS ---
  {
    id: 2901,
    name: "Victoria Memorial",
    slug: "victoria-memorial-kolkata",
    cityState: "Kolkata, West Bengal",
    category: "Heritage",
    badge: "Icon of Kolkata",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/victoria-memorial-kolkata-wb-2-attr-hero?qlt=82&ts=1742980964534 ",
    description: "A marble marvel built between 1906-1921. It serves as a museum and a grand testament to the British era in India.",
    coordinates: { lat: 22.5448, lng: 88.3426 },
    essentials: {
      bestTime: "October to March",
      weather: "City/Humid",
      timings: "Museum: 10:00 AM - 06:00 PM, Garden: 05:30 AM - 06:15 PM",
      entryFee: { Garden: "₹20", Museum: "₹30 (Indian), ₹500 (Foreigner)" }
    },
    transport: { nearestAirport: "Kolkata (22 km)", nearestRailway: "Howrah (6 km)", busConnectivity: "Metro (Maidan) or AC Bus" },
    externalLinks: { officialBooking: "https://www.victoriamemorial-cal.org/", googleMaps: "https://goo.gl/maps/victoria" },
    accessibility: { wheelchairFriendly: true, notes: "Ground floor and gardens are accessible." },
    routePlan: [
      { time: "10:00 AM", activity: "Garden Photography" },
      { time: "11:30 AM", activity: "Museum Gallery Tour" }
    ],
    foodGuide: [{ name: "Peter Cat", specialty: "Chelo Kebab", rating: 4.6 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "SSKM Hospital" }
  },
  {
    id: 2902,
    name: "Howrah Bridge (Rabindra Setu)",
    slug: "howrah-bridge",
    cityState: "Kolkata, West Bengal",
    category: "Heritage",
    badge: "Busiest Cantilever Bridge",
    image: " https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Howrah_bridge_at_night.jpg/1200px-Howrah_bridge_at_night.jpg",
    description: "An engineering marvel with no nuts or bolts, connecting Kolkata and Howrah over the Hooghly river.",
    coordinates: { lat: 22.5851, lng: 88.3468 },
    essentials: {
      bestTime: "Evening/Night",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Howrah Jn (0 km)", busConnectivity: "Ferry from Millennium Park for best view" },
    externalLinks: { officialBooking: "https://wbtourism.gov.in/", googleMaps: "https://goo.gl/maps/howrahbridge" },
    accessibility: { wheelchairFriendly: true, notes: "Paved sidewalks but extremely busy." },
    routePlan: [
      { time: "05:00 PM", activity: "Ferry Ride" },
      { time: "07:00 PM", activity: "View Bridge Illumination" }
    ],
    foodGuide: [{ name: "Arsalan", specialty: "Kolkata Biryani", rating: 4.7 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Medical College" }
  },
  {
    id: 2903,
    name: "Hazarduari Palace",
    slug: "hazarduari-palace-murshidabad",
    cityState: "Murshidabad, West Bengal",
    category: "Heritage",
    badge: "Palace of 1000 Doors",
    image: " https://lh3.googleusercontent.com/l2lOwjwEyhaThvJv-ubyqDD6whyL0PO5UfEM7oAbOPLd9TibP-kzVNbmZblBJMhv5Ly1V7IJCkk5cKaFZO8zg_3nXU30kDQheg=w3840-h2160-c-rw-v3 ",
    description: "Built in the 19th century, this palace has 1000 doors (900 are real) and houses a massive collection of antiquities.",
    coordinates: { lat: 24.1853, lng: 88.2685 },
    essentials: {
      bestTime: "November to February",
      timings: "09:00 AM - 05:00 PM (Closed Friday)",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestAirport: "Kolkata (200 km)", nearestRailway: "Murshidabad (2 km)", busConnectivity: "Buses from Kolkata" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/hazarduari" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available for main galleries." },
    routePlan: [
      { time: "10:00 AM", activity: "Palace Museum Tour" },
      { time: "01:00 PM", activity: "Katra Mosque Visit" }
    ],
    foodGuide: [{ name: "Local Dhabas", specialty: "Murshidabadi Biryani", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Murshidabad Medical College" }
  },

  // --- HILL STATIONS & NATURE ---
  {
    id: 2904,
    name: "Tiger Hill",
    slug: "tiger-hill-darjeeling",
    cityState: "Darjeeling, West Bengal",
    category: "Hill Stations",
    badge: "Best Sunrise Point",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/tiger-hill-darjeeling-west-bengal-2-attr-hero?qlt=82&ts=1726643281440 ",
    description: "Famous for its breathtaking sunrise views over Mt. Kanchenjunga and Mt. Everest.",
    coordinates: { lat: 27.0360, lng: 88.2627 },
    essentials: {
      bestTime: "March-May, Oct-Dec",
      timings: "04:00 AM - 06:00 AM (Sunrise)",
      entryFee: { Ticket: "₹50-100" }
    },
    transport: { nearestAirport: "Bagdogra (70 km)", nearestRailway: "NJP (75 km)", busConnectivity: "Shared taxi from Darjeeling Town" },
    externalLinks: { officialBooking: "https://darjeeling.gov.in/", googleMaps: "https://goo.gl/maps/tigerhill" },
    accessibility: { wheelchairFriendly: false, notes: "Uphill climb and cold weather." },
    routePlan: [
      { time: "04:00 AM", activity: "Sunrise Viewing" },
      { time: "07:30 AM", activity: "Batasia Loop Visit" }
    ],
    foodGuide: [{ name: "Glenary's", specialty: "English Breakfast", rating: 4.7 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Darjeeling District Hospital" }
  },
  {
    id: 2905,
    name: "Batasia Loop & War Memorial",
    slug: "batasia-loop-darjeeling",
    cityState: "Darjeeling, West Bengal",
    category: "Heritage",
    badge: "Toy Train Masterpiece",
    image: " https://darjeelingadventuretourism.com/images/batasia-loop-780.jpg",
    description: "A spiral railway track created to lower the gradient of the Darjeeling Himalayan Railway.",
    coordinates: { lat: 27.0168, lng: 88.2425 },
    essentials: {
      bestTime: "All Year",
      timings: "05:00 AM - 08:00 PM",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestRailway: "Ghum (2 km)", busConnectivity: "Easy via Shared Taxi" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/batasia" },
    accessibility: { wheelchairFriendly: true, notes: "Well-paved garden paths." },
    routePlan: [
      { time: "09:00 AM", activity: "Watch Toy Train Pass" },
      { time: "10:00 AM", activity: "Visit Gorkha War Memorial" }
    ],
    foodGuide: [{ name: "Keventers", specialty: "Hot Chocolate", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Mariam Fortis" }
  },
  {
    id: 2906,
    name: "Mirik (Sumendu Lake)",
    slug: "mirik-lake-darjeeling",
    cityState: "Mirik, West Bengal",
    category: "Hill Stations",
    badge: "Valley of Sun",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/40/24/e7/mirik-lake.jpg?w=1200&h=-1&s=1 ",
    description: "Centered around a 1.25 km long lake, Mirik offers serene boating and views of the Himalayas.",
    coordinates: { lat: 26.8878, lng: 88.1722 },
    essentials: {
      bestTime: "March-May",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Boating: "₹100-200" }
    },
    transport: { nearestAirport: "Bagdogra (50 km)", nearestRailway: "NJP (55 km)", busConnectivity: "Direct from Siliguri" },
    externalLinks: { officialBooking: "https://wbtourism.gov.in/", googleMaps: "https://goo.gl/maps/mirik" },
    accessibility: { wheelchairFriendly: true, notes: "Lakeside promenade is flat." },
    routePlan: [
      { time: "11:00 AM", activity: "Boating & Horse Riding" },
      { time: "02:00 PM", activity: "Visit Orange Orchards" }
    ],
    foodGuide: [{ name: "Hotel Jagjeet", specialty: "North Indian Thali", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Mirik Block Hospital" }
  },

  // --- WILDLIFE ---
  {
    id: 2907,
    name: "Sundarbans National Park",
    slug: "sundarbans-national-park",
    cityState: "South 24 Parganas, West Bengal",
    category: "Wildlife",
    badge: "UNESCO World Heritage Site",
    image: " https://api.theindia.co.in/storage/image/places/image/sundarbans-national-park-723068.jpg ",
    description: "World's largest mangrove forest, home to the swimming Royal Bengal Tigers and estuarine crocodiles.",
    coordinates: { lat: 21.9497, lng: 88.8995 },
    essentials: {
      bestTime: "Sept to March",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Indian: "₹60", Foreigner: "₹200", Boat: "₹2500+" }
    },
    transport: { nearestRailway: "Canning (48 km)", busConnectivity: "Drive to Godkhali to board boats" },
    externalLinks: { officialBooking: "https://wbtourism.gov.in/", googleMaps: "https://goo.gl/maps/sundarbans" },
    accessibility: { wheelchairFriendly: false, notes: "Boat access is difficult for wheelchairs." },
    routePlan: [
      { time: "08:30 AM", activity: "Safari Start from Godkhali" },
      { time: "01:00 PM", activity: "Sajnekhali Watch Tower" }
    ],
    foodGuide: [{ name: "Boat Meals", specialty: "Crab Curry", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Gosaba Hospital" }
  },
  {
    id: 2908,
    name: "Jaldapara National Park",
    slug: "jaldapara-wildlife",
    cityState: "Alipurduar, West Bengal",
    category: "Wildlife",
    badge: "One-Horned Rhino Sanctuary",
    image: " https://abhimanuias.com/userfiles/image/jalda.jpg ",
    description: "Known for the highest population of one-horned rhinoceros in West Bengal, located in the Dooars region.",
    coordinates: { lat: 26.6961, lng: 89.2829 },
    essentials: {
      bestTime: "Oct to May",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { JeepSafari: "₹2500+", Elephant: "₹800" }
    },
    transport: { nearestAirport: "Bagdogra (140 km)", nearestRailway: "Madarihat (2 km)", busConnectivity: "High" },
    externalLinks: { officialBooking: "https://wbsfda.gov.in/", googleMaps: "https://goo.gl/maps/jaldapara" },
    accessibility: { wheelchairFriendly: false, notes: "Safari vehicles are high." },
    routePlan: [
      { time: "06:00 AM", activity: "Morning Elephant Safari" },
      { time: "10:00 AM", activity: "Wildlife Observation" }
    ],
    foodGuide: [{ name: "Hollong Lodge", specialty: "Bengali Cuisine", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Alipurduar District Hospital" }
  },

  // --- SPIRITUAL ---
  {
    id: 2909,
    name: "Dakshineswar Kali Temple",
    slug: "dakshineswar-kali-temple",
    cityState: "Kolkata, West Bengal",
    category: "Spiritual",
    badge: "Divine Abode of Maa Kali",
    image: " https://static.toiimg.com/thumb/msid-47798909,width=1200,height=900/47798909.jpg ",
    description: "Built by Rani Rashmoni, it is where Ramakrishna Paramahansa served as the head priest.",
    coordinates: { lat: 22.6531, lng: 88.3575 },
    essentials: {
      bestTime: "All Year",
      timings: "06:00 AM - 12:30 PM, 03:00 PM - 08:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Dakshineswar (0.5 km)", busConnectivity: "Metro/AC Bus available" },
    externalLinks: { officialBooking: "http://www.dakshineswarkalitemple.org/", googleMaps: "https://goo.gl/maps/dakshineswar" },
    accessibility: { wheelchairFriendly: true, notes: "Paved courtyard with ramp access." },
    routePlan: [
      { time: "07:00 AM", activity: "Main Temple Darshan" },
      { time: "09:30 AM", activity: "Visit 12 Shiva Temples" }
    ],
    foodGuide: [{ name: "Temple Prasad", specialty: "Maa er Bhog", rating: 4.8 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Sagar Dutt Hospital" }
  },
  {
    id: 2910,
    name: "Belur Math",
    slug: "belur-math-kolkata",
    cityState: "Howrah, West Bengal",
    category: "Spiritual",
    badge: "Ramakrishna Mission HQ",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/belur-math-kolkata-wb-1-attr-hero?qlt=82&ts=1742153889951 ",
    description: "The heart of the Ramakrishna Movement, founded by Swami Vivekananda. Famous for architecture fusing all religions.",
    coordinates: { lat: 22.6299, lng: 88.3524 },
    essentials: {
      bestTime: "All Year",
      timings: "06:30 AM - 11:30 AM, 03:30 PM - 08:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Howrah (6 km)", busConnectivity: "Ferry from Dakshineswar available" },
    externalLinks: { officialBooking: "https://belurmath.org/", googleMaps: "https://goo.gl/maps/belurmath" },
    accessibility: { wheelchairFriendly: true, notes: "Battery cars available for elderly." },
    routePlan: [
      { time: "04:30 PM", activity: "Museum Visit" },
      { time: "06:00 PM", activity: "Evening Arati" }
    ],
    foodGuide: [{ name: "Math Canteen", specialty: "Satvik Meals", rating: 4.9 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "TL Jaiswal Hospital" }
  },
  {
    id: 2911,
    name: "Mayapur ISKCON",
    slug: "mayapur-iskcon-temple",
    cityState: "Mayapur, West Bengal",
    category: "Spiritual",
    badge: "Temple of Vedic Planetarium",
    image: " https://cdn.tovp.org/wp-content/uploads/2013/04/tovp-view-from-the-main-road1.jpg.webp ",
    description: "Headquarters of ISKCON and the birthplace of Chaitanya Mahaprabhu. A global center for spiritual learning.",
    coordinates: { lat: 23.4756, lng: 88.3917 },
    essentials: {
      bestTime: "Winter/Holi",
      timings: "04:30 AM - 08:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Nabadwip Dham (10 km via Ferry)", busConnectivity: "Direct buses from Kolkata" },
    externalLinks: { officialBooking: "https://www.mayapur.com/", googleMaps: "https://goo.gl/maps/mayapur" },
    accessibility: { wheelchairFriendly: true, notes: "Fully accessible with lifts and clean paths." },
    routePlan: [
      { time: "07:00 AM", activity: "Temple Darshan" },
      { time: "01:00 PM", activity: "Mahaprasad Lunch" }
    ],
    foodGuide: [{ name: "Gada Bhavan", specialty: "Vegetarian Thali", rating: 4.7 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Sree Mayapur Hospital" }
  },

  // --- CULTURE & UNESCO ---
  {
    id: 2912,
    name: "Santiniketan",
    slug: "santiniketan-birbhum",
    cityState: "Bolpur, West Bengal",
    category: "Heritage",
    badge: "UNESCO World Heritage Site",
    image: " https://upload.wikimedia.org/wikipedia/commons/e/ed/Shantiniketan_Bari_of_Rabindranath_Tagore.jpg ",
    description: "The abode of peace founded by Rabindranath Tagore. Famous for its university and Basanta Utsav.",
    coordinates: { lat: 23.6793, lng: 87.6749 },
    essentials: {
      bestTime: "October to March",
      timings: "10:00 AM - 04:30 PM (Closed Wednesday)",
      entryFee: { Museum: "₹40" }
    },
    transport: { nearestRailway: "Bolpur (2 km)", busConnectivity: "Toto (E-Rickshaws) high" },
    externalLinks: { officialBooking: "https://visvabharati.ac.in/", googleMaps: "https://goo.gl/maps/santiniketan" },
    accessibility: { wheelchairFriendly: true, notes: "Museum complex is accessible." },
    routePlan: [
      { time: "10:00 AM", activity: "Rabindra Bhavan" },
      { time: "01:00 PM", activity: "Khoai Sonajhuri Haat" }
    ],
    foodGuide: [{ name: "Banalakshmi", specialty: "Village Style Thali", rating: 4.6 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Bolpur Hospital" }
  },
  {
    id: 2913,
    name: "Bishnupur Temples",
    slug: "bishnupur-terracotta",
    cityState: "Bankura, West Bengal",
    category: "Heritage",
    badge: "Terracotta Capital",
    image: " https://i0.wp.com/traveldreams.live/wp-content/uploads/2020/11/nandlal-3-1.jpg?resize=1300%2C867&ssl=1 ",
    description: "Famous for the 17th-century terracotta temples like Rasmancha and Jor Bangla built by Malla kings.",
    coordinates: { lat: 23.0679, lng: 87.3174 },
    essentials: {
      bestTime: "December (Mela season)",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Indian: "₹25" }
    },
    transport: { nearestRailway: "Bishnupur (2 km)", busConnectivity: "Direct buses from Kolkata" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/bishnupur" },
    accessibility: { wheelchairFriendly: true, notes: "Flat grassy temple compounds." },
    routePlan: [
      { time: "09:00 AM", activity: "Rasmancha Visit" },
      { time: "02:00 PM", activity: "Baluchari Saree Shopping" }
    ],
    foodGuide: [{ name: "Monalisa Hotel", specialty: "Posto Bora", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Bishnupur District Hospital" }
  },

  // --- COASTAL GEMS ---
  {
    id: 2914,
    name: "New Digha Beach",
    slug: "new-digha-beach",
    cityState: "Digha, West Bengal",
    category: "Beaches",
    badge: "Brighton of the East",
    image: " https://sandee.com/_next/image?url=https%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNLU_qJZ9c_9cvbTTOI2xhOGqxmXLGkgSc66zyh%3Ds1600-k-no&w=3840&q=75 ",
    description: "The most popular sea beach in Bengal, known for its flat shallow beaches and sea food.",
    coordinates: { lat: 21.6212, lng: 87.5164 },
    essentials: {
      bestTime: "All Year",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Digha (1 km)", busConnectivity: "Excellent (SBSTC)" },
    externalLinks: { officialBooking: "https://wbtourism.gov.in/", googleMaps: "https://goo.gl/maps/digha" },
    accessibility: { wheelchairFriendly: true, notes: "Paved promenades exist." },
    routePlan: [
      { time: "06:00 AM", activity: "Sunrise Walk" },
      { time: "04:00 PM", activity: "Marine Aquarium Visit" }
    ],
    foodGuide: [{ name: "Sea Hawk", specialty: "Fried Fish & Crab", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Digha State General" }
  },
  {
    id: 2915,
    name: "Mandarmani Beach",
    slug: "mandarmani-beach-east-midnapore",
    cityState: "Mandarmani, West Bengal",
    category: "Beaches",
    badge: "Longest Drivable Beach",
    image: " https://kolkatatourism.travel/images/places-to-visit/headers/mandarmani-beach-kolkata-header-kolkata-tourism.jpg.jpg ",
    description: "A fast-developing seaside resort with a long beach where cars can drive. Famous for Red Crabs.",
    coordinates: { lat: 21.6631, lng: 87.6014 },
    essentials: {
      bestTime: "October to March",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Contai (23 km)", busConnectivity: "Direct from Howrah" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/mandarmani" },
    accessibility: { wheelchairFriendly: false, notes: "Beach sand is soft." },
    routePlan: [
      { time: "05:00 PM", activity: "Beach Drive (Caution: Tide)" },
      { time: "07:00 PM", activity: "Resort Stay/Bonfire" }
    ],
    foodGuide: [{ name: "Beachside Shacks", specialty: "Pomfret Fry", rating: 4.4 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Contai Hospital" }
  },
  {
    id: 2916,
    name: "Gangasagar (Sagar Island)",
    slug: "gangasagar-pilgrimage",
    cityState: "Sagar Island, West Bengal",
    category: "Spiritual",
    badge: "Confluence of Ganga & Sea",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/2c/b5/43/caption.jpg?w=1200&h=-1&s=1 ",
    description: "A sacred island where the River Ganga meets the Bay of Bengal. Site of the second largest mela in India.",
    coordinates: { lat: 21.6525, lng: 88.0772 },
    essentials: {
      bestTime: "January (Makar Sankranti)",
      timings: "24 Hours",
      entryFee: { Ferry: "₹10-50" }
    },
    transport: { nearestRailway: "Namkhana (Access via Ferry)", busConnectivity: "Buses from Kolkata to Lot 8" },
    externalLinks: { officialBooking: "https://wbtourism.gov.in/", googleMaps: "https://goo.gl/maps/gangasagar" },
    accessibility: { wheelchairFriendly: false, notes: "Ferry boarding is difficult." },
    routePlan: [
      { time: "06:00 AM", activity: "Holy Dip at Sangam" },
      { time: "08:00 AM", activity: "Kapil Muni Temple Visit" }
    ],
    foodGuide: [{ name: "Local Thalis", specialty: "Vegetarian Meals", rating: 3.9 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Sagar Rural Hospital" }
  },

  // --- OFFBEAT & HIDDEN GEMS ---
  {
    id: 2917,
    name: "Cooch Behar Palace (Rajbari)",
    slug: "cooch-behar-palace",
    cityState: "Cooch Behar, West Bengal",
    category: "Heritage",
    badge: "Buckingham of Bengal",
    image: " https://images.staybook.in/things-to-do/coochbehar-royal-palace-entry-ticket/4.jpg ",
    description: "Modeled after Buckingham Palace, this brick-built royal residence is an architectural treasure of North Bengal.",
    coordinates: { lat: 26.3265, lng: 89.4385 },
    essentials: {
      bestTime: "Winter",
      timings: "10:00 AM - 05:00 PM (Closed Friday)",
      entryFee: { Indian: "₹25" }
    },
    transport: { nearestAirport: "Bagdogra (150 km)", nearestRailway: "Cooch Behar (2 km)", busConnectivity: "Good" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/coochbehar" },
    accessibility: { wheelchairFriendly: true, notes: "Vast lawns and ground floor accessible." },
    routePlan: [
      { time: "10:00 AM", activity: "Museum & Palace Tour" },
      { time: "04:00 PM", activity: "Madan Mohan Temple" }
    ],
    foodGuide: [{ name: "Local Markets", specialty: "Shorshe Ilish", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Cooch Behar Govt Hospital" }
  },
  {
    id: 2918,
    name: "Sandakphu Peak",
    slug: "sandakphu-trek",
    cityState: "Darjeeling Border, West Bengal",
    category: "Adventure",
    badge: "Highest Point in West Bengal",
    image: " https://upload.wikimedia.org/wikipedia/commons/8/88/Sandakphu.jpg ",
    description: "At 3636m, it offers a panoramic view of the 'Sleeping Buddha' range (Everest, Kanchenjunga, Lhotse, Makalu).",
    coordinates: { lat: 27.1000, lng: 88.0000 },
    essentials: {
      bestTime: "Oct to May",
      timings: "Season dependant",
      entryFee: { Permit: "₹200 (Singalila Park)" }
    },
    transport: { nearestAirport: "Bagdogra (110 km)", nearestRailway: "NJP (100 km)", busConnectivity: "Land Rover from Manebhanjan" },
    externalLinks: { officialBooking: "https://wbtourism.gov.in/", googleMaps: "https://goo.gl/maps/sandakphu" },
    accessibility: { wheelchairFriendly: false, notes: "Requires Land Rover or Trekking." },
    routePlan: [
      { time: "05:00 AM", activity: "Sunrise View of peaks" },
      { time: "10:00 AM", activity: "Explore Singalila National Park" }
    ],
    foodGuide: [{ name: "Tea Houses", specialty: "Thukpa & Wai-Wai", rating: 4.8 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Sukhia Pokhari PHC" }
  },
  {
    id: 2919,
    name: "Ayodhya Hills",
    slug: "ayodhya-hills-purulia",
    cityState: "Purulia, West Bengal",
    category: "Nature",
    badge: "Trekker's Paradise",
    image: " https://static2.tripoto.com/media/filter/tst/gen/648649/TripDocument/1533562447_bamni_river.jpg ",
    description: "Part of the Dalma Mountain range, famous for waterfalls, dams, and the tribal culture of Purulia.",
    coordinates: { lat: 23.2167, lng: 86.1000 },
    essentials: {
      bestTime: "September to March",
      timings: "Daylight Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Purulia (42 km)", busConnectivity: "Shared jeeps from Purulia Town" },
    externalLinks: { officialBooking: "https://wbtourism.gov.in/", googleMaps: "https://goo.gl/maps/ayodhya" },
    accessibility: { wheelchairFriendly: false, notes: "Rugged and hilly." },
    routePlan: [
      { time: "09:00 AM", activity: "Bamni Falls Trek" },
      { time: "01:00 PM", activity: "Upper Dam Photography" }
    ],
    foodGuide: [{ name: "Local Stalls", specialty: "Pithe & Gur", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Purulia District Hospital" }
  },
  {
    id: 2920,
    name: "Gorumara National Park",
    slug: "gorumara-safari",
    cityState: "Lataguri, West Bengal",
    category: "Wildlife",
    badge: "Best Grassland Safari",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/92/6c/c7/gorumara-national-park.jpg?w=900&h=500&s=1 ",
    description: "Located on the banks of Murti river, it's famous for Indian rhinoceros, elephants, and hornbills.",
    coordinates: { lat: 26.7915, lng: 88.8055 },
    essentials: {
      bestTime: "Oct to May",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Safari: "₹1500-2200" }
    },
    transport: { nearestAirport: "Bagdogra (75 km)", nearestRailway: "New Maynaguri (15 km)", busConnectivity: "Good from Siliguri" },
    externalLinks: { officialBooking: "https://wbsfda.gov.in/", googleMaps: "https://goo.gl/maps/gorumara" },
    accessibility: { wheelchairFriendly: false, notes: "Open jeeps used for safari." },
    routePlan: [
      { time: "06:00 AM", activity: "Morning Jeep Safari" },
      { time: "04:00 PM", activity: "Jatraprasad Watch Tower" }
    ],
    foodGuide: [{ name: "Lataguri Resorts", specialty: "Borgi Thali", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1800-212-1655", hospital: "Chalsa Health Center" }
  }
];

