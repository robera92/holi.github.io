// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRKSxid7gWUn-AHQlZiuHRQ-HIGdNOSG4",
  authDomain: "holiday-app-33292.firebaseapp.com",
  projectId: "holiday-app-33292",
  storageBucket: "holiday-app-33292.appspot.com",
  messagingSenderId: "634026988251",
  appId: "1:634026988251:web:47c7d90507be15dae232fe"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase

export {
  app
}