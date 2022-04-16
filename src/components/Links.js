import React from 'react'
import { Link } from 'react-router-dom'
import style from './Links.module.scss'

const linkArray = [
  { text: 'Home', path: '/home' },
  { text: 'Where', path: '/where' },
  { text: 'Why', path: '/why' },
  { text: 'Who', path: '/who' },
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
    </div>
  )
}

export default Links
