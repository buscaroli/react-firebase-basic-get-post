import React, { useContext, useEffect, useState } from 'react'
import styles from './Container.module.scss'
import DataList from './DataList'
import DatabaseContext from '../contexts/DatabaseContext'
import SignupLoginWrapper from './SignupLoginWrapper'
import { auth } from '../api/firebase'

function Container() {
  const { messages, getMessages, isLogged } = useContext(DatabaseContext)

  useEffect(() => {
    getMessages()
    console.log(auth)
  }, [isLogged])

  return (
    <main className={styles.main}>
      <SignupLoginWrapper />
      {isLogged && <DataList messages={messages} />}
    </main>
  )
}

export default Container
