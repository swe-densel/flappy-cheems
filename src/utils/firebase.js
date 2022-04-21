// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqRA6XtOJ77MAROncOuJieThLPvn0402s",
    authDomain: "flappy-cheems.firebaseapp.com",
    databaseURL: "https://flappy-cheems-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "flappy-cheems",
    storageBucket: "flappy-cheems.appspot.com",
    messagingSenderId: "967023955915",
    appId: "1:967023955915:web:2597de5af35836679df04e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export default database