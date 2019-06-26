import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDEQRtb_IQZUdDnmXLZfTbqNKDKtRZmtis",
    authDomain: "test-163a1a.firebaseapp.com",
    databaseURL: "https://test-163a1a.firebaseio.com",
    projectId: "test-163a1a",
    storageBucket: "",
    messagingSenderId: "386422779746",
    appId: "1:386422779746:web:aeb65d24aaa11b67"
  }
const fire = firebase.initializeApp(config);
export default fire;