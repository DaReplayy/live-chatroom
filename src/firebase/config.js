import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDAaslaTgm-uuijUK3ykkJSF4h-NBG0Ddk",
    authDomain: "vue-firebase-tutorial-69f95.firebaseapp.com",
    projectId: "vue-firebase-tutorial-69f95",
    storageBucket: "vue-firebase-tutorial-69f95.appspot.com",
    messagingSenderId: "1026571677273",
    appId: "1:1026571677273:web:fb2883e2b733a83a3dcb48"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timestamp }