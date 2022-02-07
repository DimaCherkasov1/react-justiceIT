import React, { useState } from 'react'
import styles from './ProductPage.module.css'
import { ReactComponent as IceCream2 } from '../../assets/Images/icecream2.svg'
import { ReactComponent as Plus } from '../../assets/Images/plus.svg'
import { ReactComponent as Minus } from '../../assets/Images/minus.svg'
import { ReactComponent as CartIcon } from '../../assets/Images/cart_white.svg'
import { NavLink } from 'react-router-dom'

function ProductPage({ card, arr, setArr }) {
  console.log(arr)
  return (
    <div className={styles.content_product}>
      <div className="container">
        <div>
          <NavLink to="/" className={styles.href_main}>
            Main Page
          </NavLink>
          <span className={styles.sspan}> / Product Page</span>
        </div>
        <div className={styles.row_product}>
          <div className={styles.img_product}>
            <IceCream2 />
          </div>
          <div className={styles.name_desk}>
            <div className={styles.key}>
              <span>SKU: {card.id}</span>
            </div>
            <h1>Snow Tender Ice Cream</h1>
            <p>Description:</p>
            <p>{card.descriptionOne}</p>
            <p>{card.descriptionTwo}</p>
            <div className={styles.price_count}>
              <span>{card.price}</span>
              <div className={styles.count}>
                <Minus /> <span>1</span> <Plus />
              </div>
            </div>
            <div className={styles.button}>
              <button
                className={styles.btn}
                onClick={() => {
                  setArr([...arr, card])
                }}
              >
                <CartIcon />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
