import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdFUSjtNG2R_HYucGv_na7LDDLUa5lSAc",
  authDomain: "cooking-ninja-site-b6ec1.firebaseapp.com",
  projectId: "cooking-ninja-site-b6ec1",
  storageBucket: "cooking-ninja-site-b6ec1.appspot.com",
  messagingSenderId: "890041435355",
  appId: "1:890041435355:web:7453cff786c6c23bce38fe",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
