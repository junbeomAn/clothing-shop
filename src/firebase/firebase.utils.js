import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDcuKES9V098Ahx5tWxD632m_TG3ZBmbgk",
  authDomain: "crwn-db-baace.firebaseapp.com",
  databaseURL: "https://crwn-db-baace.firebaseio.com",
  projectId: "crwn-db-baace",
  storageBucket: "crwn-db-baace.appspot.com",
  messagingSenderId: "957928092719",
  appId: "1:957928092719:web:f9d8412ec1d803e89702da",
  measurementId: "G-VYPM0MECW5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;