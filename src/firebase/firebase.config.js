// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy83IJzwGYTZ7SueobSG11bpHGp8cWml0",
  authDomain: "eco-adventure-blog-d7dc8.firebaseapp.com",
  projectId: "eco-adventure-blog-d7dc8",
  storageBucket: "eco-adventure-blog-d7dc8.firebasestorage.app",
  messagingSenderId: "658164875947",
  appId: "1:658164875947:web:d142518634a161c3ca2dee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;