import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
  updateDoc,doc
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAkLiJzMIarKANMrWGwJvvLw6BH2K9UbEE",
    authDomain: "collaborationhub2023.firebaseapp.com",
    projectId: "collaborationhub2023",
    storageBucket: "collaborationhub2023.appspot.com",
    messagingSenderId: "386632839231",
    appId: "1:386632839231:web:619cccbaae31164e0dc88a",
    measurementId: "G-3V93WJVVY1"
};

const app= initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const docRef = doc(db, "Users",user.uid);
        const payload = {
            uid:user.uid,
            name: name,
            authProvider: "local",
            email: email
        };
        await setDoc(docRef, payload),{merge:true};
        console.log(payload);
    } catch (err) {
    console.log(err);
    alert(err.message);
}};

export {
auth,
db,app,
logInWithEmailAndPassword,
registerWithEmailAndPassword,
};