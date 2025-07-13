// Import Firebase modules correctly
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnNfsRHG1X4FZIEv6gxracYQ-cr2SL08Q",
  authDomain: "challenge-aa1c3.firebaseapp.com",
  projectId: "challenge-aa1c3",
  storageBucket: "challenge-aa1c3.appspot.com", // Fixed typo in storageBucket
  messagingSenderId: "30298652957",
  appId: "1:30298652957:web:90c8514aed498a0beda1f4",
  measurementId: "G-2XKJ1HWYXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firebase services
export { db, auth };
