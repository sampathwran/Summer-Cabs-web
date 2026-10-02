import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { X } from 'lucide-react';

export default function LoginPromptModal() {
  const { user, loading, signInWithGoogle } = useAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (loading || user) return;
    // Show after 5 seconds if not logged in
    const timer = setTimeout(() => {
      const hasDismissed = localStorage.getItem('summercabs_login_dismissed');
      if (!hasDismissed) {
        setShow(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [user, loading]);

  if (!show) return null;

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem('summercabs_login_dismissed', 'true');
  };

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      setShow(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-sm w-full relative animate-in zoom-in-95 duration-300">
        <button onClick={handleDismiss} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition">
          <X size={20} />
        </button>
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Summer Cabs" className="h-12 mx-auto mb-4" />
          <h3 className="text-xl font-extrabold text-slate-900 mb-2">Welcome to Summer Cabs</h3>
          <p className="text-sm text-slate-500">Log in to seamlessly manage your bookings and unlock exclusive discounts.</p>
        </div>
        <button 
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:border-yellow-400 hover:bg-slate-50 text-slate-700 font-bold py-3 px-4 rounded-xl transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
          Continue with Google
        </button>
        <div className="mt-4 text-center">
          <button onClick={handleDismiss} className="text-xs font-bold text-slate-400 hover:text-slate-600 transition">Skip for now</button>
        </div>
      </div>
    </div>
  );
}