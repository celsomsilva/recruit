import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyByhz3Pu_Ff95417sOOER_Roa2gXaVXP3w",
  authDomain: "recruit-c5fa9.firebaseapp.com",
  databaseURL: "https://recruit-c5fa9.firebaseio.com",
  projectId: "recruit-c5fa9",
  storageBucket: "recruit-c5fa9.appspot.com",
  messagingSenderId: "286504951123"
};

const devConfig = {
  apiKey: "AIzaSyByhz3Pu_Ff95417sOOER_Roa2gXaVXP3w",
  authDomain: "recruit-c5fa9.firebaseapp.com",
  databaseURL: "https://recruit-c5fa9.firebaseio.com",
  projectId: "recruit-c5fa9",
  storageBucket: "recruit-c5fa9.appspot.com",
  messagingSenderId: "286504951123"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
