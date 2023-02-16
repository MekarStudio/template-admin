
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyASTOXFGbpt3pzgboM1Tc8WNjrH9vmVDsM",
    authDomain: "prototype-d9733.firebaseapp.com",
    projectId: "prototype-d9733",
    storageBucket: "prototype-d9733.appspot.com",
    messagingSenderId: "320025173060",
    appId: "1:320025173060:web:2855d9a29677581b283011",
    measurementId: "G-WFHTBP6P90"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {
    db,
    storage,
    auth
}
