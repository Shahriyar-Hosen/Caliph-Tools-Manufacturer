// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi2XxQGsqwKH9U53ihhDViRGwW4CNUxI8",
  authDomain: "caliph-tools-manufacturer.firebaseapp.com",
  projectId: "caliph-tools-manufacturer",
  storageBucket: "caliph-tools-manufacturer.appspot.com",
  messagingSenderId: "748027602167",
  appId: "1:748027602167:web:e8dfa42b8dcd1dd2981ff2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;