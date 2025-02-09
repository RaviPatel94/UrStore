import React, { useState } from 'react'
import { Herobanner } from './components/Herobanner'
import { Menu } from './components/Menu'
import './App.css'
import Footer from './components/Footer'
import Signin from './components/Signin'
import Navbar from './components/navbar'

function App() {
  
  return (
    <div className='whole'>
      <Navbar/>
      <Herobanner />
      <Menu/>
      <Footer/>
      <Signin/>
    </div>
  )
}

export default App