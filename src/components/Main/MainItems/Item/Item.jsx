import React, {useState} from "react";
import styles from "./Item.module.css"
import {ReactComponent as IceCream2} from "../../../../assets/Images/icecream2.svg";

function Item() {
  return (
      <div className={styles.item}>
        <div className={styles.up_item}>
        <div className={styles.svg}>
          <IceCream2 />
        </div>
        </div>
        <div className={styles.name_cream}>
          <p>Snow Tender Ice Cream</p>
          <p>$243.00</p>
        </div>
      </div>
  )
}

export default Item;