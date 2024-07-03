import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../../Navbar/navbar'
const Beauty = () => {
  let [beauty, updateBeauty] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).
      then(res => {
        console.log(res.data)
        updateBeauty(res.data)
    })
  },[])
  return (
    <>
      <Navbar/>
      <div className='hea'>
        <h1>Beauty Products</h1>
        <div id='prod-main'>
          {
            beauty.filter(bea => bea.category.toLowerCase() === "jewelery").map(bea => {
              return (
                  <div key={bea.id} className='mak-ali'>
                  <img src={bea.image} alt="" />
                  <p>{ bea.category.toUpperCase()}</p>
                  <h4>{bea.title}</h4>
                  <p className='green'>{bea.rating.rate} | {bea.rating.count} </p>
                   <p>Price <h5> {bea.price}</h5></p>
                <div className='spa'>
                  <button>Cart</button>
                  <button>Wishlist</button>
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

export default Beauty