import firebase from '@firebase/app';
import "@firebase/auth";
import "@firebase/database";
import "@firebase/storage";

// var config = {
//   apiKey: "AIzaSyCREQMYIbAYKscrS_JYvWP4KpMsF_jI5Bg",
//   authDomain: "react-slack-clone.firebaseapp.com",
//   databaseURL: "https://react-slack-clone.firebaseio.com",
//   projectId: "react-slack-clone",
//   storageBucket: "react-slack-clone.appspot.com",
//   messagingSenderId: "423395756405"
// };
// firebase.initializeApp(config);

var firebaseConfig = {
  apiKey: "AIzaSyA3xicLWo-rbou98D_-XP4eqcULSWCQtQs",
  authDomain: "react-slack-clone-d408b.firebaseapp.com",
  databaseURL: "https://react-slack-clone-d408b.firebaseio.com",
  projectId: "react-slack-clone-d408b",
  storageBucket: "react-slack-clone-d408b.appspot.com",
  messagingSenderId: "469872174114",
  appId: "1:469872174114:web:6e8f7630ba63f100e8167b",
  measurementId: "G-CX7DM7SXHT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
