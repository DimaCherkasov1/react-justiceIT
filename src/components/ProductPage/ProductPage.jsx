import React from "react";
import styles from "./ProductPage.module.css"
import {ReactComponent as IceCream2} from "../../assets/Images/icecream2.svg";
import {ReactComponent as Plus} from "../../assets/Images/plus.svg";
import {ReactComponent as Minus} from "../../assets/Images/minus.svg";
import {ReactComponent as CartIcon} from "../../assets/Images/cart_white.svg";
import {Link} from "react-router-dom";

function ProductPage() {
  return (
      <div className={styles.content_product}>
        <div className="container">
          <div><Link to='/' className={styles.ahrefmain}>Main Page</Link> / <span className={styles.sspan}>Product Page</span></div>
        <div className={styles.row_product}>
          <div className={styles.img_product}>
            <IceCream2 />
          </div>
          <div className={styles.name_desk}>
          <div className={styles.key}><span>SKU: BX100BLK</span></div>
            <h1>Snow Tender Ice Cream</h1>
            <p>Description:</p>
            <p>Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.</p>

             <p>Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.</p>

            <div className={styles.price_count}>
            <span>243.00</span> <div className={styles.count}><Minus /> <span>1</span> <Plus /></div>
            </div>
            <div className={styles.button}>
              <button className={styles.btn}><CartIcon />Add to cart</button>
            </div>
          </div>
        </div>
          </div>
      </div>
  )
}

export default ProductPage;