import { createContext, useState, useEffect } from 'react'
import { db, auth } from '../api/firebase'
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
} from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

const DatabaseContext = createContext()

export function DatabaseProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false)
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState()

  const signup = (userData) => {
    // console.log('DatabaseContext - signup - userData -> ', userData)
    console.log('DatabaseContext.js - signup - auth -> ', auth)
    return createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then((userCredentials) => {
        setIsLogged(true)
        setUser({ email: auth.email, id: auth.uid })
        console.log('DatabaseContext.js - signup - auth -> ', auth)
      })
      .catch((error) => {
        setIsLogged(false)
        console.error('Error: ', { code: error.code, message: error.message })
      })
  }

  const login = (userData) => {
    return signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        setIsLogged(true)
        console.log('DatabaseContext.js - login - auth -> ', auth)
      })
      .catch((error) => {
        setIsLogged(false)
        console.error('Error: ', { code: error.code, message: error.message })
      })
  }

  const logout = () => {
    return signOut(auth)
      .then(() => {
        console.log('Signed out')
        console.log(auth)
        setIsLogged(false)
        setMessages([])
      })
      .catch((error) => {
        console.log('Error: ', { code: error.code, message: error.message })
      })
  }

  useEffect(() => {
    // TO DO: need to find a way of trying if this is actually working
    const authState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log('DatabaseContext.js - useEffect - user -> ', currentUser)

      if (!currentUser) {
        setIsLogged(false)
      } else {
        setIsLogged(true)
        setUser(currentUser)
      }
    })
    return authState
  }, [])

  // get all messages
  const getMessages = async () => {
    const q = query(
      collection(db, 'messages'),
      where('owner', '==', String(user.uid))
    )
    const querySnapshot = await getDocs(q)
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
      retrievedMsgs.sort((a, b) => b.createdAt - a.createdAt)
      // console.log('sorted: ', retrievedMsgs)
      setMessages(retrievedMsgs)
    }
  }

  // send message to the server
  const sendMessage = async (data) => {
    try {
      await addDoc(collection(db, 'messages'), data)
      await getMessages()
    } catch (error) {
      console.error('Error sending message: ', { error })
    }
  }

  const deleteMessage = async ({ msgId }) => {
    try {
      const q = query(
        collection(db, 'messages'),
        where('msgId', '==', String(msgId))
      )

      const docs = await getDocs(q)

      docs.forEach((msg) => {
        deleteDoc(doc(db, 'messages', msg.id))
      })

      await getMessages()
    } catch (error) {
      console.error('Error deleting message: ', { error })
    }
  }

  const updateMessage = async (data) => {
    try {
      const q = query(
        collection(db, 'messages'),
        where('msgId', '==', String(data.msgId))
      )

      const docs = await getDocs(q)

      docs.forEach((msg) => {
        updateDoc(doc(db, 'messages', data.text))
      })
    } catch (error) {
      console.error('Error updating message: ', { error })
    }
  }

  return (
    <DatabaseContext.Provider
      value={{
        messages,
        getMessages,
        sendMessage,
        deleteMessage,
        updateMessage,
        signup,
        login,
        logout,
        user,
        isLogged,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  )
}

export default DatabaseContext
