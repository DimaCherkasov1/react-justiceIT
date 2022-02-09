import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ProductPage.module.css'
import { ReactComponent as IceCream2 } from '../../assets/Images/icecream2.svg'
import { ReactComponent as Plus } from '../../assets/Images/plus.svg'
import { ReactComponent as Minus } from '../../assets/Images/minus.svg'
import { ReactComponent as CartIcon } from '../../assets/Images/cart_white.svg'
import { ReactComponent as Done } from '../../assets/Images/done.svg'

function ProductPage({ card, arr, setArr, setCard }) {
  const [amount, setAmount] = useState(1)
  const [message, setMessage] = useState('')
  const [countPrice, setCountPrice] = useState(card.price)
  const [total, setTotal] = useState(0)

  const addCard = () => {
    if (!!arr.find((el) => el.id === card.id)) {
      setArr(
        arr.map((elem) => {
          if (elem.id === card.id) {
            return {
              ...elem,
              amount: elem.amount + amount,
              countPrice: elem.countPrice,
              total: elem.total,
            }
          }
          return elem
        })
      )
    } else {
      setArr([...arr, { ...card, amount, countPrice, total }])
      setMessage('Added to cart')
    }
  }

  const handleMinus = () => {
    if (amount === 1) {
      setAmount(1)
    } else {
      setAmount(amount - 1)
      setCountPrice(countPrice - card.price)
    }
  }

  const handlePlus = () => {
    setAmount(amount + 1)
    setCountPrice(countPrice + card.price)
  }

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
              <span>${countPrice}</span>
              <div className={styles.count}>
                <div>
                  <Minus onClick={() => handleMinus()} />
                </div>{' '}
                <span>{amount}</span>
                <div>
                  <Plus onClick={() => handlePlus()} />
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <button className={styles.btn} onClick={() => addCard()}>
                <CartIcon />
                Add to cart
              </button>
              {message && (
                <div className={styles.active}>
                  <Done />
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
