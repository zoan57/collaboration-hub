import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

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
    await updateProfile(auth.currentUser, { displayName: name });
    const user = res.user;
    const docRef = doc(db, "Users", user.uid);
    const payload = {
      uid: user.uid,
      name: name,
      authProvider: "firebase",
      email: email,
      enrollTime: new Date(),
    };
    await setDoc(docRef, payload), { merge: true };
  } catch (err) {
    console.log(err);
    alert("Email has been used, please enter a different email or log in.");
  }
};

export {
  auth,
  db,
  app,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
};
