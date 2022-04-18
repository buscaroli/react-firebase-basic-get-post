import React from 'react'
import { useState } from 'react'
import styles from './Login.module.scss'

function Login() {
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

    const date = new Date()
    const time = date.getTime()

    setEmail('')
    setPassword('')
  }

  return (
    <div className={styles.login}>
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
          type="text"
          id="password"
        />

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
