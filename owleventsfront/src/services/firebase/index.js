import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBDwTiMJ4XVBFFZfA4CMcNvpMc11krgxUE",
    authDomain: "owlevents-api.firebaseapp.com",
    databaseURL: "https://owlevents-api.firebaseio.com",
    projectId: "owlevents-api",
    storageBucket: "owlevents-api.appspot.com",
    messagingSenderId: "316757768786",
    appId: "1:316757768786:web:cd63886abf3c032cba3d8b",
    measurementId: "G-C95JNRYNS3"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
