import React from 'react'
import woman from '../resource/vendor2.jpg'
const LandingPage = () => {
  return (
    <div className='max-w-screen-xl bg-red-300 mx-auto '>
           <div>
            <img src={woman} alt=''/>
        </div>
        <div className='w-full  h-screen' >
        <div className=''>
            <h1>Welcome To Sellam</h1>
            <p> Where you get the best market experinence</p>
        </div>
        <div>
            <button>Buyer</button>
            <button>Vendor</button>
        </div>

        </div>
     
       
    </div>
  )
}

export default LandingPage