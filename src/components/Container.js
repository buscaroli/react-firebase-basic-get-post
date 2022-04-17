import React, { useState, useEffect } from 'react'
import styles from './Container.module.scss'
import Form from './Form'
import DataList from './DataList'
import { db } from '../api/firebase'
import { collection, getDocs } from 'firebase/firestore'

function Container() {
  const [messages, setMessages] = useState([
    {
      name: 'Your App',
      email: 'app@email.com',
      id: '12345',
      text: 'Add your First Message!',
    },
  ])

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'messages'))
      let retrievedMsgs = []
      querySnapshot.forEach((doc) => {
        let newMsg = { ...doc.data() }
        retrievedMsgs.push(newMsg)
        console.log('Container - newMsg ->', newMsg)
      })
      console.log('Container - retievedMessages ->', retrievedMsgs)
      setMessages(retrievedMsgs)
    }
    getData()
  }, [])

  const sendData = (data) => {
    console.log(data)
    setMessages([...messages, data])
  }

  return (
    <main className={styles.main}>
      <Form onSubmitForm={sendData} />
      <DataList messages={messages} />
    </main>
  )
}

export default Container
