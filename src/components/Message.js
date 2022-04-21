import React from 'react'
import styles from './Message.module.scss'
import { FaTrashAlt, FaClipboard } from 'react-icons/fa'
import DatabaseContext from '../contexts/DatabaseContext'
import { useContext } from 'react'

function Message({ message }) {
  const { deleteMessage } = useContext(DatabaseContext)

  const onMsgDelete = (e) => {
    e.preventDefault()
    deleteMessage(message)
    // console.log('Message.js - onMsgDelete - message -> ', message)
  }

  return (
    <div className={styles.msg}>
      <div className={styles.msgTop}>
        <div className={styles.msgName}>{message.email}</div>
        <div>
          <FaClipboard className={styles.msgUpdate} />
          <FaTrashAlt onClick={onMsgDelete} className={styles.msgDelete} />
        </div>
      </div>

      <div className={styles.msgText}>{message.text}</div>
    </div>
  )
}

export default Message
