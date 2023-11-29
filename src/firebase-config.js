import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBcSaWg8HIJZsIq6e4pLToD_EJubEuLtEY",
  authDomain: "react-crud-38ff8.firebaseapp.com",
  projectId: "react-crud-38ff8",
  storageBucket: "react-crud-38ff8.appspot.com",
  messagingSenderId: "163875386419",
  appId: "1:163875386419:web:37c560ce1b17020f975f46",
  measurementId: "G-83E2FRGLZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);