// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV3cPRudJZS56M5aMedjDfxTGMN4fIWuM",
  authDomain: "vibe-1daa4.firebaseapp.com",
  projectId: "vibe-1daa4",
  storageBucket: "vibe-1daa4.appspot.com",
  messagingSenderId: "539369077198",
  appId: "1:539369077198:web:31f0ca62a11a96047d139f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);