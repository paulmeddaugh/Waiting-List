// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmIarwUuVON-u-2UY8wkvby4LM_PCCKIE",
    authDomain: "waiting-list-7aede.firebaseapp.com",
    projectId: "waiting-list-7aede",
    storageBucket: "waiting-list-7aede.appspot.com",
    messagingSenderId: "214078511178",
    appId: "1:214078511178:web:b81ed1805d43b88a506eb3",
    measurementId: "G-F046QQZRGR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, analytics, auth, signInWithEmailAndPassword };