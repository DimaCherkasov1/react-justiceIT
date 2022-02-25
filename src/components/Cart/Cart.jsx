import React, { useMemo, useState } from 'react'
import styles from './Cart.module.css'
import { NavLink } from 'react-router-dom'
import { ReactComponent as CartIcon } from '../../assets/Images/cart_white.svg'
import CartItem from './CartItem/CartItem'
import {Navigate} from "react-router";

function Cart({ arr, setArr, cards, setCards, setUsers, users, isAuth }) {
  const totalPrice = useMemo(
    () => arr?.reduce((acc, el) => acc + el.price * el.amount, 0),
    [arr]
  )
  console.log(isAuth)

  return (
      <>
      {!isAuth ? <Navigate to='/'/> : <div className={styles.content_cart}>
    <div className="container">
      <div>
        <NavLink to="/" className={styles.ahrefmain}>
          Main Page
        </NavLink>{' '}
        / <span className={styles.sspan}>Basket</span>
      </div>
      <div className={styles.title}>
        <h1>Basket</h1>
      </div>
      <div className={styles.row_basket}>
        <div className={styles.row_basket_main}>
          {arr?.map((el) => (
              <CartItem
                  setArr={setArr}
                  image={el.image}
                  amount={el.amount}
                  inCart={el.inCart}
                  key={el._id}
                  el={el}
                  name={el.name}
                  price={el.price}
                  countPrice={el.countPrice}
                  id={el._id}
              />
          ))}
        </div>
        <div className={styles.total_add}>
          <div className={styles.total}>
            <span>Sub total: </span> <span>${totalPrice}</span>
          </div>
          <div className={styles.button}>
            <button className={styles.btn}>
              <CartIcon />
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>}
      </>
  )
}

export default Cart
