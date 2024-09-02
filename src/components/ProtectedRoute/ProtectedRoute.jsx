import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./ProtectedRoute.module.css"
import { Navigate } from 'react-router-dom'
export default function ProtectedRoute(props) {
  if(localStorage.getItem('userToken') !== null)
  {
      return props.children
  }
  else{
    return <Navigate to={'/login'}/>
  }
  return <>
  <h2>ProtectedRoute</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, omnis?</p>
  <p>protected route</p>
  </>
}
