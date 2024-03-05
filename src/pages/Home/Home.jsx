import React from 'react'
import Banner from '../Banner/Banner'
import Catagroy from '../catagory/Catagroy'
import PopularMenu from '../PopularMenu/PopularMenu'
import FeaturedItems from '../Featured/FeaturedItems'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Catagroy/>
      <PopularMenu/>
      <FeaturedItems/>
      <Testimonials/>
    </div>
  )
}

export default Home