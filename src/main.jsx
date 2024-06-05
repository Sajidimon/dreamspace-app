import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layouts/Main/Main';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import SingleProduct from './pages/singleProduct/SingleProduct';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Shop from './pages/shop/Shop';
import ProductCategory from './pages/productCategory/ProductCategory';
import Dashboard from './Dashboard/dashboard/Dashboard';
import AddProductMenu from './Dashboard/addProductMenu/AddProductMenu';
import AllProductMenu from './Dashboard/allProductMenu/AllProductMenu';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/admin-login',
        element: <Login />
      },
      {
        path: '/admin-register',
        element: <Register />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/product-category',
        element: <ProductCategory />
      },
      {
        path: '/single-product',
        element: <SingleProduct />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  },
  {
    path: '/admin-dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'addProduct',
        element: <AddProductMenu/>
      },
      {
        path: 'allProduct',
        element: <AllProductMenu/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
