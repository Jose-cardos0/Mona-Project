import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArm2fXj-qAZ1z3FqKni6BnxSbPg2hUobE",
  authDomain: "monaapp-94882.firebaseapp.com",
  projectId: "monaapp-94882",
  storageBucket: "monaapp-94882.appspot.com",
  messagingSenderId: "711925953609",
  appId: "1:711925953609:web:ee98ba53e3c1ba77c1bb98",
  measurementId: "G-KY65ZTZWT0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
