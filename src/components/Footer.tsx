import React from 'react';
import { MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="mb-6 bg-white inline-block p-3 rounded-2xl">
            <img src="/logo.png" alt="Summer Cabs Logo" className="h-12 object-contain" />
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
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-400 transition">Our Services</a></li>
            <li><a href="/fleet" className="hover:text-yellow-400 transition">Vehicle Fleet</a></li>
            <li><a href="/tours" className="hover:text-yellow-400 transition">Tour Packages</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact Support</a></li>
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
  );
}
