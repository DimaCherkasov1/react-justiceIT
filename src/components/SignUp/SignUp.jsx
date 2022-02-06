import React from "react";
import './SignUp.css';
import {Link} from "react-router-dom";

function SignUp({signUp, setSignUp}) {
    return (
        <div className={signUp ? 'modal active' : 'modal'} onClick={() => setSignUp(false)}>
            <div className='modal_content' onClick={e => e.stopPropagation()}>
                <h2>Log in to your account</h2>
                <form>
                    <label className='name' htmlFor="name">Name
                        <input type="name" id='name' placeholder='Your name'/>
                    </label>
                    <label className='email' htmlFor="email-up">Email
                        <input type="email" id='email-up' placeholder='Your email'/>
                    </label>
                    <label className='password' htmlFor="passwordUp">Password
                        <input type="password" id='passwordUp' placeholder='Enter your password'/>
                    </label>
                    <div className='btn-div'>
                        <button className='btn-register'>Register</button>
                    </div>
                    <div className='create-acc'>
                        <p>Do you already have an account?</p> <a href='#'>Sing in ?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;