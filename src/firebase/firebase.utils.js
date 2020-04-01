import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDu8BiJ0srZOwdNpuscJ5mLnGLk_lRbscU",
    authDomain: "kween-clothing.firebaseapp.com",
    databaseURL: "https://kween-clothing.firebaseio.com",
    projectId: "kween-clothing",
    storageBucket: "kween-clothing.appspot.com",
    messagingSenderId: "219181222730",
    appId: "1:219181222730:web:0513ef6d2c24e26781cfb3",
    measurementId: "G-992VPSR9LP"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;