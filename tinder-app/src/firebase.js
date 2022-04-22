import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAlgnrGQMVjAfllN7-7w-6cy6dfjx4fUgc",
  authDomain: "tinder-app-736a8.firebaseapp.com",
  projectId: "tinder-app-736a8",
  storageBucket: "tinder-app-736a8.appspot.com",
  messagingSenderId: "644106859508",
  appId: "1:644106859508:web:be2e9fc81f6f1bc3c07fa1",
  measurementId: "G-3RDZ8864D7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database