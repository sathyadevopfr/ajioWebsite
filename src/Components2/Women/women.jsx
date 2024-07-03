import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../Navbar/navbar'
const Women = () => {
  let [women, updateWomen] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then(
      res => {
        console.log(res.data)
        updateWomen(res.data)
      })},[])
  return (
    <>
      <Navbar/>
      <div className='hea'>
        <h1>Women Products</h1>
        <div id='prod-main'>
          {
 women.filter(wmn =>  wmn.category.toLowerCase() === "women's clothing" ).map(wmn => {
              return (
                <div key={wmn.id} className='mak-ali'>
                  <img src={wmn.image} alt="" />
                  <p>{ wmn.category.toUpperCase()}</p>
                  <h4>{wmn.title}</h4>
                  <p className='green'>{wmn.rating.rate} | {wmn.rating.count} </p>
                   <p>Price <h5> {wmn.price}</h5></p>
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

export default Women