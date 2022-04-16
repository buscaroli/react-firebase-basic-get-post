import React from 'react'
import styles from './Container.module.scss'
import Form from './Form'
import DataList from './DataList'

function Container() {
  return (
    <main className={styles.main}>
      <Form />
      <DataList />
    </main>
  )
}

export default Container
