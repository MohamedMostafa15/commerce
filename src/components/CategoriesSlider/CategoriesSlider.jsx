import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./CategoriesSlider.module.css"
import axios from 'axios'
import Slider from "react-slick";
export default function CategoriesSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: true,
  };
  

  let[categories,setCategories] = useState([]);

function getCategories(){
  axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  .then(({data})=>{
    setCategories(data.data);

  })
  .catch((error)=>{

  })
}
useEffect(()=>{
  getCategories();
},[])

  return <>
  <div className="py-5">
    <h2 className='py-4 text-xl text-gray-800 font-medium ps-5'>Shop Popular Categories</h2>
  <Slider {...settings}>
     {categories.map((category)=> <div key={category.name}>
      <img className='category-img w-full' src={category.image} alt={category.name} />
      <h3 className='mt-2 font-light'>{category.name}</h3>
     </div> )}
    </Slider>
 
  </div>
  </>
}
