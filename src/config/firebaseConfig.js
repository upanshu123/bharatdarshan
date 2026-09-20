import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyB9zW3a5HHFjNAAiGbgZfgn-z49JIm7Atk",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bhartdarshan-b8b8c-7a9d4.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bhartdarshan-b8b8c-7a9d4",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bhartdarshan-b8b8c-7a9d4.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "155663042765",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:155663042765:web:bb0f9f57d38cb0c70a8184"
};

// Safe initialization
let app;
try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
} catch (e) {
  console.warn("[Firebase] Config warning:", e.message);
  app = getApps()[0] || initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

