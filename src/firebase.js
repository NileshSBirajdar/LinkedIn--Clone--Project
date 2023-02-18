// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0EuFWbvg2MVS8p01Q-VqCJkHF6GTjy_Q",
  authDomain: "linkedin-clone-79ca1.firebaseapp.com",
  projectId: "linkedin-clone-79ca1",
  storageBucket: "linkedin-clone-79ca1.appspot.com",
  messagingSenderId: "730815546488",
  appId: "1:730815546488:web:366cbf5c907629d274d98d"
};
  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
