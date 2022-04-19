import { createContext, useState, useEffect } from 'react'
import { db, auth } from '../api/firebase'
import { collection, addDoc, getDocs, orderBy } from 'firebase/firestore'
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
      })
      .catch((error) => {
        console.log('Error: ', { code: error.code, message: error.message })
      })
  }

  useEffect(() => {
    // TO DO need to find a way of trying if this works
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

  return (
    <DatabaseContext.Provider
      value={{
        messages,
        getMessages,
        sendMessage,
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
