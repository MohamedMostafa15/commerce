import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./Cart.module.css"
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {

let {getLoggedUserCart , updateCartItemCount , deleteProductItem , setCart , deleteCart} = useContext(CartContext);
let [cartDetails , setCartDetails] = useState(null);
async function getCartItems(){
let response = await getLoggedUserCart();
console.log(response);
setCartDetails(response.data.data);
console.log(response.data.data);
console.log(response.data)
}
   
async function deleteItem(productId){
  let response = await deleteProductItem(productId);
  console.log(response);
  setCartDetails(response.data.data);
  console.log(response.data.data);
  setCart(response.data);
  }

  async function deleteUserCart(){
    
    let {data} = await deleteCart();
  
    if(data.message == 'success'){
      setCartDetails(null);
      setCart(data);
    }
    }


async function updateCartCount(productId , count){
  let response = await updateCartItemCount(productId , count);
  //console.log(response);
 setCartDetails(response.data.data);
 console.log(response.data.data);
  
  }

useEffect(()=>{
  getCartItems();
},[])

  return <>



<div className="relative overflow-x-auto sm:rounded-lg">
<h2 className='text-3xl py-5 text-green-500 text-center font-bold'>Shopping Cart</h2>
<h3 className='text-center text-slate-600 font-bolder text-lg'> Total Cart Price : {cartDetails?.totalCartPrice} EGP</h3>
  <table className="w-3/4 mx-auto my-6 text-sm text-left rtl:text-right text-green-500 dark:text-green-400">
 
    <thead className="text-xs text-green-700 uppercase bg-green-50 dark:bg-green-700 dark:text-green-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
          Product
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
          Qty
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
          Price
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {cartDetails?.products.map((product)=>
      <tr key={product.product.id} className="bg-white border-b dark:bg-green-800 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-600">
      <td className="p-4">
        <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
      </td>
      <td className="px-6 py-4 font-semibold text-green-900 dark:text-white">
        {product.product.title}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button onClick={()=>updateCartCount(product.product.id , product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
            </svg>
          </button>
          <div>
           <span>{product.count}</span>
          </div>
          <button onClick={()=>updateCartCount(product.product.id , product.count + 1)}  className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        <span>{product.price} EGP</span>
      </td>
      <td className="px-6 py-4">
        <span onClick={()=>deleteItem(product.product.id)} className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline"> <i className="fa-solid fa-trash ml-4 cursor-pointer"></i> Remove</span>
      </td>
    </tr>
      
      )}
      
    </tbody>
    

  </table>
  <div className='mx-40'>
  <Link to={'/Checkout'}>
  <button className="btn w-full bg-green-600 text-white"> CheckOut Now </button>
  </Link>
  </div>

<div className='mx-40 mt-2'>
<button onClick={()=> deleteUserCart() } className='bg-red-600  text-white  w-full px-4 py-2 rounded-lg '>
Clear Cart<i className='fas fa-trash ms-2'></i>
</button> 
 
 





</div>

  <div className='mt-3 mx-40 '>
  <Link to={'/'}>
  <h3 className="text-green-500 "> <i className="fa-solid fa-arrow-left"></i> Return To Shopping </h3>
  </Link>
  </div>
 


</div>


  </>
}

