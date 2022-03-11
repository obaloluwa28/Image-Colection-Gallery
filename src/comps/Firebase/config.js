import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3NvkQUYuJA7YeS2WbPjxPQrLJ-MB8hXo",
    authDomain: "e-commerce-623e1.firebaseapp.com",
    projectId: "e-commerce-623e1",
    storageBucket: "e-commerce-623e1.appspot.com",
    messagingSenderId: "1047223357506",
    appId: "1:1047223357506:web:36fac90643648854dedddb"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
  const projectStorage = getStorage(firebaseApp);
  const projectFirestore = getFirestore(firebaseApp)
  const timestamp = serverTimestamp();

  export {projectStorage,projectFirestore, timestamp};