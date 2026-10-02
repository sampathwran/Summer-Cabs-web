import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Page() {
  const content = `
## Terms of Service

**Last Updated:** October 2026

By accessing or using the **Summer Cabs** website (www.summercabs.lk) and our transportation services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.

### 1. Service Provision
Summer Cabs provides passenger transportation and tour services in Sri Lanka. 
- All bookings are subject to vehicle and driver availability.
- We reserve the right to decline a booking if the requested service cannot be fulfilled safely or legally.

### 2. User Accounts
- To make a booking, users may be required to log in via Google Authentication.
- You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.

### 3. Pricing and Payments
- Estimated fares provided on the website are based on standard routes and current fuel prices. Final fares may vary if the route is altered or if there are unexpected delays.
- Highway tolls, parking fees, and entry tickets to tourist sites are generally not included in the base fare unless explicitly stated.
- Payments can be made directly to the driver via cash, or through pre-agreed digital payment methods.

### 4. Cancellations and Refunds
- Bookings can be canceled without penalty up to 24 hours before the scheduled pickup time.
- Late cancellations may incur a fee, depending on the vehicle type and proximity to the dispatch time.

### 5. Third-Party Affiliate Services
Our platform integrates affiliate widgets and links for third-party travel services (such as flights and hotels) provided by **TravelPayouts** and its partners.
- **No Liability for Third-Party Services:** Summer Cabs acts solely as an affiliate referrer for these services. We are not responsible for the fulfillment, quality, pricing, or customer service of any hotel, flight, or rental booked through these external links.
- **Disputes:** Any disputes regarding third-party bookings must be resolved directly with the respective service provider (e.g., Booking.com, Agoda).

### 6. User Conduct
Passengers are expected to behave respectfully towards our drivers. Any abusive behavior, illegal activities, or damage to the vehicle may result in immediate termination of the ride and potential legal action.

### 7. Limitation of Liability
While we strive to ensure timely and safe transportation, Summer Cabs shall not be held liable for missed flights, appointments, or other consequential losses resulting from traffic delays, vehicle breakdowns, or force majeure events.

### 8. Changes to Terms
We reserve the right to modify these Terms at any time. Continued use of our services constitutes acceptance of the updated Terms.
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