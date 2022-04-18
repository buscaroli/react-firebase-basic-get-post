import { createContext, useState } from 'react'
import { db } from '../api/firebase'
import { collection, addDoc, getDocs, orderBy } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const DatabaseContext = createContext()

export function DatabaseProvider({ children }) {
  const auth = getAuth()
  const [isLogged, setIsLogged] = useState(false)
  const [messages, setMessages] = useState([])

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid
      // ...
    } else {
      // User is signed out
      // ...
    }
  })

  // get all messages
  const getMessages = async () => {
    const querySnapshot = await getDocs(
      collection(db, 'messages'),
      orderBy('time', 'desc')
    )
    let retrievedMsgs = []
    querySnapshot.forEach((doc) => {
      let newMsg = { ...doc.data() }
      retrievedMsgs.push(newMsg)
    })
    if (retrievedMsgs.length === 0) {
      console.log('empty array ', retrievedMsgs)
      setMessages([
        {
          name: 'Your App',
          email: 'app@email.com',
          id: '12345',
          text: 'Add your First Message!',
        },
      ])
    } else {
      console.log(messages)
      retrievedMsgs.sort((a, b) => b.time - a.time)
      // console.log('sorted: ', retrievedMsgs)
      setMessages(retrievedMsgs)
    }
  }

  // send data to the server
  const sendMessage = async (data) => {
    try {
      await addDoc(collection(db, 'messages'), data)
      await getMessages()
    } catch (error) {
      console.error({ error })
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid
      // ...
    } else {
      // User is signed out
      // ...
    }
  })

  return (
    <DatabaseContext.Provider value={{ messages, getMessages, sendMessage }}>
      {children}
    </DatabaseContext.Provider>
  )
}

export default DatabaseContext
