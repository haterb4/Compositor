// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDod3y2CkxJTz-uYTFInN5axvuDglFnqYk",
  authDomain: "compositor-ce71a.firebaseapp.com",
  projectId: "compositor-ce71a",
  storageBucket: "compositor-ce71a.appspot.com",
  messagingSenderId: "501261347012",
  appId: "1:501261347012:web:a3836d6e23e9b611ca8191",
  measurementId: "G-TXK3T0E3N0"
};

// Initialize Firebase
const app = !firebase.apps.length
    ? initializeApp(firebaseConfig)
    : firebase.app();
const analytics = getAnalytics(app);
const db = app.firestore()

export { db }