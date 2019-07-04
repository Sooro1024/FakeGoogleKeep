import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAIes_iPZ4iKV4ECWPEOeX7IcTj8IjLCVA",
  authDomain: "faketrello-74ef6.firebaseapp.com",
  databaseURL: "https://faketrello-74ef6.firebaseio.com",
  projectId: "faketrello-74ef6",
  storageBucket: "faketrello-74ef6.appspot.com",
  messagingSenderId: "506592906517",
  appId: "1:506592906517:web:785bdd475bcef9ca"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
