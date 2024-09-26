import React from 'react'
import './CSS/loginsignup.css'

const loginSignUp = () => {

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an Account? <span> Then Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the Terms & Conditions and Privacy Policy</p>
                </div>
            </div>
            
        </div>
    )
}

export default loginSignUp