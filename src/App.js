import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ProductPage from './components/ProductPage/ProductPage'
import Cart from './components/Cart/Cart'
import Sign from './components/Sign/Sign'
import SignIn from './components/Sign/SignIn/SignIn'
import SignUp from './components/Sign/SignUp/SignUp'
import {Routers} from "./components/routes";
import {useCallback, useEffect, useState} from 'react'

import {Routes, Route} from 'react-router-dom'

import './App.css'
import axios from "axios";

function App() {
  const [cards, setCards] = useState([])
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [cart, setCart] = useState([])
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) ?? {})
  const [isAuth, setIsAuth] = useState(
      localStorage.getItem('token')
  )


  const [arr, setArr] = useState(() => {
    return  JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')).cart : []
  })


  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('users'))
  //   if (user) {
  //     setArr(users.cart)
  //   } else {
  //     setArr([])
  //   }
  // }, [users])

  useEffect(() => {
    axios.get('http://localhost:4000/api/product').then(response => {
      return setCards(response.data)
    })
  }, [])


  const logout = useCallback( () => {
    setIsAuth(false)
    setArr([])
    localStorage.removeItem('token')
    localStorage.removeItem('users')
    localStorage.removeItem('email')
  })


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
            <Route path="/" element={<Main cards={cards}/>}/>
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
                setArr={setArr}
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
        <Footer/>
      </div>
  )
}

export default App
