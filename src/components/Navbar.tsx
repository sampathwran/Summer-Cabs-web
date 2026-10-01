"use client";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center h-full py-3 cursor-pointer" onClick={() => { if(window.location.pathname === '/') { window.scrollTo({top: 0, behavior: 'smooth'}); } else { window.location.href = '/'; } }}>
            <img src="/logo.png" alt="Summer Cabs Logo" className="h-[120%] object-contain -ml-4 scale-125 origin-left" />
          </div>
          <div className="hidden md:flex space-x-8 text-slate-700 font-bold">
            <a href="/" className="hover:text-yellow-500 transition">Home</a>
            <a href="/services" className="hover:text-yellow-500 transition">Services</a>
            <a href="/fleet" className="hover:text-yellow-500 transition">Our Fleet</a>
            <a href="/tours" className="hover:text-yellow-500 transition">Tour Packages</a>
            <a href="/contact" className="hover:text-yellow-500 transition">Contact Us</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-600 hover:text-slate-900 font-bold text-sm transition hidden lg:block">EN | SI | TA</button>
            <button 
              onClick={() => {
                if(window.location.pathname === '/') {
                  document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#booking-form';
                }
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-2.5 rounded-full font-bold transition shadow-md hover:shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
