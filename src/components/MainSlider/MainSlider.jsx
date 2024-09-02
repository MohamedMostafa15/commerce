import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./MainSlider.module.css"
import mainSlider from '../../assets/images/slider.png'
import mainSlider1 from '../../assets/images/slider1.png'
import slide1 from '../../assets/images/slidertop.png'
import slide2 from '../../assets/images/sliderbottom.png'
import Slider from "react-slick";
export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false
  };

  return <>
<div className="row">
  <div className="w-3/4 ps-5">
  <Slider {...settings}>
  <img src={mainSlider} className='w-full h-[400px]' />
  <img src={mainSlider1} className='w-full h-[400px]' />
  <img src={slide1} className='w-full h-[400px]' />
    </Slider>
  
  </div>
  <div className="w-1/4 pe-3">
  <img src={slide1} className='w-full h-[200px]' />
  <img src={slide2} className='w-full h-[200px]' />
  </div>

</div>

  
  </>
}
