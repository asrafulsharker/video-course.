import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCrS6rs3MwJHnEjbRnAvXTMp2PhtE550QI",
    authDomain: "video-server-f3018.firebaseapp.com",
    projectId: "video-server-f3018",
    storageBucket: "video-server-f3018.appspot.com",
    messagingSenderId: "422411278263",
    appId: "1:422411278263:web:578e4b80279a21b313ba32",
    measurementId: "G-YDRE0X8PGP"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;