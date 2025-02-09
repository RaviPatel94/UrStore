import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Navbar from './components/navbar';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Footer from './components/Footer';
import Signin from './components/Signin';
import { Menu } from './components/Menu';
import Questions from './components/Questions.jsx';
import { Herobanner } from './components/Herobanner';
import Description from './components/ProductDescription.jsx';
import { Provider } from 'react-redux';
import { store } from './stores';
import CartTab from './components/CartTab.jsx';
import CheckOut from './components/CheckOut.jsx';
import LoginPopup from './components/loginPopUp/loginPopup.jsx';

const AppWrapper = () => {
  const [showLogin, setShowLogin] = useState(false);
  // const [loggedInUser, setLoggedInUser] = useState(null);
  const commonElements = (
    <>
      {showLogin?<LoginPopup setCurrLoginState={setCurrLoginState} setShowLogin={setShowLogin} />:<></>}
      <Menu />
      <Footer />
    </>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/home',
          element: commonElements,
        },
        {
          path: '/',
          element: commonElements,
        },
        {
          path: 'login',
          element: <Signin />,
        },
        {
          path: 'Questions',
          element: <Questions />,
        },
        {
          path: 'description',
          element: (
            <>
              <Description />
              <Footer />
            </>
          ),
        },
        {
          path: 'cartTab',
          element: (
            <>
              <Herobanner />
              <Menu />
              <CartTab />
              <Footer />
            </>
          ),
        },
        {
          path: 'CheckOut',
          element: (
            <>
              <CheckOut />
              <Footer />
            </>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <AppWrapper />
    </StrictMode>
  </Provider>
);
