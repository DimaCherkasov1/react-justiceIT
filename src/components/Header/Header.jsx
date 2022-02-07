import React from 'react'
import styles from './Header.module.css'
import HeaderSignCart from './HeaderSignCart/HeaderSignCart'
import { ReactComponent as Logo } from '../../assets/Images/logo.svg'
import { NavLink } from 'react-router-dom'

function Header({ signIn, setSignIn, signUp, setSignUp }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/">
          {' '}
          <Logo />
        </NavLink>
        <HeaderSignCart
          signIn={signIn}
          setSignIn={setSignIn}
          signUp={signUp}
          setSignUp={setSignUp}
        />
      </div>
    </header>
  )
}

export default Header
