import firebase from 'firebase';

const firebaseConfig = {
    // Your Credentials
    apiKey: "AIzaSyBDab4AEdg22sjqC24eSsTcrQRW9o-pbM0",

    authDomain: "digitized-room.firebaseapp.com",

    databaseURL: "https://digitized-room-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "digitized-room",

    storageBucket: "digitized-room.appspot.com",

    messagingSenderId: "710461188047",

    appId: "1:710461188047:web:21632af084f493e17d54ba"

};

firebase.initializeApp(firebaseConfig);

// var database = firebase.database();

export default firebase;