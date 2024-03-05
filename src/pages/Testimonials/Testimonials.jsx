import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Component/Section/SectionTitle'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Testimonials = () => {
    const [review , setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data => setReviews(data))
    })
  return (
    <section>
        <SectionTitle subheading='What our client say' heading={'Testimonials'}/>
      
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            review.map(review =><SwiperSlide key={review._id}>
                <div className=' flex flex-col items-center mx-24 my-16'>
                    <Rating style={{maxWidth: 180 }} value={review.rating}></Rating>
                    <p className='my-10'>{review.details}</p>
                    <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </section>
  )
}

export default Testimonials