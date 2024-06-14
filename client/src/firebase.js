// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e52a5.firebaseapp.com",
  projectId: "mern-blog-e52a5",
  storageBucket: "mern-blog-e52a5.appspot.com",
  messagingSenderId: "70373008872",
  appId: "1:70373008872:web:0dec0ede9271936c8ff05d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
