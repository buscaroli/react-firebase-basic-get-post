import React, { useState, useEffect } from 'react'
import styles from './Container.module.scss'
import Form from './Form'
import DataList from './DataList'
import { db } from '../api/firebase'
import { collection, getDocs, addDoc, orderBy } from 'firebase/firestore'

function Container() {
  const [messages, setMessages] = useState([])

  // retrieve messages on first render and everytime there is a change
  //in messages
  // NB I am not passing the message var as
  // collection(db, 'messages') returns a new collection reference
  // everytime the component renders: tracking messages with useEffects
  // was leading to an infinite loop (and at me using 50K/day get calls
  // limit with the free version of firebase within a few minutes 😭 ).
  // If you disconnect the server but keep the page open, you'll see that
  // firebase is connecting via WebSocket, this could be the reason!
  const getData = async () => {
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
      console.log('sorted: ', retrievedMsgs)
      setMessages(retrievedMsgs)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  // send data to the server
  const sendData = async (data) => {
    try {
      await addDoc(collection(db, 'messages'), data)
      await getData()
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
