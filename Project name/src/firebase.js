import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJKNAqTrhcBQeK64Sw5toglKPI4kviEsU",
  authDomain: "venturethai-e1dd3.firebaseapp.com",
  projectId: "venturethai-e1dd3",
  storageBucket: "venturethai-e1dd3.firebasestorage.app",
  messagingSenderId: "733847078309",
  appId: "1:733847078309:web:0dd32b63bcfc63b61dd44c",
  measurementId: "G-WE1RFCTJ8D"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);