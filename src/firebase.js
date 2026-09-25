import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// আপনার ফায়ারবেসের কনফিগারেশন এখানে বসাবেন (আগের ফাইল থেকে কপি করে আনবেন)
const firebaseConfig = {
  apiKey: "AIzaSyDzaIHijFkD3TAIUnZaukYQMtxSQxUWaLs",
  authDomain: "bibahsharok.firebaseapp.com",
  projectId: "bibahsharok",
  storageBucket: "bibahsharok.firebasestorage.app",
  messagingSenderId: "899270759316",
  appId: "1:899270759316:web:e04a1d1e0e253557a13581",
};

// ফায়ারবেস চালু করা
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// অথেনটিকেশন (গুগল লগইন) চালু করা
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
