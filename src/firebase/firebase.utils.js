import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBnsDiyc59vWVoDjN3jXO_fXpZKJ-2kYIk",
    authDomain: "hot-hatches-777.firebaseapp.com",
    databaseURL: "https://hot-hatches-777.firebaseio.com",
    projectId: "hot-hatches-777",
    storageBucket: "hot-hatches-777.appspot.com",
    messagingSenderId: "147372016712",
    appId: "1:147372016712:web:6958fa13d7bb08bf56447d",
    measurementId: "G-HZ2E57T87W"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

export default firestore;