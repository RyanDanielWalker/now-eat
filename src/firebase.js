// import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;