// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-_F-aWvAGMXCOu9JGjU2Cdn34-36s_l4",
  authDomain: "Islamic-Pulse.firebaseapp.com",
  projectId: "Islamic-Pulse",
  storageBucket: "Islamic-Pulse.appspot.com",
  messagingSenderId: "681059469997",
  appId: "1:681059469997:web:4aa88a18b195cfe8559424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app