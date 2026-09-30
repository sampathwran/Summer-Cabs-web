"use client";
import React, { useState } from 'react';
import { Plane, Car, Hotel, MapPin, Calendar, Clock, ArrowRight, ShieldCheck, CreditCard, Clock4, CheckCircle2, Plus, X, ChevronDown, Users, Star, MessageCircle, UserCheck, Smile } from 'lucide-react';

export default function Home() {
  const [dropoffs, setDropoffs] = useState(['']);
  const [selectedService, setSelectedService] = useState<{title: string, img: string, longDesc: string} | null>(null);
  const [bookingServiceType, setBookingServiceType] = useState('Airport Transfers');
  const [bookingVehicle, setBookingVehicle] = useState('Standard Car (Prius/Axio)');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const addDropoff = () => {
    setDropoffs([...dropoffs, '']);
  };

  const removeDropoff = (index: number) => {
    const newDrops = dropoffs.filter((_, i) => i !== index);
    setDropoffs(newDrops);
  };

  const handleDropoffChange = (index: number, value: string) => {
    const newDrops = [...dropoffs];
    newDrops[index] = value;
    setDropoffs(newDrops);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans relative">
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Car className="text-yellow-400 w-8 h-8" />
              <span className="text-white font-bold text-2xl tracking-tight">Summer Cabs</span>
            </div>
            <div className="hidden md:flex space-x-8 text-slate-200">
              <a href="#" className="hover:text-yellow-400 transition">Services</a>
              <a href="#" className="hover:text-yellow-400 transition">Airport Rates</a>
              <a href="#" className="hover:text-yellow-400 transition">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-yellow-400 text-sm font-medium">EN | SI | TA</button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-2 rounded-full font-bold transition shadow-lg shadow-yellow-400/20">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" 
            alt="Taxi Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left text */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-6 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Available 24/7 Island-wide
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Your reliable <span className="text-yellow-400">airport transfer</span>, just a click away.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
                Book a comfortable ride from Bandaranaike Airport (CMB) instantly. Transparent pricing with zero hidden charges.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl text-white text-sm border border-white/10">
                  <Car className="text-yellow-400" size={18} /> Modern Fleet
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl text-white text-sm border border-white/10">
                  <Plane className="text-yellow-400" size={18} /> Flight Tracking
                </div>
              </div>
            </div>

            {/* Right Booking Widget */}
            <div id="booking-form" className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl">
              
              <div className="flex bg-slate-900/50 rounded-2xl p-1 mb-8">
                <button className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 text-slate-900 py-3 rounded-xl font-bold shadow-sm transition">
                  <Car size={18} /> Taxi
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 text-white hover:bg-white/10 py-3 rounded-xl font-medium transition">
                  <Hotel size={18} /> Hotels
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 text-white hover:bg-white/10 py-3 rounded-xl font-medium transition">
                  <Plane size={18} /> Flights
                </button>
              </div>

              {/* Booking Form */}
              <div className="space-y-4">
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="text-white text-sm font-medium mb-1 block">Service Type</label>
                    <div className="relative">
                      <select 
                        value={bookingServiceType}
                        onChange={(e) => setBookingServiceType(e.target.value)}
                        className="w-full bg-slate-900/60 border border-slate-600 text-white pl-4 pr-10 py-4 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition appearance-none cursor-pointer"
                      >
                        <option value="Airport Transfers">Airport Transfers</option>
                        <option value="City Tours">City Tours</option>
                        <option value="Wedding Hires">Wedding Hires</option>
                        <option value="Corporate Travel">Corporate Travel</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-white text-sm font-medium mb-1 block">Vehicle Type</label>
                    <div className="relative">
                      <select 
                        value={bookingVehicle}
                        onChange={(e) => setBookingVehicle(e.target.value)}
                        className="w-full bg-slate-900/60 border border-slate-600 text-white pl-4 pr-10 py-4 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition appearance-none cursor-pointer"
                      >
                        <option value="Mini (Alto/Kwid)">Mini (Alto/Kwid)</option>
                        <option value="Standard Car (Prius/Axio)">Standard Car</option>
                        <option value="Minivan (KDH)">Minivan (KDH)</option>
                        <option value="Mini Van (5-6 Pax)">Mini Van (5-6 Pax)</option>
                        <option value="Luxury (Benz/BMW)">Luxury (Benz/BMW)</option>
                        <option value="Bus / Coach">Bus / Coach</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-white text-sm font-medium mb-1 block">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      defaultValue="Bandaranaike International Airport (CMB)"
                      className="w-full bg-slate-900/60 border border-slate-600 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  {dropoffs.map((drop, index) => (
                    <div key={index} className="relative">
                      <div className="flex justify-between items-end mb-1">
                        <label className="text-white text-sm font-medium">
                          {index === 0 ? 'Drop-off Location' : `Stop ${index}`}
                        </label>
                        {index > 0 && (
                          <button 
                            type="button" 
                            onClick={() => removeDropoff(index)}
                            className="text-red-400 hover:text-red-300 text-xs flex items-center gap-1 transition"
                          >
                            <X size={12} /> Remove
                          </button>
                        )}
                      </div>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input 
                          type="text" 
                          value={drop}
                          onChange={(e) => handleDropoffChange(index, e.target.value)}
                          placeholder="Enter destination (e.g. Colombo, Kandy)"
                          className="w-full bg-slate-900/60 border border-slate-600 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  ))}
                  
                  {dropoffs.length < 4 && (
                    <button 
                      type="button" 
                      onClick={addDropoff}
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1 transition pt-1"
                    >
                      <Plus size={16} /> Add another stop
                    </button>
                  )}
                </div>

                <div className="relative mt-4">
                  <label className="text-white text-sm font-medium mb-1 block">Pickup Date & Time</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="datetime-local" 
                      className="w-full bg-slate-900/60 border border-slate-600 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert cursor-pointer"
                    />
                  </div>
                </div>

                {/* Conditional Passenger Count for Bus */}
                {bookingVehicle === 'Bus / Coach' && (
                  <div className="relative mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-white text-sm font-medium mb-1 block">Number of Passengers</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="number" 
                        min="1"
                        placeholder="Enter total passengers"
                        className="w-full bg-slate-900/60 border border-slate-600 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                )}

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-extrabold text-lg py-4 rounded-xl mt-6 flex items-center justify-center gap-2 transition transform hover:scale-[1.02] shadow-xl shadow-yellow-400/20">
                  {bookingVehicle === 'Bus / Coach' ? (
                    <>Request Custom Quote <ArrowRight size={20} /></>
                  ) : (
                    <>Calculate Fare & Book <ArrowRight size={20} /></>
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Trust & Features Section */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 shrink-0 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock4 className="text-yellow-600" size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">24/7 Availability</h3>
                <p className="text-sm text-slate-500 mt-1">Our fleet is on standby around the clock.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 shrink-0 bg-yellow-100 rounded-full flex items-center justify-center">
                <CreditCard className="text-yellow-600" size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Fixed Pricing</h3>
                <p className="text-sm text-slate-500 mt-1">No hidden fees, no surge pricing.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 shrink-0 bg-yellow-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-yellow-600" size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Verified Drivers</h3>
                <p className="text-sm text-slate-500 mt-1">Strict background checks for your safety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">How It Works</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">Book your ride in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative mt-16">
            <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-0"></div>
            {[
              { step: '01', title: 'Book Online', desc: 'Fill the form and select your preferred vehicle and route.', icon: <MapPin className="text-yellow-500" size={32} /> },
              { step: '02', title: 'Meet Driver', desc: 'Our driver will wait for you at the arrivals with a name board.', icon: <UserCheck className="text-yellow-500" size={32} /> },
              { step: '03', title: 'Enjoy Ride', desc: 'Travel safely to your destination and pay directly to the driver.', icon: <Smile className="text-yellow-500" size={32} /> },
            ].map((item, idx) => (
              <div key={idx} className="relative bg-white pt-10 pb-8 px-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100/50 text-center z-10">
                <div className="w-20 h-20 bg-white border border-slate-100 shadow-md rounded-full flex items-center justify-center mx-auto mb-6 -mt-20 relative">
                  {item.icon}
                  <div className="absolute -top-2 -right-2 bg-slate-900 text-yellow-400 text-xs font-black w-7 h-7 rounded-full flex items-center justify-center">{item.step}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Deals Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <span className="text-red-500 animate-pulse">🔥</span> Flash Deals
              </h2>
              <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full border border-red-200">Limited Time</span>
            </div>
            <button className="text-sm font-bold text-slate-600 hover:text-slate-900 transition flex items-center gap-1">
              View All <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Colombo to Airport', oldPrice: 'Rs. 9,500', newPrice: 'Rs. 7,500', vehicle: 'Standard Car (4 Pax)', tag: 'Save 21%' },
              { title: 'Airport to Kandy', oldPrice: 'Rs. 25,000', newPrice: 'Rs. 21,000', vehicle: 'Minivan (7 Pax)', tag: 'Save 16%' },
              { title: 'Galle Day Tour', oldPrice: 'Rs. 35,000', newPrice: 'Rs. 28,000', vehicle: 'SUV (5 Pax)', tag: 'Save 20%' },
            ].map((deal, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 relative overflow-hidden transition duration-300">
                <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
                  {deal.tag}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 pr-16">{deal.title}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
                  <Car size={16} className="text-slate-400" /> {deal.vehicle}
                </div>
                <div className="flex items-end justify-between border-t border-slate-200 pt-4">
                  <div>
                    <span className="text-xs text-slate-400 line-through block mb-0.5">{deal.oldPrice}</span>
                    <span className="text-2xl font-extrabold text-red-600">{deal.newPrice}</span>
                  </div>
                  <button className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-5 py-2.5 rounded-xl font-bold transition text-sm">
                    Claim Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Our Services</h2>
              <p className="mt-4 text-slate-400 max-w-2xl text-lg">Tailored transportation solutions for every need. Manageable via Admin Panel.</p>
            </div>
            <button className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold transition">
              View All Services <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Airport Transfers', 
                img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop', 
                longDesc: 'Start your journey in Sri Lanka stress-free with our premium airport transfer service. We provide 24/7 pick-up and drop-off at Bandaranaike International Airport (BIA). Our drivers monitor your flight status to ensure timely pickups even if your flight is delayed. Enjoy a comfortable ride in our modern, air-conditioned vehicles.' 
              },
              { 
                title: 'City Tours', 
                img: 'https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?q=80&w=800&auto=format&fit=crop', 
                longDesc: 'Discover the hidden gems and popular landmarks of Sri Lanka with our customizable city tours. From the bustling streets of Colombo to the historic temples of Kandy, our knowledgeable local drivers act as your personal guides. We offer flexible itineraries, allowing you to explore at your own pace.' 
              },
              { 
                title: 'Wedding Hires', 
                img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop', 
                longDesc: 'Make your special day unforgettable with our luxury wedding car hires. We offer a fleet of premium vehicles, beautifully decorated to match your theme. Our professional, well-dressed chauffeurs ensure you arrive in style and comfort, providing a VIP experience for the bride, groom, and family members.' 
              },
              { 
                title: 'Corporate Travel', 
                img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop', 
                longDesc: 'Reliable and professional transportation for your business needs. We cater to corporate clients with executive vehicles, ensuring you reach your meetings, conferences, and corporate events on time. We offer customized billing, dedicated account managers, and strict confidentiality for all our corporate partners.' 
              }
            ].map((service, i) => (
              <div key={i} className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-slate-900/50 transition duration-300 flex flex-col group">
                <div className="h-48 shrink-0 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {service.longDesc}
                  </p>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="text-yellow-400 hover:text-yellow-300 font-bold text-sm flex items-center gap-1 mt-auto transition"
                  >
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Choose Your Ride</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">From economical minis to luxury coaches, we have a vehicle for every journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Mini (Alto/Kwid)', pax: '3 Pax', bags: '2 Bags', basePrice: 'Rs. 500', baseKm: 'first 3 km', perKm: 'Rs. 100 / km', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=600&auto=format&fit=crop' },
              { name: 'Standard Car (Prius/Axio)', pax: '4 Pax', bags: '3 Bags', basePrice: 'Rs. 800', baseKm: 'first 4 km', perKm: 'Rs. 140 / km', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop' },
              { name: 'Minivan (KDH)', pax: '7-9 Pax', bags: '6 Bags', basePrice: 'Rs. 1,500', baseKm: 'first 5 km', perKm: 'Rs. 180 / km', img: 'https://images.unsplash.com/photo-1520627977056-c307aebc8aca?q=80&w=600&auto=format&fit=crop' },
              { name: 'Mini Van (5-6 Pax)', pax: '5-6 Pax', bags: '4 Bags', basePrice: 'Rs. 2,000', baseKm: 'first 5 km', perKm: 'Rs. 200 / km', img: 'https://images.unsplash.com/photo-1520627977056-c307aebc8aca?q=80&w=600&auto=format&fit=crop' },
              { name: 'Luxury (Benz/BMW)', pax: '3 Pax', bags: '2 Bags', basePrice: 'Rs. 5,000', baseKm: 'first 10 km', perKm: 'Rs. 400 / km', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop' },
              { name: 'Bus / Coach', pax: '29-45 Pax', bags: '30 Bags', basePrice: 'Custom', baseKm: 'Quote', perKm: 'Contact Us', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop' },
            ].map((vehicle, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-slate-200 transition duration-300 flex flex-col group">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition z-10"/>
                  <img src={vehicle.img} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 z-20">
                    Popular
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{vehicle.name}</h3>
                  <div className="flex gap-6 mb-6 text-sm text-slate-600 font-medium">
                    <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {vehicle.pax}</span>
                    <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {vehicle.bags}</span>
                  </div>
                  <div className="mt-auto flex flex-col gap-5 pt-6 border-t border-slate-200">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-wider font-extrabold">Base Fare</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-black text-slate-900">{vehicle.basePrice}</span>
                          <span className="text-xs text-slate-500 font-bold">/ {vehicle.baseKm}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block mb-1 uppercase tracking-wider font-extrabold">Additional</span>
                        <span className="text-sm font-bold text-slate-700">{vehicle.perKm}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setBookingVehicle(vehicle.name);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full bg-slate-900 hover:bg-yellow-400 hover:text-slate-900 text-white px-6 py-3.5 rounded-xl font-bold transition shadow-lg hover:shadow-yellow-400/30"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Popular Airport Transfers</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">Top destinations directly from Bandaranaike International Airport (CMB)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { route: 'Airport to Colombo', price: 'Rs. 7,500', time: '45 Mins', img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=600&auto=format&fit=crop' },
              { route: 'Airport to Kandy', price: 'Rs. 21,000', time: '3 Hours', img: 'https://images.unsplash.com/photo-1588661609117-7a5e1eb4b0b1?q=80&w=600&auto=format&fit=crop' },
              { route: 'Airport to Galle', price: 'Rs. 22,000', time: '2.5 Hours', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop' },
              { route: 'Airport to Ella', price: 'Rs. 35,000', time: '5 Hours', img: 'https://images.unsplash.com/photo-1606708687440-59bf6a8c2f16?q=80&w=600&auto=format&fit=crop' }
            ].map((route, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition duration-300 h-[320px]">
                <img src={route.img} alt={route.route} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform group-hover:-translate-y-2 transition duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition">{route.route}</h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">{route.time}</span>
                    <span className="text-yellow-400 font-extrabold bg-slate-900/60 px-3 py-1 rounded-full backdrop-blur-md">{route.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">What Our Clients Say</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">Trusted by thousands of travelers worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', country: 'United Kingdom', text: 'Highly recommend Summer Cabs! Our flight was delayed by 2 hours, but our driver was still waiting for us with a smile. The van was very clean and comfortable.', date: 'Oct 2025' },
              { name: 'Markus Müller', country: 'Germany', text: 'Excellent service from Airport to Mirissa. The driver drove safely and gave us great tips for our holiday. Booking was incredibly easy.', date: 'Sep 2025' },
              { name: 'Anjali Sharma', country: 'India', text: 'Used them for a 3-day cultural triangle tour. Very professional, transparent pricing, and zero hassle. Will definitely book again.', date: 'Aug 2025' }
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm relative hover:-translate-y-1 transition duration-300">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-8 italic">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-lg">{review.name.charAt(0)}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    <span className="text-xs text-slate-500 font-medium">{review.country} • {review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Do you charge extra for flight delays?', a: 'No, we do not. We actively monitor your flight status and our driver will be there when you land, with no extra waiting charges.' },
              { q: 'How do I find my driver at the airport?', a: 'Your driver will be waiting in the arrival hall holding a name board with your name clearly printed on it.' },
              { q: 'Can I pay by credit card?', a: 'Currently, we accept Cash (LKR, USD, EUR, GBP) directly to the driver. Online card payments will be introduced soon.' },
              { q: 'Are your vehicles air-conditioned?', a: 'Yes, all our vehicles are modern, well-maintained, and fully air-conditioned for your maximum comfort.' }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-yellow-400 transition cursor-pointer shadow-sm" 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="font-bold text-slate-900 text-[15px]">{faq.q}</h3>
                  <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-yellow-500' : ''}`} />
                </div>
                {openFaq === i && (
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Car className="text-yellow-400 w-8 h-8" />
              <span className="text-white font-extrabold text-2xl tracking-tight">Summer Cabs</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">Your premium transport partner in Sri Lanka. Reliable, safe, and transparent airport transfers and tours.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition cursor-pointer">f</div>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition cursor-pointer">ig</div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Our Services</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Vehicle Fleet</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Airport Routes</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">BIA to Colombo</a></li>
              <li><a href="#" className="hover:text-white transition">BIA to Kandy</a></li>
              <li><a href="#" className="hover:text-white transition">BIA to Galle / Unawatuna</a></li>
              <li><a href="#" className="hover:text-white transition">BIA to Ella</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>123, Galle Road,<br/>Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>info@summercabs.lk</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-yellow-400 shrink-0" />
                <span>+94 77 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Summer Cabs. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Service Popup Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" 
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl flex flex-col md:flex-row z-10">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 bg-slate-900/10 hover:bg-slate-900/20 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center transition z-20"
            >
              <X size={16} />
            </button>
            <div className="md:w-5/12 h-64 md:h-auto">
              <img src={selectedService.img} alt={selectedService.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-7/12 p-8 flex flex-col">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{selectedService.title}</h3>
              <div className="flex-1 overflow-y-auto max-h-[50vh] pr-2 text-slate-600 leading-relaxed text-sm">
                <p className="mb-4">{selectedService.longDesc}</p>
                <ul className="space-y-3 border-t border-slate-100 pt-4 mt-4">
                  <li className="flex items-center gap-2 font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-green-500" /> Fully Air-conditioned Vehicles
                  </li>
                  <li className="flex items-center gap-2 font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-green-500" /> Professional Chauffeurs
                  </li>
                  <li className="flex items-center gap-2 font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-green-500" /> 24/7 Customer Support
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => {
                  setBookingServiceType(selectedService.title);
                  setSelectedService(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-extrabold py-4 rounded-xl flex items-center justify-center gap-2 transition"
              >
                Book this Service <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/94771234567" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </main>
  );
}
