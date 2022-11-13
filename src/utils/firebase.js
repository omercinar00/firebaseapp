// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEzzThLVj2GHRYVGX5JOE-h008VaMGhyw",
  authDomain: "firecontactapp-omer.firebaseapp.com",
  databaseURL: "https://firecontactapp-omer-default-rtdb.firebaseio.com",
  projectId: "firecontactapp-omer",
  storageBucket: "firecontactapp-omer.appspot.com",
  messagingSenderId: "134527765500",
  appId: "1:134527765500:web:340de12f5d5b214e384079",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
