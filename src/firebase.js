import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCBcwSQl_1-O9E3Gvjjh09mwkQt04JpiXw",
    authDomain: "linkedin-bbf1c.firebaseapp.com",
    projectId: "linkedin-bbf1c",
    storageBucket: "linkedin-bbf1c.appspot.com",
    messagingSenderId: "17148842837",
    appId: "1:17148842837:web:43b905efcf2410485d55dc"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(firebaseApp);

// Get Auth instance
const auth = getAuth(firebaseApp);

// Export Firestore and Auth instances
export { db, auth };