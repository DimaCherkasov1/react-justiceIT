import React from "react";
import './SignIn.css';
import {Link} from "react-router-dom";

function SignIn({signIn, setSignIn}) {
    return (
        <div className={signIn ? 'modal active' : 'modal'} onClick={() => setSignIn(false)}>
            <div className='modal_content' onClick={e => e.stopPropagation()}>
                    <h2>Log in to your account</h2>
                <form>
                    <label className='email' htmlFor="email">Email
                        <input type="email" id='email' placeholder='Your email' />
                    </label>
                    <label className='password' htmlFor="password">Password
                        <input type="password" id='password' placeholder='Enter your password' />
                    </label>
                    <div className='btn-div'>
                        <button className='btn-register'>Register</button>
                    </div>
                    <div className='create-acc'>
                        <span>No account?</span> <a href='#'>Create on</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn;