import axios from "axios";
 import { createContext, useEffect, useState } from "react";

 export let CartContext = createContext();

 export default function CartContextProvider(props)
 {
 
 let headers = {
    token: localStorage.getItem('userToken')
 }
 
let [cart , setCart] = useState(null);
  function getLoggedUserCart(){
 return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
       headers
    })
    
   .then((response)=> response)
   .catch((error)=> error)
    
 }

 function deleteProductItem(productId){
   return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
         headers
      })
      
     .then((response)=> response)
     .catch((error)=> error)
      
   }
  


   function deleteCart(){
      return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
            headers
         })
         
        .then((response)=> response)
        .catch((error)=> error)
         
      }




function addProductToCart( productId){
   return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {
    productId:  productId
   } ,
    {
      headers
   })
   .then((response)=> response)
   .catch((error)=> error)
}
function updateCartItemCount( productId , count){
   return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {
    count: count
   } ,
    {
      headers
   })
   .then((response)=> response)
   .catch((error)=> error)
}

function checkOut(cartId , url , formValue){
   return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}` , {
      shippingAddress: formValue
   } ,
    {
      headers
   })
   .then((response)=> response)
   .catch((error)=> error)
}

async function getCart(){
   let response = await getLoggedUserCart();
   setCart(response.data);
}

useEffect(()=>{
getCart();
},[])

 return <>
 <CartContext.Provider value={ {getLoggedUserCart , addProductToCart , updateCartItemCount , deleteProductItem , checkOut , cart , setCart , deleteCart} }>
 {props.children}
 </CartContext.Provider>
 </>


 }
























