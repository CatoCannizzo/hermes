import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// For Auth from https://firebase.google.com/docs/auth/web/google-signin?authuser=0
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";



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
// might not need this
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
auth.useDeviceLanguage();

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorCode, errorMessage, credential)
  });
  
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <header className="bg-black p-3">
      <h1 className='text-3xl text-bold text-white'>Welcome to Hermes!</h1>
      </header>
      <p>What would you like to convey?</p>
      <button className='bg-red-500 p-3 drop-shadow-md hover:bg-red-300 m-5'onClick={()=> signInWithPopup()}>Sign in</button>
    </div>
  );
}

export default App;
