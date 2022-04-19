import React from 'react'
import { useState, useContext } from 'react'
import styles from './Login.module.scss'
import DatabaseContext from '../contexts/DatabaseContext'

import Signup from './Signup'

function Login({ signup }) {
  const { login } = useContext(DatabaseContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()

    const user = {
      email,
      password,
    }

    login(user)

    setEmail('')
    setPassword('')
  }

  const signupLinkHandler = (e) => {
    e.preventDefault()

    signup(e)
  }

  return (
    <div className={styles.login}>
      <h3 className={styles.loginHeader}>Login</h3>
      <form className={styles.loginForm}>
        <label className={styles.formLabel} htmlFor="email">
          Email
        </label>
        <input
          onChange={emailHandler}
          className={styles.formInput}
          value={email}
          type="text"
          id="email"
        />

        <label className={styles.formLabel} htmlFor="password">
          Password
        </label>
        <input
          onChange={passwordHandler}
          className={styles.formPassword}
          value={password}
          type="password"
          id="password"
        />

        <button onClick={signupLinkHandler} className={styles.signupLink}>
          SignUp instead
        </button>

        <button
          onClick={formSubmissionHandler}
          className={styles.btnAdd}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default Login
