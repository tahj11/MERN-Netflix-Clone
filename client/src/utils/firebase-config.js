// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBezDvteIdgVKvrnrkAqEhC60mfAhwg8IM",
  authDomain: "mern-netflix-clone-74f99.firebaseapp.com",
  projectId: "mern-netflix-clone-74f99",
  storageBucket: "mern-netflix-clone-74f99.appspot.com",
  messagingSenderId: "1099178855525",
  appId: "1:1099178855525:web:1926dc8062d5e76e3b4a8c",
  measurementId: "G-9KMRREHZ58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
