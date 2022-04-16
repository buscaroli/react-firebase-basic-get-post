import React from 'react'
import styles from './Message.module.scss'

function Message({ message }) {
  return (
    <div className={styles.msg}>
      <div className={styles.msgName}>{message.name}</div>
      <div className={styles.msgText}>{message.text}</div>
    </div>
  )
}

export default Message
