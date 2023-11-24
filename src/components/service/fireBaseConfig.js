// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVJXhkfw6FSlzSqFuhk4PD5BVu3ihisVw",
  authDomain: "tp-react-cd479.firebaseapp.com",
  projectId: "tp-react-cd479",
  storageBucket: "tp-react-cd479.appspot.com",
  messagingSenderId: "92677780209",
  appId: "1:92677780209:web:c54f401ab0c16308af6f50",
  measurementId: "G-K2X7904FW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);