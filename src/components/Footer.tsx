"use client";
import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function Footer() {
  const [socials, setSocials] = useState<any>({});

  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const docRef = doc(db, 'settings', 'social_media');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSocials(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching socials", error);
      }
    };
    fetchSocials();
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="mb-6 bg-white inline-block p-3 rounded-2xl">
            <img src="/logo.png" alt="Summer Cabs Logo" className="h-12 object-contain" />
          </div>
          <p className="text-sm leading-relaxed mb-6">Your premium transport partner in Sri Lanka. Reliable, safe, and transparent airport transfers and tours.</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-400 transition">Our Services</a></li>
            <li><a href="/fleet" className="hover:text-yellow-400 transition">Vehicle Fleet</a></li>
            <li><a href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-yellow-400 transition">Terms of Service</a></li>
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
              <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
              <span>473/8/2 Ihala Biyanwila Rd,<br/>Kadawatha 11850, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
              <a href="mailto:info@summercabs.lk" className="hover:text-white transition">info@summercabs.lk</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-400 shrink-0" />
              <a href="tel:+94707001001" className="hover:text-white transition font-medium text-white">+94 70 700 1001</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Central Social Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-center gap-4">
        {socials.facebook && (
          <a href={socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition shadow-lg shadow-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition shadow-lg shadow-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512">
              <path fill="url(#ig-grad)" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              <defs>
                <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433"/>
                  <stop offset="25%" stopColor="#e6683c"/>
                  <stop offset="50%" stopColor="#dc2743"/>
                  <stop offset="75%" stopColor="#cc2366"/>
                  <stop offset="100%" stopColor="#bc1888"/>
                </linearGradient>
              </defs>
            </svg>
          </a>
        )}
        {socials.youtube && (
          <a href={socials.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition shadow-lg shadow-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        )}
        {socials.tiktok && (
          <a href={socials.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition shadow-lg shadow-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
              <path fill="#25F4EE" d="M35.6 19.3c-2.3.2-4.4-1.2-5.6-3.1v17.4c0 7.2-5.8 13.1-13.1 13.1-7.2 0-13.1-5.8-13.1-13.1s5.8-13.1 13.1-13.1c1.5 0 3 .3 4.4.7v6.6c-1.4-.6-2.9-1-4.4-1-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5V2.3h6.6c.5 4.3 3.8 7.7 8.1 8v6.6z"/>
              <path fill="#FE2C55" d="M34.3 18.1c-1.9-.3-3.7-1.3-4.8-2.8v16.1c0 5.4-4.4 9.8-9.8 9.8-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.8-9.8c1.1 0 2.2.2 3.3.5v5c-1-.4-2.2-.7-3.3-.7-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9V1.1h4.9c.4 3.2 2.8 5.8 6 6.1v4.9z"/>
              <path fill="#111111" d="M32.8 16.9c-1.5-.5-2.8-1.5-3.8-2.7V15c0 4.2-3.4 7.6-7.6 7.6-4.2 0-7.6-3.4-7.6-7.6s3.4-7.6 7.6-7.6c.8 0 1.7.1 2.5.4v3.8c-.8-.3-1.6-.5-2.5-.5-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8V0h3.8c.3 2.5 2.2 4.5 4.7 4.7v3.8z"/>
            </svg>
          </a>
        )}
        {socials.tripadvisor && (
          <a href={socials.tripadvisor} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition shadow-lg shadow-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#34E0A1">
              <path d="M24 11.23c0-.07-.02-.13-.03-.2-.04-.32-.23-.61-.53-.78l-7.23-4.25a.8.8 0 0 0-1.12.28c-.24.39-.12.92.27 1.15l2.45 1.45c-2.31-1.39-4.88-2.14-7.58-2.14-2.7 0-5.27.75-7.58 2.14l2.45-1.45c.39-.23.51-.76.27-1.15a.8.8 0 0 0-1.12-.28L.55 10.25c-.3.17-.49.46-.53.78 0 .07-.03.13-.03.2v.03c0 .48.37.89.85.94.06.01.12.01.18.01 2.37 0 4.67.62 6.64 1.76-2.17.65-4 1.95-5.32 3.65a.96.96 0 0 0 1.53 1.2 7.74 7.74 0 0 1 5.92-2.7c3.15 0 5.86 1.9 7.07 4.63.14.33.47.53.82.53s.68-.2.82-.53c1.21-2.73 3.92-4.63 7.07-4.63 2.25 0 4.3.93 5.92 2.7a.96.96 0 0 0 1.53-1.2c-1.32-1.7-3.15-3-5.32-3.65 1.97-1.14 4.27-1.76 6.64-1.76.06 0 .12 0 .18-.01.48-.05.85-.46.85-.94v-.03zm-13.77 5.16a2.95 2.95 0 1 0 0-5.9 2.95 2.95 0 0 0 0 5.9zm0-4.14a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36zm7.54 4.14a2.95 2.95 0 1 0 0-5.9 2.95 2.95 0 0 0 0 5.9zm0-4.14a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36z" fill="#000"/>
            </svg>
          </a>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="text-left flex-1">
          <p className="mb-2">&copy; {new Date().getFullYear()} Summer Cabs. All rights reserved.</p>
          <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
            Disclosure: Some of the links for Flights and Hotels on this website are affiliate links via the TravelPayouts network. This means we may earn a small commission if you make a booking through these links, at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
