import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//change later
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

export const createUserProfileDocument = async (userAuth, additionalData)=> {

	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();
	
	if(!snapshot.exists){ //create mirror in firebase database
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try {
			
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})

		} catch (error) {
			console.log('Error creating user', error.message);
		}

	}

	return userRef
}

export default firebase;