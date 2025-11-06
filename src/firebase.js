// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkwxu2UBQ0Ax5-RO2jL6Hckv1hHHSMjbw",
  authDomain: "smartdashboard-2044e.firebaseapp.com",
  projectId: "smartdashboard-2044e",
  storageBucket: "smartdashboard-2044e.firebasestorage.app",
  messagingSenderId: "540364483219",
  appId: "1:540364483219:web:965502fa0d983303083b66",
  measurementId: "G-XE0RGP0CPY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
