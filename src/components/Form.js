import React, { useState, useContext, useEffect } from 'react'
import { v4 } from 'uuid'
import styles from './Form.module.scss'
import DatabaseContext from '../contexts/DatabaseContext'

function Form() {
  const { sendMessage, user } = useContext(DatabaseContext)

  const [text, setText] = useState('')

  const formSubmissionHandler = (e) => {
    e.preventDefault()

    const createdAt = String(Date.now())
    const msgId = String(v4())
    const owner = user.uid
    const email = user.email

    sendMessage({ text, createdAt, msgId, owner, email })
    console.log(
      'Form.js - formSumbissionHandler - sendMessage(data) -> ',
      text,
      createdAt,
      msgId,
      owner,
      email
    )
    setText('')
  }

  const textHandler = (e) => {
    setText(e.target.value)
  }

  return (
    <form className={styles.form}>
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
