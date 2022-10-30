import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5PHQaO6B-vsq-VK-DWbqVsMgOod5nCTE",
  authDomain: "chat-a1375.firebaseapp.com",
  projectId: "chat-a1375",
  storageBucket: "chat-a1375.appspot.com",
  messagingSenderId: "724490616320",
  appId: "1:724490616320:web:0a53548645d4bd31fda2e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
