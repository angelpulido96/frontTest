import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBo4aWf3xCxNjdGoWIi9bnMTBeZsMjGulM",
  authDomain: "pet-sitters-21612.firebaseapp.com",
  projectId: "pet-sitters-21612",
  storageBucket: "pet-sitters-21612.appspot.com",
  messagingSenderId: "884074603183",
  appId: "1:884074603183:web:046e43a3463e4c1ba06a5a",
  databaseURL:'https://pet-sitters-21612-default-rtdb.firebaseio.com/'
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getDatabase();