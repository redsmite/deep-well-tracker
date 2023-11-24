import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDGkhgbYosvQzV2afOWYYdTnLRx0MkVzvQ",
    authDomain: "deep-well-tracker.firebaseapp.com",
    projectId: "deep-well-tracker",
    storageBucket: "deep-well-tracker.appspot.com",
    messagingSenderId: "67748418257",
    appId: "1:67748418257:web:0c6d35debcc79b5485ebf0",
    measurementId: "G-H2ZSW8EREG"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };