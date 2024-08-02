import './App.css';
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
  appId: "1:558191983139:web:bf8fabaf7452fd97aecf96",
  measurementId: "G-28HMN6V5R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Hermes!</h1>
      </header>
      <p>What would you like to convey?</p>
    </div>
  );
}

export default App;
