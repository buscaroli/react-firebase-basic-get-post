import React from 'react'
import styles from './SignupLoginWrapper.module.scss'
import Signup from './Signup'
import Login from './Login'
import Form from './Form'
import { useContext, useState, useEffect } from 'react'
import DatabaseContext from '../contexts/DatabaseContext'

function SignupLoginWrapper({ title }) {
  const { isLogged } = useContext(DatabaseContext)
  const [signupShows, setSignupShows] = useState(false)
  const [loginShows, setLoginShows] = useState(true)

  const onSignup = (e) => {
    e.preventDefault()

    setSignupShows(true)
    setLoginShows(false)
  }

  const afterSignup = (e) => {
    e.preventDefault()

    setSignupShows(false)
    setLoginShows(false)
  }

  useEffect(() => {
    console.log('SignupWrapper - signupShows -> ', signupShows)
  }, [signupShows])

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>{title}</h3>
      {!isLogged && loginShows && <Login signup={onSignup} />}
      {!isLogged && signupShows && <Signup signedup={afterSignup} />}
      {isLogged && !signupShows && <Form />}
    </div>
  )
}

export default SignupLoginWrapper
