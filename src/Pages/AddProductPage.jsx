import React from 'react'
import garri from '../resource/garri.png'
import Select from 'react-select';
import NavbarComponent from '../Component/Material-Tailwind/NavbarComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

function Fab() {
  return (
    <button className=" float-right h-10 justify-center items-center top-1/5 right-10 xl:mr-20 rounded-full bg-green-900 text-white p-4 shadow-lg hover:shadow-xl">
      <FontAwesomeIcon className='mb-6 ' icon={faPlus} />
    </button>
  );
}

const AddProductPage = () => {
  return (
    
    < div className='flex flex-col  '>
          <NavbarComponent/>
        
          <div className='max-w-screen-xl bg-teal-50 px-3 xl:w-2/5  h-100 mx-auto flex flex-col justify-center items-center  mb-10 gap-3'>
          <div className='w-full '>
          <h1 className='text-3xl text-gray-700 font-sans font-bold ml-20 '>Add Products</h1>
          <Fab/>
          </div>
            <div className='w-full xl:w-full mt-5 '>
            <label className='text-lg text-gray-700 font-bold font-sans ml-3'>Category</label>
              <Select
              placeholder='Category'
              className='w-11/12  ml-3  h-5 mb-5 xl:w-3/4'
              options={options} />
            </div>
    
          <div className='w-full mt-5 block'>
              <label className='text-lg text-gray-700 font-bold font-sans ml-3'>Product Name</label>
                <Select
                placeholder='Product Name'
              className='w-11/12  ml-3  h-5 mb-5 xl:w-3/4 '
              options={options} />

          </div>
          <div className='w-full mx-auto flex flex-col p-3 mb-3'>
        <label  className='text-lg  font-sans font-bold text-gray-900'>Price</label>
        <input className='w-full xl:w-4/5 h-10 lg:w-4/5 border-solid-3 focus-visible:  rounded' />
        </div>
     

        <div className='w-full h-full ml-5 mt-5 '>
            <label className='text-lg text-gray-700  font-bold font-sans ml-3'>Select Image</label>

            <div className='w-full h-full  flex justify-center items-center p-2 pl-10  '>

                <div className='bg-gray-300  relative p-5   opacity-70'>
                    <img src={garri} alt=''/>
                </div>
                <div className='w-full h-10'>
                <button type="button" className=' xl:ml-14  xl:z-3 absolute left-1/4 xl:left-1/3 opacity-60 p-3 rounded text-xl font-sans font-bold  mt-1  bg-green-950  text-white' >Upload Image</button>
                </div>
        </div>

  
   </div>

<button type="submit" className=' w-1/4  h-10 mx-auto rounded mb-5 mt-5 mr-10 text-xl bg-green-950  text-white' >Submit</button>

    </div>

    </div>
    


  )
}

export default AddProductPage
 
