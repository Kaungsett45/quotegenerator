import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyCbWE8uLJ_ParposClHB9u5fGVYiio_zEM",
    authDomain: "rublet.firebaseapp.com",
    projectId: "rublet",
    storageBucket: "rublet.appspot.com",
    messagingSenderId: "252676870374",
    appId: "1:252676870374:web:ae0e6c6a09588311202b27"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = getFirestore(app);

export {db}