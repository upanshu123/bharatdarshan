import React, { useState, useMemo } from "react";
import { MapPin, Star, Search, Sparkles, Filter, Calendar, ArrowRight, Compass, Heart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const topDestinations = [
  {
    id: 2701,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    category: "Heritage & Forts",
    rating: 4.9,
    reviewsCount: "12.4k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop", 
    description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan. A UNESCO World Heritage Site.",
    highlights: ["Wonder of the World", "Mughal Architecture", "Yamuna River Views"]
  },
  {
    id: 701, 
    name: "Calangute & Baga Beach",
    location: "Bardez, North Goa",
    category: "Beaches & Coastal",
    rating: 4.8,
    reviewsCount: "9.8k",
    bestTime: "Nov - Feb",
    image: "https://oneboard.app/_next/static/media/baghabeach.e23ac324.webp",
    description: "The queen of beaches in North Goa, famous for its golden sands, vibrant beach shacks, sunset nightlife, and adrenaline-pumping water sports.",
    highlights: ["Water Sports", "Beach Shacks", "Sunset Views"]
  },
  {
    id: 2207, 
    name: "Hawa Mahal",
    location: "Jaipur, Rajasthan",
    category: "Heritage & Forts",
    rating: 4.8,
    reviewsCount: "8.5k",
    bestTime: "Oct - Mar",
    image: "https://www.travel-rajasthan.com/images/experiance-in-rajsthan/forts-and-palaces/hawa-mahal-travel-rajasthan.jpg",
    description: "A five-story pink sandstone palace with 953 small carved windows (Jharokhas), designed for royal ladies to witness street celebrations in private.",
    highlights: ["Pink City Icon", "953 Jharokhas", "Royal Heritage"]
  },
  {
    id: 1301,
    name: "Alleppey Backwaters",
    location: "Alleppey, Kerala",
    category: "Backwaters & Nature",
    rating: 4.9,
    reviewsCount: "7.2k",
    bestTime: "Sep - Mar",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop",
    description: "Serene network of brackish lagoons, lakes, and palm-fringed canals. World-renowned for tranquil luxury houseboat cruises and authentic South Indian cuisine.",
    highlights: ["Houseboat Stays", "Palm Canals", "Ayurvedic Wellness"]
  },
  {
    id: 2704, 
    name: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh",
    category: "Spiritual & Temples",
    rating: 5.0,
    reviewsCount: "15.1k",
    bestTime: "Oct - Mar",
    image: "https://www.daiwikhotels.com/wp-content/uploads/2024/07/kashi-viswanath-temple-cvr-2.jpg",
    description: "One of the most sacred Jyotirlinga shrines of Lord Shiva located in Varanasi on the western bank of holy river Ganga.",
    highlights: ["Ganga Aarti", "Holy Jyotirlinga", "Ancient Ghats"]
  },
  {
    id: 3501, 
    name: "Pangong Tso Lake",
    location: "Leh, Ladakh",
    category: "Lakes & Mountains",
    rating: 4.9,
    reviewsCount: "6.9k",
    bestTime: "May - Sep",
    image: "https://www.lehladakhindia.com/wp-content/uploads/2024/07/pangong-tso-lake.jpeg",
    description: "A breathtaking high-altitude lake at 4,225m that dynamically changes colors from azure blue to deep emerald. Immortalized in Indian cinema.",
    highlights: ["Color Changing Water", "Himalayan Peak Views", "Camping"]
  },
  {
    id: 201,
    name: "Golden Temple (Harmandir Sahib)",
    location: "Amritsar, Punjab",
    category: "Spiritual & Temples",
    rating: 5.0,
    reviewsCount: "18.3k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1588096344356-9b168670b1ec?q=80&w=1000&auto=format&fit=crop",
    description: "The holiest Gurdwara of Sikhism surrounded by the Amrit Sarovar lake. Known for its gold foil architecture and 24/7 world famous mega Langar hall.",
    highlights: ["Golden Shrine", "Amrit Sarovar", "Community Langar"]
  },
  {
    id: 1302,
    name: "Munnar Tea Gardens",
    location: "Munnar, Kerala",
    category: "Backwaters & Nature",
    rating: 4.8,
    reviewsCount: "5.4k",
    bestTime: "Sep - May",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000&auto=format&fit=crop",
    description: "Rolling green hill station at 1,600m above sea level, covered with lush tea plantations, misty valleys, and rare Neelakurinji blooms.",
    highlights: ["Tea Plantations", "Misty Hills", "Trekking Trails"]
  },
  {
    id: 2201,
    name: "Amber Fort",
    location: "Jaipur, Rajasthan",
    category: "Heritage & Forts",
    rating: 4.8,
    reviewsCount: "10.2k",
    bestTime: "Oct - Mar",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=700&h=400&s=1",
    description: "A majestic hilltop fort built in 1592. Famous for its artistic Hindu style elements, the Sheesh Mahal (Mirror Palace), and stunning views of Maota Lake.",
    highlights: ["Sheesh Mahal", "Elephant Ride", "Maota Lake Views"]
  },
  {
    id: 1101,
    name: "Hampi Ruins",
    location: "Hampi, Karnataka",
    category: "Heritage & Forts",
    rating: 4.7,
    reviewsCount: "4.8k",
    bestTime: "Oct - Feb",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop",
    description: "A UNESCO World Heritage Site — the surreal ruined capital of the Vijayanagara Empire spread across boulder-strewn landscape with ancient temples and bazaars.",
    highlights: ["UNESCO Site", "Virupaksha Temple", "Boulder Landscape"]
  },
  {
    id: 1401,
    name: "Khajuraho Temples",
    location: "Khajuraho, Madhya Pradesh",
    category: "Heritage & Forts",
    rating: 4.8,
    reviewsCount: "6.1k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1000&auto=format&fit=crop",
    description: "A group of Hindu and Jain temples from the medieval period, famous for their Nagara-style architectural symbolism and erotic sculptures. UNESCO World Heritage Site.",
    highlights: ["UNESCO Heritage", "Medieval Temples", "Intricate Sculptures"]
  },
  {
    id: 2501,
    name: "Meenakshi Amman Temple",
    location: "Madurai, Tamil Nadu",
    category: "Spiritual & Temples",
    rating: 4.9,
    reviewsCount: "11.7k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
    description: "A historic Hindu temple dedicated to Goddess Meenakshi with towering 14 gopurams adorned with thousands of colorful stone sculptures.",
    highlights: ["14 Gopurams", "Ancient Architecture", "Pilgrimage Site"]
  },
  {
    id: 3001,
    name: "Rishikesh & Har Ki Pauri",
    location: "Rishikesh, Uttarakhand",
    category: "Spiritual & Temples",
    rating: 4.8,
    reviewsCount: "9.3k",
    bestTime: "Sep - Apr",
    image: "https://images.unsplash.com/photo-1584208124888-5f83609cc8f2?q=80&w=1000&auto=format&fit=crop",
    description: "The Yoga Capital of the World nestled by the turquoise Ganges. Famous for white-water rafting, Laxman Jhula, and the nightly Ganga Aarti ceremony.",
    highlights: ["River Rafting", "Yoga & Meditation", "Ganga Aarti"]
  },
  {
    id: 902,
    name: "Rohtang Pass",
    location: "Manali, Himachal Pradesh",
    category: "Lakes & Mountains",
    rating: 4.7,
    reviewsCount: "5.6k",
    bestTime: "May - Jun",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
    description: "A high mountain pass on the eastern Pir Panjal Range at 3,978m offering spectacular views of glaciers, Lahaul-Spiti Valley, and Chandra River.",
    highlights: ["Snow Activities", "Himalayan Vistas", "Chandra River"]
  },
  {
    id: 3101,
    name: "Valley of Flowers",
    location: "Chamoli, Uttarakhand",
    category: "Lakes & Mountains",
    rating: 4.9,
    reviewsCount: "3.8k",
    bestTime: "Jul - Sep",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
    description: "A UNESCO World Heritage Site — a national park famous for its meadows of endemic alpine flowers and outstanding natural beauty in the Western Himalayas.",
    highlights: ["UNESCO Heritage", "Alpine Flowers", "Himalayan Trek"]
  },
  {
    id: 2404,
    name: "Marina Beach",
    location: "Chennai, Tamil Nadu",
    category: "Beaches & Coastal",
    rating: 4.6,
    reviewsCount: "7.5k",
    bestTime: "Nov - Feb",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
    description: "The second longest natural urban beach in the world stretching 13 km, dotted with statues, lighthouses, and street food stalls.",
    highlights: ["13 km Stretch", "Street Food", "Lighthouse"]
  },
  {
    id: 702,
    name: "Palolem Beach",
    location: "Canacona, South Goa",
    category: "Beaches & Coastal",
    rating: 4.8,
    reviewsCount: "4.9k",
    bestTime: "Nov - Feb",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
    description: "A crescent-shaped tranquil beach in South Goa with crystal clear shallow waters, perfect for swimming, kayaking, and dolphin spotting.",
    highlights: ["Dolphin Spotting", "Kayaking", "Silent Discos"]
  },
  {
    id: 3502,
    name: "Nubra Valley",
    location: "Leh, Ladakh",
    category: "Lakes & Mountains",
    rating: 4.8,
    reviewsCount: "3.2k",
    bestTime: "Jun - Sep",
    image: "https://images.unsplash.com/photo-1568755005853-89e94f703aaa?q=80&w=1000&auto=format&fit=crop",
    description: "A high-altitude cold desert valley with sand dunes, Bactrian camels, ancient monasteries, and the confluence of Shyok and Nubra rivers.",
    highlights: ["Bactrian Camels", "Sand Dunes", "Diskit Monastery"]
  },
  {
    id: 1102,
    name: "Mysore Palace",
    location: "Mysore, Karnataka",
    category: "Heritage & Forts",
    rating: 4.8,
    reviewsCount: "8.9k",
    bestTime: "Oct - Feb",
    image: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?q=80&w=1000&auto=format&fit=crop",
    description: "A majestic three-story stone palace in Indo-Saracenic style, the official residence of the Wadiyar dynasty. Illuminated with 97,000 bulbs during Dasara.",
    highlights: ["Dasara Festival", "97,000 Bulbs", "Royal Heritage"]
  },
  {
    id: 1601,
    name: "Ajanta & Ellora Caves",
    location: "Aurangabad, Maharashtra",
    category: "Heritage & Forts",
    rating: 4.9,
    reviewsCount: "5.7k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1573651622-3cfdfd8e3e3a?q=80&w=1000&auto=format&fit=crop",
    description: "UNESCO World Heritage Sites — rock-cut Buddhist, Hindu, and Jain cave monuments with breathtaking frescoes and sculptures dating back to 2nd century BC.",
    highlights: ["UNESCO Heritage", "Cave Frescoes", "Rock-cut Architecture"]
  },
  {
    id: 601,
    name: "Rann of Kutch",
    location: "Kutch, Gujarat",
    category: "Backwaters & Nature",
    rating: 4.7,
    reviewsCount: "4.1k",
    bestTime: "Nov - Feb",
    image: "https://images.unsplash.com/photo-1598132492101-28ac0e1fee87?q=80&w=1000&auto=format&fit=crop",
    description: "The world's largest salt desert stretching 7,505 sq km, transforming into a mirror-like white expanse during winter's Rann Utsav festival under the full moon.",
    highlights: ["Rann Utsav Festival", "Salt Desert", "Full Moon Nights"]
  },
  {
    id: 901,
    name: "Spiti Valley",
    location: "Lahaul-Spiti, Himachal Pradesh",
    category: "Lakes & Mountains",
    rating: 4.9,
    reviewsCount: "3.5k",
    bestTime: "Jun - Sep",
    image: "https://images.unsplash.com/photo-1571986020823-8d8a94d97b98?q=80&w=1000&auto=format&fit=crop",
    description: "A cold desert mountain valley at 3,800m in the Himalayas, known for Buddhist monasteries perched on dramatic cliffs and ancient fossil beds.",
    highlights: ["Key Monastery", "Fossil Sites", "Himalayan Desert"]
  },
  {
    id: 3201,
    name: "Sundarbans Mangroves",
    location: "South 24 Parganas, West Bengal",
    category: "Wildlife & Forests",
    rating: 4.7,
    reviewsCount: "3.9k",
    bestTime: "Nov - Mar",
    image: "https://images.unsplash.com/photo-1617275249641-322f7b3db264?q=80&w=1000&auto=format&fit=crop",
    description: "The world's largest mangrove forest and UNESCO World Heritage Site, home to the majestic Bengal tiger and rich estuarine biodiversity.",
    highlights: ["Royal Bengal Tiger", "Mangrove Forest", "UNESCO Heritage"]
  },
  {
    id: 102,
    name: "Kaziranga National Park",
    location: "Golaghat, Assam",
    category: "Wildlife & Forests",
    rating: 4.8,
    reviewsCount: "4.4k",
    bestTime: "Nov - Apr",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1000&auto=format&fit=crop",
    description: "A UNESCO World Heritage Site hosting two-thirds of the world's one-horned rhinoceroses, along with elephants, wild buffalo, and Bengal tigers.",
    highlights: ["One-Horned Rhino", "UNESCO Heritage", "Elephant Safari"]
  },
  {
    id: 1501,
    name: "Coorg Coffee Estates",
    location: "Kodagu, Karnataka",
    category: "Backwaters & Nature",
    rating: 4.7,
    reviewsCount: "4.2k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1591197172062-c718f82aba20?q=80&w=1000&auto=format&fit=crop",
    description: "Scotland of India — misty hills blanketed with coffee and pepper plantations, cascading waterfalls like Abbey Falls, and the Namdroling Monastery.",
    highlights: ["Coffee Estates", "Abbey Falls", "Trekking Trails"]
  },
  {
    id: 2202,
    name: "Mehrangarh Fort",
    location: "Jodhpur, Rajasthan",
    category: "Heritage & Forts",
    rating: 4.9,
    reviewsCount: "7.3k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?q=80&w=1000&auto=format&fit=crop",
    description: "One of India's largest forts perched 410 feet above the Blue City, housing magnificent palaces with intricate carved panels and panoramic views.",
    highlights: ["Sheesh Mahal", "Blue City Views", "Museum Collection"]
  },
  {
    id: 2203,
    name: "City Palace Udaipur",
    location: "Udaipur, Rajasthan",
    category: "Heritage & Forts",
    rating: 4.8,
    reviewsCount: "6.8k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop",
    description: "A magnificent palace complex rising above Lake Pichola, comprising 11 palaces with crystal galleries, peacock mosaics, and intricate mirror work.",
    highlights: ["Lake Pichola Views", "Mirror Work", "Royal Museum"]
  },
  {
    id: 2705,
    name: "Sarnath",
    location: "Varanasi, Uttar Pradesh",
    category: "Spiritual & Temples",
    rating: 4.7,
    reviewsCount: "3.6k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1000&auto=format&fit=crop",
    description: "The sacred deer park where Gautama Buddha gave his first sermon after attaining enlightenment. Home to the Dhamek Stupa and Ashoka's famous pillar.",
    highlights: ["Dhamek Stupa", "Buddhist Pilgrimage", "Ashoka Pillar"]
  },
  {
    id: 2102,
    name: "Cherrapunji & Living Root Bridges",
    location: "Cherrapunji, Meghalaya",
    category: "Backwaters & Nature",
    rating: 4.8,
    reviewsCount: "3.1k",
    bestTime: "Sep - May",
    image: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?q=80&w=1000&auto=format&fit=crop",
    description: "One of the wettest places on Earth, home to spectacular living root bridges crafted by the Khasi tribe and a network of stunning waterfalls.",
    highlights: ["Living Root Bridges", "Waterfalls", "Tribal Culture"]
  },
  {
    id: 2803,
    name: "Jim Corbett National Park",
    location: "Nainital, Uttarakhand",
    category: "Wildlife & Forests",
    rating: 4.8,
    reviewsCount: "5.2k",
    bestTime: "Nov - Jun",
    image: "https://images.unsplash.com/photo-1568574348993-54f0cca23c9a?q=80&w=1000&auto=format&fit=crop",
    description: "India's oldest national park and one of the finest tiger reserves, established in 1936. Home to 200+ bird species and the majestic Royal Bengal Tiger.",
    highlights: ["Tiger Safari", "Elephant Ride", "Bird Watching"]
  },
  {
    id: 1701,
    name: "Ooty Nilgiri Hills",
    location: "Ooty, Tamil Nadu",
    category: "Hills & Valleys",
    rating: 4.7,
    reviewsCount: "6.1k",
    bestTime: "Apr - Jun",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop",
    description: "Queen of Hill Stations in the Nilgiri Mountains with the famous UNESCO Nilgiri Mountain Railway toy train, botanical gardens, and tea estates.",
    highlights: ["Toy Train Ride", "Botanical Garden", "Tea Estates"]
  },
  {
    id: 3202,
    name: "Darjeeling Tea Trails",
    location: "Darjeeling, West Bengal",
    category: "Hills & Valleys",
    rating: 4.8,
    reviewsCount: "5.8k",
    bestTime: "Mar - May",
    image: "https://images.unsplash.com/photo-1586347886960-b6a30ee0d6a5?q=80&w=1000&auto=format&fit=crop",
    description: "The Queen of Hill Stations with UNESCO-listed Darjeeling Himalayan Railway toy train, sunrise view of Kanchenjunga, and world-famous first-flush tea.",
    highlights: ["Toy Train UNESCO", "Kanchenjunga Views", "Tea Gardens"]
  },
  {
    id: 1303,
    name: "Kovalam Beach",
    location: "Thiruvananthapuram, Kerala",
    category: "Beaches & Coastal",
    rating: 4.7,
    reviewsCount: "4.3k",
    bestTime: "Sep - Mar",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1000&auto=format&fit=crop",
    description: "A crescent-shaped beach with a lighthouse, calm waters ideal for swimming, and legendary Ayurvedic massage centres along the palm-fringed shores.",
    highlights: ["Lighthouse Beach", "Ayurvedic Spas", "Swimming"]
  },
  {
    id: 2403,
    name: "Mahabalipuram Shore Temple",
    location: "Mahabalipuram, Tamil Nadu",
    category: "Heritage & Forts",
    rating: 4.7,
    reviewsCount: "4.6k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
    description: "A UNESCO World Heritage Site — a complex of 7th and 8th century rock-cut temples on the Coromandel Coast including the iconic Shore Temple.",
    highlights: ["Shore Temple", "UNESCO Heritage", "Rock-cut Caves"]
  },
  {
    id: 602,
    name: "Gir National Park",
    location: "Sasan Gir, Gujarat",
    category: "Wildlife & Forests",
    rating: 4.8,
    reviewsCount: "3.7k",
    bestTime: "Dec - Mar",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop",
    description: "The last remaining natural habitat of the Asiatic Lion on Earth. Gir Forest protects over 600 lions alongside leopards, crocodiles, and 200+ bird species.",
    highlights: ["Asiatic Lion", "Jeep Safari", "Wildlife Photography"]
  },
  {
    id: 2601,
    name: "Puri Jagannath Temple",
    location: "Puri, Odisha",
    category: "Spiritual & Temples",
    rating: 4.9,
    reviewsCount: "9.4k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1574165945521-4ba31dbddba7?q=80&w=1000&auto=format&fit=crop",
    description: "One of the Char Dhams — the sacred 12th-century temple of Lord Jagannath famous for the annual Rath Yatra chariot festival witnessed by millions.",
    highlights: ["Rath Yatra Festival", "Char Dham", "12th Century Temple"]
  },
  {
    id: 1304,
    name: "Thekkady Periyar Wildlife",
    location: "Thekkady, Kerala",
    category: "Wildlife & Forests",
    rating: 4.7,
    reviewsCount: "4.0k",
    bestTime: "Sep - Apr",
    image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1000&auto=format&fit=crop",
    description: "One of India's premier wildlife sanctuaries centred around Periyar Lake. Boat safaris offer views of elephants, gaur, and sambhar deer at the water's edge.",
    highlights: ["Boat Safari", "Elephants", "Spice Plantations"]
  },
  {
    id: 2804,
    name: "Mussoorie Hill Station",
    location: "Mussoorie, Uttarakhand",
    category: "Hills & Valleys",
    rating: 4.6,
    reviewsCount: "5.3k",
    bestTime: "Mar - Jun",
    image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&w=1000&auto=format&fit=crop",
    description: "The Queen of Hills with panoramic views of Doon Valley and the Himalayas. Famous for its Mall Road, Kempty Falls, and Cloud's End viewpoint.",
    highlights: ["Mall Road", "Kempty Falls", "Himalayan Views"]
  },
  {
    id: 2204,
    name: "Jaisalmer Golden Fort",
    location: "Jaisalmer, Rajasthan",
    category: "Heritage & Forts",
    rating: 4.8,
    reviewsCount: "5.9k",
    bestTime: "Nov - Feb",
    image: "https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?q=80&w=1000&auto=format&fit=crop",
    description: "A UNESCO World Heritage living fort rising from the Thar Desert — one of the few forts in the world where people still live inside its ancient sandstone walls.",
    highlights: ["UNESCO Heritage", "Desert Safari", "Living Fort"]
  },
  {
    id: 1901,
    name: "Loktak Lake & Phumdis",
    location: "Bishnupur, Manipur",
    category: "Backwaters & Nature",
    rating: 4.7,
    reviewsCount: "1.8k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
    description: "The largest freshwater lake in Northeast India, famous for its floating phumdis (masses of vegetation) and the Keibul Lamjao National Park.",
    highlights: ["Floating Islands", "Sangai Deer", "Floating National Park"]
  },
  {
    id: 103,
    name: "Andaman Islands",
    location: "Port Blair, Andaman & Nicobar",
    category: "Beaches & Coastal",
    rating: 4.9,
    reviewsCount: "5.1k",
    bestTime: "Nov - May",
    image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1000&auto=format&fit=crop",
    description: "Pristine island paradise with turquoise waters, Radhanagar Beach (Asia's Best Beach), coral reefs perfect for snorkelling and diving at Havelock Island.",
    highlights: ["Radhanagar Beach", "Scuba Diving", "Coral Reefs"]
  },
  {
    id: 2905,
    name: "Brihadeeswarar Temple",
    location: "Thanjavur, Tamil Nadu",
    category: "Spiritual & Temples",
    rating: 4.9,
    reviewsCount: "4.5k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop",
    description: "A UNESCO World Heritage Site — the 1,000-year-old Chola masterpiece with a 66m vimana (tower) built using 130,000 tonnes of granite without any mortar.",
    highlights: ["UNESCO Heritage", "1000-Year-Old Temple", "Chola Architecture"]
  },
  {
    id: 2205,
    name: "Chittorgarh Fort",
    location: "Chittorgarh, Rajasthan",
    category: "Heritage & Forts",
    rating: 4.7,
    reviewsCount: "3.4k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?q=80&w=1000&auto=format&fit=crop",
    description: "The largest fort in India covering 700 acres. The epic setting of the legendary sacrifice of Rani Padmini and countless tales of Rajput valor.",
    highlights: ["Vijay Stambha", "Rani Padmini Palace", "Largest Fort India"]
  },
  {
    id: 1305,
    name: "Wayanad Wildlife Sanctuary",
    location: "Wayanad, Kerala",
    category: "Wildlife & Forests",
    rating: 4.7,
    reviewsCount: "3.3k",
    bestTime: "Sep - Apr",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1000&auto=format&fit=crop",
    description: "A biodiversity hotspot in the Western Ghats with dense shola forests, tribal heritage, ancient Edakkal Caves, and abundant wildlife including elephants.",
    highlights: ["Edakkal Caves", "Tribal Culture", "Wildlife Safari"]
  },
  {
    id: 3301,
    name: "Agatti Island",
    location: "Agatti, Lakshadweep",
    category: "Beaches & Coastal",
    rating: 4.9,
    reviewsCount: "1.9k",
    bestTime: "Oct - May",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1000&auto=format&fit=crop",
    description: "A pristine coral island with crystal-clear lagoons, vibrant reef ecosystems, and stunning white-sand beaches — India's hidden tropical paradise.",
    highlights: ["Coral Reefs", "Snorkelling", "Pristine Lagoon"]
  },
  {
    id: 502,
    name: "Majuli Island",
    location: "Majuli, Assam",
    category: "Backwaters & Nature",
    rating: 4.6,
    reviewsCount: "2.1k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1617275249641-322f7b3db264?q=80&w=1000&auto=format&fit=crop",
    description: "World's largest river island in the Brahmaputra, a spiritual hub of Vaishnavite monasteries (satras), vibrant masks, and pottery crafted by indigenous Mising tribe.",
    highlights: ["River Island", "Satras", "Tribal Crafts"]
  },
  {
    id: 2706,
    name: "Fatehpur Sikri",
    location: "Agra, Uttar Pradesh",
    category: "Heritage & Forts",
    rating: 4.7,
    reviewsCount: "4.3k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop",
    description: "A UNESCO World Heritage City built by Mughal Emperor Akbar in 1571, famously abandoned after 14 years due to water shortage. An architectural wonder in red sandstone.",
    highlights: ["UNESCO Heritage", "Buland Darwaza", "Akbar's Capital"]
  },
  {
    id: 1403,
    name: "Pachmarhi Hill Station",
    location: "Hoshangabad, Madhya Pradesh",
    category: "Hills & Valleys",
    rating: 4.6,
    reviewsCount: "2.7k",
    bestTime: "Oct - Apr",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1000&auto=format&fit=crop",
    description: "The only hill station in Madhya Pradesh, known as 'Satpura Ki Rani'. Famous for ancient Bhimbetka-style cave paintings, waterfalls, and the Dhupgarh sunset point.",
    highlights: ["Cave Paintings", "Dhupgarh Viewpoint", "Bee Falls"]
  },
  {
    id: 2301,
    name: "Sohra (Cherrapunji)",
    location: "Cherrapunji, Meghalaya",
    category: "Hills & Valleys",
    rating: 4.7,
    reviewsCount: "2.9k",
    bestTime: "Sep - May",
    image: "https://images.unsplash.com/photo-1552799446-159ba9523315?q=80&w=1000&auto=format&fit=crop",
    description: "The wettest place on Earth with breathtaking viewpoints over Bangladesh plains, Nohkalikai Falls — India's tallest plunge waterfall — and seven-sisters falls.",
    highlights: ["Nohkalikai Falls", "Seven Sisters Falls", "Bangladesh View"]
  },
  {
    id: 3401,
    name: "Pelling & Kanchenjunga View",
    location: "Pelling, Sikkim",
    category: "Lakes & Mountains",
    rating: 4.8,
    reviewsCount: "2.6k",
    bestTime: "Mar - May",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    description: "A scenic town in West Sikkim offering breathtaking panoramic views of Mount Kanchenjunga, the world's third highest peak, along with Pemayangtse Monastery.",
    highlights: ["Kanchenjunga Views", "Pemayangtse Monastery", "Skywalk"]
  },
  {
    id: 2602,
    name: "Konark Sun Temple",
    location: "Konark, Odisha",
    category: "Heritage & Forts",
    rating: 4.8,
    reviewsCount: "5.3k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=1000&auto=format&fit=crop",
    description: "A 13th-century UNESCO World Heritage Sun Temple designed as a massive chariot of the Sun god Surya, with 12 pairs of elaborately carved stone wheels.",
    highlights: ["UNESCO Heritage", "Stone Chariot Wheels", "Sun God Temple"]
  },
  {
    id: 2103,
    name: "Shillong City",
    location: "Shillong, Meghalaya",
    category: "Hills & Valleys",
    rating: 4.6,
    reviewsCount: "3.8k",
    bestTime: "Oct - May",
    image: "https://images.unsplash.com/photo-1573496782645-b8699f88789d?q=80&w=1000&auto=format&fit=crop",
    description: "The Scotland of the East — a charming hill capital with golf courses, Elephant Falls, Ward's Lake, and a unique blend of Khasi culture and colonial architecture.",
    highlights: ["Elephant Falls", "Ward's Lake", "Khasi Culture"]
  },
  {
    id: 2707,
    name: "Vrindavan & Mathura",
    location: "Mathura, Uttar Pradesh",
    category: "Spiritual & Temples",
    rating: 4.8,
    reviewsCount: "8.1k",
    bestTime: "Oct - Mar",
    image: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop",
    description: "The sacred birthplace of Lord Krishna — Mathura and Vrindavan together form one of the most revered pilgrimage circuits, alive with temples and Holi celebrations.",
    highlights: ["Krishna Birthplace", "Holi Festival", "Banke Bihari Temple"]
  }
];

const categories = [
  "All",
  "Heritage & Forts",
  "Beaches & Coastal",
  "Spiritual & Temples",
  "Backwaters & Nature",
  "Lakes & Mountains",
  "Wildlife & Forests",
  "Hills & Valleys",
];

export default function TopDestinations() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [likedDestinations, setLikedDestinations] = useState({});

  const toggleLike = (id) => {
    setLikedDestinations(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredDestinations = useMemo(() => {
    return topDestinations.filter(place => {
      const matchesCategory = selectedCategory === "All" || place.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        place.name.toLowerCase().includes(q) || 
        place.location.toLowerCase().includes(q) ||
        place.description.toLowerCase().includes(q);
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-orange-500 selection:text-white relative overflow-hidden">
      
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HERO HEADER SECTION --- */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 mb-6 backdrop-blur-md shadow-xl">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em]">
              Discover India's Treasures
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-none mb-6">
            Explore Bharat's <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent italic">
              Top Destinations
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Immerse yourself in centuries of heritage, pristine beaches, sacred temples, and majestic Himalayan lakes.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xl mx-auto p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
            <div>
              <span className="block text-lg sm:text-2xl font-black text-orange-400 font-serif">50+</span>
              <span className="text-[9px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">Destinations</span>
            </div>
            <div className="border-x border-white/10">
              <span className="block text-lg sm:text-2xl font-black text-amber-300 font-serif">4.9 ★</span>
              <span className="text-[9px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">Avg Rating</span>
            </div>
            <div>
              <span className="block text-lg sm:text-2xl font-black text-orange-400 font-serif">28</span>
              <span className="text-[9px] sm:text-xs text-slate-400 uppercase font-bold tracking-wider">States & UTs</span>
            </div>
          </div>
        </div>

        {/* --- SEARCH & CATEGORY FILTER BAR --- */}
        <div className="mb-12 space-y-6">
          
          {/* Search Input Box */}
          <div className="max-w-xl mx-auto relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by destination name, state, or vibe (e.g. Taj Mahal, Goa)..."
              className="w-full bg-slate-900/90 border border-white/15 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-2xl transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills (Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center px-2">
            <Filter size={16} className="text-orange-400 shrink-0 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shrink-0 border ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white border-orange-400 shadow-lg shadow-orange-600/30 scale-105'
                    : 'bg-slate-900/80 text-slate-400 border-white/10 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- DESTINATIONS GRID --- */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-white/10 max-w-md mx-auto">
            <Compass size={48} className="mx-auto text-orange-400 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold font-serif text-white mb-2">No Destinations Found</h3>
            <p className="text-slate-400 text-xs px-6 mb-6">Aapke search query se koi destination match nahi hua. Kripya doosra query try karein.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-6 py-2.5 rounded-full bg-orange-600 text-white font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map((place) => (
              <div 
                key={place.id} 
                className="group bg-slate-900/90 border border-white/10 rounded-[28px] overflow-hidden shadow-2xl hover:border-orange-500/40 transition-all duration-500 flex flex-col hover:-translate-y-1.5"
              >
                
                {/* Responsive Image Container */}
                <div className="relative h-60 sm:h-64 md:h-72 overflow-hidden shrink-0">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-orange-300 shadow-md">
                    {place.category}
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-md text-slate-950 px-3 py-1 rounded-full flex items-center gap-1 text-xs font-black shadow-md">
                    <Star size={13} fill="currentColor" />
                    <span>{place.rating}</span>
                    <span className="text-[10px] opacity-75 font-normal">({place.reviewsCount})</span>
                  </div>

                  {/* Favorite Like Button */}
                  <button
                    onClick={() => toggleLike(place.id)}
                    className="absolute bottom-4 right-4 p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white hover:text-red-500 transition-colors"
                  >
                    <Heart size={16} fill={likedDestinations[place.id] ? "currentColor" : "none"} className={likedDestinations[place.id] ? "text-red-500" : ""} />
                  </button>

                  {/* Location Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-orange-400 text-xs font-bold">
                    <MapPin size={14} className="shrink-0" />
                    <span className="truncate max-w-[200px]">{place.location}</span>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {place.name}
                    </h2>
                    
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {place.description}
                    </p>

                    {/* Highlights Badges */}
                    {place.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {place.highlights.map((h, i) => (
                          <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Footer Meta & Action Button */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                      <Calendar size={14} className="text-amber-400 shrink-0" />
                      <span>{place.bestTime}</span>
                    </div>

                    <Link 
                      to={`/place/${place.id}`} 
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-600/30 group-hover:shadow-orange-500/50"
                    >
                      <span>Explore Yatra</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}