// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5t3mRlxWxLf5zLyCCbL7NWHlhNeUHGbQ",
  authDomain: "smartdashboard-4d95e.firebaseapp.com",
  projectId: "smartdashboard-4d95e",
  storageBucket: "smartdashboard-4d95e.firebasestorage.app",
  messagingSenderId: "990914024941",
  appId: "1:990914024941:web:8fa721bac68f59453b43e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
