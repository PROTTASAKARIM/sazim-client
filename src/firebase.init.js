// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJqpzjXZu0zD2L25Ex5LuhCpTG-rf1Q4Q",
    authDomain: "sazim-website.firebaseapp.com",
    projectId: "sazim-website",
    storageBucket: "sazim-website.appspot.com",
    messagingSenderId: "61703269660",
    appId: "1:61703269660:web:1ec72f962dd6ec4b445ed9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;