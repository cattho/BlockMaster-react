import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDUyX8aO1ogqprV0peEb1GGdtFZezGXHAA",
  authDomain: "base-de-datos-peli.firebaseapp.com",
  projectId: "base-de-datos-peli",
  storageBucket: "base-de-datos-peli.appspot.com",
  messagingSenderId: "1017232418326",
  appId: "1:1017232418326:web:f0714b3e83360c3e1df737",
  measurementId: "G-09D04QBLPC"
};


export const app = initializeApp(firebaseConfig);
export const GoogleLg= new GoogleAuthProvider()
export const db= getFirestore()


// userDB