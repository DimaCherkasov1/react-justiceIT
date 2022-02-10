import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ProductPage from './components/ProductPage/ProductPage'
import Cart from './components/Cart/Cart'
import Sign from './components/Sign/Sign'
import SignIn from './components/Sign/SignIn/SignIn'
import SignUp from './components/Sign/SignUp/SignUp'
import { useCallback, useState } from 'react'
import MockCards from './MockData/MainItem'

import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  const [cards, setCards] = useState(MockCards)
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [arr, setArr] = useState(() => {
    const cartItem = localStorage.getItem('cart')
    return JSON.parse(cartItem) ?? []
  })
  const [isAuth, setIsAuth] = useState(() => {
    const auth = localStorage.getItem('auth')
    return JSON.parse(auth).auth ?? false
  })
  console.log('===>isAuth', isAuth)
  const removeItem = useCallback(
    (id) => {
      const filterArr = arr.filter((x) => x.id !== id)
      setArr(filterArr)
      localStorage.setItem('cart', JSON.stringify(filterArr))
    },
    [arr]
  )

  const logout = () => {
    setIsAuth(false)
    localStorage.setItem('auth', JSON.stringify({ auth: false }))
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
        isAuth={isAuth}
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
              />
            }
          />
        </Routes>
        <Sign setIsOpen={setSignIn} active={signIn}>
          <SignIn setSignIn={setSignIn} setSignUp={setSignUp} />
        </Sign>
        <Sign setIsOpen={setSignUp} active={signUp}>
          <SignUp setSignIn={setSignIn} setSignUp={setSignUp} />
        </Sign>
      </div>
      <Footer />
    </div>
  )
}

export default App
