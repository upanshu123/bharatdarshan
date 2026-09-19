/**
 * AI Yatra Engine - Gemini 3.6 Flash Integration with Smart Fallback System
 * Plan My Yatra | Bharat Darshan Ecosystem
 */

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// Destination Activity Knowledge Base for Smart Fallback
const DESTINATION_DATABASE = {
  jaipur: {
    title: "Royal Pink City Yatra",
    tagline: "Opulent forts, royal palaces, and vibrant Rajasthani culture",
    highlights: ["Amber Fort Sheesh Mahal", "City Palace & Jantar Mantar", "Johari Bazaar Gem Shopping", "Chokhi Dhani Ethnic Dinner"],
    activities: [
      { morning: { act: "Amber Fort & Sheesh Mahal", desc: "Ascend the Aravalli hills to explore Amber Fort. Discover the dazzling Sheesh Mahal (Mirror Palace) and royal courtyard.", tip: "Hire an official guide at entry for best stories.", cost: "₹200 per person" },
        afternoon: { act: "City Palace & Jantar Mantar", desc: "Visit the residence of the Royal Family of Jaipur and the UNESCO-listed astronomical observatory next door.", tip: "Combo ticket saves ₹100.", cost: "₹300 per person" },
        evening: { act: "Johari Bazaar & MI Road", desc: "Stroll through centuries-old bazaars famous for Kundan jewellery, bandhani textiles, and blue pottery.", tip: "Polite bargaining works in bazaars.", cost: "₹500-1500" },
        stay: { name: "Umaid Mahal Heritage Hotel", type: "Heritage Hotel", whyPick: "Converted traditional haveli with rooftop pool", approxRate: "₹3,500/night" },
        dining: [{ name: "Laxmi Mishtan Bhandar (LMB)", specialty: "Dal Baati Churma & Ghewar", priceRange: "₹200-400" }, { name: "Peacock Rooftop", specialty: "Rajasthani Thali", priceRange: "₹400-700" }]
      },
      { morning: { act: "Hawa Mahal & Wind View Cafe", desc: "Photograph the 953-window Palace of Winds in early morning light from a opposite rooftop cafe.", tip: "Morning light is best for photos.", cost: "₹50 per person" },
        afternoon: { act: "Albert Hall Museum", desc: "Explore Indo-Saracenic architecture housing ancient carpets, sculptures, and an Egyptian mummy.", tip: "Great shade during hot afternoons.", cost: "₹150 per person" },
        evening: { act: "Nahargarh Fort Sunset", desc: "Watch the sun dip below the horizon with panoramic night views over the illuminated Pink City.", tip: "Arrive by 5:15 PM to get a spot at Padao Cafe.", cost: "₹200 per person" },
        stay: { name: "Shahpura House", type: "Luxury Heritage", whyPick: "Authentic royal hospitality and royal decor", approxRate: "₹6,000/night" },
        dining: [{ name: "Rawat Mishtan Bhandar", specialty: "Pyaaz Kachori", priceRange: "₹50-150" }, { name: "1135 AD Nahargarh", specialty: "Royal Mughlai Dinner", priceRange: "₹1000-2000" }]
      },
      { morning: { act: "Jaigarh Fort & Jaivana Cannon", desc: "Visit the fort of victory housing Jaivana — once the world's largest cannon on wheels.", tip: "Walk the secret subterranean passage connecting to Amber.", cost: "₹150 per person" },
        afternoon: { act: "Anokhi Museum of Hand Printing", desc: "Learn traditional block printing techniques in a beautifully restored haveli near Amber.", tip: "Try hands-on block printing workshop.", cost: "₹100 per person" },
        evening: { act: "Chokhi Dhani Ethnic Village", desc: "Experience Rajasthani folk dance, puppet shows, camel rides, and a lavish traditional feast.", tip: "Go hungry — the thali is unlimited!", cost: "₹900 per person" },
        stay: { name: "Trident Jaipur", type: "5-Star Resort", whyPick: "Overlooks Mansagar Lake and Jal Mahal", approxRate: "₹8,500/night" },
        dining: [{ name: "Chokhi Dhani Sangri Restaurant", specialty: "Traditional Marwari Thali", priceRange: "Included in ticket" }]
      }
    ],
    mustTry: [
      { item: "Dal Baati Churma", why: "Rajasthan's signature meal baked in cow-dung embers and dipped in desi ghee." },
      { item: "Jaipur Blue Pottery", why: "Traditional craft introduced by Sawai Ram Singh II using quartz stone." },
      { item: "Pyaaz Kachori at Rawat", why: "Crispy fried pastry filled with spiced onion filling — iconic Jaipur breakfast." }
    ],
    packing: ["Sunscreen SPF 50+", "Comfortable walking shoes", "Cotton kurtas / light scarves", "Sunglasses & hat", "Camera with extra battery"],
    localInsights: "Jaipur markets close by 8:30 PM. Auto-rickshaws are plentiful; fix rates before boarding or use Uber/Ola.",
    bestTime: "October to March (pleasant 15-25°C weather)"
  },
  varanasi: {
    title: "Sacred Kashi Spiritual Yatra",
    tagline: "Ancient ghats, divine chants, and the timeless Ganges river",
    highlights: ["Sunrise Ganga Boat Ride", "Kashi Vishwanath Corridor", "Dashashwamedh Evening Aarti", "Sarnath Buddha Pilgrimage"],
    activities: [
      { morning: { act: "Dawn Boat Ride on Ganges", desc: "Row past ancient ghats at first light witnessing morning prayers, bathing rituals, and rising sun.", tip: "Hire a wooden rowboat instead of motorboat for tranquility.", cost: "₹400 per boat" },
        afternoon: { act: "Kashi Vishwanath Corridor", desc: "Visit one of the 12 sacred Jyotirlingas, newly renovated with a grand pathway straight to the river.", tip: "Leave cellphones and bags at hotel or locker counter.", cost: "Free" },
        evening: { act: "Ganga Aarti at Dashashwamedh Ghat", desc: "Witness high priests performing synchronised fire worship with brass lamps, incense, and bells.", tip: "Arrive 45 min early for ghat steps or watch from a boat.", cost: "Free" },
        stay: { name: "BrijRama Palace", type: "Heritage Palace on Ghats", whyPick: "18th-century palace right on Darbhanga Ghat", approxRate: "₹12,000/night" },
        dining: [{ name: "Blue Lassi Shop", specialty: "Pomegranate Rabri Lassi", priceRange: "₹70-120" }, { name: "Kashi Chat Bhandar", specialty: "Tamatar Chat & Palak Chat", priceRange: "₹100-200" }]
      },
      { morning: { act: "Sarnath Buddhist Excursion", desc: "Visit the sacred deer park where Lord Buddha preached his first sermon after enlightenment.", tip: "Explore Dhamek Stupa and Sarnath Museum.", cost: "₹250 per person" },
        afternoon: { act: "Banarasi Silk Weaving Tour", desc: "Walk through Madanpura lane to watch master weavers create intricate Banarasi silk sarees on handlooms.", tip: "Buy directly from weaver cooperatives to avoid middlemen.", cost: "Free walk" },
        evening: { act: "Manikarnika & Assi Ghat Walk", desc: "Experience the profound philosophy of life and death along the sacred cremation and cultural ghats.", tip: "Maintain respectful silence and do NOT take photos at cremation ghats.", cost: "Free" },
        stay: { name: "Suryauday Haveli", type: "Boutique Ghat Hotel", whyPick: "Located at Shivala Ghat with sunrise views", approxRate: "₹6,500/night" },
        dining: [{ name: "Pizzeria Vaatika Cafe (Assi Ghat)", specialty: "Wood-fired Pizza & Apple Pie", priceRange: "₹300-600" }, { name: "Baati Chokha Restaurant", specialty: "Authentic UP Baati Chokha", priceRange: "₹200-400" }]
      }
    ],
    mustTry: [
      { item: "Banarasi Tamatar Chat", why: "Spiced mashed tomato curry served in eco-friendly kulhad clay pots." },
      { item: "Banarasi Paan", why: "Iconic betel leaf digestif prepared with gulkand, spices, and silver foil." },
      { item: "Sunrise Ghat Photography", why: "Golden mist on the Ganges is an artist's dream." }
    ],
    packing: ["Modest clothing covering shoulders and knees", "Easy slip-on shoes for temple visits", "Hand hand-sanitiser", "Small cash bills (₹10, ₹20, ₹50)"],
    localInsights: "Varanasi lanes (galis) are narrow and labyrinthine; rely on landmarks or Google Maps. Always respect sacred rituals.",
    bestTime: "November to February (pleasant mist and cool river breeze)"
  },
  kerala: {
    title: "God's Own Country Serenity Yatra",
    tagline: "Tranquil backwaters, emerald tea hills, and Ayurvedic wellness",
    highlights: ["Alleppey Houseboat Stay", "Munnar Tea Estate Walk", "Fort Kochi Chinese Nets", "Kathakali Cultural Performance"],
    activities: [
      { morning: { act: "Fort Kochi Heritage Trail", desc: "Explore Dutch and Portuguese colonial streets, St. Francis Church, and iconic Chinese Fishing Nets.", tip: "Visit Jew Town and Mattancherry Palace.", cost: "₹100 per person" },
        afternoon: { act: "Spice Market & Cafe Hop", desc: "Walk through spice warehouses filled with cardamom, pepper, and cinnamon aromas.", tip: "Try fresh seafood at waterfront shacks.", cost: "₹300 per person" },
        evening: { act: "Kathakali Dance & Martial Arts", desc: "Watch classical Kathakali performers apply detailed facial makeup followed by expressive dance drama.", tip: "Arrive 30 min before show to watch makeup application.", cost: "₹400 per person" },
        stay: { name: "Forte Kochi", type: "Heritage Boutique", whyPick: "Restored Dutch mansion in heart of Fort Kochi", approxRate: "₹7,500/night" },
        dining: [{ name: "Oceanos Restaurant", specialty: "Kerala Fish Curry Meal", priceRange: "₹300-500" }, { name: "Kashi Art Cafe", specialty: "Fresh Brewed Coffee & Cake", priceRange: "₹200-350" }]
      },
      { morning: { act: "Alleppey Houseboat Check-in", desc: "Board a traditional Kettuvallam wooden houseboat to cruise peaceful palm-fringed canals.", tip: "Ensure booking includes freshly prepared Karimeen fish meal.", cost: "Included in houseboat" },
        afternoon: { act: "Canal Cruise & Village Life", desc: "Glide past paddy fields, toddy shops, and quiet villages along the Vembanad Lake.", tip: "Ask captain for a small canoe ride into narrow inner canals.", cost: "Included" },
        evening: { act: "Sunset over Vembanad Lake", desc: "Watch sunset reflections over tranquil waters while enjoying hot banana fritters (Pazham Pori) & chai.", tip: "Houseboats anchor by 5:30 PM as per canal regulations.", cost: "Included" },
        stay: { name: "Luxury Deluxe Houseboat", type: "Private Houseboat", whyPick: "Floating bedroom with private chef and deck", approxRate: "₹9,000/night" },
        dining: [{ name: "Onboard Houseboat Chef", specialty: "Karimeen Pollichathu & Red Rice", priceRange: "Included" }]
      }
    ],
    mustTry: [
      { item: "Karimeen Pollichathu", why: "Pearl spot fish marinated in spicy masala and grilled inside banana leaf wrapper." },
      { item: "Ayurvedic Abhyanga Massage", why: "Rejuvenating full-body herbal oil massage by certified Kerala therapists." },
      { item: "Kerala Sadya on Banana Leaf", why: "Feast of 24+ vegetarian dishes served during festivals and celebrations." }
    ],
    packing: ["Light breathable cottons", "Mosquito repellent spray", "Umbrella/rain poncho", "Slip-on sandals"],
    localInsights: "Kerala backwaters are serene and eco-sensitive; do not litter in waterways. Tipping 10% is customary for houseboat staff.",
    bestTime: "September to March (cool post-monsoon greenery)"
  },
  goa: {
    title: "Sun-Kissed Goa Coastal Yatra",
    tagline: "Golden beaches, Portuguese architecture, and coastal relaxation",
    highlights: ["Fontainhas Latin Quarter Walk", "Basilica of Bom Jesus", "Baga & Anjuna Beach Shacks", "Mandovi River Sunset Cruise"],
    activities: [
      { morning: { act: "Fontainhas Latin Quarter Walk", desc: "Wander through Panaji's colorful Portuguese neighborhood with yellow and blue colonial villas.", tip: "Great photospots near Panjim Church.", cost: "Free walk" },
        afternoon: { act: "Old Goa UNESCO Churches", desc: "Visit Basilica of Bom Jesus holding mortal remains of St. Francis Xavier and Se Cathedral.", tip: "Dress modestly inside historic churches.", cost: "Free" },
        evening: { act: "Mandovi Sunset Cruise", desc: "Enjoy live Goan folk music, Dekhnni dances, and views of Miramar beach along Mandovi river.", tip: "Book 5:30 PM slot for sunset.", cost: "₹500 per person" },
        stay: { name: "Panjim Inn Heritage Hotel", type: "Heritage Hotel", whyPick: "300-year-old restored Portuguese villa in Fontainhas", approxRate: "₹4,500/night" },
        dining: [{ name: "Viva Panjim", specialty: "Goan Fish Curry Rice & Bebinca", priceRange: "₹300-600" }, { name: "Fisherman's Wharf", specialty: "Prawn Balchão", priceRange: "₹600-1200" }]
      },
      { morning: { act: "Fort Aguada & Lighthouse", desc: "Explore 17th-century Portuguese fortress with sweeping ocean views where Mandovi meets Arabian Sea.", tip: "Go early morning to avoid harsh sun.", cost: "₹50 per person" },
        afternoon: { act: "Anjuna & Vagator Beaches", desc: "Relax under palm shade at beachside shacks, listen to chill tunes, and watch waves.", tip: "Rent a scooter for easy beach hopping (₹400/day).", cost: "Shack food extra" },
        evening: { act: "Sunset at Chapora Fort", desc: "Climb Dil Chahta Hai fort for unforgettable cliffside sunset panoramas over Vagator beach.", tip: "Wear shoes with good grip for the rocky climb.", cost: "Free" },
        stay: { name: "Taj Fort Aguada Resort", type: "5-Star Oceanfront", whyPick: "Iconic ocean views directly adjacent to historic fort", approxRate: "₹14,000/night" },
        dining: [{ name: "Curlies Beach Shack (Anjuna)", specialty: "Woodfired Pizza & Cocktails", priceRange: "₹400-800" }, { name: "Thalassa (Siolim)", specialty: "Greek Cuisine & Sunset Views", priceRange: "₹1200-2500" }]
      }
    ],
    mustTry: [
      { item: "Goan Fish Curry Rice", why: "Tangy coconut-tamarind curry eaten with hot steamed red rice." },
      { item: "Bebinca Dessert", why: "Traditional 7-layered Goan baked pudding made with coconut milk and ghee." },
      { item: "Scooter Beach Hopping", why: "The ultimate liberated way to explore Goa's coastal highways." }
    ],
    packing: ["Swimwear & beach towels", "Sunscreen SPF 50+", "Flip flops & sunglasses", "Light linen shirts"],
    localInsights: "Rent scooters/cars only from registered black-and-yellow license plate providers. Always wear helmets.",
    bestTime: "November to February (vibrant beach season with cool sea breeze)"
  }
};

