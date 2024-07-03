import React from 'react'
import Navbar from '../Navbar/navbar'
import Slides from '../Slides/slides'
import FtTop from '../Footer-Top/fttop'
import Footer from '../Footer/footeer'
const TheMain = () => {
  return (
      <>
          <Navbar />
          <Slides />
          <FtTop />
          <Footer/>
      </>
  )
}

export default TheMain