import React, { useState, useContext } from 'react'
import { v4 } from 'uuid'
import styles from './Form.module.scss'
import DatabaseContext from '../contexts/DatabaseContext'

function Form() {
  const { sendMessage } = useContext(DatabaseContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const formSubmissionHandler = (e) => {
    e.preventDefault()

    const date = new Date()
    const time = date.getTime()
    const id = String(v4())
    sendMessage({ name, email, text, time, id })

    setName('')
    setEmail('')
    setText('')
  }

  const nameHandler = (e) => {
    setName(e.target.value)
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const textHandler = (e) => {
    setText(e.target.value)
  }

  return (
    <form className={styles.form}>
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

      <label className={styles.formLabel} htmlFor="text">
        Text
      </label>
      <textarea
        onChange={textHandler}
        className={styles.formTextarea}
        value={text}
        type="text"
        id="text"
      />
      <button
        onClick={formSubmissionHandler}
        className={styles.btnAdd}
        type="submit"
      >
        Add
      </button>
    </form>
  )
}

export default Form
