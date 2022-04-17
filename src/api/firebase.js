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
  authDomain: 'react-firebase-basic-app-a06ad.firebaseapp.com',
  projectId: 'react-firebase-basic-app-a06ad',
  storageBucket: 'react-firebase-basic-app-a06ad.appspot.com',
  messagingSenderId: '75746738576',
  appId: '1:75746738576:web:d398d9164f81b0328ef315',
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
