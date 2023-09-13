// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAtXhz5t1pyJv5Zg9OM5Kn7yaJf5EbKPs",
  authDomain: "react-chat-6e8c9.firebaseapp.com",
  projectId: "react-chat-6e8c9",
  storageBucket: "react-chat-6e8c9.appspot.com",
  messagingSenderId: "948382613592",
  appId: "1:948382613592:web:00506e6c6f3fa4a1798a2d",
  measurementId: "G-L93C458BP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const db = getFirestore()