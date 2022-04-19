import React from 'react'
import Logo from './Logo'
import Links from './Links'
import HamburgerMenu from './HamburgerMenu'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Links />
      <HamburgerMenu />
    </nav>
  )
}

export default Navbar