// Generic Fallback Template Generator for any city/state
function generateGenericFallback(tripData) {
  const destName = tripData.destinationName || tripData.destination || "India";
  const days = Math.max(1, tripData.days || 3);
  const travellers = tripData.travellers || 2;
  const budgetTier = tripData.budget || "Comfort";
  const tripType = tripData.tripType || "Heritage";

  const key = destName.toLowerCase();
  const dbEntry = Object.keys(DESTINATION_DATABASE).find(k => key.includes(k))
    ? DESTINATION_DATABASE[Object.keys(DESTINATION_DATABASE).find(k => key.includes(k))]
    : null;

  if (dbEntry) {
    const daysArr = [];
    for (let i = 0; i < days; i++) {
      const actIdx = i % dbEntry.activities.length;
      const t = dbEntry.activities[actIdx];
      daysArr.push({
        day: i + 1,
        date: `Day ${i + 1}`,
        theme: i === 0 ? "Arrival & Highlights" : i === days - 1 ? "Cultural Immersion & Departure" : "Exploration & Local Secrets",
        morning: { time: "08:00 AM", activity: t.morning.act, description: t.morning.desc, tip: t.morning.tip, estimatedCost: t.morning.cost },
        afternoon: { time: "01:00 PM", activity: t.afternoon.act, description: t.afternoon.desc, tip: t.afternoon.tip, estimatedCost: t.afternoon.cost },
        evening: { time: "06:30 PM", activity: t.evening.act, description: t.evening.desc, tip: t.evening.tip, estimatedCost: t.evening.cost },
        stayRecommendation: t.stay,
        diningSpots: t.dining
      });
    }

    return {
      tripTitle: `${destName} ${tripType} Yatra`,
      tagline: dbEntry.tagline,
      highlights: dbEntry.highlights,
      days: daysArr,
      mustTry: dbEntry.mustTry,
      packingEssentials: dbEntry.packing,
      localInsights: dbEntry.localInsights,
      bestTimeToVisit: dbEntry.bestTime,
      budgetSummary: estimateBudget(days, travellers, budgetTier)
    };
  }

  // Pure dynamic fallback if city not in pre-baked mini DB
  const genericDays = [];
  for (let i = 1; i <= days; i++) {
    genericDays.push({
      day: i,
      date: `Day ${i}`,
      theme: i === 1 ? `Welcome to ${destName}` : i === days ? "Memorable Finale & Shopping" : "Deep Cultural Immersion",
      morning: {
        time: "08:30 AM",
        activity: i === 1 ? `Iconic ${destName} Sightseeing` : `Morning Nature & Heritage Walk`,
        description: `Begin your morning exploring top landmarks of ${destName}. Take in the morning atmosphere and rich heritage.`,
        tip: "Start early to capture soft morning light and beat thermal heat.",
        estimatedCost: "₹200 - ₹500 per person"
      },
      afternoon: {
        time: "01:00 PM",
        activity: `Local Culinary & Artisan Tour`,
        description: `Savor authentic regional cuisine at top-rated local eateries, followed by visits to famous artisan workshops.`,
        tip: "Ask locals for house specialties — regional thalis offer best variety.",
        estimatedCost: "₹300 - ₹600 per person"
      },
      evening: {
        time: "06:00 PM",
        activity: `Sunset Viewpoint & Cultural Market`,
        description: `Head to a popular vantage point to watch the sunset over ${destName}, followed by an evening stroll through bustling bazaars.`,
        tip: "Keep small cash handy for local street food vendors.",
        estimatedCost: "Free - ₹300 per person"
      },
      stayRecommendation: {
        name: `Grand ${destName} Boutique Stay`,
        type: `${budgetTier} Hotel`,
        whyPick: `Centrally located with excellent guest reviews and scenic city views`,
        approxRate: budgetTier === "Luxury" ? "₹8,500/night" : "₹3,500/night"
      },
      diningSpots: [
        { name: `${destName} Heritage Kitchen`, specialty: "Regional Signature Thali", priceRange: "₹250-500" },
        { name: "Central Rooftop Cafe", specialty: "Fresh Brews & Local Delicacies", priceRange: "₹150-350" }
      ]
    });
  }

  return {
    tripTitle: `Curated ${destName} ${tripType} Yatra`,
    tagline: `A handpicked journey showcasing the finest landmarks, flavors & experiences of ${destName}`,
    highlights: [`Top landmarks of ${destName}`, "Authentic regional culinary trail", "Local artisan and bazaar walks", "Scenic sunset vantage points"],
    days: genericDays,
    mustTry: [
      { item: `Authentic ${destName} Thali`, why: "Sample traditional recipes prepared with secret local spices." },
      { item: "Handicraft & Souvenir Shopping", why: "Support indigenous artisans and take home memorable keepsakes." }
    ],
    packingEssentials: ["Comfortable footwear", "Sunscreen & sunglasses", "Refillable water bottle", "Camera / phone powerbank", "Modest attire for heritage/sacred sites"],
    localInsights: `Respect local customs when visiting religious or heritage sites in ${destName}. Taxis and auto-rickshaws are readily available.`,
    bestTimeToVisit: "October through March offers pleasant weather for sightseeing.",
    budgetSummary: estimateBudget(days, travellers, budgetTier)
  };
}

