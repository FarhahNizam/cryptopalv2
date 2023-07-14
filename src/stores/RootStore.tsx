import AuthStore from '../stores/AuthStore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-Jh2ygm_OG5J_hUxHJgCmdAUszgvFEPw",
  authDomain: "cryptoproject-f1788.firebaseapp.com",
  projectId: "cryptoproject-f1788",
  storageBucket: "cryptoproject-f1788.appspot.com",
  messagingSenderId: "1002063783531",
  appId: "1:1002063783531:web:8539175ae00c1edb9c732e",
  measurementId: "G-FKPGD74S9S"
  // Your Firebase configuration
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);

class RootStore {
  authStore: typeof AuthStore; // Updated type

  constructor() {
    this.authStore = AuthStore; // Assign the class reference
  }
}

const rootStore = new RootStore();

export default rootStore;
