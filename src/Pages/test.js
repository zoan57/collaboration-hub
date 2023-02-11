import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAkLiJzMIarKANMrWGwJvvLw6BH2K9UbEE",
    authDomain: "collaborationhub2023.firebaseapp.com",
    projectId: "collaborationhub2023",
    storageBucket: "collaborationhub2023.appspot.com",
    messagingSenderId: "386632839231",
    appId: "1:386632839231:web:619cccbaae31164e0dc88a",
    measurementId: "G-3V93WJVVY1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });