import firebase from 'firebase/app'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyDE273cgwJ5emnspMC8ekIf_SfWFpjfm5o",
  authDomain: "finals-f7c8c.firebaseapp.com",
  projectId: "finals-f7c8c",
  storageBucket: "finals-f7c8c.appspot.com",
  messagingSenderId: "772826036747",
  appId: "1:772826036747:web:42d2de0f1d489fd1c8650e"
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
