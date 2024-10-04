import React from 'react'
import { useEffect } from 'react'

export default function Signin() {
  return (
    <div className='signinbox'>
        <div className='inputs' id='signup'>
            <h1>Sign in</h1>
            <h3>Email</h3>
            <input type="text" className='credentials'/>
            <h3>password</h3>
            <input type="password" className='credentials' />
            <button>Sign in</button>
            <div className='helpsignin'>
                <a href="">Forgot password</a>
                <div className='remember'>
                    <p>Remember me?</p>
                    <input type="checkbox" />
                </div>
                
            </div>
        </div>
        <div className='brandbox'>
            <h1>Welcome to</h1>
            <div className='brandlogo'>
                <img src='src\images\logo.png'/>
                <span className='logotext'>UrStore</span>
            </div>
            <span className='branddisc'>Buy anything and everything</span>
            <p>don't have an account?</p>
            <button id='signbtn'>Sign up</button>
        </div>
        <div className='inputs' id='signin'>
            <h1>Sign in</h1>
            <h3>Email</h3>
            <input type="text" className='credentials'/>
            <h3>password</h3>
            <input type="password" className='credentials' />
            <button>Sign in</button>
            <div className='helpsignin'>
                <a href="">Forgot password</a>
                <div className='remember'>
                    <p>Remember me?</p>
                    <input type="checkbox" />
                </div>
                
            </div>
        </div>
    </div>
  )
}
