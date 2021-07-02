import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/firebase-auth'
import "firebase/storage";



var firebaseConfig = {
    apiKey: "AIzaSyAtxkD4iEb1kfM35RyZiV17S7xNUL6iNVM",
    authDomain: "book-shop-9da3e.firebaseapp.com",
    projectId: "book-shop-9da3e",
    storageBucket: "book-shop-9da3e.appspot.com",
    messagingSenderId: "1055698816832",
    appId: "1:1055698816832:web:5c8ae4deda86ae528434a5",
    measurementId: "G-6EFGZJSRRL"
};
  // Initialize Firebase


  // Initialize Firebase
    export const fb = firebase.initializeApp(firebaseConfig);
    
    export const db = firebase.firestore();
    export const storage = firebase.storage();
    export const storageRef = firebase.storage().ref();

    export default firebase;




    
