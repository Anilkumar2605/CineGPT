// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9g9CBvPIyv7uULIPeULCIhahW_FU37GE",
    authDomain: "cinegpt-be54e.firebaseapp.com",
    projectId: "cinegpt-be54e",
    storageBucket: "cinegpt-be54e.appspot.com",
    messagingSenderId: "72841579327",
    appId: "1:72841579327:web:26474ff1d79a5225ab618a",
    measurementId: "G-21CCG3QM7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();