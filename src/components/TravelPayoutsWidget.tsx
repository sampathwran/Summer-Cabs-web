"use client";
import React, { useEffect, useRef } from 'react';

export default function TravelPayoutsWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    
    // Clear previous script injections if any (strict mode support)
    widgetRef.current.innerHTML = '';

    const script = document.createElement('script');
    // Using the user's affiliate parameters, but updating colors to match Summer Cabs yellow/slate theme
    // primary_override=%23eab308 (Yellow 500)
    // color_button=%23eab308
    // border_radius=12
    script.src = "https://tpwgts.com/content?currency=usd&trs=580626&shmarker=784630&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%23eab308&color_button=%23eab308&color_icons=%230f172a&dark=%230f172a&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%23eab308&border_radius=12&plain=false&promo_id=7879&campaign_id=100";
    script.async = true;
    script.charset = "utf-8";
    
    widgetRef.current.appendChild(script);

  }, []);

  return (
    <div className="w-full min-h-[250px] flex justify-center items-center rounded-xl bg-slate-50/50 relative overflow-hidden p-2">
      <div ref={widgetRef} className="w-full h-full relative z-10" />
    </div>
  );
}
