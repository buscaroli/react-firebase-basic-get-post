import React from 'react'
import styles from './Message.module.scss'
import { FaTrashAlt, FaClipboard } from 'react-icons/fa'

function Message({ message }) {
  return (
    <div className={styles.msg}>
      <div className={styles.msgTop}>
        <div className={styles.msgName}>{message.email}</div>
        <div>
          <FaClipboard className={styles.msgUpdate} />
          <FaTrashAlt className={styles.msgDelete} />
        </div>
      </div>

      <div className={styles.msgText}>{message.text}</div>
    </div>
  )
}

export default Message
