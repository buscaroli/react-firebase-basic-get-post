import React from 'react'
import styles from './Form.module.scss'

function Form() {
  return (
    <form className={styles.form}>
      <label className={styles.formLabel} htmlFor="name">
        Name
      </label>
      <input className={styles.formInput} type="text" id="name" />

      <label className={styles.formLabel} htmlFor="age">
        Age
      </label>
      <input className={styles.formInput} type="number" id="age" />

      <label className={styles.formLabel} htmlFor="text">
        Text
      </label>
      <textarea className={styles.formTextarea} type="text" id="text" />
      <button className={styles.btnAdd} type="submit">
        Add
      </button>
    </form>
  )
}

export default Form
