import React, { useState } from 'react'
import styles from './Form.module.scss'

function Form({ onSubmitForm }) {
  const [name, setName] = useState('')
  const [validName, setValidName] = useState(true)
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [text, setText] = useState('')
  const [validText, setValidText] = useState(true)

  const formSubmissionHandler = (e) => {
    e.preventDefault()

    onSubmitForm({ name, email, text })

    setName('')
    setEmail('')
    setText('')
  }

  const nameHandler = (e) => {
    setName(e.target.value)

    name.length > 0 ? setValidName(true) : setValidName(false)
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    email.includes('@') && email.includes('.')
      ? setValidEmail(true)
      : setValidEmail(false)
  }

  const textHandler = (e) => {
    setText(e.target.value)

    text.length > 0 ? setValidText(true) : setValidText(false)
  }

  return (
    <form className={styles.form}>
      <label className={styles.formLabel} htmlFor="name">
        Name
      </label>
      <input
        onChange={nameHandler}
        className={`${styles.formInput} ${validName ? '' : styles.invalid}`}
        value={name}
        type="text"
        id="name"
      />

      <label className={styles.formLabel} htmlFor="email">
        Email
      </label>
      <input
        onChange={emailHandler}
        className={`${styles.formInput} ${validEmail ? '' : styles.invalid}`}
        value={email}
        type="text"
        id="email"
      />

      <label className={styles.formLabel} htmlFor="text">
        Text
      </label>
      <textarea
        onChange={textHandler}
        className={`${styles.formTextarea} ${validText ? '' : styles.invalid}`}
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
