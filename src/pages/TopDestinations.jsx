import React from "react";
import { MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const topDestinations = [
  {
    id: 2701,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop", 
    description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan.",
  },
  {
    id: 701, 
    name: "Calangute Beach",
    location: "Bardez, North Goa",
    image: "https://oneboard.app/_next/static/media/baghabeach.e23ac324.webp",
    description: "The largest and most popular beach in North Goa, known for its golden sands, buzzing shacks, and endless water sports options.",
  },
  {
    id: 2207, 
    name: "Hawa Mahal",
    location: "Jaipur, Rajasthan",
    image: "https://www.travel-rajasthan.com/images/experiance-in-rajsthan/forts-and-palaces/hawa-mahal-travel-rajasthan.jpg",
    description: "A five-story pink sandstone structure with 953 small windows (Jharokhas), designed to allow royal ladies to watch street festivals without being seen.",
  },
  {
    id: 1301,
    name: "Alleppey Backwaters",
    location: "Alleppey, Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop",
    description: "A network of brackish lagoons and lakes. Famous for houseboat cruises.",
  },
  {
    id: 2704, 
    name: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh",
    image: "https://www.daiwikhotels.com/wp-content/uploads/2024/07/kashi-viswanath-temple-cvr-2.jpg",
    description: "A major temple dedicated to Lord Shiva. The new corridor provides direct access from the Ganges river ghats.",
  },
  {
    id: 3501, 
    name: "Pangong Tso",
    location: "Leh, Ladakh",
    image: "https://www.lehladakhindia.com/wp-content/uploads/2024/07/pangong-tso-lake.jpeg",
    description: "A mesmerizing lake at 4,225m that changes colors. Famous for the '3 Idiots' climax scene.",
  },
];

const TopDestinations = () => {
  return (
    // Responsive Padding: pt-28 on mobile, pt-36 on tablet/desktop. 
    // Responsive X-Padding: px-4 mobile, px-6 small screens, px-8 large screens.
    <div className="min-h-screen bg-slate-50 pt-28 md:pt-36 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Typography: text-3xl mobile, text-4xl tablet, text-5xl desktop */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-8 md:mb-12 text-slate-900">
          India's <span className="text-orange-600">Top Destinations</span>
        </h1>
        
        {/* Responsive Grid: 1 col mobile, 2 cols tablet, 3 cols desktop. Gap adjusts from 6 to 8. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topDestinations.map((place) => (
            // Added flex flex-col to keep buttons aligned at the bottom
            <div key={place.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col">
              
              {/* Responsive Image Height: h-56 mobile, h-64 desktop */}
              <div className="relative h-56 md:h-64 overflow-hidden shrink-0">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-orange-600 shadow-sm">
                  <Star size={12} fill="currentColor" />
                  TOP RATED
                </div>
              </div>
              
              {/* Flex-grow pushes the button to the bottom if descriptions vary in length */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-orange-600 mb-2">
                  <MapPin size={16} className="shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider truncate">{place.location}</span>
                </div>
                
                {/* Responsive Heading */}
                <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-2 md:mb-3">{place.name}</h2>
                
                {/* Line clamp ensures text doesn't break layout on mobile */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3 md:line-clamp-none">{place.description}</p>
                
                <Link 
                  to={`/place/${place.id}`} 
                  className="block w-full py-3 md:py-3.5 bg-slate-100 text-slate-900 text-sm md:text-base font-bold rounded-xl hover:bg-orange-600 hover:text-white transition-colors text-center mt-auto"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;