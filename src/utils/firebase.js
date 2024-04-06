// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCITBVAD2r_lgSWWYqUpd3j9AM2nBo0HjY",
  authDomain: "netflixgpt-eae2c.firebaseapp.com",
  projectId: "netflixgpt-eae2c",
  storageBucket: "netflixgpt-eae2c.appspot.com",
  messagingSenderId: "339076780759",
  appId: "1:339076780759:web:ecf5df13d224e965929692",
  measurementId: "G-CWJKZ13J7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// For firebase authentication
export const auth = getAuth();