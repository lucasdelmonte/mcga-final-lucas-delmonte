import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBw7czHxYX05smsZIC8i1wpcjVyfaN5QxI",
    authDomain: "mcga-final-8f54f.firebaseapp.com",
    projectId: "mcga-final-8f54f",
    storageBucket: "mcga-final-8f54f.appspot.com",
    messagingSenderId: "316298610716",
    appId: "1:316298610716:web:4a9ac3dd77d55c8a21b7d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };