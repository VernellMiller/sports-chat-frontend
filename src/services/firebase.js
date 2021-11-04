import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhXy1oVIJR9BaKeBJLPG-WuQSkk6CCZNg",
    authDomain: "sports-chat-d6a85.firebaseapp.com",
    projectId: "sports-chat-d6a85",
    storageBucket: "sports-chat-d6a85.appspot.com",
    messagingSenderId: "219669383110",
    appId: "1:219669383110:web:b2f843e8d1862bdda294c7"
  };

firebase.initializeApp(firebaseConfig);

// set up auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore();



function signIn() {
    return auth.signInWithPopup(provider);
}

function logOut() {
    return auth.signOut();
}


export {
    auth,
    signIn,
    logOut,
    db
}

  
