import React from 'react'
import Banner from '../Banner/Banner'
import Catagroy from '../catagory/Catagroy'
import PopularMenu from '../PopularMenu/PopularMenu'
import FeaturedItems from '../Featured/FeaturedItems'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
            <title>Bistro Boss</title>
        </Helmet>
      <Banner/>
      <Catagroy/>
      <PopularMenu/>
      <FeaturedItems/>
      <Testimonials/>
    </div>
  )
}

export default Home