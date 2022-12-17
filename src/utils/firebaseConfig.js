// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_2R5tgsLLA3zXBVb4zefLuRrS2jeXasQ",
  authDomain: "comicsymangas-cfe99.firebaseapp.com",
  projectId: "comicsymangas-cfe99",
  storageBucket: "comicsymangas-cfe99.appspot.com",
  messagingSenderId: "545264703112",
  appId: "1:545264703112:web:b25121b9159da3338d713d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
