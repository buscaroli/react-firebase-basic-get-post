import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  query,
  getDocs,
  addDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'react-firebase-basic-post-get.firebaseapp.com',
  databaseURL:
    'https://react-firebase-basic-post-get-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-firebase-basic-post-get',
  storageBucket: 'react-firebase-basic-post-get.appspot.com',
  messagingSenderId: '639861888346',
  appId: '1:639861888346:web:5c946bcf81aec49ce7cf63',
  measurementId: 'G-3PPJ8XSRCM',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// export const getMessages = async () => {
//   const msgCollection = collection(db, 'messages')
//   try {
//     const msgSnapshot = await getDocs(msgCollection)
//     const children = msgSnapshot.query()
//     return children
//   } catch (error) {
//     return { error }
//   }
// }

// export const sendMessage = async (data) => {
//   try {
//     console.log(process.env.REACT_APP_FIREBASE_APIKEY)
//     await addDoc(collection(db, 'messages'), data)
//   } catch (error) {
//     console.log('Error sending new Message:', { error })
//   }
// }
