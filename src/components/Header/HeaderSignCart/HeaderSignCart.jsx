import React from "react";
import styles from "./HeaderSignCart.module.css";
import {ReactComponent as User} from "../../../assets/Images/user.svg";
import {ReactComponent as Cart} from "../../../assets/Images/cart_grad.svg";


function HeaderSignCart(){
  return(
      <div className={styles.sign_cart}>
        <div><User /> <span>Sign in / Sign Up</span></div> <div> <Cart /> <span>Cart</span> </div>
      </div>
  )
}

export default HeaderSignCart;