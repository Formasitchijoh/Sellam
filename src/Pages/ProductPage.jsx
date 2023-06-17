import React from 'react'
import { useState } from 'react'
import garri from '../resource/garri.png'
import egusi from '../resource/egusi.jpg'
import yam from '../resource/yams.jpg'
import ImageSlider from '../Component/imageSlider'
import SelectDropDown from '../Component/SelectDropDown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Menu from '../Component/Menu'
import selectItems from '../Component/datastore'
import CardComponent from '../Component/cardComponent'
import { Card } from '@material-tailwind/react'

const ProductCarts = (props) => {
  return(
      <div className='ml-2 bg-green-100 border-5 border-teal-300 flex flex-col h-1/4 w-1/4 xl:w-1/2 xl:h-1/4 justify-center items-center rounded-lg shadow-sm '>
              <img className='w-1/2 h-20 pt-2' src={props.food} alt='garri' />
          
          <div className=''>
          <span className='text-xl font-serif font-sans text-gray-800 tracking-tighter font-semibold mt-1 '>Calabar Garri</span><br/>
              <span className='text-xl font-serif font-sans text-gray-800 tracking-tighter font-semibold mt-1'>2,000 XAF</span>
              
          </div>

      </div>
  )
}
const ProductPage = () => {
  return (

    <div >
        <ul className='grid xl:grid-cols-4 xl:gap-4 sm:grid-cols-2 '>
          <CardComponent image={yam}/>
          <CardComponent image={egusi}/>
          <CardComponent image={garri}/>
          <CardComponent image={yam}/>
          <CardComponent image={egusi}/>
          <CardComponent image={garri}/>
          <CardComponent image={yam}/>

       
      </ul>
       
    </div>
  )
}

export default ProductPage