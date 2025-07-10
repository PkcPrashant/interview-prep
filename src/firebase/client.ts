import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBeuK8AVRYjBcNDrcuCizpFKg9BsXCb7vI",
    authDomain: "interviewprep-76d73.firebaseapp.com",
    projectId: "interviewprep-76d73",
    storageBucket: "interviewprep-76d73.firebasestorage.app",
    messagingSenderId: "625160349736",
    appId: "1:625160349736:web:7baa254235bec113e4ed1d",
    measurementId: "G-WCW5G9HN5D"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);