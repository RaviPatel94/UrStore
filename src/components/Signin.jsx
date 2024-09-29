import React from 'react'

export default function Signin() {
  return (
    <div className='signinbox'>
        <div className='brandbox'>
            <h1>Welcome to</h1>
            <div className='brandlogo'>
                <img src='src\images\logo.png'/>
                <span className='logotext'>UrStore</span>
            </div>
            <span className='branddisc'>Buy anything and everything</span>
            <p>don't have an account?</p>
            <button>Sign up</button>
        </div>
        <div className='inputs'>
        <h1>Sign in</h1>
        <h3>Email</h3>
        <input type="text" />
        <h3>password</h3>
        <input type="password" />
        <button>Sign in</button>
        <div>
            <a href="">Forgot</a>
            <div>
                <p>Remember me?</p>
                <input type="checkbox" />
            </div>
            
        </div>
        </div>
    </div>
  )
}
