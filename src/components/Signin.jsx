import React from 'react'
import { useEffect , useState , useCallback} from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
    const [signbtn , btnClicked]=useState(false)
    const [value1, setValue1]=useState("flex")
    const [value2,setValue2]=useState("none")
    const [btnlbl,setbtn]=useState("Signup")
    const [dont,setdont]=useState("Don't")
    const Change=()=>{
        setValue1((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
        setValue2((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
        setbtn((prevDisplay) => (prevDisplay === 'Signup' ? 'Signin' : 'Signup'));
        setdont((prevDisplay) => (prevDisplay === "Don't" ? '' : "Don't"));
        console.log(value1,value2)
    }
  return (
    <div className='signinbox'> 
        <div className='inputs' id='signup' style={{display:value2}
            }>
            <h1>Sign Up</h1>
            <h3>Name</h3>
            <input type="text" className='credentials' />
            <h3>Email</h3>
            <input type="email" className='credentials'/>
            <h3>password</h3>
            <input type="password" className='credentials' />
            <Link to="/questions" className='navlink'>
            <button>
                Sign Up
            </button>
            </Link>
        </div>
        <div className='brandbox'>
            <h1>Welcome to</h1>
            <div className='brandlogo'>
                <img src='\images\logo.png'/>
                <span className='logotext'>UrStore</span>
            </div>
            <span className='branddisc'>Buy anything and everything</span>
            <p>{dont} have an account?</p>
            <button id='signbtn' onClick={() => {btnClicked((prev) => !prev); Change(); }}>{btnlbl}</button>
        </div>
        <div className='inputs' id='signin' style={{display:value1}}>
            <h1>Sign in</h1>
            <h3>Email</h3>
            <input type="text" className='credentials'/>
            <h3>password</h3>
            <input type="password" className='credentials' />
            <Link to="/" className='navlink'>
            <button>
                Sign in
            </button>
            </Link>
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
