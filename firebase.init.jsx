// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMLBIvyFjtVA_PySKAbBKKjwUvSvnSXoI",
  authDomain: "content-management-redux-thunk.firebaseapp.com",
  projectId: "content-management-redux-thunk",
  storageBucket: "content-management-redux-thunk.appspot.com",
  messagingSenderId: "43962064113",
  appId: "1:43962064113:web:92b52d990f75646ba4dd50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;