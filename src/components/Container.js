import React, { useState } from 'react'
import styles from './Container.module.scss'
import Form from './Form'
import DataList from './DataList'

function Container() {
  const [messages, setMessages] = useState([
    { name: 'Your App', text: 'Enter your first text!' },
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
