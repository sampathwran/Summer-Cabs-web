export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pt-24 pb-20">
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms of Service</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Rules and guidelines for using Summer Cabs.</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 max-w-none text-slate-600 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h3>
            <p className="leading-relaxed">By accessing and using our website and services, you accept and agree to be bound by the terms and provisions of this agreement.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">2. Booking and Payments</h3>
            <p className="leading-relaxed">All bookings made through our platform are subject to availability. Prices quoted are based on standard routes and may be adjusted if the passenger requests significant detours.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">3. Affiliate Links Disclosure</h3>
            <p className="leading-relaxed">Some sections of our site (such as Hotels and Flights) contain affiliate links powered by TravelPayouts. We are not responsible for the fulfillment of services booked through third-party platforms.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">4. Cancellation Policy</h3>
            <p className="leading-relaxed">Cancellations must be made at least 24 hours prior to the scheduled pickup time for a full refund or to avoid cancellation charges.</p>
          </div>
        </div>
      </div>
    </main>
  );
}