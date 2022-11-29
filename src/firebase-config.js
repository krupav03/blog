// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK0dZdAMPhrWgvLtb1D-Z05jNhZnYnPc0",
  authDomain: "blog-c2aef.firebaseapp.com",
  projectId: "blog-c2aef",
  storageBucket: "blog-c2aef.appspot.com",
  messagingSenderId: "490576638198",
  appId: "1:490576638198:web:be7cca01e5b78e44aebcd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
