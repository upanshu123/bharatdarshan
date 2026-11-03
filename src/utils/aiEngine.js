/**
 * AI Yatra Engine - Gemini Integration with Smart Fallback System
 * Plan My Yatra | Bharat Darshan Ecosystem
 */

const GEMINI_API_KEY = (typeof import.meta !== "undefined" && import.meta.env?.VITE_GEMINI_API_KEY)
  ? import.meta.env.VITE_GEMINI_API_KEY
  : (typeof process !== "undefined" ? process.env?.VITE_GEMINI_API_KEY : "");

export function makeGoogleMapsUrl(locationName, destName) {
  const query = `${locationName} ${destName}`.trim().replace(/\s+/g, '+');
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export const DESTINATION_LOGISTICS = {
  jaipur: {
    nearest_railway_station: "Jaipur Junction Railway Station (JP)",
    distance_to_railway_km: "3 km",
    railway_map_url: makeGoogleMapsUrl("Jaipur Junction Railway Station", "Jaipur"),
    nearest_bus_stand: "Sindhi Camp Central Bus Stand Jaipur",
    distance_to_bus_stand_km: "2 km",
    bus_stand_map_url: makeGoogleMapsUrl("Sindhi Camp Bus Stand", "Jaipur"),
    nearest_airport: "Jaipur International Airport (JAI)",
    distance_to_airport_km: "12 km",
    airport_map_url: makeGoogleMapsUrl("Jaipur International Airport", "Jaipur")
  },
  udaipur: {
    nearest_railway_station: "Udaipur City Railway Station (UDZ)",
    distance_to_railway_km: "2.5 km",
    railway_map_url: makeGoogleMapsUrl("Udaipur City Railway Station", "Udaipur"),
    nearest_bus_stand: "Udaipur Central Bus Stand (Udiapol)",
    distance_to_bus_stand_km: "2 km",
    bus_stand_map_url: makeGoogleMapsUrl("Udaipur Central Bus Stand Udiapol", "Udaipur"),
    nearest_airport: "Maharana Pratap Airport (UDR)",
    distance_to_airport_km: "22 km",
    airport_map_url: makeGoogleMapsUrl("Maharana Pratap Airport", "Udaipur")
  },
  jodhpur: {
    nearest_railway_station: "Jodhpur Junction Railway Station (JU)",
    distance_to_railway_km: "3 km",
    railway_map_url: makeGoogleMapsUrl("Jodhpur Junction Railway Station", "Jodhpur"),
    nearest_bus_stand: "Paota Bus Stand Jodhpur",
    distance_to_bus_stand_km: "2.5 km",
    bus_stand_map_url: makeGoogleMapsUrl("Paota Bus Stand", "Jodhpur"),
    nearest_airport: "Jodhpur Airport (JDH)",
    distance_to_airport_km: "5 km",
    airport_map_url: makeGoogleMapsUrl("Jodhpur Airport", "Jodhpur")
  },
  varanasi: {
    nearest_railway_station: "Varanasi Junction Railway Station (BSB)",
    distance_to_railway_km: "4 km",
    railway_map_url: makeGoogleMapsUrl("Varanasi Junction Railway Station", "Varanasi"),
    nearest_bus_stand: "Chaudhary Charan Singh Bus Stand Varanasi",
    distance_to_bus_stand_km: "3.5 km",
    bus_stand_map_url: makeGoogleMapsUrl("Varanasi Bus Stand Cantt", "Varanasi"),
    nearest_airport: "Lal Bahadur Shastri International Airport (VNS)",
    distance_to_airport_km: "24 km",
    airport_map_url: makeGoogleMapsUrl("Lal Bahadur Shastri International Airport", "Varanasi")
  },
  agra: {
    nearest_railway_station: "Agra Cantt Railway Station (AGC)",
    distance_to_railway_km: "4 km",
    railway_map_url: makeGoogleMapsUrl("Agra Cantt Railway Station", "Agra"),
    nearest_bus_stand: "ISBT Agra Bus Terminal",
    distance_to_bus_stand_km: "6 km",
    bus_stand_map_url: makeGoogleMapsUrl("ISBT Agra Bus Terminal", "Agra"),
    nearest_airport: "Agra Airport / Kheria Airport (AGR)",
    distance_to_airport_km: "8 km",
    airport_map_url: makeGoogleMapsUrl("Agra Airport Kheria", "Agra")
  },
  rishikesh: {
    nearest_railway_station: "Yog Nagari Rishikesh Railway Station (YNRK)",
    distance_to_railway_km: "3 km",
    railway_map_url: makeGoogleMapsUrl("Yog Nagari Rishikesh Railway Station", "Rishikesh"),
    nearest_bus_stand: "Rishikesh ISBT Bus Terminal",
    distance_to_bus_stand_km: "1.5 km",
    bus_stand_map_url: makeGoogleMapsUrl("Rishikesh ISBT Bus Stand", "Rishikesh"),
    nearest_airport: "Jolly Grant Airport Dehradun (DED)",
    distance_to_airport_km: "21 km",
    airport_map_url: makeGoogleMapsUrl("Jolly Grant Airport Dehradun", "Rishikesh")
  },
  manali: {
    nearest_railway_station: "Joginder Nagar Railway Station (JOGS)",
    distance_to_railway_km: "165 km",
    railway_map_url: makeGoogleMapsUrl("Joginder Nagar Railway Station", "Himachal"),
    nearest_bus_stand: "Manali HRTC & Private Bus Stand (Mall Road)",
    distance_to_bus_stand_km: "1 km",
    bus_stand_map_url: makeGoogleMapsUrl("Manali Bus Stand", "Manali"),
    nearest_airport: "Bhuntar Kullu-Manali Airport (KUU)",
    distance_to_airport_km: "50 km",
    airport_map_url: makeGoogleMapsUrl("Bhuntar Kullu Manali Airport", "Kullu Manali")
  },
  shimla: {
    nearest_railway_station: "Shimla Railway Station (SML)",
    distance_to_railway_km: "1.5 km",
    railway_map_url: makeGoogleMapsUrl("Shimla Railway Station", "Shimla"),
    nearest_bus_stand: "ISBT Tutikandi Bus Stand Shimla",
    distance_to_bus_stand_km: "4 km",
    bus_stand_map_url: makeGoogleMapsUrl("Tutikandi ISBT Bus Stand", "Shimla"),
    nearest_airport: "Jubbarhatti Airport Shimla (SLV)",
    distance_to_airport_km: "22 km",
    airport_map_url: makeGoogleMapsUrl("Jubbarhatti Airport", "Shimla")
  },
  "leh-ladakh": {
    nearest_railway_station: "Jammu Tawi Railway Station (JAT)",
    distance_to_railway_km: "680 km",
    railway_map_url: makeGoogleMapsUrl("Jammu Tawi Railway Station", "Jammu"),
    nearest_bus_stand: "JKSRTC Bus Stand Leh",
    distance_to_bus_stand_km: "1.5 km",
    bus_stand_map_url: makeGoogleMapsUrl("JKSRTC Bus Stand", "Leh Ladakh"),
    nearest_airport: "Kushok Bakula Rimpochee Airport Leh (IXL)",
    distance_to_airport_km: "4 km",
    airport_map_url: makeGoogleMapsUrl("Kushok Bakula Rimpochee Airport", "Leh")
  },
  kerala: {
    nearest_railway_station: "Alappuzha Railway Station (ALLP)",
    distance_to_railway_km: "4 km",
    railway_map_url: makeGoogleMapsUrl("Alappuzha Railway Station", "Kerala"),
    nearest_bus_stand: "KSRTC Bus Station Alappuzha",
    distance_to_bus_stand_km: "2 km",
    bus_stand_map_url: makeGoogleMapsUrl("KSRTC Bus Stand Alappuzha", "Kerala"),
    nearest_airport: "Cochin International Airport (COK)",
    distance_to_airport_km: "83 km",
    airport_map_url: makeGoogleMapsUrl("Cochin International Airport", "Kochi")
  },
  munnar: {
    nearest_railway_station: "Aluva Railway Station (AWY)",
    distance_to_railway_km: "110 km",
    railway_map_url: makeGoogleMapsUrl("Aluva Railway Station", "Kerala"),
    nearest_bus_stand: "KSRTC Bus Station Munnar",
    distance_to_bus_stand_km: "1 km",
    bus_stand_map_url: makeGoogleMapsUrl("KSRTC Bus Station", "Munnar"),
    nearest_airport: "Cochin International Airport (COK)",
    distance_to_airport_km: "110 km",
    airport_map_url: makeGoogleMapsUrl("Cochin International Airport", "Kochi")
  },
  goa: {
    nearest_railway_station: "Madgaon Junction Railway Station (MAO)",
    distance_to_railway_km: "28 km",
    railway_map_url: makeGoogleMapsUrl("Madgaon Junction Railway Station", "Goa"),
    nearest_bus_stand: "Kadamba Bus Terminal Panaji",
    distance_to_bus_stand_km: "2 km",
    bus_stand_map_url: makeGoogleMapsUrl("Kadamba Bus Terminal Panaji", "Goa"),
    nearest_airport: "Dabolim Airport (GOI)",
    distance_to_airport_km: "26 km",
    airport_map_url: makeGoogleMapsUrl("Dabolim Airport", "Goa")
  },
  hampi: {
    nearest_railway_station: "Hosapete Junction Railway Station (HPT)",
    distance_to_railway_km: "13 km",
    railway_map_url: makeGoogleMapsUrl("Hosapete Junction Railway Station", "Hampi"),
    nearest_bus_stand: "Hampi KSRTC Bus Stand",
    distance_to_bus_stand_km: "0.5 km",
    bus_stand_map_url: makeGoogleMapsUrl("Hampi Bus Stand", "Hampi"),
    nearest_airport: "Jindal Vijayanagar Airport (VDY)",
    distance_to_airport_km: "35 km",
    airport_map_url: makeGoogleMapsUrl("Jindal Vijayanagar Airport", "Toranagallu Hampi")
  },
  mysore: {
    nearest_railway_station: "Mysuru Junction Railway Station (MYS)",
    distance_to_railway_km: "2 km",
    railway_map_url: makeGoogleMapsUrl("Mysuru Junction Railway Station", "Mysore"),
    nearest_bus_stand: "KSRTC Suburb Bus Stand Mysore",
    distance_to_bus_stand_km: "1.5 km",
    bus_stand_map_url: makeGoogleMapsUrl("KSRTC Central Bus Stand", "Mysore"),
    nearest_airport: "Mysore Airport (MYQ)",
    distance_to_airport_km: "12 km",
    airport_map_url: makeGoogleMapsUrl("Mysore Airport", "Mysore")
  },
  shillong: {
    nearest_railway_station: "Guwahati Railway Station (GHY)",
    distance_to_railway_km: "98 km",
    railway_map_url: makeGoogleMapsUrl("Guwahati Railway Station", "Guwahati"),
    nearest_bus_stand: "MTC Bus Stand Police Bazar Shillong",
    distance_to_bus_stand_km: "1 km",
    bus_stand_map_url: makeGoogleMapsUrl("MTC Bus Stand Police Bazar", "Shillong"),
    nearest_airport: "Shillong Airport Umroi (SHL)",
    distance_to_airport_km: "30 km",
    airport_map_url: makeGoogleMapsUrl("Shillong Airport Umroi", "Shillong")
  },
  andaman: {
    nearest_railway_station: "Port Blair Marine Jetty Hub",
    distance_to_railway_km: "2 km",
    railway_map_url: makeGoogleMapsUrl("Phoenix Bay Jetty Port Blair", "Andaman"),
    nearest_bus_stand: "STS Bus Terminus Aberdeen Bazar Port Blair",
    distance_to_bus_stand_km: "1.5 km",
    bus_stand_map_url: makeGoogleMapsUrl("STS Bus Terminus Aberdeen Bazar", "Port Blair"),
    nearest_airport: "Veer Savarkar International Airport Port Blair (IXZ)",
    distance_to_airport_km: "4 km",
    airport_map_url: makeGoogleMapsUrl("Veer Savarkar International Airport", "Port Blair")
  },
  amritsar: {
    nearest_railway_station: "Amritsar Junction Railway Station (ASR)",
    distance_to_railway_km: "2 km",
    railway_map_url: makeGoogleMapsUrl("Amritsar Junction Railway Station", "Amritsar"),
    nearest_bus_stand: "Amritsar Inter State Bus Terminal (ISBT)",
    distance_to_bus_stand_km: "2.5 km",
    bus_stand_map_url: makeGoogleMapsUrl("Amritsar ISBT Bus Stand", "Amritsar"),
    nearest_airport: "Sri Guru Ram Dass Jee International Airport (ATQ)",
    distance_to_airport_km: "11 km",
    airport_map_url: makeGoogleMapsUrl("Sri Guru Ram Dass Jee International Airport", "Amritsar")
  },
  madurai: {
    nearest_railway_station: "Madurai Junction Railway Station (MDU)",
    distance_to_railway_km: "2 km",
    railway_map_url: makeGoogleMapsUrl("Madurai Junction Railway Station", "Madurai"),
    nearest_bus_stand: "Mattuthavani Bus Terminus Madurai",
    distance_to_bus_stand_km: "6 km",
    bus_stand_map_url: makeGoogleMapsUrl("Mattuthavani Integrated Bus Terminus", "Madurai"),
    nearest_airport: "Madurai Airport (IXM)",
    distance_to_airport_km: "12 km",
    airport_map_url: makeGoogleMapsUrl("Madurai Airport", "Madurai")
  },
  puri: {
    nearest_railway_station: "Puri Railway Station (PURI)",
    distance_to_railway_km: "2 km",
    railway_map_url: makeGoogleMapsUrl("Puri Railway Station", "Puri"),
    nearest_bus_stand: "Puri Gundicha Temple Bus Stand",
    distance_to_bus_stand_km: "1.5 km",
    bus_stand_map_url: makeGoogleMapsUrl("Puri Central Bus Stand", "Puri"),
    nearest_airport: "Biju Patnaik International Airport Bhubaneswar (BBI)",
    distance_to_airport_km: "60 km",
    airport_map_url: makeGoogleMapsUrl("Biju Patnaik International Airport", "Bhubaneswar")
  },
  darjeeling: {
    nearest_railway_station: "New Jalpaiguri Railway Station (NJP)",
    distance_to_railway_km: "70 km",
    railway_map_url: makeGoogleMapsUrl("New Jalpaiguri Junction Railway Station", "Siliguri"),
    nearest_bus_stand: "Darjeeling Bus Stand (Chowk Bazar)",
    distance_to_bus_stand_km: "1 km",
    bus_stand_map_url: makeGoogleMapsUrl("Darjeeling Bus Stand Chowk Bazar", "Darjeeling"),
    nearest_airport: "Bagdogra International Airport (IXB)",
    distance_to_airport_km: "68 km",
    airport_map_url: makeGoogleMapsUrl("Bagdogra Airport", "Siliguri Darjeeling")
  },
  coorg: {
    nearest_railway_station: "Mysore Junction Railway Station (MYS)",
    distance_to_railway_km: "117 km",
    railway_map_url: makeGoogleMapsUrl("Mysore Junction Railway Station", "Mysore"),
    nearest_bus_stand: "KSRTC Bus Station Madikeri Coorg",
    distance_to_bus_stand_km: "1 km",
    bus_stand_map_url: makeGoogleMapsUrl("KSRTC Bus Stand Madikeri", "Coorg"),
    nearest_airport: "Kannur International Airport (CNN)",
    distance_to_airport_km: "90 km",
    airport_map_url: makeGoogleMapsUrl("Kannur International Airport", "Kerala")
  },
  ooty: {
    nearest_railway_station: "Udhagamandalam Railway Station (UAM)",
    distance_to_railway_km: "1 km",
    railway_map_url: makeGoogleMapsUrl("Udhagamandalam Railway Station", "Ooty"),
    nearest_bus_stand: "Ooty Central Bus Stand",
    distance_to_bus_stand_km: "0.5 km",
    bus_stand_map_url: makeGoogleMapsUrl("Ooty Central Bus Stand", "Ooty"),
    nearest_airport: "Coimbatore International Airport (CJB)",
    distance_to_airport_km: "88 km",
    airport_map_url: makeGoogleMapsUrl("Coimbatore International Airport", "Coimbatore")
  }
};


export const DESTINATION_REALITIES = {
  manali: {
    transportConstraints: "Transport Law: Mall Road is strictly a vehicle-free pedestrian zone; autos and private cabs are banned. Old Manali village lanes require walking. Rohtang Pass strictly requires online NGT green permits, and only local HP-registered union taxis are permitted past Gulaba barrier. App cabs (Ola/Uber) do not operate in Kullu-Manali.",
    mustTry: [
      { item: "Grilled Himalayan Rainbow Trout with garlic herb butter at Johnson's Cafe (Circuit House Road) (~₹650)", why: "Freshly caught local glacial trout pan-grilled with mountain herbs — iconic Manali culinary staple.", approxCost: "₹650" },
      { item: "Steamed Siddu with pure desi ghee and walnut-poppy seed chutney at Cafe 1947 (Old Manali) (~₹180)", why: "Traditional fermented Himachali wheat bun steamed and served piping hot with golden clarified butter.", approxCost: "₹180" },
      { item: "Mutton Thukpa & Steamed Tingmo at Chopsticks Restaurant (The Mall) (~₹240)", why: "Tibetan noodle soup simmered in bone broth with hand-twisted steamed tingmo bread.", approxCost: "₹240" }
    ],
    defaultTransit: {
      morningToAfternoon: "15 min walk through Old Manali village lanes (1.2 km)",
      afternoonToEvening: "25 min walk downhill / 10 min auto to Mall Road barrier (2 km)",
      eveningToNight: "5 min walk to riverside cafe"
    }
  },
  jaipur: {
    transportConstraints: "Transport Law: Walled Pink City (Johari, Tripolia, Bapu Bazaar) has intense vehicular congestion and strict one-way car bans; e-rickshaws and walking are the most efficient transit. Private vehicles cannot park near Hawa Mahal. Amber Fort uphill ascent requires authorized government-regulated 4WD jeeps (₹500 return) or walking up the stone ramps; elephant rides have strict morning slots.",
    mustTry: [
      { item: "Pyaaz Kachori with spicy kadhi & tamarind chutney at Rawat Mishtan Bhandar (Station Road) (~₹60)", why: "Crisp, multilayered flaky crust bursting with slow-caramelized spiced onion filling, fried fresh every 15 minutes.", approxCost: "₹60" },
      { item: "Dal Baati Churma Royal Thali at Laxmi Mishtan Bhandar (LMB, Johari Bazaar) (~₹550)", why: "Wood-fired baked baatis crushed in pure cow ghee with panchmel dal, gatte ki sabzi, and jaggery churma.", approxCost: "₹550" },
      { item: "Kesar Malai Ghewar at Sodhani Sweets (Tonk Road / Lal Kothi) (~₹180/piece)", why: "Honeycomb disc sweet soaked in saffron syrup and crowned with thick malai rabri and silver vark.", approxCost: "₹180" }
    ],
    defaultTransit: {
      morningToAfternoon: "5 min walk (350m along Sireh Deori Bazar)",
      afternoonToEvening: "2 min walk (100m adjacent complex)",
      eveningToNight: "10 min walk through Johari Bazaar stalls (400m)"
    }
  },
  udaipur: {
    transportConstraints: "Transport Law: Old City lanes surrounding Jagdish Chowk, Gangaur Ghat, and Lal Ghat are historic pedestrian and two-wheeler corridors. Four-wheeler cabs are strictly banned from entering and must drop passengers at outer gates (Rang Niwas / Hathipole); navigate via walking or local auto-rickshaws. Lake Palace and Jag Mandir are accessible strictly via authorized Mewar jetty boats from Bansi Ghat.",
    mustTry: [
      { item: "Dal Baati Churma with garlic chutney at Krishna Dal Bati Restro (Polo Ground) (~₹320)", why: "Authentic unlimited Mewari thali served with hand-crushed roasted wheat baatis drenched in pure desi ghee.", approxCost: "₹320" },
      { item: "Mawa Kachori with hot spiced syrup at Jodhpur Sweets (Town Hall Road) (~₹70)", why: "Rich sweetened mawa (khoya) filled pastry deep-fried to golden perfection and dipped in warm cardamom syrup.", approxCost: "₹70" },
      { item: "Kulhad Coffee & Poha breakfast at Fatehsagar Paal stalls (~₹60)", why: "Frothy whipped chocolate-dusted coffee sipped by the breezy morning lakeside promenade.", approxCost: "₹60" }
    ],
    defaultTransit: {
      morningToAfternoon: "3 min walk (150m through palace courtyard)",
      afternoonToEvening: "5 min walk downhill to ghat jetty (300m)",
      eveningToNight: "15 min sunset boat ride on Lake Pichola"
    }
  },
  jodhpur: {
    transportConstraints: "Transport Law: The historic Blue City surrounding Mehrangarh Fort (Navchokiya and Brahmpuri) has alleys barely 5 to 6 feet wide; four-wheelers and large cars cannot enter under any circumstance. Walking or hiring an experienced local auto-rickshaw driver is mandatory. Sardar Market near the Clock Tower is pedestrian-heavy with restricted car entry.",
    mustTry: [
      { item: "Shahi Samosa & Crispy Mirchi Bada at Shahi Samosa / Janta Sweet Home (Nai Sarak) (~₹35)", why: "Giant Bhavnagri green chilli stuffed with spiced potato mash and fried in seasoned gram-flour batter.", approxCost: "₹35" },
      { item: "Creamy Makhania Lassi in earthen kulhad at Shri Mishrilal Hotel (Clock Tower / Sardar Market) (~₹50)", why: "Ultra-thick churned sweet yoghurt flavored with cardamom, saffron, and crowned with a thick yellow dollop of makhan.", approxCost: "₹50" },
      { item: "Fiery Mathania Laal Maas at Gypsy Dining Hall / Indique Rooftop (~₹480)", why: "Tender desert mutton slow-braised with pure desi ghee and fiery sun-dried Mathania red chillies.", approxCost: "₹480" }
    ],
    defaultTransit: {
      morningToAfternoon: "10 min auto / 15 min walk down fort ramp (1 km)",
      afternoonToEvening: "10 min walk through Sardar Market alleys (400m)",
      eveningToNight: "15 min auto to rooftop dinner view"
    }
  },
  varanasi: {
    transportConstraints: "Transport Law: The entire 84-ghat riverfront (Assi to Rajghat) and the ancient labyrinthine Vishwanath Temple galis are 100% pedestrianized. No cars, autos, or motor vehicles can enter the inner alleys. Vehicles drop at Godowlia Chowk or Maidagin barricades; walking or cycle-rickshaws are mandatory. Between ghats, walking the stone steps or taking hand-rowed wooden boats is the only transit.",
    mustTry: [
      { item: "Banarasi Tamatar Chaat in clay kulhad at Kashi Chat Bhandar (Godowlia Chowk) (~₹60)", why: "Hot spiced mashed tomato and cashew preparation spiked with cumin sugar syrup, served piping hot in earthenware.", approxCost: "₹60" },
      { item: "Malaiyo (saffron milk cloud froth) at Shreeji Sweets (Thatheri Bazar, winter mornings) (~₹50)", why: "Delicate dew-churned milk froth infused with saffron, cardamom, and crushed pistachios, served until 11 AM.", approxCost: "₹50" },
      { item: "Crispy Kachori Sabzi & Jalebi breakfast at Ram Bhandar (Chowk) (~₹70)", why: "Urad dal-stuffed kachoris served with spicy hing-infused aloo rassa and warm syrupy jalebis.", approxCost: "₹70" },
      { item: "Special Maghai Paan at Keshav Tambool Bhandar (near Lanka / Assi) (~₹40)", why: "Tender betel leaf layered with gulkand, natural rose petals, kattha, and aromatic spices.", approxCost: "₹40" }
    ],
    defaultTransit: {
      morningToAfternoon: "15 min wooden boat ride / 20 min walk along stone ghats (1.5 km)",
      afternoonToEvening: "4 min walk through pedestrian Vishwanath gali (180m)",
      eveningToNight: "10 min walk along ghat steps to aarti platform (450m)"
    }
  },
  agra: {
    transportConstraints: "Transport Law: Taj Trapezium Zone (TTZ) legally bars all private cars, app cabs, and petrol/diesel autos within 500m of the Taj Mahal. You must park at Shilpgram (East Gate) and use mandatory government battery-operated golf carts / e-rickshaws (₹20) or walk. Taj Mahal is strictly closed on Fridays. Agra Fort requires standard auto or cab from Taj (10 min).",
    mustTry: [
      { item: "Angoori & Kesar Petha at Panchhi Petha Store (Noori Gate / Sadar Bazaar) (~₹160/box)", why: "Original translucent ash-gourd sweets infused with saffron threads and kewra essence.", approxCost: "₹160" },
      { item: "Crispy Bedai with spicy Dubki Aloo & Jalebi at Deviram Sweets (Pratappura) (~₹80)", why: "Deep-fried urad dal puffed puris served with watery, fiery fenugreek-potato curry and hot crispy jalebis.", approxCost: "₹80" },
      { item: "Mughlai Galouti Kebab with Roomali Roti at Pinch of Spice (Fatehabad Road) (~₹480)", why: "Melt-in-the-mouth minced meat patty smoked over charcoal with 32 royal spices.", approxCost: "₹480" }
    ],
    defaultTransit: {
      morningToAfternoon: "10 min battery cart + 10 min cab to Agra Fort (2.8 km)",
      afternoonToEvening: "20 min cab across Yamuna bridge to Mehtab Bagh (7 km)",
      eveningToNight: "15 min cab return to Sadar Bazaar food street"
    }
  },
  rishikesh: {
    transportConstraints: "Transport Law: Ram Jhula, Lakshman Jhula / Janki Setu, and the immediate Ganga riverbank paths are pedestrian and two-wheeler zones only. Cars and cabs cannot cross the pedestrian suspension bridges and must drop passengers at designated parking lots (Muni Ki Reti or Tapovan). Shared Vikrams (tempo autos) run fixed routes along Badrinath road. All meat, fish, and alcohol are strictly illegal within municipal limits.",
    mustTry: [
      { item: "Aloo Puri & Bedmi breakfast at Chotiwala Restaurant (Swarg Ashram Ghat) (~₹140)", why: "Iconic pilgrims' morning meal of spiced potato curry, fenugreek bedmi puri, and sooji halwa by the river.", approxCost: "₹140" },
      { item: "Wood-fired Thin Crust Margherita at Beatles Cafe / The 60's (Tapovan) (~₹380)", why: "Artisanal stone-baked pizza served with panoramic sunset vistas of the turquoise Ganges below.", approxCost: "₹380" },
      { item: "Ayurvedic Herbal Kadha & Ginger Lemon Honey Tea at Little Buddha Cafe (Laxman Jhula) (~₹90)", why: "Freshly brewed immunity tonic made with holy basil (tulsi), black pepper, and raw forest honey.", approxCost: "₹90" }
    ],
    defaultTransit: {
      morningToAfternoon: "10 min walk across Janki Setu pedestrian bridge (400m)",
      afternoonToEvening: "15 min shared auto / walk along river promenade (1.8 km)",
      eveningToNight: "10 min walk to evening aarti steps"
    }
  },
  shimla: {
    transportConstraints: "Transport Law: The Ridge, Mall Road, and Lakkar Bazaar are strictly vehicle-free pedestrian zones enforced by Himachal Police. No cabs, autos, or private vehicles are permitted. To reach Mall Road from the lower Cart Road parking/bus stand, take the Himachal Tourism Municipal Lift (₹10/person) or walk the steep uphill pedestrian slope. App-cabs (Ola/Uber) do not exist.",
    mustTry: [
      { item: "Himachali Ghee-Dipped Siddu with walnut chutney at Wake & Bake Cafe (The Ridge, Mall Road) (~₹190)", why: "Traditional fermented steamed bun stuffed with poppy seeds and walnuts, served swimming in pure clarified butter.", approxCost: "₹190" },
      { item: "Authentic Pahadi Sepu Vadi & Chana Madra at Himachali Rasoi (Middle Bazaar) (~₹220)", why: "Classic celebratory Dham dish cooked in slow yoghurt gravy spiced with cloves and cardamom.", approxCost: "₹220" },
      { item: "Warm Apple Pie & fresh fruit cider at Trishool Bakers (The Mall near Gaiety Theatre) (~₹120)", why: "Colonial-era bakery producing Shimla's most beloved apple desserts made from Kotgarh orchard apples.", approxCost: "₹120" }
    ],
    defaultTransit: {
      morningToAfternoon: "3 min walk along pedestrian Mall Road (150m)",
      afternoonToEvening: "8 min walk to Lakkar Bazaar craft stalls (350m)",
      eveningToNight: "15 min ropeway / walk to Jakhu Ridge viewpoint"
    }
  },
  "leh-ladakh": {
    transportConstraints: "Transport Law: Outside non-Ladakh private commercial vehicles and self-drive rental cabs (Zoomcar, Myles) are legally banned from tourist routes beyond Leh town by the Ladakh Taxi Union. You MUST hire an authorized local Ladakh-registered 4x4 taxi (Innova/Scorpio/Aria) from the Leh Taxi Stand. Mandatory 48-hour acclimatization in Leh (3,500m) is enforced; do NOT schedule high passes on Day 1 or Day 2. Inner Line Permits (ILP) required for Pangong, Nubra, and Tso Moriri.",
    mustTry: [
      { item: "Tibetan Yak Cheese Pizza & Salty Butter Tea (Po Cha) at Bon Appetit (Changspa Road, Leh) (~₹450)", why: "Locally churned dry yak cheese melted on wood-fired crust, paired with traditional pink churned salt-butter tea.", approxCost: "₹450" },
      { item: "Authentic Ladakhi Skyu (hand-rolled vegetable & mutton pasta stew) at Tibetan Kitchen (Fort Road) (~₹280)", why: "Traditional winter comfort stew cooked with slow-simmered root vegetables and coin-sized dough pasta.", approxCost: "₹280" },
      { item: "Wild Apricot Jam & Seabuckthorn Juice at Dzomsa Organic Store (Main Bazaar) (~₹150)", why: "Cold-pressed organic seabuckthorn juice packed with Vitamin C, harvested from wild Nubra riverbanks.", approxCost: "₹150" }
    ],
    defaultTransit: {
      morningToAfternoon: "5 min gentle walk down palace stone steps (300m)",
      afternoonToEvening: "15 min cab / climb up stairs to Shanti Stupa (2.5 km)",
      eveningToNight: "10 min cab to Fort Road restaurant cluster"
    }
  },
  kerala: {
    transportConstraints: "Transport Law: Houseboats on the backwaters are strictly mandated by the Kerala Port Authority to anchor by 05:30 PM to allow local fishermen to lay nets; overnight cruising is legally prohibited. In historic Fort Kochi, the heritage zone around the Chinese Fishing Nets and Jewish Synagogue is best navigated on foot or cycle; government ro-ro vehicle ferries connect Fort Kochi to Vypin island (₹5/ticket).",
    mustTry: [
      { item: "Karimeen Pollichathu (Pearl Spot wrapped in Banana Leaf) at Grand Pavilion (MG Road, Kochi) (~₹480)", why: "Backwater pearl spot fish marinated in spicy shallot-curry leaf masala and pan-roasted in banana leaves.", approxCost: "₹480" },
      { item: "Traditional 24-Dish Kerala Sadya on fresh banana leaf at Mothers Veg Plaza (Bakery Junction, Trivandrum) (~₹280)", why: "Elaborate vegetarian feast with avial, olan, thoran, sambar, pachadi, and three types of sweet payasam.", approxCost: "₹280" },
      { item: "Fresh Coconut Toddy with Spicy Duck Roast at Mullakkal Shappu (Alappuzha) (~₹340)", why: "Village toddy shop delicacy featuring fiery pepper-coriander duck curry paired with sweet morning toddy.", approxCost: "₹340" }
    ],
    defaultTransit: {
      morningToAfternoon: "15 min backwater canoe / motorboat to jetty (2 km)",
      afternoonToEvening: "10 min auto / 15 min walk through heritage alleyways (1.2 km)",
      eveningToNight: "5 min walk to waterside seafood shack"
    }
  },
  munnar: {
    transportConstraints: "Transport Law: Commercial heavy vehicles and app cabs do not operate on estate tracks. Kolukkumalai Sunrise point strictly mandates hiring authorized local 4x4 off-road jeeps from Suryanelli base (₹2,500/jeep); standard private hatchbacks and sedans cannot negotiate the rocky boulder trails. Walking along tea plantations requires municipal permits or staying at estate properties.",
    mustTry: [
      { item: "Kerala Malabar Parotta with Pepper Chicken Curry at Rapsy Restaurant (Main Bazaar, Munnar) (~₹210)", why: "Flaky, layered handmade parottas served with spicy black pepper gravy in Munnar's oldest hill eatery.", approxCost: "₹210" },
      { item: "Fresh Hand-Rolled Orthodox Orange Pekoe Tea at Lockhart Tea Mill (~₹60/cup)", why: "Tasting single-estate high-grown tea directly at India's oldest operational 1857 orthodox processing factory.", approxCost: "₹60" },
      { item: "Steamed Banana Appam & Puttu with Kadala Curry at Saravana Bhavan (MG Road) (~₹140)", why: "Cylindrical steamed rice-coconut cakes served with spicy black chickpea curry.", approxCost: "₹140" }
    ],
    defaultTransit: {
      morningToAfternoon: "25 min cab along winding tea estate roads (8 km)",
      afternoonToEvening: "15 min cab to viewpoint / spice garden (5 km)",
      eveningToNight: "10 min walk through hill town bazaar"
    }
  },
  goa: {
    transportConstraints: "Transport Law: App-based taxi aggregators (Ola and Uber) are legally restricted from airport pickups, beach zones, and resort areas by the Goa Taxi Union. Only the GoaMiles government app or prepaid airport taxi booths operate. The most common and economical transit is renting self-drive scooters/geared bikes (₹350–600/day) or self-drive cars; always carry a valid driving licence and helmet.",
    mustTry: [
      { item: "Goan Fish Curry Thali with Kingfish Rava Fry at Ritz Classic (18th June Road, Panaji) (~₹350)", why: "Coconut-kokum fish curry served with red Goan unpolished rice, tisreo (clams), kismur, and crisp semolina-fried fish.", approxCost: "₹350" },
      { item: "Authentic Pork Vindaloo & Poi Bread at Mum's Kitchen (Miramar, Panaji) (~₹460)", why: "Traditional Catholic Goan recipe using toddy vinegar, garlic, Kashmiri chillies, and warm local crusty poi.", approxCost: "₹460" },
      { item: "Multi-layered Warm Bebinca with vanilla ice cream at Martin's Corner (Betalbatim) (~₹220)", why: "Traditional 7-layer Indo-Portuguese pudding baked with coconut milk, egg yolks, nutmeg, and ghee.", approxCost: "₹220" }
    ],
    defaultTransit: {
      morningToAfternoon: "15 min scooter / cab ride along coastal road (5 km)",
      afternoonToEvening: "20 min drive between beach sectors (7 km)",
      eveningToNight: "5 min beach walk to shack dinner"
    }
  },
  hampi: {
    transportConstraints: "Transport Law: Archeological Survey of India (ASI) prohibits all motorized private vehicles within a 1-km radius of the Vijaya Vittala Temple and the King's Balance. You must park at the gezi-shed parking and take the mandatory ASI eco-friendly battery golf carts (₹20/return) or walk. Bicycles and mopeds (₹150–400/day) are the traditional and most convenient transit mode across the 26 sq km heritage ruins.",
    mustTry: [
      { item: "Authentic North Karnataka Jolada Rotti Oota at Mango Tree Restaurant (near Temple Bazaar) (~₹220)", why: "Unleavened sorghum flatbreads served with yennegai (stuffed brinjal), shenga chutney powder, and curd.", approxCost: "₹220" },
      { item: "Crispy Hampi Benne Dosa with spicy coconut chutney at Gopi Guest House Diner (Hampi Bazaar) (~₹80)", why: "Thick, golden, butter-roasted dosa with a fluffy white interior, served on banana leaves.", approxCost: "₹80" },
      { item: "Middle Eastern Shakshuka & Fresh Pomegranate Lassi at Laughing Buddha Cafe (Hippie Island / Sanapur) (~₹240)", why: "Eggs poached in spiced tomato sauce served on floor mattresses overlooking paddy fields.", approxCost: "₹240" }
    ],
    defaultTransit: {
      morningToAfternoon: "10 min cycle / battery cart ride (1.2 km)",
      afternoonToEvening: "15 min cycle / walk along Tungabhadra river path (1.5 km)",
      eveningToNight: "5 min coracle boat crossing across river (₹50)"
    }
  },
  mysore: {
    transportConstraints: "Transport Law: Mysore Palace 72-acre interior compound has pedestrian paved walkways; private vehicles park outside Varaha or Jayamarthanda gates. Battery-operated transit carts operate for seniors inside the palace campus. Chamundi Hill has dedicated KSRTC uphill shuttle buses from the central bus stand; parking atop the hill is regulated on weekends.",
    mustTry: [
      { item: "Mylari Butter Masala Dosa with coconut chutney at Original Vinayaka Mylari (Nazarbad Main Road) (~₹80)", why: "Cloud-soft, melt-in-mouth folded butter dosa stuffed with signature spiced onion-coriander saagu.", approxCost: "₹80" },
      { item: "Warm Ghee Mysore Pak at Guru Sweets (Sayyaji Rao Road) (~₹90/100g)", why: "The birthplace of Mysore Pak — made with chickpea flour, sugar, and generous melted pure cow ghee.", approxCost: "₹90" },
      { item: "Traditional Mysore Royal Vegetarian Thali at Hotel Dasaprakash (Gandhi Square) (~₹210)", why: "Historic heritage meal featuring bisibelebath, kosambari, Mysore rasam, and traditional sweet holige.", approxCost: "₹210" }
    ],
    defaultTransit: {
      morningToAfternoon: "10 min auto / 15 min walk to Devaraja Market (1.5 km)",
      afternoonToEvening: "25 min cab up Chamundi Hill road (12 km)",
      eveningToNight: "20 min cab return to illuminated palace grounds"
    }
  },
  shillong: {
    transportConstraints: "Transport Law: Police Bazar (PB) central square is pedestrian-only with zero vehicular entry. App cabs (Uber/Ola) do NOT operate in Meghalaya. Transit is conducted via shared black-and-yellow local Maruti 800/Alto cabs on fixed point-to-point fares (₹20–50/seat) or hiring a private tourist taxi from the Meghalaya Tourism taxi stand. The Cherrapunji Double Decker Living Root Bridge trek involves 3,500 stone stairs — 100% foot trail.",
    mustTry: [
      { item: "Jadoh (Khasi wild red rice cooked in pork stock) & Dohkhlieh at Trattoria (Police Bazar) (~₹180)", why: "Authentic Khasi tribal dish flavored with black sesame, served with shredded pork and green chili salad.", approxCost: "₹180" },
      { item: "Steamed Pork Momos & Clear Bamboo Shoot Broth at Bamboo Hut (Laban) (~₹160)", why: "Handmade dumplings stuffed with tender mountain pork, accompanied by fermented fiery bamboo shoot dip.", approxCost: "₹160" },
      { item: "Cherrapunji Wild Orange Blossom Honey with Waffles at Dylan's Cafe (Risa Colony) (~₹220)", why: "Pure forest honey harvested from Khasi sub-tropical slopes served in an iconic tribute cafe.", approxCost: "₹220" }
    ],
    defaultTransit: {
      morningToAfternoon: "15 min shared cab / walk through Police Bazar (1.8 km)",
      afternoonToEvening: "25 min cab to Ward's Lake / Shillong Peak (6 km)",
      eveningToNight: "10 min walk to cafe hub"
    }
  },
  andaman: {
    transportConstraints: "Transport Law: App-based cabs do not operate in the Andaman & Nicobar archipelago. All inter-island transit (Port Blair to Havelock / Swaraj Dweep / Neil) requires booking high-speed catamaran ferries (Makruzz, Nautika, Green Ocean) or DSS government ships at least 15–30 days in advance. Auto-rickshaws operate only on South Andaman; Havelock and Neil transit is best managed by hiring local scooters (₹500/day) or pre-contracted union cabs.",
    mustTry: [
      { item: "Charcoal-Grilled Andaman Red Snapper with garlic butter at New Lighthouse Restaurant (Port Blair) (~₹550)", why: "Catch-of-the-day Andaman sea fish grilled fresh over charcoal, served with lemon-tamarind dip.", approxCost: "₹550" },
      { item: "Fresh Coconut Milk Tiger Prawn Curry at Something Different - A Beachside Cafe (Havelock Island) (~₹480)", why: "Succulent Bay of Bengal king prawns simmered in freshly squeezed island coconut milk and curry leaves.", approxCost: "₹480" },
      { item: "Banana Blossom Cutlets & Fresh Tender Coconut at Neil Island Bharatpur Beach Shacks (~₹90)", why: "Traditional island plantain flower cutlets spiced with ginger, served right on the coral sand.", approxCost: "₹90" }
    ],
    defaultTransit: {
      morningToAfternoon: "15 min auto / cab along Marine Hill (3.5 km)",
      afternoonToEvening: "20 min cab / boat to Cellular Jail Light & Sound (4 km)",
      eveningToNight: "5 min walk to seaside dining terrace"
    }
  },
  amritsar: {
    transportConstraints: "Transport Law: The 1-km Heritage Street boulevard stretching from Town Hall to the Golden Temple is a completely pedestrianized marble promenade; all cars, auto-rickshaws, and motorcycles are strictly banned. Free municipal battery golf carts operate for elderly and differently-abled visitors. Head coverings (scarf/rumāl) and removal of footwear are legally and culturally mandatory inside the Golden Temple complex.",
    mustTry: [
      { item: "Amritsari Aloo Kulcha with Chana & Tamarind Chutney at Kulcha Land (Ranjit Avenue) (~₹120)", why: "Multi-layered tandoor-baked flatbread loaded with spiced mashed potatoes and drenched in fresh melting white makhan.", approxCost: "₹120" },
      { item: "Slow-simmered Mah ki Dal & Makki Roti at Kesar Da Dhaba (Chowk Passian) (~₹220)", why: "Black lentils slow-cooked for 12 hours over brass cauldrons in pure desi ghee since 1916.", approxCost: "₹220" },
      { item: "Thick Malai-Topped Sweet Peda Lassi in tall brass glass at Ahuja Milk Center (near Hindu College) (~₹80)", why: "Rich, creamy churned curd topped with condensed milk peda and a thick spoonable layer of fresh malai.", approxCost: "₹80" },
      { item: "Crispy Carom-Spiced Amritsari Fried Fish at Makhan Fish Corner (Majitha Road) (~₹340)", why: "Fresh river Sole fish marinated in ajwain, gram flour, and secret Punjabi spices, deep-fried crisp.", approxCost: "₹340" }
    ],
    defaultTransit: {
      morningToAfternoon: "2 min walk across pedestrian Heritage Street (150m)",
      afternoonToEvening: "45 min cab (30 km) to Wagah Border ceremony",
      eveningToNight: "45 min cab return to Old City food lanes"
    }
  },
  madurai: {
    transportConstraints: "Transport Law: The 4 concentric Chithirai Streets encircling the Meenakshi Amman Temple are designated pedestrian and non-polluting zones. All auto-rickshaws and cabs must drop passengers outside the outer police barriers. Footwear must be deposited at temple entry counters (₹5); leather belts and bags are prohibited inside.",
    mustTry: [
      { item: "Special Famous Jigarthanda at Famous Jigarthanda (East Marret Street) (~₹70)", why: "Madurai's legendary royal dessert drink made with badam pisin (almond resin), nannari syrup, and basundi ice cream.", approxCost: "₹70" },
      { item: "Kari Dosa (Three-Layer Minced Mutton Dosa) at Konar Mes (Simmakkal) (~₹220)", why: "Thick fermented rice base topped with beaten egg and a generous mound of spicy Chettinad minced mutton.", approxCost: "₹220" },
      { item: "14-Piece Ghee Mini Idli floating in Sambar at Murugan Idli Shop (West Masi Street) (~₹110)", why: "Button idlis drenched in piping hot spiced lentil sambar and crowned with pure melted country ghee.", approxCost: "₹110" }
    ],
    defaultTransit: {
      morningToAfternoon: "5 min walk through pedestrian temple corridor (300m)",
      afternoonToEvening: "12 min auto to Thirumalai Nayakkar Palace (2 km)",
      eveningToNight: "10 min walk to evening dinner hub"
    }
  },
  puri: {
    transportConstraints: "Transport Law: The Grand Road (Bada Danda) immediately preceding Lord Jagannath Temple is restricted for motorized vehicles; battery-rickshaws, cycle-rickshaws, or walking are required. Note: Non-Hindus are legally restricted from entering the inner sanctum of Shree Jagannath Temple by temple trust laws (viewing is available from the Raghunandan Library roof across the street).",
    mustTry: [
      { item: "Woodfire Baked Chhena Poda at Nimapada Sweets (Grand Road near Medical Square) (~₹120/250g)", why: "Lord Jagannath's revered sweet — fresh cottage cheese kneaded with cardamom and caramelized over sal leaves.", approxCost: "₹120" },
      { item: "Abhada Mahaprasad (Temple Dalma & Kanika Rice) at Ananda Bazar (Inside Jagannath Temple) (~₹110)", why: "Sacred earthen-pot cooked meal of sweetened ghee rice, lentils stewed with raw papaya, and dry ginger.", approxCost: "₹110" },
      { item: "Crispy Mustard Fried Pomfret & Prawn Curry at Wildgrass Restaurant (VIP Road) (~₹380)", why: "Traditional Odia coastal seafood seasoned with pungent yellow mustard paste (besara) and green chilies.", approxCost: "₹380" }
    ],
    defaultTransit: {
      morningToAfternoon: "10 min cycle rickshaw / walk along Grand Road (1 km)",
      afternoonToEvening: "15 min auto / walk to Golden Beach promenade (2 km)",
      eveningToNight: "5 min beach stroll to coastal dinner shack"
    }
  },
  darjeeling: {
    transportConstraints: "Transport Law: Chowrasta (The Mall) and Observatory Hill are strict pedestrian zones with zero vehicular access. Shared four-wheel-drive jeeps (Bolero/Sumo) operate from Chowk Bazaar and Clubside stand for inter-city travel; standard auto-rickshaws do NOT exist in Darjeeling due to steep 1:3 hill gradients. Tiger Hill excursions depart strictly at 03:45 AM via pre-booked shared jeeps.",
    mustTry: [
      { item: "First-Flush Single Estate Muscatel Tea at Nathmulls Tea Lounge (The Mall, Chowrasta) (~₹150/pot)", why: "Spring-harvested hand-plucked tea with natural floral notes of muscat grapes, served in porcelain sets.", approxCost: "₹150" },
      { item: "Steamed Pork & Veg Momos with fiery dalle chilli chutney at Keventers Open-Air Terrace (Nehru Road) (~₹180)", why: "Traditional Himalayan momos paired with hot English cocoa overlooking the Kangchenjunga range.", approxCost: "₹180" },
      { item: "Crispy Nepali Sel Roti with spicy Aloo Dum at Chowk Bazaar Street Stalls (~₹60)", why: "Ring-shaped fried rice-flour doughnut accompanied by slow-cooked Darjeeling mountain potato curry.", approxCost: "₹60" }
    ],
    defaultTransit: {
      morningToAfternoon: "20 min shared jeep return from Tiger Hill / Batasia (6 km)",
      afternoonToEvening: "10 min walk along pedestrian Mall Road (400m)",
      eveningToNight: "5 min walk to colonial bakery terrace"
    }
  },
  coorg: {
    transportConstraints: "Transport Law: App cabs (Uber/Ola) are nonexistent in the Western Ghats of Coorg. Inter-town routes (Madikeri to Kushalnagar / Virajpet) require personal vehicles or pre-hired private cabs. Reaching Mandalpatti peak or Nishani Motte strictly requires hiring authorized 4x4 Mahindra jeeps from the base (₹1,800–2,200/jeep) due to unpaved vertical mud tracks.",
    mustTry: [
      { item: "Kodava Pandi Curry (Pork with Kachampuli vinegar) at Coorg Cuisine (Madikeri Main Road) (~₹320)", why: "The iconic Kodava warrior dish cooked with dark wild Garcinia gummi-gutta (kachampuli) vinegar and ground black pepper.", approxCost: "₹320" },
      { item: "Steamed Akki Rotti with Kootu Curry at Raintree Restaurant (near Town Hall, Madikeri) (~₹180)", why: "Fragrant broken rice flour flatbreads served with mixed vegetable and roasted coconut stew.", approxCost: "₹180" },
      { item: "Estate Peaberry Arabica Coffee & Handmade Cardamom Chocolate at Ainmane Cafe (Madikeri) (~₹140)", why: "Fresh-roasted single-origin shade-grown Coorg coffee paired with spice-infused artisanal dark chocolate.", approxCost: "₹140" }
    ],
    defaultTransit: {
      morningToAfternoon: "25 min cab through winding spice plantation roads (10 km)",
      afternoonToEvening: "30 min 4x4 jeep track to Mandalpatti ridge (14 km)",
      eveningToNight: "20 min cab back to Madikeri town center"
    }
  },
  ooty: {
    transportConstraints: "Transport Law: Commercial Street and the central market have restricted one-way vehicular entry and designated pedestrian shopping hours. Commercial app cabs do not operate; local black-and-yellow tourist taxis run from the Ooty railway station stand on fixed union tariffs. Nilgiri Mountain Railway (Toy Train) Joyrides require IRCTC reservations months in advance or early 5 AM queueing for unreserved second-class tokens.",
    mustTry: [
      { item: "Traditional Ooty Crispy Varkey at West Coast Bakery (Commercial Road) (~₹90/box)", why: "Flaky, multi-layered savory hill biscuits baked with wheat flour, vegetable fat, and semolina — pairs with Nilgiri tea.", approxCost: "₹90" },
      { item: "Handmade Roasted Almond & Rum-Raisin Chocolates at King Star Confectionery (Commercial Road) (~₹180/100g)", why: "Established in 1942, India's oldest fudge and chocolate cottage maker utilizing local dairy.", approxCost: "₹180" },
      { item: "Nilgiri Green Herb Mutton Biryani at Shinkow's / Kurumba Village Diner (~₹340)", why: "Fragrant short-grain jeeraga samba rice cooked with fresh mountain mint, coriander, and native Nilgiri spices.", approxCost: "₹340" }
    ],
    defaultTransit: {
      morningToAfternoon: "10 min auto / 15 min walk to Botanical Gardens (1.5 km)",
      afternoonToEvening: "20 min cab to Ooty Lake / Doddabetta Peak (5 km)",
      eveningToNight: "10 min walk along Commercial Road sweet shops"
    }
  }
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
    mustTry: DESTINATION_REALITIES["manali"].mustTry,
    packing: ["Warm down jacket (even in summer)", "Waterproof trekking shoes", "Sunscreen SPF 50+ (high altitude UV)", "Woollen gloves and cap", "Motion sickness tablets for mountain roads"],
    localInsights: DESTINATION_REALITIES["manali"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["jaipur"].mustTry,
    packing: ["Sunscreen SPF 50+", "Comfortable walking shoes", "Cotton kurtas / light scarves", "Sunglasses & hat"],
    localInsights: DESTINATION_REALITIES["jaipur"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["udaipur"].mustTry,
    packing: ["Light cottons", "Modest clothing for temples", "Comfortable walking shoes", "Sunscreen and sunhat"],
    localInsights: DESTINATION_REALITIES["udaipur"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["jodhpur"].mustTry,
    packing: ["Sunscreen SPF 50+", "Comfortable cotton clothes", "Walking shoes for fort ramps", "Sunglasses & hat"],
    localInsights: DESTINATION_REALITIES["jodhpur"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["varanasi"].mustTry,
    packing: ["Modest clothing covering shoulders and knees", "Easy slip-on shoes for temple visits", "Hand sanitiser", "Small cash bills (₹10-50)"],
    localInsights: DESTINATION_REALITIES["varanasi"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["agra"].mustTry,
    packing: ["Comfortable walking shoes (flat cobblestones at monuments)", "Light cotton clothes", "Sunscreen", "Camera with extra battery"],
    localInsights: DESTINATION_REALITIES["agra"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["rishikesh"].mustTry,
    packing: ["Quick-dry clothes for water sports", "Modest wear for temples and ashrams", "Waterproof sandals", "Yoga mat if doing classes"],
    localInsights: DESTINATION_REALITIES["rishikesh"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["shimla"].mustTry,
    packing: ["Warm woollen layers (even in summer evenings)", "Waterproof jacket (monsoon season)", "Comfortable walking shoes", "Gloves for winter season"],
    localInsights: DESTINATION_REALITIES["shimla"].transportConstraints,
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
        theme: "Indus Valley Monasteries Trail",
        activities: [
          { timeOfDay: "Morning", locationName: "Shey Palace & Monastery", googleMapsLink: makeGoogleMapsUrl("Shey Palace", "Leh Ladakh"), description: "Visit the 17th-century former summer retreat of Ladakhi kings, featuring a 12-metre seated Shakyamuni Buddha and sacred holy fish pond.", transitToNext: "10 min cab along Indus highway (5 km)" },
          { timeOfDay: "Afternoon", locationName: "Thiksey Monastery Ladakh", googleMapsLink: makeGoogleMapsUrl("Thiksey Monastery", "Leh Ladakh"), description: "Explore the 12-storey whitewashed monastery resembling Lhasa's Potala Palace, housing the breathtaking 15-metre Maitreya Buddha statue.", transitToNext: "25 min cab (18 km)" },
          { timeOfDay: "Evening", locationName: "Hemis Monastery & Museum", googleMapsLink: makeGoogleMapsUrl("Hemis Monastery", "Leh Ladakh"), description: "Tour Ladakh's wealthiest Drukpa lineage monastery tucked inside a secluded mountain gorge with ancient thangkas and sacred silver chortens." }
        ],
        stay: { name: "The Grand Dragon Ladakh", type: "Luxury Mountain Hotel", whyPick: "Centrally located with Himalayan-view rooms and Ladakhi decor", approxRate: "₹8,000/night" },
        dining: [{ name: "Tibetan Kitchen Leh", specialty: "Thukpa Noodle Soup & Tsampa", priceRange: "₹250-450" }, { name: "Bon Appetit Leh", specialty: "Yak Cheese Pizza & Apple Tea", priceRange: "₹400-700" }]
      },
      {
        theme: "Khardung La Pass & Nubra Valley Safari",
        activities: [
          { timeOfDay: "Morning", locationName: "Khardung La Pass", googleMapsLink: makeGoogleMapsUrl("Khardung La Pass", "Leh Ladakh"), description: "Drive up to Khardung La (5,359 m) — gateway to Nubra Valley with snowfield panoramas across the Karakoram range.", transitToNext: "30 min cab downhill to Diskit" },
          { timeOfDay: "Afternoon", locationName: "Diskit Monastery & Giant Buddha", googleMapsLink: makeGoogleMapsUrl("Diskit Monastery", "Nubra Valley Ladakh"), description: "Visit the 14th-century monastery and gaze upon the 32-metre multi-coloured Maitreya Buddha facing the Shyok River.", transitToNext: "15 min cab (7 km)" },
          { timeOfDay: "Evening", locationName: "Hunder Sand Dunes Nubra Valley", googleMapsLink: makeGoogleMapsUrl("Hunder Sand Dunes Nubra Valley", "Ladakh"), description: "Ride double-humped Bactrian camels across the surreal white desert sand dunes between snow-clad peaks." }
        ],
        stay: { name: "Nubra Ecolodge", type: "Traditional Ladakhi Mud House Stay", whyPick: "Authentic organic farm stay under billions of stars in Nubra Valley", approxRate: "₹3,500/night" },
        dining: [{ name: "Diskit Village Homestay", specialty: "Ladakhi Skyu & Butter Tea", priceRange: "Homestay inclusive" }]
      }
    ],
    mustTry: DESTINATION_REALITIES["leh-ladakh"].mustTry,
    packing: ["Warm down jacket (0°C nights even in summer)", "Altitude sickness medicine (Diamox)", "Sunscreen SPF 70+ (extreme UV at high altitude)", "Warm thermals", "Multiple layers"],
    localInsights: DESTINATION_REALITIES["leh-ladakh"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["kerala"].mustTry,
    packing: ["Light breathable cottons", "Mosquito repellent spray", "Umbrella or rain poncho", "Slip-on sandals (for boats)"],
    localInsights: DESTINATION_REALITIES["kerala"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["munnar"].mustTry,
    packing: ["Warm fleece (cold nights at 1,600 m)", "Waterproof jacket (frequent mist and rain)", "Trekking shoes", "Insect repellent"],
    localInsights: DESTINATION_REALITIES["munnar"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["goa"].mustTry,
    packing: ["Swimwear & beach towels", "Sunscreen SPF 50+", "Flip flops and sunglasses", "Light linen shirts", "Helmet (mandatory for scooty)"],
    localInsights: DESTINATION_REALITIES["goa"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["hampi"].mustTry,
    packing: ["Sturdy trekking shoes (boulders are slippery)", "Sunscreen SPF 70+ (harsh Karnataka sun)", "Loose cotton clothing", "Torch/flashlight for sunset climbs"],
    localInsights: DESTINATION_REALITIES["hampi"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["mysore"].mustTry,
    packing: ["Modest clothing for temples", "Comfortable walking shoes", "Carry cash for market shopping", "Sunscreen"],
    localInsights: DESTINATION_REALITIES["mysore"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["shillong"].mustTry,
    packing: ["Waterproof jacket and rain boots (wettest place on Earth)", "Trekking shoes", "Quick-dry clothes", "Warm layer for evenings"],
    localInsights: DESTINATION_REALITIES["shillong"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["andaman"].mustTry,
    packing: ["Swimwear & rash guards", "Waterproof sandals", "Sunscreen SPF 70+ (equatorial UV)", "Underwater camera", "Insect repellent"],
    localInsights: DESTINATION_REALITIES["andaman"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["amritsar"].mustTry,
    packing: ["Modest clothing covering head (mandatory at Golden Temple)", "Comfortable flat walking shoes", "Head scarf or dupatta", "Light cotton clothes"],
    localInsights: DESTINATION_REALITIES["amritsar"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["madurai"].mustTry,
    packing: ["Modest clothing for temple visits (no shorts)", "Slip-on shoes for barefoot temple areas", "Carry cash for flower markets", "Sunscreen"],
    localInsights: DESTINATION_REALITIES["madurai"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["puri"].mustTry,
    packing: ["Modest clothing (no shorts near Jagannath Temple)", "Sunscreen for beach walks", "Comfortable walking shoes", "Camera for temple sculptures"],
    localInsights: DESTINATION_REALITIES["puri"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["darjeeling"].mustTry,
    packing: ["Warm down jacket (cold year-round)", "Layered woollens", "Waterproof jacket", "Comfortable walking shoes", "Binoculars for birdwatching"],
    localInsights: DESTINATION_REALITIES["darjeeling"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["coorg"].mustTry,
    packing: ["Warm layers (cool misty mornings)", "Waterproof jacket", "Insect repellent", "Trekking shoes", "Binoculars for wildlife"],
    localInsights: DESTINATION_REALITIES["coorg"].transportConstraints,
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
    mustTry: DESTINATION_REALITIES["ooty"].mustTry,
    packing: ["Warm fleece (cold nights year-round at 2,240 m)", "Waterproof jacket", "Walking shoes", "Sunscreen (high UV at altitude)"],
    localInsights: DESTINATION_REALITIES["ooty"].transportConstraints,
    bestTime: "April to June (spring bloom) and September to November (post-monsoon clear skies)"
  }
};

// ============================================================
// BUDGET-AWARE HOTEL & DINING DATABASE — All 22 Destinations
// 4 tiers per destination: Budget / Comfort / Luxury / Royal
// ============================================================
const BUDGET_HOTELS = {
  manali: {
    hotels: {
      Budget:  { name: "Zostel Manali", type: "Backpacker Hostel", whyPick: "Super affordable dorms & private rooms in Old Manali, great traveller community", approxRate: "₹500–1,200/night" },
      Comfort: { name: "The Himalayan Hotel Manali", type: "Boutique Heritage Hotel", whyPick: "Century-old colonial building with garden, river views, and warm hospitality", approxRate: "₹3,500–5,000/night" },
      Luxury:  { name: "Span Resort & Spa", type: "Luxury Mountain Resort", whyPick: "Spacious river-view rooms on the banks of Beas River with a full-service spa", approxRate: "₹7,000–10,000/night" },
      Royal:   { name: "Solang Valley Resorts", type: "Premium Alpine Resort", whyPick: "Exclusive mountain chalets with private valley views, butler service & gourmet meals", approxRate: "₹15,000–25,000/night" }
    },
    dining: {
      Budget:  [{ name: "Cafe 1947", specialty: "Himachali Siddu & Rajma Chawal", priceRange: "₹80–200" }, { name: "Dhaba near Bus Stand", specialty: "Dal Makhani & Butter Roti", priceRange: "₹60–150" }],
      Comfort: [{ name: "Chopsticks Restaurant", specialty: "Tibetan Momos & Thukpa", priceRange: "₹250–500" }, { name: "Drifter's Inn", specialty: "Israeli Shakshuka & Fresh Juice", priceRange: "₹300–600" }],
      Luxury:  [{ name: "Johnson's Cafe Manali", specialty: "Fresh Trout Fish & Apple Pie", priceRange: "₹700–1,500" }, { name: "Casa Bella Vista", specialty: "Continental & Himachali Fusion", priceRange: "₹800–1,800" }],
      Royal:   [{ name: "Span Restaurant", specialty: "Riverside Fine Dining — Trout & Mountain Lamb", priceRange: "₹2,000–4,000" }, { name: "River Song Dining", specialty: "Gourmet Himalayan & European Cuisine", priceRange: "₹2,500–5,000" }]
    }
  },
  jaipur: {
    hotels: {
      Budget:  { name: "Moustache Hostel Jaipur", type: "Premium Backpacker Hostel", whyPick: "Best-rated budget hostel in Pink City with rooftop views and vibrant social scene", approxRate: "₹500–1,500/night" },
      Comfort: { name: "Umaid Mahal Heritage Hotel", type: "Heritage Haveli Hotel", whyPick: "Converted haveli with rooftop pool, royal décor, and authentic Rajasthani hospitality", approxRate: "₹3,000–5,500/night" },
      Luxury:  { name: "Shahpura House", type: "Luxury Heritage Property", whyPick: "Authentic royal haveli with courtyard pool, fresco art, and personalised service", approxRate: "₹6,000–10,000/night" },
      Royal:   { name: "Rambagh Palace (Taj)", type: "5-Star Heritage Palace Hotel", whyPick: "Former royal residence of Maharaja of Jaipur — the ultimate royal Rajasthan experience", approxRate: "₹20,000–50,000/night" }
    },
    dining: {
      Budget:  [{ name: "Rawat Mishtan Bhandar", specialty: "Pyaaz Kachori — ₹20 each", priceRange: "₹50–150" }, { name: "LMB Sweets Counter", specialty: "Ghewar & Milk Cake", priceRange: "₹50–200" }],
      Comfort: [{ name: "Peacock Rooftop Restaurant", specialty: "Rajasthani Thali & Dal Baati", priceRange: "₹400–800" }, { name: "Handi Restaurant", specialty: "Laal Maas & Butter Chicken", priceRange: "₹350–700" }],
      Luxury:  [{ name: "Suvarna Mahal (Rambagh)", specialty: "Royal Mughlai Cuisine", priceRange: "₹2,000–4,000" }, { name: "Baradari Restaurant", specialty: "Rajasthani Fine Dining", priceRange: "₹1,500–3,000" }],
      Royal:   [{ name: "1135 AD Nahargarh Fort", specialty: "Medieval Royal Mughlai Banquet", priceRange: "₹3,000–6,000" }, { name: "Suvarna Mahal Rambagh Palace", specialty: "Heritage Royal Dining Experience", priceRange: "₹4,000–8,000" }]
    }
  },
  udaipur: {
    hotels: {
      Budget:  { name: "Nukkad Hostel Udaipur", type: "Lake-View Hostel", whyPick: "Affordable lake-view dorms and private rooms steps from City Palace and ghats", approxRate: "₹500–1,400/night" },
      Comfort: { name: "Udai Niwas Hotel", type: "Heritage Boutique Hotel", whyPick: "Charming heritage property with rooftop terrace overlooking Lake Pichola", approxRate: "₹2,500–5,000/night" },
      Luxury:  { name: "Fateh Prakash Palace", type: "Heritage Palace Hotel", whyPick: "Inside the City Palace complex — original royal rooms with direct lake views", approxRate: "₹10,000–18,000/night" },
      Royal:   { name: "Taj Lake Palace", type: "5-Star Heritage Lake Palace", whyPick: "Iconic floating white marble palace on Lake Pichola — India's most romantic hotel", approxRate: "₹35,000–80,000/night" }
    },
    dining: {
      Budget:  [{ name: "Millets of Mewar", specialty: "Organic Rajasthani Thali", priceRange: "₹200–400" }, { name: "Natraj Dining Hall", specialty: "Rajasthani Unlimited Thali", priceRange: "₹150–300" }],
      Comfort: [{ name: "Lotus Cafe Udaipur", specialty: "Rajasthani Kadhi & Gatte ki Sabzi", priceRange: "₹300–600" }, { name: "Ambrai Restaurant", specialty: "Dal Baati & Laal Maas", priceRange: "₹600–1,200" }],
      Luxury:  [{ name: "1559 AD Udaipur", specialty: "Royal Mewari Heritage Cuisine", priceRange: "₹1,500–3,000" }, { name: "Upre by 1559 AD", specialty: "Fine Dining Lake View", priceRange: "₹1,200–2,500" }],
      Royal:   [{ name: "Jharokha Restaurant (Taj Lake Palace)", specialty: "Maharana Royal Banquet Dinner", priceRange: "₹4,000–8,000" }, { name: "Neel Kamal (Lake Palace)", specialty: "Lake Pichola Fine Dining", priceRange: "₹5,000–10,000" }]
    }
  },
  jodhpur: {
    hotels: {
      Budget:  { name: "Hostel Jodhan", type: "Budget Guesthouse", whyPick: "Affordable clean rooms in the Blue City lanes with fort views from the rooftop", approxRate: "₹600–1,500/night" },
      Comfort: { name: "Pal Haveli", type: "Heritage Haveli", whyPick: "19th-century haveli beside Gulab Sagar lake with rooftop restaurant and sunset views", approxRate: "₹3,000–5,500/night" },
      Luxury:  { name: "RAAS Jodhpur", type: "Boutique Heritage Resort", whyPick: "Luxury hotel crafted around an 18th-century haveli facing the magnificent Mehrangarh Fort", approxRate: "₹12,000–20,000/night" },
      Royal:   { name: "Umaid Bhawan Palace Hotel", type: "5-Star Royal Heritage Palace", whyPick: "Living royal palace of the Jodhpur Royal Family — the grandest hotel in Rajasthan", approxRate: "₹25,000–60,000/night" }
    },
    dining: {
      Budget:  [{ name: "Janta Sweet Home", specialty: "Mawa Kachori & Mirchi Bada", priceRange: "₹50–150" }, { name: "Shri Mishrilal Hotel", specialty: "Makhania Lassi & Pyaaz Kachori", priceRange: "₹40–120" }],
      Comfort: [{ name: "Gypsy Restaurant", specialty: "Rajasthani Unlimited Thali", priceRange: "₹400–700" }, { name: "Stepwell Cafe", specialty: "Cold Brew & Rajasthani Fusion", priceRange: "₹300–600" }],
      Luxury:  [{ name: "Indique Rooftop Restaurant", specialty: "Laal Maas with Fort View", priceRange: "₹800–1,800" }, { name: "Pillars Restaurant (RAAS)", specialty: "Fine Rajasthani & Continental", priceRange: "₹1,500–3,000" }],
      Royal:   [{ name: "Risala (Umaid Bhawan)", specialty: "Royal Marwari Heritage Dining", priceRange: "₹3,500–7,000" }, { name: "Trophy Bar Dining (Umaid Bhawan)", specialty: "Colonial Royal Banquet Experience", priceRange: "₹4,000–8,000" }]
    }
  },
  varanasi: {
    hotels: {
      Budget:  { name: "Shiva Ganga Guest House", type: "Budget Ghat Guesthouse", whyPick: "Affordable rooms steps from the Ganges ghats with basic amenities and local feel", approxRate: "₹600–1,200/night" },
      Comfort: { name: "Suryauday Haveli", type: "Boutique Ghat Hotel", whyPick: "Heritage haveli at Shivala Ghat with sunrise Ganges views from every room", approxRate: "₹3,000–6,000/night" },
      Luxury:  { name: "BrijRama Palace", type: "Heritage Palace on Ghats", whyPick: "18th-century palace directly on Darbhanga Ghat — the finest heritage hotel in Varanasi", approxRate: "₹10,000–18,000/night" },
      Royal:   { name: "Taj Ganges Varanasi", type: "5-Star Luxury Heritage Hotel", whyPick: "Palatial garden property with Ganges views, fine dining, and world-class spa services", approxRate: "₹15,000–30,000/night" }
    },
    dining: {
      Budget:  [{ name: "Kashi Chat Bhandar", specialty: "Tamatar Chat in Kulhad", priceRange: "₹30–100" }, { name: "Blue Lassi Shop", specialty: "Pomegranate Rabri Lassi", priceRange: "₹70–120" }],
      Comfort: [{ name: "Baati Chokha Restaurant", specialty: "Authentic UP Baati Chokha", priceRange: "₹250–500" }, { name: "Aadha Cafe", specialty: "Malaiyo & Banarasi Thandai", priceRange: "₹150–350" }],
      Luxury:  [{ name: "Darbhanga Restaurant (BrijRama)", specialty: "Royal Awadhi & Banarasi Cuisine", priceRange: "₹1,000–2,500" }, { name: "Dum Pukht (ITC)", specialty: "Slow-cooked Awadhi Dum Biryani", priceRange: "₹1,500–3,000" }],
      Royal:   [{ name: "Varuna (Taj Ganges)", specialty: "Heritage Banarasi Fine Dining", priceRange: "₹3,000–6,000" }, { name: "Darbhanga Banquet (BrijRama)", specialty: "Royal Ganga-View Dinner", priceRange: "₹4,000–8,000" }]
    }
  },
  agra: {
    hotels: {
      Budget:  { name: "Zostel Agra", type: "Budget Hostel near Taj Ganj", whyPick: "Affordable clean dormitories and private rooms within walking distance of the Taj Mahal", approxRate: "₹500–1,200/night" },
      Comfort: { name: "Trident Agra", type: "5-Star Garden Resort", whyPick: "Sprawling garden property close to the Taj Mahal with large pool and comfortable rooms", approxRate: "₹6,000–10,000/night" },
      Luxury:  { name: "ITC Mughal Agra", type: "5-Star Heritage Luxury Hotel", whyPick: "Sprawling Mughal-style hotel with world-class spa, multiple restaurants, and Taj Mahal views", approxRate: "₹12,000–22,000/night" },
      Royal:   { name: "Oberoi Amarvilas", type: "6-Star Ultra-Luxury Resort", whyPick: "Every single room has an unobstructed view of the Taj Mahal — the world's most exclusive hotel location", approxRate: "₹45,000–1,00,000/night" }
    },
    dining: {
      Budget:  [{ name: "Agra Chat House", specialty: "Bedai Aloo Sabzi & Jalebi", priceRange: "₹50–150" }, { name: "Brijwasi Sweets", specialty: "Agra Petha in 20+ flavours", priceRange: "₹100–300" }],
      Comfort: [{ name: "Pinch of Spice", specialty: "Mughlai Dum Biryani & Korma", priceRange: "₹500–1,000" }, { name: "Dasaprakash Restaurant", specialty: "Agra Special Thali", priceRange: "₹400–800" }],
      Luxury:  [{ name: "Peshawri (ITC Mughal)", specialty: "Frontier Raan & Dal Bukhara", priceRange: "₹2,000–4,000" }, { name: "Esphahan (Amarvilas)", specialty: "Mughal Fine Dining", priceRange: "₹3,000–5,000" }],
      Royal:   [{ name: "Esphahan at Oberoi Amarvilas", specialty: "Royal Mughal Gourmet with Taj View", priceRange: "₹5,000–10,000" }, { name: "Bellevue Restaurant (Amarvilas)", specialty: "International & Mughal Fine Dining", priceRange: "₹4,000–8,000" }]
    }
  },
  rishikesh: {
    hotels: {
      Budget:  { name: "Zostel Rishikesh", type: "River-View Hostel", whyPick: "Best budget hostel on the Ganges banks with yoga and outdoor adventure packages", approxRate: "₹500–1,200/night" },
      Comfort: { name: "Aloha on the Ganges", type: "Wellness Resort", whyPick: "Yoga, Ayurveda, and meditation retreat with serene Ganges riverfront views", approxRate: "₹4,000–7,000/night" },
      Luxury:  { name: "Ananda in the Himalayas", type: "5-Star Luxury Wellness Retreat", whyPick: "World-renowned destination spa in a Viceregal Palace with Himalayan valley views", approxRate: "₹18,000–35,000/night" },
      Royal:   { name: "Taj Rishikesh Resort & Spa", type: "5-Star Ultra-Luxury Riverside Resort", whyPick: "Private villa suites alongside the sacred Ganges with infinity pools and private yoga pavilions", approxRate: "₹25,000–60,000/night" }
    },
    dining: {
      Budget:  [{ name: "Chotiwala Restaurant", specialty: "Aloo Puri & Rajma Chawal", priceRange: "₹80–200" }, { name: "German Bakery Rishikesh", specialty: "Whole Wheat Pancakes & Honey", priceRange: "₹150–300" }],
      Comfort: [{ name: "Little Buddha Cafe", specialty: "Organic Thali & Ginger Lassi", priceRange: "₹300–600" }, { name: "Freedom Cafe", specialty: "Israeli Hummus & Mediterranean Bowls", priceRange: "₹350–700" }],
      Luxury:  [{ name: "Oasis Restaurant (Ananda)", specialty: "Sattvic Ayurvedic Cuisine", priceRange: "₹1,500–3,000" }, { name: "Terrazzo (Taj Rishikesh)", specialty: "Indian & International Fine Dining", priceRange: "₹2,000–4,000" }],
      Royal:   [{ name: "Terrazzo Restaurant (Taj)", specialty: "Luxury Riverfront Fine Dining", priceRange: "₹3,500–7,000" }, { name: "Ananda Dining Room", specialty: "Gourmet Royal Wellness Cuisine", priceRange: "₹4,000–8,000" }]
    }
  },
  shimla: {
    hotels: {
      Budget:  { name: "YMCA Shimla", type: "Budget Colonial Guesthouse", whyPick: "Historic 1881 YMCA building on The Ridge — best budget value with mountain views", approxRate: "₹700–1,500/night" },
      Comfort: { name: "Hotel Combermere", type: "Heritage Hotel", whyPick: "Colonial-era property near Mall Road with comfortable rooms and valley views", approxRate: "₹3,000–5,500/night" },
      Luxury:  { name: "The Oberoi Cecil", type: "5-Star Colonial Heritage Hotel", whyPick: "Grand 1884 heritage hotel with Himalayan panoramas, fireplace suites, and fine dining", approxRate: "₹10,000–18,000/night" },
      Royal:   { name: "Wildflower Hall (Oberoi)", type: "6-Star Mountain Heritage Resort", whyPick: "Lord Kitchener's former residence in cedar forest — private infinity pool, butler service, and breathtaking views", approxRate: "₹20,000–45,000/night" }
    },
    dining: {
      Budget:  [{ name: "Baljee's Restaurant", specialty: "Himachali Dham & Rajma", priceRange: "₹150–350" }, { name: "Indian Coffee House Mall Road", specialty: "Filter Coffee & Sandwiches", priceRange: "₹80–200" }],
      Comfort: [{ name: "Cafe Sol Shimla", specialty: "Himachali Siddu & Dham Thali", priceRange: "₹400–700" }, { name: "Ashiana & Goofa Restaurant", specialty: "North Indian Thali", priceRange: "₹300–600" }],
      Luxury:  [{ name: "Cecils Restaurant (Oberoi)", specialty: "Colonial Continental & Himachali", priceRange: "₹1,500–3,000" }, { name: "Eighteen71 Cookhouse & Bar", specialty: "Heritage Fine Dining", priceRange: "₹1,200–2,500" }],
      Royal:   [{ name: "Wildflower Hall Dining Room", specialty: "Gourmet Himalayan & European Fine Dining", priceRange: "₹3,500–7,000" }, { name: "The Oberoi Cecil Main Restaurant", specialty: "Royal Heritage Banquet", priceRange: "₹3,000–6,000" }]
    }
  },
  "leh-ladakh": {
    hotels: {
      Budget:  { name: "Grand Willow Inn Leh", type: "Budget Guesthouse", whyPick: "Clean and cozy budget guesthouse in central Leh with mountain views and warm local hospitality", approxRate: "₹600–1,500/night" },
      Comfort: { name: "Nubra Ecolodge", type: "Traditional Ladakhi Mud House Stay", whyPick: "Authentic organic farm stay under Himalayan stars with Ladakhi home-cooked meals", approxRate: "₹3,000–6,000/night" },
      Luxury:  { name: "The Grand Dragon Ladakh", type: "Luxury Mountain Hotel", whyPick: "Best luxury hotel in Leh — centrally located with panoramic Himalayan-view rooms and rooftop restaurant", approxRate: "₹8,000–15,000/night" },
      Royal:   { name: "Chamba Camp Thiksey (Taj)", type: "5-Star Luxury Tented Camp", whyPick: "Exclusive private luxury tented camp with butler, chef, and curated Ladakh cultural experiences", approxRate: "₹25,000–55,000/night" }
    },
    dining: {
      Budget:  [{ name: "Tibetan Kitchen Leh", specialty: "Thukpa Noodle Soup & Tsampa", priceRange: "₹100–250" }, { name: "Lamayuru Restaurant", specialty: "Ladakhi Skyu & Butter Tea", priceRange: "₹120–300" }],
      Comfort: [{ name: "Bon Appetit Leh", specialty: "Yak Cheese Pizza & Apple Tea", priceRange: "₹350–700" }, { name: "Open Hand Restaurant", specialty: "Continental Breakfast & Ladakhi Thali", priceRange: "₹300–600" }],
      Luxury:  [{ name: "Alchi Kitchen", specialty: "Authentic Ladakhi Gourmet Cuisine", priceRange: "₹800–1,800" }, { name: "The Grand Dragon Rooftop", specialty: "Himalayan Fine Dining with Mountain Views", priceRange: "₹1,200–2,500" }],
      Royal:   [{ name: "Chamba Camp Private Chef", specialty: "Bespoke Royal Ladakhi & Continental Menu", priceRange: "₹3,000–6,000" }, { name: "The Grand Dragon Signature Dinner", specialty: "Gourmet Ladakhi Heritage Tasting Menu", priceRange: "₹2,500–5,000" }]
    }
  },
  kerala: {
    hotels: {
      Budget:  { name: "Green Palms Guesthouse Alleppey", type: "Budget Guesthouse", whyPick: "Affordable rooms by the backwaters with basic houseboat rides and local hospitality", approxRate: "₹700–1,500/night" },
      Comfort: { name: "Emerald Isle Heritage Villa", type: "Heritage Village Stay", whyPick: "120-year-old rice barge converted villa on the backwaters with traditional Kerala architecture", approxRate: "₹4,000–8,000/night" },
      Luxury:  { name: "Marari Beach Resort (CGH)", type: "Luxury Eco Resort", whyPick: "Award-winning eco-luxury beach cottages with Ayurvedic treatments and organic farming", approxRate: "₹12,000–22,000/night" },
      Royal:   { name: "Kumarakom Lake Resort", type: "5-Star Heritage Lake Resort", whyPick: "Spectacular restored heritage bungalows on Vembanad Lake with private infinity pools and butler service", approxRate: "₹25,000–60,000/night" }
    },
    dining: {
      Budget:  [{ name: "Chakara Restaurant Alleppey", specialty: "Kerala Fish Curry & Tapioca", priceRange: "₹100–250" }, { name: "Local Toddy Shop", specialty: "Karimeen Pollichathu & Appam", priceRange: "₹80–200" }],
      Comfort: [{ name: "Thaff Restaurant", specialty: "Prawn Moilee & Rice Appam", priceRange: "₹400–800" }, { name: "Harbour Restaurant", specialty: "Kerala Sadya Feast", priceRange: "₹350–700" }],
      Luxury:  [{ name: "Zest (Marari Resort)", specialty: "Gourmet Seafood & Ayurvedic Cuisine", priceRange: "₹1,500–3,000" }, { name: "The Rice Boat Restaurant Kochi", specialty: "Crab & Lobster Kerala Fine Dining", priceRange: "₹1,200–2,500" }],
      Royal:   [{ name: "Kumarakom Lake Resort Restaurant", specialty: "Royal Travancore Heritage Banquet", priceRange: "₹3,500–7,000" }, { name: "Palate (Taj Malabar Kochi)", specialty: "Kerala Seafood Royal Gourmet", priceRange: "₹4,000–8,000" }]
    }
  },
  munnar: {
    hotels: {
      Budget:  { name: "Munnar FairMont Hotel", type: "Budget Hill Hotel", whyPick: "Clean rooms with valley views near town centre — great value in the hill station", approxRate: "₹700–1,500/night" },
      Comfort: { name: "Windermere Estate Munnar", type: "Heritage Plantation Stay", whyPick: "British-era planter's bungalow inside a working tea estate with valley panoramas", approxRate: "₹4,000–8,000/night" },
      Luxury:  { name: "Fragrant Nature Munnar", type: "Luxury Mountain Resort", whyPick: "Spacious lake-view suites with infinity pool and private tea estate walks", approxRate: "₹8,000–15,000/night" },
      Royal:   { name: "Cardamom County Resort", type: "5-Star Premium Forest Resort", whyPick: "Exclusive cottages deep inside a spice estate with private pool suites, trekking guides, and chef-curated menus", approxRate: "₹15,000–35,000/night" }
    },
    dining: {
      Budget:  [{ name: "Rapsy Restaurant Munnar", specialty: "Kerala Puttu & Kadala Curry", priceRange: "₹80–200" }, { name: "SN Restaurant", specialty: "Appam & Mutton Stew", priceRange: "₹100–250" }],
      Comfort: [{ name: "Saravana Bhavan Munnar", specialty: "South Indian Thali & Filter Coffee", priceRange: "₹200–400" }, { name: "Silver Spoon Restaurant", specialty: "Kerala Fish Fry & Rice", priceRange: "₹300–600" }],
      Luxury:  [{ name: "Windermere Restaurant", specialty: "Plantation Gourmet Meals", priceRange: "₹1,000–2,000" }, { name: "Fragrant Nature Restaurant", specialty: "Kerala Fusion Fine Dining", priceRange: "₹1,500–3,000" }],
      Royal:   [{ name: "Cardamom County Chef's Table", specialty: "Bespoke Spice Estate Gourmet Dinner", priceRange: "₹3,000–6,000" }, { name: "Elysium Dining (Cardamom County)", specialty: "Royal Kerala Heritage Cuisine", priceRange: "₹2,500–5,000" }]
    }
  },
  goa: {
    hotels: {
      Budget:  { name: "Backpacker Panda Hostel Goa", type: "Beach Hostel", whyPick: "Top-rated budget beach hostel in North Goa with pool, bar, and great party atmosphere", approxRate: "₹500–1,500/night" },
      Comfort: { name: "Alila Diwa Goa", type: "4-Star Beach Resort", whyPick: "Comfortable resort with pools, lush gardens, and easy access to South Goa's quieter beaches", approxRate: "₹5,000–10,000/night" },
      Luxury:  { name: "Taj Holiday Village Goa", type: "5-Star Luxury Beach Resort", whyPick: "Secluded Portuguese-style cottages in lush garden leading directly to Candolim Beach", approxRate: "₹12,000–25,000/night" },
      Royal:   { name: "Taj Exotica Resort & Spa", type: "6-Star Ultra-Luxury Beach Resort", whyPick: "South Goa's most exclusive private beach resort with butler villas, private pools, and 50 acres of paradise", approxRate: "₹30,000–80,000/night" }
    },
    dining: {
      Budget:  [{ name: "Fisherman's Wharf (thali)", specialty: "Fish Thali & Goan Curry Rice", priceRange: "₹150–300" }, { name: "Anand Bar & Restaurant", specialty: "Prawn Rawa Fry & Bebinca", priceRange: "₹200–400" }],
      Comfort: [{ name: "Gunpowder Goa", specialty: "Goan Recheado Fish & Crab Xec Xec", priceRange: "₹600–1,200" }, { name: "A Reverie Goa", specialty: "Indo-Portuguese Fusion", priceRange: "₹800–1,500" }],
      Luxury:  [{ name: "Thalassa Greek Goa", specialty: "Greek Seafood & Sunset Dining", priceRange: "₹2,000–4,000" }, { name: "Martin's Corner Goa", specialty: "Gourmet Goan Seafood", priceRange: "₹1,500–3,000" }],
      Royal:   [{ name: "Rooftop Bar & Dining (Taj Exotica)", specialty: "Private Chef Gourmet Seafood Dinner", priceRange: "₹4,000–8,000" }, { name: "Caravela Restaurant (Taj Exotica)", specialty: "Royal Goan & European Fine Dining", priceRange: "₹5,000–10,000" }]
    }
  },
  hampi: {
    hotels: {
      Budget:  { name: "Shanthi Guest House Hampi", type: "Budget Guesthouse", whyPick: "Affordable boulderscape-view rooms in Virupapura Gaddi (hippie island) with peaceful river setting", approxRate: "₹500–1,200/night" },
      Comfort: { name: "Hampi's Boulders", type: "Eco Boutique Resort", whyPick: "Unique resort built between ancient rocks with pool, local guided tours, and comfortable cottages", approxRate: "₹4,000–8,000/night" },
      Luxury:  { name: "Orange County Kabini", type: "Luxury Heritage Safari Lodge", whyPick: "Premium jungle lodge near Hampi area with wildlife viewing, spa, and heritage tours", approxRate: "₹10,000–18,000/night" },
      Royal:   { name: "Evolve Back Hampi", type: "5-Star Luxury Heritage Resort", whyPick: "Ultra-luxury resort themed around Vijayanagara Empire with royal tented suites, private butler, and curated UNESCO ruins tours", approxRate: "₹20,000–50,000/night" }
    },
    dining: {
      Budget:  [{ name: "Mango Tree Restaurant", specialty: "Thali under Mango Trees", priceRange: "₹100–250" }, { name: "Laughing Buddha Cafe", specialty: "Banana Pancakes & Lassi", priceRange: "₹80–200" }],
      Comfort: [{ name: "Tempt Restaurant Hampi", specialty: "South Indian Meals & Fresh Lime Soda", priceRange: "₹200–450" }, { name: "Ravi Rose Restaurant", specialty: "Obbattu & Local Karnataka Thali", priceRange: "₹250–500" }],
      Luxury:  [{ name: "Hampi's Boulders Restaurant", specialty: "Gourmet Karnataka Cuisine", priceRange: "₹1,000–2,000" }, { name: "Udupi Sriram Bhavan", specialty: "Bisi Bele Bath & Filter Coffee", priceRange: "₹800–1,500" }],
      Royal:   [{ name: "Evolve Back Royal Dining", specialty: "Vijayanagara Heritage Banquet Under Stars", priceRange: "₹3,000–6,000" }, { name: "Hampi Palace Restaurant", specialty: "Royal Karnataka & Mughal Gourmet", priceRange: "₹2,500–5,000" }]
    }
  },
  mysore: {
    hotels: {
      Budget:  { name: "Hotel Dasaprakash", type: "Classic Budget Hotel", whyPick: "Clean rooms near bus stand, walking distance to Mysore Palace and markets", approxRate: "₹800–1,500/night" },
      Comfort: { name: "The Windflower Spa & Resort", type: "Boutique Nature Resort", whyPick: "Peaceful resort 15 km from city in coffee plantation surroundings with pool and spa", approxRate: "₹4,000–8,000/night" },
      Luxury:  { name: "Radisson Blu Plaza Hotel Mysore", type: "5-Star Business Luxury Hotel", whyPick: "Premium luxury hotel near Mysore Palace with rooftop pool and fine dining", approxRate: "₹8,000–15,000/night" },
      Royal:   { name: "Lalitha Mahal Palace Hotel", type: "Heritage Palace Hotel", whyPick: "Former Viceroy's guesthouse — a grand white marble palace with royal suites and private royal dining", approxRate: "₹15,000–40,000/night" }
    },
    dining: {
      Budget:  [{ name: "Hotel RRR", specialty: "Unlimited South Indian Meals", priceRange: "₹80–180" }, { name: "Mylari Dosa Hotel", specialty: "Famous Soft Mylari Dosa", priceRange: "₹60–150" }],
      Comfort: [{ name: "Hotel Metropole Restaurant", specialty: "Mysore Pak & South Indian Thali", priceRange: "₹300–600" }, { name: "Vinayaka Mylari Restaurant", specialty: "Akki Rotti & Bisi Bele Bath", priceRange: "₹200–400" }],
      Luxury:  [{ name: "Royal Orchid Brindavan", specialty: "South Indian & Continental Gourmet", priceRange: "₹1,500–3,000" }, { name: "Green Hotel Restaurant", specialty: "Authentic Coorg & Mysore Cuisine", priceRange: "₹800–1,800" }],
      Royal:   [{ name: "Lalitha Mahal Royal Dining Room", specialty: "Heritage Wadiyar Royal Banquet", priceRange: "₹3,000–6,000" }, { name: "Palace View Fine Dining", specialty: "Royal Mysore Heritage Cuisine", priceRange: "₹2,500–5,000" }]
    }
  },
  shillong: {
    hotels: {
      Budget:  { name: "Tripura Castle Guest House", type: "Budget Heritage Guesthouse", whyPick: "Affordable colonial-era guesthouse in the heart of Shillong with misty valley views", approxRate: "₹700–1,500/night" },
      Comfort: { name: "Hotel Centre Point", type: "Comfortable City Hotel", whyPick: "Well-located hotel in Shillong with modern amenities, garden views, and easy access to attractions", approxRate: "₹3,000–6,000/night" },
      Luxury:  { name: "Ri Kynjai Resort", type: "Luxury Lake Resort", whyPick: "Award-winning resort on Umiam Lake with traditional Khasi architecture, private decks, and lakeside dining", approxRate: "₹8,000–15,000/night" },
      Royal:   { name: "Cherrapunjee Holiday Resort", type: "5-Star Cliff-Top Heritage Resort", whyPick: "Exclusive hilltop resort overlooking Bangladesh plains with private chef, guided Living Root Bridge treks, and misty canyon views", approxRate: "₹18,000–40,000/night" }
    },
    dining: {
      Budget:  [{ name: "Jadoh & Dohkhlieh Street Stalls", specialty: "Khasi Jadoh Rice & Dohkhlieh", priceRange: "₹60–150" }, { name: "Police Bazaar Food Court", specialty: "Smoked Pork & Bamboo Shoot", priceRange: "₹80–200" }],
      Comfort: [{ name: "Trattoria Cafe Shillong", specialty: "Continental Burgers & Khasi Thali", priceRange: "₹300–600" }, { name: "Cloud 9 Restaurant", specialty: "North East Indian Cuisine & Jadoh", priceRange: "₹250–500" }],
      Luxury:  [{ name: "Ri Kynjai Restaurant", specialty: "Gourmet Khasi Heritage Cuisine", priceRange: "₹1,000–2,500" }, { name: "Abba Restaurant", specialty: "Smoked Pork & Fermented Black Sesame", priceRange: "₹800–1,800" }],
      Royal:   [{ name: "Cherrapunjee Resort Fine Dining", specialty: "Khasi Royal Banquet with Canyon Views", priceRange: "₹3,000–6,000" }, { name: "Ri Kynjai Lakeside Gourmet Dinner", specialty: "Private Chef North East Heritage Menu", priceRange: "₹2,500–5,000" }]
    }
  },
  andaman: {
    hotels: {
      Budget:  { name: "Teal House Beach Resort", type: "Budget Beach Guesthouse", whyPick: "Affordable beachfront rooms in Havelock with snorkelling gear rental and local seafood", approxRate: "₹800–1,800/night" },
      Comfort: { name: "Barefoot Scuba Havelock", type: "Dive Resort", whyPick: "Comfortable beach cottages with PADI dive centre, snorkelling, and island kayaking", approxRate: "₹4,000–8,000/night" },
      Luxury:  { name: "Taj Exotica Andaman", type: "5-Star Luxury Beach Resort", whyPick: "Stunning private beach resort on Havelock Island with overwater villas and world-class snorkelling access", approxRate: "₹15,000–30,000/night" },
      Royal:   { name: "Barefoot at Havelock", type: "Ultra-Premium Eco-Luxury Resort", whyPick: "Exclusive private cottages on Radhanagar Beach with curated private island experiences, private chef, and coral reef diving", approxRate: "₹25,000–60,000/night" }
    },
    dining: {
      Budget:  [{ name: "Full Moon Cafe Havelock", specialty: "Grilled Fish Thali & Fresh Coconut", priceRange: "₹150–300" }, { name: "Local Market Seafood Stalls", specialty: "Crab Curry & Prawn Masala", priceRange: "₹100–250" }],
      Comfort: [{ name: "Fat Martin's Cafe", specialty: "Fresh Catch of the Day & Seafood Pasta", priceRange: "₹500–1,000" }, { name: "Viper's Havelock", specialty: "Grilled Lobster & Island Cocktails", priceRange: "₹700–1,500" }],
      Luxury:  [{ name: "Anju Coco Restaurant", specialty: "Andaman Lobster & Crab Fine Dining", priceRange: "₹2,000–4,000" }, { name: "Taj Exotica Beach Restaurant", specialty: "Seafood BBQ & Indian Ocean Gourmet", priceRange: "₹2,500–5,000" }],
      Royal:   [{ name: "Taj Exotica Private Beach Dinner", specialty: "Bespoke Private Beachside Royal Banquet", priceRange: "₹5,000–10,000" }, { name: "Barefoot at Havelock Chef's Table", specialty: "Private Island Gourmet Seafood", priceRange: "₹4,000–8,000" }]
    }
  },
  amritsar: {
    hotels: {
      Budget:  { name: "Jugaadus Hostel Amritsar", type: "Budget Hostel near Golden Temple", whyPick: "Affordable backpacker hostel walking distance from Golden Temple with rooftop views", approxRate: "₹400–1,200/night" },
      Comfort: { name: "Hotel Moonak", type: "Comfortable Heritage Hotel", whyPick: "Well-located hotel near Golden Temple with modern amenities and rooftop restaurant", approxRate: "₹2,500–5,000/night" },
      Luxury:  { name: "Taj Swarna Amritsar", type: "5-Star Luxury Hotel", whyPick: "Amritsar's finest luxury hotel with Golden Temple views, indoor pool, and world-class dining", approxRate: "₹8,000–15,000/night" },
      Royal:   { name: "Hyatt Regency Amritsar", type: "5-Star Premium Hotel", whyPick: "Ultra-luxury hotel near Heritage Street with premium Golden Temple view suites, rooftop pool, and private cultural experience packages", approxRate: "₹15,000–35,000/night" }
    },
    dining: {
      Budget:  [{ name: "Langar at Golden Temple", specialty: "Free Community Langar (dal & roti)", priceRange: "Free (donation)" }, { name: "Kanha Sweets", specialty: "Amritsari Kulcha & Pinni", priceRange: "₹60–180" }],
      Comfort: [{ name: "Bharawan Da Dhaba", specialty: "Amritsari Kulcha & Lassi", priceRange: "₹200–400" }, { name: "Brothers Dhaba", specialty: "Dal Makhani & Butter Naan", priceRange: "₹250–500" }],
      Luxury:  [{ name: "Crystal Restaurant", specialty: "Amritsari Machhi & Sarson da Saag", priceRange: "₹1,000–2,000" }, { name: "Naan Restaurant (Taj Swarna)", specialty: "North Indian Fine Dining", priceRange: "₹1,500–3,000" }],
      Royal:   [{ name: "Amarsons Restaurant", specialty: "Heritage Punjabi Royal Cuisine", priceRange: "₹2,500–5,000" }, { name: "Hyatt Regency Restaurant", specialty: "Premium Punjabi & International Fine Dining", priceRange: "₹3,500–7,000" }]
    }
  },
  madurai: {
    hotels: {
      Budget:  { name: "Hotel Prem Nivas", type: "Budget Hotel near Meenakshi Temple", whyPick: "Affordable rooms steps from the iconic Meenakshi Amman Temple with rooftop views", approxRate: "₹600–1,200/night" },
      Comfort: { name: "Heritage Madurai Hotel", type: "Colonial Heritage Boutique Hotel", whyPick: "1920s British residence converted to boutique hotel with garden pool and temple views", approxRate: "₹3,500–7,000/night" },
      Luxury:  { name: "Courtyard Marriott Madurai", type: "5-Star Business Luxury Hotel", whyPick: "Premium hotel with temple-view infinity pool, multi-cuisine restaurant, and spa", approxRate: "₹8,000–15,000/night" },
      Royal:   { name: "The Gateway Hotel Madurai (Taj)", type: "5-Star Heritage Palace Hotel", whyPick: "Grand heritage property with royal Tamil Nadu décor, private royal dining, and curated Madurai cultural experiences", approxRate: "₹15,000–35,000/night" }
    },
    dining: {
      Budget:  [{ name: "Amma Mess", specialty: "Banana Leaf Meals & Rasam", priceRange: "₹60–150" }, { name: "Murugan Idli Shop", specialty: "Madurai Famous Idli & Sambar", priceRange: "₹50–130" }],
      Comfort: [{ name: "Surya Restaurant", specialty: "Madurai Kari Dosa & Filter Coffee", priceRange: "₹200–450" }, { name: "Aaraa Veedu Restaurant", specialty: "Traditional Tamil Nadu Sadhya", priceRange: "₹250–500" }],
      Luxury:  [{ name: "Namma Veedu Restaurant", specialty: "Heritage Chettinad Mutton Curry", priceRange: "₹1,000–2,000" }, { name: "Surabi Restaurant", specialty: "Chettinad Fine Dining", priceRange: "₹800–1,800" }],
      Royal:   [{ name: "Heritage Madurai Restaurant", specialty: "Royal Tamil Heritage Cuisine", priceRange: "₹2,500–5,000" }, { name: "Gateway Taj Fine Dining", specialty: "Royal Chettinad Gourmet Banquet", priceRange: "₹3,500–7,000" }]
    }
  },
  puri: {
    hotels: {
      Budget:  { name: "Hotel Nilachal Ashok", type: "Budget Heritage Hotel", whyPick: "Government heritage property on Puri Beach — affordable sea-facing rooms near Jagannath Temple", approxRate: "₹700–1,500/night" },
      Comfort: { name: "Mayfair Beach Resort Puri", type: "4-Star Beach Resort", whyPick: "Comfortable beachfront resort with pool, restaurant, and direct ocean access minutes from Puri's main attractions", approxRate: "₹4,000–8,000/night" },
      Luxury:  { name: "Hans Coco Palms Puri", type: "Luxury Palm Beach Resort", whyPick: "Sprawling palm-shaded resort with sea-view suites, water sports, and temple tour packages", approxRate: "₹8,000–15,000/night" },
      Royal:   { name: "Mayfair Heritage Puri", type: "5-Star Heritage Beach Resort", whyPick: "Heritage royal cottages on Puri's golden beach with private butler, royal Odia cuisine, and temple ceremonial experiences", approxRate: "₹18,000–40,000/night" }
    },
    dining: {
      Budget:  [{ name: "Wild Grass Restaurant", specialty: "Odia Dalma & Pakhala Bhata", priceRange: "₹100–250" }, { name: "Chung Wah Restaurant Puri", specialty: "Rice Thali & Crab Curry", priceRange: "₹80–200" }],
      Comfort: [{ name: "Peace Restaurant Puri", specialty: "Fresh Seafood & Coconut Prawn", priceRange: "₹350–700" }, { name: "Honey Bee Restaurant", specialty: "Odia Thali & Fish Kosha", priceRange: "₹250–500" }],
      Luxury:  [{ name: "Mayfair Beach Restaurant", specialty: "Coastal Odia Gourmet Seafood", priceRange: "₹1,500–3,000" }, { name: "Hans Coco Restaurant", specialty: "Hilsa Fish Preparation & Prawn Malai", priceRange: "₹1,000–2,000" }],
      Royal:   [{ name: "Mayfair Heritage Royal Dining", specialty: "Traditional Odia Royal Feast", priceRange: "₹3,000–6,000" }, { name: "Puri Beach Private Dinner", specialty: "Beachside Gourmet Seafood Banquet", priceRange: "₹4,000–8,000" }]
    }
  },
  darjeeling: {
    hotels: {
      Budget:  { name: "Aliment Youth Hostel", type: "Budget Mountain Hostel", whyPick: "Affordable government hostel with Kanchenjunga views — best budget stay in Darjeeling", approxRate: "₹400–1,200/night" },
      Comfort: { name: "Cedar Inn Darjeeling", type: "Comfortable Heritage Hotel", whyPick: "Charming colonial-era property near Mall with mountain views and warm fireplace rooms", approxRate: "₹3,000–6,000/night" },
      Luxury:  { name: "Windamere Hotel Darjeeling", type: "Heritage Colonial Hotel", whyPick: "1900s colonial-era hotel on Observatory Hill with fireplace suites and Kanchenjunga views", approxRate: "₹7,000–14,000/night" },
      Royal:   { name: "Glenburn Tea Estate", type: "5-Star Heritage Planter's Bungalow", whyPick: "Award-winning private tea estate bungalow with butler, private tea tours, river picnics, and Himalayan views — India's finest boutique experience", approxRate: "₹25,000–55,000/night (all inclusive)" }
    },
    dining: {
      Budget:  [{ name: "Gatty's Cafe Darjeeling", specialty: "Tibetan Thukpa & Steam Momos", priceRange: "₹100–250" }, { name: "Glenary's Bakery", specialty: "Darjeeling Tea & Chocolate Cake", priceRange: "₹150–350" }],
      Comfort: [{ name: "The Park Restaurant", specialty: "Darjeeling Chicken Sekuwa & Raksi", priceRange: "₹400–800" }, { name: "Keventer's Darjeeling", specialty: "Sizzlers & Darjeeling Tea", priceRange: "₹350–700" }],
      Luxury:  [{ name: "Windamere Hotel Dining Room", specialty: "Colonial Heritage Dinner with Tea Pairing", priceRange: "₹1,500–3,000" }, { name: "Glenary's Restaurant", specialty: "Continental & Darjeeling Cuisine", priceRange: "₹1,000–2,500" }],
      Royal:   [{ name: "Glenburn Tea Estate Meals", specialty: "Private Chef — Colonial Planter's Heritage Dinner", priceRange: "₹4,000–8,000 (included in stay)" }, { name: "Windamere Colonial Banquet", specialty: "Darjeeling Royal Heritage Feast", priceRange: "₹3,000–6,000" }]
    }
  },
  coorg: {
    hotels: {
      Budget:  { name: "Coorg Homestay Network", type: "Budget Coffee Estate Homestay", whyPick: "Stay with a local Kodava family in their estate — authentic experience with home-cooked meals", approxRate: "₹800–1,800/night" },
      Comfort: { name: "Honey Valley Estate Coorg", type: "Eco Plantation Stay", whyPick: "Trekking trails, organic farm meals, and misty valley views in a working coffee estate", approxRate: "₹3,500–7,000/night" },
      Luxury:  { name: "Evolve Back Kuruba Safari Lodge", type: "Eco Luxury Lodge", whyPick: "Private cottage inside Nagarhole Buffer Zone with elephant visits, spa, and wildlife viewings", approxRate: "₹14,000–25,000/night" },
      Royal:   { name: "Orange County Coorg", type: "5-Star Pool Villa Resort", whyPick: "Private pool villas inside a 300-acre working coffee estate with personal butler, Ayurvedic spa, and gourmet meals", approxRate: "₹25,000–55,000/night" }
    },
    dining: {
      Budget:  [{ name: "Coorg Cuisine Restaurant", specialty: "Pandi Curry & Kadumbuttu", priceRange: "₹200–400" }, { name: "Hotel Chitra", specialty: "Akki Rotti & Coorg Sambar", priceRange: "₹100–250" }],
      Comfort: [{ name: "Raintree Cafe", specialty: "Coorg Honey Coffee Pancakes", priceRange: "₹350–700" }, { name: "Tiger Bar & Restaurant", specialty: "Koli Curry & Neer Dosa", priceRange: "₹400–800" }],
      Luxury:  [{ name: "Kuruba Safari Lodge Restaurant", specialty: "Gourmet Kodava Cuisine", priceRange: "₹1,500–3,000" }, { name: "Athithya Kitchen", specialty: "Traditional Kodava Pork & Rice Wine", priceRange: "₹1,000–2,000" }],
      Royal:   [{ name: "Orange County Villa Dining", specialty: "Private Chef Gourmet Estate Dinner", priceRange: "₹3,500–7,000" }, { name: "Citrus Restaurant (Orange County)", specialty: "Royal Kodava Heritage Banquet", priceRange: "₹3,000–6,000" }]
    }
  },
  ooty: {
    hotels: {
      Budget:  { name: "YWCA Nilgiris Ooty", type: "Budget Heritage Guesthouse", whyPick: "Affordable colonial-era guesthouse with garden views near town centre and botanical gardens", approxRate: "₹700–1,500/night" },
      Comfort: { name: "Sterling Ooty Fern Hill", type: "Heritage Plantation Resort", whyPick: "Restored 1830s Maharaja of Mysore summer palace cottages in private forests", approxRate: "₹4,000–8,000/night" },
      Luxury:  { name: "Savoy Hotel Ooty (Taj)", type: "Colonial Heritage Hotel", whyPick: "1829 colonial property with private cottage suites, fireplace, and manicured garden estate", approxRate: "₹8,000–15,000/night" },
      Royal:   { name: "The Hermitage Tea County", type: "5-Star Premium Tea Estate Resort", whyPick: "Exclusive hilltop resort in private Nilgiri tea estate with plunge pools, butler service, and curated tea experiences", approxRate: "₹18,000–40,000/night" }
    },
    dining: {
      Budget:  [{ name: "Hotel Sarvana Ooty", specialty: "Ooty Varkey & Nilgiri Biryani", priceRange: "₹100–250" }, { name: "Shinkows Restaurant", specialty: "Chinese Fried Rice & Noodles", priceRange: "₹150–350" }],
      Comfort: [{ name: "Willy's Coffee Pub", specialty: "Nilgiri Tea & Honey Cake", priceRange: "₹300–600" }, { name: "Hyderabad Biryani House", specialty: "Nilgiri Mutton Biryani", priceRange: "₹300–600" }],
      Luxury:  [{ name: "Garden View Restaurant (Savoy)", specialty: "Colonial Continental & South Indian", priceRange: "₹1,500–3,000" }, { name: "The King's Table Restaurant", specialty: "Nilgiri Heritage Gourmet Meals", priceRange: "₹1,200–2,500" }],
      Royal:   [{ name: "Savoy Heritage Banquet (Taj)", specialty: "Royal Colonial Dinner with Nilgiri Views", priceRange: "₹3,500–7,000" }, { name: "Hermitage Private Dining", specialty: "Chef's Table Tea Estate Gourmet Dinner", priceRange: "₹4,000–8,000" }]
    }
  }
};

// Helper: get budget-appropriate hotel for a destination
function getBudgetHotel(destKey, budgetTier) {
  const key = destKey.toLowerCase().replace(/[^a-z0-9-]/g, "");
  const matched = Object.keys(BUDGET_HOTELS).find(k => key.includes(k.replace(/-/g, "")));
  if (!matched) {
    // Generic fallback hotel rates per tier
    const genericHotels = {
      Budget:  { name: "Local Budget Guesthouse", type: "Budget Guesthouse", whyPick: "Clean and affordable accommodation near city centre", approxRate: "₹700–1,500/night" },
      Comfort: { name: "Comfort Hotel", type: "3-Star Hotel", whyPick: "Good value mid-range hotel with modern amenities", approxRate: "₹3,000–5,000/night" },
      Luxury:  { name: "Luxury City Hotel", type: "5-Star Hotel", whyPick: "Premium accommodation with full-service amenities and fine dining", approxRate: "₹8,000–15,000/night" },
      Royal:   { name: "Heritage Palace Hotel", type: "5-Star Heritage Property", whyPick: "Opulent heritage stay with royal butler service and curated experiences", approxRate: "₹20,000–50,000/night" },
    };
    return genericHotels[budgetTier] || genericHotels.Comfort;
  }
  return BUDGET_HOTELS[matched].hotels[budgetTier] || BUDGET_HOTELS[matched].hotels.Comfort;
}

// Helper: get budget-appropriate dining for a destination
function getBudgetDining(destKey, budgetTier) {
  const key = destKey.toLowerCase().replace(/[^a-z0-9-]/g, "");
  const matched = Object.keys(BUDGET_HOTELS).find(k => key.includes(k.replace(/-/g, "")));
  if (!matched) {
    const genericDining = {
      Budget:  [{ name: "Local Dhaba", specialty: "Regional Thali", priceRange: "₹80–200" }],
      Comfort: [{ name: "Local Restaurant", specialty: "Regional Cuisine", priceRange: "₹300–600" }],
      Luxury:  [{ name: "Fine Dining Restaurant", specialty: "Regional Gourmet Cuisine", priceRange: "₹1,000–2,500" }],
      Royal:   [{ name: "Heritage Restaurant", specialty: "Royal Gourmet Banquet", priceRange: "₹3,000–6,000" }],
    };
    return genericDining[budgetTier] || genericDining.Comfort;
  }
  return BUDGET_HOTELS[matched].dining[budgetTier] || BUDGET_HOTELS[matched].dining.Comfort;
}


// ============================================================
// CRITICAL IMAGE & VISUAL ACCURACY ENGINE (ZERO MISMATCH POLICY)
// ============================================================
export const VERIFIED_LANDMARK_WIKIMEDIA = {
  "hawa mahal": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Hawa_Mahal_2011.jpg/1200px-Hawa_Mahal_2011.jpg",
  "amer fort": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Amber_Fort_Jaipur.jpg/1200px-Amber_Fort_Jaipur.jpg",
  "amber fort": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Amber_Fort_Jaipur.jpg/1200px-Amber_Fort_Jaipur.jpg",
  "nahargarh fort": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nahargarh_Fort_Jaipur_view.jpg/1200px-Nahargarh_Fort_Jaipur_view.jpg",
  "jal mahal": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jal_Mahal%2C_Jaipur.jpg/1200px-Jal_Mahal%2C_Jaipur.jpg",
  "city palace jaipur": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/City_Palace_Jaipur_Entrance.jpg/1200px-City_Palace_Jaipur_Entrance.jpg",
  "birla mandir jaipur": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Birla_Mandir%2C_Jaipur_02.jpg/1200px-Birla_Mandir%2C_Jaipur_02.jpg",
  "taj mahal": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg",
  "agra fort": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Agra_Fort_Amar_Singh_Gate.jpg/1200px-Agra_Fort_Amar_Singh_Gate.jpg",
  "fatehpur sikri": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Buland_Darwaza_Fatehpur_Sikri.jpg/1200px-Buland_Darwaza_Fatehpur_Sikri.jpg",
  "buland darwaza": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Buland_Darwaza_Fatehpur_Sikri.jpg/1200px-Buland_Darwaza_Fatehpur_Sikri.jpg",
  "qutub minar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Qutub_Minar_in_New_Delhi_06-2016_img3.jpg/1200px-Qutub_Minar_in_New_Delhi_06-2016_img3.jpg",
  "red fort": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Delhi_Red_fort.JPG/1200px-Delhi_Red_fort.JPG",
  "lal qila": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Delhi_Red_fort.JPG/1200px-Delhi_Red_fort.JPG",
  "india gate": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/India_Gate_in_New_Delhi_03-2016.jpg/1200px-India_Gate_in_New_Delhi_03-2016.jpg",
  "humayun": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Humayun%27s_Tomb_New_Delhi.jpg/1200px-Humayun%27s_Tomb_New_Delhi.jpg",
  "lotus temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Lotus_Temple_in_New_Delhi_03-2016.jpg/1200px-Lotus_Temple_in_New_Delhi_03-2016.jpg",
  "golden temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amritsar_at_night.jpg/1200px-The_Golden_Temple_of_Amritsar_at_night.jpg",
  "harmandir sahib": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amritsar_at_night.jpg/1200px-The_Golden_Temple_of_Amritsar_at_night.jpg",
  "wagah border": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wagah_Border_Ceremony.jpg/1200px-Wagah_Border_Ceremony.jpg",
  "jallianwala bagh": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Jallianwala_Bagh_memorial.jpg/1200px-Jallianwala_Bagh_memorial.jpg",
  "durgiana temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Durgiana_Temple_Amritsar.jpg/1200px-Durgiana_Temple_Amritsar.jpg",
  "gateway of india": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/1200px-Mumbai_03-2016_30_Gateway_of_India.jpg",
  "victoria memorial": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_Kolkata_sunset.jpg/1200px-Victoria_Memorial_Kolkata_sunset.jpg",
  "charminar": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charminar_Hyderabad_1.jpg/1200px-Charminar_Hyderabad_1.jpg",
  "konark": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konark_Sun_Temple_Front.jpg/1200px-Konark_Sun_Temple_Front.jpg",
  "meenakshi": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Madurai_Meenakshi_Amman_temple_view.jpg/1200px-Madurai_Meenakshi_Amman_temple_view.jpg",
  "mysore palace": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Mysore_Palace_Morning.jpg/1200px-Mysore_Palace_Morning.jpg",
  "kumbhalgarh fort": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kumbhalgarh_fort_wall.jpg/1200px-Kumbhalgarh_fort_wall.jpg",
  "kumbhalgarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kumbhalgarh_fort_wall.jpg/1200px-Kumbhalgarh_fort_wall.jpg"
};

/**
 * Formats an image search term or Unsplash query strictly according to the Zero Mismatch Policy:
 * "[Exact Monument Name] [City] iconic front facade landmark"
 *
 * @param {string} monumentName - Exact landmark or monument name
 * @param {string} city - Destination or city name
 * @returns {string} Formatted landmark query
 */
export function formatLandmarkImageQuery(monumentName, city = "") {
  const cleanMon = (monumentName || "").trim();
  const cleanCity = (city || "").trim();
  if (!cleanMon) return "";
  const norm = cleanMon.toLowerCase();
  if (norm.includes("hawa mahal")) {
    return "Hawa Mahal Jaipur iconic front pink honeycomb jharokha windows facade";
  }
  if (norm.includes("kumbhalgarh")) {
    return "Kumbhalgarh Fort iconic great stone wall ramparts ancient hill bastion Rajasthan";
  }
  if (norm.includes("baga beach")) {
    return "Baga beach North Goa Arabian sea shoreline waves tropical shacks coastline";
  }
  if (norm.includes("amer fort") || norm.includes("amber fort")) {
    return "Amer Fort Jaipur Maota lake front facade ramparts Cheel ka Teela";
  }
  return cleanCity
    ? `${cleanMon} ${cleanCity} historic monument front facade`
    : `${cleanMon} historic monument front facade`;
}

/**
 * Resolves the visual search query for a place:
 * Prioritizes placeData.exactVisualQuery, falling back to `${placeData.name} historic monument front facade`.
 *
 * @param {Object} placeData - Place data object
 * @returns {string} Search query for visual discovery
 */
export function getDiscoverySearchQuery(placeData = {}) {
  if (!placeData) return "";
  const name = placeData.name || placeData.title || "";
  const searchQuery = placeData.exactVisualQuery || (name ? `${name} historic monument front facade` : "");
  return searchQuery;
}

/**
 * Returns a verified, official high-resolution Wikimedia Commons URL for a landmark,
 * preventing any sister-monument cross-contamination or generic stock photo confusion.
 *
 * @param {string} monumentName
 * @returns {string|null} Official Wikimedia Commons URL if verified, or null
 */
export function getVerifiedLandmarkWikimediaUrl(monumentName) {
  if (!monumentName) return null;
  const normalized = monumentName.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
  for (const [key, url] of Object.entries(VERIFIED_LANDMARK_WIKIMEDIA)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return url;
    }
  }
  return null;
}

// ============================================================
// NORMALIZE ITINERARY ENGINE
// Enforces:
// 1. Strict Transport Constraints & Local Municipal Rules
// 2. Realistic Logistical Geography without Zero-Distance Padding
// 3. Concrete Hyper-Local Food & Experience Names (No Generic Placeholders)
// 4. Critical Image & Visual Accuracy (Zero Mismatch Policy)
// ============================================================
export function normalizeItinerary(rawItinerary, tripData) {
  const destName = tripData.destinationName || tripData.destination || rawItinerary?.destination || "India";
  const cleanKey = destName.toLowerCase().replace(/[^a-z0-9]/g, "");

  let logistics = rawItinerary?.logistics ? { ...rawItinerary.logistics } : null;
  if (!logistics || !logistics.nearest_railway_station) {
    const matchedKey = Object.keys(DESTINATION_LOGISTICS).find(k => {
      const ck = k.toLowerCase().replace(/[^a-z0-9]/g, "");
      return cleanKey.includes(ck) || ck.includes(cleanKey);
    });
    if (matchedKey) {
      logistics = { ...DESTINATION_LOGISTICS[matchedKey] };
    } else {
      logistics = {
        nearest_railway_station: `${destName} Railway Station`,
        distance_to_railway_km: "4 km",
        nearest_bus_stand: `${destName} Central Bus Stand`,
        distance_to_bus_stand_km: "2 km",
        nearest_airport: `${destName} Airport`,
        distance_to_airport_km: "18 km"
      };
    }
  }

  // Ensure map URLs exist for logistics (train, bus, airport)
  if (logistics) {
    if (!logistics.railway_map_url && logistics.nearest_railway_station) {
      logistics.railway_map_url = makeGoogleMapsUrl(logistics.nearest_railway_station, destName);
    }
    if (!logistics.nearest_bus_stand) {
      logistics.nearest_bus_stand = `${destName} Central Bus Stand`;
      logistics.distance_to_bus_stand_km = "2 km";
    }
    if (!logistics.bus_stand_map_url && logistics.nearest_bus_stand) {
      logistics.bus_stand_map_url = makeGoogleMapsUrl(logistics.nearest_bus_stand, destName);
    }
    if (!logistics.airport_map_url && logistics.nearest_airport) {
      logistics.airport_map_url = makeGoogleMapsUrl(logistics.nearest_airport, destName);
    }
  }

  // ── RULE 1: Support Dynamic arrivalLogistics from AI output ─────────
  if (rawItinerary?.arrivalLogistics) {
    const arrLog = rawItinerary.arrivalLogistics;
    if (arrLog.railwayStation?.name) {
      logistics.nearest_railway_station = arrLog.railwayStation.name;
      logistics.distance_to_railway_km = arrLog.railwayStation.distance || logistics.distance_to_railway_km;
      logistics.railway_map_url = makeGoogleMapsUrl(arrLog.railwayStation.name, destName);
    }
    if (arrLog.busStand?.name) {
      logistics.nearest_bus_stand = arrLog.busStand.name;
      logistics.distance_to_bus_stand_km = arrLog.busStand.distance || logistics.distance_to_bus_stand_km;
      logistics.bus_stand_map_url = makeGoogleMapsUrl(arrLog.busStand.name, destName);
    }
    if (arrLog.airport?.name) {
      logistics.nearest_airport = arrLog.airport.name;
      logistics.distance_to_airport_km = arrLog.airport.distance || logistics.distance_to_airport_km;
      logistics.airport_map_url = makeGoogleMapsUrl(arrLog.airport.name, destName);
    }
  }

  const matchedDbKey = Object.keys(DESTINATION_DATABASE).find(k => {
    const ck = k.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanKey.includes(ck) || ck.includes(cleanKey);
  });
  const dbEntry = matchedDbKey ? DESTINATION_DATABASE[matchedDbKey] : null;

  const matchedRealityKey = Object.keys(DESTINATION_REALITIES).find(k => {
    const ck = k.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanKey.includes(ck) || ck.includes(cleanKey);
  });
  const reality = matchedRealityKey ? DESTINATION_REALITIES[matchedRealityKey] : null;

  // ── RULE 1 & 3: Clean up mustTry / mustTryExperiences (NO GENERIC PLACEHOLDERS) ──
  let rawMustTry = rawItinerary?.mustTryExperiences || rawItinerary?.mustTry;
  let cleanMustTry = [];
  if (Array.isArray(rawMustTry) && rawMustTry.length > 0) {
    cleanMustTry = rawMustTry.map(m => {
      if (typeof m === 'string') {
        const costMatch = m.match(/₹\s*[\d,]+(?:–[\d,]+)?/);
        return { item: m, title: m, why: "Local culinary & cultural essential recommended by verified local concierges.", approxCost: costMatch ? costMatch[0] : '' };
      }
      const title = m.title || m.item || m.name || '';
      const desc = m.description || m.why || '';
      const costMatch = (desc + ' ' + title).match(/₹\s*[\d,]+(?:–[\d,]+)?/);
      return {
        item: title,
        title: title,
        why: desc,
        description: desc,
        approxCost: m.approxCost || (costMatch ? costMatch[0] : '')
      };
    });
  }

  const hasGenericMustTry = cleanMustTry.length === 0 || cleanMustTry.some(item => {
    const text = (item.item || item.title || '').toLowerCase();
    return text.includes("authentic regional thali") || 
           text.includes("cultural performance") || 
           text.includes("traditional regional") ||
           text.includes("traditional lunch") ||
           text.includes("regional thali") ||
           text.includes("cultural folk show") ||
           text.includes("folk show") ||
           text.length < 5;
  });

  if (hasGenericMustTry) {
    if (reality?.mustTry && reality.mustTry.length > 0) {
      cleanMustTry = reality.mustTry;
    } else if (dbEntry?.mustTry && dbEntry.mustTry.length > 0) {
      cleanMustTry = dbEntry.mustTry;
    } else {
      cleanMustTry = [
        { 
          item: `Heritage Thali & Bati Platter at Central Heritage Diner (${destName}) (~₹180–320)`, 
          why: "Authentic slow-simmered regional preparation seasoned with stone-ground local spices and pure cow ghee.",
          approxCost: "₹180–320"
        },
        { 
          item: `Piping Hot Street Snack & Kulhad Chai at Clock Tower Chowk (${destName}) (~₹50–80)`, 
          why: "Iconic regional street delicacy prepared fresh on traditional cast iron kadhais.",
          approxCost: "₹50–80"
        }
      ];
    }
  }

  // ── RULE 1: Clean up localInsights (EXPLICIT TRANSPORT CONSTRAINTS) ──
  let cleanLocalInsights = Array.isArray(rawItinerary?.localInsights)
    ? rawItinerary.localInsights.join(' • ')
    : rawItinerary?.localInsights;

  const hasGenericInsights = !cleanLocalInsights || 
    cleanLocalInsights.includes("Auto-rickshaws and app cabs operate readily") ||
    cleanLocalInsights.length < 25;

  if (hasGenericInsights) {
    if (reality?.transportConstraints) {
      cleanLocalInsights = reality.transportConstraints;
    } else if (dbEntry?.localInsights) {
      cleanLocalInsights = dbEntry.localInsights;
    } else {
      cleanLocalInsights = `Transport Constraints: Verify pedestrianized zones in ${destName}'s old town and heritage sectors where private cars and cabs are barred. Use authorized local e-rickshaws, municipal transit, or walking for narrow bazaar alleys.`;
    }
  }

  // ── RULE 2: Realistic Logistical Geography & Dwell Times ────────────
  const defaultTransit = reality?.defaultTransit || {
    morningToAfternoon: "15 min walk / e-rickshaw through local market (600m)",
    afternoonToEvening: "20 min cab / transit through town traffic (4 km)",
    eveningToNight: "10 min walk to dinner & night stroll (350m)"
  };

  let daysList = rawItinerary?.dayWiseTimeline || rawItinerary?.days || rawItinerary?.itinerary || [];
  if (!Array.isArray(daysList) || daysList.length === 0) daysList = [];

  const normalizedDays = daysList.map((d, idx) => {
    const dayNum = d.dayNumber || d.day || idx + 1;
    const dayTheme = d.title || d.dayTheme || d.theme || `Day ${dayNum} - Cultural & Heritage Exploration`;
    let activities = [];

    if (Array.isArray(d.activities) && d.activities.length > 0) {
      activities = d.activities.map((act, actIdx) => {
        const loc = act.title || act.locationName || act.activity || "Popular Landmark";
        const period = act.timeOfDay || act.period || (actIdx === 0 ? "Morning" : actIdx === 1 ? "Afternoon" : actIdx === 2 ? "Evening" : "Night");
        const tipText = act.spotTip || act.tip || (act.foodSpot ? `Local Food Spot: ${act.foodSpot}` : undefined);
        
        let tNext = act.transitToNext;
        if (!tNext) {
          if (period.toLowerCase() === "morning") tNext = d.morning?.transitToNext || defaultTransit.morningToAfternoon;
          else if (period.toLowerCase() === "afternoon") tNext = d.afternoon?.transitToNext || defaultTransit.afternoonToEvening;
          else if (period.toLowerCase() === "evening") tNext = d.evening?.transitToNext || defaultTransit.eveningToNight;
        }

        return {
          timeOfDay: period.charAt(0).toUpperCase() + period.slice(1),
          time: act.time || (period.toLowerCase() === "morning" ? "08:30 AM" : period.toLowerCase() === "afternoon" ? "12:30 PM" : period.toLowerCase() === "evening" ? "05:00 PM" : "08:30 PM"),
          locationName: loc,
          title: loc,
          googleMapsLink: act.googleMapsLink || makeGoogleMapsUrl(loc, destName),
          description: act.description || `Visit ${loc} and experience authentic ${destName}.`,
          transitToNext: tNext,
          dwellTime: act.dwellTime || (period.toLowerCase() === "morning" ? "2 hours" : period.toLowerCase() === "afternoon" ? "2.5 hours" : "1.5 hours"),
          spotTip: tipText,
          tip: tipText,
          estimatedCost: act.estimatedCost || "₹150 - ₹450",
          imageSearchQuery: act.imageSearchQuery || formatLandmarkImageQuery(loc, destName),
          verifiedWikimediaUrl: act.verifiedWikimediaUrl || getVerifiedLandmarkWikimediaUrl(loc)
        };
      });
    } else {
      ["morning", "afternoon", "evening", "night"].forEach(period => {
        if (d[period]) {
          const item = d[period];
          const loc = item.title || item.locationName || item.activity || `${period} Sightseeing`;
          const defaultTimes = { morning: "08:30 AM", afternoon: "12:30 PM", evening: "05:00 PM", night: "08:30 PM" };
          const defaultCosts = { morning: "₹150 - ₹400", afternoon: "₹300 - ₹600", evening: "₹100 - ₹350", night: "₹250 - ₹500" };
          const tipText = item.spotTip || item.tip || (item.foodSpot ? `Local Food Spot: ${item.foodSpot}` : undefined);
          
          let tNext = item.transitToNext;
          if (!tNext) {
            if (period === "morning") tNext = defaultTransit.morningToAfternoon;
            else if (period === "afternoon") tNext = defaultTransit.afternoonToEvening;
            else if (period === "evening") tNext = defaultTransit.eveningToNight;
          }

          activities.push({
            timeOfDay: period.charAt(0).toUpperCase() + period.slice(1),
            time: item.time || defaultTimes[period],
            locationName: loc,
            title: loc,
            googleMapsLink: item.googleMapsLink || makeGoogleMapsUrl(loc, destName),
            description: item.description || `Visit ${loc} and experience authentic ${destName}.`,
            transitToNext: tNext,
            dwellTime: item.dwellTime || (period === "morning" ? "2 hours" : period === "afternoon" ? "2 hours" : "1.5 hours"),
            spotTip: tipText,
            tip: tipText,
            estimatedCost: item.estimatedCost || defaultCosts[period],
            imageSearchQuery: item.imageSearchQuery || formatLandmarkImageQuery(loc, destName),
            verifiedWikimediaUrl: item.verifiedWikimediaUrl || getVerifiedLandmarkWikimediaUrl(loc)
          });
        }
      });
    }

    const morningAct = activities.find(a => a.timeOfDay.toLowerCase() === "morning") || activities[0];
    const afternoonAct = activities.find(a => a.timeOfDay.toLowerCase() === "afternoon") || activities[1];
    const eveningAct = activities.find(a => a.timeOfDay.toLowerCase() === "evening") || activities[2];
    const nightAct = activities.find(a => a.timeOfDay.toLowerCase() === "night") || activities[3];

    // Map recommended area to stay
    let stay = d.stayRecommendation || d.stay;
    if (!stay && d.recommendedAreaToStay) {
      stay = {
        name: d.recommendedAreaToStay,
        type: "Recommended Area to Stay",
        whyPick: `Strategically central in ${destName} for easy commute & sightseeing`,
        approxRate: getBudgetHotel(cleanKey, tripData?.budget || "Comfort")?.approxRate || "₹3,500/night",
        googleMapsLink: makeGoogleMapsUrl(d.recommendedAreaToStay, destName)
      };
    }
    if (!stay) {
      stay = getBudgetHotel(cleanKey, tripData?.budget || "Comfort");
      if (stay && !stay.googleMapsLink) {
        stay.googleMapsLink = makeGoogleMapsUrl(stay.name, destName);
      }
    }

    let dining = d.diningSpots || d.dining;
    if (!dining) {
      dining = getBudgetDining(cleanKey, tripData?.budget || "Comfort");
    }
    if (Array.isArray(dining)) {
      dining = dining.map(spot => ({
        ...spot,
        googleMapsLink: spot.googleMapsLink || makeGoogleMapsUrl(spot.name, destName)
      }));
    }

    return {
      day: dayNum,
      dayNumber: dayNum,
      date: d.date || `Day ${dayNum}`,
      theme: dayTheme,
      dayTheme: dayTheme,
      transitNote: d.transitNote || `${morningAct?.transitToNext ? `Morning transit: ${morningAct.transitToNext}. ` : ''}${cleanLocalInsights.split('.')[0]}.`,
      activities: activities,
      morning: morningAct ? { 
        time: morningAct.time || "08:30 AM", 
        title: morningAct.locationName, 
        activity: morningAct.locationName, 
        locationName: morningAct.locationName, 
        googleMapsLink: morningAct.googleMapsLink, 
        description: morningAct.description, 
        transitToNext: morningAct.transitToNext || defaultTransit.morningToAfternoon,
        spotTip: morningAct.spotTip || morningAct.tip,
        tip: morningAct.tip || morningAct.spotTip, 
        estimatedCost: morningAct.estimatedCost || "₹200 - ₹400" 
      } : undefined,
      afternoon: afternoonAct ? { 
        time: afternoonAct.time || "12:30 PM", 
        title: afternoonAct.locationName, 
        activity: afternoonAct.locationName, 
        locationName: afternoonAct.locationName, 
        googleMapsLink: afternoonAct.googleMapsLink, 
        description: afternoonAct.description, 
        transitToNext: afternoonAct.transitToNext || defaultTransit.afternoonToEvening,
        spotTip: afternoonAct.spotTip || afternoonAct.tip,
        tip: afternoonAct.tip || afternoonAct.spotTip, 
        estimatedCost: afternoonAct.estimatedCost || "₹300 - ₹600" 
      } : undefined,
      evening: eveningAct ? { 
        time: eveningAct.time || "05:00 PM", 
        title: eveningAct.locationName, 
        activity: eveningAct.locationName, 
        locationName: eveningAct.locationName, 
        googleMapsLink: eveningAct.googleMapsLink, 
        description: eveningAct.description, 
        transitToNext: eveningAct.transitToNext || defaultTransit.eveningToNight,
        spotTip: eveningAct.spotTip || eveningAct.tip,
        tip: eveningAct.tip || eveningAct.spotTip, 
        estimatedCost: eveningAct.estimatedCost || "₹100 - ₹350" 
      } : undefined,
      night: nightAct ? { 
        time: nightAct.time || "08:30 PM", 
        title: nightAct.locationName, 
        activity: nightAct.locationName, 
        locationName: nightAct.locationName, 
        googleMapsLink: nightAct.googleMapsLink, 
        description: nightAct.description, 
        spotTip: nightAct.spotTip || nightAct.tip,
        tip: nightAct.tip || nightAct.spotTip, 
        estimatedCost: nightAct.estimatedCost || "₹250 - ₹500" 
      } : undefined,
      stayRecommendation: stay,
      diningSpots: dining,
      recommendedAreaToStay: d.recommendedAreaToStay || stay?.name || `${destName} Central Heritage Hub`,
      insiderTip: d.insiderTip || d.tip || morningAct?.spotTip || morningAct?.tip || afternoonAct?.spotTip || afternoonAct?.tip || eveningAct?.spotTip || eveningAct?.tip || "Book top monument tickets online via official portals to bypass long on-site lines. Engage an authorized heritage guide at the gate for authentic oral histories.",
      bestTimeWindow: d.bestTimeWindow || d.timing || `${morningAct?.time || "08:30 AM"} – 11:30 AM & 04:30 PM – 07:00 PM (Light crowds & pleasant light)`,
      practicalNote: d.practicalNote || d.note || `${cleanLocalInsights.split('.')[0]}. Wear cushioned walking shoes suitable for stone ramps.`
    };
  });

  const baseBudget = estimateBudget(tripData?.days || normalizedDays.length || 3, tripData?.travellers || 2, tripData?.budget || "Comfort");
  const finalBudget = { ...baseBudget };
  if (rawItinerary?.budgetBreakdown) {
    const bb = rawItinerary.budgetBreakdown;
    if (bb.stay) finalBudget.accommodation = bb.stay;
    if (bb.food) finalBudget.food = bb.food;
    if (bb.transport) finalBudget.transport = bb.transport;
    if (bb.activities) finalBudget.activities = bb.activities;
  }
  if (rawItinerary?.totalEstimatedCost) {
    finalBudget.estimatedTotal = rawItinerary.totalEstimatedCost;
  }

  const generatedHighlights = normalizedDays.map(d => d.dayTheme).slice(0, 4);

  return {
    destination: destName,
    curatedTitle: rawItinerary?.curatedTitle || rawItinerary?.tripTitle || `${destName} Handcrafted Yatra`,
    tripTitle: rawItinerary?.curatedTitle || rawItinerary?.tripTitle || `${destName} Handcrafted Yatra`,
    tags: Array.isArray(rawItinerary?.tags) ? rawItinerary.tags : [`${destName} Yatra`, "Heritage", "Curated"],
    tagline: rawItinerary?.tagline || `A custom, time-optimized journey through ${destName}`,
    arrivalLogistics: rawItinerary?.arrivalLogistics || {
      railwayStation: { name: logistics.nearest_railway_station, distance: logistics.distance_to_railway_km },
      busStand: { name: logistics.nearest_bus_stand, distance: logistics.distance_to_bus_stand_km },
      airport: { name: logistics.nearest_airport, distance: logistics.distance_to_airport_km }
    },
    logistics: logistics,
    highlights: (rawItinerary?.highlights && rawItinerary.highlights.length > 0) ? rawItinerary.highlights : generatedHighlights,
    days: normalizedDays,
    itinerary: normalizedDays,
    dayWiseTimeline: normalizedDays,
    mustTry: cleanMustTry,
    mustTryExperiences: cleanMustTry.map(m => ({
      title: m.item || m.title || '',
      description: `${m.approxCost ? `(${m.approxCost}) ` : ''}${m.why || m.description || ''}`.trim()
    })),
    packingEssentials: rawItinerary?.packingEssentials || dbEntry?.packing || [
      "Comfortable walking shoes with good tread",
      "Sun protection (hat, sunglasses, SPF 50)",
      "Light breathable cottons or warm layers depending on season",
      "Power bank & travel adapter"
    ],
    localInsights: cleanLocalInsights,
    localInsightsList: Array.isArray(rawItinerary?.localInsights) ? rawItinerary.localInsights : [cleanLocalInsights],
    bestTimeToVisit: rawItinerary?.bestTimeToVisit || dbEntry?.bestTime || "October to March offers pleasant and ideal sightseeing weather.",
    bookingSmartHacks: {
      hotelHack: rawItinerary?.bookingSmartHacks?.hotelHack || `Book via Booking.com for free 24hr cancellation or compare with MMT for bank credit card discounts (up to 12% off in ${destName}).`,
      transitHack: rawItinerary?.bookingSmartHacks?.transitHack || rawItinerary?.bookingSmartHacks?.flightOrTrainHack || `Check Vande Bharat Express or direct State Roadways Super Deluxe / Volvo buses to ${destName} if flight fares surge.`,
      flightOrTrainHack: rawItinerary?.bookingSmartHacks?.flightOrTrainHack || rawItinerary?.bookingSmartHacks?.transitHack || `Check Vande Bharat Express or direct State Roadways Super Deluxe / Volvo buses to ${destName} if flight fares surge.`,
      activityHack: rawItinerary?.bookingSmartHacks?.activityHack || `Pre-book monument entry passes on official ASI / state tourism portal or GetYourGuide to bypass 30–45 min physical counter queues.`
    },
    partnerDeals: (() => {
      const encDest = encodeURIComponent(destName);
      const encSource = encodeURIComponent(tripData?.source || tripData?.departureCity || "Delhi");
      const normDeal = (deal, defaultBadge, defaultUrl) => {
        if (!deal) return { dealBadge: defaultBadge, searchUrl: defaultUrl };
        if (typeof deal === "string") return { dealBadge: deal, searchUrl: defaultUrl };
        return {
          dealBadge: deal.dealBadge || defaultBadge,
          searchUrl: deal.searchUrl || defaultUrl
        };
      };
      return {
        makeMyTripHotels: normDeal(
          rawItinerary?.partnerDeals?.makeMyTripHotels,
          "🏷️ Up to 15% OFF via HDFC/ICICI cards",
          `https://www.makemytrip.com/hotels/hotel-listing/?city=${encDest}&country=IN`
        ),
        bookingDotCom: normDeal(
          rawItinerary?.partnerDeals?.bookingDotCom,
          "⚡ Zero Prepayment · Free 24h Cancellation",
          `https://www.booking.com/searchresults.html?ss=${encDest}`
        ),
        klook: normDeal(
          rawItinerary?.partnerDeals?.klook,
          "🎁 Extra ₹250 OFF on first app booking",
          `https://www.klook.com/en-IN/search/result/?query=${encDest}`
        ),
        expediaFlights: normDeal(
          rawItinerary?.partnerDeals?.expediaFlights,
          "✈️ Flight + Hotel bundle savings",
          `https://www.expedia.com/Flights-Search?trip=roundtrip&leg1=from:${encSource},to:${encDest}`
        ),
        mmtFlights: normDeal(
          rawItinerary?.partnerDeals?.mmtFlights,
          "💳 Zero convenience fee with code FLYMORE",
          "https://www.makemytrip.com/flights/"
        ),
        getYourGuide: normDeal(
          rawItinerary?.partnerDeals?.getYourGuide,
          `🎟️ Skip-the-Line Priority Pass in ${destName}`,
          `https://www.getyourguide.com/s/?q=${encDest}`
        ),
        goibiboCabs: normDeal(
          rawItinerary?.partnerDeals?.goibiboCabs,
          "🚖 Pre-negotiated Union Fare & Local Cab Pickup",
          "https://www.goibibo.com/cars/"
        )
      };
    })(),
    budgetBreakdown: rawItinerary?.budgetBreakdown || {
      stay: finalBudget.accommodation,
      food: finalBudget.food,
      transport: finalBudget.transport,
      activities: finalBudget.activities
    },
    budgetSummary: finalBudget,
    totalEstimatedCost: finalBudget.estimatedTotal
  };
}

// ============================================================
// SMART FALLBACK ENGINE — ZERO-REPEAT & REALISTIC GEOGRAPHY
// ============================================================
export function generateGenericFallback(tripData) {
  const destName = tripData.destinationName || tripData.destination || "India";
  const days = Math.max(1, parseInt(tripData.days, 10) || 3);
  const cleanKey = destName.toLowerCase().replace(/[^a-z0-9]/g, "");

  const matchedKey = Object.keys(DESTINATION_DATABASE).find(k => {
    const ck = k.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanKey.includes(ck) || ck.includes(cleanKey);
  });
  const dbEntry = matchedKey ? DESTINATION_DATABASE[matchedKey] : null;

  const matchedRealityKey = Object.keys(DESTINATION_REALITIES).find(k => {
    const ck = k.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanKey.includes(ck) || ck.includes(cleanKey);
  });
  const reality = matchedRealityKey ? DESTINATION_REALITIES[matchedRealityKey] : null;

  const budgetTier = tripData.budget || "Comfort";
  const hotel = getBudgetHotel(cleanKey, budgetTier);
  const dining = getBudgetDining(cleanKey, budgetTier);

  const defaultTransit = reality?.defaultTransit || {
    morningToAfternoon: "15 min walk / e-rickshaw through local market (600m)",
    afternoonToEvening: "20 min cab / transit through town traffic (4 km)",
    eveningToNight: "10 min walk to dinner & night stroll (350m)"
  };

  // Distinct day templates ensuring strictly unique activities across all days
  const distinctDayTemplates = [
    {
      theme: "Royal Forts & Iconic Heritage",
      area: "Old City & Palace Quarter",
      insiderTip: "Book fort and palace entry tickets online via the official portal to skip the 45-minute ticket line at the gate. Hire an authorized guide for verified royal folklore.",
      bestTimeWindow: "08:30 AM – 11:30 AM (Soft lighting & minimal crowds) & 04:30 PM – 06:30 PM (Golden hour photography)",
      practicalNote: "Wear comfortable walking shoes with good tread for cobbled stone ramps. Keep a sun hat and refillable water bottle handy.",
      morning: { 
        title: `${destName} Grand Fort & Citadel`, 
        desc: `Explore the magnificent historic fort, royal courtyards, and ancient defensive bastions overlooking ${destName}.`, 
        transitToNext: "15 min walk through heritage alleyways (800m)",
        tip: "Arrive early morning around 8:30 AM for soft sunlight and minimal crowds." 
      },
      afternoon: { 
        title: `${destName} Royal Palace & Museum`, 
        desc: `Tour the royal halls, courtyards, and personal armory exhibits preserved from regal dynasties.`, 
        transitToNext: "20 min cab through old city gate (4.5 km)",
        foodSpot: `Heritage Thali Bhavan on Palace Road (~₹280)` 
      },
      evening: { 
        title: `${destName} Historic Clock Tower & Bazaars`, 
        desc: `Stroll through the bustling heritage market lanes bustling with spice traders and local artisans.`, 
        transitToNext: "10 min walk to illuminated rooftop diner (400m)",
        tip: "Try local street snack delicacies from renowned sweet shops." 
      },
      night: { 
        title: `${destName} Illuminated Palace View & Heritage Walk`, 
        desc: `Experience illuminated monument facades at night accompanied by peaceful city ambiance.`, 
        tip: "Book a rooftop dinner table facing the lit ramparts." 
      }
    },
    {
      theme: "Spiritual Sacred Temples & River Ghats",
      area: "Temple Promenade & Riverfront",
      insiderTip: "Arrive 30 minutes before evening aarti to secure front riverside steps. For temple inner sanctums, keep slip-on footwear for easy deposit outside.",
      bestTimeWindow: "06:00 AM – 08:30 AM (Morning serenity & aarti) & 05:30 PM – 07:30 PM (Evening twilight ceremonies)",
      practicalNote: "Dress modestly covering shoulders and knees. Keep ₹10–₹20 cash notes for footwear counters and flower offerings.",
      morning: { 
        title: `${destName} Sacred Ancient Temple`, 
        desc: `Attend peaceful morning aarti and absorb the sanctified architectural carvings of this revered shrine.`, 
        transitToNext: "10 min walk along pedestrian river stone steps (500m)",
        tip: "Dress modestly covering shoulders and knees; footwear deposit is available outside." 
      },
      afternoon: { 
        title: `${destName} Heritage Stepwell & Sacred Reservoir`, 
        desc: `Discover centuries-old water conservation architecture with intricate geometric stone stairs.`, 
        transitToNext: "15 min wooden boat ride / walk along ghats (1.2 km)",
        foodSpot: `Anandam Pure Veg Heritage Restaurant on Temple Marg (~₹220)` 
      },
      evening: { 
        title: `${destName} Sunset Riverfront / Lakeside Promenade`, 
        desc: `Watch the crimson sunset horizon from peaceful river banks while listening to temple bells.`, 
        transitToNext: "5 min walk to grand aarti steps (200m)",
        tip: "Hire a traditional boat ride for scenic waterside vantage points." 
      },
      night: { 
        title: `${destName} Grand Evening Aarti Ceremony`, 
        desc: `Witness rhythmic brass lamps, conch sounds, and devotional chants under the starlit sky.`, 
        tip: "Arrive 30 minutes before sunset to secure front sitting steps." 
      }
    },
    {
      theme: "Scenic Nature & Mountain Viewpoints",
      area: "Highland Ridge & Botanical Enclave",
      insiderTip: "Morning viewpoints offer the clearest mountain visibility before valley clouds roll in. Grab hot local spiced chai at the summit ridge.",
      bestTimeWindow: "06:30 AM – 10:00 AM (Crisp panoramic vistas) & 04:00 PM – 06:30 PM (Golden sunset glow over peaks)",
      practicalNote: "Highland mornings can be breezy; pack a light fleece or windbreaker. Keep motion sickness medicine if sensitive to hairpin roads.",
      morning: { 
        title: `${destName} Hilltop Sunrise Ridge & Nature Trails`, 
        desc: `Hike or take a scenic drive to the peak for panoramic vistas of the awakening valley landscape.`, 
        transitToNext: "25 min cab along winding mountain road (8 km)",
        tip: "Carry a light windcheater jacket as mornings can be breezy." 
      },
      afternoon: { 
        title: `${destName} Botanical Reserve & Cedar Gardens`, 
        desc: `Unwind amidst lush native flora, ancient shaded trees, and peaceful landscaped walking avenues.`, 
        transitToNext: "20 min cab to panoramic sunset point (6 km)",
        foodSpot: `Pine Wood Valley Bistro on Mall Ridge (~₹350)` 
      },
      evening: { 
        title: `${destName} Panoramic Sunset Point`, 
        desc: `Capture breathtaking golden hour photographs overlooking undulating hills and valley slopes.`, 
        transitToNext: "10 min walk to hillside cafe",
        tip: "Grab freshly brewed local tea and pakoras from nearby viewpoint shacks." 
      },
      night: { 
        title: `${destName} Stargazing & Valley Overlook Walk`, 
        desc: `Experience the serene mountain breeze and glittering city lights from the elevated ridge road.`, 
        tip: "Keep your camera mounted on a stable ledge for low-light photos." 
      }
    },
    {
      theme: "Local Artisan Crafts & Textile Trails",
      area: "Crafts Village & Artisan Hub",
      insiderTip: "Purchase directly from certified weavers' cooperatives or government craft emporiums to ensure authentic handloom hallmarks without agent commissions.",
      bestTimeWindow: "10:00 AM – 01:00 PM (Artisans actively crafting) & 05:00 PM – 08:30 PM (Vibrant bazaar atmosphere)",
      practicalNote: "Maintain ₹500–₹1000 in cash notes as smaller village artisan stalls can experience intermittent digital payment connectivity.",
      morning: { 
        title: `${destName} Artisan Craft Village & Pottery Guild`, 
        desc: `Watch master artisans perform handloom weaving, block printing, and pottery live.`, 
        transitToNext: "10 min walk to regional craft gallery (450m)",
        tip: "Support local weavers by purchasing directly without middleman markups." 
      },
      afternoon: { 
        title: `${destName} Regional Textile & Craft Gallery`, 
        desc: `Marvel at curated exhibits of indigenous embroidery, folk garments, and historical dyes.`, 
        transitToNext: "15 min auto to night bazaar (3 km)",
        foodSpot: `Shilpgram Traditional Rasoi in Crafts Enclave (~₹240)` 
      },
      evening: { 
        title: `${destName} Handicrafts Night Bazaar`, 
        desc: `Explore stalls featuring brass handicrafts, wooden sculptures, handmade leather mojris, and organic spices.`, 
        transitToNext: "5 min walk to open-air amphitheatre (200m)",
        tip: "Keep cash handy as small craft stalls may have intermittent card networks." 
      },
      night: { 
        title: `${destName} Open-Air Cultural Amphitheatre`, 
        desc: `Enjoy authentic folk musicians playing regional instruments and rhythmic regional dance.`, 
        tip: "Shows typically start at 8:00 PM; tickets can be bought at the gate." 
      }
    },
    {
      theme: "Hidden Havelis & Architecture Wonders",
      area: "Heritage Haveli Quarter",
      insiderTip: "Look upwards into courtyard ceiling arches to spot pristine 200-year-old stone-pigment frescoes. Avoid flash photography to protect historic mineral dyes.",
      bestTimeWindow: "09:00 AM – 12:00 PM (Best sunlight for courtyard photography) & 04:00 PM – 06:30 PM (Comfortable walking weather)",
      practicalNote: "Old haveli lanes are narrow; navigating on foot or taking an e-rickshaw to the main square archway is easiest.",
      morning: { 
        title: `${destName} Frescoed Merchant Havelis`, 
        desc: `Admire ancient hand-painted murals, intricately carved jharokhas (balconies), and stone lattice work.`, 
        transitToNext: "12 min walk through haveli alleys (700m)",
        tip: "Look upwards into ceiling domes to spot natural stone-pigment frescoes." 
      },
      afternoon: { 
        title: `${destName} Central Archaeological Museum`, 
        desc: `Inspect rare coin hoards, centuries-old manuscripts, weapons, and marble statuettes.`, 
        transitToNext: "15 min auto to royal cenotaphs (3.5 km)",
        foodSpot: `Royal Darbar Dining Hall on Station Road (~₹320)` 
      },
      evening: { 
        title: `${destName} Royal Cenotaphs & Memorial Pavilions`, 
        desc: `Walk through ornamental marble pavilions built in honor of erstwhile royal rulers.`, 
        transitToNext: "10 min cab to heritage sound & light amphitheatre",
        tip: "Incredible symmetry for architectural photographers during sunset." 
      },
      night: { 
        title: `${destName} Heritage Sound & Light Show`, 
        desc: `Hear dramatic voice-overs narrating heroic tales and folklore projected across historical walls.`, 
        tip: "English shows usually follow the Hindi performance." 
      }
    }
  ];

  const daysArr = [];
  const usedTitles = new Set();

  for (let i = 0; i < days; i++) {
    const dayNumber = i + 1;
    if (dbEntry && dbEntry.activities && i < dbEntry.activities.length) {
      const dbAct = dbEntry.activities[i];
      const morningItem = dbAct.activities[0] || { locationName: `${destName} Historical Citadel`, description: `Visit iconic historical citadel.` };
      const afternoonItem = dbAct.activities[1] || { locationName: `${destName} Royal Palace`, description: `Tour royal state apartments.` };
      const eveningItem = dbAct.activities[2] || { locationName: `${destName} Heritage Bazaar`, description: `Explore colorful market stalls.` };
      
      const distinctNights = [
        { title: `${destName} Illuminated Heritage Walk & Old Town Lights`, desc: "Unwind with nighttime monument perspectives, gentle breeze, and traditional ambiance.", tip: "Book a rooftop dinner table facing illuminated monuments." },
        { title: `${destName} Rooftop Panorama & Authentic Folk Music`, desc: "Experience live folk musicians performing classical regional melodies under the stars.", tip: "Try hot kulhad saffron milk at night sweet shops." },
        { title: `${destName} Starlit Village Celebration & Cultural Show`, desc: "Enjoy lively puppet shows, acoustic folk chants, and celebratory dining.", tip: "Shows typically wrap up around 10:30 PM." },
      ];
      const nightItem = distinctNights[i % distinctNights.length];

      usedTitles.add(morningItem.locationName);
      usedTitles.add(afternoonItem.locationName);
      usedTitles.add(eveningItem.locationName);
      usedTitles.add(nightItem.title);

      const mTransit = morningItem.transitToNext || defaultTransit.morningToAfternoon;
      const aTransit = afternoonItem.transitToNext || defaultTransit.afternoonToEvening;
      const eTransit = eveningItem.transitToNext || defaultTransit.eveningToNight;

      daysArr.push({
        dayNumber: dayNumber,
        dayTheme: dbAct.theme || `Day ${dayNumber} - Heritage Highlights`,
        transitNote: `${mTransit ? `Transit: ${mTransit}. ` : ''}${reality?.transportConstraints ? reality.transportConstraints.split('.')[0] + '.' : ''}`,
        morning: {
          time: "08:30 AM",
          title: morningItem.locationName,
          description: morningItem.description,
          transitToNext: mTransit,
          tip: "Head out early for gentle sunlight and serene exploration.",
          googleMapsLink: morningItem.googleMapsLink || makeGoogleMapsUrl(morningItem.locationName, destName)
        },
        afternoon: {
          time: "12:30 PM",
          title: afternoonItem.locationName,
          description: afternoonItem.description,
          transitToNext: aTransit,
          foodSpot: dbAct.dining?.[0]?.name ? `${dbAct.dining[0].name} (${dbAct.dining[0].specialty})` : `${destName} Heritage Kitchen (~₹280)`,
          googleMapsLink: afternoonItem.googleMapsLink || makeGoogleMapsUrl(afternoonItem.locationName, destName)
        },
        evening: {
          time: "05:00 PM",
          title: eveningItem.locationName,
          description: eveningItem.description,
          transitToNext: eTransit,
          tip: "Stroll through the vibrant evening streets as the temperature cools.",
          googleMapsLink: eveningItem.googleMapsLink || makeGoogleMapsUrl(eveningItem.locationName, destName)
        },
        night: {
          time: "08:30 PM",
          title: nightItem.title,
          description: nightItem.description,
          tip: nightItem.tip,
          googleMapsLink: makeGoogleMapsUrl(nightItem.title, destName)
        },
        recommendedAreaToStay: hotel?.name || `${destName} Central Heritage Quarter`,
        insiderTip: morningItem.tip || afternoonItem.tip || "Book palace & fort ticket slots online in advance to bypass long ticket lines. Hire an authorized guide at the gate for authentic oral histories.",
        bestTimeWindow: "08:30 AM – 11:30 AM (Minimal crowds & calm light) & 04:30 PM – 07:00 PM (Golden hour & cool breeze)",
        practicalNote: reality?.transportConstraints ? reality.transportConstraints.split('.')[0] + '.' : "Wear comfortable, cushioned walking shoes for stone walkways. Carry a light water bottle and keep modest attire for shrines."
      });
    } else {
      const tmplIndex = i % distinctDayTemplates.length;
      const tmpl = distinctDayTemplates[tmplIndex];

      let mTitle = tmpl.morning.title;
      let aTitle = tmpl.afternoon.title;
      let eTitle = tmpl.evening.title;
      let nTitle = tmpl.night.title;

      if (usedTitles.has(mTitle)) mTitle = `${destName} Outer Sector - ${tmpl.morning.title}`;
      if (usedTitles.has(aTitle)) aTitle = `${destName} South Hub - ${tmpl.afternoon.title}`;
      if (usedTitles.has(eTitle)) eTitle = `${destName} Valley Edge - ${tmpl.evening.title}`;
      if (usedTitles.has(nTitle)) nTitle = `${destName} Starlight Overlook - ${tmpl.night.title}`;

      usedTitles.add(mTitle);
      usedTitles.add(aTitle);
      usedTitles.add(eTitle);
      usedTitles.add(nTitle);

      daysArr.push({
        dayNumber: dayNumber,
        dayTheme: tmpl.theme,
        transitNote: `${tmpl.morning.transitToNext ? `Transit: ${tmpl.morning.transitToNext}. ` : ''}${reality?.transportConstraints ? reality.transportConstraints.split('.')[0] + '.' : ''}`,
        morning: {
          time: "08:30 AM",
          title: mTitle,
          description: tmpl.morning.desc,
          transitToNext: tmpl.morning.transitToNext || defaultTransit.morningToAfternoon,
          tip: tmpl.morning.tip,
          googleMapsLink: makeGoogleMapsUrl(mTitle, destName)
        },
        afternoon: {
          time: "12:30 PM",
          title: aTitle,
          description: tmpl.afternoon.desc,
          transitToNext: tmpl.afternoon.transitToNext || defaultTransit.afternoonToEvening,
          foodSpot: tmpl.afternoon.foodSpot,
          googleMapsLink: makeGoogleMapsUrl(aTitle, destName)
        },
        evening: {
          time: "05:00 PM",
          title: eTitle,
          description: tmpl.evening.desc,
          transitToNext: tmpl.evening.transitToNext || defaultTransit.eveningToNight,
          tip: tmpl.evening.tip,
          googleMapsLink: makeGoogleMapsUrl(eTitle, destName)
        },
        night: {
          time: "08:30 PM",
          title: nTitle,
          description: tmpl.night.desc,
          tip: tmpl.night.tip,
          googleMapsLink: makeGoogleMapsUrl(nTitle, destName)
        },
        recommendedAreaToStay: tmpl.area || `${destName} City Center`,
        insiderTip: tmpl.insiderTip,
        bestTimeWindow: tmpl.bestTimeWindow,
        practicalNote: tmpl.practicalNote
      });
    }
  }

  const estBudget = estimateBudget(days, tripData.travellers || 2, budgetTier);

  return normalizeItinerary({
    destination: destName,
    tripTitle: dbEntry?.title || `Curated ${destName} Yatra`,
    tagline: dbEntry?.tagline || `A handpicked, time-optimized journey through the finest sights of ${destName}`,
    totalEstimatedCost: estBudget.estimatedTotal,
    highlights: dbEntry?.highlights || undefined,
    mustTry: reality?.mustTry || dbEntry?.mustTry || undefined,
    packingEssentials: dbEntry?.packing || undefined,
    localInsights: reality?.transportConstraints || dbEntry?.localInsights || undefined,
    days: daysArr
  }, tripData);
}

// ============================================================
// POLLINATIONS AI FALLBACK (FREE SERVERLESS)
// ============================================================
async function generateViaPollinationsAI(prompt, tripData) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const response = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        messages: [
          { 
            role: "system", 
            content: "You are an expert India travel concierge. Respond ONLY with valid, parseable JSON conforming strictly to the requested schema. No markdown, no conversational text." 
          },
          { role: "user", content: prompt }
        ],
        jsonMode: true
      }),
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`Pollinations HTTP ${response.status}`);
    const text = await response.text();
    if (!text) throw new Error("Empty response from Pollinations");

    const cleanJson = text.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim();
    const itinerary = JSON.parse(cleanJson);

    if (itinerary && (itinerary.dayWiseTimeline || itinerary.days || itinerary.itinerary)) {
      return { success: true, data: normalizeItinerary(itinerary, tripData), model: "BharatDarshan AI (Pollinations)", isDemoMode: false };
    }
    throw new Error("Invalid itinerary JSON structure");
  } catch (err) {
    console.warn("[AIYatraEngine] Pollinations AI fallback failed:", err.message);
    return null;
  }
}

// ============================================================
// CANONICAL REALISM PROMPT TEMPLATE & BUILDER
// ============================================================
export const ITINERARY_PROMPT_TEMPLATE = `
Generate a hyper-realistic, detailed, day-wise travel itinerary from \${source} to \${destination} for \${travelersCount || 2} person(s) on a \${budgetTier || "Comfort"} budget.

CRITICAL LOCAL REALISM & VERIFIED DATA RULES:
1. TRANSPORT REALITY:
   - Never assume app-cabs (Ola/Uber) or auto-rickshaws operate everywhere.
   - Enforce destination-specific transit rules: if areas are pedestrianized (e.g., hill station Mall Roads/Ridge, sacred ghats, old city alleys), explicitly state that walking, municipal lifts, battery carts, or registered union taxis are mandatory.
   - Nearest stations, bus stands, and airport distances must reflect actual physical ground truth.

2. LOGISTICAL GEOGRAPHY:
   - Group attractions strictly by proximity. Never place 3-4 hour gaps between spots within 500 meters of each other.
   - State realistic commute times between consecutive stops (e.g., "5 min stroll", "25 min hill taxi").

3. MUST-TRY EXPERIENCES (STRICT):
   - Never output generic placeholders like "Authentic Regional Thali".
   - Format: [Iconic Dish or Unique Activity] at [Famous Street, Shop, or Stall Name] (~₹[Estimated Cost in INR]).

4. ALL 7 PARTNER PLATFORMS (DYNAMIC SEARCH LINKS & DEALS):
   - For EACH partner platform, provide:
     a) "dealBadge": High-converting savings hook tailored to \${destination} (bank codes, queue bypass, or zero fees).
     b) "searchUrl": Clean, relevant search/landing URL encoded for \${destination} (avoiding static luxury hotel pages).
   
   Partners schema requirements:
   - makeMyTripHotels:
     dealBadge: e.g. "🏷️ Up to 15% OFF via HDFC/ICICI cards"
     searchUrl: "https://www.makemytrip.com/hotels/hotel-listing/?city=\${encodeURIComponent(destination)}&country=IN"
   - bookingDotCom:
     dealBadge: e.g. "⚡ Zero Prepayment · Free 24h Cancellation"
     searchUrl: "https://www.booking.com/searchresults.html?ss=\${encodeURIComponent(destination)}"
   - klook:
     dealBadge: e.g. "🎁 Extra ₹250 OFF on first app booking"
     searchUrl: "https://www.klook.com/en-IN/search/result/?query=\${encodeURIComponent(destination)}"
   - expediaFlights:
     dealBadge: e.g. "✈️ Flight + Hotel bundle savings"
     searchUrl: "https://www.expedia.com/Flights-Search?trip=roundtrip&leg1=from:\${encodeURIComponent(source)},to:\${encodeURIComponent(destination)}"
   - mmtFlights:
     dealBadge: e.g. "💳 Zero convenience fee with code FLYMORE"
     searchUrl: "https://www.makemytrip.com/flights/"
   - getYourGuide:
     dealBadge: e.g. "🎟️ Skip-the-Line Priority Pass in \${destination}"
     searchUrl: "https://www.getyourguide.com/s/?q=\${encodeURIComponent(destination)}"
   - goibiboCabs:
     dealBadge: e.g. "🚖 Pre-negotiated Union Fare & Local Cab Pickup"
     searchUrl: "https://www.goibibo.com/cars/"

Format output strictly as JSON matching this schema:
{
  "curatedTitle": "string",
  "tags": ["string"],
  "arrivalLogistics": {
    "railwayStation": { "name": "string", "distance": "string" },
    "busStand": { "name": "string", "distance": "string" },
    "airport": { "name": "string", "distance": "string" }
  },
  "dayWiseTimeline": [
    {
      "day": 1,
      "title": "string",
      "activities": [
        {
          "time": "09:00 AM",
          "title": "string",
          "description": "string",
          "transitToNext": "string",
          "spotTip": "string"
        }
      ]
    }
  ],
  "budgetBreakdown": {
    "stay": "string",
    "food": "string",
    "transport": "string",
    "activities": "string"
  },
  "mustTryExperiences": [
    {
      "title": "string",
      "description": "string"
    }
  ],
  "packingEssentials": ["string"],
  "localInsights": ["string"],
  "bestTimeToVisit": "string",
  "bookingSmartHacks": {
    "hotelHack": "string",
    "transitHack": "string",
    "activityHack": "string"
  },
  "partnerDeals": {
    "makeMyTripHotels": { "dealBadge": "string", "searchUrl": "string" },
    "bookingDotCom": { "dealBadge": "string", "searchUrl": "string" },
    "klook": { "dealBadge": "string", "searchUrl": "string" },
    "expediaFlights": { "dealBadge": "string", "searchUrl": "string" },
    "mmtFlights": { "dealBadge": "string", "searchUrl": "string" },
    "getYourGuide": { "dealBadge": "string", "searchUrl": "string" },
    "goibiboCabs": { "dealBadge": "string", "searchUrl": "string" }
  }
}
`;

export function buildItineraryPrompt(destination, source, numberOfDays = 3, travelersCount = 2, budgetTier = "Comfort") {
  const durationText = numberOfDays ? ` for ${numberOfDays} days` : "";
  const encDest = encodeURIComponent(destination);
  const encSource = encodeURIComponent(source);
  return `Generate a hyper-realistic, detailed, day-wise travel itinerary from ${source} to ${destination}${durationText} for ${travelersCount || 2} person(s) on a ${budgetTier || "Comfort"} budget.

CRITICAL LOCAL REALISM & VERIFIED DATA RULES:
1. TRANSPORT REALITY:
   - Never assume app-cabs (Ola/Uber) or auto-rickshaws operate everywhere.
   - Enforce destination-specific transit rules: if areas are pedestrianized (e.g., hill station Mall Roads/Ridge, sacred ghats, old city alleys), explicitly state that walking, municipal lifts, battery carts, or registered union taxis are mandatory.
   - Nearest stations, bus stands, and airport distances must reflect actual physical ground truth.

2. LOGISTICAL GEOGRAPHY:
   - Group attractions strictly by proximity. Never place 3-4 hour gaps between spots within 500 meters of each other.
   - State realistic commute times between consecutive stops (e.g., "5 min stroll", "25 min hill taxi").

3. MUST-TRY EXPERIENCES (STRICT):
   - Never output generic placeholders like "Authentic Regional Thali".
   - Format: [Iconic Dish or Unique Activity] at [Famous Street, Shop, or Stall Name] (~₹[Estimated Cost in INR]).

4. ALL 7 PARTNER PLATFORMS (DYNAMIC SEARCH LINKS & DEALS):
   - For EACH partner platform, provide:
     a) "dealBadge": High-converting savings hook tailored to ${destination} (bank codes, queue bypass, or zero fees).
     b) "searchUrl": Clean, relevant search/landing URL encoded for ${destination} (avoiding static luxury hotel pages).
   
   Partners schema requirements:
   - makeMyTripHotels:
     dealBadge: e.g. "🏷️ Up to 15% OFF via HDFC/ICICI cards"
     searchUrl: "https://www.makemytrip.com/hotels/hotel-listing/?city=${encDest}&country=IN"
   - bookingDotCom:
     dealBadge: e.g. "⚡ Zero Prepayment · Free 24h Cancellation"
     searchUrl: "https://www.booking.com/searchresults.html?ss=${encDest}"
   - klook:
     dealBadge: e.g. "🎁 Extra ₹250 OFF on first app booking"
     searchUrl: "https://www.klook.com/en-IN/search/result/?query=${encDest}"
   - expediaFlights:
     dealBadge: e.g. "✈️ Flight + Hotel bundle savings"
     searchUrl: "https://www.expedia.com/Flights-Search?trip=roundtrip&leg1=from:${encSource},to:${encDest}"
   - mmtFlights:
     dealBadge: e.g. "💳 Zero convenience fee with code FLYMORE"
     searchUrl: "https://www.makemytrip.com/flights/"
   - getYourGuide:
     dealBadge: e.g. "🎟️ Skip-the-Line Priority Pass in ${destination}"
     searchUrl: "https://www.getyourguide.com/s/?q=${encDest}"
   - goibiboCabs:
     dealBadge: e.g. "🚖 Pre-negotiated Union Fare & Local Cab Pickup"
     searchUrl: "https://www.goibibo.com/cars/"

Format output strictly as JSON matching this schema:
{
  "curatedTitle": "string",
  "tags": ["string"],
  "arrivalLogistics": {
    "railwayStation": { "name": "string", "distance": "string" },
    "busStand": { "name": "string", "distance": "string" },
    "airport": { "name": "string", "distance": "string" }
  },
  "dayWiseTimeline": [
    {
      "day": 1,
      "title": "string",
      "activities": [
        {
          "time": "09:00 AM",
          "title": "string",
          "description": "string",
          "transitToNext": "string",
          "spotTip": "string"
        }
      ]
    }
  ],
  "budgetBreakdown": {
    "stay": "string",
    "food": "string",
    "transport": "string",
    "activities": "string"
  },
  "mustTryExperiences": [
    {
      "title": "string",
      "description": "string"
    }
  ],
  "packingEssentials": ["string"],
  "localInsights": ["string"],
  "bestTimeToVisit": "string",
  "bookingSmartHacks": {
    "hotelHack": "string",
    "transitHack": "string",
    "activityHack": "string"
  },
  "partnerDeals": {
    "makeMyTripHotels": { "dealBadge": "string", "searchUrl": "string" },
    "bookingDotCom": { "dealBadge": "string", "searchUrl": "string" },
    "klook": { "dealBadge": "string", "searchUrl": "string" },
    "expediaFlights": { "dealBadge": "string", "searchUrl": "string" },
    "mmtFlights": { "dealBadge": "string", "searchUrl": "string" },
    "getYourGuide": { "dealBadge": "string", "searchUrl": "string" },
    "goibiboCabs": { "dealBadge": "string", "searchUrl": "string" }
  }
}
`;
}

// ============================================================
// DIRECT AI TRIP GENERATION ENGINE WITH CRITICAL REALISM
// ============================================================
export async function generateAIItinerary(tripData) {
  const destName = tripData.destinationName || tripData.destination || "India";
  const numberOfDays = Math.max(1, parseInt(tripData.days, 10) || 3);
  const origin = tripData.departureCity?.name || tripData.origin || tripData.source || "Delhi";
  const travelersCount = tripData.travellers || tripData.travelersCount || 2;
  const budgetTier = tripData.budget || tripData.budgetTier || "Comfort";

  // Use Canonical Realistic Prompt Template
  const structuredPrompt = buildItineraryPrompt(destName, origin, numberOfDays, travelersCount, budgetTier);

  // Step 1: Direct Google Gemini API (supporting latest and flash models)
  if (GEMINI_API_KEY && GEMINI_API_KEY.trim().length > 5) {
    const candidateModels = ["gemini-flash-latest", "gemini-3.5-flash", "gemini-1.5-flash"];
    for (const model of candidateModels) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000);
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/\${model}:generateContent?key=\${GEMINI_API_KEY.trim()}`;

        const response = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            contents: [{ parts: [{ text: structuredPrompt }] }],
            systemInstruction: {
              parts: [{
                text: "You are an expert India travel concierge. Respond ONLY with valid, parseable JSON conforming strictly to the requested schema. No markdown backticks, no conversational introductory or concluding text."
              }]
            },
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 8192,
              responseMimeType: "application/json"
            },
          }),
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const json = await response.json();
          const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            const cleanJson = text.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim();
            const itinerary = JSON.parse(cleanJson);
            if (itinerary && ((Array.isArray(itinerary.days) && itinerary.days.length > 0) || (Array.isArray(itinerary.dayWiseTimeline) && itinerary.dayWiseTimeline.length > 0))) {
              return {
                success: true,
                data: normalizeItinerary(itinerary, tripData),
                model: `Gemini AI Engine (\${model})`,
                isDemoMode: false
              };
            }
          }
        } else {
          console.warn(`[AIYatraEngine] Model \${model} returned status \${response.status}`);
        }
      } catch (err) {
        console.warn(`[AIYatraEngine] Gemini model \${model} attempt failed:`, err.message);
      }
    }
  }

  // Step 2: Pollinations AI Fallback
  const pollinationsResult = await generateViaPollinationsAI(structuredPrompt, tripData);
  if (pollinationsResult) return pollinationsResult;

  // Step 3: Smart Curated Engine with Guaranteed ZERO-REPEAT logic across days
  console.warn("[AIYatraEngine] Loading zero-repeat smart curated engine fallback.");
  return {
    success: true,
    data: generateGenericFallback(tripData),
    model: "BharatDarshan Smart Curated Engine",
    isDemoMode: true
  };
}

export function estimateBudget(days, travellers, tier) {
  const rates = {
    Budget:  { stay: 1000,  food: 400,  transport: 350,  activities: 250  },
    Comfort: { stay: 4000,  food: 1000, transport: 1000, activities: 800  },
    Luxury:  { stay: 12000, food: 2500, transport: 2500, activities: 2000 },
    Royal:   { stay: 30000, food: 6000, transport: 6000, activities: 5000 },
  };
  const r = rates[tier] || rates.Comfort;
  const stay = r.stay * days;
  const food = r.food * days * travellers;
  const transport = r.transport * days;
  const activities = r.activities * travellers;
  const subtotal = stay + food + transport + activities;
  const total = subtotal + Math.round(subtotal * 0.08);

  const tierLabels = {
    Budget: "Budget Friendly", Comfort: "Comfortable", Luxury: "Premium Luxury", Royal: "Royal Heritage"
  };

  return {
    accommodation: `₹${stay.toLocaleString("en-IN")} (${r.stay.toLocaleString("en-IN")}/night × ${days} nights)`,
    food: `₹${food.toLocaleString("en-IN")} (~₹${r.food}/person/day × ${travellers} person(s))`,
    transport: `₹${transport.toLocaleString("en-IN")} (local travel for ${days} days)`,
    activities: `₹${activities.toLocaleString("en-IN")} (entry + experiences for ${travellers} person(s))`,
    estimatedTotal: `₹${total.toLocaleString("en-IN")} total for ${travellers} person(s) · ${tierLabels[tier] || tier} tier`
  };
}
