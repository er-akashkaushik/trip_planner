// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjrCDaWfKL2TcV0tcC44oY07B20ulFmkE",
  authDomain: "trip-planner-3c471.firebaseapp.com",
  projectId: "trip-planner-3c471",
  storageBucket: "trip-planner-3c471.firebasestorage.app",
  messagingSenderId: "571280727705",
  appId: "1:571280727705:web:f227471cbb412fe9ac6208",
  measurementId: "G-J8XPYQYV6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);