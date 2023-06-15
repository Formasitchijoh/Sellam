import React from 'react'

const SecondTab = () => {
  return (
<body class="h-screen flex flex-col justify-center items-center bg-teal-900 w-screen">
 {/* <label class="text-gray-700 text-sm font-bold select-none" for="full_name">
 Full Name
 </label>
 <input
 id="full_name"
 placeholder="Enter your full name"
 class="mt-2 shadow border rounded-lg w-4/6 px-3 py-2 text-gray-700
 focus:shadow-outline focus:bg-blue-100 placeholder-indigo-300"/>
 <button class="mt-2 px-3 py-2 bg-blue-900 text-blue-100 rounded-lg">
 Save
 </button> */}

 {/* <div class='bg-teal-900 flex flex-col h-screen justify-center items-center'> */}
  <label class='text-gray-700 text-sm font-bold select-none' for='full_name'>
    Full Name
  </label>
  <input
    id='full_name'
    placeholder='Enter your Name'
    class='mt-2 w-6/6 px-3 py-2 text-gray-700 shadow border rounded-lg focus:shadow-outline focus:bg-blue-100 placeholder-indigo-300'

    ></input>    <button class='mt-2 px-3 py-2 bg-blue-900 text-blue-100 rounded-lg'>Save content</button>


 {/* </div> */}
</body>

   
   

  )
}

export default SecondTab