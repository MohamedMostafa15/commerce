import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./Products.module.css"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners'
import useProducts from '../../Hooks/useProducts'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'

export default function Products() {
  let [currentProductId , setCurrentProductId] = useState(0);
  let [loading , setLoading ] = useState(false);
let {addProductToCart , setCart} = useContext(CartContext);
async function addProduct(productId){
  setCurrentProductId(productId);
  setLoading(true);
let response = await addProductToCart(productId);
if(response.data.status === "success"){
  setLoading(false);
  setCart(response.data);
  toast.success(response.data.message , {
    duration:1000,
    position: 'top-center',
  })
}
else{
  setLoading(false);
  toast.error(response.data.message , {
    duration:1000,
    position: 'top-center',
  })
}
console.log(response);

}







  let {data , error , isError , isLoading , isFetching} = useProducts();
  if(isLoading){
    return <div className='py-8 flex justify-center w-full'>
    <ClimbingBoxLoader color='green'/>
    </div>
    }
    if(isError){
      return <div className='py-8 flex justify-center w-full'>
      <h3>{error}</h3>
      </div>
      }

  return <>
   <div className="row">
    {data?.data.data.map((product)=> <div key={product.id} className='lg:w-1/6 md:w-1/3 px-4'>
<div className="product py-4">
  <Link to={`/productdetails/${product.id}/${product.category.name}`}>
<img className='w-full' src={product.imageCover} alt={product.title}/>
<span className='block font-light text-green-600 mt-2'>{product.category.name}</span>
<h3 className='text-lg font-normal text-gray-800 mb-4'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
<div className="flex justify-between items-center">
  <span>{product.price} EGP</span>
  <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-400'></i> </span>
</div>

</Link>
<button onClick={()=> addProduct(product.id) } className="btn">
  {currentProductId === product.id && loading?<i className='fas fa-spin fa-spinner'></i> : "add to cart"}
  </button>
</div>
    </div> )}
    
  </div>
  </>
}
