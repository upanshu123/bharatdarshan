/**
 * Plan My Yatra - Destinations & Affiliate Data
 * NEW FILE - does not modify any existing bharatdarshan files
 */

export const PLANNER_DESTINATIONS = [
  { id: "jaipur", name: "Jaipur", state: "Rajasthan", category: "Heritage", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80", description: "The Pink City of grand forts, opulent palaces, and vibrant bazaars.", bestTime: "Nov - Feb" },
  { id: "udaipur", name: "Udaipur", state: "Rajasthan", category: "Heritage", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", description: "The City of Lakes with shimmering palaces on Lake Pichola.", bestTime: "Oct - Mar" },
  { id: "jodhpur", name: "Jodhpur", state: "Rajasthan", category: "Heritage", image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&q=80", description: "The Blue City, dominated by the magnificent Mehrangarh Fort.", bestTime: "Oct - Mar" },
  { id: "varanasi", name: "Varanasi", state: "Uttar Pradesh", category: "Spiritual", image: "https://images.unsplash.com/photo-1561361058-c24e01238a46?w=800&q=80", description: "The spiritual heart of India along the sacred ghats of the Ganges.", bestTime: "Oct - Mar" },
  { id: "agra", name: "Agra", state: "Uttar Pradesh", category: "Heritage", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", description: "Home of the eternal Taj Mahal, one of the Seven Wonders of the World.", bestTime: "Oct - Mar" },
  { id: "rishikesh", name: "Rishikesh", state: "Uttarakhand", category: "Spiritual", image: "https://images.unsplash.com/photo-1584208124888-5f83609cc8f2?w=800&q=80", description: "The World Capital of Yoga nestled by the turquoise Ganges.", bestTime: "Sep - Apr" },
  { id: "manali", name: "Manali", state: "Himachal Pradesh", category: "Adventure", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80", description: "Alpine valley paradise with snow-capped peaks and adventure sports.", bestTime: "May - Jun, Sep - Oct" },
  { id: "shimla", name: "Shimla", state: "Himachal Pradesh", category: "Hills", image: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=800&q=80", description: "Colonial hill station with charming architecture and toy train rides.", bestTime: "Mar - Jun, Sep - Nov" },
  { id: "leh-ladakh", name: "Leh Ladakh", state: "Ladakh", category: "Adventure", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", description: "High-altitude desert with ancient monasteries and crystal-clear lakes.", bestTime: "May - Sep" },
  { id: "kerala", name: "Kerala Backwaters", state: "Kerala", category: "Nature", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80", description: "Cruise through tranquil palm-fringed canals on traditional houseboats.", bestTime: "Sep - Mar" },
  { id: "munnar", name: "Munnar", state: "Kerala", category: "Nature", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80", description: "Misty hill station blanketed with rolling tea estates and waterfalls.", bestTime: "Sep - May" },
  { id: "goa", name: "Goa", state: "Goa", category: "Coastal", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80", description: "Sun-kissed beaches, Portuguese heritage, and vibrant coastal culture.", bestTime: "Nov - Mar" },
  { id: "hampi", name: "Hampi", state: "Karnataka", category: "Heritage", image: "https://images.unsplash.com/photo-1588686752373-7a3c39f2f8a1?w=800&q=80", description: "Surreal UNESCO ruins of the once-glorious Vijayanagara Empire.", bestTime: "Oct - Feb" },
  { id: "mysore", name: "Mysore", state: "Karnataka", category: "Heritage", image: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?w=800&q=80", description: "The City of Palaces with the magnificent illuminated Mysore Palace.", bestTime: "Oct - Feb" },
  { id: "shillong", name: "Shillong & Cherrapunji", state: "Meghalaya", category: "Nature", image: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?w=800&q=80", description: "The Scotland of the East with living root bridges and lush valleys.", bestTime: "Oct - May" },
  { id: "andaman", name: "Andaman Islands", state: "Andaman & Nicobar", category: "Coastal", image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&q=80", description: "Pristine coral reefs, turquoise waters, and untouched island paradise.", bestTime: "Nov - May" },
  { id: "amritsar", name: "Amritsar", state: "Punjab", category: "Spiritual", image: "https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?w=800&q=80", description: "Home of the resplendent Golden Temple, Sikhism holiest shrine.", bestTime: "Oct - Mar" },
  { id: "madurai", name: "Madurai", state: "Tamil Nadu", category: "Spiritual", image: "https://images.unsplash.com/photo-1590592505566-24d8e72b0e8a?w=800&q=80", description: "Temple city with the stunning Meenakshi Amman Temple complex.", bestTime: "Oct - Mar" },
  { id: "puri", name: "Puri & Konark", state: "Odisha", category: "Spiritual", image: "https://images.unsplash.com/photo-1574165945521-4ba31dbddba7?w=800&q=80", description: "Sacred Jagannath Temple city with the legendary Sun Temple at Konark.", bestTime: "Oct - Mar" },
  { id: "darjeeling", name: "Darjeeling", state: "West Bengal", category: "Hills", image: "https://images.unsplash.com/photo-1586347886960-b6a30ee0d6a5?w=800&q=80", description: "Queen of Hill Stations with toy trains, tea gardens, and Himalayan views.", bestTime: "Mar - May, Sep - Dec" },
  { id: "coorg", name: "Coorg", state: "Karnataka", category: "Nature", image: "https://images.unsplash.com/photo-1591197172062-c718f82aba20?w=800&q=80", description: "Scotland of India - coffee plantations, misty hills, and waterfalls.", bestTime: "Oct - Mar" },
  { id: "ooty", name: "Ooty", state: "Tamil Nadu", category: "Hills", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", description: "Queen of Hill Stations with Nilgiri Mountain Railway and botanical gardens.", bestTime: "Apr - Jun, Sep - Nov" },
];

export const TRIP_TYPES = [
  { id: "Spiritual", label: "Spiritual & Sacred", icon: "🕉️", desc: "Temples, pilgrimages & divine experiences" },
  { id: "Heritage", label: "Heritage & History", icon: "🏰", desc: "Forts, palaces & ancient ruins" },
  { id: "Adventure", label: "Adventure & Trekking", icon: "🏔️", desc: "Mountains, rapids & thrill seekers" },
  { id: "Nature", label: "Nature & Wildlife", icon: "🌿", desc: "Forests, tea gardens & backwaters" },
  { id: "Coastal", label: "Coastal & Beaches", icon: "🌊", desc: "Beaches, islands & seafood" },
  { id: "Hills", label: "Hills & Valleys", icon: "⛰️", desc: "Hill stations, valleys & scenic drives" },
];

export const BUDGET_TIERS = [
  { id: "Budget", label: "Budget Friendly", symbol: "₹", desc: "₹1,000–2,500/day per person" },
  { id: "Comfort", label: "Comfortable", symbol: "₹₹", desc: "₹2,500–6,000/day per person" },
  { id: "Luxury", label: "Premium Luxury", symbol: "₹₹₹", desc: "₹6,000–15,000/day per person" },
  { id: "Royal", label: "Royal Heritage", symbol: "₹₹₹₹", desc: "₹15,000+/day per person" },
];

export const INTERESTS = [
  "Food & Cuisine", "Photography", "Architecture", "Yoga & Wellness",
  "Wildlife", "Shopping", "Water Sports", "Trekking", "Meditation",
  "Art & Culture", "Local Markets", "Nightlife",
];

/**
 * AFFILIATE PARTNERS
 * Replace each PLACEHOLDER with your real affiliate URL from the partner program.
 * All CTAs are clearly labelled as affiliate/sponsored in the UI.
 */
export const AFFILIATE_PARTNERS = {
  hotels: [
    {
      id: "makemytrip",
      name: "MakeMyTrip",
      shortName: "MMT",
      affiliateUrl: "https://bitli.in/vH7D6en",
      searchBase: "https://www.makemytrip.com/hotels/hotel-listing/#/search?city=",
      commission: "4–8%",
      color: "bg-red-50 border-red-200 text-red-700 hover:border-red-400",
    },
    {
      id: "booking",
      name: "Booking.com",
      shortName: "BKG",
      affiliateUrl: "https://www.anrdoezrs.net/click-101883662-17322915",
      searchBase: "https://www.booking.com/search.html?ss=",
      commission: "4–6%",
      color: "bg-blue-50 border-blue-200 text-blue-700 hover:border-blue-400",
    },
    {
      id: "klook",
      name: "Klook",
      shortName: "KLK",
      affiliateUrl: "https://klook.tpo.mx/0r4GgPTK",
      searchBase: "https://www.klook.com/en-IN/search/?query=",
      commission: "3–5%",
      color: "bg-orange-50 border-orange-200 text-orange-700 hover:border-orange-400",
    },
  ],
  activities: [
    {
      id: "getyourguide",
      name: "GetYourGuide",
      shortName: "GYG",
      affiliateUrl: "https://www.getyourguide.com/jaipur-l1149/jaipur-jaipur-amber-fort-full-or-half-day-guided-tour-t516630/?partner_id=L21UWLJ&utm_medium=online_publisher",
      searchBase: "https://www.getyourguide.com/s/?q=",
      commission: "8%",
      color: "bg-yellow-50 border-yellow-200 text-yellow-700 hover:border-yellow-400",
    },
  ],
  transport: [
    {
      id: "goibibo",
      name: "Goibibo",
      shortName: "GIB",
      affiliateUrl: "https://bitli.in/xKkdwRT",
      searchBase: "https://www.goibibo.com/hotels/hotels-in-",
      commission: "3–6%",
      color: "bg-teal-50 border-teal-200 text-teal-700 hover:border-teal-400",
    },

  ],
  flights: [
    {
      id: "expedia",
      name: "Expedia",
      shortName: "EXP",
      affiliateUrl: "https://bitli.in/sP8sZwo",
      searchBase: "https://www.expedia.co.in/Flights-Search?trip=oneway&leg1=from%3ADelhi%2Cto%3A",
      commission: "3–6%",
      color: "bg-yellow-50 border-yellow-200 text-yellow-700 hover:border-yellow-400",
    },
    {
      id: "makemytrip-flights",
      name: "MMT Flights",
      shortName: "MMT",
      affiliateUrl: "https://bitli.in/vH7D6en",
      searchBase: "https://www.makemytrip.com/flights/search?tripType=O&itinerary=DEL-",
      commission: "2–3%",
      color: "bg-red-50 border-red-200 text-red-700 hover:border-red-400",
    },
  ],
};
