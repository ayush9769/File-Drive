import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2sy-nf1mrI7uU3ynZq_J2iZf7V6hPHaU",
  authDomain: "file-drive-4aad1.firebaseapp.com",
  projectId: "file-drive-4aad1",
  storageBucket: "file-drive-4aad1.appspot.com",
  messagingSenderId: "144311001597",
  appId: "1:144311001597:web:8810f4b1d216b0bc97f994",
  measurementId: "G-QTNHEL32EJ"
};
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
    // Additional analytics configuration or logging can go here
  } else {
    console.log("Firebase Analytics is not supported in this environment.");
  }
}).catch((error) => {
  console.error("Error checking Firebase Analytics support:", error);
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const usersCollectionRef = collection(firestore, 'users');
export const storage = getStorage(app);

export default app; 
