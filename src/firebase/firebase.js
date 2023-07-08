// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAnJzObRNCxgPppnzmb1Tor2fnWA6oyBA",
  authDomain: "vibe-1a1bb.firebaseapp.com",
  projectId: "vibe-1a1bb",
  storageBucket: "vibe-1a1bb.appspot.com",
  messagingSenderId: "839547539415",
  appId: "1:839547539415:web:d699c70ac28c447b2c8592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);