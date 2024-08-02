import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import {useAuthState} from 'react-firebase-hooks/auth'
import { useCollectionData} from 'react-firebase-hooks/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3smO787cd82vF63Mnxc9pJkD40QneYRo",
  authDomain: "hermes-a5761.firebaseapp.com",
  projectId: "hermes-a5761",
  storageBucket: "hermes-a5761.appspot.com",
  messagingSenderId: "558191983139",
  appId: "1:558191983139:web:71d60a47604907ddaecf96",
  measurementId: "G-ZGJ3MM5TH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
