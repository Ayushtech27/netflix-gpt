// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJU7xsinwGfctGKTLD0dwOgWoK-sG-v7M",
  authDomain: "netflixgpt-562cc.firebaseapp.com",
  projectId: "netflixgpt-562cc",
  storageBucket: "netflixgpt-562cc.appspot.com",
  messagingSenderId: "665793767414",
  appId: "1:665793767414:web:d7ecbb627f96eb3c7089d7",
  measurementId: "G-HHMWV4L2G2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
