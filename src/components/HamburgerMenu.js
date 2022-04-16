import React from 'react'
import { FaBars } from 'react-icons/fa'
import styles from './HamburgerMenu.module.scss'

function HamburgerMenu() {
  return <FaBars className={styles.hamMenu} />
}

export default HamburgerMenu
