import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const getAuthDomain = () => {
  if (typeof window !== "undefined") {
    // If running in browser (Vercel or custom domain), use the current domain.
    // Ensure the domain is added to Firebase Authorized Domains!
    return window.location.host;
  }
  return "summer-cabs-9ccec.firebaseapp.com";
};

const firebaseConfig = {
  apiKey: "AIzaSyDl672PcL-Iqa88e1_e412fLnlEOvSV9zU",
  authDomain: getAuthDomain(),
  projectId: "summer-cabs-9ccec",
  storageBucket: "summer-cabs-9ccec.firebasestorage.app",
  messagingSenderId: "754196637666",
  appId: "1:754196637666:web:d7346415b48a03dbefbbbb",
  measurementId: "G-CWL2T5LE3K"
};

// Initialize Firebase securely for Next.js SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
