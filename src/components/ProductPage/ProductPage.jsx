import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ProductPage.module.css'
import { ReactComponent as IceCream2 } from '../../assets/Images/icecream2.svg'
import { ReactComponent as Plus } from '../../assets/Images/plus.svg'
import { ReactComponent as Minus } from '../../assets/Images/minus.svg'
import { ReactComponent as CartIcon } from '../../assets/Images/cart_white.svg'
import { ReactComponent as Done } from '../../assets/Images/done.svg'
import axios from "axios";
import jwt_decode from "jwt-decode";

function ProductPage({
  card,
  arr,
  setArr,
  setCard,
  isAuth,
  setIsAuth,
  users,
  setUsers,
  cart,
  setCart,
}) {
  const [amount, setAmount] = useState(card.amount)
  const [message, setMessage] = useState('')
  const [countPrice, setCountPrice] = useState(card.price)
  const [total, setTotal] = useState(0)
  const [email, setEmail] = useState(() => {
    return  JSON.parse(localStorage.getItem('users'))
  })
  useEffect(()=> {
    const cart = JSON.parse(localStorage.getItem('users')).cart
    setArr(cart)
  }, [])


  useEffect(() => {
    users && localStorage.getItem('users')
  }, [users])


  const addCard = async () => {
    try {
      const {data} = await axios.post('http://localhost:4001/api/cart', {
      ...email, card
      })
      setArr(data.cart)
      localStorage.setItem('users', JSON.stringify(data))
    } catch (e){
        alert(e)
    }

  }

  const handleMinus = () => {
    if (amount === 0)  return
    setAmount(prev => prev - 1)
    }


  const handlePlus = () => setAmount(prev => prev + 1)



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
          <div className={styles.row_img_key}>
            <div className={styles.img_product}>
              <img src={'http://localhost:4001' + card.image} alt="" />
            </div>
            <div className={styles.img_key}>
              <div className={styles.name_desk}>
                <div className={styles.key}>
                  <span>SKU: {card._id}</span>
                </div>
              </div>
              <h1>{card.name}</h1>
              <p className={styles.description}>Description:</p>
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
                {localStorage.getItem('token') && amount > 0 ? (
                  <button
                    className={styles.btn}
                    onClick={() => addCard(card._id)}
                  >
                    <CartIcon />
                    Add to cart
                  </button>
                ) : (
                  <button disabled={true} className={styles.btn_disable}>
                    <CartIcon />
                  </button>
                )}

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
    </div>
  )
}

export default ProductPage
