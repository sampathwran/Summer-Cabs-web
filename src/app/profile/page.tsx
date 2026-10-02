"use client";
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { collection, query, where, getDocs, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { User, Mail, Calendar, Clock, MapPin, Tag, LogOut, Loader2, Bell } from 'lucide-react';

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const [bookings, setBookings] = useState<any[]>([]);
  const [promotions, setPromotions] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!user) return;
    
    const fetchBookings = async () => {
      try {
        const q = query(collection(db, 'bookings'), where('customerEmail', '==', user.email));
        const querySnapshot = await getDocs(q);
        const bData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Sort manually since compound queries need indexes
        bData.sort((a: any, b: any) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
        setBookings(bData);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      }
    };

    // Listen to promotions in real-time
    const unsubPromotions = onSnapshot(query(collection(db, 'promotions'), orderBy('createdAt', 'desc')), (snapshot) => {
      let pData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as any }));
      // Filter targeted notifications
      pData = pData.filter(p => !p.targetEmails || p.targetEmails.includes(user.email));
      setPromotions(pData);
    }, (err) => {
      console.error('Error fetching promotions:', err);
    });

    Promise.all([fetchBookings()]).then(() => setLoadingData(false));
    
    return () => unsubPromotions();
  }, [user]);

  if (loading) {
    return <div className="min-h-screen pt-24 flex justify-center items-center"><Loader2 className="animate-spin text-yellow-400" size={48} /></div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-24 flex flex-col justify-center items-center px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Please Log In</h2>
        <p className="text-slate-500 mb-8">You need to be logged in to view your profile.</p>
        <a href="/" className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg">Go to Home</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img src={user.photoURL || 'https://via.placeholder.com/100'} alt="Profile" className="w-24 h-24 rounded-full shadow-md ring-4 ring-yellow-400/20" />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-black text-slate-800">{user.displayName || 'Customer'}</h1>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 mt-2 font-medium">
                <Mail size={16} /> {user.email}
              </div>
            </div>
          </div>
          <button 
            onClick={() => { logout(); window.location.href='/'; }}
            className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-full font-bold transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Notifications & Promotions */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="text-yellow-500" size={24} />
              <h2 className="text-2xl font-bold text-slate-800">Offers & Updates</h2>
            </div>
            {loadingData ? (
              <div className="bg-white p-8 rounded-3xl border border-slate-100 flex justify-center"><Loader2 className="animate-spin text-slate-300" size={32} /></div>
            ) : promotions.length > 0 ? (
              promotions.map((promo) => (
                <div key={promo.id} className="bg-white p-6 rounded-3xl shadow-sm border border-yellow-100 relative overflow-hidden group hover:shadow-md transition">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-400"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-800 text-lg pr-4">{promo.title}</h3>
                    {promo.code && <span className="bg-yellow-100 text-yellow-800 text-xs font-black px-2 py-1 rounded uppercase tracking-wider">{promo.code}</span>}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{promo.description}</p>
                  {promo.createdAt && <p className="text-xs text-slate-400 mt-4 font-medium">{new Date(promo.createdAt.toDate()).toLocaleDateString()}</p>}
                </div>
              ))
            ) : (
              <div className="bg-white p-8 rounded-3xl border border-slate-100 text-center">
                <Tag className="mx-auto text-slate-300 mb-3" size={32} />
                <p className="text-slate-500 font-medium">No new offers right now. Check back soon!</p>
              </div>
            )}
          </div>

          {/* Booking History */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-slate-800" size={24} />
              <h2 className="text-2xl font-bold text-slate-800">My Bookings</h2>
            </div>
            {loadingData ? (
              <div className="bg-white p-8 rounded-3xl border border-slate-100 flex justify-center"><Loader2 className="animate-spin text-slate-300" size={32} /></div>
            ) : bookings.length > 0 ? (
              bookings.map((b) => (
                <div key={b.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-start mb-4 pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="font-bold text-slate-800">{b.serviceType}</h3>
                      <p className="text-sm text-slate-500 font-medium">{b.vehicleType}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${b.status === 'pending' ? 'bg-orange-100 text-orange-600' : b.status === 'confirmed' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'}`}>
                      {b.status ? b.status.toUpperCase() : 'PENDING'}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <MapPin size={16} className="text-slate-400 mt-0.5 shrink-0" />
                      <span className="leading-tight">{b.pickupLocation}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Clock size={16} className="text-slate-400 shrink-0" />
                      <span className="font-medium">{b.dateTime}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-8 rounded-3xl border border-slate-100 text-center">
                <p className="text-slate-500 font-medium">You haven't made any bookings yet.</p>
                <a href="/" className="inline-block mt-4 text-yellow-600 font-bold hover:underline">Book a ride now</a>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}