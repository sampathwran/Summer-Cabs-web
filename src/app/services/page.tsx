"use client";
import { useLanguage } from '@/i18n/LanguageContext';
import { useEffect, useState } from 'react';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const { t } = useLanguage();

  const [services, setServices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const q = query(collection(db, 'services'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setServices(data);
      } catch (error) {
        console.error("Error fetching services", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans pt-24 pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">{t('services.premium')}</h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            {t('services.premium.desc')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          </div>
        ) : services.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <p className="text-xl text-slate-500">No services available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 group flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition duration-300 z-10"></div>
                  <img src={service.imageUrl || service.img || 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop'} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 font-bold px-3 py-1 rounded-full text-xs z-20 shadow-lg">
                    Premium
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{service.description || service.shortDesc || "Professional and comfortable transport service."}</p>
                  
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-start gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" /> Professional Drivers</li>
                    <li className="flex items-start gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" /> 24/7 Availability</li>
                    <li className="flex items-start gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" /> Fully Insured Vehicles</li>
                  </ul>

                  <a href="/#booking-form" className="w-full bg-slate-100 hover:bg-yellow-400 text-slate-900 font-bold py-3.5 rounded-xl transition flex justify-center items-center gap-2 group/btn">
                    Book Now <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
