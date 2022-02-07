import React from "react";
import styles from "./MainItems.module.css"
import Item from "./Item/Item";


function MainItems({name, id, price}) {
  // const [product, setProducts] = useState([
  //   {name: 'Snow Tender Ice Cream', price: '$243.00'}
  // ])
  return (
      <div className={styles.col_items}>
        <Item name={name} id={id} price={price}/>
      </div>
  )
}

export default MainItems;