import React, {useEffect} from 'react'
import styles from './Main.module.css'
import MainTitle from './MainTitle/MainTitle'
import MainItems from './MainItems/MainItems'
import axios from "axios";

function Main({ cards }) {

  return (
    <main className={styles.main}>
      <div className="container">
        <MainTitle />
        <div className={styles.columns}>
          {cards.map((item) => {
            return (
              <MainItems
                image={item.image}
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Main
