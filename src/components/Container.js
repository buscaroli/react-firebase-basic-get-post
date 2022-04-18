import React, { useContext, useEffect } from 'react'
import styles from './Container.module.scss'
import Form from './Form'
import DataList from './DataList'
import DatabaseContext from '../contexts/DatabaseContext'
import Signin from './Signin'
import Login from './Login'
import { auth } from '../api/firebase'

function Container() {
  const { messages, getMessages } = useContext(DatabaseContext)

  useEffect(() => {
    getMessages()
    console.log(auth)
  }, [])

  return (
    <main className={styles.main}>
      <Form />
      <div>
        <DataList messages={messages} />
        <Signin />
        <Login />
      </div>
    </main>
  )
}

export default Container
