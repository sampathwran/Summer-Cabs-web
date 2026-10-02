"use client";
import React, { useState } from 'react';
import { useLanguage, Language } from '@/i18n/LanguageContext';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'si', label: 'සිංහල' },
    { code: 'ta', label: 'தமிழ்' }
  ];

  return (
    <nav className="absolute top-0 w-full z-50 px-4 pt-4 sm:pt-6 transition-all">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-xl border border-slate-100/50 px-4 sm:px-6 lg:px-8 transition-all duration-300 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center h-full py-3 cursor-pointer" onClick={() => { if(window.location.pathname === '/') { window.scrollTo({top: 0, behavior: 'smooth'}); } else { window.location.href = '/'; } }}>
            <img src="/logo.png" alt="Summer Cabs Logo" className="h-[140%] max-h-16 object-contain -ml-2 origin-left" />
          </div>
          
          {/* Main Links */}
          <div className="hidden lg:flex space-x-8 text-slate-600 font-bold text-sm">
            <a href="/" className="hover:text-yellow-600 transition">{t('nav.home')}</a>
            <a href="/services" className="hover:text-yellow-600 transition">{t('nav.services')}</a>
            <a href="/fleet" className="hover:text-yellow-600 transition">{t('nav.fleet')}</a>
            <a href="/tours" className="hover:text-yellow-600 transition">{t('nav.tours')}</a>
            <a href="/contact" className="hover:text-yellow-600 transition">{t('nav.contact')}</a>
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            
            {/* Phone Contact */}
            <a href="tel:+94707001001" className="hidden lg:flex items-center gap-1.5 text-slate-700 hover:text-yellow-600 font-bold text-sm transition px-3 py-2">
              <span className="flex w-6 h-6 rounded-full bg-slate-100 items-center justify-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              +94 70 700 1001
            </a>

            {/* Language Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 sm:gap-1.5 text-slate-700 hover:text-slate-900 font-bold text-sm transition px-2 sm:px-3 py-2 rounded-xl hover:bg-slate-100"
              >
                <Globe size={18} className="text-yellow-500" />
                <span className="hidden sm:inline">{languages.find(l => l.code === language)?.label}</span>
                <span className="sm:hidden uppercase">{language}</span>
                <ChevronDown size={14} />
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
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
              className="hidden sm:block bg-slate-900 hover:bg-yellow-400 hover:text-slate-900 text-white px-6 py-2.5 rounded-full font-bold transition shadow-md hover:shadow-lg text-sm ml-1"
            >
              {t('nav.bookNow')}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-yellow-600 transition ml-1"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full animate-in fade-in slide-in-from-top-4 z-40 px-0">
            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-slate-100 p-6 flex flex-col space-y-4 font-bold text-slate-700">
              <a href="/" className="hover:text-yellow-600 transition pb-3 border-b border-slate-50">{t('nav.home')}</a>
              <a href="/services" className="hover:text-yellow-600 transition pb-3 border-b border-slate-50">{t('nav.services')}</a>
              <a href="/fleet" className="hover:text-yellow-600 transition pb-3 border-b border-slate-50">{t('nav.fleet')}</a>
              <a href="/tours" className="hover:text-yellow-600 transition pb-3 border-b border-slate-50">{t('nav.tours')}</a>
              <a href="/contact" className="hover:text-yellow-600 transition pb-3 border-b border-slate-50">{t('nav.contact')}</a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if(window.location.pathname === '/') {
                    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#booking-form';
                  }
                }}
                className="bg-yellow-400 text-slate-900 py-3.5 rounded-xl mt-2 w-full shadow-lg shadow-yellow-400/20 text-center"
              >
                {t('nav.bookNow')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
