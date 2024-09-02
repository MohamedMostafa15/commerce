import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./ProductDetails.module.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'

export default function ProductDetails() {



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










 let{id , category} = useParams();
 let [productDetails , setProductDetails] = useState(null);
 let [relatedProducts , setRelatedProducts] = useState([]);
 var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function getProductDetails(id){
  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  .then(({data})=>{
  setProductDetails(data.data);

  })
  .catch(()=>{

  })
}    

function getRelatedProducts(category){
  axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  .then(({data})=>{
  let allProducts = data.data;
  let related = allProducts.filter((product)=> product.category.name == category)
  setRelatedProducts(related);
  })
  .catch(()=>{

  })
}



useEffect(()=>{
  getProductDetails(id);
  getRelatedProducts(category);
},[id,category])

  return <>
<div className="row">
  <div className="w-1/4">

  <Slider {...settings}>
     {productDetails?.images.map((src)=> <img key={src._id} className='w-full' src={src} alt={productDetails?.title} /> )}
    </Slider>



  {/* <img className='w-full' src={productDetails?.imageCover} alt={productDetails?.title} /> */}
  </div>
  <div className="w-3/4 p-6">
  <h1 className='font-normal text-lg text-gray-950'>{productDetails?.title}</h1>
  <p className='text-gray-600 font-light mt-4'>{productDetails?.description}</p>
  <div className="flex justify-between items-center">
  <span>{productDetails?.price} EGP</span>
  <span>{productDetails?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i> </span>
</div>

<button className="btn">add to cart</button>
  </div>
</div>


<div className="row">
  {relatedProducts.map((product)=> 
     <div key={product.id} className="lg:w-1/6 md:w-1/3">
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
    </div>
  
  )}
 
</div>

  </>
}
