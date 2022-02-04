import React from "react";
import styles from './Header.module.css';
import HeaderSignCart from "./HeaderSignCart/HeaderSignCart";
import {ReactComponent as Logo} from "../../assets/Images/logo.svg";


function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.container}>
        <Logo />
        <HeaderSignCart />
        </div>
      </header>
  )
}


export default Header;