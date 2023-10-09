// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtLnnH27HcqidIoF6ScKiX1AHSX8j1ldk",
  authDomain: "cinemax-x.firebaseapp.com",
  projectId: "cinemax-x",
  storageBucket: "cinemax-x.appspot.com",
  messagingSenderId: "60297245930",
  appId: "1:60297245930:web:d2620910e37e7ddde3d393",
  measurementId: "G-XTDQ829S46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
