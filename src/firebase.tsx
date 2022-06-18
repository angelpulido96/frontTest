import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBo4aWf3xCxNjdGoWIi9bnMTBeZsMjGulM",
  authDomain: "pet-sitters-21612.firebaseapp.com",
  projectId: "pet-sitters-21612",
  storageBucket: "pet-sitters-21612.appspot.com",
  messagingSenderId: "884074603183",
  appId: "1:884074603183:web:046e43a3463e4c1ba06a5a"
};

initializeApp(firebaseConfig);

export const auth = getAuth()