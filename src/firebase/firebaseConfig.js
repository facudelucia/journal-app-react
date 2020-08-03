import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDidMVIr7hyD2kv3r5KBkgV-vo1cQlLGtM",
    authDomain: "react-app-27003.firebaseapp.com",
    databaseURL: "https://react-app-27003.firebaseio.com",
    projectId: "react-app-27003",
    storageBucket: "react-app-27003.appspot.com",
    messagingSenderId: "361721844707",
    appId: "1:361721844707:web:79ff19bcebbc4eb51846d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase,
  }