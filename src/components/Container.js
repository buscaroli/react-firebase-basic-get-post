import React, { useState, useEffect } from 'react'
import styles from './Container.module.scss'
import Form from './Form'
import DataList from './DataList'
import { db } from '../api/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

function Container() {
  const [messages, setMessages] = useState([
    {
      name: 'Your App',
      email: 'app@email.com',
      id: '12345',
      text: 'Add your First Message!',
    },
  ])

  // retrieve messages on first render and everytime there is a change
  //in messages
  // NB I am passing the db instead of the messages as
  // collection(db, 'messages') returns a new collection reference
  // everytime the component renders: tracking messages to useEffects
  // was leading to an infinite loop (and at me using 50K/day calls limit
  // with the free version of firebase within a few minutes 😭 )
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'messages'))
      let retrievedMsgs = []
      querySnapshot.forEach((doc) => {
        let newMsg = { ...doc.data() }
        retrievedMsgs.push(newMsg)
      })
      console.log(messages)
      setMessages(retrievedMsgs)
    }
    getData()
  }, [db])

  // send data to the server
  const sendData = async (data) => {
    try {
      await addDoc(collection(db, 'messages'), data)
    } catch (error) {
      console.error({ error })
    }
  }

  return (
    <main className={styles.main}>
      <Form onSubmitForm={sendData} />
      <DataList messages={messages} />
    </main>
  )
}

export default Container
