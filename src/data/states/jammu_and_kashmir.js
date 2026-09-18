

export const JAMMU_AND_KASHMIR_PLACES = [
  {
    id: 3401,
    name: "Vaishno Devi Temple",
    slug: "vaishno-devi-katra",
    cityState: "Katra, Jammu and Kashmir",
    category: "Spiritual",
    badge: "Holiest Shakti Peeth",
    image: " https://charzanholidays.com/wp-content/uploads/2024/10/vaishno-devi-temple_charzan_holidays.png ",
    description: "A world-famous pilgrimage site in the Trikuta Mountains. The 12 km trek from Katra leads to the holy cave of Mata Vaishno Devi.",
    coordinates: { lat: 33.0308, lng: 74.9490 },
    essentials: {
      bestTime: "March to October",
      weather: "Cold/Alpine",
      timings: "24 Hours (RFID card required)",
      entryFee: { Registration: "Free", Helicopter: "₹2100 (Approx)" }
    },
    transport: { nearestAirport: "Jammu (50 km)", nearestRailway: "SVDK Katra (0 km)", busConnectivity: "Direct from Delhi/Jammu" },
    externalLinks: { officialBooking: "https://www.maavaishnodevi.org/", googleMaps: "https://goo.gl/maps/vaishnodevi" },
    accessibility: { wheelchairFriendly: true, notes: "Tarakote Marg is paved; battery cars available." },
    routePlan: [{ time: "06:00 AM", activity: "Start Trek" }, { time: "02:00 PM", activity: "Bhawan Darshan" }],
    foodGuide: [{ name: "Shrine Board Canteen", specialty: "Rajma Chawal", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "Narayana Hospital Kakryal" }
  },
  {
    id: 3402,
    name: "Shankaracharya Temple",
    slug: "shankaracharya-temple-srinagar",
    cityState: "Srinagar, Jammu and Kashmir",
    category: "Spiritual",
    badge: "Panoramic City View",
    image: " https://brownchinarkashmir.com/wp-content/uploads/2024/11/shankaracharya-temple_brown_chinar_kashmir.webp ",
    description: "An ancient Shiva temple perched on a hilltop, offering 360-degree views of Srinagar and Dal Lake.",
    coordinates: { lat: 34.0713, lng: 74.8436 },
    essentials: {
      bestTime: "April to October",
      weather: "Windy",
      timings: "07:00 AM - 08:00 PM (No Phones)",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Srinagar (15 km)", busConnectivity: "Taxis go till base; 240 steps climb" },
    externalLinks: { officialBooking: "https://jk-tourism.gov.in/", googleMaps: "https://goo.gl/maps/shankaracharya" },
    accessibility: { wheelchairFriendly: false, notes: "243 steep stone steps to reach the top." },
    routePlan: [{ time: "08:00 AM", activity: "Hill Drive" }, { time: "09:00 AM", activity: "Darshan & Photography" }],
    foodGuide: [{ name: "Krishna Dhaba", specialty: "Rajma Chawal", rating: 4.6 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "GB Pant Hospital" }
  },
  {
    id: 3403,
    name: "Dal Lake",
    slug: "dal-lake-srinagar",
    cityState: "Srinagar, Jammu and Kashmir",
    category: "Nature",
    badge: "Jewel of Kashmir",
    image: " https://brownchinarkashmir.com/wp-content/uploads/2024/01/dal-lake-kashmir_brown_chinar.jpg.webp ",
    description: "The pride of Srinagar, famous for its houseboats, floating vegetable markets, and scenic Shikara rides.",
    coordinates: { lat: 34.1167, lng: 74.8698 },
    essentials: {
      bestTime: "April to October",
      timings: "24 Hours (Shikara: 6 AM - 8 PM)",
      entryFee: { Shikara: "₹700-1200/hr" }
    },
    transport: { nearestAirport: "Srinagar (15 km)", busConnectivity: "Easy via Boulevard Road" },
    externalLinks: { officialBooking: "https://jk-tourism.gov.in/", googleMaps: "https://goo.gl/maps/dallake" },
    accessibility: { wheelchairFriendly: false, notes: "Shikara boarding needs balance." },
    routePlan: [{ time: "06:00 AM", activity: "Floating Market" }, { time: "05:00 PM", activity: "Sunset Shikara Ride" }],
    foodGuide: [{ name: "Shamyana", specialty: "Wazwan", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "SMHS Hospital" }
  },
  {
    id: 3404,
    name: "Gulmarg Gondola",
    slug: "gulmarg-gondola",
    cityState: "Gulmarg, Jammu and Kashmir",
    category: "Adventure",
    badge: "Highest Cable Car in Asia",
    image: " https://brownchinarkashmir.com/wp-content/uploads/2024/11/best_time_to_visit_gulmarg_brown_chinar_kashmir.webp ",
    description: "A two-phase cable car ride taking you to Apharwat Peak (13,780 ft) for skiing and stunning snow views.",
    coordinates: { lat: 34.0484, lng: 74.3805 },
    essentials: {
      bestTime: "Dec to March (Snow)",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Phase1: "₹740", Phase2: "₹950" }
    },
    transport: { nearestRailway: "Srinagar (55 km)", busConnectivity: "Shared taxi from Tangmarg" },
    externalLinks: { officialBooking: "https://www.jammukashmircablecar.com/", googleMaps: "https://goo.gl/maps/gulmarg" },
    accessibility: { wheelchairFriendly: false, notes: "Snowy terrain makes wheelchair use tough." },
    routePlan: [{ time: "09:00 AM", activity: "Phase 1 Boarding" }, { time: "11:00 AM", activity: "Snow Activities at Top" }],
    foodGuide: [{ name: "Igloo Cafe", specialty: "Hot Chocolate", rating: 4.7 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "PHC Gulmarg" }
  },
  {
    id: 3405,
    name: "Betaab Valley",
    slug: "betaab-valley-pahalgam",
    cityState: "Pahalgam, Jammu and Kashmir",
    category: "Nature",
    badge: "Filmic Landscape",
    image: " https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1699885470_bvp1.jpg.webp ",
    description: "Named after the movie 'Betaab', this valley offers lush meadows and crystal-clear Lidder river views.",
    coordinates: { lat: 34.0161, lng: 75.3262 },
    essentials: {
      bestTime: "May to October",
      timings: "08:00 AM - 06:00 PM",
      entryFee: { Adult: "₹100" }
    },
    transport: { nearestRailway: "Anantnag (45 km)", busConnectivity: "Local Union Taxi required" },
    externalLinks: { officialBooking: "https://jk-tourism.gov.in/", googleMaps: "https://goo.gl/maps/betaab" },
    accessibility: { wheelchairFriendly: true, notes: "Mostly flat paved paths inside the park." },
    routePlan: [{ time: "10:00 AM", activity: "Valley Walk" }, { time: "01:00 PM", activity: "River Photography" }],
    foodGuide: [{ name: "Dana Pani", specialty: "North Indian", rating: 4.3 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "Civil Hospital Pahalgam" }
  },
  {
    id: 3406,
    name: "Thajiwas Glacier",
    slug: "thajiwas-glacier-sonamarg",
    cityState: "Sonamarg, Jammu and Kashmir",
    category: "Nature",
    badge: "Year-Round Snow",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/34/23/6b/another-view-of-thajwas.jpg?w=1200&h=-1&s=1 ",
    description: "A stunning glacier accessible by a short trek or pony ride from Sonamarg, famous for sledging and snow views.",
    coordinates: { lat: 34.3057, lng: 75.2930 },
    essentials: {
      bestTime: "April to September",
      timings: "Daylight Hours",
      entryFee: { Pony: "₹1200-1500 (Negotiable)" }
    },
    transport: { nearestAirport: "Srinagar (80 km)", busConnectivity: "Taxi from Srinagar (2.5 hrs)" },
    externalLinks: { officialBooking: "https://jk-tourism.gov.in/", googleMaps: "https://goo.gl/maps/thajiwas" },
    accessibility: { wheelchairFriendly: false, notes: "Requires trekking or pony ride." },
    routePlan: [{ time: "10:00 AM", activity: "Pony Ride to Glacier" }, { time: "02:00 PM", activity: "Sledging" }],
    foodGuide: [{ name: "Hotel Snowland", specialty: "Kashmiri Pulao", rating: 4.1 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "PHC Sonamarg" }
  },
  {
    id: 3407,
    name: "Mughal Gardens (Nishat & Shalimar)",
    slug: "mughal-gardens-srinagar",
    cityState: "Srinagar, Jammu and Kashmir",
    category: "Heritage",
    badge: "Persian Terraced Gardens",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/7a/66/d8/when-shah-jahan-saw-the.jpg?w=1200&h=-1&s=1 ",
    description: "Beautifully landscaped gardens overlooking Dal Lake, featuring fountains, Chinar trees, and vibrant flowers.",
    coordinates: { lat: 34.1256, lng: 74.8812 },
    essentials: {
      bestTime: "April to October",
      timings: "09:00 AM - 07:00 PM",
      entryFee: { Adult: "₹24" }
    },
    transport: { nearestRailway: "Srinagar (18 km)", busConnectivity: "Easy via Taxi/Auto" },
    externalLinks: { officialBooking: "https://jk-tourism.gov.in/", googleMaps: "https://goo.gl/maps/nishat" },
    accessibility: { wheelchairFriendly: true, notes: "Lower terraces are mostly accessible." },
    routePlan: [{ time: "10:00 AM", activity: "Nishat Bagh" }, { time: "12:00 PM", activity: "Shalimar Bagh" }],
    foodGuide: [{ name: "Mughal Darbar", specialty: "Wazwan", rating: 4.5 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "SKIMS Hospital" }
  },
  {
    id: 3408,
    name: "Patnitop (Skyview Gondola)",
    slug: "patnitop-udhampur",
    cityState: "Udhampur, Jammu and Kashmir",
    category: "Hill Stations",
    badge: "Pine Forests & Ropeway",
    image: " https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/39/87/50/skyview-gondola-over.jpg?w=900&h=500&s=1",
    description: "A peaceful hill station with cedar forests and India's highest ropeway connecting Sanget to Patnitop.",
    coordinates: { lat: 33.0933, lng: 75.3262 },
    essentials: {
      bestTime: "All Year (Snow in Winter)",
      timings: "24 Hours (Gondola: 10 AM - 5 PM)",
      entryFee: { Gondola: "₹999+" }
    },
    transport: { nearestRailway: "Udhampur (45 km)", busConnectivity: "On Jammu-Srinagar Highway" },
    externalLinks: { officialBooking: "https://skyviewbyempyrean.com/", googleMaps: "https://goo.gl/maps/patnitop" },
    accessibility: { wheelchairFriendly: true, notes: "Gondola is fully accessible." },
    routePlan: [{ time: "10:00 AM", activity: "Skyview Ride" }, { time: "01:00 PM", activity: "Meadow Walk" }],
    foodGuide: [{ name: "Prem Sweets Kud", specialty: "Patisa", rating: 4.8 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "CHC Chenani" }
  },
  {
    id: 3409,
    name: "Doodhpathri",
    slug: "doodhpathri-budgam",
    cityState: "Budgam, Jammu and Kashmir",
    category: "Nature",
    badge: "Valley of Milk",
    image: "https://brownchinarkashmir.com/wp-content/uploads/2024/12/doodhpathri_kashmir_brown_chinar_kashmir.webp",
    description: "A hidden gem meadow where the Shaliganga river flows white like milk over rocks.",
    coordinates: { lat: 33.8767, lng: 74.5772 },
    essentials: {
      bestTime: "May to September",
      weather: "Cold",
      timings: "Daylight Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Budgam (30 km)", busConnectivity: "Taxi from Srinagar (42 km)" },
    externalLinks: { officialBooking: "https://jk-tourism.gov.in/", googleMaps: "https://goo.gl/maps/doodhpathri" },
    accessibility: { wheelchairFriendly: false, notes: "Grassy and uneven terrain." },
    routePlan: [{ time: "11:00 AM", activity: "Meadow Picnic" }, { time: "02:00 PM", activity: "River Walk" }],
    foodGuide: [{ name: "Local Stalls", specialty: "Makki Roti & Tea", rating: 4.0 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "District Hospital Budgam" }
  },
  {
    id: 3410,
    name: "Martand Sun Temple",
    slug: "martand-sun-temple-anantnag",
    cityState: "Anantnag, Jammu and Kashmir",
    category: "Heritage",
    badge: "8th Century Marvel",
    image: " https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAJMa_3l5_rHsMQJPwLO_-1b6EPu0NRQ1iwLEZsZsPcxbthdbOlZ36cE4M3ueEcdzRoYv-TFMPhAPaipvpBVNjN2VFkDrWDhYktMtUF6ob-bzeIa1BEWrYeu10uExBzBT6qluCEas0bhcT/w1200-h630-p-k-no-nu/Martand+Temple+1.jpg ",
    description: "Ancient Hindu temple ruins dedicated to the Sun God, built by the Karkota dynasty. A masterpiece of Kashmiri architecture.",
    coordinates: { lat: 33.7461, lng: 75.2155 },
    essentials: {
      bestTime: "April to June",
      timings: "06:00 AM - 07:00 PM",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestRailway: "Anantnag (10 km)", busConnectivity: "Taxi/Auto from Anantnag" },
    externalLinks: { officialBooking: "https://asi.nic.in/", googleMaps: "https://goo.gl/maps/martand" },
    accessibility: { wheelchairFriendly: true, notes: "Main complex ground is mostly flat." },
    routePlan: [{ time: "09:00 AM", activity: "Heritage Tour" }, { time: "11:00 AM", activity: "Photography" }],
    foodGuide: [{ name: "Local Anantnag Shops", specialty: "Kashmiri Bakery", rating: 3.9 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "GMC Anantnag" }
  },
  {
    id: 3411,
    name: "Yusmarg",
    slug: "yusmarg-budgam",
    cityState: "Budgam, Jammu and Kashmir",
    category: "Nature",
    badge: "Meadow of Jesus",
    image: " https://s3.india.com/wp-content/uploads/2024/12/First-Time-In-Yusmarg_-Essential-Travel-Tips-For-Exploring-Jammu-Kashmir.jpg ", 
    description: "An offbeat, serene meadow surrounded by pine forests and snowy peaks. Known for its silence and Nilnag Lake.",
    coordinates: { lat: 33.8344, lng: 74.6644 },
    essentials: {
      bestTime: "April to September",
      timings: "Daylight Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Srinagar (48 km)", busConnectivity: "Direct Taxi from Srinagar (2 hrs)" },
    externalLinks: { officialBooking: "https://jk-tourism.gov.in/", googleMaps: "https://goo.gl/maps/yusmarg" },
    accessibility: { wheelchairFriendly: false, notes: "Nature trails and meadows are grassy." },
    routePlan: [{ time: "10:00 AM", activity: "Nilnag Lake Trek" }, { time: "01:00 PM", activity: "Meadow Relaxation" }],
    foodGuide: [{ name: "Yusmarg Tourist Hut", specialty: "Kashmiri Tea", rating: 3.8 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "District Hospital Budgam" }
  },
  {
    id: 3412,
    name: "Amarnath Cave",
    slug: "amarnath-cave-anantnag",
    cityState: "Pahalgam/Baltal, Jammu and Kashmir",
    category: "Spiritual",
    badge: "Natural Ice Lingam",
    image: "https://www.shutterstock.com/image-photo/amarnath-yatra-temple-hindu-shrine-600nw-2274861331.jpg ",
    description: "One of the most sacred Hindu shrines. Accessible only during July-August via a challenging trek through snow-capped mountains.",
    coordinates: { lat: 34.2155, lng: 75.5011 },
    essentials: {
      bestTime: "July to August (Yatra Dates)",
      weather: "Freezing",
      timings: "Check Yatra Schedule (RFID mandatory)",
      entryFee: { Registration: "₹220", Helicopter: "₹3600 (Round trip)" }
    },
    transport: { nearestRailway: "Jammu (300 km)", busConnectivity: "Buses to Baltal or Pahalgam base camps" },
    externalLinks: { officialBooking: "http://www.shriamarnathjishrine.com/", googleMaps: "https://goo.gl/maps/amarnath" },
    accessibility: { wheelchairFriendly: false, notes: "Hard trek; ponies and palkis available." },
    routePlan: [{ time: "04:00 AM", activity: "Start Trek from Baltal" }, { time: "10:00 AM", activity: "Holy Darshan" }],
    foodGuide: [{ name: "Langar Service", specialty: "Free Satvik Meals", rating: 5.0 }],
    emergency: { police: "100", touristHelpline: "1800-180-7205", hospital: "Yatra Medical Camp" }
  }
];