// Helper to generate itinerary using Pollinations AI (Free Serverless AI Backup)
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

    if (itinerary && itinerary.days && itinerary.days.length > 0) {
      return { success: true, data: itinerary, model: "BharatDarshan AI (Pollinations)", isDemoMode: false };
    }
    throw new Error("Invalid itinerary JSON structure");
  } catch (err) {
    console.warn("[AIYatraEngine] Pollinations AI fallback failed:", err.message);
    return null;
  }
}

export async function generateAIItinerary(tripData) {
  const prompt = `You are an expert India travel concierge. Create a detailed ${tripData.days}-day travel itinerary for:
Origin: ${tripData.origin}
Destination: ${tripData.destinationName || tripData.destination}
Travel Dates: ${tripData.startDate} to ${tripData.endDate}
Travellers: ${tripData.travellers} person(s)
Budget: ${tripData.budget}
Trip Type: ${tripData.tripType}

Return ONLY a valid JSON object matching this schema:
{
  "tripTitle": "Title",
  "tagline": "Tagline",
  "highlights": ["H1", "H2", "H3"],
  "days": [
    {
      "day": 1,
      "date": "Day 1",
      "theme": "Theme",
      "morning": { "time": "08:00 AM", "activity": "Act", "description": "Desc", "tip": "Tip", "estimatedCost": "₹XXX" },
      "afternoon": { "time": "01:00 PM", "activity": "Act", "description": "Desc", "tip": "Tip", "estimatedCost": "₹XXX" },
      "evening": { "time": "06:00 PM", "activity": "Act", "description": "Desc", "tip": "Tip", "estimatedCost": "₹XXX" },
      "stayRecommendation": { "name": "Hotel Name", "type": "Type", "whyPick": "Why", "approxRate": "₹X,XXX/night" },
      "diningSpots": [{ "name": "Rest", "specialty": "Dish", "priceRange": "₹XX" }]
    }
  ],
  "mustTry": [{ "item": "Name", "why": "Reason" }],
  "packingEssentials": ["Item 1", "Item 2"],
  "localInsights": "Insights",
  "bestTimeToVisit": "Best months",
  "budgetSummary": { "accommodation": "₹X", "food": "₹X", "transport": "₹X", "activities": "₹X", "estimatedTotal": "₹X" }
}`;

  // Step 1: Try Gemini API if valid key is available
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
          return { success: true, data: itinerary, model: "Gemini 1.5 Flash", isDemoMode: false };
        }
      }
    } catch (err) {
      console.warn("[AIYatraEngine] Gemini API call failed, trying backup AI provider:", err.message);
    }
  }

  // Step 2: Try Pollinations AI (Zero API key required, 100% free serverless AI)
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
