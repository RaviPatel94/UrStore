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
import Description from './components/ProductDescription.jsx'
import { Provider } from 'react-redux'
import {store} from './stores'
import CartTab from './components/CartTab.jsx'
import CheckOut from './components/CheckOut.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/home',
        element:(<>
          <Navbar/>
          <Herobanner/>
          <Menu/>
          <Footer/>
          </>
        )
      },
      {
        path:'/',
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
      },
      {
        path:'description',
        element:(
          <>
          <Navbar/>
          <Description/>
          <Footer/>
          </>
        )
      },
      {
        path:'cartTab',
        element:(
          <>
          <Navbar/>
          <Herobanner/>
          <Menu/>
          <CartTab/>
          <Footer/>
          </>
        )},
      {
        path:'CheckOut',
        element:(
          <>
          <Navbar/>
          <CheckOut/>
          <Footer/>
          </>
        )}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
