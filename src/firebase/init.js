import firebase from 'firebase/app';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCZ2GwJ2OdZS6X0hT0ea1vpwyw0foF8ISs",
    authDomain: "real-time-chat-c1239.firebaseapp.com",
    databaseURL: "https://real-time-chat-c1239.firebaseio.com",
    projectId: "real-time-chat-c1239",
    storageBucket: "real-time-chat-c1239.appspot.com",
    messagingSenderId: "807231584614",
    appId: "1:807231584614:web:9121d774ebf5894449b0a7"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()