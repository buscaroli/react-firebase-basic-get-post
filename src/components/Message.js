import React from 'react'
import styles from './Message.module.scss'
import { FaTrashAlt, FaClipboard } from 'react-icons/fa'
import { useContext } from 'react'
import DatabaseContext from '../contexts/DatabaseContext'

function Message({ message }) {
  const { user } = useContext(DatabaseContext)

  return (
    <div className={styles.msg}>
      <div className={styles.msgTop}>
        <div className={styles.msgName}>{user.name}</div>
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
