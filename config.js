import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCQRQiZBp5HHQK0Io6QbH6znbtO6mCZ8os",
  authDomain: "project-75-17fa4.firebaseapp.com",
  projectId: "project-75-17fa4",
  storageBucket: "project-75-17fa4.appspot.com",
  messagingSenderId: "621667183769",
  appId: "1:621667183769:web:8384d6dba2cbd2fe429c08"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
