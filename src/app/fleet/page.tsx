"use client";
import { useEffect, useState } from 'react';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Users, Briefcase, Car, ArrowRight } from 'lucide-react';

export default function FleetPage() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const q = query(collection(db, 'vehicles'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching vehicles", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans pt-24 pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Our Vehicle Fleet</h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            From economical sedans to luxury coaches, explore our diverse range of fully-insured, well-maintained vehicles.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          </div>
        ) : vehicles.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <p className="text-xl text-slate-500">No vehicles available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 group flex flex-col h-full">
                <div className="h-56 overflow-hidden relative bg-slate-100 flex items-center justify-center p-6">
                  <img src={vehicle.imageUrl || vehicle.img} alt={vehicle.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition duration-500 drop-shadow-2xl" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-yellow-600 transition">{vehicle.name}</h3>
                      <p className="text-slate-500 font-medium">{vehicle.category || "Standard"}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-8 bg-slate-50 p-4 rounded-2xl">
                    <div className="flex flex-col items-center justify-center text-center">
                      <Users size={20} className="text-slate-400 mb-1" />
                      <span className="text-sm font-bold text-slate-700">{vehicle.pax} <span className="text-xs font-normal text-slate-500 block">Seats</span></span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center border-x border-slate-200">
                      <Briefcase size={20} className="text-slate-400 mb-1" />
                      <span className="text-sm font-bold text-slate-700">{vehicle.bags} <span className="text-xs font-normal text-slate-500 block">Bags</span></span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                      <Car size={20} className="text-slate-400 mb-1" />
                      <span className="text-sm font-bold text-slate-700">A/C <span className="text-xs font-normal text-slate-500 block">Climate</span></span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a href={`/#booking-form`} className="w-full bg-slate-900 hover:bg-yellow-400 text-white hover:text-slate-900 font-bold py-3.5 rounded-xl transition flex justify-center items-center gap-2 group/btn">
                      Book Now <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
