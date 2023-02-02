// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkawjI0IAZWVyjmUBYjtFbMh0u1ojoU40",
  authDomain: "auth-e-commerce1.firebaseapp.com",
  projectId: "auth-e-commerce1",
  storageBucket: "auth-e-commerce1.appspot.com",
  messagingSenderId: "248343114857",
  appId: "1:248343114857:web:7f6772734d0f1d78725ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;