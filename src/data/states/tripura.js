/**
 * TRIPURA_PLACES DATASET (Extended 20 Places)
 * ------------------------------------------------------------------
 * Sources: TTDC, ASI, Forest Dept Tripura (2026 Data)
 * Format: City & State added in cityState field
 * ------------------------------------------------------------------
 */

export const TRIPURA_PLACES = [
  // --- HERITAGE & PALACES ---
  {
    id: 2601,
    name: "Ujjayanta Palace",
    slug: "ujjayanta-palace-agartala",
    cityState: "Agartala, Tripura",
    category: "Heritage",
    badge: "State Museum of Tripura",
    image: " https://assets.simplotel.com/simplotel/image/upload/x_0,y_35,w_736,h_414,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/hotel-polo-towers-group/Agartala_Tripura_India_-_Luxury_Trails_of_India_xqy2ou ",
    description: "A neoclassical masterpiece built in 1901. It served as the royal seat until it was converted into a state museum showcasing regional history.",
    coordinates: { lat: 23.8315, lng: 91.2868 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm/Humid",
      timings: "10:00 AM - 05:00 PM (Closed Monday)",
      entryFee: { Indian: "₹20", Foreigner: "₹150" }
    },
    transport: { nearestAirport: "MBB Airport (10 km)", nearestRailway: "Agartala (5 km)", busConnectivity: "Excellent (City Center)" },
    externalLinks: { officialBooking: "https://tripuratourism.gov.in/", googleMaps: "https://goo.gl/maps/ujjayanta" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available at museum galleries." },
    routePlan: [
      { time: "10:00 AM", activity: "Palace Museum Gallery Tour" },
      { time: "01:00 PM", activity: "Jagannath Bari Visit" }
    ],
    foodGuide: [{ name: "Momos & More", specialty: "Pork Momos", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "GBP Hospital" }
  },
  {
    id: 2602,
    name: "Neermahal (Water Palace)",
    slug: "neermahal-palace-melaghar",
    cityState: "Melaghar, Tripura",
    category: "Heritage",
    badge: "Lake Palace of East",
    image: " https://tripuratourism.gov.in/images/tour/1661759345/80.jpg ",
    description: "Built in 1930 in the middle of Rudrasagar Lake, this palace blends Hindu and Islamic styles and was the summer retreat for the Manikya Kings.",
    coordinates: { lat: 23.4944, lng: 91.3149 },
    essentials: {
      bestTime: "October to February",
      weather: "Breezy",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹30", BoatRide: "₹50 (Shared)" }
    },
    transport: { nearestAirport: "Agartala (55 km)", nearestRailway: "Agartala (50 km)", busConnectivity: "Buses to Melaghar" },
    externalLinks: { officialBooking: "https://tripuratourism.gov.in/", googleMaps: "https://goo.gl/maps/neermahal" },
    accessibility: { wheelchairFriendly: false, notes: "Boating required to reach the palace." },
    routePlan: [
      { time: "03:00 PM", activity: "Boat Ride to Palace" },
      { time: "04:30 PM", activity: "Sunset over Rudrasagar" }
    ],
    foodGuide: [{ name: "Sagar Mahal", specialty: "Fresh Fish Curry", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Melaghar Hospital" }
  },
  {
    id: 2603,
    name: "Unakoti",
    slug: "unakoti-rock-carvings-kailashahar",
    cityState: "Kailashahar, Tripura",
    category: "Heritage",
    badge: "Angkor Wat of Northeast",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/rock-cut-heritage-unakoti-2-attr-hero?qlt=82&ts=1751459946526",
    description: "Ancient Saivite pilgrimage site featuring massive rock-cut carvings of Shiva, Ganesha, and other deities in a lush forest setting.",
    coordinates: { lat: 24.3167, lng: 92.0667 },
    essentials: {
      bestTime: "Winter Months",
      weather: "Humid/Forest",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agartala (180 km)", nearestRailway: "Kumarghat (20 km)", busConnectivity: "Taxi from Kailashahar" },
    externalLinks: { officialBooking: "https://unakoti.nic.in/", googleMaps: "https://goo.gl/maps/unakoti" },
    accessibility: { wheelchairFriendly: false, notes: "Steep stone steps to reach carvings." },
    routePlan: [
      { time: "08:00 AM", activity: "Trek to Unakotiswara Kal Bhairava" },
      { time: "11:00 AM", activity: "Photography near Waterfall" }
    ],
    foodGuide: [{ name: "Unakoti Cafeteria", specialty: "Tea & Snacks", rating: 3.5 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Kailashahar District Hospital" }
  },
  {
    id: 2604,
    name: "Tripura Sundari Temple",
    slug: "tripura-sundari-temple-udaipur",
    cityState: "Udaipur, Tripura",
    category: "Spiritual",
    badge: "51 Shakti Peeth",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/tripura-sundari-temple-agartala-tripura-2-attr-hero?qlt=82&ts=1726651006473 ",
    description: "One of the most sacred Shakti Peethas in India, dedicated to Goddess Tripureshwari. The temple is famous for its Kurma (tortoise) shape.",
    coordinates: { lat: 23.5134, lng: 91.4984 },
    essentials: {
      bestTime: "Diwali (Grand Fair)",
      weather: "Warm",
      timings: "06:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agartala (55 km)", nearestRailway: "Udaipur Tripura (3 km)", busConnectivity: "Frequent from Agartala" },
    externalLinks: { officialBooking: "https://gomati.nic.in/", googleMaps: "https://goo.gl/maps/tripurasundari" },
    accessibility: { wheelchairFriendly: true, notes: "Paved compound area." },
    routePlan: [
      { time: "07:00 AM", activity: "Temple Darshan" },
      { time: "09:00 AM", activity: "Feed fish in Kalyan Sagar" }
    ],
    foodGuide: [{ name: "Matabari Peda", specialty: "Milk Peda", rating: 5.0 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Gomati District Hospital" }
  },
  {
    id: 2605,
    name: "Sepahijala Wildlife Sanctuary",
    slug: "sepahijala-wildlife-sanctuary",
    cityState: "Sepahijala, Tripura",
    category: "Wildlife",
    badge: "Home of Clouded Leopard",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/sepahijala-wildlife-sanctuary-agartala-tripura-2-attr-hero-new?qlt=82&ts=1726651108966 ",
    description: "Biodiversity park featuring a zoo, botanical garden, and the famous Spectacled Monkey. Ideal for families and birdwatchers.",
    coordinates: { lat: 23.6552, lng: 91.3323 },
    essentials: {
      bestTime: "October to March",
      weather: "Forest",
      timings: "09:00 AM - 04:00 PM (Closed Friday)",
      entryFee: { Entry: "₹20", Camera: "₹50" }
    },
    transport: { nearestAirport: "Agartala (25 km)", nearestRailway: "Bishalgarh (10 km)", busConnectivity: "Highway Buses" },
    externalLinks: { officialBooking: "https://forest.tripura.gov.in/", googleMaps: "https://goo.gl/maps/sepahijala" },
    accessibility: { wheelchairFriendly: true, notes: "Paved zoo pathways." },
    routePlan: [
      { time: "10:00 AM", activity: "Zoo Tour" },
      { time: "12:30 PM", activity: "Boating in Amrit Sagar" }
    ],
    foodGuide: [{ name: "Abasar Cafeteria", specialty: "Tea & Coffee", rating: 3.5 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Bishalgarh Hospital" }
  },
  {
    id: 2606,
    name: "Chabimura (Devtamura)",
    slug: "chabimura-rock-carvings-amarpur",
    cityState: "Amarpur, Tripura",
    category: "Nature",
    badge: "Amazon of Tripura",
    image: " https://upload.wikimedia.org/wikipedia/commons/a/aa/2%29Chabimura%2C_the_archaeological_site_at_Devtamura.jpg ",
    description: "Giant rock carvings on the hills overlooking Gomati River. Only accessible via a boat ride through narrow river gorges.",
    coordinates: { lat: 23.4167, lng: 91.7333 },
    essentials: {
      bestTime: "September to February",
      weather: "River/Forest",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "Free", Boat: "₹1500 (Reserved)" }
    },
    transport: { nearestAirport: "Agartala (80 km)", nearestRailway: "Udaipur (30 km)", busConnectivity: "Taxi from Amarpur" },
    externalLinks: { officialBooking: "https://tripuratourism.gov.in/", googleMaps: "https://goo.gl/maps/chabimura" },
    accessibility: { wheelchairFriendly: false, notes: "Uneven terrain at the boat jetty." },
    routePlan: [
      { time: "10:00 AM", activity: "Scenic Boat Ride" },
      { time: "11:30 AM", activity: "Photography of Ma Durga Carving" }
    ],
    foodGuide: [{ name: "Local Amarpur Stalls", specialty: "Bengali Thali", rating: 3.9 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Amarpur Hospital" }
  },
  {
    id: 2607,
    name: "Jampui Hills",
    slug: "jampui-hills-kanchanpur",
    cityState: "Kanchanpur, Tripura",
    category: "Nature",
    badge: "Highest Peak in Tripura",
    image: " https://static2.tripoto.com/media/filter/tst/img/1422657/TripDocument/1551439466_1551439463943.jpg ",
    description: "Famous for orange orchards and Betlingchhip Peak. Offers misty views of the Chittagong hills and cool climate year-round.",
    coordinates: { lat: 23.9722, lng: 92.2775 },
    essentials: {
      bestTime: "November (Orange Festival)",
      weather: "Cold/Misty",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agartala (200 km)", nearestRailway: "Dharmanagar (70 km)", busConnectivity: "Shared Jeeps from Kanchanpur" },
    externalLinks: { officialBooking: "https://tripuratourism.gov.in/", googleMaps: "https://goo.gl/maps/jampui" },
    accessibility: { wheelchairFriendly: false, notes: "Hilly roads and slopes." },
    routePlan: [
      { time: "06:00 AM", activity: "Sunrise at Betlingchhip" },
      { time: "11:00 AM", activity: "Mizo Village Walk" }
    ],
    foodGuide: [{ name: "Eden Tourist Lodge", specialty: "Tribal Cuisine", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Kanchanpur Hospital" }
  },
  {
    id: 2608,
    name: "Dumboor Lake",
    slug: "dumboor-lake-gandacherra",
    cityState: "Gandacherra, Tripura",
    category: "Nature",
    badge: "Lake of 48 Islands",
    image: " https://www.incredible-northeastindia.com/images/tripura-head.jpg ",
    description: "A huge water body where the rivers Raima and Sarma meet. Known for its 48 green islands and the Pous Sankranti Mela.",
    coordinates: { lat: 23.4133, lng: 91.8233 },
    essentials: {
      bestTime: "October to March",
      weather: "Breezy",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "Free", Boating: "₹200-500" }
    },
    transport: { nearestAirport: "Agartala (120 km)", nearestRailway: "Udaipur (75 km)", busConnectivity: "Taxi from Gandacherra" },
    externalLinks: { officialBooking: "https://tripuratourism.gov.in/", googleMaps: "https://goo.gl/maps/dumboor" },
    accessibility: { wheelchairFriendly: false, notes: "Remote location, limited access." },
    routePlan: [
      { time: "10:00 AM", activity: "Island Hopping by Boat" },
      { time: "02:00 PM", activity: "Picnic at Narkel Kunja" }
    ],
    foodGuide: [{ name: "Local Island Canteens", specialty: "Fried Fish", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Gandacherra Hospital" }
  },
  {
    id: 2609,
    name: "Pilak Archaeological Site",
    slug: "pilak-archaeology-belonia",
    cityState: "Belonia, Tripura",
    category: "Heritage",
    badge: "Hidden Buddhist-Hindu Ruins",
    image: " https://etimg.etb2bimg.com/photo/102251241.cms ",
    description: "Dating back to the 8th century, this site is rich in Buddhist and Hindu stone carvings and terracotta plaques.",
    coordinates: { lat: 23.2754, lng: 91.4589 },
    essentials: {
      bestTime: "October to March",
      weather: "Rural/Warm",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agartala (100 km)", nearestRailway: "Belonia (15 km)", busConnectivity: "Buses from Agartala to Jolaibari" },
    externalLinks: { officialBooking: "https://southtripura.nic.in/", googleMaps: "https://goo.gl/maps/pilak" },
    accessibility: { wheelchairFriendly: true, notes: "Flat site with walking paths." },
    routePlan: [
      { time: "10:00 AM", activity: "Archaeological Park Tour" },
      { time: "01:00 PM", activity: "Visit Shyam Sundar Ashram" }
    ],
    foodGuide: [{ name: "Local Jolaibari Cafes", specialty: "Indian Thali", rating: 3.7 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Belonia Hospital" }
  },
  {
    id: 2610,
    name: "Chaturdasha Devta Temple",
    slug: "chaturdasha-temple-agartala",
    cityState: "Old Agartala, Tripura",
    category: "Spiritual",
    badge: "Temple of 14 Gods",
    image: " https://upload.wikimedia.org/wikipedia/commons/5/57/Temple_of_14_gods-Tripura.jpg ",
    description: "Famous for the Kharchi Festival, this temple houses the 14 deities of the royal dynasty and is built in typical Bengali Chala style.",
    coordinates: { lat: 23.8566, lng: 91.3323 },
    essentials: {
      bestTime: "July (Kharchi Festival)",
      weather: "City",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "MBB Airport (15 km)", nearestRailway: "Agartala (10 km)", busConnectivity: "Frequent Autos" },
    externalLinks: { officialBooking: "https://westtripura.nic.in/", googleMaps: "https://goo.gl/maps/chaturdasha" },
    accessibility: { wheelchairFriendly: true, notes: "Main courtyard is accessible." },
    routePlan: [
      { time: "09:00 AM", activity: "Morning Prayers" },
      { time: "11:00 AM", activity: "Explore Old Agartala ruins" }
    ],
    foodGuide: [{ name: "Local Sweets", specialty: "Kheer", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "GBP Hospital" }
  },
  {
    id: 2611,
    name: "Baramura Eco Park",
    slug: "baramura-eco-park-khumulwng",
    cityState: "Teliamura, Tripura",
    category: "Nature",
    badge: "Hilltop Green Retreat",
    image: " https://tripuratourism.gov.in/images/tour/1661756009/86.jpg ",
    description: "Situated in the Baramura hill range, this park features a dense canopy of trees, a small lake, and scenic views of the valleys.",
    coordinates: { lat: 23.8447, lng: 91.5644 },
    essentials: {
      bestTime: "October to February",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹10" }
    },
    transport: { nearestAirport: "Agartala (40 km)", nearestRailway: "Teliamura (10 km)", busConnectivity: "On Agartala-Assam road" },
    externalLinks: { officialBooking: "https://forest.tripura.gov.in/", googleMaps: "https://goo.gl/maps/baramura" },
    accessibility: { wheelchairFriendly: false, notes: "Undulating pathways." },
    routePlan: [
      { time: "10:30 AM", activity: "Nature Walk" },
      { time: "12:30 PM", activity: "Picnic by Lake" }
    ],
    foodGuide: [{ name: "Eco Park Canteen", specialty: "Tea & Pakora", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Teliamura Hospital" }
  },
  {
    id: 2612,
    name: "Venuban Vihar",
    slug: "venuban-vihar-agartala",
    cityState: "Agartala, Tripura",
    category: "Spiritual",
    badge: "Peaceful Buddhist Monastery",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/50/17/8d/venuban-vihar-buddha.jpg?w=1200&h=1200&s=1 ",
    description: "A small but significant Buddhist shrine in Kunjaban, known for its tranquil atmosphere and metal idol of Lord Buddha from Burma.",
    coordinates: { lat: 23.8583, lng: 91.2889 },
    essentials: {
      bestTime: "Buddha Purnima",
      timings: "07:00 AM - 07:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agartala (8 km)", nearestRailway: "Agartala (6 km)", busConnectivity: "Within City Limits" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/venuban" },
    accessibility: { wheelchairFriendly: true, notes: "Flat entrance." },
    routePlan: [
      { time: "05:00 PM", activity: "Evening Meditation" },
      { time: "06:00 PM", activity: "Walk in Kunjaban Park" }
    ],
    foodGuide: [{ name: "City Restaurants", specialty: "Continental", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "GBP Hospital" }
  },
  {
    id: 2613,
    name: "Kamalasagar (Kasba Kali Bari)",
    slug: "kasba-kali-temple-bishalgarh",
    cityState: "Kamalasagar, Tripura",
    category: "Spiritual",
    badge: "Border Temple & Lake",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/kamalasagar-agartala-tripura-1-attr-hero?qlt=82&ts=1726651124405",
    description: "Located right on the India-Bangladesh border, this 15th-century Kali temple overlooks a large man-made lake.",
    coordinates: { lat: 23.7644, lng: 91.1897 },
    essentials: {
      bestTime: "Sundays (Border Haat days)",
      timings: "07:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agartala (30 km)", nearestRailway: "Agartala (30 km)", busConnectivity: "Taxi/Auto from Agartala" },
    externalLinks: { officialBooking: "https://tripuratourism.gov.in/", googleMaps: "https://goo.gl/maps/kasba" },
    accessibility: { wheelchairFriendly: true, notes: "Lake promenade is flat." },
    routePlan: [
      { time: "09:00 AM", activity: "Darshan" },
      { time: "11:00 AM", activity: "Watch Bangladesh Border Fencing" }
    ],
    foodGuide: [{ name: "Comilla View Lodge", specialty: "Fish Cutlet", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Bishalgarh Hospital" }
  },
  {
    id: 2614,
    name: "Trishna Wildlife Sanctuary",
    slug: "trishna-wildlife-sanctuary-belonia",
    cityState: "Belonia, Tripura",
    category: "Wildlife",
    badge: "Sanctuary for Indian Bison",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ec/46/49/trishna-wildlife-sanctuary.jpg?w=900&h=500&s=1 ",
    description: "Famous for the Indian Gaur (Bison) and diverse birdlife. It also houses a few archaeological ruins and water bodies.",
    coordinates: { lat: 23.2333, lng: 91.4167 },
    essentials: {
      bestTime: "December to February",
      timings: "09:00 AM - 05:00 PM (Closed Tuesday)",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestAirport: "Agartala (100 km)", nearestRailway: "Belonia (18 km)", busConnectivity: "Direct buses to Belonia" },
    externalLinks: { officialBooking: "https://southtripura.nic.in/", googleMaps: "https://goo.gl/maps/trishna" },
    accessibility: { wheelchairFriendly: false, notes: "Requires assistance for safari vehicles." },
    routePlan: [
      { time: "07:00 AM", activity: "Early Safari" },
      { time: "10:00 AM", activity: "Bird Watching at Waterholes" }
    ],
    foodGuide: [{ name: "Forest Rest House", specialty: "Local Veg Meals", rating: 3.9 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Belonia Sub-divisional Hospital" }
  },
  {
    id: 2615,
    name: "Bhubaneswari Temple",
    slug: "bhubaneswari-temple-udaipur",
    cityState: "Udaipur, Tripura",
    category: "Heritage",
    badge: "Immortalized by Tagore",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Jqise7221Xm-DjQCcMlAntU5q19v3dIGEg&s ",
    description: "Immortalized in Rabindranath Tagore's plays 'Rajarshi' and 'Bisharjan', this temple stands on the banks of the Gomati River.",
    coordinates: { lat: 23.5133, lng: 91.4984 },
    essentials: {
      bestTime: "Winter Evenings",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agartala (55 km)", nearestRailway: "Udaipur (5 km)", busConnectivity: "Near Tripura Sundari Temple" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/bhubaneswari" },
    accessibility: { wheelchairFriendly: true, notes: "Steps at the entrance, courtyard flat." },
    routePlan: [
      { time: "04:00 PM", activity: "Temple Visit" },
      { time: "05:00 PM", activity: "Sunset walk by Gomati" }
    ],
    foodGuide: [{ name: "Gunabati Yatri Niwas", specialty: "Bengali Thali", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Gomati Hospital" }
  },
  {
    id: 2616,
    name: "Heritage Park",
    slug: "heritage-park-agartala",
    cityState: "Agartala, Tripura",
    category: "Leisure",
    badge: "Miniature Tripura",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/13/86/19/caption.jpg?w=1200&h=-1&s=1 ",
    description: "A beautifully landscaped park showcasing miniature replicas of Neermahal, Unakoti, and tribal cultures of the state.",
    coordinates: { lat: 23.8566, lng: 91.2908 },
    essentials: {
      bestTime: "Evenings",
      timings: "10:00 AM - 07:00 PM (Closed Tuesday)",
      entryFee: { Adult: "₹20" }
    },
    transport: { nearestAirport: "Agartala (8 km)", nearestRailway: "Agartala (6 km)", busConnectivity: "Kunjaban area autos" },
    externalLinks: { officialBooking: "https://tripuratourism.gov.in/", googleMaps: "https://goo.gl/maps/heritage" },
    accessibility: { wheelchairFriendly: true, notes: "Paved walking tracks." },
    routePlan: [
      { time: "04:00 PM", activity: "Miniature Monument Walk" },
      { time: "06:00 PM", activity: "Tribal Hut Visit" }
    ],
    foodGuide: [{ name: "Park Snack Bar", specialty: "Momos", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "GBP Hospital" }
  },
  {
    id: 2617,
    name: "Buddhist Stupa (Boxanagar)",
    slug: "boxanagar-buddhist-stupa",
    cityState: "Boxanagar, Tripura",
    category: "Heritage",
    badge: "Brick-Built Buddhist Site",
    image: " https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/6%29The_ruins_of_Buddhist_Temple_at_Boxanagar%2Cnear_Sonamura%2C_40_kms_west_to_the_capital_city_Agartala%2CTripura.jpg/1200px-6%29The_ruins_of_Buddhist_Temple_at_Boxanagar%2Cnear_Sonamura%2C_40_kms_west_to_the_capital_city_Agartala%2CTripura.jpg",
    description: "Archaeological ruins of a large Buddhist monastery and stupa made of baked bricks, indicating Tripura's ancient Buddhist links.",
    coordinates: { lat: 23.6333, lng: 91.1667 },
    essentials: {
      bestTime: "November to February",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agartala (40 km)", nearestRailway: "Agartala (40 km)", busConnectivity: "Taxi from Bishalgarh" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/boxanagar" },
    accessibility: { wheelchairFriendly: false, notes: "Uneven excavation site." },
    routePlan: [
      { time: "10:00 AM", activity: "Stupa Site Visit" },
      { time: "12:00 PM", activity: "Photography of ancient brickwork" }
    ],
    foodGuide: [{ name: "Local Boxanagar Market", specialty: "Tea & Samosas", rating: 3.5 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Boxanagar PHC" }
  },
  {
    id: 2618,
    name: "Gedu Mia Maszid",
    slug: "gedu-mia-maszid-agartala",
    cityState: "Agartala, Tripura",
    category: "Spiritual",
    badge: "Architectural Pride",
    image: " https://vushii.com/uploads/1325448373_Gedu%20Mian's%20Mosque,%20West%20Tripura4.jpg ",
    description: "The biggest mosque in Tripura, built with marble and featuring intricate architecture. It is a symbol of communal harmony.",
    coordinates: { lat: 23.8314, lng: 91.2867 },
    essentials: {
      bestTime: "All Year (Eid)",
      timings: "05:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Agartala (12 km)", nearestRailway: "Agartala (5 km)", busConnectivity: "Shibnagar area autos" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/gedumia" },
    accessibility: { wheelchairFriendly: true, notes: "Ground area is flat." },
    routePlan: [
      { time: "10:00 AM", activity: "Mosque Tour" },
      { time: "11:30 AM", activity: "Agartala Market Visit" }
    ],
    foodGuide: [{ name: "Bismillah Hotel", specialty: "Biryani", rating: 4.2 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "GBP Hospital" }
  },
  {
    id: 2619,
    name: "Butterfly Park (Rajbari)",
    slug: "butterfly-park-udaipur",
    cityState: "Udaipur, Tripura",
    category: "Nature",
    badge: "First in Northeast",
    image: " https://images.news18.com/ibnkhabar/uploads/2023/02/New-Project-47-16755155763x2.jpg?im=FitAndFill,width=1200,height=675 ",
    description: "A specialized park near the Trishna sanctuary focused on breeding and conserving dozens of species of butterflies.",
    coordinates: { lat: 23.2334, lng: 91.4168 },
    essentials: {
      bestTime: "August to December",
      timings: "09:00 AM - 04:30 PM",
      entryFee: { Entry: "₹10" }
    },
    transport: { nearestAirport: "Agartala (100 km)", nearestRailway: "Udaipur (45 km)", busConnectivity: "Taxi from Udaipur" },
    externalLinks: { officialBooking: "https://forest.tripura.gov.in/", googleMaps: "https://goo.gl/maps/butterfly" },
    accessibility: { wheelchairFriendly: true, notes: "Well-maintained park paths." },
    routePlan: [
      { time: "10:00 AM", activity: "Butterfly Spotting" },
      { time: "01:00 PM", activity: "Picnic at Nearby Forest" }
    ],
    foodGuide: [{ name: "Local Stalls", specialty: "Snacks", rating: 3.6 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "Belonia Hospital" }
  },
  {
    id: 2620,
    name: "Kunjaban Palace",
    slug: "kunjaban-palace-agartala",
    cityState: "Agartala, Tripura",
    category: "Heritage",
    badge: "Governor's Residence",
    image: " https://farm6.staticflickr.com/5470/13900546728_74ef6c7a4f_z.jpg ",
    description: "Known as 'Pushbanta Palace', it was a guest house for the royals and hosted Rabindranath Tagore multiple times. Now the Raj Bhavan.",
    coordinates: { lat: 23.8580, lng: 91.2885 },
    essentials: {
      bestTime: "October to March",
      timings: "Limited Access (Check locally)",
      entryFee: { Entry: "N/A" }
    },
    transport: { nearestAirport: "Agartala (8 km)", nearestRailway: "Agartala (6 km)", busConnectivity: "Within City Limits" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/kunjaban" },
    accessibility: { wheelchairFriendly: true, notes: "Exterior gardens accessible." },
    routePlan: [
      { time: "03:00 PM", activity: "Garden Tour" },
      { time: "04:30 PM", activity: "Rabindra Kanan Visit" }
    ],
    foodGuide: [{ name: "Ginger Hotel Cafe", specialty: "Indian", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "0381-2325930", hospital: "GBP Hospital" }
  }
];
