import React from 'react'
import { Select, Option } from "@material-tailwind/react";
import garri from '../resource/garri.png'
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
const AddProductPage = () => {
  return (
    <div className='max-w-screen-xl bg-red-300 h-100 mx-auto mt-20 flex flex-col justify-center items-center gap-3'>

        <div className='bg-green-500 w-full h-full'>
            {/* <p>Add Products</p> */}
        <div className="absolute bottom-0 left-0">
        <SpeedDial placement="right" className='w-20 h-20 bg-teal-900'>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-row">
            <SpeedDialAction>
              <HomeIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <CogIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <Square3Stack3DIcon className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
        </div>
        <div class="relative inline-block w-64">
            <label className='font-sans text-gray-300 text-2xl'> Category</label>
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Cash Crops</option>
    <option>Cereals</option>
    <option>Utencils</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.95 7.95a1 1 0 01-1.41 0L10 4.91l-3.54 3.54a1 1 0 01-1.41-1.41l4-4a1 1 0 011.41 0l4 4a1 1 0 010 1.41z"/></svg>
  </div>
</div>

<div class="relative inline-block w-64">
<label className='font-sans text-gray-300 text-2xl'> Product Name</label>
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Coacoa</option>
    <option>Coffe</option>
    <option>Banana</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.95 7.95a1 1 0 01-1.41 0L10 4.91l-3.54 3.54a1 1 0 01-1.41-1.41l4-4a1 1 0 011.41 0l4 4a1 1 0 010 1.41z"/></svg>
  </div>
</div>

<div className='w-1/4 h-full bg-blue-600 p-12  '>

    <div className='bg-purple-200 p-10'>
        <img src={garri} alt=''/>
    </div>
    <div className='w-full h-10'>
    <button type="submit" className='rounded-sm  mt-1 text-lg bg-green-950  text-white' >Sign up to drive</button>
    </div>
</div>

    </div>


  )
}

export default AddProductPage
 
