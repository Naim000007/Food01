import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../pages/shared/Footer'
import Navbar from '../pages/shared/Navbar'

const Mani = () => {
  return (
    <div>
        <Navbar/>
        <Outlet></Outlet>
        <Footer/>
    </div>
  )
}

export default Mani