import React from "react";
import styles from "./Main.module.css"
import MainTitle from "./MainTitle/MainTitle";
import MainItems from "./MainItems/MainItems";


function Main(){
  return(
      <main className={styles.main}>
        <div className="container">
          <MainTitle />
          <MainItems />
        </div>
      </main>
  )
}

export default Main;