import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyKiFP5bgvOtW01mo-DVKnw0lcumj3NCs",
  authDomain: "apploginamanda.firebaseapp.com",
  projectId: "apploginamanda",
  storageBucket: "apploginamanda.appspot.com",
  messagingSenderId: "601869736179",
  appId: "1:601869736179:web:8c18fe641f1609d9403f86",
  measurementId: "G-QSND1MY34G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app); 
