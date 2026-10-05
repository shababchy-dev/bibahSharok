import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// আপনার ফায়ারবেসের কনফিগারেশন এখানে বসাবেন (আগের ফাইল থেকে কপি করে আনবেন)
const firebaseConfig = {};

// ফায়ারবেস চালু করা
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// অথেনটিকেশন (গুগল লগইন) চালু করা
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
