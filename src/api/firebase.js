import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: 'react-firebase-basic-app-a06ad',
  storageBucket: 'react-firebase-basic-app-a06ad.appspot.com',
  messagingSenderId: '75746738576',
  appId: '1:75746738576:web:7c11352ea82bbf4e8ef315',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

export const db = getFirestore(app)
