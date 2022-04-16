import React from 'react'
import Logo from './Logo'
import Links from './Links'
import HamburgerMenu from './HamburgerMenu'
import { BrowserRouter } from 'react-router-dom'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <BrowserRouter>
      <navbar className={styles.navbar}>
        <Logo />
        <Links />
        <HamburgerMenu />
      </navbar>
    </BrowserRouter>
  )
}

export default Navbar
