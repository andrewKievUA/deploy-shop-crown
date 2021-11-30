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

export const createUserProfileDocument = async (userAuth, additionalData) => {
   /// console.log(userAuth)
    if (!userAuth) return
    const userRef = firestore.doc(`user/${userAuth.uid}`)
    const snapshot = await userRef.get()
  //  console.log(snapshot, 'TINI')
    if (!snapshot.exists) {
        //console.log(userRef,"inside the firebase  !snapshot.exists")
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData})

        } catch (error) {
            console.log("error creating user", error.message)
        }
        //console.log(userRef,"inside the firebase")
    }
    return userRef
}

export const convertCollectionsSnapshotToMap=(colletions)=>{
    const transformedCollection = colletions.docs.map(doc=>{
        const {title,items}=doc.data()
        return {
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((acc,collection)=>{
        acc[collection.title.toLowerCase()]=collection
        return acc
    })
}



export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
export const sighInWithGoogle = () => auth.signInWithPopup(provider)





