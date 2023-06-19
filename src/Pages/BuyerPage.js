import React from 'react'
import { useState } from 'react'

const BuyerPage = (props) => {
  return (

    <div >
         <ul className='grid xl:grid-cols-4 xl:gap-4 sm:grid-cols-2 '>
         
         {props.ItemCards}
          
         </ul>
       
    </div>
  )
}

export default BuyerPage