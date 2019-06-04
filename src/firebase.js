

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDn8cvkD7isdWFDlyXXkprCcAF2-R5nb_w",
  authDomain: "contracts-data.firebaseapp.com",
  databaseURL: "https://contracts-data.firebaseio.com",
  projectId: "contracts-data",
  storageBucket: "contracts-data.appspot.com",
  messagingSenderId: "235487946894",
  appId: "1:235487946894:web:9933b1d6a8a97542"
};

 firebase.initializeApp(firebaseConfig);
  


export default firebase;