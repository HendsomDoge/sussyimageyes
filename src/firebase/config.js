import * as firebase from 'firebase/app';
// import { initializeApp } from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCu-0booJGuix0orzJzKiD4D7Iqb0heAJA",
  authDomain: "reviews-hendsom-bot.firebaseapp.com",
  databaseURL: "https://reviews-hendsom-bot-default-rtdb.firebaseio.com",
  projectId: "reviews-hendsom-bot",
  storageBucket: "reviews-hendsom-bot.appspot.com",
  messagingSenderId: "884443814311",
  appId: "1:884443814311:web:42913312e35e50c24a7e82"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };