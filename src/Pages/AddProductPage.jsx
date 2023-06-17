import React from 'react'
import garri from '../resource/garri.png'
import Select from 'react-select';
import NavbarComponent from '../Component/Material-Tailwind/NavbarComponent';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];


const AddProductPage = () => {
  return (
    
    < div className='flex flex-col '>
          <NavbarComponent/>
          <div className='max-w-screen-xl bg-green-50 px-3   h-100 mx-auto flex flex-col justify-center items-center  gap-3'>
      <label className='text-lg text-gray-700 font-bold font-sans ml-3'>Category</label>
    <Select
    placeholder='Category'
    className='w-11/12  ml-3  h-5 mb-5 xl:w-1/2'
    options={options} />
          <label className='text-lg text-gray-700 font-bold font-sans ml-3'>Product Name</label>
      <Select
      placeholder='Product Name'
    className='w-11/12  ml-3  h-5 mb-5 xl:w-1/2 '
    options={options} />

<label className='text-lg text-gray-700 font-bold font-sans ml-3'>Select Image</label>

<div className='w-1/2 h-1/2 flex justify-center items-center  bg-blue-500 p-12  '>

    <div className='bg-teal-200 relative p-10 mx-auto opacity-70'>
        <img src={garri} alt=''/>
    </div>
    <div className='w-full h-10'>
    <button type="submit" className=' absolute left-1/4 opacity-30 rounded-sm  mt-1 text-lg bg-green-950  text-white' >Upload Image</button>
    </div>
</div>

<button type="submit" className=' w-1/2 h-10 mx-auto rounded-full  mt-1 text-lg bg-green-950  text-white' >Upload Image</button>

    </div>

    </div>
    


  )
}

export default AddProductPage
 
