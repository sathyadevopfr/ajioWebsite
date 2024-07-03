import React from 'react'
import Slide1 from '../Assets/sc.gif'
import Slide2 from '../Assets/warm.jpg'
import Slide3 from '../Assets/sbi.jpg'
import Slide4 from '../Assets/shirt.jpg'
import Slide5 from '../Assets/top.jpg'
import Slide6 from '../Assets/nx.jpg'
import Slide7 from '../Assets/dl.jpg'
import Slide8 from '../Assets/brands.jpg'
import Gap from '../Assets/fold/gap.jpg'
import Puma from '../Assets/fold/puma.jpg'
import Lee from '../Assets/lee.jpg'
import Ax from '../Assets/ax.jpg'
import Hot from '../Assets/hot.jpg'
import Spects from '../Assets/spe.jpg'
import Best from '../Assets/best.jpg'
import S1 from '../Assets/s1.jpg'
import S2 from '../Assets/s2.jpg'
import S3 from '../Assets/s3.jpg'
import Line from '../Assets/line.jpg'
import Levis from '../Assets/levss.jpg'
import Virat from '../Assets/virat.jpg'
import Rohit from '../Assets/rohit.jpg'
import Uspolo from '../Assets/uspolo.jpg'
import T1 from '../Assets/t1.jpg'
import T2 from '../Assets/t2.jpg'
import T3 from '../Assets/t3.jpg'
import Latest from '../Assets/latest.jpg'
import St1 from '../Assets/new fold/st.jpg'
import St2 from '../Assets/new fold/st2.jpg'
import St3 from '../Assets/new fold/st3.jpg'
import St4 from '../Assets/new fold/st4.jpg'
import Dis from '../Assets/dis.jpg'
import Dis2 from '../Assets/dis2.jpg'
import Yellow from '../Assets/yellow.jpg'
import Ajio from '../Assets/ajiocares.jpg'
import '../Styles/slide.css'

const Slides = () => {
  return (
      <>
          <div className='slide-main'>
               <div>
              <img src={Slide1} alt="" />
              
          </div>
          <div>
              <img src={Slide2} alt="" />
          </div>
          <div>
              <img src={Slide3} alt="" />
          </div>
          <div>
              <img src={Slide4} alt="" />
          </div>
          <div>
              <img src={Slide5} alt="" />
          </div>
          <div>
              <img src={Slide6} alt="" />
          </div>
          <div>
              <img src={Slide7} alt="" />
          </div>
          <div>
              <img src={Slide8} alt="" />
          </div>
          <div className='flo'>
              <div className='flow'>
                  <img src={Gap} alt="" /> 
                  <img src={Puma} alt="" /> 
                      <img src={Lee} alt="" /> 
                  <img src={Ax} alt="" /> 
                    </div>
              </div>
              <div>
                  <img src={Hot} alt="" />
              </div> 
              <div>
                  <img src={Spects} alt="" />
              </div>
              <div>
                   <img src={Best} alt="" />  
              </div>
              <div>
                  <div>
                      <img src={S1} alt="" />
                      <img src={S2} alt="" />
                        <img src={S3} alt="" />
                  </div>
              </div>
              <div>
                  
                      <img src={Line} alt="" />
              </div>
              <div>
                  <div>
                      <img src={ Levis} alt="" />
                      <img src={Virat} alt="" />
                      <img src={Rohit } alt="" />
                       <img src={Uspolo} alt="" />
                  </div>
              </div>
              <div>
                   <img src={ T1} alt="" />
                      <img src={T2} alt="" />
                      <img src={T3 } alt="" />
              </div>
              <div>
                  <img src={Latest} alt="" />
              </div>
              <div>
                  <img src={St1 } alt="" />
                  <img src={ St2} alt="" />
                  <img src={ St3} alt="" />
                  <img src={St4} alt="" />
              </div>
              <div>
                  <img src={Dis} alt="" />
              </div>
               <div>
                  <img src={Dis2} alt="" />
              </div>
               <div>
                  <img src={Yellow} alt="" />
              </div>
               <div>
                  <img src={Ajio} alt="" />
              </div>
          </div>
        
      </>
  )
}

export default Slides