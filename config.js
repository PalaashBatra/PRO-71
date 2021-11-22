import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyDktk__4fhUMS9fOrImTSg_RKG6t-k0abQ",
    authDomain: "complaint-85d02.firebaseapp.com",
    projectId: "complaint-85d02",
    storageBucket: "complaint-85d02.appspot.com",
    messagingSenderId: "176762197930",
    appId: "1:176762197930:web:7a124a535c55e71e90bdd3"
  };
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

