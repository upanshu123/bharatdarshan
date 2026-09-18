import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyB4bkY_eL84z30P6N0HtDl6c5ZhF4NEjwU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bhartdarshan-b8b8c.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bhartdarshan-b8b8c",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bhartdarshan-b8b8c.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "833264992518",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:833264992518:web:51a57512914ec5573c9e87"
};

// Safe fail-proof initialization
let app;
try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
} catch (e) {
  console.warn("[Firebase] Config warning:", e.message);
  app = getApps()[0] || initializeApp({ apiKey: "AIzaSyB4bkY_eL84z30P6N0HtDl6c5ZhF4NEjwU", projectId: "bhartdarshan-b8b8c" });
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
