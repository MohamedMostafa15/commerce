import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./Navbar.module.css"
import logo from "../../assets/images/shopping cart.jpg"
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'
//import { CounterContext } from '../../Context/CounterContext'

export default function Navbar() {
  let {cart} = useContext(CartContext);
 // let{counter,setCounter} =useContext(CounterContext)
  let navigate = useNavigate();
  let{userLogin , setuserLogin} = useContext(UserContext);
  function logOut(){
    localStorage.removeItem('userToken');
    setuserLogin(null);
    navigate('/login')
  }
  return <>


 <nav className='bg-gray-100 lg:fixed top-0 right-0 left-0  text-center z-50 px-3'>
<div className='container mx-auto justify-between flex flex-col lg:flex-row items-center'>

<div className='flex flex-col lg:flex-row items-center'>
  <img width={40} src={logo} alt="fresh cart logo" />
  <h5 className='font-bold px-1'>FreshCart</h5>
  <ul className='flex flex-col lg:flex-row items-center'>
{userLogin !== null ?    <>
  <li className='mx-2 py-2 text-lg text-slate-900 font-light'><NavLink to="">Home</NavLink></li>
    <li className='mx-2 py-2 text-lg text-slate-900 font-light'><NavLink to="cart">Cart</NavLink></li>
    <li className='mx-2 py-2 text-lg text-slate-900 font-light'><NavLink to="products">Products</NavLink></li>
    {/* <li className='mx-2 py-2 text-lg text-slate-900 font-light'><NavLink to="brands">Brands</NavLink></li> */}
    <li className='mx-2 py-2 text-lg text-slate-900 font-light'><NavLink to="categories">Categories</NavLink></li>
    </> :null}


  
    
   


  </ul>
</div>
<div>
<ul className='flex flex-col lg:flex-row items-center'>
{userLogin === null ? <>
  <li className='mx-2 py-2 text-lg text-slate-900 font-light'><NavLink to="login">Login</NavLink></li>
  <li className='mx-2 py-2 text-lg text-slate-900 font-light'><NavLink to="register">Register</NavLink></li>
</> : 
<>
<li className='py-2'  ><NavLink to={'/Cart'} className='mx-2 py-2 text-lg text-slate-900 font-light cursor-pointer relative' > <i className="fa-solid fa-cart-shopping fa-xl"></i> 
<span className='bg-green-600 text-white p-1 text-sm absolute top-0 right-[-5px] rounded-xl'>{cart?.numOfCartItems}</span>
</NavLink></li>
<li className='py-2' onClick={logOut} >  <NavLink className='mx-2 py-2 text-lg text-slate-900 font-light cursor-pointer' > Logout</NavLink></li>

</>

}
   
   

   
   

{/* <li className='p-4 bg-lime-200'>{counter}</li> */}
  </ul>
</div>

</div>
 </nav>
  </>
}
