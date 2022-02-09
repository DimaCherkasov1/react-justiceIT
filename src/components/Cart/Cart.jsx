import React, { useState } from 'react'
import styles from './Cart.module.css'
import { NavLink } from 'react-router-dom'
import { ReactComponent as CartIcon } from '../../assets/Images/cart_white.svg'
import CartItem from './CartItem/CartItem'

function Cart({ arr, setArr, cards, setCards, removeItem }) {
  const totalPrice = arr.reduce((acc, el) => {
    return acc + el.price * el.amount
  }, 0)

  return (
    <div className={styles.content_cart}>
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
            {arr?.map((el) => {
              return (
                <CartItem
                  removeItem={removeItem}
                  amount={el.amount}
                  inCart={el.inCart}
                  key={el.id}
                  el={el}
                  name={el.name}
                  price={el.price}
                  countPrice={el.countPrice}
                  id={el.id}
                />
              )
            })}
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
    </div>
  )
}

export default Cart
