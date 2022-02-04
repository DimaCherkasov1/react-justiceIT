import {useState} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


import './App.css';
import ProductPage from "./components/ProductPage/ProductPage";


function App() {

  return (
      <div className="wrapper">
            <Header/>
        <div className="content">
            {/*<Main/>*/}
            <ProductPage />
        </div>
        <Footer/>
      </div>
  );
}

export default App;