import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDV7SrX9PviSNzetC_MHEQ9Rw5A9dtB6EQ",
  authDomain: "todo-ninja-18174.firebaseapp.com",
  databaseURL: "https://todo-ninja-18174.firebaseio.com",
  projectId: "todo-ninja-18174",
  storageBucket: "todo-ninja-18174.appspot.com",
  messagingSenderId: "248461091776"
};
firebase.initializeApp(config);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
export default db;