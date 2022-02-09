import React, { useState } from 'react'
import styles from './Item.module.css'
import { ReactComponent as IceCream2 } from '../../../../assets/Images/icecream2.svg'
import { NavLink } from 'react-router-dom'

function Item({ name, id, price }) {
  return (
    <div className={styles.item}>
      <NavLink to={`/item/${id}`}>
        <div className={styles.up_item}>
          <div className={styles.svg}>
            <IceCream2 />
          </div>
        </div>
        <div className={styles.name_cream}>
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
      </NavLink>
    </div>
  )
}

export default Item
