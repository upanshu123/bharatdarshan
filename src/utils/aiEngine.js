/**
 * AI Yatra Engine - Gemini 3.6 Flash Integration with Smart Fallback System
 * Plan My Yatra | Bharat Darshan Ecosystem
 */

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.5-flash";

export function makeGoogleMapsUrl(locationName, destName) {
  const query = `${locationName} ${destName}`.trim().replace(/\s+/g, '+');
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export const DESTINATION_LOGISTICS = {
  jaipur: {
    nearest_railway_station: "Jaipur Junction Railway Station (JP)",
    distance_to_railway_km: "3 km",
    nearest_airport: "Jaipur International Airport (JAI)",
    distance_to_airport_km: "12 km"
  },
  udaipur: {
    nearest_railway_station: "Udaipur City Railway Station (UDZ)",
    distance_to_railway_km: "2.5 km",
    nearest_airport: "Maharana Pratap Airport (UDR)",
    distance_to_airport_km: "22 km"
  },
  jodhpur: {
    nearest_railway_station: "Jodhpur Junction Railway Station (JU)",
    distance_to_railway_km: "3 km",
    nearest_airport: "Jodhpur Airport (JDH)",
    distance_to_airport_km: "5 km"
  },
  varanasi: {
    nearest_railway_station: "Varanasi Junction / Cantt Railway Station (BSB)",
    distance_to_railway_km: "4 km",
    nearest_airport: "Lal Bahadur Shastri International Airport (VNS)",
    distance_to_airport_km: "24 km"
  },
  agra: {
    nearest_railway_station: "Agra Cantt Railway Station (AGC)",
    distance_to_railway_km: "4 km",
    nearest_airport: "Agra Airport / Kheria Airport (AGR)",
    distance_to_airport_km: "8 km"
  },
  rishikesh: {
    nearest_railway_station: "Yog Nagari Rishikesh Railway Station (YNRK)",
    distance_to_railway_km: "3 km",
    nearest_airport: "Jolly Grant Airport Dehradun (DED)",
    distance_to_airport_km: "21 km"
  },
  manali: {
    nearest_railway_station: "Chandigarh Junction Railway Station (CDG)",
    distance_to_railway_km: "295 km",
    nearest_airport: "Bhuntar Kullu-Manali Airport (KUU)",
    distance_to_airport_km: "50 km"
  },
  shimla: {
    nearest_railway_station: "Shimla Railway Station (SML)",
    distance_to_railway_km: "1.5 km",
    nearest_airport: "Jubbarhatti Airport Shimla (SLV)",
    distance_to_airport_km: "22 km"
  },
  "leh-ladakh": {
    nearest_railway_station: "Jammu Tawi Railway Station (JAT)",
    distance_to_railway_km: "680 km",
    nearest_airport: "Kushok Bakula Rimpochee Airport Leh (IXL)",
    distance_to_airport_km: "4 km"
  },
  kerala: {
    nearest_railway_station: "Alappuzha Railway Station (ALLP)",
    distance_to_railway_km: "4 km",
    nearest_airport: "Cochin International Airport (COK)",
    distance_to_airport_km: "83 km"
  },
  munnar: {
    nearest_railway_station: "Aluva Railway Station (AWY)",
    distance_to_railway_km: "110 km",
    nearest_airport: "Cochin International Airport (COK)",
    distance_to_airport_km: "110 km"
  },
  goa: {
    nearest_railway_station: "Madgaon Junction Railway Station (MAO)",
    distance_to_railway_km: "28 km",
    nearest_airport: "Dabolim Airport (GOI)",
    distance_to_airport_km: "26 km"
  },
  hampi: {
    nearest_railway_station: "Hosapete Junction Railway Station (HPT)",
    distance_to_railway_km: "13 km",
    nearest_airport: "Jindal Vijayanagar Airport (VDY)",
    distance_to_airport_km: "35 km"
  },
  mysore: {
    nearest_railway_station: "Mysuru Junction Railway Station (MYS)",
    distance_to_railway_km: "2 km",
    nearest_airport: "Mysore Airport (MYQ)",
    distance_to_airport_km: "12 km"
  },
  shillong: {
    nearest_railway_station: "Guwahati Railway Station (GHY)",
    distance_to_railway_km: "98 km",
    nearest_airport: "Shillong Airport Umroi (SHL)",
    distance_to_airport_km: "30 km"
  },
  andaman: {
    nearest_railway_station: "Port Blair Marine Jetty Hub",
    distance_to_railway_km: "2 km",
    nearest_airport: "Veer Savarkar International Airport Port Blair (IXZ)",
    distance_to_airport_km: "4 km"
  },
  amritsar: {
    nearest_railway_station: "Amritsar Junction Railway Station (ASR)",
    distance_to_railway_km: "2 km",
    nearest_airport: "Sri Guru Ram Dass Jee International Airport (ATQ)",
    distance_to_airport_km: "11 km"
  },
  madurai: {
    nearest_railway_station: "Madurai Junction Railway Station (MDU)",
    distance_to_railway_km: "2 km",
    nearest_airport: "Madurai Airport (IXM)",
    distance_to_airport_km: "12 km"
  },
  puri: {
    nearest_railway_station: "Puri Railway Station (PURI)",
    distance_to_railway_km: "2 km",
    nearest_airport: "Biju Patnaik International Airport Bhubaneswar (BBI)",
    distance_to_airport_km: "60 km"
  },
  darjeeling: {
    nearest_railway_station: "New Jalpaiguri Railway Station (NJP)",
    distance_to_railway_km: "70 km",
    nearest_airport: "Bagdogra International Airport (IXB)",
    distance_to_airport_km: "68 km"
  },
  coorg: {
    nearest_railway_station: "Mysore Junction Railway Station (MYS)",
    distance_to_railway_km: "117 km",
    nearest_airport: "Kannur International Airport (CNN)",
    distance_to_airport_km: "90 km"
  },
  ooty: {
    nearest_railway_station: "Udhagamandalam Railway Station (UAM)",
    distance_to_railway_km: "1 km",
    nearest_airport: "Coimbatore International Airport (CJB)",
    distance_to_airport_km: "88 km"
  }
};

// Detailed Destination Database with Real Places & Google Maps links
const DESTINATION_DATABASE = {
  jodhpur: {
    title: "Royal Blue City Yatra",
    tagline: "Imposing hill forts, blue alleyways, and authentic Marwari traditions",
    logistics: DESTINATION_LOGISTICS.jodhpur,
    highlights: ["Mehrangarh Fort Sheesh Mahal", "Jaswant Thada Marble Cenotaph", "Sardar Market & Ghanta Ghar", "Toorji Ka Jhalra Stepwell"],
    activities: [
      {
        theme: "Royal Heritage & Fortresses",
        activities: [
          { timeOfDay: "Morning", locationName: "Mehrangarh Fort", googleMapsLink: makeGoogleMapsUrl("Mehrangarh Fort", "Jodhpur"), description: "Explore one of India's largest and best-preserved fortresses perched 410 feet above the city skyline. Discover the ornate Sheesh Mahal, Phool Mahal, and panoramic views of the blue houses below." },
          { timeOfDay: "Afternoon", locationName: "Jaswant Thada", googleMapsLink: makeGoogleMapsUrl("Jaswant Thada", "Jodhpur"), description: "Visit the stunning white marble cenotaph built in 1899 in memory of Maharaja Jaswant Singh II. Walk through carved lattice screens, peaceful gardens, and small lakeside pavilions." },
          { timeOfDay: "Evening", locationName: "Sardar Market and Ghanta Ghar", googleMapsLink: makeGoogleMapsUrl("Sardar Market Ghanta Ghar", "Jodhpur"), description: "Stroll through the bustling market surrounding the century-old Clock Tower in old Jodhpur. Shop for authentic bandhani textiles, hand-stitched leather mojris, and regional spices." }
        ],
        stay: { name: "Umaid Bhawan Palace Hotel", type: "Royal Heritage Luxury", whyPick: "Historic royal residence with world-class hospitalities", approxRate: "₹18,000/night" },
        dining: [{ name: "Indique Rooftop", specialty: "Laal Maas & Fort View", priceRange: "₹800-1500" }, { name: "Janta Sweet Home", specialty: "Mawa Kachori & Mirchi Bada", priceRange: "₹50-150" }]
      },
      {
        theme: "Palaces, Gardens & Stepwells",
        activities: [
          { timeOfDay: "Morning", locationName: "Umaid Bhawan Palace Museum", googleMapsLink: makeGoogleMapsUrl("Umaid Bhawan Palace Museum", "Jodhpur"), description: "Marvel at one of the world's largest private residences built with golden Chittar sandstone. Visit the museum exhibit showcasing royal vintage car collections, clocks, and Art Deco art." },
          { timeOfDay: "Afternoon", locationName: "Mandore Gardens", googleMapsLink: makeGoogleMapsUrl("Mandore Gardens", "Jodhpur"), description: "Explore the historic former capital of Marwar housing high-domed red sandstone devals of ancient rulers. Walk through lush greenery and view the rock-cut Hall of Heroes depicting 16 local deities." },
          { timeOfDay: "Evening", locationName: "Toorji Ka Jhalra Stepwell", googleMapsLink: makeGoogleMapsUrl("Toorji Ka Jhalra", "Jodhpur"), description: "Relax beside the 1740s restored stepwell carved with geometric steps and intricate stone figures. Enjoy evening tea and local snacks at nearby open-air cafes overlooking the stepwell." }
        ],
        stay: { name: "RAAS Jodhpur", type: "Boutique Heritage Resort", whyPick: "Luxury hotel crafted around an 18th-century haveli facing Mehrangarh", approxRate: "₹12,000/night" },
        dining: [{ name: "Stepwell Cafe", specialty: "Cold Brews & Fusion Bowls", priceRange: "₹300-600" }]
      },
      {
        theme: "Village Safari & Blue City Trail",
        activities: [
          { timeOfDay: "Morning", locationName: "Bishnoi Village Safari", googleMapsLink: makeGoogleMapsUrl("Bishnoi Village Safari", "Jodhpur"), description: "Embark on an open-jeep safari to Guda Bishnoiyan village to spot chinkara gazelles and native wildlife. Observe traditional Salawas rug weaving and learn about Bishnoi environmental traditions." },
          { timeOfDay: "Afternoon", locationName: "Navchokiya Blue City Walking Trail", googleMapsLink: makeGoogleMapsUrl("Navchokiya", "Jodhpur"), description: "Wander through the peaceful indigo-painted lanes of old Navchokiya behind Mehrangarh Fort. Photograph historic Brahmin havelis, ornate wooden doors, and vibrant local street life." },
          { timeOfDay: "Evening", locationName: "Rao Jodha Desert Rock Park", googleMapsLink: makeGoogleMapsUrl("Rao Jodha Desert Rock Park", "Jodhpur"), description: "Hike along ecological walking trails created over restored volcanic rock landscapes at the base of the fort. Experience golden sunset views as Mehrangarh Fort illuminates above the park." }
        ],
        stay: { name: "Pal Haveli", type: "Heritage Haveli", whyPick: "Located at Gulab Sagar lake with authentic Rajasthani architecture", approxRate: "₹4,500/night" },
        dining: [{ name: "Gypsy Dining Hall", specialty: "Rajasthani Unlimited Thali", priceRange: "₹450" }]
      }
    ],
    mustTry: [
      { item: "Mirchi Bada at Janta Sweet Home", why: "Spiced potato stuffed green chilli fried in gram flour batter — iconic Jodhpur snack." },
      { item: "Laal Maas", why: "Traditional Marwari mutton curry cooked with mathania red chillies and ghee." },
      { item: "Mawa Kachori", why: "Sweet fried pastry filled with rich sweetened khoya and dipped in sugar syrup." }
    ],
    packing: ["Sunscreen SPF 50+", "Comfortable cotton clothes", "Walking shoes for fort ramps", "Sunglasses & hat"],
    localInsights: "Old Jodhpur streets are narrow; auto-rickshaws or walking trails are best. Bargain respectfully at Sardar Market.",
    bestTime: "October to March (15–26°C pleasant winter weather)"
  },
  jaipur: {
    title: "Royal Pink City Yatra",
    tagline: "Opulent forts, royal palaces, and vibrant Rajasthani culture",
    logistics: DESTINATION_LOGISTICS.jaipur,
    highlights: ["Amber Fort Sheesh Mahal", "City Palace & Jantar Mantar", "Johari Bazaar Shopping", "Chokhi Dhani Ethnic Dinner"],
    activities: [
      {
        theme: "Fortresses & Mirror Palaces",
        activities: [
          { timeOfDay: "Morning", locationName: "Amber Fort", googleMapsLink: makeGoogleMapsUrl("Amber Fort", "Jaipur"), description: "Ascend the Aravalli hills to explore Amber Fort. Discover the dazzling Sheesh Mahal (Mirror Palace), Diwan-i-Aam, and grand royal courtyards." },
          { timeOfDay: "Afternoon", locationName: "City Palace Jaipur", googleMapsLink: makeGoogleMapsUrl("City Palace", "Jaipur"), description: "Visit the residence of the Royal Family of Jaipur featuring grand courtyards, Peacock Gate, and ancient royal arms galleries." },
          { timeOfDay: "Evening", locationName: "Johari Bazaar", googleMapsLink: makeGoogleMapsUrl("Johari Bazaar", "Jaipur"), description: "Stroll through centuries-old bazaars famous for Kundan jewellery, bandhani textiles, and blue pottery." }
        ],
        stay: { name: "Umaid Mahal Heritage Hotel", type: "Heritage Hotel", whyPick: "Converted traditional haveli with rooftop pool", approxRate: "₹3,500/night" },
        dining: [{ name: "Laxmi Mishtan Bhandar (LMB)", specialty: "Dal Baati Churma & Ghewar", priceRange: "₹200-400" }]
      },
      {
        theme: "Iconic Palaces & Sunsets",
        activities: [
          { timeOfDay: "Morning", locationName: "Hawa Mahal", googleMapsLink: makeGoogleMapsUrl("Hawa Mahal", "Jaipur"), description: "Photograph the 953-window Palace of Winds in soft early morning light from an opposite rooftop cafe." },
          { timeOfDay: "Afternoon", locationName: "Albert Hall Museum", googleMapsLink: makeGoogleMapsUrl("Albert Hall Museum", "Jaipur"), description: "Explore Indo-Saracenic architecture housing ancient carpets, sculptures, and an Egyptian mummy." },
          { timeOfDay: "Evening", locationName: "Nahargarh Fort", googleMapsLink: makeGoogleMapsUrl("Nahargarh Fort", "Jaipur"), description: "Watch the sun dip below the horizon with panoramic night views over the illuminated Pink City skyline." }
        ],
        stay: { name: "Shahpura House", type: "Luxury Heritage", whyPick: "Authentic royal hospitality and royal decor", approxRate: "₹6,000/night" },
        dining: [{ name: "Rawat Mishtan Bhandar", specialty: "Pyaaz Kachori", priceRange: "₹50-150" }]
      }
    ],
    mustTry: [
      { item: "Dal Baati Churma", why: "Rajasthan's signature meal baked in cow-dung embers and dipped in desi ghee." },
      { item: "Jaipur Blue Pottery", why: "Traditional craft introduced by Sawai Ram Singh II using quartz stone." }
    ],
    packing: ["Sunscreen SPF 50+", "Comfortable walking shoes", "Cotton kurtas"],
    localInsights: "Jaipur markets close by 8:30 PM. Auto-rickshaws are plentiful; fix rates before boarding.",
    bestTime: "October to March (pleasant 15-25°C weather)"
  },
  varanasi: {
    title: "Sacred Kashi Spiritual Yatra",
    tagline: "Ancient ghats, divine chants, and the timeless Ganges river",
    logistics: DESTINATION_LOGISTICS.varanasi,
    highlights: ["Sunrise Ganga Boat Ride", "Kashi Vishwanath Corridor", "Dashashwamedh Evening Aarti", "Sarnath Buddha Pilgrimage"],
    activities: [
      {
        theme: "Sacred Ghats & Divine Chants",
        activities: [
          { timeOfDay: "Morning", locationName: "Assi Ghat", googleMapsLink: makeGoogleMapsUrl("Assi Ghat", "Varanasi"), description: "Experience dawn Subah-e-Banaras with morning Vedic chants, yoga sessions, and a silent wooden boat ride on the Ganges." },
          { timeOfDay: "Afternoon", locationName: "Kashi Vishwanath Temple", googleMapsLink: makeGoogleMapsUrl("Kashi Vishwanath Temple", "Varanasi"), description: "Visit one of the 12 sacred Jyotirlingas, newly renovated with a grand heritage corridor connecting straight to the river." },
          { timeOfDay: "Evening", locationName: "Dashashwamedh Ghat", googleMapsLink: makeGoogleMapsUrl("Dashashwamedh Ghat", "Varanasi"), description: "Witness high priests performing synchronised fire worship with brass lamps, incense, and ringing bells during Evening Ganga Aarti." }
        ],
        stay: { name: "BrijRama Palace", type: "Heritage Palace on Ghats", whyPick: "18th-century palace right on Darbhanga Ghat", approxRate: "₹12,000/night" },
        dining: [{ name: "Blue Lassi Shop", specialty: "Pomegranate Rabri Lassi", priceRange: "₹70-120" }, { name: "Kashi Chat Bhandar", specialty: "Tamatar Chat", priceRange: "₹100-200" }]
      },
      {
        theme: "Buddhist Heritage & Weaving",
        activities: [
          { timeOfDay: "Morning", locationName: "Dhamek Stupa Sarnath", googleMapsLink: makeGoogleMapsUrl("Dhamek Stupa Sarnath", "Varanasi"), description: "Visit the sacred deer park where Lord Buddha preached his first sermon after enlightenment." },
          { timeOfDay: "Afternoon", locationName: "Banarasi Silk Weaving Lane", googleMapsLink: makeGoogleMapsUrl("Banarasi Silk Weaving Madanpura", "Varanasi"), description: "Walk through Madanpura lane to watch master weavers create intricate Banarasi silk sarees on traditional handlooms." },
          { timeOfDay: "Evening", locationName: "Manikarnika Ghat", googleMapsLink: makeGoogleMapsUrl("Manikarnika Ghat", "Varanasi"), description: "Experience the profound philosophy of life and death along the sacred cremation and historic cultural ghats." }
        ],
        stay: { name: "Suryauday Haveli", type: "Boutique Ghat Hotel", whyPick: "Located at Shivala Ghat with sunrise views", approxRate: "₹6,500/night" },
        dining: [{ name: "Baati Chokha Restaurant", specialty: "Authentic UP Baati Chokha", priceRange: "₹200-400" }]
      }
    ],
    mustTry: [
      { item: "Banarasi Tamatar Chat", why: "Spiced mashed tomato curry served in eco-friendly kulhad clay pots." },
      { item: "Banarasi Paan", why: "Iconic betel leaf digestif prepared with gulkand, spices, and silver foil." }
    ],
    packing: ["Modest clothing covering shoulders and knees", "Easy slip-on shoes for temple visits"],
    localInsights: "Varanasi lanes are narrow; rely on landmarks or Google Maps. Maintain silence at sacred sites.",
    bestTime: "November to February (pleasant mist and cool river breeze)"
  }
};

// Helper function to normalize any itinerary object to include logistics & exact structure
export function normalizeItinerary(rawItinerary, tripData) {
  const destName = tripData.destinationName || tripData.destination || rawItinerary?.destination || "India";
  const key = destName.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Find exact logistics or generate fallback logistics
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

  // Raw days array
  let daysList = rawItinerary?.days || rawItinerary?.itinerary || [];
  if (!Array.isArray(daysList) || daysList.length === 0) {
    daysList = [];
  }

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
          description: act.description || `Explore ${loc} in ${destName} and take in the local culture.`
        };
      });
    } else {
      // Build from morning, afternoon, evening objects
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

    // Default morning/afternoon/evening mapping for backwards UI compatibility
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
      stayRecommendation: d.stayRecommendation || d.stay || {
        name: `Heritage Stay ${destName}`,
        type: "Comfort Hotel",
        whyPick: "Centrally located with serene views",
        approxRate: "₹3,500/night"
      },
      diningSpots: d.diningSpots || d.dining || [
        { name: `${destName} Local Thali House`, specialty: "Authentic Regional Cuisine", priceRange: "₹250-500" }
      ]
    };
  });

  return {
    destination: destName,
    logistics: logistics,
    tripTitle: rawItinerary?.tripTitle || `${destName} Handcrafted Yatra`,
    tagline: rawItinerary?.tagline || `A realistic, curated travel itinerary for ${destName}`,
    highlights: rawItinerary?.highlights || [`Iconic landmarks of ${destName}`, "Local market walks", "Authentic dining spots"],
    days: normalizedDays,
    itinerary: normalizedDays,
    mustTry: rawItinerary?.mustTry || [
      { item: `Traditional ${destName} Speciality`, why: "Famous local delicacy popular among travellers." }
    ],
    packingEssentials: rawItinerary?.packingEssentials || ["Comfortable footwear", "Sunscreen SPF 50+", "Refillable water bottle"],
    localInsights: rawItinerary?.localInsights || `Auto-rickshaws and taxis are easily available in ${destName}. Use Google Maps for navigating local lanes.`,
    bestTimeToVisit: rawItinerary?.bestTimeToVisit || "October to March offers pleasant weather.",
    budgetSummary: rawItinerary?.budgetSummary || estimateBudget(tripData.days || 3, tripData.travellers || 2, tripData.budget || "Comfort")
  };
}

