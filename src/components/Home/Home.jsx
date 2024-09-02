import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./Home.module.css"
import { CounterContext } from '../../Context/CounterContext'
import RecentProducts from '../RecentProducts/RecentProducts'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import MainSlider from '../MainSlider/MainSlider'
export default function Home() {
  let {counter,userName,setCounter} = useContext(CounterContext);
  return <>
  <MainSlider/>
<CategoriesSlider/>

  <RecentProducts/>
{/*   
  <div className='py-10'>

  <h2 className='bg-lime-200'>Home {counter}</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, omnis?</p>
  </div>
  <button onClick={()=>setCounter(Math.random)} className='btn btn-danger'>click </button> */}
  </>
}
