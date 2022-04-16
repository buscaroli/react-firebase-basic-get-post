import React from 'react'
import styles from './DataList.module.scss'
import Message from './Message'

let fakeMsgs = [
  { name: 'Matt', text: 'Wonderful day today, hello everyone!' },
  { name: 'Mark', text: 'Chuck Norris can play the violin with a piano.' },
  { name: 'Susan', text: 'Chuck Norris can speak Braille.' },
  { name: 'Matt', text: 'Wonderful day today, hello everyone!' },
  { name: 'Mark', text: 'Chuck Norris can play the violin with a piano.' },
  { name: 'Susan', text: 'Chuck Norris can speak Braille.' },
]

function DataList() {
  return (
    <div className={styles.list}>
      <h3>Data</h3>
      {fakeMsgs.map((msg) => {
        return <Message message={msg} />
      })}
    </div>
  )
}

export default DataList
