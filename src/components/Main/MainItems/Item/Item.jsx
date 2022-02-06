import React, {useState} from "react";
import styles from "./Item.module.css"
import {ReactComponent as IceCream2} from "../../../../assets/Images/icecream2.svg";
import {Link} from "react-router-dom";

function Item() {
  return (
      <div className={styles.item}>
        <div className={styles.up_item}>
        <div className={styles.svg}>
          <IceCream2 />
        </div>
        </div>
        <div className={styles.name_cream}>
          <Link to='/item'>Snow Tender Ice Cream</Link>
          <p>$243.00</p>
        </div>
      </div>
  )
}

export default Item;