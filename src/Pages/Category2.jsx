import React from 'react'
import AllProductArray from '../Data/AllProduct'
import CardComponent from '../Component/cardComponent'

const {category, products} = AllProductArray[1]

const Category2 = () => {
  return (
    <div >
    <ul className='grid xl:grid-cols-4 xl:gap-4 sm:grid-cols-2 '>
    
    {products.map((product) => {
        return(
            <CardComponent image={product.image} name={product.name} price={product.price} text="Everything you need to know" />
        )
    })}
     
    </ul>
  
</div>
  )
}

export default Category2