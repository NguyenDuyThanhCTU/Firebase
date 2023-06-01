import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyDAPeSVyf45LmCW1zulusrdpLrgqYvFQ",
  authDomain: "utils-387101.firebaseapp.com",
  databaseURL:
    "https://utils-387101-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "utils-387101",
  storageBucket: "utils-387101.appspot.com",
  messagingSenderId: "739944808557",
  appId: "1:739944808557:web:b79d7635bba16cbb51bf64",
  measurementId: "G-JG73KN4BGP",
};

const app = initializeApp(firebaseConfig);

export const dbLite = getFirestore(app);
export const storage = getStorage(app);