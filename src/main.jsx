import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Footer from './components/Footer'
import Signin from './components/Signin'
import { Menu } from './components/Menu'
import Questions from './components/Questions.jsx'
import { Herobanner } from './components/Herobanner'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:(<>
          <Navbar/>
          <Herobanner/>
          <Menu/>
          <Footer/>
          </>
        )
      },
      {
        path:'login',
        element:(
          <>
            <Signin/>
          </>
        )
      },
      {
        path:'Questions',
        element:(
          <>
            <Questions/>
          </>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
