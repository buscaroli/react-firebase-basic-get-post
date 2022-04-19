import React from 'react'
import styles from './DataList.module.scss'
import Message from './Message'

function DataList({ messages }) {
  console.log('DataList.js - messages -> ', messages)
  return (
    <div className={styles.list}>
      <h3>Message Board</h3>
      {messages.map((msg) => (
        <Message message={msg} key={msg.id} />
      ))}
    </div>
  )
}

export default DataList
