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
    <nav className="absolute top-0 w-full z-50 px-4 pt-4 sm:pt-6 transition-all">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-xl border border-slate-100/50 px-6 lg:px-8 transition-all duration-300">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center h-full py-3 cursor-pointer" onClick={() => { if(window.location.pathname === '/') { window.scrollTo({top: 0, behavior: 'smooth'}); } else { window.location.href = '/'; } }}>
            <img src="/logo.png" alt="Summer Cabs Logo" className="h-[140%] object-contain -ml-2 origin-left" />
          </div>
          
          {/* Main Links */}
          <div className="hidden md:flex space-x-8 text-slate-600 font-bold text-sm">
            <a href="/" className="hover:text-yellow-600 transition">{t('nav.home')}</a>
            <a href="/services" className="hover:text-yellow-600 transition">{t('nav.services')}</a>
            <a href="/fleet" className="hover:text-yellow-600 transition">{t('nav.fleet')}</a>
            <a href="/tours" className="hover:text-yellow-600 transition">{t('nav.tours')}</a>
            <a href="/contact" className="hover:text-yellow-600 transition">{t('nav.contact')}</a>
          </div>

          <div className="flex items-center gap-3">
            
            {/* Language Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 font-bold text-sm transition px-3 py-2 rounded-xl hover:bg-slate-100"
              >
                <Globe size={18} className="text-yellow-500" />
                <span className="hidden sm:inline">{languages.find(l => l.code === language)?.label}</span>
                <ChevronDown size={14} />
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-5 py-2.5 text-sm font-bold transition ${
                        language === l.code ? 'bg-yellow-50 text-yellow-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
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
              className="bg-slate-900 hover:bg-yellow-400 hover:text-slate-900 text-white px-6 py-2.5 rounded-full font-bold transition shadow-md hover:shadow-lg text-sm"
            >
              {t('nav.bookNow')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
