import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../../Navbar/navbar'
const WishList = () => {
  let [wishProd, updateWishProd] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:4040/wishItems`).then(res => {
      console.log(res.data)
      updateWishProd(res.data)
    })
      .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [])
   const removeItem = (id) => {
    axios.delete(`http://localhost:4040/wishItems/${id}`)
      .then(res =>
      {updateWishProd(pr => pr.filter(deleteProduct => deleteProduct.id !== id))})
  }
  
  return ( 
    <>
      <Navbar/>
      <div className='hai-cart'>
        <h1>My WishList</h1>
        <div id='prod-main'>
        {
          wishProd.map(ite => {
            return (
            <div key={ite.id} className='mak-ali carti'>
                <img src={ite.image} alt="" />
                <p>{ite.category.toUpperCase()}</p>
                <h4>{ite.title}</h4>
                   <span>Price <h4> {ite.price}</h4></span>
                <div className='spa'>
                  <button onClick={() => removeItem(ite.id)}>Remove</button>
                                
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

export default WishList