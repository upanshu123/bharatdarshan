/**
 * NAGALAND_PLACES DATASET (EXTENDED - 15 PLACES)
 * ------------------------------------------------------------------
 * Sources: Nagaland Tourism & Local Tribal Councils
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const NAGALAND_PLACES = [
  {
    id: 1901,
    name: "Kisama Heritage Village",
    slug: "kisama-heritage-village",
    state: "Kohima, Nagaland",
    category: "Heritage",
    badge: "Home of Hornbill Festival",
    image: " https://cdn.tripuntold.com/media/photos/location/2023/05/03/d7a64017-02a6-48b9-9d63-bbdd42961f19.jpg ",
    description: "A cultural complex designed to showcase the traditions of the 16 major Naga tribes. It serves as the permanent venue for the Hornbill Festival (Dec 1-10), featuring tribal morungs (huts), food stalls, and a WWII museum.",
    coordinates: { lat: 25.6167, lng: 94.1167 },
    essentials: {
      bestTime: "December 1-10 (Festival)",
      weather: "Cool/Dry",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹20", Camera: "₹50" }
    },
    transport: { nearestAirport: "Dimapur (85 km)", nearestRailway: "Dimapur (85 km)", busConnectivity: "Taxi from Kohima (12 km)" },
    externalLinks: { officialBooking: "https://hornbillfestival.com/", googleMaps: "https://goo.gl/maps/kisama" },
    accessibility: { wheelchairFriendly: true, notes: "Main arena is flat; morungs have steps." },
    routePlan: [ { time: "10:00 AM", activity: "Morung Visits" }, { time: "01:00 PM", activity: "Naga Lunch" } ],
    foodGuide: [ { name: "Bamboo Pavilion", type: "Festival", specialty: "Smoked Pork", rating: 4.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Naga Hospital Kohima" }
  },
  {
    id: 1902,
    name: "Khonoma Green Village",
    slug: "khonoma-village",
    state: "Kohima, Nagaland",
    category: "Heritage",
    badge: "Asia's First Green Village",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/khonoma-village-kohima-nagaland-1-attr-hero?qlt=82&ts=1727012456749 ",
    description: "A 700-year-old Angami village renowned for its conservation efforts and banning of hunting. It features traditional stone fortifications, terraced agriculture, and a rich history of resistance against British rule.",
    coordinates: { lat: 25.6479, lng: 94.0224 },
    essentials: {
      bestTime: "September to March",
      weather: "Misty/Cold",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "₹50", Guide: "₹700" }
    },
    transport: { nearestAirport: "Dimapur (90 km)", busConnectivity: "Taxi from Kohima (20 km)" },
    externalLinks: { officialBooking: "https://tourism.nagaland.gov.in/", googleMaps: "https://goo.gl/maps/khonoma" },
    accessibility: { wheelchairFriendly: false, notes: "Steep village steps." },
    routePlan: [ { time: "09:00 AM", activity: "Fort Walk" }, { time: "12:00 PM", activity: "Traditional Lunch" } ],
    foodGuide: [ { name: "Meru's Homestay", type: "Home", specialty: "Galho", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Zubza PHC" }
  },
  {
    id: 1903,
    name: "Kohima War Cemetery",
    slug: "kohima-war-cemetery",
    state: "Kohima, Nagaland",
    category: "Heritage",
    badge: "WWII Memorial",
    image: " https://www.cwgc.org/media/asqdy2bh/kohima-aerial-view.jpg?rmode=max&width=1000&height=500 ",
    description: "A poignant memorial dedicated to the soldiers of the 2nd British Division who died in the Battle of Kohima. It is built on Garrison Hill, the site of the famous 'Battle of the Tennis Court'.",
    coordinates: { lat: 25.6747, lng: 94.1105 },
    essentials: {
      bestTime: "Year Round",
      weather: "Pleasant",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dimapur (74 km)", busConnectivity: "Walkable from Kohima city center" },
    externalLinks: { officialBooking: "https://www.cwgc.org/", googleMaps: "https://goo.gl/maps/kohimacemetery" },
    accessibility: { wheelchairFriendly: true, notes: "Terraced paths are ramped." },
    routePlan: [ { time: "03:00 PM", activity: "Epitaph Visit" } ],
    foodGuide: [ { name: "Ozone Cafe", type: "Cafe", specialty: "Axone Pork", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Naga Hospital Kohima" }
  },
  {
    id: 1904,
    name: "Dzukou Valley",
    slug: "dzukou-valley",
    state: "Viswema, Nagaland",
    category: "Nature",
    badge: "Valley of Flowers of the East",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/dzukou-valley-kohima-nagaland-attr-hero-1?qlt=82&ts=1727012411648 ",
    description: "Located at 2452m, this stunning valley is famous for its rolling dwarf bamboo hills and the rare Dzukou Lily. It’s a trekker's paradise offering incredible sunrise views and crystal clear streams.",
    coordinates: { lat: 25.5714, lng: 94.0628 },
    essentials: {
      bestTime: "June to September",
      weather: "Cold/Windy",
      timings: "Trek starts at 6 AM",
      entryFee: { Entry: "₹100" }
    },
    transport: { nearestAirport: "Dimapur (90 km)", busConnectivity: "Taxi from Kohima to Viswema base" },
    externalLinks: { officialBooking: "https://tourism.nagaland.gov.in/", googleMaps: "https://goo.gl/maps/dzukou" },
    accessibility: { wheelchairFriendly: false, notes: "Strenuous mountain trek." },
    routePlan: [ { time: "06:00 AM", activity: "Start Trek" }, { time: "11:00 AM", activity: "Reach Guesthouse" } ],
    foodGuide: [ { name: "Trekker's Hut", type: "Basic", specialty: "Maggie & Tea", rating: 3.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Jakhama Army Hospital" }
  },
  {
    id: 1905,
    name: "Japfu Peak",
    slug: "japfu-peak",
    state: "Kigwema, Nagaland",
    category: "Nature",
    badge: "Nagaland's Second Highest Peak",
    image: " https://raw.githubusercontent.com/devravik/topplaces-india-nagaland/refs/heads/main/attractions/japfu-peak/things_to_do/japfu-peak-trek.jpg ",
    description: "Standing at 3048m, it is famous for housing the world's tallest Rhododendron tree (over 109 feet). The peak offers a panoramic bird's-eye view of the entire Dzukou Valley.",
    coordinates: { lat: 25.6022, lng: 94.0655 },
    essentials: {
      bestTime: "October to April",
      weather: "Very Cold",
      timings: "Day Trek",
      entryFee: { Guide: "₹1000" }
    },
    transport: { nearestAirport: "Dimapur (95 km)", busConnectivity: "15 km from Kohima to base" },
    externalLinks: { officialBooking: "https://tourism.nagaland.gov.in/", googleMaps: "https://goo.gl/maps/japfu" },
    accessibility: { wheelchairFriendly: false, notes: "Rugged forest trek." },
    routePlan: [ { time: "04:00 AM", activity: "Summit Sunrise" } ],
    foodGuide: [ { name: "Kigwema Homestay", type: "Home", specialty: "Naga Curry", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Naga Hospital Kohima" }
  },
  {
    id: 1906,
    name: "Longwa Village",
    slug: "longwa-village",
    state: "Mon, Nagaland",
    category: "Heritage",
    badge: "Indo-Myanmar Border Village",
    image: " https://assets.cntraveller.in/photos/60ba2619bfe773a828a470dd/4:3/w_1704,h_1278,c_limit/Longwa-nagaland.jpg ",
    description: "Home of the Konyak tribe, known for their headhunting past and face tattoos. The village chief's house is built exactly on the international border—half in India and half in Myanmar.",
    coordinates: { lat: 26.8375, lng: 95.1275 },
    essentials: {
      bestTime: "October to April",
      weather: "Warm/Rural",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dibrugarh (150 km)", busConnectivity: "Sumo from Mon town (42 km)" },
    externalLinks: { officialBooking: "https://mon.nic.in/", googleMaps: "https://goo.gl/maps/longwa" },
    accessibility: { wheelchairFriendly: false, notes: "Remote and unpaved." },
    routePlan: [ { time: "10:00 AM", activity: "Meet the Angh (Chief)" }, { time: "12:00 PM", activity: "Visit Myanmar Side" } ],
    foodGuide: [ { name: "Longwa Tourist Lodge", type: "Govt", specialty: "Boiled Pork", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Mon" }
  },
  {
    id: 1907,
    name: "Mokokchung Village",
    slug: "mokokchung-village",
    state: "Mokokchung, Nagaland",
    category: "Heritage",
    badge: "Land of Ao Nagas",
    image: " https://www.tourmyindia.com/blog//wp-content/uploads/2017/01/mokokchung.jpg ",
    description: "The cultural hub of the Ao tribe. It is famous for its clean environment, old traditions, and the Moatsu festival. Nearby Longkhum village is legendary for its 'stone' lore.",
    coordinates: { lat: 26.3276, lng: 94.5262 },
    essentials: {
      bestTime: "October to May",
      weather: "Pleasant",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Jorhat (105 km)", busConnectivity: "Sumo from Kohima or Jorhat" },
    externalLinks: { officialBooking: "https://mokokchung.nic.in/", googleMaps: "https://goo.gl/maps/mokokchung" },
    accessibility: { wheelchairFriendly: true, notes: "Paved city and village roads." },
    routePlan: [ { time: "09:00 AM", activity: "Ungma Village Tour" } ],
    foodGuide: [ { name: "Restaurant 7/11", type: "City", specialty: "Anishi Stew", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Imkongliba Hospital" }
  },
  {
    id: 1908,
    name: "Kachari Ruins",
    slug: "kachari-ruins",
    state: "Dimapur, Nagaland",
    category: "Heritage",
    badge: "10th Century Monoliths",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/62/13/76/pillars-at-kachari-ruins.jpg?w=1200&h=-1&s=1 ",
    description: "Remnants of the Kachari kingdom, featuring unique mushroom-shaped pillars and megaliths. These are archaeological mysteries believed to be chess pieces of the gods.",
    coordinates: { lat: 25.9128, lng: 93.7250 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dimapur (4 km)", busConnectivity: "City center location" },
    externalLinks: { officialBooking: "https://tourism.nagaland.gov.in/", googleMaps: "https://goo.gl/maps/kachariruins" },
    accessibility: { wheelchairFriendly: true, notes: "Flat and grassy ground." },
    routePlan: [ { time: "10:00 AM", activity: "History Walk" } ],
    foodGuide: [ { name: "Ethnic Table", type: "Dhaba", specialty: "Smoked Pork", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Dimapur" }
  },
  {
    id: 1909,
    name: "Shilloi Lake",
    slug: "shilloi-lake",
    state: "Phek, Nagaland",
    category: "Nature",
    badge: "Foot-shaped Lake",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/42/c0/4f/prestine-nature.jpg?w=900&h=500&s=1 ",
    description: "A beautiful natural lake in Phek district shaped like a human foot. It is surrounded by the Patkai range and holds deep spiritual significance for the local Latsum village.",
    coordinates: { lat: 25.6100, lng: 94.7800 },
    essentials: {
      bestTime: "October to March",
      weather: "Cold",
      timings: "Sunrise - Sunset",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dimapur (280 km)", busConnectivity: "Sumo from Kohima/Phek to Meluri" },
    externalLinks: { officialBooking: "https://phek.nic.in/", googleMaps: "https://goo.gl/maps/shilloi" },
    accessibility: { wheelchairFriendly: false, notes: "Remote lakeside terrain." },
    routePlan: [ { time: "09:00 AM", activity: "Lake Walk" } ],
    foodGuide: [ { name: "Village Canteen", type: "Basic", specialty: "Tea & Rice", rating: 3.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Meluri" }
  },
  {
    id: 1910,
    name: "Tuophema Tourist Village",
    slug: "tuophema-village",
    state: "Tseminyu, Nagaland",
    category: "Heritage",
    badge: "Model Community Village",
    image: " https://rootsandleisure.com/wp-content/uploads/2017/03/020615170139-DSC_7702.jpg ",
    description: "Built to provide a glimpse into traditional Naga life, this village features stylized tribal huts with modern amenities. It hosts the Sekrenyi festival in February.",
    coordinates: { lat: 25.9333, lng: 94.1333 },
    essentials: {
      bestTime: "February (Sekrenyi Festival)",
      weather: "Pleasant",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "₹50" }
    },
    transport: { nearestAirport: "Dimapur (110 km)", busConnectivity: "Taxi from Kohima (40 km)" },
    externalLinks: { officialBooking: "https://tourism.nagaland.gov.in/", googleMaps: "https://goo.gl/maps/tuophema" },
    accessibility: { wheelchairFriendly: true, notes: "Resort paths are paved." },
    routePlan: [ { time: "11:00 AM", activity: "Cultural Tour" } ],
    foodGuide: [ { name: "Community Kitchen", type: "Local", specialty: "Naga Buffet", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Naga Hospital Kohima" }
  },
  {
    id: 1911,
    name: "Intanki National Park",
    slug: "intanki-national-park",
    state: "Peren, Nagaland",
    category: "Wildlife",
    badge: "Nagaland's Largest Park",
    image: " https://www.incredible-northeastindia.com/images/nagaland-head.jpg ",
    description: "Spread over 200 sq km, it is home to the Hoolock Gibbon, elephants, tigers, and the rare Blyth's Tragopan. It’s an untouched tropical jungle perfect for safaris.",
    coordinates: { lat: 25.5500, lng: 93.4500 },
    essentials: {
      bestTime: "November to March",
      weather: "Humid",
      timings: "06:00 AM - 04:00 PM",
      entryFee: { Entry: "₹100" }
    },
    transport: { nearestAirport: "Dimapur (37 km)", busConnectivity: "Taxi from Dimapur" },
    externalLinks: { officialBooking: "https://peren.nic.in/", googleMaps: "https://goo.gl/maps/intanki" },
    accessibility: { wheelchairFriendly: false, notes: "Jungle safari tracks." },
    routePlan: [ { time: "07:00 AM", activity: "Wildlife Safari" } ],
    foodGuide: [ { name: "Peren Dhabas", type: "Highway", specialty: "Fish Thali", rating: 3.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Dimapur" }
  },
  {
    id: 1912,
    name: "Triple Falls",
    slug: "triple-falls",
    state: "Dimapur, Nagaland",
    category: "Nature",
    badge: "Seithekima Cascade",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/42/8c/d9/lots-of-rain-triple-falls.jpg?w=900&h=500&s=1 ",
    description: "A group of three beautiful waterfalls cascading from 280 feet into a common pool. It’s a popular spot for trekking and weekend picnics near Dimapur.",
    coordinates: { lat: 25.8236, lng: 93.7788 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "₹20" }
    },
    transport: { nearestAirport: "Dimapur (18 km)", busConnectivity: "Taxi from Dimapur to Seithekima" },
    externalLinks: { officialBooking: "https://tourism.nagaland.gov.in/", googleMaps: "https://goo.gl/maps/triplefalls" },
    accessibility: { wheelchairFriendly: false, notes: "Short jungle trek involved." },
    routePlan: [ { time: "09:00 AM", activity: "Picnic & Swimming" } ],
    foodGuide: [ { name: "Seithekima Cafe", type: "Stall", specialty: "Tea & Pakora", rating: 3.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Referral Hospital Dimapur" }
  },
  {
    id: 1913,
    name: "Wokha (Doyang River)",
    slug: "wokha-doyang",
    state: "Wokha, Nagaland",
    category: "Nature",
    badge: "Amur Falcon Capital",
    image: " https://tourism.nagaland.gov.in/wp-content/uploads/2022/06/doyang-960x600-1.jpg",
    description: "Wokha is the home of the Lotha tribe and famous for the Doyang River reservoir. Every November, millions of Amur Falcons stop here during their migration, a world-record spectacle.",
    coordinates: { lat: 26.0967, lng: 94.2633 },
    essentials: {
      bestTime: "November (Falcon Migration)",
      weather: "Cool",
      timings: "Daylight Only",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dimapur (130 km)", busConnectivity: "Sumo from Kohima (80 km)" },
    externalLinks: { officialBooking: "https://wokha.nic.in/", googleMaps: "https://goo.gl/maps/wokha" },
    accessibility: { wheelchairFriendly: true, notes: "Viewpoints are accessible." },
    routePlan: [ { time: "04:30 PM", activity: "Falcon Roosting View" } ],
    foodGuide: [ { name: "Riphyim Resort", type: "Govt", specialty: "Lotha Thali", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Civil Hospital Wokha" }
  },
  {
    id: 1914,
    name: "Pfutsero",
    slug: "pfutsero-coldest-town",
    state: "Phek, Nagaland",
    category: "Hill Stations",
    badge: "Coldest Town in Nagaland",
    image: " https://footloosedev.com/wp-content/uploads/2017/12/pfutsero.jpg ",
    description: "Located at 2133m, it is the highest and coldest inhabited town in the state. Glory Peak offers views of Mount Saramati. The town turns into a white wonderland during winter frost.",
    coordinates: { lat: 25.5683, lng: 94.3167 },
    essentials: {
      bestTime: "November to February",
      weather: "Freezing/Cold",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dimapur (140 km)", busConnectivity: "Taxi from Kohima (65 km)" },
    externalLinks: { officialBooking: "https://phek.nic.in/", googleMaps: "https://goo.gl/maps/pfutsero" },
    accessibility: { wheelchairFriendly: true, notes: "Glory Peak is driveable." },
    routePlan: [ { time: "07:00 AM", activity: "Glory Peak Sunrise" } ],
    foodGuide: [ { name: "Town Bakery", type: "Bakery", specialty: "Fresh Biscuits", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Pfutsero" }
  },
  {
    id: 1915,
    name: "Kohima Cathedral",
    slug: "kohima-cathedral",
    state: "Kohima, Nagaland",
    category: "Spiritual",
    badge: "Asia's Largest Crucifix",
    image: " https://s7ap1.scene7.com/is/image/incredibleindia/catholic-church-kohima-nagaland-1-attr-hero?qlt=82&ts=1727012314653 ",
    description: "The 'Mary Help of Christians' Cathedral is an architectural gem. Its facade is shaped like a traditional Naga house and it houses a 16-foot high wooden crucifix, one of the largest in Asia.",
    coordinates: { lat: 25.6600, lng: 94.1100 },
    essentials: {
      bestTime: "All Year",
      weather: "Pleasant",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dimapur (74 km)", busConnectivity: "Located on Aradura Hill, Kohima" },
    externalLinks: { officialBooking: "https://tourism.nagaland.gov.in/", googleMaps: "https://goo.gl/maps/kohimacathedral" },
    accessibility: { wheelchairFriendly: true, notes: "Paved compound with ramps." },
    routePlan: [ { time: "11:00 AM", activity: "Architecture Tour" } ],
    foodGuide: [ { name: "Dream Cafe", type: "City", specialty: "Cake & Coffee", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Naga Hospital Kohima" }
  }
];
