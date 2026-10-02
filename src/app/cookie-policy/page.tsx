import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Page() {
  const content = `
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
