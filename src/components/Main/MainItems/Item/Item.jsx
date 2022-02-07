import React, {useState} from "react";
import styles from "./Item.module.css"
import {ReactComponent as IceCream2} from "../../../../assets/Images/icecream2.svg";
import {NavLink} from "react-router-dom";

function Item({name, id, price}) {
  return (
      <div className={styles.item}>
        <div className={styles.up_item}>
        <div className={styles.svg}>
          <IceCream2 />
        </div>
        </div>
        <div className={styles.name_cream}>
          <NavLink to={`/item/${id}`}>{name}</NavLink>
          <p>{price}</p>
        </div>
      </div>
  )
}

export default Item;