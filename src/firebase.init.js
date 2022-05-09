// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from './firebase.init'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6aqyI-3PHjZcGeDfPjFZ8cEzw4n7Vk4w",
  authDomain: "book-warehouse-site.firebaseapp.com",
  projectId: "book-warehouse-site",
  storageBucket: "book-warehouse-site.appspot.com",
  messagingSenderId: "685909030148",
  appId: "1:685909030148:web:35e076135a01af847d8c51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app