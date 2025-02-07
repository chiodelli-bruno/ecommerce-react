// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrlzpPX7orxEMZdrtQ1pSl0GAt8mibSUc",
  authDomain: "ecommerce-react-9178c.firebaseapp.com",
  projectId: "ecommerce-react-9178c",
  storageBucket: "ecommerce-react-9178c.firebasestorage.app",
  messagingSenderId: "844460627389",
  appId: "1:844460627389:web:9be365586239e966af6ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)

console.log("Firebase initialized")