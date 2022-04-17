import React, { useState } from 'react'
import styles from './Container.module.scss'
import Form from './Form'
import DataList from './DataList'
import { db } from '../api/firebase'

function Container() {
  const [messages, setMessages] = useState([
    {
      name: 'Your App',
      email: 'app@email.com',
      id: '12345',
      text: 'Add your First Message!',
    },
  ])

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
