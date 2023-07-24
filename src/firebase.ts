// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqSmrRoOODyfFB2Cb5EV5aDeUCMFy3OI8',
  authDomain: 'lockers-unlocked.firebaseapp.com',
  projectId: 'lockers-unlocked',
  storageBucket: 'lockers-unlocked.appspot.com',
  messagingSenderId: '400209261536',
  appId: '1:400209261536:web:5254e031b816c644697185',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage();

export { app, db, storage };
