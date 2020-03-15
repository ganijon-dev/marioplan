import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyC8HSrr5RARU9rwHeGWxpzG8JneNSs0RMk",
    authDomain: "gtmarioplan.firebaseapp.com",
    databaseURL: "https://gtmarioplan.firebaseio.com",
    projectId: "gtmarioplan",
    storageBucket: "gtmarioplan.appspot.com",
    messagingSenderId: "862487959068",
    appId: "1:862487959068:web:1bccca7284df66c32931d9",
    measurementId: "G-XCXCEHF459"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnappshots: true})

  export default firebase;