import React from 'react'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as CartIcon } from '../../assets/Images/cart_white.svg'
import CartItem from './CartItem/CartItem'

function Cart({ arr, setArr }) {
  console.log(arr)
  return (
    <div className={styles.content_cart}>
      <div className="container">
        <div>
          <Link to="/" className={styles.ahrefmain}>
            Main Page
          </Link>{' '}
          / <span className={styles.sspan}>Basket</span>
        </div>
        <div className={styles.title}>
          <h1>Basket</h1>
        </div>
        <div className={styles.row_basket}>
          <div className={styles.row_basket_main}>
            {arr.map((el) => {
              return (
                <CartItem
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  id={el.id}
                />
              )
            })}
          </div>
          <div className={styles.total_add}>
            <div className={styles.total}>
              <span>Sub total: </span> <span>$3,629.00</span>
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
