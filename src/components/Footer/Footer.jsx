import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./Footer.module.css"
import { Link } from 'react-router-dom'
import googleplay from '../../assets/images/googleplay-btn.svg'
import appstore from '../../assets/images/appstore-btn.svg'
export default function Footer() {
  return <>
 <footer>

 
 <div className="row">


<div className="lg:w-1/4 md:w-1/2 px-4 pb-6">
<div className='footer-logo '>
              <i className="fa-solid fa-store"></i>
              <span data-aos="fade-right" data-aos-duration="1000">Online Shop</span>
              <div className="subscribe p-0">
                <p>Got any Questions? Call us Today!</p>
                <button className='btn btn-sm'> Get In Touch </button>
              </div>
            </div>

</div>
<div className="lg:w-1/4 md:w-1/2 pl-5">
<div className='footer-contact'>
              <h3>Contact</h3>
              <p><i className="fa-solid fa-phone"></i> : <span>01029434437</span> </p>
              <p><i className="fa-regular fa-envelope"></i> : <span>m.hamada86850@gmail.com</span></p>
              <p><i className="fa-solid fa-location-dot"></i> : <span>Qalyoub city</span></p>

              <div className='footer-icons my-3 '>
                <i className="fa-brands fa-facebook "></i>
                <i className="fa-brands fa-linkedin  "></i>
                <i className="fa-brands fa-instagram  " ></i>
                <i className="fa-brands fa-twitter  "></i>
              </div>

            </div>

</div>
<div className="lg:w-1/4 md:w-1/2 pb-10 pl-10">
<div className='footer-news'>
              <h3> Links</h3>
              <Link to="/"> - All Products</Link>
              <Link to="/cart"> - Cart</Link>
              <Link to="/categories"> - Categories</Link>
            </div>

</div>

<div className="lg:w-1/4 md:w-1/2">

<div className='footer-app'>
              <h3>Download Our App Now!</h3>
              <div className='footer-img'>
                <img src={googleplay} className='w-50  my-2' alt="google play" />
                <img src={appstore} className='w-50  my-2' alt="app store" />
              </div>
            </div>
</div>


</div>


<div className='copy-right pt-5'>
        <p>Copyright 2024 developed by <span>Mohamed Mostafa</span>. All rights reserved</p>
      </div>

 </footer>
  </>
}
