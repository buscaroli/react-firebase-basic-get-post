import React, { useState } from 'react'
import styles from './DataList.module.scss'
import Message from './Message'

let fakeMsgs = [
  { name: 'Matt', text: 'Wonderful day today, hello everyone!', key: '001' },
  {
    name: 'Mark',
    text: 'Chuck Norris can play the violin with a piano.',
    key: '002',
  },
  { name: 'Susan', text: 'Chuck Norris can speak Braille.', key: '003' },
  { name: 'Matt', text: 'Wonderful day today, hello everyone!', key: '004' },
  {
    name: 'Mark',
    text: 'Chuck Norris can play the violin with a piano.',
    key: '005',
  },
  { name: 'Susan', text: 'Chuck Norris can speak Braille.', key: '006' },
]

function DataList({ messages }) {
  return (
    <div className={styles.list}>
      <h3>Data</h3>
      {messages.map((msg, index) => {
        return <Message message={msg} key={index} />
      })}
    </div>
  )
}

export default DataList
