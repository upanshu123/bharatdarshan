
/**
/**
 * ARUNACHAL_PRADESH_PLACES DATASET (EXTENDED - 20 PLACES)
 * ------------------------------------------------------------------
 * Sources: Arunachal Tourism & Dept of Forests
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const ARUNACHAL_PRADESH_PLACES = [
  {
    id: 301,
    name: "Tawang Monastery",
    slug: "tawang-monastery",
    state: "Tawang, Arunachal Pradesh",
    category: "Spiritual",
    badge: "Largest Monastery in India",
    image: "https://static.toiimg.com/photo/105076947.cms",
    description: "Founded in 1680, this is the second-largest monastery in the world after Lhasa. Perched at 10,000 feet, it houses a 28-foot high Golden Buddha and vast library of ancient scriptures.",
    coordinates: { lat: 27.5862, lng: 91.8664 },
    essentials: {
      bestTime: "March to June, Sept to Oct",
      weather: "Cold/Alpine",
      timings: "07:00 AM - 07:00 PM",
      entryFee: { Entry: "Free", Museum: "₹20", Permit: "ILP Required" }
    },
    transport: { nearestAirport: "Tezpur (320 km)", nearestRailway: "Tezpur (320 km)", busConnectivity: "Shared Sumos from Guwahati/Tezpur" },
    externalLinks: { officialBooking: "https://arunachaltourism.com/", googleMaps: "https://goo.gl/maps/tawang" },
    accessibility: { wheelchairFriendly: false, notes: "Steep steps to main prayer hall." },
    routePlan: [ { time: "08:00 AM", activity: "Morning Prayer" }, { time: "10:00 AM", activity: "Museum Visit" } ],
    foodGuide: [ { name: "Dragon Restaurant", type: "Local", specialty: "Thukpa & Momos", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Tawang" }
  },
  {
    id: 302,
    name: "Bomdila Monastery",
    slug: "bomdila-monastery",
    state: "Bomdila, Arunachal Pradesh",
    category: "Spiritual",
    badge: "GRL Monastery",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ca/48/04/well-designed-monestery.jpg?w=1200&h=-1&s=1",
    description: "A prominent centre of the Mahayana school of Buddhism. The monastery offers panoramic views of the Himalayan landscape and apple orchards of the West Kameng district.",
    coordinates: { lat: 27.2645, lng: 92.4159 },
    essentials: {
      bestTime: "April to October",
      weather: "Cool/Pleasant",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Tezpur (150 km)", busConnectivity: "Direct sumos from Tezpur" },
    externalLinks: { officialBooking: "https://arunachaltourism.com/", googleMaps: "https://goo.gl/maps/bomdila" },
    accessibility: { wheelchairFriendly: true, notes: "Main courtyard is accessible by car." },
    routePlan: [ { time: "09:00 AM", activity: "Visit Upper Gompa" } ],
    foodGuide: [ { name: "Sikim Restaurant", type: "Budget", specialty: "Pork Ribs", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Bomdila" }
  },
  {
    id: 303,
    name: "Sela Pass",
    slug: "sela-pass",
    state: "Tawang, Arunachal Pradesh",
    category: "Nature",
    badge: "Gateway to Tawang",
    image: "https://arunachaltourism.com/wp-content/uploads/2021/07/sela-pass.jpg",
    description: "Located at 13,700 feet, Sela Pass connects Tawang to the rest of India. It is famous for the frozen Sela Lake and snow-covered landscapes almost year-round.",
    coordinates: { lat: 27.5033, lng: 92.1039 },
    essentials: {
      bestTime: "March to May, Oct to Nov",
      weather: "Freezing/Snow",
      timings: "Daylight Hours Only",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Tezpur (240 km)", busConnectivity: "Stopover on Bomdila-Tawang route" },
    externalLinks: { googleMaps: "https://goo.gl/maps/selapass" },
    accessibility: { wheelchairFriendly: false, notes: "High altitude, rough terrain." },
    routePlan: [ { time: "10:30 AM", activity: "Walk near Sela Lake" } ],
    foodGuide: [ { name: "Army Canteen", type: "Cafe", specialty: "Hot Maggi & Tea", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Army Medical Center" }
  },
  {
    id: 304,
    name: "Ziro Valley",
    slug: "ziro-valley",
    state: "Ziro, Arunachal Pradesh",
    category: "Nature",
    badge: "UNESCO Tentative List",
    image: "https://tripandtales.com/wp-content/uploads/2025/05/Ziro-Valley.jpg",
    description: "Home to the Apatani tribe, Ziro is famous for its unique paddy-cum-fish cultivation and the annual Ziro Music Festival. The valley is a lush green landscape of pine hills.",
    coordinates: { lat: 27.6186, lng: 93.8329 },
    essentials: {
      bestTime: "March to October",
      weather: "Mild/Pleasant",
      timings: "Village Visits: 8 AM - 5 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Naharlagun (100 km)", busConnectivity: "Tata Sumo from Itanagar" },
    externalLinks: { officialBooking: "https://zirofestival.com/", googleMaps: "https://goo.gl/maps/ziro" },
    accessibility: { wheelchairFriendly: false, notes: "Village paths are uneven." },
    routePlan: [ { time: "09:00 AM", activity: "Hong Village Walk" } ],
    foodGuide: [ { name: "A&C Kitchen", type: "Local", specialty: "Smoked Meat", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Gyati Takka Hospital" }
  },
  {
    id: 305,
    name: "Namdapha National Park",
    slug: "namdapha-national-park",
    state: "Miao, Arunachal Pradesh",
    category: "Wildlife",
    badge: "Biodiversity Hotspot",
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/01/04131348/shutterstock_1325065313-1558x900.jpg",
    description: "India's easternmost tiger reserve. It is the only park in the world to harbour four feline species: Tiger, Leopard, Snow Leopard, and Clouded Leopard.",
    coordinates: { lat: 27.4933, lng: 96.3860 },
    essentials: {
      bestTime: "November to March",
      weather: "Humid/Sub-tropical",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Indian: "₹50", ForestPermit: "Required" }
    },
    transport: { nearestAirport: "Dibrugarh (160 km)", busConnectivity: "Buses to Miao from Tinsukia" },
    externalLinks: { officialBooking: "https://namdaphatigerreserve.org/", googleMaps: "https://goo.gl/maps/namdapha" },
    accessibility: { wheelchairFriendly: false, notes: "Trekking destination only." },
    routePlan: [ { time: "09:00 AM", activity: "Deban Forest Camp" } ],
    foodGuide: [ { name: "Namdapha Jungle Camp", type: "Lodge", specialty: "Assamese Meals", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Miao" }
  },
  {
    id: 306,
    name: "Mechuka Valley",
    slug: "mechuka-valley",
    state: "Mechuka, Arunachal Pradesh",
    category: "Hill Stations",
    badge: "Switzerland of the East",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/dzogchen-samtan-choeling-monastery-mechuka-arunachal-pradesh-1-attr-hero?qlt=82&ts=1726743039979",
    description: "A stunning valley near the Indo-China border, known for its medicinal hot springs, the 400-year-old Samten Yongcha Monastery, and the Yargyap Chu river.",
    coordinates: { lat: 28.5979, lng: 94.1306 },
    essentials: {
      bestTime: "October to April",
      weather: "Cold/Windy",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Silapathar (330 km)", busConnectivity: "Shared Sumos from Aalo" },
    externalLinks: { googleMaps: "https://goo.gl/maps/mechuka" },
    accessibility: { wheelchairFriendly: false, notes: "Remote location, grassy terrain." },
    routePlan: [ { time: "08:00 AM", activity: "Samten Yongcha Monastery" } ],
    foodGuide: [ { name: "Gayboo Homestay", type: "Local", specialty: "Millet Wine", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Mechuka" }
  },
  {
    id: 307,
    name: "Pasighat",
    slug: "pasighat",
    state: "Pasighat, Arunachal Pradesh",
    category: "Nature",
    badge: "Oldest Town",
    image: "https://www.esikkimtourism.in/wp-content/uploads/2024/12/Arunachal-Pradesh-Pasighat.jpg",
    description: "Located on the banks of the mighty Siang River, Pasighat is the gateway to the Abor Hills and a hub for white water rafting adventures.",
    coordinates: { lat: 28.0619, lng: 95.3260 },
    essentials: {
      bestTime: "October to April",
      weather: "Tropical",
      timings: "24 Hours",
      entryFee: { Rafting: "₹1500-3000" }
    },
    transport: { nearestAirport: "Pasighat Airport (IXT)", busConnectivity: "Connected to Itanagar" },
    externalLinks: { googleMaps: "https://goo.gl/maps/pasighat" },
    accessibility: { wheelchairFriendly: true, notes: "Town area is accessible." },
    routePlan: [ { time: "12:00 PM", activity: "Siang River Bank Picnic" } ],
    foodGuide: [ { name: "Sirang Hub", type: "Family", specialty: "Fish Curry", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "General Hospital" }
  },
  {
    id: 308,
    name: "Itanagar (Ita Fort)",
    slug: "itanagar-ita-fort",
    state: "Itanagar, Arunachal Pradesh",
    category: "Heritage",
    badge: "Fort of Bricks",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNp3zAHjpj_Qq3AdbsvZOViPpOGQq_evvdA&s",
    description: "The capital city is named after the Ita Fort (Fort of Bricks), built in the 14th century. It also houses the stunning Ganga Lake and the Nehru State Museum.",
    coordinates: { lat: 27.0844, lng: 93.6053 },
    essentials: {
      bestTime: "October to April",
      weather: "Pleasant",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Fort: "₹20", Museum: "₹10" }
    },
    transport: { nearestAirport: "Hollongi (25 km)", busConnectivity: "Luxury buses from Guwahati" },
    externalLinks: { googleMaps: "https://goo.gl/maps/itanagar" },
    accessibility: { wheelchairFriendly: true, notes: "Museum is partially accessible." },
    routePlan: [ { time: "10:00 AM", activity: "Nehru State Museum" } ],
    foodGuide: [ { name: "Poong Nest", type: "Local", specialty: "Bamboo Shoot Fry", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "RK Mission Hospital" }
  },
  {
    id: 309,
    name: "Dirang",
    slug: "dirang",
    state: "Dirang, Arunachal Pradesh",
    category: "Hill Stations",
    badge: "Hot Water Springs",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/03/db/69/thupsung-dhargye-ling.jpg?w=600&h=-1&s=1",
    description: "A picturesque stopover known for its medicinal hot water springs, apple orchards, and the historic Dirang Dzong (fort).",
    coordinates: { lat: 27.3592, lng: 92.2467 },
    essentials: {
      bestTime: "March to October",
      weather: "Mild",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Bhalukpong (135 km)", busConnectivity: "Shared taxis from Bomdila" },
    externalLinks: { googleMaps: "https://goo.gl/maps/dirang" },
    accessibility: { wheelchairFriendly: false, notes: "Access to springs involves stairs." },
    routePlan: [ { time: "08:00 AM", activity: "Dip in Hot Springs" } ],
    foodGuide: [ { name: "Hotel Pemaling", type: "Hotel", specialty: "Local Thali", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Dirang" }
  },
  {
    id: 310,
    name: "Pakke Tiger Reserve",
    slug: "pakke-tiger-reserve",
    state: "Seijosa, Arunachal Pradesh",
    category: "Wildlife",
    badge: "Hornbill Haven",
    image: "https://cdn.thewire.in/wp-content/uploads/2020/02/26105407/Tiger-Pakke-Tiger-Reserve.jpg",
    description: "Known for successful community-based conservation, Pakke is a haven for hornbills and tigers, offering amazing birdwatching and jeep safaris.",
    coordinates: { lat: 26.9634, lng: 92.8647 },
    essentials: {
      bestTime: "November to April",
      weather: "Sub-tropical",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Entry: "₹50", Jeep: "₹1500+" }
    },
    transport: { nearestAirport: "Tezpur (50 km)", busConnectivity: "Via Seijosa from Assam border" },
    externalLinks: { officialBooking: "https://pakketigerreserve.org/", googleMaps: "https://goo.gl/maps/pakke" },
    accessibility: { wheelchairFriendly: false, notes: "Jungle terrain." },
    routePlan: [ { time: "06:00 AM", activity: "Hornbill Watching" } ],
    foodGuide: [ { name: "Jungle Camp", type: "Lodge", specialty: "Homestyle Meals", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Seijosa" }
  },
  {
    id: 311,
    name: "Golden Pagoda",
    slug: "golden-pagoda-namsai",
    state: "Namsai, Arunachal Pradesh",
    category: "Spiritual",
    badge: "Burmese Style Architecture",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Golden_Pagoda_Namsai.jpg",
    description: "A magnificent Burmese-style Buddhist temple situated on the banks of the Teang River. Famous for its landscaped eco-tourism complex.",
    coordinates: { lat: 27.6690, lng: 95.8660 },
    essentials: {
      bestTime: "October to April",
      weather: "Tropical",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dibrugarh (120 km)", busConnectivity: "Road from Tinsukia, Assam" },
    externalLinks: { googleMaps: "https://goo.gl/maps/namsai" },
    accessibility: { wheelchairFriendly: true, notes: "Flat terrain within complex." },
    routePlan: [ { time: "06:30 PM", activity: "Night Illumination View" } ],
    foodGuide: [ { name: "Namsai Resort", type: "Resort", specialty: "Tai-Khamti Cuisine", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital Namsai" }
  },
  {
    id: 312,
    name: "Malinithan Ruins",
    slug: "malinithan",
    state: "Likabali, Arunachal Pradesh",
    category: "Heritage",
    badge: "Archaeological Site",
    image: "https://www.pilgrimaide.com/image/cache/catalog/Blogs/Malinithan%20temple,%20Akashganga%20Temple-600x315h.jpg",
    description: "An archaeological site featuring ruins of Hindu temples from the 13th century, associated with the legend of Krishna and Rukmini.",
    coordinates: { lat: 27.6582, lng: 94.6938 },
    essentials: {
      bestTime: "Nov to April",
      weather: "Warm",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Lilabari (60 km)", busConnectivity: "Silapathar border" },
    externalLinks: { googleMaps: "https://goo.gl/maps/malinithan" },
    accessibility: { wheelchairFriendly: true, notes: "Grounds are accessible." },
    routePlan: [ { time: "09:00 AM", activity: "Explore Temple Ruins" } ],
    foodGuide: [ { name: "Likabali Wayside", type: "Dhaba", specialty: "Roti Sabzi", rating: 3.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Likabali" }
  },
  {
    id: 313,
    name: "Nuranang Falls",
    slug: "nuranang-falls",
    state: "Jang, Arunachal Pradesh",
    category: "Nature",
    badge: "Jang Falls",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/03/d2/0f/nuranang-waterfalls.jpg?w=1200&h=-1&s=1",
    description: "A spectacular 100-meter high waterfall that gained fame from the movie 'Koyla'. It powers a local hydel plant.",
    coordinates: { lat: 27.5689, lng: 91.9702 },
    essentials: {
      bestTime: "April to October",
      weather: "Mist",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Tezpur (300 km)", busConnectivity: "On Bomdila-Tawang highway" },
    externalLinks: { googleMaps: "https://goo.gl/maps/jang" },
    accessibility: { wheelchairFriendly: false, notes: "Reaching base requires stairs." },
    routePlan: [ { time: "01:30 PM", activity: "Walk to base of falls" } ],
    foodGuide: [ { name: "Jang Eatery", type: "Dhaba", specialty: "Momos", rating: 3.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Jang" }
  },
  {
    id: 314,
    name: "Madhuri Lake",
    slug: "madhuri-lake",
    state: "Tawang, Arunachal Pradesh",
    category: "Nature",
    badge: "Sangetsar Tso",
    image: "https://static.toiimg.com/thumb/105334928/Madhuri-Lake.jpg?width=636&height=358&resize=4",
    description: "Formed by an earthquake in 1950, this high-altitude lake (15,200 ft) is famous for dead tree trunks standing in the water.",
    coordinates: { lat: 27.7547, lng: 91.8797 },
    essentials: {
      bestTime: "April to October",
      weather: "Freezing",
      timings: "08:00 AM - 02:00 PM",
      entryFee: { Permit: "Bumla Permit Required" }
    },
    transport: { nearestAirport: "Tezpur (350 km)", busConnectivity: "Hired SUVs from Tawang" },
    externalLinks: { googleMaps: "https://goo.gl/maps/sangetsar" },
    accessibility: { wheelchairFriendly: false, notes: "Remote, oxygen levels low." },
    routePlan: [ { time: "10:00 AM", activity: "Lake Walk" } ],
    foodGuide: [ { name: "Army Cafeteria", type: "Cafe", specialty: "Maggi & Coffee", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Army Medical Post" }
  },
  {
    id: 315,
    name: "Dong Valley",
    slug: "dong-valley",
    state: "Walong, Arunachal Pradesh",
    category: "Adventure",
    badge: "First Sunrise point of India",
    image: "https://ekaxp.in/wp-content/uploads/2023/03/Dong-Valley-Trek-15_Arunachal-Tour_Eka-Experiences.jpg",
    description: "The easternmost village where one can witness the first sunrise in India. It sits at the confluence of Lohit and Sati rivers.",
    coordinates: { lat: 28.0560, lng: 97.0426 },
    essentials: {
      bestTime: "April to July",
      weather: "Cold",
      timings: "Trek starts at 2:00 AM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Tinsukia (330 km)", busConnectivity: "Sumo to Walong" },
    externalLinks: { googleMaps: "https://goo.gl/maps/dong" },
    accessibility: { wheelchairFriendly: false, notes: "90-min steep trek in dark." },
    routePlan: [ { time: "04:30 AM", activity: "Witness Sunrise" } ],
    foodGuide: [ { name: "Walong IB", type: "Guest House", specialty: "Dal Rice", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Army Hospital Walong" }
  },
  {
    id: 316,
    name: "Mouling National Park",
    slug: "mouling-national-park",
    state: "Upper Siang, Arunachal Pradesh",
    category: "Wildlife",
    badge: "Red Panda Habitat",
    image: "https://tripxl.com/blog/wp-content/uploads/2024/08/Grasslands.jpg",
    description: "A remote biodiversity hotspot named after the Mouling peak, known for Red Pandas and Takins.",
    coordinates: { lat: 28.5667, lng: 94.8833 },
    essentials: {
      bestTime: "Nov to April",
      weather: "Humid",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "₹50" }
    },
    transport: { nearestAirport: "Pasighat (180 km)", busConnectivity: "Via Yingkiong by Sumo" },
    externalLinks: { googleMaps: "https://goo.gl/maps/mouling" },
    accessibility: { wheelchairFriendly: false, notes: "Extremely remote, trekking required." },
    routePlan: [ { time: "12:00 PM", activity: "Wildlife Spotting" } ],
    foodGuide: [ { name: "Yingkiong CH", type: "Guest House", specialty: "Indian", rating: 3.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital" }
  },
  {
    id: 317,
    name: "Anini",
    slug: "anini",
    state: "Dibang Valley, Arunachal Pradesh",
    category: "Adventure",
    badge: "Clouds End",
    image: "https://oddessemania.in/wp-content/uploads/2025/02/WhatsApp-Image-2025-04-19-at-5.43.28-PM-1-1080x540.jpeg",
    description: "The HQ of Dibang Valley, Anini is an unexplored paradise known for the Seven Lakes Trek.",
    coordinates: { lat: 28.7990, lng: 95.9015 },
    essentials: {
      bestTime: "Nov to March",
      weather: "Cold",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dibrugarh (350 km)", busConnectivity: "Sumo from Roing" },
    externalLinks: { googleMaps: "https://goo.gl/maps/anini" },
    accessibility: { wheelchairFriendly: false, notes: "Remote, basic infrastructure." },
    routePlan: [ { time: "12:00 PM", activity: "Dri River Picnic" } ],
    foodGuide: [ { name: "Mishmi Homestay", type: "Homestay", specialty: "Dried Pork", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital" }
  },
  {
    id: 318,
    name: "Mayodia Pass",
    slug: "mayodia-pass",
    state: "Roing, Arunachal Pradesh",
    category: "Nature",
    badge: "Snow Point",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1c/34/75/07/mayodia-pass-is-located.jpg",
    description: "Roing is a land of valleys; nearby Mayodia Pass is famous for heavy snowfall in winter.",
    coordinates: { lat: 28.1396, lng: 95.8362 },
    essentials: {
      bestTime: "Jan-Feb for Snow",
      weather: "Cold",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Tinsukia (110 km)", busConnectivity: "Dhola-Sadiya Bridge" },
    externalLinks: { googleMaps: "https://goo.gl/maps/roing" },
    accessibility: { wheelchairFriendly: true, notes: "Roing town is accessible." },
    routePlan: [ { time: "08:00 AM", activity: "Drive to Mayodia" } ],
    foodGuide: [ { name: "Neelam Hotel", type: "City", specialty: "Indian Thali", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "District Hospital" }
  },
  {
    id: 319,
    name: "Aalo (Along)",
    slug: "aalo-along",
    state: "West Siang, Arunachal Pradesh",
    category: "Cultural",
    badge: "Orange Town",
    image: "https://res.cloudinary.com/kmadmin/image/upload/v1628579839/kiomoi/Aalo_%28_Along_%29_1628579837988.jpg",
    description: "Famous for orange orchards, bamboo hanging bridges, and Galo tribe culture.",
    coordinates: { lat: 28.1698, lng: 94.7951 },
    essentials: {
      bestTime: "October to April",
      weather: "Pleasant",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Pasighat (100 km)", busConnectivity: "Road from Itanagar" },
    externalLinks: { googleMaps: "https://goo.gl/maps/aalo" },
    accessibility: { wheelchairFriendly: true, notes: "Town area is flat." },
    routePlan: [ { time: "09:00 AM", activity: "Hanging Bridge Walk" } ],
    foodGuide: [ { name: "Hotel Toshi", type: "Hotel", specialty: "Local Galo Cuisine", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "General Hospital Aalo" }
  },
  {
    id: 320,
    name: "Parshuram Kund",
    slug: "parshuram-kund",
    state: "Tezu, Arunachal Pradesh",
    category: "Spiritual",
    badge: "Hindu Pilgrimage",
    image: "https://static.toiimg.com/photo/94883598.cms",
    description: "A sacred Hindu site on the Lohit River where devotees take a holy dip during Makar Sankranti.",
    coordinates: { lat: 27.8769, lng: 96.3689 },
    essentials: {
      bestTime: "November to February",
      weather: "Cool",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Tinsukia (160 km)", busConnectivity: "Buses from Tinsukia to Tezu" },
    externalLinks: { googleMaps: "https://goo.gl/maps/parshuram" },
    accessibility: { wheelchairFriendly: false, notes: "Many steps to river." },
    routePlan: [ { time: "07:00 AM", activity: "Holy Dip" } ],
    foodGuide: [ { name: "Tezu Dhaba", type: "Dhaba", specialty: "Veg Thali", rating: 3.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Zonal Hospital Tezu" }
  }
];



