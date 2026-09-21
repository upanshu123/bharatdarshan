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
    description: "A world-renowned symbol of timeless love and ethereal beauty, this pristine white marble wonder glimmers spellbindingly at sunrise along the Yamuna riverfront. Inside the grand complex, explore lush Charbagh Persian gardens, intricate marble inlay artwork (Pietra Dura), elegant fountains, and towering minarets.",
    highlights: ["Charbagh Gardens", "Pietra Dura Inlays", "Yamuna Sunrise View", "Mughal Architecture"]
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
    description: "Goa's most vibrant coastal paradise, blessed with miles of shimmering golden sands, swaying coconut palms, and crystal turquoise waves. Discover legendary beach shacks like Tito's & Brittos, scenic Baga Creek, lively night markets, and high-octane parasailing & jet-ski spots along the coastline.",
    highlights: ["Golden Sand Shores", "Baga Creek & Shacks", "Water Sports", "Sunset Shoreline"]
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
    description: "An architectural gem of Jaipur's Pink City, this honeycomb 5-story palace shines in rosy pink sandstone. Marvel at its 953 carved Jharokhas (latticed windows), breezy courtyard chambers, the colorful stained-glass windows of Ratan Mandir, and breathtaking panoramic views of City Palace and Jantar Mantar from top balconies.",
    highlights: ["953 Latticed Jharokhas", "Stained-Glass Windows", "Ratan & Vichitra Mahal", "Pink City Views"]
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
    description: "The 'Venice of the East', an enchanting wonderland of emerald palm-lined canals, serene mirror-like lagoons, and tranquil lotus ponds. Sail on traditional luxury houseboats (Kettuvallams) past sleepy riverside villages, lush paddy fields of Kuttanad, and scenic Punnamada Lake.",
    highlights: ["Luxury Houseboat Cruises", "Kuttanad Paddy Fields", "Punnamada Lake", "Palm Canals"]
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
    description: "One of India's most spiritually radiant destinations, situated along the ancient banks of holy River Ganga in Varanasi. Experience the ethereal evening Ganga Aarti at Dashashwamedh Ghat, the majestic Golden Spire of the temple, the serene Kashi Corridor, and boat rides along historic 84 Ghats.",
    highlights: ["Dashashwamedh Ganga Aarti", "Golden Temple Spire", "Kashi Vishwanath Corridor", "Historic Ghats Boat Ride"]
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
    description: "A surreal high-altitude paradise in Ladakh at 4,225 meters, surrounded by dramatic snow-capped Himalayan peaks. Its pristine waters dynamically shift colors from turquoise blue to deep cobalt and emerald green. Explore scenic lakeside camping spots at Spangmik, panoramic photography points, and clear night skies perfect for stargazing.",
    highlights: ["Color-Changing Turquoise Waters", "Spangmik Lakeside", "Snow Peak Backdrop", "Milky Way Stargazing"]
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
    description: "A tranquil sanctuary of peace and golden grandeur in Amritsar, floating gracefully in the holy Amrit Sarovar (Pool of Nectar). Admire the intricate 24-karat gold leaf architecture, the peaceful marble Parikrama walkway, the historic Akal Takht, and the world's largest free 24/7 Langar community kitchen.",
    highlights: ["Amrit Sarovar Pool", "24K Gold Architecture", "Akal Takht Shrine", "Mega Community Langar"]
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
    description: "A paradise hill station in Kerala's Western Ghats, wrapped in endless rolling carpets of bright green tea estates and misty mountain air. Discover picturesque spots like Mattupetty Dam, Echo Point, Eravikulam National Park (home to Nilgiri Tahr), and cascading Attukad Waterfalls.",
    highlights: ["Rolling Tea Estates", "Mattupetty Dam & Lake", "Eravikulam Tahr Sanctuary", "Attukad Waterfalls"]
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
    description: "Perched dramatically on a rugged hill overlooking Maota Lake, this 16th-century Rajasthani masterpiece glows in pale yellow sandstone and pink marble. Explore the mesmerizing Sheesh Mahal (Palace of Mirrors), Sukh Niwas with natural water-cooling channels, Diwan-i-Khas, and the grand Sun Gate entrance.",
    highlights: ["Sheesh Mahal Mirror Magic", "Maota Lake Reflection", "Sukh Niwas & Courtyards", "Grand Elephant Entrance"]
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
    description: "A surreal UNESCO open-air museum nestled among giant granite boulders, lush banana plantations, and the winding Tungabhadra River. Explore the towering Virupaksha Temple, iconic Stone Chariot at Vittala Temple, Lotus Mahal, Royal Enclosure, and breathtaking sunset views from Matanga Hill.",
    highlights: ["Vittala Stone Chariot", "Virupaksha Temple", "Matanga Hill Sunset", "Tungabhadra Riverbanks"]
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
    description: "A UNESCO architectural masterpiece showcasing medieval Nagara-style stone temples adorned with intricate, expressive sculptures celebrating human emotions, divine deities, and life. Discover the majestic Kandariya Mahadeva Temple, Lakshmana Temple, and peaceful landscaped green gardens.",
    highlights: ["Kandariya Mahadeva Temple", "Nagara Architectural Detail", "Western Group Gardens", "Intricate Sculptures"]
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
    description: "A vibrant architectural marvel of Madurai, adorned with 14 magnificent Gopurams (tower gateways) covered in thousands of bright, hand-sculpted figures. Explore the awe-inspiring Hall of 1,000 Pillars, the sacred Golden Lotus Tank (Porthamarai Kulam), and ancient night procession rituals.",
    highlights: ["14 Sculpted Gopurams", "Hall of 1000 Pillars", "Golden Lotus Tank", "Ancient Temple Complex"]
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
    description: "The spiritual and adventure capital of the Himalayas, where the crystal-clear turquoise Ganges emerges from mountain foothills. Discover iconic suspension bridges Laxman Jhula & Ram Jhula, the tranquil Beatles Ashram, thrilling white-water rafting rapids, and the magical evening Aarti at Triveni Ghat & Har Ki Pauri.",
    highlights: ["Laxman & Ram Jhula", "Triveni Ghat Evening Aarti", "Beatles Ashram Trails", "Ganges White-Water Rafting"]
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
    description: "A breathtaking mountain pass at 3,978 meters on the Pir Panjal Range, offering snow-covered slopes and dramatic alpine vistas year-round. Experience snow skiing and sledding, views of glaciers and Beas Kund source, scenic Solang Valley nearby, and majestic valley view points of Lahaul-Spiti.",
    highlights: ["Year-Round Snow Slopes", "Glaciers & Mountain Peaks", "Solang Valley Proximity", "Panoramas of Lahaul"]
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
    description: "A vibrant UNESCO World Heritage alpine wonderland in Uttarakhand, blanketed with hundreds of rare wild botanical species like Blue Poppies, Brahmakamal, and Edelweiss. Trek past rushing mountain streams, cascading waterfalls, Hemkund Sahib, and birch forest valleys.",
    highlights: ["Alpine Wildflower Meadows", "Rare Blue Poppy & Brahmakamal", "Hemkund Sahib Trek", "Cascading Streams"]
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
    description: "The world's second-longest urban natural beach stretching 13 km along Chennai's Bay of Bengal coastline. Enjoy panoramic sea breeze walks, the historic Chennai Lighthouse viewpoint, heritage statues of Tamil literature & freedom icons, and vibrant evening food stalls serving hot seaside delicacies.",
    highlights: ["13km Seaside Promenade", "Chennai Lighthouse View", "Heritage Statues & Park", "Evening Beach Bazaars"]
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
    description: "A crescent-shaped tropical paradise in South Goa lined with colorful overhanging coconut palms and soft white sand. Spot playful wild dolphins on morning boat trips, kayak to secret Monkey Island, relax at calm shallow water bays, and experience quiet beachside dining.",
    highlights: ["Crescent Bay & Palms", "Dolphin Spotting Cruises", "Monkey Island Kayaking", "Tranquil Swimming Waters"]
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
    description: "A high-altitude desert oasis in Ladakh tucked between the Karakoram and Himalayan ranges, accessible via Khardung La pass. Marvel at white sand dunes at Hunder, ride double-humped Bactrian camels, visit the 32-meter giant Maitreya Buddha at Diskit Monastery, and enjoy lush apricot orchards.",
    highlights: ["Hunder White Sand Dunes", "Double-Humped Bactrian Camels", "Diskit Maitreya Buddha", "Khardung La Approach"]
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
    description: "An opulent Indo-Saracenic royal palace of the Wadiyar dynasty, boasting stained-glass ceilings, ivory-carved doors, and ornate marble pillars. Admire the golden Durbar Hall, Kalyana Mantapa (Marriage Pavilion), royal armor museum, and its magical illumination with 97,000 glowing bulbs on Sunday evenings.",
    highlights: ["97,000 Bulb Illumination", "Stained-Glass Durbar Hall", "Kalyana Mantapa Pavilion", "Royal Armory Collection"]
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
    description: "UNESCO World Heritage rock-cut architectural wonders dating from 2nd century BCE. Ajanta features 30 serene caves filled with exquisite ancient Buddhist frescoes, while Ellora showcases 34 cave temples including the monumental Kailasa Temple — carved out of a single gigantic rock monolith.",
    highlights: ["Monolithic Kailasa Temple", "Ajanta Cave Paintings", "34 Rock-Cut Shrines", "Ancient Architectural Feat"]
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
    description: "The world's largest white salt desert, transforming into a mesmerizing endless silver mirror under full moon winter skies. Stay in luxury tented cities at Dhordo during Rann Utsav, explore traditional Kutchi handicraft villages like Nirona & Bhujodi, and catch unforgettable sunsets at Kala Dungar (Black Hill).",
    highlights: ["Endless White Salt Expanse", "Rann Utsav Tent City", "Kala Dungar Sunset View", "Nirona Craft Villages"]
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
    description: "A rugged, untouched Himalayan cold desert dotted with centuries-old cliffside Buddhist monasteries, pristine high-altitude lakes, and starry skies. Visit Key Monastery perched at 4,166m, the turquoise Chandratal Lake (Lake of the Moon), Langza fossil village, and Chicham Bridge — Asia's highest suspension bridge.",
    highlights: ["Key Cliffside Monastery", "Chandratal Lake of Moon", "Chicham Highest Bridge", "Langza Fossil Village"]
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
    description: "The largest contiguous mangrove forest on Earth and UNESCO World Heritage wilderness where tidal waterways wind through dense green greenery. Take boat safaris to spot Royal Bengal Tigers swimming across channels, saltwater crocodiles at Bhagabatpur, estuarine dolphins, and Dobanki watchtower views.",
    highlights: ["Royal Bengal Tiger Habitat", "Mangrove Boat Safaris", "Dobanki Canopy Walk", "Estuarine Dolphins & Crocs"]
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
    description: "A UNESCO World Heritage sanctuary along the Brahmaputra River, famous as the world's primary stronghold of the Great Indian One-Horned Rhinoceros. Embark on early morning elephant and open-jeep safaris across tall elephant grass meadows, spotting wild water buffaloes, swamp deer, and tigers.",
    highlights: ["Great One-Horned Rhinos", "Elephant & Jeep Safaris", "Brahmaputra Grasslands", "Rich Avian Biodiversity"]
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
    description: "The 'Scotland of India', an emerald green hill sanctuary in Karnataka filled with fragrant coffee plantations, spice gardens, and cascading mountain streams. Visit Abbey Falls, Raja's Seat sunset garden, Namdroling Tibetan Golden Temple at Bylakuppe, and Dubare Elephant Camp.",
    highlights: ["Fragrant Coffee Estates", "Abbey Falls Cascade", "Raja's Seat Sunset Garden", "Golden Temple Bylakuppe"]
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
    description: "A towering 15th-century fortress rising 410 feet above Jodhpur's cobalt Blue City, featuring massive stone walls and royal palaces. Explore ornate chambers like Moti Mahal & Phool Mahal, the royal palanquin museum, Chamunda Devi Temple, and zip-line over fort moats with views of the blue skyline.",
    highlights: ["Phool Mahal & Moti Mahal", "Panoramic Blue City View", "Royal Palanquin Museum", "Flying Fox Zip Line"]
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
    description: "A romantic white marble and granite palace complex floating gracefully along the shores of Lake Pichola. Discover the peacock mosaics at Mor Chowk, Zenana Mahal, Sheesh Mahal, crystal galleries, and take magical sunset boat cruises past Lake Palace and Jagmandir Island.",
    highlights: ["Lake Pichola Boat Cruise", "Mor Chowk Peacock Mosaics", "Jagmandir Island Views", "Crystal Gallery Collection"]
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
    description: "A tranquil, sacred Buddhist pilgrimage center near Varanasi where Lord Buddha delivered his first sermon after enlightenment. Explore the massive 43-meter Dhamek Stupa, peaceful deer park grounds, ancient Chaukhandi Stupa, and the Sarnath Archaeological Museum housing the original Ashoka Lion Capital.",
    highlights: ["Massive Dhamek Stupa", "Ashoka Lion Capital Pillar", "Serene Deer Park Grounds", "Archaeological Museum"]
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
    description: "A misty green paradise in Meghalaya, renowned for unique Bio-Engineered Double Decker Living Root Bridges grown over centuries by Khasi villagers. Marvel at Nohkalikai Falls (India's tallest plunge waterfall), Mawsmai limestone caves, and Seven Sisters Falls overlooking Bangladesh.",
    highlights: ["Nongriat Double Decker Bridge", "Nohkalikai Plunge Waterfall", "Mawsmai Limestone Caves", "Seven Sisters Viewpoint"]
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
    description: "India's oldest national park nestled in the Himalayan foothills along the Ramganga River, renowned for tiger conservation. Take jeep safaris through dense Sal forests and riverine grasslands in Dhikala zone, spot wild elephant herds, tigers, leopards, and over 600 species of exotic birds.",
    highlights: ["Dhikala Safari Zone", "Royal Bengal Tigers", "Ramganga River Banks", "Sal Forest Wilderness"]
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
    description: "The 'Queen of Hill Stations' nestled amidst the blue Nilgiri Mountains, featuring misty tea plantations and pine forests. Ride the UNESCO Nilgiri Mountain Railway toy train, stroll around serene Ooty Lake, explore Government Botanical Gardens, and take in 360° vistas from Doddabetta Peak.",
    highlights: ["Nilgiri Toy Train Ride", "Doddabetta Highest Peak", "Ooty Lake & Boating", "Botanical & Rose Gardens"]
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
    description: "A romantic hill capital in West Bengal famous for sweeping green tea gardens and views of Mount Kanchenjunga (world's 3rd highest peak). Watch golden sunrises over snow peaks at Tiger Hill, ride the UNESCO Darjeeling Himalayan Toy Train, and visit Padmaja Naidu Himalayan Zoo.",
    highlights: ["Tiger Hill Sunrise View", "Kanchenjunga Snow Peaks", "UNESCO Himalayan Toy Train", "Chowrasta Mall Promenade"]
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
    description: "A famous beach resort destination in Kerala consisting of three crescent beaches separated by rocky promontories. Climb the iconic red-and-white Vizhinjam Lighthouse for sweeping Arabian Sea views, indulge in authentic beachside Ayurvedic wellness therapies, and enjoy calm coastal swimming.",
    highlights: ["Vizhinjam Lighthouse View", "Lighthouse & Samudra Beaches", "Ayurvedic Massage Spas", "Sunset Coastal Walks"]
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
    description: "A UNESCO World Heritage coastal site in Tamil Nadu showcasing 7th-century rock-cut monuments overlooking the Bay of Bengal. Admire the iconic Shore Temple, Arjuna's Penance (world's largest open-air bas-relief), Krishna's Butter Ball boulder, and Five Rathas monolith temples.",
    highlights: ["Coromandel Shore Temple", "Arjuna's Penance Bas-Relief", "Pancha Rathas Monoliths", "Krishna's Butter Ball"]
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
    description: "The sole remaining natural sanctuary on Earth for the majestic Asiatic Lion, located in Gujarat's teak forests. Join open-jeep forest safaris to view wild lion prides, leopards, sambar deer, marsh crocodiles at Kamleshwar Dam, and over 300 resident bird species.",
    highlights: ["Exclusive Asiatic Lion Safaris", "Kamleshwar Crocodile Lake", "Teak & Savannah Forest", "Rich Wildlife Trails"]
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
    description: "One of India's sacred Char Dham pilgrimage sites on the Odisha coast, dedicated to Lord Jagannath, Balabhadra, and Subhadra. Witness the grand 12th-century temple spire, the famous Anand Bazar serving Mahaprasad, Golden Puri Beach, and the world-renowned annual Rath Yatra chariot festival.",
    highlights: ["Char Dham Holy Temple", "Grand Rath Yatra Festival", "Mahaprasad Anand Bazar", "Puri Golden Beach"]
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
    description: "A lush green sanctuary surrounding the serene man-made Periyar Lake in Kerala's Cardamom Hills. Enjoy scenic lake boat cruises to spot wild elephants bathing on the shores, visit spice plantations (cardamom, pepper, cinnamon), and trek through bamboo groves.",
    highlights: ["Periyar Lake Boat Safaris", "Wild Elephant Herds", "Spice Garden Tours", "Bamboo Rafting Adventures"]
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
    description: "The 'Queen of Hills' in Uttarakhand, offering breathtaking views of the Doon Valley below and snow-capped Himalayan ranges above. Walk along lively Mall Road, ride the Gun Hill cable car, visit cascading Kempty Falls, and explore serene pine forests at Cloud's End.",
    highlights: ["Gun Hill Cable Car View", "Kempty Waterfall Cascade", "Mall Road Promenade", "Cloud's End Forest Walks"]
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
    description: "A UNESCO World Heritage 'Living Fort' constructed from golden yellow sandstone that glows like gold in the Thar Desert sun. Wander through winding narrow lanes where locals live, visit ancient Jain Temples with intricate carvings, Patwon Ki Haveli, and take sunset camel safaris at Sam Sand Dunes.",
    highlights: ["UNESCO Living Sandstone Fort", "Sam Sand Dunes Camel Safari", "Patwon Ki Haveli Architecture", "Carved Jain Temples"]
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
    description: "The largest freshwater lake in Northeast India, famous for unique floating circular islands (Phumdis) created naturally from vegetation. Explore Keibul Lamjao National Park — the world's only floating national park — home to the endangered Sangai brow-antlered dancing deer.",
    highlights: ["Keibul Lamjao Floating Park", "Rare Sangai Dancing Deer", "Circular Phumdi Islands", "Sendra Island Viewpoint"]
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
    description: "An island paradise of powdery white sand beaches, turquoise ocean waters, and dense tropical rainforests. Relax on Radhanagar Beach on Havelock Island (voted Asia's best beach), scuba dive along vibrant coral reefs at Elephant Beach, and visit historic Cellular Jail in Port Blair.",
    highlights: ["Radhanagar White Sand Beach", "Scuba Diving & Coral Reefs", "Elephant Beach Snorkelling", "Cellular Jail National Memorial"]
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
    description: "A 1,000-year-old UNESCO World Heritage Chola architectural marvel in Thanjavur, featuring a massive 66-meter granite Vimana tower built without mortar. Marvel at the giant monolithic Nandi bull, exquisite ceiling wall frescoes, and magnificent granite sculptured corridors.",
    highlights: ["66m Granite Vimana Tower", "Monolithic Nandi Sculpture", "1000-Year Chola Heritage", "Ancient Fresco Paintings"]
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
    description: "India's largest hill fort covering 700 acres atop a high cliff, standing as a legendary symbol of Rajput bravery, pride, and romance. Explore the 9-story Vijay Stambha (Tower of Victory), Kirti Stambha, Rani Padmini's palace surrounded by water lotus pools, and ancient water reservoirs.",
    highlights: ["9-Story Vijay Stambha", "Rani Padmini Water Palace", "Largest Fort in India", "Gaumukh Water Reservoir"]
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
    description: "A green hill paradise in Kerala's Western Ghats blessed with dense shola forests, tea & cardamom estates, and ancient history. Discover the prehistoric petroglyphs at Edakkal Caves, hike to heart-shaped Chembra Lake, visit Banasura Sagar Earth Dam, and spot wild elephants.",
    highlights: ["Edakkal Prehistoric Caves", "Chembra Peak Heart Lake", "Banasura Sagar Dam", "Western Ghats Wildlife"]
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
    description: "A breathtaking coral island in Lakshadweep surrounded by crystal-clear turquoise lagoons and pristine white sand beaches. Enjoy world-class snorkelling & scuba diving among sea turtles and colorful coral reefs, glass-bottom boat rides, and tranquil tropical island serenity.",
    highlights: ["Turquoise Lagoon Waters", "Coral Reef Snorkelling", "Sea Turtle Spotting", "Pristine White Sands"]
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
    description: "The world's largest inhabited river island nestled in the Brahmaputra River, acting as the cultural heartland of Assam. Explore historic neo-Vaishnavite Satras (monasteries), witness traditional hand-carved mask making at Samaguri Satra, and enjoy scenic river sunsets.",
    highlights: ["Brahmaputra River Island", "Samaguri Mask Making", "Historic Satra Monasteries", "Mising Tribal Villages"]
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
    description: "A magnificent UNESCO World Heritage red sandstone city near Agra, built by Emperor Akbar in 1571 as his royal capital. Stand in awe before Buland Darwaza (world's highest gateway), the white marble Salim Chishti Dargah, Panch Mahal palace, and Diwan-i-Khas.",
    highlights: ["Buland Darwaza Gateway", "Salim Chishti Marble Shrine", "Panch Mahal 5-Story Palace", "Akbar's Red Sandstone City"]
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
    description: "Madhya Pradesh's premier hill station, affectionately known as 'Satpura Ki Rani' (Queen of Satpura), surrounded by waterfalls and pine-covered valleys. Visit Dhupgarh — the highest peak in MP for spectacular sunsets, Bee Falls, Pandav Caves, and Dhoopgarh valley viewpoints.",
    highlights: ["Dhupgarh Sunset Viewpoint", "Bee Falls & Duchess Falls", "Ancient Pandav Caves", "Satpura Biosphere Reserve"]
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
    description: "A cloud-draped mountain destination in Meghalaya renowned for record-breaking rainfall, lush gorges, and dramatic plunging waterfalls. Marvel at Nohkalikai Falls plunging 340 meters into a turquoise pool, Dainthlen Falls, Arwah Cave fossils, and sweeping views of Bangladesh.",
    highlights: ["340m Nohkalikai Waterfall", "Arwah Fossil Cave", "Dainthlen Waterfalls", "Bangladesh Plains View"]
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
    description: "A serene mountain town in West Sikkim offering unmatched front-row panoramic views of Mount Kanchenjunga (8,586m). Experience the thrilling Pelling Glass Skywalk, historic Rabdentse Palace ruins, 300-year-old Pemayangtse Monastery, and tranquil Khecheopalri Wish-Fulfilling Lake.",
    highlights: ["Kanchenjunga 360° Views", "Pelling Glass Skywalk", "Pemayangtse Monastery", "Khecheopalri Sacred Lake"]
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
    description: "A 13th-century UNESCO World Heritage architectural wonder built in the shape of a colossal stone chariot with 12 pairs of carved wheels pulled by seven horses. Marvel at the intricate stone carvings, erotic sculptures, Sun God statues, and nearby golden Chandrabhaga Beach.",
    highlights: ["Stone Chariot & Sundial Wheels", "UNESCO World Heritage", "Intricate Stone Sculptures", "Chandrabhaga Beach"]
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
    description: "The 'Scotland of the East', Meghalaya's vibrant capital surrounded by pine-covered hills, serene lakes, and waterfalls. Explore Elephant Falls, Ward's Lake with wooden bridges, Shillong Peak for panoramic city views, Laitlum Canyons, and lively police bazaar music culture.",
    highlights: ["Laitlum Canyons View", "Elephant Waterfalls", "Ward's Lake Promenade", "Shillong Peak Panorama"]
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
    description: "The holy twin cities along the Yamuna River celebrating the divine life and plays of Lord Krishna. Visit the grand Prem Mandir with colorful light fountains, Banke Bihari Temple, Krishna Janmabhoomi temple complex, Radha Raman Temple, and serene ghats of Mathura.",
    highlights: ["Prem Mandir Light Fountains", "Banke Bihari Temple", "Krishna Janmabhoomi", "Yamuna Aarti at Ghats"]
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