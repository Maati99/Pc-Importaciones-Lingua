import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCCmW50iUGLKK4IaJg5c_777ZDGZoJNj2k",
  authDomain: "pc-importaciones.firebaseapp.com",
  projectId: "pc-importaciones",
  storageBucket: "pc-importaciones.appspot.com",
  messagingSenderId: "516387506587",
  appId: "1:516387506587:web:18d6248da3c17e2424793e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app);
}