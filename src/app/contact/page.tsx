import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Page() {
  const content = `
## Get in Touch

We are always here to help you plan your journey. Whether you have a question about our fleet, need a custom tour itinerary, or require assistance with a booking, our team is ready to assist you.

### Contact Information
- **Phone / WhatsApp:** [+94 70 700 1001](tel:+94707001001)
- **Email:** [info@summercabs.lk](mailto:info@summercabs.lk)
- **Address:** 473/8/2 Ihala Biyanwila Rd, Kadawatha 11850, Sri Lanka

### Working Hours
We operate **24/7**. Our customer support team is always available to ensure your travel plans go smoothly, no matter the time zone.

### Send Us a Message
If you prefer, you can reach out to us by logging into your account and submitting a support ticket, or simply drop us an email. We aim to respond to all inquiries within 2-4 hours.

### Affiliate Services Support
If you have questions regarding hotel or flight bookings made through our affiliate partners (such as TravelPayouts), please note that these bookings are handled directly by the respective service providers (e.g., Booking.com, Agoda, Skyscanner). However, we are happy to guide you in the right direction if you need help finding their contact information.
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
