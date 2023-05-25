// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBnJ73MRzdqKe_5tUJD1QgZg1ppWSHio4",
  authDomain: "react-course-4759f.firebaseapp.com",
  projectId: "react-course-4759f",
  storageBucket: "react-course-4759f.appspot.com",
  messagingSenderId: "783211960813",
  appId: "1:783211960813:web:1bd68c1a9fefd24ba1afe4",
  measurementId: "G-0MZW66JPEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
