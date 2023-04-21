import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATybJiIbd4ygLMgL7k-m92PejaoV72kl8",
  authDomain: "ecom-4ecb5.firebaseapp.com",
  projectId: "ecom-4ecb5",
  storageBucket: "ecom-4ecb5.appspot.com",
  messagingSenderId: "652620480961",
  appId: "1:652620480961:web:83e5cc973b5470d99d2f40",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    let displayName = userAuth.displayName;
    let email = userAuth.email;
    let createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }
};
