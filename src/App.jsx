import { useState } from 'react'
import { Herobanner } from './components/Herobanner'
import { Menu } from './components/Menu'
import './App.css'
import Footer from './components/Footer'
import Signin from './components/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='whole'>
      <Herobanner />
      <Menu/>
      <Footer/>
      <Signin/>
    </div>
  )
}

export default App
