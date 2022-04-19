import React from 'react'
import { Link } from 'react-router-dom'
import style from './Links.module.scss'
import { useContext } from 'react'
import DatabaseContext from '../contexts/DatabaseContext'
import { auth } from '../api/firebase'

const linkArray = [
  { text: 'Home', path: '/home' },
  { text: 'About', path: '/about' },
  { text: 'Contacts', path: '/contacts' },
]

function Links() {
  const { login, logout, signup, isLogged } = useContext(DatabaseContext)

  // const loginHandler = (e) => {
  //   e.preventDefault()
  // }

  // const signupHandler = (e) => {
  //   e.preventDefault()

  // }

  const logoutHandler = (e) => {
    e.preventDefault()

    logout()
    console.log(auth)
  }

  return (
    <div>
      {linkArray.map((link, index) => {
        return (
          <p className={style.headerLinks} key={index}>
            {link.text}
          </p>
        )
      })}
      {/* {!isLogged && (
        <button onClick={loginHandler} className={style.btn}>
          Login
        </button>
      )} */}

      {/* {!isLogged && (
        <button onClick={signupHandler} className={style.btn}>
          SignUp
        </button>
      )} */}

      {isLogged && (
        <button onClick={logoutHandler} className={style.btn}>
          Logout
        </button>
      )}
    </div>
  )
}

export default Links
