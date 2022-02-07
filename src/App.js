import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ProductPage from './components/ProductPage/ProductPage'
import Cart from './components/Cart/Cart'
import Sign from './components/Sign/Sign'
import SignIn from './components/Sign/SignIn/SignIn'
import SignUp from './components/Sign/SignUp/SignUp'
import { useState } from 'react'
import cards from './MockData/MainItem'

import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [arr, setArr] = useState([])
  return (
    <div className="wrapper">
      <Header
        signIn={signIn}
        setSignIn={setSignIn}
        signUp={signUp}
        setSignUp={setSignUp}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main cards={cards} />} />
          {cards.map((card) => (
            <Route
              key={card.id}
              path={`/item/${card.id}`}
              element={<ProductPage card={card} arr={arr} setArr={setArr} />}
            />
          ))}
          <Route
            path="/cart"
            element={<Cart cards={cards} arr={arr} setArr={setArr} />}
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
