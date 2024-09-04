// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkwLniIS6huM2Eg_uQfSXjaidbskk-xKQ",
  authDomain: "olx-clone-89f00.firebaseapp.com",
  projectId: "olx-clone-89f00",
  storageBucket: "olx-clone-89f00.appspot.com",
  messagingSenderId: "911995337977",
  appId: "1:911995337977:web:f06cd7b9c72cd064eaf628",
  measurementId: "G-RNTDW21MZ4"
};

// Initialize Firebase
export const fireb = initializeApp(firebaseConfig);
export const firestore = getFirestore(fireb);
export const auth = getAuth();
export const storage = getStorage(fireb);

