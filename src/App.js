import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import {useState} from "react";


import {Routes, Route} from "react-router-dom";


import './App.css';


function App() {
    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)
    return (
        <div className="wrapper">
            <Header sign={signIn} setSignIn={setSignIn} signUp={signUp} setSignUp={setSignUp}/>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/item' element={<ProductPage/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
                <SignIn signIn={signIn} setSignIn={setSignIn} />
                <SignUp signUp={signUp} setSignUp={setSignUp}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;