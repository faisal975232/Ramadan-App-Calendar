import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9c1XtnZcaHBu8dKRJgLeeWwwupDTPdSA",
  authDomain: "fir-notes-ed4cc.firebaseapp.com",
  projectId: "fir-notes-ed4cc",
  storageBucket: "fir-notes-ed4cc.appspot.com",
  messagingSenderId: "998194953004",
  appId: "1:998194953004:web:735183d2ae1f7f088d4a89",
  measurementId: "G-RBVFPYJZHM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
