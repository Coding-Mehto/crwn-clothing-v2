// Import the functions you need from the SDKs you need
// import { initializeApp  } from "firebase/app";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getfirestore,
  doc,
  getDoc,
  setDoc,
  getFirestore,
} from "firebase/firestore";
import { Suspense } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcXjRrNo6uieucI7_I2cLzhtPn1ZA_LGU",
  authDomain: "crown-clothing-4772c.firebaseapp.com",
  projectId: "crown-clothing-4772c",
  storageBucket: "crown-clothing-4772c.appspot.com",
  messagingSenderId: "544098986144",
  appId: "1:544098986144:web:0c4f1f0283934bedf681c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const authUserSignIn = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
export const signAuthwithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};
  