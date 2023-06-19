import React from 'react'
import ImageSlider from '../Component/imageSlider'
import NavbarComponent from '../Component/Material-Tailwind/NavbarComponent'
import Tabs from '../Component/Tabs'
import SearchComponent from '../Component/SearchComponent'
import Category1 from './Category1'
const ProductItem = () => {
  return (
    <div >
      <NavbarComponent/>
      <div className='mx-auto max-w-screen-lg bg-green-50  py-12'>
      <SearchComponent/>
      <Tabs/>
      </div>
      
    </div>
  )
}

export default ProductItem