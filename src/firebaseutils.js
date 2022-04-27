import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA73C_f5z1dLkOd0RLccup9ylarodQ2sAw",
  authDomain: "iot-proje-5c7b3.firebaseapp.com",
  projectId: "iot-proje-5c7b3",
  storageBucket: "iot-proje-5c7b3.appspot.com",
  messagingSenderId: "400358006865",
  appId: "1:400358006865:web:5322b47bc88f8711e45870",
  measurementId: "G-6RQTQSRHVW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
