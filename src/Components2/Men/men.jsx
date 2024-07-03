import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../../Navbar/navbar'
const Men = () => {
  let [men, updateMen] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then(menResp => {
      console.log(menResp.data)
      updateMen(menResp.data)
    })
  }, [])
  
  return (
    <>
      <Navbar/>
      <div className='hea' >
        <h1>Men Products</h1>
           <div id='prod-main'>
        {
          men.filter(ms => ms.category.toLowerCase() === "men's clothing").map(mn => {
            return (
              <div key={mn.id} className='mak-ali'>
                <img src={mn.image} alt="" />
                <p>{mn.category.toUpperCase()}</p>
                <h4>{mn.title}</h4>
                <p className='green'>{mn.rating.rate} | {mn.rating.count}</p>
                <p>Price <h5> {mn.price}</h5></p>
                <div className='spa'>
                  <button >Cart</button>
                  <button >Wishlist</button>
                </div>
              </div>
            )
          })
        }
         </div>
      </div>
    </>
  )
}

export default Men