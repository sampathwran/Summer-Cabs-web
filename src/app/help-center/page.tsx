import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Page() {
  const content = `
## Help Center & FAQ

Welcome to the Summer Cabs Help Center. Here you will find answers to the most common questions regarding our services.

### General Questions

**Q: Where do you operate?**  
A: We operate island-wide in Sri Lanka, specializing in airport transfers from BIA (Bandaranaike International Airport) to major tourist destinations like Colombo, Kandy, Galle, Ella, and Sigiriya.

**Q: How do I make a booking?**  
A: You can book a ride directly on our homepage. Simply select your pickup and drop-off locations, date, time, and vehicle type. You will need to log in with your Google account to confirm the booking.

### Fares and Payments

**Q: Are highway tolls included in the fare?**  
A: Typically, highway tolls are not included in the base fare and must be paid by the passenger during the journey, unless otherwise negotiated.

**Q: How do I pay for my ride?**  
A: Currently, payments can be made in cash directly to the driver at the end of your journey. We also accept direct bank transfers for pre-arranged tours.

### Affiliate Bookings (Hotels & Flights)

**Q: I booked a hotel/flight through your website. Who do I contact for changes?**  
A: Our hotel and flight search features are powered by our affiliate partner, **TravelPayouts**. We do not process these bookings ourselves. To make changes or cancellations, please contact the specific platform you booked with (e.g., Booking.com, Trip.com, Agoda) using the confirmation email they sent you.

### Account and Privacy

**Q: How do I delete my account?**  
A: If you wish to permanently delete your account and all associated booking history, please email us at [info@summercabs.lk](mailto:info@summercabs.lk) from your registered email address.

**Q: Is my data secure?**  
A: Yes, we use Google Firebase for authentication and database management, ensuring industry-standard security for your personal information.

If you couldn't find the answer to your question, please visit our [Contact Us](/contact) page to reach out to our support team.
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
