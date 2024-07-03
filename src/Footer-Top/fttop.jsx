import React from 'react'
import { BsFillBagCheckFill } from "react-icons/bs";
import Hnd from '../Assets/package.jpg'
import Quality from '../Assets/quality.jpg'
import '../Styles/fttop.css'

const FtTop = () => {
  return (
      <>
           <div id='ain'>
          <ul>
              <li><BsFillBagCheckFill className='he'/>
             <h5> EASY EXCHNAGE</h5></li>
              <li><img src={Hnd} alt="" />
              <h5>100% HANDPICKED</h5></li>
              <li> <img src={Quality} alt="" />
             <h5> ASSURED QUALITY</h5></li>
          </ul>
          </div>
         
      </>
  )
}

export default FtTop