// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkBnUgKv9nkqRHPuto6BfdBwsxyD7hKRE",
  authDomain: "react-form-cc77b.firebaseapp.com",
  projectId: "react-form-cc77b",
  storageBucket: "react-form-cc77b.appspot.com",
  messagingSenderId: "94729201769",
  appId: "1:94729201769:web:23990df12c7d9b7e185af8",
  measurementId: "G-Y5W3NXNQTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
