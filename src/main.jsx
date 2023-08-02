import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../src/components/Home/Home.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx'
import ProductPage from './components/Product/ProductPage.jsx'
import ErrorPage from './components/Error/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <NavigationBar />,
      }
    ]
  },
  {
    path: "products",
    element: <ProductPage />,
    children: [
      {
        path: "/products",
        element: <NavigationBar />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
