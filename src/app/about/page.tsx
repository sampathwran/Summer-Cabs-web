import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Page() {
  const content = `
## Welcome to Summer Cabs

At **Summer Cabs**, we believe that every journey should be an unforgettable experience. Based in the heart of Sri Lanka, we have grown into one of the most trusted and reliable transportation and tour service providers in the country. Whether you are arriving at Bandaranaike International Airport, planning a scenic tour through the hill country, or looking for a quick ride across town, we are here to ensure your travel is safe, comfortable, and seamless.

### Our Mission
Our mission is simple: **To provide exceptional travel experiences with unparalleled safety, comfort, and reliability.** We strive to be the bridge between travelers and the beautiful destinations of Sri Lanka, making every mile of your journey enjoyable.

### What We Offer
- **Airport Transfers:** Reliable pick-ups and drop-offs to and from BIA.
- **One-Way Drop-offs:** Point-to-point transportation across all major cities in Sri Lanka.
- **Customized Tours:** Tailor-made tour packages to help you explore Sri Lanka's rich heritage, wildlife, and breathtaking landscapes.
- **Affiliate Partner Services:** Through our trusted partners like TravelPayouts, we help you discover the best deals on hotels, flights, and accommodations right from our platform.

### Why Choose Us?
- **Professional Drivers:** Our chauffeurs are highly trained, bilingual, and possess extensive knowledge of Sri Lankan routes and tourist destinations.
- **Diverse Fleet:** From economical mini-cars to luxury vans and coaches, our fleet caters to solo travelers, couples, families, and large groups.
- **24/7 Support:** Our customer service team is available around the clock to assist you with your bookings and inquiries.

### Affiliate Disclosure
As part of our commitment to providing a comprehensive travel solution, Summer Cabs participates in affiliate marketing programs, including **TravelPayouts**. This means that when you click on certain links on our website to book flights, hotels, or other travel services, we may earn a commission at no additional cost to you. We only partner with reputable services to ensure you get the best value for your trip.

Thank you for choosing Summer Cabs. Let us drive you to your next great adventure!
`;

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-yellow-600 transition mb-8 font-medium">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="prose prose-slate prose-yellow max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mb-6 prose-h2:text-slate-800 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-yellow-600 prose-li:text-slate-600">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
