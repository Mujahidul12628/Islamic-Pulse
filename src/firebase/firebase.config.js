// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsWI962cLRQqH_CnOK8j7j-gQR-opNqzw",
  authDomain: "islamic-pulse-1a614.firebaseapp.com",
  projectId: "islamic-pulse-1a614",
  storageBucket: "islamic-pulse-1a614.appspot.com",
  messagingSenderId: "431568502663",
  appId: "1:431568502663:web:88d6d429730d4234409d22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app