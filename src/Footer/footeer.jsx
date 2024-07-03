import React from 'react'
import '../Styles/footer.css'
import Net from '../Assets/netbanking.png'
import Visa from '../Assets/visa.png'
import Master from '../Assets/money.png'
import Cash from '../Assets/cod.jpg'
import { RiMastercardLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa6";
import { SiInternetarchive } from "react-icons/si";
import '../Styles/newfooter.css'
const Footer = () => {
  return (
      <>
          <div id='ftmain'>
              <div id='fle'>
                  <div className='conte'>
                        <h4>Ajio</h4>
                      <ul>
                      <li>Who We Are</li>
                          <li>Join Our Team</li>
                          <li>Terms&Conditions</li>
                          <li>We Respect Your Privacy</li>
                          <li>Fees & Payments</li>
                          <li>Returns & Payments</li>
                          <li>Promtions Terms& Conditions</li>
                      </ul>
                  </div>
                  <div className='conte'>
                       <h4>Help</h4>
                      <ul>
                       
                          <li>Track Your Order</li>
                          <li>Frequently Asked Questions</li>
                          <li>Returns</li>
                          <li>Cancellations</li>
                          <li>Payments</li>
                          <li>Customer Care</li>
                          <li>How Do I Redeem My Coupon</li>
                      </ul>
                  </div>
                  <div className='conte'>
                      <h4>Shop by</h4>
                      <ul>
                          
                          <li>Men</li>
                          <li>Women </li>
                          <li>Kids</li>
                          <li>Indie</li>
                          <li>Stores</li>
                          <li>New Arriavls</li>
                          <li>Brand Directory</li>
                          <li>Home</li>
                          <li>Collections</li>
                      </ul>
                  </div>
                  <div className='conte'>
                        <h4>Follow Us</h4>
                      <ul>

                          <li>FaceBook</li>
                          <li>Instagram-AJIOLIFE</li>
                          <li>Instaram-AJIOLUXE</li>
                          <li>Twitter</li>
                          <li>Pinterest</li>
                      </ul>
                  </div>
              </div>
              <div className='liner'>
                  <h4>Payment methods
                      <div className='dow'>
                         <SiInternetarchive className='sma'/>
                        <FaCcVisa className='sma'/>
                        < RiMastercardLine className='sma'/>
                         < BsCashCoin className='sma'/>
                      </div>
                  </h4>
              </div>
          </div>
      </>
  )
}

export default Footer