import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ProductPage from './components/ProductPage/ProductPage'
import Cart from './components/Cart/Cart'
import Sign from './components/Sign/Sign'
import SignIn from './components/Sign/SignIn/SignIn'
import SignUp from './components/Sign/SignUp/SignUp'
import { useCallback, useEffect, useState } from 'react'
import MockCards from './MockData/MainItem'

import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import cart from './components/Cart/Cart'

function App() {
  const [cards, setCards] = useState(MockCards)
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [auth, setAuth] = useState(() => localStorage.getItem('token'))
  const [arr, setArr] = useState(
    () =>
      (auth &&
        JSON.parse(localStorage.getItem(localStorage.getItem('carts')))[
          auth
        ]) ??
      []
  )

  const removeItem = useCallback(
    (id) => {
      const filterArr = arr.filter((x) => x.id !== id)
      setArr(filterArr)
    },
    [arr]
  )

  useEffect(() => {
    const carts = localStorage.getItem('carts')
    !carts && localStorage.setItem('carts', JSON.stringify([]))
  }, [])

  useEffect(() => {
    if (auth) {
      const allCarts = JSON.parse(localStorage.getItem('carts'))
      const currentCart = allCarts.find((cart) => cart[auth])

      if (currentCart[auth].length > 0) {
        const newCarts = allCarts.map((cart) => {
          if (cart[auth] === auth) return { [auth]: [...arr] }

          return cart
        })
        const newAllCart = allCarts.filter((cart) => !cart[auth])
        localStorage.setItem('carts', JSON.stringify([newCarts]))
      } else {
        const newCarts = [...allCarts, { [auth]: [...arr] }]
        localStorage.setItem('carts', JSON.stringify(newCarts))
      }
    }
  }, [arr])

  const logout = () => {
    setAuth('')
    localStorage.removeItem('token')
  }

  return (
    <div className="wrapper">
      <Header
        arr={arr}
        setArr={setArr}
        signIn={signIn}
        setSignIn={setSignIn}
        signUp={signUp}
        setSignUp={setSignUp}
        isAuth={auth}
        logout={logout}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main cards={cards} />} />
          {cards?.map((card, index) => (
            <Route
              key={card.id}
              path={`/item/${card.id}`}
              element={
                <ProductPage
                  isAuth={auth}
                  setIsAuth={setAuth}
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
                removeItem={removeItem}
                setCards={setCards}
                cards={cards}
                arr={arr}
                setArr={setArr}
                isAuth={auth}
              />
            }
          />
          )
        </Routes>
        <Sign setIsOpen={setSignIn} active={signIn}>
          <SignIn
            setIsAuth={setAuth}
            setSignIn={setSignIn}
            setSignUp={setSignUp}
          />
        </Sign>
        <Sign setIsOpen={setSignUp} active={signUp}>
          <SignUp
            setIsAuth={setAuth}
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
