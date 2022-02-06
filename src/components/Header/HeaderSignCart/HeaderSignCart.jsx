import React from "react";
import styles from "./HeaderSignCart.module.css";
import {ReactComponent as User} from "../../../assets/Images/user.svg";
import {ReactComponent as Cart} from "../../../assets/Images/cart_grad.svg";
import {Link} from "react-router-dom";


function HeaderSignCart({ setSignIn , setSignUp}) {
    return (
        <div className={styles.sign_cart}>
            <div><User/><span onClick={() => setSignUp(true)}> Sign Up </span> / <span onClick={() => setSignIn(true)}>Sign In</span></div>
            <div><Cart/> <Link to='/cart'>Cart</Link></div>
        </div>
    )
}

export default HeaderSignCart;