import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUXb4GKqKzylHLBUgoFpx0nUYuCSNYLtc",
  authDomain: "photo-gallery-b0459.firebaseapp.com",
  projectId: "photo-gallery-b0459",
  storageBucket: "photo-gallery-b0459.appspot.com",
  messagingSenderId: "829138632330",
  appId: "1:829138632330:web:67f3df8a9b2b325925b773",
  measurementId: "G-SNZNNCYC9B",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore();
export { storage, ref, getDownloadURL, firestore };
