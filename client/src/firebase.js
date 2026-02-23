import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBdOX-TvmSKmGOitZNXmt_oFU4frZKJywM",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bagsclub-864ac.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bagsclub-864ac",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bagsclub-864ac.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "93586720966",
  appId: import.meta.env.VITE_FIREBASE_APP_ID ||  "1:93586720966:web:8b4ac70a61cfd2c2016fc7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
