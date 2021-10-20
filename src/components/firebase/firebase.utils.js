import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
firebase.initializeApp({
    apiKey: "AIzaSyCrOnzMuL1Ontd3XDQeyBFhmmr1pqwn3a0",
    authDomain: "crwn-9c549.firebaseapp.com",
    projectId: "crwn-9c549",
    storageBucket: "crwn-9c549.appspot.com",
    messagingSenderId: "405630482850",
    appId: "1:405630482850:web:f53d4aee606c0874255afb"
})

export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
export const sighInWithGoogle= ()=> auth.signInWithPopup(provider)





