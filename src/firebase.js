// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-7ab9f.firebaseapp.com",
  projectId: "insta-next-7ab9f",
  storageBucket: "insta-next-7ab9f.firebasestorage.app",
  messagingSenderId: "187553086172",
  appId: "1:187553086172:web:42890aeac6100d6c4b5219"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);