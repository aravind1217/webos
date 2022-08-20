import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCxrxeXdTzXCzNPd6QTC9pRQfF8DwLVrBk",
    authDomain: "login-61adf.firebaseapp.com",
    databaseURL:'https://login-61adf.firebaseapp.com',
    projectId: "login-61adf",
    storageBucket: "login-61adf.appspot.com",
    messagingSenderId: "502877773000",
    appId: "1:502877773000:web:a50593028b0aaaa10419fd"
  });
  
export const auth = app.auth()
export default app