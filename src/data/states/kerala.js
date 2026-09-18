/**
 * KERALA_PLACES DATASET - FINAL COMPREHENSIVE (18 PLACES)
 * ------------------------------------------------------------------
 * Sources: Kerala Tourism, DTPC, Forest Dept.
 * Updated: 2025-12-24
 * ------------------------------------------------------------------
 */

export const KERALA_PLACES = [
  {
    id: 1301,
    name: "Alleppey Backwaters",
    slug: "alleppey-backwaters",
    state: "Alappuzha, Kerala",
    category: "Nature",
    badge: "Venice of the East",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/fa/77/05/alleppey-backwaters-vibe.jpg?w=900&h=500&s=1",
    description: "Intricate network of canals and lagoons. Famous for overnight houseboat stays and Kuttanad rustic life.",
    coordinates: { lat: 9.4981, lng: 76.3388 },
    essentials: { 
      bestTime: "Sept to March", 
      timings: "Houseboat Check-in: 12 PM", 
      entryFee: { Houseboat: "₹7000+", Shikara: "₹600/hr" } 
    },
    transport: { nearestAirport: "Cochin (85 km)", nearestRailway: "Alappuzha (4 km)" },
    externalLinks: { officialBooking: "https://www.keralatourism.org/", googleMaps: "https://goo.gl/maps/alleppey" },
    accessibility: { wheelchairFriendly: false, notes: "Luxury boats have ramps; standard ones don't." },
    routePlan: [{ time: "12:00 PM", activity: "Houseboat Check-in" }],
    foodGuide: [{ name: "Houseboat Kitchen", type: "Onboard", specialty: "Karimeen Pollichathu", rating: 4.8 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "General Hospital Alappuzha" }
  },
  {
    id: 1302,
    name: "Munnar Tea Gardens",
    slug: "munnar",
    state: "Munnar, Kerala",
    category: "Hill Stations",
    badge: "Tea Capital",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/95/2c/a0/tea-gardens.jpg?w=900&h=500&s=1",
    description: "Rolling tea gardens, Eravikulam National Park, and Anamudi Peak. Confluence of three rivers.",
    coordinates: { lat: 10.0889, lng: 77.0595 },
    essentials: { 
      bestTime: "Sept to March", 
      timings: "24 Hours", 
      entryFee: { Park: "₹125", TeaMuseum: "₹125" } 
    },
    transport: { nearestAirport: "Cochin (110 km)", nearestRailway: "Aluva (110 km)" },
    externalLinks: { officialBooking: "https://eravikulam.org/", googleMaps: "https://goo.gl/maps/munnar" },
    accessibility: { wheelchairFriendly: false, notes: "Hilly terrain; park buses are difficult for wheelchairs." },
    routePlan: [{ time: "08:30 AM", activity: "Eravikulam Park Safari" }],
    foodGuide: [{ name: "Saravana Bhavan", type: "City", specialty: "Veg Sadya", rating: 4.1 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "Tata High Range Hospital" }
  },
  {
    id: 1303,
    name: "Athirapally Waterfalls",
    slug: "athirapally-waterfalls",
    state: "Thrissur, Kerala",
    category: "Nature",
    badge: "Niagara of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/The_View_of_the_Athirapally_Falls_during_the_onset_of_Monsoon.jpg",
    description: "Largest waterfall in Kerala, standing 80ft tall on Chalakudy River. Iconic film location.",
    coordinates: { lat: 10.2851, lng: 76.5698 },
    essentials: { 
      bestTime: "June to Oct", 
      timings: "08:00 AM - 06:00 PM", 
      entryFee: { Entry: "₹50" } 
    },
    transport: { nearestAirport: "Cochin (55 km)", nearestRailway: "Chalakudy (30 km)" },
    externalLinks: { officialBooking: "https://www.keralatourism.org/", googleMaps: "https://goo.gl/maps/athirapally" },
    accessibility: { wheelchairFriendly: true, notes: "Paved path to top viewpoint." },
    routePlan: [{ time: "10:30 AM", activity: "Trek to base of falls" }],
    foodGuide: [{ name: "Rainforest", type: "View", specialty: "Bamboo Rice Payasam", rating: 4.5 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "St. James Chalakudy" }
  },
  {
    id: 1304,
    name: "Periyar Wildlife Sanctuary",
    slug: "periyar-national-park",
    state: "Thekkady, Kerala",
    category: "Wildlife",
    badge: "Tiger Reserve",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8e/08/4f/a-and-explore-the-beauty.jpg?w=800&h=500&s=1",
    description: "Sanctuary around Periyar Lake. Famous for boat safaris and wild elephant sightings.",
    coordinates: { lat: 9.6031, lng: 77.1615 },
    essentials: { 
      bestTime: "Oct to Feb", 
      timings: "06:00 AM - 05:00 PM", 
      entryFee: { Entry: "₹45", BoatRide: "₹255" } 
    },
    transport: { nearestAirport: "Madurai (140 km)", nearestRailway: "Kottayam (110 km)" },
    externalLinks: { officialBooking: "https://www.periyarfoundation.online/", googleMaps: "https://goo.gl/maps/periyar" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps at boat landing." },
    routePlan: [{ time: "07:30 AM", activity: "Morning Boat Safari" }],
    foodGuide: [{ name: "Grandma's Cafe", type: "City", specialty: "Homestyle Kerala", rating: 4.4 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "Govt Hospital Kumily" }
  },
  {
    id: 1305,
    name: "Wayanad Wildlife Sanctuary",
    slug: "wayanad-wildlife",
    state: "Wayanad, Kerala",
    category: "Wildlife",
    badge: "Project Elephant",
    image: "https://thewoodsresorts.com/uploads/media/jungle-safari-in-wayanad626a75c03edcf.jpg",
    description: "Second largest sanctuary in Kerala, home to elephants, tigers, and rare vultures.",
    coordinates: { lat: 11.6919, lng: 76.3686 },
    essentials: { 
      bestTime: "Oct to May", 
      timings: "7 AM - 10 AM, 3 PM - 5 PM", 
      entryFee: { JeepSafari: "₹600+" } 
    },
    transport: { nearestAirport: "Calicut (100 km)", nearestRailway: "Kozhikode (90 km)" },
    externalLinks: { officialBooking: "https://www.keralatourism.org/", googleMaps: "https://goo.gl/maps/wayanad-wildlife" },
    accessibility: { wheelchairFriendly: false, notes: "Rugged terrain." },
    routePlan: [{ time: "03:00 PM", activity: "Afternoon Jungle Jeep Safari" }],
    foodGuide: [{ name: "1980s Restaurant", type: "City", specialty: "Clay Pot Meals", rating: 4.5 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "WIMS Meppadi" }
  },
  {
    id: 1306,
    name: "Varkala Cliff Beach",
    slug: "varkala-beach",
    state: "Varkala, Kerala",
    category: "Beaches",
    badge: "Unique Cliff Beach",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-varkala-cliff-varkala-kerala-attr-hero?qlt=82&ts=1742154423234",
    description: "Cliff-side beach with natural springs and a vibrant backpacker vibe.",
    coordinates: { lat: 8.7379, lng: 76.7163 },
    essentials: { 
      bestTime: "Oct to March", 
      timings: "24 Hours", 
      entryFee: { Entry: "Free" } 
    },
    transport: { nearestAirport: "Trivandrum (40 km)", nearestRailway: "Varkala (3 km)" },
    externalLinks: { officialBooking: "https://www.keralatourism.org/", googleMaps: "https://goo.gl/maps/varkala" },
    accessibility: { wheelchairFriendly: false, notes: "Cliff is flat; beach access via steep stairs." },
    routePlan: [{ time: "05:30 PM", activity: "Sunset from North Cliff" }],
    foodGuide: [{ name: "Darjeeling Cafe", type: "Cliffside", specialty: "Seafood", rating: 4.5 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "Mission Hospital" }
  },
  {
    id: 1307,
    name: "Kovalam Beach",
    slug: "kovalam-beach",
    state: "Thiruvananthapuram, Kerala",
    category: "Beaches",
    badge: "Lighthouse Beach",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/12/dd/fa/kovalam.jpg?w=1200&h=700&s=1",
    description: "Iconic crescent beach famous for its 35m red-and-white lighthouse.",
    coordinates: { lat: 8.4004, lng: 76.9787 },
    essentials: { 
      bestTime: "Sept to March", 
      timings: "24 Hours", 
      entryFee: { Lighthouse: "₹20" } 
    },
    transport: { nearestAirport: "Trivandrum (15 km)", nearestRailway: "Trivandrum Central (15 km)" },
    externalLinks: { officialBooking: "https://www.keralatourism.org/", googleMaps: "https://goo.gl/maps/kovalam" },
    accessibility: { wheelchairFriendly: true, notes: "Paved promenade." },
    routePlan: [{ time: "04:00 PM", activity: "Climb Lighthouse" }],
    foodGuide: [{ name: "German Bakery", type: "Cafe", specialty: "Breakfast", rating: 4.4 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "Upasana Hospital" }
  },
  {
    id: 1308,
    name: "Marari Beach",
    slug: "marari-beach",
    state: "Alappuzha, Kerala",
    category: "Beaches",
    badge: "Quiet Retreat",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/1b/5c/46/marari-beach.jpg?w=600&h=400&s=1",
    description: "Quiet, pristine beach near Alleppey, ideal for relaxation and Ayurvedic stays.",
    coordinates: { lat: 9.6014, lng: 76.2995 },
    essentials: { 
      bestTime: "Oct to March", 
      timings: "24 Hours", 
      entryFee: { Entry: "Free" } 
    },
    transport: { nearestAirport: "Cochin (75 km)", nearestRailway: "Mararikulam (3 km)" },
    externalLinks: { officialBooking: "https://www.keralatourism.org/", googleMaps: "https://goo.gl/maps/marari" },
    accessibility: { wheelchairFriendly: true, notes: "Easy level access." },
    routePlan: [{ time: "05:00 PM", activity: "Leisurely Beach Walk" }],
    foodGuide: [{ name: "Marari Beach Resort", type: "Luxury", specialty: "Organic Food", rating: 4.6 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "General Hospital Alappuzha" }
  },
  {
    id: 1309,
    name: "Fort Kochi",
    slug: "fort-kochi",
    state: "Kochi, Kerala",
    category: "Heritage",
    badge: "Colonial Hub",
    image: "https://static2.tripoto.com/media/filter/tst/img/338336/TripDocument/1661121186_img_20220822_031212.jpg.webp",
    description: "Historic area with Portuguese and Dutch roots. Famous for Chinese Fishing Nets.",
    coordinates: { lat: 9.9658, lng: 76.2421 },
    essentials: { 
      bestTime: "All Year", 
      timings: "24 Hours", 
      entryFee: { Entry: "Free" } 
    },
    transport: { nearestAirport: "Cochin (40 km)", nearestRailway: "Ernakulam South (12 km)" },
    externalLinks: { officialBooking: "https://www.keralatourism.org/", googleMaps: "https://goo.gl/maps/fortkochi" },
    accessibility: { wheelchairFriendly: true, notes: "Flat streets." },
    routePlan: [{ time: "09:00 AM", activity: "Chinese Fishing Nets View" }],
    foodGuide: [{ name: "Kashi Art Cafe", type: "Cafe", specialty: "Cake & Coffee", rating: 4.6 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "General Hospital Ernakulam" }
  },
  {
    id: 1310,
    name: "Padmanabhaswamy Temple",
    slug: "padmanabhaswamy-temple",
    state: "Thiruvananthapuram, Kerala",
    category: "Spiritual",
    badge: "Richest Temple",
    image: "https://www.sreestours.com/wp-content/uploads/2023/05/sree-padmanabhaswamy-temple-thiruvananthapuram-4-768x513-1.jpg",
    description: "World's richest temple dedicated to Lord Vishnu. Strict traditional dress code.",
    coordinates: { lat: 8.4830, lng: 76.9436 },
    essentials: { 
      bestTime: "All Year", 
      timings: "3:30 AM - 12:00 PM, 5 PM - 8:30 PM", 
      entryFee: { Special: "₹250" } 
    },
    transport: { nearestAirport: "Trivandrum (4 km)", nearestRailway: "Trivandrum Central (1 km)" },
    externalLinks: { officialBooking: "https://spst.in/", googleMaps: "https://goo.gl/maps/padmanabhaswamy" },
    accessibility: { wheelchairFriendly: true, notes: "Outer corridors accessible." },
    routePlan: [{ time: "06:00 AM", activity: "Early Morning Darshan" }],
    foodGuide: [{ name: "Mothers Veg Plaza", type: "Veg", specialty: "Sadya", rating: 4.7 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "Medical College Trivandrum" }
  },
  {
    id: 1311,
    name: "Bekal Fort",
    slug: "bekal-fort",
    state: "Kasaragod, Kerala",
    category: "Heritage",
    badge: "Keyhole Fort",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ec/59/3c/bekal-fort.jpg?w=1200&h=1200&s=1",
    description: "Massive keyhole-shaped fort overlooking the Arabian Sea. Largest in Kerala.",
    coordinates: { lat: 12.3837, lng: 75.0336 },
    essentials: { 
      bestTime: "Aug to March", 
      timings: "08:00 AM - 05:30 PM", 
      entryFee: { Indian: "₹25" } 
    },
    transport: { nearestAirport: "Mangalore (50 km)", nearestRailway: "Bekal Fort (1 km)" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/bekal" },
    accessibility: { wheelchairFriendly: true, notes: "Wide ramps." },
    routePlan: [{ time: "04:30 PM", activity: "Fort Walk and Sunset View" }],
    foodGuide: [{ name: "Nombili", type: "Local", specialty: "Malabar Cuisine", rating: 4.6 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "Govt Hospital Kanhangad" }
  },
  {
    id: 1312,
    name: "Edakkal Caves",
    slug: "edakkal-caves",
    state: "Wayanad, Kerala",
    category: "Nature",
    badge: "Prehistoric Art",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/cf/8e/47/edakkal-caves.jpg?w=1200&h=-1&s=1",
    description: "Stone Age carvings in Western Ghats, unique Neolithic site.",
    coordinates: { lat: 11.6280, lng: 76.2335 },
    essentials: { 
      bestTime: "Oct to May", 
      timings: "9 AM - 4 PM (Closed Mon)", 
      entryFee: { Entry: "₹40" } 
    },
    transport: { nearestAirport: "Calicut (100 km)", nearestRailway: "Kozhikode (90 km)" },
    externalLinks: { officialBooking: "https://dtpcwayanad.com/", googleMaps: "https://goo.gl/maps/edakkal" },
    accessibility: { wheelchairFriendly: false, notes: "Requires steep 1km climb." },
    routePlan: [{ time: "09:00 AM", activity: "Trek to Caves" }],
    foodGuide: [{ name: "Wilton", type: "City", specialty: "Kerala Biryani", rating: 4.3 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "WIMS Meppadi" }
  },
  {
    id: 1313,
    name: "Jatayu Earth's Center",
    slug: "jatayu-earth-center",
    state: "Kollam, Kerala",
    category: "Adventure",
    badge: "Largest Bird Sculpture",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e0/6d/20/jatayu-bird-sculpture.jpg?w=900&h=-1&s=1",
    description: "Rock theme park with the world's largest bird sculpture, adventure activities, and cable cars.",
    coordinates: { lat: 8.8631, lng: 76.8669 },
    essentials: { 
      bestTime: "Oct to March", 
      timings: "10:00 AM - 05:30 PM", 
      entryFee: { CableCar: "₹500+" } 
    },
    transport: { nearestAirport: "Trivandrum (50 km)", nearestRailway: "Kollam (38 km)" },
    externalLinks: { officialBooking: "http://www.jatayuearthscenter.com/", googleMaps: "https://goo.gl/maps/jatayu" },
    accessibility: { wheelchairFriendly: true, notes: "Cable car is accessible." },
    routePlan: [{ time: "10:30 AM", activity: "Cable Car Ride & Sculpture View" }],
    foodGuide: [{ name: "Food Court", type: "Center", specialty: "Multi-cuisine", rating: 3.9 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "N.S. Hospital Kollam" }
  },
  {
    id: 1314,
    name: "Guruvayur Temple",
    slug: "guruvayur-temple",
    state: "Guruvayur, Kerala",
    category: "Spiritual",
    badge: "Dwarka of South",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWk4_EXburrD43ZqZdvXyEFWiuWp-v3OwT3g&s",
    description: "Ancient temple dedicated to Lord Krishna (Guruvayurappan). Known for the Punnathur Kotta Elephant Camp.",
    coordinates: { lat: 10.5946, lng: 76.0378 },
    essentials: { 
      bestTime: "All Year", 
      timings: "3:00 AM - 1:00 PM, 4:30 PM - 10:00 PM", 
      entryFee: { Entry: "Free" } 
    },
    transport: { nearestAirport: "Cochin (80 km)", nearestRailway: "Guruvayur (1 km)" },
    externalLinks: { officialBooking: "https://guruvayurdevaswom.nic.in/", googleMaps: "https://goo.gl/maps/guruvayur" },
    accessibility: { wheelchairFriendly: true, notes: "Temple offers wheelchair assistance." },
    routePlan: [{ time: "03:00 PM", activity: "Visit Elephant Camp (Anakkotta)" }],
    foodGuide: [{ name: "Ananda Bhawan", type: "City", specialty: "South Indian Veg", rating: 4.2 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "Rajah Hospital" }
  },
  {
    id: 1315,
    name: "Nelliyampathy Hills",
    slug: "nelliyampathy",
    state: "Palakkad, Kerala",
    category: "Hill Stations",
    badge: "Offbeat Mist",
    image: "https://static2.tripoto.com/media/filter/tst/img/308363/TripDocument/1518000313_nelliyampathy4.jpg.webp",
    description: "Surrounded by orange orchards and coffee plantations. Famous for the Pothundi Dam and Seetharkundu viewpoint.",
    coordinates: { lat: 10.5342, lng: 76.6936 },
    essentials: { 
      bestTime: "Sept to Feb", 
      timings: "24 Hours", 
      entryFee: { Entry: "Free" } 
    },
    transport: { nearestAirport: "Coimbatore (110 km)", nearestRailway: "Palakkad (60 km)" },
    externalLinks: { officialBooking: "https://www.keralatourism.org/", googleMaps: "https://goo.gl/maps/nelliyampathy" },
    accessibility: { wheelchairFriendly: false, notes: "Winding roads and rocky viewpoints." },
    routePlan: [{ time: "10:00 AM", activity: "Pothundi Dam and Viewpoint" }],
    foodGuide: [{ name: "Local Dhabas", type: "Local", specialty: "Palakkad Meals", rating: 3.8 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "Palana Hospital Palakkad" }
  },
  {
    id: 1316,
    name: "Sagar Rani Cruise",
    slug: "kochi-cruise",
    state: "Kochi, Kerala",
    category: "Nature",
    badge: "Sunset Cruise",
    image: "https://img.onmanorama.com/content/dam/mm/en/travel/hourglass/images/2019/1/9/sagararani.jpg",
    description: "Harbor cruise in Kochi offering spectacular sunset views and a glimpse of the naval base and shipping yard.",
    coordinates: { lat: 9.9675, lng: 76.2444 },
    essentials: { 
      bestTime: "Sept to May", 
      timings: "5 PM - 7 PM", 
      entryFee: { Adult: "₹400" } 
    },
    transport: { nearestAirport: "Cochin (40 km)", nearestRailway: "Ernakulam Jn (8 km)" },
    externalLinks: { officialBooking: "https://www.ksinc.in/", googleMaps: "https://goo.gl/maps/kochi-cruise" },
    accessibility: { wheelchairFriendly: true, notes: "Lower deck is accessible." },
    routePlan: [{ time: "05:00 PM", activity: "Sunset Harbor Cruise" }],
    foodGuide: [{ name: "Marine Drive Stalls", type: "Street", specialty: "Kochi Fried Fish", rating: 4.1 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "Lourdes Hospital Kochi" }
  },
  {
    id: 1317,
    name: "Vagamon Meadows",
    slug: "vagamon-meadows",
    state: "Idukki, Kerala",
    category: "Hill Stations",
    badge: "Pine Forests",
    image: "https://www.trawell.in/admin/images/upload/963467363Vagamon_Meadows.jpg",
    description: "Famous for rolling meadows, pine forests, and paragliding festivals.",
    coordinates: { lat: 9.6824, lng: 76.9067 },
    essentials: { 
      bestTime: "Oct to March", 
      timings: "24 Hours", 
      entryFee: { Entry: "₹10" } 
    },
    transport: { nearestAirport: "Cochin (95 km)", nearestRailway: "Kottayam (64 km)" },
    externalLinks: { officialBooking: "https://www.keralatourism.org/", googleMaps: "https://goo.gl/maps/vagamon" },
    accessibility: { wheelchairFriendly: true, notes: "Meadows are accessible but hilly." },
    routePlan: [{ time: "10:00 AM", activity: "Meadow Walk and Pine Forest" }],
    foodGuide: [{ name: "Local Tea Shops", type: "Local", specialty: "Beef Parotta", rating: 4.0 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "St. John's Hospital" }
  },
  {
    id: 1318,
    name: "Kottakkal Arya Vaidya Sala",
    slug: "kottakkal-ayurveda",
    state: "Kottakkal, Kerala",
    category: "Spiritual",
    badge: "Ayurveda Center",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNrTzRspxxmR4DRLsmv3WwvntXEDZftQzFA&s",
    description: "World-renowned center for authentic Ayurvedic treatment and research.",
    coordinates: { lat: 10.9972, lng: 76.0022 },
    essentials: { 
      bestTime: "June to August (Karkidakam)", 
      timings: "8 AM - 5 PM", 
      entryFee: { Consultation: "Varies" } 
    },
    transport: { nearestAirport: "Calicut (30 km)", nearestRailway: "Tirur (12 km)" },
    externalLinks: { officialBooking: "https://www.aryavaidyasala.com/", googleMaps: "https://goo.gl/maps/kottakkal" },
    accessibility: { wheelchairFriendly: true, notes: "Fully hospital-accessible." },
    routePlan: [{ time: "09:00 AM", activity: "Ayurvedic Consultation/Treatment" }],
    foodGuide: [{ name: "AVS Canteen", type: "Health", specialty: "Ayurvedic Diet", rating: 4.4 }],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1800-425-4747", nearestHospital: "AVS Hospital" }
  }
];
