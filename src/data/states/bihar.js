/**
 * BIHAR_PLACES DATASET (Extended - 17 Places)
 * ------------------------------------------------------------------
 * Sources: BSTDC (Bihar Tourism) & ASI (Archaeological Survey of India)
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const BIHAR_PLACES = [
  {
    id: 501,
    name: "Mahabodhi Temple",
    slug: "mahabodhi-temple-bodh-gaya",
    state: "Bodh Gaya, Bihar",
    category: "Spiritual",
    badge: "UNESCO World Heritage",
    image: "https://static.toiimg.com/thumb/47081465.cms?resizemode=75&width=1200&height=900",
    description: "The holiest site in Buddhism, marking the spot where Lord Buddha attained enlightenment under the Bodhi Tree. The main temple is a 55m high pyramidal structure built in the 5th-6th century AD.",
    coordinates: { lat: 24.6960, lng: 84.9913 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm days/Cool nights",
      timings: "05:00 AM - 09:00 PM",
      entryFee: { Entry: "Free", Camera: "₹100" }
    },
    transport: { nearestAirport: "Gaya International (12 km)", nearestRailway: "Gaya Junction (16 km)", busConnectivity: "Regular BSTDC buses from Patna and Gaya town" },
    externalLinks: { officialBooking: "https://tourism.bihar.gov.in/", googleMaps: "https://goo.gl/maps/mahabodhi" },
    accessibility: { wheelchairFriendly: true, notes: "The entire temple complex is flat and paved. Wheelchairs are available." },
    routePlan: [ { time: "06:00 AM", activity: "Meditation under Bodhi Tree" }, { time: "10:30 AM", activity: "Visit 80ft Giant Buddha Statue" } ],
    foodGuide: [ { name: "Be Happy Cafe", type: "Cafe", specialty: "Italian & Bakery", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Magadh Medical College" }
  },
  {
    id: 502,
    name: "Ruins of Nalanda University",
    slug: "nalanda-university-ruins",
    state: "Nalanda, Bihar",
    category: "Heritage",
    badge: "First Residential University",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg",
    description: "A UNESCO World Heritage site, this was a renowned center of learning from the 5th to 12th century AD. The sprawling red brick ruins include stupas, shrines, and viharas (monk cells).",
    coordinates: { lat: 25.1357, lng: 85.4404 },
    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Pleasant",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Indian: "₹40", Foreigner: "₹600", Video: "₹25" }
    },
    transport: { nearestAirport: "Patna (85 km)", nearestRailway: "Rajgir (12 km)", busConnectivity: "Frequent buses from Rajgir and Bihar Sharif" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/nalanda" },
    accessibility: { wheelchairFriendly: true, notes: "Main pathways are paved. Ramps at major entry points." },
    routePlan: [ { time: "10:00 AM", activity: "Ruins Exploration" }, { time: "12:00 PM", activity: "Archaeological Museum" } ],
    foodGuide: [ { name: "Gargee Gautam Vihar", type: "Hotel", specialty: "North Indian Thali", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sadar Hospital, Bihar Sharif" }
  },
  {
    id: 503,
    name: "Rajgir Glass Bridge & Zoo Safari",
    slug: "rajgir-glass-bridge",
    state: "Rajgir, Bihar",
    category: "Nature",
    badge: "Modern Skywalk",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/glass-bridge-rajgir-nalanda-bihar-2-attr-hero?qlt=82&ts=1751459210821",
    description: "Set amidst the five hills of Rajgir, this features a glass skywalk and a unique Zoo Safari where tourists are caged in vehicles while animals roam free.",
    coordinates: { lat: 25.0069, lng: 85.3986 },
    essentials: {
      bestTime: "Winter",
      weather: "Pleasant",
      timings: "09:00 AM - 05:00 PM (Mon Closed)",
      entryFee: { GlassBridge: "₹125", ZooSafari: "₹250", Ropeway: "₹100" }
    },
    transport: { nearestAirport: "Patna (100 km)", nearestRailway: "Rajgir Station (3 km)", busConnectivity: "Direct buses from Patna ISBT" },
    externalLinks: { officialBooking: "https://rajgirzoosafari.bihar.gov.in/", googleMaps: "https://goo.gl/maps/rajgir" },
    accessibility: { wheelchairFriendly: true, notes: "Zoo safari vehicles are accessible." },
    routePlan: [ { time: "09:00 AM", activity: "Zoo Safari" }, { time: "11:30 AM", activity: "Glass Bridge" } ],
    foodGuide: [ { name: "Green Hotel", type: "Local", specialty: "Litti Chokha", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sub-Divisional Hospital Rajgir" }
  },
  {
    id: 504,
    name: "Valmiki Tiger Reserve",
    slug: "valmiki-tiger-reserve",
    state: "West Champaran, Bihar",
    category: "Wildlife",
    badge: "Only Tiger Reserve in Bihar",
    image: "https://www.valmikitigerreserve.in/news/images/best-time.jpg",
    description: "Located in West Champaran at the India-Nepal border, this pristine forest is home to Tigers, Rhinos, and Leopards. The Gandak river flows through it.",
    coordinates: { lat: 27.3888, lng: 84.1220 },
    essentials: {
      bestTime: "November to March",
      weather: "Forest/Cool",
      timings: "06:00 AM - 04:00 PM",
      entryFee: { Entry: "₹50", JeepSafari: "₹1500", BoatRide: "₹200" }
    },
    transport: { nearestAirport: "Gorakhpur (120 km)", nearestRailway: "Valmiki Nagar Road (5 km)", busConnectivity: "Buses from Bettiah or Gorakhpur" },
    externalLinks: { officialBooking: "https://valmikitigerreserve.com/", googleMaps: "https://goo.gl/maps/valmiki" },
    accessibility: { wheelchairFriendly: false, notes: "Jungle terrain is rough. Eco-huts are accessible." },
    routePlan: [ { time: "06:00 AM", activity: "Morning Safari" }, { time: "10:00 AM", activity: "Valmiki Ashram Visit" } ],
    foodGuide: [ { name: "Valmiki Vihar Hotel", type: "Govt Lodge", specialty: "Veg Meals", rating: 3.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sub-Divisional Hospital Bagaha" }
  },
  {
    id: 505,
    name: "Sher Shah Suri Tomb",
    slug: "sher-shah-suri-tomb",
    state: "Sasaram, Bihar",
    category: "Heritage",
    badge: "Indo-Islamic Marvel",
    image: "https://superbcollections.com/wp-content/uploads/2024/02/1280px-__Tomb_of_Sher_Shah_Suri__.jpg",
    description: "A magnificent Indo-Islamic mausoleum built in red sandstone, standing in the middle of an artificial lake. Dedicated to Emperor Sher Shah Suri.",
    coordinates: { lat: 24.9436, lng: 84.0134 },
    essentials: {
      bestTime: "Winter",
      weather: "Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestAirport: "Varanasi (130 km)", nearestRailway: "Sasaram Junction (2 km)", busConnectivity: "Grand Trunk Road connectivity" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/shershah" },
    accessibility: { wheelchairFriendly: true, notes: "A causeway connects mainland to island tomb." },
    routePlan: [ { time: "09:00 AM", activity: "Tomb Photography" } ],
    foodGuide: [ { name: "Sher Shah Vihar", type: "City", specialty: "Tandoori Chicken", rating: 3.8 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sadar Hospital Sasaram" }
  },
  {
    id: 506,
    name: "Bihar Museum",
    slug: "bihar-museum",
    state: "Patna, Bihar",
    category: "Heritage",
    badge: "World Class Museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Bihar_Museum_Bailey_Road_02.jpg",
    description: "A state-of-the-art history museum in Patna. It houses artifacts from ancient Magadha to modern art, including the famous Didarganj Yakshi.",
    coordinates: { lat: 25.6067, lng: 85.1190 },
    essentials: {
      bestTime: "All Year",
      weather: "Indoor/AC",
      timings: "10:00 AM - 05:00 PM (Closed Mon)",
      entryFee: { Indian: "₹100", Foreigner: "₹500", Student: "₹50" }
    },
    transport: { nearestAirport: "Patna (5 km)", nearestRailway: "Patna Junction (3 km)", busConnectivity: "Central Patna location" },
    externalLinks: { officialBooking: "https://biharmuseum.org/", googleMaps: "https://goo.gl/maps/biharmuseum" },
    accessibility: { wheelchairFriendly: true, notes: "Fully accessible with elevators and ramps." },
    routePlan: [ { time: "10:30 AM", activity: "History Galleries" }, { time: "02:00 PM", activity: "Lunch at Potbelly Cafe" } ],
    foodGuide: [ { name: "The Potbelly", type: "Museum Cafe", specialty: "Bihari Thali", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "IGIMS Patna" }
  },
  {
    id: 507,
    name: "Takht Sri Patna Sahib",
    slug: "takht-sri-patna-sahib",
    state: "Patna, Bihar",
    category: "Spiritual",
    badge: "Birthplace of Guru Gobind Singh",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/takht-sri-patna-sahib-patna2-bihar-attr-hero?qlt=82&ts=1742168018932",
    description: "One of the five Takhts of Sikhism, this Gurudwara commemorates the birthplace of the tenth Sikh Guru, Guru Gobind Singh Ji.",
    coordinates: { lat: 25.6110, lng: 85.2323 },
    essentials: {
      bestTime: "October to March",
      weather: "Humid/Warm",
      timings: "02:30 AM - 10:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Patna (18 km)", nearestRailway: "Patna Sahib Station (1 km)", busConnectivity: "City buses from Patna Jn" },
    externalLinks: { officialBooking: "https://www.takhatpatnasahib.com/", googleMaps: "https://goo.gl/maps/patnasahib" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps at entrance. Lifts for upper floors." },
    routePlan: [ { time: "05:00 AM", activity: "Morning Ardas" }, { time: "12:00 PM", activity: "Langar" } ],
    foodGuide: [ { name: "Guru Ka Langar", type: "Pilgrim", specialty: "Veg Meal", rating: 4.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "NMCH Patna" }
  },
  {
    id: 508,
    name: "Vishnupad Temple",
    slug: "vishnupad-temple",
    state: "Gaya, Bihar",
    category: "Spiritual",
    badge: "Footprint of Lord Vishnu",
    image: "https://vajiramandravi.com/current-affairs/wp-content/uploads/2025/04/vishpud_temple.webp",
    description: "Located on the Falgu River, this temple houses a 40cm footprint of Lord Vishnu. It is a major center for Pind Daan rituals.",
    coordinates: { lat: 24.7801, lng: 85.0080 },
    essentials: {
      bestTime: "Pitru Paksha or Winter",
      weather: "Hot/Dry",
      timings: "06:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Gaya Junction (4 km)", busConnectivity: "Auto-rickshaws from station" },
    externalLinks: { googleMaps: "https://goo.gl/maps/vishnupad" },
    accessibility: { wheelchairFriendly: false, notes: "Narrow lanes and steps." },
    routePlan: [ { time: "07:00 AM", activity: "Falgu River Rituals" }, { time: "09:00 AM", activity: "Darshan" } ],
    foodGuide: [ { name: "Pramod Laddu Bhandar", type: "Iconic", specialty: "Gaya Tilkut", rating: 4.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Pilgrim Hospital Gaya" }
  },
  {
    id: 509,
    name: "Vikramshila Ruins",
    slug: "vikramshila-ruins",
    state: "Bhagalpur, Bihar",
    category: "Heritage",
    badge: "Buddhist Learning Center",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Vikramshila_2012-08-10-17.14.08.jpg/1200px-Vikramshila_2012-08-10-17.14.08.jpg",
    description: "Established by King Dharmapala, Vikramshila was a premier university alongside Nalanda. Known for its massive central stupa.",
    coordinates: { lat: 25.3287, lng: 87.2307 },
    essentials: {
      bestTime: "Nov to Feb",
      weather: "Pleasant",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestRailway: "Kahalgaon (13 km)", busConnectivity: "Accessible via Bhagalpur (40 km)" },
    externalLinks: { googleMaps: "https://goo.gl/maps/vikramshila" },
    accessibility: { wheelchairFriendly: false, notes: "Grassy terrain with terrace steps." },
    routePlan: [ { time: "10:00 AM", activity: "Central Stupa Walk" }, { time: "12:00 PM", activity: "ASI Museum" } ],
    foodGuide: [ { name: "Hotel Rajhans", type: "City", specialty: "North Indian", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sadar Hospital Bhagalpur" }
  },
  {
    id: 510,
    name: "Golghar",
    slug: "golghar-patna",
    state: "Patna, Bihar",
    category: "Heritage",
    badge: "Icon of Patna",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/gol-ghar-patna-bihar-1-attr-hero?qlt=82&ts=1742165922608",
    description: "A massive beehive-shaped granary built in 1786. It offers a panoramic view of Patna and the Ganges river.",
    coordinates: { lat: 25.6175, lng: 85.1376 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "10:00 AM - 05:00 PM (Mon Closed)",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Patna Junction (3 km)", busConnectivity: "Central Patna location" },
    externalLinks: { googleMaps: "https://goo.gl/maps/golghar" },
    accessibility: { wheelchairFriendly: true, notes: "Garden is accessible; top dome is not." },
    routePlan: [ { time: "04:00 PM", activity: "Garden Walk" }, { time: "06:00 PM", activity: "Boat Ride nearby" } ],
    foodGuide: [ { name: "Bansi Vihar", type: "City", specialty: "South Indian", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "PMCH Patna" }
  },
  {
    id: 511,
    name: "80 Feet Buddha Statue",
    slug: "giant-buddha-statue-bodh-gaya",
    state: "Bodh Gaya, Bihar",
    category: "Spiritual",
    badge: "Largest Buddha in India",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/63/78/9c/80-feet-buda.jpg?w=1200&h=1200&s=1",
    description: "A monumental 80-foot statue of Lord Buddha in meditation pose, consecrated by the Dalai Lama.",
    coordinates: { lat: 24.6923, lng: 84.9928 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "07:00 AM - 12:00 PM, 02:00 PM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Gaya Junction (16 km)", busConnectivity: "Auto from Mahabodhi" },
    externalLinks: { googleMaps: "https://goo.gl/maps/GiantBuddha" },
    accessibility: { wheelchairFriendly: true, notes: "Surrounding area is flat." },
    routePlan: [ { time: "07:00 AM", activity: "Darshan" }, { time: "09:00 AM", activity: "Visit Thai Monastery" } ],
    foodGuide: [ { name: "Lotus Restaurant", type: "Multi", specialty: "Asian", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Magadh Medical" }
  },
  {
    id: 512,
    name: "Jal Mandir (Water Temple)",
    slug: "jal-mandir-pawapuri",
    state: "Pawapuri, Bihar",
    category: "Spiritual",
    badge: "Mahavira's Nirvana Site",
    image: "https://www.trawell.in/admin/images/upload/083375563Rajgir_Pawapuri_Jal_Mandir_Main.jpg",
    description: "A white marble Jain temple in the middle of a lotus pond, marking the spot where Lord Mahavira attained Nirvana.",
    coordinates: { lat: 25.1764, lng: 85.5342 },
    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "05:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Pawapuri Road (10 km)", busConnectivity: "Buses from Bihar Sharif" },
    externalLinks: { googleMaps: "https://goo.gl/maps/JalMandir" },
    accessibility: { wheelchairFriendly: true, notes: "Causeway to temple is flat." },
    routePlan: [ { time: "09:00 AM", activity: "Temple Darshan" } ],
    foodGuide: [ { name: "Local Mess", type: "Veg", specialty: "Simple Thali", rating: 3.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "PHC Pawapuri" }
  },
  {
    id: 513,
    name: "Patna Museum",
    slug: "patna-museum",
    state: "Patna, Bihar",
    category: "Heritage",
    badge: "Oldest Museum in Bihar",
    image: "https://cdnbbsr.s3waas.gov.in/s337d097caf1299d9aa79c2c2b843d2d78/uploads/2019/09/2023012053.jpg",
    description: "Built in 1917, houses artifacts including coin collections and a 200-million-year-old fossilized tree.",
    coordinates: { lat: 25.6090, lng: 85.1270 },
    essentials: {
      bestTime: "All Year",
      weather: "Indoor",
      timings: "10:30 AM - 04:30 PM (Closed Mon)",
      entryFee: { Indian: "₹20", Foreigner: "₹250" }
    },
    transport: { nearestRailway: "Patna Junction (2 km)", busConnectivity: "Budh Marg location" },
    externalLinks: { googleMaps: "https://goo.gl/maps/PatnaMuseum" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available at main entry." },
    routePlan: [ { time: "11:00 AM", activity: "Buddha Relics Gallery" } ],
    foodGuide: [ { name: "Litti Chowk Cafe", type: "Budget", specialty: "Bihari Snacks", rating: 3.9 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "PMCH Patna" }
  },
  {
    id: 514,
    name: "Rohtasgarh Fort",
    slug: "rohtasgarh-fort",
    state: "Rohtas, Bihar",
    category: "Heritage",
    badge: "Ancient Hill Fort",
    image: "https://tripxl.com/blog/wp-content/uploads/2024/09/Rohtasgarh-Fort-OG-Photo.jpg",
    description: "One of the largest hill forts in India atop Kaimur hills. Spread over 45 sq km.",
    coordinates: { lat: 24.6300, lng: 83.9240 },
    essentials: {
      bestTime: "Nov to Feb",
      weather: "Trekking",
      timings: "05:00 AM - 07:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Sasaram Junction (50 km)", busConnectivity: "Jeeps from Sasaram" },
    externalLinks: { googleMaps: "https://goo.gl/maps/RohtasFort" },
    accessibility: { wheelchairFriendly: false, notes: "4-5 hour strenuous trek." },
    routePlan: [ { time: "06:00 AM", activity: "Begin Trek" }, { time: "12:00 PM", activity: "Explore Palace" } ],
    foodGuide: [ { name: "Local Stalls", type: "Budget", specialty: "Tea", rating: 3.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sadar Sasaram" }
  },
  {
    id: 515,
    name: "Ashokan Pillar & Stupas",
    slug: "vaishali-ashokan-pillar",
    state: "Vaishali, Bihar",
    category: "Heritage",
    badge: "First Republic",
    image: "https://blissfulbihar.com/wp-content/uploads/2023/08/vaishali-ashoka-pillar-monument.webp",
    description: "Site of the Second Buddhist Council and birthplace of Lord Mahavira. Features a monolithic Ashokan Pillar.",
    coordinates: { lat: 25.9926, lng: 85.1278 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestRailway: "Hajipur (35 km)", busConnectivity: "Direct taxis from Patna" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/Vaishali" },
    accessibility: { wheelchairFriendly: true, notes: "Main park is flat." },
    routePlan: [ { time: "10:00 AM", activity: "Ashokan Pillar" }, { time: "12:00 PM", activity: "Vishwa Shanti Stupa" } ],
    foodGuide: [ { name: "Local Dhaba", type: "Budget", specialty: "Litti Chokha", rating: 3.7 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Hajipur Hospital" }
  },
  {
    id: 516,
    name: "Barabar Caves",
    slug: "barabar-caves-jehanabad",
    state: "Jehanabad, Bihar",
    category: "Heritage",
    badge: "Oldest Rock-Cut Caves",
    image: "https://media.assettype.com/outlooktraveller%2F2024-04%2F34e3a802-53a7-4e95-8377-3e84ffa4eea6%2FThe_Lomas_Rishi_cave_built_into_a_gigantic_boulder_at_Barabar.JPG",
    description: "Dating back to the Mauryan period, these are the oldest surviving rock-cut caves in India.",
    coordinates: { lat: 25.0480, lng: 85.0640 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "08:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Bela (20 km)", busConnectivity: "Taxi from Gaya or Jehanabad" },
    externalLinks: { googleMaps: "https://goo.gl/maps/BarabarCaves" },
    accessibility: { wheelchairFriendly: false, notes: "Climbing a small hill required." },
    routePlan: [ { time: "09:00 AM", activity: "Lomas Rishi Cave" } ],
    foodGuide: [ { name: "Local Tea Stalls", type: "Budget", specialty: "Snacks", rating: 3.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Jehanabad Sadar" }
  },
  {
    id: 517,
    name: "Mundeshwari Temple",
    slug: "mundeshwari-temple-kaimur",
    state: "Kaimur, Bihar",
    category: "Spiritual",
    badge: "Oldest Functional Temple",
    image: "https://static.toiimg.com/thumb/msid-123161719,width-1280,height-720,resizemode-4/123161719.jpg",
    description: "Considered the oldest functional Hindu temple in India, with a rare octagonal plan dating to 625 AD.",
    coordinates: { lat: 25.0350, lng: 83.5850 },
    essentials: {
      bestTime: "September to March",
      weather: "Pleasant",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Bhabua Road (25 km)", busConnectivity: "Local transport from Bhabua" },
    externalLinks: { googleMaps: "https://goo.gl/maps/MundeshwariTemple" },
    accessibility: { wheelchairFriendly: false, notes: "Hilltop location with steps." },
    routePlan: [ { time: "10:00 AM", activity: "Darshan" } ],
    foodGuide: [ { name: "Temple Canteen", type: "Veg", specialty: "Prasad", rating: 3.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-103-3500", nearestHospital: "Sadar Bhabua" }
  }
];
















