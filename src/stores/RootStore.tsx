import AuthStore from '../stores/AuthStore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-aAZD0cZ2fZ6aNqr8KAQifPa_ybeFO5c",

  authDomain: "drcapp-22f93.firebaseapp.com",

  projectId: "drcapp-22f93",

  storageBucket: "drcapp-22f93.appspot.com",

  messagingSenderId: "885356589934",

  appId: "1:885356589934:web:9b52cf79b2fd80cc53477f",

  measurementId: "G-GVJ8YM8KSJ"
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);

class RootStore {
  authStore: typeof AuthStore;

  constructor() {
    this.authStore = AuthStore; // Assign the AuthStore class directly
  }
}

const rootStore = new RootStore();

export default rootStore;
