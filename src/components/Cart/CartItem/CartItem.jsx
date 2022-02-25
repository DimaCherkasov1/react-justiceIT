import React, { useState } from 'react'
import styles from './CartItem.module.css'
import { ReactComponent as IceCream2 } from '../../../assets/Images/icecream2.svg'
import { ReactComponent as Cross } from '../../../assets/Images/cross.svg'
import { NavLink } from 'react-router-dom'
import axios from "axios";

function CartItem({ amount, name, price, id, image, setArr }) {

  const [email, setEmail] = useState(() => {
    return  JSON.parse(localStorage.getItem('users')).email
  })

    const cart = JSON.parse(localStorage.getItem('users')).cart


  const removeItem = async (id) => {
        try {
          console.log(email)
          console.log(cart)
          const {data} = await axios.delete('http://localhost:4001/api/cart',{
            headers:{},
            data:{email, id}
          })
          localStorage.setItem('users', JSON.stringify(data))
          setArr(data.cart)
        } catch (e){
          alert(e)
        }
      }

  return (
    <div className={styles.row_close}>
      <div className={styles.img_name_basket}>
        <img src={'http://localhost:4001' + image} alt="ice cream" />
        <div>
          <NavLink to={`/item/${id}`}>{name}</NavLink>
          <p>{amount} pcs.</p>
        </div>
      </div>

      <div className={styles.count_cross}>
        <span>${price * amount}</span>
        <Cross onClick={() =>removeItem(id)} />
      </div>
    </div>
  )
}

export default CartItem
