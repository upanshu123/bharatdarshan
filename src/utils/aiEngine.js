/**
 * AI Yatra Engine - Gemini Integration with Smart Fallback System
 * Plan My Yatra | Bharat Darshan Ecosystem
 */

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export function makeGoogleMapsUrl(locationName, destName) {
  const query = `${locationName} ${destName}`.trim().replace(/\s+/g, '+');
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export const DESTINATION_LOGISTICS = {
  jaipur: { nearest_railway_station: "Jaipur Junction Railway Station (JP)", distance_to_railway_km: "3 km", nearest_airport: "Jaipur International Airport (JAI)", distance_to_airport_km: "12 km" },
  udaipur: { nearest_railway_station: "Udaipur City Railway Station (UDZ)", distance_to_railway_km: "2.5 km", nearest_airport: "Maharana Pratap Airport (UDR)", distance_to_airport_km: "22 km" },
  jodhpur: { nearest_railway_station: "Jodhpur Junction Railway Station (JU)", distance_to_railway_km: "3 km", nearest_airport: "Jodhpur Airport (JDH)", distance_to_airport_km: "5 km" },
  varanasi: { nearest_railway_station: "Varanasi Junction Railway Station (BSB)", distance_to_railway_km: "4 km", nearest_airport: "Lal Bahadur Shastri International Airport (VNS)", distance_to_airport_km: "24 km" },
  agra: { nearest_railway_station: "Agra Cantt Railway Station (AGC)", distance_to_railway_km: "4 km", nearest_airport: "Agra Airport / Kheria Airport (AGR)", distance_to_airport_km: "8 km" },
  rishikesh: { nearest_railway_station: "Yog Nagari Rishikesh Railway Station (YNRK)", distance_to_railway_km: "3 km", nearest_airport: "Jolly Grant Airport Dehradun (DED)", distance_to_airport_km: "21 km" },
  manali: { nearest_railway_station: "Joginder Nagar Railway Station (JOGS)", distance_to_railway_km: "165 km", nearest_airport: "Bhuntar Kullu-Manali Airport (KUU)", distance_to_airport_km: "50 km" },
  shimla: { nearest_railway_station: "Shimla Railway Station (SML)", distance_to_railway_km: "1.5 km", nearest_airport: "Jubbarhatti Airport Shimla (SLV)", distance_to_airport_km: "22 km" },
  "leh-ladakh": { nearest_railway_station: "Jammu Tawi Railway Station (JAT)", distance_to_railway_km: "680 km", nearest_airport: "Kushok Bakula Rimpochee Airport Leh (IXL)", distance_to_airport_km: "4 km" },
  kerala: { nearest_railway_station: "Alappuzha Railway Station (ALLP)", distance_to_railway_km: "4 km", nearest_airport: "Cochin International Airport (COK)", distance_to_airport_km: "83 km" },
  munnar: { nearest_railway_station: "Aluva Railway Station (AWY)", distance_to_railway_km: "110 km", nearest_airport: "Cochin International Airport (COK)", distance_to_airport_km: "110 km" },
  goa: { nearest_railway_station: "Madgaon Junction Railway Station (MAO)", distance_to_railway_km: "28 km", nearest_airport: "Dabolim Airport (GOI)", distance_to_airport_km: "26 km" },
  hampi: { nearest_railway_station: "Hosapete Junction Railway Station (HPT)", distance_to_railway_km: "13 km", nearest_airport: "Jindal Vijayanagar Airport (VDY)", distance_to_airport_km: "35 km" },
  mysore: { nearest_railway_station: "Mysuru Junction Railway Station (MYS)", distance_to_railway_km: "2 km", nearest_airport: "Mysore Airport (MYQ)", distance_to_airport_km: "12 km" },
  shillong: { nearest_railway_station: "Guwahati Railway Station (GHY)", distance_to_railway_km: "98 km", nearest_airport: "Shillong Airport Umroi (SHL)", distance_to_airport_km: "30 km" },
  andaman: { nearest_railway_station: "Port Blair Marine Jetty Hub", distance_to_railway_km: "2 km", nearest_airport: "Veer Savarkar International Airport Port Blair (IXZ)", distance_to_airport_km: "4 km" },
  amritsar: { nearest_railway_station: "Amritsar Junction Railway Station (ASR)", distance_to_railway_km: "2 km", nearest_airport: "Sri Guru Ram Dass Jee International Airport (ATQ)", distance_to_airport_km: "11 km" },
  madurai: { nearest_railway_station: "Madurai Junction Railway Station (MDU)", distance_to_railway_km: "2 km", nearest_airport: "Madurai Airport (IXM)", distance_to_airport_km: "12 km" },
  puri: { nearest_railway_station: "Puri Railway Station (PURI)", distance_to_railway_km: "2 km", nearest_airport: "Biju Patnaik International Airport Bhubaneswar (BBI)", distance_to_airport_km: "60 km" },
  darjeeling: { nearest_railway_station: "New Jalpaiguri Railway Station (NJP)", distance_to_railway_km: "70 km", nearest_airport: "Bagdogra International Airport (IXB)", distance_to_airport_km: "68 km" },
  coorg: { nearest_railway_station: "Mysore Junction Railway Station (MYS)", distance_to_railway_km: "117 km", nearest_airport: "Kannur International Airport (CNN)", distance_to_airport_km: "90 km" },
  ooty: { nearest_railway_station: "Udhagamandalam Railway Station (UAM)", distance_to_railway_km: "1 km", nearest_airport: "Coimbatore International Airport (CJB)", distance_to_airport_km: "88 km" }
};

// Full Destination Database — Real places, 3 unique activity sets per destination
const DESTINATION_DATABASE = {

  manali: {
    title: "Alpine Valley Adventure Yatra",
    tagline: "Snow-capped peaks, roaring rivers, and ancient Himalayan culture",
    logistics: DESTINATION_LOGISTICS.manali,
    highlights: ["Solang Valley Snow Point", "Rohtang Pass Snowfields", "Hadimba Devi Temple", "Beas River Rafting"],
    activities: [
      {
        theme: "Arrival & Alpine Temples",
        activities: [
          { timeOfDay: "Morning", locationName: "Hadimba Devi Temple", googleMapsLink: makeGoogleMapsUrl("Hadimba Devi Temple", "Manali"), description: "Visit the iconic 16th-century wooden pagoda temple nestled among ancient deodar cedar forests. The four-storey structure dedicated to Goddess Hadimba is one of Himachal's most sacred shrines." },
          { timeOfDay: "Afternoon", locationName: "Manu Temple Manali", googleMapsLink: makeGoogleMapsUrl("Manu Temple", "Manali"), description: "Climb the old Manali town to reach the only temple in India dedicated to the sage Manu. Explore the winding stone paths through the Old Manali village with its apple orchards and cafes." },
          { timeOfDay: "Evening", locationName: "Mall Road Manali", googleMapsLink: makeGoogleMapsUrl("Mall Road", "Manali"), description: "Stroll along Manali's famous Mall Road lined with woollen handicraft shops, dried fruit stalls, and mountain gear outlets. Try local Himachali dham dishes at riverside restaurants." }
        ],
        stay: { name: "Span Resort & Spa", type: "Luxury Mountain Resort", whyPick: "Situated on the banks of Beas River with mountain views", approxRate: "₹7,500/night" },
        dining: [{ name: "Johnson's Cafe Manali", specialty: "Trout Fish & Apple Pie", priceRange: "₹600-1200" }, { name: "Chopsticks Restaurant", specialty: "Tibetan Momos & Thukpa", priceRange: "₹200-400" }]
      },
      {
        theme: "Solang Valley & River Sports",
        activities: [
          { timeOfDay: "Morning", locationName: "Solang Valley", googleMapsLink: makeGoogleMapsUrl("Solang Valley", "Manali"), description: "Head to Solang Valley (14 km north) for zorbing, paragliding, and ropeway rides over snow-dusted meadows. In winter months, enjoy skiing on the gentle slopes." },
          { timeOfDay: "Afternoon", locationName: "Beas River Rafting Point", googleMapsLink: makeGoogleMapsUrl("Beas River Rafting", "Manali"), description: "Experience Grade II-III white water rafting on the turquoise Beas River between Pirdi and Jhiri. The 14 km stretch through dramatic gorges is a must-do adventure activity." },
          { timeOfDay: "Evening", locationName: "Old Manali Bridge Cafes", googleMapsLink: makeGoogleMapsUrl("Old Manali Bridge", "Manali"), description: "Relax at riverside cafes perched above Beas River in Old Manali, sipping apple cider and watching golden evening light on the Pir Panjal mountains." }
        ],
        stay: { name: "Manuallaya Resort Manali", type: "Heritage Mountain Hotel", whyPick: "Traditional Himachali architecture with valley panoramas", approxRate: "₹5,500/night" },
        dining: [{ name: "Drifter's Inn", specialty: "Israeli Shakshuka & Fresh Juice", priceRange: "₹300-600" }]
      },
      {
        theme: "Rohtang Pass & Snow Adventures",
        activities: [
          { timeOfDay: "Morning", locationName: "Rohtang Pass", googleMapsLink: makeGoogleMapsUrl("Rohtang Pass", "Manali"), description: "Drive up to Rohtang Pass at 3,978 m for spectacular views of Lahaul-Spiti Valley and Chandra River. Experience snow activities at Asia's highest motorable pass (permit required)." },
          { timeOfDay: "Afternoon", locationName: "Rahala Waterfalls", googleMapsLink: makeGoogleMapsUrl("Rahala Waterfalls", "Manali"), description: "Stop at the stunning Rahala Waterfalls en route to Rohtang, where glacial streams cascade dramatically over rocky ledges surrounded by birch forests." },
          { timeOfDay: "Evening", locationName: "Naggar Castle", googleMapsLink: makeGoogleMapsUrl("Naggar Castle", "Manali"), description: "Visit the 15th-century stone-and-wood castle of the Kullu rulers, now a heritage hotel, with sweeping views of the Kullu Valley and Beas River below." }
        ],
        stay: { name: "The Himalayan Hotel Manali", type: "Boutique Heritage Stay", whyPick: "Century-old colonial building with garden and river views", approxRate: "₹4,000/night" },
        dining: [{ name: "Cafe 1947", specialty: "Himachali Siddu & Kadha Prasad", priceRange: "₹200-450" }]
      }
    ],
    mustTry: [
      { item: "Trout Fish at Johnson's Cafe", why: "Freshly caught local trout grilled with Himalayan herbs — iconic Manali dining experience." },
      { item: "Tibetan Thukpa & Momos", why: "Hearty Tibetan noodle soup and dumplings — essential cold weather comfort food in mountain towns." },
      { item: "Apple Cider from Old Manali Orchards", why: "Manali's apple orchards produce India's finest varieties; fresh pressed cider is a local specialty." }
    ],
    packing: ["Warm down jacket (even in summer)", "Waterproof trekking shoes", "Sunscreen SPF 50+ (high altitude UV)", "Woollen gloves and cap", "Motion sickness tablets for mountain roads"],
    localInsights: "Rohtang Pass permit is mandatory and must be booked online 2 days in advance. Inner Line Permit required for Spiti Valley beyond Rohtang.",
    bestTime: "May to June (snow activities) and September to October (clear skies and adventure)"
  },

  jaipur: {
    title: "Royal Pink City Yatra",
    tagline: "Grand forts, opulent palaces, and vibrant Rajasthani culture",
    logistics: DESTINATION_LOGISTICS.jaipur,
    highlights: ["Amber Fort Sheesh Mahal", "City Palace & Jantar Mantar", "Hawa Mahal Sunrise", "Nahargarh Fort Sunset"],
    activities: [
      {
        theme: "Fortresses & Mirror Palaces",
        activities: [
          { timeOfDay: "Morning", locationName: "Amber Fort", googleMapsLink: makeGoogleMapsUrl("Amber Fort", "Jaipur"), description: "Ascend the Aravalli hills on elephant-back or by jeep to explore Amber Fort. Discover the dazzling Sheesh Mahal (Mirror Palace), Diwan-i-Aam, and the ornate Ganesh Pol gate." },
          { timeOfDay: "Afternoon", locationName: "Jaigarh Fort", googleMapsLink: makeGoogleMapsUrl("Jaigarh Fort", "Jaipur"), description: "Visit the fort of victory housing Jaivana, the world's largest cannon on wheels. Walk the secret subterranean passage connecting Jaigarh to Amber Fort below." },
          { timeOfDay: "Evening", locationName: "Johari Bazaar Jaipur", googleMapsLink: makeGoogleMapsUrl("Johari Bazaar", "Jaipur"), description: "Stroll through centuries-old bazaars famous for Kundan and Meenakari jewellery, bandhani textiles, and blue pottery. Bargain respectfully for the finest Rajasthani souvenirs." }
        ],
        stay: { name: "Umaid Mahal Heritage Hotel", type: "Heritage Hotel", whyPick: "Converted haveli with rooftop pool and royal hospitality", approxRate: "₹3,500/night" },
        dining: [{ name: "Laxmi Mishtan Bhandar (LMB)", specialty: "Dal Baati Churma & Ghewar", priceRange: "₹200-400" }, { name: "Peacock Rooftop Restaurant", specialty: "Rajasthani Thali", priceRange: "₹400-700" }]
      },
      {
        theme: "Iconic Palaces & Observatories",
        activities: [
          { timeOfDay: "Morning", locationName: "Hawa Mahal", googleMapsLink: makeGoogleMapsUrl("Hawa Mahal", "Jaipur"), description: "Photograph the 953-window Palace of Winds in soft early morning golden light from a rooftop cafe across the street. Visit the museum inside the five-storey sandstone facade." },
          { timeOfDay: "Afternoon", locationName: "City Palace Jaipur", googleMapsLink: makeGoogleMapsUrl("City Palace", "Jaipur"), description: "Explore the residence of the Royal Family of Jaipur featuring grand courtyards, Peacock Gate, Mubarak Mahal's royal textile collection, and the Diwan-i-Khas." },
          { timeOfDay: "Evening", locationName: "Jantar Mantar Jaipur", googleMapsLink: makeGoogleMapsUrl("Jantar Mantar", "Jaipur"), description: "Explore the UNESCO-listed astronomical observatory built by Sawai Jai Singh II in 1734, housing 20 giant geometric instruments still used for astronomical calculations." }
        ],
        stay: { name: "Shahpura House", type: "Luxury Heritage", whyPick: "Authentic royal hospitality with courtyard pool and fresco art", approxRate: "₹6,000/night" },
        dining: [{ name: "Rawat Mishtan Bhandar", specialty: "Pyaaz Kachori", priceRange: "₹50-150" }, { name: "1135 AD Nahargarh", specialty: "Royal Mughlai Dinner", priceRange: "₹1000-2000" }]
      },
      {
        theme: "Sunset Forts & Village Culture",
        activities: [
          { timeOfDay: "Morning", locationName: "Albert Hall Museum Jaipur", googleMapsLink: makeGoogleMapsUrl("Albert Hall Museum", "Jaipur"), description: "Explore Indo-Saracenic architecture housing ancient Egyptian mummy, royal carpets, miniature paintings, and archaeological sculptures from across Rajasthan." },
          { timeOfDay: "Afternoon", locationName: "Anokhi Museum of Hand Printing", googleMapsLink: makeGoogleMapsUrl("Anokhi Museum of Hand Printing", "Jaipur"), description: "Visit this beautifully restored haveli near Amber to learn traditional block printing techniques. Try hands-on block printing workshops with natural dyes." },
          { timeOfDay: "Evening", locationName: "Chokhi Dhani Jaipur", googleMapsLink: makeGoogleMapsUrl("Chokhi Dhani", "Jaipur"), description: "Experience Rajasthani folk dance, puppet shows, camel rides, and a lavish unlimited traditional thali at this authentic ethnic village resort." }
        ],
        stay: { name: "Trident Jaipur", type: "5-Star Resort", whyPick: "Overlooks Mansagar Lake and the floating Jal Mahal Palace", approxRate: "₹8,500/night" },
        dining: [{ name: "Chokhi Dhani Sangri Restaurant", specialty: "Traditional Marwari Unlimited Thali", priceRange: "Included in ticket" }]
      }
    ],
    mustTry: [
      { item: "Dal Baati Churma", why: "Rajasthan's signature meal — wheat balls baked over cow-dung embers and dipped in clarified butter." },
      { item: "Pyaaz Kachori at Rawat", why: "Crispy pastry stuffed with spiced onion filling — Jaipur's iconic morning street breakfast." },
      { item: "Jaipur Blue Pottery", why: "Traditional Turco-Persian craft unique to Jaipur, made without clay using quartz stone powder." }
    ],
    packing: ["Sunscreen SPF 50+", "Comfortable walking shoes", "Cotton kurtas / light scarves", "Sunglasses & hat"],
    localInsights: "Jaipur markets close by 8:30 PM. Book Amber Fort elephant rides or jeeps online. Use Rapido/Ola for local travel.",
    bestTime: "October to March (pleasant 15-25°C winter weather)"
  },

  udaipur: {
    title: "City of Lakes Royal Yatra",
    tagline: "Shimmering lake palaces, romantic sunsets, and royal Mewar heritage",
    logistics: DESTINATION_LOGISTICS.udaipur,
    highlights: ["Lake Palace on Lake Pichola", "City Palace Museum", "Saheliyon ki Bari Gardens", "Monsoon Palace Sunset"],
    activities: [
      {
        theme: "Lake Palace & City Palace",
        activities: [
          { timeOfDay: "Morning", locationName: "City Palace Udaipur", googleMapsLink: makeGoogleMapsUrl("City Palace", "Udaipur"), description: "Explore the magnificent 400-year-old City Palace complex rising 30 metres above Lake Pichola, comprising 11 palaces with crystal galleries, peacock mosaics, and intricate mirror work." },
          { timeOfDay: "Afternoon", locationName: "Jagdish Temple Udaipur", googleMapsLink: makeGoogleMapsUrl("Jagdish Temple", "Udaipur"), description: "Visit the 17th-century Indo-Aryan style temple dedicated to Lord Vishnu, famous for its brass Garuda statue and elaborate carved stone exterior." },
          { timeOfDay: "Evening", locationName: "Lake Pichola Boat Ride", googleMapsLink: makeGoogleMapsUrl("Lake Pichola Boat Ride", "Udaipur"), description: "Take a sunset boat ride on Lake Pichola to see the Jag Niwas (Lake Palace) and Jag Mandir island illuminated in golden evening light." }
        ],
        stay: { name: "Taj Lake Palace Udaipur", type: "Heritage Lake Palace Hotel", whyPick: "Iconic floating palace on Lake Pichola — a once-in-a-lifetime stay", approxRate: "₹35,000/night" },
        dining: [{ name: "Ambrai Restaurant Udaipur", specialty: "Dal Baati & Laal Maas", priceRange: "₹800-1500" }, { name: "Millets of Mewar", specialty: "Organic Rajasthani Thali", priceRange: "₹400-700" }]
      },
      {
        theme: "Gardens, Galleries & Craft",
        activities: [
          { timeOfDay: "Morning", locationName: "Saheliyon ki Bari", googleMapsLink: makeGoogleMapsUrl("Saheliyon ki Bari", "Udaipur"), description: "Wander through the Garden of the Maidens — a royal pleasure garden of fountains, kiosks, marble elephants, and lotus pools built for royal ladies-in-waiting." },
          { timeOfDay: "Afternoon", locationName: "Shilpgram Udaipur", googleMapsLink: makeGoogleMapsUrl("Shilpgram", "Udaipur"), description: "Visit the West Zone Cultural Centre, a rural arts and crafts complex showcasing tribal huts from Rajasthan, Gujarat, Goa, and Maharashtra with live craft demonstrations." },
          { timeOfDay: "Evening", locationName: "Bagore Ki Haveli", googleMapsLink: makeGoogleMapsUrl("Bagore Ki Haveli", "Udaipur"), description: "Watch Rajasthani folk dance performances at this 18th-century haveli on the ghats of Lake Pichola, with the evening Dharohar cultural dance show." }
        ],
        stay: { name: "Fateh Prakash Palace Hotel", type: "Heritage Palace Hotel", whyPick: "Inside City Palace complex with lake views from every room", approxRate: "₹12,000/night" },
        dining: [{ name: "Lotus Cafe Udaipur", specialty: "Rajasthani Kadhi & Gatte ki Sabzi", priceRange: "₹300-600" }]
      },
      {
        theme: "Monsoon Palace & Village Life",
        activities: [
          { timeOfDay: "Morning", locationName: "Vintage Car Museum Udaipur", googleMapsLink: makeGoogleMapsUrl("Vintage Car Museum", "Udaipur"), description: "Explore the royal collection of 22 restored vintage cars including a 1934 Rolls-Royce Phantom and 1939 Cadillac used by the Maharanas of Mewar." },
          { timeOfDay: "Afternoon", locationName: "Eklingji Temple", googleMapsLink: makeGoogleMapsUrl("Eklingji Temple", "Udaipur"), description: "Visit the 8th-century white marble temple complex dedicated to Lord Shiva, 22 km from Udaipur, with 108 temples and intricate silver-plated doors." },
          { timeOfDay: "Evening", locationName: "Sajjangarh Monsoon Palace", googleMapsLink: makeGoogleMapsUrl("Sajjangarh Palace", "Udaipur"), description: "Drive up to the 19th-century Monsoon Palace hilltop fortress for panoramic 360-degree views of Udaipur's lakes, palaces, and Aravalli hills at sunset." }
        ],
        stay: { name: "Lalit Laxmi Vilas Palace", type: "Heritage Palace Resort", whyPick: "Sprawling palace gardens with lake view suites and spa", approxRate: "₹9,000/night" },
        dining: [{ name: "1559 AD Udaipur", specialty: "Royal Mewari Cuisine", priceRange: "₹1200-2500" }]
      }
    ],
    mustTry: [
      { item: "Dal Baati Churma at Ambrai", why: "Udaipur's lakeside restaurants serve this Rajasthani classic with a stunning palace backdrop." },
      { item: "Miniature Painting Workshop", why: "Udaipur is the birthplace of the Mewar school of miniature art — workshops run near City Palace." },
      { item: "Mawa Kachori", why: "Sweet kachori stuffed with milk solids and sugar syrup — a famous Udaipur dessert snack." }
    ],
    packing: ["Light cottons", "Modest clothing for temples", "Comfortable walking shoes", "Sunscreen and sunhat"],
    localInsights: "Lake Palace hotel is only accessible by boat. Auto-rickshaws easily available near City Palace. Avoid peak summer (April-June) heat.",
    bestTime: "September to March (post-monsoon greenery and winter pleasantness)"
  },

  jodhpur: {
    title: "Royal Blue City Yatra",
    tagline: "Imposing hill forts, blue alleyways, and authentic Marwari traditions",
    logistics: DESTINATION_LOGISTICS.jodhpur,
    highlights: ["Mehrangarh Fort Sheesh Mahal", "Jaswant Thada Marble Memorial", "Sardar Market Clock Tower", "Bishnoi Village Safari"],
    activities: [
      {
        theme: "Royal Fortresses & Heritage",
        activities: [
          { timeOfDay: "Morning", locationName: "Mehrangarh Fort", googleMapsLink: makeGoogleMapsUrl("Mehrangarh Fort", "Jodhpur"), description: "Explore one of India's largest and best-preserved fortresses perched 410 feet above the city skyline. Discover the ornate Sheesh Mahal, Phool Mahal, and panoramic views of the blue city below." },
          { timeOfDay: "Afternoon", locationName: "Jaswant Thada", googleMapsLink: makeGoogleMapsUrl("Jaswant Thada", "Jodhpur"), description: "Visit the stunning white marble cenotaph built in 1899 for Maharaja Jaswant Singh II. Walk through carved lattice screens, peaceful gardens, and small lakeside pavilions." },
          { timeOfDay: "Evening", locationName: "Sardar Market Ghanta Ghar", googleMapsLink: makeGoogleMapsUrl("Sardar Market Ghanta Ghar", "Jodhpur"), description: "Stroll through the bustling market surrounding the century-old Clock Tower. Shop for authentic bandhani textiles, hand-stitched leather mojris, and local Jodhpuri spices." }
        ],
        stay: { name: "Umaid Bhawan Palace Hotel", type: "Royal Heritage Luxury", whyPick: "Historic royal residence with world-class hospitality", approxRate: "₹18,000/night" },
        dining: [{ name: "Indique Rooftop Restaurant", specialty: "Laal Maas with Fort View", priceRange: "₹800-1500" }, { name: "Janta Sweet Home", specialty: "Mawa Kachori & Mirchi Bada", priceRange: "₹50-150" }]
      },
      {
        theme: "Palaces, Gardens & Stepwells",
        activities: [
          { timeOfDay: "Morning", locationName: "Umaid Bhawan Palace Museum", googleMapsLink: makeGoogleMapsUrl("Umaid Bhawan Palace Museum", "Jodhpur"), description: "Marvel at one of the world's largest private residences built with golden Chittar sandstone. The museum showcases royal vintage cars, Art Deco clocks, and personal royal memorabilia." },
          { timeOfDay: "Afternoon", locationName: "Mandore Gardens", googleMapsLink: makeGoogleMapsUrl("Mandore Gardens", "Jodhpur"), description: "Explore the former capital of Marwar housing high-domed red sandstone royal cenotaphs. Walk through lush gardens and see the rock-cut Hall of Heroes depicting 16 local folk deities." },
          { timeOfDay: "Evening", locationName: "Toorji Ka Jhalra Stepwell", googleMapsLink: makeGoogleMapsUrl("Toorji Ka Jhalra Stepwell", "Jodhpur"), description: "Visit the beautifully restored 1740s stepwell with geometric descending steps and intricate stone carvings. Enjoy evening chai at trendy cafes surrounding the heritage stepwell." }
        ],
        stay: { name: "RAAS Jodhpur", type: "Boutique Heritage Resort", whyPick: "Luxury hotel crafted around an 18th-century haveli facing Mehrangarh", approxRate: "₹12,000/night" },
        dining: [{ name: "Stepwell Cafe", specialty: "Cold Brew & Rajasthani Fusion", priceRange: "₹300-600" }]
      },
      {
        theme: "Village Safari & Blue City Walk",
        activities: [
          { timeOfDay: "Morning", locationName: "Bishnoi Village Safari", googleMapsLink: makeGoogleMapsUrl("Bishnoi Village Safari", "Jodhpur"), description: "Embark on an open-jeep safari to Guda Bishnoiyan village to spot chinkara gazelles in the wild. Observe traditional Salawas rug weaving and learn about Bishnoi tree-protection culture." },
          { timeOfDay: "Afternoon", locationName: "Navchokiya Blue City Trail", googleMapsLink: makeGoogleMapsUrl("Navchokiya Blue City", "Jodhpur"), description: "Wander through peaceful indigo-painted lanes of old Brahmin quarters behind Mehrangarh Fort. Photograph historic ornate havelis, intricately carved wooden doors, and vibrant street life." },
          { timeOfDay: "Evening", locationName: "Rao Jodha Desert Rock Park", googleMapsLink: makeGoogleMapsUrl("Rao Jodha Desert Rock Park", "Jodhpur"), description: "Hike ecological trails across restored volcanic rock at the base of Mehrangarh Fort. Experience dramatic golden sunset views as the fort blazes orange above the park." }
        ],
        stay: { name: "Pal Haveli", type: "Heritage Haveli", whyPick: "Perched beside Gulab Sagar lake with authentic Rajasthani architecture", approxRate: "₹4,500/night" },
        dining: [{ name: "Gypsy Restaurant", specialty: "Rajasthani Unlimited Thali", priceRange: "₹450 fixed" }]
      }
    ],
    mustTry: [
      { item: "Mirchi Bada at Janta Sweet Home", why: "Spiced potato-stuffed green chilli fried in gram flour batter — Jodhpur's iconic street snack." },
      { item: "Laal Maas", why: "Fiery Marwari mutton curry slow-cooked with mathania red chillies and clarified butter." },
      { item: "Mawa Kachori", why: "Sweet fried pastry filled with rich sweetened khoya and dipped in warm sugar syrup." }
    ],
    packing: ["Sunscreen SPF 50+", "Comfortable cotton clothes", "Walking shoes for fort ramps", "Sunglasses & hat"],
    localInsights: "Old Jodhpur streets are narrow — auto-rickshaws or walking recommended. Bargain at Sardar Market.",
    bestTime: "October to March (15-26°C pleasant winter weather)"
  },

  varanasi: {
    title: "Sacred Kashi Spiritual Yatra",
    tagline: "Ancient ghats, divine chants, and the timeless Ganges river",
    logistics: DESTINATION_LOGISTICS.varanasi,
    highlights: ["Sunrise Ganga Boat Ride", "Kashi Vishwanath Corridor", "Dashashwamedh Evening Aarti", "Sarnath Buddhist Pilgrimage"],
    activities: [
      {
        theme: "Sacred Ghats & Evening Aarti",
        activities: [
          { timeOfDay: "Morning", locationName: "Assi Ghat Varanasi", googleMapsLink: makeGoogleMapsUrl("Assi Ghat", "Varanasi"), description: "Experience the pre-dawn Subah-e-Banaras at Assi Ghat with Vedic chants, yoga sessions, and a serene wooden boat ride watching priests perform river rituals in golden mist." },
          { timeOfDay: "Afternoon", locationName: "Kashi Vishwanath Temple", googleMapsLink: makeGoogleMapsUrl("Kashi Vishwanath Temple", "Varanasi"), description: "Visit one of the 12 sacred Jyotirlingas through the newly built grand heritage corridor directly connecting to the Ganges riverfront." },
          { timeOfDay: "Evening", locationName: "Dashashwamedh Ghat", googleMapsLink: makeGoogleMapsUrl("Dashashwamedh Ghat", "Varanasi"), description: "Witness the spectacular Ganga Aarti performed by 6 priests with giant brass lamps, incense, conch shells, and Vedic hymns — arrive 45 minutes early for ghat seating." }
        ],
        stay: { name: "BrijRama Palace", type: "Heritage Palace on Ghats", whyPick: "18th-century palace directly on Darbhanga Ghat with river views", approxRate: "₹12,000/night" },
        dining: [{ name: "Blue Lassi Shop", specialty: "Pomegranate Rabri Lassi", priceRange: "₹70-120" }, { name: "Kashi Chat Bhandar", specialty: "Tamatar Chat", priceRange: "₹100-200" }]
      },
      {
        theme: "Buddhist Heritage & Silk Weaving",
        activities: [
          { timeOfDay: "Morning", locationName: "Dhamek Stupa Sarnath", googleMapsLink: makeGoogleMapsUrl("Dhamek Stupa Sarnath", "Varanasi"), description: "Visit the 5th-century Dhamek Stupa at the sacred deer park where Lord Buddha delivered his first sermon after enlightenment. Explore Sarnath Museum's Ashoka Lion Capital original." },
          { timeOfDay: "Afternoon", locationName: "Banarasi Silk Weaving Madanpura", googleMapsLink: makeGoogleMapsUrl("Banarasi Silk Weaving Madanpura", "Varanasi"), description: "Walk through Madanpura lane to see master weavers creating intricate Banarasi silk sarees on traditional pit looms with gold and silver zari threads." },
          { timeOfDay: "Evening", locationName: "Manikarnika Ghat", googleMapsLink: makeGoogleMapsUrl("Manikarnika Ghat", "Varanasi"), description: "Witness the ancient 24-hour sacred cremation rites at Hinduism's holiest burning ghat — a profound and deeply philosophical experience of impermanence." }
        ],
        stay: { name: "Suryauday Haveli", type: "Boutique Ghat Hotel", whyPick: "At Shivala Ghat with sunrise Ganges views from every room", approxRate: "₹6,500/night" },
        dining: [{ name: "Baati Chokha Restaurant", specialty: "Authentic UP Baati Chokha", priceRange: "₹200-400" }]
      }
    ],
    mustTry: [
      { item: "Banarasi Tamatar Chat", why: "Spiced mashed tomato curry served in eco-friendly kulhad clay pots at Kashi Chat Bhandar." },
      { item: "Banarasi Paan", why: "Iconic betel leaf digestif prepared with gulkand, spices, and silver foil — try from Pehelwan Paan Shop." },
      { item: "Malaiyo (Winter Only)", why: "Frothy saffron-flavoured whipped cream dessert available only in winter mornings near Chowk area." }
    ],
    packing: ["Modest clothing covering shoulders and knees", "Easy slip-on shoes for temple visits", "Hand sanitiser", "Small cash bills (₹10-50)"],
    localInsights: "Varanasi lanes (galis) are labyrinthine — use landmarks and Google Maps. Never photograph cremation rituals. Respect all rituals.",
    bestTime: "November to February (pleasant cool weather and Ganga Mahotsav festival)"
  },

  agra: {
    title: "Mughal Splendour Heritage Yatra",
    tagline: "Eternal marble monuments, imperial gardens, and Mughal grandeur",
    logistics: DESTINATION_LOGISTICS.agra,
    highlights: ["Taj Mahal Sunrise", "Agra Fort Red Sandstone", "Fatehpur Sikri Ruins", "Mehtab Bagh Sunset View"],
    activities: [
      {
        theme: "Taj Mahal & Agra Fort",
        activities: [
          { timeOfDay: "Morning", locationName: "Taj Mahal Agra", googleMapsLink: makeGoogleMapsUrl("Taj Mahal", "Agra"), description: "Arrive at East Gate by 6 AM for sunrise — when the white marble glows pink-golden, mist hangs over the Yamuna, and crowds are minimal. One of the Seven Wonders of the World." },
          { timeOfDay: "Afternoon", locationName: "Agra Fort", googleMapsLink: makeGoogleMapsUrl("Agra Fort", "Agra"), description: "Explore the UNESCO-listed Red Fort complex where Shah Jahan was imprisoned by Aurangzeb with a view of the Taj Mahal. Visit Diwan-i-Aam, Khas Mahal, and Musamman Burj." },
          { timeOfDay: "Evening", locationName: "Mehtab Bagh", googleMapsLink: makeGoogleMapsUrl("Mehtab Bagh", "Agra"), description: "Cross the Yamuna to Mehtab Bagh (Moonlit Garden) for the best sunset view of the Taj Mahal with its reflection shimmering in the Yamuna River." }
        ],
        stay: { name: "Oberoi Amarvilas Agra", type: "5-Star Luxury Resort", whyPick: "Every room has a direct Taj Mahal view — truly unforgettable", approxRate: "₹45,000/night" },
        dining: [{ name: "Pinch of Spice Agra", specialty: "Mughlai Dum Biryani & Korma", priceRange: "₹600-1200" }, { name: "Peshawri ITC Mughal", specialty: "Tandoori Raan & Dal Bukhara", priceRange: "₹2000-4000" }]
      },
      {
        theme: "Abandoned City & Marble Craft",
        activities: [
          { timeOfDay: "Morning", locationName: "Fatehpur Sikri", googleMapsLink: makeGoogleMapsUrl("Fatehpur Sikri", "Agra"), description: "Explore the UNESCO-listed ghost city 37 km from Agra — Akbar's magnificent red sandstone capital built in 1571 and mysteriously abandoned after 14 years, now perfectly preserved." },
          { timeOfDay: "Afternoon", locationName: "Agra Marble Inlay Workshops", googleMapsLink: makeGoogleMapsUrl("Marble Inlay Workshop Pietra Dura", "Agra"), description: "Watch artisans in Taj Ganj area practice Pietra Dura — the ancient Mughal marble inlay craft using semi-precious stones that adorns the Taj Mahal itself." },
          { timeOfDay: "Evening", locationName: "Kinari Bazaar Agra", googleMapsLink: makeGoogleMapsUrl("Kinari Bazaar", "Agra"), description: "Browse this bustling traditional market near Agra Fort for leather goods, marble souvenirs, Agra petha sweets, and traditional Mughal-era metalwork." }
        ],
        stay: { name: "Trident Agra Hotel", type: "5-Star Luxury", whyPick: "Sprawling garden property minutes from the Taj Mahal", approxRate: "₹8,000/night" },
        dining: [{ name: "Dasaprakash Restaurant", specialty: "Agra Petha & South Indian Thali", priceRange: "₹400-700" }]
      }
    ],
    mustTry: [
      { item: "Agra Petha", why: "Translucent crystallised pumpkin sweet invented by Mughal royal cooks — available in 30+ flavours." },
      { item: "Mughlai Dum Biryani", why: "Slow-cooked sealed pot rice layered with saffron, meats, and royal Mughal spices." },
      { item: "Bedai Aloo Sabzi", why: "Flaky fried lentil bread with spiced potato curry — Agra's quintessential breakfast dish." }
    ],
    packing: ["Comfortable walking shoes (flat cobblestones at monuments)", "Light cotton clothes", "Sunscreen", "Camera with extra battery"],
    localInsights: "Taj Mahal is closed on Fridays. Book tickets online to avoid queues. Avoid carrying bags inside Taj — cloak rooms available near gates.",
    bestTime: "October to March (clear skies and comfortable weather for sightseeing)"
  },

  rishikesh: {
    title: "Yoga Capital Adventure Yatra",
    tagline: "Turquoise Ganges, ancient ashrams, and Himalayan adventure sports",
    logistics: DESTINATION_LOGISTICS.rishikesh,
    highlights: ["Laxman Jhula Suspension Bridge", "Triveni Ghat Evening Aarti", "Bungee Jumping Shivpuri", "Beatles Ashram Walk"],
    activities: [
      {
        theme: "Spiritual Ghats & Ashrams",
        activities: [
          { timeOfDay: "Morning", locationName: "Triveni Ghat Rishikesh", googleMapsLink: makeGoogleMapsUrl("Triveni Ghat", "Rishikesh"), description: "Experience the pre-dawn morning aarti at Triveni Ghat where three sacred rivers meet — then take a holy dip in the turquoise Ganges as the Himalayan peaks glow with sunrise." },
          { timeOfDay: "Afternoon", locationName: "Beatles Ashram Chaurasi Kutia", googleMapsLink: makeGoogleMapsUrl("Beatles Ashram Chaurasi Kutia", "Rishikesh"), description: "Explore the famous abandoned ashram where the Beatles composed White Album songs in 1968. Now an open-air art gallery inside a jungle of murals, domes, and meditation cells." },
          { timeOfDay: "Evening", locationName: "Parmarth Niketan Evening Aarti", googleMapsLink: makeGoogleMapsUrl("Parmarth Niketan Rishikesh", "Rishikesh"), description: "Attend Rishikesh's grandest Ganga Aarti at Parmarth Niketan ashram — floating diyas on the river, bhajans echoing through mountains, and thousands of pilgrims gathered at dusk." }
        ],
        stay: { name: "Aloha on the Ganges", type: "Wellness Resort", whyPick: "Yoga, Ayurveda, and meditation with Ganges views", approxRate: "₹5,000/night" },
        dining: [{ name: "Little Buddha Cafe", specialty: "Organic Thali & Lassi", priceRange: "₹300-500" }, { name: "Chotiwala Restaurant", specialty: "Aloo Puri & Rajma Chawal", priceRange: "₹150-300" }]
      },
      {
        theme: "Adventure & White Water Rafting",
        activities: [
          { timeOfDay: "Morning", locationName: "Shivpuri Rafting Camp", googleMapsLink: makeGoogleMapsUrl("Shivpuri River Rafting", "Rishikesh"), description: "Launch into a thrilling 16 km Grade III-IV white water rafting adventure from Shivpuri to Rishikesh through rapids like Three Blind Mice, The Wall, and Roller Coaster." },
          { timeOfDay: "Afternoon", locationName: "Laxman Jhula", googleMapsLink: makeGoogleMapsUrl("Laxman Jhula", "Rishikesh"), description: "Walk across the iconic 137-metre iron suspension bridge over the Ganges, exploring the surrounding ashrams, temples, ayurvedic shops, and rooftop cafes on both banks." },
          { timeOfDay: "Evening", locationName: "Ram Jhula Rishikesh", googleMapsLink: makeGoogleMapsUrl("Ram Jhula", "Rishikesh"), description: "Cross the 450-foot Ram Jhula bridge for a magical evening stroll with mountain views, temple bells, and riverside restaurants serving piping hot pakoras and chai." }
        ],
        stay: { name: "Taj Rishikesh Resort & Spa", type: "5-Star Riverside Resort", whyPick: "Luxurious private villa suites alongside the Ganges with yoga pavilion", approxRate: "₹18,000/night" },
        dining: [{ name: "Freedom Cafe Rishikesh", specialty: "Israeli Hummus & Shakshuka", priceRange: "₹400-700" }]
      }
    ],
    mustTry: [
      { item: "Bungee Jumping at Jumping Heights", why: "India's highest bungee jump at 83 metres over a Himalayan gorge — strictly for adrenaline seekers." },
      { item: "Ayurvedic Abhyanga Massage", why: "Traditional Ayurvedic full-body warm oil massage for rejuvenation — extensively practiced in Rishikesh." },
      { item: "Aloo Puri at Chotiwala", why: "Classic North Indian breakfast of crispy spiced potato curry with fluffy puri breads — quintessential Rishikesh morning meal." }
    ],
    packing: ["Quick-dry clothes for water sports", "Modest wear for temples and ashrams", "Waterproof sandals", "Yoga mat if doing classes"],
    localInsights: "Alcohol and non-veg food banned in Rishikesh! Book rafting 1 day in advance in peak season. Wear helmet and life jacket for all water activities.",
    bestTime: "September to November and February to May (clear river conditions for rafting)"
  },

  shimla: {
    title: "Queen of Hills Colonial Yatra",
    tagline: "Charming colonial architecture, toy trains, and pine-scented mountain air",
    logistics: DESTINATION_LOGISTICS.shimla,
    highlights: ["The Ridge Shimla", "Jakhu Temple Monkey Hill", "Kufri Snow Adventure", "Toy Train UNESCO Journey"],
    activities: [
      {
        theme: "Colonial Heritage & Ridge Walk",
        activities: [
          { timeOfDay: "Morning", locationName: "The Mall Road Shimla", googleMapsLink: makeGoogleMapsUrl("Mall Road", "Shimla"), description: "Walk along The Mall — Shimla's colonial-era promenade flanked by Victorian Gothic buildings, Christ Church, and Tudor architecture housing cafes and heritage shops." },
          { timeOfDay: "Afternoon", locationName: "Christ Church Shimla", googleMapsLink: makeGoogleMapsUrl("Christ Church", "Shimla"), description: "Visit the neo-Gothic Christ Church (1857) — the second oldest church in North India, featuring stunning stained glass windows depicting Faith, Hope, Charity, Fortitude, Patience, and Humility." },
          { timeOfDay: "Evening", locationName: "The Ridge Shimla", googleMapsLink: makeGoogleMapsUrl("The Ridge", "Shimla"), description: "Walk across The Ridge — the large open space in the heart of Shimla offering panoramic Himalayan views, folk performances, and winter snow activities in season." }
        ],
        stay: { name: "Wildflower Hall Oberoi Shimla", type: "Heritage Mountain Resort", whyPick: "Former Lord Kitchener's residence set in cedar forest with valley views", approxRate: "₹15,000/night" },
        dining: [{ name: "Cafe Sol Shimla", specialty: "Himachali Siddu & Dham Thali", priceRange: "₹400-700" }, { name: "Baljee's Shimla", specialty: "Colonial Club Sandwiches", priceRange: "₹300-600" }]
      },
      {
        theme: "Jakhu Temple & Toy Train",
        activities: [
          { timeOfDay: "Morning", locationName: "Jakhu Temple Shimla", googleMapsLink: makeGoogleMapsUrl("Jakhu Temple", "Shimla"), description: "Trek 2.5 km up Jakhu Hill to the ancient Hanuman temple at 2,455 m. The hilltop houses a 33-metre Hanuman statue and offers the best panoramic views of Shimla town." },
          { timeOfDay: "Afternoon", locationName: "Kalka Shimla Toy Train", googleMapsLink: makeGoogleMapsUrl("Kalka Shimla Toy Train", "Shimla"), description: "Board the UNESCO Heritage Kalka-Shimla narrow gauge railway for a scenic ride through 102 tunnels, 869 bridges, and stunning Himalayan forests on a gradient-defying mountain track." },
          { timeOfDay: "Evening", locationName: "Scandal Point Shimla", googleMapsLink: makeGoogleMapsUrl("Scandal Point", "Shimla"), description: "Visit the famous colonial landmark at the junction of Mall Road and the Ridge, historically where Patiala's Maharaja would secretly meet a British Viceroy's daughter." }
        ],
        stay: { name: "The Oberoi Cecil Shimla", type: "Colonial Heritage Hotel", whyPick: "1884 heritage property with Himalayan views and fireside suites", approxRate: "₹10,000/night" },
        dining: [{ name: "Himachali Kitchen", specialty: "Madra Chickpea Curry & Babru", priceRange: "₹200-400" }]
      }
    ],
    mustTry: [
      { item: "Himachali Siddu", why: "Steamed wheat bread stuffed with poppy seeds and walnuts — a traditional winter delicacy of Shimla." },
      { item: "Himachali Dham", why: "Traditional vegetarian feast served on leaf plates including rajma, kaddu, and boor ki kali — only on special occasions." },
      { item: "Apples from Shimla Orchards", why: "Shimla district produces India's finest apples — buy fresh from roadside orchards between September and November." }
    ],
    packing: ["Warm woollen layers (even in summer evenings)", "Waterproof jacket (monsoon season)", "Comfortable walking shoes", "Gloves for winter season"],
    localInsights: "Vehicles restricted in Mall Road area — use the local ropeway or walk. Book toy train tickets at least a week in advance.",
    bestTime: "March to June (spring flowers) and December to February (snowfall season)"
  },

  "leh-ladakh": {
    title: "Land of High Passes Adventure Yatra",
    tagline: "Ancient monasteries, crystalline lakes, and moonlike desert landscapes",
    logistics: DESTINATION_LOGISTICS["leh-ladakh"],
    highlights: ["Pangong Tso Lake", "Thiksey Monastery", "Khardung La World Pass", "Nubra Valley Camel Safari"],
    activities: [
      {
        theme: "Monasteries & Palace Ruins",
        activities: [
          { timeOfDay: "Morning", locationName: "Thiksey Monastery Ladakh", googleMapsLink: makeGoogleMapsUrl("Thiksey Monastery", "Leh Ladakh"), description: "Attend 6 AM morning prayer at Thiksey Gompa — a 12-storey whitewashed monastery resembling Lhasa's Potala Palace, with stunning valley views and giant 15-metre Maitreya Buddha statue." },
          { timeOfDay: "Afternoon", locationName: "Leh Palace", googleMapsLink: makeGoogleMapsUrl("Leh Palace", "Leh"), description: "Explore the 17th-century nine-storey Leh Palace modelled on Tibet's Potala Palace, offering panoramic views of the Indus Valley, barren mountains, and distant Himalayan snowfields." },
          { timeOfDay: "Evening", locationName: "Shanti Stupa Leh", googleMapsLink: makeGoogleMapsUrl("Shanti Stupa", "Leh"), description: "Climb to the Japanese-built white-domed Buddhist stupa for the best sunset in all of Leh — where Zanskar, Ladakh and Karakoram ranges glow orange and purple simultaneously." }
        ],
        stay: { name: "The Grand Dragon Ladakh", type: "Luxury Mountain Hotel", whyPick: "Centrally located with Himalayan-view rooms and Ladakhi decor", approxRate: "₹8,000/night" },
        dining: [{ name: "Tibetan Kitchen Leh", specialty: "Thukpa Noodle Soup & Tsampa", priceRange: "₹250-450" }, { name: "Bon Appetit Leh", specialty: "Yak Cheese Pizza & Apple Tea", priceRange: "₹400-700" }]
      },
      {
        theme: "Pangong Lake & Nubra Valley",
        activities: [
          { timeOfDay: "Morning", locationName: "Pangong Tso Lake", googleMapsLink: makeGoogleMapsUrl("Pangong Lake", "Ladakh"), description: "Drive the scenic 5-hour route over Chang La pass (5,360 m) to the otherworldly Pangong Tso — a 134 km long lake at 4,225 m altitude that changes from turquoise to cobalt to silver." },
          { timeOfDay: "Afternoon", locationName: "Khardung La Pass", googleMapsLink: makeGoogleMapsUrl("Khardung La Pass", "Leh Ladakh"), description: "Drive to Khardung La (5,359 m), the gateway to Nubra Valley, for breathtaking views of Karakoram peaks and the perpetual snowfields of the world's highest motorable road." },
          { timeOfDay: "Evening", locationName: "Nubra Valley Hunder Village", googleMapsLink: makeGoogleMapsUrl("Hunder Sand Dunes Nubra Valley", "Ladakh"), description: "Ride Bactrian double-humped camels across the surreal cold desert sand dunes of Hunder in Nubra Valley — a bizarre landscape between towering Himalayan peaks." }
        ],
        stay: { name: "Nubra Ecolodge", type: "Traditional Ladakhi Mud House Stay", whyPick: "Authentic organic farm stay under billions of stars in Nubra Valley", approxRate: "₹3,500/night" },
        dining: [{ name: "Diskit Village Homestay", specialty: "Ladakhi Skyu & Butter Tea", priceRange: "Homestay inclusive" }]
      }
    ],
    mustTry: [
      { item: "Thukpa Noodle Soup", why: "Hearty Tibetan noodle broth with vegetables or yak meat — essential warmth at high altitude." },
      { item: "Butter Tea (Po Cha)", why: "Salty yak butter and Himalayan black tea — the traditional high-altitude energy drink of Ladakh." },
      { item: "Apricot Jam from Nubra Valley", why: "Wild Ladakhi apricots from Nubra Valley are dried and made into intensely fragrant jams — best souvenir." }
    ],
    packing: ["Warm down jacket (0°C nights even in summer)", "Altitude sickness medicine (Diamox)", "Sunscreen SPF 70+ (extreme UV at high altitude)", "Warm thermals", "Multiple layers"],
    localInsights: "Acclimatise for 2 full days in Leh (3,500 m) before excursions. Inner Line Permits required for Pangong and Nubra — get from Leh DC office.",
    bestTime: "May to September (roads open, lakes accessible, clear skies)"
  },

  kerala: {
    title: "God's Own Country Serenity Yatra",
    tagline: "Tranquil backwaters, emerald tea hills, and Ayurvedic wellness",
    logistics: DESTINATION_LOGISTICS.kerala,
    highlights: ["Alleppey Houseboat Cruise", "Fort Kochi Chinese Fishing Nets", "Kathakali Cultural Performance", "Vembanad Lake Sunset"],
    activities: [
      {
        theme: "Fort Kochi Heritage & Culture",
        activities: [
          { timeOfDay: "Morning", locationName: "Fort Kochi Chinese Fishing Nets", googleMapsLink: makeGoogleMapsUrl("Chinese Fishing Nets Fort Kochi", "Kerala"), description: "Watch the 600-year-old Chinese cantilevered fishing nets operate at sunrise on Kochi seafront — each net requires 6 men to operate and pulls fresh catch every 15 minutes." },
          { timeOfDay: "Afternoon", locationName: "Mattancherry Palace Kochi", googleMapsLink: makeGoogleMapsUrl("Mattancherry Palace Kochi", "Kerala"), description: "Explore the 16th-century Dutch Palace containing extraordinary Kerala-style murals depicting scenes from Ramayana across the walls of the royal bedchambers." },
          { timeOfDay: "Evening", locationName: "Kathakali Performance Kochi", googleMapsLink: makeGoogleMapsUrl("Kerala Kathakali Centre Fort Kochi", "Kerala"), description: "Watch classical Kathakali performers apply elaborate 3-hour facial makeup before staging expressive mythological dance drama — arrive early to witness the transformation process." }
        ],
        stay: { name: "Forte Kochi Heritage Hotel", type: "Heritage Boutique", whyPick: "Restored Dutch colonial mansion in the heart of Fort Kochi", approxRate: "₹7,500/night" },
        dining: [{ name: "Oceanos Restaurant Kochi", specialty: "Kerala Fish Curry Meals", priceRange: "₹300-500" }, { name: "Kashi Art Cafe", specialty: "Filter Coffee & Coconut Cake", priceRange: "₹200-350" }]
      },
      {
        theme: "Alleppey Houseboat Backwaters",
        activities: [
          { timeOfDay: "Morning", locationName: "Alleppey Houseboat Jetty", googleMapsLink: makeGoogleMapsUrl("Alleppey Houseboat", "Kerala"), description: "Board a traditional Kettuvallam wooden houseboat with private bedroom, deck, and chef to cruise through 900 km of interconnected palm-fringed canals, rivers, and lakes." },
          { timeOfDay: "Afternoon", locationName: "Vembanad Lake Kerala", googleMapsLink: makeGoogleMapsUrl("Vembanad Lake", "Kerala"), description: "Glide over Vembanad Lake — Kerala's largest lake, 2,033 sq km — passing paddy fields, duck farms, toddy shops, and silent villages untouched by modernity." },
          { timeOfDay: "Evening", locationName: "Nehru Trophy Race Finishing Point", googleMapsLink: makeGoogleMapsUrl("Punnamada Lake Alleppey", "Kerala"), description: "Watch sunset from Punnamada Lake and learn about the famous Nehru Trophy Snake Boat Race held here every August — the most celebrated boat race in all of India." }
        ],
        stay: { name: "Luxury Kettuvallam Houseboat", type: "Private Houseboat", whyPick: "Floating bedroom with private chef serving Karimeen Pollichathu", approxRate: "₹9,000/night" },
        dining: [{ name: "Onboard Houseboat Chef", specialty: "Karimeen Pollichathu & Red Rice", priceRange: "Included" }]
      }
    ],
    mustTry: [
      { item: "Karimeen Pollichathu", why: "Pearl spot fish marinated in spicy masala and grilled inside banana leaf — Kerala's signature dish." },
      { item: "Kerala Sadya on Banana Leaf", why: "Grand vegetarian feast of 24+ dishes including avial, olan, and payasam served on fresh banana leaf." },
      { item: "Ayurvedic Abhyanga Massage", why: "Full-body warm herbal oil massage by certified Kerala therapists — rejuvenates the nervous system." }
    ],
    packing: ["Light breathable cottons", "Mosquito repellent spray", "Umbrella or rain poncho", "Slip-on sandals (for boats)"],
    localInsights: "Houseboats must anchor by 5:30 PM under Kerala water body regulations. Tip houseboat crew 10-15%. Avoid monsoon months for houseboat stays.",
    bestTime: "September to March (post-monsoon greenery and pleasant weather)"
  },

  munnar: {
    title: "Emerald Tea Hills Serenity Yatra",
    tagline: "Misty mountains, rolling tea estates, and spice-scented highland air",
    logistics: DESTINATION_LOGISTICS.munnar,
    highlights: ["Eravikulam National Park Nilgiri Tahr", "Tea Museum KDHP", "Top Station Panorama", "Mattupetty Dam & Echo Point"],
    activities: [
      {
        theme: "Tea Estates & Wildlife",
        activities: [
          { timeOfDay: "Morning", locationName: "Eravikulam National Park Munnar", googleMapsLink: makeGoogleMapsUrl("Eravikulam National Park", "Munnar"), description: "Visit this UNESCO Biosphere Reserve to spot the endangered Nilgiri Tahr (mountain goat) at close range — they are remarkably tame and let visitors walk within a few metres." },
          { timeOfDay: "Afternoon", locationName: "KDHP Tea Museum Munnar", googleMapsLink: makeGoogleMapsUrl("KDHP Tea Museum", "Munnar"), description: "Tour the working tea museum to understand how colonial-era tea rolling, fermentation, and grading machinery processes the famous Munnar single-estate tea leaves." },
          { timeOfDay: "Evening", locationName: "Lockhart Gap Munnar", googleMapsLink: makeGoogleMapsUrl("Lockhart Gap", "Munnar"), description: "Watch sunset from the Lockhart Gap viewpoint at 1,880 m — where clouds drift through mountain passes below you and the entire Munnar valley turns golden at dusk." }
        ],
        stay: { name: "Windermere Estate Munnar", type: "Heritage Planter's Bungalow", whyPick: "1800s British planter's bungalow surrounded by own tea estate", approxRate: "₹8,000/night" },
        dining: [{ name: "Rapsy Restaurant Munnar", specialty: "Kerala Prawn Curry & Appam", priceRange: "₹400-700" }]
      },
      {
        theme: "High Stations & Waterfall Trails",
        activities: [
          { timeOfDay: "Morning", locationName: "Top Station Munnar", googleMapsLink: makeGoogleMapsUrl("Top Station", "Munnar"), description: "Drive to Top Station at 1,880 m — the highest point on the Munnar-Kodaikanal road — for breathtaking sunrise views of the Kannan Devan tea hills and Tamil Nadu plains below." },
          { timeOfDay: "Afternoon", locationName: "Attukal Waterfalls Munnar", googleMapsLink: makeGoogleMapsUrl("Attukal Waterfalls", "Munnar"), description: "Trek through shola forests to reach the dramatic Attukal Waterfalls cascading 120 feet over mossy rocks into a pool surrounded by cardamom plantations." },
          { timeOfDay: "Evening", locationName: "Mattupetty Dam Munnar", googleMapsLink: makeGoogleMapsUrl("Mattupetty Dam", "Munnar"), description: "Stroll along the shimmering reservoir of Mattupetty Dam at 1,700 m, enjoying pedal boating and watching tea estate workers complete their evening harvest rounds." }
        ],
        stay: { name: "Tea Valley Resort Munnar", type: "Mountain Resort", whyPick: "Nestled inside working tea estate with valley panoramas from every villa", approxRate: "₹5,500/night" },
        dining: [{ name: "Saravana Bhavan Munnar", specialty: "Masala Dosa & Filter Coffee", priceRange: "₹150-300" }]
      }
    ],
    mustTry: [
      { item: "Munnar Single-Estate Tea", why: "Buy fresh estate-picked Nilgiri Orthodox tea directly from KDHP estates — the freshest you'll ever taste." },
      { item: "Cardamom Honey", why: "Wild forest honey infused with Munnar's abundant cardamom flowers — sold in small earthen pots at spice shops." },
      { item: "Kerala Spice Plantation Walk", why: "Walk through living spice gardens to smell fresh black pepper, cardamom, cinnamon, and vanilla growing on vines." }
    ],
    packing: ["Warm fleece (cold nights at 1,600 m)", "Waterproof jacket (frequent mist and rain)", "Trekking shoes", "Insect repellent"],
    localInsights: "Eravikulam Park closes during Neelakurinji blooming season (every 12 years, next 2030). Book jeep safaris in advance.",
    bestTime: "September to May (post-monsoon green and cool weather)"
  },

  goa: {
    title: "Sun-Kissed Goa Coastal Yatra",
    tagline: "Golden beaches, Portuguese heritage, and vibrant coastal culture",
    logistics: DESTINATION_LOGISTICS.goa,
    highlights: ["Fontainhas Latin Quarter", "Basilica of Bom Jesus Old Goa", "Chapora Fort Sunset", "Anjuna Flea Market"],
    activities: [
      {
        theme: "Portuguese Heritage & Old Goa",
        activities: [
          { timeOfDay: "Morning", locationName: "Fontainhas Latin Quarter Panaji", googleMapsLink: makeGoogleMapsUrl("Fontainhas Latin Quarter", "Panaji Goa"), description: "Wander through Panaji's colourful Portuguese neighbourhood of yellow, blue, and green colonial villas with terracotta tiles, cast-iron balconies, and ornate doorways dating to the 1800s." },
          { timeOfDay: "Afternoon", locationName: "Basilica of Bom Jesus Old Goa", googleMapsLink: makeGoogleMapsUrl("Basilica of Bom Jesus", "Old Goa"), description: "Visit the UNESCO-listed 16th-century baroque basilica housing the mummified remains of St. Francis Xavier in a silver casket — one of India's finest examples of Portuguese religious architecture." },
          { timeOfDay: "Evening", locationName: "Mandovi River Cruise Goa", googleMapsLink: makeGoogleMapsUrl("Mandovi River Cruise", "Panaji Goa"), description: "Board a sunset cruise on the Mandovi River to enjoy live Dekhni folk dances, Goan Mando songs, and views of Miramar beach and Cabo Raj Niwas palace at golden hour." }
        ],
        stay: { name: "Panjim Inn Heritage Hotel", type: "Heritage Boutique Hotel", whyPick: "300-year-old restored Portuguese villa in the heart of Fontainhas", approxRate: "₹4,500/night" },
        dining: [{ name: "Viva Panjim", specialty: "Goan Fish Curry Rice & Bebinca", priceRange: "₹300-600" }, { name: "Fisherman's Wharf Goa", specialty: "Prawn Balchão & Vindaloo", priceRange: "₹600-1200" }]
      },
      {
        theme: "North Goa Beaches & Forts",
        activities: [
          { timeOfDay: "Morning", locationName: "Fort Aguada Goa", googleMapsLink: makeGoogleMapsUrl("Fort Aguada", "Goa"), description: "Explore the massive 17th-century Portuguese fort where the Mandovi River meets the Arabian Sea. Climb the lighthouse for sweeping ocean panoramas and spot marine life in the lagoon below." },
          { timeOfDay: "Afternoon", locationName: "Anjuna Flea Market Goa", googleMapsLink: makeGoogleMapsUrl("Anjuna Flea Market", "Goa"), description: "Browse the famous Wednesday Anjuna Flea Market for handmade jewellery, Indian handicrafts, vintage clothing, Tibetan artefacts, and international street food stalls on the beach." },
          { timeOfDay: "Evening", locationName: "Chapora Fort Vagator", googleMapsLink: makeGoogleMapsUrl("Chapora Fort Vagator", "Goa"), description: "Climb the Dil Chahta Hai fort for unforgettable cliffside sunset views over Vagator and Ozran beaches — the most photogenic sunset point in all of Goa." }
        ],
        stay: { name: "Taj Fort Aguada Resort", type: "5-Star Oceanfront Resort", whyPick: "Iconic ocean views directly adjacent to the historic Portuguese fort", approxRate: "₹14,000/night" },
        dining: [{ name: "Curlies Beach Shack Anjuna", specialty: "Wood-fired Pizza & Cocktails", priceRange: "₹400-800" }, { name: "Thalassa Siolim", specialty: "Greek Mezze & Seafood", priceRange: "₹1200-2500" }]
      }
    ],
    mustTry: [
      { item: "Goan Fish Curry Rice", why: "Tangy coconut-tamarind fish curry eaten with hot steamed red rice — the everyday comfort food of Goa." },
      { item: "Bebinca Dessert", why: "Traditional 7-layered Goan baked coconut milk pudding — a Portuguese-Goan heritage sweet." },
      { item: "Scooter Beach Hopping", why: "Rent a scooty (₹400/day) and independently discover hidden beaches — the true liberating Goa experience." }
    ],
    packing: ["Swimwear & beach towels", "Sunscreen SPF 50+", "Flip flops and sunglasses", "Light linen shirts", "Helmet (mandatory for scooty)"],
    localInsights: "Rent scooters only from registered black-and-yellow number plate vendors. Alcohol permitted here unlike most Indian states. Avoid monsoon beach visits.",
    bestTime: "November to February (vibrant beach season with cool sea breeze)"
  },

  hampi: {
    title: "Vijayanagara Empire Heritage Yatra",
    tagline: "Surreal boulder landscapes, UNESCO ruins, and Dravidian temple grandeur",
    logistics: DESTINATION_LOGISTICS.hampi,
    highlights: ["Virupaksha Temple", "Vittala Temple Stone Chariot", "Elephant Stables", "Tungabhadra Coracle Ride"],
    activities: [
      {
        theme: "UNESCO Ruins & Royal Enclosure",
        activities: [
          { timeOfDay: "Morning", locationName: "Virupaksha Temple Hampi", googleMapsLink: makeGoogleMapsUrl("Virupaksha Temple", "Hampi"), description: "Explore the living 7th-century Dravidian temple dedicated to Lord Shiva with a 52-metre gopuram tower — still an active place of worship at the centre of Hampi's ruins." },
          { timeOfDay: "Afternoon", locationName: "Vittala Temple Hampi", googleMapsLink: makeGoogleMapsUrl("Vittala Temple", "Hampi"), description: "Visit the crown jewel of Hampi — the Vittala Temple's iconic stone chariot and musical pillars that ring melodiously when tapped, carved in the 15th century by Vijayanagara kings." },
          { timeOfDay: "Evening", locationName: "Hemakuta Hill Hampi", googleMapsLink: makeGoogleMapsUrl("Hemakuta Hill", "Hampi"), description: "Climb Hemakuta Hill at sunset for the most dramatic view of Hampi — boulder-strewn moonscape, Virupaksha Temple gopuram, Tungabhadra River, and scattered ruins glowing amber." }
        ],
        stay: { name: "Evolve Back Hampi", type: "Luxury Heritage Resort", whyPick: "Dramatic resort among boulder outcrops with private pool villas", approxRate: "₹18,000/night" },
        dining: [{ name: "Mango Tree Restaurant Hampi", specialty: "South Indian Thali & Filter Coffee", priceRange: "₹200-400" }, { name: "Laughing Buddha Hampi", specialty: "Israeli Shakshuka & Banana Pancakes", priceRange: "₹300-500" }]
      },
      {
        theme: "Royal Enclosure & River Safari",
        activities: [
          { timeOfDay: "Morning", locationName: "Elephant Stables Hampi", googleMapsLink: makeGoogleMapsUrl("Elephant Stables", "Hampi"), description: "Explore the magnificent 11-domed royal elephant stables of the Vijayanagara Empire — a blend of Hindu and Indo-Islamic architecture housing the royal war elephants." },
          { timeOfDay: "Afternoon", locationName: "Tungabhadra Coracle Ride Hampi", googleMapsLink: makeGoogleMapsUrl("Tungabhadra River Coracle Hampi", "Hampi"), description: "Ride a traditional circular coracle (basket boat) across the Tungabhadra River to the Hippie Island (Virupapur Gaddi) — crossing banana plantations and bouldered shores." },
          { timeOfDay: "Evening", locationName: "Lotus Mahal Hampi", googleMapsLink: makeGoogleMapsUrl("Lotus Mahal", "Hampi"), description: "Visit the intricately carved two-storey Lotus Mahal in the Zenana Enclosure — an exquisite pavilion blending Hindu and Islamic architectural styles built for royal ladies." }
        ],
        stay: { name: "Kishkinda Heritage Resort", type: "Boutique Boulder Resort", whyPick: "Unique stay among Hampi's famous granite boulders with valley views", approxRate: "₹4,500/night" },
        dining: [{ name: "Ravi's Rose Cafe Hampi", specialty: "Fresh Juice & Brown Rice Thali", priceRange: "₹200-350" }]
      }
    ],
    mustTry: [
      { item: "South Indian Thali at Mango Tree", why: "Eat a traditional banana-leaf thali under mango trees beside the Tungabhadra River — quintessential Hampi experience." },
      { item: "Fresh Sugarcane Juice", why: "Local vendors near ruins press fresh sugarcane juice with ginger and lemon — best heat reliever in Karnataka sun." },
      { item: "Tungabhadra Coracle Ride", why: "A basket-boat river crossing is one of India's most unique transport experiences, unchanged for centuries." }
    ],
    packing: ["Sturdy trekking shoes (boulders are slippery)", "Sunscreen SPF 70+ (harsh Karnataka sun)", "Loose cotton clothing", "Torch/flashlight for sunset climbs"],
    localInsights: "Hire a bicycle or rent an electric scooter to cover Hampi's spread-out ruins. The sites span 26 sq km. Morning visits before 9 AM are essential to beat the heat.",
    bestTime: "October to February (cool weather for extensive walking among ruins)"
  },

  mysore: {
    title: "City of Palaces Royal Yatra",
    tagline: "Illuminated palaces, fragrant jasmine, and Dasara's royal grandeur",
    logistics: DESTINATION_LOGISTICS.mysore,
    highlights: ["Mysore Palace Illumination", "Chamundi Hills Temple", "Brindavan Gardens Night Show", "Devaraja Market Silk"],
    activities: [
      {
        theme: "Palace Grandeur & Silk City",
        activities: [
          { timeOfDay: "Morning", locationName: "Mysore Palace", googleMapsLink: makeGoogleMapsUrl("Mysore Palace", "Mysore"), description: "Explore the magnificent Indo-Saracenic Mysore Palace — home of the Wodeyar royal family, with peacock throne, ivory doors, and intricate stained glass ceilings. Third most visited monument in India." },
          { timeOfDay: "Afternoon", locationName: "Devaraja Market Mysore", googleMapsLink: makeGoogleMapsUrl("Devaraja Market", "Mysore"), description: "Browse the 200-year-old Devaraja Market with mounds of fragrant jasmine, silk saris, carved sandalwood, Mysore incense, and traditional Karnataka spices." },
          { timeOfDay: "Evening", locationName: "Mysore Palace Sunday Illumination", googleMapsLink: makeGoogleMapsUrl("Mysore Palace Illumination", "Mysore"), description: "Witness the Sunday and festival illumination when 98,000 light bulbs simultaneously light up the Mysore Palace — one of the most breathtaking spectacles in all of India." }
        ],
        stay: { name: "Lalitha Mahal Palace Hotel", type: "Heritage Palace Hotel", whyPick: "Built for the Viceroy of India — enormous palace hotel with royal suites", approxRate: "₹8,000/night" },
        dining: [{ name: "RRR Restaurant Mysore", specialty: "Karnataka Mutton Meals on Banana Leaf", priceRange: "₹250-450" }, { name: "Mylari Dosa", specialty: "Legendary Mysore Masala Dosa", priceRange: "₹60-150" }]
      },
      {
        theme: "Hill Temples & Garden Lights",
        activities: [
          { timeOfDay: "Morning", locationName: "Chamundi Hills Temple Mysore", googleMapsLink: makeGoogleMapsUrl("Chamundeshwari Temple Chamundi Hills", "Mysore"), description: "Climb 1,000 steps up Chamundi Hills to the Chamundeshwari Temple — the royal family's presiding deity. Pass the giant Nandi bull carved from a single rock face on the way up." },
          { timeOfDay: "Afternoon", locationName: "Somnathpur Hoysala Temple", googleMapsLink: makeGoogleMapsUrl("Somnathpur Hoysala Temple", "Mysore"), description: "Visit the 13th-century Keshava Temple at Somnathpur (35 km away) — the best-preserved triple-shrine Hoysala temple covered in intricate star-shaped friezes of elephants, warriors, and deities." },
          { timeOfDay: "Evening", locationName: "Brindavan Gardens Mysore", googleMapsLink: makeGoogleMapsUrl("Brindavan Gardens", "Mysore"), description: "Experience the spectacular musical fountain and illuminated terraced gardens at Brindavan — lit up brilliantly on weekends with coloured fountains set to Carnatic and Bollywood music." }
        ],
        stay: { name: "Radisson Blu Plaza Hotel Mysore", type: "5-Star City Hotel", whyPick: "Central location with rooftop pool and Chamundi Hills views", approxRate: "₹5,500/night" },
        dining: [{ name: "Hotel Mahesh Prasad", specialty: "Mysore Pak & Set Dosa", priceRange: "₹100-300" }]
      }
    ],
    mustTry: [
      { item: "Mysore Masala Dosa at Mylari", why: "The crispy paper dosa with red chutney smeared inside and spiced potato filling is Mysore's most iconic culinary export." },
      { item: "Mysore Pak Sweet", why: "Fudgy gram flour and ghee sweet invented by royal palace cooks in 1935 — buy from Sri Guru Sweets near palace." },
      { item: "Silk Shopping at Cauvery Emporium", why: "Mysore silk sarees with pure gold zari borders are woven with the finest mulberry silk in government-run silk factories." }
    ],
    packing: ["Modest clothing for temples", "Comfortable walking shoes", "Carry cash for market shopping", "Sunscreen"],
    localInsights: "Palace illumination every Sunday 7-7:45 PM and all public holidays. Dasara festival in October turns Mysore into a royal spectacle — book hotels months in advance.",
    bestTime: "October to February (Dasara season and pleasant winter weather)"
  },

  shillong: {
    title: "Scotland of East Nature Yatra",
    tagline: "Living root bridges, cascading waterfalls, and lush emerald valleys",
    logistics: DESTINATION_LOGISTICS.shillong,
    highlights: ["Cherrapunji Living Root Bridges", "Elephant Falls Shillong", "Dawki Crystal River", "Don Bosco Museum"],
    activities: [
      {
        theme: "Living Root Bridges & Waterfalls",
        activities: [
          { timeOfDay: "Morning", locationName: "Nongriat Double Decker Living Root Bridge", googleMapsLink: makeGoogleMapsUrl("Double Decker Living Root Bridge Nongriat", "Cherrapunji"), description: "Trek 3,000 steps down to Nongriat village to see the world-famous double-decker living root bridges — 200-year-old ficus tree roots trained across rivers by Khasi tribespeople." },
          { timeOfDay: "Afternoon", locationName: "Nohkalikai Falls Cherrapunji", googleMapsLink: makeGoogleMapsUrl("Nohkalikai Falls", "Cherrapunji"), description: "Stand at the viewpoint of Nohkalikai Falls — India's tallest plunge waterfall at 340 metres, plunging into an emerald pool in a dramatic valley of the world's wettest place on Earth." },
          { timeOfDay: "Evening", locationName: "Elephant Falls Shillong", googleMapsLink: makeGoogleMapsUrl("Elephant Falls", "Shillong"), description: "Visit the three-tiered Elephant Falls cascading through a lush jungle gorge on the outskirts of Shillong — a serene evening escape from the city's buzzing Police Bazaar." }
        ],
        stay: { name: "Ri Kynmaw Shillong", type: "Heritage Colonial Boutique", whyPick: "Heritage property with Scottish architecture and valley views", approxRate: "₹4,000/night" },
        dining: [{ name: "Jadoh Street Stalls Shillong", specialty: "Jadoh Rice with Pork & Dohkhlieh", priceRange: "₹100-200" }, { name: "Dylan's Cafe Shillong", specialty: "Bamboo Shoot Curry & Filter Coffee", priceRange: "₹300-500" }]
      },
      {
        theme: "Crystal Rivers & Caves",
        activities: [
          { timeOfDay: "Morning", locationName: "Dawki Umngot River", googleMapsLink: makeGoogleMapsUrl("Dawki River", "Meghalaya"), description: "Arrive at the Bangladesh border village of Dawki for a boat ride on the crystal-clear Umngot River — so transparent that boats appear to float in mid-air over the pebbled riverbed." },
          { timeOfDay: "Afternoon", locationName: "Mawsmai Cave Cherrapunji", googleMapsLink: makeGoogleMapsUrl("Mawsmai Cave", "Cherrapunji"), description: "Squeeze through ancient limestone Mawsmai Cave with illuminated stalactites and stalagmites dripping in vivid formations — a short 150m walk through an otherworldly underground cavern." },
          { timeOfDay: "Evening", locationName: "Don Bosco Museum Shillong", googleMapsLink: makeGoogleMapsUrl("Don Bosco Museum", "Shillong"), description: "Explore 7 floors of Northeast India's finest cultural museum showcasing tribal costumes, instruments, jewellery, and artefacts of all 8 North-Eastern states under one roof." }
        ],
        stay: { name: "Hotel Polo Towers Shillong", type: "4-Star Business Hotel", whyPick: "Central city location with views of Wards Lake and the Shillong hills", approxRate: "₹3,500/night" },
        dining: [{ name: "City Hut Dhaba", specialty: "Meghalaya Pork with Bamboo Shoot", priceRange: "₹200-400" }]
      }
    ],
    mustTry: [
      { item: "Jadoh (Khasi Red Rice with Pork)", why: "Traditional Khasi tribal dish of red rice cooked with pork blood and intestines — the soul food of Meghalaya." },
      { item: "Tungrymbai", why: "Fermented soybean cake dish unique to Meghalaya — deeply aromatic and served with pork at local dhabas." },
      { item: "Cherrapunji Orange Honey", why: "Wild forest honey harvested by Khasi tribes from Cherrapunji's jungle flowers — intensely fragrant and rare." }
    ],
    packing: ["Waterproof jacket and rain boots (wettest place on Earth)", "Trekking shoes", "Quick-dry clothes", "Warm layer for evenings"],
    localInsights: "Cherrapunji trek to Root Bridges requires 4-5 hours minimum. Carry sufficient water and energy bars. Hire local guides for forest trails.",
    bestTime: "October to April (post-monsoon clarity and cooler weather for trekking)"
  },

  andaman: {
    title: "Andaman Island Paradise Yatra",
    tagline: "Pristine coral reefs, turquoise waters, and untouched tropical paradise",
    logistics: DESTINATION_LOGISTICS.andaman,
    highlights: ["Radhanagar Beach Sunset", "Cellular Jail Light & Sound Show", "Havelock Elephant Beach Snorkelling", "Ross Island Colonial Ruins"],
    activities: [
      {
        theme: "Colonial History & Beach Bliss",
        activities: [
          { timeOfDay: "Morning", locationName: "Cellular Jail Port Blair", googleMapsLink: makeGoogleMapsUrl("Cellular Jail National Memorial", "Port Blair Andaman"), description: "Visit the colonial-era Cellular Jail (Kala Pani) where Indian freedom fighters were imprisoned — a haunting seven-winged prison museum preserving solitary cells, gallows, and independence era history." },
          { timeOfDay: "Afternoon", locationName: "Ross Island Andaman", googleMapsLink: makeGoogleMapsUrl("Ross Island", "Port Blair Andaman"), description: "Take a 10-minute boat ride to explore the eerie ruins of the former British administrative capital — crumbling colonial bungalows overtaken by jungle roots and inhabited by friendly spotted deer." },
          { timeOfDay: "Evening", locationName: "Cellular Jail Sound and Light Show", googleMapsLink: makeGoogleMapsUrl("Cellular Jail Sound and Light Show", "Port Blair"), description: "Attend the powerful evening light-and-sound show at Cellular Jail narrating the stories of Indian freedom fighters — an emotionally moving historical experience with dramatic lighting." }
        ],
        stay: { name: "Taj Exotica Resort Andaman", type: "5-Star Luxury Beach Resort", whyPick: "Private beach, coral reef snorkelling, and overwater deck villa suites", approxRate: "₹22,000/night" },
        dining: [{ name: "Annapurna Restaurant Port Blair", specialty: "Andaman Fish Curry & Lobster", priceRange: "₹500-1000" }]
      },
      {
        theme: "Coral Reefs & Clear Waters",
        activities: [
          { timeOfDay: "Morning", locationName: "Elephant Beach Havelock", googleMapsLink: makeGoogleMapsUrl("Elephant Beach", "Havelock Island Andaman"), description: "Snorkel over the stunning shallow coral gardens of Elephant Beach on Havelock Island, with visibility up to 10 metres among colourful parrotfish, clownfish, and staghorn corals." },
          { timeOfDay: "Afternoon", locationName: "Radhanagar Beach Havelock", googleMapsLink: makeGoogleMapsUrl("Radhanagar Beach", "Havelock Island Andaman"), description: "Spend the afternoon at Radhanagar Beach — voted Asia's best beach by Time magazine, with pristine white sand flanked by ancient forest and crystal-clear azure water." },
          { timeOfDay: "Evening", locationName: "Neil Island Beach", googleMapsLink: makeGoogleMapsUrl("Neil Island Beach", "Andaman"), description: "Take the evening ferry to the laid-back Neil Island for bioluminescent beach night walks — where plankton make the shore glow blue-green in darkness (best in monsoon months)." }
        ],
        stay: { name: "Symphony Palms Beach Resort Havelock", type: "Beach Resort", whyPick: "Beachfront cottages with private hammocks beside Radhanagar Beach", approxRate: "₹8,000/night" },
        dining: [{ name: "Full Moon Cafe Havelock", specialty: "Grilled Barracuda & Coconut Rice", priceRange: "₹500-900" }]
      }
    ],
    mustTry: [
      { item: "Andaman Lobster & Barracuda", why: "Fresh-caught seafood grilled with coconut masala — the Andaman coast's finest dining experience." },
      { item: "SCUBA Diving at North Bay", why: "Experience the world-class coral gardens and sea turtles — Andaman offers India's best recreational diving." },
      { item: "Coconut Wine (Toddy)", why: "Local palm toddy tapped fresh from coconut palms — available at tribal villages on Little Andaman." }
    ],
    packing: ["Swimwear & rash guards", "Waterproof sandals", "Sunscreen SPF 70+ (equatorial UV)", "Underwater camera", "Insect repellent"],
    localInsights: "Restricted Areas Permit (RAP) required for some tribal areas — apply at Port Blair DC office. Inter-island ferries must be booked in advance.",
    bestTime: "November to May (clear seas and calm water for diving and snorkelling)"
  },

  amritsar: {
    title: "Golden City Spiritual Yatra",
    tagline: "Resplendent Golden Temple, Sikh heritage, and legendary Punjabi hospitality",
    logistics: DESTINATION_LOGISTICS.amritsar,
    highlights: ["Golden Temple Sarovar Dip", "Wagah Border Beating Retreat", "Jallianwala Bagh Memorial", "Langar Seva Experience"],
    activities: [
      {
        theme: "Golden Temple & Sacred Sarovar",
        activities: [
          { timeOfDay: "Morning", locationName: "Harmandir Sahib Golden Temple", googleMapsLink: makeGoogleMapsUrl("Golden Temple Harmandir Sahib", "Amritsar"), description: "Take a predawn holy dip in the Amrit Sarovar (Pool of Nectar) at 3 AM when the golden glow of the temple reflects on still water and the Asa di Var hymns echo in the morning quiet." },
          { timeOfDay: "Afternoon", locationName: "Jallianwala Bagh Amritsar", googleMapsLink: makeGoogleMapsUrl("Jallianwala Bagh", "Amritsar"), description: "Visit the garden memorial where 1,000+ Indians were massacred on April 13, 1919 by British troops under General Dyer. The bullet holes in the walls remain untouched as a sobering reminder." },
          { timeOfDay: "Evening", locationName: "Golden Temple Evening Palki Sahib", googleMapsLink: makeGoogleMapsUrl("Golden Temple Evening Ceremony", "Amritsar"), description: "Witness the deeply moving Palki Sahib ceremony at 10 PM where the Guru Granth Sahib (holy scripture) is carried in a golden palanquin from Akal Takht to its nightly resting place." }
        ],
        stay: { name: "Hyatt Amritsar", type: "5-Star Heritage Hotel", whyPick: "Panoramic views of Golden Temple from rooftop restaurant", approxRate: "₹7,000/night" },
        dining: [{ name: "Bharawan da Dhaba", specialty: "Amritsari Kulcha & Dal Makhani", priceRange: "₹200-400" }, { name: "Kesar Da Dhaba", specialty: "Amritsari Fish Fry & Lassi", priceRange: "₹300-600" }]
      },
      {
        theme: "Wagah Border & Langar Seva",
        activities: [
          { timeOfDay: "Morning", locationName: "Golden Temple Langar Hall", googleMapsLink: makeGoogleMapsUrl("Golden Temple Langar Hall", "Amritsar"), description: "Volunteer for Langar Seva (free community kitchen) serving 50,000-100,000 pilgrims daily regardless of religion or caste — wash dishes, serve food, or roll chapatis alongside volunteers." },
          { timeOfDay: "Afternoon", locationName: "Partition Museum Amritsar", googleMapsLink: makeGoogleMapsUrl("Partition Museum", "Amritsar"), description: "Visit India's first Partition Museum in Town Hall documenting the 1947 Partition through personal testimonials, photographs, and artefacts of the largest human migration in history." },
          { timeOfDay: "Evening", locationName: "Wagah Border Beating Retreat Ceremony", googleMapsLink: makeGoogleMapsUrl("Wagah Border", "Amritsar"), description: "Watch the electrifying daily Beating Retreat ceremony at the India-Pakistan border — 30,000 spectators cheering as BSF and Pakistani Rangers exchange flag-lowering drills at sunset." }
        ],
        stay: { name: "Golden Tulip Amritsar", type: "Boutique Heritage Hotel", whyPick: "Walking distance to Golden Temple with traditional Punjabi architecture", approxRate: "₹4,500/night" },
        dining: [{ name: "Brothers' Dhaba", specialty: "Makki di Roti & Sarson da Saag", priceRange: "₹150-350" }]
      }
    ],
    mustTry: [
      { item: "Amritsari Kulcha at Bharawan da Dhaba", why: "Stuffed potato flatbread baked in traditional tandoor with generous white butter — Amritsar's most legendary culinary dish." },
      { item: "Langar Ka Prasad", why: "The free simple dal-roti meal served at Golden Temple's community kitchen carries profound spiritual significance regardless of your faith." },
      { item: "Amritsari Fish Fry", why: "Carom-spiced crispy fried freshwater fish served with mint chutney — a beloved street food exclusive to Punjab." }
    ],
    packing: ["Modest clothing covering head (mandatory at Golden Temple)", "Comfortable flat walking shoes", "Head scarf or dupatta", "Light cotton clothes"],
    localInsights: "Remove shoes and cover heads before entering Golden Temple. Lockers available near entry. Book Wagah Border seats in advance for weekend shows.",
    bestTime: "October to March (cool and comfortable for sightseeing)"
  },

  madurai: {
    title: "Temple City Sacred Yatra",
    tagline: "Ancient Dravidian temples, jasmine markets, and living Tamil heritage",
    logistics: DESTINATION_LOGISTICS.madurai,
    highlights: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Mahal", "Gandhi Museum", "Vandiyur Mariamman Teppakulam"],
    activities: [
      {
        theme: "Grand Temples & Royal Palaces",
        activities: [
          { timeOfDay: "Morning", locationName: "Meenakshi Amman Temple Madurai", googleMapsLink: makeGoogleMapsUrl("Meenakshi Amman Temple", "Madurai"), description: "Explore the magnificent 17th-century temple complex dedicated to Goddess Meenakshi — with 14 towering gopurams covered in thousands of painted stucco sculptures and the Pottramarai golden lotus tank." },
          { timeOfDay: "Afternoon", locationName: "Thirumalai Nayakkar Mahal", googleMapsLink: makeGoogleMapsUrl("Thirumalai Nayakkar Palace", "Madurai"), description: "Visit the 17th-century Nayak king's royal palace with a massive 15-metre wide entrance hall, 248 pillars, and Indo-Saracenic architecture inspired by Italian Renaissance design." },
          { timeOfDay: "Evening", locationName: "Meenakshi Temple Night Closing Ceremony", googleMapsLink: makeGoogleMapsUrl("Meenakshi Temple Night Ceremony", "Madurai"), description: "Attend the dramatic daily closing ceremony at 9:30 PM when Lord Shiva's idol is carried from the temple in a procession to the bedchamber of Meenakshi — accompanied by devotional music." }
        ],
        stay: { name: "Heritage Madurai Hotel", type: "Heritage Boutique", whyPick: "Renovated 1920s British Club with temple views and heritage rooms", approxRate: "₹4,000/night" },
        dining: [{ name: "Murugan Idli Shop", specialty: "Mini Idli & Ghee Pongal", priceRange: "₹100-200" }, { name: "Amma Mess", specialty: "Chettinad Chicken Curry", priceRange: "₹200-400" }]
      },
      {
        theme: "Markets, Museums & Water Festivals",
        activities: [
          { timeOfDay: "Morning", locationName: "Madurai Flower Market", googleMapsLink: makeGoogleMapsUrl("Madurai Flower Market", "Madurai"), description: "At 5 AM, the world's largest jasmine flower market at Madurai erupts with colour — tonnes of fresh malligai (jasmine) garlands are traded for temple offerings and weddings." },
          { timeOfDay: "Afternoon", locationName: "Gandhi Museum Madurai", googleMapsLink: makeGoogleMapsUrl("Gandhi Museum", "Madurai"), description: "Visit the museum inside the 300-year-old Tamukkam Palace displaying Gandhi's blood-stained dhoti from his assassination, freedom movement photographs, and independence memorabilia." },
          { timeOfDay: "Evening", locationName: "Vandiyur Mariamman Teppakulam", googleMapsLink: makeGoogleMapsUrl("Vandiyur Mariamman Teppakulam", "Madurai"), description: "Walk around the massive 16th-century tank with a central island shrine, site of the famous annual Teppam (float) festival when the deity is carried on an illuminated floating raft." }
        ],
        stay: { name: "ITC Ginger Hotel Madurai", type: "Business Hotel", whyPick: "Centrally located near Meenakshi Temple with rooftop city views", approxRate: "₹3,000/night" },
        dining: [{ name: "Idli Mane", specialty: "Filter Coffee & Rava Idli", priceRange: "₹80-200" }]
      }
    ],
    mustTry: [
      { item: "Jigarthanda", why: "Madurai's iconic cold drink of milk, almond gum, nannari root syrup, and ice cream — invented in Madurai in the 1940s." },
      { item: "Chettinad Chicken Curry", why: "Fiery aromatic curry made with kalpasi (stone flower) and marathi mokku spices unique to Tamil Nadu's Chettinad region." },
      { item: "Mini Idli at Murugan Idli Shop", why: "Bite-sized soft idlis served with 5 different chutneys and ghee sambar — Madurai's most beloved breakfast spot." }
    ],
    packing: ["Modest clothing for temple visits (no shorts)", "Slip-on shoes for barefoot temple areas", "Carry cash for flower markets", "Sunscreen"],
    localInsights: "Meenakshi Temple closes 12:30-4 PM daily. Non-Hindus allowed in outer corridors only. Remove footwear at temple entrance.",
    bestTime: "October to February (cooler South Indian winter for comfortable temple visits)"
  },

  puri: {
    title: "Jagannath Dham Sacred Yatra",
    tagline: "Sacred Jagannath Temple, pristine golden beach, and Odisha's artistic heritage",
    logistics: DESTINATION_LOGISTICS.puri,
    highlights: ["Jagannath Temple Rath Yatra", "Konark Sun Temple", "Puri Beach Golden Sunrise", "Chilika Lake Dolphin Safari"],
    activities: [
      {
        theme: "Jagannath Temple & Sacred Rituals",
        activities: [
          { timeOfDay: "Morning", locationName: "Jagannath Temple Puri", googleMapsLink: makeGoogleMapsUrl("Jagannath Temple", "Puri"), description: "Witness the 6 AM Sahana Mela ceremony — the first ritual of the day when 120 daily rituals begin for Lord Jagannath. Non-Hindus may observe from the Raghunandan Library rooftop across the street." },
          { timeOfDay: "Afternoon", locationName: "Puri Beach Golden Sunrise Point", googleMapsLink: makeGoogleMapsUrl("Puri Beach", "Puri Odisha"), description: "Walk along the 7 km Puri beach watching local fishermen haul in traditional triangular kite-sail boats and mending nets along the Bay of Bengal shore." },
          { timeOfDay: "Evening", locationName: "Swargadwar Beach Puri", googleMapsLink: makeGoogleMapsUrl("Swargadwar Beach", "Puri"), description: "Watch the dramatic sunset at Swargadwar (Gate of Heaven) — the sacred cremation beach of Puri where Hindus believe attaining moksha through last rites on this shore." }
        ],
        stay: { name: "Mayfair Heritage Puri", type: "Heritage Beach Resort", whyPick: "Beachfront property with colonial bungalow architecture and sea-view pool", approxRate: "₹5,500/night" },
        dining: [{ name: "Wildgrass Restaurant Puri", specialty: "Dalma & Chhena Poda", priceRange: "₹300-600" }, { name: "Chung Wah Restaurant", specialty: "Prawn Malai Curry", priceRange: "₹400-700" }]
      },
      {
        theme: "Sun Temple & Chilika Lake",
        activities: [
          { timeOfDay: "Morning", locationName: "Konark Sun Temple", googleMapsLink: makeGoogleMapsUrl("Konark Sun Temple", "Odisha"), description: "Explore the 13th-century UNESCO Konark Sun Temple — a giant stone chariot for the sun god with 24 intricately carved wheels and 7 horses, covered in exquisite erotic Kalingan stone sculptures." },
          { timeOfDay: "Afternoon", locationName: "Chilika Lake Odisha", googleMapsLink: makeGoogleMapsUrl("Chilika Lake", "Odisha"), description: "Take a boat safari on Asia's largest brackish water lagoon (1,100 sq km) to spot irrawaddy dolphins and 160 species of migrating birds from Siberia, Iran, and the Himalayas." },
          { timeOfDay: "Evening", locationName: "Raghurajpur Heritage Village", googleMapsLink: makeGoogleMapsUrl("Raghurajpur Heritage Village", "Puri"), description: "Visit Odisha's heritage crafts village where every house is an artist's studio — home to Pattachitra palm-leaf painting, stone carving, and traditional Gotipua dance troupes." }
        ],
        stay: { name: "Hans Coco Palms Puri", type: "Beach Resort", whyPick: "Coconut grove resort with private beach access and Odisha cuisine restaurant", approxRate: "₹4,000/night" },
        dining: [{ name: "Peace Restaurant Puri", specialty: "Odia Dalma & Ghee Pitha", priceRange: "₹200-400" }]
      }
    ],
    mustTry: [
      { item: "Chhena Poda (Burnt Cheese Dessert)", why: "Lord Jagannath's favourite sweet — caramelised cottage cheese baked in a clay pot. Odisha's pride and unique dessert." },
      { item: "Dalma", why: "Odisha's signature dish of toor dal cooked with raw banana, raw papaya, and vegetables — the prasad meal of Jagannath Temple." },
      { item: "Pattachitra Paintings", why: "Raghurajpur village's palm-leaf narrative paintings depicting Jagannath stories are Odisha's finest handicraft to take home." }
    ],
    packing: ["Modest clothing (no shorts near Jagannath Temple)", "Sunscreen for beach walks", "Comfortable walking shoes", "Camera for temple sculptures"],
    localInsights: "Non-Hindus cannot enter Jagannath Temple inner sanctum. Rath Yatra chariot festival (June-July) draws 1 million pilgrims — book months in advance.",
    bestTime: "November to February (cool coastal weather; avoid summer heat and monsoon rough seas)"
  },

  darjeeling: {
    title: "Queen of Hills Tea Heritage Yatra",
    tagline: "Toy trains, Himalayan panoramas, and the world's finest tea gardens",
    logistics: DESTINATION_LOGISTICS.darjeeling,
    highlights: ["Tiger Hill Kanchenjunga Sunrise", "Darjeeling Himalayan Railway UNESCO", "Happy Valley Tea Estate", "Padmaja Naidu Zoo Red Pandas"],
    activities: [
      {
        theme: "Sunrise Over Kanchenjunga",
        activities: [
          { timeOfDay: "Morning", locationName: "Tiger Hill Darjeeling", googleMapsLink: makeGoogleMapsUrl("Tiger Hill", "Darjeeling"), description: "Wake at 4 AM for the 11 km drive to Tiger Hill (2,590 m) — Darjeeling's most iconic experience where the third-highest peak Kanchenjunga turns blazing gold at sunrise, with Everest visible on clear days." },
          { timeOfDay: "Afternoon", locationName: "Happy Valley Tea Estate", googleMapsLink: makeGoogleMapsUrl("Happy Valley Tea Estate", "Darjeeling"), description: "Tour one of Darjeeling's oldest working tea estates — walk the manicured tea rows, watch expert pluckers harvest two-leaf-and-a-bud, and taste fresh-brewed first-flush Darjeeling tea." },
          { timeOfDay: "Evening", locationName: "Chowrasta Mall Darjeeling", googleMapsLink: makeGoogleMapsUrl("Chowrasta Mall", "Darjeeling"), description: "Stroll along the colonial-era promenade at Chowrasta, the social heart of Darjeeling, with mountain views, horse riding, local snack vendors, and the iconic Keventer's cafe." }
        ],
        stay: { name: "The Elgin Darjeeling", type: "Colonial Heritage Hotel", whyPick: "1887 colonial estate with Kanchenjunga views, fireplaces and tea garden", approxRate: "₹8,000/night" },
        dining: [{ name: "Glenary's Restaurant", specialty: "Darjeeling Tea & Mutton Curry", priceRange: "₹400-700" }, { name: "Keventers Darjeeling", specialty: "Breakfast Full English", priceRange: "₹300-600" }]
      },
      {
        theme: "Toy Train & Red Panda Trails",
        activities: [
          { timeOfDay: "Morning", locationName: "Darjeeling Himalayan Railway Toy Train", googleMapsLink: makeGoogleMapsUrl("Darjeeling Himalayan Railway", "Darjeeling"), description: "Board the UNESCO World Heritage Darjeeling Himalayan Railway toy train for the 2-hour joyride to Ghum — the world's highest railway station — through mountain loops and switchbacks." },
          { timeOfDay: "Afternoon", locationName: "Padmaja Naidu Himalayan Zoological Park", googleMapsLink: makeGoogleMapsUrl("Padmaja Naidu Zoo", "Darjeeling"), description: "Visit one of India's most successful high-altitude zoos housing red pandas, snow leopards, Siberian tigers, and Himalayan wolves in open enclosures at 2,134 m altitude." },
          { timeOfDay: "Evening", locationName: "Peace Pagoda Darjeeling", googleMapsLink: makeGoogleMapsUrl("Peace Pagoda", "Darjeeling"), description: "Walk up to the Japanese-built World Peace Pagoda for stunning 360-degree views of Kanchenjunga, the Darjeeling hills, and the winding railway tracks below." }
        ],
        stay: { name: "Windamere Hotel Darjeeling", type: "Heritage Colonial Hotel", whyPick: "1900s colonial-era hotel on Observatory Hill with fireplace suites", approxRate: "₹6,500/night" },
        dining: [{ name: "Gatty's Cafe Darjeeling", specialty: "Tibetan Thukpa & Momos", priceRange: "₹200-400" }]
      }
    ],
    mustTry: [
      { item: "First-Flush Darjeeling Tea", why: "February-April first harvest teas are the world's most prized, with a delicate muscatel grape-like aroma — buy direct from estates." },
      { item: "Sel Roti", why: "Crispy deep-fried Nepali rice doughnut cooked in ghee — a beloved Darjeeling breakfast street food." },
      { item: "Steam Momo at Chowrasta", why: "Thick-skin Himalayan dumplings stuffed with pork and ginger, served with spicy Sikkimese chilli sauce." }
    ],
    packing: ["Warm down jacket (cold year-round)", "Layered woollens", "Waterproof jacket", "Comfortable walking shoes", "Binoculars for birdwatching"],
    localInsights: "Tiger Hill jeep convoy departs at 4 AM — book shared jeeps from Chowrasta the previous evening. Toy train joy rides from Darjeeling to Ghum are immensely popular.",
    bestTime: "March to May (clear skies for Kanchenjunga views) and October to November (post-monsoon clarity)"
  },

  coorg: {
    title: "Scotland of India Coffee Yatra",
    tagline: "Misty coffee hills, cascading waterfalls, and Kodava warrior culture",
    logistics: DESTINATION_LOGISTICS.coorg,
    highlights: ["Abbey Falls Coorg", "Nagarhole National Park Safari", "Dubare Elephant Camp", "Raja's Seat Sunset"],
    activities: [
      {
        theme: "Coffee Estates & Waterfalls",
        activities: [
          { timeOfDay: "Morning", locationName: "Abbey Falls Coorg", googleMapsLink: makeGoogleMapsUrl("Abbey Falls", "Coorg"), description: "Trek through a coffee and spice plantation trail to reach the dramatic Abbey Falls — a 70-foot waterfall tumbling through a dense curtain of ferns and overhanging vines in the Western Ghats forest." },
          { timeOfDay: "Afternoon", locationName: "Coorg Coffee Plantation Tour", googleMapsLink: makeGoogleMapsUrl("Coffee Plantation Estate", "Coorg"), description: "Walk through working Arabica coffee estates to witness the harvest, wet processing, drying, and roasting of Coorg's famous single-estate coffee beans, followed by a cupping session." },
          { timeOfDay: "Evening", locationName: "Raja's Seat Madikeri", googleMapsLink: makeGoogleMapsUrl("Raja's Seat", "Madikeri Coorg"), description: "Watch sunset from Raja's Seat — the king's favourite hilltop garden in Madikeri with panoramic views of the Western Ghats, spice valleys, and the evening mist rolling in over the hills." }
        ],
        stay: { name: "Orange County Coorg", type: "Luxury Jungle Resort", whyPick: "Private pool villas inside a working coffee estate with wildlife viewings", approxRate: "₹18,000/night" },
        dining: [{ name: "Coorg Cuisine Restaurant", specialty: "Pandi Curry & Kadumbuttu", priceRange: "₹400-700" }, { name: "Raintree Cafe", specialty: "Coorg Honey & Coffee Pancakes", priceRange: "₹300-500" }]
      },
      {
        theme: "Wildlife & Elephant Encounters",
        activities: [
          { timeOfDay: "Morning", locationName: "Nagarhole National Park", googleMapsLink: makeGoogleMapsUrl("Nagarhole National Park", "Coorg"), description: "Go on a dawn jeep safari through Nagarhole Tiger Reserve — home to leopards, wild Asian elephants, gaur bison, and over 300 bird species in the dense Kabini riverine forests." },
          { timeOfDay: "Afternoon", locationName: "Dubare Elephant Camp", googleMapsLink: makeGoogleMapsUrl("Dubare Elephant Camp", "Coorg"), description: "Spend 2 hours bathing, scrubbing, and feeding working forest elephants at the Dubare Conservation Camp on the Cauvery River — an ethical and deeply memorable wildlife experience." },
          { timeOfDay: "Evening", locationName: "Brahmagiri Wildlife Sanctuary", googleMapsLink: makeGoogleMapsUrl("Brahmagiri Wildlife Sanctuary", "Coorg"), description: "Trek the Brahmagiri Hills trail through shola grassland to watch sunset over the Nilgiri biosphere and spot Malabar giant squirrels gliding between ancient trees." }
        ],
        stay: { name: "Evolve Back Kuruba Safari Lodge", type: "Eco Luxury Lodge", whyPick: "Private cottage inside Nagarhole Buffer zone with elephant visits to camp", approxRate: "₹14,000/night" },
        dining: [{ name: "Athithya Homestay Kitchen", specialty: "Traditional Kodava Pork Curry", priceRange: "Homestay inclusive" }]
      }
    ],
    mustTry: [
      { item: "Pandi Curry (Coorg Pork)", why: "Slow-cooked pork with Kodampuli black vinegar — the signature warrior dish of Coorg's Kodava community." },
      { item: "Coorg Single Origin Coffee", why: "Buy fresh-roasted Arabica beans directly from estate — the world-famous Coorg coffee has a wine-like fruity acidity." },
      { item: "Akki Rotti", why: "Rice flour flatbread cooked on a tawa with coconut and served with sambar — essential Coorg breakfast dish." }
    ],
    packing: ["Warm layers (cool misty mornings)", "Waterproof jacket", "Insect repellent", "Trekking shoes", "Binoculars for wildlife"],
    localInsights: "Nagarhole jeep safaris must be booked through Forest Department 24 hours in advance. Leeches active during monsoon — carry salt packets.",
    bestTime: "October to May (post-monsoon greenery and pleasant coffee-picking season)"
  },

  ooty: {
    title: "Nilgiri Queen of Hills Yatra",
    tagline: "Botanical gardens, toy train magic, and rolling Nilgiri tea estates",
    logistics: DESTINATION_LOGISTICS.ooty,
    highlights: ["Nilgiri Mountain Railway Toy Train", "Ooty Botanical Gardens", "Doddabetta Peak Observatory", "Ooty Lake Boat Club"],
    activities: [
      {
        theme: "Botanical Gardens & Toy Train",
        activities: [
          { timeOfDay: "Morning", locationName: "Government Botanical Gardens Ooty", googleMapsLink: makeGoogleMapsUrl("Government Botanical Gardens", "Ooty"), description: "Stroll through the 22-hectare UNESCO-listed botanical garden established in 1848 by the Marquis of Tweeddale — home to a 20-million-year-old fossilised tree trunk and 650 plant species." },
          { timeOfDay: "Afternoon", locationName: "Nilgiri Mountain Railway Ooty", googleMapsLink: makeGoogleMapsUrl("Nilgiri Mountain Railway", "Ooty"), description: "Ride the UNESCO Heritage Nilgiri Mountain Railway toy train — a Swiss-engineered rack-and-pinion rack railway that zigzags through 16 tunnels and 250 bridges from Mettupalayam to Ooty." },
          { timeOfDay: "Evening", locationName: "Ooty Lake Boating Club", googleMapsLink: makeGoogleMapsUrl("Ooty Lake", "Ooty"), description: "Row or pedal a boat across the 2.5 km artificial Ooty Lake created in 1824, surrounded by eucalyptus forests and Nilgiri tea slopes glowing in the golden evening light." }
        ],
        stay: { name: "Savoy Hotel Ooty", type: "Colonial Heritage Hotel", whyPick: "1829 colonial property with private cottage suites set in manicured gardens", approxRate: "₹6,500/night" },
        dining: [{ name: "Willy's Coffee Pub Ooty", specialty: "Nilgiri Chayamalli Tea & Honey Cake", priceRange: "₹300-500" }, { name: "Hotel Sarvana Ooty", specialty: "Ooty Varkey & Nilgiri Biryani", priceRange: "₹200-450" }]
      },
      {
        theme: "Tea Estates & Hilltop Views",
        activities: [
          { timeOfDay: "Morning", locationName: "Doddabetta Peak Ooty", googleMapsLink: makeGoogleMapsUrl("Doddabetta Peak", "Ooty"), description: "Drive up to Doddabetta (2,637 m) — the highest peak in the Nilgiri Hills — for 360-degree panoramic views of the Coimbatore plains, Kerala hills, and Mysore Plateau." },
          { timeOfDay: "Afternoon", locationName: "Tea Factory Tour Ooty", googleMapsLink: makeGoogleMapsUrl("Tea Factory Ooty", "Nilgiri"), description: "Visit a working Nilgiri tea factory to witness the entire manufacturing process from withering and rolling to drying and grading of the famous Nilgiri Orthodox black tea leaves." },
          { timeOfDay: "Evening", locationName: "Rose Garden Ooty", googleMapsLink: makeGoogleMapsUrl("Rose Garden", "Ooty"), description: "Walk through Asia's largest rose garden at dusk — over 2,000 rose varieties bloom across 22 terraced acres on the slopes of the Elk Hill, best experienced in May when all varieties bloom." }
        ],
        stay: { name: "Sterling Ooty Fern Hill", type: "Heritage Resort", whyPick: "Restored 1830s Maharaja of Mysore summer palace cottages", approxRate: "₹5,000/night" },
        dining: [{ name: "Hyderabad Biryani House Ooty", specialty: "Nilgiri Mutton Biryani", priceRange: "₹300-600" }]
      }
    ],
    mustTry: [
      { item: "Nilgiri Tea Tasting", why: "Ooty's high-grown Nilgiri tea has a distinctive fresh, brisk flavour — taste-test at estate factories before buying." },
      { item: "Homemade Ooty Chocolate", why: "Ooty cottage industries produce handmade chocolate bars with local almonds and cardamom — available at shops near Botanical Garden." },
      { item: "Nilgiri Biryani", why: "A fragrant green herb-infused rice preparation unique to the Nilgiri region, typically served with local wild boar or mutton." }
    ],
    packing: ["Warm fleece (cold nights year-round at 2,240 m)", "Waterproof jacket", "Walking shoes", "Sunscreen (high UV at altitude)"],
    localInsights: "Nilgiri Mountain Railway tickets sell out months in advance during summer — book on IRCTC. Ooty is most beautiful in April-May when Botanical Garden shows full bloom.",
    bestTime: "April to June (spring bloom) and September to November (post-monsoon clear skies)"
  }
};

// Normalize any raw itinerary structure to consistent format
export function normalizeItinerary(rawItinerary, tripData) {
  const destName = tripData.destinationName || tripData.destination || rawItinerary?.destination || "India";
  const key = destName.toLowerCase().replace(/[^a-z0-9]/g, "");

  let logistics = rawItinerary?.logistics;
  if (!logistics || !logistics.nearest_railway_station) {
    const matchedKey = Object.keys(DESTINATION_LOGISTICS).find(k => key.includes(k.replace(/[^a-z0-9]/g, "")));
    if (matchedKey) {
      logistics = DESTINATION_LOGISTICS[matchedKey];
    } else {
      logistics = {
        nearest_railway_station: `${destName} Central Railway Station`,
        distance_to_railway_km: "4 km",
        nearest_airport: `${destName} Airport`,
        distance_to_airport_km: "18 km"
      };
    }
  }

  let daysList = rawItinerary?.days || rawItinerary?.itinerary || [];
  if (!Array.isArray(daysList) || daysList.length === 0) daysList = [];

  const normalizedDays = daysList.map((d, idx) => {
    const dayNum = d.day || idx + 1;
    let activities = [];

    if (Array.isArray(d.activities) && d.activities.length > 0) {
      activities = d.activities.map(act => {
        const loc = act.locationName || act.activity || "Popular Attraction";
        return {
          timeOfDay: act.timeOfDay || act.time || "Morning",
          locationName: loc,
          googleMapsLink: act.googleMapsLink || makeGoogleMapsUrl(loc, destName),
          description: act.description || `Explore ${loc} in ${destName}.`
        };
      });
    } else {
      ["morning", "afternoon", "evening"].forEach(period => {
        if (d[period]) {
          const item = d[period];
          const loc = item.locationName || item.activity || item.act || `${period} Sightseeing`;
          activities.push({
            timeOfDay: period.charAt(0).toUpperCase() + period.slice(1),
            locationName: loc,
            googleMapsLink: item.googleMapsLink || makeGoogleMapsUrl(loc, destName),
            description: item.description || item.desc || `Visit ${loc} in ${destName}.`
          });
        }
      });
    }

    const morningAct = activities.find(a => a.timeOfDay.toLowerCase() === "morning") || activities[0];
    const afternoonAct = activities.find(a => a.timeOfDay.toLowerCase() === "afternoon") || activities[1];
    const eveningAct = activities.find(a => a.timeOfDay.toLowerCase() === "evening") || activities[2];

    return {
      day: dayNum,
      date: d.date || `Day ${dayNum}`,
      theme: d.theme || "Heritage & Cultural Exploration",
      activities: activities,
      morning: morningAct ? { time: "08:30 AM", activity: morningAct.locationName, locationName: morningAct.locationName, googleMapsLink: morningAct.googleMapsLink, description: morningAct.description, estimatedCost: "₹200 - ₹500" } : undefined,
      afternoon: afternoonAct ? { time: "01:00 PM", activity: afternoonAct.locationName, locationName: afternoonAct.locationName, googleMapsLink: afternoonAct.googleMapsLink, description: afternoonAct.description, estimatedCost: "₹300 - ₹600" } : undefined,
      evening: eveningAct ? { time: "06:00 PM", activity: eveningAct.locationName, locationName: eveningAct.locationName, googleMapsLink: eveningAct.googleMapsLink, description: eveningAct.description, estimatedCost: "₹100 - ₹400" } : undefined,
      stayRecommendation: d.stayRecommendation || d.stay || { name: `Heritage Stay ${destName}`, type: "Comfort Hotel", whyPick: "Centrally located with serene views", approxRate: "₹3,500/night" },
      diningSpots: d.diningSpots || d.dining || [{ name: `${destName} Local Kitchen`, specialty: "Authentic Regional Cuisine", priceRange: "₹250-500" }]
    };
  });

  return {
    destination: destName,
    logistics: logistics,
    tripTitle: rawItinerary?.tripTitle || `${destName} Handcrafted Yatra`,
    tagline: rawItinerary?.tagline || `A curated travel itinerary for ${destName}`,
    highlights: rawItinerary?.highlights || [`Iconic landmarks of ${destName}`, "Local culture and cuisine", "Scenic viewpoints"],
    days: normalizedDays,
    itinerary: normalizedDays,
    mustTry: rawItinerary?.mustTry || [{ item: `${destName} Local Speciality`, why: "Famous regional delicacy." }],
    packingEssentials: rawItinerary?.packingEssentials || ["Comfortable footwear", "Sunscreen SPF 50+", "Refillable water bottle"],
    localInsights: rawItinerary?.localInsights || `Auto-rickshaws and taxis are easily available in ${destName}.`,
    bestTimeToVisit: rawItinerary?.bestTimeToVisit || "October to March offers pleasant weather.",
    budgetSummary: rawItinerary?.budgetSummary || estimateBudget(tripData.days || 3, tripData.travellers || 2, tripData.budget || "Comfort")
  };
}

// Smart Fallback Engine — uses real destination DB with rotation across days
export function generateGenericFallback(tripData) {
  const destName = tripData.destinationName || tripData.destination || "India";
  const days = Math.max(1, tripData.days || 3);
  const key = destName.toLowerCase().replace(/[^a-z0-9]/g, "");

  const matchedKey = Object.keys(DESTINATION_DATABASE).find(k => key.includes(k));
  const dbEntry = matchedKey ? DESTINATION_DATABASE[matchedKey] : null;

  if (dbEntry) {
    const daysArr = [];
    for (let i = 0; i < days; i++) {
      // Rotate through available activity sets — each day gets a DIFFERENT set
      const actIdx = i % dbEntry.activities.length;
      const t = dbEntry.activities[actIdx];
      daysArr.push({
        day: i + 1,
        date: `Day ${i + 1}`,
        theme: t.theme,
        activities: t.activities,
        stayRecommendation: t.stay,
        diningSpots: t.dining
      });
    }

    return normalizeItinerary({
      destination: destName,
      logistics: dbEntry.logistics,
      tripTitle: dbEntry.title,
      tagline: dbEntry.tagline,
      highlights: dbEntry.highlights,
      days: daysArr,
      mustTry: dbEntry.mustTry,
      packingEssentials: dbEntry.packing,
      localInsights: dbEntry.localInsights,
      bestTimeToVisit: dbEntry.bestTime
    }, tripData);
  }

  // Fallback for destinations not in DB — generate meaningful activities
  const genericActivitiesByDay = [
    [
      { timeOfDay: "Morning", locationName: `${destName} Main Historical Monument`, googleMapsLink: makeGoogleMapsUrl(`${destName} Historical Monument`, destName), description: `Start your day at the most iconic historical site of ${destName}. This landmark defines the heritage and cultural identity of the region.` },
      { timeOfDay: "Afternoon", locationName: `${destName} Local Museum`, googleMapsLink: makeGoogleMapsUrl(`${destName} Museum`, destName), description: `Explore the regional museum showcasing artefacts, artworks, and the historical narrative of ${destName} and its surrounding region.` },
      { timeOfDay: "Evening", locationName: `${destName} Main Bazaar`, googleMapsLink: makeGoogleMapsUrl(`${destName} Main Market`, destName), description: `Stroll through the lively main market of ${destName} sampling street food, shopping for local handicrafts, and soaking in the local evening atmosphere.` }
    ],
    [
      { timeOfDay: "Morning", locationName: `${destName} Famous Temple or Sacred Site`, googleMapsLink: makeGoogleMapsUrl(`${destName} Temple`, destName), description: `Visit the most revered religious or spiritual site of ${destName} in the serene morning hours when devotees gather for prayers.` },
      { timeOfDay: "Afternoon", locationName: `${destName} Nature Park or Garden`, googleMapsLink: makeGoogleMapsUrl(`${destName} Nature Park`, destName), description: `Spend the afternoon at the famous natural attraction or botanical garden of ${destName}, perfect for a leisurely walk.` },
      { timeOfDay: "Evening", locationName: `${destName} Riverside or Waterfront`, googleMapsLink: makeGoogleMapsUrl(`${destName} Waterfront`, destName), description: `Watch the golden evening light from the riverside or waterfront area of ${destName}, a favourite sunset spot for locals and tourists.` }
    ],
    [
      { timeOfDay: "Morning", locationName: `${destName} Hilltop Viewpoint`, googleMapsLink: makeGoogleMapsUrl(`${destName} Viewpoint`, destName), description: `Hike or drive to the famous hilltop viewpoint for sweeping panoramic views of ${destName} and the surrounding landscape.` },
      { timeOfDay: "Afternoon", locationName: `${destName} Artisan Craft Village`, googleMapsLink: makeGoogleMapsUrl(`${destName} Craft Village`, destName), description: `Visit the renowned artisan village or handicraft centre where traditional crafts unique to ${destName} are made and sold.` },
      { timeOfDay: "Evening", locationName: `${destName} Cultural Performance Venue`, googleMapsLink: makeGoogleMapsUrl(`${destName} Cultural Show`, destName), description: `Watch authentic local folk dance and cultural performances — the perfect way to experience the living traditions of ${destName}.` }
    ]
  ];

  const genericDays = [];
  for (let i = 0; i < days; i++) {
    const actSet = genericActivitiesByDay[i % genericActivitiesByDay.length];
    genericDays.push({
      day: i + 1,
      date: `Day ${i + 1}`,
      theme: i === 0 ? `Arrival & Iconic Landmarks` : i === days - 1 ? "Culture & Departure" : "Exploration & Local Culture",
      activities: actSet
    });
  }

  return normalizeItinerary({
    destination: destName,
    tripTitle: `Curated ${destName} Yatra`,
    tagline: `A handpicked journey through the finest landmarks & experiences of ${destName}`,
    highlights: [`Iconic landmarks of ${destName}`, "Authentic regional culinary trail", "Local artisan and bazaar walks"],
    days: genericDays
  }, tripData);
}

// Pollinations AI Fallback (Free Serverless)
async function generateViaPollinationsAI(prompt, tripData) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        messages: [
          { role: "system", content: "You are an expert India travel concierge. Respond ONLY with raw valid JSON matching the exact schema requested, no markdown, no conversational text." },
          { role: "user", content: prompt }
        ],
        jsonMode: true
      }),
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`Pollinations HTTP ${response.status}`);
    const text = await response.text();
    if (!text) throw new Error("Empty response from Pollinations");

    const cleanJson = text.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim();
    const itinerary = JSON.parse(cleanJson);

    if (itinerary && (itinerary.days || itinerary.itinerary)) {
      return { success: true, data: normalizeItinerary(itinerary, tripData), model: "BharatDarshan AI (Pollinations)", isDemoMode: false };
    }
    throw new Error("Invalid itinerary JSON structure");
  } catch (err) {
    console.warn("[AIYatraEngine] Pollinations AI fallback failed:", err.message);
    return null;
  }
}

