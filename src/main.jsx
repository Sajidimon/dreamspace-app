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
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './routes/privateRoute/PrivateRoute';
import AllOrderMenu from './Dashboard/allOrderMenu/AllOrderMenu';
import UpdateProduct from './Dashboard/updateProduct/UpdateProduct';
import AllUserMenu from './Dashboard/allUserMenu/AllUserMenu';

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
        path: '/products/category/:category',
        element: <ProductCategory />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/products/category/${params.category}`)
      },
      {
        path: '/products/item/:id',
        element: <SingleProduct />,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/products/item/${params.id}`)
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
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'addProduct',
        element: <AddProductMenu />
      },
      {
        path: 'update-product/:id',
        element: <UpdateProduct />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/products/item/${params.id}`)
      },
      {
        path: 'allProduct',
        element: <AllProductMenu />
      },
      {
        path: 'allOrder',
        element: <AllOrderMenu/>
      },
      {
        path: 'allUser',
        element: <AllUserMenu />,
        loader: () => fetch('http://localhost:5000/users')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
