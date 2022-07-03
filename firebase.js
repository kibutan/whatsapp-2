import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWC_HFsvSfB-Pz6P3YxRteWEDmcO9vGbo",
  authDomain: "whatsapp-2-61db8.firebaseapp.com",
  projectId: "whatsapp-2-61db8",
  storageBucket: "whatsapp-2-61db8.appspot.com",
  messagingSenderId: "682991089854",
  appId: "1:682991089854:web:f8b8b23e59fa80801986ef",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
