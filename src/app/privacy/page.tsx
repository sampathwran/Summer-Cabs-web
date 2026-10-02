import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Page() {
  const content = `
## Privacy Policy

**Last Updated:** October 2026

At **Summer Cabs**, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you use our website (www.summercabs.lk), mobile applications, and services.

### 1. Information We Collect
We collect information that you voluntarily provide to us when you:
- **Register for an account:** Name, email address, and profile picture (via Google Auth).
- **Make a booking:** Pickup location, drop-off location, phone number, date, time, and special requests.
- **Communicate with us:** Any information provided via email, WhatsApp, or contact forms.

### 2. Automatically Collected Information
When you visit our website, we may automatically collect certain data, including:
- **Device Information:** IP address, browser type, operating system.
- **Usage Data:** Pages visited, time spent on the site, and navigation patterns.
- **Cookies & Tracking Technologies:** Please refer to our [Cookie Policy](/cookie-policy) for detailed information.

### 3. How We Use Your Information
We use your data to:
- Process and confirm your taxi and tour bookings.
- Communicate with you regarding your trip (e.g., driver details, delays).
- Send you promotional offers and updates (only if you have opted in or hold an account with us).
- Improve our website, services, and customer experience.

### 4. Affiliate Marketing and Third-Party Links
Our website contains links to third-party services, particularly for hotel and flight bookings, provided through affiliate networks like **TravelPayouts**. 
- **Tracking:** When you click on these affiliate links, a cookie may be placed on your browser to track the referral so that we may earn a commission. 
- **Third-Party Privacy:** We do not collect or store the payment or booking details you provide to these third-party platforms. Your interactions with them are governed by their respective Privacy Policies.

### 5. Data Sharing
We do not sell your personal data. We may share your information only with:
- **Drivers:** Necessary details (name, phone number, pickup location) to complete your ride.
- **Service Providers:** Hosting services, analytical tools (like Google Analytics), and authentication services (Firebase).
- **Legal Requirements:** If required by law or to protect the safety and rights of Summer Cabs and its users.

### 6. Data Security
We implement industry-standard security measures, including SSL encryption and secure database hosting via Google Firebase, to protect your data against unauthorized access.

### 7. Your Rights
You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at [info@summercabs.lk](mailto:info@summercabs.lk).
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