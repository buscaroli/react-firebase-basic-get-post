import React from 'react'
import { useState, useContext } from 'react'
import styles from './Signup.module.scss'
import DatabaseContext from '../contexts/DatabaseContext'

function Signup() {
  const { signup, login, logout } = useContext(DatabaseContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const nameHandler = (e) => {
    setName(e.target.value)
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password,
    }

    console.log('Signup.js - formSubmissionHandler -> ', user)
    signup(user)
    console.log('Signup.js - formSubmissionHandler -> ', user)
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className={styles.signup}>
      <form className={styles.signupForm}>
        <label className={styles.formLabel} htmlFor="name">
          Name
        </label>
        <input
          onChange={nameHandler}
          className={styles.formInput}
          value={name}
          type="text"
          id="name"
        />

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

export default Signup
