import React from 'react'
import SignIn from '../SignIn/SignIn'

function SignUp({ setSignIn, setSignUp }) {
  function SignInTo() {
    setSignUp(false)
    return setSignIn(true)
  }

  return (
    <>
      <h2>Create an account</h2>
      <form>
        <label className="name" htmlFor="name">
          Name
          <input type="name" id="name" placeholder="Your name" />
        </label>
        <label className="email" htmlFor="email-up">
          Email
          <input type="email" id="email-up" placeholder="Your email" />
        </label>
        <label className="password" htmlFor="passwordUp">
          Password
          <input
            type="password"
            id="passwordUp"
            placeholder="Enter your password"
          />
        </label>
        <div className="btn-div">
          <button className="btn-register">Register</button>
        </div>
        <div className="create-acc">
          <p>Do you already have an account?</p>{' '}
          <a onClick={() => SignInTo()}>Sing in</a>
        </div>
      </form>
    </>
  )
}

export default SignUp
