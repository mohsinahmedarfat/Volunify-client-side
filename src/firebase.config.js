// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgZ8nMZ1mpmmNVvRuqJ3x_os2Mf1id62k",
  authDomain: "volunify-2c546.firebaseapp.com",
  projectId: "volunify-2c546",
  storageBucket: "volunify-2c546.appspot.com",
  messagingSenderId: "442297868128",
  appId: "1:442297868128:web:f11b1ff05a4b11080d8805",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
