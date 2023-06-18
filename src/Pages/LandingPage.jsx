import React from 'react'
import woman from '../resource/vendor2.jpg'
import NavbarComponent from '../Component/Material-Tailwind/NavbarComponent'
const LandingPage = () => {
  return (
    <>
     <NavbarComponent/>
        <div className='max-w-screen-2xl  xl:bg-teal-50 xl:flex xl:mx-auto h-screen'>
           <div className='w-full xl:w-1/2 xl:h-full  p-5 xl:absolute right-0 '>
            <img className='w-full h-screen xl:h-full object-cover' src={woman} alt=''/>
        </div>
        <div className=' absolute xl:mt-5  xl:bg-teal-50 xl:py-10 bottom-0 w-full xl:w-1/2  h-1/2 xl:h-full  opacity-90 bg-teal-50' >
        <div className=' bg-blue-50 mt-20  xl:px-3 mx-5 xl:w-full xl:mt-20 xl:h-1/2 xl:mx-5 flex flex-col justify-center items-center h-1/4'>
            <h1 className='font-sans text-3xl text-gray-800 font-bold'>Hi, Welcome</h1>
            <p className='font-sans text-3xl text-gray-800 font-bold mb-5'>to Sellam</p>
            <p  className=' hidden xl:block  font-sans '>Sellam is a group of young and dynamic individuals who are tyring to revolutionalize the buying process <br/> by making the process of finding and ordering good seamlessly easy and enjoyable</p>
            <p className=' hidden xl:block text-green-700 font-sans xl:mb- '>Get started as</p>
        </div>
        <div className='w-full gap-2 flex justify-center items-center mt-5 xl:hidden '>
            <hr className='w-1/4 h-full bg-black'></hr>
            <p className='font-sans text-xl text-gray-800 '>Get Started</p>
            <hr className='w-1/4 h-full bg-black'></hr>

        </div>
        <div className='w-full flex justify-around  mt-5 items-center'>
            <button className='w-1/4 xl:w-1/5 h-10 bg-green-900 rounded-lg text-white text-lg uppercase'>Buyer</button>
            <button className='w-1/4 xl:w-1/5 h-10 bg-green-900 rounded-lg text-white text-lg uppercase ' >Vendor</button>
        </div>

        </div>
     
       
    </div>
    </>
       
  )
}

export default LandingPage