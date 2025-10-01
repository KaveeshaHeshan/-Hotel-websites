// src/pages/Home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Star, TrendingUp, Shield, Award, Clock, ChevronRight, Sparkles } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  // Featured Hotels Data
  const featuredHotels = [
    {
      id: 1,
      name: "Grand Luxury Hotel",
      location: "New York, USA",
      rating: 4.8,
      price: 299,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      reviews: 1250,
      discount: 20
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Miami, USA",
      rating: 4.6,
      price: 199,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      reviews: 890,
      discount: 15
    },
    {
      id: 3,
      name: "Mountain Lodge",
      location: "Colorado, USA",
      rating: 4.7,
      price: 159,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      reviews: 620,
      discount: 10
    },
    {
      id: 4,
      name: "City Central Hotel",
      location: "San Francisco, USA",
      rating: 4.5,
      price: 249,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
      reviews: 780,
      discount: 25
    }
  ];

  // Popular Destinations
  const popularDestinations = [
    {
      name: "New York",
      hotels: 1250,
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop"
    },
    {
      name: "Paris",
      hotels: 980,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop"
    },
    {
      name: "Tokyo",
      hotels: 850,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop"
    },
    {
      name: "Dubai",
      hotels: 720,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop"
    }
  ];

  // Benefits
  const benefits = [
    {
      icon: Shield,
      title: "Best Price Guarantee",
      description: "Find the lowest prices or we'll refund the difference",
      color: "blue"
    },
    {
      icon: Award,
      title: "Trusted & Quality",
      description: "Over 1 million verified hotel reviews from real guests",
      color: "purple"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Get help anytime, anywhere with our customer support team",
      color: "green"
    }
  ];

  const handleSearch = () => {
    navigate('/search-results');
  };

  const handleHotelClick = (hotelId) => {
    navigate(`/hotel/${hotelId}`);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-bounce-slow">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">Special Offers Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Find Your Perfect Hotel
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up-delay">
              Search, compare and book hotels at the best prices
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform hover:scale-105 transition-all duration-500 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Where are you going?
                </label>
                <div className="relative group">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <input
                    type="text"
                    placeholder="City, hotel, or destination"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300 hover:border-blue-400"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300 hover:border-blue-400"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300 hover:border-blue-400"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                <Search className="w-6 h-6 animate-pulse" />
                Search Hotels
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-${benefit.color}-100 to-${benefit.color}-200 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl`}>
                    <Icon className={`w-10 h-10 text-${benefit.color}-600 group-hover:rotate-12 transition-transform duration-500`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="animate-slide-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Hotels
              </h2>
              <p className="text-gray-600 text-lg">
                Handpicked hotels with the best ratings and reviews
              </p>
            </div>
            <button
              onClick={handleSearch}
              className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 group"
            >
              View All 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredHotels.map((hotel, index) => (
              <div
                key={hotel.id}
                onClick={() => handleHotelClick(hotel.id)}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    {hotel.discount}% OFF
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{hotel.rating}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      View Details
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {hotel.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {hotel.location}
                  </p>
                  <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {hotel.reviews} reviews
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ${hotel.price}
                      </span>
                      <span className="text-gray-600 text-sm">/night</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Popular Destinations
            </h2>
            <p className="text-gray-600 text-lg">
              Explore the most visited cities around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <div
                key={index}
                className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-200 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {destination.hotels} hotels
                  </p>
                  
                  {/* Hover Button */}
                  <button className="mt-4 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-gray-100 flex items-center gap-2">
                    Explore
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              Book your perfect hotel in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200"></div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-full text-3xl font-bold mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 relative z-10">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Search
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enter your destination and dates to find available hotels
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 rounded-full text-3xl font-bold mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 relative z-10">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Compare
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compare prices, amenities, and reviews to find your perfect match
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-full text-3xl font-bold mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 relative z-10">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Book
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Secure your booking instantly with our easy checkout process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 animate-fade-in-delay">
            Join millions of travelers who trust us to find their perfect stay
          </p>
          <button
            onClick={handleSearch}
            className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 transform hover:scale-110 hover:shadow-2xl active:scale-95 shadow-xl animate-bounce-slow"
          >
            <Search className="w-6 h-6" />
            Start Searching
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Add Custom CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s backwards;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s backwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Home;