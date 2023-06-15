import React from 'react'

const FirstTab = () => {
  return (
    <body class="bg-gray-600 flex justify-center items-center h-screen">
    <div class="w-2/3 flex flex-col break-words bg-white shadow-lg rounded-lg
    overflow-hidden">
    <div class="text-gray-700 bg-gray-200 text-lg px-6 py-4 mb-0">
    The title of the card here</div>
    <div class="w-full px-6 py-4 flex justify-between items-center border-t
    border-gray-200">
    <div class="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full
    border border-gray-200 text-gray-200 font-bold">
    Under Review</div>
    <div class="text-sm">May 14, 1988</div>
    </div>
    <div class="w-full px-6 py-4 justify-between border-t border-gray-200">
    <div class="flex-1">
    <p class="border rounded-lg p-4 bg-gray-200">
    Here is a short comment about this employee.</p>
    </div>
    </div>
    <div class="rounded-b px-6 py-4 bg-gray-200">
    <div class="uppercase text-xs text-gray-600 font-bold">
    Employee</div>
    <div class="flex items-center pt-3">
    <div class="bg-blue-700 w-12 h-12 rounded-full uppercase
    font-bold flex items-center justify-center text-sm
    text-white">
    VG</div>
    <div class="ml-4"><p class="font-bold">Victor Gonzalez</p>
    <p class="text-sm text-gray-700 mt-1">Instructor</p>
    </div>
    </div>
    </div>
    </div>
   </body>
  )
}

export default FirstTab