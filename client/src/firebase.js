// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
/// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqDISG5ie0Wnw-PsGR8R7OekeZQ4SyVms",
  authDomain: "online-tutoring-web-a3efd.firebaseapp.com",
  projectId: "online-tutoring-web-a3efd",
  storageBucket: "online-tutoring-web-a3efd.appspot.com",
  messagingSenderId: "555497089858",
  appId: "1:555497089858:web:0605a2f3312630b36836db",
  measurementId: "G-XNQLE7WLT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

