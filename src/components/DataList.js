import React from 'react'
import styles from './DataList.module.scss'
import Message from './Message'

function DataList({ messages }) {
  return (
    <div className={styles.list}>
      <h3>Data</h3>
      {messages.map((msg, index) => (
        <Message message={msg} key={index} />
      ))}
    </div>
  )
}

export default DataList
