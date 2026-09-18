
export const ANDAMAN_AND_NICOBAR_ISLANDS_PLACES = [
  // --- HERITAGE ---
  {
    id: 3001,
    name: "Cellular Jail National Memorial",
    slug: "cellular-jail-port-blair",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Heritage",
    badge: "Kaala Paani",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Front_View_of_Cellular_Jail%2C_Port_Blair.JPG/640px-Front_View_of_Cellular_Jail%2C_Port_Blair.JPG",
    description: "A colonial prison used by the British to exile political prisoners. The jail is a poignant reminder of India's freedom struggle. The evening Light & Sound show narrates the harrowing history.",
    coordinates: { lat: 11.6738, lng: 92.7483 },

    essentials: {
      bestTime: "October to April",
      weather: "Tropical/Humid",
      timings: "09:00 AM - 12:30 PM, 01:30 PM - 04:00 PM (Closed Mondays)",
      entryFee: {
        Entry: "₹30",
        LightShow: "₹300 (Hindi/English)",
        Camera: "₹200"
      }
    },

    transport: {
      nearestAirport: "Veer Savarkar Intl Airport, Port Blair (4 km)",
      nearestRailway: "Chennai/Kolkata (Sea/Air connectivity only)",
      busConnectivity: "Located in Atlanta Point, accessible by auto/taxi"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/cellularjail"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ground floor wings and central tower courtyard are accessible. Upper cells have stairs."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Museum & Photo Gallery" },
      { time: "03:00 PM", activity: "Veer Savarkar Cell" },
      { time: "06:00 PM", activity: "Light & Sound Show" }
    ],

    foodGuide: [
      { name: "New Lighthouse Restaurant", type: "Seafood", specialty: "Lobster & Crab", rating: 4.4 },
      { name: "Annapurna", type: "Vegetarian", specialty: "South Indian Thali", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3002,
    name: "Ross Island (Netaji Subhash Chandra Bose Dweep)",
    slug: "ross-island",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Heritage",
    badge: "Paris of the East (Ruins)",
    image: "https://tse4.mm.bing.net/th/id/OIP.1MvGK1aoalZuL9CixJptJgHaE6?w=550&h=365&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "The former administrative headquarters of the British in the Andamans. Now in ruins, the island features remnants of a church, bakery, and commissioner's house, overtaken by massive Ficus tree roots.",
    coordinates: { lat: 11.6766, lng: 92.7635 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid",
      timings: "08:30 AM - 04:00 PM (Closed Wednesdays)",
      entryFee: {
        Entry: "₹30",
        Boat: "₹300-500 (Round Trip from Aberdeen Jetty)"
      }
    },

    transport: {
      nearestAirport: "Port Blair (3 km to Jetty)",
      nearestRailway: "N/A",
      busConnectivity: "Reach Aberdeen Jetty (Rajiv Gandhi Water Sports Complex) by auto"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/rossisland"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Golf carts are available on the island for a fee to tour the ruins. Paths are paved."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Ferry from Aberdeen Jetty" },
      { time: "09:30 AM", activity: "Explore British Ruins & Deer Park" },
      { time: "11:30 AM", activity: "Return Ferry" }
    ],

    foodGuide: [
      { name: "Island Canteen", type: "Basic", specialty: "Coconut Water & Snacks", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital Port Blair"
    }
  },

  // --- BEACHES & ISLANDS ---
  {
    id: 3003,
    name: "Radhanagar Beach (Havelock)",
    slug: "radhanagar-beach",
    state: "Swaraj Dweep (Havelock), Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Asia's Best Beach",
    image: "https://www.andamanisland.in/assets/site1/theme3/images/radhanagar-beach/12.jpg",
    description: "Located on Swaraj Dweep (Havelock), this beach is consistently ranked among the best in the world. It features fine white sand, turquoise blue waters, and lush forest backdrops.",
    coordinates: { lat: 11.9845, lng: 92.9514 },

    essentials: {
      bestTime: "October to May",
      weather: "Tropical/Sunny",
      timings: "06:00 AM - 05:00 PM (Swimming allowed till sunset)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Port Blair (Ferry to Havelock: 1.5 - 2.5 hrs)",
      nearestRailway: "N/A",
      busConnectivity: "Auto/Taxi/Scooter rental from Havelock Jetty (12 km)"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/radhanagar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Blue Flag certified beach with accessible toilets and paved pathways to the sand."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Swimming" },
      { time: "04:30 PM", activity: "Sunset Photography" },
      { time: "06:00 PM", activity: "Return to Resort" }
    ],

    foodGuide: [
      { name: "Something Different", type: "Cafe", specialty: "Pizza & Seafood", rating: 4.6 },
      { name: "Full Moon Cafe", type: "Resort", specialty: "Pancakes", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-282411",
      nearestHospital: "PHC Havelock (Govt Hospital)"
    }
  },
  {
    id: 3004,
    name: "Elephant Beach",
    slug: "elephant-beach",
    state: "Swaraj Dweep (Havelock), Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Water Sports Hub",
    image: "https://andamantourism.org.in/images/places-to-visit/header/elephant-beach-andaman-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    description: "The water sports capital of Havelock Island. Famous for its vibrant coral reefs starting just a meter deep, making it perfect for snorkeling, sea walking, and glass-bottom boat rides.",
    coordinates: { lat: 12.0093, lng: 92.9463 },

    essentials: {
      bestTime: "October to April (Closed if sea is rough)",
      weather: "Sunny",
      timings: "08:00 AM - 03:00 PM (Last boat return)",
      entryFee: {
        Boat: "₹1000 (Round Trip)",
        Snorkeling: "₹500-1000",
        SeaWalk: "₹3500+"
      }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Speed boat from Havelock Jetty (20 mins) or 2km Trek through forest"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/elephantbeach"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding speed boats requires balance. The beach sand is soft. Not accessible."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Boat from Jetty" },
      { time: "09:00 AM", activity: "Sea Walk / Snorkeling" },
      { time: "12:00 PM", activity: "Return to Jetty" }
    ],

    foodGuide: [
      { name: "Beach Stalls", type: "Shacks", specialty: "Coconut Water & Maggi", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-282411",
      nearestHospital: "PHC Havelock"
    }
  },
  {
    id: 3005,
    name: "Laxmanpur Beach (Neil Island)",
    slug: "laxmanpur-beach",
    state: "Shaheed Dweep (Neil), Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Natural Rock Bridge",
    image: "https://www.andamanisland.in/uploads/andamanislands/blog/main/61cc1bd381436139_shutterstock_1137481103.jpg",
    description: "Located on Shaheed Dweep (Neil Island), this beach is famous for the 'Howrah Bridge', a natural coral rock formation shaped like a bridge. It is also a prime sunset spot.",
    coordinates: { lat: 11.8496, lng: 93.0298 },

    essentials: {
      bestTime: "October to May (Low tide is must for bridge)",
      weather: "Breezy",
      timings: "Sunrise to Sunset (Bridge accessible during low tide)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Port Blair (Ferry to Neil: 1-1.5 hrs)",
      nearestRailway: "N/A",
      busConnectivity: "Auto/Scooter rental from Neil Jetty (2 km)"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/laxmanpur"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Walking to the Natural Bridge involves walking over dead corals and slippery rocks."
    },

    routePlan: [
      { time: "03:30 PM", activity: "Walk to Natural Bridge (Check Tide)" },
      { time: "04:30 PM", activity: "Relax at Laxmanpur Beach 1" },
      { time: "05:30 PM", activity: "Sunset" }
    ],

    foodGuide: [
      { name: "Dugong", type: "Resort", specialty: "Seafood Platter", rating: 4.3 },
      { name: "Beach Shacks", type: "Stall", specialty: "Bhajiyas", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-282638",
      nearestHospital: "PHC Neil Island"
    }
  },

  // --- NATURE & ADVENTURE ---
  {
    id: 3006,
    name: "Baratang Island (Limestone Caves)",
    slug: "baratang-caves",
    state: "Middle Andaman, Andaman and Nicobar Islands",
    category: "Adventure",
    badge: "Mangrove Tunnel Ride",
    image: "https://www.andamanisland.in/assets/site1/theme3/images/LIMESTONE-CAVE.jpeg",
    description: "Famous for its natural limestone caves and mud volcanoes. The journey involves driving through the Jarawa Tribal Reserve and a thrilling boat ride through dense mangrove tunnels.",
    coordinates: { lat: 12.1056, lng: 92.7667 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid",
      timings: "03:00 AM Start from Port Blair (Convoy timings strict)",
      entryFee: {
        Boat: "₹800 (Cave)",
        Permit: "Required (Arranged by driver)"
      }
    },

    transport: {
      nearestAirport: "Port Blair (100 km)",
      nearestRailway: "N/A",
      busConnectivity: "Govt Bus/Private Cab convoy through Jarawa Reserve (No stopping allowed)"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/baratang"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Involves a 1.5 km trek on a wooden boardwalk and mud path to reach the caves. Not accessible."
    },

    routePlan: [
      { time: "03:30 AM", activity: "Depart Port Blair (Jirkatang Checkpost)" },
      { time: "09:00 AM", activity: "Mangrove Boat Ride" },
      { time: "10:30 AM", activity: "Limestone Cave Trek" }
    ],

    foodGuide: [
      { name: "Nilambur Jetty Dhabas", type: "Roadside", specialty: "Fish Thali", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "CHC Baratang"
    }
  },
  {
    id: 3007,
    name: "Chidiya Tapu",
    slug: "chidiya-tapu",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Nature",
    badge: "Sunset Point & Biological Park",
    image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nmmtnr3qjcpr3advhirr/Chidiya%20Tapu%20Full%20Day%20Tour%20from%20Port%20Blair.jpg",
    description: "Known as the 'Bird Island', located 25km from Port Blair. It offers the best sunset views in South Andaman and a Biological Park with indigenous flora and fauna.",
    coordinates: { lat: 11.5034, lng: 92.7032 },

    essentials: {
      bestTime: "Afternoons (3 PM onwards)",
      weather: "Breezy",
      timings: "Sunrise to Sunset (Park closes at 5 PM)",
      entryFee: {
        Park: "₹20",
        Beach: "Free"
      }
    },

    transport: {
      nearestAirport: "Port Blair (25 km)",
      nearestRailway: "N/A",
      busConnectivity: "Taxi or Bike rental from Port Blair"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/chidiyatapu"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The sunset point and beach area are accessible. The trekking trail to Munda Pahad is not."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Biological Park" },
      { time: "04:30 PM", activity: "Munda Pahad Beach" },
      { time: "05:30 PM", activity: "Sunset Viewing" }
    ],

    foodGuide: [
      { name: "Brewberrys", type: "City (Port Blair)", specialty: "Burgers", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3008,
    name: "Mount Harriet (Mount Manipur)",
    slug: "mount-harriet",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Nature",
    badge: "Highest Peak in South Andaman",
    image: "https://www.andamanocean.in/wp-content/uploads/2023/04/mount-harriet-image2-1024x683.jpg",
    description: "Renamed as Mount Manipur, this national park offers a bird's eye view of the archipelago. The view of North Bay from here is depicted on the back of the Indian ₹20 currency note.",
    coordinates: { lat: 11.7289, lng: 92.7366 },

    essentials: {
      bestTime: "Morning or Evening",
      weather: "Cool/Windy",
      timings: "07:00 AM - 05:00 PM",
      entryFee: {
        Adult: "₹25",
        Camera: "₹25",
        Vehicle: "₹10"
      }
    },

    transport: {
      nearestAirport: "Port Blair (45 km by road, 15 km via ferry)",
      nearestRailway: "N/A",
      busConnectivity: "Vehicle Ferry from Chatham to Bamboo Flat, then drive uphill"
    },

    externalLinks: {
      officialBooking: "https://forest.and.nic.in/",
      googleMaps: "https://goo.gl/maps/mountharriet"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Vehicles go up to the park gate. The main viewpoint is paved and accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Ferry to Bamboo Flat" },
      { time: "10:30 AM", activity: "Drive to Peak" },
      { time: "11:30 AM", activity: "Watch Tower View" }
    ],

    foodGuide: [
      { name: "Forest Guest House", type: "Govt", specialty: "Tea & Snacks", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "CHC Bamboo Flat"
    }
  },
  {
    id: 3009,
    name: "North Bay Island",
    slug: "north-bay-island",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Adventure",
    badge: "Coral Island",
    image: "https://andamantourism.org.in/images/places-to-visit/header/north-bay-island-andaman-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    description: "Famous for its lighthouse (seen on the old ₹20 note) and extensive coral reefs. It is the hub for water sports like scuba diving, sea walking, and semi-submarine rides near Port Blair.",
    coordinates: { lat: 11.7042, lng: 92.7562 },

    essentials: {
      bestTime: "October to April",
      weather: "Sunny",
      timings: "09:00 AM - 04:00 PM (Ferry timings)",
      entryFee: {
        Ferry: "₹500-700",
        Scuba: "₹3500+",
        SeaWalk: "₹3500+"
      }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Ferry from Aberdeen Jetty (Rajiv Gandhi Water Sports Complex)"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/northbay"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding ferries is difficult. The island has sandy paths."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Ferry from Port Blair" },
      { time: "10:00 AM", activity: "Semi-Submarine Ride" },
      { time: "11:30 AM", activity: "Scuba Diving" }
    ],

    foodGuide: [
      { name: "Island Shacks", type: "Stall", specialty: "Coconut & Maggi", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3010,
    name: "Mahatma Gandhi Marine National Park (Wandoor)",
    slug: "wandoor-marine-park",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Nature",
    badge: "Marine Conservation Area",
    image: "https://cdn.experienceandamans.com/images/entrance-to-wandoor-beach-andaman.jpg",
    description: "Located 30km from Port Blair, this park covers 15 islands including Jolly Buoy and Red Skin. It is a strict plastic-free zone known for pristine corals and glass-bottom boat rides.",
    coordinates: { lat: 11.6042, lng: 92.6075 },

    essentials: {
      bestTime: "Dec to May (Jolly Buoy opens 6 months/year)",
      weather: "Sunny/Clear Water",
      timings: "08:30 AM - 10:00 AM (Ferry departure slots)",
      entryFee: {
        Permit: "₹50",
        Boat: "₹850+",
        PlasticDeposit: "Mandatory"
      }
    },

    transport: {
      nearestAirport: "Port Blair (30 km)",
      nearestRailway: "N/A",
      busConnectivity: "Bus/Taxi to Wandoor Jetty, then forest dept boat"
    },

    externalLinks: {
      officialBooking: "https://forest.and.nic.in/",
      googleMaps: "https://goo.gl/maps/wandoor"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boat boarding is not wheelchair friendly. Islands have sandy beaches."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Reach Wandoor Jetty" },
      { time: "09:00 AM", activity: "Boat to Jolly Buoy/Red Skin" },
      { time: "10:00 AM", activity: "Glass Bottom Boat Ride" }
    ],

    foodGuide: [
      { name: "Pack Lunch Required", type: "Self", specialty: "No food sold on islands", rating: 5.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "PHC Wandoor"
    }
  },

  // --- NEW ADDITIONS (Port Blair, Havelock, Neil, North & Middle Andaman) ---
  {
    id: 3011,
    name: "Corbyn's Cove Beach",
    slug: "corbyns-cove-beach",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "City Beach",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/07/Corbyn-Cove-Beach_23rd-oct.jpg",
    description: "The closest beach to Port Blair city. Popular for jet skiing, speed boating, and relaxed evening strolls along the palm-fringed coastline. Ideal for a quick escape.",
    coordinates: { lat: 11.6436, lng: 92.7487 },

    essentials: {
      bestTime: "All Year Round",
      weather: "Breezy/Sunny",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free", JetSki: "₹600+" }
    },

    transport: {
      nearestAirport: "Port Blair (7 km)",
      nearestRailway: "N/A",
      busConnectivity: "Accessible by auto/taxi from Aberdeen Bazaar"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/corbynscove"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved promenade along the beach is wheelchair accessible."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Jet Skiing" },
      { time: "05:00 PM", activity: "Relax on Beach Chairs" },
      { time: "06:00 PM", activity: "Dinner at Waves Restaurant" }
    ],

    foodGuide: [
      { name: "Waves Restaurant", type: "Govt Run", specialty: "Beer & Seafood", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3012,
    name: "Samudrika Naval Marine Museum",
    slug: "samudrika-marine-museum",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Heritage",
    badge: "Marine Education",
    image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/09/Samudrika-Naval-Marine-Museum.jpg",
    description: "Run by the Indian Navy, this museum is divided into five sections: history, geography, people, archaeology, and marine life. Features a massive blue whale skeleton.",
    coordinates: { lat: 11.6706, lng: 92.7245 },

    essentials: {
      bestTime: "All Year Round",
      weather: "Indoor/AC",
      timings: "09:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: { Entry: "₹50", Camera: "₹50" }
    },

    transport: {
      nearestAirport: "Port Blair (3 km)",
      nearestRailway: "N/A",
      busConnectivity: "Located in Haddo, easily accessible by auto"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/samudrika"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Single floor layout is mostly accessible."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Marine Life Aquarium" },
      { time: "10:30 AM", activity: "Blue Whale Skeleton" },
      { time: "11:00 AM", activity: "Souvenir Shop" }
    ],

    foodGuide: [
      { name: "Local Bakeries", type: "Bakery", specialty: "Patties", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3013,
    name: "Chatham Saw Mill",
    slug: "chatham-saw-mill",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Heritage",
    badge: "Asia's Oldest Saw Mill",
    image: "https://andamantourism.org.in/images/places-to-visit/header/chatham-saw-mill-andaman-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    description: "Established in 1883, this is one of the oldest and largest sawmills in Asia. It sits on its own tiny island connected by a bridge. Includes a museum showcasing timber varieties.",
    coordinates: { lat: 11.6917, lng: 92.7242 },

    essentials: {
      bestTime: "Morning",
      weather: "Industrial/Humid",
      timings: "08:30 AM - 02:30 PM (Closed Sundays)",
      entryFee: { Entry: "₹10", Guide: "₹50" }
    },

    transport: {
      nearestAirport: "Port Blair (10 km)",
      nearestRailway: "N/A",
      busConnectivity: "Accessible by bus/auto via Chatham Bridge"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/chatham"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main walkways are flat, though some mill areas are restricted."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Forest Museum" },
      { time: "09:45 AM", activity: "Saw Mill Processing Unit" },
      { time: "10:30 AM", activity: "Bomb Pit (WWII)" }
    ],

    foodGuide: [
      { name: "Canteen", type: "Basic", specialty: "Tea & Samosa", rating: 3.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3014,
    name: "Kalapathar Beach",
    slug: "kalapathar-beach",
    state: "Swaraj Dweep (Havelock), Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Solitude & Black Rocks",
    image: "https://cdn.experienceandamans.com/images/kalapathar-beach-andaman-island.jpg",
    description: "A stunning long stretch of white sand contrasting with black rocks (Kalapathar) and blue sea. It is much quieter than Radhanagar and offers a beautiful drive through the forest.",
    coordinates: { lat: 11.9634, lng: 93.0183 },

    essentials: {
      bestTime: "Morning or Late Afternoon",
      weather: "Sunny/Windy",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Auto/Taxi/Bike from Havelock Jetty (6 km)"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/kalapathar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Sand is soft and there are no paved paths to the water."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Morning Drive" },
      { time: "09:00 AM", activity: "Photography" },
      { time: "10:00 AM", activity: "Coconut Water Break" }
    ],

    foodGuide: [
      { name: "Umbrella Cafe", type: "Shack", specialty: "Fruit Salad", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-282411",
      nearestHospital: "PHC Havelock"
    }
  },
  {
    id: 3015,
    name: "Bharatpur Beach",
    slug: "bharatpur-beach",
    state: "Shaheed Dweep (Neil), Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Coral Viewing",
    image: "https://th.bing.com/th/id/OIP.rFuxePr7B5s83ODgzve_5QHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "The only beach on Neil Island where water sports are available. The water is shallow and crystal clear, making it perfect for swimming and glass-bottom boat rides.",
    coordinates: { lat: 11.8480, lng: 93.0460 },

    essentials: {
      bestTime: "Morning (Low Tide)",
      weather: "Sunny",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "Free", GlassBottomBoat: "₹500+" }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Very close to Neil Jetty (0.5 km)"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/bharatpur"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Sandy beach entry."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Glass Bottom Boat" },
      { time: "10:00 AM", activity: "Jet Ski" },
      { time: "11:00 AM", activity: "Swimming" }
    ],

    foodGuide: [
      { name: "Beach Stalls", type: "Stall", specialty: "Fish Fry", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-282638",
      nearestHospital: "PHC Neil Island"
    }
  },
  {
    id: 3016,
    name: "Sitapur Beach",
    slug: "sitapur-beach",
    state: "Shaheed Dweep (Neil), Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Sunrise Point",
    image: "https://www.trawell.in/admin/images/upload/171363643Andaman_Sitapur_Beach.jpg",
    description: "Located at the tip of Neil Island, this beach is exposed to the open sea and offers spectacular sunrise views. It is quieter and less commercial than Bharatpur.",
    coordinates: { lat: 11.8260, lng: 93.0580 },

    essentials: {
      bestTime: "Early Morning (Sunrise)",
      weather: "Windy",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Auto/Bike rental from Neil Jetty (5 km)"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/sitapur"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Access involves stairs from the parking area to the beach."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Sunrise Watch" },
      { time: "06:00 AM", activity: "Beach Walk" }
    ],

    foodGuide: [
      { name: "Resort Restaurants", type: "Dine-in", specialty: "Breakfast", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-282638",
      nearestHospital: "PHC Neil Island"
    }
  },
  {
    id: 3017,
    name: "Ross & Smith Islands",
    slug: "ross-smith-islands",
    state: "Diglipur, Andaman and Nicobar Islands",
    category: "Nature",
    badge: "Twin Islands",
    image: "https://tse3.mm.bing.net/th/id/OIP.kkvbua4pH6Qy-uPUoQlIUQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Two islands connected by a natural sandbar. At low tide, you can walk from one island to the other. Known for pristine blue waters and turtle nesting.",
    coordinates: { lat: 13.3050, lng: 92.9860 },

    essentials: {
      bestTime: "October to April",
      weather: "Sunny",
      timings: "07:00 AM - 05:00 PM (Closed Sundays)",
      entryFee: { 
        Entry: "₹50 (Indian), ₹500 (Foreign)", 
        Boat: "₹3000-5000 (Charter)" 
      }
    },

    transport: {
      nearestAirport: "Port Blair (300 km)",
      nearestRailway: "N/A",
      busConnectivity: "Reach Aerial Bay Jetty (Diglipur), then charter boat"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/rosssmith"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires boat travel and walking on sand."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Boat from Aerial Bay" },
      { time: "09:00 AM", activity: "Walk on Sandbar" },
      { time: "11:00 AM", activity: "Swimming" }
    ],

    foodGuide: [
      { name: "None", type: "Self", specialty: "Carry your own food/water", rating: 5.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-272203",
      nearestHospital: "CHC Diglipur"
    }
  },
  {
    id: 3018,
    name: "Saddle Peak National Park",
    slug: "saddle-peak",
    state: "Diglipur, Andaman and Nicobar Islands",
    category: "Adventure",
    badge: "Highest Peak in Andaman",
    image: "https://www.adotrip.com/public/images/areas/master_images/5c9c789c007ab-Saddle-Peak-National-Park-(8).jpg",
    description: "The highest point in the Andaman archipelago (732m). It offers a challenging trek through evergreen forests with unique flora and bird species.",
    coordinates: { lat: 13.1610, lng: 93.0070 },

    essentials: {
      bestTime: "November to March",
      weather: "Humid/Cool at top",
      timings: "04:00 AM - 05:00 PM",
      entryFee: { Entry: "₹25 (Indian), ₹50 (Foreign)" }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Bus/Taxi to Lamia Bay (Trek starting point)"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/saddlepeak"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Strenuous trek involving steep climbs."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Start Trek from Lamia Bay" },
      { time: "08:00 AM", activity: "Reach Summit" },
      { time: "11:00 AM", activity: "Return" }
    ],

    foodGuide: [
      { name: "None", type: "Self", specialty: "Carry plenty of water", rating: 5.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-272203",
      nearestHospital: "CHC Diglipur"
    }
  },
  {
    id: 3019,
    name: "Amkunj Beach",
    slug: "amkunj-beach",
    state: "Rangat, Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Eco-Park",
    image: "https://www.andamanisland.in/assets/site1/theme3/images/amkunj-beach/8.png",
    description: "A popular beach in Rangat with an eco-park developed using recycled materials. It is a nesting ground for sea turtles during the season.",
    coordinates: { lat: 12.5160, lng: 92.9300 },

    essentials: {
      bestTime: "October to April",
      weather: "Sunny",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Port Blair (170 km)",
      nearestRailway: "N/A",
      busConnectivity: "Located on ATR Road, accessible by bus from Rangat"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/amkunj"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Eco-park area is accessible."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Beach Walk" },
      { time: "05:00 PM", activity: "Sunset" }
    ],

    foodGuide: [
      { name: "Local Dhabas", type: "Roadside", specialty: "Indian Meals", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-274233",
      nearestHospital: "CHC Rangat"
    }
  },
  {
    id: 3020,
    name: "Dhaninallah Mangrove Walkway",
    slug: "dhaninallah-walkway",
    state: "Rangat, Andaman and Nicobar Islands",
    category: "Nature",
    badge: "Longest Mangrove Walk",
    image: "https://trisoj.com/travel-guide/wp-content/uploads/2021/04/Dhani-Nallah-Mangrove-Walkway.jpg",
    description: "Features India's longest mangrove nature walkway (713m) leading to a pristine turtle-nesting beach. The wooden boardwalk winds through dense mangrove creeks.",
    coordinates: { lat: 12.4450, lng: 92.9300 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "On ATR Road (20km from Rangat)"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/dhaninallah"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The wooden boardwalk is flat and wheelchair accessible until the beach."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Mangrove Walk" },
      { time: "10:00 AM", activity: "Beach Relaxation" }
    ],

    foodGuide: [
      { name: "Hawksbill Nest", type: "Govt Guest House", specialty: "Lunch", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-274233",
      nearestHospital: "CHC Rangat"
    }
  },
  {
    id: 3021,
    name: "Barren Island",
    slug: "barren-island",
    state: "Remote (Accessed from Port Blair/Havelock), Andaman and Nicobar Islands",
    category: "Adventure",
    badge: "Active Volcano",
    image: "https://res.cloudinary.com/roundglass/image/upload/v1535036658/roundglass/sustain/barren-island-caldera-rohin-unvalla_ujv276.jpg",
    description: "South Asia's only active volcano. Visitors are not allowed to land on the island but can witness the smoking crater and unique landscape from a chartered boat. Surrounding waters are famous for deep-sea game fishing.",
    coordinates: { lat: 12.2776, lng: 93.8590 },

    essentials: {
      bestTime: "November to February",
      weather: "Open Sea",
      timings: "Day Trip (Start 4 AM)",
      entryFee: { 
         Charter: "₹1,30,000 - ₹1,50,000 (Private Boat)",
         Permit: "₹1000 (Indian), ₹3500 (Foreign)"
      }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Charter boat from Port Blair or Havelock only"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/barrenisland"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Rough sea voyage, not recommended for those with mobility issues."
    },

    routePlan: [
      { time: "04:00 AM", activity: "Depart Port Blair" },
      { time: "09:00 AM", activity: "Volcano Sightseeing" },
      { time: "11:00 AM", activity: "Fishing/Snorkeling (Offshore)" }
    ],

    foodGuide: [
      { name: "Onboard Catering", type: "Included", specialty: "Meals provided by charter", rating: 5.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "Coast Guard",
      touristHelpline: "03192-232694",
      nearestHospital: "Port Blair (4-5 hours away)"
    }
  },
  {
    id: 3022,
    name: "Viper Island",
    slug: "viper-island",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Heritage",
    badge: "Old Jail Gallows",
    image: "https://andamantourism.org.in/images/places-to-visit/header/viper-island-andaman-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    description: "Before the Cellular Jail was built, Viper Island was used to incarcerate freedom fighters. It features the remains of a gallows atop a hillock. Accessible by boat through the harbour.",
    coordinates: { lat: 11.6667, lng: 92.6833 },

    essentials: {
      bestTime: "Morning",
      weather: "Humid",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Boat: "₹200-400" }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Boat from Phoenix Bay Jetty"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/viperisland"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Climbing hillock to see gallows requires walking up stairs."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Harbour Cruise" },
      { time: "03:30 PM", activity: "Visit Gallows" },
      { time: "04:30 PM", activity: "Return" }
    ],

    foodGuide: [
      { name: "None", type: "Self", specialty: "Carry water", rating: 5.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3023,
    name: "Zonal Anthropological Museum",
    slug: "anthropological-museum",
    state: "Port Blair, Andaman and Nicobar Islands",
    category: "Heritage",
    badge: "Tribal History",
    image: "https://tse3.mm.bing.net/th/id/OIP.JIU558Hl_V_j7sS4aNBx3AHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "One of the best museums to understand the indigenous tribes of the islands (Jarawas, Sentinelese, Onges, Great Andamanese). Displays tools, clothes, and habitats.",
    coordinates: { lat: 11.6669, lng: 92.7369 },

    essentials: {
      bestTime: "Afternoon",
      weather: "Indoor",
      timings: "09:00 AM - 01:00 PM, 01:30 PM - 04:30 PM (Closed Mondays)",
      entryFee: { Entry: "₹20", Camera: "Prohibited" }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Located in middle point, accessible by auto"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/anthropological"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Accessible building."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Museum Tour" },
      { time: "03:00 PM", activity: "Documentary (if showing)" }
    ],

    foodGuide: [
      { name: "Icy Spicy", type: "Restaurant", specialty: "North Indian", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3024,
    name: "Little Andaman (Butler Bay)",
    slug: "little-andaman",
    state: "Little Andaman, Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Surfing Destination",
    image: "https://tse2.mm.bing.net/th/id/OIP.eXzgwmQD5MwuEFjPJFnudQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A remote paradise known for India's best surfing waves. Butler Bay offers a concave beach with massive waves. Also features the White Surf Waterfall.",
    coordinates: { lat: 10.6600, lng: 92.5600 },

    essentials: {
      bestTime: "November to April",
      weather: "Tropical",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Port Blair (Helicopter service available)",
      nearestRailway: "N/A",
      busConnectivity: "6-8 Hour Ferry from Port Blair (Hut Bay)"
    },

    externalLinks: {
      officialBooking: "N/A",
      googleMaps: "https://goo.gl/maps/littleandaman"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Remote location with limited infrastructure."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Surfing/Swimming" },
      { time: "11:00 AM", activity: "Visit White Surf Waterfall" }
    ],

    foodGuide: [
      { name: "Palmyra Resort", type: "Resort", specialty: "Seafood", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-284003",
      nearestHospital: "CHC Hut Bay"
    }
  }
];













