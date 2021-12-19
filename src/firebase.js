import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDRUL1fjfkQsJ_iPffvtjIDcD62Ag3I36o",
  authDomain: "hackathon-51ac5.firebaseapp.com",
  projectId: "hackathon-51ac5",
  databaseURL: "https://hackathon-51ac5-default-rtdb.firebaseio.com",
  storageBucket: "hackathon-51ac5.appspot.com",
  messagingSenderId: "351905200896",
  appId: "1:351905200896:web:729883549cf2c9461b91e5"
};

const app = initializeApp(firebaseConfig);

///AUTH FIREBASE
const auth = getAuth();
///FIRESTORE DATABASE//
const db = getFirestore();
export { auth, db }