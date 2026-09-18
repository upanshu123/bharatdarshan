/**
 * ANDHRA_PRADESH_PLACES DATASET - COMPREHENSIVE
 *
 * Covers: Spiritual, Nature, Heritage, Hill Stations, Beaches, Wildlife
 */

export const ANDHRA_PRADESH_PLACES = [
  // --- SPIRITUAL ---
  {
    id: 101,
    name: "Tirumala Venkateswara Temple",
    slug: "tirumala-venkateswara-temple",
    state: "Tirupati, Andhra Pradesh",
    category: "Spiritual",
    badge: "Richest Temple in the World",
    image: "https://c9admin.cottage9.com/uploads/2292/Our-Temples-Our-Heritage-Tirumala-Venkateshwara-Temple-Tirupati-Balaji.jpg",
    description: "Perched on the Seshachalam Hills, this iconic temple dedicated to Lord Venkateswara attracts millions of pilgrims annually. It is a masterpiece of Dravidian architecture and a major center of Vaishnavism.",
    coordinates: { lat: 13.6833, lng: 79.3472 },
    essentials: {
      bestTime: "September to March",
      weather: "Tropical/Humid",
      timings: "02:30 AM - 01:30 AM (Almost 24x7)",
      entryFee: {
        SarvaDarshan: "Free",
        SpecialEntry: "₹300 (Online Booking Mandatory)",
        LadduPrasam: "₹50 (Extra)"
      }
    },
    transport: {
      nearestAirport: "Tirupati (40 km)",
      nearestRailway: "Tirupati Main (26 km)",
      busConnectivity: "APSRTC electric buses run every 2 minutes from Tirupati to Tirumala"
    },
    externalLinks: {
      officialBooking: "https://tirupatibalaji.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/tirumala"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Dedicated queues for differently-abled and senior citizens (Mahadwaram entry). Battery cars available."
    },
    routePlan: [
      { time: "08:00 AM", activity: "Vaikuntam Queue Complex Entry" },
      { time: "11:00 AM", activity: "Darshan of Lord Venkateswara" },
      { time: "01:00 PM", activity: "Laddu Prasadam Counter" }
    ],
    foodGuide: [
      { name: "Annaprasadam Complex", type: "Pilgrim", specialty: "Free Meals (Unlimited)", rating: 4.9 },
      { name: "Hotel Bhimas (Tirupati)", type: "Mid-Range", specialty: "Andhra Thali", rating: 4.3 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Aswini Hospital, Tirumala"
    }
  },
  {
    id: 102,
    name: "Srisailam",
    slug: "srisailam-temple",
    state: "Nandyal, Andhra Pradesh",
    category: "Spiritual",
    badge: "Jyotirlinga & Shakti Peetha",
    image: "https://www.srisailadevasthanam.org/static/media/SD-gallery-01.99bade47.png",
    description: "Located on the banks of the Krishna River in the Nallamala forest, Srisailam is unique for housing both a Jyotirlinga (Shiva) and a Shakti Peetha (Parvati) in the same complex.",
    coordinates: { lat: 16.0744, lng: 78.8687 },
    essentials: {
      bestTime: "October to February",
      weather: "Cool/Forest",
      timings: "04:30 AM - 03:30 PM, 06:00 PM - 10:00 PM",
      entryFee: {
        FreeDarshan: "Free",
        SheeghraDarshan: "₹150",
        Abhishekam: "₹1500+"
      }
    },
    transport: {
      nearestAirport: "Hyderabad (213 km)",
      nearestRailway: "Markapur Road (85 km)",
      busConnectivity: "Direct buses from Hyderabad, Vijayawada, and Guntur"
    },
    externalLinks: {
      officialBooking: "https://www.srisailadevasthanam.org/",
      googleMaps: "https://goo.gl/maps/srisailam"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps available up to the main temple courtyard. Crowds can make navigation difficult."
    },
    routePlan: [
      { time: "06:00 AM", activity: "Mallikarjuna Swamy Darshan" },
      { time: "09:00 AM", activity: "Patalganga Ropeway" },
      { time: "11:00 AM", activity: "Chenchu Lakshmi Tribal Museum" }
    ],
    foodGuide: [
      { name: "Devasthanam Canteen", type: "Budget", specialty: "Pulihora", rating: 4.0 },
      { name: "Haritha Hotel", type: "Mid-Range", specialty: "South Indian Thali", rating: 3.8 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Govt Area Hospital, Srisailam"
    }
  },
  {
    id: 103,
    name: "Kanaka Durga Temple",
    slug: "kanaka-durga-temple",
    state: "Vijayawada, Andhra Pradesh",
    category: "Spiritual",
    badge: "Shakti Peetha",
    image: "https://www.poojn.in/wp-content/uploads/2025/02/Kanaka-Durga-Temple-A-Guide-to-Your-Visit.jpeg.jpg",
    description: "Situated on the Indrakeeladri hill on the banks of the Krishna River, this temple is synonymous with Vijayawada. The Dasara festival celebrations here are legendary.",
    coordinates: { lat: 16.5092, lng: 80.6175 },
    essentials: {
      bestTime: "September to February",
      weather: "Humid",
      timings: "04:00 AM - 09:00 PM",
      entryFee: {
        DharmaDarshan: "Free",
        MukhaMandapam: "₹100",
        SpecialDarshan: "₹300"
      }
    },
    transport: {
      nearestAirport: "Vijayawada (20 km)",
      nearestRailway: "Vijayawada Junction (2 km)",
      busConnectivity: "Excellent city bus connectivity from all parts of Vijayawada"
    },
    externalLinks: {
      officialBooking: "https://kanakadurgamma.org/",
      googleMaps: "https://goo.gl/maps/kanakadurga"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Ghat road allows vehicles to reach the top. Lifts available for seniors."
    },
    routePlan: [
      { time: "07:00 AM", activity: "Holy Dip in Krishna River" },
      { time: "08:30 AM", activity: "Darshan of Goddess Kanaka Durga" },
      { time: "10:30 AM", activity: "View of Prakasam Barrage from Hill" }
    ],
    foodGuide: [
      { name: "Temple Annadanam", type: "Pilgrim", specialty: "Free Meals", rating: 4.8 },
      { name: "Minerva Grand", type: "Luxury", specialty: "Vegetarian Thali", rating: 4.4 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Andhra Hospitals, Vijayawada"
    }
  },
  {
    id: 104,
    name: "Simhachalam Temple",
    slug: "simhachalam-temple",
    state: "Visakhapatnam, Andhra Pradesh",
    category: "Spiritual",
    badge: "Narasimha Avatar",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Varaha_Lakshmi_Narasimha_temple_in_Simhachalam.jpg",
    description: "An 11th-century temple dedicated to Lord Varaha Lakshmi Narasimha. The deity is always covered in sandalwood paste (Chandanotsavam) and reveals his true form only once a year.",
    coordinates: { lat: 17.7664, lng: 83.2506 },
    essentials: {
      bestTime: "October to March",
      weather: "Coastal/Humid",
      timings: "07:00 AM - 09:00 PM",
      entryFee: {
        General: "Free",
        Special: "₹100"
      }
    },
    transport: {
      nearestAirport: "Visakhapatnam (15 km)",
      nearestRailway: "Simhachalam Station (5 km)",
      busConnectivity: "Frequent RTC buses from Vizag RTC Complex"
    },
    externalLinks: {
      officialBooking: "https://simhachalam.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/simhachalam"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Battery cars operate from the foothill to the main temple entrance."
    },
    routePlan: [
      { time: "08:00 AM", activity: "Ghat Road Drive" },
      { time: "09:00 AM", activity: "Darshan & Kappa Stambham Hugging" },
      { time: "11:00 AM", activity: "Shopping for Handicrafts" }
    ],
    foodGuide: [
      { name: "Devasthanam Canteen", type: "Budget", specialty: "Laddu Prasadam", rating: 4.5 },
      { name: "Kamat Hotel (Vizag)", type: "City", specialty: "Curd Rice", rating: 4.0 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Seven Hills Hospital, Vizag"
    }
  },
  {
    id: 105,
    name: "Ahobilam",
    slug: "ahobilam",
    state: "Nandyal, Andhra Pradesh",
    category: "Spiritual",
    badge: "Navanarasimha Kshetram",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Upper_Ahobilam_temple_Gopuram_02.jpg/500px-Upper_Ahobilam_temple_Gopuram_02.jpg",
    description: "The only place where all nine forms of Lord Narasimha are worshipped. Divided into Lower Ahobilam and Upper Ahobilam, it requires moderate trekking through Nallamala forests.",
    coordinates: { lat: 15.1324, lng: 78.7291 },
    essentials: {
      bestTime: "November to February",
      weather: "Forest/Warm",
      timings: "06:00 AM - 08:00 PM",
      entryFee: {
        Entry: "Free",
        Guide: "₹500 (Essential for trekking)"
      }
    },
    transport: {
      nearestAirport: "Kadapa (65 km)",
      nearestRailway: "Kondapuram (15 km)",
      busConnectivity: "Buses available from Allagadda and Nandyal"
    },
    externalLinks: {
      officialBooking: "https://ahobilam.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/ahobilam"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Lower Ahobilam is accessible, but Upper Ahobilam involves rugged terrain and trekking."
    },
    routePlan: [
      { time: "06:00 AM", activity: "Start Trek to Upper Ahobilam" },
      { time: "09:00 AM", activity: "Jwala Narasimha Darshan" },
      { time: "02:00 PM", activity: "Lower Ahobilam Temple" }
    ],
    foodGuide: [
      { name: "Satram Canteen", type: "Pilgrim", specialty: "Simple Veg Meals", rating: 3.5 },
      { name: "Brahmin Mess", type: "Budget", specialty: "Home style food", rating: 4.2 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "112",
      nearestHospital: "Govt Hospital, Allagadda"
    }
  },
  {
    id: 106,
    name: "Gandikota",
    slug: "gandikota",
    state: "Kadapa, Andhra Pradesh",
    category: "Nature",
    badge: "Grand Canyon of India",
    image: "https://turuhi.com/storage/story/Title-Gandikota-Canyon.jpg",
    description: "A hidden gem featuring a massive gorge formed by the Pennar River, resembling the Grand Canyon. The historic Gandikota Fort sits majestically on top of the gorge.",
    coordinates: { lat: 14.8149, lng: 78.2863 },
    essentials: {
      bestTime: "September to February",
      weather: "Arid/Rocky",
      timings: "Sunrise to Sunset (Fort is open)",
      entryFee: {
        Entry: "Free",
        Camping: "₹1500-2000 (Private Operators)"
      }
    },
    transport: {
      nearestAirport: "Kadapa (77 km)",
      nearestRailway: "Jammalamadugu (15 km)",
      busConnectivity: "Local APSRTC buses from Jammalamadugu"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/gandikota"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Very rocky terrain. Reaching the viewpoint requires walking over boulders."
    },
    routePlan: [
      { time: "04:30 PM", activity: "Explore Ranganatha Swamy Temple" },
      { time: "05:30 PM", activity: "Sunset at the Gorge Viewpoint" },
      { time: "08:00 PM", activity: "Camping & Bonfire" }
    ],
    foodGuide: [
      { name: "Haritha Resort", type: "Basic", specialty: "Simple Andhra Meals", rating: 3.5 },
      { name: "Nirmala Restaurant", type: "Dhaba", specialty: "Spicy Chicken Curry", rating: 4.1 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "112",
      nearestHospital: "Govt Hospital Jammalamadugu"
    }
  },
  {
    id: 107,
    name: "Araku Valley",
    slug: "araku-valley",
    state: "Visakhapatnam, Andhra Pradesh",
    category: "Hill Stations",
    badge: "Ooty of Andhra",
    image: "https://s3.india.com/wp-content/uploads/2024/06/Exploring-Araku-Valley.jpg?impolicy=Medium_Widthonly&w=800&h=541",
    description: "A scenic hill station in the Eastern Ghats, famous for its coffee plantations and indigenous tribal culture. The Vistadome train journey to Araku is an attraction in itself.",
    coordinates: { lat: 18.3273, lng: 82.8775 },
    essentials: {
      bestTime: "September to March",
      weather: "Cool/Misty",
      timings: "24 Hours (Attractions have specific timings)",
      entryFee: {
        TribalMuseum: "₹40",
        PadmapuramGardens: "₹20"
      }
    },
    transport: {
      nearestAirport: "Visakhapatnam (115 km)",
      nearestRailway: "Araku Station (2 km)",
      busConnectivity: "Regular buses from Vizag"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/araku"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Most gardens and the Tribal Museum ground floor are accessible."
    },
    routePlan: [
      { time: "10:00 AM", activity: "Tribal Museum & Coffee Museum" },
      { time: "01:00 PM", activity: "Lunch at Haritha Mayuri" },
      { time: "03:00 PM", activity: "Padmapuram Botanical Gardens" }
    ],
    foodGuide: [
      { name: "Araku Coffee House", type: "Cafe", specialty: "Organic Araku Coffee & Chocolates", rating: 4.7 },
      { name: "Vasundhara Restaurant", type: "Family", specialty: "Bamboo Chicken", rating: 4.2 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Area Hospital, Araku"
    }
  },
  {
    id: 108,
    name: "Belum Caves",
    slug: "belum-caves",
    state: "Kurnool, Andhra Pradesh",
    category: "Nature",
    badge: "2nd Longest Cave in India",
    image: "https://en.wikivoyage.org/wiki/File:Belum_Caves_061.JPG",
    description: "The second longest cave system in the Indian subcontinent, known for its speleothems, such as stalactite and stalagmite formations. The caves have long passages, spacious chambers, and fresh water galleries.",
    coordinates: { lat: 15.1026, lng: 78.1118 },
    essentials: {
      bestTime: "August to December",
      weather: "Humid Underground",
      timings: "10:00 AM - 04:30 PM",
      entryFee: {
        Adult: "₹65",
        Child: "₹45"
      }
    },
    transport: {
      nearestAirport: "Kurnool (110 km)",
      nearestRailway: "Tadipatri (30 km)",
      busConnectivity: "Buses available from Tadipatri and Anantapur"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/belum"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Not accessible. Requires walking deep underground with uneven flooring."
    },
    routePlan: [
      { time: "10:00 AM", activity: "Giant Buddha Statue Entry" },
      { time: "10:30 AM", activity: "Meditation Hall (Dhyana Mandir)" },
      { time: "12:00 PM", activity: "Patalaganga (Underground Stream)" }
    ],
    foodGuide: [
      { name: "Haritha Restaurant", type: "Basic", specialty: "Thali", rating: 3.0 },
      { name: "Local Dhabas", type: "Street", specialty: "Ragi Sangati", rating: 3.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Govt Hospital, Tadipatri"
    }
  },
  {
    id: 109,
    name: "Lambasingi",
    slug: "lambasingi",
    state: "Visakhapatnam, Andhra Pradesh",
    category: "Hill Stations",
    badge: "Kashmir of Andhra",
    image: "https://static2.tripoto.com/media/filter/nl/img/1510297/TripDocument/1555408067_1555408063186.jpg",
    description: "A small village in the Chintapalli Mandal that records sub-zero temperatures during winter. Famous for its strawberry farms, misty mornings, and dense coffee plantations.",
    coordinates: { lat: 17.8188, lng: 82.4920 },
    essentials: {
      bestTime: "November to January",
      weather: "Very Cold",
      timings: "24 Hours",
      entryFee: {
        Entry: "Free",
        StrawberryFarm: "₹50"
      }
    },
    transport: {
      nearestAirport: "Visakhapatnam (100 km)",
      nearestRailway: "Anakapalle (70 km)",
      busConnectivity: "APSRTC buses from Narsipatnam and Vizag"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/lambasingi"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Hilly terrain, minimal paved paths in viewing areas."
    },
    routePlan: [
      { time: "05:00 AM", activity: "Sunrise & Mist Experience" },
      { time: "08:00 AM", activity: "Strawberry Picking" },
      { time: "11:00 AM", activity: "Kothapalli Waterfalls visit" }
    ],
    foodGuide: [
      { name: "Local Campsite Kitchens", type: "Camping", specialty: "Bamboo Chicken", rating: 4.0 },
      { name: "APTDC Restaurant", type: "Basic", specialty: "Breakfast", rating: 3.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Area Hospital, Narsipatnam"
    }
  },
  {
    id: 110,
    name: "Papikondalu",
    slug: "papikondalu",
    state: "Rajahmundry, Andhra Pradesh",
    category: "Nature",
    badge: "River Cruise",
    image: "https://bhadrachalamtourism.org/wp-content/uploads/2025/03/Papikondalu-tour.jpg",
    description: "A breathtaking series of mountain ranges that run along the Godavari River. The boat journey through the narrow gorge (Papi Hills) is a major tourist attraction.",
    coordinates: { lat: 17.3060, lng: 81.4550 },
    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "08:00 AM - 05:00 PM (Boat Timings)",
      entryFee: {
        BoatPackage: "₹800-1200 (Includes food)"
      }
    },
    transport: {
      nearestAirport: "Rajahmundry (60 km)",
      nearestRailway: "Rajahmundry (60 km)",
      busConnectivity: "Buses to boat points (Purushothapatnam/Gandipochamma)"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/papikondalu"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Getting into boats requires stepping over gaps; not suitable for wheelchairs."
    },
    routePlan: [
      { time: "07:30 AM", activity: "Reach Gandipochamma Boat Point" },
      { time: "09:00 AM", activity: "Boat Cruise Begins" },
      { time: "01:00 PM", activity: "Lunch on Sand Island (Perantapalli)" }
    ],
    foodGuide: [
      { name: "Boat Catering", type: "Included", specialty: "Godavari Non-Veg Thali", rating: 4.2 },
      { name: "River Bay", type: "Luxury", specialty: "Fish Curry", rating: 4.4 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Govt Hospital, Rampachodavaram"
    }
  },
  {
    id: 111,
    name: "Horsley Hills",
    slug: "horsley-hills",
    state: "Madanapalle, Andhra Pradesh",
    category: "Hill Stations",
    badge: "Ooty of Andhra",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/horsley-hills-4_dec.jpg",
    description: "A charming hill station at an altitude of 1,290 meters. Known for its pleasant climate, oldest Eucalyptus tree, and the Gali Bandalu (Windy Rocks) viewpoint.",
    coordinates: { lat: 13.6515, lng: 78.3948 },
    essentials: {
      bestTime: "Year-round",
      weather: "Cool/Pleasant",
      timings: "24 Hours",
      entryFee: {
        Entry: "Free",
        Zoo: "₹20"
      }
    },
    transport: {
      nearestAirport: "Bengaluru (160 km) / Tirupati (130 km)",
      nearestRailway: "Madanapalle Road (27 km)",
      busConnectivity: "Buses from Madanapalle town"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/horsley"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Haritha resort and main viewpoints are accessible by paved roads."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Viewpoint & Gali Bandalu" },
      { time: "11:00 AM", activity: "Horsley Hills Zoo" },
      { time: "04:00 PM", activity: "Sunset Point" }
    ],
    foodGuide: [
      { name: "Haritha Resort", type: "Mid-Range", specialty: "Buffet", rating: 3.8 },
      { name: "Spicy Hut", type: "Local", specialty: "Rayalaseema Spice", rating: 4.0 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Govt Hospital, Madanapalle"
    }
  },
  {
    id: 112,
    name: "Talakona Waterfalls",
    slug: "talakona-waterfalls",
    state: "Tirupati, Andhra Pradesh",
    category: "Nature",
    badge: "Highest Waterfall in AP",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/talakona-waterfall-tirupati-andhra-pradesh-1-attr-hero?qlt=82&ts=1742150676739",
    description: "The highest waterfall in Andhra Pradesh, falling from 270 feet. Located inside the Sri Venkateswara National Park, it is rich in biodiversity and medicinal plants.",
    coordinates: { lat: 13.8112, lng: 79.2223 },
    essentials: {
      bestTime: "September to January",
      weather: "Forest/Humid",
      timings: "08:00 AM - 05:00 PM",
      entryFee: {
        Vehicle: "₹50",
        Person: "₹10"
      }
    },
    transport: {
      nearestAirport: "Tirupati (60 km)",
      nearestRailway: "Tirupati (60 km)",
      busConnectivity: "Buses available up to Bhakarapeta, then Auto"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/talakona"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires a 2km trek on uneven path to reach the main falls."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Jungle Trek Start" },
      { time: "10:30 AM", activity: "Bath under Waterfall" },
      { time: "01:00 PM", activity: "Canopy Walk" }
    ],
    foodGuide: [
      { name: "Forest Guest House", type: "Basic", specialty: "Veg Meals", rating: 3.5 },
      { name: "Local Stalls", type: "Street", specialty: "Corn & Maggi", rating: 4.0 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "PHC, Bhakarapeta"
    }
  },
  {
    id: 113,
    name: "Coringa Wildlife Sanctuary",
    slug: "coringa-wildlife",
    state: "Kakinada, Andhra Pradesh",
    category: "Nature",
    badge: "2nd Largest Mangroves",
    image: "https://tripxl.com/blog/wp-content/uploads/2024/09/Coringa-Wildlife-sanctuary-Cover-Image-1.jpg",
    description: "Home to the second largest mangrove forest in India. The sanctuary is famous for saltwater crocodiles, diverse bird species, and a scenic wooden boardwalk through the marshlands.",
    coordinates: { lat: 16.8523, lng: 82.2858 },
    essentials: {
      bestTime: "October to May",
      weather: "Coastal/Humid",
      timings: "09:00 AM - 05:00 PM (Closed on Tuesdays)",
      entryFee: {
        Adult: "₹20",
        Boating: "₹500-1000"
      }
    },
    transport: {
      nearestAirport: "Rajahmundry (70 km)",
      nearestRailway: "Kakinada Port (15 km)",
      busConnectivity: "Autos and taxis from Kakinada town"
    },
    externalLinks: {
      officialBooking: "https://forests.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/coringa"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "The wooden boardwalk is flat and accessible for a significant distance."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Boardwalk Nature Walk" },
      { time: "10:30 AM", activity: "Boat Ride in Mangroves" },
      { time: "12:00 PM", activity: "Bird Watching Tower" }
    ],
    foodGuide: [
      { name: "Haritha Coconut Country", type: "Mid-Range", specialty: "Konaseema Cuisine", rating: 4.1 },
      { name: "Subbayya Gari Hotel (Kakinada)", type: "City", specialty: "Butta Bhojanam", rating: 4.8 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Apollo Hospital, Kakinada"
    }
  },
  {
    id: 114,
    name: "Lepakshi",
    slug: "lepakshi",
    state: "Sathya Sai District, Andhra Pradesh",
    category: "Heritage",
    badge: "Hanging Pillar Wonder",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/lepakshi-anantapur-ap-2-attr-hero?qlt=82&ts=1726743907673",
    description: "Home to the 16th-century Veerabhadra Temple, a masterpiece of Vijayanagara style. Famous for its floating pillar that doesn't touch the ground and a massive monolithic Nandi bull.",
    coordinates: { lat: 13.8052, lng: 77.6136 },
    essentials: {
      bestTime: "October to February",
      weather: "Hot/Dry",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Entry: "Free",
        Guide: "₹200-300 (Recommended)"
      }
    },
    transport: {
      nearestAirport: "Bengaluru (100 km)",
      nearestRailway: "Hindupur (15 km)",
      busConnectivity: "Buses from Hindupur or Anantapur"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/lepakshi"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Main temple courtyard is flat, but the inner sanctum has steps. The Nandi statue nearby is accessible."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Visit Monolithic Nandi" },
      { time: "10:00 AM", activity: "Veerabhadra Temple & Hanging Pillar" },
      { time: "12:00 PM", activity: "Explore unfinished Kalyana Mandapam" }
    ],
    foodGuide: [
      { name: "Haritha Hotel", type: "Budget", specialty: "South Indian Thali", rating: 3.8 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "112",
      nearestHospital: "Govt Hospital Hindupur"
    }
  },
  {
    id: 115,
    name: "Amaravati Stupa",
    slug: "amaravati-stupa",
    state: "Amaravati, Andhra Pradesh",
    category: "Heritage",
    badge: "Buddhist Heritage",
    image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1700228316_the_great_stupa_of_sanchi_madhya_pradesh_1024x683.jpg.webp",
    description: "One of the largest and most significant Buddhist Stupas in India, dating back to 200 BCE. The site features a museum housing intricate limestone carvings and relics.",
    coordinates: { lat: 16.5746, lng: 80.3592 },
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "09:00 AM - 05:00 PM (Friday Closed)",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },
    transport: {
      nearestAirport: "Vijayawada (55 km)",
      nearestRailway: "Guntur (35 km)",
      busConnectivity: "Regular buses from Vijayawada and Guntur"
    },
    externalLinks: {
      officialBooking: "https://asi.nic.in/",
      googleMaps: "https://goo.gl/maps/amaravati"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "The museum and stupa grounds are flat and accessible."
    },
    routePlan: [
      { time: "10:00 AM", activity: "Archaeological Museum" },
      { time: "11:30 AM", activity: "Mahachaitya Stupa Walk" },
      { time: "01:00 PM", activity: "Dhyana Buddha Statue Visit" }
    ],
    foodGuide: [
      { name: "APTDC Haritha", type: "Mid-Range", specialty: "Andhra Meals", rating: 3.9 },
      { name: "Local Mess", type: "Budget", specialty: "Curry Point", rating: 3.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "AIIMS Mangalagiri (15 km)"
    }
  },
  {
    id: 116,
    name: "Undavalli Caves",
    slug: "undavalli-caves",
    state: "Vijayawada, Andhra Pradesh",
    category: "Heritage",
    badge: "Monolithic Rock-Cut",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/undavalli-caves-guntur-andhra-pradesh-2-attr-hero?qlt=82&ts=1726743671209",
    description: "A fine example of Indian rock-cut architecture from the 4th-5th century AD. The main attraction is a colossal monolithic statue of Lord Vishnu in a reclining posture.",
    coordinates: { lat: 16.4962, lng: 80.5847 },
    essentials: {
      bestTime: "October to February",
      weather: "Warm",
      timings: "09:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹200",
        Video: "₹25"
      }
    },
    transport: {
      nearestAirport: "Vijayawada (35 km)",
      nearestRailway: "Vijayawada Junction (6 km)",
      busConnectivity: "Auto or Taxi from Vijayawada city center"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/undavalli"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep steps to reach the upper levels where the main Vishnu statue is located."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Architecture Photography" },
      { time: "10:00 AM", activity: "Main Vishnu Shrine Level" },
      { time: "11:30 AM", activity: "Prakasam Barrage View" }
    ],
    foodGuide: [
      { name: "Sweet Magic", type: "City", specialty: "Andhra Biryani", rating: 4.3 },
      { name: "Babai Hotel", type: "Heritage", specialty: "Idli Sambar", rating: 4.6 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Manipal Hospital, Vijayawada"
    }
  },
  {
    id: 117,
    name: "Rushikonda Beach",
    slug: "rushikonda-beach",
    state: "Visakhapatnam, Andhra Pradesh",
    category: "Beaches",
    badge: "Blue Flag Certified",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Rushikonda_beach_view_001.jpg/1200px-Rushikonda_beach_view_001.jpg",
    description: "One of the cleanest beaches in India, certified with the Blue Flag tag. Known for its golden sands, clear waters, and water sports like surfing and jet skiing.",
    coordinates: { lat: 17.7816, lng: 83.3860 },
    essentials: {
      bestTime: "October to March",
      weather: "Coastal/Breezy",
      timings: "06:00 AM - 07:00 PM",
      entryFee: {
        Entry: "Free",
        SpeedBoat: "₹350",
        JetSki: "₹500"
      }
    },
    transport: {
      nearestAirport: "Visakhapatnam (25 km)",
      nearestRailway: "Visakhapatnam Junction (15 km)",
      busConnectivity: "City buses and cabs available from Vizag center"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/rushikonda"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Blue Flag standards ensure wheelchair ramps and accessible restrooms are available."
    },
    routePlan: [
      { time: "08:00 AM", activity: "Morning Walk & Sunrise" },
      { time: "10:00 AM", activity: "Water Sports (Jet Ski/Speed Boat)" },
      { time: "01:00 PM", activity: "Lunch at APTDC Haritha" }
    ],
    foodGuide: [
      { name: "Haritha Beach Resort", type: "View", specialty: "Sea Food", rating: 4.1 },
      { name: "The Park", type: "Luxury", specialty: "Continental", rating: 4.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "GITAM Hospital"
    }
  },
  {
    id: 118,
    name: "Borra Caves",
    slug: "borra-caves",
    state: "Visakhapatnam, Andhra Pradesh",
    category: "Nature",
    badge: "Deepest Caves in India",
    image: "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/09/caves.jpg?fit=1024%2C678&ssl=1",
    description: "One of the largest and deepest caves in India, known for stunning stalactite and stalagmite formations. The caves are illuminated with colorful lights, creating a magical atmosphere.",
    coordinates: { lat: 18.2818, lng: 83.0396 },
    essentials: {
      bestTime: "November to March",
      weather: "Cool/Humid",
      timings: "10:00 AM - 05:00 PM (Lunch Break 1-2 PM)",
      entryFee: {
        Adult: "₹80",
        Child: "₹60",
        Camera: "₹100"
      }
    },
    transport: {
      nearestAirport: "Visakhapatnam (90 km)",
      nearestRailway: "Borra Guhalu (On site)",
      busConnectivity: "Buses available from Araku (30 km)"
    },
    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/borracaves"
    },
    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires climbing many stairs to enter and exit. Not suitable for wheelchairs or severe mobility issues."
    },
    routePlan: [
      { time: "10:30 AM", activity: "Hike down to Cave Entrance" },
      { time: "11:30 AM", activity: "Photography of Limestone Formations" },
      { time: "01:00 PM", activity: "Local Bamboo Chicken Lunch" }
    ],
    foodGuide: [
      { name: "AP Tourism Restaurant", type: "Basic", specialty: "Veg Meals", rating: 3.5 },
      { name: "Tribal Stalls", type: "Street", specialty: "Bamboo Chicken", rating: 4.5 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Area Hospital, Araku"
    }
  }
];


