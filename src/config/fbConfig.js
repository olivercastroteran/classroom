import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyDKPJzRv1ofiYOgLp_h8ju-98zfOFRRpCw',
  authDomain: 'classroom-bb725.firebaseapp.com',
  databaseURL: 'https://classroom-bb725.firebaseio.com',
  projectId: 'classroom-bb725',
  storageBucket: 'classroom-bb725.appspot.com',
  messagingSenderId: '977083690583',
  appId: '1:977083690583:web:637255ed74d8ea107e3d12',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const libraryStorage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestore = firebase.firestore();

//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
