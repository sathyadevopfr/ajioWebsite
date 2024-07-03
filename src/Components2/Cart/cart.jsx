import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/navbar'
import axios from 'axios'
import '../../Styles/products.css'
import '../../Styles/cart.css'
const Cart = () => {
  
  let [cartItem, updateCartItems] = useState([])
 useEffect(() => {
    axios.get(`http://localhost:2020/items`)
      .then(res => { updateCartItems(res.data) }).catch(error => {
      console.error('Error fetching data:', error);
    });
  } ,[])
  
  const removeItem = (id) => {
    axios.delete(`http://localhost:2020/items/${id}`)
      .then(res =>
      {updateCartItems(pr => pr.filter(deleteProduct => deleteProduct.id !== id))})
  }
  //prevItems => prevItems.filter(item => item.id !== id)
  
    return (
      <>
        <Navbar />
        <div className='hai-cart'>
          <h1>Total Cart items {cartItem.length}</h1>
        <div id='prod-main' >
       
       
      
          {cartItem.map(val => {
            return (
              <div key={val.id} className='mak-ali carti'>
                <img src={val.image} alt="" />
                <p>{val.category.toUpperCase()}</p>
                <h4>{val.title}</h4>
                {/* <p className='green'>{val.rating.rate} | {val.rating.count}</p> */}
                <p>Price <h4> {val.price}</h4></p>
                <div className='spa'>
                  <button onClick={() => removeItem(val.id)}>Remove</button>
                                   
                </div>
              </div>
            )
          })}
        
        </div>
    </div>
      </>
    )
  }

export default Cart

// //const removeItem = (id) => {
//     axios.delete(`http://localhost:2020/items/${id}`)
//       .then(res => {
//         updateCartItems(dpr => { dpr.filter(delProduct => delProduct.id !== id) })
//       })