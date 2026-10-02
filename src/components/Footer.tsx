"use client";
import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex justify-center gap-6">
        {socials.facebook && (
          <a href={socials.facebook} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 text-white transition hover:-translate-y-1">
            <Facebook size={24} />
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 text-white transition hover:-translate-y-1">
            <Instagram size={24} />
          </a>
        )}
        {socials.youtube && (
          <a href={socials.youtube} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 text-white transition hover:-translate-y-1">
            <Youtube size={24} />
          </a>
        )}
        {socials.tiktok && (
          <a href={socials.tiktok} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 text-white transition hover:-translate-y-1 font-bold font-sans">
            <span className="text-xl">X</span> {/* Replace with tiktok icon if using another lib */}
          </a>
        )}
        {socials.tripadvisor && (
          <a href={socials.tripadvisor} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 text-white transition hover:-translate-y-1 font-bold">
            TA
          </a>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Summer Cabs. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
