import React from 'react'

function SignIn({ setSignIn, setSignUp }) {
  function signUpTo() {
    setSignIn(false)
    setSignUp(true)
  }

  return (
    <>
      <h2>Log in to your account</h2>
      <form>
        <label className="email" htmlFor="email">
          Email
          <input type="email" id="email" placeholder="Your email" />
        </label>
        <label className="password" htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </label>
        <div className="btn-div">
          <button className="btn-register">Register</button>
        </div>
        <div className="create-acc">
          <span>No account?</span> <a onClick={signUpTo}>Create on</a>
        </div>
      </form>
    </>
  )
}

export default SignIn
