import React from 'react'
import { Link } from 'react-router-dom'
import style from './Links.module.scss'

const linkArray = [
  { text: 'Home', path: '/home' },
  { text: 'About', path: '/about' },
  { text: 'Contacts', path: '/contacts' },
]

function Links() {
  return (
    <div>
      {linkArray.map((link, index) => {
        return (
          <Link className={style.headerLinks} key={index} to={link.path}>
            {link.text}
          </Link>
        )
      })}
      <Link className={style.headerLinks} to={'/login'}>
        Login
      </Link>
      <Link className={style.headerLinks} to={'/logout'}>
        Logout
      </Link>
      <Link className={style.headerLinks} to={'/signup'}>
        Signup
      </Link>
    </div>
  )
}

export default Links
