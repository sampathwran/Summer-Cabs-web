"use client";
import React, { useState } from 'react';
import { useLanguage, Language } from '@/i18n/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'si', label: 'සිංහල' },
    { code: 'ta', label: 'தமிழ்' }
  ];

  return (
    <nav className="absolute top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center h-full py-3 cursor-pointer" onClick={() => { if(window.location.pathname === '/') { window.scrollTo({top: 0, behavior: 'smooth'}); } else { window.location.href = '/'; } }}>
            <img src="/logo.png" alt="Summer Cabs Logo" className="h-[120%] object-contain -ml-4 scale-125 origin-left" />
          </div>
          
          <div className="hidden md:flex space-x-8 text-slate-700 font-bold">
            <a href="/" className="hover:text-yellow-500 transition">{t('nav.home')}</a>
            <a href="/services" className="hover:text-yellow-500 transition">{t('nav.services')}</a>
            <a href="/fleet" className="hover:text-yellow-500 transition">{t('nav.fleet')}</a>
            <a href="/tours" className="hover:text-yellow-500 transition">{t('nav.tours')}</a>
            <a href="/contact" className="hover:text-yellow-500 transition">{t('nav.contact')}</a>
          </div>

          <div className="flex items-center gap-4">
            
            {/* Language Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 font-bold text-sm transition px-2 py-1 rounded-md hover:bg-slate-100"
              >
                <Globe size={18} className="text-yellow-500" />
                {languages.find(l => l.code === language)?.label}
                <ChevronDown size={14} />
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-slate-100 py-1 overflow-hidden">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-bold transition ${
                        language === l.code ? 'bg-yellow-50 text-yellow-600' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
              {t('nav.bookNow')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