// Generic Fallback Engine
export function generateGenericFallback(tripData) {
  const destName = tripData.destinationName || tripData.destination || "India";
  const days = Math.max(1, tripData.days || 3);
  const key = destName.toLowerCase().replace(/[^a-z0-9]/g, "");

  const matchedKey = Object.keys(DESTINATION_DATABASE).find(k => key.includes(k));
  const dbEntry = matchedKey ? DESTINATION_DATABASE[matchedKey] : null;

  if (dbEntry) {
    const daysArr = [];
    for (let i = 0; i < days; i++) {
      const actIdx = i % dbEntry.activities.length;
      const t = dbEntry.activities[actIdx];
      daysArr.push({
        day: i + 1,
        date: `Day ${i + 1}`,
        theme: t.theme || `Exploration & Highlights`,
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

  // Dynamic Generator for any non-prebaked city
  const genericDays = [];
  for (let i = 1; i <= days; i++) {
    const morningPlace = i === 1 ? `Main Citadel & Heritage Complex` : `Central Park & Morning Market`;
    const afternoonPlace = `Famous Artisans & Shopping Lane`;
    const eveningPlace = `Sunset Vantage Point & Bazaar`;

    genericDays.push({
      day: i,
      date: `Day ${i}`,
      theme: i === 1 ? `Arrival & Iconic Landmarks` : i === days ? "Local Markets & Departure" : "Cultural Exploration",
      activities: [
        { timeOfDay: "Morning", locationName: morningPlace, googleMapsLink: makeGoogleMapsUrl(morningPlace, destName), description: `Begin your day visiting top historical landmarks of ${destName}. Take in morning atmosphere and soft light.` },
        { timeOfDay: "Afternoon", locationName: afternoonPlace, googleMapsLink: makeGoogleMapsUrl(afternoonPlace, destName), description: `Savor authentic regional thalis at top-rated local eateries, followed by artisan handicraft walks.` },
        { timeOfDay: "Evening", locationName: eveningPlace, googleMapsLink: makeGoogleMapsUrl(eveningPlace, destName), description: `Head to a popular vantage point to watch the sunset over ${destName}, followed by an evening bazaar walk.` }
      ]
    });
  }

  return normalizeItinerary({
    destination: destName,
    tripTitle: `Curated ${destName} Yatra`,
    tagline: `A handpicked journey showcasing the finest landmarks & experiences of ${destName}`,
    highlights: [`Top landmarks of ${destName}`, "Authentic regional culinary trail", "Local artisan and bazaar walks"],
    days: genericDays
  }, tripData);
}

// Serverless AI Provider Fallback
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
1. NO GENERIC DATA: Do not use generic placeholders like "sunrise tracking" or "local market walk".
2. REAL LOCATIONS: Include actual, famous tourist attractions, historical monuments, and specific local markets that exist in ${destName}.
3. ACCURATE LOGISTICS: Provide the real name of the nearest major railway station and airport to ${destName} with realistic estimated distances in kilometers.
4. GOOGLE MAPS: For every single location or activity, generate a working Google Maps search URL formatted exactly as: https://www.google.com/maps/search/?api=1&query=[Location+Name+Destination] (Replace spaces with '+').
5. FORMAT: Return ONLY valid JSON matching this schema:

{
  "destination": "${destName}",
  "logistics": {
    "nearest_railway_station": "Real name of station",
    "distance_to_railway_km": "Realistic distance in km",
    "nearest_airport": "Real name of airport",
    "distance_to_airport_km": "Realistic distance in km"
  },
  "tripTitle": "Title",
  "tagline": "Tagline",
  "highlights": ["Highlight 1", "Highlight 2"],
  "days": [
    {
      "day": 1,
      "date": "Day 1",
      "theme": "Day Theme",
      "activities": [
        {
          "timeOfDay": "Morning",
          "locationName": "Exact real place name",
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Exact+Place+Name+${destName.replace(/\s+/g, '+')}",
          "description": "A brief, 2-sentence specific description of what to do here."
        },
        {
          "timeOfDay": "Afternoon",
          "locationName": "Exact real place name",
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Exact+Place+Name+${destName.replace(/\s+/g, '+')}",
          "description": "A brief, 2-sentence specific description of what to do here."
        },
        {
          "timeOfDay": "Evening",
          "locationName": "Exact real place name",
          "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Exact+Place+Name+${destName.replace(/\s+/g, '+')}",
          "description": "A brief, 2-sentence specific description of what to do here."
        }
      ],
      "stayRecommendation": { "name": "Hotel Name", "type": "Type", "whyPick": "Reason", "approxRate": "₹X,XXX/night" },
      "diningSpots": [{ "name": "Restaurant Name", "specialty": "Dish", "priceRange": "₹XX" }]
    }
  ],
  "mustTry": [{ "item": "Name", "why": "Reason" }],
  "packingEssentials": ["Item 1", "Item 2"],
  "localInsights": "Insights",
  "bestTimeToVisit": "Best months",
  "budgetSummary": { "accommodation": "₹X", "food": "₹X", "transport": "₹X", "activities": "₹X", "estimatedTotal": "₹X" }
}`;

  // Step 1: Try Gemini API
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
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8192,
            responseMimeType: "application/json",
          },
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
      console.warn("[AIYatraEngine] Gemini API call failed, trying backup AI provider:", err.message);
    }
  }

  // Step 2: Try Pollinations AI
  const pollinationsResult = await generateViaPollinationsAI(prompt, tripData);
  if (pollinationsResult) {
    return pollinationsResult;
  }

  // Step 3: Smart Curated Handcrafted Engine Fallback
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
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  return {
    accommodation: `₹${stay.toLocaleString("en-IN")}`,
    food: `₹${food.toLocaleString("en-IN")}`,
    transport: `₹${transport.toLocaleString("en-IN")}`,
    activities: `₹${activities.toLocaleString("en-IN")}`,
    estimatedTotal: `₹${total.toLocaleString("en-IN")} for ${travellers} person(s)`
  };
}
