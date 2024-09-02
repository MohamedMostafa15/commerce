import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Categories from './components/Categories/Categories'
import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Notefound from './components/Notefound/Notefound'
import Brands from './components/Brands/Brands'
import CounterContextProvider from './Context/CounterContext'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import Checkout from './components/Checkout/Checkout'
import Orders from './components/Orders/Orders'

let query = new QueryClient();

let routers = createHashRouter([
  {path:'/' , element:<Layout/> , children:[
    {index:true , element: <ProtectedRoute> <Home/> </ProtectedRoute>},
    {path:'categories', element: <ProtectedRoute> <Categories/> </ProtectedRoute> },
    {path:'brands', element: <ProtectedRoute>  <Brands/></ProtectedRoute>},
    {path:'cart', element: <ProtectedRoute> <Cart/> </ProtectedRoute> },
    {path:'products', element: <ProtectedRoute> <Products/> </ProtectedRoute> },
    {path:'productdetails/:id/:category', element: <ProtectedRoute> <ProductDetails/> </ProtectedRoute> },
    {path:'checkout', element: <ProtectedRoute> <Checkout/> </ProtectedRoute> },
    {path:'allorders', element: <ProtectedRoute> <Orders/> </ProtectedRoute> },
    {path:'login', element:<Login/>},
    {path:'register', element:<Register/>},
    {path:'*', element:<Notefound/>},

  ] }
])
function App() {
  const [count, setCount] = useState(0)

  return <>
  <QueryClientProvider client={query}>
  <UserContextProvider>
  <CounterContextProvider>
    <CartContextProvider>
  <RouterProvider router={routers}></RouterProvider>
  <ReactQueryDevtools initialIsOpen="false"/>
  <Toaster/>
  </CartContextProvider>
  </CounterContextProvider>
  </UserContextProvider>
  </QueryClientProvider>
  
  </>
}

export default App
