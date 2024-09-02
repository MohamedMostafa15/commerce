import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./Checkout.module.css"
import { useFormik, yupToFormErrors } from 'formik'

import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


export default function Checkout() {
  let {checkOut} = useContext(CartContext);

  let formik = useFormik({
    initialValues:{
details:'',
phone:'',
city:''
    },
    
    onSubmit: ()=> handleCheckout('66d051dd6bbfdad42218cc3a' , 'http://localhost:5173')

  })

let [apiError,setapiError] =  useState('');
let [isLoading,setIsLoading] =  useState(false);

async function handleCheckout(cartId , url){
 let {data} = await checkOut(cartId , url , formik.values);
 if(data.status == 'success'){
  window.location.href = data.session.url;
 }
 //console.log(data.session.url);
 
}


  return <>
  <div className='py-6 max-w-xl mx-auto'>  
  <h2 className='text-3xl font-bold mb-6 text-green-600'>Checkout Now</h2>
  <form onSubmit={formik.handleSubmit}>
   
  
    

  <div className="relative z-0 w-full mb-5 group">
      <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
      <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Details:</label>
  </div>

 
 

  <div className="relative z-0 w-full mb-5 group">
      <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone:</label>
  </div>

 
  <div className="relative z-0 w-full mb-5 group">
      <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your city:</label>
  </div>
 

  <div className="flex items-center">
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
{isLoading == true ? <i className='fas fa-spinner fa-spin'></i> :'pay Now'}
</button>


  </div>

  </form>  
  </div>
  </>
}
