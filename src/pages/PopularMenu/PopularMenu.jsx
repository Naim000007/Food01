import React, { useState } from 'react'
import SectionTitle from './../../Component/Section/SectionTitle';
import MenuItem from '../shared/MenuItem';

const PopularMenu = () => {
    const [menu, SetMenu] = useState([]);
    fetch('menu.json')
    .then(res=>res.json())
    .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        SetMenu(popularItems)
    })
  return (
    <section className='mb-12'>
        <SectionTitle heading="From Our Menu" subheading='Popular Item'></SectionTitle>
        <div className='grid md:grid-cols-2 gap-4 '>
            {
              menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    </section>
  )
}

export default PopularMenu