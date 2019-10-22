import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAr6HYj5xaMrh8jduAyP_Q4YmjCxUgY5ZM",
    authDomain: "budget-app-e151b.firebaseapp.com",
    databaseURL: "https://budget-app-e151b.firebaseio.com",
    projectId: "budget-app-e151b",
    storageBucket: "budget-app-e151b.appspot.com",
    messagingSenderId: "8486670060"
  };
firebase.initializeApp(config);

firebase.firestore();
export default firebase;