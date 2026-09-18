/**
 * GOA_PLACES DATASET
 * ------------------------------------------------------------------
 * Consolidated data structure for major tourist spots in Goa.
 * Total Entries: 20 | Sequence: 701 - 720
 * ------------------------------------------------------------------
 */

export const GOA_PLACES = [
  {
    id: 701,
    name: "Calangute Beach",
    slug: "calangute-beach",
    state: "Bardez, North Goa",
    category: "Beaches",
    badge: "Queen of Beaches",
    image: "https://oneboard.app/_next/static/media/baghabeach.e23ac324.webp",
    description: "The largest and most popular beach in North Goa, known for its golden sands, buzzing shacks, and endless water sports options. It is the hub of Goa's tourist activity.",
    coordinates: { lat: 15.5494, lng: 73.7535 },
    essentials: {
      bestTime: "November to February",
      weather: "Sunny/Humid",
      timings: "24 Hours",
      entryFee: { Entry: "Free", Parasailing: "₹800-1000", JetSki: "₹400-600" }
    },
    transport: { nearestAirport: "Mopa (GOX) - 28 km", nearestRailway: "Thivim (18 km)", busConnectivity: "Frequent buses from Mapusa and Panaji" },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/calangute" },
    accessibility: { wheelchairFriendly: true, notes: "Main beach access road is paved." },
    routePlan: [ { time: "09:00 AM", activity: "Water Sports" }, { time: "05:00 PM", activity: "Sunset Walk" } ],
    foodGuide: [ { name: "Souza Lobo", type: "Heritage", specialty: "Goan Fish Curry", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "PHC Candolim" }
  },
  {
    id: 702,
    name: "Palolem Beach",
    slug: "palolem-beach",
    state: "Canacona, South Goa",
    category: "Beaches",
    badge: "Scenic Crescent Bay",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/palolem-beach-goa-3-musthead-hero?qlt=82&ts=1742180430759",
    description: "A stunning crescent-shaped beach in South Goa, famous for its calm waters, silent noise parties, and dolphin-watching boat trips.",
    coordinates: { lat: 15.0100, lng: 74.0232 },
    essentials: {
      bestTime: "October to March",
      weather: "Breezy",
      timings: "24 Hours",
      entryFee: { Entry: "Free", DolphinTrip: "₹300-500" }
    },
    transport: { nearestAirport: "Dabolim (GOI) - 60 km", nearestRailway: "Canacona (2 km)", busConnectivity: "Direct buses from Margao" },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/palolem" },
    accessibility: { wheelchairFriendly: true, notes: "Flat access to the beach entrance." },
    routePlan: [ { time: "08:00 AM", activity: "Dolphin Watching" }, { time: "07:00 PM", activity: "Silent Disco" } ],
    foodGuide: [ { name: "Dropadi", type: "Beachfront", specialty: "Seafood Platter", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "CHC Canacona" }
  },
  {
    id: 703,
    name: "Basilica of Bom Jesus",
    slug: "basilica-of-bom-jesus",
    state: "Old Goa, North Goa",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://www.tourmyindia.com/states/goa/image/basilica-of-bom-jesus-goa.webp",
    description: "Located in Old Goa, this 16th-century baroque church holds the mortal remains of St. Francis Xavier. It is a masterpiece of Jesuit architecture.",
    coordinates: { lat: 15.5009, lng: 73.9116 },
    essentials: {
      bestTime: "All Year",
      weather: "Indoor/Cool",
      timings: "09:00 AM - 06:30 PM",
      entryFee: { Entry: "Free", Museum: "₹10" }
    },
    transport: { nearestAirport: "Dabolim (25 km)", nearestRailway: "Karmali (3 km)", busConnectivity: "Frequent buses from Panaji" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/bomjesus" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps are available at the side entrance." },
    routePlan: [ { time: "09:30 AM", activity: "Viewing the Casket" }, { time: "11:00 AM", activity: "Se Cathedral" } ],
    foodGuide: [ { name: "Cafe Bhonsle", type: "Veg", specialty: "Patal Bhaji", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "GMC Bambolim" }
  },
  {
    id: 704,
    name: "Fort Aguada",
    slug: "fort-aguada",
    state: "Bardez, North Goa",
    category: "Heritage",
    badge: "17th Century Portuguese Fort",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/fort-aguada-goa-11-musthead-hero?qlt=82&ts=1742184865719",
    description: "Built in 1612 to guard against the Dutch, this fort features a four-storey lighthouse and vast water reservoirs.",
    coordinates: { lat: 15.4922, lng: 73.7738 },
    essentials: {
      bestTime: "Winter",
      weather: "Sunny/Windy",
      timings: "09:30 AM - 06:00 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestRailway: "Thivim (20 km)", busConnectivity: "Buses to Sinquerim, then uphill walk" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/aguada" },
    accessibility: { wheelchairFriendly: false, notes: "Terrain is rocky and uneven." },
    routePlan: [ { time: "04:00 PM", activity: "Upper Fort & Lighthouse" }, { time: "05:30 PM", activity: "Sunset View" } ],
    foodGuide: [ { name: "Fisherman's Wharf", type: "Premium", specialty: "Prawn Curry", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "PHC Candolim" }
  },
  {
    id: 705,
    name: "Dudhsagar Waterfalls",
    slug: "dudhsagar-waterfalls",
    state: "Sanguem, South Goa",
    category: "Nature",
    badge: "Sea of Milk",
    image: "https://dudhsagartrek.org/wp-content/uploads/2025/10/dudhsagar-trek-2-1-scaled.webp",
    description: "One of India's tallest waterfalls (310m), located on the Mandovi River. The white cascading water looks like milk.",
    coordinates: { lat: 15.3144, lng: 74.3143 },
    essentials: {
      bestTime: "October to April",
      weather: "Forest/Humid",
      timings: "06:00 AM - 04:30 PM",
      entryFee: { Jeep: "₹3500 (Group of 7)", Entry: "₹50" }
    },
    transport: { nearestRailway: "Kulem (Base station)", busConnectivity: "Reach Kulem, then take official Jeep Safari" },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/dudhsagar" },
    accessibility: { wheelchairFriendly: false, notes: "Rugged jeep track. Not accessible." },
    routePlan: [ { time: "07:30 AM", activity: "Jungle Drive" }, { time: "09:00 AM", activity: "Swim in Pool" } ],
    foodGuide: [ { name: "Dudhsagar Plantation", type: "Farm", specialty: "Goan Buffet", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "PHC Molem" }
  },
  {
    id: 706,
    name: "Dr. Salim Ali Bird Sanctuary",
    slug: "salim-ali-bird-sanctuary",
    state: "Chorao, North Goa",
    category: "Nature",
    badge: "Mangrove Habitat",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/dr-salim-ali-bird-sanctuary-goa-goa-1-attr-hero?qlt=82&ts=1742160241518",
    description: "Located on Chorao Island, this sanctuary protects a unique mangrove ecosystem and is a paradise for birdwatchers.",
    coordinates: { lat: 15.5126, lng: 73.8569 },
    essentials: {
      bestTime: "October to March",
      weather: "Humid/Shady",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "₹10", BoatRide: "₹900-1200" }
    },
    transport: { nearestRailway: "Karmali (10 km)", busConnectivity: "Ferry from Ribandar (Panaji) to Chorao" },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/salimali" },
    accessibility: { wheelchairFriendly: false, notes: "Boarding boats can be tricky." },
    routePlan: [ { time: "07:00 AM", activity: "Canoe Ride in Mangroves" } ],
    foodGuide: [ { name: "Lazy Goose", type: "Riverside", specialty: "Crab Masala", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "GMC Bambolim" }
  },
  {
    id: 707,
    name: "Shanta Durga Temple",
    slug: "shanta-durga-temple",
    state: "Ponda, South Goa",
    category: "Spiritual",
    badge: "Indo-Portuguese Architecture",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ee/6a/b6/shantadurga-temple.jpg?w=1200&h=1200&s=1",
    description: "Dedicated to Goddess Shanta Durga, this temple features a unique blend of Pyramidal Shikharas and Portuguese-style windows.",
    coordinates: { lat: 15.3986, lng: 73.9782 },
    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "06:00 AM - 08:30 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dabolim (30 km)", busConnectivity: "Regular buses from Ponda and Panaji" },
    externalLinks: { officialBooking: "http://www.shantadurga.org/", googleMaps: "https://goo.gl/maps/shantadurga" },
    accessibility: { wheelchairFriendly: true, notes: "Spacious and paved compound." },
    routePlan: [ { time: "09:00 AM", activity: "Darshan" }, { time: "11:00 AM", activity: "Visit Mangueshi" } ],
    foodGuide: [ { name: "Padmavati Restaurant", type: "Veg", specialty: "Bhaji Pao", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "SDH Ponda" }
  },
  {
    id: 708,
    name: "Se Cathedral",
    slug: "se-cathedral",
    state: "Old Goa, North Goa",
    category: "Heritage",
    badge: "Largest Church in Asia",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/84/ea/47/se-cathedral.jpg?w=1200&h=-1&s=1",
    description: "A 16th-century cathedral famous for its giant Golden Bell. Its Portuguese-Manueline architecture is grand and imposing.",
    coordinates: { lat: 15.5034, lng: 73.9126 },
    essentials: {
      bestTime: "All Year",
      weather: "Indoor/Cool",
      timings: "07:30 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Karmali (3 km)", busConnectivity: "Located in Old Goa complex" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/secathedral" },
    accessibility: { wheelchairFriendly: true, notes: "Flat entrance and spacious interior." },
    routePlan: [ { time: "11:00 AM", activity: "Explore Altar" }, { time: "11:30 AM", activity: "View Golden Bell" } ],
    foodGuide: [ { name: "Rasoda", type: "Thali", specialty: "Rajasthani/Goan", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "GMC Bambolim" }
  },
  {
    id: 709,
    name: "Fontainhas Latin Quarter",
    slug: "fontainhas-latin-quarter",
    state: "Panaji, North Goa",
    category: "Heritage",
    badge: "Europe in India",
    image: "https://im.whatshot.in/img/2020/Sep/71105556-523786865127578-6216152561381508275-n-cropped-1599468009.jpg",
    description: "The old Latin Quarter of Panaji, known for its brightly colored Portuguese houses and narrow winding streets.",
    coordinates: { lat: 15.4947, lng: 85.8249 },
    essentials: {
      bestTime: "Winter",
      weather: "City",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Karmali (12 km)", busConnectivity: "Walkable from Panaji KTC Stand" },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/fontainhas" },
    accessibility: { wheelchairFriendly: true, notes: "Streets are paved but narrow." },
    routePlan: [ { time: "04:30 PM", activity: "Heritage Walk" }, { time: "05:30 PM", activity: "Bakery Visit" } ],
    foodGuide: [ { name: "Viva Panjim", type: "Heritage", specialty: "Pork Vindaloo", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Manipal Panaji" }
  },
  {
    id: 710,
    name: "Anjuna Flea Market",
    slug: "anjuna-flea-market",
    state: "Bardez, North Goa",
    category: "Leisure",
    badge: "Hippie Legacy",
    image: "https://media1.thrillophilia.com/filestore/im5nqd5xl4j7dxsmgcbh3bxxgyin_1574855580_1_6ozxU8h6ehzSascJU5Olhw.jpeg",
    description: "A colorful Wednesday market featuring trinkets, clothes, and live music, set by Anjuna Beach.",
    coordinates: { lat: 15.5794, lng: 73.7432 },
    essentials: {
      bestTime: "Wednesdays (Oct-Apr)",
      weather: "Sunny/Dusty",
      timings: "09:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Mopa (28 km)", busConnectivity: "Buses from Mapusa or Panaji" },
    externalLinks: { googleMaps: "https://goo.gl/maps/anjuna" },
    accessibility: { wheelchairFriendly: false, notes: "Sandy and crowded ground." },
    routePlan: [ { time: "10:00 AM", activity: "Shopping" }, { time: "04:00 PM", activity: "Sunset at Anjuna" } ],
    foodGuide: [ { name: "Burger Factory", type: "Modern", specialty: "Gourmet Burgers", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "St. Anthony's" }
  },
  {
    id: 711,
    name: "Vagator Beach",
    slug: "vagator-beach",
    state: "Bardez, North Goa",
    category: "Beaches",
    badge: "Clifftop Views & Sunset",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/vagator-beach-goa-3-musthead-hero?qlt=82&ts=1742185883265",
    description: "Famous for its red cliffs overlooking the Arabian Sea and home to the iconic Chapora Fort.",
    coordinates: { lat: 15.5977, lng: 73.7479 },
    essentials: {
      bestTime: "November to March",
      weather: "Sunny/Breezy",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Thivim (18 km)", busConnectivity: "Regular buses from Mapusa" },
    externalLinks: { googleMaps: "https://goo.gl/maps/vagatorbeach" },
    accessibility: { wheelchairFriendly: false, notes: "Steep access roads." },
    routePlan: [ { time: "10:00 AM", activity: "Chapora Fort" }, { time: "05:00 PM", activity: "Sunset" } ],
    foodGuide: [ { name: "Thalassa", type: "Greek", specialty: "Sunset View", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "PHC Siolim" }
  },
  {
    id: 712,
    name: "Colva Beach",
    slug: "colva-beach",
    state: "Salcete, South Goa",
    category: "Beaches",
    badge: "Oldest & Longest Beach",
    image: "https://traveleva.gumlet.io/activities/2145/2145_Screenshot%202024-02-12%20at%204.02.55%E2%80%AFPM.png?w=1244&h=312",
    description: "A beloved beach in South Goa, famed for its white sands and the colonial-era Church of Our Lady of Mercy.",
    coordinates: { lat: 15.2818, lng: 73.9234 },
    essentials: {
      bestTime: "October to April",
      weather: "Warm/Calm",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Madgaon (6 km)", busConnectivity: "Frequent buses from Margao" },
    externalLinks: { googleMaps: "https://goo.gl/maps/colvabeach" },
    accessibility: { wheelchairFriendly: true, notes: "Main access road is flat." },
    foodGuide: [ { name: "Grill-All", type: "Seafood", specialty: "Kingfish Fry", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Hospicio Margao" }
  },
  {
    id: 713,
    name: "Shree Manguesh Temple",
    slug: "shree-manguesh-temple",
    state: "Ponda, South Goa",
    category: "Spiritual",
    badge: "Shiva Temple & Deepastambha",
    image: "https://shrimangesh.com/lovable-uploads/1bba3010-8787-4d99-81cd-451e634c79e1.png",
    description: "Dedicated to Lord Shiva, famous for its magnificent seven-storey deepstambha (lamp tower).",
    coordinates: { lat: 15.4466, lng: 73.9701 },
    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "06:00 AM - 10:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Karmali (10 km)", busConnectivity: "On Panaji-Ponda route" },
    externalLinks: { officialBooking: "https://shreeshantadurga.com/", googleMaps: "https://goo.gl/maps/manguesh" },
    accessibility: { wheelchairFriendly: true, notes: "Paved courtyard." },
    foodGuide: [ { name: "Shree Manguesh Canteen", type: "Veg", specialty: "Temple Bhojan", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "SDH Ponda" }
  },
  {
    id: 714,
    name: "Reis Magos Fort",
    slug: "reis-magos-fort",
    state: "Bardez, North Goa",
    category: "Heritage",
    badge: "Mandovi River Guard",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/reis-magos-goa-goa-1-attr-hero?qlt=82&ts=1742172523622",
    description: "Built in 1551, this restored fort offers panoramic views of Panaji across the Mandovi River.",
    coordinates: { lat: 15.5100, lng: 73.8055 },
    essentials: {
      bestTime: "October to February",
      weather: "Sunny/Windy",
      timings: "09:30 AM - 05:00 PM",
      entryFee: { Adult: "₹50", Student: "₹25" }
    },
    transport: { nearestRailway: "Karmali (16 km)", busConnectivity: "Take ferry from Panaji to Betim" },
    externalLinks: { googleMaps: "https://goo.gl/maps/reismagosfort" },
    accessibility: { wheelchairFriendly: false, notes: "Steep staircase inside." },
    foodGuide: [ { name: "Wok & Roll", type: "Asian", specialty: "Sushis", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Manipal Panaji" }
  },
  {
    id: 715,
    name: "Baga Beach",
    slug: "baga-beach",
    state: "Bardez, North Goa",
    category: "Beaches",
    badge: "Party Hub & Nightlife",
    image: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/579636323.jpg?k=35a96cc82aaff23a58826c2f08baad005a7c7ddec1ab857e6a5d3aded9085336&o=",
    description: "Extremely popular beach known for its water sports, lively shacks, and vibrant nightlife like Tito's Lane.",
    coordinates: { lat: 15.5562, lng: 73.7513 },
    essentials: {
      bestTime: "November to March",
      weather: "Sunny/Humid",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Mopa (30 km)", busConnectivity: "Frequent buses from Mapusa" },
    externalLinks: { googleMaps: "https://goo.gl/maps/bagabeach" },
    accessibility: { wheelchairFriendly: true, notes: "Paved access roads." },
    routePlan: [ { time: "08:00 PM", activity: "Nightlife" } ],
    foodGuide: [ { name: "Britto's", type: "Shack", specialty: "Jumbo Prawns", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "St. Anthony's Anjuna" }
  },
  {
    id: 716,
    name: "Mandrem Beach",
    slug: "mandrem-beach",
    state: "Pernem, North Goa",
    category: "Beaches",
    badge: "Secluded & White Sands",
    image: "https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fimage.jpg%2Fimage-1733977210502.jpg&w=2048&q=75",
    description: "A peaceful, less-crowded white-sand beach ideal for relaxing yoga and meditation.",
    coordinates: { lat: 15.6881, lng: 73.7130 },
    essentials: {
      bestTime: "October to March",
      weather: "Peaceful",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Pernem (17 km)", busConnectivity: "Bus from Mapusa to Arambol" },
    externalLinks: { googleMaps: "https://goo.gl/maps/mandrembeach" },
    accessibility: { wheelchairFriendly: false, notes: "Sand can be soft." },
    foodGuide: [ { name: "La Plage", type: "French", specialty: "Fine Dining", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Parsekar Hospital" }
  },
  {
    id: 717,
    name: "Miramar Beach",
    slug: "miramar-beach",
    state: "Panaji, North Goa",
    category: "Beaches",
    badge: "Urban & Estuary View",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/57/bb/a1/miramar-beach-fl.jpg?w=1200&h=700&s=1",
    description: "An urban beach near Panaji offering views of Fort Aguada and popular for evening walks.",
    coordinates: { lat: 15.4850, lng: 73.8180 },
    essentials: {
      bestTime: "All Year",
      weather: "City",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Karmali (15 km)", busConnectivity: "Frequent city buses from Panaji" },
    externalLinks: { googleMaps: "https://goo.gl/maps/miramarbeach" },
    accessibility: { wheelchairFriendly: true, notes: "Promenade is paved and flat." },
    foodGuide: [ { name: "Fisherman's Wharf", type: "Riverside", specialty: "Goan-Portuguese", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "GMC Bambolim" }
  },
  {
    id: 718,
    name: "Betalbatim Beach",
    slug: "betalbatim-beach",
    state: "Salcete, South Goa",
    category: "Beaches",
    badge: "Bioluminescence & Pine Trees",
    image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1686664391_biolumi.jpg.webp",
    description: "A quiet beach distinguished by its stretch of pine trees and potential night bioluminescence.",
    coordinates: { lat: 15.3523, lng: 73.9056 },
    essentials: {
      bestTime: "November to February",
      weather: "Calm",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Madgaon (8 km)", busConnectivity: "Local buses from Margao" },
    externalLinks: { googleMaps: "https://goo.gl/maps/betalbatimbeach" },
    accessibility: { wheelchairFriendly: true, notes: "Flat access to the beach." },
    foodGuide: [ { name: "Beach Shack Joe", type: "Shack", specialty: "Fresh Catch", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Hospicio Margao" }
  },
  {
    id: 719,
    name: "Cavelossim Beach",
    slug: "cavelossim-beach",
    state: "Salcete, South Goa",
    category: "Beaches",
    badge: "Luxury Resorts & River Sal",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5e/84/8a/photo3jpg.jpg?w=900&h=500&s=1",
    description: "Known for black lava rocks and white sand, bordered by the River Sal.",
    coordinates: { lat: 15.1764, lng: 73.9317 },
    essentials: {
      bestTime: "October to April",
      weather: "Pristine",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Madgaon (15 km)", busConnectivity: "Buses from Margao" },
    externalLinks: { googleMaps: "https://goo.gl/maps/cavelossimbeach" },
    accessibility: { wheelchairFriendly: true, notes: "Access is flat." },
    foodGuide: [ { name: "Mike's Place", type: "Casual", specialty: "Tandoori", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "SDH Chicalim" }
  },
  {
    id: 720,
    name: "Mobor Beach",
    slug: "mobor-beach",
    state: "Salcete, South Goa",
    category: "Beaches",
    badge: "Serene Water Sports Hub",
    image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1708502438_mobor_beach.jpg.webp",
    description: "Located at the mouth of River Sal, extension of Cavelossim with high-end resorts.",
    coordinates: { lat: 15.1764, lng: 73.9317 },
    essentials: {
      bestTime: "November to February",
      weather: "Exclusive",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Madgaon (15 km)", busConnectivity: "Accessible via Cavelossim" },
    externalLinks: { googleMaps: "https://goo.gl/maps/moborbeach" },
    accessibility: { wheelchairFriendly: true, notes: "Well-maintained beach strip." },
    foodGuide: [ { name: "Riverside", type: "Fine Dining", specialty: "Italian", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "SDH Chicalim" }
  }
];








