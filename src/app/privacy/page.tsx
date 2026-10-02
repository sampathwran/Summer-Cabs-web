export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pt-24 pb-20">
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">How we collect, use, and protect your data.</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 max-w-none text-slate-600 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">1. Information We Collect</h3>
            <p className="leading-relaxed">We collect personal information that you provide to us when booking a ride, including your name, email address, phone number, and pickup/drop-off locations.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">2. How We Use Your Information</h3>
            <p className="leading-relaxed">Your information is used strictly to provide the requested transportation services, process your bookings, and communicate with you regarding your trip.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">3. Third-Party Services (TravelPayouts)</h3>
            <p className="leading-relaxed">We partner with TravelPayouts for flight and hotel bookings. When you use these features, your interactions may be tracked by TravelPayouts using affiliate cookies to credit us with the referral. Please review their privacy policy for more details.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">4. Data Security</h3>
            <p className="leading-relaxed">We implement industry-standard security measures to ensure your data is kept safe and secure. We do not sell your personal data to third parties.</p>
          </div>
        </div>
      </div>
    </main>
  );
}