// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkypjnc_U4eO2r5Vhhus5cMNav_uqUn4A",
    authDomain: "chef-recipe-hunting-c1777.firebaseapp.com",
    projectId: "chef-recipe-hunting-c1777",
    storageBucket: "chef-recipe-hunting-c1777.appspot.com",
    messagingSenderId: "266016443024",
    appId: "1:266016443024:web:296f6503b325eb610ca615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app