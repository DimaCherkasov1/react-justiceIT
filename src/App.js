import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ProductPage from './components/ProductPage/ProductPage'
import Cart from './components/Cart/Cart'
import Sign from './components/Sign/Sign'
import SignIn from './components/Sign/SignIn/SignIn'
import SignUp from './components/Sign/SignUp/SignUp'
import {Routers} from "./components/routes";
import { useCallback, useEffect, useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import './App.css'
import axios from "axios";

function App() {
  const [cards, setCards] = useState([])
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [cart, setCart] = useState([])
  const [users, setUsers] = useState(()=> JSON.parse(localStorage.getItem('users')) ?? {})
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem(localStorage.getItem('token')))
  )


  const [arr, setArr] = useState(() => {
    if(JSON.parse(localStorage.getItem('users'))){
      const cart = JSON.parse(localStorage.getItem('users')).cart
      return cart
    }  else {
      return []
    }
  })

  useEffect(() => {
    if (isAuth) {

      setArr(users.cart)
    }
  }, [isAuth])

useEffect(() => {
  axios.get('http://localhost:4001/api/product').then(response =>{
    return setCards(response.data)
  })
}, [])






  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('token')
    localStorage.removeItem('users')
    localStorage.removeItem('email')
  }

  // const check = async () => {
  //   const {data} = await axios.get('http://localhost:4001/api/auth/auth', {headers:{
  //     'authorization':localStorage.getItem('token')
  //     }})
  // }
  //
  // useEffect(() => {
  //     check().then(data => {
  //       setIsAuth(true)
  //     })
  // }, [])


  return (
    <div className="wrapper">
      <Header
        arr={arr}
        setArr={setArr}
        signIn={signIn}
        setSignIn={setSignIn}
        signUp={signUp}
        setSignUp={setSignUp}
        isAuth={isAuth}
        logout={logout}
      />
      <div className="content">
        <Routes>
          {/*{Routers.map(({path, Component}) =>*/}
          {/*  <Route key={path} path={path} component={Component} />*/}
          {/*)}*/}
          <Route path="/" element={<Main cards={cards} />} />
          {cards?.map((card, index) => (
            <Route
              key={card._id}
              path={`/item/${card._id}`}
              element={
                <ProductPage
                    cart={cart}
                  setCart={setCart}
                  users={users}
                  setUsers={setUsers}
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  card={card}
                  arr={arr}
                  setArr={setArr}
                  setCard={setCards}
                />
              }
            />
          ))}
          <Route
            path="/cart"
            element={
              <Cart
                  isAuth={isAuth}
                setCards={setCards}
                cards={cards}
                arr={arr}
                setArr={setArr}
              />
            }
          />
        </Routes>
        <Sign setIsOpen={setSignIn} active={signIn}>
          <SignIn
              cart={cart}
            users={users}
            setUsers={setUsers}
            setIsAuth={setIsAuth}
            setSignIn={setSignIn}
            setSignUp={setSignUp}
          />
        </Sign>
        <Sign setIsOpen={setSignUp} active={signUp}>
          <SignUp
            cart={cart}
            setCart={setCart}
            users={users}
            setUsers={setUsers}
            setIsAuth={setIsAuth}
            setSignIn={setSignIn}
            setSignUp={setSignUp}
          />
        </Sign>
      </div>
      <Footer />
    </div>
  )
}

export default App
