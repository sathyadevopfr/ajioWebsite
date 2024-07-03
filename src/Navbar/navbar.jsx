import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Assets/ajio.jpg'
import '../Styles/navbar.css'
import Wish from '../Assets/nw.jpg'
import Cartt from '../Assets/market.png'
import { IoSearchOutline } from "react-icons/io5";

import { useState} from 'react'
const Navbar = () => {
    let [searchProduct, updateSearchProduct] = useState("")
    const navigate = useNavigate()
    const change = (e) => {
        e.preventDefault();
         navigate(`/search?query=${searchProduct}`)
        }
return (
    <>
        <div id='main'> 
        <div><Link to='/'><img src={Logo} alt="" /></Link></div>
        <div className="top-nav">
            <ul className='alim small'>
                <li>sathya</li>
                <li className='l1'><Link to='/myaccount'>My Account</Link></li>
                <li className='l2'><Link to='/signout'>Sign Out</Link></li>
                <li className='l3'><Link to='/customercare'>Customer Care</Link></li>
                <li className='l4'><Link to='/visit'> Visit AJIOLUXE</Link></li>
            </ul>
        </div>

        <div className="bottom-nav">
            <ul className='ali large'>
                <li><Link to='/men'>Men</Link></li>
                <li><Link to='/women' >WOMEN</Link></li>
                <li><Link to='/kids'>KIDS</Link></li>
                <li><Link to='/beauty'>BEAUTY</Link></li>
                <li><Link to='/homekitchen'>HOME AND KITCHEN</Link></li>
            </ul>
            <div className='to'>
             
                    <form onSubmit={change}>
                         <input type="text"  placeholder='Search AJIO' value={searchProduct} onChange={(e)=>{updateSearchProduct(e.target.value)}} />
                    <button type='submit'><IoSearchOutline className='ser'/></button>
                   </form>
          
            </div>
        </div>
        <div>
            <ul className='wis-car'>
                 <li className='heart'><Link to='/wishlist'><img src={Wish} /></Link></li>
                <li  className='heart'><Link to='/cart'><img src={Cartt} /></Link></li>
            </ul>
            </div>
    </div>
  
   
    </>
) 
}

export default Navbar;