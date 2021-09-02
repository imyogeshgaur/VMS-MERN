import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBABOwUu2joTur_covJm9bpk03sjOqjJxA",
  authDomain: "vms-app-7bac7.firebaseapp.com",
  projectId: "vms-app-7bac7",
  storageBucket: "vms-app-7bac7.appspot.com",
  messagingSenderId: "328948402632",
  appId: "1:328948402632:web:0ebd4d634674b62d2a98fd"
};

const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();
const authentication = app.auth();

export { authentication, database };

