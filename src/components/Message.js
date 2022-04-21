import React from 'react'
import styles from './Message.module.scss'
import { FaTrashAlt } from 'react-icons/fa'
import DatabaseContext from '../contexts/DatabaseContext'
import { useContext } from 'react'

function Message({ message }) {
  const { deleteMessage } = useContext(DatabaseContext)

  const onMsgDelete = (e) => {
    e.preventDefault()
    deleteMessage(message)
  }

  // const onMsgUpdate = (e) => {
  //   e.preventDefault()

  //   updateMessage(message)
  // }

  return (
    <div className={styles.msg}>
      <div className={styles.msgTop}>
        <div className={styles.msgName}>{message.email}</div>
        <div>
          {/* <FaClipboard onClick={onMsgUpdate} className={styles.msgUpdate} /> */}
          <FaTrashAlt onClick={onMsgDelete} className={styles.msgDelete} />
        </div>
      </div>

      <div className={styles.msgText}>{message.text}</div>
    </div>
  )
}

export default Message
