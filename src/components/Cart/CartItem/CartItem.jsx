import React from 'react'
import styles from './CartItem.module.css'
import { ReactComponent as IceCream2 } from '../../../assets/Images/icecream2.svg'
import { ReactComponent as Cross } from '../../../assets/Images/cross.svg'
import { Link } from 'react-router-dom'

function CartItem({ name, price, id }) {
  return (
    <div className={styles.row_close}>
      <div className={styles.img_name_basket}>
        <IceCream2 width="120px" height="96px" />
        <div>
          <Link to={`/item/${id}`}>{name}</Link>
          <p>1 pcs.</p>
        </div>
      </div>

      <div className={styles.count_cross}>
        <span>{price}</span>
        <Cross />
      </div>
    </div>
  )
}

export default CartItem
