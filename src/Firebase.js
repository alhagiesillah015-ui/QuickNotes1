// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { doc,getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ws6oQSmbPujWh6G6C-XtiMpaIFXOd8w",
  authDomain: "firstproject-a3093.firebaseapp.com",
  projectId: "firstproject-a3093",
  storageBucket: "firstproject-a3093.firebasestorage.app",
  messagingSenderId: "882798215429",
  appId: "1:882798215429:web:8fae8af1fa657b0d72f76c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db =  getFirestore(app);