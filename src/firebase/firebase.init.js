// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvkwu4QxKC-w_B_O3Tp9fLKDC_TInOIyI",
  authDomain: "coffee-store-ab6d9.firebaseapp.com",
  projectId: "coffee-store-ab6d9",
  storageBucket: "coffee-store-ab6d9.firebasestorage.app",
  messagingSenderId: "417831978665",
  appId: "1:417831978665:web:a115d23feb094726d64bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);