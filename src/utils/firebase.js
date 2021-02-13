import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCUDGX4R6vr6Av61bmm_zDahyPoBtFbsG0',
  authDomain: 'daily-practise-eshop-db.firebaseapp.com',
  projectId: 'daily-practise-eshop-db',
  storageBucket: 'daily-practise-eshop-db.appspot.com',
  messagingSenderId: '1094252283827',
  appId: '1:1094252283827:web:c40c367d2e0d55ddbe2dc6',
  measurementId: 'G-XSJLQ5K1BS',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