export async function generateAIItinerary(tripData) {
  const destName = tripData.destinationName || tripData.destination || "India";
  const prompt = `You are an expert local travel guide for India. Create a highly accurate, realistic, and unique ${tripData.days}-day travel itinerary for ${destName}.

Origin: ${tripData.origin}
Destination: ${destName}
Travel Dates: ${tripData.startDate} to ${tripData.endDate}
Travellers: ${tripData.travellers} person(s)
Budget: ${tripData.budget}
Trip Type: ${tripData.tripType}

STRICT CONSTRAINTS:
1. NO GENERIC DATA: Do not use generic placeholders. Each day must have DIFFERENT specific real locations.
2. REAL LOCATIONS: Use only actual famous tourist attractions, monuments, and local markets in ${destName}.
3. ACCURATE LOGISTICS: Include real nearest railway station name and airport name with realistic distances.
4. GOOGLE MAPS: Every activity must have: https://www.google.com/maps/search/?api=1&query=[Location+Name+${destName.replace(/\s+/g, '+')}]
5. Return ONLY valid JSON with this schema:

{
  "destination": "${destName}",
  "logistics": { "nearest_railway_station": "Real station name", "distance_to_railway_km": "X km", "nearest_airport": "Real airport name", "distance_to_airport_km": "X km" },
  "tripTitle": "Title",
  "tagline": "Tagline",
  "highlights": ["H1", "H2", "H3", "H4"],
  "days": [
    {
      "day": 1,
      "date": "Day 1",
      "theme": "Specific Day Theme",
      "activities": [
        { "timeOfDay": "Morning", "locationName": "REAL specific place name", "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Real+Place+${destName.replace(/\s+/g, '+')}", "description": "Two specific sentences about what to do here." },
        { "timeOfDay": "Afternoon", "locationName": "DIFFERENT real specific place", "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Different+Place+${destName.replace(/\s+/g, '+')}", "description": "Two specific sentences about what to do here." },
        { "timeOfDay": "Evening", "locationName": "ANOTHER different real place", "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Evening+Place+${destName.replace(/\s+/g, '+')}", "description": "Two specific sentences about what to do here." }
      ],
      "stayRecommendation": { "name": "Real Hotel Name", "type": "Hotel Type", "whyPick": "Reason", "approxRate": "₹X,XXX/night" },
      "diningSpots": [{ "name": "Real Restaurant", "specialty": "Local Dish", "priceRange": "₹XX-XX" }]
    }
  ],
  "mustTry": [{ "item": "Real local item", "why": "Specific reason" }],
  "packingEssentials": ["Item 1", "Item 2"],
  "localInsights": "Practical tips",
  "bestTimeToVisit": "Best months and why",
  "budgetSummary": { "accommodation": "₹X", "food": "₹X", "transport": "₹X", "activities": "₹X", "estimatedTotal": "₹X" }
}`;

  // Step 1: Gemini API
  if (GEMINI_API_KEY && GEMINI_API_KEY.startsWith("AIzaSy")) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

      const response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 8192, responseMimeType: "application/json" },
        }),
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const json = await response.json();
        const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          const cleanJson = text.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim();
          const itinerary = JSON.parse(cleanJson);
          return { success: true, data: normalizeItinerary(itinerary, tripData), model: "Gemini 1.5 Flash", isDemoMode: false };
        }
      }
    } catch (err) {
      console.warn("[AIYatraEngine] Gemini API call failed:", err.message);
    }
  }

  // Step 2: Pollinations AI
  const pollinationsResult = await generateViaPollinationsAI(prompt, tripData);
  if (pollinationsResult) return pollinationsResult;

  // Step 3: Smart Curated Engine
  console.warn("[AIYatraEngine] Loading smart curated destination engine.");
  return { success: true, data: generateGenericFallback(tripData), model: "Smart Curated Engine", isDemoMode: true };
}

export function estimateBudget(days, travellers, tier) {
  const rates = {
    Budget: { stay: 1200, food: 600, transport: 500, activities: 400 },
    Comfort: { stay: 3500, food: 1200, transport: 1200, activities: 1000 },
    Luxury: { stay: 8500, food: 2500, transport: 3000, activities: 2500 },
    Royal: { stay: 18000, food: 5000, transport: 6000, activities: 5000 },
  };
  const r = rates[tier] || rates.Comfort;
  const stay = r.stay * days;
  const food = r.food * days * travellers;
  const transport = r.transport * days;
  const activities = r.activities * travellers;
  const subtotal = stay + food + transport + activities;
  const total = subtotal + Math.round(subtotal * 0.05);

  return {
    accommodation: `₹${stay.toLocaleString("en-IN")}`,
    food: `₹${food.toLocaleString("en-IN")}`,
    transport: `₹${transport.toLocaleString("en-IN")}`,
    activities: `₹${activities.toLocaleString("en-IN")}`,
    estimatedTotal: `₹${total.toLocaleString("en-IN")} for ${travellers} person(s)`
  };
}
