const fs = require('fs');
const path = require('path');

const pages = {
    "about": {
        "title": "About Us",
        "content": `
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
`
    },
    "contact": {
        "title": "Contact Us",
        "content": `
## Get in Touch

We are always here to help you plan your journey. Whether you have a question about our fleet, need a custom tour itinerary, or require assistance with a booking, our team is ready to assist you.

### Contact Information
- **Phone / WhatsApp:** [+94 70 700 1001](tel:+94707001001)
- **Email:** [info@summercabs.lk](mailto:info@summercabs.lk)
- **Address:** 123 Travel Avenue, Colombo, Sri Lanka (Example Address)

### Working Hours
We operate **24/7**. Our customer support team is always available to ensure your travel plans go smoothly, no matter the time zone.

### Send Us a Message
If you prefer, you can reach out to us by logging into your account and submitting a support ticket, or simply drop us an email. We aim to respond to all inquiries within 2-4 hours.

### Affiliate Services Support
If you have questions regarding hotel or flight bookings made through our affiliate partners (such as TravelPayouts), please note that these bookings are handled directly by the respective service providers (e.g., Booking.com, Agoda, Skyscanner). However, we are happy to guide you in the right direction if you need help finding their contact information.
`
    },
    "privacy": {
        "title": "Privacy Policy",
        "content": `
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
`
    },
    "terms": {
        "title": "Terms of Service",
        "content": `
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
`
    },
    "cookie-policy": {
        "title": "Cookie Policy",
        "content": `
## Cookie Policy

**Last Updated:** October 2026

This Cookie Policy explains how **Summer Cabs** uses cookies and similar tracking technologies when you visit our website (www.summercabs.lk). 

### 1. What are Cookies?
Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit a website. They help the website function properly, improve user experience, and provide analytical data to the website owners.

### 2. How We Use Cookies
We use cookies for the following purposes:
- **Essential Cookies:** These are necessary for the website to function, such as maintaining your login session (Firebase Authentication) and allowing you to book rides securely.
- **Analytical Cookies:** We use these to understand how visitors interact with our website, helping us improve our design and user experience.
- **Affiliate & Marketing Cookies:** As mentioned in our Privacy Policy, we partner with affiliate networks like **TravelPayouts**. When you interact with our hotel or flight search widgets, or click an affiliate link, a cookie is placed on your device. This cookie tracks your referral so that Summer Cabs can earn a commission if you make a purchase. These cookies do not store personally identifiable information.

### 3. Managing Cookies
You have the right to accept or decline cookies. 
- Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline them if you prefer.
- Please note that disabling essential cookies may prevent you from logging in or using the booking features on our website.

### 4. Third-Party Cookies
In addition to our own cookies, we may also use various third-party cookies (e.g., Google Analytics, TravelPayouts, social media pixels) to report usage statistics and deliver advertisements.

If you have any questions about our use of cookies, please contact us at [info@summercabs.lk](mailto:info@summercabs.lk).
`
    },
    "help-center": {
        "title": "Help Center",
        "content": `
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
`
    }
};

const template = `import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const markdownContent = \\`{content}\\`;

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-yellow-600 transition mb-8 font-medium">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="prose prose-slate prose-yellow max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mb-6 prose-h2:text-slate-800 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-yellow-600 prose-li:text-slate-600">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

for (const [slug, data] of Object.entries(pages)) {
    const dirPath = path.join('src', 'app', slug);
    fs.mkdirSync(dirPath, { recursive: true });
    
    const filePath = path.join(dirPath, 'page.tsx');
    const content = template.replace('{content}', data.content);
    
    fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Pages generated successfully.');
