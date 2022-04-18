import React, { useContext, useEffect } from 'react'
import styles from './Container.module.scss'
import Form from './Form'
import DataList from './DataList'
import DatabaseContext from '../contexts/DatabaseContext'

function Container() {
  const { messages, sendMessage, getMessages } = useContext(DatabaseContext)

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <main className={styles.main}>
      <Form />
      <DataList messages={messages} />
    </main>
  )
}

export default Container
